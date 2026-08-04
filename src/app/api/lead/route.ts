// Forwards LASIK landing-page leads to a Google Sheet so we capture them even
// when the patient never hits send in WhatsApp.
// Setup: Sheet → Extensions → Apps Script → paste doPost below → Deploy as Web
// app (execute as me, access "Anyone") → put the /exec URL in .env.local as
// SHEET_WEBHOOK_URL.
//
//   function doPost(e) {
//     var d = JSON.parse(e.postData.contents);
//     SpreadsheetApp.getActiveSheet().appendRow([d.ts, d.name, d.mobile, d.age, d.date]);
//     return ContentService.createTextOutput("ok");
//   }

const clean = (v: unknown) => String(v ?? "").trim().slice(0, 120);

export async function POST(req: Request) {
  const url = process.env.SHEET_WEBHOOK_URL;
  if (!url) return new Response("not configured", { status: 503 });

  const body = await req.json().catch(() => null);
  if (!body) return new Response("bad request", { status: 400 });

  const lead = {
    ts: new Date().toISOString(),
    name: clean(body.name),
    mobile: clean(body.mobile),
    age: clean(body.age),
    date: clean(body.date),
  };
  if (!lead.name || !lead.mobile) return new Response("bad request", { status: 400 });

  // ponytail: fire-and-forget, no retry queue. Add one if Sheets outages start
  // costing leads — WhatsApp is still the primary channel.
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });
    // fetch doesn't throw on 4xx/5xx — check, or a broken webhook looks fine.
    if (!res.ok) console.error(`lead webhook ${res.status} for ${lead.mobile}`);
  } catch (err) {
    console.error("lead webhook failed", lead.mobile, err);
  }
  return new Response(null, { status: 204 });
}
