import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Atacul de panică. Ce este și ce simți",
  description:
    "Ce este un atac de panică, cât de comun este, simptomele fizice și mentale, și cum deosebești de infarct. De Daniel Gagea, psiholog clinician, psihoterapeut.",
  authors: [{ name: "Daniel Gagea" }],
  alternates: {
    canonical: "https://totuldespreanxietate.ro/atac-de-panica/recunoaste",
  },
  openGraph: {
    title: "Atacul de panică. Ce este și ce simți",
    description:
      "Ce este un atac de panică, cât de comun este, simptomele fizice și mentale, și cum deosebești de infarct.",
    type: "article",
    locale: "ro_RO",
    siteName: "Totul despre Anxietate",
  },
};

/* ─── JSON-LD ─── */

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Atacul de panică. Ce este și ce simți",
      description:
        "Ce este un atac de panică, cât de comun este, simptomele fizice și mentale, și cum deosebești de infarct.",
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
        "@id": "https://totuldespreanxietate.ro/atac-de-panica/recunoaste",
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
          item: "https://totuldespreanxietate.ro/atac-de-panica",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Recunoaște",
          item: "https://totuldespreanxietate.ro/atac-de-panica/recunoaste",
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
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Cât durează un atac de panică?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "5-10 minute intensitate maximă, 10-20 minute total. Atacul trece întotdeauna.",
          },
        },
        {
          "@type": "Question",
          name: "Pot să mor din cauza unui atac de panică?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nu. Un atac de panică nu produce infarct, AVC sau nebunie. Odată confirmat medical că ești sănătos, atacul este, prin definiție, inofensiv.",
          },
        },
      ],
    },
  ],
};

const SYMPTOMS = [
  { icon: "💓", title: "Inima", text: "Bate puternic, repede, de parcă ar vrea să iasă din piept. Simți durere sau presiune în piept." },
  { icon: "🫁", title: "Respirația", text: "Simți că nu primești destul aer, că te sufoci. Paradoxal, respiri prea mult, nu prea puțin." },
  { icon: "💫", title: "Amețeala", text: "Vine în val. Simți că te pierzi, că leșini, că solul se mișcă sub tine." },
  { icon: "🖐️", title: "Furnicăturile", text: "Mâinile și picioarele amorțesc.. senzație ciudată, ca și cum nu ar fi ale tale." },
  { icon: "🌡️", title: "Temperatura", text: "Alternezi între valuri de căldură și frisoane. Transpiri, simți greață." },
  { icon: "👁️", title: "Derealizarea", text: "Totul din jur pare ireal, de parcă ai privi un film cu tine. E un simptom frecvent, nu un semn de nebunie." },
];

const THOUGHTS = [
  "Fac infarct.",
  "Înnebunesc.",
  "Pierd controlul.",
  "Nu pot respira.",
  "Trebuie să ies de aici.",
  "Mă voi face de râs.",
  "Nu se va termina niciodată.",
];

const CASCADE_STEPS = [
  {
    label: "Senzație",
    text: "Apare o senzație fizică.. poate o palpitație, o amețeală, o ușoară dificultate de respirație.",
  },
  {
    label: "Interpretare",
    text: `Creierul interpretează senzația ca pericol: „Inima bate repede, probabil fac infarct.”`,
  },
  {
    label: "Frică",
    text: "Interpretarea produce frică. Frica intensifică senzațiile fizice.",
  },
  {
    label: "Confirmare",
    text: `Senzațiile intensificate confirmă interpretarea: „Vedeți? E și mai rău. Chiar e ceva grav.”`,
  },
  {
    label: "Panică",
    text: "Ciclul se repetă și în câteva secunde, ești în mijlocul unui atac de panică complet.",
  },
];

const COMPARISON_ROWS: Array<[string, string, string]> = [
  ["Evoluție", "Atinge maximum în minute, apoi scade", "Nu scade spontan"],
  ["Durere toracică", "Difuză, se schimbă ca localizare", "Radiază spre braț, maxilar, spate"],
  ["Derealizare", "Frecventă", "Aproape inexistentă"],
  ["Context", "Stres, anxietate", "Efort fizic, factori de risc"],
];

