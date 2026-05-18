import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Tratament atac de panică. Când și cum să ceri ajutor",
  description:
    "85-90% rată de recuperare cu TCC în 12-15 ședințe. Când să ceri ajutor, ce te oprește, și ce funcționează. De Daniel Gagea, psiholog clinician.",
  authors: [{ name: "Daniel Gagea" }],
  alternates: {
    canonical: "https://totuldespreanxietate.ro/tipuri/atac-de-panica/tratament",
  },
  openGraph: {
    title: "Tratament atac de panică. Când și cum să ceri ajutor",
    description:
      "85-90% rată de recuperare cu TCC în 12-15 ședințe. Când să ceri ajutor, ce te oprește, și ce funcționează.",
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
      headline: "Tratament atac de panică. Când și cum să ceri ajutor",
      description:
        "85-90% rată de recuperare cu TCC în 12-15 ședințe. Când să ceri ajutor, ce te oprește, și ce funcționează. De Daniel Gagea, psiholog clinician.",
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
          "https://totuldespreanxietate.ro/tipuri/atac-de-panica/tratament/",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Acasă", item: "https://totuldespreanxietate.ro" },
        { "@type": "ListItem", position: 2, name: "Tipuri", item: "https://totuldespreanxietate.ro/tipuri" },
        { "@type": "ListItem", position: 3, name: "Atac de panică", item: "https://totuldespreanxietate.ro/tipuri/atac-de-panica" },
        { "@type": "ListItem", position: 4, name: "Tratament", item: "https://totuldespreanxietate.ro/tipuri/atac-de-panica/tratament" },
      ],
    },
  ],
};

const MYTHS = [
  {
    myth: "„Nu am nevoie de ani de terapie.”",
    reality:
      "Nu ai nevoie. Protocolul standard este 12-15 ședințe. Structurat. Practic. Focalizat pe prezent.",
  },
  {
    myth: "„Terapia înseamnă să stau pe divan și să vorbesc despre copilărie.”",
    reality:
      "TCC pentru panică este complet diferită. Înveți să-ți înțelegi ciclul, să-ți confrunți interpretările catastrofice și să-ți recapeți viața pas cu pas.",
  },
  {
    myth: "„E mai bine să iau pastile.”",
    reality:
      "TCC este la fel de eficientă ca medicația, cu un avantaj major: efectele se mențin pe termen lung (Hollon et al., 2006).",
  },
  {
    myth: "„La mine nu funcționează, am panică de ani de zile.”",
    reality:
      "Helen avea 27 de ani și 11 ani de tulburare de panică, cu 8 atacuri pe zi. După 12 ședințe de terapie cognitivă, frecvența atacurilor s-a redus semnificativ (Clark & Beck, 2010).",
  },
];

const MECHANISMS = [
  {
    title: "Anxietatea anticipativă",
    body: "Îngrijorare constantă, corp în alertă permanentă.",
  },
  {
    title: "Evitarea",
    body: "98% evită situații. Funcționează pe termen scurt, confirmă pericolul.",
  },
  {
    title: "Comportamentele de siguranță",
    body: "Telefonul, pastila, persoana de siguranță. 80% evită inclusiv senzațiile fizice.",
  },
];

const MOMENT_SIGNS = [
  "Atacuri de panică mai mult de o dată pe lună",
  "Eviți locuri, activități sau situații din cauza panicii",
  "Ai renunțat la lucruri importante pentru tine",
  "Folosești alcool, medicamente sau alte substanțe",
  "Simți că viața ta se restrânge",
  "Te temi constant de următorul atac",
];

