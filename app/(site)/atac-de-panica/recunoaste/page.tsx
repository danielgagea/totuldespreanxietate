import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Atacul de panică. Ce este și ce simți | Totul despre Anxietate",
  description:
    "Ce este un atac de panică, cât de comun este, simptomele fizice și mentale, și cum deosebești de infarct. De Daniel Gagea, psiholog clinician, psihoterapeut.",
  authors: [{ name: "Daniel Gagea" }],
  openGraph: {
    title: "Atacul de panică. Ce este și ce simți | Totul despre Anxietate",
    description:
      "Ce este un atac de panică, cât de comun este, simptomele fizice și mentale, și cum deosebești de infarct.",
    type: "article",
    locale: "ro_RO",
    siteName: "Totul despre Anxietate",
  },
};

/* ─── Design helpers ─── */

function Section({
  id,
  children,
  bg = "default",
}: {
  id?: string;
  children: React.ReactNode;
  bg?: "default" | "white" | "sage";
}) {
  const bgColor =
    bg === "white"
      ? "var(--color-background-white)"
      : bg === "sage"
        ? "var(--color-secondary-light)"
        : "var(--color-background)";

  return (
    <section id={id} style={{ backgroundColor: bgColor }}>
      <div className="mx-auto max-w-[760px] px-6 py-16 md:py-24">
        {children}
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-xs font-medium uppercase tracking-[0.15em] mb-6"
      style={{ color: "var(--color-text-secondary)" }}
    >
      {children}
    </p>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-lg p-5"
      style={{
        backgroundColor: "var(--color-secondary-light)",
        borderLeft: "3px solid var(--color-secondary)",
      }}
    >
      <div
        className="text-[15px] leading-[1.75]"
        style={{ color: "var(--color-text)" }}
      >
        {children}
      </div>
    </div>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      className="pl-6 my-8"
      style={{
        borderLeft: "3px solid var(--color-accent)",
      }}
    >
      <p
        className="text-[20px] leading-[1.65] italic"
        style={{
          fontFamily: "var(--font-heading)",
          color: "var(--color-primary)",
        }}
      >
        {children}
      </p>
    </blockquote>
  );
}

function Stat({ number, text }: { number: string; text: string }) {
  return (
    <div className="text-center">
      <p
        className="text-3xl md:text-4xl font-medium mb-1"
        style={{
          fontFamily: "var(--font-heading)",
          color: "var(--color-primary)",
        }}
      >
        {number}
      </p>
      <p
        className="text-[13px] leading-snug"
        style={{ color: "var(--color-text-secondary)" }}
      >
        {text}
      </p>
    </div>
  );
}

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

/* ─── Page ─── */

