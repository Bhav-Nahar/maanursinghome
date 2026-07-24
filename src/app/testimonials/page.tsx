import React from "react";
import Link from "next/link";
import { TopBar } from "@/components/ui/TopBar";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { ChevronRight, Star, Quote } from "lucide-react";

export const metadata = {
  title:
    "Patient Reviews | Best Eye & IVF Clinic in Malad, Kandivali, Borivali, Goregaon, Andheri, Parle, Santacruz",
  description:
    "Read what our patients say about their experience at Maa Nursing Home and NetraJyoti Eyecare Centre. Real stories of successful eye and gynaecological treatments in Malad West. Maa Nursing Home is the trusted choice for the best eye surgeon, ophthalmologist, cataract surgeon, and LASIK surgeon in Malad, Kandivali, Borivali, Goregaon, Andheri, Parle, and Santacruz.",
};

const testimonials = [
  {
    name: "Jayesh Mistry",
    treatment: "Cataract Surgery",
    review: "The best eye clinic. I got my cataract surgery done without any charges. I had attended one of their free screening camps, where Dr Jugal Shah detected my cataract. I was impressed with the camp, doctors, and all staff. They explained everything in detail and all arrangement was perfect. Hospital management is very nice. I will come again to the camp and bring my friends and relatives also. Thank you all."
  },
  {
    name: "Safalya Gupta",
    treatment: "LASIK Treatment",
    review: "I was wearing specs of -16 number in both eyes before the surgery. I got my LASIK surgery done by Dr Jugal Shah. It was an unbelievable experience. My eyes are back to normal; I don’t need specs at all! Thanks to Dr Jugal Shah I can clearly see this beautiful world with my natural eyes!"
  },
  {
    name: "Salma Kapadia",
    treatment: "Hysterectomy",
    review: "Dr Jyoti Shah is the best gynaecologist, and her staff is also the best. I was so scared before my uterus removal surgery, but she helped me relax. I would definitely suggest my dear and near ones to approach her for any gynaec-related problems. No doubt, she's best at her work."
  },
  {
    name: "Junaid Ansari",
    treatment: "LASIK Surgery",
    review: "I got my LASIK Contoura surgery, a totally bladeless procedure by Dr Jugal Shah."
  },
  {
    name: "Praful Shah",
    treatment: "Cataract Surgery",
    review: "The surgery was painless. She was very comfortable after surgery. The staff at Maa is very cooperative and sweet. They treat you like family."
  },
  {
    name: "Andrea Carvaho",
    treatment: "Infertility Treatment",
    review: "I was suffering from PCOD and could not conceive for years after my marriage. In September 2017, we visited Dr Jyoti Shah. She listened to our problems intently and with her warm, positive, and kind assurance, we found hope. She soon became our mother, friend and of course our doctor. At every visit to the hospital, there was a warm welcome. On her advice, I reduced my weight and with her treatment, got pregnant. Our joy knew no bounds and tears rolled down with joy and gratitude. Today, I am blessed with a healthy daughter, all due to my treatment with Dr Jyoti Shah. Thank you and your support team!"
  },
  {
    name: "Manisha Dhamne",
    treatment: "Cataract Surgery",
    review: "Very happy with the surgery results. My mom does not need to carry specs anymore and has a clear sharp vision."
  },
  {
    name: "Selsa Colaco",
    treatment: "Cataract Surgery",
    review: "I underwent cataract surgery under Dr Jugal Shah. The surgery was well planned and executed. The staff was polite, helpful, and guided me throughout. Even the mausi was very alert, ensuring I kept my eyes closed after the drops. Dr Jugal made me comfortable during the procedure by chatting with me. The experience was great, and I highly recommend him and his centre."
  },
  {
    name: "Nandini Mukherjee",
    treatment: "Cataract Surgery",
    review: "For over 30 years, I had a vision problem due to a cataract in my right eye. Dr Jugal Shah performed my surgery, and now my vision has improved significantly."
  },
  {
    name: "Kasi Qureshi",
    treatment: "Cataract Surgery",
    review: "My wife’s cataract surgery was done by Dr Jugal Shah using LASER Micro-Phaco technique. It was completely painless. I am very thankful and highly recommend him for all eye treatments."
  },
  {
    name: "Dhruvkumar Sharma",
    treatment: "Cataract Surgery",
    review: "My entire experience from the first visit to the surgery was amazing. Dr Jugal Shah performed my cataract operation successfully. His team is friendly and very supportive. Highly recommended for any eye ailment."
  },
  {
    name: "Sanjay Bhanushali",
    treatment: "LASIK Surgery",
    review: "I was initially afraid of LASIK surgery, but Dr Jugal Shah explained everything and made the procedure completely relaxing. The entire process was smooth and well-managed. Highly recommended."
  },
  {
    name: "Audhoot Chodankar",
    treatment: "Eye Treatments",
    review: "Dr Jugal Shah is one of the best doctors with a pleasing, helpful nature. My brother, my sister, and I have all been operated on by him. His reassuring smile always gives confidence."
  },
  {
    name: "Sheetal Thite",
    treatment: "Infertility Treatment",
    review: "My previous pregnancy was ectopic, so I was very afraid. Dr Jyoti Shah started my treatment in November, and by January I conceived. Today I am a proud mother, and I am deeply grateful."
  },
  {
    name: "Seema Yadav",
    treatment: "Infertility Treatment",
    review: "We took IUI treatment from Dr Jyoti Shah after years of failing to conceive. Today we are proud parents, and our gratitude to her is immense."
  }
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-body">
      <TopBar />
      <Header />

      <main className="flex-1">
        {/* PAGE TITLE */}
        <section className="bg-slate-900 text-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
            <div className="flex items-center justify-center space-x-2 text-xs font-semibold text-emerald-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">Testimonials</span>
            </div>
            
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Patient Reviews
            </h1>
            <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
              Read what our patients say about their experience at Maa Nursing Home and NetraJyoti Eyecare Centre. Real stories of successful eye and gynaecological treatments.
            </p>
          </div>
        </section>

        {/* GOOGLE REVIEWS BANNER */}
        <section className="bg-emerald-50 border-b border-emerald-100 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-extrabold text-slate-900">4.9</span>
                <div className="flex text-amber-500">
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                </div>
                <span className="text-sm font-medium text-slate-600">(Google Business Ratings)</span>
              </div>
              <a 
                href="https://share.google/X9V7DCsfep9B7EqWL" 
                target="_blank" 
                rel="noreferrer"
                className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-colors shadow-sm"
              >
                Read & Verify Reviews on Google
              </a>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS GRID */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                  <div className="flex text-amber-400 mb-4">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <div className="mb-4 text-slate-600 text-sm leading-relaxed italic flex-1 relative z-10">
                    <Quote className="w-8 h-8 text-slate-200 absolute -top-2 -left-2 -z-10" />
                    "{testimonial.review}"
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <h3 className="font-heading font-bold text-slate-900 text-base">{testimonial.name}</h3>
                    <p className="text-primary-700 text-xs font-semibold uppercase tracking-wide mt-1">{testimonial.treatment}</p>
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
