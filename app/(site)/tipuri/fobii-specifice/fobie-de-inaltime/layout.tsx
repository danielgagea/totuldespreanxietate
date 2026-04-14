import type { Metadata } from "next";

const title = "Fobia de înălțimi (acrofobie) .. Ghid complet 2026";
const description =
  "De ce ameteala la inaltime e reala, ce e chemarea vidului si cum se trateaza fobia de inaltimi. 80-95% rata de succes. De Daniel Gagea, psihoterapeut.";
const url = "https://totuldespreanxietate.ro/tipuri/fobii-specifice/fobie-de-inaltime";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Daniel Gagea" }],
  alternates: { canonical: url },
  openGraph: {
    title: "Fobia de inaltimi (acrofobie) .. Ghid complet 2026",
    description,
    url,
    siteName: "Totul despre Anxietate",
    type: "article",
    locale: "ro_RO",
    authors: ["Daniel Gagea"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fobia de inaltimi (acrofobie) .. Ghid complet 2026",
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Fobia de inaltimi (acrofobie) .. Ghid complet 2026",
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
          name: "E normal s\u0103 \u021bi se fac\u0103 r\u0103u la \u00een\u0103l\u021bime?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Da. Un grad de disconfort la \u00een\u0103l\u021bime e normal \u0219i protectiv. Diferen\u021ba \u00eentre frica normal\u0103 \u0219i fobie e intensitatea, durata \u0219i evitarea. C\u00e2nd \u00een\u0103l\u021bimea \u00eencepe s\u0103-\u021bi controleze deciziile \u0219i s\u0103-\u021bi restr\u00e2ng\u0103 via\u021ba, nu mai e doar pruden\u021b\u0103.",
          },
        },
        {
          "@type": "Question",
          name: "G\u00e2ndul voi s\u0103ri \u00eenseamn\u0103 c\u0103 sunt suicidar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nu. Acest g\u00e2nd se nume\u0219te chemarea vidului (l'appel du vide) \u0219i apare la peste 50% din oameni, inclusiv la cei f\u0103r\u0103 nicio problem\u0103 psihic\u0103. E un semnal de protec\u021bie al creierului, nu o dorin\u021b\u0103 real\u0103.",
          },
        },
        {
          "@type": "Question",
          name: "Se agraveaz\u0103 cu v\u00e2rsta?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Poate. F\u0103r\u0103 tratament, fobia de \u00een\u0103l\u021bimi tinde s\u0103 se extind\u0103 \u0219i s\u0103 devin\u0103 mai restrictiv\u0103 cu timpul. Dar cu tratament adecvat, prognosticul e excelent la orice v\u00e2rst\u0103.",
          },
        },
        {
          "@type": "Question",
          name: "Vertijul e acela\u0219i lucru cu fobia de \u00een\u0103l\u021bimi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nu. Vertijul e o senza\u021bie de rotire sau instabilitate care poate avea cauze medicale (ureche intern\u0103, tensiune, etc.). Fobia de \u00een\u0103l\u021bimi produce ame\u021beal\u0103 prin conflict senzorial, nu prin disfunc\u021bie vestibular\u0103. Un consult ORL poate clarifica diferen\u021ba.",
          },
        },
        {
          "@type": "Question",
          name: "Pot sc\u0103pa complet de fobia de \u00een\u0103l\u021bimi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Da. Expunerea terapeutic\u0103 are o rat\u0103 de succes de 80-95% pentru fobiile specifice. Majoritatea pacien\u021bilor ajung s\u0103 func\u021bioneze normal \u00een situa\u021bii care \u00eenainte p\u0103reau imposibile.",
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
        { "@type": "ListItem", position: 4, name: "Fobia de \u00een\u0103l\u021bimi", item: url },
      ],
    },
  ],
};

export default function FobieDeInaltimeLayout({
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
