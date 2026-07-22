import React from "react";
import Metadata from "next";
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
  title: "LASIK Eye Surgery Eligibility Assessment in Mumbai | Dr. Jugal Shah",
  description:
    "Get a personalized LASIK eligibility evaluation with Dr. Jugal Shah in Malad West, Mumbai. Contoura and Bladeless Femto LASIK options.",
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
                    <span className="text-emerald-600 font-bold mr-2">✓</span> Are 18 years of age or older
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 font-bold mr-2">✓</span> Have reasonably stable spectacle power for 1+ year
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 font-bold mr-2">✓</span> Have suitable corneal thickness and shape
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 font-bold mr-2">✓</span> Have healthy eyes without active infection
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
                    <span className="text-amber-600 font-bold mr-2">✕</span> Your cornea is too thin or irregular
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold mr-2">✕</span> You have severe dry eye condition
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold mr-2">✕</span> You are pregnant or breastfeeding
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold mr-2">✕</span> Active eye infection or cataracts are present
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* DR JUGAL SHAH PROFILE */}
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
            <div className="w-48 h-48 rounded-2xl bg-slate-100 border-2 border-primary-700 shrink-0 overflow-hidden">
              <img src="/dr-jugal-shah.png" alt="Dr. Jugal Shah" className="w-full h-full object-cover" />
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
