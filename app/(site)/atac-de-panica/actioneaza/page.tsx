import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Ce faci la un atac de panică + Când ceri ajutor | Totul despre Anxietate",
  description:
    "5 pași concreți pentru momentul unui atac de panică și când să ceri ajutor profesionist. Ghid complet de Daniel Gagea, psiholog clinician, psihoterapeut. De Daniel Gagea.",
  authors: [{ name: "Daniel Gagea" }],
  alternates: {
    canonical: "https://totuldespreanxietate.ro/atac-de-panica/actioneaza",
  },
  openGraph: {
    title: "Ce faci la un atac de panică + Când ceri ajutor",
    description:
      "5 pași concreți pentru momentul unui atac de panică și când să ceri ajutor profesionist. Ghid complet de Daniel Gagea, psiholog clinician, psihoterapeut.",
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
      headline: "Ce faci la un atac de panică + Când ceri ajutor",
      description:
        "5 pași concreți pentru momentul unui atac de panică și când să ceri ajutor profesionist. Ghid complet de Daniel Gagea, psiholog clinician, psihoterapeut. De Daniel Gagea.",
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
          "https://totuldespreanxietate.ro/atac-de-panica/actioneaza/",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Acasă", item: "https://totuldespreanxietate.ro" },
        { "@type": "ListItem", position: 2, name: "Atac de panică", item: "https://totuldespreanxietate.ro/atac-de-panica" },
        { "@type": "ListItem", position: 3, name: "Ce este de făcut", item: "https://totuldespreanxietate.ro/atac-de-panica/actioneaza" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Funcționează terapia pentru atacuri de panică?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Da. Psihoterapia pentru atacurile de panică este unul dintre cele mai studiate și eficiente tratamente din psihologie, cu efecte pe termen lung. Durata variază de la persoană la persoană, în funcție de complexitatea și profunzimea problemei.",
          },
        },
      ],
    },
  ],
};

const STEPS = [
  {
    title: "Oprește-te. Nu fugi.",
    text: "Impulsul de a fugi este puternic. Dar fuga confirmă creierului că pericolul este real. Rămâi unde ești. Dacă ești într-un loc sigur, și ești, chiar dacă nu simți asta acum, rămâi.",
  },
  {
    title: "Amintește-ți: nu mori, nu înnebunești, nu pierzi controlul.",
    text: "Corpul tău a trecut prin asta de fiecare dată și de fiecare dată a fost ok. Inima a bătut repede și s-a oprit. Amețeala a venit și a trecut. Senzația de sufocare s-a dizolvat. Niciodată nu s-a întâmplat ce te-ai temut.",
  },
  {
    title: "Observă, nu lupta.",
    text: "În loc să lupți cu senzațiile, încearcă să le observi fără să reacționezi.. notează mental ce simți, unde simți, și cât durează. Când observi în loc să lupți, senzațiile își pierd din intensitate.",
  },
  {
    title: "Expiră lung și lent.",
    text: "NU respira adânc și repede.. asta este hiperventilație. În schimb: inspiră ușor pe nas, 4 secunde. Apoi expiră lent pe gură, 6 secunde, ca și cum ai sufla printr-un pai. Repetă de 5-6 ori.",
  },
  {
    title: "Rămâi în situație.",
    text: "Anxietatea are un plafon. Nu crește la infinit. Dacă rămâi unde ești, fără să fugi și fără să lupți, după 10-20 de minute anxietatea începe să scadă natural.",
  },
];

const MYTHS = [
  {
    myth: `„Nu am nevoie de ani de terapie.”`,
    reality:
      "Terapia durează cât are nevoie să dureze.. până înțelegi mesajul pe care corpul și psihicul tău încearcă să ți-l transmită. La unii oameni e mai scurt, la alții mai lung.",
  },
  {
    myth: `„Terapia înseamnă să stau pe divan și să vorbesc despre copilărie.”`,
    reality:
      "Psihoterapia pentru panică este complet diferită. Cu teme de casă, exerciții concrete, rezultate măsurabile.",
  },
  {
    myth: `„E mai bine să iau pastile.”`,
    reality:
      "Psihoterapia este la fel de eficientă ca medicația, cu un avantaj major: efectele se mențin pe termen lung.",
  },
];