export default function TratamentPage() {
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
            <span className="text-lp-navy">Tratament</span>
          </nav>

          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Tratament
          </p>
          <h1 className="mt-4 font-work text-4xl font-bold leading-[1.05] tracking-tight text-lp-navy md:text-5xl lg:text-6xl">
            Când și cum să ceri <span className="lp-yellow-underline">ajutor</span> profesionist.
          </h1>

          <div className="mt-10 grid grid-cols-1 gap-4 rounded-md border border-lp-border bg-lp-bg px-6 py-8 md:grid-cols-3">
            <Stat number="85-90%" text="rată de recuperare cu TCC" />
            <Stat number="12-15" text="ședințe, nu ani" />
            <Stat number="78%" text="remisie completă (APA)" />
          </div>

          <div className="mt-10 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Studii derulate la Universitățile Oxford, Pennsylvania și New York au
              confirmat aceste rezultate în mod repetat. La 15 luni după terminarea
              terapiei, 85% dintre pacienții tratați cu terapie cognitivă nu mai
              aveau atacuri de panică (Clark et al., 1994). 20% dintre pacienți au
              raportat ameliorare semnificativă după doar 2 ședințe (Clerkin et
              al., 2008).
            </p>
            <p>
              APA confirmă: TCC prezintă 78% remisie completă (Asociația
              Psihiatrică Americană, 1998).
            </p>
          </div>
        </div>
      </header>

      {/* CE TE OPREȘTE */}
      <section id="ce-te-opreste" className="bg-lp-bg px-6 py-20 md:py-24 scroll-mt-8">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Mituri
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Ce te <span className="lp-yellow-underline">oprește</span>, și de ce nu ar trebui.
          </h2>

          <div className="mt-10 flex flex-col gap-6">
            {MYTHS.map((m) => (
              <div
                key={m.myth}
                className="rounded-md border border-lp-border bg-white p-6 md:p-7"
              >
                <p className="font-work text-lg italic leading-snug text-lp-cyan-dark md:text-xl">
                  {m.myth}
                </p>
                <p className="mt-3 text-base leading-relaxed text-lp-mute md:text-[17px]">
                  {m.reality}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FRICA DE URMĂTORUL ATAC */}
      <section id="frica-de-atac" className="bg-white px-6 py-20 md:py-24 scroll-mt-8">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Frica de frică
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Frica de următorul atac.
          </h2>

          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            Caracteristica principală a tulburării de panică nu este atacul în sine,
            ci teama persistentă de a-l retrăi, frica de frică (DSM-IV-TR, APA, 2000).
          </p>

          <div className="mt-10 flex flex-col gap-6">
            {MECHANISMS.map((m, i) => (
              <div
                key={m.title}
                className="rounded-md border border-lp-border bg-white p-6 md:p-7"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lp-navy text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-work text-lg font-bold leading-snug text-lp-navy">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-lp-mute md:text-[17px]">
                      {m.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-md border-l-4 border-lp-cyan bg-lp-navy p-8 md:p-10 text-center">
            <p className="font-work text-lg font-medium leading-relaxed text-white md:text-xl">
              Evitare → izolare → depresie → automediere → mai multă panică
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-md border border-lp-border bg-lp-bg p-6 text-center">
              <p className="font-work text-3xl font-bold tracking-tight text-lp-navy md:text-4xl">
                12%
              </p>
              <p className="mt-1 text-sm text-lp-mute-soft">
                remisie fără tratament la 5 ani
              </p>
            </div>
            <div className="rounded-md border border-lp-border bg-lp-bg p-6 text-center">
              <p className="font-work text-3xl font-bold tracking-tight text-lp-navy md:text-4xl">
                7&times;
              </p>
              <p className="mt-1 text-sm text-lp-mute-soft">
                costuri medicale mai mari
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-md border-l-4 border-lp-yellow bg-lp-bg p-6 md:p-7">
            <p className="font-work text-base font-bold text-lp-navy">
              Comparația care contează
            </p>
            <p className="mt-2 text-base leading-relaxed text-lp-mute md:text-[17px]">
              Fără tratament, 12% remisie la 5 ani. Cu terapie, 85% recuperare
              la 15 luni. Diferența nu este noroc, ci o decizie.
            </p>
          </div>
        </div>
      </section>

      {/* CÂND ESTE MOMENTUL */}
      <section id="cand-este-momentul" className="bg-lp-bg px-6 py-20 md:py-24 scroll-mt-8">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Semne
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Când este momentul.
          </h2>

          <ul className="mt-10 space-y-4">
            {MOMENT_SIGNS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-md border border-lp-border bg-white p-5"
              >
                <span
                  className="mt-[7px] h-2.5 w-2.5 shrink-0 rounded-full bg-lp-cyan-dark"
                  aria-hidden="true"
                />
                <span className="text-base leading-relaxed text-lp-mute md:text-[17px]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
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
              href="/tipuri/atac-de-panica/ce-sa-faci"
              className="group block rounded-md border border-lp-border bg-white p-6 transition hover:-translate-y-0.5 hover:border-lp-cyan hover:shadow-[0_12px_40px_rgba(8,29,61,0.08)]"
            >
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-lp-mute-soft">
                Citește
              </span>
              <span className="mt-2 block font-work text-lg font-bold text-lp-navy">
                Ce faci în momentul unui atac
              </span>
            </Link>

            <Link
              href="/tipuri/atac-de-panica/ce-vrea-sa-spuna-psihicul"
              className="group block rounded-md border border-lp-border bg-white p-6 transition hover:-translate-y-0.5 hover:border-lp-cyan hover:shadow-[0_12px_40px_rgba(8,29,61,0.08)]"
            >
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-lp-mute-soft">
                Citește
              </span>
              <span className="mt-2 block font-work text-lg font-bold text-lp-navy">
                Ce vrea să spună psihicul
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA DARK */}
      <section className="bg-lp-navy px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1100px]">
          <div className="text-center text-white">
            <p className="text-base md:text-lg font-semibold uppercase tracking-[0.22em] text-lp-cyan">
              Cabinet
            </p>
            <h2 className="mt-4 font-work text-3xl font-bold leading-tight md:text-5xl">
              Primul pas este{" "}
              <span className="bg-lp-yellow px-2 text-lp-navy">o conversație.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-[680px] text-lg leading-relaxed text-white/85 md:text-xl">
              Nu un angajament, nu o promisiune, doar o discuție în care înțelegem
              împreună ce ți se întâmplă și ce poți face.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4">
              <Link
                href="/programare/?din=tratament"
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

      {/* AUTHOR FOOTER */}
      <section className="bg-white px-6 py-12 md:py-16">
        <div className="mx-auto max-w-[820px] text-center text-sm text-lp-mute-soft">
          <p className="font-work text-base font-bold text-lp-navy">
            Daniel Gagea
          </p>
          <p>psiholog clinician</p>
        </div>
      </section>
    </main>
  );
}

function Stat({ number, text }: { number: string; text: string }) {
  return (
    <div className="text-center">
      <p className="font-work text-2xl font-bold tracking-tight text-lp-navy md:text-3xl">
        {number}
      </p>
      <p className="mt-1 text-xs leading-snug text-lp-mute md:text-sm">
        {text}
      </p>
    </div>
  );
}
