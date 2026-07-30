import React from "react";
import Link from "next/link";
import { TopBar } from "@/components/ui/TopBar";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { AppointmentForm } from "@/components/ui/AppointmentForm";
import { Eye, ChevronRight, Info, CheckCircle2, ShieldCheck, Clock, FileSearch, Zap, Activity } from "lucide-react";

export const metadata = {
  title:
    "Glaucoma Diagnosis & Treatment in Malad, Mumbai in Malad, Kandivali, Borivali, Goregaon, Andheri, Parle, Santacruz | Eye Specialist",
  description:
    "Expert glaucoma management in Malad West, Mumbai. Early diagnosis, laser treatment, and advanced surgery to prevent vision loss and protect optic nerve health. Maa Nursing Home is the trusted choice for the best eye surgeon, ophthalmologist, cataract surgeon, and LASIK surgeon in Malad, Kandivali, Borivali, Goregaon, Andheri, Parle, and Santacruz.",
};

export default function GlaucomaPage() {
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
              <span>Eye Care</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">Glaucoma</span>
            </div>
            
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Glaucoma
            </h1>
            <p className="text-slate-300 text-base max-w-3xl leading-relaxed">
              A progressive disease that damages the optic nerve - usually due to high eye pressure. Early detection prevents vision loss.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT SECTION */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* LEFT COLUMN: Main Content */}
              <div className="lg:col-span-8 space-y-10">
                
                {/* Introduction & What is Glaucoma */}
                <div className="space-y-6">
                  <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                    <img 
                      src="/assets/img/images/Glaucoma.jpg" 
                      alt="Glaucoma" 
                      className="w-full h-auto object-cover max-h-96"
                    />
                  </div>

                  <div className="space-y-4">
                    <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900">What is Glaucoma?</h2>
                    <p className="text-primary-700 font-semibold text-sm sm:text-base border-l-4 border-primary-600 pl-4 py-1">
                      A group of eye conditions that damage the optic nerve, often due to increased eye pressure - a major cause of irreversible blindness.
                    </p>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      The optic nerve acts like a cable containing over a million nerve fibres, transmitting visual information from the eye to the brain. When eye pressure rises or the nerve becomes weak, these fibres get damaged. If untreated, glaucoma can cause permanent vision loss or total blindness.
                    </p>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      With timely diagnosis and proper treatment, further damage can be prevented. Regular eye check-ups after age 40 are crucial.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-heading font-bold text-xl text-slate-900">How Does Glaucoma Affect Vision?</h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    A clear fluid called aqueous humour circulates inside the eye. When drainage channels get blocked, fluid builds up and increases pressure. This pressure damages the optic nerve gradually or suddenly depending on the type of glaucoma.
                  </p>
                </div>

                {/* Causes & Types */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Causes */}
                  <div className="space-y-4 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                    <h3 className="font-heading font-bold text-xl text-slate-900 flex items-center">
                      <Info className="w-5 h-5 text-blue-500 mr-2" />
                      What Causes Glaucoma?
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span>Ageing</span></li>
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span>Diabetes</span></li>
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span>Family history</span></li>
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span>High blood pressure</span></li>
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span>Nearsightedness or farsightedness</span></li>
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span>Long-term use of corticosteroids</span></li>
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span>Eye injuries or inflammation</span></li>
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span>Blocked eye blood vessels</span></li>
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span>After other eye surgeries</span></li>
                    </ul>
                  </div>

                  {/* Types */}
                  <div className="space-y-4">
                    <h3 className="font-heading font-bold text-xl text-slate-900">Types of Glaucoma</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                        <h4 className="font-heading font-bold text-sm text-primary-700">1. Chronic Open-Angle Glaucoma</h4>
                        <p className="text-xs text-slate-600 mt-1">A slow, silent disease with gradual vision loss. Symptoms: dimming vision, mild headache, reduced side vision, coloured halos around lights.</p>
                      </div>
                      <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                        <h4 className="font-heading font-bold text-sm text-primary-700">2. Acute Closed-Angle Glaucoma</h4>
                        <p className="text-xs text-slate-600 mt-1">Sudden blockage causing rapid pressure rise. Symptoms: severe pain, headache, sudden blurred vision, coloured haloes, red eye.</p>
                      </div>
                      <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                        <h4 className="font-heading font-bold text-sm text-primary-700">3. Congenital Glaucoma</h4>
                        <p className="text-xs text-slate-600 mt-1">Occurs in infants due to defective drainage channels. Signs include large, cloudy corneas, excessive watering, and light sensitivity.</p>
                      </div>
                      <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                        <h4 className="font-heading font-bold text-sm text-primary-700">4. Secondary Glaucoma</h4>
                        <p className="text-xs text-slate-600 mt-1">Caused by other eye diseases, injury, steroid use, or diabetes.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Diagnosis & Treatment */}
                <div className="space-y-8 pt-4">
                  <div className="space-y-4">
                    <h3 className="font-heading font-bold text-2xl text-slate-900 flex items-center">
                      <FileSearch className="w-6 h-6 text-primary-700 mr-2" />
                      How is Glaucoma Diagnosed?
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Maa Nursing Home and NetraJyoti Eyecare Centre uses advanced diagnostic tools. Multiple tests may be performed over time:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                        <span className="block font-bold text-slate-900 text-sm">Intraocular Pressure (IOP)</span>
                        <span className="text-xs text-slate-600">Measures eye pressure; values above 21mmHg require evaluation.</span>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                        <span className="block font-bold text-slate-900 text-sm">Gonioscopy</span>
                        <span className="text-xs text-slate-600">Examines the drainage angle.</span>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                        <span className="block font-bold text-slate-900 text-sm">Pachymetry</span>
                        <span className="text-xs text-slate-600">Measures corneal thickness which affects pressure readings.</span>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                        <span className="block font-bold text-slate-900 text-sm">Perimetry / Visual Field</span>
                        <span className="text-xs text-slate-600">Detects early peripheral vision loss.</span>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                        <span className="block font-bold text-slate-900 text-sm">Ophthalmoscopy</span>
                        <span className="text-xs text-slate-600">Assesses optic nerve damage.</span>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                        <span className="block font-bold text-slate-900 text-sm">HRT (Heidelberg Retinal Tomography)</span>
                        <span className="text-xs text-slate-600">Advanced imaging for progression tracking.</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-heading font-bold text-2xl text-slate-900 flex items-center">
                      <ShieldCheck className="w-6 h-6 text-emerald-600 mr-2" />
                      How is Glaucoma Treated?
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Early treatment prevents irreversible damage. Treatment options include:
                    </p>
                    <ul className="space-y-3 text-sm text-slate-700 bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100">
                      <li className="flex items-start"><Zap className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><div><strong>Eye drops:</strong> Long-term or lifelong use to control pressure.</div></li>
                      <li className="flex items-start"><Zap className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><div><strong>LASER Peripheral Iridotomy:</strong> For narrow-angle glaucoma to create a drainage opening.</div></li>
                      <li className="flex items-start"><Zap className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><div><strong>LASER Trabeculoplasty:</strong> Opens blocked passages in open-angle glaucoma.</div></li>
                      <li className="flex items-start"><Zap className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><div><strong>Trabeculectomy (Surgery):</strong> Creates a new drainage pathway when drops or laser are insufficient.</div></li>
                    </ul>
                    <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl mt-4">
                      <p className="text-rose-800 text-sm font-semibold">
                        ⚠️ Glaucoma is known as a “silent blinder.” Regular check-ups after age 40 and timely treatment protect vision.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: Sidebar */}
              <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
                
                {/* Why Choose Us Card */}
                <div className="p-6 bg-slate-900 rounded-2xl shadow-lg border border-slate-800 space-y-4">
                  <h4 className="font-heading font-bold text-xl text-white border-b border-slate-700 pb-2">Why Choose Us?</h4>
                  <ul className="space-y-3 text-sm text-slate-300">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 mt-0.5 shrink-0" />
                      <span>Advanced glaucoma diagnostics</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 mt-0.5 shrink-0" />
                      <span>Expert specialists</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 mt-0.5 shrink-0" />
                      <span>Laser & surgical treatment options</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 mt-0.5 shrink-0" />
                      <span>Long-term monitoring & follow-up</span>
                    </li>
                  </ul>
                </div>

                {/* Quick Facts Card */}
                <div className="p-6 bg-emerald-50 rounded-2xl shadow-sm border border-emerald-100 space-y-4">
                  <h4 className="font-heading font-bold text-xl text-emerald-900 border-b border-emerald-200 pb-2">Quick Facts</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <span className="text-emerald-700 font-semibold text-xs flex items-center"><Activity className="w-3.5 h-3.5 mr-1" /> Early symptoms</span>
                      <span className="text-emerald-900 text-xs font-bold text-right">Often none</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-emerald-700 font-semibold text-xs flex items-center"><Info className="w-3.5 h-3.5 mr-1" /> Risk increases</span>
                      <span className="text-emerald-900 text-xs font-bold text-right">After age 40</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-emerald-700 font-semibold text-xs flex items-center"><ShieldCheck className="w-3.5 h-3.5 mr-1" /> Treatment</span>
                      <span className="text-emerald-900 text-xs font-bold text-right">Long-term control</span>
                    </div>
                  </div>
                </div>

                {/* Ready to Book */}
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-200 text-center space-y-4">
                  <h4 className="font-heading font-bold text-xl text-slate-900">Need a Consultation?</h4>
                  <Link 
                    href="/appointment?service=glaucoma" 
                    className="flex justify-center items-center w-full px-4 py-3 rounded-xl font-heading font-bold text-sm text-white bg-primary-700 hover:bg-primary-900 transition-all"
                  >
                    Book Glaucoma Check-up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APPOINTMENT FORM SECTION */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <AppointmentForm title="Book Your Glaucoma Screening" />
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
