import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/about.html", destination: "/about", permanent: true },
      { source: "/doctors.html", destination: "/doctors", permanent: true },
      { source: "/dr-jugal.html", destination: "/dr-jugal", permanent: true },
      { source: "/dr-jyoti.html", destination: "/dr-jyoti", permanent: true },
      { source: "/contact.html", destination: "/contact", permanent: true },
      { source: "/appointment.html", destination: "/appointment", permanent: true },
      { source: "/faq.html", destination: "/faq", permanent: true },
      { source: "/gallery.html", destination: "/gallery", permanent: true },
      { source: "/certificates.html", destination: "/certificates", permanent: true },
      { source: "/trophies.html", destination: "/trophies", permanent: true },
      { source: "/Charity.html", destination: "/charity", permanent: true },
      { source: "/terms.html", destination: "/terms", permanent: true },
      { source: "/insurance-companies.html", destination: "/insurance-companies", permanent: true },
      { source: "/blogs.html", destination: "/blogs", permanent: true },
      // Treatments redirects
      { source: "/Cataract.html", destination: "/treatments/cataract", permanent: true },
      { source: "/glaucoma.html", destination: "/treatments/glaucoma", permanent: true },
      { source: "/Diabetic%20Retinopathy.html", destination: "/treatments/diabetic-retinopathy", permanent: true },
      { source: "/Diabetic\\ Retinopathy.html", destination: "/treatments/diabetic-retinopathy", permanent: true },
      { source: "/Computer%20Vision%20Syndrome.html", destination: "/treatments/computer-vision-syndrome", permanent: true },
      { source: "/Dry%20Eyes.html", destination: "/treatments/dry-eyes", permanent: true },
      { source: "/Retinal%20Detachment.html", destination: "/treatments/retinal-detachment", permanent: true },
      { source: "/squint.html", destination: "/treatments/squint", permanent: true },
      { source: "/ARMD.html", destination: "/treatments/armd", permanent: true },
      { source: "/Cornea%20DSAEK.html", destination: "/treatments/cornea-dsaek", permanent: true },
      { source: "/paediatric-eye.html", destination: "/treatments/paediatric-eye", permanent: true },
      { source: "/oculoplasty.html", destination: "/treatments/oculoplasty", permanent: true },
      { source: "/lasik-clinic.html", destination: "/treatments/lasik", permanent: true },
      { source: "/PCOD.html", destination: "/treatments/pcod", permanent: true },
      { source: "/amenorrhea.html", destination: "/treatments/amenorrhea", permanent: true },
      { source: "/Endometriosis.html", destination: "/treatments/endometriosis", permanent: true },
      { source: "/DysfunctionalUterineBleeding.html", destination: "/treatments/dub", permanent: true },
      { source: "/Menopause.html", destination: "/treatments/menopause", permanent: true },
      { source: "/Obstetrics.html", destination: "/treatments/obstetrics", permanent: true },
      { source: "/Infertility.html", destination: "/treatments/infertility", permanent: true },
      { source: "/Hysteroscopy.html", destination: "/treatments/hysteroscopy", permanent: true },
      { source: "/Laparoscopy.html", destination: "/treatments/laparoscopy", permanent: true },
      { source: "/IUI.html", destination: "/treatments/iui", permanent: true },
      { source: "/TESAPESA.html", destination: "/treatments/tesapesa", permanent: true },
      { source: "/ICSI.html", destination: "/treatments/icsi", permanent: true },
      { source: "/ivf.html", destination: "/treatments/ivf", permanent: true },
    ];
  },
};

export default nextConfig;
