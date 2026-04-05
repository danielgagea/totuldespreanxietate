import type { Metadata } from "next";

const title = "TOC (Tulburarea Obsesiv-Compulsiva) .. Ghid complet 2026 | Totul despre Anxietate";
const description =
  "Ce este TOC-ul, de ce apar gandurile obsesive, de ce ritualurile nu functioneaza si cum se trateaza. Ghid complet cu 60-80% rata de succes. De Daniel Gagea, psiholog clinician, psihoterapeut.";
const url = "https://totuldespreanxietate.ro/tipuri/toc";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Daniel Gagea" }],
  alternates: { canonical: url },
  openGraph: {
    title: "TOC (Tulburarea Obsesiv-Compulsiva) .. Ghid complet 2026",
    description,
    url,
    siteName: "Totul despre Anxietate",
    type: "article",
    locale: "ro_RO",
    authors: ["Daniel Gagea"],
  },
  twitter: {
    card: "summary_large_image",
    title: "TOC (Tulburarea Obsesiv-Compulsiva) .. Ghid complet 2026",
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "TOC (Tulburarea Obsesiv-Compulsiv\u0103) .. Ghid complet 2026",
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
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "G\u00e2ndurile mele violente sau sexuale \u00eenseamn\u0103 c\u0103 sunt o persoan\u0103 rea?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nu. Peste 90% din popula\u021bie are g\u00e2nduri intruzive identice. Tocmai faptul c\u0103 g\u00e2ndul te sperie este dovada c\u0103 nu \u00eel dore\u0219ti.",
          },
        },
        {
          "@type": "Question",
          name: "Pot sc\u0103pa complet de TOC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Multe persoane ajung la un nivel \u00een care TOC-ul nu le mai afecteaz\u0103 func\u021bionarea. Ratele de succes ale ERP sunt de 60-80%.",
          },
        },
        {
          "@type": "Question",
          name: "De ce TOC-ul meu se schimb\u0103? Acum am obsesii diferite de cele de acum un an.",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nucleul TOC-ului nu e con\u021binutul obsesiei, ci intoleran\u021ba la incertitudine. Con\u021binutul e doar vehiculul. Tratamentul eficient vizeaz\u0103 nucleul.",
          },
        },
        {
          "@type": "Question",
          name: "Familia mea ar trebui s\u0103-mi ofere reasigurare c\u00e2nd cer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nu. Reasigurarea func\u021bioneaz\u0103 ca un ritual. Cel mai util lucru: s\u0103 spui cu bl\u00e2nde\u021be c\u0103 nu vei r\u0103spunde la \u00eentrebare.",
          },
        },
        {
          "@type": "Question",
          name: "E TOC dac\u0103 sunt doar foarte ordonat \u0219i meticulos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Diferen\u021ba e \u00een func\u021bie \u0219i distres. Dac\u0103 nu aranjezi \u0219i e\u0219ti ok, nu e TOC. Dac\u0103 anxietatea cre\u0219te insuportabil, merit\u0103 investigat.",
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
        { "@type": "ListItem", position: 3, name: "TOC", item: url },
      ],
    },
  ],
};

export default function TOCLayout({
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
