import type { Metadata } from "next";

const title = "Fobia de sânge și ace .. Ghid complet 2026";
const description =
  "De ce lesinezi la vederea sangelui, de ce relaxarea nu functioneaza si ce e tensiunea activa. 80-90% rata de succes. De Daniel Gagea, psihoterapeut.";
const url = "https://totuldespreanxietate.ro/tipuri/fobii-specifice/fobie-de-sange";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Daniel Gagea" }],
  alternates: { canonical: url },
  openGraph: {
    title: "Fobia de sange si ace .. Ghid complet 2026",
    description,
    url,
    siteName: "Totul despre Anxietate",
    type: "article",
    locale: "ro_RO",
    authors: ["Daniel Gagea"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fobia de sange si ace .. Ghid complet 2026",
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Fobia de sange si ace .. Ghid complet 2026",
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
          name: "Le\u0219inul la s\u00e2nge e periculos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le\u0219inul vasovagal este benign din punct de vedere medical. Dureaz\u0103 c\u00e2teva secunde p\u00e2n\u0103 la un minut. Pericolul real nu e le\u0219inul \u00een sine, ci contextul \u00een care se produce \u2014 dac\u0103 le\u0219ini \u00een picioare, po\u021bi c\u0103dea.",
          },
        },
        {
          "@type": "Question",
          name: "De ce am eu aceast\u0103 problem\u0103 dac\u0103 nimeni nu m-a traumatizat?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nu ai nevoie de o traum\u0103 direct\u0103. Cercet\u0103rile arat\u0103 trei c\u0103i: experien\u021b\u0103 negativ\u0103 direct\u0103, observarea altcuiva speriat, sau transmitere informa\u021bional\u0103. \u00cen plus, 61% dintre persoane au o component\u0103 genetic\u0103.",
          },
        },
        {
          "@type": "Question",
          name: "Pot sc\u0103pa de fobia de s\u00e2nge complet?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Da. Fobiile specifice au cel mai bun prognostic din toate tulbur\u0103rile de anxietate, cu 80-95% rat\u0103 de succes la tratament. Tensiunea activ\u0103 are 80-90% rat\u0103 de succes specific\u0103 pentru fobia de s\u00e2nge.",
          },
        },
        {
          "@type": "Question",
          name: "De ce mi se face r\u0103u \u0219i la filme cu s\u00e2nge, nu doar la s\u00e2nge real?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Creierul nu face o distinc\u021bie clar\u0103 \u00eentre s\u00e2nge real \u0219i fictiv c\u00e2nd activeaz\u0103 r\u0103spunsul vasovagal. Schema de amenin\u021bare se activeaz\u0103 la orice stimul asociat cu s\u00e2ngele.",
          },
        },
        {
          "@type": "Question",
          name: "Copilul meu le\u0219in\u0103 la s\u00e2nge. Ce pot face?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Copilul are 61% \u0219anse s\u0103 fi mo\u0219tenit predispozi\u021bia. Cele mai bune lucruri: trateaz\u0103-\u021bi propria fobie \u0219i modeleaz\u0103 un r\u0103spuns calm. Modul \u00een care reac\u021bionezi conteaz\u0103 enorm.",
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
        { "@type": "ListItem", position: 3, name: "Fobii specifice", item: "https://totuldespreanxietate.ro/tipuri/fobii-specifice" },
        { "@type": "ListItem", position: 4, name: "Fobia de s\u00e2nge", item: url },
      ],
    },
  ],
};

export default function FobieSangeLayout({
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
