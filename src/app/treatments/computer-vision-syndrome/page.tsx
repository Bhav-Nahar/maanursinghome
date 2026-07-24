import React from "react";
import Link from "next/link";
import { TopBar } from "@/components/ui/TopBar";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { AppointmentForm } from "@/components/ui/AppointmentForm";
import { ChevronRight, Eye, CheckCircle2, ShieldCheck, Clock, Zap, Stethoscope, AlertTriangle, Activity, Info, FileSearch, HeartPulse, AlertCircle, Sparkles } from "lucide-react";

export const metadata = {
  title: "Computer Vision Syndrome Treatment in Malad, Kandivali, Borivali, Goregaon, Andheri, Parle, Santacruz | Maa Nursing Home",
  description:
    "Expert treatment and prevention for computer vision syndrome (digital eye strain) in Malad West, Mumbai. Personalized care for dry eyes and screen-related vision fatigue. Along with top gynaecology care, our center offers the best eye surgeon, ophthalmologist, cataract surgeon, and LASIK surgeon services in Malad, Kandivali, Borivali, Goregaon, Andheri, Parle, and Santacruz.",
};

export default function ComputerVisionSyndromePage() {
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
              <span className="text-white">Computer Vision Syndrome</span>
            </div>
            
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Computer Vision Syndrome
            </h1>
            <p className="text-slate-300 text-base max-w-3xl leading-relaxed">
              A group of eye and vision-related problems caused by prolonged use of digital screens.
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
                      src="/assets/img/images/Computer Vision Syndrome.jpg" 
                      alt="Computer Vision Syndrome Treatment" 
                      className="w-full h-auto object-cover max-h-96"
                    />
                  </div>

                  <div className="space-y-4">
                    <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900">What is Computer Vision Syndrome?</h2>
                    <p className="text-primary-700 font-semibold text-sm sm:text-base border-l-4 border-primary-600 pl-4 py-1">
                      Computer Vision Syndrome (CVS), also known as <strong>Digital Eye Strain</strong>, refers to a collection of eye and musculoskeletal problems resulting from extended use of computers, laptops, mobile phones, tablets and other digital devices.
                    </p>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      With screens becoming an essential part of work and daily life, the eyes are subjected to constant strain. Over time, this strain can lead to chronic and distressing symptoms if not addressed early.
                    </p>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      While symptoms may initially reduce with rest, persistent screen exposure without corrective measures can worsen the condition. Fortunately, CVS can be effectively prevented and managed with simple changes and professional guidance.
                    </p>
                  </div>
                </div>

                {/* Signs & Symptoms */}
                <div className="space-y-4">
                  <h3 className="font-heading font-bold text-2xl text-slate-900">Common Signs & Symptoms</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                    <li className="flex items-start bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2.5 mt-0.5 shrink-0" />
                      <span>Eyestrain and eye fatigue</span>
                    </li>
                    <li className="flex items-start bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2.5 mt-0.5 shrink-0" />
                      <span>Burning sensation, itching or irritation</span>
                    </li>
                    <li className="flex items-start bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2.5 mt-0.5 shrink-0" />
                      <span>Blurred or fluctuating vision</span>
                    </li>
                    <li className="flex items-start bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2.5 mt-0.5 shrink-0" />
                      <span>Double vision</span>
                    </li>
                    <li className="flex items-start bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2.5 mt-0.5 shrink-0" />
                      <span>Dry or red eyes</span>
                    </li>
                    <li className="flex items-start bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2.5 mt-0.5 shrink-0" />
                      <span>Frequent headaches</span>
                    </li>
                    <li className="flex items-start bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2.5 mt-0.5 shrink-0" />
                      <span>Neck, shoulder and back pain</span>
                    </li>
                  </ul>
                </div>

                {/* Causes */}
                <div className="space-y-4">
                  <h3 className="font-heading font-bold text-2xl text-slate-900">What Causes Computer Vision Syndrome?</h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Viewing digital screens is visually more demanding than reading printed text. Letters on digital screens lack sharp contrast and are affected by glare, reflections and poor lighting conditions.
                  </p>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Continuous focusing, improper screen distance, incorrect posture and uncorrected or under-corrected vision problems increase the strain on the eyes. Users wearing improper spectacles or contact lenses are at a higher risk.
                  </p>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Poor ergonomics often lead to muscle strain in the neck, shoulders and back, further worsening the symptoms. The severity of CVS depends on screen time and overall eye health.
                  </p>
                </div>

                {/* Diagnosis */}
                <div className="space-y-4">
                  <h3 className="font-heading font-bold text-2xl text-slate-900">How is CVS Diagnosed?</h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Maa Nursing Home and NetraJyoti Eyecare Centre offer a comprehensive eye examination to detect digital eye strain. The doctor evaluates vision, eye focusing ability, eye coordination and overall eye health.
                  </p>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    A detailed history of screen usage, work habits, posture, medical conditions and medications is taken before confirming the diagnosis and recommending treatment.
                  </p>
                </div>

                {/* Treatment & Prevention */}
                <div className="space-y-4">
                  <h3 className="font-heading font-bold text-2xl text-slate-900">Treatment & Prevention</h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    The primary treatment involves modifying screen-viewing habits. The most effective method is the <strong>20–20–20 rule</strong>:
                  </p>
                  <ul className="space-y-2 bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100 text-emerald-950 text-sm font-medium">
                    <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2" /> Every 20 minutes, look away from the screen</li>
                    <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2" /> Focus on an object 20 feet away</li>
                    <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2" /> For at least 20 seconds</li>
                  </ul>

                  <h4 className="font-heading font-bold text-lg text-slate-900 pt-4">Additional Measures</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-700">
                    <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5" /><span>Use anti-glare or computer-specific eyeglasses</span></li>
                    <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5" /><span>Special lens coatings or blue-light filters</span></li>
                    <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5" /><span>Vision Therapy for focusing and coordination issues</span></li>
                    <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5" /><span>Maintain proper screen height, distance and posture</span></li>
                    <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5" /><span>Control room lighting and screen glare</span></li>
                    <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5" /><span>Keep screens clean and dust-free</span></li>
                    <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5" /><span>Take frequent breaks from prolonged screen use</span></li>
                    <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5" /><span>Regular eye check-ups</span></li>
                  </ul>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-2">
                    Early diagnosis and lifestyle correction can significantly reduce symptoms and prevent long-term eye discomfort.
                  </p>
                </div>

              </div>

              {/* RIGHT COLUMN: Sidebar */}
              <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
                
                {/* Who Is at Risk? Card */}
                <div className="p-6 bg-slate-900 rounded-2xl shadow-lg border border-slate-800 space-y-4">
                  <h4 className="font-heading font-bold text-xl text-white border-b border-slate-700 pb-2">Who Is at Risk?</h4>
                  <ul className="space-y-3 text-sm text-slate-300">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 mt-0.5 shrink-0" />
                      <span>Office professionals</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 mt-0.5 shrink-0" />
                      <span>Students & gamers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 mt-0.5 shrink-0" />
                      <span>Long screen-time users</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 mt-0.5 shrink-0" />
                      <span>Improper spectacle users</span>
                    </li>
                  </ul>
                </div>

                {/* Ready to Book */}
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-200 text-center space-y-4">
                  <h4 className="font-heading font-bold text-xl text-slate-900">Protect Your Eyes</h4>
                  <Link 
                    href="/appointment?service=computer-vision-syndrome" 
                    className="flex justify-center items-center w-full px-4 py-3 rounded-xl font-heading font-bold text-sm text-white bg-primary-700 hover:bg-primary-900 transition-all"
                  >
                    Book Eye Examination
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APPOINTMENT FORM SECTION */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <AppointmentForm title="Book Your Eye Strain Evaluation" />
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
