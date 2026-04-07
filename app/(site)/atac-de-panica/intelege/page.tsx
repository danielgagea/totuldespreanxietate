import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "De ce ai atacuri de panică. Mecanismul și mesajul din spate | Totul despre Anxietate",
  description:
    "De ce se întâmplă atacurile de panică: alarma falsă, cercul vicios, ce vrea să spună psihicul, și frica de următorul atac. De Daniel Gagea, psiholog clinician, psihoterapeut.",
  authors: [{ name: "Daniel Gagea" }],
  openGraph: {
    title: "De ce ai atacuri de panică. Mecanismul și mesajul din spate",
    description:
      "De ce se întâmplă atacurile de panică: alarma falsă, cercul vicios, ce vrea să spună psihicul, și frica de următorul atac.",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "De ce ai atacuri de panică. Mecanismul și mesajul din spate",
  description:
    "De ce se întâmplă atacurile de panică: alarma falsă, cercul vicios, ce vrea să spună psihicul, și frica de următorul atac. De Daniel Gagea, psiholog clinician, psihoterapeut.",
  author: {
    "@type": "Person",
    name: "Daniel Gagea",
    jobTitle: "Psiholog clinician",
    url: "https://totuldespreanxietate.ro/despre-daniel/",
  },
  datePublished: "2026-03-19",
  dateModified: "2026-03-19",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://totuldespreanxietate.ro/atac-de-panica/intelege/",
  },
};

/* ─── Design helpers ─── */

function Section({
  id,
  children,
  bg = "default",
}: {
  id: string;
  children: React.ReactNode;
  bg?: "default" | "white" | "sage";
}) {
  const bgMap = {
    default: "var(--color-background)",
    white: "var(--color-background-white)",
    sage: "var(--color-secondary-light)",
  };
  return (
    <section
      id={id}
      className="scroll-mt-8"
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
      className="uppercase tracking-[0.12em] text-[12px] font-semibold mb-6"
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
  value,
  description,
}: {
  value: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <p
        className="text-[36px] md:text-[44px] leading-none mb-2"
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 400,
          color: "var(--color-accent)",
        }}
      >
        {value}
      </p>
      <p
        className="text-[14px] leading-[1.6]"
        style={{ color: "var(--color-text-secondary)" }}
      >
        {description}
      </p>
    </div>
  );
}

function StepCircle({ number }: { number: number }) {
  return (
    <span
      className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full text-[14px] font-semibold"
      style={{
        backgroundColor: "var(--color-primary)",
        color: "#FFFFFF",
        fontFamily: "var(--font-heading)",
      }}
    >
      {number}
    </span>
  );
}

function AccentCircle({ number }: { number: number }) {
  return (
    <span
      className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full text-[14px] font-semibold"
      style={{
        backgroundColor: "var(--color-accent)",
        color: "#FFFFFF",
        fontFamily: "var(--font-heading)",
      }}
    >
      {number}
    </span>
  );
}

