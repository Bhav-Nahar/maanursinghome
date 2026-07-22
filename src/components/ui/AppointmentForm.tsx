"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, ShieldCheck } from "lucide-react";

export function AppointmentForm({ title = "Book Your Appointment / Assessment" }: { title?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    department: "Eye Care (LASIK / Cataract)",
    preferredDate: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const message = [
      "New Appointment Request",
      `Name: ${formData.name}`,
      `Mobile: ${formData.phone}`,
      formData.age && `Age: ${formData.age}`,
      `Department: ${formData.department}`,
      formData.preferredDate && `Preferred Date: ${formData.preferredDate}`,
      formData.message && `Message: ${formData.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/919820072543?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div id="book" className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
      <div className="mb-6">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-700 bg-primary-50 rounded-full mb-2">
          Direct Hospital Booking
        </span>
        <h3 className="font-heading text-xl md:text-2xl font-bold text-slate-900">{title}</h3>
        <p className="text-slate-500 text-sm mt-1">
          Fill out the details below. Our care team will call to confirm your preferred OPD slot.
        </p>
      </div>

      {submitted ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-3">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
          <h4 className="font-heading font-bold text-emerald-900 text-lg">Appointment Request Received!</h4>
          <p className="text-sm text-emerald-800">
            Thank you, <span className="font-semibold">{formData.name}</span>. Dr. Jugal Shah’s OPD team will contact you at <span className="font-semibold">{formData.phone}</span> shortly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 text-xs font-semibold text-emerald-700 underline hover:text-emerald-900"
          >
            Book another appointment
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm text-slate-900"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                pattern="[0-9]{10}"
                placeholder="10-digit mobile number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm text-slate-900"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                Age
              </label>
              <input
                type="number"
                min="1"
                max="100"
                placeholder="Patient Age"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm text-slate-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
              Select Specialty / Department
            </label>
            <select
              value={formData.department}
              onChange={(e) => setFormData({ ...formData, department: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm text-slate-900 bg-white"
            >
              <option value="Eye Care (LASIK / Cataract)">Eye Care (LASIK / Cataract / Glaucoma)</option>
              <option value="IVF & Fertility">IVF & Infertility Treatment</option>
              <option value="Gynecology & Obstetrics">Gynecology & Pregnancy Care</option>
              <option value="Laparoscopic Surgery">Advanced Laparoscopic Surgery</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
              Preferred Consultation Date
            </label>
            <input
              type="date"
              value={formData.preferredDate}
              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm text-slate-900 bg-white"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-heading font-bold text-white bg-primary-700 hover:bg-primary-900 shadow-md transition-all disabled:opacity-50 text-base"
          >
            {loading ? (
              "Submitting Request..."
            ) : (
              <>
                Confirm Appointment Request <Send className="w-4 h-4 ml-2" />
              </>
            )}
          </button>

          <p className="text-xs text-slate-500 text-center flex items-center justify-center mt-3">
            <ShieldCheck className="w-4 h-4 text-emerald-600 mr-1" /> Your personal health data is strictly private and secure.
          </p>
        </form>
      )}
    </div>
  );
}
