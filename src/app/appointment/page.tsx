import React from "react";
import { TopBar } from "@/components/ui/TopBar";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { AppointmentForm } from "@/components/ui/AppointmentForm";

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

      <main className="flex-1 py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AppointmentForm title="Book Your OPD Appointment" />
        </div>
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
