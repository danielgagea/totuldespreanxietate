import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "De ce se întâmplă atacurile de panică. Mecanismul explicat",
  description:
    "De ce ai atacuri de panică: alarma falsă, cercul vicios, declanșatori și vulnerabilitate. Explicat pe bază de cercetare de Daniel Gagea.",
  authors: [{ name: "Daniel Gagea" }],
  alternates: {
    canonical: "https://totuldespreanxietate.ro/tipuri/atac-de-panica/de-ce-se-intampla",
  },
  openGraph: {
    title: "De ce se întâmplă atacurile de panică. Mecanismul explicat",
    description:
      "De ce ai atacuri de panică: alarma falsă, cercul vicios, declanșatori și vulnerabilitate. De Daniel Gagea.",
    type: "article",
    locale: "ro_RO",
    siteName: "Totul despre Anxietate",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "De ce se întâmplă atacurile de panică. Mecanismul explicat",
      description:
        "De ce ai atacuri de panică: alarma falsă, cercul vicios, declanșatori și vulnerabilitate. De Daniel Gagea.",
      author: {
        "@type": "Person",
        name: "Daniel Gagea",
        jobTitle: "Psiholog clinician, psihoterapeut",
        url: "https://totuldespreanxietate.ro/despre-daniel/",
      },
      datePublished: "2026-03-19",
      dateModified: "2026-04-13",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://totuldespreanxietate.ro/tipuri/atac-de-panica/de-ce-se-intampla/",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Acasă", item: "https://totuldespreanxietate.ro" },
        { "@type": "ListItem", position: 2, name: "Tipuri", item: "https://totuldespreanxietate.ro/tipuri" },
        { "@type": "ListItem", position: 3, name: "Atac de panică", item: "https://totuldespreanxietate.ro/tipuri/atac-de-panica" },
        { "@type": "ListItem", position: 4, name: "De ce se întâmplă", item: "https://totuldespreanxietate.ro/tipuri/atac-de-panica/de-ce-se-intampla" },
      ],
    },
  ],
};

const CERCUL_STEPS = [
  "O senzație fizică apare.. cauzată de stres, oboseală, emoții, cafea, sau funcționarea normală a corpului.",
  "Creierul o detectează și o interpretează catastrofic",
  "Interpretarea produce frică, și frica intensifică senzațiile fizice",
  "Senzațiile mai intense confirmă interpretarea",
  "Se pierde capacitatea de reevaluare.. creierul nu mai poate genera o explicație alternativă (Beck, 1988)",
];