export default function RecunoastePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── CRISIS ANCHOR ─── */}
      <div
        className="w-full py-3 text-center text-sm font-medium"
        style={{ backgroundColor: "var(--color-accent)", color: "#FFFFFF" }}
      >
        <Link
          href="/atac-de-panica/actioneaza"
          className="underline underline-offset-2 hover:no-underline"
        >
          Ai un atac de panică acum? &rarr; Mergi direct la ce poți face
        </Link>
      </div>

      {/* ─── HERO + CE ESTE (combined) ─── */}
      <header style={{ backgroundColor: "var(--color-background)" }}>
        <div className="mx-auto max-w-[760px] px-6 pt-16 md:pt-24 pb-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-8">
            <Link
              href="/atac-de-panica/"
              className="hover:underline"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Atac de panică
            </Link>
            <span style={{ color: "var(--color-text-secondary)" }}>
              &rarr;
            </span>
            <span style={{ color: "var(--color-primary)" }} className="font-medium">
              Recunoaște
            </span>
          </nav>

          <SectionLabel>01. Înțelege</SectionLabel>

          <h1
            className="text-[28px] md:text-[38px] leading-[1.25] mb-3"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              color: "var(--color-primary)",
            }}
          >
            Ce este un atac de panică
          </h1>

          <p
            className="text-sm mb-8"
            style={{ color: "var(--color-text-secondary)" }}
          >
            De{" "}
            <span
              className="font-medium"
              style={{ color: "var(--color-primary)" }}
            >
              Daniel Gagea
            </span>
            , psiholog clinician, psihoterapeut
          </p>

          {/* Text + Stats side by side on desktop */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div
              className="flex-1 text-[17px] leading-[1.75] space-y-5"
              style={{ color: "var(--color-text)" }}
            >
              <p>
                Un atac de panică este un episod brusc de frică intensă în care
                corpul tău reacționează ca și cum ai fi în pericol de moarte
                deși nu există niciun pericol real. Durează de obicei
                între 5 și 20 de minute. Senzațiile fizice sunt
                reale. Pericolul nu este.
              </p>
              <p>
                Gândește-te la o alarmă de incendiu care pornește într-o
                clădire în care nu există niciun foc. Alarma urlă la fel de
                tare. Toată lumea reacționează la fel de intens. Singura
                diferență: nu arde nimic. Asta face corpul tău.. activează
                sistemul de alarmă al organismului, răspunsul{" "}
                {`\u201Eluptă sau fugi\u201D`}, exact ca atunci când ar
                exista un pericol real.
              </p>
            </div>

            {/* Stats card */}
            <div
              className="shrink-0 w-full md:w-[240px] rounded-xl p-6 flex flex-col gap-6 justify-center"
              style={{
                backgroundColor: "var(--color-background-white)",
                border: "1px solid var(--color-border)",
              }}
            >
              <Stat
                number="30-40%"
                text="dintre adulți experimentează cel puțin un atac"
              />
              <div
                className="w-full h-px"
                style={{ backgroundColor: "var(--color-border)" }}
              />
              <Stat
                number="2-3%"
                text="dezvoltă tulburare de panică"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Continuare „Ce este" — text + video */}
      <section style={{ backgroundColor: "var(--color-background)" }}>
        <div className="mx-auto max-w-[760px] px-6 pb-16 md:pb-24">
          <div
            className="text-[17px] leading-[1.75] space-y-5"
            style={{ color: "var(--color-text)" }}
          >
            <h3
              className="text-[20px] md:text-[24px] leading-[1.30] pt-4"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 400,
                color: "var(--color-primary)",
              }}
            >
              Cât de comun este
            </h3>
            <p>
              Aproape fiecare al treilea om pe care îl cunoști a trecut sau va
              trece prin ceva similar. Dar iată diferența critică: doar
              aproximativ 2-3% dintre oameni dezvoltă tulburare de panică
              .. adică atacuri recurente, însoțite de frică persistentă
              și schimbări de comportament.
            </p>
            <p>
              <strong>
                A avea un atac de panică NU înseamnă că ai o tulburare.
              </strong>{" "}
              Un atac izolat este extrem de comun. Ceea ce transformă un atac
              izolat în tulburare nu este senzația în sine ci{" "}
              <strong>interpretarea</strong> pe care i-o dai și{" "}
              <strong>frica</strong> de a-l retrăi.
            </p>
          </div>

        </div>
      </section>

      <style>{`
          .rec-symptoms-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 14px;
            margin: 28px 0;
          }
          @media (max-width: 767px) {
            .rec-symptoms-grid { grid-template-columns: 1fr; }
          }
          .rec-symptom-card {
            padding: 22px;
            background: var(--color-background-white, #FDFAF5);
            border-radius: 12px;
            border-left: 3px solid var(--color-secondary, #5C7A6A);
            transition: transform 0.2s ease-out;
          }
          .rec-symptom-card:hover { transform: translateY(-2px); }
          .rec-symptom-icon { font-size: 24px; margin-bottom: 8px; display: block; }
          .rec-symptom-card h4 {
            font-family: var(--font-heading), 'Fraunces', serif;
            font-size: 17px;
            font-weight: 500;
            color: var(--color-primary, #1B2B4B);
            margin-bottom: 6px;
          }
          .rec-symptom-card p {
            font-size: 15px;
            line-height: 1.7;
            color: var(--color-text, #2C2C2C);
            margin: 0;
          }
          .rec-insight {
            padding: 24px;
            background: var(--color-primary, #1B2B4B);
            border-radius: 12px;
            margin: 24px 0;
          }
          .rec-insight p {
            font-size: 16px;
            line-height: 1.7;
            color: rgba(250, 247, 242, 0.85);
            margin: 0;
          }
          .rec-insight strong { color: #C4966C; }
          .rec-thoughts-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin: 24px 0;
          }
          .rec-thought {
            padding: 10px 18px;
            background: var(--color-background-white, #FDFAF5);
            border-radius: 20px;
            border: 1px solid rgba(27, 43, 75, 0.08);
            font-family: var(--font-heading), 'Fraunces', serif;
            font-size: 15px;
            font-style: italic;
            color: var(--color-primary, #1B2B4B);
          }
        `}</style>

      {/* ─── SENZAȚIILE FIZICE ─── */}
      <Section id="simptome" bg="default">
        <SectionLabel>02. Recunoaște</SectionLabel>

        <h2
          className="text-[24px] md:text-[30px] leading-[1.30] mb-5"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 400,
            color: "var(--color-primary)",
          }}
        >
          Ce simți în timpul unui atac
        </h2>

        <p className="text-[17px] leading-[1.75] mb-2" style={{ color: "var(--color-text)" }}>
          Totul începe brusc. Uneori într-o situație specifică.. un loc aglomerat, o călătorie, o întâlnire. Alteori, aparent din senin.. acasă, la birou, sau chiar în somn.
        </p>

        <h3
          className="text-[20px] md:text-[24px] leading-[1.30] pt-6 mb-2"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 400, color: "var(--color-primary)" }}
        >
          Senzațiile fizice
        </h3>

        <div className="rec-symptoms-grid">
          {[
            { icon: "💓", title: "Inima", text: "Bate puternic, repede, de parcă ar vrea să iasă din piept. Simți durere sau presiune în piept." },
            { icon: "🫁", title: "Respirația", text: "Simți că nu primești destul aer, că te sufoci. Paradoxal, respiri prea mult, nu prea puțin." },
            { icon: "💫", title: "Amețeala", text: "Vine în val. Simți că te pierzi, că leșini, că solul se mișcă sub tine." },
            { icon: "🖐️", title: "Furnicăturile", text: "Mâinile și picioarele amorțesc.. senzație ciudată, ca și cum nu ar fi ale tale." },
            { icon: "🌡️", title: "Temperatura", text: "Alternezi între valuri de căldură și frisoane. Transpiri, simți greață." },
            { icon: "👁️", title: "Derealizarea", text: "Totul din jur pare ireal, de parcă ai privi un film cu tine. E un simptom frecvent, nu un semn de nebunie." },
          ].map((s, i) => (
            <div key={i} className="rec-symptom-card">
              <span className="rec-symptom-icon">{s.icon}</span>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </div>
          ))}
        </div>

        <div className="rec-insight">
          <p>
            <strong>Paradoxul pe care puțini oameni îl știu:</strong> senzația de sufocare este produsă de hiperventilație.. respirația rapidă și profundă scade brusc presiunea CO2 din sânge, ceea ce produce amețeală, furnicături și senzație de sufocare.
          </p>
        </div>

        <h3
          className="text-[20px] md:text-[24px] leading-[1.30] pt-6 mb-2"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 400, color: "var(--color-primary)" }}
        >
          Ce se întâmplă în minte
        </h3>

        <p className="text-[17px] leading-[1.75]" style={{ color: "var(--color-text)" }}>
          Senzațiile fizice vin cu gânduri automate.. rapide, intense, și extrem de convingătoare:
        </p>

        <div className="rec-thoughts-grid">
          {[
            {t: "Fac infarct."},
            {t: "Înnebunesc."},
            {t: "Pierd controlul."},
            {t: "Nu pot respira."},
            {t: "Trebuie să ies de aici."},
            {t: "Mă voi face de râs."},
            {t: "Nu se va termina niciodată."},
          ].map((item, i) => (
            <span key={i} className="rec-thought">&bdquo;{item.t}&rdquo;</span>
          ))}
        </div>

        <div
          className="text-[17px] leading-[1.75] space-y-5"
          style={{ color: "var(--color-text)" }}
        >
          <p>
            Aceste gânduri nu sunt raționale, dar în mijlocul atacului ele
            se simt absolut adevărate.
          </p>

          {/* H3: Cascada */}
        </div>

        {/* ─── CASCADA — Timeline vizuală ─── */}
        <div
          className="my-12 rounded-2xl p-8 md:p-10"
          style={{
            backgroundColor: "var(--color-background-white)",
            border: "1px solid var(--color-border)",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <h3
            className="text-[20px] md:text-[24px] leading-[1.30] mb-2"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 500,
              color: "var(--color-primary)",
            }}
          >
            Cascada: cum escaladează totul
          </h3>
          <p
            className="text-[14px] mb-8"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Iată ce se întâmplă de fapt, pas cu pas
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-5 top-0 bottom-0 w-px"
              style={{
                background: "linear-gradient(to bottom, var(--color-border), var(--color-accent))",
              }}
            />

            <div className="space-y-0">
              {[
                {
                  label: "Senzație",
                  text: "Apare o senzație fizică.. poate o palpitație, o amețeală, o ușoară dificultate de respirație.",
                  intensity: 0,
                },
                {
                  label: "Interpretare",
                  text: `Creierul interpretează senzația ca pericol: \u201EInima bate repede, probabil fac infarct.\u201D`,
                  intensity: 1,
                },
                {
                  label: "Frică",
                  text: "Interpretarea produce frică. Frica intensifică senzațiile fizice.",
                  intensity: 2,
                },
                {
                  label: "Confirmare",
                  text: `Senzațiile intensificate confirmă interpretarea: \u201EVedeți? E și mai rău. Chiar e ceva grav.\u201D`,
                  intensity: 3,
                },
                {
                  label: "Panică",
                  text: "Ciclul se repetă și în câteva secunde, ești în mijlocul unui atac de panică complet.",
                  intensity: 4,
                },
              ].map(({ label, text, intensity }, i) => {
                const colors = [
                  "var(--color-primary)",
                  "var(--color-primary-light)",
                  "#6B5A4E",
                  "var(--color-accent)",
                  "var(--color-accent)",
                ];
                const bgOpacities = [
                  "rgba(27, 43, 75, 0.04)",
                  "rgba(27, 43, 75, 0.06)",
                  "rgba(107, 90, 78, 0.06)",
                  "rgba(196, 97, 74, 0.06)",
                  "rgba(196, 97, 74, 0.10)",
                ];
                return (
                  <div key={i} className="relative flex items-start gap-5 pb-6 last:pb-0">
                    {/* Dot on timeline */}
                    <div
                      className="relative z-10 shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-white"
                      style={{
                        backgroundColor: colors[intensity],
                        boxShadow: intensity >= 3 ? `0 0 0 4px ${bgOpacities[intensity]}` : "none",
                      }}
                    >
                      {i + 1}
                    </div>

                    {/* Content card */}
                    <div
                      className="flex-1 rounded-xl px-5 py-4"
                      style={{
                        backgroundColor: bgOpacities[intensity],
                      }}
                    >
                      <p
                        className="text-[12px] font-semibold uppercase tracking-[0.1em] mb-1"
                        style={{ color: colors[intensity] }}
                      >
                        {label}
                      </p>
                      <p
                        className="text-[15px] leading-[1.65]"
                        style={{ color: "var(--color-text)" }}
                      >
                        {text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Loop arrow indicator */}
            <div className="flex justify-center mt-6">
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium"
                style={{
                  backgroundColor: "rgba(196, 97, 74, 0.08)",
                  color: "var(--color-accent)",
                }}
              >
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

        <Callout>
          <p>
            Asta este ceea ce cercetătorii numesc{" "}
            <strong>cercul vicios al panicii</strong> (Clark, 1986; Beck,
            1988). Nu senzația fizică produce atacul. Interpretarea
            catastrofică a senzației.. aceea produce atacul.
          </p>
        </Callout>

        <p
          className="text-[17px] leading-[1.75] mt-6"
          style={{ color: "var(--color-text)" }}
        >
          Fiecare senzație pe care o simți în timpul unui atac de panică
          are o explicație biologică clară. Niciuna nu este periculoasă.
        </p>
      </Section>

      {/* ─── PANICĂ SAU INFARCT? ─── */}
      <Section id="panica-sau-infarct" bg="white">
        <SectionLabel>03. Clarifică</SectionLabel>

        <h2
          className="text-[24px] md:text-[30px] leading-[1.30] mb-5"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 400,
            color: "var(--color-primary)",
          }}
        >
          Atac de panică sau infarct?
        </h2>

        <div
          className="text-[17px] leading-[1.75] space-y-5"
          style={{ color: "var(--color-text)" }}
        >
          <p>
            Aceasta este cea mai frecventă teamă. Și este perfect
            înțeleasă, simptomele sunt înspăimântător de
            asemănătoare.
          </p>
          <p>
            Când corpul tău declanșează răspunsul{" "}
            {`„luptă sau fugi"`}, inima pompează mai mult sânge.
            Ritmul cardiac crește. Simți presiune în piept. Aceleași
            senzații ca într-un eveniment cardiac, dar dintr-o cauză
            complet diferită.
          </p>
          <p>
            Tabelul de mai jos te ajută să vezi diferențele concrete între cele două situații. Nu înlocuiește o evaluare medicală, dar îți oferă repere clare pe care le poți folosi în momentul în care te întrebi ce ți se întâmplă.
          </p>
        </div>

        {/* Comparison table */}
        <div className="my-8 overflow-x-auto">
          <table
            className="w-full text-[15px] border-collapse rounded-xl overflow-hidden"
            style={{ border: "1px solid var(--color-border)" }}
          >
            <thead>
              <tr style={{ backgroundColor: "var(--color-primary)" }}>
                <th className="text-left px-5 py-3 text-white font-medium">
                  Caracteristică
                </th>
                <th className="text-left px-5 py-3 text-white font-medium">
                  Atac de panică
                </th>
                <th className="text-left px-5 py-3 text-white font-medium">
                  Eveniment cardiac
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Evoluție",
                  "Atinge maximum în minute, apoi scade",
                  "Nu scade spontan",
                ],
                [
                  "Durere toracică",
                  "Difuză, se schimbă ca localizare",
                  "Radiază spre braț, maxilar, spate",
                ],
                [
                  "Derealizare",
                  "Frecventă",
                  "Aproape inexistentă",
                ],
                [
                  "Context",
                  "Stres, anxietate",
                  "Efort fizic, factori de risc",
                ],
              ].map(([feature, panic, cardiac], i) => (
                <tr
                  key={i}
                  style={{
                    backgroundColor:
                      i % 2 === 0
                        ? "var(--color-background-white)"
                        : "var(--color-background)",
                    borderTop: "1px solid var(--color-border)",
                  }}
                >
                  <td
                    className="px-5 py-3 font-medium"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {feature}
                  </td>
                  <td className="px-5 py-3" style={{ color: "var(--color-text)" }}>
                    {panic}
                  </td>
                  <td className="px-5 py-3" style={{ color: "var(--color-text)" }}>
                    {cardiac}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Callout>
          <p>
            Între 9% și 43% dintre persoanele care se prezintă la urgențe
            cu durere toracică suferă de fapt de tulburare de panică.
          </p>
        </Callout>

        <div
          className="text-[17px] leading-[1.75] space-y-5 mt-8"
          style={{ color: "var(--color-text)" }}
        >
          <h3
            className="text-[20px] md:text-[24px] leading-[1.30] pt-4"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              color: "var(--color-primary)",
            }}
          >
            Dar dacă chiar am ceva la inimă?
          </h3>

          <p>
            Dacă nu ai fost niciodată evaluat medical, mergi la medic. Serios.
            Exclude mai întâi cauzele fizice. Odată ce un medic ți-a confirmat că ești sănătos
            fizic, poți începe să lucrezi cu ceea ce este: un atac de
            panică.
          </p>

          <h3
            className="text-[20px] md:text-[24px] leading-[1.30] pt-4"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              color: "var(--color-primary)",
            }}
          >
            Perspectiva care schimbă totul
          </h3>

          <p>
            Inima îți bate repede și când faci sport. Și când ești
            entuziasmat. Nimeni nu sună la urgențe pentru asta.
          </p>
        </div>

        <PullQuote>
          {`Diferența nu este senzația, ci ce-ți spui despre ea. Inima bate repede la sala de sport și ți se pare normal. Inima bate repede la metrou și imediat crezi că faci infarct. Aceeași senzație, interpretare diferită, rezultat complet diferit.`}
        </PullQuote>
      </Section>

      {/* ─── FAQ ─── */}
      <Section id="faq" bg="default">
        <h2
          className="text-[24px] md:text-[30px] leading-[1.30] mb-8"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 400,
            color: "var(--color-primary)",
          }}
        >
          Întrebări frecvente
        </h2>

        <div className="space-y-3">
          {[
            {
              q: `Cât durează un atac de panică?`,
              a: `5-10 minute intensitate maximă, 10-20 minute total. Atacul trece întotdeauna.`,
            },
            {
              q: `Pot să mor din cauza unui atac de panică?`,
              a: `Nu. Un atac de panică nu produce infarct, AVC sau nebunie. Odată confirmat medical că ești sănătos, atacul este, prin definiție, inofensiv.`,
            },
          ].map(({ q, a }) => (
            <details
              key={q}
              className="group rounded-xl"
              style={{
                backgroundColor: "var(--color-background-white)",
                border: "1px solid var(--color-border)",
              }}
            >
              <summary
                className="flex items-center justify-between cursor-pointer px-6 py-4 text-[16px] font-medium list-none"
                style={{ color: "var(--color-primary)" }}
              >
                {q}
                <span className="shrink-0 ml-4 text-xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div
                className="px-6 pb-5 text-[15px] leading-[1.70]"
                style={{ color: "var(--color-text)" }}
              >
                {a}
              </div>
            </details>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "40px" }}>
          <Link href="/atac-de-panica" style={{ display: "flex", alignItems: "center", gap: "8px", padding: "16px 20px", borderRadius: "10px", background: "var(--color-background-white)", border: "1px solid var(--color-border)", textDecoration: "none", fontSize: "15px", fontWeight: 500, color: "var(--color-primary)", transition: "transform 0.2s ease-out" }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13 8H3M3 8L7 4M3 8L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Înapoi la ghid
          </Link>
          <Link href="/atac-de-panica/intelege" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderRadius: "10px", background: "var(--color-secondary)", textDecoration: "none", fontSize: "15px", fontWeight: 600, color: "#fff", transition: "transform 0.2s ease-out" }}>
            Următorul pas: Înțelege
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </Section>
    </>
  );
}
