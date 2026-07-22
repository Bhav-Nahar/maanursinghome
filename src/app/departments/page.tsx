import React from "react";
import Link from "next/link";
import { TopBar } from "@/components/ui/TopBar";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { Eye, Baby, HeartPulse, Stethoscope, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Medical Departments | Maa Nursing Home Malad West",
  description:
    "Explore our specialized medical wings: Eye Care (NetraJyoti), IVF & Infertility, Gynecology & Obstetrics, and Laparoscopic Surgery.",
};

export default function DepartmentsPage() {
  const departments = [
    {
      slug: "eye-care",
      title: "Ophthalmology & Eye Care (NetraJyoti)",
      icon: Eye,
      description: "Super-speciality eye care including Contoura LASIK, Micro-Incision Cataract (MICS), Glaucoma, and Diabetic Retinopathy.",
      color: "bg-primary-700",
    },
    {
      slug: "ivf",
      title: "IVF & Fertility Wing",
      icon: Baby,
      description: "Comprehensive reproductive technology including IVF, ICSI, IUI, PCOD care, and male infertility treatment.",
      color: "bg-accent-600",
    },
    {
      slug: "gynecology",
      title: "Gynecology & Obstetrics",
      icon: HeartPulse,
      description: "Complete women's healthcare, high-risk pregnancy management, normal delivery, and menopause clinic.",
      color: "bg-primary-700",
    },
    {
      slug: "laparoscopy",
      title: "Laparoscopic Surgical Wing",
      icon: Stethoscope,
      description: "Minimally invasive keyhole surgeries, laparoscopic hysterectomy, ovarian cystectomy, and hysteroscopy.",
      color: "bg-accent-600",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-body">
      <TopBar />
      <Header />

      <main className="flex-1">
        <section className="bg-slate-900 text-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              Specialized Medical Departments
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl">
              Dedicated medical wings equipped with advanced surgical infrastructure and senior medical specialists.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {departments.map((dept) => {
                const IconComp = dept.icon;
                return (
                  <div
                    key={dept.slug}
                    className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className={`w-12 h-12 rounded-xl text-white flex items-center justify-center ${dept.color}`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h2 className="font-heading font-bold text-2xl text-slate-900">
                        {dept.title}
                      </h2>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {dept.description}
                      </p>
                    </div>
                    <Link
                      href={`/departments/${dept.slug}`}
                      className="inline-flex items-center text-xs font-bold uppercase text-primary-700 hover:underline pt-2"
                    >
                      View Department Details <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
