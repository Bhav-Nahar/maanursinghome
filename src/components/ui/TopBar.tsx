import React from "react";
import { Phone, Clock, MapPin, ShieldCheck } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
        <div className="flex flex-wrap items-center space-x-4">
          <span className="inline-flex items-center text-emerald-400 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 mr-1" /> NABH & Quality Accredited Eye Care
          </span>
          <span className="hidden sm:inline-flex items-center text-slate-400">
            <MapPin className="w-3.5 h-3.5 mr-1 text-slate-400" /> S.V. Road, Opp. Sundar Nagar, Malad West, Mumbai
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="hidden md:inline-flex items-center text-slate-400">
            <Clock className="w-3.5 h-3.5 mr-1 text-slate-400" /> Mon - Fri: 9am-6pm | Sat: 9am-2pm
          </span>
          <a
            href="tel:+919820072543"
            className="inline-flex items-center font-semibold text-white hover:text-emerald-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 mr-1 text-emerald-400" /> +91 98200 72543
          </a>
        </div>
      </div>
    </div>
  );
}
