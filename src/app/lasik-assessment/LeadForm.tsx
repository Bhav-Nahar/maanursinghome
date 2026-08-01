"use client";

import React, { useState } from "react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppFloat";

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const message = [
      "LASIK Assessment Request",
      `Name: ${f.get("name")}`,
      `Mobile: ${f.get("mobile")}`,
      `Age: ${f.get("age")}`,
      f.get("date") && `Preferred Date: ${f.get("date")}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`https://wa.me/919820072543?text=${encodeURIComponent(message)}`, "_blank");
    setSent(true);
  };

  return (
    <form className={`lead-form ${compact ? "compact" : ""}`} onSubmit={handleSubmit}>
      <p className="form-kicker">Book LASIK assessment</p>
      <h2>Book Your Eligibility Assessment</h2>
      <label>
        <span>Full name</span>
        <input placeholder="Your full name" autoComplete="name" required name="name" />
      </label>
      <div className="form-row">
        <label>
          <span>Mobile number</span>
          <input
            type="tel"
            placeholder="10-digit number"
            autoComplete="tel"
            pattern="[0-9 +()-]{10,}"
            required
            name="mobile"
          />
        </label>
        <label>
          <span>Age</span>
          <input type="number" min="18" max="90" placeholder="Age" required name="age" />
        </label>
      </div>
      {!compact && (
        <label>
          <span>Preferred appointment date</span>
          <input type="date" name="date" />
        </label>
      )}
      <button className="button primary full" type="submit">
        <WhatsAppIcon /> Request Appointment <span>→</span>
      </button>
      {sent ? (
        <p className="success">
          ✓ Request opened in WhatsApp. Send the message and our team will call you back.
        </p>
      ) : (
        <p className="privacy">🔒 Your details are used only to assist with your appointment.</p>
      )}
    </form>
  );
}
