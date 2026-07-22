import React from "react";
import { TopBar } from "@/components/ui/TopBar";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { Heart, Eye, Star, Award, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About Us | Best Eye Hospital & IVF Centre in Malad West, Mumbai",
  description:
    "Maa Nursing Home & NetraJyoti Eyecare Centre is known as the best eye hospital & best IVF centre in Malad, Mumbai, providing advanced, ethical, and affordable treatment since 2002.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-body">
      <TopBar />
      <Header />

      <main className="flex-1">
        {/* PAGE TITLE */}
        <section className="bg-slate-900 text-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-emerald-400 bg-emerald-950/80 rounded-full border border-emerald-700/50">
              Established 2002
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              About Maa Nursing Home & NetraJyoti Eyecare Centre
            </h1>
          </div>
        </section>

        {/* INTRO SECTION */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
              Compassionate Eye & Gynaecology Care Since 2002
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Maa Nursing Home and NetraJyoti Eyecare Centre is one of the leading super-speciality hospitals in Mumbai’s western suburbs, offering advanced eye care and comprehensive gynaecology services. Built on the values of accessibility, affordability and service-before-self, the centre continues to uplift thousands of families with world-class medical expertise.
            </p>
          </div>
        </section>

        {/* IMAGE + STATS SECTION */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Images */}
              <div className="lg:col-span-7 space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200">
                  <img
                    src="/assets/img/images/imgi_8_WhatsApp-Image-2020-09-24-at-16.05.39.jpg"
                    alt="Hospital facilities"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden shadow-sm border border-slate-200">
                    <img
                      src="/assets/img/images/imgi_9_TOR_7878-e1601217782824.jpg"
                      alt="Medical team"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-sm border border-slate-200">
                    <img
                      src="/assets/img/images/imgi_10_WhatsApp-Image-2020-09-24-at-16.05.38-1.jpg"
                      alt="Patient consultation"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Right Content & Stats */}
              <div className="lg:col-span-5 space-y-6">
                <h3 className="font-heading font-bold text-2xl text-slate-900">
                  About Maa Nursing Home & NetraJyoti Eyecare Centre
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Established in 2002, the hospital provides treatment for cataracts, glaucoma, squint disorders, paediatric ophthalmology, oculoplasty, retina care, infertility treatment and obstetrics. It houses advanced LASIK facilities and a dedicated Infertility Clinic. Accredited with NABH and ISO 9001-2015, the hospital is also a government-approved centre for Keratoplasty (Eye Donation Surgery).
                </p>

                <div className="space-y-4 pt-2">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center space-x-4 shadow-sm">
                    <span className="font-heading font-extrabold text-3xl text-primary-700">98000+</span>
                    <div>
                      <h5 className="font-heading font-bold text-sm text-slate-900">Successful Eye & Gynaecology Treatments</h5>
                      <p className="text-xs text-slate-500">Delivering quality care across all departments</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center space-x-4 shadow-sm">
                    <span className="font-heading font-extrabold text-3xl text-accent-600">95%</span>
                    <div>
                      <h5 className="font-heading font-bold text-sm text-slate-900">Patient Satisfaction</h5>
                      <p className="text-xs text-slate-500">Based on consistent long-term feedback</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION, VISION, LEGACY */}
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-primary-700 text-white flex items-center justify-center">
                  <Heart className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-xl text-slate-900">Our Mission</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To eradicate treatable eye diseases across all sections of society and bring the joy of parenthood to families through affordable infertility treatment.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-accent-600 text-white flex items-center justify-center">
                  <Eye className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-xl text-slate-900">Our Vision</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To provide accessible and affordable high-quality clinical care, ensuring that every patient receives world-class treatment close to home.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-primary-700 text-white flex items-center justify-center">
                  <Star className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-xl text-slate-900">Our Legacy</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Inspired by Dr G.K. Savla’s philosophy of “service before self,” the hospital continues to uphold compassion, integrity and excellence in every aspect of care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AREAS OF EXCELLENCE */}
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
            <div className="space-y-2 max-w-xl mx-auto">
              <h3 className="font-heading font-bold text-2xl text-slate-900">Areas of Excellence</h3>
              <p className="text-slate-600 text-sm">Comprehensive expertise across multiple super-specialities</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {["Ophthalmology", "Gynaecology", "Infertility Care", "LASIK & Vision Correction", "Obstetrics"].map((item, idx) => (
                <div key={idx} className="px-6 py-3.5 bg-white rounded-xl border border-slate-200 shadow-sm font-heading font-bold text-sm text-slate-800 flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
