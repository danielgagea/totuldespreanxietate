import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Atacul de panică. Ghid complet",
  description:
    "Ce este un atac de panică, de ce se întâmplă, ce simți, și ce poți face. Ghid complet bazat pe cercetare, de Daniel Gagea, psiholog clinician.",
  authors: [{ name: "Daniel Gagea" }],
  alternates: {
    canonical: "https://totuldespreanxietate.ro/tipuri/atac-de-panica",
  },
  openGraph: {
    title: "Atacul de panică. Ghid complet",
    description:
      "Ce este un atac de panică, de ce se întâmplă, ce simți, și ce poți face.",
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
      headline: "Atacul de panică. Ghid complet",
      description:
        "Ce este un atac de panică, de ce se întâmplă, ce simți, și ce poți face. Ghid complet bazat pe cercetare, de Daniel Gagea, psiholog clinician.",
      author: {
        "@type": "Person",
        name: "Daniel Gagea",
        jobTitle: "Psiholog clinician, psihoterapeut",
        url: "https://totuldespreanxietate.ro/despre-daniel/",
      },
      datePublished: "2026-03-18",
      dateModified: "2026-04-13",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://totuldespreanxietate.ro/tipuri/atac-de-panica/",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Cât durează un atac de panică?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Un atac de panică atinge de obicei intensitatea maximă în 5-10 minute și durează în medie 10-20 de minute. Atacul trece întotdeauna.",
          },
        },
        {
          "@type": "Question",
          name: "Pot să mor din cauza unui atac de panică?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nu. Un atac de panică nu este periculos din punct de vedere medical.",
          },
        },
        {
          "@type": "Question",
          name: "Funcționează terapia pentru atacuri de panică?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Da. TCC are o rată de eficacitate de 85-90% după 12-15 ședințe.",
          },
        },
      ],
    },
    {
      "@type": "Person",
      name: "Daniel Gagea",
      jobTitle: "Psiholog clinician, psihoterapeut",
      description:
        "Psiholog clinician cu peste 10 ani de experiență și peste 500 de clienți.",
      url: "https://totuldespreanxietate.ro/despre-daniel/",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Acasă", item: "https://totuldespreanxietate.ro" },
        { "@type": "ListItem", position: 2, name: "Tipuri", item: "https://totuldespreanxietate.ro/tipuri" },
        { "@type": "ListItem", position: 3, name: "Atac de panică", item: "https://totuldespreanxietate.ro/tipuri/atac-de-panica" },
      ],
    },
  ],
};

const GUIDE_CARDS: Array<{
  number: string;
  title: string;
  description: string;
  href: string;
  accent: "cyan" | "yellow" | "navy";
}> = [
  {
    number: "1",
    title: "Ce simți în timpul unui atac",
    description:
      "Senzațiile fizice, gândurile automate, și cum escaladează totul. Cercul vicios explicat pas cu pas.",
    href: "/tipuri/atac-de-panica/simptome",
    accent: "cyan",
  },
  {
    number: "2",
    title: "Atac de panică sau infarct?",
    description:
      "Diferențele practice, când mergi la medic, și perspectiva care schimbă totul.",
    href: "/tipuri/atac-de-panica/sau-infarct",
    accent: "navy",
  },
  {
    number: "3",
    title: "De ce se întâmplă",
    description:
      "Alarma falsă, cercul vicios, ce arată cercetarea, declanșatori și vulnerabilitate.",
    href: "/tipuri/atac-de-panica/de-ce-se-intampla",
    accent: "cyan",
  },
  {
    number: "4",
    title: "Ce vrea să spună psihicul",
    description:
      "Perspectiva clinică a lui Daniel Gagea, mesajul din spatele atacului de panică. Conținut unic.",
    href: "/tipuri/atac-de-panica/ce-vrea-sa-spuna-psihicul",
    accent: "navy",
  },
  {
    number: "!",
    title: "Ce faci în momentul unui atac",
    description:
      "5 pași concreți pentru momentul de criză. Ce ajută și ce NU ajută.",
    href: "/tipuri/atac-de-panica/ce-sa-faci",
    accent: "yellow",
  },
  {
    number: "6",
    title: "Când și cum să ceri ajutor",
    description:
      "85-90% se recuperează în 12-15 ședințe. Ce te oprește, ce funcționează, și următorul pas.",
    href: "/tipuri/atac-de-panica/tratament",
    accent: "cyan",
  },
];

