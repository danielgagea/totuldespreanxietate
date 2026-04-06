import type { Metadata } from "next";

const title = "Stresul post-traumatic (TSPT) .. Ghid complet | Totul despre Anxietate";
const description =
  "Ce este stresul post-traumatic, de ce trecutul se simte ca prezent, ce se întâmplă în creier și ce funcționează ca tratament. Ghid complet de Daniel Gagea, psiholog clinician, psihoterapeut.";
const url = "https://totuldespreanxietate.ro/tipuri/tspt";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Daniel Gagea" }],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Stresul post-traumatic (TSPT) .. Ghid complet",
    description,
    url,
    siteName: "Totul despre Anxietate",
    type: "article",
    locale: "ro_RO",
    authors: ["Daniel Gagea"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stresul post-traumatic (TSPT) .. Ghid complet",
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Stresul post-traumatic (TSPT) .. Ghid complet",
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
      datePublished: "2026-04-06",
      dateModified: "2026-04-06",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url,
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Pot avea TSPT dacă trauma mea nu a fost suficient de gravă?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Da. Severitatea evenimentului nu prezice severitatea TSPT. Ce contează e semnificația subiectivă a evenimentului, resursele pe care le aveai în acel moment, și dacă ai avut sau nu sprijin emoțional după. Nu compara trauma ta cu a altcuiva. Dacă te afectează, e suficient de gravă.",
          },
        },
        {
          "@type": "Question",
          name: "De ce am TSPT acum, dacă trauma s-a întâmplat acum mulți ani?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Amintirea traumatică nu are etichetă de timp. Poate sta adormită ani de zile și să fie activată de un eveniment din prezent care seamănă senzorial cu trauma originală. TSPT cu debut tardiv nu e neobișnuit și nu înseamnă că inventezi trauma.",
          },
        },
        {
          "@type": "Question",
          name: "Flashback-urile vor dispărea complet cu tratament?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La mulți oameni, da. La alții, flashback-urile devin mult mai rare și mai puțin intense. Ceea ce se schimbă sigur e relația ta cu ele: nu te mai copleșesc, poți reveni la prezent mult mai repede. Amintirea traumei rămâne, dar devine o amintire, nu o retrăire.",
          },
        },
        {
          "@type": "Question",
          name: "E TSPT dacă nu am flashback-uri clasice?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Da. TSPT nu arată la fel la toată lumea. Unii au flashback-uri vizuale intense. Alții au amorțeală emoțională și detașare. Alții au predominant coșmaruri. Există și un subtip disociativ. Toate sunt forme valide.",
          },
        },
        {
          "@type": "Question",
          name: "Ar trebui să vorbesc despre traumă cu familia sau prietenii?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depinde. A vorbi despre traumă cu cineva care ascultă cu empatie poate fi util. A vorbi cu cineva care minimizează sau te culpabilizează poate fi dăunător. Procesarea traumei în terapie, cu un profesionist, e locul cel mai sigur.",
          },
        },
      ],
    },
    {
      "@type": "Person",
      name: "Daniel Gagea",
      jobTitle: "Psiholog clinician, psihoterapeut",
      url: "https://totuldespreanxietate.ro",
      sameAs: [],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Acasă",
          item: "https://totuldespreanxietate.ro",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Tipuri de anxietate",
          item: "https://totuldespreanxietate.ro/tipuri",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Stresul post-traumatic",
          item: url,
        },
      ],
    },
  ],
};

export default function TSPTLayout({
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
