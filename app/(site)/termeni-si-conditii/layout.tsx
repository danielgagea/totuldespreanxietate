import type { Metadata } from "next";

const title = "Termeni si Conditii";
const description =
  "Termenii si conditiile de utilizare ale site-ului totuldespreanxietate.ro. Informatii despre servicii, drepturi, obligatii si protectia datelor.";
const url = "https://totuldespreanxietate.ro/termeni-si-conditii";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title: "Termeni si Conditii",
    description,
    url,
    siteName: "Totul despre Anxietate",
    type: "website",
    locale: "ro_RO",
  },
  twitter: {
    card: "summary",
    title: "Termeni si Conditii",
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Termeni \u0219i Condi\u021bii",
      description,
      url,
      publisher: {
        "@type": "Organization",
        name: "Totul despre Anxietate",
        url: "https://totuldespreanxietate.ro",
      },
      datePublished: "2026-04-06",
      dateModified: "2026-04-06",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Acas\u0103",
          item: "https://totuldespreanxietate.ro",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Termeni \u0219i Condi\u021bii",
          item: url,
        },
      ],
    },
  ],
};

export default function TermeniLayout({
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
