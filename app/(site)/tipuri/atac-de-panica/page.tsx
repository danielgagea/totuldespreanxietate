import type { Metadata } from "next";
import Link from "next/link";
import { TableOfContents } from "@/components/sections/TableOfContents";
import { VideoPlaceholder } from "@/components/sections/VideoPlaceholder";

export const metadata: Metadata = {
  title: "Atacul de panică — Ghid complet | Totul despre Anxietate",
  description:
    "Ce este un atac de panică, de ce se întâmplă, ce simți, și ce poți face. Ghid complet bazat pe cercetare, de Daniel Gagea, psiholog clinician.",
  authors: [{ name: "Daniel Gagea" }],
  openGraph: {
    title: "Atacul de panică — Ghid complet",
    description:
      "Ce este un atac de panică, de ce se întâmplă, ce simți, și ce poți face. Ghid complet bazat pe cercetare.",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Atacul de panică — Ghid complet",
      description:
        "Ce este un atac de panică, de ce se întâmplă, ce simți, și ce poți face. Ghid complet bazat pe cercetare, de Daniel Gagea, psiholog clinician.",
      author: {
        "@type": "Person",
        name: "Daniel Gagea",
        jobTitle: "Psiholog clinician",
        url: "https://totuldespreanxietate.ro/despre-daniel/",
      },
      datePublished: "2026-03-18",
      dateModified: "2026-03-18",
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
            text: "Nu. Un atac de panică nu este periculos din punct de vedere medical. Nu produce infarct, nu produce AVC, nu produce nebunie.",
          },
        },
        {
          "@type": "Question",
          name: "De ce am atacuri de panică noaptea?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Între 25% și 70% dintre persoanele cu tulburare de panică raportează cel puțin un atac de panică în timpul somnului.",
          },
        },
        {
          "@type": "Question",
          name: "Funcționează terapia pentru atacuri de panică?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Da. Terapia cognitiv-comportamentală are o rată de eficacitate de 85-90% după 12-15 ședințe.",
          },
        },
        {
          "@type": "Question",
          name: "Am nevoie de medicamente?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nu neapărat. TCC este la fel de eficientă ca medicația pentru tulburarea de panică. Decizia se ia împreună cu un specialist.",
          },
        },
      ],
    },
    {
      "@type": "Person",
      name: "Daniel Gagea",
      jobTitle: "Psiholog clinician",
      description:
        "Psiholog clinician cu peste 10 ani de experiență și peste 500 de clienți.",
      url: "https://totuldespreanxietate.ro/despre-daniel/",
    },
  ],
};

/* ─── Reusable section wrapper ─── */
function Section({
  id,
  children,
  bg = "default",
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  bg?: "default" | "white" | "sage";
  className?: string;
}) {
  const bgMap = {
    default: "var(--color-background)",
    white: "var(--color-background-white)",
    sage: "var(--color-secondary-light)",
  };
  return (
    <section
      id={id}
      className={`scroll-mt-8 ${className}`}
      style={{ backgroundColor: bgMap[bg] }}
    >
      <div className="mx-auto max-w-[760px] px-6 py-16 md:py-24">
        {children}
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-xs font-medium uppercase tracking-[0.15em] mb-4"
      style={{ color: "var(--color-text-secondary)" }}
    >
      {children}
    </p>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-lg p-5 my-8"
      style={{
        backgroundColor: "var(--color-secondary-light)",
        borderLeft: "3px solid var(--color-secondary)",
      }}
    >
      {children}
    </div>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      className="my-8 pl-6 italic"
      style={{
        fontFamily: "var(--font-heading)",
        fontSize: "20px",
        lineHeight: 1.55,
        color: "var(--color-primary)",
        borderLeft: "3px solid var(--color-accent)",
      }}
    >
      {children}
    </blockquote>
  );
}

function Stat({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div className="text-center">
      <p
        className="text-4xl md:text-5xl font-medium mb-2"
        style={{
          fontFamily: "var(--font-heading)",
          color: "var(--color-primary)",
        }}
      >
        {number}
      </p>
      <p
        className="text-sm"
        style={{ color: "var(--color-text-secondary)" }}
      >
        {text}
      </p>
    </div>
  );
}

