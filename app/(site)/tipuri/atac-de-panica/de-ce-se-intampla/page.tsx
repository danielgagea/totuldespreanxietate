import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "De ce se întâmplă atacurile de panică. Mecanismul explicat",
  description:
    "De ce ai atacuri de panică: alarma falsă, cercul vicios, declanșatori și vulnerabilitate. Explicat pe bază de cercetare de Daniel Gagea.",
  authors: [{ name: "Daniel Gagea" }],
  alternates: {
    canonical: "https://totuldespreanxietate.ro/tipuri/atac-de-panica/de-ce-se-intampla",
  },
  openGraph: {
    title: "De ce se întâmplă atacurile de panică. Mecanismul explicat",
    description:
      "De ce ai atacuri de panică: alarma falsă, cercul vicios, declanșatori și vulnerabilitate. De Daniel Gagea.",
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
      headline: "De ce se întâmplă atacurile de panică. Mecanismul explicat",
      description:
        "De ce ai atacuri de panică: alarma falsă, cercul vicios, declanșatori și vulnerabilitate. De Daniel Gagea.",
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
          "https://totuldespreanxietate.ro/tipuri/atac-de-panica/de-ce-se-intampla/",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Acasă", item: "https://totuldespreanxietate.ro" },
        { "@type": "ListItem", position: 2, name: "Tipuri", item: "https://totuldespreanxietate.ro/tipuri" },
        { "@type": "ListItem", position: 3, name: "Atac de panică", item: "https://totuldespreanxietate.ro/tipuri/atac-de-panica" },
        { "@type": "ListItem", position: 4, name: "De ce se întâmplă", item: "https://totuldespreanxietate.ro/tipuri/atac-de-panica/de-ce-se-intampla" },
      ],
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

/* ─── Numbered step circle ─── */
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

