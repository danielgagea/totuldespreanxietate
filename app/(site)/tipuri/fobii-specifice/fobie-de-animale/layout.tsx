import type { Metadata } from "next";

const title = "Fobia de animale .. Ghid complet 2026";
const description =
  "De ce te temi de caini, paianjeni sau insecte, de ce corpul nu asculta de ratiune si cum se trateaza. 80-95% rata de succes. De Daniel Gagea, psiholog clinician, psihoterapeut.";
const url = "https://totuldespreanxietate.ro/tipuri/fobii-specifice/fobie-de-animale";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Daniel Gagea" }],
  alternates: { canonical: url },
  openGraph: {
    title: "Fobia de animale .. Ghid complet 2026",
    description,
    url,
    siteName: "Totul despre Anxietate",
    type: "article",
    locale: "ro_RO",
    authors: ["Daniel Gagea"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fobia de animale .. Ghid complet 2026",
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Fobia de animale .. Ghid complet 2026",
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
          name: "Fobia de animale se mo\u0219tene\u0219te?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Exist\u0103 o predispozi\u021bie genetic\u0103. Dac\u0103 un p\u0103rinte are o fobie de animale, copilul are \u0219anse mai mari s\u0103 dezvolte aceea\u0219i fobie. Dar nu fobia \u00een sine se mo\u0219tene\u0219te, ci sensibilitatea la dezgust \u0219i predispozi\u021bia de a \u00eenv\u0103\u021ba rapid frica fa\u021b\u0103 de anumite animale.",
          },
        },
        {
          "@type": "Question",
          name: "Copilul meu se teme de c\u00e2ini. Ce pot face?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nu for\u021ba\u021bi contactul cu animalul. Nu-i spune\u021bi \u201enu e nimic\u201d. Cel mai important lucru pe care \u00eel pute\u021bi face e s\u0103 v\u0103 gestiona\u021bi propria reac\u021bie. Copiii \u00eenv\u0103\u021b\u0103 frica observ\u00e2ndu-\u0219i p\u0103rin\u021bii. Dac\u0103 voi sunte\u021bi calmi \u00een prezen\u021ba c\u00e2inilor, copilul preia acest model.",
          },
        },
        {
          "@type": "Question",
          name: "Se poate vindeca complet o fobie de animale?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Da. Fobiile de animale au cel mai bun prognostic din toate fobiile specifice. Cu expunere gradual\u0103, 80-95% dintre persoane ob\u021bin \u00eembun\u0103t\u0103\u021biri semnificative. Multe studii arat\u0103 c\u0103 o singur\u0103 sesiune de 2-3 ore poate fi suficient\u0103.",
          },
        },
        {
          "@type": "Question",
          name: "De ce am dezgust, nu fric\u0103?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pentru multe animale, mai ales insecte, p\u0103ianjeni \u0219i \u0219erpi, dezgustul e emo\u021bia dominant\u0103, nu frica. Dezgustul a evoluat ca mecanism de protec\u021bie \u00eempotriva contamin\u0103rii \u0219i bolilor. E un r\u0103spuns mai vechi \u0219i mai profund dec\u00e2t frica.",
          },
        },
        {
          "@type": "Question",
          name: "Am fobie de animale, dar nu am fost niciodat\u0103 mu\u0219cat. De ce?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nu ai nevoie de o experien\u021b\u0103 traumatic\u0103 direct\u0103. Fobiile de animale se pot dezvolta prin trei c\u0103i: experien\u021b\u0103 negativ\u0103 direct\u0103, observare (ai v\u0103zut pe cineva speriat) sau transmitere informa\u021bional\u0103 (ai auzit c\u0103 animalul e periculos). \u00cen plus, creierul uman e predispus genetic s\u0103 \u00eenve\u021be rapid frica fa\u021b\u0103 de anumite animale.",
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
        { "@type": "ListItem", position: 4, name: "Fobia de animale", item: url },
      ],
    },
  ],
};

export default function FobieDeAnimaleLayout({
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
