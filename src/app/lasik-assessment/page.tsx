import type { Metadata } from "next";
import { CalendarCheck, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppFloat";
import { LeadForm } from "./LeadForm";
import { CtaTracking } from "./CtaTracking";
import "./lasik-lp.css";

const PHOTO = "/assets/img/images/dr jugal.jpg";
const PHONE = "+919820072543";
const MAPS = "https://maps.google.com/?q=Maa+Nursing+Home+Malad+West";
const GOOGLE_REVIEWS = "https://share.google/njxziK17eRXjHqV0I";
// Direct permalinks to individual Google reviews supplied by the clinic.
const GOOGLE_REVIEW_LINKS = [
  "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25OMFl6WlVkWGhUYTFkc1FsQkdUa2w0VUdkcVMwRRAB!2m1!1s0x0:0x7200122d9896a762!3m1!1s2@1:CAIQACodChtycF9oOnN0YzZUdXhTa1dsQlBGTkl4UGdqS0E%7C%7C?hl=en-GB",
  "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21ZMlVUTk5ObmQyTlRKWlUzUm9jVlZMTUUxalNHYxAB!2m1!1s0x0:0x7200122d9896a762!3m1!1s2@1:CAIQACodChtycF9oOmY2UTNNNnd2NTJZU3RocVVLME1jSGc%7C%7C?hl=en-GB",
];
const PRACTO_CLINIC =
  "https://www.practo.com/mumbai/clinic/maa-nursing-home-netra-jyoti-eyecare-centre-malad-west";

export const metadata: Metadata = {
  title: "LASIK Eligibility Assessment in Mumbai | Dr Jugal Shah",
  description:
    "Book a detailed LASIK eligibility assessment with Dr Jugal Shah at NetraJyoti Eyecare Centre, Malad West. Contoura and Bladeless Femto-LASIK options, 30+ years of experience.",
  alternates: { canonical: "/lasik-assessment" },
  // ponytail: paid-ads landing page, kept out of the index so it doesn't
  // compete with /treatments/lasik. Flip to true if it should rank organically.
  robots: { index: false, follow: true },
};

const WHY = [
  ["◎", "Consult an ophthalmologist", "An experienced ophthalmologist examines your eyes and assesses whether LASIK may be suitable."],
  ["◇", "Personalised guidance", "Recommendations follow your eye measurements, medical history and visual requirements."],
  ["◉", "Transparent discussion", "Understand benefits, limitations, risks, recovery and expected cost before deciding."],
  ["↻", "Continuity of care", "The same care team supports evaluation, procedure planning and follow-up."],
  ["⌖", "Convenient Malad location", "Accessible from Malad, Goregaon, Kandivali, Borivali and nearby western suburbs."],
  ["✦", "Established since 2002", "An experienced local eye care centre serving patients for over two decades."],
];

const STEPS = [
  ["01", "Vision and history", "We understand your current power, contact-lens use, eye symptoms, medical history and expectations."],
  ["02", "Detailed examination", "Your vision, prescription and overall eye health are examined for concerns that may affect suitability."],
  ["03", "Corneal evaluation", "Corneal curvature and thickness measurements help determine whether laser treatment may be appropriate."],
  ["04", "Personal recommendation", "Dr Shah explains your suitability, options, limitations, recovery, risks and expected cost."],
];

const FAQS = [
  ["Is LASIK suitable for everyone?", "No. Eligibility depends on age, power stability, corneal thickness and shape, overall eye health and medical history. A detailed clinical evaluation is essential."],
  ["Can LASIK completely remove my glasses?", "LASIK may reduce dependence on glasses or contact lenses in eligible patients. Perfect or permanently glasses-free vision cannot be guaranteed."],
  ["What happens during a LASIK assessment?", "Your spectacle power, eye health and corneal measurements are assessed. Dr Jugal Shah then explains suitability, available options, risks, recovery and expected costs."],
  ["How much does LASIK cost in Mumbai?", "Cost depends on the recommended procedure, technology, investigations and individual clinical requirements. A personalised estimate follows the eye evaluation."],
  ["When can I return to work?", "This varies by procedure, recovery and the nature of your work. Many patients may return within a few days, but you should follow your doctor’s advice."],
  ["What if I am not eligible for LASIK?", "The ophthalmologist may discuss another vision-correction option or recommend continuing with glasses or contact lenses, based on your clinical findings."],
];

const REVIEWS = [
  {
    initial: "K",
    tone: "gold",
    name: "Khushi Doshi",
    meta: "Google Review · LASIK",
    source: "G",
    quote:
      "“I got my LASIK surgery done yesterday, and the entire experience was honestly much smoother than I expected. The procedure took barely 15 minutes. Dr. Jugal was incredibly kind and reassuring throughout — you can tell he’s very experienced. By the evening I could already see clearly…”",
    href: GOOGLE_REVIEW_LINKS[0],
    cta: "Read more on Google →",
  },
  {
    initial: "M",
    tone: "gold",
    name: "Madhav Aware",
    meta: "Google Review · LASIK",
    source: "G",
    quote:
      "“Before the procedure the doctor clearly explained the process. By the very next day I noticed a significant improvement — no pain, swelling or discomfort. My vision has now returned to normal and being able to see clearly without glasses has made a big difference in my daily life…”",
    href: GOOGLE_REVIEW_LINKS[1],
    cta: "Read more on Google →",
  },
  {
    initial: "A",
    tone: "teal",
    name: "Adil Ansari",
    meta: "Verified Practo story · LASIK",
    source: "Practo",
    quote:
      "“Dr Jugal cleared all my LASIK doubts in a logical and scientific way. His experience and kind words changed my perception towards the surgery.”",
    href: PRACTO_CLINIC,
    cta: "Read source →",
  },
  {
    initial: "M",
    tone: "blue",
    name: "Mamta Khatri",
    meta: "Verified Practo story · Cataract",
    source: "Practo",
    quote:
      "“Dr Shah was patient, examined my father carefully and explained the medication and aftercare. We were very satisfied with the treatment and follow-up.”",
    href: "https://www.practo.com/mumbai/doctor/dr-jugal-shah-ophthalmologist-7",
    cta: "Read source →",
  },
  {
    initial: "J",
    tone: "gold",
    name: "Jayesh Mistry",
    meta: "Google Review · Cataract",
    source: "G",
    quote:
      "“Dr Jugal Shah detected my cataract at a screening camp. All arrangements were perfect. Thank you all.”",
    href: GOOGLE_REVIEWS,
    cta: "View Google reviews →",
  },
];

// ponytail: shortcodes only — /p/<code>/ works for reels too, so no per-item type field.
const VIDEOS = [
  "DXG_Up9FvwH",
  "DRe2_LwCCBK",
  "DOnrVYwD1dl",
  "DN92LVlCMUr",
  "DLXYIi9o6WK",
];

export default function LasikAssessmentPage() {
  return (
    <main className="lasik-lp">
      <CtaTracking />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="NetraJyoti Eyecare Centre home">
          <span className="eye-mark">
            <i />
          </span>
          <span>
            <strong>NetraJyoti Eyecare Centre</strong>
            <small>Maa Nursing Home</small>
          </span>
        </a>
        <div className="header-actions">
          <span className="location">⌖ Malad West, Mumbai</span>
          <a className="call-link" href={`tel:${PHONE}`}>
            ☎ 98200 72543
          </a>
          <a className="button outline" href="#book">
            Book Assessment
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="top">
        <div className="hero-copy">
          <span className="heritage">✦ Eye care in Mumbai since 2002</span>
          <h1>
            Considering <em>LASIK Surgery</em> in Mumbai?
          </h1>
          <p className="hero-flag">
            Trusted for Complex Eye Surgeries When Other Doctors Refused
          </p>
          <p className="hero-lead">
            Get a detailed LASIK eligibility assessment with Dr Jugal Shah, Senior Ophthalmologist
            and Refractive Surgeon with over 30 years of experience.
          </p>
          <ul className="check-list">
            <li>15 Min Painless Surgery</li>
            <li>Cashless Treatment Available</li>
            <li>
              <a href="#reviews">2,500+ Reviews on Google →</a>
            </li>
            <li>Personalised eye and corneal evaluation</li>
            <li>Contoura and Bladeless Femto-LASIK options</li>
            <li>Clear guidance on suitability, risks and recovery</li>
          </ul>
          <div className="hero-actions">
            <a className="button primary" href="#book">
              Book LASIK Assessment
            </a>
            <a className="button secondary" href={`tel:${PHONE}`}>
              Call Eye Care Team
            </a>
          </div>
          <p className="micro-trust">A recommendation is made only after clinical evaluation.</p>
        </div>

        <div className="doctor-visual">
          <div className="photo-wrap">
            <img src={PHOTO} alt="Dr Jugal Shah, Senior Consulting Ophthalmologist" />
          </div>
          <div className="doctor-badge">
            <span className="seal">✦</span>
            <span>
              <strong>Dr Jugal Shah</strong>
              <small>M.S., D.N.B., D.O.M.S., F.C.P.S.</small>
              <b>Senior Consulting Ophthalmologist</b>
            </span>
          </div>
        </div>

        <LeadForm compact />

        <div className="proof-ribbon">
          <div>
            <span className="proof-icon">◷</span>
            <p>
              <small>Over</small>
              <strong>30+ Years</strong>
              <span>Ophthalmology experience</span>
            </p>
          </div>
          <div className="featured-proof">
            <span className="laurel">❬</span>
            <p>
              <strong>99,000+</strong>
              <span>Surgeries performed*</span>
            </p>
            <span className="laurel right">❭</span>
          </div>
          <div>
            <span className="proof-icon">⌂</span>
            <p>
              <small>Established</small>
              <strong>Since 2002</strong>
              <span>Eye care centre in Malad</span>
            </p>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="intro section">
        <div className="eyebrow">Suitability before surgery</div>
        <h2>Could LASIK Be Suitable for Your Eyes?</h2>
        <p className="section-lead">
          LASIK can help some patients reduce their dependence on glasses or contact lenses.
          Eligibility depends on more than spectacle power. The doctor also checks your cornea,
          general eye health, age, medical history and lifestyle.
        </p>
        <div className="eligibility-grid">
          <article className="card positive">
            <h3>You may be considered if you</h3>
            <ul>
              <li>Are 18 years of age or older</li>
              <li>Have reasonably stable spectacle power</li>
              <li>Have suitable corneal thickness and shape</li>
              <li>Have healthy eyes without an active infection</li>
              <li>Have realistic expectations</li>
            </ul>
          </article>
          <article className="card caution">
            <h3>Another option may be advised if</h3>
            <ul>
              <li>Your cornea is too thin or irregular</li>
              <li>You have severe dry eye or an active condition</li>
              <li>You have cataract or age-related eye changes</li>
              <li>You are pregnant or breastfeeding</li>
              <li>Your clinical findings make LASIK unsuitable</li>
            </ul>
          </article>
        </div>
        <p className="clinical-note">
          Final eligibility can only be confirmed by the ophthalmologist after a complete
          examination.
        </p>
      </section>

      {/* DOCTOR */}
      <section className="doctor-section section" id="doctor">
        <div className="doctor-portrait">
          <img src={PHOTO} alt="Dr Jugal Shah with ophthalmic examination equipment" />
          <span>Eye care since 1992</span>
        </div>
        <div className="doctor-story">
          <div className="eyebrow">Meet your ophthalmologist</div>
          <h2>Meet Dr Jugal Shah</h2>
          <p>
            Dr Jugal Shah is a Senior Consulting Ophthalmologist and refractive surgeon. He began
            his ophthalmology career in 1992 and co-founded Maa Nursing Home &amp; NetraJyoti
            Eyecare Centre in 2002.
          </p>
          <div className="credentials">
            <strong>M.S.</strong>
            <strong>D.N.B.</strong>
            <strong>D.O.M.S.</strong>
            <strong>F.C.P.S.</strong>
          </div>
          <blockquote>
            “The first step is not selecting a LASIK package. It is understanding whether
            vision-correction surgery is appropriate for your eyes.”
          </blockquote>
          <a className="text-link" href="#book">
            Book a consultation with Dr Jugal Shah →
          </a>
        </div>
        <aside className="surgery-stat">
          <small>Clinical experience includes</small>
          <strong>99,000+</strong>
          <span>Surgeries performed*</span>
          <p>Extensive surgical experience applied to every assessment.</p>
        </aside>
      </section>

      {/* PROCESS */}
      <section className="process-section section">
        <div className="eyebrow">Your LASIK assessment</div>
        <h2>What Happens During Your LASIK Assessment?</h2>
        <div className="steps">
          {STEPS.map(([num, title, body]) => (
            <article key={num}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* OPTIONS */}
      <section className="options-section section">
        <div className="options-copy">
          <div className="eyebrow">Personalised vision correction</div>
          <h2>The Right Procedure Depends on Your Eyes</h2>
          <p>
            A newer or more expensive procedure is not automatically the right choice. The
            recommendation depends on your spectacle power, corneal measurements, eye health, age,
            lifestyle and clinical findings.
          </p>
          <a className="button primary" href="#book">
            Discuss My Options
          </a>
        </div>
        <div className="option-cards">
          <article>
            <span>01</span>
            <h3>Contoura LASIK</h3>
            <p>Topography-guided vision correction planned using detailed corneal measurements.</p>
            <small>Suitability subject to clinical evaluation</small>
          </article>
          <article>
            <span>02</span>
            <h3>Bladeless Femto-LASIK</h3>
            <p>A femtosecond laser creates the corneal flap before personalised laser correction.</p>
            <small>Suitability subject to clinical evaluation</small>
          </article>
        </div>
      </section>

      {/* WHY */}
      <section className="why-section section">
        <div className="eyebrow">Why NetraJyoti</div>
        <h2>Why Patients Choose Our Eye Care Centre</h2>
        <div className="why-grid">
          {WHY.map(([icon, title, body]) => (
            <article key={title}>
              <span>{icon}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* COST */}
      <section className="cost-section section">
        <div>
          <div className="eyebrow light">Understanding the cost</div>
          <h2>LASIK Cost in Mumbai</h2>
          <p>
            Cost depends on the procedure advised, the technology used, required tests and your
            clinical findings. After the evaluation, our team explains the recommended option and
            estimated cost.
          </p>
          <a className="button light-button" href="#book">
            Get a Personalised Estimate
          </a>
        </div>
        <ul>
          <li>Procedure recommended</li>
          <li>Technology used</li>
          <li>Pre-procedure investigations</li>
          <li>Individual clinical requirements</li>
          <li>Care and follow-up included</li>
        </ul>
      </section>

      {/* SOCIAL PROOF */}
      <section className="social-proof section" id="reviews">
        <div className="reviews-title">
          <div className="eyebrow">Verified patient trust</div>
          <h2>Patient Experiences With Dr Jugal Shah</h2>
          <p>
            Independent patient stories about consultation, explanation, surgery and follow-up care.
          </p>
        </div>
        <div className="ratings-band">
          <a href={GOOGLE_REVIEWS} target="_blank" rel="noreferrer">
            <span className="google-g">G</span>
            <strong>2,500+</strong>
            <span>Google reviews</span>
            <small>Read on Google →</small>
          </a>
          <a href={PRACTO_CLINIC} target="_blank" rel="noreferrer">
            <span className="practo-p">P</span>
            <strong>5.0</strong>
            <span>603 patient stories on Practo</span>
            <small>View verified stories →</small>
          </a>
        </div>
        <div className="video-title">
          <div className="eyebrow">Real hospital content</div>
          <h2>Watch Patient and Doctor Videos</h2>
          <p>Stories and educational content published by Maa Nursing Home.</p>
        </div>
        <div className="video-grid">
          {VIDEOS.map((id) => (
            <article className="insta-card" key={id}>
              <iframe
                title="Patient video"
                src={`https://www.instagram.com/p/${id}/embed/captioned/`}
                loading="lazy"
                allow="clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
              <a href={`https://www.instagram.com/p/${id}/`} target="_blank" rel="noreferrer">
                Watch on Instagram ↗
              </a>
            </article>
          ))}
        </div>
        <p className="consent-note">
          Patient videos should be used in paid advertising only where documented promotional
          consent is available. Individual experiences and outcomes vary.
        </p>

        <div className="reviews-grid">
          {REVIEWS.map((r) => (
            <article className="review-card" key={r.name}>
              <div className="review-top">
                <span className={`avatar ${r.tone}`}>{r.initial}</span>
                <p>
                  <strong>{r.name}</strong>
                  <small>{r.meta}</small>
                </p>
                <b className={r.source === "G" ? "google-mini" : undefined}>{r.source}</b>
              </div>
              <div className="stars">★★★★★</div>
              <blockquote>{r.quote}</blockquote>
              <a href={r.href} target="_blank" rel="noreferrer">
                {r.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* BENEFITS / RISKS */}
      <section className="balanced-section section">
        <div>
          <div className="eyebrow">Before you decide</div>
          <h2>Benefits, Limitations and Possible Risks</h2>
          <p>
            For eligible patients, LASIK may reduce dependence on glasses and make daily activities
            more convenient. It is a day-care surgical procedure. However, it cannot guarantee
            perfect vision.
          </p>
          <p>
            Possible concerns include dryness, glare, halos, light sensitivity and fluctuating
            vision. Under-correction, over-correction and healing-related complications can also
            occur.
          </p>
          <p className="clinical-note">
            Dr Jugal Shah will discuss the risks relevant to your eyes before any procedure is
            planned.
          </p>
        </div>
        <div className="recovery-card">
          <span>Aftercare</span>
          <h3>Recovery is individual</h3>
          <p>
            Many patients may notice clearer vision relatively soon, although early fluctuations can
            occur. Follow your doctor’s advice on eye drops, screen use, driving, exercise, water
            exposure and follow-up visits.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section section">
        <div className="eyebrow">Common questions</div>
        <h2>LASIK FAQs</h2>
        <div className="faqs">
          {FAQS.map(([q, a], i) => (
            <details key={q} open={i === 0}>
              <summary>
                {q}
                <span>+</span>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* LOCATION */}
      <section className="location-section section">
        <div>
          <div className="eyebrow">Visit us in Malad West</div>
          <h2>NetraJyoti Eyecare Centre</h2>
          <p>
            Himachal Building, S.V. Road,
            <br />
            Opposite Sundar Nagar,
            <br />
            Malad West, Mumbai 400064
          </p>
          <p>
            <strong>Monday to Friday:</strong> 9:00 AM to 6:00 PM
            <br />
            <strong>Saturday:</strong> 9:00 AM to 2:00 PM
          </p>
          <div className="hero-actions">
            <a className="button primary" href={MAPS} target="_blank" rel="noreferrer">
              Get Directions
            </a>
            <a className="button secondary" href={`tel:${PHONE}`}>
              Call 98200 72543
            </a>
          </div>
        </div>
        <div className="map-card">
          <span>⌖</span>
          <strong>Malad West</strong>
          <p>Conveniently located on S.V. Road, opposite Sundar Nagar.</p>
          <a href={MAPS} target="_blank" rel="noreferrer">
            Open in Google Maps →
          </a>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta section" id="book">
        <div>
          <div className="eyebrow light">Book an appointment</div>
          <h2>Find Out Whether LASIK Is Suitable for You</h2>
          <p>
            Meet Dr Jugal Shah for an eye examination and a clear explanation of your
            vision-correction options.
          </p>
          <div className="mini-doctor">
            <img src={PHOTO} alt="Dr Jugal Shah" />
            <span>
              <strong>Dr Jugal Shah</strong>
              <small>M.S., D.N.B., D.O.M.S., F.C.P.S.</small>
              <b>30+ years of ophthalmology experience</b>
            </span>
          </div>
        </div>
        <LeadForm />
      </section>

      <footer>
        <strong>Maa Nursing Home &amp; NetraJyoti Eyecare Centre</strong>
        <span>© 2026 | Malad West, Mumbai</span>
        <nav className="footer-links" aria-label="Legal and contact">
          <a href="/terms">Privacy Policy &amp; Terms</a>
          <a href="/contact">Contact</a>
          <a href={MAPS} target="_blank" rel="noreferrer">
            Find Us
          </a>
        </nav>
        <p>
          *99,000+ surgeries is a figure stated by the hospital. It is not the number of
          LASIK procedures. Treatment suitability, recovery and outcomes vary by patient.
        </p>
      </footer>

      <nav className="mobile-bar" aria-label="Quick appointment actions">
        <a href={`tel:${PHONE}`}>
          <Phone aria-hidden="true" />
          <span>Call</span>
        </a>
        <a
          href="https://wa.me/919820072543?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20a%20LASIK%20eligibility%20assessment%20with%20Dr%20Jugal%20Shah."
          target="_blank"
          rel="noreferrer"
        >
          <WhatsAppIcon />
          <span>WhatsApp</span>
        </a>
        <a href="#book">
          <CalendarCheck aria-hidden="true" />
          <span>Book</span>
        </a>
      </nav>
    </main>
  );
}