const ACCENT_PILL: Record<"cyan" | "yellow" | "navy", string> = {
  cyan: "bg-lp-cyan text-lp-navy",
  yellow: "bg-lp-yellow text-lp-navy",
  navy: "bg-lp-navy text-white",
};

const ACCENT_BORDER: Record<"cyan" | "yellow" | "navy", string> = {
  cyan: "hover:border-lp-cyan",
  yellow: "hover:border-lp-yellow",
  navy: "hover:border-lp-navy",
};

const FAQS = [
  {
    q: "Cât durează un atac de panică?",
    a: "Un atac de panică atinge de obicei intensitatea maximă în 5-10 minute și durează în medie 10-20 de minute (Rachman, 2004). Atacul trece întotdeauna.",
  },
  {
    q: "Pot să mor din cauza unui atac de panică?",
    a: "Nu. Un atac de panică nu este periculos din punct de vedere medical. Nu produce infarct, nu produce AVC, nu produce nebunie. Este important să excluzi mai întâi cauzele medicale, dar odată confirmat că ești sănătos fizic, atacul de panică este, prin definiție, inofensiv.",
  },
  {
    q: "De ce am atacuri de panică noaptea?",
    a: "Între 25% și 70% dintre persoanele cu tulburare de panică raportează cel puțin un atac în timpul somnului. Trezirea bruscă apare în tranziția dintre fazele de somn, când corpul trece prin schimbări fiziologice naturale pe care creierul le interpretează catastrofic.",
  },
  {
    q: "Funcționează terapia pentru atacuri de panică?",
    a: "Da. Terapia cognitiv-comportamentală are o rată de eficacitate de 85-90% după 12-15 ședințe. Este cel mai studiat și cel mai eficient tratament, cu efecte care se mențin pe termen lung.",
  },
  {
    q: "Am nevoie de medicamente?",
    a: "Nu neapărat. TCC este la fel de eficientă ca medicația. Medicamentele pot fi utile în cazurile severe, dar efectele lor tind să dispară după oprirea tratamentului. Decizia se ia împreună cu un specialist.",
  },
];

