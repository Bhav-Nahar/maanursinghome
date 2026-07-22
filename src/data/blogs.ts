export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  author: string;
  excerpt: string;
  coverImage: string;
  seoTitle: string;
  seoDescription: string;
  content: string;
}

export const BLOGS_DATA: BlogPost[] = [
  {
    id: "1",
    title: "Common Myths About Cataract Surgery",
    slug: "blog1",
    category: "Eye Care",
    date: "May 10, 2026",
    author: "Dr. Jugal Shah",
    excerpt: "Explore the most common misconceptions about cataract surgery and learn the facts from our expert ophthalmologists.",
    coverImage: "/assets/img/images/imgi_3_eye_intro.png",
    seoTitle: "Common Myths About Cataract Surgery | Eye Care Tips",
    seoDescription: "Explore the most common misconceptions about cataract surgery and learn the facts from our expert ophthalmologists.",
    content: `
      <p>Our eyes help us experience the beauty of life every day. But as we age, vision problems like cataracts can slowly affect our ability to see clearly. Cataracts are one of the most common eye conditions, especially among older adults, and timely treatment can restore clear vision and improve quality of life.</p>
      <p>At <strong>Maa Nursing Home & NetraJyoti Eyecare Centre</strong>, advanced eye care services and expert guidance help patients regain healthy vision with safe and effective cataract treatment.</p>
      <h2>What Is a Cataract?</h2>
      <p>A cataract occurs when the natural lens of the eye becomes cloudy, causing blurry or dim vision. Normally, the eye lens is clear and helps focus light properly. Over time, proteins in the lens can break down and form cloudy patches, making vision unclear.</p>
      <h2>Common Symptoms of Cataracts</h2>
      <ul>
        <li>Blurry or cloudy vision</li>
        <li>Difficulty seeing at night</li>
        <li>Sensitivity to light and glare</li>
        <li>Faded or yellowish colors</li>
        <li>Frequent changes in eyeglass number</li>
      </ul>
      <h2>Cataract Treatment & Surgery</h2>
      <p>Micro-Incision Cataract Surgery (MICS) is a quick, painless procedure where the cloudy lens is removed and replaced with a foldable intraocular lens (IOL). Most patients recover within 24-48 hours.</p>
    `
  },
  {
    id: "2",
    title: "PCOS vs PCOD: What's the Difference? A Complete Guide",
    slug: "blog2",
    category: "Gynecology Care",
    date: "June 27, 2026",
    author: "Dr. Jyoti Shah",
    excerpt: "Although many people use these terms interchangeably, PCOS and PCOD are not exactly the same. Learn about symptoms, causes, diagnosis, and treatment.",
    coverImage: "/assets/img/images/pcod.jpeg",
    seoTitle: "PCOS vs PCOD: What's the Difference? | Gynaecology Advice",
    seoDescription: "Although many people use these terms interchangeably, PCOS and PCOD are not exactly the same. Learn about symptoms, causes, diagnosis, treatment, and lifestyle tips.",
    content: `
      <p>Hormonal disorders affecting women's reproductive health have become increasingly common. Among them, PCOS (Polycystic Ovary Syndrome) and PCOD (Polycystic Ovarian Disease) are two of the most frequently discussed conditions.</p>
      <h2>What is PCOD?</h2>
      <p>Polycystic Ovarian Disease (PCOD) is a condition in which the ovaries produce partially mature or immature eggs that turn into small cysts over time. With lifestyle changes and basic medication, cycles can be restored.</p>
      <h2>What is PCOS?</h2>
      <p>Polycystic Ovary Syndrome (PCOS) is a broader metabolic and hormonal disorder where higher androgen levels interfere with regular ovulation and insulin processing.</p>
    `
  },
  {
    id: "3",
    title: "Is LASIK Surgery Safe? Everything You Need to Know",
    slug: "blog3",
    category: "Eye Care",
    date: "June 27, 2026",
    author: "Dr. Jugal Shah",
    excerpt: "Imagine waking up to clear vision without glasses. Learn how LASIK works, who is eligible, recovery timelines, and common myths debunked.",
    coverImage: "/assets/img/images/LASIK Clinic.jpg",
    seoTitle: "Is LASIK Surgery Safe? | Eye Care Tips",
    seoDescription: "Imagine waking up to clear vision without glasses. Learn how LASIK works, who is eligible, recovery timelines, and common myths debunked.",
    content: `
      <p>Imagine waking up every morning with clear vision without reaching for glasses or contacts. LASIK (Laser-Assisted In Situ Keratomileusis) reshapes the cornea to focus light accurately onto the retina.</p>
      <h2>Is LASIK Safe?</h2>
      <p>Yes. When performed on a thoroughly evaluated candidate, LASIK has one of the highest satisfaction rates of any elective medical procedure worldwide.</p>
    `
  },
  {
    id: "4",
    title: "How Diabetes Affects Your Eyes: Diabetic Retinopathy",
    slug: "blog4",
    category: "Eye Care",
    date: "June 27, 2026",
    author: "Dr. Jugal Shah",
    excerpt: "Diabetes can seriously impact your vision. Learn what diabetic retinopathy is, its symptoms, stages, treatment options, and prevention tips.",
    coverImage: "/assets/img/images/Diabetic Retinopathy.jpg",
    seoTitle: "How Diabetes Affects Your Eyes: Diabetic Retinopathy | Eye Care Tips",
    seoDescription: "Diabetes can seriously impact your vision. Learn what diabetic retinopathy is, its symptoms, stages, treatment options, and prevention tips.",
    content: `
      <p>Diabetes can weaken the tiny blood vessels in the retina, leading to fluid leakage or retinal swelling. Routine annual dilated retina examinations are essential for early detection.</p>
    `
  }
];
