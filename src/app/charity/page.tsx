import React from "react";
import Link from "next/link";
import { TopBar } from "@/components/ui/TopBar";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { ChevronRight, Heart, Users, Eye, Award } from "lucide-react";

export const metadata = {
  title: "Charity & Free Eye Camps | Maa Nursing Home",
  description:
    "Charitable initiatives, free eye screening camps, and subsidized cataract operations conducted by Dr. Jugal Shah and Maa Nursing Home.",
};

export default function CharityPage() {
  // All 29 charity camp images from assets/img/charity/
  const charityImages = Array.from({ length: 29 }, (_, i) => i + 1);

  const keyStats = [
    { label: "Free Eye Screening Camps", value: "100+", icon: Eye },
    { label: "Patients Screened", value: "25,000+", icon: Users },
    { label: "Free & Subsidized Surgeries", value: "5,000+", icon: Heart },
    { label: "Years of Community Service", value: "30+", icon: Award },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-body">
      <TopBar />
      <Header />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="bg-slate-900 text-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
            <div className="flex items-center justify-center space-x-2 text-xs font-semibold text-rose-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">Community Service</span>
            </div>
            
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Charity & Free Eye Camps
            </h1>
            <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
              Giving back to society through free vision screening, free cataract operations, and subsidized healthcare for underprivileged communities.
            </p>
          </div>
        </section>

        {/* IMPACT STATS */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {keyStats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="p-6 bg-slate-50 border border-slate-200 rounded-2xl text-center space-y-2">
                    <Icon className="w-8 h-8 text-rose-600 mx-auto" />
                    <div className="font-heading font-extrabold text-3xl text-slate-900">{stat.value}</div>
                    <div className="text-xs font-semibold text-slate-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PHOTO GALLERY OF CAMPS */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-2">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900">
                Charity Camps Photo Gallery (2018–2024)
              </h2>
              <p className="text-slate-600 text-sm max-w-xl mx-auto">
                Moments captured from our diagnostic camps, cataract screening drives, and community health initiatives.
              </p>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {charityImages.map((num) => (
                <div 
                  key={num} 
                  className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 bg-white p-2 group"
                >
                  <img
                    src={`/assets/img/charity/charity (${num}).jpeg`}
                    alt={`Free Eye Camp Initiative ${num}`}
                    className="w-full h-auto object-cover rounded-xl group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
