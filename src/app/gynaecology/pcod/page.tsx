import React from "react";
import Link from "next/link";
import { TopBar } from "@/components/ui/TopBar";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { AppointmentForm } from "@/components/ui/AppointmentForm";
import { ChevronRight, Info, CheckCircle2, HeartPulse, Activity, ShieldCheck, Clock, ListChecks, Stethoscope, Baby } from "lucide-react";

export const metadata = {
  title:
    "PCOD & PCOS Treatment in Malad, Mumbai in Malad, Kandivali, Borivali, Goregaon, Andheri, Parle, Santacruz | Maa Nursing Home",
  description:
    "Manage PCOD and PCOS with expert gynaecological care in Malad West, Mumbai. Personalized treatment plans including lifestyle changes and fertility support. Along with top gynaecology care, our center offers the best eye surgeon, ophthalmologist, cataract surgeon, and LASIK surgeon services in Malad, Kandivali, Borivali, Goregaon, Andheri, Parle, and Santacruz.",
};

export default function PCODPage() {
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
              <span>Gynaec Care</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">PCOD / PCOS</span>
            </div>
            
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Polycystic Ovarian Disease (PCOD / PCOS)
            </h1>
            <p className="text-slate-300 text-base max-w-3xl leading-relaxed">
              A common hormonal disorder in young women that affects ovulation, menstrual cycles, fertility and long-term health - manageable with timely diagnosis, lifestyle changes and medical care.
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
                      src="/assets/img/images/pcod.jpeg" 
                      alt="Polycystic Ovarian Disease" 
                      className="w-full h-auto object-cover max-h-96"
                    />
                  </div>

                  <div className="space-y-4">
                    <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900">What is PCOD / PCOS?</h2>
                    <p className="text-rose-700 font-semibold text-sm sm:text-base border-l-4 border-rose-600 pl-4 py-1">
                      A hormonal imbalance where ovaries become enlarged and develop multiple small cysts, often causing irregular periods and difficulty conceiving.
                    </p>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      Girls usually begin to menstruate around the age of 12. During this time, the body releases hormones such as oestrogen and progesterone in a balanced manner. In some girls and women, this balance is disturbed and male-type hormones (androgens) increase, leading to <strong>irregular periods</strong> and the formation of multiple cysts in the ovaries. This condition is known as <strong>Polycystic Ovarian Disease (PCOD)</strong> or <strong>Polycystic Ovarian Syndrome (PCOS)</strong>.
                    </p>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      In PCOD, the ovaries are enlarged and contain many small fluid-filled sacs (cysts). These cysts contain immature eggs that do not get released on time. When eggs are not released regularly (anovulation), it becomes difficult to conceive naturally. PCOS is one of the most common causes of <strong>female infertility</strong>.
                    </p>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      Women with PCOS also have an increased risk of complications in pregnancy such as high blood pressure, gestational diabetes and miscarriage. PCOS commonly affects women between <strong>15 and 44 years</strong> of age, and many are unaware of the condition until they see a fertility specialist.
                    </p>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      The exact cause of PCOS is not fully known, but <strong>genetics</strong>, <strong>insulin resistance</strong> and <strong>chronic low-grade inflammation</strong> are thought to play a role. Treatment usually combines lifestyle changes (diet, exercise, weight loss) with hormone therapy and fertility-focused treatments when needed.
                    </p>
                  </div>

                  <div className="p-5 bg-rose-50/50 border-l-4 border-rose-600 rounded-r-xl">
                    <p className="text-rose-900 text-sm font-medium flex items-start">
                      <Info className="w-5 h-5 text-rose-700 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Confused about the differences?</strong> Read our complete comparison guide:{" "}
                        <Link href="/blogs/blog2" className="text-rose-700 hover:text-rose-800 underline font-bold transition-colors">
                          PCOS vs PCOD: What's the Difference?
                        </Link>
                      </span>
                    </p>
                  </div>
                </div>

                {/* Diagnosis & Causes Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Diagnosis */}
                  <div className="space-y-4 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                    <h3 className="font-heading font-bold text-xl text-slate-900 flex items-center">
                      <Stethoscope className="w-5 h-5 text-blue-600 mr-2" />
                      How is PCOD Diagnosed?
                    </h3>
                    <p className="text-xs text-slate-600">Diagnosis is based on symptoms, examination, ultrasound and blood tests. Your doctor may:</p>
                    <ul className="space-y-3 text-sm text-slate-700">
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span>Discuss your <strong>menstrual history</strong> for irregular periods.</span></li>
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span>Look for signs of <strong>hirsutism</strong> (excess facial and body hair), acne or hair loss - indicators of high androgen levels.</span></li>
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span>Perform a <strong>vaginal ultrasound</strong> to view enlarged ovaries and multiple small cysts.</span></li>
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span>Order <strong>blood tests</strong> to check hormone levels, insulin, sugar and lipid profile.</span></li>
                    </ul>
                  </div>

                  {/* Causes */}
                  <div className="space-y-4 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                    <h3 className="font-heading font-bold text-xl text-slate-900 flex items-center">
                      <ListChecks className="w-5 h-5 text-amber-500 mr-2" />
                      What Causes PCOD / PCOS?
                    </h3>
                    <p className="text-xs text-slate-600">Several factors are commonly associated with PCOD/PCOS:</p>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span><strong>Hereditary tendency</strong> or family history.</span></li>
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span><strong>Family history of diabetes</strong>.</span></li>
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span><strong>Anovulation</strong> (failure to release eggs).</span></li>
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span><strong>Hormonal imbalance</strong> (high androgen and oestrogen levels).</span></li>
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span><strong>Obesity</strong> or excess weight.</span></li>
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span><strong>Overactive adrenal glands</strong>.</span></li>
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" /><span><strong>Insulin resistance</strong>, leading to high insulin levels and further hormonal imbalance.</span></li>
                    </ul>
                  </div>
                </div>

                {/* Treatment */}
                <div className="space-y-8 pt-4">
                  <div className="space-y-4">
                    <h3 className="font-heading font-bold text-2xl text-slate-900 flex items-center">
                      <HeartPulse className="w-6 h-6 text-rose-600 mr-2" />
                      How is PCOD Treated?
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Treatment depends on the patient’s symptoms and goals - especially whether she is trying to conceive. At <strong>Maa Nursing Home and NetraJyoti Eyecare Centre</strong>, our gynaecology and infertility team provides a combination of lifestyle planning and medical/fertility treatments.
                    </p>
                  </div>

                  {/* Lifestyle & Medical Management */}
                  <div className="space-y-4">
                    <h4 className="font-heading font-bold text-lg text-slate-900 text-rose-700">Lifestyle & Medical Management</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                        <strong className="block text-slate-900 mb-1 text-sm">Weight loss</strong>
                        <p className="text-xs text-slate-600 leading-relaxed">Even a 5–10% reduction in body weight can significantly improve ovulation, hormone balance and chances of pregnancy.</p>
                      </div>
                      <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                        <strong className="block text-slate-900 mb-1 text-sm">Diet & exercise</strong>
                        <p className="text-xs text-slate-600 leading-relaxed">A healthy, balanced diet with regular physical activity helps reduce insulin resistance and regulate periods.</p>
                      </div>
                      <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                        <strong className="block text-slate-900 mb-1 text-sm">Anti-diabetic medicines</strong>
                        <p className="text-xs text-slate-600 leading-relaxed">For women with insulin resistance or pre-diabetes, medicines may be prescribed to improve insulin sensitivity.</p>
                      </div>
                      <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                        <strong className="block text-slate-900 mb-1 text-sm">Hormone therapy & Cycle regulation</strong>
                        <p className="text-xs text-slate-600 leading-relaxed">Medicines to suppress excessive androgen and oestrogen levels, reduce cyst formation, improve egg quality, regularize cycles and reduce the risk of endometrial thickening.</p>
                      </div>
                    </div>
                  </div>

                  {/* Fertility-Focused Treatment */}
                  <div className="space-y-4">
                    <h4 className="font-heading font-bold text-lg text-slate-900 text-rose-700 flex items-center">
                      <Baby className="w-5 h-5 text-rose-600 mr-2" />
                      Fertility-Focused Treatment
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      For women facing infertility due to PCOD, additional fertility treatments may be required:
                    </p>
                    <ul className="space-y-3 text-sm text-slate-700 bg-rose-50/50 p-5 rounded-2xl border border-rose-100">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-rose-600 mr-3 shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-slate-900 mb-1">Ovulation induction with IUI (Intrauterine Insemination)</strong>
                          <span className="text-slate-600 leading-relaxed">Medicines stimulate egg development; timing is closely monitored. IUI is then performed to improve chances of conception. Careful dosing of HMG is used to reduce the risk of multiple pregnancy and ovarian hyperstimulation syndrome.</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-rose-600 mr-3 shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-slate-900 mb-1">Laparoscopic ovarian drilling</strong>
                          <span className="text-slate-600 leading-relaxed">A minimally invasive procedure where multiple small holes are drilled in the thickened ovarian capsule to help restore ovulation in selected cases.</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-rose-600 mr-3 shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-slate-900 mb-1">IVF (In Vitro Fertilization)</strong>
                          <span className="text-slate-600 leading-relaxed">The best option for PCOD patients who do not conceive with medication and IUI. Eggs are collected, fertilised in the lab, and embryos are transferred back into the uterus.</span>
                        </div>
                      </li>
                    </ul>
                    <p className="text-slate-600 text-sm font-medium mt-4 italic">
                      With proper counselling, lifestyle changes and targeted fertility treatment, many women with PCOD are able to conceive and maintain a healthy pregnancy.
                    </p>
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: Sidebar */}
              <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
                
                {/* Why Choose Us Card */}
                <div className="p-6 bg-slate-900 rounded-2xl shadow-lg border border-slate-800 space-y-4">
                  <h4 className="font-heading font-bold text-xl text-white border-b border-slate-700 pb-2">Why Choose Us for PCOD Care?</h4>
                  <ul className="space-y-3 text-sm text-slate-300">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-rose-400 mr-2 mt-0.5 shrink-0" />
                      <span>Dedicated Gynaecology & Infertility Clinic</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-rose-400 mr-2 mt-0.5 shrink-0" />
                      <span>Individualised lifestyle & treatment plans</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-rose-400 mr-2 mt-0.5 shrink-0" />
                      <span>Expertise in PCOD-related infertility</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-rose-400 mr-2 mt-0.5 shrink-0" />
                      <span>Comprehensive monitoring & counselling</span>
                    </li>
                  </ul>
                </div>

                {/* Quick Facts Card */}
                <div className="p-6 bg-rose-50 rounded-2xl shadow-sm border border-rose-100 space-y-4">
                  <h4 className="font-heading font-bold text-xl text-rose-900 border-b border-rose-200 pb-2">Quick Facts</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <span className="text-rose-700 font-semibold text-xs flex items-center"><Clock className="w-3.5 h-3.5 mr-1" /> Common age</span>
                      <span className="text-rose-900 text-xs font-bold text-right">15–44 years</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-rose-700 font-semibold text-xs flex items-center"><Activity className="w-3.5 h-3.5 mr-1" /> Main issues</span>
                      <span className="text-rose-900 text-xs font-bold text-right">Irregular periods, infertility</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-rose-700 font-semibold text-xs flex items-center"><ShieldCheck className="w-3.5 h-3.5 mr-1" /> Key approach</span>
                      <span className="text-rose-900 text-xs font-bold text-right">Lifestyle + medical care</span>
                    </div>
                  </div>
                </div>

                {/* Ready to Book */}
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-200 text-center space-y-4">
                  <h4 className="font-heading font-bold text-xl text-slate-900">Need PCOD / PCOS Consultation?</h4>
                  <Link 
                    href="/appointment?service=pcod" 
                    className="flex justify-center items-center w-full px-4 py-3 rounded-xl font-heading font-bold text-sm text-white bg-rose-600 hover:bg-rose-700 transition-all"
                  >
                    Book Gynaec Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APPOINTMENT FORM SECTION */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <AppointmentForm title="Book Your PCOD / PCOS Consultation" />
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