const MOMENT_ITEMS = [
  "Atacuri de panică mai mult de o dată pe lună",
  "Eviți locuri, activități sau situații din cauza panicii",
  "Ai renunțat la lucruri importante pentru tine",
  "Folosești alcool, medicamente sau alte substanțe ca să faci față",
  "Simți că viața ta se restrânge",
  "Te temi constant de următorul atac",
];

export default function ActioneazaPage() {
  return (
    <main className="font-work min-h-screen bg-white text-lp-navy">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── CRISIS ANCHOR (prominent, links to 5-pași anchor) ─── */}
      <div className="w-full bg-lp-yellow px-6 py-3 text-center text-sm font-semibold text-lp-navy">
        <Link
          href="#acum"
          className="underline underline-offset-2 hover:no-underline"
        >
          Ai un atac de panică acum? → Mergi direct la cei 5 pași
        </Link>
      </div>

      {/* ─── HERO + 5 PAȘI (combined, prominent for crisis users) ─── */}
      <header id="acum" className="scroll-mt-8 bg-white px-6 pt-10 pb-12 md:pt-16 md:pb-16">
        <div className="mx-auto max-w-[820px]">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-lp-mute-soft">
            <Link
              href="/atac-de-panica/"
              className="hover:text-lp-cyan-dark hover:underline underline-offset-2"
            >
              Atac de panică
            </Link>
            <span aria-hidden="true">→</span>
            <span className="font-semibold text-lp-navy">Acționează</span>
          </nav>

          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            01 · Acum
          </p>
          <h1 className="mt-4 font-work text-4xl font-bold leading-[1.05] tracking-tight text-lp-navy md:text-5xl lg:text-6xl">
            Ce poți face, <span className="lp-yellow-underline">acum</span> și
            pe termen lung.
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

          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            Dacă ești în mijlocul unui atac de panică acum, citește doar{" "}
            <strong className="text-lp-navy">textul bold</strong>.
          </p>

          <h2 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            5 pași concreți
          </h2>

          <div className="mt-8 flex flex-col gap-5">
            {STEPS.map((s, i) => (
              <div
                key={s.title}
                className="rounded-md border border-lp-border bg-white p-6 shadow-[0_4px_20px_rgba(8,29,61,0.04)] md:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lp-yellow text-sm font-bold text-lp-navy">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-work text-lg font-bold leading-snug text-lp-navy md:text-xl">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-lp-mute">
                      {s.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ─── CÂND SĂ CERI AJUTOR ─── */}
      <section id="ajutor" className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            02 · Pasul următor
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Când să ceri{" "}
            <span className="lp-yellow-underline">ajutor</span> profesionist.
          </h2>

          {/* Stats row */}
          <div className="mt-10 grid grid-cols-1 gap-6 rounded-md border border-lp-border bg-white p-6 md:grid-cols-3">
            <Stat value="85–90%" label="rată de recuperare cu psihoterapie" />
            <Stat value="12–15" label="ședințe, nu ani" />
            <Stat value="78%" label="remisie completă (APA)" />
          </div>

          {/* Evidence text */}
          <p className="mt-10 text-base leading-relaxed text-lp-mute md:text-lg">
            Studii derulate la Universitățile Oxford, Pennsylvania și New York
            au confirmat aceste rezultate. La 15 luni după terminarea terapiei,
            85% dintre pacienții tratați cu psihoterapie nu mai aveau atacuri
            de panică (Clark et al., 1994). 20% dintre pacienți au raportat
            ameliorare semnificativă după doar 2 ședințe (Clerkin et al., 2008).
          </p>

          {/* Ce te oprește */}
          <h3 className="mt-14 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Ce te oprește și de ce nu ar trebui
          </h3>

          <div className="mt-8 flex flex-col gap-4">
            {MYTHS.map(({ myth, reality }) => (
              <div
                key={myth}
                className="rounded-md border border-lp-border bg-white p-6 md:p-7"
              >
                <p className="font-work text-lg italic leading-snug text-lp-mute-soft md:text-xl">
                  {myth}
                </p>
                <p className="mt-3 text-base leading-relaxed text-lp-navy md:text-lg">
                  {reality}
                </p>
              </div>
            ))}
          </div>

          {/* Când este momentul */}
          <h3 className="mt-14 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Când este momentul
          </h3>

          <ul className="mt-6 space-y-4">
            {MOMENT_ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-[9px] h-2.5 w-2.5 shrink-0 rounded-full bg-lp-cyan-dark"
                  aria-hidden="true"
                />
                <span className="text-base leading-relaxed text-lp-mute md:text-lg">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── CTA DARK ─── */}
      <section className="bg-lp-navy px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1100px]">
          <div className="text-center text-white">
            <p className="text-base md:text-lg font-semibold uppercase tracking-[0.22em] text-lp-cyan">
              Cabinet
            </p>
            <h2 className="mt-4 font-work text-3xl font-bold leading-tight md:text-5xl">
              Primul pas este{" "}
              <span className="bg-lp-yellow px-2 text-lp-navy">
                o conversație.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-[680px] text-lg leading-relaxed text-white/85 md:text-xl">
              Nu un angajament, nu o promisiune, doar o discuție în care
              înțelegem împreună ce ți se întâmplă și ce poți face.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4">
              <Link
                href="/programare/?din=atac-de-panica-actioneaza"
                className="lp-cta inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold md:text-lg"
              >
                Programează o conversație cu Daniel
                <span aria-hidden>→</span>
              </Link>
              <p className="text-sm text-white/60">
                Răspund personal la fiecare mesaj.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <div className="text-center">
            <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-cyan-dark">
              Întrebări frecvente
            </p>
            <h2 className="mt-3 font-work text-3xl font-bold leading-tight tracking-tight text-lp-navy md:text-4xl">
              Ce vor să știe oamenii despre tratament.
            </h2>
          </div>

          <div className="mt-10 divide-y divide-lp-border rounded-md border border-lp-border bg-white">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 px-6 py-5 text-left text-[17px] font-semibold text-lp-navy md:text-lg">
                <span>Funcționează terapia pentru atacuri de panică?</span>
                <span
                  aria-hidden
                  className="mt-1 shrink-0 text-2xl leading-none text-lp-cyan-dark transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="px-6 pb-5 text-base leading-relaxed text-lp-mute md:text-[17px]">
                Da. Psihoterapia pentru atacurile de panică este unul dintre
                cele mai studiate și eficiente tratamente din psihologie, cu
                efecte pe termen lung. Durata variază de la persoană la
                persoană, în funcție de complexitatea și profunzimea problemei.
              </p>
            </details>
          </div>

          {/* Navigation */}
          <div className="mt-10 grid gap-3 md:grid-cols-2">
            <Link
              href="/atac-de-panica"
              className="flex items-center gap-2 rounded-md border border-lp-border bg-white px-5 py-4 text-[15px] font-semibold text-lp-navy transition hover:-translate-y-0.5 hover:border-lp-cyan hover:shadow-[0_12px_40px_rgba(8,29,61,0.08)]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden
              >
                <path
                  d="M13 8H3M3 8L7 4M3 8L7 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Înapoi la ghid
            </Link>
            <Link
              href="/programare?din=atac-de-panica"
              className="lp-cta flex items-center justify-between gap-2 rounded-md px-5 py-4 text-[15px] font-semibold"
            >
              Programează o consultație
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden
              >
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="font-work text-3xl font-bold tracking-tight text-lp-navy md:text-4xl">
        {value}
      </p>
      <p className="mt-2 text-sm leading-snug text-lp-mute md:text-base">
        {label}
      </p>
    </div>
  );
}
