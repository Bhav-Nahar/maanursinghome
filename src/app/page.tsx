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
  MessagesSquare,
} from "lucide-react";
import { getAllBlogs, getHomepage } from "@/lib/sanity";

export const revalidate = 31536000; // 1 year ISR

export async function generateMetadata() {
  const hp = await getHomepage();
  return {
    title: hp.seoTitle,
    description: hp.seoDescription,
    keywords: hp.seoKeywords,
  };
}

export default async function HomePage() {
  const hp = await getHomepage();
  const recentBlogs = (await getAllBlogs()).slice(0, 3);
  const eyeCampFeatures = hp.eyeCampFeatures.split(",").map((f) => f.trim()).filter(Boolean);
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
                    src={hp.heroImage}
                    alt="Healthcare Professional at Maa Nursing Home"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Hero Content */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 border border-emerald-700/50 text-emerald-400 uppercase tracking-wider">
                    {hp.heroBadge}
                  </span>
                </div>
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  {hp.heroTitle}
                </h1>
                <p
                  className="text-slate-300 text-base sm:text-lg leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: hp.heroDescription }}
                />

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
                      <span className="block font-heading font-extrabold text-2xl text-white">{hp.heroExperienceNumber}</span>
                      <span className="text-xs text-slate-400 font-medium">{hp.heroExperienceLabel}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FREE EYE CAMP (toggle in Studio > Homepage > Free Eye Camp) */}
        {hp.eyeCampEnabled && (
          <section id="eye-camp" className="py-16 bg-red-50 border-b border-red-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-red-100 border border-red-300 text-red-700 uppercase tracking-wider">
                    {hp.eyeCampBadge}
                  </span>
                  <h2
                    className="font-heading text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight"
                    dangerouslySetInnerHTML={{ __html: hp.eyeCampTitle }}
                  />
                  <p
                    className="text-slate-700 text-sm md:text-base leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: hp.eyeCampDescription }}
                  />

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {eyeCampFeatures.map((f) => (
                      <li key={f} className="flex items-center space-x-2.5 text-sm font-medium text-slate-800">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-2 text-sm text-slate-700 bg-white rounded-2xl border border-red-200 p-5">
                    <p className="flex items-start space-x-2.5">
                      <Calendar className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span><strong>When:</strong> {hp.eyeCampDateTime}</span>
                    </p>
                    <p className="flex items-start space-x-2.5">
                      <MapPin className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span><strong>Where:</strong> {hp.eyeCampVenue}</span>
                    </p>
                    <p className="flex items-start space-x-2.5">
                      <Phone className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span><strong>Contact:</strong> {hp.eyeCampContacts}</span>
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={hp.eyeCampWhatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3.5 rounded-xl font-heading font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-lg transition-all"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" /> Register on WhatsApp
                    </a>
                    <a
                      href={`tel:${hp.eyeCampPhone}`}
                      className="inline-flex items-center px-6 py-3.5 rounded-xl font-heading font-bold text-white bg-red-600 hover:bg-red-700 shadow-lg transition-all"
                    >
                      <Phone className="w-5 h-5 mr-2" /> Call {hp.eyeCampPhone}
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5 grid grid-cols-2 lg:grid-cols-1 gap-4">
                  {[hp.eyeCampImage1, hp.eyeCampImage2].filter(Boolean).map((src) => (
                    <div key={src} className="rounded-2xl overflow-hidden border border-red-200 shadow-md">
                      <img src={src} alt="Free Eye Camp" className="w-full h-auto object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* HOME ABOUT / WHAT WE DO SECTION */}
        <section id="home-about" className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="font-heading text-3xl font-extrabold text-slate-900">{hp.aboutHeading}</h2>
              <p
                className="text-slate-600 text-sm md:text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: hp.aboutDescription }}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                  <img
                    src={hp.aboutPrimaryImage}
                    alt="Modern hospital facility at Maa Nursing Home"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                    <img
                      src={hp.aboutSecondaryImage1}
                      alt="Doctor consultation"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                    <img
                      src={hp.aboutSecondaryImage2}
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
                    <span className="font-heading font-extrabold text-3xl text-primary-700">{hp.aboutSatisfaction}%</span>
                    <span className="block text-xs font-semibold text-slate-600 mt-0.5">Patient Satisfaction</span>
                  </div>
                  <div>
                    <span className="font-heading font-extrabold text-3xl text-accent-600">{hp.aboutLivesImproved}K+</span>
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
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-4 py-2.5 rounded-xl font-heading font-bold text-xs text-white bg-slate-900 hover:bg-slate-800 transition-all"
                  >
                    <Phone className="w-4 h-4 mr-1.5" /> Schedule Consultation
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
                    src="/assets/img/images/imgi_6_infertility_intro.webp"
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

            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <Link
                href="/testimonials"
                className="inline-flex items-center px-5 py-3 rounded-full text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 shadow-sm transition-all"
              >
                <MessagesSquare className="w-4 h-4 mr-1.5" /> View All Patient Stories
              </Link>
              <a
                href="https://share.google/X9V7DCsfep9B7EqWL"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-3 rounded-full text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 shadow-sm transition-all"
              >
                <Star className="w-4 h-4 mr-1.5" /> Write a Google Review
              </a>
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
              {recentBlogs.map((blog) => (
                <div
                  key={blog.slug}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="h-44 overflow-hidden bg-slate-100">
                      <img
                        src={blog.coverImage}
                        alt={blog.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-6 space-y-3">
                      <span className="text-xs font-semibold text-primary-700 bg-primary-50 px-2.5 py-1 rounded-full border border-primary-100">
                        {blog.date}
                      </span>
                      <h3 className="font-heading font-bold text-lg text-slate-900 leading-snug">
                        <Link href={`/blogs/${blog.slug}`} className="hover:text-primary-700 transition-colors">
                          {blog.title}
                        </Link>
                      </h3>
                      <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">{blog.excerpt}</p>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="inline-flex items-center text-xs font-bold text-primary-700 hover:underline"
                    >
                      Read More <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
