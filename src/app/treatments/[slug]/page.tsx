import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { TopBar } from "@/components/ui/TopBar";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { AppointmentForm } from "@/components/ui/AppointmentForm";
import { TREATMENTS_DATA } from "@/data/treatments";
import { CheckCircle2, ShieldCheck, ArrowRight, Phone } from "lucide-react";

export const revalidate = 31536000; // 1 year ISR

export async function generateStaticParams() {
  return Object.keys(TREATMENTS_DATA).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const treatment = TREATMENTS_DATA[slug];
  if (!treatment) return {};

  return {
    title: `${treatment.title} in Malad, Mumbai | Maa Nursing Home`,
    description: treatment.summary,
  };
}

export default async function TreatmentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const treatment = TREATMENTS_DATA[slug];

  if (!treatment) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-body">
      <TopBar />
      <Header />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="bg-slate-900 text-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-emerald-400 bg-emerald-950/80 rounded-full border border-emerald-700/50">
                {treatment.department}
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
                {treatment.title}
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {treatment.summary}
              </p>
            </div>
          </div>
        </section>

        {/* CONTENT & FORM CONTAINER */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Main Content */}
              <div className="lg:col-span-7 space-y-8">
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                  <h2 className="font-heading font-bold text-2xl text-slate-900">
                    Understanding Treatment & Clinical Approach
                  </h2>
                  <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                    {treatment.content.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                  <h3 className="font-heading font-bold text-xl text-slate-900">
                    Key Treatment Benefits
                  </h3>
                  <ul className="space-y-3">
                    {treatment.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Sidebar Form */}
              <div className="lg:col-span-5">
                <div className="sticky top-28">
                  <AppointmentForm title={`Consultation for ${treatment.title}`} />
                </div>
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
