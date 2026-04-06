import type { Metadata } from "next";

const title = "Anxietatea generalizată (TAG) .. Ghid complet | Totul despre Anxietate";
const description =
  "Ce este anxietatea generalizată, de ce mintea ta nu se oprește, mecanismul îngrijorării și ce funcționează ca tratament. Ghid complet de Daniel Gagea, psiholog clinician, psihoterapeut.";
const url = "https://totuldespreanxietate.ro/tipuri/anxietate-generalizata";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Daniel Gagea" }],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Anxietatea generalizată (TAG) .. Ghid complet",
    description,
    url,
    siteName: "Totul despre Anxietate",
    type: "article",
    locale: "ro_RO",
    authors: ["Daniel Gagea"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anxietatea generalizată (TAG) .. Ghid complet",
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Anxietatea generalizată (TAG) .. Ghid complet",
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
          name: "Dacă mă îngrijorez mereu, nu înseamnă că sunt doar o persoană anxioasă?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nu. TAG-ul nu e o trăsătură de personalitate. E o condiție cu mecanisme specifice (meta-worry, intoleranța la incertitudine, evitare emoțională) care pot fi identificate și tratate. Tratamentul funcționează și nu durează ani de zile, ci de obicei 12-20 de ședințe.",
          },
        },
        {
          "@type": "Question",
          name: "De ce grijile mele sar de la un subiect la altul?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pentru că nucleul TAG-ului nu e conținutul grijilor, ci intoleranța la incertitudine. Orice domeniu al vieții conține incertitudine. Când rezolvi o grijă, mintea ta se mută automat pe următorul domeniu incert. Tratamentul eficient vizează nucleul, nu conținutul.",
          },
        },
        {
          "@type": "Question",
          name: "TAG-ul poate produce simptome fizice reale?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Da. Tensiunea musculară cronică, durerile de cap de tip tensional, problemele gastrointestinale, oboseala cronică și tulburările de somn sunt simptome directe ale TAG-ului. Nu sunt imaginare. Corpul tău trăiește într-o stare permanentă de pregătire pentru pericol, și asta are consecințe fizice reale.",
          },
        },
        {
          "@type": "Question",
          name: "Pot scăpa complet de TAG?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mulți oameni ajung la un punct în care TAG-ul nu le mai afectează funcționarea. TCC are un effect size de 2.07 pentru TAG, printre cele mai mari din toate tulburările de anxietate. Tratamentul funcționează și durează de obicei 12-20 de ședințe.",
          },
        },
        {
          "@type": "Question",
          name: "E TAG dacă mă îngrijorez doar de un singur lucru?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nu neapărat. TAG-ul se definește prin îngrijorare pe multiple domenii, care sare de la una la alta. Dacă îngrijorarea e focalizată predominant pe sănătate, poate fi anxietate de boală. Dacă e focalizată pe evaluarea socială, poate fi anxietate socială. Un specialist poate face diferența diagnostică.",
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
          name: "Anxietatea generalizată",
          item: url,
        },
      ],
    },
  ],
};

export default function AnxietateGeneralizataLayout({
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
