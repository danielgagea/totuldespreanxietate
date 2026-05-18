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

const types: Array<{
  href: string;
  title: string;
  description: string;
  emoji: string;
  accent: "cyan" | "yellow" | "navy" | "plain";
}> = [
  {
    href: "/atac-de-panica",
    title: "Atacul de panică",
    description:
      "Ce este, de ce se întâmplă, ce simți și ce poți face. Ghid complet cu pași practici pentru momentul atacului.",
    emoji: "⚡",
    accent: "cyan",
  },
  {
    href: "/tipuri/anxietate-sociala",
    title: "Anxietatea socială",
    description:
      "Frica persistentă de a fi judecat, evaluat sau umilit în situații sociale. Cum arată din interior și ce funcționează ca tratament.",
    emoji: "👥",
    accent: "yellow",
  },
  {
    href: "/tipuri/anxietate-generalizata",
    title: "Anxietatea generalizată",
    description:
      "Îngrijorarea cronică despre tot, mereu. Intoleranța la incertitudine, meta-worry și cum se tratează.",
    emoji: "🌀",
    accent: "navy",
  },
  {
    href: "/tipuri/tspt",
    title: "Stresul post-traumatic (TSPT)",
    description:
      "Când trecutul se simte ca prezent. Flashback-uri, evitare, hiperactivare și cum funcționează tratamentul.",
    emoji: "🔒",
    accent: "plain",
  },
  {
    href: "/tipuri/toc",
    title: "Tulburarea obsesiv-compulsivă (TOC)",
    description:
      "Gânduri intruzive și ritualuri repetitive. Ciclul obsesie-compulsie și cum se întrerupe prin terapie.",
    emoji: "🔄",
    accent: "plain",
  },
  {
    href: "/tipuri/fobii-specifice",
    title: "Fobii specifice",
    description:
      "Frica intensă de ceva specific.. sânge, înălțimi, animale, zbor, spații închise. Cum funcționează și cum se tratează.",
    emoji: "🎯",
    accent: "plain",
  },
];

const ACCENT_BORDER: Record<"cyan" | "yellow" | "navy" | "plain", string> = {
  cyan: "hover:border-lp-cyan",
  yellow: "hover:border-lp-yellow",
  navy: "hover:border-lp-navy",
  plain: "hover:border-lp-cyan",
};

export default function TipuriPage() {
  return (
    <main className="font-work min-h-screen bg-white text-lp-navy">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="bg-white px-6 pt-14 pb-12 md:pt-20 md:pb-16">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Ghiduri complete
          </p>
          <h1 className="mt-4 font-work text-4xl font-bold leading-[1.05] tracking-tight text-lp-navy md:text-5xl lg:text-6xl">
            Tipuri de{" "}
            <span className="lp-yellow-underline">anxietate</span>.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-lp-mute md:text-xl">
            Anxietatea nu e un singur lucru. Se manifestă diferit, cu mecanisme
            diferite, și fiecare tip are tratamentul lui specific. Aici găsești
            ghiduri detaliate pentru fiecare formă, scrise de Daniel Gagea,
            psiholog clinician, psihoterapeut.
          </p>
        </div>
      </section>

      {/* TYPES GRID */}
      <section className="bg-lp-bg px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid gap-5 md:grid-cols-2">
            {types.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className={`group flex gap-5 rounded-md border border-lp-border bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(8,29,61,0.08)] md:p-8 ${ACCENT_BORDER[t.accent]}`}
              >
                <span className="shrink-0 text-3xl leading-none">{t.emoji}</span>
                <div className="flex flex-col">
                  <h2 className="font-work text-xl font-bold leading-tight tracking-tight text-lp-navy transition group-hover:text-lp-cyan-dark md:text-2xl">
                    {t.title}
                  </h2>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-lp-mute md:text-lg">
                    {t.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-lp-cyan-dark">
                    Citește ghidul complet
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-lp-navy px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px] text-center text-white">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.22em] text-lp-cyan">
            Nu ești sigur
          </p>
          <h2 className="mt-4 font-work text-3xl font-bold leading-tight md:text-4xl">
            Nu știi ce tip de anxietate ai?{" "}
            <span className="bg-lp-yellow px-2 text-lp-navy">
              Vorbim.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-base leading-relaxed text-white/85 md:text-lg">
            E în regulă să nu știi. Cele mai multe persoane se recunosc în mai
            multe tipuri. O conversație ne ajută să identificăm exact ce
            trăiești și ce ar funcționa pentru tine.
          </p>
          <Link
            href="/programare?din=tipuri"
            className="lp-cta mt-8 inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold md:text-lg"
          >
            Programează o consultație
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
