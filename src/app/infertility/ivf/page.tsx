import React from "react";
import Link from "next/link";
import { TopBar } from "@/components/ui/TopBar";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { AppointmentForm } from "@/components/ui/AppointmentForm";
import { ChevronRight, CheckCircle2, HeartPulse, ShieldCheck, Clock, Activity, Baby, Microscope, Sparkles, CircleDot } from "lucide-react";

export const metadata = {
  title: "Best IVF Centre in Malad, Kandivali, Borivali, Goregaon, Andheri, Parle, Santacruz | Maa Nursing Home",
  description:
    "Maa Nursing Home is recognized as the best IVF centre in Malad West, Mumbai. Under Dr. Jyoti Shah, we offer high-success, ethical, and affordable IVF treatments. Along with top gynaecology care, our center offers the best eye surgeon, ophthalmologist, cataract surgeon, and LASIK surgeon services in Malad, Kandivali, Borivali, Goregaon, Andheri, Parle, and Santacruz.",
};

export default function IVFPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-body">
      <TopBar />
      <Header />

      <main className="flex-1">
        {/* PAGE TITLE */}
        <section className="bg-slate-900 text-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <div className="flex items-center space-x-2 text-xs font-semibold text-rose-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span>Infertility Clinic</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">IVF Treatment</span>
            </div>
            
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              In-Vitro Fertilization (IVF)
            </h1>
            <p className="text-slate-300 text-base max-w-3xl leading-relaxed">
              Advanced, ethical and affordable fertility treatments to help couples achieve their dream of parenthood.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT SECTION */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* LEFT COLUMN: Main Content */}
              <div className="lg:col-span-8 space-y-10">
                
                {/* Introduction & What is IVF */}
                <div className="space-y-6">
                  <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                    <img 
                      src="/assets/img/images/IVF.jpg" 
                      alt="IVF Treatment" 
                      className="w-full h-auto object-cover max-h-96"
                    />
                  </div>

                  <div className="space-y-4">
                    <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900">What is IVF?</h2>
                    <p className="text-rose-700 font-semibold text-sm sm:text-base border-l-4 border-rose-600 pl-4 py-1">
                      A scientifically proven fertility treatment where fertilization takes place outside the body.
                    </p>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      IVF (In-Vitro Fertilization), commonly known as the “test-tube baby” technique, is one of the most successful and widely used infertility treatments. In this procedure, eggs and sperms are combined in a controlled laboratory environment. The resulting embryos are then transferred into the woman’s uterus to achieve pregnancy.
                    </p>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      Maa Nursing Home and NetraJyoti Eyecare Centre offers advanced IVF technology, strict quality protocols and experienced specialists to maximise success rates.
                    </p>
                  </div>
                </div>

                {/* When is it Recommended? */}
                <div className="space-y-4 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-heading font-bold text-xl text-slate-900 flex items-center">
                    <ShieldCheck className="w-5 h-5 text-primary-600 mr-2" />
                    When is IVF Recommended?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-sm text-slate-700">
                    <div className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span>Blocked, damaged or absent fallopian tubes</span></div>
                    <div className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span>Endometriosis</span></div>
                    <div className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span>Unexplained infertility</span></div>
                    <div className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span>Failed IUI cycles</span></div>
                    <div className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span>Male factor infertility (low count/motility)</span></div>
                    <div className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span>Age-related infertility</span></div>
                    <div className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span>Low ovarian reserve</span></div>
                    <div className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span>Premature menopause</span></div>
                    <div className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span>Pre-implantation genetic testing needs</span></div>
                  </div>
                </div>

                {/* Steps in the IVF Process */}
                <div className="space-y-6 pt-4">
                  <h3 className="font-heading font-bold text-2xl text-slate-900 flex items-center">
                    <Activity className="w-6 h-6 text-rose-600 mr-2" />
                    Steps in the IVF Process
                  </h3>

                  <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                    
                    {/* Step 1 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-rose-100 text-rose-600 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10">
                        1
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                        <h4 className="font-heading font-bold text-slate-900 mb-1">Counselling & Consultation</h4>
                        <p className="text-xs text-slate-600">The fertility specialist discusses medical history, identifies the cause, and explains the process.</p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-rose-100 text-rose-600 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10">
                        2
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                        <h4 className="font-heading font-bold text-slate-900 mb-1">Investigations</h4>
                        <div className="text-xs text-slate-600 space-y-1">
                          <p><strong>Men:</strong> Semen analysis, culture, function test, blood tests.</p>
                          <p><strong>Women:</strong> USG, HSG (tube testing), Hormonal profile, blood tests.</p>
                        </div>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-rose-100 text-rose-600 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10">
                        3
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                        <h4 className="font-heading font-bold text-slate-900 mb-1">Ovarian Stimulation</h4>
                        <p className="text-xs text-slate-600">Fertility injections stimulate ovaries to produce multiple eggs. Monitored via ultrasound & blood tests.</p>
                      </div>
                    </div>

                    {/* Step 4 & 5 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-rose-100 text-rose-600 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10">
                        4/5
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                        <h4 className="font-heading font-bold text-slate-900 mb-1">Egg & Sperm Collection</h4>
                        <p className="text-xs text-slate-600">Eggs are collected under short anaesthesia. Male partner provides a semen sample; best sperms are selected.</p>
                      </div>
                    </div>

                    {/* Step 6 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-rose-100 text-rose-600 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10">
                        <Microscope className="w-5 h-5" />
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 bg-white shadow-sm border-l-4 border-l-rose-400">
                        <h4 className="font-heading font-bold text-slate-900 mb-1">Embryo Culture (Lab)</h4>
                        <p className="text-xs text-slate-600">Eggs and sperms are combined. If sperm quality is low, <strong>ICSI</strong> (Intracytoplasmic Sperm Injection) is done directly into the egg.</p>
                      </div>
                    </div>

                    {/* Step 7 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-emerald-100 text-emerald-600 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 bg-white shadow-sm border-l-4 border-l-emerald-400">
                        <h4 className="font-heading font-bold text-slate-900 mb-1">Embryo Transfer</h4>
                        <p className="text-xs text-slate-600">After 2–5 days of growth, healthy embryos are placed into the uterus. Extra embryos can be frozen. Pregnancy is confirmed after 14 days.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="pt-6">
                  <h3 className="font-heading font-bold text-xl text-slate-900 mb-4">Why Choose Maa Nursing Home?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                    <div className="flex items-center p-3 bg-white border border-slate-200 rounded-xl shadow-sm"><CircleDot className="w-4 h-4 text-rose-500 mr-3" /> Affordable IVF packages</div>
                    <div className="flex items-center p-3 bg-white border border-slate-200 rounded-xl shadow-sm"><CircleDot className="w-4 h-4 text-rose-500 mr-3" /> Experienced specialists</div>
                    <div className="flex items-center p-3 bg-white border border-slate-200 rounded-xl shadow-sm"><CircleDot className="w-4 h-4 text-rose-500 mr-3" /> Advanced laboratory (strict QC)</div>
                    <div className="flex items-center p-3 bg-white border border-slate-200 rounded-xl shadow-sm"><CircleDot className="w-4 h-4 text-rose-500 mr-3" /> Transparent & ethical care</div>
                    <div className="flex items-center p-3 bg-white border border-slate-200 rounded-xl shadow-sm sm:col-span-2"><CircleDot className="w-4 h-4 text-rose-500 mr-3" /> High success rates & personalised treatment plans</div>
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: Sidebar */}
              <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
                
                {/* Quick Facts Card */}
                <div className="p-6 bg-rose-50 rounded-2xl shadow-sm border border-rose-100 space-y-4">
                  <h4 className="font-heading font-bold text-xl text-rose-900 border-b border-rose-200 pb-2">IVF Quick Facts</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <span className="text-rose-700 font-semibold text-xs flex items-center"><Microscope className="w-3.5 h-3.5 mr-1" /> Treatment Type</span>
                      <span className="text-rose-900 text-xs font-bold text-right">Fertilization Outside Body</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-rose-700 font-semibold text-xs flex items-center"><Clock className="w-3.5 h-3.5 mr-1" /> Duration</span>
                      <span className="text-rose-900 text-xs font-bold text-right">4–6 weeks</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-rose-700 font-semibold text-xs flex items-center"><Activity className="w-3.5 h-3.5 mr-1" /> Success Rate</span>
                      <span className="text-rose-900 text-xs font-bold text-right">Depends on age & egg quality</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-rose-700 font-semibold text-xs flex items-center"><ShieldCheck className="w-3.5 h-3.5 mr-1" /> Hospital Stay</span>
                      <span className="text-rose-900 text-xs font-bold text-right">Day-care procedure</span>
                    </div>
                  </div>
                </div>

                {/* Ready to Book */}
                <div className="p-6 bg-slate-900 rounded-2xl shadow-lg border border-slate-800 text-center space-y-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2 text-rose-400">
                    <Baby className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-white">Book an Infertility Consultation</h4>
                  <p className="text-xs text-slate-300">Take the first step towards parenthood with our expert specialists.</p>
                  <Link 
                    href="/appointment?service=ivf" 
                    className="flex justify-center items-center w-full px-4 py-3 rounded-xl font-heading font-bold text-sm text-slate-900 bg-rose-400 hover:bg-rose-300 transition-all mt-4"
                  >
                    Schedule Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APPOINTMENT FORM SECTION */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <AppointmentForm title="Start Your IVF Journey Today" />
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
