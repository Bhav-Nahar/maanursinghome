import React from "react";
import Link from "next/link";
import { TopBar } from "@/components/ui/TopBar";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import {
  Award,
  CheckCircle2,
  Phone,
  MessageCircle,
  ArrowRight,
  HeartPulse,
  Calendar,
  Star,
  Quote,
  Clock,
  MapPin,
  ExternalLink,
} from "lucide-react";

export default function HomePage() {
  const eyeCampWhatsappUrl = `https://wa.me/918828068727?text=${encodeURIComponent(
    "Hi Dr. Jugal Shah, I would like to register for the Free Eye Camp on 11th July 2026."
  )}`;

  const onlineConsultWhatsappUrl = `https://wa.me/919820072543?text=${encodeURIComponent(
    "Hi, I would like to book an Online Consultation."
  )}`;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-body">
      <TopBar />
      <Header />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section id="hero" className="bg-slate-900 text-white relative py-16 lg:py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Hero Image */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800 max-w-md">
                  <img
                    src="/assets/img/images/imgi_8_WhatsApp-Image-2020-09-24-at-16.05.39.jpg"
                    alt="Healthcare Professional at Maa Nursing Home"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Hero Content */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 border border-emerald-700/50 text-emerald-400 uppercase tracking-wider">
                    Trusted Healthcare Provider
                  </span>
                </div>
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Advanced Eye & Gynaecology Care
                </h1>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  Maa Nursing Home and NetraJyoti Eyecare Centre is a leading super-speciality hospital in Mumbai, offering expert treatment in cataract, glaucoma, squint, retina care, paediatric ophthalmology, LASIK, gynaecology, obstetrics and infertility.
                  <br />
                  <span className="text-slate-400 text-sm mt-2 block">
                    Since 2002, we have provided ethical, accessible and affordable care backed by modern technology and experienced specialists.
                  </span>
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="tel:9820072543"
                    className="inline-flex items-center px-6 py-3.5 rounded-xl font-heading font-bold text-white bg-primary-700 hover:bg-primary-900 shadow-lg transition-all"
                  >
                    <Phone className="w-5 h-5 mr-2" /> Call 98200 72543
                  </a>
                  <a
                    href={onlineConsultWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3.5 rounded-xl font-heading font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-lg transition-all"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" /> Online Consultation
                  </a>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center space-x-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-slate-800 text-emerald-400">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="block font-heading font-extrabold text-2xl text-white">35+</span>
                      <span className="text-xs text-slate-400 font-medium">Years Experience</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FREE EYE CAMP SECTION */}
        <section id="eye-camp" className="py-12 bg-rose-50/60 border-b-4 border-rose-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Camp Banner Images */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-sm border border-rose-200">
                  <img
                    src="/assets/img/WhatsApp Image 2026-07-07 at 12.15.55 PM.jpeg"
                    alt="Free Eye Camp Banner - Dr. Jugal Shah"
                    className="w-full h-auto object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-sm border border-rose-200">
                  <img
                    src="/assets/img/WhatsApp Image 2026-07-07 at 12.15.55 PM (1).jpeg"
                    alt="Free Eye Camp Flyer - Dr. Jugal Shah"
                    className="w-full h-auto object-cover hover:scale-105 transition-transform"
                  />
                </div>
              </div>

              {/* Camp Details */}
              <div className="lg:col-span-7 space-y-4">
                <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-rose-800 bg-rose-200 rounded-full">
                  Special Charitable Initiative
                </span>
                <h2 className="font-heading text-3xl font-extrabold text-slate-900">
                  FREE EYE CAMP <br />
                  <span className="text-rose-600">For Unaffording Patients</span>
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Maa Nursing Home & NetraJyoti Eyecare Centre, in association with Sadbhavana Kendra (A unit of Shri Trilokchand Papriwal Charitable Trust), is conducting a Free Eye Camp on <strong>11th July 2026, Saturday</strong> from <strong>9:00 AM to 1:00 PM</strong>.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 text-xs font-semibold text-slate-800">
                  <span className="flex items-center text-rose-700">
                    <CheckCircle2 className="w-4 h-4 mr-1.5 shrink-0" /> FREE Eye Check-up
                  </span>
                  <span className="flex items-center text-rose-700">
                    <CheckCircle2 className="w-4 h-4 mr-1.5 shrink-0" /> FREE Cataract Operations
                  </span>
                  <span className="flex items-center text-rose-700">
                    <CheckCircle2 className="w-4 h-4 mr-1.5 shrink-0" /> FREE Reading Spectacles
                  </span>
                  <span className="flex items-center text-rose-700">
                    <CheckCircle2 className="w-4 h-4 mr-1.5 shrink-0" /> FREE IOL Master (A-Scan)
                  </span>
                  <span className="flex items-center text-rose-700">
                    <CheckCircle2 className="w-4 h-4 mr-1.5 shrink-0" /> FREE Blood Test for Patients
                  </span>
                  <span className="flex items-center text-rose-700">
                    <CheckCircle2 className="w-4 h-4 mr-1.5 shrink-0" /> FREE Eye Drops
                  </span>
                </div>

                <div className="p-4 bg-white rounded-xl border-l-4 border-rose-600 shadow-sm text-xs space-y-1 text-slate-700">
                  <p><strong>📍 Venue:</strong> Maa Nursing Home, Himachal Bldg, S.V. Road, Opp. Sundar Nagar, Malad West, Mumbai 400064</p>
                  <p><strong>📅 Date & Time:</strong> 11th July 2026, Saturday (9:00 AM - 1:00 PM)</p>
                  <p><strong>📞 Helpline Contacts:</strong> 8828068727 / 8850118725 / 8828328726 / 8823328766</p>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={eyeCampWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-3 rounded-full text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 shadow-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4 mr-1.5" /> Register Free on WhatsApp
                  </a>
                  <a
                    href="tel:8828068727"
                    className="inline-flex items-center px-5 py-3 rounded-full text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 shadow-sm transition-all"
                  >
                    <Phone className="w-4 h-4 mr-1.5" /> Call to Register
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOME ABOUT / WHAT WE DO SECTION */}
        <section id="home-about" className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="font-heading text-3xl font-extrabold text-slate-900">What We Do</h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Maa Nursing Home and NetraJyoti Eyecare Centre is one of the best super-speciality hospitals offering comprehensive eye care and gynaecology care to patients in the western suburbs of Mumbai. It opened its doors in 2002 to provide treatment for eye-related problems like cataracts, glaucoma, squint, paediatric ophthalmology, Oculoplasty, retinal problems, etc. and Gynaecology and Obstetrics facility. Today, it boasts of state-of-the-art advanced clinics-LASIK treatment for vision correction and a dedicated Infertility Clinic to help childless couples with fertility treatment. ‘Maa’ has an unwavering mission to make a world-class treatment accessible and affordable to all. The couple has pioneered new treatments and many rare and complicated cases; that have won them accolades nationally and internationally.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                  <img
                    src="/assets/img/images/imgi_10_WhatsApp-Image-2020-09-24-at-16.05.38-1.jpg"
                    alt="Modern hospital facility at Maa Nursing Home"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                    <img
                      src="/assets/img/images/imgi_9_TOR_7878-e1601217782824.jpg"
                      alt="Doctor consultation"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                    <img
                      src="/assets/img/images/imgi_8_WhatsApp-Image-2020-09-24-at-16.05.39.jpg"
                      alt="Medical procedure"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-primary-700 text-white shrink-0">
                    <HeartPulse className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-base">Patient-Centered Approach</h4>
                    <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                      Every treatment plan is carefully customized to meet individual patient needs and medical history.
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-slate-700 font-medium">
                  <div className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Advanced diagnostic technology and imaging</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Board-certified physicians and specialists</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Comprehensive rehabilitation programs</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>24/7 emergency and critical care services</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-100/80 text-center">
                  <div>
                    <span className="font-heading font-extrabold text-3xl text-primary-700">98%</span>
                    <span className="block text-xs font-semibold text-slate-600 mt-0.5">Patient Satisfaction</span>
                  </div>
                  <div>
                    <span className="font-heading font-extrabold text-3xl text-accent-600">100K+</span>
                    <span className="block text-xs font-semibold text-slate-600 mt-0.5">Lives Improved</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/about"
                    className="inline-flex items-center px-4 py-2.5 rounded-xl font-heading font-bold text-xs text-white bg-primary-700 hover:bg-primary-900 transition-all"
                  >
                    Explore Services <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                  <a
                    href={onlineConsultWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2.5 rounded-xl font-heading font-bold text-xs text-slate-900 bg-emerald-400 hover:bg-emerald-300 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 mr-1.5" /> Online Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED SERVICES SECTION */}
        <section id="featured-services" className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="font-heading text-3xl font-extrabold text-slate-900">Featured Services</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Service 1: Eye Care */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row">
                <div className="sm:w-2/5 h-48 sm:h-auto shrink-0 overflow-hidden">
                  <img
                    src="/assets/img/images/imgi_3_eye_intro.png"
                    alt="Eye Care"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 sm:w-3/5 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-xl text-slate-900">Eye Care</h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      A modern Eyecare Clinic that offers complete eye check-ups and treatment for cataracts, glaucoma, dry eyes, diabetic retinopathy, computer vision syndrome, eye problems of senior citizens, paediatric eye problems, squint, etc.
                    </p>
                  </div>
                  <Link href="/treatments/cataract" className="inline-flex items-center text-xs font-bold text-primary-700 hover:underline pt-2">
                    Learn More <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Service 2: LASIK */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row">
                <div className="sm:w-2/5 h-48 sm:h-auto shrink-0 overflow-hidden">
                  <img
                    src="/assets/img/images/imgi_4_woman-peeking-eyeglasses.jpg"
                    alt="LASIK Clinic"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 sm:w-3/5 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-xl text-slate-900">LASIK</h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Dump your glasses and contact lenses forever. LASIK, a safe and painless vision correction procedure, will restore your eyesight instantly. Walk out of our Clinic with a clear vision and no specs forever.
                    </p>
                  </div>
                  <Link href="/treatments/lasik" className="inline-flex items-center text-xs font-bold text-primary-700 hover:underline pt-2">
                    Learn More <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Service 3: Gynaec Care */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row">
                <div className="sm:w-2/5 h-48 sm:h-auto shrink-0 overflow-hidden">
                  <img
                    src="/assets/img/images/Amenorrhea.jpg"
                    alt="Gynaec Care"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 sm:w-3/5 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-xl text-slate-900">Gynaec Care</h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      We are committed to women’s health. Spearheaded by Dr Jyoti Shah, this clinic offers affordable quality treatment and advice for gynaec-related problems to women of all ages, from pre-teen to elderly women
                    </p>
                  </div>
                  <Link href="/treatments/pcod" className="inline-flex items-center text-xs font-bold text-primary-700 hover:underline pt-2">
                    Learn More <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Service 4: Infertility Clinic */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row">
                <div className="sm:w-2/5 h-48 sm:h-auto shrink-0 overflow-hidden">
                  <img
                    src="/assets/img/images/imgi_6_infertility_intro.png"
                    alt="Infertility Clinic"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 sm:w-3/5 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-xl text-slate-900">Infertility Clinic</h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Advanced specialty clinic under Dr Jyoti Shah (25+ years experience, high success rate) offering customized affordable packages for IVF, IUI, and ICSI.
                    </p>
                  </div>
                  <Link href="/treatments/ivf" className="inline-flex items-center text-xs font-bold text-primary-700 hover:underline pt-2">
                    Learn More <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REVIEWS SECTION */}
        <section id="home-testimonials" className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="font-heading text-3xl font-extrabold text-slate-900">What Our Patients Say</h2>
              <p className="text-slate-600 text-sm">Real stories from our Google Reviews</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex text-amber-400">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 text-base">Jayesh Mistry</h3>
                  <span className="text-xs font-semibold text-primary-700 block">Cataract Surgery</span>
                  <p className="text-slate-600 text-xs italic leading-relaxed">
                    “I underwent cataract surgery done without any charges. I had attended one of their free screening camps, where Dr. Jugal Shah detected my cataract. All arrangement was perfect.”
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-500">
                  Verified Google Review
                </div>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex text-amber-400">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 text-base">Salma Kapadia</h3>
                  <span className="text-xs font-semibold text-primary-700 block">Hysterectomy</span>
                  <p className="text-slate-600 text-xs italic leading-relaxed">
                    “Dr. Jyoti Shah is the best gynaecologist, and her staff is also the best. I was so scared before my uterus removal surgery, but she helped me relax. I suggest anyone to approach her.”
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-500">
                  Verified Google Review
                </div>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex text-amber-400">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 text-base">Andrea Carvalho</h3>
                  <span className="text-xs font-semibold text-primary-700 block">Infertility Treatment</span>
                  <p className="text-slate-600 text-xs italic leading-relaxed">
                    “I was suffering from PCOD and could not conceive for years. With Dr. Jyoti Shah's treatment, I got pregnant and today I am blessed with a healthy daughter. Thank you!”
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200 text-xs font-medium text-slate-500">
                  Verified Google Review
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RECENT BLOGS SECTION */}
        <section id="recent-blogs" className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="font-heading text-3xl font-extrabold text-slate-900">Recent Blogs</h2>
              <p className="text-slate-600 text-sm">Stay updated with our latest health articles and news</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="h-44 overflow-hidden bg-slate-100">
                    <img
                      src="/assets/img/images/imgi_3_eye_intro.png"
                      alt="Common Myths About Cataract Surgery"
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <span className="text-xs font-semibold text-primary-700 bg-primary-50 px-2.5 py-1 rounded-full border border-primary-100">
                      May 10, 2026
                    </span>
                    <h3 className="font-heading font-bold text-lg text-slate-900 leading-snug">
                      <Link href="/blogs/blog1" className="hover:text-primary-700 transition-colors">
                        Common Myths About Cataract Surgery
                      </Link>
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                      Explore the most common misconceptions about cataract surgery and learn the facts from our expert ophthalmologists.
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link href="/blogs/blog1" className="inline-flex items-center text-xs font-bold text-primary-700 hover:underline">
                    Read More <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="h-44 overflow-hidden bg-slate-100">
                    <img
                      src="/assets/img/images/LASIK Clinic.jpg"
                      alt="Is LASIK Surgery Safe?"
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <span className="text-xs font-semibold text-primary-700 bg-primary-50 px-2.5 py-1 rounded-full border border-primary-100">
                      June 27, 2026
                    </span>
                    <h3 className="font-heading font-bold text-lg text-slate-900 leading-snug">
                      <Link href="/blogs/blog3" className="hover:text-primary-700 transition-colors">
                        Is LASIK Surgery Safe? Everything You Need to Know
                      </Link>
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                      Imagine waking up to clear vision without glasses. Learn how LASIK works, who is eligible, recovery timelines, and common myths debunked.
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link href="/blogs/blog3" className="inline-flex items-center text-xs font-bold text-primary-700 hover:underline">
                    Read More <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="h-44 overflow-hidden bg-slate-100">
                    <img
                      src="/assets/img/images/Diabetic Retinopathy.jpg"
                      alt="How Diabetes Affects Your Eyes"
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <span className="text-xs font-semibold text-primary-700 bg-primary-50 px-2.5 py-1 rounded-full border border-primary-100">
                      June 27, 2026
                    </span>
                    <h3 className="font-heading font-bold text-lg text-slate-900 leading-snug">
                      <Link href="/blogs/blog4" className="hover:text-primary-700 transition-colors">
                        How Diabetes Affects Your Eyes: Diabetic Retinopathy
                      </Link>
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                      Diabetes can seriously impact your vision. Learn what diabetic retinopathy is, its symptoms, stages, treatment options, and prevention tips.
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link href="/blogs/blog4" className="inline-flex items-center text-xs font-bold text-primary-700 hover:underline">
                    Read More <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center pt-8">
              <Link
                href="/blogs"
                className="inline-flex items-center px-6 py-3.5 rounded-full font-heading font-bold text-sm text-white bg-primary-700 hover:bg-primary-900 shadow-md transition-all"
              >
                View All Blogs <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
