import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anxietate: simptome, cauze și tratament",
  description:
    "Ce este anxietatea, de ce apare și ce poți face. Ghiduri despre atacul de panică, anxietatea socială și alte forme. De Daniel Gagea, psihoterapeut.",
  alternates: { canonical: "https://totuldespreanxietate.ro" },
  openGraph: {
    title: "Totul despre Anxietate .. Ghiduri complete de la psiholog",
    description:
      "Ce este anxietatea, de ce apare și ce poți face. Resursa #1 din România despre anxietate.",
    url: "https://totuldespreanxietate.ro",
    type: "website",
    locale: "ro_RO",
    siteName: "Totul despre Anxietate",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Totul despre Anxietate",
      url: "https://totuldespreanxietate.ro",
      dateCreated: "2026-02-15",
      publisher: {
        "@type": "Person",
        name: "Daniel Gagea",
        jobTitle: "Psiholog clinician, psihoterapeut",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Ce este anxietatea?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Anxietatea este un răspuns natural al corpului la o amenințare percepută. Devine o problemă când se activează frecvent, intens și fără un pericol real.",
          },
        },
        {
          "@type": "Question",
          name: "Anxietatea se tratează?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Da. Psihoterapia are rate de succes între 60-80%. Majoritatea persoanelor observă îmbunătățiri în 8-16 ședințe.",
          },
        },
        {
          "@type": "Question",
          name: "Anxietatea e periculoasă?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Anxietatea în sine nu este periculoasă fizic. Un atac de panică nu produce infarct. Totuși, anxietatea netratată afectează calitatea vieții.",
          },
        },
      ],
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
      ],
    },
  ],
};

type TipAccent = "cyan" | "yellow" | "navy";

const TIPURI_FEATURED: Array<{
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  accent: TipAccent;
}> = [
  {
    eyebrow: "Cel mai căutat ghid",
    title: "Atacul de panică",
    body: "Inima bate puternic, simți că nu poți respira, ești convins că faci infarct. Totul durează câteva minute, dar se simte ca o eternitate. Aici înțelegi de ce.",
    cta: "Citește ghidul complet",
    href: "/atac-de-panica",
    accent: "cyan",
  },
  {
    eyebrow: "Îngrijorare permanentă",
    title: "Anxietatea generalizată",
    body: "Te îngrijorezi constant, nu despre un lucru anume, ci despre orice. Mintea ta produce scenarii negative non-stop și nu poți să o oprești.",
    cta: "Vezi mecanismul",
    href: "/tipuri/anxietate-generalizata",
    accent: "yellow",
  },
  {
    eyebrow: "Frica de oameni",
    title: "Anxietatea socială",
    body: "Repeți mental ce vei spune. Analizezi fiecare interacțiune ore sau zile. Eviți situații nu pentru că nu vrei, ci pentru că te temi de judecată.",
    cta: "Înțelege-o mai bine",
    href: "/tipuri/anxietate-sociala",
    accent: "navy",
  },
];

const TIP_ACCENT_PILL: Record<TipAccent, string> = {
  cyan: "bg-lp-cyan text-lp-navy",
  yellow: "bg-lp-yellow text-lp-navy",
  navy: "bg-lp-navy text-white",
};

const TIP_ACCENT_BORDER: Record<TipAccent, string> = {
  cyan: "hover:border-lp-cyan",
  yellow: "hover:border-lp-yellow",
  navy: "hover:border-lp-navy",
};

const TIPURI_SECUNDARE = [
  {
    title: "Tulburarea obsesiv-compulsivă",
    desc: "Gânduri intruzive care revin, ritualuri pe care le repeți ca să scapi de anxietate. Un cerc vicios.",
    href: "/tipuri/toc",
  },
  {
    title: "Stresul post-traumatic",
    desc: "Tresări la sunete puternice, ai coșmaruri, eviți anumite locuri. Trecutul se simte ca prezent.",
    href: "/tipuri/tspt",
  },
  {
    title: "Fobii specifice",
    desc: "Frica intensă de ceva concret.. înălțimi, zbor, spații închise. Știi rațional că frica e disproporționată, dar corpul nu ascultă.",
    href: "/tipuri/fobii-specifice",
  },
];

const GHIDURI = [
  {
    eyebrow: "Atacul de panică",
    title: "Cum recunoști un atac de panică",
    body: "Semnele clare care te ajută să-ți dai seama că ce trăiești este un atac de panică, nu un infarct sau altceva.",
    href: "/atac-de-panica/recunoaste",
  },
  {
    eyebrow: "Atacul de panică",
    title: "De ce apar atacurile de panică",
    body: "Mecanismul din spatele atacului de panică explicat pe înțelesul tău. Ce se întâmplă în corp și de ce.",
    href: "/atac-de-panica/intelege",
  },
  {
    eyebrow: "Atacul de panică",
    title: "Ce poți face când ai un atac de panică",
    body: "Tehnici concrete care funcționează, în loc de sfaturi vagi de tipul „respiră adânc” sau „relaxează-te”.",
    href: "/atac-de-panica/actioneaza",
  },
];

