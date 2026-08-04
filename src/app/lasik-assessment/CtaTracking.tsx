"use client";

import { useEffect } from "react";

// ponytail: one delegated listener instead of onClick on every CTA — keeps
// page.tsx a server component and picks up new tel:/wa.me links for free.
export function CtaTracking() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement | null)?.closest?.("a");
      const href = link?.getAttribute("href") ?? "";
      const event = href.startsWith("tel:")
        ? "call_click"
        : /wa\.me|api\.whatsapp\.com/.test(href)
          ? "whatsapp_click"
          : null;
      if (!event) return;

      window.gtag?.("event", event, {
        link_text: link?.textContent?.trim().slice(0, 60),
        page: "lasik-assessment",
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
