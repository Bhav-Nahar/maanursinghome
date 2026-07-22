import React from "react";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppFloat";

export function StickyMobileCTA() {
  const whatsappUrl = `https://wa.me/919820072543?text=${encodeURIComponent(
    "Hi, I would like to enquire about an appointment at Maa Nursing Home & NetraJyoti Eyecare Centre."
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-lg lg:hidden py-2 px-4">
      <div className="grid grid-cols-2 gap-2">
        <a
          href="tel:+919820072543"
          className="flex flex-col items-center justify-center py-2 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold hover:bg-slate-200 transition-colors"
        >
          <Phone className="w-4 h-4 text-primary-700 mb-0.5" />
          <span>Call Us</span>
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-semibold hover:bg-emerald-100 border border-emerald-200 transition-colors"
        >
          <WhatsAppIcon className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
