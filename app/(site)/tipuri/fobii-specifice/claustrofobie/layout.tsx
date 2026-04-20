import type { Metadata } from "next";

const title = "Claustrofobie .. Ghid complet 2026";
const description =
  "Ce este claustrofobia, de ce simti ca ramai fara aer, cum functioneaza cercul vicios si ce tratament are 80-95% rata de succes. De Daniel Gagea, psiholog clinician, psihoterapeut.";
const url = "https://totuldespreanxietate.ro/tipuri/fobii-specifice/claustrofobie";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Daniel Gagea" }],
  alternates: { canonical: url },
  openGraph: {
    title: "Claustrofobie .. Ghid complet 2026",
    description,
    url,
    siteName: "Totul despre Anxietate",
    type: "article",
    locale: "ro_RO",
    authors: ["Daniel Gagea"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claustrofobie .. Ghid complet 2026",
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Claustrofobie .. Ghid complet 2026",
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
      datePublished: "2026-04-04",
      dateModified: "2026-04-04",
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Pot face RMN cu claustrofobie?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Da. Spune-i echipei medicale c\u0103 ai claustrofobie. Cere un aparat de RMN deschis dac\u0103 exist\u0103. Aparatul are ventila\u021bie activ\u0103 \u0219i comunicare permanent\u0103 cu operatorul. Nu e\u0219ti singur acolo.",
          },
        },
        {
          "@type": "Question",
          name: "Claustrofobia se agraveaz\u0103 cu v\u00e2rsta?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nu e o regul\u0103. Dar f\u0103r\u0103 tratament, evitarea tinde s\u0103 se extind\u0103 \u00een timp. Cu c\u00e2t evi\u021bi mai mult, cu at\u00e2t teritoriul sigur se mic\u0219oreaz\u0103. Cu tratament, tendin\u021ba se inverseaz\u0103.",
          },
        },
        {
          "@type": "Question",
          name: "E periculos s\u0103 r\u0103m\u00e2i blocat \u00een lift?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Din punct de vedere al siguran\u021bei fizice, nu. Lifturile moderne au multiple sisteme de siguran\u021b\u0103, ventila\u021bie pasiv\u0103 \u0219i buton de alarm\u0103. Blocajele se rezolv\u0103 de obicei \u00een 15-30 de minute.",
          },
        },
        {
          "@type": "Question",
          name: "De ce mi se face r\u0103u \u00een metrou dar nu \u00een ma\u0219in\u0103?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "\u00cen ma\u0219in\u0103 ai control: po\u021bi opri, deschide geamul, ie\u0219i. \u00cen metrou nu ai niciuna din aceste op\u021biuni. Dac\u0103 frica ta dominant\u0103 e cea de restric\u021bie, metroul o activeaz\u0103 puternic iar ma\u0219ina nu.",
          },
        },
        {
          "@type": "Question",
          name: "De ce s-a agravat claustrofobia mea \u00een timp, de\u0219i nu s-a \u00eent\u00e2mplat nimic?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tocmai pentru c\u0103 nu s-a \u00eent\u00e2mplat nimic. Fiecare act de evitare confirm\u0103 creierului t\u0103u c\u0103 pericolul era real. Lista lucrurilor evitate se lunge\u0219te f\u0103r\u0103 s\u0103 observi.",
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
        { "@type": "ListItem", position: 4, name: "Claustrofobie", item: url },
      ],
    },
  ],
};

export default function ClaustrofobieLayout({
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
