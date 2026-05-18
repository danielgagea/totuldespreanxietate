import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Atac de panică sau infarct? Cum faci diferența",
  description:
    "Diferențele dintre atacul de panică și infarct. Când mergi la medic și când e panică. De Daniel Gagea, psiholog clinician.",
  authors: [{ name: "Daniel Gagea" }],
  alternates: {
    canonical: "https://totuldespreanxietate.ro/tipuri/atac-de-panica/sau-infarct",
  },
  openGraph: {
    title: "Atac de panică sau infarct? Cum faci diferența",
    description:
      "Diferențele dintre atacul de panică și infarct. Când mergi la medic și când e panică.",
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
      headline: "Atac de panică sau infarct? Cum faci diferența",
      description:
        "Diferențele dintre atacul de panică și infarct. Când mergi la medic și când e panică. De Daniel Gagea, psiholog clinician.",
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
          "https://totuldespreanxietate.ro/tipuri/atac-de-panica/sau-infarct/",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Acasă", item: "https://totuldespreanxietate.ro" },
        { "@type": "ListItem", position: 2, name: "Tipuri", item: "https://totuldespreanxietate.ro/tipuri" },
        { "@type": "ListItem", position: 3, name: "Atac de panică", item: "https://totuldespreanxietate.ro/tipuri/atac-de-panica" },
        { "@type": "ListItem", position: 4, name: "Sau infarct", item: "https://totuldespreanxietate.ro/tipuri/atac-de-panica/sau-infarct" },
      ],
    },
  ],
};

const COMPARISON: Array<{ feature: string; panic: string; cardiac: string }> = [
  { feature: "Evoluție", panic: "Atinge maximum în minute, apoi scade", cardiac: "Nu scade spontan" },
  { feature: "Durere toracică", panic: "Difuză, se schimbă ca localizare", cardiac: "Radiază spre braț, maxilar, spate" },
  { feature: "Derealizare", panic: "Frecventă", cardiac: "Aproape inexistentă" },
  { feature: "Context", panic: "Stres, anxietate", cardiac: "Efort fizic, factori de risc" },
];

