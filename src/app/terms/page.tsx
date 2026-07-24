import React from "react";
import Link from "next/link";
import { TopBar } from "@/components/ui/TopBar";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title:
    "Terms & Conditions in Malad, Kandivali, Borivali, Goregaon, Andheri, Parle, Santacruz | Maa Nursing Home",
  description:
    "Read the terms and conditions for using the services and website of Maa Nursing Home & NetraJyoti Eyecare Centre, Malad, Mumbai. Maa Nursing Home is the trusted choice for the best eye surgeon, ophthalmologist, cataract surgeon, and LASIK surgeon in Malad, Kandivali, Borivali, Goregaon, Andheri, Parle, and Santacruz.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-body">
      <TopBar />
      <Header />

      <main className="flex-1">
        {/* PAGE TITLE */}
        <section className="bg-slate-900 text-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
            <div className="flex items-center justify-center space-x-2 text-xs font-semibold text-emerald-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">Terms & Policy</span>
            </div>
            
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Terms of Service & Privacy Policy
            </h1>
            <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
              Guidelines regarding your usage of the website, patient privacy rights, medical disclaimers, and consultation scheduling.
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm space-y-8 text-slate-700 text-sm leading-relaxed">
            
            {/* Section 1 */}
            <div className="space-y-3">
              <h2 className="font-heading font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
                1. Terms of Service
              </h2>
              <p>
                By accessing and browsing the website of <strong>Maa Nursing Home & NetraJyoti Eyecare Centre</strong>, you agree to comply with and be bound by these terms. This website is intended to provide information about our hospital, consultants, medical procedures, and appointment scheduling.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-3">
              <h2 className="font-heading font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
                2. Hospital Services & Clinical Disclaimer
              </h2>
              <p>
                The information provided on this website is for general educational and informational purposes only. It is not intended to be a substitute for professional medical advice, clinical diagnosis, or emergency care. Always seek the advice of your ophthalmologist, gynaecologist, or qualified healthcare provider with any questions regarding a medical condition.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-3">
              <h2 className="font-heading font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
                3. Appointments & Cancellations
              </h2>
              <p>
                Appointment requests submitted online or via WhatsApp are subject to confirmation by our OPD desk staff. While we strive to honor your preferred date and time, emergency procedures or surgical schedules may require slot rescheduling. Patients are requested to notify us at least 24 hours in advance if cancelling or rescheduling an appointment.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-3">
              <h2 className="font-heading font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
                4. Privacy Policy & Patient Data Security
              </h2>
              <p>
                Maa Nursing Home is committed to protecting patient privacy and personal health information. Details submitted through appointment forms, contact inquiries, or WhatsApp messages are kept strictly confidential. We do not sell, rent, or distribute patient contact details to third parties.
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
