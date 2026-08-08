import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { TopBar } from "@/components/ui/TopBar";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { getAllBlogs } from "@/lib/sanity";
import { Calendar, User, ArrowLeft } from "lucide-react";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  return (await getAllBlogs()).map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = (await getAllBlogs()).find((b) => b.slug === slug);
  if (!blog) return {};

  return {
    title: `${blog.seoTitle} | Maa Nursing Home`,
    description: blog.seoDescription,
    keywords: blog.seoKeywords || undefined,
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = (await getAllBlogs()).find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-body">
      <TopBar />
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="bg-slate-900 text-white py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <Link
              href="/blogs"
              className="inline-flex items-center text-xs font-semibold text-emerald-400 hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5 mr-1" /> Back to Articles
            </Link>
            <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
              {blog.category}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              {blog.title}
            </h1>
            <div className="flex items-center space-x-4 text-xs text-slate-300 pt-2">
              <span className="flex items-center">
                <User className="w-3.5 h-3.5 mr-1 text-emerald-400" /> {blog.author}
              </span>
              <span className="flex items-center">
                <Calendar className="w-3.5 h-3.5 mr-1" /> {blog.date}
              </span>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <div
                className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4 font-body"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
