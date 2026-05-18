import type { Metadata } from "next";
import { Inter, Merriweather, Bebas_Neue, Work_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/CookieConsent";
import { AnalyticsLoader } from "@/components/AnalyticsLoader";
import { Footer } from "@/components/Footer";

// Fontul vechi (Fraunces) păstrat pentru migrare graduală
const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
});

// Setup fonturi sincronizat cu platforma-antreprenori (danielgagea.ro)
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-merriweather",
  display: "swap",
  preload: false,
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
  preload: false,
});

const workSans = Work_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-work-sans",
  display: "swap",
});


export const metadata: Metadata = {
  title: {
    default: "Totul despre Anxietate | Daniel Gagea, psiholog clinician",
    template: "%s | Totul despre Anxietate",
  },
  description:
    "Resursa #1 din România despre anxietate. Înțelege ce ți se întâmplă, de ce, și ce ai de făcut. De Daniel Gagea, psiholog clinician, psihoterapeut.",
  metadataBase: new URL("https://totuldespreanxietate.ro"),
  openGraph: {
    siteName: "Totul despre Anxietate",
    locale: "ro_RO",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body
        className={`${inter.variable} ${merriweather.variable} ${bebas.variable} ${workSans.variable} ${fraunces.variable} antialiased`}
      >
        {children}
        <Footer />
        <CookieConsent />
        <AnalyticsLoader />
      </body>
    </html>
  );
}
