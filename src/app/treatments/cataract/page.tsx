import React from "react";
import Link from "next/link";
import { TopBar } from "@/components/ui/TopBar";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { AppointmentForm } from "@/components/ui/AppointmentForm";
import { Eye, ChevronRight, Info, CheckCircle2, AlertCircle, Sparkles, Activity, ShieldCheck, Clock, Settings, HeartPulse } from "lucide-react";

export const metadata = {
  title:
    "Best Cataract Surgeon in Malad, Kandivali, Borivali, Goregaon, Andheri, Parle, Santacruz | Maa Nursing Home",
  description:
    "Looking for the best cataract surgeon in Malad West? Dr. Jugal Shah at Maa Nursing Home offers stitchless phacoemulsification and premium intraocular lenses. Maa Nursing Home is the trusted choice for the best eye surgeon, ophthalmologist, cataract surgeon, and LASIK surgeon in Malad, Kandivali, Borivali, Goregaon, Andheri, Parle, and Santacruz.",
};

export default function CataractPage() {
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
              <span className="text-white">Cataract</span>
            </div>
            
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Cataract Care
            </h1>
            <p className="text-slate-300 text-base max-w-3xl leading-relaxed">
              Cataract diagnosis, modern laser phacoemulsification surgery and intraocular lens (IOL) options — evidence-based care with fast recovery and compassionate support.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT SECTION */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* LEFT COLUMN: Main Content */}
              <div className="lg:col-span-8 space-y-10">
                
                {/* Introduction & What is Cataract */}
                <div className="space-y-6">
                  <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                    <img 
                      src="/assets/img/images/carastact.png" 
                      alt="Cataract Surgery" 
                      className="w-full h-auto object-cover max-h-96"
                    />
                  </div>

                  <div className="space-y-4">
                    <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900">What is a Cataract?</h2>
                    <p className="text-primary-700 font-semibold text-sm sm:text-base border-l-4 border-primary-600 pl-4 py-1">
                      Clouding of the eye’s natural lens that progressively blurs vision — common with ageing but can affect younger people too.
                    </p>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      The lens inside the eye focuses light on the retina to produce clear images. Over years (or sometimes rapidly), insoluble proteins can cloud the lens and cause hazy vision — this condition is called a cataract. No diet, medicine or exercise prevents cataracts; regular eye checks ensure early detection and timely treatment.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Signs & Symptoms */}
                  <div className="space-y-4 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                    <h3 className="font-heading font-bold text-xl text-slate-900 flex items-center">
                      <AlertCircle className="w-5 h-5 text-rose-500 mr-2" />
                      Signs & Symptoms
                    </h3>
                    <ul className="space-y-3 text-sm text-slate-700">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" />
                        <span>An increasing glare in sunlight or at night (difficult driving).</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" />
                        <span>Hazy or blurred vision and difficulty reading small print.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" />
                        <span>Double vision or image distortion in one eye.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" />
                        <span>Perception of unequal brightness between eyes.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" />
                        <span>Frequent changes in spectacle prescription.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" />
                        <span>Poor depth perception (difficulty with stairs).</span>
                      </li>
                    </ul>
                  </div>

                  {/* Common Causes */}
                  <div className="space-y-4 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                    <h3 className="font-heading font-bold text-xl text-slate-900 flex items-center">
                      <Info className="w-5 h-5 text-blue-500 mr-2" />
                      Common Causes
                    </h3>
                    <ul className="space-y-3 text-sm text-slate-700">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" />
                        <span>Ageing (most common).</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" />
                        <span>Eye injury or trauma.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" />
                        <span>Metabolic illnesses like diabetes.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" />
                        <span>Infection or chronic inflammation of the eye.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" />
                        <span>Prolonged steroid medication.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" />
                        <span>Congenital cataract or strong family history.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" />
                        <span>Secondary to glaucoma or chronic inflammation.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Treatment Overview & Surgery Details */}
                <div className="space-y-6">
                  <h3 className="font-heading font-bold text-2xl text-slate-900">Treatment & Surgery Options</h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Surgery is the only effective treatment. Modern phacoemulsification (laser-assisted when chosen) allows removal at any stage — earlier intervention when the cataract is soft yields easier surgery and faster recovery.
                  </p>

                  <div className="space-y-4">
                    <h4 className="font-heading font-bold text-lg text-slate-900 text-primary-700">How is Cataract Surgery Performed? (Laser Phacoemulsification)</h4>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      At Maa Nursing Home and NetraJyoti Eyecare Centre we offer advanced micro-incision phacoemulsification. The cloudy lens is broken into tiny pieces using ultrasonic energy and aspirated through a 1.5–3 mm incision (often stitchless). The natural lens is replaced with a clear synthetic intraocular lens (IOL). The procedure is a day-care surgery (often 5 minutes) under topical anaesthesia (eye drops) with quick recovery.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-heading font-bold text-lg text-slate-900 text-primary-700">Femto LASER-Assisted Cataract Surgery (FLACS)</h4>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      FLACS is a bladeless, automated step that increases precision — patients often experience faster recovery and excellent visual results. Both standard phaco and FLACS are available depending on clinical need and patient preference.
                    </p>
                  </div>
                </div>

                {/* IOL Types Grid */}
                <div className="space-y-6">
                  <h3 className="font-heading font-bold text-2xl text-slate-900">Intraocular Lenses (IOL) — Types</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                        <Eye className="w-5 h-5" />
                      </div>
                      <h4 className="font-heading font-bold text-slate-900 text-base mb-2">Toric Lens</h4>
                      <p className="text-slate-600 text-xs leading-relaxed">Designed to correct corneal astigmatism so many patients avoid glasses for distance vision.</p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                        <Activity className="w-5 h-5" />
                      </div>
                      <h4 className="font-heading font-bold text-slate-900 text-base mb-2">Multifocal Lenses</h4>
                      <p className="text-slate-600 text-xs leading-relaxed">Available as bi-focal and tri-focal IOLs to reduce dependence on spectacles for distance and near tasks.</p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mb-3">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <h4 className="font-heading font-bold text-slate-900 text-base mb-2">EDOF Lens</h4>
                      <p className="text-slate-600 text-xs leading-relaxed">Extended Depth of Focus: Creates an elongated focal range to improve intermediate vision with fewer visual disturbances.</p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
                    <h4 className="font-heading font-bold text-amber-900 text-sm mb-1">Do You Need Spectacles After Surgery?</h4>
                    <p className="text-amber-800 text-xs leading-relaxed">
                      Many patients still require reading glasses for near tasks. With premium IOLs (multifocal, toric or EDOF), spectacle dependence can be greatly reduced. Most patients resume routine work within 2–3 days.
                    </p>
                  </div>
                </div>

                {/* Post-Op & Advantages */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="font-heading font-bold text-xl text-slate-900 flex items-center">
                      <ShieldCheck className="w-5 h-5 text-emerald-600 mr-2" />
                      Post-Operative Care
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span>Use prescribed eye drops exactly as instructed.</span></li>
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span>Wear sunglasses outdoors to protect from sunlight.</span></li>
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span>Maintain eye hygiene; do not rub or scratch the eye.</span></li>
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span>Avoid water, dust and pollution entering the eye for ~1 month.</span></li>
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span>Attend scheduled follow-ups for vision checks.</span></li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-heading font-bold text-xl text-slate-900 flex items-center">
                      <Sparkles className="w-5 h-5 text-accent-600 mr-2" />
                      Advantages of Phaco
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span>Stitchless, micro-incision operation (minimal cut).</span></li>
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span>Faster healing and early return to work.</span></li>
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span>Less ocular trauma and reduced infection risk.</span></li>
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span>Topical anaesthesia (drops) — safe for most patients.</span></li>
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span>Better night and low-light vision with good quality IOLs.</span></li>
                    </ul>
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
                      <span>Advanced Phaco & Femto LASER options</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 mt-0.5 shrink-0" />
                      <span>Experienced surgeons with excellent safety record</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 mt-0.5 shrink-0" />
                      <span>NABH & ISO accredited facility</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 mt-0.5 shrink-0" />
                      <span>Government-approved Keratoplasty centre</span>
                    </li>
                  </ul>
                </div>

                {/* Quick Facts Card */}
                <div className="p-6 bg-emerald-50 rounded-2xl shadow-sm border border-emerald-100 space-y-4">
                  <h4 className="font-heading font-bold text-xl text-emerald-900 border-b border-emerald-200 pb-2">Quick Facts</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <span className="text-emerald-700 font-semibold text-xs flex items-center"><Clock className="w-3.5 h-3.5 mr-1" /> Procedure time</span>
                      <span className="text-emerald-900 text-xs font-bold text-right">~20 minutes (day-care)</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-emerald-700 font-semibold text-xs flex items-center"><Activity className="w-3.5 h-3.5 mr-1" /> Typical recovery</span>
                      <span className="text-emerald-900 text-xs font-bold text-right">2–7 days for routine activity</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-emerald-700 font-semibold text-xs flex items-center"><ShieldCheck className="w-3.5 h-3.5 mr-1" /> Insurance</span>
                      <span className="text-emerald-900 text-xs font-bold text-right w-32">Most policies cover surgery (cashless available)</span>
                    </div>
                  </div>
                </div>

                {/* Ready to Book */}
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-200 text-center space-y-4">
                  <h4 className="font-heading font-bold text-xl text-slate-900">Ready to Book?</h4>
                  <Link 
                    href="/appointment?service=cataract" 
                    className="flex justify-center items-center w-full px-4 py-3 rounded-xl font-heading font-bold text-sm text-white bg-primary-700 hover:bg-primary-900 transition-all"
                  >
                    Book Cataract Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURE CARDS SECTION */}
        <section className="py-12 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-700">
                  <Eye className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-slate-900">Comprehensive Evaluation</h4>
                <p className="text-slate-600 text-xs leading-relaxed">Full pre-operative workup including OCT, lens calculations and IOL counselling.</p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 bg-accent-50 rounded-full flex items-center justify-center text-accent-600">
                  <Settings className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-slate-900">State-of-the-art Equipment</h4>
                <p className="text-slate-600 text-xs leading-relaxed">High-quality phaco machines and femtosecond laser for precise surgeries.</p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-slate-900">Post-op Support</h4>
                <p className="text-slate-600 text-xs leading-relaxed">Dedicated follow-up, vision rehabilitation and counselling for glare/contrast issues if needed.</p>
              </div>
            </div>
          </div>
        </section>

        {/* APPOINTMENT FORM SECTION */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <AppointmentForm title="Book Your Cataract Screening" />
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
