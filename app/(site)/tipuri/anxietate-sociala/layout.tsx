import type { Metadata } from "next";

const title = "Anxietatea socială .. Ghid complet | Totul despre Anxietate";
const description =
  "Ce este anxietatea socială, cum o recunoști, de ce se întâmplă și ce poți face. Ghid complet bazat pe cercetare, de Daniel Gagea, psiholog clinician, psihoterapeut.";
const url = "https://totuldespreanxietate.ro/tipuri/anxietate-sociala";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Daniel Gagea" }],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Anxietatea socială .. Ghid complet",
    description,
    url,
    siteName: "Totul despre Anxietate",
    type: "article",
    locale: "ro_RO",
    authors: ["Daniel Gagea"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anxietatea socială .. Ghid complet",
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Anxietatea socială — Ghid complet",
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
      datePublished: "2026-04-01",
      dateModified: "2026-04-01",
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
          name: "Anxietatea socială se vindecă complet?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "În majoritatea cazurilor, da. 75% dintre persoanele care urmează psihoterapia au ameliorare durabilă. Anxietatea nu îți va mai controla viața și deciziile.",
          },
        },
        {
          "@type": "Question",
          name: "Cât durează tratamentul pentru anxietate socială?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "În medie, 16-20 de ședințe. Depinde de severitate, de cât de veche e tulburarea și de prezența altor tulburări asociate.",
          },
        },
        {
          "@type": "Question",
          name: "Am nevoie de medicamente pentru anxietate socială?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nu neapărat. Psihoterapia singură este eficientă în cele mai multe cazuri. Medicația poate fi utilă în cazuri severe, dar beneficiile se pierd adesea după oprirea tratamentului.",
          },
        },
        {
          "@type": "Question",
          name: "Care e diferența între timiditate și anxietate socială?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Timiditatea e o trăsătură de personalitate cu disconfort ușor care se atenuează după 15-20 minute. Anxietatea socială e o tulburare clinică cu frică intensă care persistă sau se intensifică, cu evitare frecventă și impact sever asupra carierei și relațiilor.",
          },
        },
        {
          "@type": "Question",
          name: "De ce mi-e frică să contactez un psiholog când am anxietate socială?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tocmai asta face anxietatea socială — transformă orice interacțiune nouă într-un obstacol. Frica de a contacta un specialist este unul dintre simptomele tulburării. Poți începe cu un mesaj scris, fără apel telefonic.",
          },
        },
        {
          "@type": "Question",
          name: "Anxietatea socială afectează și oamenii care par încrezători?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Da. Mulți oameni cu anxietate socială au învățat să performeze normalitatea. Sunt cei care par dezinvolți la petrecere și apoi petrec 3 zile analizând fiecare cuvânt.",
          },
        },
        {
          "@type": "Question",
          name: "De ce am anxietate socială dacă nu am avut o copilărie traumatică?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nu e nevoie de o traumă majoră. Uneori e suficient un părinte care critică consistent, un mediu școlar competitiv, sau o predispoziție genetică activată de un mediu care nu a oferit suficientă siguranță emoțională.",
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
          name: "Anxietatea socială",
          item: url,
        },
      ],
    },
  ],
};

export default function AnxietateSocialaLayout({
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
