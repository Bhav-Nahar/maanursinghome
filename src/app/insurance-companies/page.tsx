import React from "react";
import Link from "next/link";
import { TopBar } from "@/components/ui/TopBar";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { ChevronRight, ShieldCheck, CheckCircle2, Building2 } from "lucide-react";

export const metadata = {
  title: "Insurance & Cashless Facility | Maa Nursing Home",
  description:
    "Maa Nursing Home is empanelled with leading insurance companies and TPAs for cashless hospitalization in Malad West, Mumbai. Smooth Mediclaim processing for all patients.",
};

const insuranceList = [
  "Alankit Health Care TPA Ltd",
  "Anmol Medicare TPA Ltd.",
  "Anyuta MediNet Healthcare Pvt. Ltd.",
  "Dedicated Healthcare Services TPA",
  "E Meditek (TPA) Services Ltd.",
  "East West Assist TPA Pvt Ltd",
  "Ericson TPA Healthcare Pvt. Ltd.",
  "Family Health Plan (TPA) Ltd.",
  "Focus Health Services Pvt Ltd",
  "Genins India TPA Ltd",
  "Good Health Plan Ltd.",
  "Grand Health Care TPA Pvt Ltd",
  "Health India TPA Services Pvt Ltd",
  "Health Insurance TPA of India Ltd.",
  "Heritage Health TPA Pvt. Ltd.",
  "MD India Healthcare (TPA) Services",
  "Med Save Health Care TPA Ltd.",
  "Medi Assist India TPA Pvt. Ltd.",
  "Medicare TPA Services Pvt. Ltd.",
  "Paramount Health Services Pvt. Ltd.",
  "Park Mediclaim TPA Pvt Ltd.",
  "Raksha TPA Pvt. Ltd.",
  "Rothshield Healthcare TPA Ltd.",
  "Safeway TPA Services Pvt. Ltd",
  "United Healthcare Parekh TPA",
  "Vidal Health TPA",
  "Vipul Med Corp TPA Pvt. Ltd.",
  "Aditya Birla Health Insurance Co.",
  "Apollo Munich Health Insurance",
  "Bajaj Allianz General Insurance",
  "Bharti AXA General Insurance",
  "Birla Sun Life Insurance Co.",
  "Cholamandalam MS Insurance",
  "CignaTTK Health Insurance",
  "Edelweiss Tokio Life Insurance",
  "Future Generali India Insurance",
  "HDFC ERGO General Insurance",
  "ICICI Lombard General Insurance",
  "ICICI Prudential Life Insurance",
  "IFFCO Tokio General Insurance",
  "L&T General Insurance Co.",
  "Liberty Videocon General Insurance",
  "Magma HDI General Insurance",
  "Max Bupa Health Insurance",
  "Raheja QBE General Insurance",
  "Reliance General Insurance",
  "Religare Health Insurance",
  "Royal Sundaram Alliance Insurance",
  "SBI General Insurance",
  "Star Health & Allied Insurance",
  "Tata AIG General Insurance",
  "Universal Sompo General Insurance",
  "DHFL General Insurance Co.",
  "Aviva Life Insurance Co.",
  "Acko General Insurance",
  "Go Digit General Insurance",
  "Kotak Mahindra General Insurance",
  "Reliance Health Insurance",
  "Shriram General Insurance"
];

export default function InsuranceCompaniesPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-body">
      <TopBar />
      <Header />

      <main className="flex-1">
        {/* PAGE TITLE */}
        <section className="bg-slate-900 text-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">Insurance Companies</span>
            </div>
            
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Insurance & Cashless Facility
            </h1>
            <p className="text-slate-300 text-base max-w-3xl leading-relaxed">
              We are empanelled with all major health insurance companies and TPAs, including CGHS, to provide seamless and trusted cashless hospitalization services.
            </p>
          </div>
        </section>

        {/* INTRO TEXT & HIGHLIGHTS */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                <ShieldCheck className="w-8 h-8 text-primary-700 mb-2" />
                <h3 className="font-heading font-bold text-lg text-slate-900">Long-Standing Empanellment</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Empanelled with leading Health Insurance Companies & TPAs who trust us for ethical, high-quality care.</p>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                <Building2 className="w-8 h-8 text-emerald-600 mb-2" />
                <h3 className="font-heading font-bold text-lg text-slate-900">CGHS Empanelled</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Empanelled with CGHS (Central Government Health Scheme), serving public sector employees with cashless facilities.</p>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                <CheckCircle2 className="w-8 h-8 text-accent-600 mb-2" />
                <h3 className="font-heading font-bold text-lg text-slate-900">Dedicated TPA Desk</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Our in-house TPA helpdesk assists with paperwork, pre-authorization, and rapid claim approvals.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FULL INSURANCE LIST */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <h2 className="font-heading font-bold text-2xl text-slate-900 border-b border-slate-200 pb-4">
                Empanelled Insurance Companies & TPAs
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {insuranceList.map((company, idx) => (
                  <div key={idx} className="flex items-center p-3 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-slate-300 transition-all text-xs font-semibold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2.5 shrink-0" />
                    <span>{company}</span>
                  </div>
                ))}
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
