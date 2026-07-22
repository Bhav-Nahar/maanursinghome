import React from "react";
import { TopBar } from "@/components/ui/TopBar";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";

export const metadata = {
  title: "Charity & Free Eye Camps | Maa Nursing Home",
  description:
    "Charitable initiatives, free eye screening camps, and subsidized cataract operations conducted by Dr. Jugal Shah and Maa Nursing Home.",
};

export default function CharityPage() {
  const camps = [
    {
      year: "2024",
      image: "/assets/img/charity/charity (4).jpeg",
      details: "On 10th March 2024, Dr. Jugal Shah conducted free eye check-ups, cataract surgeries, and distributed reading spectacles. Over 200 patients benefitted from this initiative.",
    },
    {
      year: "2023",
      image: "/assets/img/charity/charity (9).jpeg",
      details: "Diagnostic eye camp at Maa Nursing Home on 3rd September 2023. 312 patients screened, 97 cataracts detected, 16 glaucoma cases diagnosed, and 67 spectacles dispensed.",
    },
    {
      year: "2023 (Outreach)",
      image: "/assets/img/charity/charity (7).jpeg",
      details: "Surgical eye camps at Vatsalyagram, Vrindavan and Bhaktivedanta Hospital where over 254 cataract and complex eye surgeries were performed successfully.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-body">
      <TopBar />
      <Header />

      <main className="flex-1">
        <section className="bg-slate-900 text-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-emerald-400 bg-emerald-950/80 rounded-full border border-emerald-700/50">
              Community Service Initiative
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              Charity & Free Eye Camps
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl">
              Giving back to the community through free vision screening, free cataract operations, and subsidized healthcare for underprivileged patients.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {camps.map((camp, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm grid grid-cols-1 md:grid-cols-12 items-center">
                <div className="md:col-span-4 h-56 md:h-full bg-slate-100 overflow-hidden">
                  <img src={camp.image} alt={`Charity Camp ${camp.year}`} className="w-full h-full object-cover" />
                </div>
                <div className="md:col-span-8 p-6 md:p-8 space-y-3">
                  <span className="inline-block px-3 py-1 bg-rose-50 text-rose-700 text-xs font-bold rounded-full">
                    {camp.year}
                  </span>
                  <p className="text-slate-700 text-sm leading-relaxed">{camp.details}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
