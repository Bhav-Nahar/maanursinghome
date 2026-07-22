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
    title: "Computer Vision Syndrome (CVS)",
    department: "Eye Care (Ophthalmology)",
    category: "Eye Care",
    summary: "Diagnosis and relief for digital eye strain, dryness, fatigue, and headaches caused by prolonged screen exposure.",
    image: "/assets/img/images/Computer Vision Syndrome.jpg",
    content: [
      "Computer Vision Syndrome (CVS), also known as Digital Eye Strain, is a collection of eye and musculoskeletal problems resulting from extended use of computers, laptops, mobile phones, tablets and other digital devices. With screens now central to work and daily life, the eyes are subjected to constant strain that can become chronic and distressing if not addressed early.",
      "Viewing digital screens is visually more demanding than reading printed text — letters on screens lack sharp contrast and are affected by glare, reflections and poor lighting. Continuous focusing, improper screen distance, incorrect posture and uncorrected or under-corrected vision problems increase the strain on the eyes, while poor ergonomics often leads to muscle strain in the neck, shoulders and back that worsens symptoms further.",
      "While symptoms may initially ease with rest, persistent screen exposure without corrective measures can worsen the condition. Fortunately, CVS can be effectively prevented and managed through simple habit changes and professional guidance, and early diagnosis with lifestyle correction significantly reduces symptoms and prevents long-term eye discomfort."
    ],
    symptoms: [
      "Eyestrain, eye fatigue, burning sensation, itching or irritation",
      "Blurred or fluctuating vision; double vision",
      "Dry or red eyes",
      "Frequent headaches",
      "Neck, shoulder and back pain"
    ],
    causes: [
      "Reduced blink rate during screen usage (from 18 blinks/min down to 4-5)",
      "Uncorrected refractive errors and improper spectacles or contact lenses",
      "Poor room lighting, screen glare and reflections",
      "Improper viewing distance and posture (poor ergonomics)"
    ],
    diagnosis: [
      "Comprehensive eye examination evaluating vision, focusing ability and eye coordination",
      "Detailed history of screen usage, work habits, posture, medical conditions and medications"
    ],
    treatmentSteps: [
      { title: "The 20-20-20 Rule", description: "Every 20 minutes, look away from the screen and focus on an object 20 feet away for at least 20 seconds." },
      { title: "Corrective & Protective Eyewear", description: "Anti-glare or computer-specific eyeglasses, special lens coatings, or blue-light filters as needed." },
      { title: "Vision Therapy", description: "Targeted exercises for focusing and eye coordination issues where indicated." },
      { title: "Ergonomic & Habit Correction", description: "Proper screen height, distance and posture, controlled room lighting, clean screens, frequent breaks, and regular eye check-ups." }
    ],
    benefits: [
      "Comprehensive digital eye strain evaluation and tear film assessment",
      "Custom ergonomic & spectacle guidance including blue-light filters",
      "Vision therapy for focusing and coordination issues",
      "Relief from digital fatigue, headaches and screen-related discomfort"
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
      "Tears are essential for lubricating, nourishing and protecting the front surface of the eyes — a complex mixture of water, oils and mucus that spreads evenly across the eye surface with every blink, coating the cornea, reducing infection risk, washing away foreign particles and maintaining a smooth, clear surface. When the eyes do not produce enough tears, or when tear quality is poor, the eyes become dry and irritated — a condition known as Dry Eye Disease. It is more common in older individuals and is usually chronic in nature.",
      "People with dry eyes may have reduced tear production, poor tear quality, or both. The goal of treatment is to restore and maintain adequate tear quantity and quality, with personalized treatment based on severity, combined with self-care measures such as conscious blinking, protective sunglasses, adequate hydration and increased indoor humidity."
    ],
    symptoms: [
      "Stinging, burning or scratchy sensation in eyes",
      "Sensitivity to light",
      "Foreign body sensation (feeling of something in the eye)",
      "Excessive tearing (reflex tears) and difficulty wearing contact lenses",
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
      "Clinical evaluation of tear quantity and quality",
      "Assessment of severity to determine personalized treatment"
    ],
    treatmentSteps: [
      { title: "Artificial Tear Drops", description: "The primary treatment, used to supplement natural tear production." },
      { title: "Conservation of Tears", description: "A minor surgical procedure that closes the tear ducts (punctal occlusion) to retain tears longer on the eye surface." },
      { title: "Self-Care Measures", description: "Conscious blinking during screen use, protective sunglasses, adequate hydration and increased indoor humidity." }
    ],
    benefits: [
      "Personalized treatment based on severity of dry eye disease",
      "Artificial tear drops and punctal occlusion (tear conservation) options",
      "Lifestyle and self-care guidance to reduce recurrence",
      "Significant reduction in discomfort and improved eye surface health"
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
      "The retina is a thin, light-sensitive layer lining the back of the eye. Light entering the eye is focused onto the retina, which sends visual signals to the brain through the optic nerve. Retinal detachment occurs when the retina separates from the tissues that nourish it, disrupting these signals; if not treated promptly it can result in permanent loss of vision, making it a true medical emergency.",
      "Detachment can occur in different ways: Rhegmatogenous, caused by a tear or break in the retina; Exudative (Secondary), caused by fluid accumulation without a retinal tear; and Tractional, caused by scar tissue pulling the retina away. It is usually painless, but warning signs often appear suddenly and require immediate evaluation.",
      "Treatment depends on the type, size and severity of the detachment. Doctors at Maa Nursing Home and NetraJyoti Eyecare Centre offer advanced surgical treatments, and early intervention prevents permanent vision loss, has a higher success rate, and preserves both central and peripheral vision."
    ],
    symptoms: [
      "Flashing lights, especially in peripheral vision",
      "Floaters — black spots, threads, cobwebs or moving specks in vision",
      "A shadow, curtain or dark area covering part of the vision"
    ],
    causes: [
      "Retinal tears or holes due to vitreous shrinkage",
      "Age above 40 years",
      "High myopia (severe nearsightedness)",
      "Previous retinal detachment in one eye, or previous cataract surgery",
      "Eye injuries (sports trauma such as boxing or bungee jumping)",
      "Family history of retinal detachment; eye diseases such as retinoschisis, uveitis or lattice degeneration"
    ],
    diagnosis: [
      "Dilated pupil examination to thoroughly examine the retina",
      "Ocular ultrasonography to confirm the diagnosis when suspected"
    ],
    treatmentSteps: [
      { title: "Cryopexy", description: "Used when detachment is caused by a retinal tear or hole; this freeze treatment seals the tear and reattaches the retina." },
      { title: "Scleral Buckling", description: "A small synthetic band is placed permanently around the eye to gently push the eye wall against the detached retina." },
      { title: "Pneumatic Retinopexy", description: "A gas bubble is injected into the eye to press the retina back into place while laser or cryotherapy seals the tear." },
      { title: "Vitrectomy & LASER Photocoagulation", description: "Vitrectomy removes the vitreous gel (replaced with gas or silicone oil) for large or complex detachments; LASER seals retinal tears or holes to prevent progression." }
    ],
    benefits: [
      "Emergency retinal screening and same-visit diagnosis",
      "Full range of surgical options: cryopexy, scleral buckling, pneumatic retinopexy and vitrectomy",
      "Laser photocoagulation for retinal breaks & tears",
      "Higher success rates and vision preservation with prompt treatment"
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
      "A squint, medically known as strabismus, occurs when both eyes do not look at the same object at the same time. While one eye looks straight, the other may turn inwards, outwards, upwards or downwards. Squint can be present from birth or develop later in life due to eye injury, nerve problems or other illnesses, and may be constant or intermittent (usually noticed when tired).",
      "Apart from cosmetic concerns and social embarrassment, untreated squint can lead to reduced vision in one eye (amblyopia) and loss of 3D (binocular) vision. In the first few months of life, a baby learns to focus and use both eyes together — if proper visual impulses are not received, amblyopia and loss of binocular vision can result.",
      "Squints can often be improved or corrected with a combination of non-surgical and surgical treatments depending on the cause and severity. Surgical planning uses nomograms — tables developed from the results of thousands of squint surgeries — to decide how much to tighten or loosen the eye muscles. Squint correction is available for both children and adults at Maa Nursing Home."
    ],
    symptoms: [
      "Eyes looking in different directions at the same time; eyes that do not move together",
      "Squinting or closing one eye, especially in bright sunlight",
      "Poor side (peripheral) vision and poor depth perception",
      "Double vision (diplopia), mainly in adults with recently developed squint"
    ],
    causes: [
      "Refractive errors such as hyperopia, myopia and astigmatism, or unequal power between the two eyes",
      "Brain trauma or other neurological causes; Sixth Cranial Nerve palsy or Myasthenia gravis",
      "Duane's Syndrome, Strabismus Fixus, or decompensation after previous squint surgery",
      "Paralytic squint due to hypertension or diabetes; Thyroid Eye Disease",
      "Family history of squint; significant hyperopia straining the eyes to turn inwards"
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
    summary: "Advanced diagnostic imaging and anti-VEGF treatment for dry and wet macular degeneration in senior citizens.",
    image: "/assets/img/images/ARMD.jpg",
    content: [
      "Age-related macular degeneration (ARMD) is a deterioration of the macula, the central part of the retina responsible for sharp, straight-ahead vision. The primary cause is ageing; as the macula degenerates, fine tasks such as reading, threading a needle, or recognising faces become difficult. ARMD usually begins in one eye and may gradually affect the other, and many people remain unaware of it until noticeable vision changes occur or during a routine eye examination.",
      "There are two types: Dry ARMD (Atrophic), the most common form, caused by thinning of the macula and accumulation of drusen deposits, with slow and gradual vision loss; and Wet ARMD (Exudative), where abnormal blood vessels grow under the retina and leak fluid or blood, causing faster and more severe vision loss. ARMD alone rarely causes total blindness — most patients retain peripheral vision and can move around independently.",
      "The exact cause of dry ARMD is unknown, but research points to a combination of heredity and environmental factors such as smoking, obesity and diet. If wet ARMD develops in one eye, there is an increased risk of it occurring in the other."
    ],
    symptoms: [
      "Straight lines appearing bent, wavy or distorted — an important warning sign requiring immediate evaluation",
      "Reduced or blurred central vision; dark or blank spots in central vision",
      "Need for brighter light while reading; difficulty adapting to low light",
      "Faded or dull colours; difficulty recognising faces",
      "No symptoms at all in early and intermediate dry ARMD"
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
      "Prevention guidance covering diet, smoking cessation and blood pressure control",
      "Low vision aids counseling for advanced cases"
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
      "The cornea is the thin, transparent tissue covering the front of the eye, responsible for nearly two-thirds of the eye's focusing power. For clear vision the cornea must remain smooth, compact and transparent; if it becomes swollen, scarred or cloudy due to disease or injury, vision can be severely reduced or completely lost, and a corneal transplant becomes the only way to restore vision. Corneal blindness is one of the leading causes of blindness in India, with more than 10 lakh people blind in both eyes as of 2019.",
      "Traditionally, full-thickness corneal transplants were performed. Today, Descemet Stripping Automated Endothelial Keratoplasty (DSAEK) allows selective replacement of only the damaged endothelial cells (inner corneal layer), preserving the healthy outer cornea. This technique uses a much smaller incision, requires fewer stitches, and results in faster healing and better visual recovery compared to traditional transplants. A healthy donor cornea is obtained, a thin layer containing endothelial cells is carefully prepared and inserted into the patient's eye, and once positioned the donor tissue attaches and begins clearing corneal swelling and improving vision.",
      "DSAEK is an outpatient procedure typically taking 45-60 minutes with no hospital stay required. Full recovery usually takes about three months, with vision gradually improving within one to two weeks; patients are advised to lie flat on their back for the first few days (typically 45 minutes out of every hour) to help the graft attach properly."
    ],
    symptoms: [
      "Blurred, cloudy or reduced vision due to corneal swelling or scarring",
      "Glare and light sensitivity from a cloudy cornea",
      "Vision loss following previous corneal transplant failure"
    ],
    causes: [
      "Fuchs' endothelial dystrophy",
      "Posterior polymorphous membrane dystrophy",
      "Congenital hereditary endothelial dystrophy",
      "Bullous keratopathy and Iridocorneal endothelial (ICE) syndrome",
      "Failed previous corneal transplants"
    ],
    diagnosis: [
      "Corneal examination to assess the extent and layer of damage",
      "Determination of whether damage is limited to the endothelial layer (suitable for DSAEK) or full-thickness (requiring full corneal transplant)"
    ],
    treatmentSteps: [
      { title: "Donor Tissue Preparation", description: "A healthy donor cornea is obtained and a thin layer containing endothelial cells is carefully prepared." },
      { title: "Graft Insertion", description: "The prepared endothelial layer is inserted into the patient's eye through a small incision requiring minimal stitches." },
      { title: "Graft Attachment", description: "The donor tissue attaches to the patient's cornea and begins functioning like natural endothelial cells, clearing corneal swelling." },
      { title: "Post-Operative Positioning & Recovery", description: "Patients lie flat on their back for the first few days to aid graft attachment, use prescribed antibiotic and steroid drops, and avoid rubbing, swimming or heavy lifting during the roughly three-month recovery." }
    ],
    benefits: [
      "Minimally invasive partial-thickness corneal transplantation",
      "Stitchless/minimal-stitch endothelial graft placement with a smaller incision",
      "Faster visual recovery and higher success rate than full-thickness transplant",
      "Preserves healthy corneal tissue; outpatient procedure with no hospital stay"
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
      "Early childhood is the most critical period for vision development, and any eye problem during this time can have long-term consequences if not treated promptly. Children often do not complain about vision problems because they don't know what 'normal' vision is, so Maa Nursing Home and NetraJyoti Eyecare Centre specialize in child-friendly eye examinations and treatments tailored to young patients.",
      "Common paediatric eye conditions include refractive errors (nearsightedness, farsightedness or astigmatism), amblyopia (lazy eye) caused by reduced vision in one eye during development, squint (strabismus), paediatric cataract present from birth or early childhood, ROP (Retinopathy of Prematurity) affecting premature infants, and allergic conjunctivitis. We offer comprehensive evaluation and management of all these disorders in a comforting environment, including amblyopia patching therapy, paediatric cataract surgery with IOL implantation, ROP screening, vision screening for school children, and both non-surgical and surgical squint correction.",
      "Treatment is most effective when started early — the first eye exam is recommended by age 3, and regular screening is crucial for school-age children to ensure vision problems are not affecting academic performance or sports activities."
    ],
    symptoms: [
      "Child squints or tilts head to see",
      "Frequent eye rubbing or watering",
      "Difficulty reading or seeing the board at school",
      "Family history of eye problems"
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
    title: "Oculoplasty & Eyelid Surgery",
    department: "Eye Care (Ophthalmology)",
    category: "Eye Care",
    summary: "Reconstructive and aesthetic surgery of the eyelids, tear duct (dacrocystitis), and eye socket.",
    image: "/assets/img/images/imgi_3_eye_intro.png",
    content: [
      "Oculoplasty is a specialized field of ophthalmology focusing on the structures around the eye — eyelids, tear ducts, and the eye socket (orbit). Oculoplastic surgery involves procedures that improve the function, comfort, and appearance of the eyes and surrounding areas, combining ophthalmic precision with plastic surgery principles.",
      "Common conditions treated include ptosis (drooping upper eyelid that can block vision), entropion and ectropion (eyelids turning inwards or outwards causing irritation), blocked tear ducts leading to constant watering, eyelid tumors and cysts, orbital fractures after trauma, thyroid eye disease, and cases requiring enucleation/evisceration with prosthetic fitting.",
      "Our specialized surgeons perform DCR (Dacryocystorhinostomy) to create a new drainage path for tears when the natural duct is blocked, ptosis correction to lift the drooping eyelid, cosmetic blepharoplasty to remove excess eyelid skin or fat, ocular oncology for tumor removal, and customized artificial eye (prosthesis) fitting for patients who have lost an eye."
    ],
    diagnosis: [
      "Detailed evaluation of eyelid position, tear duct function, and orbital structures",
      "Assessment for underlying causes such as thyroid eye disease or trauma"
    ],
    treatmentSteps: [
      { title: "DCR (Dacryocystorhinostomy)", description: "Creates a new path for tears to drain into the nose when the natural duct is blocked, stopping chronic watering and infections." },
      { title: "Ptosis Correction", description: "Surgery to lift a drooping eyelid — congenital or age-related — improving both vision and appearance." },
      { title: "Cosmetic Oculoplasty (Blepharoplasty)", description: "Removal of excess skin or fat from the upper and/or lower eyelids for a more youthful, rested appearance." },
      { title: "Ocular Oncology & Prosthesis", description: "Precise surgical removal of eyelid or orbital tumors, and customized artificial eye fitting matching natural color and movement." }
    ],
    benefits: [
      "Experienced oculoplastic surgeons with an advanced surgical facility",
      "Drooping eyelid (Ptosis) repair and DCR tear duct surgery",
      "Cosmetic eyelid rejuvenation with personalized follow-up",
      "Integration of both functional restoration and aesthetic outcomes"
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
      "LASIK (Laser-Assisted In Situ Keratomileusis) reshapes the cornea using an excimer LASER to correct refractive errors such as myopia (short-sight), hypermetropia (long-sight) and astigmatism. The cornea accounts for about 70% of the eye's focusing power; when light does not focus precisely on the retina, vision becomes blurred, and LASIK corrects this by reshaping the cornea. We offer both Contoura LASIK (topography-guided, with a manually created flap) and Bladeless Femto-LASIK (flap created with a Femto Second LASER for enhanced precision), performed by Dr Jugal Shah.",
      "You may be suitable for LASIK if you are above 18 years of age, have had stable spectacle power for at least 6 months, and do not have uncontrolled diabetes or other major systemic issues. LASIK can typically correct myopia up to -18.0 D, hypermetropia from +1.0 D to +6.0 D, and astigmatism from -1.0 D to -6.0 D. It is usually not advised for those with corneal thinning disorders, very thin corneas, very large pupils, or advanced age-related eye changes.",
      "During the procedure, local anaesthetic eye drops are used (no injections), a suction ring is applied, and a thin corneal flap is created either manually or with a Femto Second LASER. The flap is lifted, the excimer LASER reshapes the underlying corneal tissue, and the flap is repositioned, adhering naturally without stitches. The entire procedure takes about 15-20 minutes, both eyes can often be treated in the same sitting, and no hospitalization is required."
    ],
    symptoms: [
      "Blurred vision due to myopia, hypermetropia or astigmatism, corrected by reshaping the cornea"
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
    title: "In-Vitro Fertilization (IVF) & ICSI",
    department: "IVF & Fertility Wing",
    category: "IVF & Infertility",
    summary: "Advanced assisted reproductive technology (ART) led by Dr. Jyoti Shah to help couples achieve successful pregnancies.",
    image: "/assets/img/images/IVF.jpg",
    content: [
      "IVF (In-Vitro Fertilization), commonly known as the 'test-tube baby' technique, is one of the most successful and widely used infertility treatments. Eggs and sperm are combined in a controlled laboratory environment, and the resulting embryos are transferred into the woman's uterus to achieve pregnancy. Maa Nursing Home offers advanced IVF technology, strict quality protocols and experienced specialists to maximise success rates.",
      "IVF is recommended for blocked, damaged or absent fallopian tubes, endometriosis, unexplained infertility, failed IUI cycles, male factor infertility, age-related infertility, low ovarian reserve, premature menopause, or when pre-implantation genetic testing is needed.",
      "Intracytoplasmic Sperm Injection (ICSI) is used within the IVF lab in cases of severe male infertility, injecting a single healthy sperm directly into the egg cell when sperm quality is low."
    ],
    diagnosis: [
      "Male investigations: semen analysis, semen culture, sperm function test, routine blood tests",
      "Female investigations: ultrasound (USG), HSG (tube testing), hormonal profile, routine blood tests"
    ],
    treatmentSteps: [
      { title: "Counselling & Investigations", description: "The fertility specialist reviews medical history, identifies the cause of infertility, and both partners undergo relevant tests." },
      { title: "Ovarian Stimulation", description: "Fertility injections stimulate the ovaries to produce multiple eggs, monitored through ultrasound and hormonal tests." },
      { title: "Egg & Sperm Collection", description: "Mature eggs are retrieved under short anaesthesia via a guided needle; the male partner provides a semen sample and the best-quality sperm is selected." },
      { title: "Embryo Culture & Transfer", description: "Eggs and sperm are combined in the IVF lab (with ICSI used if sperm quality is low); after 2-5 days, healthy embryos are transferred into the uterus using a thin catheter, with extras frozen for future use." }
    ],
    benefits: [
      "High success rate protocols with personalised treatment plans",
      "State-of-the-art IVF laboratory environment with strict quality control",
      "Comprehensive male & female fertility evaluation and counselling at every step",
      "Affordable, transparent IVF packages; day-care procedure with pregnancy confirmed 14 days after transfer"
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
      "Infertility is defined by WHO as the inability to conceive after 12 months of regular, unprotected intercourse. It is rising globally among both men and women. Our dedicated Infertility Clinic, led by Dr. Jyoti Shah — senior gynaecologist, obstetrician and infertility specialist — uses advanced technology and strict safety protocols to deliver some of the highest success rates in the country, with a customized plan for each couple.",
      "You should seek evaluation if unable to conceive after a year of regular unprotected intercourse, if there are erection, ejaculation, or testicular pain/swelling issues, a history of groin or scrotal surgery, if the female partner is over 35, or if menstrual cycles are irregular or severely problematic. Infertility must be evaluated in both partners, since the cause cannot be determined until both are thoroughly examined.",
      "Causes in women include ovulatory dysfunction, endometriosis, advanced maternal age, luteal phase defects, uterine or cervical abnormalities, and fibroids. Causes in men include low sperm production, poor motility or abnormal morphology, anti-sperm antibodies, blockages, hormonal or chromosomal abnormalities, chronic illness, and lifestyle factors such as alcohol, smoking, obesity and stress."
    ],
    diagnosis: [
      "Medical history and physical examination of both partners",
      "Assessment of menstrual cycle and ovulation; semen analysis for the male partner",
      "Ultrasound (pelvic sonography) and hormonal testing",
      "Evaluation for erectile or ejaculation issues; additional imaging, laparoscopy or hysteroscopy if required"
    ],
    treatmentSteps: [
      { title: "Comprehensive Workup", description: "Both partners undergo history, physical examination, semen analysis, ultrasound and hormonal testing to identify the cause." },
      { title: "Personalized Treatment Plan", description: "Based on the diagnosis, a plan is created ranging from ovulation induction to IUI, IVF & ICSI." },
      { title: "Donor & Surrogacy Options", description: "Egg donation, sperm donation, embryo donation or surrogacy are offered where medically indicated." },
      { title: "Ongoing Support", description: "The team supports couples from diagnosis through treatment and into pregnancy care." }
    ],
    benefits: [
      "Comprehensive evaluation of both partners under one clinic",
      "Follicular monitoring & ovulation tracking with advanced fertility technologies",
      "Affordable, transparent and ethical fertility treatment packages",
      "High success rates under the personal care of Dr. Jyoti Shah"
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
      "In IUI (Intrauterine Insemination), highly motile and processed sperm is placed directly into the woman's uterus, increasing the chances of sperm meeting the egg naturally. The sperm used may be from the woman's partner or a screened donor depending on the medical condition. It is recommended for difficult or painful intercourse, male subfertility, cervical or immunological infertility, endometriosis, ejaculatory problems, or when donor sperm is needed.",
      "Donor sperm may be advised where the male partner has azoospermia (zero sperm count), poor sperm quality, genetic disorders that could be passed on, or non-obstructive sperm production problems. Donor sperm is quarantined for 6 months to ensure it is free of infections such as HIV.",
      "Typically 3 IUI cycles are attempted before considering IVF or ICSI if unsuccessful."
    ],
    diagnosis: [
      "Consultations and tests to identify the cause of infertility and confirm suitability for IUI",
      "Ultrasound monitoring of follicle growth during ovarian stimulation"
    ],
    treatmentSteps: [
      { title: "Ovarian Stimulation & Monitoring", description: "Oral medications or injections stimulate egg development, tracked via ultrasound until the egg matures." },
      { title: "Semen Collection & Processing", description: "Semen is collected from the partner (or thawed donor sperm used) and processed via Swim-Up or Density Gradient methods to isolate the most motile sperm." },
      { title: "Insemination", description: "After an HCG trigger injection induces ovulation, a fine catheter places concentrated sperm directly into the uterus within 12-36 hours." },
      { title: "Pregnancy Test", description: "A 14-day wait period is followed by a pregnancy test; usually up to 3 cycles are attempted before considering IVF/ICSI." }
    ],
    benefits: [
      "Simple, quick (10-15 minutes), non-surgical day-care procedure requiring no anaesthesia",
      "More affordable than IVF, using enhanced sperm selection techniques",
      "Best suited for mild-to-moderate infertility",
      "Precise ovulation timing to maximise natural conception chances"
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
      "ICSI (Intra-Cytoplasmic Sperm Injection) is an advanced ART procedure primarily used for severe male infertility. Unlike standard IVF, where eggs and sperm are mixed together, ICSI requires only one good sperm, which is manually injected into the egg by an embryologist, bypassing sperm motility and morphology problems and increasing the chances of successful fertilization. We are equipped with specialized micromanipulation technology and expert embryologists to perform ICSI with high accuracy.",
      "ICSI benefits couples facing very low or zero sperm count, poor motility, abnormal sperm morphology, obstruction in sperm transport, ejaculation problems, egg penetration issues, failed fertilization in previous IVF cycles, high anti-sperm antibodies, or severe endometriosis in the female partner.",
      "Children born through ICSI and IVF are generally healthy; ICSI may only slightly increase the chance of passing on certain genetic conditions, usually linked to the underlying infertility in the parents rather than the procedure itself."
    ],
    diagnosis: [
      "Detailed evaluation of both partners to determine sperm quality, ovarian reserve and overall fertility health"
    ],
    treatmentSteps: [
      { title: "Ovarian Stimulation", description: "Fertility injections stimulate the ovaries to produce multiple mature eggs, tracked via ultrasound and blood tests." },
      { title: "Egg Retrieval", description: "Once follicles mature, eggs are collected via a guided needle under anaesthesia in a short ~15-minute procedure." },
      { title: "Sperm Selection & Injection", description: "The best-quality sperm is identified and a single sperm is injected directly into each mature egg using specialized micromanipulation equipment; fertilization is assessed the next day." },
      { title: "Embryo Transfer", description: "Two to five days after fertilization, healthy embryos are transferred into the uterus using a thin catheter; a pregnancy test follows two weeks later." }
    ],
    benefits: [
      "Ideal for severe male infertility, requiring only one healthy sperm",
      "Higher fertilization rates and helps couples with previously failed IVF attempts",
      "Utilized alongside TESA/PESA surgical sperm retrieval when needed",
      "Advanced micromanipulation technology with expert embryologists"
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
      "Some men have very low sperm count or no sperm in their ejaculate (azoospermia). In such cases, sperm can still be retrieved surgically using PESA (Percutaneous Epididymal Sperm Aspiration), which retrieves sperm from the epididymis, or TESA (Testicular Sperm Aspiration), which retrieves sperm directly from the testicular tubules. These retrieved sperm are then used for ICSI to achieve pregnancy.",
      "Azoospermia may occur due to poor sperm production from genetic or testicular problems, past infections such as mumps, undescended testes, obstruction in the reproductive tract, cystic fibrosis-related absence of vas deferens, previous vasectomy, or trauma/scarring from past surgery. It is classified as obstructive azoospermia (sperm is produced but blocked from release) or non-obstructive azoospermia (impaired sperm production).",
      "PESA uses a fine needle inserted into the epididymis and works well for obstructive azoospermia, while TESA involves a fine needle inserted directly into the testes to extract tissue containing sperm, which is then dissected in the lab. Both are day-care procedures performed under local anaesthesia. Because surgically retrieved samples contain very few sperm, they are combined with ICSI: the female partner undergoes IVF stimulation, eggs are retrieved the same day, a single sperm is injected into each egg, and healthy embryos are transferred after 2-5 days of culture."
    ],
    causes: [
      "Poor sperm production due to genetic or testicular problems",
      "Past infections (e.g., mumps), undescended testes",
      "Obstruction in the reproductive tract or absent vas deferens (cystic fibrosis carriers)",
      "Previous vasectomy or failed reversal; trauma or scarring from past surgery"
    ],
    treatmentSteps: [
      { title: "PESA", description: "A fine needle is inserted into the epididymis to retrieve sperm — effective for obstructive azoospermia." },
      { title: "TESA", description: "A fine needle is inserted directly into the testes to extract tissue containing sperm, which is dissected in the lab to find sperm cells." },
      { title: "Combination with ICSI", description: "The female partner undergoes IVF stimulation and egg retrieval on the same day; a single retrieved sperm is injected into each egg via ICSI." },
      { title: "Embryo Transfer & Freezing", description: "Embryos are cultured for 2-5 days and transferred into the uterus; extra sperm samples can be frozen for future IVF/ICSI cycles." }
    ],
    benefits: [
      "Enables biological fatherhood even with zero sperm in the ejaculate",
      "Minimally invasive, local-anaesthesia, day-care procedure with quick recovery",
      "Works for both obstructive and non-obstructive azoospermia",
      "High success rates when combined with ICSI"
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
      "In PCOD/PCOS, hormonal balance is disturbed and male-type hormones (androgens) increase, leading to irregular periods and the formation of multiple small fluid-filled cysts in the ovaries. These cysts contain immature eggs that do not get released on time, and when eggs are not released regularly (anovulation), it becomes difficult to conceive naturally — PCOS is one of the most common causes of female infertility. Women with PCOS also have an increased risk of pregnancy complications such as high blood pressure, gestational diabetes and miscarriage.",
      "PCOS commonly affects women between 15 and 44 years of age, and many are unaware of the condition until they see a fertility specialist. The exact cause is not fully known, but genetics, insulin resistance and chronic low-grade inflammation are thought to play a role.",
      "Treatment combines lifestyle changes (diet, exercise, weight loss) with hormone therapy and fertility-focused treatments when needed. Even a 5-10% reduction in body weight can significantly improve ovulation, hormone balance and chances of pregnancy."
    ],
    symptoms: [
      "Irregular or missed periods",
      "Hirsutism (excess facial and body hair), acne or hair loss from high androgen levels",
      "Difficulty conceiving due to anovulation",
      "Enlarged ovaries with multiple small cysts on ultrasound"
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
    title: "Amenorrhea (Absence of Menses) Care",
    department: "Gynecology & Women's Health",
    category: "Gynecology & Obstetrics",
    summary: "Endocrine investigation and treatment for primary and secondary absence of menstrual cycles.",
    image: "/assets/img/images/Amenorrhea.jpg",
    content: [
      "Amenorrhea is the absence of menstrual periods in a woman during her reproductive years, apart from natural causes such as pregnancy, breastfeeding and menopause. It is classified as Primary Amenorrhea — when a girl has not had her first period by age 16 with poorly developed secondary sexual characteristics — or Secondary Amenorrhea, when a woman with previously regular cycles stops menstruating for about 6 months without being pregnant, breastfeeding or post-menopausal.",
      "Causes of primary amenorrhea include hereditary factors, genetic disorders such as Turner's syndrome, and congenital abnormalities like Müllerian defects. Causes of secondary amenorrhea include stopping oral contraceptives, stress and depression, low body mass index or eating disorders, heavy exercise, certain psychiatric medications, chronic illness, hypothyroidism, Asherman's syndrome (uterine scar tissue), and prolactin-secreting pituitary tumours.",
      "Treatment depends on the underlying cause. If no structural abnormality is found, hormone replacement therapy, medications for thyroid or prolactin disorders, lifestyle changes and diet correction are used; when structural abnormalities such as Müllerian defects or Asherman's syndrome are present, surgical correction may be advised. Early diagnosis protects bone health, hormonal balance, fertility and overall wellbeing."
    ],
    symptoms: [
      "Absence of menstrual periods",
      "Lack of breast development in young girls with primary amenorrhea",
      "Excess facial or body hair; vaginal dryness",
      "Milky nipple discharge (galactorrhoea)"
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
    title: "Endometriosis Medical & Laparoscopic Care",
    department: "Gynecology & Women's Health",
    category: "Gynecology & Obstetrics",
    summary: "Diagnosis and pain relief for endometrial tissue growth outside the uterine cavity.",
    image: "/assets/img/images/Endometriosis.jpeg",
    content: [
      "Endometriosis is a disorder in which endometrial tissue — the lining of the uterus — grows outside the uterus, commonly on the ovaries, fallopian tubes, intestines and pelvic lining. This misplaced tissue still thickens, breaks down and bleeds with each menstrual cycle, but since the blood has no natural passage to exit the body, it causes inflammation, pain, cysts and adhesions (organs sticking together). It affects 5-10% of women and symptoms can range from mild to very severe, including infertility.",
      "The exact cause is unknown, but theories include retrograde menstruation (menstrual blood flowing backwards through the fallopian tubes into the pelvis), coelomic metaplasia (pelvic lining cells transforming into endometrial-like tissue), direct transplantation during surgery, spread via blood or lymph, and immune system changes that fail to clear misplaced endometrial tissue.",
      "Treatment depends on symptom severity, age and fertility wishes. Medical management uses pain-relief medicines and hormone-suppressing drugs to reduce cyclical activity and slow disease progression. In severe cases, especially with uncontrolled pain or infertility, laparoscopic surgery removes endometriotic implants, resects adhesions, and restores normal pelvic anatomy — offering better visualisation, smaller incisions, faster recovery and improved chances of pregnancy."
    ],
    symptoms: [
      "Pelvic pain, often worsening during periods; pain radiating to thighs and legs",
      "Heavy or prolonged menstrual bleeding with clots; premenstrual spotting",
      "Infertility and chronic fatigue",
      "Constipation, diarrhoea, bloating and pain while passing motions",
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
    department: "Gynecology & Women's Health",
    category: "Gynecology & Obstetrics",
    summary: "Investigation and medical/surgical management for abnormal, heavy, or irregular menstrual bleeding.",
    image: "/assets/img/images/Dysfunctional Uterine Bleeding (DUB).jpg",
    content: [
      "Dysfunctional Uterine Bleeding (DUB) refers to abnormal, irregular or excessive uterine bleeding that occurs in the absence of pregnancy, infection, tumors or other pelvic disease — most commonly related to hormonal disturbances affecting the normal menstrual cycle. It is frequently seen in adolescents and women approaching menopause, when hormonal fluctuations are common.",
      "DUB is classified as Anovulatory Bleeding, which occurs when ovulation does not take place, leading to irregular, prolonged or heavy bleeding, or Ovulatory Bleeding, with regular cycles but excessive or prolonged flow due to hormonal imbalance. If left untreated, DUB can result in anemia, fatigue, weakness and a significant impact on quality of life, and can also lead to endometrial hyperplasia (thickening of the uterine lining).",
      "We provide accurate diagnosis and personalized treatment plans to restore hormonal balance and prevent complications, with most patients responding well and regular follow-up monitoring cycle regularity and overall health."
    ],
    symptoms: [
      "Heavy menstrual bleeding; bleeding between periods",
      "Prolonged menstrual cycles; irregular or missed periods",
      "Fatigue and weakness due to anemia"
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
    title: "Menopause & Post-Menopausal Clinic",
    department: "Gynecology & Women's Health",
    category: "Gynecology & Obstetrics",
    summary: "Guidance, bone density screening, and symptom management for women transitioning through menopause.",
    image: "/assets/img/images/Menopause.jpg",
    content: [
      "Menopause is the stage when a woman permanently stops getting her periods, caused by a natural decline in reproductive hormones — mainly oestrogen and progesterone. If a woman has not had her period for 12 months, she is considered to be in menopause; most women experience symptoms after age 40, and the transition progresses gradually through perimenopause, menopause, and post-menopause over several years.",
      "Declining oestrogen levels may contribute to bone loss and osteoporosis, higher risk of heart disease, urinary problems, increased risk of Alzheimer's disease, loss of muscle mass, skin thinning, and poorer vision. Premature menopause can result from premature ovarian failure, surgical removal of the ovaries, or chemotherapy/radiation damaging ovarian function.",
      "Our dedicated Menopause Clinic manages symptoms through Hormone Replacement Therapy (HRT), topical hormone therapy for vaginal dryness, non-hormonal medicines for hot flashes, and medicines for osteoporosis, alongside lifestyle guidance covering exercise, yoga, pelvic floor strengthening, and diet."
    ],
    symptoms: [
      "Irregular periods, hot flashes and night sweats",
      "Vaginal dryness and pain during intercourse",
      "Fatigue, disturbed sleep, mood swings and irritability",
      "Hair thinning, dry skin, urinary incontinence, heart palpitations",
      "Bone loss (osteoporosis) and low sex drive"
    ],
    diagnosis: [
      "Detailed symptom evaluation and tracking of menstrual patterns",
      "Blood tests to check hormone levels (FSH, LH, oestrogen)",
      "Thyroid tests if needed"
    ],
    treatmentSteps: [
      { title: "Symptom Evaluation", description: "Detailed history, menstrual pattern tracking, and hormone level testing (FSH, LH, oestrogen) confirm the stage of menopause." },
      { title: "Hormone Replacement Therapy", description: "HRT or topical hormone therapy addresses vaginal dryness and severe hormonal symptoms." },
      { title: "Symptomatic Management", description: "Non-hormonal medicines for hot flashes and medicines for osteoporosis are prescribed as needed." },
      { title: "Lifestyle Guidance", description: "Regular exercise, yoga, Kegel exercises, healthy diet and regular health check-ups support long-term wellbeing." }
    ],
    benefits: [
      "Osteoporosis & bone health screening",
      "Personalised symptomatic hot flash and mood-change relief guidance",
      "Cardiovascular, urinary and pelvic health checks",
      "Holistic lifestyle guidance from a dedicated menopause care team"
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
      "Our Obstetrics department, led by Dr Jyoti Shah, offers a warm, cosy and reassuring environment for the entire maternity journey — from registration of pregnancy to safe delivery. We provide comprehensive pre-natal and antenatal care, and offer different delivery options depending on the mother's health and preferences, always prioritising safety for both mother and baby.",
      "Services include prenatal & postnatal counselling, antenatal and postnatal classes & yoga, a well-equipped labour room and operation theatre, fetal medicine & genetics support, and NST/intrapartum fetal heart rate monitoring. Delivery options include normal vaginal delivery, C-section, high-risk delivery management, and pain-free delivery where medically appropriate, with instrumental delivery (forceps, vacuum extraction, Kiwicep) available when needed.",
      "Special care and monitoring are provided for high-risk pregnancies including anaemia, high blood pressure, diabetes, eclampsia/pre-eclampsia, preterm labour, multiple pregnancies, and antepartum/postpartum haemorrhage. We also offer family planning services (sterilisation, Copper-T/IUD insertion) and, as a Government-registered Abortion Centre, safe and legal Medical Termination of Pregnancy (MTP) with confidential counselling."
    ],
    treatmentSteps: [
      { title: "Preconception & Antenatal Care", description: "Pre-marital counselling, routine pregnancy check-ups, and antenatal classes and yoga throughout the pregnancy." },
      { title: "Monitoring & High-Risk Management", description: "NST and intrapartum fetal heart rate monitoring, with special care for high-risk pregnancies such as pre-eclampsia, preterm labour, or multiple pregnancies." },
      { title: "Delivery", description: "Normal vaginal delivery, C-section, pain-free delivery (where appropriate), or assisted instrumental delivery with forceps, vacuum extraction or Kiwicep." },
      { title: "Postnatal Support", description: "Breastfeeding education, postnatal recovery guidance, and family planning or contraception counselling." }
    ],
    benefits: [
      "High-risk pregnancy monitoring under the personal care of Dr Jyoti Shah",
      "Normal and pain-free delivery facilities alongside C-section capability",
      "Well-equipped labour room, operation theatre, and fetal medicine support",
      "Government-registered abortion centre with confidential MTP services"
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
      "Laparoscopy is a minimally invasive procedure that allows the doctor to look directly at the uterus, fallopian tubes, ovaries and pelvic structures. It is extremely useful in evaluating unexplained infertility and treating abnormalities that prevent conception. The surgeon makes 2-3 small incisions in the abdomen and inserts thin fibre-optic instruments equipped with a light and camera; if abnormalities are found, they can often be corrected during the same procedure, avoiding major surgery.",
      "Laparoscopy is beneficial for endometriosis, blocked or damaged fallopian tubes, ovarian cysts, fibroids, pelvic adhesions, pelvic inflammatory disease, chronic pelvic pain, ectopic pregnancy, genital tuberculosis, polycystic ovaries (ovarian drilling), tubal pathology such as hydrosalpinx removal before IVF, uterine prolapse correction, the Burch procedure for urinary incontinence, and tubal ligation.",
      "Laparoscopy is generally a day-care procedure performed under general anaesthesia, typically taking 20 minutes to 2 hours depending on complexity. Most patients go home the same day and need 1-2 days of rest, with mild-to-moderate discomfort lasting up to a week. When performed by expert surgeons it is very safe, though rare risks include injury to the bladder, ureter or bowel, damage to blood vessels, and infection or bleeding."
    ],
    diagnosis: [
      "Direct visualization of the uterus, fallopian tubes, ovaries and pelvic structures via fibre-optic camera",
      "Evaluation for unexplained infertility, endometriosis, adhesions or tubal pathology"
    ],
    treatmentSteps: [
      { title: "Small Incisions", description: "2-3 small abdominal incisions allow insertion of thin fibre-optic instruments with a light and camera." },
      { title: "Diagnostic Visualization", description: "Direct inspection of the uterus, tubes, ovaries and pelvic structures identifies the underlying abnormality." },
      { title: "Same-Sitting Correction", description: "Abnormalities such as cysts, adhesions, endometriosis or blocked tubes are corrected in the same procedure where possible." },
      { title: "Recovery", description: "Most patients go home the same day, with 1-2 days of rest and mild discomfort lasting up to a week." }
    ],
    benefits: [
      "Minimally invasive with very small cuts, lower infection risk, and better cosmetic results",
      "Faster recovery and shorter hospital stay than open surgery",
      "Diagnoses and treats the root cause of infertility in the same procedure",
      "Improves chances of conception naturally or through IVF"
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
      "Hysteroscopy is a short, minimally invasive procedure used when a woman experiences heavy bleeding, painful periods, infertility, or recurrent miscarriages. A hysteroscope — a thin fibre-optic telescope — is inserted through the vagina and cervix to directly visualize the uterine cavity, used for both diagnosis and treatment of fibroids, endometrial polyps, intrauterine scar tissue (adhesions), uterine septum or congenital malformations, tubal block at the utero-tubal junction, and uterine lesions interfering with IVF implantation.",
      "Diagnostic hysteroscopy usually takes about 30 minutes and can be done under local anaesthesia; operative hysteroscopy may require general anaesthesia. If abnormalities such as polyps, fibroids or scar tissue are found during diagnostic hysteroscopy, the surgeon can remove them in the same sitting — known as operative hysteroscopy — preventing the need for multiple surgeries. Hysteroscopic Tubal Cannulation is an advanced technique for treating proximal tubal blockage, where a fine guidewire clears mucus plugs or debris from a blocked tube, restoring tubal patency without major surgery.",
      "Hysteroscopy offers direct visualization of the uterus, allowing doctors to identify issues that hinder embryo implantation or lead to recurrent miscarriage. It is often recommended before IVF or when repeated IVF cycles fail due to suspected uterine pathology, and correcting abnormalities improves conception and pregnancy success rates. When performed by trained specialists it is very safe, though rare risks include infection, uterine perforation, vaginal bleeding and fluid overload."
    ],
    diagnosis: [
      "Direct visualization of the uterine cavity via a thin fibre-optic hysteroscope",
      "Identification of fibroids, polyps, adhesions, septum or tubal block"
    ],
    treatmentSteps: [
      { title: "Diagnostic Hysteroscopy", description: "A thin hysteroscope is passed through the vagina and cervix to directly visualize the uterine cavity, typically taking about 30 minutes under local anaesthesia." },
      { title: "Operative Hysteroscopy", description: "Polyps, fibroids or scar tissue found during diagnosis are removed in the same sitting, avoiding a separate surgery." },
      { title: "Hysteroscopic Tubal Cannulation", description: "For proximal tubal blockage, a fine guidewire clears mucus plugs or debris through the hysteroscope to restore tubal patency." }
    ],
    benefits: [
      "Zero abdominal incisions with direct visualization of the uterine cavity",
      "Diagnoses hidden causes of infertility and recurrent miscarriage",
      "Treats polyps, fibroids, septum and adhesions in the same sitting",
      "Improves IVF success rates with minimally invasive, quick recovery and same-day discharge"
    ]
  }
};
