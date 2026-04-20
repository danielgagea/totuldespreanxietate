import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/CookieConsent";
import { AnalyticsLoader } from "@/components/AnalyticsLoader";
import { Footer } from "@/components/Footer";

const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
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
      <body className={`${fraunces.variable} antialiased`}>
        {children}
        <Footer />
        <CookieConsent />
        <AnalyticsLoader />
      </body>
    </html>
  );
}
