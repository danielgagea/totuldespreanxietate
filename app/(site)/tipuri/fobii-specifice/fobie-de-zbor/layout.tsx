import type { Metadata } from "next";

const title = "Fobia de zbor .. Ghid complet 2026 | Totul despre Anxietate";
const description =
  "De ce iti e frica sa zbori, cele 5 frici combinate si cum se trateaza fobia de zbor. 80-95% rata de succes. De Daniel Gagea, psiholog clinician, psihoterapeut.";
const url = "https://totuldespreanxietate.ro/tipuri/fobii-specifice/fobie-de-zbor";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Daniel Gagea" }],
  alternates: { canonical: url },
  openGraph: {
    title: "Fobia de zbor .. Ghid complet 2026",
    description,
    url,
    siteName: "Totul despre Anxietate",
    type: "article",
    locale: "ro_RO",
    authors: ["Daniel Gagea"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fobia de zbor .. Ghid complet 2026",
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Fobia de zbor .. Ghid complet 2026",
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
          name: "Pot muri de fric\u0103 \u00een avion?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nu. Senza\u021biile nu sunt periculoase medical. Corpul nu poate sus\u021bine acel nivel de activare mai mult de 20 de minute.",
          },
        },
        {
          "@type": "Question",
          name: "De ce mi-e fric\u0103 de avion dar nu de ma\u0219in\u0103?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pentru c\u0103 frica e despre percep\u021bia controlului, nu probabilitatea real\u0103. \u00cen ma\u0219in\u0103 ai iluzia controlului. \u00cen avion, nu.",
          },
        },
        {
          "@type": "Question",
          name: "Am zburat de 100 de ori cu alcool \u0219i pastile. De ce nu mi-a trecut?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Alcoolul \u0219i pastilele sunt comportamente de siguran\u021b\u0103. Creierul nu a \u00eenv\u0103\u021bat c\u0103 po\u021bi zbura f\u0103r\u0103 ele.",
          },
        },
        {
          "@type": "Question",
          name: "Fobia de zbor se mo\u0219tene\u0219te?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Predispozi\u021bia da, dar vulnerabilitatea nu e destin. Se poate trata indiferent de cum a ap\u0103rut.",
          },
        },
        {
          "@type": "Question",
          name: "Trebuie neap\u0103rat s\u0103 zbor ca s\u0103 scap de fobie?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nu de la \u00eenceput. Tratamentul \u00eencepe cu expunere imaginal\u0103, vizite la aeroport, simulatoare. Zborul real vine treptat.",
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
        { "@type": "ListItem", position: 4, name: "Fobia de zbor", item: url },
      ],
    },
  ],
};

export default function FobieDeZborLayout({
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
