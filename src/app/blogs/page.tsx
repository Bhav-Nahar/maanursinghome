import React from "react";
import Link from "next/link";
import { TopBar } from "@/components/ui/TopBar";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { BLOGS_DATA } from "@/data/blogs";
import { Calendar, User, ArrowRight, ChevronRight } from "lucide-react";

export const metadata = {
  title:
    "Health Blogs & Medical Tips in Malad, Kandivali, Borivali, Goregaon, Andheri, Parle, Santacruz | Maa Nursing Home",
  description:
    "Explore our health blogs for expert advice on eye care, gynaecology, and infertility. Stay informed with tips from Maa Nursing Home and NetraJyoti Eyecare Centre, Malad. Maa Nursing Home is the trusted choice for the best eye surgeon, ophthalmologist, cataract surgeon, and LASIK surgeon in Malad, Kandivali, Borivali, Goregaon, Andheri, Parle, and Santacruz.",
};

export const revalidate = 31536000; // 1 year ISR

export default function BlogsListingPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-body">
      <TopBar />
      <Header />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="bg-slate-900 text-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
            <div className="flex items-center justify-center space-x-2 text-xs font-semibold text-emerald-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">Blogs</span>
            </div>
            
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Health Articles & Medical Advice
            </h1>
            <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
              Reliable, doctor-reviewed information on eye health, cataract, LASIK, IVF, and women's wellness by Dr. Jugal Shah & Dr. Jyoti Shah.
            </p>
          </div>
        </section>

        {/* BLOGS GRID */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOGS_DATA.map((blog) => (
                <article
                  key={blog.id}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
                >
                  <div>
                    {/* Cover Image */}
                    {blog.coverImage && (
                      <div className="h-48 overflow-hidden bg-slate-100">
                        <img 
                          src={blog.coverImage} 
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    
                    <div className="p-6 space-y-3">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-700 bg-primary-50 rounded-full">
                        {blog.category}
                      </span>
                      <h2 className="font-heading font-bold text-xl text-slate-900 leading-snug group-hover:text-primary-700 transition-colors">
                        <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                      </h2>
                      <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                        {blog.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center">
                        <User className="w-3.5 h-3.5 mr-1 text-primary-700" /> {blog.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-3.5 h-3.5 mr-1" /> {blog.date}
                      </span>
                    </div>
                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="font-bold text-primary-700 hover:underline flex items-center"
                    >
                      Read <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </article>
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
