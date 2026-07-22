import React from "react";
import Link from "next/link";
import { TopBar } from "@/components/ui/TopBar";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "Media Gallery | Maa Nursing Home Malad West",
  description:
    "View our hospital gallery featuring advanced eye care and gynaecology facilities, patient care areas, and medical excellence in Malad, Mumbai.",
};

export default function GalleryPage() {
  // The original script generated 41 images using the format: img (1).jpg to img (41).jpg
  const totalImages = 41;
  const images = Array.from({ length: totalImages }, (_, i) => i + 1);

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
              <span className="text-white">Media Gallery</span>
            </div>
            
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Hospital Gallery
            </h1>
            <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
              Take a visual tour of our advanced facilities, state-of-the-art medical equipment, and the comforting environment at Maa Nursing Home.
            </p>
          </div>
        </section>

        {/* GALLERY GRID */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {images.map((num) => (
                <div 
                  key={num} 
                  className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 group"
                >
                  <img
                    src={`/assets/img/media/img (${num}).jpg`}
                    alt={`Maa Nursing Home Facility ${num}`}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
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
