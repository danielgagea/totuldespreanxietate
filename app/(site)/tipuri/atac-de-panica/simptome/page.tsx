import type { Metadata } from "next";
import Link from "next/link";
import { VideoPlaceholder } from "@/components/sections/VideoPlaceholder";

export const metadata: Metadata = {
  title: "Simptome atac de panică",
  description:
    "Ce simți în timpul unui atac de panică: palpitații, amețeală, derealizare, furnicături. Cum escaladează și de ce. De Daniel Gagea, psiholog clinician, psihoterapeut.",
  authors: [{ name: "Daniel Gagea" }],
  alternates: {
    canonical: "https://totuldespreanxietate.ro/tipuri/atac-de-panica/simptome",
  },
  openGraph: {
    title: "Simptome atac de panică",
    description:
      "Ce simți în timpul unui atac de panică: palpitații, amețeală, derealizare, furnicături. Cum escaladează și de ce.",
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
      headline: "Simptome atac de panică",
      description:
        "Ce simți în timpul unui atac de panică: palpitații, amețeală, derealizare, furnicături. Cum escaladează și de ce.",
      datePublished: "2026-03-19",
      dateModified: "2026-04-13",
      author: {
        "@type": "Person",
        name: "Daniel Gagea",
        jobTitle: "Psiholog clinician, psihoterapeut",
        url: "https://totuldespreanxietate.ro",
      },
      publisher: {
        "@type": "Organization",
        name: "Totul despre Anxietate",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://totuldespreanxietate.ro/tipuri/atac-de-panica/simptome",
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
          name: "Atac de panică",
          item: "https://totuldespreanxietate.ro/tipuri/atac-de-panica",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Simptome",
          item: "https://totuldespreanxietate.ro/tipuri/atac-de-panica/simptome",
        },
      ],
    },
    {
      "@type": "Person",
      name: "Daniel Gagea",
      jobTitle: "Psiholog clinician, psihoterapeut",
      url: "https://totuldespreanxietate.ro",
    },
  ],
};

const THOUGHTS = [
  "„Fac infarct.”",
  "„Înnebunesc.”",
  "„Pierd controlul.”",
  "„Nu pot respira, mă sufoc.”",
  "„Trebuie să ies de aici.”",
  "„Mă voi face de râs.”",
  "„Nu se va termina niciodată.”",
];

const CASCADE = [
  "Apare o senzație fizică.. poate o palpitație, o amețeală, o ușoară dificultate de respirație. Poate fi cauzată de stres, oboseală, cafea, sau pur și simplu de corpul tău funcționând normal.",
  "Creierul interpretează senzația ca pericol: „Inima bate repede, probabil fac infarct.”",
  "Interpretarea produce frică. Frica intensifică senzațiile fizice.. inima bate și mai repede, respirația se accelerează și mai mult.",
  "Senzațiile intensificate confirmă interpretarea: „Vedeți? E și mai rău. Chiar e ceva grav.”",
  "Ciclul se repetă, și în câteva secunde, ești în mijlocul unui atac de panică complet.",
];