const FAQS = [
  {
    q: "Cât durează un atac de panică?",
    a: "5-10 minute intensitate maximă, 10-20 minute total. Atacul trece întotdeauna.",
  },
  {
    q: "Pot să mor din cauza unui atac de panică?",
    a: "Nu. Un atac de panică nu produce infarct, AVC sau nebunie. Odată confirmat medical că ești sănătos, atacul este, prin definiție, inofensiv.",
  },
];

export default function RecunoastePage() {
  return (
    <main className="font-work min-h-screen bg-white text-lp-navy">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── CRISIS ANCHOR ─── */}
      <div className="w-full bg-lp-yellow px-6 py-3 text-center text-sm font-semibold text-lp-navy">
        <Link
          href="/atac-de-panica/actioneaza"
          className="underline underline-offset-2 hover:no-underline"
        >
          Ai un atac de panică acum? → Mergi direct la ce poți face
        </Link>
      </div>

      {/* ─── HERO ─── */}
      <header className="bg-white px-6 pt-10 pb-12 md:pt-16 md:pb-16">
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
            <span className="font-semibold text-lp-navy">Recunoaște</span>
          </nav>

          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            01. Înțelege
          </p>
          <h1 className="mt-4 font-work text-4xl font-bold leading-[1.05] tracking-tight text-lp-navy md:text-5xl lg:text-6xl">
            Ce este un <span className="lp-yellow-underline">atac</span> de panică.
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

          <div className="mt-8 flex flex-col gap-8 md:flex-row md:gap-12">
            <div className="flex-1 space-y-5 text-lg leading-relaxed text-lp-mute md:text-xl">
              <p>
                Un atac de panică este un episod brusc de frică intensă în care
                corpul tău reacționează ca și cum ai fi în pericol de moarte
                deși nu există niciun pericol real. Durează de obicei între 5 și
                20 de minute. Senzațiile fizice sunt reale. Pericolul nu este.
              </p>
              <p>
                Gândește-te la o alarmă de incendiu care pornește într-o clădire
                în care nu există niciun foc. Alarma urlă la fel de tare. Toată
                lumea reacționează la fel de intens. Singura diferență.. nu arde
                nimic. Asta face corpul tău.. activează sistemul de alarmă al
                organismului, răspunsul {`„luptă sau fugi”`}, exact ca
                atunci când ar exista un pericol real.
              </p>
            </div>

            {/* Stats card */}
            <div className="w-full shrink-0 rounded-md border border-lp-border bg-lp-bg p-6 md:w-[260px]">
              <div className="flex flex-col gap-6">
                <Stat
                  number="30-40%"
                  text="dintre adulți experimentează cel puțin un atac"
                />
                <div className="h-px w-full bg-lp-border" />
                <Stat number="2-3%" text="dezvoltă tulburare de panică" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ─── CÂT DE COMUN ─── */}
      <section className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Cât de comun
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Aproape fiecare al <span className="lp-yellow-underline">treilea</span>{" "}
            om.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Aproape fiecare al treilea om pe care îl cunoști a trecut sau va
              trece prin ceva similar. Dar iată diferența critică: doar
              aproximativ 2-3% dintre oameni dezvoltă tulburare de panică ..
              adică atacuri recurente, însoțite de frică persistentă și schimbări
              de comportament.
            </p>
            <p>
              <strong className="text-lp-navy">
                A avea un atac de panică NU înseamnă că ai o tulburare.
              </strong>{" "}
              Un atac izolat este extrem de comun. Ceea ce transformă un atac
              izolat în tulburare nu este senzația în sine ci{" "}
              <strong className="text-lp-navy">interpretarea</strong> pe care
              i-o dai și <strong className="text-lp-navy">frica</strong> de a-l
              retrăi.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SENZAȚIILE FIZICE / MINTE / CASCADA ─── */}
      <section id="simptome" className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            02. Recunoaște
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Ce <span className="lp-yellow-underline">simți</span> în timpul unui
            atac.
          </h2>

          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            Totul începe brusc. Uneori într-o situație specifică.. un loc
            aglomerat, o călătorie, o întâlnire. Alteori, aparent din senin..
            acasă, la birou, sau chiar în somn.
          </p>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Senzațiile fizice
          </h3>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {SYMPTOMS.map((s) => (
              <div
                key={s.title}
                className="flex items-start gap-4 rounded-md border border-lp-border bg-white p-6 transition hover:-translate-y-0.5 hover:border-lp-cyan hover:shadow-[0_12px_40px_rgba(8,29,61,0.08)]"
              >
                <span className="shrink-0 text-2xl leading-none">{s.icon}</span>
                <div>
                  <h4 className="font-work text-lg font-bold leading-snug text-lp-navy">
                    {s.title}
                  </h4>
                  <p className="mt-2 text-base leading-relaxed text-lp-mute">
                    {s.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Insight box */}
          <div className="mt-10 rounded-md border-l-4 border-lp-cyan bg-lp-navy p-8 md:p-10">
            <p className="text-base leading-relaxed text-white/90 md:text-lg">
              <strong className="text-lp-yellow">
                Paradoxul pe care puțini oameni îl știu:
              </strong>{" "}
              senzația de sufocare este produsă de hiperventilație.. respirația
              rapidă și profundă scade brusc presiunea CO2 din sânge, ceea ce
              produce amețeală, furnicături și senzație de sufocare.
            </p>
          </div>

          <h3 className="mt-14 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Ce se întâmplă în minte
          </h3>

          <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
            Senzațiile fizice vin cu gânduri automate.. rapide, intense, și
            extrem de convingătoare:
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {THOUGHTS.map((t) => (
              <span
                key={t}
                className="rounded-full border border-lp-border bg-lp-bg px-4 py-2 text-[15px] italic text-lp-navy"
              >
                {`„${t}”`}
              </span>
            ))}
          </div>

          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            Aceste gânduri nu sunt raționale, dar în mijlocul atacului ele se
            simt absolut adevărate.
          </p>

          {/* CASCADA */}
          <div className="mt-12 rounded-md border border-lp-border bg-lp-bg p-8 md:p-10">
            <h3 className="font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
              Cascada: cum escaladează totul
            </h3>
            <p className="mt-2 text-sm text-lp-mute-soft md:text-base">
              Iată ce se întâmplă de fapt, pas cu pas
            </p>

            <div className="relative mt-8">
              {/* Vertical line */}
              <div
                className="absolute left-5 top-0 bottom-0 w-px"
                style={{
                  background:
                    "linear-gradient(to bottom, #e2e5ed, #4fb1d6)",
                }}
              />

              <div className="space-y-0">
                {CASCADE_STEPS.map(({ label, text }, i) => {
                  const isHot = i >= 3;
                  return (
                    <div
                      key={label}
                      className="relative flex items-start gap-5 pb-6 last:pb-0"
                    >
                      <div
                        className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                          isHot
                            ? "bg-lp-yellow text-lp-navy"
                            : "bg-lp-navy text-white"
                        }`}
                      >
                        {i + 1}
                      </div>
                      <div
                        className={`flex-1 rounded-md px-5 py-4 ${
                          isHot ? "bg-lp-yellow/20" : "bg-white"
                        }`}
                      >
                        <p
                          className={`text-xs font-semibold uppercase tracking-[0.12em] ${
                            isHot ? "text-lp-navy" : "text-lp-cyan-dark"
                          }`}
                        >
                          {label}
                        </p>
                        <p className="mt-1.5 text-base leading-relaxed text-lp-mute">
                          {text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Loop indicator */}
              <div className="mt-6 flex justify-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-lp-yellow/30 px-4 py-2 text-[13px] font-semibold text-lp-navy">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    <polyline points="21 3 21 12 12 12" />
                  </svg>
                  Ciclul se repetă
                </div>
              </div>
            </div>
          </div>

          {/* Callout */}
          <div className="mt-10 rounded-md border-l-4 border-lp-cyan bg-lp-bg p-6 md:p-8">
            <p className="text-base leading-relaxed text-lp-mute md:text-lg">
              Asta este ceea ce cercetătorii numesc{" "}
              <strong className="text-lp-navy">cercul vicios al panicii</strong>{" "}
              (Clark, 1986; Beck, 1988). Nu senzația fizică produce atacul.
              Interpretarea catastrofică a senzației.. aceea produce atacul.
            </p>
          </div>

          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            Fiecare senzație pe care o simți în timpul unui atac de panică are o
            explicație biologică clară. Niciuna nu este periculoasă.
          </p>
        </div>
      </section>

      {/* ─── PANICĂ SAU INFARCT? ─── */}
      <section id="panica-sau-infarct" className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            03. Clarifică
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Atac de panică sau{" "}
            <span className="lp-yellow-underline">infarct</span>?
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Aceasta este cea mai frecventă teamă. Și este perfect înțeleasă,
              simptomele sunt înspăimântător de asemănătoare.
            </p>
            <p>
              Când corpul tău declanșează răspunsul {`„luptă sau fugi"`}, inima
              pompează mai mult sânge. Ritmul cardiac crește. Simți presiune în
              piept. Aceleași senzații ca într-un eveniment cardiac, dar dintr-o
              cauză complet diferită.
            </p>
            <p>
              Tabelul de mai jos te ajută să vezi diferențele concrete între
              cele două situații. Nu înlocuiește o evaluare medicală, dar îți
              oferă repere clare pe care le poți folosi în momentul în care te
              întrebi ce ți se întâmplă.
            </p>
          </div>

          {/* Comparison table */}
          <div className="mt-8 overflow-x-auto rounded-md border border-lp-border">
            <table className="w-full border-collapse text-[15px]">
              <thead>
                <tr className="bg-lp-navy">
                  <th className="px-5 py-3 text-left font-semibold text-white">
                    Caracteristică
                  </th>
                  <th className="px-5 py-3 text-left font-semibold text-white">
                    Atac de panică
                  </th>
                  <th className="px-5 py-3 text-left font-semibold text-white">
                    Eveniment cardiac
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map(([feature, panic, cardiac], i) => (
                  <tr
                    key={feature}
                    className={`border-t border-lp-border ${
                      i % 2 === 0 ? "bg-white" : "bg-lp-bg"
                    }`}
                  >
                    <td className="px-5 py-3 font-semibold text-lp-navy">
                      {feature}
                    </td>
                    <td className="px-5 py-3 text-lp-mute">{panic}</td>
                    <td className="px-5 py-3 text-lp-mute">{cardiac}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Callout */}
          <div className="mt-8 rounded-md border-l-4 border-lp-cyan bg-white p-6 md:p-8">
            <p className="text-base leading-relaxed text-lp-mute md:text-lg">
              Între 9% și 43% dintre persoanele care se prezintă la urgențe cu
              durere toracică suferă de fapt de tulburare de panică.
            </p>
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Dar dacă chiar am ceva la inimă?
          </h3>
          <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
            Dacă nu ai fost niciodată evaluat medical, mergi la medic. Serios.
            Exclude mai întâi cauzele fizice. Odată ce un medic ți-a confirmat
            că ești sănătos fizic, poți începe să lucrezi cu ceea ce este: un
            atac de panică.
          </p>

          <h3 className="mt-10 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Perspectiva care schimbă totul
          </h3>
          <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
            Inima îți bate repede și când faci sport. Și când ești entuziasmat.
            Nimeni nu sună la urgențe pentru asta.
          </p>

          {/* Pull quote */}
          <blockquote className="my-10 border-l-4 border-lp-cyan pl-6 italic">
            <p className="font-work text-xl font-medium leading-relaxed text-lp-navy md:text-2xl">
              {`Diferența nu este senzația, ci ce-ți spui despre ea. Inima bate repede la sala de sport și ți se pare normal. Inima bate repede la metrou și imediat crezi că faci infarct. Aceeași senzație, interpretare diferită, rezultat complet diferit.`}
            </p>
          </blockquote>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <div className="text-center">
            <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-cyan-dark">
              Întrebări frecvente
            </p>
            <h2 className="mt-3 font-work text-3xl font-bold leading-tight tracking-tight text-lp-navy md:text-4xl">
              Ce vor să știe oamenii despre acest pas.
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
              href="/atac-de-panica/intelege"
              className="lp-cta flex items-center justify-between gap-2 rounded-md px-5 py-4 text-[15px] font-semibold"
            >
              Următorul pas: Înțelege
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