export default function AtacDePanicaHub() {
  return (
    <main className="font-work min-h-screen bg-white text-lp-navy">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* CRISIS ANCHOR */}
      <div className="w-full bg-lp-yellow px-6 py-3 text-center text-sm font-semibold text-lp-navy">
        <Link
          href="/tipuri/atac-de-panica/ce-sa-faci"
          className="underline underline-offset-2 hover:no-underline"
        >
          Ai un atac de panică acum? → Mergi direct la ce poți face
        </Link>
      </div>

      {/* HERO */}
      <header className="bg-white px-6 pt-14 pb-12 md:pt-20 md:pb-16">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Tipuri de anxietate
          </p>
          <h1 className="mt-4 font-work text-4xl font-bold leading-[1.05] tracking-tight text-lp-navy md:text-5xl lg:text-6xl">
            <span className="lp-yellow-underline">Atacul</span> de panică. Ghid complet.
          </h1>
          <p className="mt-5 text-sm text-lp-mute-soft">
            De{" "}
            <Link
              href="/despre-daniel/"
              className="font-semibold text-lp-navy underline-offset-2 hover:underline"
            >
              Daniel Gagea
            </Link>
            , psiholog clinician, 10+ ani experiență, 500+ clienți
          </p>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-lp-mute md:text-xl">
            <p>
              Inima bate atât de tare că o simți în gât. Simți că nu mai poți
              respira, de parcă cineva ți-ar apăsa pieptul. Mâinile tremură,
              amețești, totul din jur pare ireal, ca și cum ai privi prin
              sticlă.
            </p>
            <p>
              <strong className="text-lp-navy">
                Dacă te recunoști în aceste cuvinte, nu ești singur și nu ești
                nebun.
              </strong>{" "}
              Ceea ce trăiești se numește atac de panică. Și în acest ghid vei
              înțelege exact ce ți se întâmplă, de ce ți se întâmplă, și ce poți
              face.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 rounded-md border border-lp-border bg-lp-bg px-6 py-8">
            <Stat number="30-40%" text="dintre adulți experimentează cel puțin un atac" />
            <Stat number="5-20 min" text="durata medie a unui atac de panică" />
            <Stat number="85-90%" text="rată de recuperare cu terapie (TCC)" />
          </div>
        </div>
      </header>

      {/* CE ESTE */}
      <section className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Definiție
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Ce este un atac de panică.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              <strong className="text-lp-navy">
                Un atac de panică este un episod brusc de frică intensă în care
                corpul tău reacționează ca și cum ai fi în pericol de moarte
                deși nu există niciun pericol real.
              </strong>{" "}
              Durează de obicei între 5 și 20 de minute. Senzațiile fizice sunt
              reale, dar pericolul nu este.
            </p>
            <p>
              Gândește-te la o alarmă de incendiu care pornește într-o clădire
              în care nu există niciun foc. Alarma urlă la fel de tare. Toată
              lumea reacționează la fel de intens. Singura diferență.. nu arde
              nimic. Asta face corpul tău.. activează sistemul de alarmă fără
              pericol real.
            </p>
            <p>
              <strong className="text-lp-navy">
                A avea un atac de panică NU înseamnă că ai o tulburare.
              </strong>{" "}
              Un atac izolat este extrem de comun. Ceea ce transformă un atac
              izolat în tulburare este{" "}
              <strong className="text-lp-navy">interpretarea</strong> pe care i-o dai și{" "}
              <strong className="text-lp-navy">frica</strong> de a-l retrăi.
            </p>
          </div>
        </div>
      </section>

      {/* GUIDE NAVIGATION */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <div className="text-center">
            <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
              Explorează ghidul
            </p>
            <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-5xl">
              Ce vrei să <span className="lp-yellow-underline">înțelegi</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-[640px] text-base leading-relaxed text-lp-mute md:text-lg">
              Șase capitole care răspund la întrebările pe care le ai acum.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {GUIDE_CARDS.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className={`group relative flex flex-col rounded-md border border-lp-border bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(8,29,61,0.12)] md:p-8 ${ACCENT_BORDER[s.accent]}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${ACCENT_PILL[s.accent]}`}
                  >
                    {s.number}
                  </span>
                </div>
                <h3 className="mt-5 font-work text-xl font-bold leading-tight tracking-tight text-lp-navy md:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-lp-mute md:text-base">
                  {s.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-lp-cyan-dark transition group-hover:text-lp-navy">
                  Citește capitolul
                  <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <div className="text-center">
            <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-cyan-dark">
              Întrebări frecvente
            </p>
            <h2 className="mt-3 font-work text-3xl font-bold leading-tight tracking-tight text-lp-navy md:text-4xl">
              Ce vor să știe oamenii despre atacul de panică.
            </h2>
          </div>

          <div className="mt-10 divide-y divide-lp-border rounded-md border border-lp-border bg-white">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group">
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
              Am lucrat cu sute de persoane care au trecut prin exact ce treci tu
              acum. Știu cum arată, știu cum se simte, și știu că se poate
              schimba.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4">
              <Link
                href="/programare/?din=tipuri-atac-de-panica"
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