const FAQS = [
  {
    q: "Ce este anxietatea?",
    a: "Anxietatea este un răspuns natural al corpului la o amenințare percepută. Devine o problemă atunci când se activează frecvent, intens și fără un pericol real. Se manifestă prin senzații fizice (palpitații, amețeli, dificultăți de respirație), gânduri catastrofice și comportamente de evitare.",
  },
  {
    q: "Care sunt simptomele anxietății?",
    a: "Palpitații, presiune în piept, amețeli, senzație de sufocare, furnicături, transpirație, tremur, greață, tensiune musculară. Mental: îngrijorare excesivă, gânduri catastrofice, dificultăți de concentrare.",
  },
  {
    q: "Cum scap de anxietate?",
    a: "Nu scapi de anxietate ca de o răceală. Obiectivul este înțelegerea și gestionarea ei. Pașii includ: înțelegerea mecanismului, tehnici de reglare a respirației, modificarea gândurilor catastrofice și, când e necesar, psihoterapie.",
  },
  {
    q: "Anxietatea se tratează?",
    a: "Da. Anxietatea este una dintre cele mai tratabile condiții din psihologie. Psihoterapia are rate de succes între 60-80%. Majoritatea persoanelor observă îmbunătățiri semnificative în 8-16 ședințe.",
  },
  {
    q: "Anxietatea e periculoasă?",
    a: "Anxietatea în sine nu este periculoasă fizic. Un atac de panică nu produce infarct și nu te face să înnebunești. Totuși, anxietatea netratată poate afecta semnificativ calitatea vieții.",
  },
  {
    q: "De ce am anxietate dacă analizele sunt normale?",
    a: "Pentru că anxietatea nu este o boală fizică, ci un răspuns al sistemului nervos. Corpul funcționează perfect mecanic. Problema este că sistemul de alarmă se activează când nu ar trebui.",
  },
  {
    q: "Trebuie să iau medicamente pentru anxietate?",
    a: "Nu neapărat. Multe persoane reușesc să gestioneze anxietatea doar prin psihoterapie. Medicația funcționează cel mai bine în combinație cu terapia, nu ca înlocuitor.",
  },
];

