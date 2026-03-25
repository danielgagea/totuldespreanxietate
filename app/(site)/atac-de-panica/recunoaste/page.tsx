import type { Metadata } from "next";
import Link from "next/link";
import { VideoPlaceholder } from "@/components/sections/VideoPlaceholder";

export const metadata: Metadata = {
  title: `Atacul de panică. Ce este și ce simți | Totul despre Anxietate`,
  description:
    `Ce este un atac de panică, cât de comun este, simptomele fizice și mentale, și cum deosebești de infarct. De Daniel Gagea, psiholog clinician, psihoterapeut.`,
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

/* ─── Page ─── */

export default function RecunoastePage() {
  return (
    <>
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

          {/* Video placeholder */}
          <div className="mt-10">
            <VideoPlaceholder title={`Daniel Gagea explică: Ce este un atac de panică`} />
          </div>
        </div>
      </section>

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

        <div
          className="text-[17px] leading-[1.75] space-y-5"
          style={{ color: "var(--color-text)" }}
        >
          <p>
            Totul începe brusc. Uneori într-o situație specifică..
            un loc aglomerat, o călătorie, o întâlnire. Alteori, aparent
            din senin.. acasă, la birou, sau chiar în somn.
          </p>

          {/* H3: Senzațiile fizice */}
          <h3
            className="text-[20px] md:text-[24px] leading-[1.30] pt-4"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              color: "var(--color-primary)",
            }}
          >
            Senzațiile fizice
          </h3>

          <p>
            Inima începe să bată puternic, repede, de parcă ar vrea să
            iasă din piept. Simți durere sau presiune în piept și
            imediat te gândești la ce e mai rău.
          </p>
          <p>
            Respirația se schimbă. Simți că nu primești destul aer, că
            te sufoci, că ceva îți blochează gâtul. Și iată
            paradoxul pe care puțini oameni îl știu: în timpul unui atac
            de panică, respiri <strong>PREA MULT</strong>, nu prea puțin.
            Senzația de sufocare este produsă de hiperventilație..
            respirația rapidă și profundă scade brusc presiunea CO2 din
            sânge (hipocapnie), ceea ce produce amețeală, furnicături și
            senzație de sufocare.
          </p>
          <p>
            Amețeala vine în val. Simți că te pierzi, că leșini, că
            solul se mișcă sub tine. Mâinile și picioarele amorțesc sau
            furnicătură.. senzație ciudată, ca și cum nu ar fi ale
            tale.
          </p>
          <p>
            Transpiri.. uneori abundent, uneori doar palme umede. Alternezi
            între valuri de căldură și frisoane. Simți greață, ca
            și cum ai vomita.
          </p>
          <p>
            Și poate cea mai înspăimântătoare senzație: totul din jur
            pare ireal. De parcă ai privi un film cu tine însuți. De parcă
            lumea s-a decuplat. Asta se numește{" "}
            <strong>derealizare</strong>, și este un simptom frecvent, nu un
            semn de nebunie.
          </p>

          {/* H3: Ce se întâmplă în minte */}
          <h3
            className="text-[20px] md:text-[24px] leading-[1.30] pt-4"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              color: "var(--color-primary)",
            }}
          >
            Ce se întâmplă în minte
          </h3>

          <p>
            Senzațiile fizice vin cu gânduri automate.. rapide, intense,
            și extrem de convingătoare:
          </p>
        </div>

        {/* Thought list, italic Fraunces with accent left border */}
        <div
          className="my-6 pl-6 space-y-3"
          style={{ borderLeft: "3px solid var(--color-accent)" }}
        >
          {[
            `„Fac infarct.”`,
            `„Înnebunesc.”`,
            `„Pierd controlul.”`,
            `„Nu pot respira, mă sufoc.”`,
            `„Trebuie să ies de aici.”`,
            `„Mă voi face de râs.”`,
            `„Nu se va termina niciodată.”`,
          ].map((thought) => (
            <p
              key={thought}
              className="text-[17px] italic"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--color-primary)",
              }}
            >
              {thought}
            </p>
          ))}
        </div>

        <div
          className="text-[17px] leading-[1.75] space-y-5"
          style={{ color: "var(--color-text)" }}
        >
          <p>
            Aceste gânduri nu sunt raționale. Dar în mijlocul atacului, ele
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
            {`„luptă sau fugi”`}, inima pompează mai mult sânge.
            Ritmul cardiac crește. Simți presiune în piept. Aceleași
            senzații ca într-un eveniment cardiac, dar dintr-o cauză
            complet diferită.
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
          {`Diferența nu este senzația. Diferența este ce-ți spui despre senzație. „Inima bate repede la sala de sport" → normal. „Inima bate repede la metrou" → „Fac infarct!” Aceeași senzație. Interpretare diferită. Rezultat complet diferit.`}
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
              a: `5-10 minute intensitate maximă, 10-20 minute total (Rachman, 2004). Atacul trece întotdeauna.`,
            },
            {
              q: `Pot să mor din cauza unui atac de panică?`,
              a: `Nu. Un atac de panică nu produce infarct, AVC sau nebunie. Odată confirmat medical că ești sănătos, atacul este, prin definiție, inofensiv (Vickers & McNally, 2004).`,
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
      </Section>

      {/* ─── NAVIGATION LINKS ─── */}
      <Section bg="white">
        <div className="space-y-4">
          <Link
            href="/atac-de-panica/"
            className="flex items-center gap-3 rounded-xl p-5 group"
            style={{
              backgroundColor: "var(--color-background)",
              border: "1px solid var(--color-border)",
              transition: "var(--transition-fast)",
            }}
          >
            <span
              className="text-lg"
              style={{ color: "var(--color-text-secondary)" }}
            >
              &larr;
            </span>
            <div>
              <p
                className="text-[15px] font-medium"
                style={{ color: "var(--color-primary)" }}
              >
                Înapoi la ghid
              </p>
            </div>
          </Link>

          <Link
            href="/atac-de-panica/intelege"
            className="flex items-center justify-between rounded-xl p-5 group"
            style={{
              backgroundColor: "var(--color-background)",
              border: "1px solid var(--color-border)",
              transition: "var(--transition-fast)",
            }}
          >
            <div>
              <p
                className="text-[15px] font-medium"
                style={{ color: "var(--color-primary)" }}
              >
                Înțelege: de ce se întâmplă
              </p>
            </div>
            <span
              className="text-lg"
              style={{ color: "var(--color-text-secondary)" }}
            >
              &rarr;
            </span>
          </Link>

          <Link
            href="/atac-de-panica/actioneaza"
            className="flex items-center justify-between rounded-xl p-5 group"
            style={{
              backgroundColor: "var(--color-accent)",
              transition: "var(--transition-fast)",
            }}
          >
            <div>
              <p className="text-[15px] font-medium text-white">
                Acționează: ce poți face
              </p>
            </div>
            <span className="text-lg text-white">&rarr;</span>
          </Link>
        </div>
      </Section>

      {/* ─── AUTHOR FOOTER ─── */}
      <section style={{ backgroundColor: "var(--color-background-white)" }} className="py-8">
        <div className="mx-auto max-w-[760px] px-6">
          <div
            className="flex items-center gap-5 py-6"
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
                Psiholog clinician, psihoterapeut
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
