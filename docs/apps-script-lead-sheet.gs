// Run this once from the editor to trigger the OAuth consent screen.
// An unauthorized script 403s every anonymous POST before doPost ever runs.
function authorize() {
  SpreadsheetApp.getActiveSheet().getName();
}

function doPost(e) {
  var d = JSON.parse(e.postData.contents);
  SpreadsheetApp.getActiveSheet().appendRow([d.ts, d.name, d.mobile, d.age, d.date]);
  return ContentService.createTextOutput("ok");
}