/* ─── Page ─── */
export default function DeCeSeIntamplaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── HERO ─── */}
      <header
        className="py-16 md:py-24"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        <div className="mx-auto max-w-[760px] px-6">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-[13px] mb-8"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <Link
              href="/tipuri/atac-de-panica/"
              className="underline underline-offset-2 hover:no-underline"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Atac de panică
            </Link>
            <span aria-hidden="true">→</span>
            <span style={{ color: "var(--color-text)" }}>
              De ce se întâmplă
            </span>
          </nav>

          <h1
            className="text-[28px] md:text-[38px] leading-[1.25] mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              color: "var(--color-primary)",
            }}
          >
            De ce se întâmplă. Mecanismul atacului de panică
          </h1>

          <p
            className="text-sm"
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
            , psiholog clinician
            <span className="mx-2">·</span>
            Ultima actualizare: Martie 2026
          </p>
        </div>
      </header>

      <main>
        {/* ═══════════════════════════════════════════════
            SECȚIUNEA 1 — ALARMA FALSĂ
        ═══════════════════════════════════════════════ */}
        <Section id="alarma-falsa" bg="white">
          <h2
            className="text-[24px] md:text-[30px] leading-[1.30] mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              color: "var(--color-primary)",
            }}
          >
            Alarma falsă
          </h2>

          <div
            className="space-y-5 text-[17px] leading-[1.75]"
            style={{ color: "var(--color-text)" }}
          >
            <p>
              {`Imaginează-ți o alarmă de incendiu care pornește într-o clădire goală. Nu există foc. Nu există fum. Dar alarma urlă la fel de tare ca într-un incendiu real. Și toți oamenii din clădire reacționează ca și cum ar fi un incendiu adevărat.`}
            </p>

            <p>
              {`Asta face creierul tău în timpul unui atac de panică. Declanșează o alarmă de urgență, completă, cu toate sirenele și luminile, pentru o amenințare care nu există.`}
            </p>

            <p>
              {`Acest sistem de alarmă se numește răspunsul \u201Eluptă sau fugi\u201D și ne-a protejat ca specie de milioane de ani. Când strămoșii noștri vedeau un leu, acest sistem le oferea energia să fugă: inima pompează mai mult sânge, respirația se accelerează, mușchii se tensionează, simțurile se ascuț.`}
            </p>

            <p>
              Problema este că, în tulburarea de panică, acest sistem se
              activează fără leu. Se activează pentru o palpitație. Pentru o
              ușoară amețeală. Alarma pornește pentru un stimul intern pe care
              creierul îl interpretează ca pericol iminent (Clark, 1986; Beck,
              1988).
            </p>
          </div>
        </Section>

        {/* ═══════════════════════════════════════════════
            SECȚIUNEA 2 — CERCUL VICIOS
        ═══════════════════════════════════════════════ */}
        <Section id="cercul-vicios" bg="default">
          <h2
            className="text-[24px] md:text-[30px] leading-[1.30] mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              color: "var(--color-primary)",
            }}
          >
            Cercul vicios, pas cu pas
          </h2>
          <p
            className="text-[13px] mb-8"
            style={{ color: "var(--color-text-secondary)" }}
          >
            (Beck, 1988; Clark, 1986a, 1988, 1996)
          </p>

          <div className="space-y-5">
            {[
              `O senzație fizică apare.. cauzată de stres, oboseală, emoții, cafea, sau funcționarea normală a corpului.`,
              `Creierul o detectează și o interpretează catastrofic`,
              `Interpretarea produce frică, și frica intensifică senzațiile fizice`,
              `Senzațiile mai intense confirmă interpretarea`,
              `Se pierde capacitatea de reevaluare.. creierul nu mai poate genera o explicație alternativă (Beck, 1988)`,
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <StepCircle number={i + 1} />
                <p
                  className="text-[17px] leading-[1.75] pt-0.5"
                  style={{ color: "var(--color-text)" }}
                >
                  {step}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════════════════════════════════════════════
            SECȚIUNEA 3 — CE ARATĂ CERCETAREA
        ═══════════════════════════════════════════════ */}
        <Section id="ce-arata-cercetarea" bg="white">
          <h2
            className="text-[24px] md:text-[30px] leading-[1.30] mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              color: "var(--color-primary)",
            }}
          >
            Ce arată cercetarea
          </h2>

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
              {`Într-un alt studiu, persoanele cu risc de panică au primit informații false despre ritmul lor cardiac. Au raportat semnificativ mai multe simptome de panică deși ritmul cardiac real era identic între grupuri (Story & Craske, 2008).`}
            </p>

            <PullQuote>
              Problema nu este în ce simți. Problema este ce crezi despre ce
              simți.
            </PullQuote>

            <p>
              Persoanele cu tulburare de panică nu au un corp defect. Studiile
              arată că nu sunt mai reactive fiziologic la stres decât persoanele
              fără panică (Taylor, 2000). Ceea ce diferă este modul în care
              interpretează senzațiile, și asta este ceva ce se poate schimba.
            </p>
          </div>
        </Section>

        {/* ═══════════════════════════════════════════════
            SECȚIUNEA 4 — DECLANȘATORII
        ═══════════════════════════════════════════════ */}
        <Section id="declansatorii" bg="default">
          <h2
            className="text-[24px] md:text-[30px] leading-[1.30] mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              color: "var(--color-primary)",
            }}
          >
            Declanșatorii.. nu doar situații externe
          </h2>

          <div
            className="space-y-5 text-[17px] leading-[1.75]"
            style={{ color: "var(--color-text)" }}
          >
            <p>
              Locurile devin problematice nu pentru ceea ce sunt, ci pentru că
              induc o anumită senzație internă (Clark, 1986; Barlow, 2002).
            </p>
            <p>
              80% dintre persoanele cu tulburare de panică evită activ
              substanțele și activitățile care ar putea produce senzații similare
              panicii (White et al., 2006).
            </p>
          </div>
        </Section>

        {/* ═══════════════════════════════════════════════
            SECȚIUNEA 5 — VULNERABILITATE
        ═══════════════════════════════════════════════ */}
        <Section id="vulnerabilitate" bg="white">
          <h2
            className="text-[24px] md:text-[30px] leading-[1.30] mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              color: "var(--color-primary)",
            }}
          >
            Vulnerabilitate, nu defect
          </h2>

          <div
            className="space-y-5 text-[17px] leading-[1.75]"
            style={{ color: "var(--color-text)" }}
          >
            <p>
              Vârsta medie de debut este 24 de ani (Burke et al., 1990), adesea
              precedate de un eveniment de viață stresant.
            </p>
            <p>
              Concordanța la gemeni monozigoți: 31% vs 0% dizigoți (Torgersen,
              1983). Nu este nici alegere, nici slăbiciune, ci un mod în care
              creierul tău a învățat să proceseze senzațiile, și poate fi
              reprogramat.
            </p>
          </div>
        </Section>

        {/* ═══════════════════════════════════════════════
            NAVIGARE + AUTHOR FOOTER
        ═══════════════════════════════════════════════ */}
        <Section id="navigare" bg="default">
          {/* Nav links */}
          <div className="grid gap-3">
            {[
              {
                label: `\u2190 Ghidul complet`,
                href: "/tipuri/atac-de-panica/",
              },
              {
                label: `Ce vrea să spună psihicul`,
                href: "/tipuri/atac-de-panica/ce-vrea-sa-spuna-psihicul",
              },
              {
                label: `Simptomele atacului`,
                href: "/tipuri/atac-de-panica/simptome",
              },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-[15px] font-medium cursor-pointer"
                style={{
                  color: "var(--color-primary)",
                  backgroundColor: "var(--color-background-white)",
                  border: "1px solid var(--color-border)",
                  transition: "var(--transition-fast)",
                }}
              >
                <span>→</span>
                {label}
              </Link>
            ))}
          </div>

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
    </>
  );
}
