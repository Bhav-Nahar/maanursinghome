import React from "react";
import { TopBar } from "@/components/ui/TopBar";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";

export const metadata = {
  title: "Terms & Privacy Policy | Maa Nursing Home",
  description:
    "Privacy policy, data protection, and terms of use for Maa Nursing Home & NetraJyoti Eyecare Centre website.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-body">
      <TopBar />
      <Header />

      <main className="flex-1">
        <section className="bg-slate-900 text-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              Terms of Use & Privacy Policy
            </h1>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm space-y-6 text-slate-700 text-sm leading-relaxed">
            <h2 className="font-heading font-bold text-xl text-slate-900">Medical Disclaimer</h2>
            <p>
              The information provided on this website is for general educational and informational purposes only. It is not intended to be a substitute for professional medical advice, clinical diagnosis, or treatment. Always seek the advice of your ophthalmologist or physician regarding any medical condition.
            </p>
            <h2 className="font-heading font-bold text-xl text-slate-900">Privacy Policy</h2>
            <p>
              Maa Nursing Home is committed to protecting your personal health information. Details submitted through appointment forms or online inquiries are kept strictly confidential and used solely for medical consultation coordination.
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
