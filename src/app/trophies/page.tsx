import React from "react";
import Link from "next/link";
import { TopBar } from "@/components/ui/TopBar";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "Awards & Recognition | Maa Nursing Home",
  description:
    "Explore the awards and recognitions received by Dr. Jugal Shah, Dr. Jyoti Shah, and Maa Nursing Home for excellence in ophthalmology, gynaecology, and community service.",
};

export default function TrophiesPage() {
  const images = Array.from({ length: 34 }, (_, i) => i + 1);

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
              <span className="text-white">Trophies & Awards</span>
            </div>
            
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Awards & Recognitions
            </h1>
            <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
              Honoring decades of dedication, surgical excellence, and outstanding healthcare service by Dr. Jugal Shah and Dr. Jyoti Shah.
            </p>
          </div>
        </section>

        {/* TROPHIES GRID */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {images.map((num) => (
                <div 
                  key={num} 
                  className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 bg-slate-50 p-2 group"
                >
                  <img
                    src={`/assets/img/trophies/${num}.jpg`}
                    alt={`Maa Nursing Home Award Trophy ${num}`}
                    className="w-full h-auto object-contain rounded-xl group-hover:scale-102 transition-transform duration-300"
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
