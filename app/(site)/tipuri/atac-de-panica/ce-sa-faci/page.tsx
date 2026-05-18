import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Ce faci în momentul unui atac de panică. 5 pași",
  description:
    "5 pași concreți pentru momentul unui atac de panică. Ce ajută și ce NU ajută. Ghid practic de Daniel Gagea, psiholog clinician.",
  authors: [{ name: "Daniel Gagea" }],
  alternates: {
    canonical: "https://totuldespreanxietate.ro/tipuri/atac-de-panica/ce-sa-faci",
  },
  openGraph: {
    title: "Ce faci în momentul unui atac de panică. 5 pași",
    description:
      "5 pași concreți pentru momentul unui atac de panică. Ce ajută și ce NU ajută. Ghid practic.",
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
      headline: "Ce faci în momentul unui atac de panică. 5 pași",
      description:
        "5 pași concreți pentru momentul unui atac de panică. Ce ajută și ce NU ajută. Ghid practic de Daniel Gagea, psiholog clinician.",
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
          "https://totuldespreanxietate.ro/tipuri/atac-de-panica/ce-sa-faci/",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Acasă", item: "https://totuldespreanxietate.ro" },
        { "@type": "ListItem", position: 2, name: "Tipuri", item: "https://totuldespreanxietate.ro/tipuri" },
        { "@type": "ListItem", position: 3, name: "Atac de panică", item: "https://totuldespreanxietate.ro/tipuri/atac-de-panica" },
        { "@type": "ListItem", position: 4, name: "Ce să faci", item: "https://totuldespreanxietate.ro/tipuri/atac-de-panica/ce-sa-faci" },
      ],
    },
  ],
};

const STEPS = [
  {
    title: "Oprește-te. Nu fugi.",
    body: "Impulsul de a fugi este puternic. Dar fuga confirmă creierului că pericolul este real. Rămâi unde ești. Dacă ești într-un loc sigur, și ești, chiar dacă nu simți asta acum, rămâi.",
  },
  {
    title: "Amintește-ți: nu mori, nu înnebunești, nu pierzi controlul.",
    body: "Gândurile tale de panică au un track record de 0%. De câte ori ai crezut că mori, și de câte ori s-a întâmplat? Răspunsul este zero. De fiecare dată.",
  },
  {
    title: "Observă, nu lupta.",
    body: "Nu încerca să oprești senzațiile cu forța. Privește-le ca un observator: inima bate repede, interesant, mâinile tremură, ok. Când observi în loc să lupți, senzațiile își pierd puterea.",
  },
  {
    title: "Expiră lung și lent.",
    body: "Nu respira adânc și repede, asta este hiperventilație. În schimb: inspiră ușor pe nas, 4 secunde. Apoi expiră lent pe gură, 6 secunde, ca și cum ai sufla printr-un pai. Repetă de 5-6 ori.",
  },
  {
    title: "Rămâi în situație.",
    body: "Anxietatea are un plafon. Nu crește la infinit. Dacă rămâi unde ești, fără să fugi și fără să lupți, după 10-20 de minute anxietatea începe să scadă natural.",
  },
];

const WARNINGS = [
  {
    title: "Respirația adâncă ca ritual",
    body: "Un studiu controlat a arătat că adăugarea trainingului respirației la TCC a scăzut rata de recuperare de la 57% la 37% la 12 luni (Schmidt et al., 2000).",
  },
  {
    title: "Fuga din situație",
    body: "Te calmezi imediat, dar confirmi creierului că pericolul era real.",
  },
  {
    title: "Căutarea repetată de reasigurare",
    body: "Nevoia de a auzi că ești ok funcționează 5 minute. Apoi nevoia revine, mai puternică.",
  },
  {
    title: "Monitorizarea obsesivă a corpului",
    body: "Cu cât cauți mai mult semne de pericol, cu atât găsești mai multe (Clark & Beck, 2010).",
  },
];

export default function CeSaFaciPage() {
  return (
    <main className="font-work min-h-screen bg-white text-lp-navy">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* CRISIS ANCHOR */}
      <div className="w-full bg-lp-yellow px-6 py-3 text-center text-sm font-semibold text-lp-navy">
        Dacă ești în mijlocul unui atac acum, citește doar textul boldat.
      </div>

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
            <span className="text-lp-navy">Ce faci acum</span>
          </nav>

          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Pași concreți
          </p>
          <h1 className="mt-4 font-work text-4xl font-bold leading-[1.05] tracking-tight text-lp-navy md:text-5xl lg:text-6xl">
            Ce <span className="lp-yellow-underline">faci</span> în momentul unui atac de panică.
          </h1>

          <p className="mt-8 text-lg leading-relaxed text-lp-mute md:text-xl">
            Dacă ești în mijlocul unui atac de panică acum, citește doar{" "}
            <strong className="text-lp-navy">textul bold</strong>.
          </p>
        </div>
      </header>

      {/* 5 STEPS */}
      <section id="pasi" className="bg-lp-bg px-6 py-20 md:py-24 scroll-mt-8">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Acum
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            5 pași concreți.
          </h2>

          <div className="mt-10 flex flex-col gap-6">
            {STEPS.map((step, i) => (
              <div
                key={step.title}
                className="rounded-md border border-lp-border bg-white p-6 md:p-7"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lp-navy text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-work text-xl font-bold leading-snug text-lp-navy">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-lp-mute md:text-[17px]">
                      {step.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CE NU AJUTĂ */}
      <section id="ce-nu-ajuta" className="bg-white px-6 py-20 md:py-24 scroll-mt-8">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Capcane
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Ce <span className="lp-yellow-underline">NU</span> ajută.
          </h2>

          <div className="mt-10 flex flex-col gap-5">
            {WARNINGS.map((w) => (
              <div
                key={w.title}
                className="rounded-md border-l-4 border-lp-yellow bg-lp-bg p-5"
              >
                <p className="font-work text-base font-bold text-lp-navy">
                  {w.title}
                </p>
                <p className="mt-2 text-base leading-relaxed text-lp-mute md:text-[17px]">
                  {w.body}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-base italic leading-relaxed text-lp-mute-soft">
            Aceste tehnici te ajută să treci prin atac. Dar nu înlocuiesc
            ajutorul profesionist.
          </p>
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
              href="/tipuri/atac-de-panica/tratament"
              className="group block rounded-md border border-lp-border bg-white p-6 transition hover:-translate-y-0.5 hover:border-lp-cyan hover:shadow-[0_12px_40px_rgba(8,29,61,0.08)]"
            >
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-lp-mute-soft">
                Următor →
              </span>
              <span className="mt-2 block font-work text-lg font-bold text-lp-navy">
                Când să ceri ajutor profesionist
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
                Simptomele atacului de panică
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
              Atacul a trecut. <span className="bg-lp-yellow px-2 text-lp-navy">Următorul pas?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-[680px] text-lg leading-relaxed text-white/85 md:text-xl">
              Ai trecut prin el. Acum putem lucra să nu mai fie nevoie să treci prin asta singur.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4">
              <Link
                href="/programare/?din=ce-sa-faci"
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
