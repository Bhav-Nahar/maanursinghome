export interface Treatment {
  slug: string;
  title: string;
  department: string;
  category: "Eye Care" | "IVF & Infertility" | "Gynecology & Obstetrics" | "Laparoscopy & Surgery";
  summary: string;
  content: string[];
  benefits: string[];
}

export const TREATMENTS_DATA: Record<string, Treatment> = {
  cataract: {
    slug: "cataract",
    title: "Micro-Incision Cataract Surgery (MICS)",
    department: "Eye Care (Ophthalmology)",
    category: "Eye Care",
    summary: "Advanced stitchless cataract removal with premium monofocal, multifocal, and toric Intraocular Lens (IOL) implants by Dr. Jugal Shah.",
    content: [
      "Cataract is a clouding of the eye's natural crystalline lens, leading to blurred or dimmed vision. Micro-Incision Cataract Surgery (MICS) is the modern, stitchless, painless surgical standard.",
      "During the 15-minute procedure under topical anesthesia, the clouded lens is emulsified using ultrasonic energy and replaced with a foldable intraocular lens (IOL).",
      "Patients experience rapid visual recovery and can return to light daily activities within 24-48 hours."
    ],
    benefits: [
      "No stitches, no injections, no eye patch required in most cases",
      "Rapid visual rehabilitation",
      "Premium IOL options (Monofocal, Multifocal, EOF, Toric)",
      "Performed in sterile modular operation theatres"
    ]
  },
  glaucoma: {
    slug: "glaucoma",
    title: "Glaucoma Screening & Laser Surgery",
    department: "Eye Care (Ophthalmology)",
    category: "Eye Care",
    summary: "Early diagnosis and medical/laser management of Intraocular Pressure (IOP) to prevent irreversible optical nerve damage.",
    content: [
      "Glaucoma is often termed the 'silent thief of sight' because it gradually damages the optic nerve without early pain or warning symptoms.",
      "We provide comprehensive screening including Tonometry, Gonioscopy, Visual Field Analysis (Perimetry), and OCT nerve evaluation.",
      "Treatment options include targeted pressure-lowering eye drops, Selective Laser Trabeculoplasty (SLT), and Trabeculectomy surgery when required."
    ],
    benefits: [
      "Early optical nerve preservation",
      "In-house computerized visual field testing",
      "Laser and surgical intraocular pressure control"
    ]
  },
  retina: {
    slug: "retina",
    title: "Retina Care & Vitreoretinal Procedures",
    department: "Eye Care (Ophthalmology)",
    category: "Eye Care",
    summary: "Specialized examination and treatment for diabetic retinal damage, macular degeneration, and retinal tears.",
    content: [
      "The retina is the light-sensitive neural tissue lining the back of the eye. Diabetes and high blood pressure can cause retinal swelling and bleeding.",
      "Dr. Jugal Shah provides detailed Fundus examination, OCT imaging, anti-VEGF intravitreal injections, and retinal laser photocoagulation."
    ],
    benefits: [
      "Comprehensive diabetic eye screening",
      "Intravitreal injection protocols",
      "Retinal laser photocoagulation"
    ]
  },
  "diabetic-retinopathy": {
    slug: "diabetic-retinopathy",
    title: "Diabetic Retinopathy Management",
    department: "Eye Care (Ophthalmology)",
    category: "Eye Care",
    summary: "Comprehensive diabetic retinal evaluation, anti-VEGF therapy, and laser photocoagulation to preserve sight.",
    content: [
      "Diabetic Retinopathy develops when persistent high blood sugar levels damage micro-vessels in the retina.",
      "Annual dilated eye examinations allow early detection before permanent visual impairment occurs."
    ],
    benefits: [
      "Early micro-vascular damage detection",
      "Targeted laser photocoagulation",
      "Anti-VEGF therapy protocols"
    ]
  },
  "computer-vision-syndrome": {
    slug: "computer-vision-syndrome",
    title: "Computer Vision Syndrome (CVS)",
    department: "Eye Care (Ophthalmology)",
    category: "Eye Care",
    summary: "Diagnosis and relief for digital eye strain, dryness, fatigue, and headaches caused by prolonged screen exposure.",
    content: [
      "Extended screen time reduces blink frequency, causing tear film evaporation, digital fatigue, blurred vision, and neck strain.",
      "Treatment combines ergonomic advice, blue-filter prescription lenses, and customized lubricating drops."
    ],
    benefits: [
      "Tear film stability assessment",
      "Custom ergonomic & spectacle guidance",
      "Relief from digital fatigue"
    ]
  },
  "dry-eyes": {
    slug: "dry-eyes",
    title: "Dry Eye Syndrome Evaluation & Treatment",
    department: "Eye Care (Ophthalmology)",
    category: "Eye Care",
    summary: "Comprehensive tear film analysis, punctal plug occlusion, and medical therapy for chronic eye dryness.",
    content: [
      "Dry Eye Syndrome occurs when the eye produces insufficient tears or when tear quality deteriorates rapidly.",
      "Symptoms include burning sensation, redness, foreign body sensation, and intermittent watery eyes."
    ],
    benefits: [
      "Schirmer test & Tear Break Up Time (TBUT) analysis",
      "Preservative-free lubricating drops",
      "Meibomian gland dysfunction management"
    ]
  },
  "retinal-detachment": {
    slug: "retinal-detachment",
    title: "Retinal Detachment Evaluation & Care",
    department: "Eye Care (Ophthalmology)",
    category: "Eye Care",
    summary: "Urgent clinical assessment for sudden flashes of light, floaters, or curtain-like vision loss.",
    content: [
      "Retinal detachment is a medical emergency where the retina peels away from underlying supportive tissue.",
      "Immediate surgical or laser intervention is vital to restore structural attachment and salvage vision."
    ],
    benefits: [
      "Emergency retinal screening",
      "Laser barrage for retinal breaks & tears",
      "Prompt vitrectomy referral protocols"
    ]
  },
  squint: {
    slug: "squint",
    title: "Squint (Strabismus) Correction",
    department: "Eye Care (Ophthalmology)",
    category: "Eye Care",
    summary: "Surgical and non-surgical alignment of misaligned eyes for adults and children.",
    content: [
      "Squint occurs when the eyes point in different directions. It can affect depth perception and lead to lazy eye (amblyopia).",
      "Treatment involves corrective glasses, prism lenses, vision therapy, or eye muscle surgery."
    ],
    benefits: [
      "Binocular vision restoration",
      "Cosmetic & functional eye alignment",
      "Pediatric amblyopia prevention"
    ]
  },
  armd: {
    slug: "armd",
    title: "Age-Related Macular Degeneration (ARMD)",
    department: "Eye Care (Ophthalmology)",
    category: "Eye Care",
    summary: "Advanced diagnostic imaging and anti-VEGF treatment for dry and wet macular degeneration in senior citizens.",
    content: [
      "ARMD affects the central portion of the retina (macula), causing loss of sharp, straight-ahead vision.",
      "Wet ARMD responds favorably to periodic intravitreal anti-VEGF injections."
    ],
    benefits: [
      "OCT macular mapping",
      "Intravitreal injection protocols",
      "Low vision aids counseling"
    ]
  },
  "cornea-dsaek": {
    slug: "cornea-dsaek",
    title: "Cornea Services & DSAEK Surgery",
    department: "Eye Care (Ophthalmology)",
    category: "Eye Care",
    summary: "Specialized corneal ulcer management, keratoconus screening, and partial-thickness corneal transplantation (DSAEK).",
    content: [
      "Corneal diseases affect the clear outer layer of the eye. Descemet Stripping Automated Endothelial Keratoplasty (DSAEK) is a partial-thickness transplant technique.",
      "DSAEK preserves the healthy outer cornea, resulting in faster visual recovery than full-thickness corneal transplants."
    ],
    benefits: [
      "Partial-thickness corneal transplantation",
      "Stitchless endothelial graft placement",
      "Keratoconus screening & C3R counseling"
    ]
  },
  "paediatric-eye": {
    slug: "paediatric-eye",
    title: "Paediatric Ophthalmology & Child Eye Care",
    department: "Eye Care (Ophthalmology)",
    category: "Eye Care",
    summary: "Child-friendly eye exams, congenital cataract evaluation, refractive error correction, and amblyopia treatment.",
    content: [
      "Early childhood eye examinations prevent long-term lazy eye (amblyopia) and support academic development.",
      "Dr. Jugal Shah provides gentle, comprehensive eye assessments tailored for infants and young children."
    ],
    benefits: [
      "Gentle pediatric refraction",
      "Amblyopia patch therapy",
      "Congenital eye disorder screening"
    ]
  },
  oculoplasty: {
    slug: "oculoplasty",
    title: "Oculoplasty & Eyelid Surgery",
    department: "Eye Care (Ophthalmology)",
    category: "Eye Care",
    summary: "Reconstructive and aesthetic surgery of the eyelids, tear duct (dacrocystitis), and eye socket.",
    content: [
      "Oculoplastic surgery combines ophthalmic precision with plastic surgery principles for eyelid drooping (ptosis), tear duct blockage, and orbital lesions."
    ],
    benefits: [
      "Drooping eyelid (Ptosis) repair",
      "Dacryocystorhinostomy (DCR) tear duct surgery",
      "Cosmetic eyelid rejuvenation"
    ]
  },
  lasik: {
    slug: "lasik",
    title: "LASIK Vision Correction",
    department: "Eye Care (Ophthalmology)",
    category: "Eye Care",
    summary: "Dump your glasses forever with safe Contoura and Bladeless Femto-LASIK procedures by Dr. Jugal Shah.",
    content: [
      "LASIK is a quick, 15-minute laser procedure that reshapes the cornea to eliminate dependence on glasses or contacts.",
      "Most patients experience sharp visual clarity within 24 to 48 hours."
    ],
    benefits: [
      "Freedom from glasses and contact lenses",
      "15-minute painless day-care procedure",
      "Rapid 24-48 hour recovery"
    ]
  },
  ivf: {
    slug: "ivf",
    title: "In-Vitro Fertilization (IVF) & ICSI",
    department: "IVF & Fertility Wing",
    category: "IVF & Infertility",
    summary: "Advanced assisted reproductive technology (ART) led by Dr. Jyoti Shah to help couples achieve successful pregnancies.",
    content: [
      "In-Vitro Fertilization (IVF) involves fertilizing an egg with sperm outside the body in a specialized laboratory environment before transferring the embryo into the uterus.",
      "Intracytoplasmic Sperm Injection (ICSI) is utilized in cases of severe male infertility to inject a single healthy sperm directly into the egg cell.",
      "Our fertility wing provides compassionate care, hormonal stimulation, egg retrieval, and embryo cryopreservation."
    ],
    benefits: [
      "High success rate protocols",
      "State-of-the-art IVF laboratory environment",
      "Comprehensive male & female fertility evaluation"
    ]
  },
  infertility: {
    slug: "infertility",
    title: "Comprehensive Infertility Evaluation",
    department: "IVF & Fertility Wing",
    category: "IVF & Infertility",
    summary: "Detailed diagnostic evaluation for male and female fertility factors led by Dr. Jyoti Shah.",
    content: [
      "Infertility evaluation includes hormonal testing, follicular tracking, tubal patency evaluation (HSG/Laparoscopy), and semen analysis.",
      "Individualized treatment plans range from simple ovulation induction to advanced ART."
    ],
    benefits: [
      "Comprehensive couple evaluation",
      "Follicular monitoring & ovulation tracking",
      "Affordable fertility treatment packages"
    ]
  },
  iui: {
    slug: "iui",
    title: "Intrauterine Insemination (IUI)",
    department: "IVF & Fertility Wing",
    category: "IVF & Infertility",
    summary: "Less invasive assisted conception procedure washing and placing active sperm directly into the uterus during ovulation.",
    content: [
      "IUI is a simple day-care fertility procedure often recommended as an initial treatment for unexplained infertility or mild male factor issues."
    ],
    benefits: [
      "Simple, non-surgical day-care procedure",
      "Cost-effective initial fertility option",
      "Precise ovulation timing"
    ]
  },
  icsi: {
    slug: "icsi",
    title: "Intracytoplasmic Sperm Injection (ICSI)",
    department: "IVF & Fertility Wing",
    category: "IVF & Infertility",
    summary: "Micro-manipulation technique injecting a single high-quality sperm cell into the egg to overcome male factor infertility.",
    content: [
      "ICSI significantly enhances fertilization rates in cases of low sperm count, poor motility, or previous IVF fertilization failures."
    ],
    benefits: [
      "High fertilization success in male factor infertility",
      "Utilized alongside TESA/PESA sperm retrieval",
      "Advanced micromanipulation technology"
    ]
  },
  tesapesa: {
    slug: "tesapesa",
    title: "Surgical Sperm Retrieval (TESA / PESA)",
    department: "IVF & Fertility Wing",
    category: "IVF & Infertility",
    summary: "Minimal aspiration techniques to extract viable sperm directly from the testicles or epididymis for obstructive azoospermia.",
    content: [
      "PESA (Percutaneous Epididymal Sperm Aspiration) and TESA (Testicular Sperm Aspiration) enable men with zero sperm count in ejaculate (azoospermia) to father biological children."
    ],
    benefits: [
      "Minimally invasive day-care procedure",
      "Enables biological fatherhood in azoospermia",
      "Combined directly with ICSI cycles"
    ]
  },
  pcod: {
    slug: "pcod",
    title: "PCOD / PCOS Management",
    department: "Gynecology & Women's Health",
    category: "Gynecology & Obstetrics",
    summary: "Holistic medical, lifestyle, and hormonal management for Polycystic Ovarian Syndrome and fertility restoration.",
    content: [
      "Polycystic Ovarian Disease (PCOD) affects hormonal balance, ovulation frequency, and metabolic health in women.",
      "Dr. Jyoti Shah offers personalized protocols combining ovulation induction, metabolic regulation, and dietary guidance."
    ],
    benefits: [
      "Restoration of regular menstrual cycles",
      "Ovulation induction for conception",
      "Metabolic & hormonal balance management"
    ]
  },
  amenorrhea: {
    slug: "amenorrhea",
    title: "Amenorrhea (Absence of Menses) Care",
    department: "Gynecology & Women's Health",
    category: "Gynecology & Obstetrics",
    summary: "Endocrine investigation and treatment for primary and secondary absence of menstrual cycles.",
    content: [
      "Amenorrhea can stem from hormonal imbalances, thyroid dysfunction, sudden weight changes, high prolactin, or uterine adhesions.",
      "Treatment targets the root endocrine cause to restore natural menstrual health."
    ],
    benefits: [
      "Hormonal & pelvic ultrasound screening",
      "Thyroid & prolactin profile evaluation",
      "Cycle restoration guidance"
    ]
  },
  endometriosis: {
    slug: "endometriosis",
    title: "Endometriosis Medical & Laparoscopic Care",
    department: "Gynecology & Women's Health",
    category: "Gynecology & Obstetrics",
    summary: "Diagnosis and pain relief for endometrial tissue growth outside the uterine cavity.",
    content: [
      "Endometriosis causes severe pelvic pain, painful menses, and potential fertility challenges.",
      "Dr. Jyoti Shah provides hormonal management as well as laparoscopic ablation and cyst excision."
    ],
    benefits: [
      "Effective chronic pelvic pain relief",
      "Laparoscopic endometriotic cyst excision",
      "Fertility preservation protocols"
    ]
  },
  dub: {
    slug: "dub",
    title: "Dysfunctional Uterine Bleeding (DUB)",
    department: "Gynecology & Women's Health",
    category: "Gynecology & Obstetrics",
    summary: "Investigation and medical/surgical management for abnormal, heavy, or irregular menstrual bleeding.",
    content: [
      "Abnormal uterine bleeding requires thorough evaluation including pelvic ultrasound, endometrial sampling, or hysteroscopy to rule out fibroids, polyps, or hormonal disruption."
    ],
    benefits: [
      "Ultrasound & hysteroscopic diagnostic evaluation",
      "Hormonal therapy & medical control",
      "Minimally invasive surgical solutions"
    ]
  },
  menopause: {
    slug: "menopause",
    title: "Menopause & Post-Menopausal Clinic",
    department: "Gynecology & Women's Health",
    category: "Gynecology & Obstetrics",
    summary: "Guidance, bone density screening, and symptom management for women transitioning through menopause.",
    content: [
      "Menopause involves hormonal shifts that can cause hot flashes, mood changes, osteoporosis risk, and cardiac health changes.",
      "We provide supportive care, bone health guidance, and hormone evaluation for a comfortable transition."
    ],
    benefits: [
      "Osteoporosis & bone health screening",
      "Symptomatic hot flash relief guidance",
      "Cardiovascular & pelvic health checks"
    ]
  },
  obstetrics: {
    slug: "obstetrics",
    title: "Obstetrics & Maternity Care",
    department: "Gynecology & Women's Health",
    category: "Gynecology & Obstetrics",
    summary: "Comprehensive pregnancy monitoring, high-risk obstetrics, normal delivery, and post-natal care by Dr. Jyoti Shah.",
    content: [
      "From preconception counseling through antenatal visits, ultrasound monitoring, and labor delivery, we ensure the highest safety for mother and baby."
    ],
    benefits: [
      "High-risk pregnancy monitoring",
      "Normal and painless delivery facilities",
      "24x7 emergency obstetric support"
    ]
  },
  laparoscopy: {
    slug: "laparoscopy",
    title: "Advanced Laparoscopic Surgery",
    department: "Laparoscopic Surgical Wing",
    category: "Laparoscopy & Surgery",
    summary: "Minimally invasive keyhole procedures for ovarian cysts, fibroids, endometriosis, and hysterectomy.",
    content: [
      "Laparoscopic surgery uses tiny 5mm incisions and high-definition video cameras to perform intricate pelvic and abdominal procedures.",
      "Benefits include minimal blood loss, significantly reduced post-operative pain, negligible scarring, and hospital stay under 24-48 hours."
    ],
    benefits: [
      "Tiny keyhole incisions with minimal scarring",
      "Faster recovery and return to work",
      "High-definition surgical precision"
    ]
  },
  hysteroscopy: {
    slug: "hysteroscopy",
    title: "Diagnostic & Operative Hysteroscopy",
    department: "Laparoscopic Surgical Wing",
    category: "Laparoscopy & Surgery",
    summary: "Incisionless endoscopic examination and treatment of the uterine cavity for polyps, fibroids, and septum.",
    content: [
      "Hysteroscopy involves passing a thin telescope through the natural cervix to inspect and treat uterine cavity abnormalities without any abdominal incisions."
    ],
    benefits: [
      "Zero abdominal incisions",
      "Direct visualization of uterine septum & polyps",
      "Same-day discharge"
    ]
  }
};
