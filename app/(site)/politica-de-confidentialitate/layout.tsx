import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de confidențialitate",
  description:
    "Politica de confidențialitate a site-ului totuldespreanxietate.ro. Cum colectăm, folosim și protejăm datele tale personale.",
  alternates: {
    canonical: "https://totuldespreanxietate.ro/politica-de-confidentialitate",
  },
  openGraph: {
    title: "Politica de confidențialitate",
    description:
      "Cum colectăm, folosim și protejăm datele tale personale pe totuldespreanxietate.ro.",
    type: "website",
    locale: "ro_RO",
    siteName: "Totul despre Anxietate",
  },
};

export default function PoliticaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
