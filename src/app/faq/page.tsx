import React from "react";
import { TopBar } from "@/components/ui/TopBar";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { HelpCircle } from "lucide-react";

export const metadata = {
  title: "Frequently Asked Questions (FAQ) | Maa Nursing Home",
  description:
    "Find answers to common questions regarding appointments, LASIK, Cataract surgery, IVF treatment, and hospital policies.",
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-body">
      <TopBar />
      <Header />

      <main className="flex-1">
        <section className="bg-slate-900 text-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              Frequently Asked Questions
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl">
              Answers to common patient inquiries regarding consultations, surgeries, and fertility treatments.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                What are the OPD consultation hours?
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                OPD hours are Monday through Friday from 9:00 AM to 6:00 PM, and Saturday from 9:00 AM to 2:00 PM. Emergency medical assistance is available 24x7.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                Is cashless mediclaim/insurance accepted?
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Yes, Maa Nursing Home works with major TPA and insurance providers for surgical procedures including Cataract, Laparoscopic Surgery, and emergency hospitalizations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                How quickly can I return to normal work after Cataract or LASIK surgery?
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Most patients resume light indoor activities within 24 to 48 hours post-procedure. Detailed post-op care instructions are provided after examination.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h2 className="font-heading font-bold text-lg text-slate-900">
                What is the first step in the IVF process?
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                The first step is a clinical fertility assessment with Dr. Jyoti Shah, including hormonal profile evaluation and pelvic ultrasound scan to design a personalized treatment plan.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
