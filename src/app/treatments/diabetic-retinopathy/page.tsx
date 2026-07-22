import React from "react";
import Link from "next/link";
import { TopBar } from "@/components/ui/TopBar";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { AppointmentForm } from "@/components/ui/AppointmentForm";
import { ChevronRight, Eye, CheckCircle2, ShieldCheck, Clock, Zap, Stethoscope, AlertTriangle, Activity, Info, FileSearch, HeartPulse, AlertCircle } from "lucide-react";

export const metadata = {
  title: "Diabetic Retinopathy Treatment in Malad, Mumbai",
  description:
    "Expert diabetic retinopathy screening and treatment in Malad West, Mumbai. Laser therapy and vitrectomy surgery for retinal health by experienced surgeons.",
};

export default function DiabeticRetinopathyPage() {
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
              <span className="text-white">Diabetic Retinopathy</span>
            </div>
            
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Diabetic Retinopathy
            </h1>
            <p className="text-slate-300 text-base max-w-3xl leading-relaxed">
              Comprehensive retinal screening, laser therapy and injection-based treatments for diabetic retinopathy — preserving vision through timely, evidence-based care.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT SECTION */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* LEFT COLUMN: Main Content */}
              <div className="lg:col-span-8 space-y-10">
                
                {/* Introduction */}
                <div className="space-y-6">
                  <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                    <img 
                      src="/assets/img/images/Diabetic Retinopathy.jpg" 
                      alt="Diabetic Retinopathy Treatment" 
                      className="w-full h-auto object-cover max-h-96"
                    />
                  </div>

                  <div className="space-y-4">
                    <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900">What is Diabetic Retinopathy?</h2>
                    <p className="text-primary-700 font-semibold text-sm sm:text-base border-l-4 border-primary-600 pl-4 py-1">
                      A diabetes-related retinal disease caused by damage to retinal blood vessels — a leading cause of preventable blindness.
                    </p>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      Diabetic Retinopathy is an eye condition that develops due to prolonged high blood sugar levels in diabetic patients. Elevated glucose damages the tiny blood vessels of the retina — the light-sensitive layer at the back of the eye that sends visual signals to the brain through the optic nerve. Since the retina is affected, the condition is called <strong>Diabetic Retinopathy</strong>.
                    </p>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      In early stages, vision may remain normal. However, if left untreated, progressive vessel damage can lead to severe visual loss or permanent blindness. Maa Nursing Home and NetraJyoti Eyecare Centre provide advanced diagnostic and treatment facilities for diabetic retinal diseases.
                    </p>
                  </div>

                  <div className="p-5 bg-cyan-50/50 border-l-4 border-cyan-600 rounded-r-xl">
                    <p className="text-cyan-900 text-sm font-medium flex items-start">
                      <Info className="w-5 h-5 text-cyan-700 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Want to know more about how diabetes affects your eyes?</strong> Read our comprehensive guide:{" "}
                        <Link href="/blogs/blog4" className="text-cyan-700 hover:text-cyan-800 underline font-bold transition-colors">
                          Understanding Diabetic Retinopathy
                        </Link>
                      </span>
                    </p>
                  </div>
                </div>

                {/* Stages & Maculopathy */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Stages */}
                  <div className="space-y-4 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                    <h3 className="font-heading font-bold text-xl text-slate-900 flex items-center">
                      <AlertTriangle className="w-5 h-5 text-amber-500 mr-2" />
                      Stages of Diabetic Retinopathy
                    </h3>
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <h4 className="font-heading font-bold text-sm text-slate-900">Non-Proliferative Diabetic Retinopathy (NPDR)</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">Early stage where retinal blood vessels leak fluid, fats, or proteins. Vessels may weaken, swell, or get blocked.</p>
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-heading font-bold text-sm text-slate-900">Proliferative Diabetic Retinopathy (PDR)</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">Advanced stage where abnormal new blood vessels grow on the retinal surface due to poor blood supply. These vessels are fragile and prone to bleeding.</p>
                      </div>
                    </div>
                  </div>

                  {/* Complications & Maculopathy */}
                  <div className="space-y-4">
                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                      <h3 className="font-heading font-bold text-xl text-slate-900">Complications of PDR</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Complications of PDR include vitreous haemorrhage, tractional retinal detachment and neovascular glaucoma — all of which can cause severe or complete vision loss.
                      </p>
                    </div>
                    
                    <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                      <h3 className="font-heading font-bold text-xl text-slate-900 flex items-center">
                        <Eye className="w-5 h-5 text-primary-700 mr-2" />
                        Diabetic Maculopathy
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Some patients develop Diabetic Maculopathy, where fluid rich in fats and cholesterol leaks near the macula (the central part of the retina responsible for sharp vision), leading to distortion and loss of central vision.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Symptoms, Diagnosis & Treatment Details */}
                <div className="space-y-8 pt-4 border-t border-slate-200">
                  
                  {/* Symptoms */}
                  <div className="space-y-4">
                    <h3 className="font-heading font-bold text-2xl text-slate-900">Symptoms of Diabetic Retinopathy</h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                      In the early stages, diabetic retinopathy often has <strong className="text-slate-900">no symptoms</strong>. This is why regular eye examinations are critical for diabetic patients. Once visual symptoms appear, retinal damage may already be advanced.
                    </p>
                  </div>

                  {/* Eye Complications */}
                  <div className="space-y-4">
                    <h3 className="font-heading font-bold text-xl text-slate-900">Eye Complications Due to Diabetic Retinopathy</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                      <li className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <strong className="block text-slate-900 mb-1">Diabetic Macular Oedema (DME)</strong>
                        <span className="text-xs text-slate-600">Blurred or distorted vision due to fluid leakage.</span>
                      </li>
                      <li className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <strong className="block text-slate-900 mb-1">Neovascular Glaucoma</strong>
                        <span className="text-xs text-slate-600">New vessels block fluid drainage, increasing eye pressure.</span>
                      </li>
                      <li className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <strong className="block text-slate-900 mb-1">Retinal Detachment</strong>
                        <span className="text-xs text-slate-600">Retina pulls away from the back of the eye.</span>
                      </li>
                      <li className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <strong className="block text-slate-900 mb-1">Cataract</strong>
                        <span className="text-xs text-slate-600">Diabetics develop cataracts earlier than non-diabetics.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Diagnosis */}
                  <div className="space-y-4">
                    <h3 className="font-heading font-bold text-2xl text-slate-900 flex items-center">
                      <FileSearch className="w-6 h-6 text-primary-700 mr-2" />
                      Diagnosis
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Diabetic Retinopathy is diagnosed through a <strong>dilated retinal examination</strong>. Advanced imaging and retinal evaluation facilities are available at Maa Nursing Home and NetraJyoti Eyecare Centre. Patients with retinopathy are advised eye check-ups every <strong>2–4 months</strong>.
                    </p>
                  </div>

                  {/* Treatment */}
                  <div className="space-y-4">
                    <h3 className="font-heading font-bold text-2xl text-slate-900 flex items-center">
                      <ShieldCheck className="w-6 h-6 text-emerald-600 mr-2" />
                      Treatment Options
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Strict control of blood sugar, blood pressure and cholesterol is essential to slow disease progression. However, retinopathy may still progress despite good control.
                    </p>
                    <div className="space-y-3 mt-4">
                      <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start">
                        <Zap className="w-5 h-5 text-amber-500 mr-3 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-heading font-bold text-sm text-slate-900">LASER Photocoagulation</h4>
                          <p className="text-xs text-slate-600 leading-relaxed mt-1">A safe, painless day-care procedure where laser seals leaking vessels and destroys abnormal new vessels, preventing complications like bleeding and retinal detachment.</p>
                        </div>
                      </div>
                      <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start">
                        <Activity className="w-5 h-5 text-primary-700 mr-3 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-heading font-bold text-sm text-slate-900">Vitrectomy Surgery</h4>
                          <p className="text-xs text-slate-600 leading-relaxed mt-1">Recommended in advanced cases with vitreous bleeding or retinal scarring. The blood-filled vitreous is removed and replaced with a clear solution.</p>
                        </div>
                      </div>
                      <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start">
                        <HeartPulse className="w-5 h-5 text-rose-500 mr-3 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-heading font-bold text-sm text-slate-900">Intravitreal Injections</h4>
                          <p className="text-xs text-slate-600 leading-relaxed mt-1">Used in diabetic maculopathy to reduce swelling and improve central vision.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recovery */}
                  <div className="space-y-4">
                    <h3 className="font-heading font-bold text-xl text-slate-900">Recovery After Vitrectomy</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Recovery typically takes <strong>2–4 weeks</strong>. Temporary symptoms may include redness, mild pain, swelling and blurred vision.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-700 bg-slate-50 p-5 rounded-2xl border border-slate-200">
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span>Wear an eye patch for the first day.</span></li>
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span>Use prescribed eye drops regularly.</span></li>
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span>Avoid heavy lifting, driving and strenuous activity.</span></li>
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span>Follow positioning instructions if gas or air bubble is used.</span></li>
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span>Silicone oil (if used) is removed later through a second procedure.</span></li>
                    </ul>
                    <p className="text-slate-600 text-sm font-medium mt-4 italic">
                      While diabetic retinopathy cannot always be prevented, timely diagnosis, proper treatment and regular eye check-ups can prevent permanent vision loss.
                    </p>
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: Sidebar */}
              <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
                
                {/* Why Early Detection Matters Card */}
                <div className="p-6 bg-slate-900 rounded-2xl shadow-lg border border-slate-800 space-y-4">
                  <h4 className="font-heading font-bold text-xl text-white border-b border-slate-700 pb-2">Why Early Detection Matters</h4>
                  <ul className="space-y-3 text-sm text-slate-300">
                    <li className="flex items-start">
                      <AlertCircle className="w-4 h-4 text-emerald-400 mr-2 mt-0.5 shrink-0" />
                      <span>Early stages have no symptoms</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-4 h-4 text-emerald-400 mr-2 mt-0.5 shrink-0" />
                      <span>Vision loss is often irreversible</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-4 h-4 text-emerald-400 mr-2 mt-0.5 shrink-0" />
                      <span>Regular screening prevents blindness</span>
                    </li>
                  </ul>
                </div>

                {/* Ready to Book */}
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-200 text-center space-y-4">
                  <h4 className="font-heading font-bold text-xl text-slate-900">Book Retina Evaluation</h4>
                  <p className="text-xs text-slate-600">Don't wait for symptoms. Schedule your diabetic eye screening today.</p>
                  <Link 
                    href="/appointment?service=diabetic-retinopathy" 
                    className="flex justify-center items-center w-full px-4 py-3 rounded-xl font-heading font-bold text-sm text-white bg-primary-700 hover:bg-primary-900 transition-all"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APPOINTMENT FORM SECTION */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <AppointmentForm title="Book Your Retina Evaluation" />
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
