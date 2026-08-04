import type { Metadata } from "next";
import Script from "next/script";
import { Manrope, Inter } from "next/font/google";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Maa Nursing Home & NetraJyoti Eyecare Centre | Super-Speciality Hospital in Malad, Mumbai",
    template: "%s | Maa Nursing Home & NetraJyoti Eyecare Centre",
  },
  description:
    "Leading super-speciality hospital and eye care centre in Malad West, Mumbai since 2002. Offering LASIK, Cataract, IVF, Gynecology, and Laparoscopy by experienced specialists Dr. Jugal Shah and team.",
  metadataBase: new URL("https://maanursinghome.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Maa Nursing Home & NetraJyoti Eyecare Centre",
    description:
      "Super-speciality eye care, IVF, and surgical facility in Malad West, Mumbai. Trust, expertise, and personalized medical care since 2002.",
    url: "https://maanursinghome.in",
    siteName: "Maa Nursing Home & NetraJyoti Eyecare Centre",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hospital",
              name: "Maa Nursing Home & NetraJyoti Eyecare Centre",
              image: "https://maanursinghome.in/assets/img/logo.png",
              "@id": "https://maanursinghome.in",
              url: "https://maanursinghome.in",
              telephone: "+919820072543",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Himachal Building, S.V. Road, Opposite Sundar Nagar",
                addressLocality: "Malad West",
                addressRegion: "Mumbai",
                postalCode: "400064",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 19.186,
                longitude: 72.848,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "14:00",
                },
              ],
              sameAs: [
                "https://www.practo.com/mumbai/clinic/maa-nursing-home-netra-jyoti-eyecare-centre-malad-west",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 flex flex-col font-body text-slate-900 antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-primary-700"
        >
          Skip to main content
        </a>
        <div id="main-content" className="flex-1 flex flex-col">
          {children}
        </div>
        <WhatsAppFloat />
        {/* GA4 — conversions are fired as gtag events from the forms. */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XLBLF66Q81"
          strategy="afterInteractive"
        />
        {/* Google Ads tag — kept as its own <script src> so Google's install checker detects it. */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18328226456"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XLBLF66Q81');
gtag('config', 'AW-18328226456');`}
        </Script>
      </body>
    </html>
  );
}