/* ─── Page ─── */
export default function AtacDePanicaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── CRISIS ANCHOR ─── */}
      <div
        className="w-full py-3 text-center text-sm font-medium"
        style={{
          backgroundColor: "var(--color-accent)",
          color: "#FFFFFF",
        }}
      >
        <a
          href="#ce-faci-in-momentul-unui-atac"
          className="underline underline-offset-2 hover:no-underline"
        >
          Ai un atac de panică acum? → Mergi direct la ce poți face
        </a>
      </div>

      {/* ─── HERO ─── */}
      <header
        className="py-16 md:py-24"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        <div className="mx-auto max-w-[760px] px-6">
          <p
            className="text-xs font-medium uppercase tracking-[0.15em] mb-6"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Tipuri de anxietate
          </p>
          <h1
            className="text-[28px] md:text-[38px] leading-[1.25] mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              color: "var(--color-primary)",
            }}
          >
            Atacul de panică — Ghid complet
          </h1>
          <p
            className="text-sm mb-8"
            style={{ color: "var(--color-text-secondary)" }}
          >
            De{" "}
            <Link
              href="/despre-daniel/"
              className="font-medium"
              style={{ color: "var(--color-primary)" }}
            >
              Daniel Gagea
            </Link>
            , psiholog clinician — 10+ ani experiență, 500+ clienți
            <span className="mx-2">·</span>
            Ultima actualizare: Martie 2026
          </p>

          {/* Intro empatic */}
          <div
            className="text-[17px] leading-[1.75] space-y-5"
            style={{ color: "var(--color-text)" }}
          >
            <p>
              Inima bate atât de tare că o simți în gât. Simți că nu mai poți
              respira — de parcă cineva ți-ar apăsa pieptul. Mâinile tremură.
              Amețești. Totul din jur pare ireal, ca și cum ai privi prin
              sticlă.
            </p>
            <p>
              Și apoi vine gândul:{" "}
              <strong>
                „Fac infarct.” „Înnebunesc.” „Trebuie să ies de aici — acum.”
              </strong>
            </p>
            <p>
              Ești convins că se petrece ceva grav. Că de data asta chiar e
              ceva. Că trebuie să suni la urgențe, să ajungi la spital, să faci
              ceva — orice — ca să se oprească.
            </p>
            <p>
              Și totuși, se oprește. De fiecare dată, se oprește.
            </p>
            <p>
              <strong>
                Dacă te recunoști în aceste cuvinte, nu ești singur și nu ești
                nebun.
              </strong>{" "}
              Ceea ce trăiești se numește atac de panică. Și în acest ghid vei
              înțelege exact ce ți se întâmplă, de ce ți se întâmplă, și ce poți
              face.
            </p>
          </div>
        </div>
      </header>

      {/* ─── LAYOUT: ToC + Content ─── */}
      <div className="flex gap-12 mx-auto max-w-[1100px] px-6">
        <TableOfContents />

        <main className="min-w-0 flex-1">
          {/* ═══════════════════════════════════════════════
              SECȚIUNEA 1 — CE ESTE
          ═══════════════════════════════════════════════ */}
          <Section id="ce-este" bg="white">
            <SectionLabel>01 — Înțelege</SectionLabel>
            <h2
              className="text-[24px] md:text-[30px] leading-[1.30] mb-6"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 400,
                color: "var(--color-primary)",
              }}
            >
              Ce este un atac de panică
            </h2>

            <div className="space-y-5 text-[17px] leading-[1.75]" style={{ color: "var(--color-text)" }}>
              <p>
                <strong>
                  Un atac de panică este un episod brusc de frică intensă în care
                  corpul tău reacționează ca și cum ai fi în pericol de moarte —
                  deși nu există niciun pericol real.
                </strong>{" "}
                Durează de obicei între 5 și 20 de minute (Rachman, 2004).
                Senzațiile fizice sunt reale. Pericolul nu este.
              </p>

              <p>
                Gândește-te la o alarmă de incendiu care pornește într-o clădire
                în care nu există niciun foc. Alarma urlă la fel de tare. Toată
                lumea reacționează la fel de intens. Singura diferență: nu arde
                nimic.
              </p>

              <p>
                Asta face corpul tău în timpul unui atac de panică.{" "}
                <strong>
                  Activează sistemul de alarmă al organismului — răspunsul „luptă
                  sau fugi" — exact ca atunci când ar exista un pericol real.
                </strong>{" "}
                Inima pompează mai mult sânge. Respirația se accelerează. Mușchii
                se tensionează. Totul se pregătește pentru o amenințare care nu
                există.
              </p>
            </div>

            <h3
              className="text-[20px] md:text-[24px] leading-[1.35] mt-12 mb-4"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 500,
                color: "var(--color-primary)",
              }}
            >
              Cât de comun este
            </h3>

            <div className="space-y-5 text-[17px] leading-[1.75]" style={{ color: "var(--color-text)" }}>
              <p>
                Poate ți se pare că ești singurul care trece prin asta. Nu ești.
              </p>
            </div>

            {/* Stats row */}
            <div
              className="grid grid-cols-2 gap-6 my-10 py-8 px-6 rounded-xl"
              style={{
                backgroundColor: "var(--color-background)",
                border: "1px solid var(--color-border)",
              }}
            >
              <Stat number="30–40%" text="dintre adulți experimentează cel puțin un atac de panică" />
              <Stat number="2–3%" text="dezvoltă tulburare de panică (atacuri recurente)" />
            </div>

            <div className="space-y-5 text-[17px] leading-[1.75]" style={{ color: "var(--color-text)" }}>
              <p>
                Aproape fiecare al treilea om pe care îl cunoști a trecut sau va
                trece prin ceva similar. Dar iată diferența critică:{" "}
                <strong>
                  doar aproximativ 2-3% dintre oameni dezvoltă tulburare de
                  panică
                </strong>{" "}
                — adică atacuri recurente, însoțite de frică persistentă și
                schimbări de comportament (Kessler, Berglund et al., 2005).
              </p>

              <p>
                Cu alte cuvinte:{" "}
                <strong>
                  a avea un atac de panică NU înseamnă că ai o tulburare.
                </strong>{" "}
                Un atac izolat este extrem de comun. Ceea ce transformă un atac
                izolat în tulburare nu este senzația în sine — ci{" "}
                <strong>interpretarea</strong> pe care i-o dai și{" "}
                <strong>frica</strong> de a-l retrăi.
              </p>
            </div>

            <div className="mt-10">
              <VideoPlaceholder title="Daniel Gagea explică: Ce este un atac de panică" />
            </div>
          </Section>

          {/* ═══════════════════════════════════════════════
              SECȚIUNEA 2 — CE SIMȚI
          ═══════════════════════════════════════════════ */}
          <Section id="ce-simti" bg="default">
            <SectionLabel>02 — Recunoaște</SectionLabel>
            <h2
              className="text-[24px] md:text-[30px] leading-[1.30] mb-6"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 400,
                color: "var(--color-primary)",
              }}
            >
              Ce simți în timpul unui atac
            </h2>

            <div className="space-y-5 text-[17px] leading-[1.75]" style={{ color: "var(--color-text)" }}>
              <p>
                Totul începe brusc. Uneori într-o situație specifică — un loc
                aglomerat, o călătorie, o întâlnire. Alteori, aparent din senin —
                acasă, la birou, sau chiar în somn.
              </p>
            </div>

            <h3
              className="text-[20px] md:text-[24px] leading-[1.35] mt-12 mb-4"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 500,
                color: "var(--color-primary)",
              }}
            >
              Senzațiile fizice
            </h3>

            <div className="space-y-5 text-[17px] leading-[1.75]" style={{ color: "var(--color-text)" }}>
              <p>
                <strong>Inima</strong> începe să bată puternic, repede, de parcă
                ar vrea să iasă din piept. Simți{" "}
                <strong>durere sau presiune în piept</strong> — și imediat te
                gândești la ce e mai rău.
              </p>
              <p>
                <strong>Respirația</strong> se schimbă. Simți că nu primești
                destul aer, că te sufoci, că ceva îți blochează gâtul. Și iată
                paradoxul pe care puțini oameni îl știu:{" "}
                <strong>
                  în timpul unui atac de panică, respiri PREA MULT, nu prea puțin.
                </strong>{" "}
                Senzația de sufocare este produsă de hiperventilație — respirația
                rapidă și profundă scade brusc presiunea CO2 din sânge
                (hipocapnie), ceea ce produce amețeală, furnicături și senzație de
                sufocare (Meuret, Ritz, Wilhelm &amp; Roth, 2005; Clark et al.,
                1985).
              </p>
              <p>
                <strong>Amețeala</strong> vine în val. Simți că te pierzi, că
                leșini, că solul se mișcă sub tine. Mâinile și picioarele{" "}
                <strong>amorțesc sau furnicătură</strong> — senzație ciudată, ca
                și cum nu ar fi ale tale.
              </p>
              <p>
                <strong>Transpiri</strong> — uneori abundent, uneori doar palme
                umede. Alternezi între{" "}
                <strong>valuri de căldură și frisoane</strong>. Simți{" "}
                <strong>greață</strong>, ca și cum ai vomita.
              </p>
              <p>
                Și poate cea mai înspăimântătoare senzație:{" "}
                <strong>totul din jur pare ireal.</strong> De parcă ai privi un
                film cu tine însuți. De parcă lumea s-a decuplat. Asta se numește
                derealizare, și este un simptom frecvent, nu un semn de nebunie.
              </p>
            </div>

            <h3
              className="text-[20px] md:text-[24px] leading-[1.35] mt-12 mb-4"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 500,
                color: "var(--color-primary)",
              }}
            >
              Ce se întâmplă în minte
            </h3>

            <div className="space-y-5 text-[17px] leading-[1.75]" style={{ color: "var(--color-text)" }}>
              <p>
                Senzațiile fizice vin cu <strong>gânduri automate</strong> —
                rapide, intense, și extrem de convingătoare în acel moment:
              </p>
              <ul
                className="space-y-2 pl-0 list-none"
                style={{ color: "var(--color-primary)" }}
              >
                {[
                  `„Fac infarct.”`,
                  `„Înnebunesc.”`,
                  `„Pierd controlul.”`,
                  `„Nu pot respira — mă sufoc.”`,
                  `„Trebuie să ies de aici.”`,
                  `„Mă voi face de râs.”`,
                  `„Nu se va termina niciodată.”`,
                ].map((thought) => (
                  <li
                    key={thought}
                    className="font-medium italic pl-4"
                    style={{
                      fontFamily: "var(--font-heading)",
                      borderLeft: "2px solid var(--color-border)",
                    }}
                  >
                    {thought}
                  </li>
                ))}
              </ul>
              <p style={{ color: "var(--color-text)" }}>
                Aceste gânduri nu sunt raționale. Dar în mijlocul atacului, ele se
                simt <strong>absolut adevărate</strong>. Și tocmai asta este
                problema.
              </p>
            </div>

            <h3
              className="text-[20px] md:text-[24px] leading-[1.35] mt-12 mb-4"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 500,
                color: "var(--color-primary)",
              }}
            >
              Cascada: cum escaladează totul
            </h3>

            <div className="space-y-5 text-[17px] leading-[1.75]" style={{ color: "var(--color-text)" }}>
              <p>Iată ce se întâmplă de fapt, pas cu pas:</p>
              <ol className="space-y-4 pl-0 list-none counter-reset-[step]">
                {[
                  "Apare o senzație fizică — poate o palpitație, o amețeală, o ușoară dificultate de respirație. Poate fi cauzată de stres, oboseală, cafea, sau pur și simplu de corpul tău funcționând normal.",
                  "Creierul interpretează senzația ca pericol: „Inima bate repede — probabil fac infarct.”",
                  "Interpretarea produce frică. Frica intensifică senzațiile fizice — inima bate și mai repede, respirația se accelerează și mai mult.",
                  "Senzațiile intensificate confirmă interpretarea: „Vedeți? E și mai rău. Chiar e ceva grav.”",
                  "Ciclul se repetă — și în câteva secunde, ești în mijlocul unui atac de panică complet.",
                ].map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span
                      className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium text-white"
                      style={{ backgroundColor: "var(--color-primary)" }}
                    >
                      {i + 1}
                    </span>
                    <span className="pt-1">{step}</span>
                  </li>
                ))}
              </ol>

              <Callout>
                <p className="text-[15px] leading-[1.70]" style={{ color: "var(--color-text)" }}>
                  Asta este ceea ce cercetătorii numesc{" "}
                  <strong>cercul vicios al panicii</strong> (Clark, 1986; Beck,
                  1988). Nu senzația fizică produce atacul.{" "}
                  <strong>
                    Interpretarea catastrofică a senzației — aceea produce atacul.
                  </strong>
                </p>
              </Callout>

              <p>
                <strong>
                  Fiecare senzație pe care o simți în timpul unui atac de panică
                  are o explicație biologică clară. Niciuna nu este periculoasă.
                </strong>{" "}
                Corpul tău face exact ceea ce e programat să facă într-o situație
                de pericol. Singura problemă: pericolul nu există.
              </p>
            </div>
          </Section>

          {/* ═══════════════════════════════════════════════
              SECȚIUNEA 3 — PANICĂ SAU INFARCT?
          ═══════════════════════════════════════════════ */}
          <Section id="panica-sau-infarct" bg="white">
            <SectionLabel>03 — Clarifică</SectionLabel>
            <h2
              className="text-[24px] md:text-[30px] leading-[1.30] mb-6"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 400,
                color: "var(--color-primary)",
              }}
            >
              Atac de panică sau infarct?
            </h2>

            <div className="space-y-5 text-[17px] leading-[1.75]" style={{ color: "var(--color-text)" }}>
              <p>
                Aceasta este, de departe, cea mai frecventă teamă. Și este
                perfect înțeleasă — simptomele sunt înspăimântător de
                asemănătoare.
              </p>
              <p>
                <strong>Iată de ce:</strong> Când corpul tău declanșează
                răspunsul „luptă sau fugi”, inima pompează mai mult sânge ca
                să-ți ofere energia necesară să fugi sau să lupți. Ritmul cardiac
                crește. Simți presiune în piept. Aceleași senzații ca într-un
                eveniment cardiac — dar dintr-o cauză complet diferită.
              </p>
            </div>

            {/* Comparison table */}
            <div
              className="my-10 rounded-xl overflow-hidden"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <table className="w-full text-sm">
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
                <tbody style={{ color: "var(--color-text)" }}>
                  {[
                    ["Evoluție", "Atinge maximum în minute, apoi scade", "Nu scade spontan"],
                    ["Durere toracică", "Difuză, se schimbă ca localizare", "Radiază spre braț, maxilar, spate"],
                    ["Derealizare", "Frecventă", "Aproape inexistentă"],
                    ["Context", "Stres, anxietate", "Efort fizic, factori de risc"],
                  ].map(([label, panic, cardiac], i) => (
                    <tr
                      key={i}
                      style={{
                        backgroundColor:
                          i % 2 === 0
                            ? "var(--color-background-white)"
                            : "var(--color-background)",
                      }}
                    >
                      <td className="px-5 py-3 font-medium">{label}</td>
                      <td className="px-5 py-3">{panic}</td>
                      <td className="px-5 py-3">{cardiac}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Callout>
              <p className="text-[15px] leading-[1.70]" style={{ color: "var(--color-text)" }}>
                <strong>Între 9% și 43%</strong> dintre persoanele care se
                prezintă la urgențe cu durere toracică suferă de fapt de tulburare
                de panică, nu de o afecțiune cardiacă (Barsky et al., 1994; Katon
                et al., 1988; Morris et al., 1997).
              </p>
            </Callout>

            <div className="space-y-5 text-[17px] leading-[1.75]" style={{ color: "var(--color-text)" }}>
              <h3
                className="text-[20px] md:text-[24px] leading-[1.35] mt-8 mb-4"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 500,
                  color: "var(--color-primary)",
                }}
              >
                Dar dacă chiar am ceva la inimă?
              </h3>
              <p>
                <strong>
                  Dacă nu ai fost niciodată evaluat medical, mergi la medic.
                </strong>{" "}
                Serios. Exclude mai întâi cauzele fizice — hipertiroidismul,
                consumul excesiv de cofeină, prolapsul de valvă mitrală, sau alte
                afecțiuni care pot mima simptomele panicii (Taylor, 2000;
                DSM-IV-TR, APA, 2000).
              </p>
              <p>
                Odată ce un medic ți-a confirmat că ești sănătos fizic, poți
                începe să lucrezi cu ceea ce este: un atac de panică.
              </p>

              <h3
                className="text-[20px] md:text-[24px] leading-[1.35] mt-8 mb-4"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 500,
                  color: "var(--color-primary)",
                }}
              >
                Perspectiva care schimbă totul
              </h3>
              <p>
                Inima îți bate repede și când faci sport. Și când ești
                entuziasmat. Și în momente de excitare sexuală.{" "}
                <strong>Nimeni nu sună la urgențe pentru asta.</strong>
              </p>

              <PullQuote>
                Diferența nu este senzația. Diferența este ce-ți spui despre
                senzație. „Inima bate repede la sala de sport” → normal. „Inima
                bate repede la metrou" → „Fac infarct!” Aceeași senzație.
                Interpretare diferită. Rezultat complet diferit.
              </PullQuote>
            </div>
          </Section>

          {/* ═══════════════════════════════════════════════
              SECȚIUNEA 4 — DE CE SE ÎNTÂMPLĂ
          ═══════════════════════════════════════════════ */}
          <Section id="de-ce-se-intampla" bg="default">
            <SectionLabel>04 — Înțelege mecanismul</SectionLabel>
            <h2
              className="text-[24px] md:text-[30px] leading-[1.30] mb-6"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 400,
                color: "var(--color-primary)",
              }}
            >
              De ce se întâmplă — mecanismul
            </h2>

            <div className="space-y-5 text-[17px] leading-[1.75]" style={{ color: "var(--color-text)" }}>
              <h3
                className="text-[20px] md:text-[24px] leading-[1.35] mt-2 mb-4"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 500,
                  color: "var(--color-primary)",
                }}
              >
                Alarma falsă
              </h3>
              <p>
                Imaginează-ți o alarmă de incendiu care pornește într-o clădire
                goală. Nu există foc. Nu există fum. Dar alarma urlă la fel de
                tare ca într-un incendiu real. Și toți oamenii din clădire
                reacționează ca și cum ar fi un incendiu adevărat.
              </p>
              <p>
                <strong>
                  Asta face creierul tău în timpul unui atac de panică.
                </strong>{" "}
                Declanșează o alarmă de urgență — completă, cu toate sirenele și
                luminile — pentru o amenințare care nu există.
              </p>
              <p>
                Acest sistem de alarmă se numește{" "}
                <strong>răspunsul „luptă sau fugi”</strong> și ne-a protejat ca
                specie de milioane de ani. Când strămoșii noștri vedeau un leu,
                acest sistem le oferea energia să fugă: inima pompează mai mult
                sânge, respirația se accelerează, mușchii se tensionează,
                simțurile se ascut.
              </p>
              <p>
                <strong>
                  Problema este că, în tulburarea de panică, acest sistem se
                  activează fără leu.
                </strong>{" "}
                Se activează pentru o palpitație. Pentru o ușoară amețeală. Pentru
                o senzație de sufocare cauzată de stres. Alarma pornește pentru un
                stimul intern pe care creierul îl interpretează ca pericol iminent
                (Clark, 1986; Beck, 1988).
              </p>

              <h3
                className="text-[20px] md:text-[24px] leading-[1.35] mt-12 mb-4"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 500,
                  color: "var(--color-primary)",
                }}
              >
                Ce arată cercetarea
              </h3>

              <Callout>
                <p className="text-[15px] leading-[1.70]" style={{ color: "var(--color-text)" }}>
                  Într-un studiu cu monitorizare cardiacă 24 de ore,{" "}
                  <strong>
                    40% dintre atacurile de panică auto-raportate NU s-au asociat
                    cu nicio creștere reală a ritmului cardiac
                  </strong>{" "}
                  (Barsky et al., 1994). Inima nu bătea mai repede. Persoanele
                  doar <strong>credeau</strong> că bate mai repede.
                </p>
              </Callout>

              <p>
                Într-un alt studiu, persoanele cu risc de panică au primit{" "}
                <strong>informații false</strong> despre ritmul lor cardiac (li
                s-a spus că le bate inima repede, deși nu era așa). Au raportat
                semnificativ mai multe simptome de panică —{" "}
                <strong>
                  deși ritmul cardiac real era identic
                </strong>{" "}
                între grupuri (Story &amp; Craske, 2008).
              </p>

              <PullQuote>
                Problema nu este în ce simți. Problema este ce crezi despre ce
                simți.
              </PullQuote>

              <p>
                Persoanele cu tulburare de panică nu au un corp defect. Nu au un
                sistem nervos „stricat”. Studiile arată că{" "}
                <strong>
                  nu sunt mai reactive fiziologic la stres
                </strong>{" "}
                decât persoanele fără panică (Taylor, 2000). Ceea ce diferă este{" "}
                <strong>modul în care interpretează senzațiile</strong> — și asta
                este ceva ce se poate schimba.
              </p>

              <h3
                className="text-[20px] md:text-[24px] leading-[1.35] mt-12 mb-4"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 500,
                  color: "var(--color-primary)",
                }}
              >
                Declanșatorii — nu doar situații externe
              </h3>
              <p>
                Poate crezi că atacurile tale sunt declanșate de locuri (metroul,
                avionul, spațiile aglomerate). Dar de cele mai multe ori, locurile
                devin problematice nu pentru ceea ce sunt, ci{" "}
                <strong>
                  pentru că induc o anumită senzație internă
                </strong>{" "}
                (Clark, 1986; Barlow, 2002).
              </p>
              <p>
                <strong>
                  80% dintre persoanele cu tulburare de panică evită activ
                  substanțele și activitățile
                </strong>{" "}
                care ar putea produce senzații similare panicii (White et al.,
                2006).
              </p>

              <h3
                className="text-[20px] md:text-[24px] leading-[1.35] mt-12 mb-4"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 500,
                  color: "var(--color-primary)",
                }}
              >
                Vulnerabilitate, nu defect
              </h3>
              <p>
                Atacurile de panică debutează de obicei la începutul vieții adulte
                — vârsta medie de debut este <strong>24 de ani</strong> (Burke et
                al., 1990) — și sunt adesea precedate de un eveniment de viață
                stresant: o mutare, o separare, o pierdere (Faravelli &amp;
                Pallanti, 1989).
              </p>
              <p>
                Nu este o alegere. Nu este o slăbiciune. Este un mod în care
                creierul tău a învățat să proceseze senzațiile —{" "}
                <strong>și poate fi reprogramat</strong>.
              </p>
            </div>
          </Section>

          {/* ═══════════════════════════════════════════════
              SECȚIUNEA 5 — CE VREA SĂ SPUNĂ PSIHICUL
          ═══════════════════════════════════════════════ */}
          <Section id="ce-vrea-sa-spuna-psihicul" bg="white">
            <SectionLabel>05 — Perspectiva lui Daniel</SectionLabel>
            <h2
              className="text-[24px] md:text-[30px] leading-[1.30] mb-6"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 400,
                color: "var(--color-primary)",
              }}
            >
              Ce vrea să spună psihicul
            </h2>

            {/* Author card */}
            <div
              className="flex items-start gap-5 rounded-xl p-6 mb-8"
              style={{
                backgroundColor: "var(--color-background)",
                border: "1px solid var(--color-border)",
              }}
            >
              {/* Photo placeholder */}
              <div
                className="shrink-0 w-16 h-20 rounded-lg flex items-center justify-center"
                style={{
                  backgroundColor: "var(--color-secondary-light)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  style={{ color: "var(--color-secondary)" }}
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M20 21a8 8 0 1 0-16 0" />
                </svg>
              </div>
              <div>
                <p
                  className="font-medium text-[15px]"
                  style={{ color: "var(--color-primary)" }}
                >
                  Daniel Gagea
                </p>
                <p
                  className="text-[13px] mt-1"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Psiholog clinician · 10+ ani experiență · 500+ clienți
                </p>
                <p
                  className="text-[14px] mt-2 leading-relaxed"
                  style={{ color: "var(--color-text)" }}
                >
                  Această secțiune reflectă perspectiva mea clinică, dezvoltată
                  din lucrul direct cu sute de persoane cu atacuri de panică.
                </p>
              </div>
            </div>

            <div className="space-y-5 text-[17px] leading-[1.75]" style={{ color: "var(--color-text)" }}>
              <p>
                Tot ce ai citit până acum explică <strong>cum</strong>{" "}
                funcționează atacul de panică. Dar există și o altă întrebare, mai
                profundă: <strong>de ce ți se întâmplă tocmai ție?</strong>
              </p>
              <p>
                Majoritatea abordărilor tratează atacul de panică ca pe o eroare
                de sistem — creierul s-a „stricat” și trebuie reparat. Și în mare
                parte, au dreptate. Dar în cabinetul meu, lucrul cu sute de
                persoane cu atacuri de panică mi-a arătat și altceva.
              </p>

              <PullQuote>
                Mulți dintre clienții mei au descoperit ceva neașteptat: sub frică
                era furie. Furie pe care nu și-o permiteau. Pe un părinte. Pe un
                partener. Pe o situație. Furie înghițită de ani de zile, care
                și-a găsit un alt drum de exprimare — prin corp.
              </PullQuote>

              <h3
                className="text-[20px] md:text-[24px] leading-[1.35] mt-12 mb-4"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 500,
                  color: "var(--color-primary)",
                }}
              >
                Regulile invizibile
              </h3>
              <p>
                Multe persoane cu atacuri de panică trăiesc după niște reguli pe
                care nu le-au ales conștient — ceea ce teoria control-mastery
                numește <strong>credințe patogene</strong> (Weiss, Sampson, 1986):
              </p>
              <ul className="space-y-3 pl-0 list-none">
                {[
                  `„Trebuie să am grijă de toată lumea înainte de mine.”`,
                  `„Dacă sunt fericit, urmează ceva rău.”`,
                  `„Nu am voie să fiu furios — furia distruge relațiile.”`,
                  `„Dacă cer ajutor, voi fi controlat sau voi datora ceva.”`,
                  `„Dacă devin independent, voi fi singur.”`,
                ].map((rule) => (
                  <li
                    key={rule}
                    className="italic pl-5 text-[15px]"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--color-primary)",
                      borderLeft: "2px solid var(--color-accent)",
                    }}
                  >
                    {rule}
                  </li>
                ))}
              </ul>
              <p>
                Aceste reguli nu sunt scrise nicăieri. Dar le simți în corp de
                fiecare dată când le încalci — printr-un val de anxietate,
                printr-o senzație de sufocare, prin palpitații care vin „din
                senin".
              </p>

              <h3
                className="text-[20px] md:text-[24px] leading-[1.35] mt-12 mb-4"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 500,
                  color: "var(--color-primary)",
                }}
              >
                Când fericirea declanșează panică
              </h3>
              <p>
                Una dintre cele mai contra-intuitive descoperiri din cercetarea
                clinică:{" "}
                <strong>
                  atacurile de panică pot fi declanșate nu de pericol, ci de
                  fericire și succes.
                </strong>
              </p>
              <p>
                O femeie a avut primul atac de panică nu într-un moment de pericol
                — ci într-o după-amiază în care era entuziasmată și fericită,
                așteptând să-și revadă soțul (Gassner, 2004). Ani mai târziu, în
                terapie, a simțit cum furnicăturile îi urcă prin corp — semnul
                unui atac de panică incipient. Terapeuta a spus un singur lucru.
                Furnicăturile s-au oprit. Femeia a spus:{" "}
                <strong>„Am nevoie doar să plâng.”</strong>
              </p>

              <h3
                className="text-[20px] md:text-[24px] leading-[1.35] mt-12 mb-4"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 500,
                  color: "var(--color-primary)",
                }}
              >
                Nu toți, dar mulți
              </h3>
              <p>
                Nu toată lumea cu atacuri de panică are o poveste din copilărie în
                spatele lor. Dar dacă te recunoști în aceste rânduri — dacă simți
                că atacul tău de panică încearcă să-ți spună ceva — un terapeut
                te poate ajuta să asculți mesajul, într-un spațiu sigur, fără
                grabă.
              </p>
            </div>

            <div className="mt-10">
              <VideoPlaceholder title="Daniel Gagea: Ce vrea să spună psihicul prin atacul de panică" />
            </div>
          </Section>

          {/* ═══════════════════════════════════════════════
              SECȚIUNEA 6 — FRICA DE URMĂTORUL ATAC
          ═══════════════════════════════════════════════ */}
          <Section id="frica-de-urmatorul-atac" bg="default">
            <SectionLabel>06 — Ciclul fricii</SectionLabel>
            <h2
              className="text-[24px] md:text-[30px] leading-[1.30] mb-6"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 400,
                color: "var(--color-primary)",
              }}
            >
              Frica de următorul atac
            </h2>

            <div className="space-y-5 text-[17px] leading-[1.75]" style={{ color: "var(--color-text)" }}>
              <p>
                Poate atacul în sine a durat 15 minute.{" "}
                <strong>
                  Dar frica că va reveni durează zile, săptămâni, luni.
                </strong>
              </p>
              <p>
                Aceasta este, de fapt, caracteristica principală a tulburării de
                panică — nu atacul în sine, ci{" "}
                <strong>teama persistentă de a-l retrăi</strong> (DSM-IV-TR, APA,
                2000). Medicii o numesc „frica de frică”.
              </p>

              <h3
                className="text-[20px] md:text-[24px] leading-[1.35] mt-12 mb-6"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 500,
                  color: "var(--color-primary)",
                }}
              >
                Trei mecanisme care țin panica vie
              </h3>

              {/* Mechanism cards */}
              <div className="space-y-4">
                {[
                  {
                    num: "1",
                    title: "Anxietatea anticipativă",
                    text: "„Ce fac dacă mi se întâmplă din nou? La serviciu? La magazin? În mașină?” Această îngrijorare constantă menține corpul într-o stare de alertă permanentă — exact starea care produce senzațiile pe care te temi să le retrăiești.",
                  },
                  {
                    num: "2",
                    title: "Evitarea",
                    text: "„Mai bine nu merg acolo.” 98% dintre persoanele cu tulburare de panică evită anumite situații (White et al., 2006). Evitarea funcționează pe termen scurt — te calmează imediat. Dar fiecare evitare trimite creierului un mesaj: „Ai avut dreptate — pericolul era real.”",
                  },
                  {
                    num: "3",
                    title: "Comportamentele de siguranță",
                    text: "Telefonul mereu încărcat. Pastila în buzunar „pentru orice eventualitate”. Verificarea repetată a pulsului. 80% dintre persoanele cu panică evită inclusiv senzațiile fizice — renunță la cafea, la sport, la orice ar putea produce senzații similare panicii.",
                  },
                ].map(({ num, title, text }) => (
                  <div
                    key={num}
                    className="rounded-xl p-6"
                    style={{
                      backgroundColor: "var(--color-background-white)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium text-white"
                        style={{ backgroundColor: "var(--color-accent)" }}
                      >
                        {num}
                      </span>
                      <div>
                        <h4
                          className="font-semibold text-[17px] mb-2"
                          style={{ color: "var(--color-primary)" }}
                        >
                          {title}
                        </h4>
                        <p
                          className="text-[15px] leading-[1.70]"
                          style={{ color: "var(--color-text)" }}
                        >
                          {text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h3
                className="text-[20px] md:text-[24px] leading-[1.35] mt-12 mb-4"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 500,
                  color: "var(--color-primary)",
                }}
              >
                Spirala descendentă
              </h3>
              <p>
                Dacă nu este adresată, tulburarea de panică urmează o traiectorie
                previzibilă:
              </p>
              <p
                className="text-center font-medium py-4 text-[15px]"
                style={{ color: "var(--color-primary)" }}
              >
                Evitare → izolare → depresie → automediere → și mai multă panică
              </p>

              <div
                className="grid grid-cols-2 gap-6 my-8 py-8 px-6 rounded-xl"
                style={{
                  backgroundColor: "var(--color-background-white)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <Stat number="12%" text="remisie fără tratament la 5 ani" />
                <Stat number="7×" text="costuri medicale mai mari vs. populația generală" />
              </div>

              <p>
                <strong>
                  Panica nu „trece de la sine” — se cronicizează.
                </strong>{" "}
                Dar există o veste bună. O veste foarte bună. Și vine în
                secțiunea următoare.
              </p>
            </div>
          </Section>

          {/* ═══════════════════════════════════════════════
              SECȚIUNEA 7 — CE FACI ÎN MOMENTUL UNUI ATAC
          ═══════════════════════════════════════════════ */}
          <Section id="ce-faci-in-momentul-unui-atac" bg="sage">
            <SectionLabel>07 — Acționează</SectionLabel>
            <h2
              className="text-[24px] md:text-[30px] leading-[1.30] mb-2"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 400,
                color: "var(--color-primary)",
              }}
            >
              Ce faci în momentul unui atac
            </h2>
            <p
              className="text-[15px] mb-8"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Dacă ești în mijlocul unui atac de panică acum, citește doar textul
              bold.
            </p>

            <div className="space-y-6">
              {[
                {
                  num: "1",
                  title: "Oprește-te. Nu fugi.",
                  text: "Impulsul de a fugi este puternic. Dar fuga confirmă creierului că pericolul este real. Rămâi unde ești. Dacă ești într-un loc sigur — și ești, chiar dacă nu simți asta acum — rămâi.",
                },
                {
                  num: "2",
                  title: "Amintește-ți: nu mori, nu înnebunești, nu pierzi controlul.",
                  text: "Gândurile tale de panică au un track record de 0%. De câte ori ai crezut că mori — și de câte ori s-a întâmplat? Răspunsul este zero. De fiecare dată.",
                },
                {
                  num: "3",
                  title: "Observă, nu lupta.",
                  text: "Nu încerca să oprești senzațiile cu forța. Privește-le ca un observator: „Inima bate repede. Interesant. Mâinile tremură. Ok.” Când observi în loc să lupți, senzațiile își pierd puterea.",
                },
                {
                  num: "4",
                  title: "Expiră lung și lent.",
                  text: "NU respira adânc și repede — asta este hiperventilație. În schimb: inspiră ușor pe nas, 4 secunde. Apoi expiră lent pe gură, 6 secunde — ca și cum ai sufla printr-un pai. Repetă de 5-6 ori.",
                },
                {
                  num: "5",
                  title: "Rămâi în situație.",
                  text: "Anxietatea are un plafon. Nu crește la infinit. Dacă rămâi unde ești, fără să fugi și fără să lupți, după 10-20 de minute anxietatea începe să scadă natural.",
                },
              ].map(({ num, title, text }) => (
                <div
                  key={num}
                  className="rounded-xl p-6"
                  style={{
                    backgroundColor: "var(--color-background-white)",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg font-medium text-white"
                      style={{ backgroundColor: "var(--color-primary)" }}
                    >
                      {num}
                    </span>
                    <div>
                      <h3
                        className="font-semibold text-[17px] mb-2"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {title}
                      </h3>
                      <p
                        className="text-[15px] leading-[1.70]"
                        style={{ color: "var(--color-text)" }}
                      >
                        {text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3
              className="text-[20px] md:text-[24px] leading-[1.35] mt-12 mb-4"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 500,
                color: "var(--color-primary)",
              }}
            >
              Ce NU ajută
            </h3>
            <div className="space-y-3 text-[15px] leading-[1.70]" style={{ color: "var(--color-text)" }}>
              {[
                { label: "Respirația adâncă ca ritual", text: "Un studiu controlat a arătat că adăugarea trainingului respirației la TCC a scăzut rata de recuperare de la 57% la 37% la 12 luni (Schmidt et al., 2000)." },
                { label: "Fuga din situație", text: "Te calmezi imediat, dar confirmi creierului că pericolul era real." },
                { label: "Căutarea repetată de reasigurare", text: "„Spune-mi că sunt ok” funcționează 5 minute. Apoi nevoia revine, mai puternică." },
                { label: "Monitorizarea obsesivă a corpului", text: "Cu cât cauți mai mult semne de pericol, cu atât găsești mai multe (Clark & Beck, 2010)." },
              ].map(({ label, text }) => (
                <div
                  key={label}
                  className="rounded-lg p-4"
                  style={{
                    backgroundColor: "rgba(196, 97, 74, 0.06)",
                    border: "1px solid rgba(196, 97, 74, 0.15)",
                  }}
                >
                  <p>
                    <strong>{label}</strong> — {text}
                  </p>
                </div>
              ))}
            </div>
            <p
              className="mt-6 text-[15px] italic"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Aceste tehnici te ajută să treci prin atac. Dar nu înlocuiesc
              ajutorul profesionist.
            </p>
          </Section>

          {/* ═══════════════════════════════════════════════
              SECȚIUNEA 8 — CÂND SĂ CERI AJUTOR
          ═══════════════════════════════════════════════ */}
          <Section id="cand-sa-ceri-ajutor" bg="white">
            <SectionLabel>08 — Pasul următor</SectionLabel>
            <h2
              className="text-[24px] md:text-[30px] leading-[1.30] mb-6"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 400,
                color: "var(--color-primary)",
              }}
            >
              Când să ceri ajutor profesionist
            </h2>

            <div
              className="grid grid-cols-3 gap-4 my-8 py-8 px-6 rounded-xl"
              style={{
                backgroundColor: "var(--color-background)",
                border: "1px solid var(--color-border)",
              }}
            >
              <Stat number="85–90%" text="rată de recuperare cu TCC" />
              <Stat number="12–15" text="ședințe — nu ani de zile" />
              <Stat number="78%" text="remisie completă (APA)" />
            </div>

            <div className="space-y-5 text-[17px] leading-[1.75]" style={{ color: "var(--color-text)" }}>
              <p>
                Studii derulate la Universitățile Oxford, Pennsylvania și New York
                au confirmat aceste rezultate în mod repetat. La 15 luni după
                terminarea terapiei,{" "}
                <strong>
                  85% dintre pacienții tratați cu terapie cognitivă nu mai aveau
                  atacuri de panică
                </strong>{" "}
                (Clark et al., 1994). Iar{" "}
                <strong>
                  20% dintre pacienți au raportat ameliorare semnificativă după
                  doar 2 ședințe
                </strong>{" "}
                (Clerkin et al., 2008).
              </p>

              <h3
                className="text-[20px] md:text-[24px] leading-[1.35] mt-12 mb-6"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 500,
                  color: "var(--color-primary)",
                }}
              >
                Ce te oprește — și de ce nu ar trebui
              </h3>

              {[
                {
                  myth: `„Nu am nevoie de ani de terapie.”`,
                  reality: "Nu ai nevoie. Protocolul standard este 12-15 ședințe. Structurat. Practic. Focalizat pe prezent.",
                },
                {
                  myth: `„Terapia înseamnă să stau pe divan și să vorbesc despre copilărie.”`,
                  reality: "TCC pentru panică este complet diferită. Înveți să-ți înțelegi ciclul, să-ți confrunți interpretările catastrofice și să-ți recapeți viața pas cu pas.",
                },
                {
                  myth: `„E mai bine să iau pastile.”`,
                  reality: "TCC este la fel de eficientă ca medicația, cu un avantaj major: efectele se mențin pe termen lung (Hollon et al., 2006), pentru că ai învățat abilități pe care le poți folosi singur.",
                },
                {
                  myth: `„La mine nu funcționează — am panică de ani de zile.”`,
                  reality: "Helen avea 27 de ani și 11 ani de tulburare de panică — aproximativ 8 atacuri pe zi. După 12 ședințe de terapie cognitivă, frecvența atacurilor s-a redus semnificativ (Clark & Beck, 2010).",
                },
              ].map(({ myth, reality }) => (
                <div
                  key={myth}
                  className="rounded-xl p-5 mb-4"
                  style={{
                    backgroundColor: "var(--color-background)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <p
                    className="font-medium italic text-[15px] mb-2"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    {myth}
                  </p>
                  <p className="text-[15px] leading-[1.70]" style={{ color: "var(--color-text)" }}>
                    {reality}
                  </p>
                </div>
              ))}

              <h3
                className="text-[20px] md:text-[24px] leading-[1.35] mt-12 mb-4"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 500,
                  color: "var(--color-primary)",
                }}
              >
                Când este momentul
              </h3>
              <p>
                Dacă recunoști oricare dintre aceste semne, este momentul:
              </p>
              <ul className="space-y-2 mt-4 pl-0 list-none">
                {[
                  "Atacuri de panică mai mult de o dată pe lună",
                  "Eviți locuri, activități sau situații din cauza panicii",
                  "Ai renunțat la lucruri importante pentru tine",
                  "Folosești alcool, medicamente sau alte substanțe ca să faci față",
                  "Simți că viața ta se restrânge",
                  "Te temi constant de următorul atac",
                ].map((sign) => (
                  <li
                    key={sign}
                    className="flex items-start gap-3 text-[15px]"
                    style={{ color: "var(--color-text)" }}
                  >
                    <span
                      className="shrink-0 mt-1.5 w-2 h-2 rounded-full"
                      style={{ backgroundColor: "var(--color-accent)" }}
                    />
                    {sign}
                  </li>
                ))}
              </ul>

              <Callout>
                <p className="text-[15px] leading-[1.70]" style={{ color: "var(--color-text)" }}>
                  <strong>Comparația care contează:</strong> Fără tratament — 12%
                  remisie la 5 ani. Cu terapie — 85% recuperare la 15 luni.
                  Diferența nu este noroc. Este o decizie.
                </p>
              </Callout>
            </div>

            {/* ─── CTA ─── */}
            <div
              className="rounded-xl p-8 mt-12 text-center"
              style={{
                backgroundColor: "var(--color-background)",
                border: "1px solid var(--color-border)",
              }}
            >
              <h3
                className="text-[24px] mb-3"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 400,
                  color: "var(--color-primary)",
                }}
              >
                Următorul pas
              </h3>
              <p
                className="text-[15px] mb-6 max-w-md mx-auto leading-relaxed"
                style={{ color: "var(--color-text)" }}
              >
                Primul pas este o conversație. Nu un angajament, nu o promisiune —
                doar o discuție în care înțelegem împreună ce ți se întâmplă și ce
                poți face.
              </p>
              <Link
                href="/programare/"
                className="inline-block rounded-lg px-7 py-3.5 text-[16px] font-medium text-white cursor-pointer"
                style={{
                  backgroundColor: "var(--color-accent)",
                  transition: "var(--transition-fast)",
                }}
              >
                Programează o conversație cu Daniel
              </Link>
            </div>

            {/* ─── Continuă să citești ─── */}
            <div className="mt-12 pt-8" style={{ borderTop: "1px solid var(--color-border)" }}>
              <h3
                className="text-[19px] font-semibold mb-4"
                style={{ color: "var(--color-primary)" }}
              >
                Continuă să citești
              </h3>
              <div className="grid gap-3">
                {[
                  { label: "Ce faci când ai un atac de panică — tehnici detaliate", href: "/gestionare/tehnici-imediate" },
                  { label: "Pot face infarct de la un atac de panică?", href: "/intrebari/pot-face-infarct-din-anxietate" },
                  { label: "Ce este anxietatea generalizată", href: "/tipuri/anxietate-generalizata" },
                  { label: "Despre Daniel Gagea", href: "/despre-daniel/" },
                ].map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-center gap-3 rounded-lg px-4 py-3 text-[15px] font-medium cursor-pointer"
                    style={{
                      color: "var(--color-primary)",
                      backgroundColor: "var(--color-background)",
                      border: "1px solid var(--color-border)",
                      transition: "var(--transition-fast)",
                    }}
                  >
                    <span>→</span>
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </Section>

          {/* ═══════════════════════════════════════════════
              FAQ
          ═══════════════════════════════════════════════ */}
          <Section id="faq" bg="default">
            <SectionLabel>Întrebări frecvente</SectionLabel>
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
                  q: "Cât durează un atac de panică?",
                  a: "Un atac de panică atinge de obicei intensitatea maximă în 5-10 minute și durează în medie 10-20 de minute (Rachman, 2004). Starea de anxietate crescută poate persista mai mult, dar senzațiile intense de panică sunt limitate în timp. Atacul trece întotdeauna.",
                },
                {
                  q: "Pot să mor din cauza unui atac de panică?",
                  a: "Nu. Un atac de panică nu este periculos din punct de vedere medical. Nu produce infarct, nu produce AVC, nu produce nebunie. Panica în sine nu crește direct riscul de suicid — studiile au demonstrat că orice risc de suicid în tulburarea de panică este cauzat de comorbiditate (depresie, abuz de substanțe), nu de panică în sine (Vickers & McNally, 2004). Este important să excluzi mai întâi cauzele medicale printr-un consult, dar odată confirmat că ești sănătos fizic, atacul de panică este — prin definiție — inofensiv.",
                },
                {
                  q: "De ce am atacuri de panică noaptea?",
                  a: "Între 25% și 70% dintre persoanele cu tulburare de panică raportează cel puțin un atac de panică în timpul somnului (Barlow, 2002; Craske & Rowe, 1997; Mellman & Uhde, 1989). Trezirea bruscă apare de obicei în tranziția dintre Stadiul 2 și Stadiul 3 de somn, când corpul trece prin schimbări fiziologice naturale pe care creierul le interpretează catastrofic — chiar și în somn.",
                },
                {
                  q: "Funcționează terapia pentru atacuri de panică?",
                  a: "Da. Terapia cognitiv-comportamentală are o rată de eficacitate de 85-90% după 12-15 ședințe (Clark et al., 1994; Beck et al., 1992). Este cel mai studiat și cel mai eficient tratament pentru tulburarea de panică, cu efecte care se mențin pe termen lung — chiar și după ce terapia se încheie (Hollon et al., 2006). În peste 25 de studii clinice independente, 40-90% dintre pacienții tratați nu mai prezentau tulburarea de panică la sfârșitul tratamentului.",
                },
                {
                  q: "Am nevoie de medicamente?",
                  a: "Nu neapărat. TCC este la fel de eficientă ca medicația pentru tulburarea de panică (Barlow et al., 2000). Medicamentele pot fi utile, mai ales în cazurile severe, dar efectele lor tind să dispară după oprirea tratamentului. Combinația TCC + farmacoterapie nu prezintă un avantaj semnificativ față de TCC singură (Barlow et al., 2000). Decizia se ia împreună cu un specialist, în funcție de situația ta specifică.",
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
                    <span className="shrink-0 ml-4 text-xl transition-transform group-open:rotate-45">+</span>
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
          </Section>

          {/* ═══════════════════════════════════════════════
              REFERINȚE
          ═══════════════════════════════════════════════ */}
          <Section id="referinte" bg="white">
            <details>
              <summary
                className="cursor-pointer text-[16px] font-medium list-none flex items-center gap-2"
                style={{ color: "var(--color-primary)" }}
              >
                <span className="text-xl transition-transform group-open:rotate-45">+</span>
                Referințe științifice (47 surse)
              </summary>
              <ol
                className="mt-6 space-y-2 text-[13px] leading-[1.60] pl-6"
                style={{ color: "var(--color-text-secondary)" }}
              >
                <li>American Psychiatric Association. (1998). <em>Practice guideline for the treatment of patients with panic disorder.</em> American Journal of Psychiatry, 155(5 Suppl), 1-34.</li>
                <li>American Psychiatric Association. (2000). <em>Diagnostic and Statistical Manual of Mental Disorders</em> (4th ed., text rev.). Washington, DC: Author.</li>
                <li>Barlow, D.H. (2002). <em>Anxiety and its disorders: The nature and treatment of anxiety and panic</em> (2nd ed.). New York: Guilford Press.</li>
                <li>Barlow, D.H., Gorman, J.M., Shear, M.K., &amp; Woods, S.W. (2000). Cognitive-behavioral therapy, imipramine, or their combination for panic disorder. <em>JAMA</em>, 283, 2529-2536.</li>
                <li>Barsky, A.J., Cleary, P.D., Sarnie, M.K., &amp; Rushkin, J.N. (1994). Panic disorder, palpitations, and the awareness of cardiac activity. <em>Journal of Nervous and Mental Disease</em>, 182, 63-71.</li>
                <li>Beck, A.T. (1988). Cognitive approaches to panic disorder: Theory and therapy. In S. Rachman &amp; J.D. Maser (Eds.), <em>Panic: Psychological perspectives</em> (pp. 91-109).</li>
                <li>Beck, A.T., &amp; Greenberg, R.L. (1988). Cognitive therapy of panic disorder. In R.E. Hales &amp; A.J. Frances (Eds.), <em>APA Annual Review</em> (Vol. 7, pp. 571-583).</li>
                <li>Beck, A.T., Sokol, L., Clark, D.A., Berchick, R., &amp; Wright, F. (1992). A crossover study of focused cognitive therapy for panic disorder. <em>American Journal of Psychiatry</em>, 149, 778-783.</li>
                <li>Burke, K.C., Burke, J.D., Regier, D.A., &amp; Rae, D.S. (1990). Age at onset of selected mental disorders. <em>Archives of General Psychiatry</em>, 47, 511-518.</li>
                <li>Chambless, D.L., &amp; Peterman, M. (2004). Evidence on CBT for generalized anxiety disorder and panic disorder. In R.L. Leahy (Ed.), <em>Contemporary cognitive therapy</em> (pp. 86-115).</li>
                <li>Clark, D.M. (1986). A cognitive approach to panic. <em>Behaviour Research and Therapy</em>, 24, 461-470.</li>
                <li>Clark, D.M. (1988). A cognitive model of panic attacks. In S. Rachman &amp; J.D. Maser (Eds.), <em>Panic: Psychological perspectives</em> (pp. 71-89).</li>
                <li>Clark, D.M. (1996). Panic disorder: From theory to therapy. In P.M. Salkovskis (Ed.), <em>Frontiers of cognitive therapy</em> (pp. 318-344).</li>
                <li>Clark, D.M. (1997). Panic disorder and social phobia. In D.M. Clark &amp; C.G. Fairburn (Eds.), <em>Science and practice of CBT</em> (pp. 121-153).</li>
                <li>Clark, D.M., Salkovskis, P.M., Hackmann, A., et al. (1994). A comparison of cognitive therapy, applied relaxation, and imipramine. <em>British Journal of Psychiatry</em>, 164, 759-769.</li>
                <li>Clark, D.M., Salkovskis, P.M., &amp; Chalkley, A.J. (1985). Respiratory control as treatment for panic attacks. <em>JBTEP</em>, 16, 23-30.</li>
                <li>Clark, D.A., &amp; Beck, A.T. (2010). <em>Cognitive therapy of anxiety disorders.</em> New York: Guilford Press.</li>
                <li>Clerkin, E.M., Teachman, B.A., &amp; Smith-Janik, S.B. (2008). Sudden gains in group CBT for panic disorder. <em>Behaviour Research and Therapy</em>, 46, 1244-1250.</li>
                <li>Craske, M.G., &amp; Rowe, M.K. (1997). Nocturnal panic. <em>Clinical Psychology: Science and Practice</em>, 4, 153-174.</li>
                <li>Craske, M.G., Lang, A.J., Aikins, D., &amp; Mystkowski, J.L. (2005). CBT for nocturnal panic. <em>Behavior Therapy</em>, 36, 43-54.</li>
                <li>Faravelli, C., &amp; Pallanti, S. (1989). Recent life events and panic disorder. <em>American Journal of Psychiatry</em>, 146, 622-626.</li>
                <li>Faravelli, C., Paterniti, S., &amp; Scarpato, A. (1995). 5-year prospective follow-up of panic disorder. <em>Comprehensive Psychiatry</em>, 36, 271-277.</li>
                <li>Franklin, J.A., &amp; Andrews, G. (1989). Stress and the onset of agoraphobia. <em>Australian Psychologist</em>, 24, 203-219.</li>
                <li>Gassner, S.M. (2004). The role of traumatic experience in panic disorder and agoraphobia. <em>Psychoanalytic Psychology</em>, 21(2), 222-243.</li>
                <li>Hollon, S.D., Stuart, G.L., &amp; Strunk, D. (2006). Enduring effects for CBT in depression and anxiety. <em>Annual Review of Psychology</em>, 57, 285-315.</li>
                <li>Katon, W.J., et al. (1988). Panic disorder: Epidemiology in primary care. <em>Journal of Family Practice</em>, 23, 233-239.</li>
                <li>Kessler, R.C., Berglund, P., Demler, O., et al. (2005). Lifetime prevalence and age-of-onset distributions of DSM-IV disorders. <em>Archives of General Psychiatry</em>, 62, 593-602.</li>
                <li>Landon, T.M., &amp; Barlow, D.H. (2004). Cognitive-behavioral treatment for panic disorder: Current status. <em>Journal of Psychiatric Practice</em>, 10, 211-226.</li>
                <li>Leahy, R.L., Holland, S.J.F., &amp; McGinn, L.K. (2012). <em>Treatment plans and interventions for depression and anxiety disorders</em> (2nd ed.). New York: Guilford Press.</li>
                <li>Lint, D.W., Taylor, C.B., Fried-Behar, R., &amp; Kenardy, J.A. (1995). Ambulatory monitoring in assessment of panic disorder. <em>Behaviour Research and Therapy</em>, 33, 779-782.</li>
                <li>Mellman, T.A., &amp; Uhde, T.W. (1989). Sleep panic attacks. <em>American Journal of Psychiatry</em>, 146, 1204-1207.</li>
                <li>Meuret, A.E., Ritz, T., Wilhelm, F.H., &amp; Roth, W.T. (2005). Voluntary hyperventilation in treatment of panic disorder. <em>Clinical Psychology Review</em>, 25, 738-752.</li>
                <li>Morris, A., Baker, B., Devins, G.M., &amp; Shapiro, C.M. (1997). Prevalence of panic disorder in cardiac outpatients. <em>Canadian Journal of Psychiatry</em>, 42, 185-190.</li>
                <li>Norton, G.R., Dorward, J., &amp; Cox, B.J. (1986). Factors associated with panic attacks in nonclinical subjects. <em>Behavior Therapy</em>, 17, 239-252.</li>
                <li>Norton, G.R., Harrison, B., Hauch, J., &amp; Rhodes, L. (1985). Characteristics of people with infrequent panic attacks. <em>Journal of Abnormal Psychology</em>, 94, 216-221.</li>
                <li>Rachman, S. (2004). <em>Anxiety</em> (2nd ed.). Hove, UK: Psychology Press.</li>
                <li>Schmidt, N.B., Woolaway-Bickel, K., et al. (2000). Dismantling CBT for panic disorder. <em>Journal of Consulting and Clinical Psychology</em>, 68, 417-424.</li>
                <li>Siegel, L., Jones, W.C., &amp; Wilson, J.O. (1990). Economic consequences of panic disorder. <em>Journal of Anxiety Disorders</em>, 4, 201-211.</li>
                <li>Story, T.J., &amp; Craske, M.G. (2008). Responses to false physiological feedback in panic. <em>Behaviour Research and Therapy</em>, 46, 1001-1008.</li>
                <li>Stroufe, L.A. (1997). Psychopathology as an outcome of development. <em>Development and Psychopathology</em>, 9, 251-268.</li>
                <li>Taylor, S. (2000). <em>Understanding and treating panic disorder.</em> Chichester, UK: Wiley.</li>
                <li>Taylor, C.B., et al. (1986). Ambulatory heart rate changes in panic attacks. <em>American Journal of Psychiatry</em>, 143, 478-482.</li>
                <li>Torgersen, S. (1983). Genetic factors in anxiety disorders. <em>Archives of General Psychiatry</em>, 40, 1085-1089.</li>
                <li>Vickers, K., &amp; McNally, R.J. (2004). Panic disorder and suicide attempt in the NCS. <em>Journal of Abnormal Psychology</em>, 113, 582-591.</li>
                <li>Weiss, J., Sampson, H., &amp; The Mount Zion Psychotherapy Research Group. (1986). <em>The psychoanalytic process.</em> New York: Guilford Press.</li>
                <li>White, K.S., Brown, T.A., Somers, T.J., &amp; Barlow, D.H. (2006). Avoidance behavior in panic disorder. <em>Behaviour Research and Therapy</em>, 44, 147-157.</li>
                <li>White, K.S., &amp; Barlow, D.H. (2002). Panic disorder and agoraphobia. In D.H. Barlow (Ed.), <em>Anxiety and its disorders</em> (2nd ed., pp. 328-379).</li>
              </ol>
            </details>

            {/* ─── Author footer ─── */}
            <div
              className="flex items-center gap-5 mt-12 pt-8"
              style={{ borderTop: "1px solid var(--color-border)" }}
            >
              <div
                className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: "var(--color-secondary-light)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  style={{ color: "var(--color-secondary)" }}
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M20 21a8 8 0 1 0-16 0" />
                </svg>
              </div>
              <div>
                <p
                  className="font-medium text-[15px]"
                  style={{ color: "var(--color-primary)" }}
                >
                  Daniel Gagea
                </p>
                <p
                  className="text-[13px]"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Psiholog clinician · 10+ ani experiență · 500+ clienți
                </p>
                <p
                  className="text-[13px] mt-0.5"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Ultima actualizare: Martie 2026
                </p>
              </div>
            </div>
          </Section>
        </main>
      </div>
    </>
  );
}
