import React from "react";
import Link from "next/link";
import { TopBar } from "@/components/ui/TopBar";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { Stethoscope, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title:
    "Our Specialists & Eye Surgeons in Malad, Kandivali, Borivali, Goregaon, Andheri, Parle, Santacruz",
  description:
    "Meet our panel of expert doctors and visiting consultants at Maa Nursing Home. Specialists in ophthalmology, gynaecology, infertility, surgery, and paediatrics in Malad West. Maa Nursing Home is the trusted choice for the best eye surgeon, ophthalmologist, cataract surgeon, and LASIK surgeon in Malad, Kandivali, Borivali, Goregaon, Andheri, Parle, and Santacruz.",
};

export default function DoctorsPage() {
  const consultants = [
    { name: "Dr Jugal Shah", quals: "MS, DNB, DOMS, FCPS", spec: "Ophthalmologist", link: "/dr-jugal", img: "/assets/img/images/dr jugal.jpg" },
    { name: "Dr Jyoti Shah", quals: "MD, DGO, FCPS, DFP", spec: "Gynaecologist, Obstetrician & Infertility specialist", link: "/dr-jyoti", img: "/assets/img/images/dr jyoti.jpg" },
    { name: "Dr Sanjay Ruparel", quals: "MS, DOMS", spec: "Ophthalmologist" },
    { name: "Dr Vikram Mehta", quals: "MS, DNB, FCPS", spec: "Vitreo Retina Surgeon" },
    { name: "Dr Vishal Rathore", quals: "MS, DNB", spec: "Retina Specialist" },
    { name: "Dr Nirav Raichura", quals: "DNB, FMRF", spec: "Oculoplastic Surgeon" },
    { name: "Dr Nitin Shah", quals: "MS, DNB, FCPS, DGO", spec: "Laparoscopic Surgeon" },
    { name: "Dr Atul Puranik", quals: "MS", spec: "General Surgeon" },
    { name: "Dr Chirag Shah", quals: "DCH, DNB", spec: "Paediatrician" },
    { name: "Dr Susan Fernandes", quals: "MDP, Fellowship in Neo-natal care", spec: "Paediatrician" },
    { name: "Dr Rajesh Binyala", quals: "MD", spec: "General Physician" },
    { name: "Dr Pradeep Ghadge", quals: "MD", spec: "Diabetologist" },
    { name: "Dr Makrand Damle", quals: "MS, DNM, FCPS, DORL", spec: "ENT" },
    { name: "Dr Dhaval Shah", quals: "MBBS, D.D.V", spec: "Skin Specialist" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-body">
      <TopBar />
      <Header />

      <main className="flex-1">
        {/* PAGE TITLE */}
        <section className="bg-slate-900 text-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              Panel of Consultants & Specialists
            </h1>
            <p className="text-slate-300 text-base max-w-2xl">
              Ethical, experienced, and patient-focused specialists bringing decades of clinical excellence to your healthcare.
            </p>
          </div>
        </section>

        {/* SENIOR DOCTORS FEATURED */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Dr Jugal */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <img
                  src="/assets/img/images/dr jugal.jpg"
                  alt="Dr Jugal Shah"
                  className="w-28 h-28 rounded-2xl object-cover border-2 border-primary-700 shrink-0"
                />
                <div className="space-y-2 text-center sm:text-left">
                  <h3 className="font-heading font-bold text-xl text-slate-900">Dr Jugal Shah</h3>
                  <p className="text-xs font-semibold text-primary-700">Senior Consulting Ophthalmologist</p>
                  <p className="text-xs text-slate-500 font-semibold">MS, DNB, DOMS, FCPS</p>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Over 30 years experience & 98,000+ cataract surgeries. Specialist in Micro-Phaco & LASIK.
                  </p>
                  <Link href="/dr-jugal" className="inline-flex items-center text-xs font-bold text-primary-700 hover:underline pt-1">
                    View Full Profile <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Dr Jyoti */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <img
                  src="/assets/img/images/dr jyoti.jpg"
                  alt="Dr Jyoti Shah"
                  className="w-28 h-28 rounded-2xl object-cover border-2 border-emerald-600 shrink-0"
                />
                <div className="space-y-2 text-center sm:text-left">
                  <h3 className="font-heading font-bold text-xl text-slate-900">Dr Jyoti Shah</h3>
                  <p className="text-xs font-semibold text-accent-600">Senior Consulting Gynaecologist & IVF Specialist</p>
                  <p className="text-xs text-slate-500 font-semibold">MD, DGO, FCPS, DFP</p>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Senior consultant leading IVF, high-risk obstetrics, and laparoscopic surgery wings.
                  </p>
                  <Link href="/dr-jyoti" className="inline-flex items-center text-xs font-bold text-accent-600 hover:underline pt-1">
                    View Full Profile <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FULL CONSULTANT TABLE SECTION */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="font-heading font-bold text-2xl text-slate-900">
              Panel of Consultants List
            </h2>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-white font-heading font-bold uppercase tracking-wider text-xs">
                    <tr>
                      <th className="px-6 py-4">Name of Consultant</th>
                      <th className="px-6 py-4">Qualifications</th>
                      <th className="px-6 py-4">Specialization</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    {consultants.map((doc, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 font-bold text-slate-900">
                          {doc.link ? (
                            <Link href={doc.link} className="text-primary-700 hover:underline">
                              {doc.name}
                            </Link>
                          ) : (
                            doc.name
                          )}
                        </td>
                        <td className="px-6 py-4 font-medium">{doc.quals}</td>
                        <td className="px-6 py-4 font-semibold text-slate-800">{doc.spec}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