/* ─── Page ─── */
export default function IntelegePage() {
  return (
    <>
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

      {/* ─── HERO + MECANISMUL (combined) ─── */}
      <header style={{ backgroundColor: "var(--color-background)" }}>
        <div className="mx-auto max-w-[760px] px-6 pt-16 md:pt-24 pb-8">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-[13px] mb-8"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <Link
              href="/atac-de-panica/"
              className="underline underline-offset-2 hover:no-underline"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Atac de panică
            </Link>
            <span aria-hidden="true">&rarr;</span>
            <span style={{ color: "var(--color-text)" }}>
              Înțelege
            </span>
          </nav>

          <SectionLabel>01 &middot; Mecanismul</SectionLabel>

          <h1
            className="text-[28px] md:text-[38px] leading-[1.25] mb-3"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              color: "var(--color-primary)",
            }}
          >
            De ce se întâmplă și ce încearcă să-ți spună
          </h1>

          <p
            className="text-sm mb-10"
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
            , psiholog clinician, psihoterapeut
          </p>

          <div
            className="space-y-5 text-[17px] leading-[1.75]"
            style={{ color: "var(--color-text)" }}
          >
            <p>
              Imaginează-ți o alarmă de incendiu care pornește într-o clădire
              goală. Nu există foc. Nu există fum. Dar alarma urlă la fel de
              tare ca într-un incendiu real.
            </p>
            <p>
              Asta face creierul tău în timpul unui atac de panică. Declanșează
              o alarmă de urgență pentru o amenințare care nu există.
            </p>
            <p>
              Acest sistem de alarmă se numește răspunsul{" "}
              {`\u201Eluptă sau fugi\u201D`} și ne-a protejat ca specie de
              milioane de ani. Problema este că, în tulburarea de panică, acest
              sistem se activează fără un pericol real. Se activează pentru o
              palpitație. Pentru o ușoară amețeală.
            </p>
          </div>
        </div>
      </header>

      {/* Cercul vicios — redesigned */}
      <section style={{ backgroundColor: "var(--color-background)" }}>
        <div className="mx-auto max-w-[760px] px-6 pb-16 md:pb-24">
          <div
            className="rounded-2xl p-8 md:p-10"
            style={{
              backgroundColor: "var(--color-background-white)",
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <h2
              className="text-[20px] md:text-[24px] leading-[1.30] mb-2"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 500,
                color: "var(--color-primary)",
              }}
            >
              Cercul vicios al panicii
            </h2>
            <p
              className="text-[14px] mb-8"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Ce se întâmplă pas cu pas în corpul și mintea ta
            </p>

            {/* Timeline */}
            <div className="relative">
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
                    text: "O senzație fizică apare.. cauzată de stres, oboseală, emoții, cafea, sau funcționarea normală a corpului.",
                    intensity: 0,
                  },
                  {
                    label: "Interpretare",
                    text: `Creierul o detectează și o interpretează catastrofic: \u201ESenzația asta înseamnă că am o problemă gravă.\u201D`,
                    intensity: 1,
                  },
                  {
                    label: "Frică",
                    text: "Interpretarea produce frică, și frica intensifică senzațiile fizice.",
                    intensity: 2,
                  },
                  {
                    label: "Confirmare",
                    text: `Senzațiile mai intense confirmă interpretarea: \u201EVedeți? E din ce în ce mai rău.\u201D`,
                    intensity: 3,
                  },
                  {
                    label: "Blocaj",
                    text: "Se pierde capacitatea de reevaluare.. creierul nu mai poate genera o explicație alternativă.",
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
                      <div
                        className="relative z-10 shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-white"
                        style={{
                          backgroundColor: colors[intensity],
                          boxShadow: intensity >= 3 ? `0 0 0 4px ${bgOpacities[intensity]}` : "none",
                        }}
                      >
                        {i + 1}
                      </div>
                      <div
                        className="flex-1 rounded-xl px-5 py-4"
                        style={{ backgroundColor: bgOpacities[intensity] }}
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

              {/* Loop indicator */}
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
        </div>
      </section>

      <main>

        {/* ═══════════════════════════════════════════════
            PART 2 · CE ARATĂ CERCETAREA
        ═══════════════════════════════════════════════ */}
        <Section id="cercetarea" bg="default">
          <SectionLabel>02 · Cercetarea</SectionLabel>

          <div
            className="space-y-5 text-[17px] leading-[1.75]"
            style={{ color: "var(--color-text)" }}
          >
            <Callout>
              <p
                className="text-[15px] leading-[1.70]"
                style={{ color: "var(--color-text)" }}
              >
                {`Într-un studiu cu monitorizare cardiacă 24 de ore, 40% dintre atacurile de panică auto-raportate NU s-au asociat cu nicio creștere reală a ritmului cardiac (Barsky et al., 1994). Inima nu bătea mai repede. Persoanele doar credeau că bate mai repede.`}
              </p>
            </Callout>

            <p>
              {`Într-un alt studiu, persoanele cu risc de panică au primit informații false despre ritmul lor cardiac. Au raportat semnificativ mai multe simptome de panică deși ritmul cardiac real era identic (Story & Craske, 2008).`}
            </p>

            <PullQuote>
              Problema nu este în ce simți. Problema este ce crezi despre ce
              simți.
            </PullQuote>

            <p>
              Persoanele cu tulburare de panică nu au un corp defect. Studiile
              arată că nu sunt mai reactive fiziologic la stres decât persoanele
              fără panică. Ceea ce diferă este modul în care
              interpretează senzațiile, și asta este ceva ce se poate schimba.
            </p>
          </div>

          {/* Declanșatorii */}
          <h3
            className="text-[20px] md:text-[24px] leading-[1.35] mt-12 mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              color: "var(--color-primary)",
            }}
          >
            Declanșatorii, nu doar situații externe
          </h3>

          <div
            className="space-y-5 text-[17px] leading-[1.75]"
            style={{ color: "var(--color-text)" }}
          >
            <p>
              Locurile devin problematice nu pentru ceea ce sunt, ci pentru că
              induc o anumită senzație internă. 80%
              dintre persoanele cu tulburare de panică evită activ substanțele și
              activitățile care ar putea produce senzații similare panicii.
            </p>
          </div>

          {/* Vulnerabilitate */}
          <h3
            className="text-[20px] md:text-[24px] leading-[1.35] mt-12 mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              color: "var(--color-primary)",
            }}
          >
            Vulnerabilitate, nu defect
          </h3>

          <div
            className="space-y-5 text-[17px] leading-[1.75]"
            style={{ color: "var(--color-text)" }}
          >
            <p>
              Vârsta medie de debut: 24 de ani. Adesea
              precedate de un eveniment de viață stresant. Concordanța la gemeni
              monozigoți: 31% vs 0% dizigoți. Nu este o
              alegere. Nu este o slăbiciune. Poate fi reprogramat.
            </p>
          </div>
        </Section>

        {/* ═══════════════════════════════════════════════
            PART 3 · CE VREA SĂ SPUNĂ PSIHICUL
        ═══════════════════════════════════════════════ */}
        <Section id="perspectiva-daniel" bg="white">
          <SectionLabel>03 · Perspectiva lui Daniel</SectionLabel>

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
            className="flex items-start gap-4 rounded-lg p-5 mb-8"
            style={{
              backgroundColor: "var(--color-background)",
              border: "1px solid var(--color-border)",
            }}
          >
            {/* Photo placeholder */}
            <div
              className="shrink-0 flex items-center justify-center rounded-md"
              style={{
                width: 64,
                height: 80,
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
                className="text-[13px]"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Psiholog clinician, psihoterapeut
              </p>
              <p
                className="text-[14px] leading-[1.65] mt-2 italic"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {`„Această secțiune reflectă perspectiva mea clinică, dezvoltată din lucrul direct cu sute de persoane cu atacuri de panică.”`}
              </p>
            </div>
          </div>

          <div
            className="space-y-5 text-[17px] leading-[1.75]"
            style={{ color: "var(--color-text)" }}
          >
            <p>
              Tot ce ai citit până acum explică cum funcționează atacul de
              panică. Dar există și o altă întrebare, mai profundă: de ce ți se
              întâmplă tocmai ție?
            </p>

            <PullQuote>
              {`Mulți dintre clienții mei au descoperit ceva neașteptat: sub frică era furie. Furie pe care nu și-o permiteau. Pe un părinte. Pe un partener. Pe o situație. Furie înghițită de ani de zile, care și-a găsit un alt drum de exprimare.. prin corp.`}
            </PullQuote>

            <p>
              Cercetarea clinică psihodinamică susține această perspectivă.
              Gassner (2004): mulți pacienți cu panică au fost subprotejați și
              neglijați emoțional în copilărie. 100% din 20 de psihoterapeuți au
              confirmat aceste tipuri de istorii.
            </p>
          </div>

          {/* Regulile invizibile */}
          <h3
            className="text-[20px] md:text-[24px] leading-[1.35] mt-12 mb-3"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              color: "var(--color-primary)",
            }}
          >
            Regulile după care trăiești fără să știi
          </h3>

          <p
            className="text-[15px] leading-[1.70] mb-6"
            style={{ color: "var(--color-text)" }}
          >
            Multe persoane cu atacuri de panică trăiesc după niște reguli pe care
            nu le-au ales conștient. Au fost învățate în copilărie, din relația
            cu cei care ar fi trebuit să le ofere siguranță. Iată câteva
            dintre cele mai frecvente:
          </p>

          <div className="space-y-3 mb-8">
            {[
              {
                belief: `„Trebuie să am grijă de toată lumea înainte de mine.”`,
                meaning: "Te simți vinovat ori de câte ori pui o nevoie a ta pe primul loc.",
              },
              {
                belief: `„Dacă sunt fericit, urmează ceva rău.”`,
                meaning: "Bucuria e urmată imediat de anxietate, ca și cum ai aștepta pedeapsa.",
              },
              {
                belief: `„Nu am voie să fiu furios.”`,
                meaning: "Furia se transformă în tensiune fizică, nod în stomac, palpitații.",
              },
              {
                belief: `„Dacă cer ajutor, voi fi controlat sau voi datora ceva.”`,
                meaning: "Preferi să te descurci singur, chiar când nu mai poți.",
              },
              {
                belief: `„Dacă devin independent, voi fi singur.”`,
                meaning: "Oscilezi între nevoia de apropiere și frica de sufocare.",
              },
            ].map(({ belief, meaning }, i) => (
              <div
                key={i}
                className="pl-5 py-4 rounded-lg"
                style={{
                  borderLeft: "3px solid var(--color-accent)",
                  backgroundColor: "var(--color-background)",
                }}
              >
                <p
                  className="text-[16px] leading-[1.55] italic mb-1.5"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--color-primary)",
                  }}
                >
                  {belief}
                </p>
                <p
                  className="text-[14px] leading-[1.60]"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {meaning}
                </p>
              </div>
            ))}
          </div>

          <div
            className="space-y-5 text-[17px] leading-[1.75]"
            style={{ color: "var(--color-text)" }}
          >
            <p>
              Nimeni nu ți-a dat aceste reguli în scris. Dar le simți în corp de
              fiecare dată când le încalci.. printr-un val de anxietate, o
              senzație de sufocare, palpitații care vin aparent din senin.
            </p>
          </div>

          {/* Când fericirea declanșează panică */}
          <h3
            className="text-[20px] md:text-[24px] leading-[1.35] mt-12 mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              color: "var(--color-primary)",
            }}
          >
            Când fericirea declanșează panică
          </h3>

          <div
            className="space-y-5 text-[17px] leading-[1.75]"
            style={{ color: "var(--color-text)" }}
          >
            <p>
              Atacurile de panică pot fi declanșate nu de pericol, ci de fericire
              și succes. O femeie a avut primul atac într-o după-amiază în care
              era entuziasmată și fericită (Gassner, 2004). În terapie,
              furnicăturile s-au oprit. Femeia a spus:{" "}
              {`„Am nevoie doar să plâng.”`}
            </p>
          </div>

          {/* Nu toți, dar mulți */}
          <h3
            className="text-[20px] md:text-[24px] leading-[1.35] mt-12 mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              color: "var(--color-primary)",
            }}
          >
            Nu toți, dar mulți
          </h3>

          <div
            className="space-y-5 text-[17px] leading-[1.75]"
            style={{ color: "var(--color-text)" }}
          >
            <p>
              Nu toată lumea are o poveste din copilărie. Dar dacă te recunoști,
              un terapeut te poate ajuta să asculți mesajul, într-un spațiu
              sigur, fără grabă.
            </p>
          </div>

        </Section>

        {/* ═══════════════════════════════════════════════
            PART 4 · FRICA DE URMĂTORUL ATAC
        ═══════════════════════════════════════════════ */}
        <Section id="ciclul-fricii" bg="default">
          <SectionLabel>04 · Ciclul fricii</SectionLabel>

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

          <div
            className="space-y-5 text-[17px] leading-[1.75]"
            style={{ color: "var(--color-text)" }}
          >
            <p>
              {`Poate atacul în sine a durat 15 minute. Dar frica că va reveni durează zile, săptămâni, luni. Aceasta este caracteristica principală a tulburării de panică.. teama persistentă de a-l retrăi. „Frica de frică.”`}
            </p>
          </div>

          {/* Trei mecanisme · cards */}
          <h3
            className="text-[20px] md:text-[24px] leading-[1.35] mt-12 mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              color: "var(--color-primary)",
            }}
          >
            Trei mecanisme care țin panica vie
          </h3>

          <div className="space-y-4">
            {[
              {
                title: "Anxietatea anticipativă",
                text: "Îngrijorare constantă, corp în alertă permanentă.",
              },
              {
                title: "Evitarea",
                text: "98% evită situații. Funcționează pe termen scurt, confirmă pericolul pe termen lung.",
              },
              {
                title: "Comportamentele de siguranță",
                text: "Telefonul, pastila, persoana de siguranță. 80% evită inclusiv senzațiile fizice.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-lg p-5"
                style={{
                  backgroundColor: "var(--color-background-white)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <AccentCircle number={i + 1} />
                <div className="pt-0.5">
                  <p
                    className="font-medium text-[16px] mb-1"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {card.title}
                  </p>
                  <p
                    className="text-[15px] leading-[1.70]"
                    style={{ color: "var(--color-text)" }}
                  >
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Spirala descendentă */}
          <h3
            className="text-[20px] md:text-[24px] leading-[1.35] mt-12 mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              color: "var(--color-primary)",
            }}
          >
            Spirala descendentă
          </h3>

          <p
            className="text-center text-[17px] leading-[1.75] my-8"
            style={{
              color: "var(--color-text)",
              fontFamily: "var(--font-heading)",
              fontStyle: "italic",
            }}
          >
            {`Evitare → izolare → depresie → automediere → și mai multă panică`}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 my-10">
            <Stat
              value="12%"
              description="remisie fără tratament la 5 ani"
            />
            <Stat
              value={`7×`}
              description="costuri medicale mai mari"
            />
          </div>

          <div
            className="space-y-5 text-[17px] leading-[1.75]"
            style={{ color: "var(--color-text)" }}
          >
            <p>
              {`Panica nu „trece de la sine” ci se cronicizează. Dar există o veste bună, și vine pe pagina următoare.`}
            </p>
          </div>
        </Section>

        {/* ═══════════════════════════════════════════════
            FAQ
        ═══════════════════════════════════════════════ */}
        <Section id="faq" bg="sage">
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

          <div className="space-y-4">
            {[
              {
                q: "Trece de la sine?",
                a: "Rareori. Fără ajutor profesional, doar 12% dintre persoane ajung la remisie completă în 5 ani. Panica tinde să se cronicizeze.. evitarea crește, viața se restrânge, iar atacurile devin mai frecvente. Cu psihoterapie, 85-90% se recuperează în câteva luni.",
              },
              {
                q: "De ce am atacuri de panică fără niciun motiv aparent?",
                a: "Atacurile par că vin din senin, dar de cele mai multe ori sunt declanșate de o senzație internă pe care creierul o interpretează ca pericol. O ușoară amețeală, o palpitație, chiar și o digestie mai dificilă pot porni ciclul. 40% din atacurile raportate nici măcar nu sunt însoțite de o creștere reală a ritmului cardiac. Nu lipsa motivului e problema, ci modul în care creierul procesează senzația.",
              },
              {
                q: "De ce îmi e frică de lucruri care înainte nu mă deranjau?",
                a: "Când experimentezi atacuri de panică repetate, creierul începe să asocieze tot mai multe locuri, activități și senzații cu pericolul. E un proces de sensibilizare.. nu pentru că acele lucruri sunt periculoase, ci pentru că îți amintesc de senzațiile din atac. Așa se restrânge treptat zona de confort, iar lucruri obișnuite devin copleșitoare.",
              },
            ].map(({ q, a }) => (
              <details
                key={q}
                className="group rounded-lg"
                style={{
                  backgroundColor: "var(--color-background-white)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <summary
                  className="cursor-pointer px-5 py-4 text-[16px] font-medium list-none flex items-center justify-between"
                  style={{ color: "var(--color-primary)" }}
                >
                  {q}
                  <span
                    className="ml-2 text-[14px] transition-transform duration-200 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <div
                  className="px-5 pb-5 text-[15px] leading-[1.70]"
                  style={{ color: "var(--color-text)" }}
                >
                  {a}
                </div>
              </details>
            ))}
          </div>
        </Section>

        {/* ═══════════════════════════════════════════════
            NAVIGATION + AUTHOR FOOTER
        ═══════════════════════════════════════════════ */}
        <Section id="navigare" bg="white">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "32px" }}>
            <Link href="/atac-de-panica" style={{ display: "flex", alignItems: "center", gap: "8px", padding: "16px 20px", borderRadius: "10px", background: "var(--color-background-white)", border: "1px solid var(--color-border)", textDecoration: "none", fontSize: "15px", fontWeight: 500, color: "var(--color-primary)", transition: "transform 0.2s ease-out" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13 8H3M3 8L7 4M3 8L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Înapoi la ghid
            </Link>
            <Link href="/atac-de-panica/actioneaza" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderRadius: "10px", background: "var(--color-secondary)", textDecoration: "none", fontSize: "15px", fontWeight: 600, color: "#fff", transition: "transform 0.2s ease-out" }}>
              Următorul pas: Acționează
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </Section>
      </main>
    </>
  );
}