export default function SimptomePage() {
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
            <span className="text-lp-navy">Simptome</span>
          </nav>

          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Simptome
          </p>
          <h1 className="mt-4 font-work text-4xl font-bold leading-[1.05] tracking-tight text-lp-navy md:text-5xl lg:text-6xl">
            Ce <span className="lp-yellow-underline">simți</span> în timpul unui atac de panică.
          </h1>
          <p className="mt-5 text-sm text-lp-mute-soft">
            De{" "}
            <Link
              href="/despre-daniel/"
              className="font-semibold text-lp-navy underline-offset-2 hover:underline"
            >
              Daniel Gagea
            </Link>
            , psiholog clinician, psihoterapeut
          </p>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-lp-mute md:text-xl">
            <p>
              Totul începe brusc. Uneori într-o situație specifică.. un loc
              aglomerat, o călătorie, o întâlnire. Alteori, aparent din senin..
              acasă, la birou, sau chiar în somn.
            </p>
          </div>
        </div>
      </header>

      {/* SENZAȚIILE FIZICE */}
      <section className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Corpul
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Senzațiile fizice.
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Inima începe să bată puternic, repede, de parcă ar vrea să iasă
              din piept. Simți durere sau presiune în piept.. și imediat te
              gândești la ce e mai rău.
            </p>

            <p>
              Respirația se schimbă. Simți că nu primești destul aer, că te
              sufoci, că ceva îți blochează gâtul. Și iată paradoxul pe care
              puțini oameni îl știu: în timpul unui atac de panică, respiri{" "}
              <strong className="text-lp-navy">prea mult</strong>, nu prea puțin. Senzația de sufocare este
              produsă de hiperventilație.. respirația rapidă și profundă
              scade brusc presiunea CO2 din sânge (hipocapnie), ceea ce produce
              amețeală, furnicături și senzație de sufocare{" "}
              <span className="text-lp-mute-soft">
                (Meuret, Ritz, Wilhelm &amp; Roth, 2005; Clark et al., 1985)
              </span>
              .
            </p>

            <p>
              Amețeala vine în val. Simți că te pierzi, că leșini, că solul se
              mișcă sub tine. Mâinile și picioarele amorțesc sau furnicătură..
              senzație ciudată, ca și cum nu ar fi ale tale.
            </p>

            <p>
              Transpiri.. uneori abundent, uneori doar palme umede.
              Alternezi între valuri de căldură și frisoane. Simți greață, ca și
              cum ai vomita.
            </p>

            <p>
              Și poate cea mai înspăimântătoare senzație: totul din jur pare
              ireal. De parcă ai privi un film cu tine însuți. De parcă lumea
              s-a decuplat. Asta se numește{" "}
              <strong className="text-lp-navy">derealizare</strong>, și este un simptom frecvent, nu un
              semn de nebunie.
            </p>
          </div>
        </div>
      </section>

      {/* CE SE ÎNTÂMPLĂ ÎN MINTE */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Mintea
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Ce se întâmplă în <span className="lp-yellow-underline">minte</span>.
          </h2>

          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            Senzațiile fizice vin cu gânduri automate.. rapide, intense, și
            extrem de convingătoare în acel moment:
          </p>

          <ul className="mt-8 space-y-3">
            {THOUGHTS.map((thought) => (
              <li
                key={thought}
                className="rounded-md border-l-4 border-lp-cyan bg-lp-bg px-5 py-3 font-work text-lg italic leading-relaxed text-lp-navy"
              >
                {thought}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-base leading-relaxed text-lp-mute md:text-lg">
            Aceste gânduri nu sunt raționale. Dar în mijlocul atacului, ele se
            simt absolut adevărate. Și tocmai asta este problema.
          </p>
        </div>
      </section>

      {/* CASCADA */}
      <section className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Cercul vicios
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Cascada.. cum <span className="lp-yellow-underline">escaladează</span> totul.
          </h2>

          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            Iată ce se întâmplă de fapt, pas cu pas:
          </p>

          <ol className="mt-10 space-y-6">
            {CASCADE.map((step, i) => (
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

          <div className="mt-10 rounded-md border-l-4 border-lp-cyan bg-lp-navy p-8 md:p-10">
            <p className="text-base leading-relaxed text-white/90 md:text-lg">
              Asta este ceea ce cercetătorii numesc{" "}
              <strong className="text-white">cercul vicios al panicii</strong>{" "}
              <span className="text-white/60">(Clark, 1986; Beck, 1988)</span>.
              Nu senzația fizică produce atacul. Interpretarea catastrofică a
              senzației.. aceea produce atacul.
            </p>
          </div>

          <p className="mt-8 text-base leading-relaxed text-lp-mute md:text-lg">
            Fiecare senzație pe care o simți în timpul unui atac de panică are
            o explicație biologică clară. Niciuna nu este periculoasă. Corpul
            tău face exact ceea ce e programat să facă într-o situație de
            pericol. Singura problemă.. pericolul nu există.
          </p>
        </div>
      </section>

      {/* VIDEO */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <VideoPlaceholder title="Daniel Gagea explică: Simptomele atacului de panică" />
        </div>
      </section>

      {/* NAVIGATION */}
      <section className="bg-lp-bg px-6 py-16 md:py-20">
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
              href="/tipuri/atac-de-panica/sau-infarct"
              className="group block rounded-md border border-lp-border bg-white p-6 transition hover:-translate-y-0.5 hover:border-lp-cyan hover:shadow-[0_12px_40px_rgba(8,29,61,0.08)]"
            >
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-lp-mute-soft">
                Următor →
              </span>
              <span className="mt-2 block font-work text-lg font-bold text-lp-navy">
                Atac de panică sau infarct?
              </span>
            </Link>

            <Link
              href="/tipuri/atac-de-panica/ce-sa-faci"
              className="group block rounded-md border border-lp-border bg-white p-6 transition hover:-translate-y-0.5 hover:border-lp-cyan hover:shadow-[0_12px_40px_rgba(8,29,61,0.08)]"
            >
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-lp-mute-soft">
                Următor →
              </span>
              <span className="mt-2 block font-work text-lg font-bold text-lp-navy">
                Ce faci în momentul unui atac
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* AUTHOR FOOTER */}
      <section className="bg-white px-6 py-12 md:py-16">
        <div className="mx-auto max-w-[820px] text-center text-sm text-lp-mute-soft">
          <p className="font-work text-base font-bold text-lp-navy">
            Daniel Gagea
          </p>
          <p>Psiholog clinician · 10+ ani experiență · 500+ clienți</p>
        </div>
      </section>
    </main>
  );
}
