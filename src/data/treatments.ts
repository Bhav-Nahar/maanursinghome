export interface Treatment {
  slug: string;
  title: string;
  department: string;
  category: "Eye Care" | "IVF & Infertility" | "Gynecology & Obstetrics" | "Laparoscopy & Surgery";
  summary: string;
  image?: string;
  content: string[];
  symptoms?: string[];
  causes?: string[];
  diagnosis?: string[];
  treatmentSteps?: { title: string; description: string }[];
  benefits: string[];
}

export const TREATMENTS_DATA: Record<string, Treatment> = {
  cataract: {
    slug: "cataract",
    title: "Micro-Incision Cataract Surgery (MICS)",
    department: "Eye Care (Ophthalmology)",
    category: "Eye Care",
    summary: "Advanced stitchless cataract removal with premium monofocal, multifocal, and toric Intraocular Lens (IOL) implants by Dr. Jugal Shah.",
    image: "/assets/img/images/cataracts.jpg",
    content: [
      "Cataract is a clouding of the eye's natural crystalline lens, leading to blurred or dimmed vision. Micro-Incision Cataract Surgery (MICS) is the modern, stitchless, painless surgical standard.",
      "During the 15-minute procedure under topical anesthesia, the clouded lens is emulsified using ultrasonic energy and replaced with a foldable intraocular lens (IOL).",
      "Patients experience rapid visual recovery and can return to light daily activities within 24-48 hours."
    ],
    symptoms: [
      "Cloudy, blurry, or dim vision",
      "Increasing difficulty with vision at night",
      "Sensitivity to light and glare; seeing 'halos' around lights",
      "Fading or yellowing of colors",
      "Frequent changes in eyeglass or contact lens prescriptions"
    ],
    causes: [
      "Aging (most common factor)",
      "Diabetes and high blood pressure",
      "Prolonged exposure to ultraviolet light",
      "Previous eye injury or inflammation",
      "Long-term use of steroid medications"
    ],
    diagnosis: [
      "Visual Acuity Test to measure vision distance",
      "Slit-Lamp Examination to inspect cornea, iris, and lens under magnification",
      "Dilated Eye Exam to examine the retina and optic nerve",
      "Applanation Tonometry to measure fluid pressure inside the eye"
    ],
    treatmentSteps: [
      { title: "Pre-Operative Biometry", description: "Computerized calculation of the exact power of Intraocular Lens (IOL) required." },
      { title: "Topical Anesthesia", description: "Eye drops are applied to numb the eye without needles or painful injections." },
      { title: "Micro-Emulsification", description: "A 2.2mm micro-incision is made to gently break up and remove the cloudy lens." },
      { title: "Foldable IOL Implantation", description: "A high-precision premium IOL (Monofocal/Multifocal/Toric) is inserted." }
    ],
    benefits: [
      "No stitches, no injections, no eye patch required in most cases",
      "Rapid visual rehabilitation within 24-48 hours",
      "Premium IOL options (Monofocal, Multifocal, EOF, Toric)",
      "Performed in ultra-sterile modular operation theatres"
    ]
  },
  glaucoma: {
    slug: "glaucoma",
    title: "Glaucoma Screening & Laser Surgery",
    department: "Eye Care (Ophthalmology)",
    category: "Eye Care",
    summary: "Early diagnosis and medical/laser management of Intraocular Pressure (IOP) to prevent irreversible optical nerve damage.",
    image: "/assets/img/images/Glaucoma.jpg",
    content: [
      "Glaucoma is often termed the 'silent thief of sight' because it gradually damages the optic nerve without early pain or warning symptoms.",
      "We provide comprehensive screening including Tonometry, Gonioscopy, Visual Field Analysis (Perimetry), and OCT nerve evaluation.",
      "Treatment options include targeted pressure-lowering eye drops, Selective Laser Trabeculoplasty (SLT), and Trabeculectomy surgery when required."
    ],
    symptoms: [
      "Loss of peripheral or side vision (tunnel vision)",
      "Severe eye pain accompanied by nausea (in acute glaucoma)",
      "Halos around lights",
      "Blurred vision and eye redness"
    ],
    causes: [
      "Elevated internal eye pressure (Intraocular Pressure - IOP)",
      "Family history of glaucoma",
      "High myopia (nearsightedness) or hyperopia",
      "Poor blood supply to the optic nerve"
    ],
    diagnosis: [
      "Tonometry to measure intraocular pressure",
      "Ophthalmoscopy & OCT to inspect optic nerve damage",
      "Perimetry (Visual Field Test) to check for areas of vision loss",
      "Gonioscopy to inspect the drainage angle of the eye"
    ],
    treatmentSteps: [
      { title: "Medication & Eye Drops", description: "Daily prescription drops to reduce fluid production or increase drainage." },
      { title: "Laser Trabeculoplasty", description: "Quick outpatient laser therapy to unclog drainage channels." },
      { title: "Filtering Surgery (Trabeculectomy)", description: "Creating a new drainage pathway when medications are insufficient." }
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
    image: "/assets/img/images/Retinal Detachment.jpg",
    content: [
      "The retina is the light-sensitive neural tissue lining the back of the eye. Diabetes and high blood pressure can cause retinal swelling and bleeding.",
      "Dr. Jugal Shah provides detailed Fundus examination, OCT imaging, anti-VEGF intravitreal injections, and retinal laser photocoagulation."
    ],
    symptoms: [
      "Sudden appearance of floaters or specks in vision",
      "Flashes of light in one or both eyes",
      "Distorted or wavy central vision",
      "A dark curtain or shadow over part of the visual field"
    ],
    causes: [
      "Diabetic micro-vascular complications",
      "High blood pressure and vascular occlusion",
      "Age-related macular degeneration",
      "High myopia and axial eye lengthening"
    ],
    diagnosis: [
      "Dilated Fundus Examination",
      "Optical Coherence Tomography (OCT) cross-sectional imaging",
      "Fundus Fluorescein Angiography (FFA)"
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
    image: "/assets/img/images/Diabetic Retinopathy.jpg",
    content: [
      "Diabetic Retinopathy develops when persistent high blood sugar levels damage micro-vessels in the retina.",
      "Annual dilated eye examinations allow early detection before permanent visual impairment occurs."
    ],
    symptoms: [
      "Fluctuating vision clarity",
      "Impaired color vision",
      "Dark or empty areas in your vision",
      "Spots or dark strings floating in your vision (floaters)"
    ],
    causes: [
      "Long-standing diabetes mellitus (Type 1 or Type 2)",
      "Poorly controlled blood sugar levels",
      "High blood pressure and elevated cholesterol"
    ],
    diagnosis: [
      "Dilated Pupil Examination",
      "OCT Retinal Thickness Mapping",
      "Digital Retinal Angiography"
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
    image: "/assets/img/images/Computer Vision Syndrome.jpg",
    content: [
      "Extended screen time reduces blink frequency, causing tear film evaporation, digital fatigue, blurred vision, and neck strain.",
      "Treatment combines ergonomic advice, blue-filter prescription lenses, and customized lubricating drops."
    ],
    symptoms: [
      "Eye strain, fatigue, and dryness",
      "Headaches and neck/shoulder pain",
      "Blurred vision when looking away from screens",
      "Sensitivity to screen glare"
    ],
    causes: [
      "Reduced blink rate during screen usage (from 18 blinks/min down to 4-5)",
      "Uncorrected refractive errors",
      "Poor room lighting and screen glare",
      "Improper viewing distance and ergonomics"
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
    image: "/assets/img/images/dry eyes.jpg",
    content: [
      "Dry Eye Syndrome occurs when the eye produces insufficient tears or when tear quality deteriorates rapidly.",
      "Symptoms include burning sensation, redness, foreign body sensation, and intermittent watery eyes."
    ],
    symptoms: [
      "Stinging, burning or scratchy sensation in eyes",
      "Stringy mucus in or around your eyes",
      "Sensitivity to light and wind",
      "Eye redness and difficulty wearing contact lenses"
    ],
    causes: [
      "Age-related reduction in tear production",
      "Meibomian Gland Dysfunction (MGD)",
      "Air conditioning and low humidity environments",
      "Autoimmune conditions (e.g., Sjögren's syndrome)"
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
    image: "/assets/img/images/Retinal Detachment.jpg",
    content: [
      "Retinal detachment is a medical emergency where the retina peels away from underlying supportive tissue.",
      "Immediate surgical or laser intervention is vital to restore structural attachment and salvage vision."
    ],
    symptoms: [
      "Sudden appearance of numerous floaters",
      "Flashes of light in the affected eye",
      "Gradual shadow coming over your field of vision like a curtain"
    ],
    causes: [
      "Retinal tears or holes due to vitreous shrinkage",
      "Severe myopia (nearsightedness)",
      "Trauma or direct impact to the eye"
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
    image: "/assets/img/images/Squint.jpg",
    content: [
      "Squint occurs when the eyes point in different directions. It can affect depth perception and lead to lazy eye (amblyopia).",
      "Treatment involves corrective glasses, prism lenses, vision therapy, or eye muscle surgery."
    ],
    symptoms: [
      "Eyes pointing in different directions (inwards, outwards, upwards, or downwards)",
      "Double vision (diplopia) in adults",
      "Loss of 3D depth perception"
    ],
    causes: [
      "Uncorrected refractive errors",
      "Weakness or nerve supply issues of extraocular muscles",
      "Congenital muscle imbalance"
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
    image: "/assets/img/images/ARMD.jpg",
    content: [
      "ARMD affects the central portion of the retina (macula), causing loss of sharp, straight-ahead vision.",
      "Wet ARMD responds favorably to periodic intravitreal anti-VEGF injections."
    ],
    symptoms: [
      "Visual distortions, such as straight lines appearing wavy",
      "Reduced central vision in one or both eyes",
      "Need for brighter light when reading or doing close-up work"
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
    image: "/assets/img/images/Cornea DSAEK.jpg",
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
    image: "/assets/img/images/imgi_4_woman-peeking-eyeglasses.jpg",
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
    image: "/assets/img/images/imgi_3_eye_intro.png",
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
    image: "/assets/img/images/LASIK Clinic.jpg",
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
    image: "/assets/img/images/IVF.jpg",
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
    image: "/assets/img/images/Infertility.jpg",
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
    image: "/assets/img/images/IUI.png",
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
    image: "/assets/img/images/ICSI.png",
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
    image: "/assets/img/images/TESA PESA.png",
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
    image: "/assets/img/images/pcod.jpeg",
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
    image: "/assets/img/images/Amenorrhea.jpg",
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
    image: "/assets/img/images/Endometriosis.jpeg",
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
    image: "/assets/img/images/Dysfunctional Uterine Bleeding (DUB).jpg",
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
    image: "/assets/img/images/Menopause.jpg",
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
    image: "/assets/img/images/Obstetrics (Maternity Care).jpg",
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
    image: "/assets/img/images/Laparoscopy.jpeg",
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
    image: "/assets/img/images/Hysteroscopy.png",
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