export default function HomePage() {
  return (
    <main className="font-work min-h-screen bg-white text-lp-navy">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="bg-white px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="mx-auto max-w-[920px] text-center">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Anxietate · Atac de panică · Psihoterapie
          </p>
          <h1 className="mt-5 font-work text-4xl font-bold leading-[1.05] tracking-tight text-lp-navy md:text-5xl lg:text-6xl">
            <span className="lp-yellow-underline">Anxietatea ta</span> are un
            sens. Aici îl înțelegi.
          </h1>
          <p className="mx-auto mt-6 max-w-[720px] text-lg leading-relaxed text-lp-mute md:text-xl">
            Ghiduri complete despre atacul de panică, anxietatea socială și
            alte forme. Scrise de psiholog, ca să te recunoști, să înțelegi
            ce ți se întâmplă și să știi ce ai de făcut.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#tipuri"
              className="lp-cta inline-flex items-center justify-center gap-2 rounded-md px-7 py-4 text-base font-semibold md:text-lg"
            >
              Descoperă ce tip de anxietate ai
              <span aria-hidden>→</span>
            </a>
            <Link
              href="/programare?din=homepage-hero"
              className="inline-flex items-center justify-center gap-2 text-base font-semibold text-lp-navy underline-offset-4 hover:underline md:text-lg"
            >
              Programează o consultație
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* TIPURI DE ANXIETATE */}
      <section id="tipuri" className="bg-lp-bg px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1180px]">
          <div className="text-center">
            <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
              Ghiduri complete
            </p>
            <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-5xl">
              Tipuri de anxietate.
            </h2>
            <p className="mx-auto mt-4 max-w-[680px] text-base leading-relaxed text-lp-mute md:text-lg">
              Anxietatea are forme diferite, cu mecanisme diferite și soluții
              diferite. Alege-o pe cea în care te recunoști.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TIPURI_FEATURED.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className={`group relative flex flex-col rounded-md border border-lp-border bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(8,29,61,0.12)] md:p-8 ${TIP_ACCENT_BORDER[s.accent]}`}
              >
                <span
                  className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] ${TIP_ACCENT_PILL[s.accent]}`}
                >
                  {s.eyebrow}
                </span>
                <h3 className="mt-4 font-work text-[26px] font-extrabold leading-tight tracking-tight text-lp-navy md:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-4 flex-1 text-[17px] leading-relaxed text-lp-mute md:text-lg">
                  {s.body}
                </p>
                <span className="mt-7 inline-flex items-center gap-1.5 text-base font-semibold text-lp-cyan-dark transition group-hover:text-lp-navy">
                  {s.cta}
                  <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>

          {/* Tipuri secundare */}
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {TIPURI_SECUNDARE.map((t) => (
              <Link
                key={t.title}
                href={t.href}
                className="group flex flex-col rounded-md border border-lp-border bg-white p-6 transition hover:-translate-y-0.5 hover:border-lp-cyan hover:shadow-[0_12px_40px_rgba(8,29,61,0.08)]"
              >
                <h3 className="font-work text-xl font-bold leading-tight text-lp-navy transition group-hover:text-lp-cyan-dark md:text-2xl">
                  {t.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-lp-mute md:text-base">
                  {t.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-lp-cyan-dark">
                  Citește ghidul
                  <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DESPRE DANIEL */}
      <section
        id="despre"
        className="bg-white px-6 py-20 md:py-24"
      >
        <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[400px] overflow-hidden rounded-md bg-lp-bg shadow-[0_20px_60px_rgba(8,29,61,0.12)] lg:mx-0">
            <Image
              src="/images/daniel-gagea.jpg"
              alt="Daniel Gagea, psiholog și psihoterapeut specializat în anxietate"
              fill
              sizes="(max-width: 1024px) 80vw, 400px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
              Cine scrie acest site
            </p>
            <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
              Nu lucrez pe simptome. Lucrez pe{" "}
              <span className="lp-yellow-underline">cauze</span>.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-lp-mute md:text-lg">
              <p>
                Sunt Daniel Gagea, psiholog clinician și psihoterapeut cu peste
                10 ani de experiență și peste 500 de clienți în cabinet și
                online.
              </p>
              <p>
                Cele mai multe resurse din România despre anxietate sunt
                incomplete, superficiale sau pline de sfaturi generice de tipul
                „respiră adânc” sau „gândește pozitiv”. Site-ul ăsta există
                tocmai ca să compenseze.
              </p>
              <p>
                Abordarea mea este diferită.. nu lucrez pe simptome, ci pe
                cauze. Te ajut să înțelegi de ce corpul și mintea ta au ajuns să
                funcționeze așa, și ce trebuie să se schimbe la rădăcină.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/despre-daniel"
                className="lp-cta inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold md:text-base"
              >
                Mai multe despre mine
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GHIDURI ATAC DE PANICĂ */}
      <section id="ghiduri" className="bg-lp-bg px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1180px]">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
                Atacul de panică, pe pași
              </p>
              <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl">
                Recunoaște, înțelege, acționează.
              </h2>
            </div>
            <Link
              href="/atac-de-panica"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-lp-cyan-dark transition hover:text-lp-cyan"
            >
              Vezi ghidul complet despre atacul de panică
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {GHIDURI.map((g) => (
              <Link
                key={g.title}
                href={g.href}
                className="group flex flex-col gap-3 rounded-md border border-lp-border bg-white p-6 transition hover:-translate-y-0.5 hover:border-lp-cyan hover:shadow-[0_12px_40px_rgba(8,29,61,0.08)]"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-lp-cyan-dark">
                  {g.eyebrow}
                </p>
                <h3 className="font-work text-lg font-bold leading-snug text-lp-navy transition group-hover:text-lp-cyan-dark md:text-xl">
                  {g.title}
                </h3>
                <p className="line-clamp-3 text-base leading-relaxed text-lp-mute md:text-lg">
                  {g.body}
                </p>
                <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-lp-cyan-dark">
                  Citește articolul
                  <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA DARK — Programare */}
      <section className="bg-lp-navy px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1100px]">
          <div className="text-center text-white">
            <p className="text-base md:text-lg font-semibold uppercase tracking-[0.22em] text-lp-cyan">
              Cabinet
            </p>
            <h2 className="mt-4 font-work text-3xl font-bold leading-tight md:text-5xl">
              Psihoterapie individuală.{" "}
              <span className="bg-lp-yellow px-2 text-lp-navy">
                Pentru anxietate.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-[680px] text-lg leading-relaxed text-white/85 md:text-xl">
              Dacă ai citit articolele și știi că ai nevoie de mai mult,
              programează o consultație. Lucrăm pe cauzele din spatele
              simptomelor, cu obiective clare și un proces predictibil. Cabinet
              la Sibiu sau online.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4">
              <Link
                href="/programare?din=homepage-cta"
                className="lp-cta inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold md:text-lg"
              >
                Programează o consultație
                <span aria-hidden>→</span>
              </Link>
              <p className="text-sm text-white/60">
                Răspund personal la fiecare mesaj.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <div className="text-center">
            <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-cyan-dark">
              Întrebări frecvente
            </p>
            <h2 className="mt-3 font-work text-3xl font-bold leading-tight tracking-tight text-lp-navy md:text-4xl lg:text-[44px]">
              Ce vor să știe oamenii despre anxietate.
            </h2>
          </div>

          <div className="mt-10 divide-y divide-lp-border rounded-md border border-lp-border bg-white">
            {FAQS.map((faq, i) => (
              <details key={i} className="group">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 px-6 py-5 text-left text-[17px] font-semibold text-lp-navy md:text-lg">
                  <span>{faq.q}</span>
                  <span
                    aria-hidden
                    className="mt-1 shrink-0 text-2xl leading-none text-lp-cyan-dark transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="px-6 pb-5 text-base leading-relaxed text-lp-mute md:text-[17px]">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
