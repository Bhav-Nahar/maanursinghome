import React from "react";
import Link from "next/link";
import { TopBar } from "@/components/ui/TopBar";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { AppointmentForm } from "@/components/ui/AppointmentForm";
import { Eye, Zap, FileText, CheckCircle2, Phone, Calendar, Clock } from "lucide-react";

export const metadata = {
  title:
    "Dr. Jugal Shah | Best Eye Surgeon & Cataract Surgeon in Malad, Kandivali, Borivali, Goregaon, Andheri, Parle, Santacruz",
  description:
    "Meet Dr. Jugal Shah, the leading cataract surgeon in Malad West, Mumbai. Over 98,000 successful cataract operations, specializing in stitchless Micro-Phaco & LASIK. Maa Nursing Home is the trusted choice for the best eye surgeon, ophthalmologist, cataract surgeon, and LASIK surgeon in Malad, Kandivali, Borivali, Goregaon, Andheri, Parle, and Santacruz.",
};

export default function DrJugalPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-body">
      <TopBar />
      <Header />

      <main className="flex-1">
        {/* PAGE TITLE */}
        <section className="bg-slate-900 text-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-emerald-400 bg-emerald-950/80 rounded-full border border-emerald-700/50">
              Senior Consulting Ophthalmologist
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              Dr Jugal Shah
            </h1>
            <p className="text-slate-300 text-base max-w-3xl">
              Maa Nursing Home & NetraJyoti Eyecare Centre — providing advanced eye care and compassionate gynaecology services since 2002. Excellence, accessibility and affordability are the pillars of our care.
            </p>
          </div>
        </section>

        {/* DEPARTMENT & DR DETAILS SECTION */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column - Ophthalmology Details */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-2 text-xs font-bold text-primary-700 uppercase tracking-wider bg-primary-50 px-3 py-1 rounded-full">
                    <Eye className="w-4 h-4" />
                    <span>Ophthalmology</span>
                  </div>
                  <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900">
                    Comprehensive Eye Care & Vision Correction
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    We treat cataracts, glaucoma, squint, retina disorders, paediatric ophthalmology and oculoplasty. Our centre offers LASIK and advanced Micro-Phaco cataract surgery, backed by NABH & ISO-certified care and a government-approved keratoplasty programme.
                  </p>
                </div>

                {/* Service Highlights Cards */}
                <div className="space-y-4">
                  <h3 className="font-heading font-bold text-xl text-slate-900">Specialized Services</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="w-10 h-10 rounded-xl bg-primary-700 text-white flex items-center justify-center">
                        <Eye className="w-5 h-5" />
                      </div>
                      <h4 className="font-heading font-bold text-slate-900 text-sm">Cataract Surgery (Micro-Phaco)</h4>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        Fast, minimally invasive procedures optimized for safety and quick recovery.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                        <Zap className="w-5 h-5" />
                      </div>
                      <h4 className="font-heading font-bold text-slate-900 text-sm">LASIK & Refractive Surgery</h4>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        Advanced vision correction using the latest laser technologies for precise outcomes.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="w-10 h-10 rounded-xl bg-primary-700 text-white flex items-center justify-center">
                        <FileText className="w-5 h-5" />
                      </div>
                      <h4 className="font-heading font-bold text-slate-900 text-sm">Retina & Glaucoma Care</h4>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        Comprehensive diagnostics and surgical & medical treatments for complex conditions.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Emergency CTA Box */}
                <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Emergency Helpline Line</span>
                    <p className="font-heading font-bold text-lg text-emerald-400">8828068727 / 8828328726</p>
                  </div>
                  <a
                    href="tel:8828068727"
                    className="inline-flex items-center px-5 py-3 rounded-xl font-heading font-bold text-slate-900 bg-emerald-400 hover:bg-emerald-300 text-xs transition-all"
                  >
                    <Phone className="w-4 h-4 mr-1.5" /> Call Hospital
                  </a>
                </div>
              </div>

              {/* Right Column - Dr Jugal Shah Image & Profile Card */}
              <div className="lg:col-span-5 space-y-6">
                <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-slate-200">
                  <img
                    src="/assets/img/images/dr jugal.jpg"
                    alt="Dr Jugal Shah - Senior Ophthalmologist"
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-4">
                  <div>
                    <h4 className="font-heading font-bold text-xl text-slate-900">Dr Jugal Shah</h4>
                    <p className="text-xs font-semibold text-primary-700">Senior Consulting Ophthalmologist</p>
                    <span className="text-xs font-bold text-slate-500">M.S., D.N.B., D.O.M.S., F.C.P.S.</span>
                  </div>

                  <p className="text-slate-700 text-xs leading-relaxed">
                    Dr Jugal Shah began his career in 1992 and co-founded Maa Nursing Home & NetraJyoti Eyecare Centre in 2002. A renowned cataract and refractive surgeon, he has performed over <strong>98,000+ cataract surgeries</strong> and regularly conducts complex and rare eye procedures. He emphasizes short, precise surgery times to reduce infection risk and improve outcomes.
                  </p>

                  <ul className="space-y-2 text-xs font-medium text-slate-700 border-t border-slate-200 pt-3">
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0" />
                      <span>Expert in Micro-Phaco cataract surgery & LASIK</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0" />
                      <span>Extensive outreach — free surgical camps in rural regions</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0" />
                      <span>Philosophy: “Service before self” — serving all economic sections</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERT CARE / DEPARTMENT DETAILS SECTION */}
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8 space-y-4">
                <h3 className="font-heading font-bold text-2xl text-slate-900">Expert Care You Can Trust</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Our hospital combines advanced diagnostics, fully-automated operation theatres and a visiting panel of specialists to deliver high-quality eye care. Supported by NABH and ISO 9001:2015 accreditations, we are also a registered centre for Keratoplasty (Eye Donation Surgery).
                </p>
                <ul className="space-y-3 text-sm text-slate-700 pt-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2.5 shrink-0" />
                    State-of-the-art Micro-Phaco & LASIK suites
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2.5 shrink-0" />
                    Advanced imaging: OCT, Fundus photography, Visual fields
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2.5 shrink-0" />
                    Paediatric ophthalmology & strabismus management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2.5 shrink-0" />
                    Comprehensive post-operative rehabilitation & follow-up
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-4">
                <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-3">
                  <h4 className="font-heading font-bold text-lg text-slate-900 flex items-center">
                    <Clock className="w-5 h-5 text-primary-700 mr-2" /> Department Hours
                  </h4>
                  <div className="space-y-2 text-xs text-slate-700">
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span>Monday - Friday</span>
                      <span className="font-semibold">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span>Saturday</span>
                      <span className="font-semibold">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-semibold">Emergency & Camps</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APPOINTMENT FORM SECTION */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <AppointmentForm title="Book Appointment with Dr. Jugal Shah" />
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