export default function DeCeSeIntamplaPage() {
  return (
    <main className="font-work min-h-screen bg-white text-lp-navy">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <header className="bg-white px-6 pt-14 pb-12 md:pt-20 md:pb-16">
        <div className="mx-auto max-w-[820px]">
          <nav className="mb-8 flex items-center gap-2 text-sm text-lp-mute-soft">
            <Link
              href="/tipuri/atac-de-panica/"
              className="underline underline-offset-2 hover:no-underline"
            >
              Atac de panică
            </Link>
            <span aria-hidden="true">→</span>
            <span className="text-lp-navy">De ce se întâmplă</span>
          </nav>

          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Mecanism
          </p>
          <h1 className="mt-4 font-work text-4xl font-bold leading-[1.05] tracking-tight text-lp-navy md:text-5xl lg:text-6xl">
            De ce se <span className="lp-yellow-underline">întâmplă</span>. Mecanismul atacului de panică.
          </h1>
          <p className="mt-5 text-sm text-lp-mute-soft">
            De{" "}
            <Link
              href="/despre-daniel/"
              className="font-semibold text-lp-navy underline-offset-2 hover:underline"
            >
              Daniel Gagea
            </Link>
            , psiholog clinician
            <span className="mx-2">·</span>
            Ultima actualizare: Martie 2026
          </p>
        </div>
      </header>

      {/* ALARMA FALSĂ */}
      <section id="alarma-falsa" className="bg-lp-bg px-6 py-20 md:py-24 scroll-mt-8">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Sistemul de alarmă
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Alarma <span className="lp-yellow-underline">falsă</span>.
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              {`Imaginează-ți o alarmă de incendiu care pornește într-o clădire goală. Nu există foc. Nu există fum. Dar alarma urlă la fel de tare ca într-un incendiu real. Și toți oamenii din clădire reacționează ca și cum ar fi un incendiu adevărat.`}
            </p>

            <p>
              Asta face creierul tău în timpul unui atac de panică. Declanșează o
              alarmă de urgență, completă, cu toate sirenele și luminile, pentru o
              amenințare care nu există.
            </p>

            <p>
              Acest sistem de alarmă se numește răspunsul „luptă sau fugi” și ne-a
              protejat ca specie de milioane de ani. Când strămoșii noștri vedeau
              un leu, acest sistem le oferea energia să fugă: inima pompează mai
              mult sânge, respirația se accelerează, mușchii se tensionează,
              simțurile se ascuț.
            </p>

            <p>
              Problema este că, în tulburarea de panică, acest sistem se
              activează fără leu. Se activează pentru o palpitație. Pentru o
              ușoară amețeală. Alarma pornește pentru un stimul intern pe care
              creierul îl interpretează ca pericol iminent (Clark, 1986; Beck,
              1988).
            </p>
          </div>
        </div>
      </section>

      {/* CERCUL VICIOS */}
      <section id="cercul-vicios" className="bg-white px-6 py-20 md:py-24 scroll-mt-8">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Pas cu pas
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Cercul vicios, pas cu pas.
          </h2>
          <p className="mt-3 text-sm text-lp-mute-soft">
            (Beck, 1988; Clark, 1986a, 1988, 1996)
          </p>

          <ol className="mt-10 space-y-6">
            {CERCUL_STEPS.map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lp-navy text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="pt-1 text-base leading-relaxed text-lp-mute md:text-lg">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CE ARATĂ CERCETAREA */}
      <section id="ce-arata-cercetarea" className="bg-lp-bg px-6 py-20 md:py-24 scroll-mt-8">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Cercetare
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Ce arată <span className="lp-yellow-underline">cercetarea</span>.
          </h2>

          <div className="mt-8 rounded-md border-l-4 border-lp-cyan bg-lp-navy p-8 md:p-10">
            <p className="text-base leading-relaxed text-white/90 md:text-lg">
              {`Într-un studiu cu monitorizare cardiacă 24 de ore, 40% dintre atacurile de panică auto-raportate NU s-au asociat cu nicio creștere reală a ritmului cardiac (Barsky et al., 1994). Inima nu bătea mai repede. Persoanele doar credeau că bate mai repede.`}
            </p>
          </div>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              {`Într-un alt studiu, persoanele cu risc de panică au primit informații false despre ritmul lor cardiac. Au raportat semnificativ mai multe simptome de panică deși ritmul cardiac real era identic între grupuri (Story & Craske, 2008).`}
            </p>
          </div>

          <blockquote className="my-10 border-l-4 border-lp-cyan pl-6 italic">
            <p className="font-work text-xl font-medium leading-relaxed text-lp-navy md:text-2xl">
              Problema nu este în ce simți. Problema este ce crezi despre ce
              simți.
            </p>
          </blockquote>

          <p className="text-base leading-relaxed text-lp-mute md:text-lg">
            Persoanele cu tulburare de panică nu au un corp defect. Studiile
            arată că nu sunt mai reactive fiziologic la stres decât persoanele
            fără panică (Taylor, 2000). Ceea ce diferă este modul în care
            interpretează senzațiile, și asta este ceva ce se poate schimba.
          </p>
        </div>
      </section>

      {/* DECLANȘATORII */}
      <section id="declansatorii" className="bg-white px-6 py-20 md:py-24 scroll-mt-8">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Declanșatori
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Declanșatorii.. nu doar situații externe.
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Locurile devin problematice nu pentru ceea ce sunt, ci pentru că
              induc o anumită senzație internă (Clark, 1986; Barlow, 2002).
            </p>
            <p>
              80% dintre persoanele cu tulburare de panică evită activ
              substanțele și activitățile care ar putea produce senzații similare
              panicii (White et al., 2006).
            </p>
          </div>
        </div>
      </section>

      {/* VULNERABILITATE */}
      <section id="vulnerabilitate" className="bg-lp-bg px-6 py-20 md:py-24 scroll-mt-8">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Vulnerabilitate
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Vulnerabilitate, nu defect.
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Vârsta medie de debut este 24 de ani (Burke et al., 1990), adesea
              precedate de un eveniment de viață stresant.
            </p>
            <p>
              Concordanța la gemeni monozigoți: 31% vs 0% dizigoți (Torgersen,
              1983). Nu este nici alegere, nici slăbiciune, ci un mod în care
              creierul tău a învățat să proceseze senzațiile, și poate fi
              reprogramat.
            </p>
          </div>
        </div>
      </section>

      {/* NAVIGATION */}
      <section className="bg-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/tipuri/atac-de-panica/"
              className="group block rounded-md border border-lp-border bg-white p-6 transition hover:-translate-y-0.5 hover:border-lp-cyan hover:shadow-[0_12px_40px_rgba(8,29,61,0.08)]"
            >
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-lp-mute-soft">
                ← Înapoi
              </span>
              <span className="mt-2 block font-work text-lg font-bold text-lp-navy">
                Ghidul complet
              </span>
            </Link>

            <Link
              href="/tipuri/atac-de-panica/ce-vrea-sa-spuna-psihicul"
              className="group block rounded-md border border-lp-border bg-white p-6 transition hover:-translate-y-0.5 hover:border-lp-cyan hover:shadow-[0_12px_40px_rgba(8,29,61,0.08)]"
            >
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-lp-mute-soft">
                Următor →
              </span>
              <span className="mt-2 block font-work text-lg font-bold text-lp-navy">
                Ce vrea să spună psihicul
              </span>
            </Link>

            <Link
              href="/tipuri/atac-de-panica/simptome"
              className="group block rounded-md border border-lp-border bg-white p-6 transition hover:-translate-y-0.5 hover:border-lp-cyan hover:shadow-[0_12px_40px_rgba(8,29,61,0.08)]"
            >
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-lp-mute-soft">
                Citește
              </span>
              <span className="mt-2 block font-work text-lg font-bold text-lp-navy">
                Simptomele atacului
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* AUTHOR FOOTER */}
      <section className="bg-lp-bg px-6 py-12 md:py-16">
        <div className="mx-auto max-w-[820px]">
          <div className="flex items-center gap-5 rounded-md border border-lp-border bg-white p-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-lp-bg">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-lp-cyan-dark"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M20 21a8 8 0 1 0-16 0" />
              </svg>
            </div>
            <div>
              <p className="font-work text-base font-bold text-lp-navy">
                Daniel Gagea
              </p>
              <p className="text-sm text-lp-mute-soft">
                Psiholog clinician · 10+ ani experiență · 500+ clienți
              </p>
              <p className="mt-0.5 text-sm text-lp-mute-soft">
                Ultima actualizare: Martie 2026
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
