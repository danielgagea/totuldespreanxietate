import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programare consultație anxietate | Daniel Gagea",
  description:
    "Programează o ședință online cu Daniel Gagea, psiholog clinician, psihoterapeut. Fără presiune, în ritmul tău. Primele cuvinte sunt cele mai grele.",
  authors: [{ name: "Daniel Gagea" }],
  alternates: {
    canonical: "https://totuldespreanxietate.ro/programare",
  },
  openGraph: {
    title: "Programare consultație anxietate | Daniel Gagea",
    description:
      "Programează o ședință online cu Daniel Gagea, psiholog clinician, psihoterapeut. Fără presiune, în ritmul tău.",
    type: "website",
    locale: "ro_RO",
    siteName: "Totul despre Anxietate",
  },
};

export default function ProgramareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
