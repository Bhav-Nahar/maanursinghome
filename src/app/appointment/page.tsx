import React from "react";
import Link from "next/link";
import { TopBar } from "@/components/ui/TopBar";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { AppointmentForm } from "@/components/ui/AppointmentForm";
import { ChevronRight, Calendar, Clock, PhoneCall } from "lucide-react";

export const metadata = {
  title: "Book OPD Appointment | Maa Nursing Home & NetraJyoti Eyecare",
  description:
    "Schedule your OPD consultation for Eye Care, LASIK, Cataract, IVF, or Gynecology with Dr. Jugal Shah and Dr. Jyoti Shah.",
};

export default function AppointmentPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-body">
      <TopBar />
      <Header />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="bg-slate-900 text-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
            <div className="flex items-center justify-center space-x-2 text-xs font-semibold text-emerald-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">Book Appointment</span>
            </div>
            
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Book Your OPD Consultation
            </h1>
            <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
              Schedule your appointment with Dr. Jugal Shah (Ophthalmology & LASIK) or Dr. Jyoti Shah (Gynecology, Obstetrics & IVF) at Malad West, Mumbai.
            </p>
          </div>
        </section>

        {/* APPOINTMENT FORM SECTION */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column - Instructions & Info */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-4">
                  <h3 className="font-heading font-bold text-xl text-slate-900 flex items-center">
                    <Clock className="w-5 h-5 text-primary-700 mr-2" />
                    OPD Consultation Hours
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm text-slate-700 border-l-2 border-primary-700 pl-3">
                    <p><strong>Monday to Friday:</strong> 9:00 AM – 6:00 PM</p>
                    <p><strong>Saturday:</strong> 9:00 AM – 2:00 PM</p>
                    <p className="text-xs text-slate-500 font-medium pt-1">(24x7 Emergency Clinical Backup Available)</p>
                  </div>
                </div>

                <div className="p-6 bg-emerald-50 border border-emerald-100 rounded-2xl space-y-3">
                  <h4 className="font-heading font-bold text-base text-emerald-950 flex items-center">
                    <PhoneCall className="w-5 h-5 text-emerald-600 mr-2" />
                    Direct Telephone Helpline
                  </h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Prefer booking over the phone? Call our OPD helpdesk directly for assistance:
                  </p>
                  <p className="text-sm font-bold text-emerald-800">
                    <a href="tel:+919820072543" className="hover:underline">+91 98200 72543</a> / <a href="tel:+918850118725" className="hover:underline">+91 88501 18725</a>
                  </p>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="lg:col-span-7">
                <AppointmentForm title="Schedule Clinical Appointment" />
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
