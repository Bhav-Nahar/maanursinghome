"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TopBar } from "@/components/ui/TopBar";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { MapPin, Phone, Mail, ExternalLink, ChevronRight, Send, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "919820072543"; // WhatsApp number
    const whatsappMessage = `Hello \n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject}\n\n*Message:*\n${formData.message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, "_blank");
  };

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
              <span className="text-white">Contact</span>
            </div>
            
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Contact Us
            </h1>
            <p className="text-slate-300 text-base max-w-2xl leading-relaxed">
              Reach out to us for appointments, enquiries, or medical assistance. Our team is here to help you with care and compassion.
            </p>
          </div>
        </section>

        {/* INFO BOXES */}
        <section className="py-12 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Address */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 bg-primary-50 text-primary-700 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-slate-900 text-lg">Our Address</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Maa Nursing Home<br />
                  Himachal Building, S.V. Road,<br />
                  Opp Sundar Nagar, Malad (West),<br />
                  Mumbai 400064, Maharashtra
                </p>
              </div>

              {/* Phone */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 bg-primary-50 text-primary-700 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-slate-900 text-lg">Call Us</h3>
                <div className="text-slate-600 text-sm leading-relaxed space-y-1">
                  <p>
                    <a href="tel:+919820072543" className="hover:text-primary-700 font-semibold transition-colors">+91 9820072543</a> / <a href="tel:+918850118725" className="hover:text-primary-700 font-semibold transition-colors">+91 8850118725</a>
                  </p>
                  <p>
                    <a href="tel:02228754400" className="hover:text-primary-700 transition-colors">022 28754400</a> / <a href="tel:02228786107" className="hover:text-primary-700 transition-colors">28786107</a> / <a href="tel:02228752102" className="hover:text-primary-700 transition-colors">28752102</a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 bg-primary-50 text-primary-700 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-slate-900 text-lg">Email Us</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  <a href="mailto:netrajyotieyecarecentre@gmail.com" className="hover:text-primary-700 transition-colors font-medium">netrajyotieyecarecentre@gmail.com</a>
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* MAP & FORM SECTION */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Google Map */}
              <div className="h-[400px] lg:h-auto rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3768.4610461684497!2d72.845865!3d19.175055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDEwJzMwLjIiTiA3MsKwNTAnNDUuMSJF!5e0!3m2!1sen!2sin!4v1770958558718!5m2!1sen!2sin" 
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Contact Form (WhatsApp) */}
              <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
                <div className="mb-6">
                  <h3 className="font-heading text-2xl font-bold text-slate-900">Send an Inquiry</h3>
                  <p className="text-slate-500 text-sm mt-2">
                    Fill out the form below. We will receive your message on WhatsApp and get back to you promptly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Your Name *</label>
                      <input 
                        type="text" 
                        required 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm bg-white" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Your Email *</label>
                      <input 
                        type="email" 
                        required 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm bg-white" 
                        placeholder="john@example.com" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Subject *</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm bg-white" 
                      placeholder="e.g. Appointment Request" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Message *</label>
                    <textarea 
                      required 
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm bg-white resize-none" 
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full flex items-center justify-center px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-heading font-bold transition-colors shadow-sm"
                  >
                    Send Message via WhatsApp <Send className="w-4 h-4 ml-2" />
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
