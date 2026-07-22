import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer id="footer" className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: About & Contact */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <span className="font-heading font-bold text-white text-lg">
                Maa Nursing Home & NetraJyoti Eyecare Centre
              </span>
            </Link>
            <div className="space-y-3 text-xs text-slate-400 leading-relaxed">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Himachal Building S.V Road, Opp Sundar Nagar, Malad West, Mumbai 400064</span>
              </div>
              <p className="text-slate-400 leading-normal">
                Serving patients looking for the <strong>Best eye surgeon, Ophthalmologist, Cataract surgeon, and LASIK surgeon in Malad, Kandivali, Borivali, Goregaon, Andheri, Parle, and Santacruz</strong>.
              </p>
              <div className="space-y-1 text-slate-300">
                <p className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span><strong>Phone:</strong> <a href="tel:+919820072543" className="hover:text-white transition-colors">9820072543</a> / <a href="tel:+918850118725" className="hover:text-white transition-colors">8850118725</a></span>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span><strong>Email:</strong> <a href="mailto:jugalshah@hotmail.com" className="hover:text-white transition-colors">jugalshah@hotmail.com</a></span>
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-emerald-600 hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/maa_nursing_home_/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-emerald-600 hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-emerald-600 hover:text-white transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white text-base">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link></li>
              <li><Link href="/appointment" className="hover:text-emerald-400 transition-colors">Book Appointment</Link></li>
              <li><Link href="/insurance-companies" className="hover:text-emerald-400 transition-colors">Insurance Panel</Link></li>
              <li><Link href="/blogs" className="hover:text-emerald-400 transition-colors">Blogs</Link></li>
            </ul>
          </div>

          {/* Col 3: Eye Care Services */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white text-base">Eye Care Services</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/treatments/cataract" className="hover:text-emerald-400 transition-colors">Cataract</Link></li>
              <li><Link href="/treatments/glaucoma" className="hover:text-emerald-400 transition-colors">Glaucoma</Link></li>
              <li><Link href="/treatments/retina" className="hover:text-emerald-400 transition-colors">Retina</Link></li>
              <li><Link href="/treatments/paediatric-eye" className="hover:text-emerald-400 transition-colors">Paediatric Eye Care</Link></li>
              <li><Link href="/treatments/lasik" className="hover:text-emerald-400 transition-colors">LASIK Clinic</Link></li>
            </ul>
          </div>

          {/* Col 4: Gynaecology & Fertility */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white text-base">Gynaecology & Fertility</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/treatments/pcod" className="hover:text-emerald-400 transition-colors">PCOD / PCOS</Link></li>
              <li><Link href="/treatments/amenorrhea" className="hover:text-emerald-400 transition-colors">Amenorrhea</Link></li>
              <li><Link href="/treatments/endometriosis" className="hover:text-emerald-400 transition-colors">Endometriosis</Link></li>
              <li><Link href="/treatments/obstetrics" className="hover:text-emerald-400 transition-colors">Maternity Care</Link></li>
              <li><Link href="/treatments/iui" className="hover:text-emerald-400 transition-colors">IUI Treatment</Link></li>
              <li><Link href="/treatments/ivf" className="hover:text-emerald-400 transition-colors">IVF & ICSI</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4 text-center md:text-left">
          <p>© {new Date().getFullYear()} <strong>Maa Nursing Home & NetraJyoti Eyecare Centre</strong> — All Rights Reserved</p>
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
