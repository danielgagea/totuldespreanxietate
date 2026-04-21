import type { Metadata } from "next";

const title = "Fobii specifice .. Ghid complet 2026";
const description =
  "Ce sunt fobiile specifice, de ce apar și cum se tratează. 80-95% rată de succes la tratament. De Daniel Gagea, psiholog clinician, psihoterapeut.";
const url = "https://totuldespreanxietate.ro/tipuri/fobii-specifice";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Daniel Gagea" }],
  alternates: { canonical: url },
  openGraph: {
    title: "Fobii specifice .. Ghid complet 2026",
    description,
    url,
    siteName: "Totul despre Anxietate",
    type: "article",
    locale: "ro_RO",
    authors: ["Daniel Gagea"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fobii specifice .. Ghid complet 2026",
    description,
  },
};

export default function FobiiSpecificeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
