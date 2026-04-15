import type { Metadata } from "next";

const title = "Despre Daniel Gagea, psiholog clinician | Totul despre Anxietate";
const description =
  "Daniel Gagea, psiholog clinician și psihoterapeut cu peste 10 ani de experiență și 500+ clienți. Specializat în anxietate, traume și psihoterapie pozitivă.";
const url = "https://totuldespreanxietate.ro/despre-daniel";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Daniel Gagea" }],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Despre Daniel Gagea, psiholog clinician, psihoterapeut",
    description,
    url,
    siteName: "Totul despre Anxietate",
    type: "profile",
    locale: "ro_RO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Despre Daniel Gagea, psiholog clinician",
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      mainEntity: {
        "@type": "Person",
        name: "Daniel Gagea",
        jobTitle: "Psiholog clinician, psihoterapeut",
        url: "https://totuldespreanxietate.ro",
        description:
          "Psiholog clinician și psihoterapeut cu peste 10 ani de experiență, specializat în anxietate, traume și psihoterapie pozitivă.",
        knowsAbout: [
          "Anxietate",
          "Atacuri de panică",
          "Fobii",
          "Stres post-traumatic",
          "Psihoterapie pozitivă",
          "Psihologie analitică",
          "Traumă",
        ],
        alumniOf: [
          {
            "@type": "Organization",
            name: "World Association for Positive and Transcultural Psychotherapy (WAPP)",
          },
          {
            "@type": "Organization",
            name: "Societatea Română de Analiză Jungiană",
          },
        ],
        memberOf: {
          "@type": "Organization",
          name: "Colegiul Psihologilor din România",
        },
        image: "https://totuldespreanxietate.ro/images/daniel-gagea.jpg",
      },
      datePublished: "2026-04-07T10:00:00+03:00",
      dateModified: "2026-04-13T10:00:00+03:00",
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
        {
          "@type": "ListItem",
          position: 1,
          name: "Acasă",
          item: "https://totuldespreanxietate.ro",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Despre Daniel Gagea",
          item: url,
        },
      ],
    },
  ],
};

export default function DespreLayout({
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
