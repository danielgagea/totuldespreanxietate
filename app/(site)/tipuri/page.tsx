import type { Metadata } from "next";
import Link from "next/link";

const title = "Tipuri de anxietate";
const description =
  "Anxietate socială, generalizată, atacuri de panică, TSPT, TOC și fobii specifice. Ghiduri complete de Daniel Gagea, psiholog clinician, psihoterapeut.";
const url = "https://totuldespreanxietate.ro/tipuri";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Daniel Gagea" }],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title,
    description,
    url,
    siteName: "Totul despre Anxietate",
    type: "website",
    locale: "ro_RO",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      name: title,
      description,
      url,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Atacul de panică",
            url: "https://totuldespreanxietate.ro/atac-de-panica",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Anxietatea socială",
            url: "https://totuldespreanxietate.ro/tipuri/anxietate-sociala",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Anxietatea generalizată",
            url: "https://totuldespreanxietate.ro/tipuri/anxietate-generalizata",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Stresul post-traumatic (TSPT)",
            url: "https://totuldespreanxietate.ro/tipuri/tspt",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Tulburarea obsesiv-compulsivă (TOC)",
            url: "https://totuldespreanxietate.ro/tipuri/toc",
          },
          {
            "@type": "ListItem",
            position: 6,
            name: "Fobii specifice",
            url: "https://totuldespreanxietate.ro/tipuri/fobii-specifice",
          },
        ],
      },
      author: {
        "@type": "Person",
        name: "Daniel Gagea",
        jobTitle: "Psiholog clinician, psihoterapeut",
        url: "https://totuldespreanxietate.ro/despre-daniel",
      },
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
          item: url,
        },
      ],
    },
  ],
};

const types = [
  {
    href: "/atac-de-panica",
    title: "Atacul de panică",
    description:
      "Ce este, de ce se întâmplă, ce simți și ce poți face. Ghid complet cu pași practici pentru momentul atacului.",
    emoji: "⚡",
  },
  {
    href: "/tipuri/anxietate-sociala",
    title: "Anxietatea socială",
    description:
      "Frica persistentă de a fi judecat, evaluat sau umilit în situații sociale. Cum arată din interior și ce funcționează ca tratament.",
    emoji: "👥",
  },
  {
    href: "/tipuri/anxietate-generalizata",
    title: "Anxietatea generalizată",
    description:
      "Îngrijorarea cronică despre tot, mereu. Intoleranța la incertitudine, meta-worry și cum se tratează.",
    emoji: "🌀",
  },
  {
    href: "/tipuri/tspt",
    title: "Stresul post-traumatic (TSPT)",
    description:
      "Când trecutul se simte ca prezent. Flashback-uri, evitare, hiperactivare și cum funcționează tratamentul.",
    emoji: "🔒",
  },
  {
    href: "/tipuri/toc",
    title: "Tulburarea obsesiv-compulsivă (TOC)",
    description:
      "Gânduri intruzive și ritualuri repetitive. Ciclul obsesie-compulsie și cum se întrerupe prin terapie.",
    emoji: "🔄",
  },
  {
    href: "/tipuri/fobii-specifice",
    title: "Fobii specifice",
    description:
      "Frica intensă de ceva specific: sânge, înălțimi, animale, zbor, spații închise. Cum funcționează și cum se tratează.",
    emoji: "🎯",
  },
];

export default function TipuriPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: "80px 20px 40px",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: 38,
            fontWeight: 400,
            color: "var(--color-primary)",
            marginBottom: 16,
            lineHeight: 1.2,
          }}
        >
          Tipuri de anxietate
        </h1>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.75,
            color: "var(--color-text)",
            marginBottom: 48,
          }}
        >
          Anxietatea nu e un singur lucru. Se manifestă diferit, cu mecanisme
          diferite, și fiecare tip are tratamentul lui specific. Aici găsești
          ghiduri detaliate pentru fiecare formă, scrise de Daniel Gagea,
          psiholog clinician, psihoterapeut.
        </p>

        <div
          style={{
            display: "grid",
            gap: 20,
          }}
        >
          {types.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              style={{
                display: "block",
                padding: "28px 24px",
                borderRadius: 14,
                background: "var(--color-background-white)",
                border: "1px solid var(--color-border, #e5e0d8)",
                textDecoration: "none",
                transition: "transform 0.2s ease-out, box-shadow 0.2s ease-out",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 16,
                }}
              >
                <span style={{ fontSize: 28, lineHeight: 1 }}>{t.emoji}</span>
                <div>
                  <h2
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: 22,
                      fontWeight: 500,
                      color: "var(--color-primary)",
                      marginBottom: 8,
                      lineHeight: 1.3,
                    }}
                  >
                    {t.title}
                  </h2>
                  <p
                    style={{
                      fontSize: 16,
                      lineHeight: 1.65,
                      color: "var(--color-text)",
                      margin: 0,
                    }}
                  >
                    {t.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: "0 20px 80px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: 15,
            color: "var(--color-text-secondary)",
            marginBottom: 20,
          }}
        >
          Nu ești sigur ce tip de anxietate ai? Vorbește cu un specialist.
        </p>
        <Link
          href="/programare?din=tipuri"
          style={{
            display: "inline-block",
            padding: "14px 32px",
            borderRadius: 10,
            background: "var(--color-primary)",
            color: "#fff",
            fontWeight: 500,
            fontSize: 16,
            textDecoration: "none",
          }}
        >
          Programează o consultație
        </Link>
      </section>
    </>
  );
}
