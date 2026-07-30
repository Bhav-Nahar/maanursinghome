import React from "react";
import Link from "next/link";
import { TopBar } from "@/components/ui/TopBar";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { AppointmentForm } from "@/components/ui/AppointmentForm";
import {
  CheckCircle2,
  XCircle,
  Phone,
  MessageCircle,
  ShieldCheck,
  Star,
  Award,
  ArrowRight,
  HelpCircle,
} from "lucide-react";

export const metadata = {
  title:
    "Best LASIK Surgeon in Malad, Kandivali, Borivali, Goregaon, Andheri, Parle, Santacruz | Specs Removal",
  description:
    "Maa Nursing Home is the premier destination for LASIK surgery in Mumbai. Get advanced Contoura & Femto Bladeless specs removal surgery from senior eye specialists in Malad West. Maa Nursing Home is the trusted choice for the best eye surgeon, ophthalmologist, cataract surgeon, and LASIK surgeon in Malad, Kandivali, Borivali, Goregaon, Andheri, Parle, and Santacruz.",
};

export default function LasikLandingPage() {
  const whatsappUrl = `https://wa.me/919820072543?text=${encodeURIComponent(
    "Hi, I would like to enquire about a LASIK eligibility assessment with Dr. Jugal Shah at NetraJyoti Eyecare Centre."
  )}`;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-body">
      <TopBar />
      <Header />

      <main className="flex-1">
        {/* LASIK HERO SECTION */}
        <section className="bg-slate-900 text-white relative py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-700/50">
                  ✦ Eye Care in Mumbai Since 2002
                </span>
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  Considering <span className="text-emerald-400">LASIK Surgery</span> in Mumbai?
                </h1>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  Get a detailed, clinical LASIK eligibility assessment with <strong>Dr. Jugal Shah</strong>, Senior Ophthalmologist and Refractive Surgeon with over 30 years of experience.
                </p>

                <ul className="space-y-2.5 text-sm text-slate-200">
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-2 shrink-0" />
                    Personalized corneal and spectacle power evaluation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-2 shrink-0" />
                    Contoura LASIK & Bladeless Femto-LASIK options
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-2 shrink-0" />
                    Transparent guidance on suitability, risks, and recovery
                  </li>
                </ul>

                <div className="pt-4 flex flex-wrap gap-4">
                  <a
                    href="#book"
                    className="inline-flex items-center px-6 py-3.5 rounded-xl font-heading font-bold text-white bg-primary-700 hover:bg-primary-900 shadow-lg shadow-primary-900/30 transition-all text-base"
                  >
                    Book LASIK Assessment
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3.5 rounded-xl font-heading font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 shadow-lg transition-all text-base"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" /> Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <AppointmentForm title="Book LASIK Assessment" />
              </div>
            </div>
          </div>
        </section>

        {/* PROOF RIBBON */}
        <section className="bg-white border-y border-slate-200 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Experience</span>
                <p className="font-heading font-extrabold text-2xl text-slate-900">30+ Years</p>
                <span className="text-xs text-slate-500">Ophthalmology practice since 1992</span>
              </div>
              <div className="p-3 border-y md:border-y-0 md:border-x border-slate-200">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Clinical Volume</span>
                <p className="font-heading font-extrabold text-2xl text-primary-700">98,000+ Surgeries</p>
                <span className="text-xs text-slate-500">Surgical precision applied to every assessment</span>
              </div>
              <div className="p-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Established Centre</span>
                <p className="font-heading font-extrabold text-2xl text-slate-900">Since 2002</p>
                <span className="text-xs text-slate-500">Malad West, Mumbai</span>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT IS LASIK */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <h2 className="font-heading text-3xl font-bold text-slate-900">What is LASIK?</h2>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed">
              LASIK (Laser-Assisted In Situ Keratomileusis) is a painless, day-care LASER procedure that reshapes the cornea using an excimer LASER to correct refractive errors such as myopia (short-sight), hypermetropia (long-sight), and astigmatism.
            </p>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed">
              In a normal eye, light passes through the cornea and lens and focuses sharply on the retina, giving clear vision. When light focuses in front of the retina (myopia), behind it (hypermetropia), or at different points (astigmatism), vision becomes blurred. LASIK corrects this focusing power by reshaping the cornea.
            </p>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed">
              At Maa Nursing Home and NetraJyoti Eyecare Centre, we have a dedicated LASIK clinic and have successfully treated thousands of patients, offering both <strong>Contoura LASIK</strong> and <strong>Bladeless Femto-LASIK</strong>, performed by Dr. Jugal Shah. LASIK can typically correct myopia up to –18.0 D, hypermetropia from +1.0 D to +6.0 D, and astigmatism from –1.0 D to –6.0 D.
            </p>
          </div>
        </section>

        {/* ELIGIBILITY SECTION */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
              <span className="text-xs font-bold text-primary-700 uppercase tracking-wider bg-primary-50 px-3 py-1 rounded-full border border-primary-100">
                Suitability Before Surgery
              </span>
              <h2 className="font-heading text-3xl font-bold text-slate-900">
                Could LASIK Be Suitable for Your Eyes?
              </h2>
              <p className="text-slate-600 text-sm md:text-base">
                LASIK eligibility depends on more than just spectacle power. Dr. Jugal Shah evaluates your corneal thickness, eye topography, age, and medical history.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Positive Card */}
              <div className="bg-white rounded-2xl border border-emerald-200 p-8 shadow-sm space-y-4">
                <div className="flex items-center space-x-3 text-emerald-700">
                  <CheckCircle2 className="w-7 h-7" />
                  <h3 className="font-heading font-bold text-xl text-slate-900">You may be considered if you:</h3>
                </div>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start">
                    <span className="text-emerald-600 font-bold mr-2">✓</span> Are above 18 years of age
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 font-bold mr-2">✓</span> Have stable spectacle power for at least 6 months
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 font-bold mr-2">✓</span> Have suitable corneal thickness and shape
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 font-bold mr-2">✓</span> Do not have uncontrolled diabetes, pregnancy-related hormonal changes or other major systemic issues
                  </li>
                </ul>
              </div>

              {/* Caution Card */}
              <div className="bg-white rounded-2xl border border-amber-200 p-8 shadow-sm space-y-4">
                <div className="flex items-center space-x-3 text-amber-700">
                  <XCircle className="w-7 h-7" />
                  <h3 className="font-heading font-bold text-xl text-slate-900">Another option may be advised if:</h3>
                </div>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold mr-2">✕</span> You have diseases that cause corneal thinning or bulging, or a strong family history of it
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold mr-2">✕</span> Your cornea is too thin, or you have very large pupils
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold mr-2">✕</span> You have severe near-sightedness beyond safe limits
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold mr-2">✕</span> You have significant age-related eye changes (e.g. advanced cataract, macular disease)
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold mr-2">✕</span> You play contact sports with frequent blows to the face
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PRE-LASIK EVALUATION */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <h2 className="font-heading text-3xl font-bold text-slate-900">Pre-LASIK Evaluation</h2>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed">
              Before surgery, a detailed assessment is done to ensure safety, including a routine eye examination, <strong>Keratometry</strong> (to measure the shape and curvature of the cornea), and <strong>Pachymetry</strong> (to measure corneal thickness). Based on these measurements, the surgeon plans exactly where and how much of the cornea needs reshaping.
            </p>
          </div>
        </section>

        {/* HOW LASIK IS PERFORMED */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <h2 className="font-heading text-3xl font-bold text-slate-900">How is LASIK Performed?</h2>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed">
              The cornea accounts for about 70% of the eye's focusing power. LASIK uses a computer-controlled excimer LASER (a cool ultraviolet LASER) to reshape the cornea precisely. Local anaesthetic eye drops are used - no injections. A suction ring is applied, and a thin corneal flap is created (either manually or with a Femto-second LASER). The flap is lifted, and the excimer LASER reshapes the underlying corneal tissue. The flap is then repositioned and naturally adheres without stitches.
            </p>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed">
              At our centre, LASIK is performed using <strong>Contoura LASIK</strong> (topography-guided LASIK with a manually created flap) or <strong>Bladeless LASIK</strong> (flap created using Femto-second LASER for enhanced precision). The entire procedure usually takes about 15–20 minutes. Both eyes can often be treated in the same sitting, and no hospitalization is required.
            </p>
            <div className="bg-emerald-50 border-l-4 border-emerald-600 rounded-lg py-3 px-4">
              <p className="text-sm text-slate-800 font-medium">
                <strong>Thinking about getting rid of glasses?</strong> Read our comprehensive guide:{" "}
                <Link href="/blogs/blog3" className="text-emerald-700 underline font-semibold hover:text-emerald-800">
                  Is LASIK Surgery Safe? Everything You Need to Know
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* RISKS & PRECAUTIONS */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-4">
              <h3 className="font-heading font-bold text-xl text-slate-900">Risks & Temporary Side Effects</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                LASIK is a safe and widely performed procedure, but as with any surgery some patients may experience temporary dry eyes (managed with lubricating drops), glare, halos or increased light sensitivity, and occasional double or fluctuating vision in the early days. Serious complications or permanent loss of vision are rare - your doctor will discuss all pros and cons before surgery.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-4">
              <h3 className="font-heading font-bold text-xl text-slate-900">Precautions Before & After LASIK</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Stop soft contact lenses 48–72 hours before surgery; RGP lenses at least 15 days before</li>
                <li>• On the day: wash your hair, avoid eye makeup, creams, perfumes and deodorants</li>
                <li>• Wear sunglasses for about 1 week after surgery</li>
                <li>• Avoid splashing water directly in the eyes for ~1 month; no head bath for 1 week</li>
                <li>• No swimming for at least 1 month; use prescribed eye drops exactly as advised</li>
              </ul>
            </div>
          </div>
        </section>

        {/* RECOVERY & RESULTS */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <h2 className="font-heading text-3xl font-bold text-slate-900">Recovery & Results</h2>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed">
              Most patients notice clearer vision within the first 24 hours, with vision typically stabilising within about 2 weeks. You can usually return to routine work in 2–3 days after the procedure, depending on your job profile. While glasses or contact lenses can improve vision, LASIK corrects the underlying focusing issue by reshaping the cornea - addressing the root cause of the refractive error.
            </p>
          </div>
        </section>

        {/* DR JUGAL SHAH PROFILE */}
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
            <div className="w-48 h-48 rounded-2xl bg-slate-100 border-2 border-primary-700 shrink-0 overflow-hidden">
              <img src="/assets/img/images/dr jugal.jpg" alt="Dr. Jugal Shah" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-4 text-center md:text-left">
              <span className="text-xs font-bold text-primary-700 uppercase tracking-wider bg-primary-50 px-3 py-1 rounded-full border border-primary-100">
                Senior Ophthalmologist
              </span>
              <h2 className="font-heading text-3xl font-bold text-slate-900">Meet Dr. Jugal Shah</h2>
              <p className="text-xs font-bold text-slate-600">
                M.S., D.N.B., D.O.M.S., F.C.P.S.
              </p>
              <blockquote className="text-slate-700 text-sm italic bg-slate-50 p-4 rounded-xl border-l-4 border-primary-700">
                “The first step is not selecting a LASIK package. It is understanding whether vision-correction surgery is appropriate for your individual eyes.”
              </blockquote>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
