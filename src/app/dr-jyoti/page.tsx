import React from "react";
import { TopBar } from "@/components/ui/TopBar";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { AppointmentForm } from "@/components/ui/AppointmentForm";
import { HeartPulse, ShieldCheck, Users, Phone, CheckCircle2, Clock } from "lucide-react";

export const metadata = {
  title:
    "Dr. Jyoti Shah | Senior Gynaecologist & IVF Specialist in Malad, Kandivali, Borivali, Goregaon, Andheri, Parle, Santacruz",
  description:
    "Meet Dr. Jyoti Shah, an expert gynaecologist and infertility specialist in Malad, Mumbai. Over 30 years of experience in IVF, high-risk obstetrics, and compassionate women's health care. Along with top gynaecology care, our center offers the best eye surgeon, ophthalmologist, cataract surgeon, and LASIK surgeon services in Malad, Kandivali, Borivali, Goregaon, Andheri, Parle, and Santacruz.",
};

export default function DrJyotiPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-body">
      <TopBar />
      <Header />

      <main className="flex-1">
        {/* PAGE TITLE */}
        <section className="bg-slate-900 text-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-emerald-400 bg-emerald-950/80 rounded-full border border-emerald-700/50">
              Senior Consulting Gynaecologist & IVF Specialist
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              Dr Jyoti Shah
            </h1>
            <p className="text-slate-300 text-base max-w-3xl">
              Maa Nursing Home & NetraJyoti Eyecare Centre - providing advanced eye care and compassionate gynaecology services since 2002. Excellence, accessibility and affordability are the pillars of our care.
            </p>
          </div>
        </section>

        {/* DEPARTMENT & DR DETAILS SECTION */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column - Gynaecology & Infertility Details */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-2 text-xs font-bold text-accent-600 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
                    <HeartPulse className="w-4 h-4" />
                    <span>Gynaecology & Infertility</span>
                  </div>
                  <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900">
                    Compassionate Fertility & Women’s Health Care
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Advanced infertility treatments, high-risk obstetrics and ethical gynaecological care - delivered with empathy, experience and affordability.
                  </p>
                </div>

                {/* Service Highlights Cards */}
                <div className="space-y-4">
                  <h3 className="font-heading font-bold text-xl text-slate-900">Specialised Services</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="w-10 h-10 rounded-xl bg-accent-600 text-white flex items-center justify-center">
                        <HeartPulse className="w-5 h-5" />
                      </div>
                      <h4 className="font-heading font-bold text-slate-900 text-sm">IVF & IUI Treatments</h4>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        Evidence-based fertility protocols with personalised counselling.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="w-10 h-10 rounded-xl bg-primary-700 text-white flex items-center justify-center">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <h4 className="font-heading font-bold text-slate-900 text-sm">High-Risk Obstetrics</h4>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        Safe management of complex and advanced-age pregnancies.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="w-10 h-10 rounded-xl bg-accent-600 text-white flex items-center justify-center">
                        <Users className="w-5 h-5" />
                      </div>
                      <h4 className="font-heading font-bold text-slate-900 text-sm">Community Outreach</h4>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        Charitable camps and affordable surgical care for underserved patients.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Helpline Box */}
                <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Helpline Contact</span>
                    <p className="font-heading font-bold text-lg text-emerald-400">98200 72543</p>
                  </div>
                  <a
                    href="tel:9820072543"
                    className="inline-flex items-center px-5 py-3 rounded-xl font-heading font-bold text-slate-900 bg-emerald-400 hover:bg-emerald-300 text-xs transition-all"
                  >
                    <Phone className="w-4 h-4 mr-1.5" /> Call Hospital
                  </a>
                </div>
              </div>

              {/* Right Column - Dr Jyoti Shah Image & Profile Card */}
              <div className="lg:col-span-5 space-y-6">
                <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-slate-200">
                  <img
                    src="/assets/img/images/dr jyoti.jpg"
                    alt="Dr Jyoti Shah - Senior Gynaecologist"
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-4">
                  <div>
                    <h4 className="font-heading font-bold text-xl text-slate-900">Dr Jyoti Shah</h4>
                    <p className="text-xs font-semibold text-accent-600">Senior Consulting Gynaecologist & Infertility Specialist</p>
                    <span className="text-xs font-bold text-slate-500">M.D., D.G.O., D.F.P.</span>
                  </div>

                  <p className="text-slate-700 text-xs leading-relaxed">
                    Inspired by India’s first IVF success in 1986 under Dr Indira Hinduja, Dr Jyoti Shah pursued gynaecology at K.E.M. Medical College and trained directly under IVF pioneers Dr Indira Hinduja and Dr Sadhana Desai. Over the last 30+ years, she has helped hundreds of couples achieve parenthood and successfully handled complex cases including triplet births and deliveries in advanced maternal age.
                  </p>

                  <ul className="space-y-2 text-xs font-medium text-slate-700 border-t border-slate-200 pt-3">
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0" />
                      <span>30+ years of infertility & obstetric care</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0" />
                      <span>IVF, IUI & advanced fertility protocols</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0" />
                      <span>Strong focus on ethical & affordable treatment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LEGACY OF CARE SECTION */}
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8 space-y-4">
                <h3 className="font-heading font-bold text-2xl text-slate-900">A Legacy of Care & Service</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Deeply committed to community welfare, Dr. Jyoti Shah works to make IVF accessible to economically weaker sections. Every year, she travels to Kutch to conduct free hysterectomy surgeries in charitable camps.
                </p>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Soft-spoken and disciplined, she balances clinical excellence with family life, Kathak dance practice and daily yoga. Guided by the philosophy of Swami Vivekananda, she believes total dedication to one's purpose is the true path to success.
                </p>
              </div>

              <div className="lg:col-span-4">
                <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-3">
                  <h4 className="font-heading font-bold text-lg text-slate-900 flex items-center">
                    <Clock className="w-5 h-5 text-primary-700 mr-2" /> Consultation Hours
                  </h4>
                  <div className="space-y-2 text-xs text-slate-700">
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span>Monday - Friday</span>
                      <span className="font-semibold">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span>Saturday</span>
                      <span className="font-semibold">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-semibold">Emergency & Camps</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APPOINTMENT FORM SECTION */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <AppointmentForm title="Book Appointment with Dr. Jyoti Shah" />
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