export default function PanicaSauInfarctPage() {
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
            <span className="text-lp-navy">Panică sau infarct?</span>
          </nav>

          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Diferențierea
          </p>
          <h1 className="mt-4 font-work text-4xl font-bold leading-[1.05] tracking-tight text-lp-navy md:text-5xl lg:text-6xl">
            Atac de panică sau <span className="lp-yellow-underline">infarct</span>?
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
          </p>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-lp-mute md:text-xl">
            <p>
              Aceasta este, de departe, cea mai frecventă teamă. Și este
              perfect înțeleasă, simptomele sunt înspăimântător de
              asemănătoare.
            </p>
            <p>
              Iată de ce: Când corpul tău declanșează răspunsul „luptă sau fugi”, inima pompează mai mult sânge ca să-ți ofere energia necesară să fugi sau să lupți. Ritmul cardiac crește. Simți presiune în piept. Aceleași senzații ca într-un eveniment cardiac, dar dintr-o cauză complet diferită.
            </p>
          </div>
        </div>
      </header>

      {/* DIFERENȚE PRACTICE */}
      <section className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Comparație
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Diferențe <span className="lp-yellow-underline">practice</span>.
          </h2>

          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            Deși nu poți pune diagnostic singur, există câteva diferențe
            observabile:
          </p>

          <div className="mt-10 overflow-x-auto rounded-md border border-lp-border bg-white">
            <table className="w-full text-left text-[15px]">
              <thead>
                <tr className="bg-lp-navy text-white">
                  <th className="px-5 py-4 font-semibold">Caracteristică</th>
                  <th className="px-5 py-4 font-semibold">Atac de panică</th>
                  <th className="px-5 py-4 font-semibold">Eveniment cardiac</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? "bg-white" : "bg-lp-bg"}
                  >
                    <td className="border-t border-lp-border px-5 py-4 font-semibold text-lp-navy">
                      {row.feature}
                    </td>
                    <td className="border-t border-lp-border px-5 py-4 text-lp-mute">
                      {row.panic}
                    </td>
                    <td className="border-t border-lp-border px-5 py-4 text-lp-mute">
                      {row.cardiac}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* UN NUMĂR CARE SPUNE MULT */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Statistică
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Un număr care spune mult.
          </h2>

          <div className="mt-10 rounded-md border-l-4 border-lp-cyan bg-lp-navy p-8 md:p-10">
            <p className="text-base leading-relaxed text-white/90 md:text-lg">
              Între <strong className="text-white">9% și 43%</strong> dintre persoanele care se
              prezintă la urgențe cu durere toracică suferă de fapt de
              tulburare de panică, nu de o afecțiune cardiacă{" "}
              <span className="text-white/60">
                (Barsky et al., 1994; Katon et al., 1988; Morris et al., 1997)
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* DACĂ AM CEVA LA INIMĂ */}
      <section className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Întâi medicul
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Dar dacă chiar am ceva la inimă?
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Dacă nu ai fost niciodată evaluat medical, mergi la medic. Serios.
              Exclude mai întâi cauzele fizice.. hipertiroidismul, consumul
              excesiv de cofeină, prolapsul de valvă mitrală, sau alte afecțiuni
              care pot mima simptomele panicii{" "}
              <span className="text-lp-mute-soft">
                (Taylor, 2000; DSM-IV-TR, APA, 2000)
              </span>
              .
            </p>

            <p>
              Odată ce un medic ți-a confirmat că ești sănătos fizic, poți
              începe să lucrezi cu ceea ce este: un atac de panică.
            </p>
          </div>
        </div>
      </section>

      {/* PERSPECTIVA CARE SCHIMBĂ TOTUL */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Reframe
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Perspectiva care <span className="lp-yellow-underline">schimbă</span> totul.
          </h2>

          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            Inima îți bate repede și când faci sport. Și când ești entuziasmat.
            Și în momente de excitare sexuală. Nimeni nu sună la urgențe
            pentru asta.
          </p>

          <blockquote className="my-10 border-l-4 border-lp-cyan pl-6 italic">
            <p className="font-work text-xl font-medium leading-relaxed text-lp-navy md:text-2xl">
              Diferența nu este senzația, ci ce-ți spui despre ea.
              Inima bate repede la sala de sport și ți se pare normal.
              Inima bate repede la metrou și imediat crezi că faci infarct.
              Aceeași senzație, interpretare diferită, rezultat complet diferit.
            </p>
          </blockquote>
        </div>
      </section>

      {/* NAVIGATION */}
      <section className="bg-lp-bg px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[1100px]">
          <nav aria-label="Navigare articole">
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
                href="/tipuri/atac-de-panica/simptome"
                className="group block rounded-md border border-lp-border bg-white p-6 transition hover:-translate-y-0.5 hover:border-lp-cyan hover:shadow-[0_12px_40px_rgba(8,29,61,0.08)]"
              >
                <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-lp-mute-soft">
                  Continuă
                </span>
                <span className="mt-2 block font-work text-lg font-bold text-lp-navy">
                  Ce simți în timpul unui atac
                </span>
              </Link>

              <Link
                href="/tipuri/atac-de-panica/ce-sa-faci"
                className="group block rounded-md border border-lp-border bg-white p-6 transition hover:-translate-y-0.5 hover:border-lp-cyan hover:shadow-[0_12px_40px_rgba(8,29,61,0.08)]"
              >
                <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-lp-mute-soft">
                  Continuă
                </span>
                <span className="mt-2 block font-work text-lg font-bold text-lp-navy">
                  Ce faci în momentul unui atac
                </span>
              </Link>
            </div>
          </nav>
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
              Ai fost la medic și ești <span className="bg-lp-yellow px-2 text-lp-navy">sănătos.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-[680px] text-lg leading-relaxed text-white/85 md:text-xl">
              Acum poți începe să lucrezi cu ceea ce este: un atac de panică. Și se poate schimba.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4">
              <Link
                href="/programare/?din=sau-infarct"
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
        <div className="mx-auto max-w-[820px] border-t border-lp-border pt-10 text-center text-sm text-lp-mute-soft">
          <p>
            <span className="font-work font-bold text-lp-navy">
              Daniel Gagea
            </span>
            , psiholog clinician, 10+ ani experiență, 500+ clienți
          </p>
        </div>
      </section>
    </main>
  );
}
