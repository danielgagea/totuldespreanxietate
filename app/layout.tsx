import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Fraunces, Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
});

const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600"],
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WDYJ09S9F0"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WDYJ09S9F0');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${fraunces.variable} ${playfair.variable} ${sourceSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
