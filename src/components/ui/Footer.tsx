import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-primary-700 text-white flex items-center justify-center font-heading font-bold text-lg">
                M
              </div>
              <span className="font-heading font-bold text-white text-lg">
                Maa Nursing Home
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Established in 2002, Maa Nursing Home & NetraJyoti Eyecare Centre is a premier medical facility in Malad West, Mumbai, specializing in Eye Surgery, IVF, Gynecology, and Advanced Laparoscopy.
            </p>
            <div className="text-xs text-slate-400 pt-2">
              <span className="font-semibold text-slate-300">Reg No:</span> MUM/W-1234/2002 | NABH Accredited
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white text-base">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  About Dr. Jugal Shah & Team
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-emerald-400 transition-colors">
                  Our Specialists
                </Link>
              </li>
              <li>
                <Link href="/treatments/lasik" className="hover:text-emerald-400 font-medium text-emerald-400 transition-colors">
                  LASIK Eligibility Assessment
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-emerald-400 transition-colors">
                  Health Blogs & Articles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Departments & Treatments */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white text-base">Medical Specialties</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/departments/eye-care" className="hover:text-emerald-400 transition-colors">
                  Cataract Surgery (MICS)
                </Link>
              </li>
              <li>
                <Link href="/treatments/lasik" className="hover:text-emerald-400 transition-colors">
                  Contoura & Bladeless LASIK
                </Link>
              </li>
              <li>
                <Link href="/departments/ivf" className="hover:text-emerald-400 transition-colors">
                  IVF & ICSI Fertility Treatment
                </Link>
              </li>
              <li>
                <Link href="/departments/gynecology" className="hover:text-emerald-400 transition-colors">
                  Gynecology & Normal Delivery
                </Link>
              </li>
              <li>
                <Link href="/departments/laparoscopy" className="hover:text-emerald-400 transition-colors">
                  Laparoscopic Hysterectomy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white text-base">Visit Hospital</h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  Himachal Building, S.V. Road, Opposite Sundar Nagar, Malad West, Mumbai 400064
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+919820072543" className="hover:text-white transition-colors">
                  +91 98200 72543
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  Mon - Fri: 9:00 AM - 6:00 PM<br />
                  Sat: 9:00 AM - 2:00 PM
                </span>
              </div>
              <a
                href="https://maps.google.com/?q=Maa+Nursing+Home+Malad+West"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-semibold text-emerald-400 hover:underline pt-1"
              >
                Open in Google Maps <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Maa Nursing Home & NetraJyoti Eyecare Centre. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/terms" className="hover:text-slate-400">
              Privacy Policy & Terms
            </Link>
            <Link href="/sitemap.xml" className="hover:text-slate-400">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
