"use client";

import React, { useState } from "react";
import { X, CalendarCheck, Video, MessagesSquare, ChevronRight } from "lucide-react";

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.001 3C9.096 3 3.5 8.596 3.5 15.5c0 2.42.69 4.68 1.885 6.594L3 29l7.106-2.347A12.44 12.44 0 0 0 16 28.5C22.905 28.5 28.5 22.904 28.5 16S22.905 3 16.001 3Zm0 22.7c-1.98 0-3.83-.55-5.41-1.51l-.388-.232-4.222 1.394 1.395-4.235-.253-.402A9.68 9.68 0 0 1 5.8 15.5c0-5.63 4.572-10.2 10.2-10.2 5.63 0 10.2 4.57 10.2 10.2 0 5.63-4.57 10.2-10.199 10.2Zm5.596-7.646c-.306-.153-1.81-.893-2.09-.994-.28-.102-.484-.153-.688.153-.204.306-.79.994-.968 1.198-.178.204-.357.23-.663.077-.306-.153-1.293-.477-2.463-1.52-.91-.812-1.525-1.815-1.703-2.121-.178-.306-.019-.472.134-.624.137-.137.306-.357.459-.535.153-.178.204-.306.306-.51.102-.204.051-.383-.026-.535-.077-.153-.688-1.658-.943-2.27-.248-.596-.5-.516-.688-.526l-.586-.01c-.204 0-.535.077-.815.383-.28.306-1.068 1.043-1.068 2.545s1.094 2.953 1.246 3.157c.153.204 2.152 3.285 5.213 4.606.728.314 1.296.502 1.739.642.73.232 1.394.199 1.92.121.586-.087 1.81-.74 2.065-1.454.255-.714.255-1.326.178-1.454-.076-.128-.28-.204-.586-.357Z" />
    </svg>
  );
}

const ACTIONS = [
  {
    icon: CalendarCheck,
    title: "Book on WhatsApp",
    subtitle: "Schedule your hospital visit",
    text: "Hi, I would like to book an appointment at Maa Nursing Home.",
  },
  {
    icon: Video,
    title: "Video Consultation",
    subtitle: "Consult doctor online from home",
    text: "Hi, I would like to book a Video Consultation.",
  },
  {
    icon: MessagesSquare,
    title: "Chat on WhatsApp",
    subtitle: "General inquiry & support",
    text: "Hi, I have a general query about your treatments.",
  },
];

export function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const [badge, setBadge] = useState(true);

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {open && (
        <div className="mb-3 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-[fadeInUp_0.2s_ease-out]">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 px-4 py-3.5 flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center shrink-0 ring-2 ring-white/30">
              <WhatsAppIcon className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h5 className="text-white font-heading font-bold text-sm">Maa Nursing Home</h5>
              <span className="text-emerald-50 text-xs flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 mr-1.5" />
                Usually replies in a few minutes
              </span>
            </div>
            <button
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="p-3 space-y-2 bg-[#e5ddd5]/30">
            <p className="bg-white text-slate-700 text-xs rounded-xl rounded-tl-none px-3 py-2.5 shadow-sm">
              Namaste 🙏 Welcome to Maa Nursing Home & NetraJyoti Eyecare Centre. How can we assist you today?
            </p>
            {ACTIONS.map((action) => (
              <a
                key={action.title}
                href={`https://wa.me/919820072543?text=${encodeURIComponent(action.text)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-sm transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                  <action.icon className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-slate-900">{action.title}</p>
                  <p className="text-[11px] text-slate-500">{action.subtitle}</p>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            ))}
          </div>
        </div>
      )}

      <button
        aria-label="WhatsApp Support"
        onClick={() => {
          setOpen((v) => !v);
          setBadge(false);
        }}
        className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 hover:scale-105 shadow-xl shadow-emerald-900/20 flex items-center justify-center transition-all"
      >
        {!open && <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />}
        {open ? (
          <X className="w-6 h-6 text-white relative" />
        ) : (
          <WhatsAppIcon className="w-7 h-7 text-white relative" />
        )}
        {badge && !open && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">
            1
          </span>
        )}
      </button>
    </div>
  );
}
