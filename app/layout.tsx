import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Totul despre Anxietate",
  description:
    "Resursa #1 din România despre anxietate. Înțelege ce ți se întâmplă, de ce, și ce ai de făcut. De Daniel Gagea, psiholog clinician.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className={`${inter.variable} ${fraunces.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
