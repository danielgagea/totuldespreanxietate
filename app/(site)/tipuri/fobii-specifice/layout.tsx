import type { Metadata } from "next";

const title = "Fobii specifice .. Ghid complet 2026 | Totul despre Anxietate";
const description =
  "Ce sunt fobiile specifice, de ce apar, cum funcționează și cum se tratează. Ghid complet cu 80-95% rată de succes la tratament. De Daniel Gagea, psiholog clinician, psihoterapeut.";
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Fobii specifice — Ghid complet 2026",
      description,
      author: {
        "@type": "Person",
        name: "Daniel Gagea",
        jobTitle: "Psiholog clinician, psihoterapeut",
        url: "https://totuldespreanxietate.ro",
      },
      publisher: {
        "@type": "Organization",
        name: "Totul despre Anxietate",
        url: "https://totuldespreanxietate.ro",
      },
      datePublished: "2026-04-03",
      dateModified: "2026-04-03",
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Se vindec\u0103 complet o fobie specific\u0103?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "\u00cen majoritatea cazurilor, da. 80-95% dintre persoanele care urmeaz\u0103 tratament prin expunere raporteaz\u0103 \u00eembun\u0103t\u0103\u021biri semnificative. Tratamentul dureaz\u0103 \u00eentre 1 \u0219i 12 \u0219edin\u021be.",
          },
        },
        {
          "@type": "Question",
          name: "C\u00e2t dureaz\u0103 tratamentul pentru fobii?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "\u00centre 1 \u0219i 12 \u0219edin\u021be. \u00cen modelul Ost, o singur\u0103 \u0219edin\u021b\u0103 de 2-3 ore poate fi suficient\u0103. Fobiile au cel mai bun prognostic din toate tulbur\u0103rile de anxietate.",
          },
        },
        {
          "@type": "Question",
          name: "Trebuie s\u0103 iau medicamente pentru fobie?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nu ca prim\u0103 linie. Fobia specific\u0103 este una dintre pu\u021binele tulbur\u0103ri pentru care medica\u021bia NU este recomandat\u0103 ca prim tratament. Expunerea terapeutic\u0103 are cele mai puternice dovezi.",
          },
        },
        {
          "@type": "Question",
          name: "De ce am fobie dac\u0103 nu am avut o experien\u021b\u0103 traumatic\u0103?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Exist\u0103 trei c\u0103i: experien\u021b\u0103 direct\u0103, \u00eenv\u0103\u021bare observa\u021bional\u0103 (ai v\u0103zut pe cineva speriat) \u0219i transmitere informa\u021bional\u0103 (ai auzit c\u0103 e periculos). \u00cen plus, unele frici sunt cablate biologic.",
          },
        },
        {
          "@type": "Question",
          name: "Pot s\u0103 mor din cauza fobiei?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nu. Senza\u021biile pe care le sim\u021bi sunt produse de r\u0103spunsul fight-or-flight. Sunt menite s\u0103 te protejeze. Corpul nu poate sus\u021bine acel nivel de activare mai mult de c\u00e2teva minute.",
          },
        },
      ],
    },
    {
      "@type": "Person",
      name: "Daniel Gagea",
      jobTitle: "Psiholog clinician, psihoterapeut",
      url: "https://totuldespreanxietate.ro",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Acas\u0103", item: "https://totuldespreanxietate.ro" },
        { "@type": "ListItem", position: 2, name: "Tipuri de anxietate", item: "https://totuldespreanxietate.ro/tipuri" },
        { "@type": "ListItem", position: 3, name: "Fobii specifice", item: url },
      ],
    },
  ],
};

export default function FobiiSpecificeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
