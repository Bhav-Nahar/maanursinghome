import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { TopBar } from "@/components/ui/TopBar";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { AppointmentForm } from "@/components/ui/AppointmentForm";
import { TREATMENTS_DATA } from "@/data/treatments";
import { CheckCircle2, ShieldCheck, ChevronRight, Stethoscope, AlertCircle, HelpCircle, Activity } from "lucide-react";

export const revalidate = 31536000; // 1 year ISR

const CUSTOM_STATIC_SLUGS = ["cataract", "diabetic-retinopathy", "glaucoma", "ivf", "lasik", "pcod"];

export async function generateStaticParams() {
  return Object.keys(TREATMENTS_DATA)
    .filter((slug) => !CUSTOM_STATIC_SLUGS.includes(slug))
    .map((slug) => ({
      slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (CUSTOM_STATIC_SLUGS.includes(slug)) return {};
  const treatment = TREATMENTS_DATA[slug];
  if (!treatment) return {};

  return {
    title: `${treatment.title} in Malad, Mumbai | Maa Nursing Home`,
    description: treatment.summary,
  };
}

export default async function TreatmentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (CUSTOM_STATIC_SLUGS.includes(slug)) {
    notFound();
  }
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span>Treatments</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">{treatment.title}</span>
            </div>
            
            <span className="inline-block px-3 py-1 text-xs font-semibold text-emerald-400 bg-emerald-950/80 rounded-full border border-emerald-700/50">
              {treatment.department}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              {treatment.title}
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              {treatment.summary}
            </p>
          </div>
        </section>

        {/* CONTENT & FORM CONTAINER */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Main Content */}
              <div className="lg:col-span-8 space-y-10">
                
                {/* Hero Image */}
                {treatment.image && (
                  <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                    <img 
                      src={treatment.image} 
                      alt={treatment.title} 
                      className="w-full h-auto object-cover max-h-96"
                    />
                  </div>
                )}

                {/* Overview / Content */}
                <div className="space-y-4">
                  <h2 className="font-heading font-bold text-2xl text-slate-900 border-b border-slate-200 pb-2">
                    Overview & Clinical Approach
                  </h2>
                  <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                    {treatment.content.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Symptoms Section */}
                {treatment.symptoms && treatment.symptoms.length > 0 && (
                  <div className="p-6 bg-amber-50/60 rounded-2xl border border-amber-100 space-y-4">
                    <h3 className="font-heading font-bold text-xl text-amber-900 flex items-center">
                      <AlertCircle className="w-5 h-5 text-amber-600 mr-2" />
                      Common Symptoms
                    </h3>
                    <ul className="space-y-2.5 text-sm text-slate-700">
                      {treatment.symptoms.map((symptom, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-amber-600 mr-2.5 mt-0.5 shrink-0" />
                          <span>{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Causes Section */}
                {treatment.causes && treatment.causes.length > 0 && (
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
                    <h3 className="font-heading font-bold text-xl text-slate-900 flex items-center">
                      <HelpCircle className="w-5 h-5 text-primary-700 mr-2" />
                      Primary Causes & Risk Factors
                    </h3>
                    <ul className="space-y-2.5 text-sm text-slate-700">
                      {treatment.causes.map((cause, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-primary-700 mr-2.5 mt-0.5 shrink-0" />
                          <span>{cause}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Diagnosis Section */}
                {treatment.diagnosis && treatment.diagnosis.length > 0 && (
                  <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100 space-y-4">
                    <h3 className="font-heading font-bold text-xl text-blue-950 flex items-center">
                      <Stethoscope className="w-5 h-5 text-blue-700 mr-2" />
                      Diagnostic Procedures
                    </h3>
                    <ul className="space-y-2.5 text-sm text-slate-700">
                      {treatment.diagnosis.map((diag, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-blue-700 mr-2.5 mt-0.5 shrink-0" />
                          <span>{diag}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Treatment Steps Section */}
                {treatment.treatmentSteps && treatment.treatmentSteps.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="font-heading font-bold text-xl text-slate-900 flex items-center border-b border-slate-200 pb-2">
                      <Activity className="w-5 h-5 text-emerald-600 mr-2" />
                      Treatment Steps
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {treatment.treatmentSteps.map((step, idx) => (
                        <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-xl shadow-sm space-y-1">
                          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Step {idx + 1}</span>
                          <h4 className="font-heading font-bold text-slate-900 text-sm">{step.title}</h4>
                          <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Benefits */}
                <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-md space-y-6">
                  <h3 className="font-heading font-bold text-xl text-white flex items-center">
                    <ShieldCheck className="w-6 h-6 text-emerald-400 mr-2" />
                    Key Treatment Benefits
                  </h3>
                  <ul className="space-y-3">
                    {treatment.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-slate-200 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-3 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Sidebar Form */}
              <div className="lg:col-span-4 lg:sticky lg:top-24">
                <AppointmentForm title={`Consultation for ${treatment.title}`} />
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
