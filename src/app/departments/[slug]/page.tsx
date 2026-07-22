import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { TopBar } from "@/components/ui/TopBar";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { AppointmentForm } from "@/components/ui/AppointmentForm";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const revalidate = 31536000; // 1 year ISR

const DEPARTMENTS_MAP: Record<string, { title: string; subtitle: string; description: string; services: string[] }> = {
  "eye-care": {
    title: "Ophthalmology & NetraJyoti Eyecare Centre",
    subtitle: "Advanced Refractive & Ophthalmic Surgery Wing",
    description: "Led by Dr. Jugal Shah (M.S., D.N.B., D.O.M.S., F.C.P.S.), offering modern laser vision correction, cataract microsurgery, glaucoma management, diabetic retinopathy care, and corneal treatments.",
    services: [
      "Contoura Vision & Bladeless Femto-LASIK",
      "Micro-Incision Cataract Surgery (MICS) with Monofocal, Multifocal & Toric IOLs",
      "Glaucoma Medical & Laser Management (SLT / Trabeculectomy)",
      "Diabetic Retinopathy Screening & Intravitreal Anti-VEGF Injections",
      "Corneal Disorders, Dry Eye Clinic & DSAEK",
      "Paediatric Ophthalmology & Squint Correction",
    ],
  },
  ivf: {
    title: "IVF & Fertility Wing",
    subtitle: "Advanced Assisted Reproductive Technology",
    description: "Led by Dr. Jyoti Shah (M.D., D.G.O.), providing comprehensive fertility treatments with state-of-the-art laboratory protocols for couples.",
    services: [
      "In-Vitro Fertilization (IVF) & ICSI",
      "Intrauterine Insemination (IUI)",
      "Ovulation Induction & Follicular Monitoring",
      "Polycystic Ovarian Disease (PCOD/PCOS) Care",
      "Male Infertility Evaluation & Surgical Retrieval (TESA/PESA)",
    ],
  },
  gynecology: {
    title: "Gynecology & Obstetrics",
    subtitle: "Complete Women's Healthcare Facility",
    description: "Comprehensive gynecological care, high-risk pregnancy monitoring, normal delivery, and preventive women's wellness.",
    services: [
      "High-Risk Obstetrics & Antenatal Care",
      "Normal & Painless Labor Delivery",
      "Menopause & Hormonal Disorder Clinic",
      "Endometriosis & Pelvic Pain Management",
      "Adolescent Gynecological Counseling",
    ],
  },
  laparoscopy: {
    title: "Laparoscopic Surgical Wing",
    subtitle: "Minimally Invasive Surgical Care",
    description: "Specialized in keyhole surgeries ensuring minimal blood loss, minimal scarring, and rapid post-operative recovery.",
    services: [
      "Laparoscopic Total & Subtotal Hysterectomy",
      "Laparoscopic Ovarian Cystectomy",
      "Diagnostic & Operative Hysteroscopy",
      "Laparoscopic Myomectomy (Fibroid Removal)",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(DEPARTMENTS_MAP).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dept = DEPARTMENTS_MAP[slug];
  if (!dept) return {};

  return {
    title: `${dept.title} | Maa Nursing Home Malad`,
    description: dept.description,
  };
}

export default async function DepartmentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dept = DEPARTMENTS_MAP[slug];

  if (!dept) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-body">
      <TopBar />
      <Header />

      <main className="flex-1">
        <section className="bg-slate-900 text-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-emerald-400 bg-emerald-950/80 rounded-full border border-emerald-700/50">
              {dept.subtitle}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              {dept.title}
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-3xl">
              {dept.description}
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7 space-y-8">
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                  <h2 className="font-heading font-bold text-2xl text-slate-900">
                    Clinical Treatments & Services Offered
                  </h2>
                  <div className="space-y-3">
                    {dept.services.map((service, idx) => (
                      <div key={idx} className="flex items-start text-slate-700 font-medium text-sm p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3 shrink-0 mt-0.5" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <AppointmentForm title={`Consultation for ${dept.title}`} />
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
