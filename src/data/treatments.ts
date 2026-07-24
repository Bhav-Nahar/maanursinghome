export interface Treatment {
  slug: string;
  title: string;
  department: string;
  category: "Eye Care" | "IVF & Infertility" | "Gynecology & Obstetrics" | "Gynaec Care" | "Laparoscopy & Surgery";
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
  "cornea-dsaek": {
    slug: "cornea-dsaek",
    title: "Cornea DSAEK",
    department: "Eye Care (Ophthalmology)",
    category: "Eye Care",
    summary:
      "Advanced corneal transplant surgery (DSAEK) for corneal disorders — restoring vision with precision, safety and faster recovery.",
    image: "/assets/img/images/Cornea DSAEK.jpg",
    content: [
      "A modern, minimally invasive corneal transplant that replaces only the damaged inner layer of the cornea.",
      "Research studies in India show that corneal blindness is one of the leading causes of blindness, with more than 10 lakh people blind in both eyes. Corneal blindness can often be restored with a corneal transplant.",
      "Healthy donor corneas, donated soon after death, are transplanted to replace the damaged cornea. As noted by Dr. Jugal Shah, corneal transplants are highly successful, but eye donation awareness remains low in the country.",
      "Traditionally, full-thickness corneal transplants were performed. Today, DSAEK (Descemet’s Stripping Automated Endothelial Keratoplasty) allows selective replacement of only the damaged endothelial layer, preserving healthy corneal tissue."
    ],
    symptoms: [
      "Swollen, scarred or cloudy cornea resulting in reduced or lost vision",
      "Blurred vision that gradually improves post-procedure",
      "Corneal endothelial dysfunction symptoms"
    ],
    causes: [
      "Fuchs’ endothelial dystrophy",
      "Posterior polymorphous membrane dystrophy",
      "Congenital hereditary endothelial dystrophy",
      "Bullous keratopathy",
      "Iridocorneal endothelial (ICE) syndrome",
      "Failed previous corneal transplants"
    ],
    diagnosis: [
      "Corneal Pachymetry and Endothelial Cell Density (Specular Microscopy)",
      "Slit-lamp examination to evaluate corneal clarity and Descemet's layer"
    ],
    treatmentSteps: [
      { title: "Endothelial Layer Preparation", description: "A thin donor graft containing healthy endothelial cells is micro-cut and prepared." },
      { title: "Descemet's Stripping", description: "The diseased endothelial layer is removed through a micro-incision." },
      { title: "Tissue Insertion & Air Bubble Positioning", description: "The donor graft is inserted and held in place against the patient's cornea using an air bubble." }
    ],
    benefits: [
      "Minimally invasive selective layer transplantation preserving healthy corneal tissue",
      "Smaller incision with fewer stitches compared to full-thickness transplants",
      "Faster visual rehabilitation and higher long-term success rates"
    ]
  },
  cataract: {
    slug: "cataract",
    title: "Cataract",
    department: "Eye Care (Ophthalmology)",
    category: "Eye Care",
    summary:
      "Cataract diagnosis, modern laser phacoemulsification surgery and intraocular lens (IOL) options — evidence-based care with fast recovery and compassionate support.",
    image: "/assets/img/images/carastact.png",
    content: [
      "Clouding of the eye’s natural lens that progressively blurs vision — common with ageing but can affect younger people too.",
      "The lens inside the eye focuses light on the retina to produce clear images. Over years (or sometimes rapidly), insoluble proteins can cloud the lens and cause hazy vision — this condition is called a cataract. No diet, medicine or exercise prevents cataracts; regular eye checks ensure early detection and timely treatment.",
      "At Maa Nursing Home and NetraJyoti Eyecare Centre we offer advanced micro-incision phacoemulsification. The cloudy lens is broken into tiny pieces using ultrasonic energy and aspirated through a 1.5–3 mm incision (often stitchless). The natural lens is replaced with a clear synthetic intraocular lens (IOL). The procedure is a day-care surgery (often 5 minutes) under topical anaesthesia (eye drops) with quick recovery."
    ],
    symptoms: [
      "An increasing glare in sunlight or at night (difficult driving).",
      "Hazy or blurred vision and difficulty reading small print.",
      "Double vision or image distortion in one eye.",
      "Perception of unequal brightness between eyes.",
      "Frequent changes in spectacle prescription.",
      "Poor depth perception (difficulty with stairs)."
    ],
    causes: [
      "Ageing (most common).",
      "Eye injury or trauma.",
      "Metabolic illnesses like diabetes.",
      "Infection or chronic inflammation of the eye.",
      "Prolonged steroid medication.",
      "Congenital cataract (present at birth) or strong family history.",
      "Secondary to glaucoma or chronic inflammation."
    ],
    diagnosis: [
      "Visual Acuity Test to measure vision distance",
      "Slit-Lamp Examination to inspect cornea, iris, and lens under magnification",
      "Dilated Eye Exam to examine the retina and optic nerve",
      "Applanation Tonometry to measure fluid pressure inside the eye"
    ],
    treatmentSteps: [
      { title: "Standard Micro-Incision Phacoemulsification", description: "Ultrasonic emulsification through a 1.5–3 mm incision with foldable IOL implantation under topical drops." },
      { title: "Femto LASER-Assisted Surgery (FLACS)", description: "Bladeless, automated step increasing precision for faster recovery and excellent visual results." },
      { title: "Premium IOL Selection", description: "Toric (astigmatism correction), Multifocal (bi-focal/tri-focal), or EDOF (Extended Depth of Focus) lens implants." }
    ],
    benefits: [
      "Stitchless, micro-incision operation (minimal cut).",
      "Faster healing and early return to work.",
      "Less ocular trauma and reduced infection risk.",
      "Topical anaesthesia (drops) — safe for most patients.",
      "Better night and low-light vision with good quality IOLs."
    ]
  },
  glaucoma: {
    slug: "glaucoma",
    title: "Glaucoma",
    department: "Eye Care (Ophthalmology)",
    category: "Eye Care",
    summary:
      "A progressive disease that damages the optic nerve—usually due to high eye pressure. Early detection prevents vision loss.",
    image: "/assets/img/images/Glaucoma.jpg",
    content: [
      "A group of eye conditions that damage the optic nerve, often due to increased eye pressure — a major cause of irreversible blindness.",
      "The optic nerve acts like a cable containing over a million nerve fibres, transmitting visual information from the eye to the brain. When eye pressure rises or the nerve becomes weak, these fibres get damaged. If untreated, glaucoma can cause permanent vision loss or total blindness.",
      "With timely diagnosis and proper treatment, further damage can be prevented. Regular eye check-ups after age 40 are crucial.",
      "A clear fluid called aqueous humour circulates inside the eye. When drainage channels get blocked, fluid builds up and increases pressure. This pressure damages the optic nerve gradually or suddenly depending on the type of glaucoma."
    ],
    symptoms: [
      "Gradual dimming or blurred vision",
      "Chronic mild headache",
      "Reduced side vision (tunnel vision)",
      "Coloured halos around lights",
      "Severe eye pain, headache, sudden blurred vision, and red eye (in acute closed-angle glaucoma)"
    ],
    causes: [
      "Ageing",
      "Diabetes",
      "Family history",
      "High blood pressure",
      "Nearsightedness (myopia) or farsightedness (hyperopia)",
      "Long-term use of corticosteroids",
      "Eye injuries (chemical or blunt trauma)",
      "Eye inflammation",
      "Blocked eye blood vessels",
      "After other eye surgeries"
    ],
    diagnosis: [
      "Intraocular Pressure (IOP): Measures eye pressure; values above 21mmHg require further evaluation.",
      "Gonioscopy: Examines the drainage angle.",
      "Pachymetry: Measures corneal thickness which affects pressure readings.",
      "Perimetry / Visual Field: Detects early peripheral vision loss.",
      "Ophthalmoscopy: Assesses optic nerve damage.",
      "HRT (Heidelberg Retinal Tomography): Advanced imaging for progression tracking."
    ],
    treatmentSteps: [
      { title: "Eye Drops", description: "Long-term or lifelong prescription drops to reduce fluid production or increase drainage." },
      { title: "LASER Peripheral Iridotomy", description: "For narrow-angle glaucoma to create a drainage opening." },
      { title: "LASER Trabeculoplasty", description: "Opens blocked passages in open-angle glaucoma." },
      { title: "Trabeculectomy (Surgery)", description: "Creates a new drainage pathway when drops or laser are insufficient." }
    ],
    benefits: [
      "Advanced glaucoma diagnostics (IOP, Gonioscopy, Perimetry, HRT)",
      "Laser & surgical treatment options (Peripheral Iridotomy, Trabeculoplasty, Trabeculectomy)",
      "Long-term intraocular pressure monitoring & vision preservation"
    ]
  },
  retina: {
    slug: "retina",
    title: "Retina Care & Surgery",
    department: "Eye Care (Ophthalmology)",
    category: "Eye Care",
    summary:
      "A diabetes-related eye disease that damages the retina — if untreated, it can lead to severe vision loss or blindness.",
    image: "/assets/img/images/Retinal Detachment.jpg",
    content: [
      "Damage to the tiny blood vessels of the retina caused by long-standing or uncontrolled diabetes.",
      "Diabetic Retinopathy is an eye condition where high blood sugar levels damage the blood vessels of the retina — the light-sensitive layer at the back of the eye that sends images to the brain via the optic nerve.",
      "In diabetic patients, prolonged uncontrolled sugar levels cause these vessels to leak fluid, proteins, and fats, or become blocked. If left untreated, Diabetic Retinopathy can lead to severe visual loss or complete blindness.",
      "Maa Nursing Home and NetraJyoti Eyecare Centre offers advanced treatment for this condition."
    ],
    symptoms: [
      "Blurred or fluctuating vision",
      "Dark spots or patches in the field of vision",
      "Difficulty reading or seeing fine details",
      "Sudden loss of vision due to bleeding in the eye"
    ],
    causes: [
      "Long-standing or poorly controlled diabetes mellitus",
      "High blood pressure and elevated cholesterol levels",
      "Prolonged high blood sugar causing microvascular leakage in the retina"
    ],
    diagnosis: [
      "Dilated eye examination to evaluate the retina and macular area",
      "OCT scanning and Fundus Fluorescein Angiography for vascular leakage assessment"
    ],
    treatmentSteps: [
      { title: "LASER Photocoagulation Treatment", description: "Safe, painless, day-care LASER procedure to seal leaking vessels and destroy abnormal new blood vessels." },
      { title: "Intravitreal Anti-VEGF Injections", description: "Targeted injections into the eye to reduce macular edema and clear vitreous fluid accumulation." },
      { title: "Vitrectomy Surgery", description: "Surgical removal of blood-filled vitreous gel and scar tissue in advanced proliferative stages." }
    ],
    benefits: [
      "Comprehensive retinal evaluation and regular 2–4 month screening",
      "Painless LASER photocoagulation to seal leaking retinal vessels",
      "Prevention of severe visual impairment, macular edema, and neovascular glaucoma"
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
      "Diabetic Retinopathy develops when persistent high blood sugar levels damage the tiny blood vessels of the retina, the light-sensitive layer at the back of the eye that sends visual signals to the brain through the optic nerve. In early stages vision may remain normal, but if left untreated, progressive vessel damage can lead to severe visual loss or permanent blindness.",
      "The disease progresses from Non-Proliferative Diabetic Retinopathy (NPDR) — an early stage where retinal vessels leak fluid, fats or proteins and may weaken, swell or get blocked — to Proliferative Diabetic Retinopathy (PDR), an advanced stage where fragile new blood vessels grow on the retinal surface and are prone to bleeding, vitreous haemorrhage, tractional retinal detachment and neovascular glaucoma. Some patients also develop Diabetic Maculopathy, where fat- and cholesterol-rich fluid leaks near the macula, distorting and reducing central vision.",
      "Because early stages often have no symptoms, regular dilated eye examinations are critical for every diabetic patient. Strict control of blood sugar, blood pressure and cholesterol is essential to slow progression, though retinopathy may still advance despite good control, making timely treatment equally important."
    ],
    symptoms: [
      "Fluctuating vision clarity",
      "Impaired color vision",
      "Dark or empty areas in your vision",
      "Spots or dark strings floating in your vision (floaters)",
      "Often no symptoms at all in the early stages"
    ],
    causes: [
      "Long-standing diabetes mellitus (Type 1 or Type 2)",
      "Poorly controlled blood sugar levels",
      "High blood pressure and elevated cholesterol"
    ],
    diagnosis: [
      "Dilated Pupil Examination to assess the retina thoroughly",
      "OCT Retinal Thickness Mapping",
      "Digital Retinal Angiography",
      "Eye check-ups every 2-4 months once retinopathy is diagnosed"
    ],
    treatmentSteps: [
      { title: "Blood Sugar & Pressure Control", description: "Strict control of blood sugar, blood pressure and cholesterol to slow disease progression, alongside regular screening." },
      { title: "LASER Photocoagulation", description: "A safe, painless day-care procedure where laser seals leaking vessels and destroys abnormal new vessels, preventing bleeding and retinal detachment." },
      { title: "Intravitreal Injections", description: "Used in diabetic maculopathy to reduce swelling and improve central vision." },
      { title: "Vitrectomy Surgery", description: "Recommended in advanced cases with vitreous bleeding or retinal scarring; the blood-filled vitreous is removed and replaced with a clear solution, with recovery over 2-4 weeks." }
    ],
    benefits: [
      "Early micro-vascular damage detection through dilated screening",
      "Targeted laser photocoagulation to prevent bleeding and detachment",
      "Anti-VEGF/intravitreal injection protocols for diabetic maculopathy",
      "Advanced vitrectomy facilities for advanced-stage disease"
    ]
  },
  "computer-vision-syndrome": {
    slug: "computer-vision-syndrome",
    title: "Computer Vision Syndrome",
    department: "Eye Care (Ophthalmology)",
    category: "Eye Care",
    summary:
      "Diagnosis and management of digital eye strain, dryness and vision fatigue — tailored solutions for prolonged screen use and modern lifestyles.",
    image: "/assets/img/images/Computer Vision Syndrome.jpg",
    content: [
      "A group of eye and vision-related problems caused by prolonged use of digital screens.",
      "Computer Vision Syndrome (CVS), also known as Digital Eye Strain, refers to a collection of eye and musculoskeletal problems resulting from extended use of computers, laptops, mobile phones, tablets and other digital devices.",
      "With screens becoming an essential part of work and daily life, the eyes are subjected to constant strain. Over time, this strain can lead to chronic and distressing symptoms if not addressed early.",
      "While symptoms may initially reduce with rest, persistent screen exposure without corrective measures can worsen the condition. Fortunately, CVS can be effectively prevented and managed with simple changes and professional guidance."
    ],
    symptoms: [
      "Eyestrain and eye fatigue",
      "Burning sensation, itching or irritation",
      "Blurred or fluctuating vision",
      "Double vision",
      "Dry or red eyes",
      "Frequent headaches",
      "Neck, shoulder and back pain"
    ],
    causes: [
      "Viewing digital screens is visually more demanding than reading printed text",
      "Letters on digital screens lack sharp contrast and are affected by glare, reflections and poor lighting conditions",
      "Continuous focusing, improper screen distance, incorrect posture and uncorrected or under-corrected vision problems",
      "Wearing improper spectacles or contact lenses",
      "Poor ergonomics leading to muscle strain in the neck, shoulders and back"
    ],
    diagnosis: [
      "Comprehensive eye examination evaluating vision, eye focusing ability, and eye coordination",
      "Detailed history of screen usage, work habits, posture, medical conditions, and medications"
    ],
    treatmentSteps: [
      { title: "The 20–20–20 Rule", description: "Every 20 minutes, look away from the screen and focus on an object 20 feet away for at least 20 seconds." },
      { title: "Anti-Glare & Computer Glasses", description: "Use anti-glare or computer-specific eyeglasses with special lens coatings or blue-light filters." },
      { title: "Vision Therapy", description: "Targeted exercises for focusing and coordination issues where indicated." },
      { title: "Ergonomic & Workplace Adjustments", description: "Maintain proper screen height, distance, posture, controlled room lighting, clean screens, and frequent breaks." }
    ],
    benefits: [
      "Relief from digital fatigue, eye strain, and screen-related headaches",
      "Tailored blue-light filtering and computer spectacle prescriptions",
      "Ergonomic guidance to protect vision and neck posture during long work hours"
    ]
  },
  "dry-eyes": {
    slug: "dry-eyes",
    title: "Dry Eyes",
    department: "Eye Care (Ophthalmology)",
    category: "Eye Care",
    summary:
      "Advanced evaluation and treatment of dry eye disease — restoring comfort, clarity and long-term eye surface health.",
    image: "/assets/img/images/dry eyes.jpg",
    content: [
      "A chronic condition caused by insufficient or poor-quality tears leading to eye irritation and discomfort.",
      "Tears are essential for lubricating, nourishing and protecting the front surface of the eyes. When the eyes do not produce enough tears, or when tear quality is poor, the eyes become dry and irritated. This condition is known as Dry Eye Disease.",
      "Dry eyes are more common in older individuals and are usually chronic in nature. Tears are not just emotional responses — they are a complex mixture of water, oils and mucus that spreads evenly across the eye surface to keep it moist and prevent evaporation.",
      "With every blink, tears coat the cornea, reduce the risk of infection, wash away foreign particles and maintain a smooth, clear eye surface."
    ],
    symptoms: [
      "Stinging, burning or scratchy sensation in the eyes",
      "Sensitivity to light",
      "Foreign body sensation (feeling of something in the eye)",
      "Excessive tearing (reflex tears)",
      "Difficulty wearing contact lenses",
      "Blurred or fluctuating vision"
    ],
    causes: [
      "Age above 65 years",
      "Hormonal changes in women due to pregnancy, oral contraceptives or menopause",
      "Certain medications such as decongestants, blood pressure medicines and antidepressants",
      "Exposure to smoke, wind and dry climates",
      "Reduced blinking while using computers, mobiles and digital screens for long periods"
    ],
    diagnosis: [
      "Clinical evaluation of tear quantity and tear film quality",
      "Assessment of severity to determine personalized treatment"
    ],
    treatmentSteps: [
      { title: "Artificial Tear Drops", description: "Primary treatment to supplement natural tear production." },
      { title: "Conservation of Tears", description: "A minor surgical procedure where tear ducts are closed (punctal occlusion) to retain tears longer on the eye surface." },
      { title: "Self-Care & Lifestyle Measures", description: "Conscious blinking during screen use, protective sunglasses, hydration, increasing indoor humidity, and avoiding excessive AC exposure." }
    ],
    benefits: [
      "Personalized treatment based on the severity of dry eye disease",
      "Artificial tear drops and tear conservation (punctal occlusion) options",
      "Significantly reduced discomfort, burning, and improved overall eye surface health"
    ]
  },
  "retinal-detachment": {
    slug: "retinal-detachment",
    title: "Retinal Detachment",
    department: "Eye Care (Ophthalmology)",
    category: "Eye Care",
    summary:
      "Emergency diagnosis and surgical management of retinal detachment — prompt intervention to preserve vision and prevent permanent loss.",
    image: "/assets/img/images/Retinal Detachment.jpg",
    content: [
      "A serious eye emergency where the retina separates from its underlying tissue, leading to vision loss.",
      "The retina is a thin, light-sensitive layer lining the back of the eye. Light entering the eye is focused onto the retina, which then sends visual signals to the brain through the optic nerve.",
      "When the retina becomes damaged or displaced from its normal position, these signals are disrupted and vision becomes blurred or lost. This condition is known as retinal detachment.",
      "Retinal detachment occurs when the retina separates from the tissues that nourish it. If not treated promptly, it can result in permanent loss of vision. Therefore, retinal detachment is considered a medical emergency."
    ],
    symptoms: [
      "Flashing lights: Brief flashes of light, especially in peripheral vision",
      "Floaters: Black spots, threads, cobwebs or moving specks in vision",
      "Vision loss: A shadow, curtain or dark area covering part of the vision"
    ],
    causes: [
      "Age above 40 years",
      "High myopia (severe nearsightedness)",
      "Previous retinal detachment in one eye",
      "Eye injuries (sports like boxing, bungee jumping, trauma)",
      "Family history of retinal detachment",
      "Previous cataract surgery",
      "Eye diseases such as retinoschisis, uveitis or lattice degeneration"
    ],
    diagnosis: [
      "Dilated pupil examination using eye drops to inspect the retina thoroughly",
      "Ocular ultrasonography to confirm diagnosis when detachment is suspected"
    ],
    treatmentSteps: [
      { title: "Cryopexy", description: "Freeze treatment used for retinal tears or holes to seal the tear and reattach the retina." },
      { title: "Scleral Buckling", description: "A permanent synthetic band placed around the eye to gently push the eye wall against the detached retina." },
      { title: "Pneumatic Retinopexy", description: "A gas bubble injected into the eye presses the retina back into place while laser or cryotherapy seals the tear." },
      { title: "Vitrectomy & LASER Photocoagulation", description: "Removal of vitreous gel (replaced with gas or silicone oil) for large/complex detachments; LASER seals retinal tears to prevent progression." }
    ],
    benefits: [
      "Emergency retinal evaluation and prompt surgical intervention",
      "Advanced procedures including Cryopexy, Scleral Buckling, Pneumatic Retinopexy, and Vitrectomy",
      "Preservation of visual fields and prevention of permanent blindness"
    ]
  },
  "squint": {
    slug: "squint",
    title: "Squint (Strabismus)",
    department: "Eye Care (Ophthalmology)",
    category: "Eye Care",
    summary:
      "Misalignment of the eyes where both eyes do not look in the same direction — affecting vision, depth perception and confidence.",
    image: "/assets/img/images/Squint.jpg",
    content: [
      "A condition where the eyes are misaligned and do not point in the same direction, leading to cosmetic and visual problems.",
      "A squint, medically known as strabismus, occurs when both eyes do not look at the same object at the same time. While one eye is looking straight, the other may turn inwards, outwards, upwards or downwards.",
      "Squint can be present from birth or develop later in life due to eye injury, nerve problems or other illnesses. It may be constant (always visible) or intermittent (seen only at times, usually when tired).",
      "Apart from cosmetic concerns and social embarrassment, untreated squint can lead to reduced vision in one eye (amblyopia) and loss of 3D (binocular) vision."
    ],
    symptoms: [
      "Eyes looking in different directions at the same time",
      "Eyes that do not move together",
      "Squinting or closing one eye, especially in bright sunlight",
      "Poor side (peripheral) vision",
      "Poor depth perception (difficulty judging distances)",
      "Sometimes double vision (mainly in adults with recent squint)"
    ],
    causes: [
      "Refractive errors such as hyperopia (long-sightedness), myopia and astigmatism",
      "Unequal refractive error (difference in power) between the two eyes",
      "Brain trauma or neurological causes",
      "Myasthenia gravis or Sixth Cranial Nerve palsy in children (sudden esotropia)",
      "Trauma to the eye",
      "Duane’s Syndrome, Strabismus Fixus",
      "Previous squint surgery with decompensation",
      "Paralytic squint due to hypertension or diabetes",
      "Thyroid Eye Disease and post-sinus surgery complications"
    ],
    diagnosis: [
      "Detailed eye examination to assess the direction and degree of eye deviation",
      "Assessment for underlying refractive errors and binocular vision",
      "Evaluation for associated conditions such as amblyopia, nerve palsies, or systemic disease"
    ],
    treatmentSteps: [
      { title: "Glasses", description: "Correct underlying refractive errors and may straighten the eyes in some children." },
      { title: "Eye Patching", description: "Covering the stronger eye to force the weaker eye to work, improving vision in amblyopia." },
      { title: "Eye Exercises & Prisms", description: "Pencil push-ups, barrel cards, or prism lenses to improve coordination or manage double vision." },
      { title: "Botox / Squint Surgery", description: "Botulinum toxin to weaken overacting muscles, or surgery to tighten/loosen eye muscles and realign the eyes when non-surgical options are insufficient." }
    ],
    benefits: [
      "Prevents lazy eye (amblyopia) and restores binocular/3D vision",
      "Cosmetic & functional eye alignment tailored to children and adults",
      "Boosts confidence and social interaction",
      "Reduces the risk of long-term visual disability"
    ]
  },
  armd: {
    slug: "armd",
    title: "Age-Related Macular Degeneration (ARMD)",
    department: "Eye Care (Ophthalmology)",
    category: "Eye Care",
    summary:
      "Diagnosis and advanced management of ARMD — slowing disease progression and preserving central vision with modern therapies.",
    image: "/assets/img/images/ARMD.jpg",
    content: [
      "A progressive retinal condition causing loss of central vision, commonly seen with ageing.",
      "Age-related macular degeneration (ARMD) is a deterioration of the macula, the central part of the retina responsible for sharp, straight-ahead vision. The primary cause of ARMD is ageing.",
      "When the macula degenerates, fine tasks such as reading, threading a needle, recognising faces or seeing details become difficult. Although the macula occupies a small portion of the retina, it is far more sensitive to detail than the peripheral retina, which provides side vision.",
      "ARMD usually begins in one eye and may gradually affect the other. Many people remain unaware of the condition until noticeable vision changes occur or during a routine eye examination."
    ],
    causes: [
      "Ageing — the primary driver of macular degeneration",
      "Accumulation of drusen deposits under the macula",
      "Abnormal blood vessel growth beneath the retina (wet ARMD)",
      "Heredity and family history of ARMD",
      "Smoking, obesity, and unhealthy diet"
    ],
    diagnosis: [
      "Retinal examination and Amsler grid testing",
      "OCT (Optical Coherence Tomography) for detailed imaging of the retina and macula",
      "OCTA — dye-free imaging of the retinal blood vessels"
    ],
    treatmentSteps: [
      { title: "Anti-VEGF Injections", description: "Intravitreal injections to reduce growth and leakage of abnormal blood vessels in wet ARMD." },
      { title: "LASER Therapy", description: "Used in selected cases of wet ARMD to seal abnormal vessels." },
      { title: "Photodynamic Therapy", description: "A combination of medication and laser to block leaking vessels." },
      { title: "Nutritional Supplements", description: "Vitamins C, E, beta-carotene, zinc and copper as prescribed to help slow disease progression." }
    ],
    benefits: [
      "OCT and OCTA macular mapping for precise diagnosis",
      "Intravitreal injection protocols to preserve central vision",
      "Prevention guidance covering diet, smoking cessation and blood pressure control"
    ]
  },
  "paediatric-eye": {
    slug: "paediatric-eye",
    title: "Paediatric Ophthalmology",
    department: "Eye Care (Ophthalmology)",
    category: "Eye Care",
    summary:
      "Dedicated eye care for children and adolescents — ensuring healthy vision development through early detection and specialized treatment.",
    image: "/assets/img/images/Paediatric.jpg",
    content: [
      "Early childhood is the most critical period for vision development. Any eye problem during this time can have long-term consequences if not treated promptly.",
      "Children often do not complain about vision problems because they don't know what 'normal' vision is. At Maa Nursing Home and NetraJyoti Eyecare Centre, we specialize in child-friendly eye examinations and treatments tailored to young patients.",
      "We offer comprehensive evaluation and management of all paediatric eye disorders in a comforting environment."
    ],
    symptoms: [
      "Refractive Errors: Nearsightedness, farsightedness, or astigmatism in children",
      "Amblyopia (Lazy Eye): Reduced vision in one eye due to lack of use during development",
      "Squint (Strabismus): Misalignment of the eyes",
      "Paediatric Cataract: Clouding of the lens present from birth or early childhood",
      "ROP (Retinopathy of Prematurity): Eye disease affecting premature infants",
      "Allergic Conjunctivitis: Chronic eye allergies common in children"
    ],
    causes: [
      "Congenital or developmental refractive errors (nearsightedness, farsightedness, astigmatism)",
      "Lack of proper visual stimulation in one eye during critical development years (amblyopia)",
      "Eye muscle misalignment (squint/strabismus)",
      "Premature birth (risk factor for ROP)",
      "Allergen exposure causing chronic allergic conjunctivitis"
    ],
    diagnosis: [
      "Child-friendly comprehensive eye examination",
      "Vision screening for school-age children",
      "ROP screening for premature infants",
      "Assessment for squint, amblyopia and refractive errors"
    ],
    treatmentSteps: [
      { title: "Amblyopia (Lazy Eye) Management", description: "Patching therapy, specialized glasses, or eye drops to strengthen the weaker eye during the critical vision-forming years." },
      { title: "Paediatric Cataract Surgery", description: "Expert surgical removal of cataracts in infants and children using advanced micro-surgical techniques and intraocular lens (IOL) implantation." },
      { title: "ROP Screening & Treatment", description: "Vital screening for premature babies to detect and treat retinal abnormalities early, preventing permanent vision loss." },
      { title: "Squint Correction", description: "Non-surgical (glasses/exercises) or surgical correction of misaligned eyes to restore binocular vision and confidence." }
    ],
    benefits: [
      "Gentle, child-friendly pediatric eye examinations and refraction",
      "Amblyopia patch therapy during the critical vision-forming years",
      "Congenital eye disorder and ROP screening for premature infants",
      "Vision screening for school children to support academic performance"
    ]
  },
  oculoplasty: {
    slug: "oculoplasty",
    title: "Oculoplasty & Ocular Oncology",
    department: "Eye Care (Ophthalmology)",
    category: "Eye Care",
    summary:
      "Specialized surgical care for eyelids, tear ducts, orbits, and eye tumors — combining functional restoration with aesthetic excellence.",
    image: "/assets/img/images/Oculoplasty.jpg",
    content: [
      "A specialized field of ophthalmology focusing on the structures around the eye, including eyelids, tear ducts, and the eye socket (orbit).",
      "Oculoplastic surgery involves procedures that improve the function, comfort, and appearance of the eyes and surrounding areas. At Maa Nursing Home and NetraJyoti Eyecare Centre, we provide expert care for both medical and cosmetic conditions."
    ],
    symptoms: [
      "Ptosis: Drooping of the upper eyelid, which can block vision",
      "Entropion & Ectropion: Eyelids turning inwards or outwards, causing irritation",
      "Blocked Tear Ducts: Leading to constant watering (treated with DCR surgery)",
      "Eyelid Tumors: Cysts or tumors requiring removal and reconstruction",
      "Orbital Fractures: Bony socket damage after facial trauma",
      "Thyroid Eye Disease: Bulging eyes or eyelid retraction"
    ],
    causes: [
      "Age-related skin loosening or muscle weakness around the eye",
      "Congenital weakness in eyelid muscles (congenital ptosis)",
      "Nasolacrimal duct obstruction causing tearing and infection",
      "Facial trauma and thyroid-related autoimmune conditions"
    ],
    diagnosis: [
      "Clinical evaluation of eyelid position, levator muscle strength, and lacrimal duct patency",
      "Orbital imaging (CT/MRI) and histopathological evaluation for ocular tumors"
    ],
    treatmentSteps: [
      { title: "DCR (Dacryocystorhinostomy)", description: "Creates a new tear drainage path into the nose to stop chronic watering and infections." },
      { title: "Ptosis Correction", description: "Surgical lifting of drooping eyelids to improve vision field and aesthetics." },
      { title: "Blepharoplasty & Prosthetics", description: "Eyelid aesthetic rejuvenation and custom artificial eye fitting for non-functional eyes." }
    ],
    benefits: [
      "Expert oculoplastic procedures combining functional restoration and cosmetic appearance",
      "Treatment for ptosis, blocked tear ducts (DCR), eyelid tumors, and orbital trauma",
      "Custom prosthetic eye fitting matching natural eye color and movement"
    ]
  },
  "lasik": {
    slug: "lasik",
    title: "LASIK Clinic",
    department: "Eye Care (Ophthalmology)",
    category: "Eye Care",
    summary:
      "Modern, precise LASER vision correction to reduce dependence on spectacles and contact lenses — with personalised evaluation and advanced technology.",
    image: "/assets/img/images/LASIK Clinic.jpg",
    content: [
      "A painless day-care LASER procedure to correct refractive errors and reduce or eliminate the need for glasses or contact lenses.",
      "LASIK (Laser-Assisted In Situ Keratomileusis) reshapes the cornea using an excimer LASER to correct refractive errors such as myopia (short-sight), hypermetropia (long-sight) and astigmatism.",
      "In a normal eye, light passes through the cornea and lens and focuses sharply on the retina, giving clear vision. When light focuses in front of the retina (myopia), behind the retina (hypermetropia) or at different points (astigmatism), vision becomes blurred. LASIK corrects this focusing power by reshaping the cornea.",
      "At Maa Nursing Home and NetraJyoti Eyecare Centre, we have a dedicated LASIK clinic and have successfully treated thousands of patients. We offer both Contoura LASIK and Bladeless Femto-LASIK, performed by Dr Jugal Shah."
    ],
    symptoms: [
      "Myopia (nearsightedness) up to –18.0 D",
      "Hypermetropia (farsightedness) from +1.0 D to +6.0 D",
      "Astigmatism from –1.0 D to –6.0 D"
    ],
    causes: [
      "Myopia — light focuses in front of the retina",
      "Hypermetropia — light focuses behind the retina",
      "Astigmatism — light focuses at multiple points due to irregular corneal curvature"
    ],
    diagnosis: [
      "Routine eye examination to assess refractive error",
      "Keratometry to measure the shape and curvature of the cornea",
      "Pachymetry to measure corneal thickness before planning treatment"
    ],
    treatmentSteps: [
      { title: "Topical Anaesthesia", description: "Numbing eye drops are applied — no injections are needed." },
      { title: "Flap Creation", description: "A suction ring is applied and a thin corneal flap is created manually (Contoura) or with a Femto Second LASER (Bladeless)." },
      { title: "Excimer Laser Reshaping", description: "The flap is lifted and a computer-controlled excimer laser precisely reshapes the underlying corneal tissue." },
      { title: "Flap Repositioning", description: "The flap is repositioned and naturally adheres without stitches, completing the 15-20 minute procedure." }
    ],
    benefits: [
      "Freedom from glasses and contact lenses",
      "15-20 minute painless day-care procedure with no hospitalization",
      "Vision typically stabilises within 2 weeks; return to work in 2-3 days",
      "Contoura and Bladeless Femto-LASIK options performed by Dr Jugal Shah"
    ]
  },
  ivf: {
    slug: "ivf",
    title: "In-Vitro Fertilization (IVF)",
    department: "IVF & Fertility Wing",
    category: "IVF & Infertility",
    summary:
      "Advanced, ethical and affordable fertility treatments to help couples achieve their dream of parenthood.",
    image: "/assets/img/images/IVF.jpg",
    content: [
      "A scientifically proven fertility treatment where fertilization takes place outside the body.",
      "IVF (In-Vitro Fertilization), commonly known as the “test-tube baby” technique, is one of the most successful and widely used infertility treatments. In this procedure, eggs and sperms are combined in a controlled laboratory environment. The resulting embryos are then transferred into the woman’s uterus to achieve pregnancy.",
      "Maa Nursing Home and NetraJyoti Eyecare Centre offers advanced IVF technology, strict quality protocols and experienced specialists to maximise success rates.",
      "Recommended for tubal blockages, severe endometriosis, failed IUI cycles, male factor infertility, low ovarian reserve, and age-related infertility."
    ],
    symptoms: [
      "Inability to conceive after 12 months of regular unprotected intercourse",
      "Blocked, damaged, or absent fallopian tubes",
      "Endometriosis and low ovarian reserve",
      "Failed IUI cycles or severe male factor subfertility"
    ],
    causes: [
      "Tubal pathology, endometriosis, male factor subfertility",
      "Unexplained infertility or diminished ovarian reserve"
    ],
    diagnosis: [
      "Female workup: USG pelvic sonography, HSG tubal testing, hormone profile, routine blood panel",
      "Male workup: Semen analysis, semen culture, sperm function tests, routine blood panel"
    ],
    treatmentSteps: [
      { title: "Counselling & Ovarian Stimulation", description: "Injections stimulate ovaries to produce eggs, tracked via ultrasound and blood hormone tests." },
      { title: "Egg Retrieval & Sperm Processing", description: "Mature eggs retrieved under short anesthesia needle guidance; sperm processed and selected." },
      { title: "Embryo Culture & Transfer", description: "Eggs & sperms combined (or ICSI performed); healthy embryos transferred 2–5 days later, with extra embryos frozen." }
    ],
    benefits: [
      "State-of-the-art IVF laboratory with strict quality control led by Dr. Jyoti Shah",
      "High success rate protocols with ethical, transparent, and affordable IVF packages",
      "Complete under-one-roof care from fertility screening to delivery"
    ]
  },
  infertility: {
    slug: "infertility",
    title: "Infertility Care",
    department: "IVF & Fertility Wing",
    category: "IVF & Infertility",
    summary:
      "Comprehensive evaluation, personalized treatment plans, and advanced reproductive solutions to help couples achieve parenthood.",
    image: "/assets/img/images/Infertility.jpg",
    content: [
      "Infertility is defined by WHO as the inability to conceive after 12 months of regular, unprotected intercourse.",
      "Infertility is rising globally among both men and women. At Maa Nursing Home and NetraJyoti Eyecare Centre, we offer a complete range of diagnostic and treatment options through our dedicated Infertility Clinic, led by Dr. Jyoti Shah — senior gynaecologist, obstetrician and infertility specialist.",
      "Our highly trained IVF and fertility experts use advanced technology and strict safety protocols, ensuring some of the highest success rates in the country.",
      "Each couple receives a customized treatment plan tailored to their medical history, diagnosis and personal needs."
    ],
    symptoms: [
      "Unable to conceive after 1 year of regular unprotected intercourse",
      "Female partner age over 35 years",
      "Irregular menstrual cycles or severe period-related issues",
      "Erection/ejaculation issues or pain/swelling in testicles",
      "History of scrotal, testicular, or pelvic surgeries"
    ],
    causes: [
      "Female: Ovulatory dysfunction, Endometriosis, advanced maternal age, fibroids, uterine abnormalities",
      "Male: Low sperm count (<15M/mL), poor motility, abnormal morphology, blockages, anti-sperm antibodies",
      "Lifestyle: Smoking, alcohol, obesity, stress, and environmental exposures"
    ],
    diagnosis: [
      "Comprehensive couple evaluation, semen analysis, and pelvic ultrasound",
      "Hormone blood assays, ovulation tracking, and diagnostic laparoscopy/hysteroscopy"
    ],
    treatmentSteps: [
      { title: "Fertility Screening & Ovulation Tracking", description: "Comprehensive couple evaluation and follicular monitoring." },
      { title: "Assisted Reproductive Technology (IUI / IVF / ICSI)", description: "IUI, IVF, ICSI, and donor programs (Egg/Sperm/Embryo donation) tailored to the couple." },
      { title: "Surrogacy & Surgical Correction", description: "Minimal access fertility surgery and legal surrogacy pathways." }
    ],
    benefits: [
      "Led by senior fertility specialist Dr. Jyoti Shah with state-of-the-art IVF labs",
      "Full spectrum of fertility options: IUI, IVF, ICSI, Donor Programs, and Laparoscopy",
      "High success rates with personalized compassionate care for both partners"
    ]
  },
  iui: {
    slug: "iui",
    title: "IUI (Intrauterine Insemination)",
    department: "IVF & Fertility Wing",
    category: "IVF & Infertility",
    summary:
      "A simple, effective fertility treatment where highly motile sperm is placed directly into the uterus to improve chances of conception.",
    image: "/assets/img/images/IUI.png",
    content: [
      "A minimally invasive fertility treatment that increases the number of healthy sperm reaching the egg.",
      "At Maa Nursing Home and NetraJyoti Eyecare Centre, IUI (Intrauterine Insemination) is one of the primary infertility treatments offered to couples. In IUI, highly motile and processed sperms are placed directly into the woman’s uterus, increasing the chances of sperm meeting the egg naturally.",
      "The sperm used may be from the woman’s partner or a screened donor, depending on the medical condition.",
      "Recommended for male subfertility, cervical factor infertility, endometriosis, ejaculatory problems, or when donor sperm is needed."
    ],
    symptoms: [
      "Unexplained difficulty conceiving after timed intercourse",
      "Mild male subfertility (low sperm count or motility)",
      "Cervical factor infertility or hostile cervical mucus",
      "Ejaculatory dysfunction or requirement of donor sperm"
    ],
    causes: [
      "Mild male factor subfertility",
      "Anovulation or cervical mucus hostilities",
      "Azoospermia in male partner (requiring donor IUI)"
    ],
    diagnosis: [
      "Comprehensive semen analysis and swim-up/density gradient sperm processing test",
      "Follicular ultrasound tracking to monitor egg maturation"
    ],
    treatmentSteps: [
      { title: "Counselling & Ovarian Stimulation", description: "Medications stimulate egg growth monitored by ultrasound follicular scans." },
      { title: "Semen Collection & Processing", description: "Sperm washed via Swim-Up or Density Gradient to isolate top motile sperm." },
      { title: "Insemination & 14-Day Wait", description: "Fine catheter places processed sperm in uterus 12–36 hours post-HCG; pregnancy test in 14 days." }
    ],
    benefits: [
      "Simple, quick, and painless procedure taking only 10–15 minutes without anesthesia",
      "Significantly more affordable first-line treatment than IVF",
      "Enhanced sperm washing isolates the healthiest motile sperms for direct placement"
    ]
  },
  icsi: {
    slug: "icsi",
    title: "ICSI (Intra-Cytoplasmic Sperm Injection)",
    department: "IVF & Fertility Wing",
    category: "IVF & Infertility",
    summary:
      "A highly advanced fertilization technique used to overcome severe male infertility and improve IVF success.",
    image: "/assets/img/images/ICSI.png",
    content: [
      "A single healthy sperm is directly injected into an egg to achieve fertilization.",
      "ICSI (Intra-Cytoplasmic Sperm Injection) is an advanced ART (Assisted Reproductive Technology) procedure, primarily used for severe male infertility. Unlike standard IVF—where eggs and sperms are mixed together—ICSI requires only one good sperm, which is manually injected into the egg by an embryologist.",
      "This bypasses sperm motility and morphology problems and increases the chances of successful fertilization.",
      "Maa Nursing Home and NetraJyoti Eyecare Centre is equipped with specialized micromanipulation technology and expert embryologists to perform ICSI with high accuracy."
    ],
    symptoms: [
      "Very low or zero sperm count (azoospermia)",
      "Poor sperm motility or abnormal sperm morphology",
      "Failed fertilization in previous standard IVF cycles",
      "High anti-sperm antibodies or severe female endometriosis"
    ],
    causes: [
      "Severe male factor infertility (Oligo-astheno-teratozoospermia)",
      "Ejaculatory dysfunction or obstructive/non-obstructive azoospermia"
    ],
    diagnosis: [
      "Detailed male and female fertility evaluation, semen CASA testing, and ovarian reserve assessment"
    ],
    treatmentSteps: [
      { title: "Ovarian Stimulation & Egg Retrieval", description: "Injections stimulate ovaries to produce eggs, retrieved under ultrasound guidance." },
      { title: "Sperm Selection & Micro-Injection (ICSI)", description: "High-magnification micromanipulation selects single motile sperm injected directly into mature egg." },
      { title: "Embryo Culture & Transfer", description: "Embryos cultured 2–5 days and high-quality embryos transferred into uterus." }
    ],
    benefits: [
      "Ideal solution for severe male infertility requiring only one healthy sperm cell per egg",
      "Significantly higher fertilization rates and overcomes past standard IVF failures",
      "Performed in high-tech micromanipulation labs led by expert embryologists"
    ]
  },
  tesapesa: {
    slug: "tesapesa",
    title: "Surgical Sperm Retrieval (TESA / PESA)",
    department: "IVF & Fertility Wing",
    category: "IVF & Infertility",
    summary:
      "Advanced minimally invasive techniques to retrieve sperm in cases of azoospermia for successful assisted reproduction.",
    image: "/assets/img/images/TESA PESA.png",
    content: [
      "Effective sperm retrieval solutions for men with obstructive or non-obstructive azoospermia.",
      "Some men have very low sperm count or no sperm in their ejaculate (azoospermia). In such cases, sperm can still be retrieved surgically using PESA or TESA.",
      "PESA retrieves sperm from the epididymis, while TESA retrieves sperm directly from the testicular tubules. These retrieved sperms are then used for ICSI to achieve pregnancy.",
      "Both procedures are done under local anaesthesia, are minimally invasive and are day-care procedures."
    ],
    symptoms: [
      "Azoospermia (zero sperm in ejaculated semen)",
      "Severe male subfertility or ejaculatory obstruction",
      "History of vasectomy, undescended testes, or testicular trauma"
    ],
    causes: [
      "Obstructive Azoospermia: Blockage in vas deferens or epididymis (post-infection, post-surgery, or congenital absence)",
      "Non-Obstructive Azoospermia: Impaired sperm production due to genetic, hormonal, or testicular causes"
    ],
    diagnosis: [
      "Hormone blood assays (FSH, LH, Testosterone) and testicular ultrasound",
      "Sperm retrieval trial and lab dissection under high-magnification microscope"
    ],
    treatmentSteps: [
      { title: "PESA (Percutaneous Epididymal Sperm Aspiration)", description: "Fine needle inserted into the epididymis to retrieve sperm in obstructive azoospermia under local anesthesia." },
      { title: "TESA (Testicular Sperm Aspiration)", description: "Fine needle inserted directly into the testes to extract testicular tissue for micro-dissection." },
      { title: "ICSI Fertilization & Cryopreservation", description: "Retrieved sperm injected into retrieved eggs via ICSI; extra sperm frozen for future cycles." }
    ],
    benefits: [
      "Enables biological fatherhood even with zero sperm in ejaculated semen",
      "Minimally invasive, day-care procedure under local anesthesia with rapid recovery",
      "High success rates when combined with ICSI fertilization"
    ]
  },
  pcod: {
    slug: "pcod",
    title: "Polycystic Ovarian Disease (PCOD / PCOS)",
    department: "Gynaecology & Obstetrics",
    category: "Gynaec Care",
    summary:
      "A common hormonal disorder in young women that affects ovulation, menstrual cycles, fertility and long-term health — manageable with timely diagnosis, lifestyle changes and medical care.",
    image: "/assets/img/images/pcod.jpeg",
    content: [
      "A hormonal imbalance where ovaries become enlarged and develop multiple small cysts, often causing irregular periods and difficulty conceiving.",
      "Girls usually begin to menstruate around the age of 12. During this time, the body releases hormones such as oestrogen and progesterone in a balanced manner. In some girls and women, this balance is disturbed and male-type hormones (androgens) increase, leading to irregular periods and the formation of multiple cysts in the ovaries.",
      "In PCOD, the ovaries are enlarged and contain many small fluid-filled sacs (cysts). These cysts contain immature eggs that do not get released on time. When eggs are not released regularly (anovulation), it becomes difficult to conceive naturally. PCOS is one of the most common causes of female infertility.",
      "Women with PCOS also have an increased risk of complications in pregnancy such as high blood pressure, gestational diabetes and miscarriage. PCOS commonly affects women between 15 and 44 years of age."
    ],
    symptoms: [
      "Irregular, infrequent, or prolonged menstrual cycles",
      "Hirsutism: Excess facial and body hair growth",
      "Severe acne and oily skin",
      "Male-pattern baldness or thinning hair",
      "Unexplained weight gain and difficulty losing weight",
      "Darkening of skin in skin creases (acanthosis nigricans)"
    ],
    causes: [
      "Hereditary tendency and family history of PCOS or irregular periods",
      "Anovulation — failure of the ovaries to regularly release eggs",
      "High androgen and oestrogen levels (hormonal imbalance)",
      "Obesity or excess weight; overactive adrenal glands",
      "Insulin resistance leading to high insulin levels and further hormonal imbalance"
    ],
    diagnosis: [
      "Menstrual history review to check for irregular or missed periods",
      "Examination for hirsutism, acne or hair loss indicating high androgen levels",
      "Vaginal ultrasound to view enlarged ovaries and multiple small cysts",
      "Blood tests for hormone levels, insulin, sugar and lipid profile"
    ],
    treatmentSteps: [
      { title: "Lifestyle & Weight Management", description: "A 5-10% reduction in body weight through diet and exercise can significantly improve ovulation and hormone balance." },
      { title: "Medical Management", description: "Anti-diabetic medicines for insulin resistance, and hormone therapy to suppress excess androgen/oestrogen, reduce cysts and regulate cycles." },
      { title: "Ovulation Induction with IUI", description: "Medicines stimulate egg development with closely monitored timing, followed by IUI to improve conception chances." },
      { title: "Laparoscopic Ovarian Drilling / IVF", description: "Minimally invasive drilling of the thickened ovarian capsule to restore ovulation, or IVF for patients who do not conceive with medication and IUI." }
    ],
    benefits: [
      "Restoration of regular menstrual cycles",
      "Ovulation induction for conception, including IUI and IVF pathways",
      "Metabolic & hormonal balance management with individualised lifestyle plans",
      "Comprehensive monitoring and counselling from a dedicated gynaecology & infertility team"
    ]
  },
  amenorrhea: {
    slug: "amenorrhea",
    title: "Amenorrhea",
    department: "Gynaecology & Obstetrics",
    category: "Gynaec Care",
    summary:
      "Absence of menstrual periods outside of pregnancy, breastfeeding or menopause — a condition that needs evaluation to protect long-term reproductive and hormonal health.",
    image: "/assets/img/images/Amenorrhea.jpg",
    content: [
      "Amenorrhea is the absence of menstrual periods in a woman during her reproductive years, apart from natural causes such as pregnancy, breastfeeding and menopause.",
      "Menstruation is a natural monthly cycle that usually starts around the age of 12 and continues until about 50–51 years. During each cycle, the uterine lining builds up and is shed as menstrual bleeding if pregnancy does not occur.",
      "Women normally do not get their periods during pregnancy, breastfeeding (lactational amenorrhoea) and after menopause. When periods are absent outside of these natural causes, the condition is known as amenorrhea.",
      "Primary Amenorrhea occurs when a girl does not get her first period by age 16 with poorly developed secondary sexual characteristics. Secondary Amenorrhea occurs when a woman with previously regular cycles stops menstruating for 6 months."
    ],
    symptoms: [
      "Absence of menstrual periods outside of pregnancy/menopause",
      "Lack of breast development in young girls (Primary Amenorrhea)",
      "Excess facial or body hair (hirsutism)",
      "Vaginal dryness",
      "Galactorrhoea: Milky discharge from nipples"
    ],
    causes: [
      "Hereditary factors and genetic disorders (e.g. Turner's syndrome) for primary amenorrhea",
      "Congenital Müllerian defects affecting uterine development",
      "Stress, depression, low BMI, eating disorders or heavy exercise for secondary amenorrhea",
      "Hypothyroidism, Asherman's syndrome, or prolactin-secreting pituitary tumours",
      "Stopping oral contraceptive pills or certain birth control methods"
    ],
    diagnosis: [
      "Physical examination to assess secondary sexual characteristics and abnormalities",
      "Detailed medical history including menstrual pattern, weight changes and stress levels",
      "Blood tests for thyroid, prolactin, FSH, LH and oestrogen levels",
      "Pelvic ultrasound to check for structural or anatomical issues; X-ray or imaging if needed"
    ],
    treatmentSteps: [
      { title: "Hormonal Evaluation", description: "Blood tests identify thyroid, prolactin or other endocrine causes behind the missed periods." },
      { title: "Hormone Replacement / Medication", description: "Targeted medicines correct hormonal imbalances and treat identified endocrine disorders." },
      { title: "Lifestyle & Nutritional Correction", description: "Stress management, adequate rest, proper diet and a moderate exercise regime address weight- or lifestyle-related causes." },
      { title: "Surgical Correction", description: "Where structural abnormalities like Müllerian defects or Asherman's syndrome are found, surgery restores normal menstrual function where possible." }
    ],
    benefits: [
      "Hormonal & pelvic ultrasound screening for accurate diagnosis",
      "Thyroid & prolactin profile evaluation",
      "Individualised cycle restoration guidance and counselling",
      "Focus on long-term reproductive and bone health"
    ]
  },
  endometriosis: {
    slug: "endometriosis",
    title: "Endometriosis",
    department: "Gynaecology & Obstetrics",
    category: "Gynaec Care",
    summary:
      "A chronic gynaecological condition where endometrial tissue grows outside the uterus, causing pain, heavy periods and sometimes infertility.",
    image: "/assets/img/images/Endometriosis.jpeg",
    content: [
      "A common condition affecting 5–10% of women, often presenting with severe pain, heavy bleeding and fertility issues.",
      "Endometriosis is a disorder in which endometrial tissue (the lining of the uterus) grows outside the uterus — commonly on the ovaries, fallopian tubes, intestines and pelvic lining.",
      "These tissues still behave like normal endometrium: they thicken, break down and bleed with each menstrual cycle. But since this blood has no natural passage to exit the body, it causes inflammation, pain, cysts and adhesions (organs sticking together).",
      "Symptoms can range from mild to very severe and may include infertility. At Maa Nursing Home and NetraJyoti Eyecare Centre, endometriosis is treated with medicines and, in severe cases, laparoscopic surgery."
    ],
    symptoms: [
      "Pelvic pain (often worsening during periods)",
      "Heavy or prolonged menstrual bleeding with blood clots",
      "Premenstrual spotting and pain radiating to thighs and legs",
      "Infertility and chronic fatigue",
      "Constipation, diarrhoea, bloating, or pain while passing motions",
      "Depression and anxiety due to chronic pain"
    ],
    causes: [
      "Retrograde menstruation — menstrual blood flowing backwards into the pelvis where cells implant and grow",
      "Coelomic metaplasia — transformation of pelvic lining cells into endometrial-like tissue",
      "Transplantation of endometrial tissue during surgery (e.g. Caesarean or episiotomy scars)",
      "Spread via blood or lymph to distant organs",
      "Altered immune system function"
    ],
    treatmentSteps: [
      { title: "Pain-Relief Medication", description: "Medicines control pelvic pain and menstrual cramps." },
      { title: "Hormone-Suppressing Therapy", description: "Oral or injectable drugs reduce or stop cyclical activity of endometrial implants, relieving pain and slowing progression." },
      { title: "Laparoscopic Surgery", description: "For severe or uncontrolled cases, implants are removed and adhesions resected to restore normal pelvic anatomy." },
      { title: "Fertility-Focused Follow-Up", description: "Laparoscopy improves the chances of pregnancy where endometriosis is a cause of infertility." }
    ],
    benefits: [
      "Effective chronic pelvic pain relief through combined medical and laparoscopic approach",
      "Laparoscopic endometriotic cyst and adhesion excision with faster recovery",
      "Fertility preservation protocols alongside pain management",
      "Personalised long-term management from an experienced gynaecology & infertility team"
    ]
  },
  dub: {
    slug: "dub",
    title: "Dysfunctional Uterine Bleeding (DUB)",
    department: "Gynaecology & Obstetrics",
    category: "Gynaec Care",
    summary:
      "Abnormal or irregular uterine bleeding not related to pregnancy, structural disease, or infection — most commonly caused by hormonal imbalance and requiring timely gynecological evaluation.",
    image: "/assets/img/images/Dysfunctional Uterine Bleeding (DUB).jpg",
    content: [
      "Abnormal uterine bleeding without any structural disease — commonly caused by hormonal imbalance.",
      "Dysfunctional Uterine Bleeding (DUB) refers to abnormal, irregular or excessive uterine bleeding that occurs in the absence of pregnancy, infection, tumors or other pelvic disease.",
      "DUB is frequently seen in adolescents and women approaching menopause, when hormonal fluctuations are common. At Maa Nursing Home, we provide accurate diagnosis and personalized treatment plans.",
      "Types include Anovulatory Bleeding (when ovulation does not take place, leading to irregular/prolonged bleeding) and Ovulatory Bleeding (regular cycles with excessive flow)."
    ],
    symptoms: [
      "Heavy menstrual bleeding and bleeding between periods",
      "Prolonged menstrual cycles or irregular/missed periods",
      "Fatigue, weakness, and anemia due to excessive blood loss"
    ],
    causes: [
      "Anovulation — absence of ovulation leading to irregular, prolonged or heavy bleeding",
      "Hormonal imbalance affecting regular ovulatory cycles",
      "Common in adolescents and women approaching menopause"
    ],
    diagnosis: [
      "Detailed menstrual history and physical examination",
      "Ultrasound and blood/hormonal evaluation",
      "Endometrial biopsy in selected cases to rule out serious conditions"
    ],
    treatmentSteps: [
      { title: "Medical Management", description: "Hormonal therapy, oral contraceptives, progesterone or non-hormonal medications regulate cycles and reduce bleeding." },
      { title: "Iron Supplementation", description: "Corrects anemia caused by excessive blood loss." },
      { title: "Surgical Treatment", description: "Considered when medical treatment fails — includes procedures like D&C or hysteroscopy." },
      { title: "Follow-Up", description: "Regular follow-up monitors cycle regularity, hormone balance and overall health." }
    ],
    benefits: [
      "Ultrasound & hysteroscopic diagnostic evaluation",
      "Hormonal therapy & medical control tailored to age and fertility plans",
      "Minimally invasive surgical solutions when needed",
      "Prevents severe anemia and restores hormonal balance and fertility outcomes"
    ]
  },
  menopause: {
    slug: "menopause",
    title: "Menopause",
    department: "Gynaecology & Obstetrics",
    category: "Gynaec Care",
    summary:
      "Guidance and care for women transitioning through menopause — managing hormonal changes, symptoms and long-term health with comfort and support.",
    image: "/assets/img/images/Menopause.jpg",
    content: [
      "A natural transition marking the end of menstrual cycles, often accompanied by physical and emotional changes.",
      "Maa Nursing Home and NetraJyoti Eyecare Centre has a dedicated Menopause Clinic that understands the unique needs of women going through this transition and supports them with personalised guidance and care.",
      "Menopause is the stage when a woman permanently stops getting her periods. It is caused by a natural decline in reproductive hormones — mainly oestrogen and progesterone. If a woman has not had her period for 12 months, she is considered to be in menopause.",
      "Most women experience symptoms after the age of 40. Menopause is not sudden — it progresses gradually over several years through perimenopause, menopause, and post-menopause."
    ],
    symptoms: [
      "Irregular periods and hot flashes/night sweats",
      "Vaginal dryness and pain during intercourse",
      "Fatigue, disturbed sleep, and mood swings/irritability",
      "Dry skin, dry eyes, dry mouth, and hair thinning",
      "Urinary incontinence or urgency",
      "Bone loss (osteoporosis risk) and weight gain"
    ],
    causes: [
      "Natural age-related decline in ovarian estrogen and progesterone production",
      "Premature ovarian failure (ovaries stopping before age 40)",
      "Surgical removal of ovaries (hysterectomy with oophorectomy)",
      "Chemotherapy or radiation therapy damaging ovarian tissue"
    ],
    diagnosis: [
      "Detailed symptom tracking and menstrual pattern evaluation",
      "Blood tests to check hormone levels (FSH, LH, oestrogen)",
      "Bone Mineral Density (DEXA scan) screening for post-menopausal bone health"
    ],
    treatmentSteps: [
      { title: "Hormone Replacement Therapy (HRT)", description: "Customized estrogen-progesterone therapy to manage severe hot flashes and systemic symptoms." },
      { title: "Topical Vaginal Estrogen", description: "Local estrogen creams/tablets for vaginal atrophy, dryness, and urinary comfort." },
      { title: "Osteoporosis Prevention & Lifestyle Care", description: "Calcium, Vitamin D3, bone-sparing medications, and weight-bearing exercise routines." }
    ],
    benefits: [
      "Dedicated Menopause Clinic care by senior gynaecologist Dr. Jyoti Shah",
      "Hormone Replacement Therapy (HRT) and non-hormonal management options",
      "Comprehensive screening for post-menopausal bone loss and heart health"
    ]
  },
  obstetrics: {
    slug: "obstetrics",
    title: "Obstetrics (Maternity Care)",
    department: "Gynaecology & Obstetrics",
    category: "Gynaec Care",
    summary:
      "Comprehensive pregnancy and childbirth care in a warm, safe and homely environment — from pre-conception to delivery and postnatal support.",
    image: "/assets/img/images/Obstetrics (Maternity Care).jpg",
    content: [
      "A 'home away from home' for mothers-to-be, with personalised care throughout pregnancy, childbirth and the postnatal period.",
      "Motherhood is one of the most beautiful experiences in a woman’s life. Maa Nursing Home and NetraJyoti Eyecare Centre offers a warm, cosy and reassuring environment for your entire maternity journey — from registration of pregnancy to the safe delivery of your baby.",
      "Our Obstetrics department is led by Dr Jyoti Shah, a senior and well-known gynaecologist and obstetrician, who personally attends to every expectant mother with care and compassion.",
      "We provide comprehensive pre-natal and antenatal care, and offer different delivery options depending on the mother’s health condition and preferences — always prioritising safety for both mother and baby."
    ],
    symptoms: [
      "Prenatal screening and routine pregnancy check-ups",
      "High-risk pregnancy complications (hypertension, diabetes, eclampsia)",
      "Preterm labor or risk of premature delivery",
      "Multiple pregnancies (twins, triplets)",
      "Antepartum or postpartum hemorrhage management"
    ],
    causes: [
      "Normal physiological pregnancy changes",
      "High-risk maternal conditions requiring specialist monitoring"
    ],
    diagnosis: [
      "Ultrasonography, NST (Non-Stress Test), and fetal heart rate monitoring",
      "Fetal medicine, genetics support, and routine blood/urine antenatal profiles"
    ],
    treatmentSteps: [
      { title: "Normal & Pain-Free Delivery", description: "Safe vaginal delivery in a well-equipped labor room with pain-free delivery options." },
      { title: "C-Section & High-Risk Management", description: "Cesarean delivery and expert management for high-risk maternal/fetal conditions." },
      { title: "Instrumental Delivery & Postnatal Care", description: "Forceps/vacuum assisted delivery, breastfeeding counseling, and legal MTP/family planning services." }
    ],
    benefits: [
      "Personalized maternity care led by senior obstetrician Dr. Jyoti Shah",
      "Safe normal delivery, pain-free labor, and C-section facilities",
      "Government-registered facility for safe MTP, high-risk care, and family planning"
    ]
  },
  laparoscopy: {
    slug: "laparoscopy",
    title: "Laparoscopy",
    department: "Laparoscopic Surgical Wing",
    category: "Laparoscopy & Surgery",
    summary:
      "A minimally invasive diagnostic and therapeutic procedure used to evaluate and treat infertility and various gynaecological conditions.",
    image: "/assets/img/images/Laparoscopy.jpeg",
    content: [
      "A key-hole surgical method used to diagnose and treat conditions affecting a woman’s reproductive health.",
      "Laparoscopy is a minimally invasive procedure that allows the doctor to look directly at the uterus, fallopian tubes, ovaries and pelvic structures. It is extremely useful in evaluating unexplained infertility and treating abnormalities that prevent conception.",
      "The surgeon makes 2–3 small incisions in the abdomen and inserts thin fibre-optic instruments equipped with a light and camera. If abnormalities are found, they can often be corrected during the same procedure, avoiding major surgery."
    ],
    symptoms: [
      "Unexplained infertility or repeated pregnancy loss",
      "Endometriosis and chronic pelvic pain",
      "Ovarian cysts, fibroids, or pelvic adhesions",
      "Blocked or damaged fallopian tubes (hydrosalpinx)"
    ],
    causes: [
      "Pelvic inflammatory disease (PID) or genital tuberculosis (TB)",
      "Endometriosis implants causing pelvic adhesions",
      "PCOS requiring laparoscopic ovarian drilling"
    ],
    diagnosis: [
      "Direct laparoscopy visualization via 2-3 keyhole abdominal incisions",
      "Diagnostic chromopertubation (tubal dye test) during laparoscopy"
    ],
    treatmentSteps: [
      { title: "Keyhole Incision & Scope Insertion", description: "2-3 small 5mm incisions made in the abdomen for camera and micro-instrument access." },
      { title: "Diagnostic Survey & Chromopertubation", description: "Inspection of pelvic organs and methylene blue dye injection to confirm tubal patency." },
      { title: "Surgical Correction & Day-Care Recovery", description: "Adhesiolysis, cystectomy, fibroid removal, or tubal clipping performed with same-day discharge." }
    ],
    benefits: [
      "Minimally invasive keyhole surgery with tiny incisions and minimal scarring",
      "Diagnoses and treats root causes of infertility in a single day-care sitting",
      "Rapid recovery with 1–2 days of rest compared to open abdominal surgery"
    ]
  },
  hysteroscopy: {
    slug: "hysteroscopy",
    title: "Hysteroscopy",
    department: "IVF & Fertility Wing",
    category: "IVF & Infertility",
    summary:
      "A minimally invasive procedure that allows direct visualization and treatment of abnormalities inside the uterus.",
    image: "/assets/img/images/Hysteroscopy.png",
    content: [
      "A thin telescope-like instrument is used to examine the cervix and uterus to diagnose and treat reproductive abnormalities.",
      "Hysteroscopy is a short, minimally invasive procedure used when a woman experiences heavy bleeding, painful periods, infertility, or recurrent miscarriages. A hysteroscope (a thin fibre-optic telescope) is inserted through the vagina to directly visualize the uterine cavity.",
      "It is used for both diagnosis and treatment, often helping identify and correct fibroids, endometrial polyps, intrauterine scar tissue (adhesions), uterine septum, tubal block at the utero-tubal junction, and lesions interfering with IVF implantation.",
      "Diagnostic hysteroscopy usually takes about 30 minutes under local anaesthesia. If abnormalities are found, they can be removed in the same sitting (operative hysteroscopy)."
    ],
    symptoms: [
      "Heavy bleeding or painful menstrual periods",
      "Unexplained infertility or repeated IVF implantation failures",
      "Recurrent miscarriages",
      "Abnormal uterine bleeding outside menstruation"
    ],
    causes: [
      "Endometrial polyps, submucosal fibroids, or uterine septum",
      "Intrauterine adhesions (Asherman’s syndrome) or cornual tubal blockage",
      "Endometritis or adenomyosis affecting the uterine cavity"
    ],
    diagnosis: [
      "Diagnostic hysteroscopy directly visualizing the cervical canal and uterine cavity",
      "Pre-IVF cavity evaluation and histopathological assessment of uterine lining"
    ],
    treatmentSteps: [
      { title: "Diagnostic Hysteroscopy", description: "30-minute evaluation using a thin fibre-optic telescope under local anaesthesia." },
      { title: "Operative Hysteroscopy", description: "Same-sitting surgical removal of polyps, fibroids, or scar tissue under direct vision." },
      { title: "Hysteroscopic Tubal Cannulation", description: "Guidewire insertion to clear mucus plugs and restore tubal patency in cornual blocks." }
    ],
    benefits: [
      "Direct visualization of the uterine cavity without external abdominal incisions",
      "Significantly improves IVF implantation rates and resolves recurrent miscarriages"
    ]
  }
};
