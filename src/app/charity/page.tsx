import React from "react";
import Link from "next/link";
import { TopBar } from "@/components/ui/TopBar";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { ChevronRight, Heart, Users, Eye, Award } from "lucide-react";

export const metadata = {
  title:
    "Charitable Eye Camps & Initiatives in Malad, Kandivali, Borivali, Goregaon, Andheri, Parle, Santacruz | Maa Nursing Home",
  description:
    "Explore the charitable work of Maa Nursing Home and NetraJyoti Eyecare Centre. Free eye camps, cataract surgeries, and community outreach programs in Mumbai and rural areas. Maa Nursing Home is the trusted choice for the best eye surgeon, ophthalmologist, cataract surgeon, and LASIK surgeon in Malad, Kandivali, Borivali, Goregaon, Andheri, Parle, and Santacruz.",
};

type CampEntry = {
  image: number;
  description: string;
};

type CampYear = {
  year: string;
  camps: CampEntry[];
};

export default function CharityPage() {
  // Year-by-year timeline of charity eye camps, sourced from the original
  // Charity.html record. Images reference the 29 photos in
  // /assets/img/charity/.
  const timeline: CampYear[] = [
    {
      year: "2024",
      camps: [
        {
          image: 4,
          description:
            "On 10th March 2024, Dr. Jugal Shah conducted free eye check-ups, cataract surgeries and distributed reading spectacles. Over 200 patients benefitted from this initiative.",
        },
      ],
    },
    {
      year: "2023",
      camps: [
        {
          image: 9,
          description:
            "Diagnostic eye camp at Maa Nursing Home on 3rd September 2023. 312 patients screened, 97 cataracts detected, 16 glaucoma cases diagnosed and 67 spectacles dispensed.",
        },
        {
          image: 7,
          description:
            "Surgical eye camps at Vatsalyagram, Vrindavan and Bhaktivedanta Hospital where over 254 cataract and complex eye surgeries were performed successfully.",
        },
      ],
    },
    {
      year: "2022",
      camps: [
        {
          image: 13,
          description:
            "Free eye check-up camp on Gandhi Jayanti, 2nd October 2022. 183 patients screened and 56 cataract cases diagnosed for surgery.",
        },
      ],
    },
    {
      year: "2021",
      camps: [
        {
          image: 8,
          description:
            "On October 18, 2021, Dr. Jugal Shah operated on over 100 cataract patients free of cost at a charitable camp in Vrindavan.",
        },
      ],
    },
    {
      year: "2020",
      camps: [
        {
          image: 16,
          description:
            "On 3rd January 2020, 302 cataract and complex eye surgeries were successfully performed at Vrindavan (Mathura) under the guidance of Dr. Jugal Shah.",
        },
        {
          image: 17,
          description:
            "Continued commitment to Barsana included 32 difficult surgeries such as one-eyed patients, paediatric cataracts, advanced glaucoma and subluxated cataracts.",
        },
      ],
    },
    {
      year: "2019",
      camps: [
        {
          image: 3,
          description:
            "School eye screening camps conducted under Moldex Composites at Malad and Kandivali municipal schools, screening over 1,100 students.",
        },
      ],
    },
    {
      year: "2018",
      camps: [
        {
          image: 21,
          description:
            "Diagnostic and surgical eye camps were conducted for rural communities and Jain monks, providing free spectacles and treatment.",
        },
      ],
    },
    {
      year: "2017",
      camps: [
        {
          image: 3,
          description:
            "Free eye camps were conducted under CALIX Pharma and SUN Pharma at Maa Nursing Home, Malad, benefiting hundreds of patients through free screenings and referrals.",
        },
      ],
    },
  ];

  // All 29 charity camp images from assets/img/charity/, for the photo gallery
  const charityImages = Array.from({ length: 29 }, (_, i) => i + 1);

  const keyStats = [
    { label: "Free Eye Screening Camps", value: "100+", icon: Eye },
    { label: "Patients Screened", value: "25,000+", icon: Users },
    { label: "Free & Subsidized Surgeries", value: "5,000+", icon: Heart },
    { label: "Years of Community Service", value: "30+", icon: Award },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-body">
      <TopBar />
      <Header />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="bg-slate-900 text-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
            <div className="flex items-center justify-center space-x-2 text-xs font-semibold text-rose-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">Community Service</span>
            </div>
            
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Charity & Free Eye Camps
            </h1>
            <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
              Giving back to society through free vision screening, free cataract operations, and subsidized healthcare for underprivileged communities.
            </p>
          </div>
        </section>

        {/* IMPACT STATS */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {keyStats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="p-6 bg-slate-50 border border-slate-200 rounded-2xl text-center space-y-2">
                    <Icon className="w-8 h-8 text-rose-600 mx-auto" />
                    <div className="font-heading font-extrabold text-3xl text-slate-900">{stat.value}</div>
                    <div className="text-xs font-semibold text-slate-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* YEAR-BY-YEAR CAMP TIMELINE */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-2">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900">
                A Timeline of Free Eye Camps (2017–2024)
              </h2>
              <p className="text-slate-600 text-sm max-w-xl mx-auto">
                A record of the charitable eye camps, surgeries, screenings and outreach programs conducted by Maa Nursing Home &amp; NetraJyoti Eyecare Centre over the years.
              </p>
            </div>

            <div className="space-y-12">
              {timeline.map((yearGroup) => (
                <div key={yearGroup.year}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-heading font-extrabold text-2xl text-rose-600">
                      {yearGroup.year}
                    </span>
                    <div className="flex-1 h-px bg-slate-200" />
                  </div>

                  <div className="space-y-6">
                    {yearGroup.camps.map((camp, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col sm:flex-row gap-5 rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white"
                      >
                        <div className="sm:w-2/5 flex-shrink-0">
                          <img
                            src={`/assets/img/charity/charity (${camp.image}).jpeg`}
                            alt={`Free Eye Camp ${yearGroup.year}`}
                            className="w-full h-56 sm:h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-5 sm:py-6 sm:pr-6 flex items-center">
                          <p className="text-slate-700 text-sm leading-relaxed">
                            {camp.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PHOTO GALLERY OF CAMPS */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-2">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900">
                Charity Camps Photo Gallery
              </h2>
              <p className="text-slate-600 text-sm max-w-xl mx-auto">
                Moments captured from our diagnostic camps, cataract screening drives, and community health initiatives.
              </p>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {charityImages.map((num) => (
                <div 
                  key={num} 
                  className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 bg-white p-2 group"
                >
                  <img
                    src={`/assets/img/charity/charity (${num}).jpeg`}
                    alt={`Free Eye Camp Initiative ${num}`}
                    className="w-full h-auto object-cover rounded-xl group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
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
