import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Atac de panică sau infarct? Cum faci diferența | Totul despre Anxietate",
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

/* ─── Reusable components ─── */

function Section({
  children,
  bg = "default",
  className = "",
}: {
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
    <section className={className} style={{ backgroundColor: bgMap[bg] }}>
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

/* ─── Page ─── */
export default function PanicaSauInfarctPage() {
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
            aria-label="Breadcrumb"
            className="text-xs font-medium uppercase tracking-[0.15em] mb-6 flex items-center gap-2"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <Link
              href="/tipuri/atac-de-panica/"
              className="transition-colors hover:opacity-70"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Atac de panică
            </Link>
            <span aria-hidden="true">→</span>
            <span style={{ color: "var(--color-primary)" }}>
              Panică sau infarct?
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
            Atac de panică sau infarct?
          </h1>

          <p
            className="text-sm mb-8"
            style={{ color: "var(--color-text-secondary)" }}
          >
            De{" "}
            <span style={{ color: "var(--color-primary)" }}>
              Daniel Gagea
            </span>
            , psiholog clinician
          </p>

          <p
            className="text-[17px] leading-[1.7]"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--color-text)",
            }}
          >
            Aceasta este, de departe, cea mai frecventă teamă. Și este
            perfect înțeleasă, simptomele sunt înspăimântător de
            asemănătoare.
          </p>

          <p
            className="text-[17px] leading-[1.7] mt-6"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--color-text)",
            }}
          >
            {`Iată de ce: Când corpul tău declanșează răspunsul \u201Eluptă sau fugi\u201D, inima pompează mai mult sânge ca să-ți ofere energia necesară să fugi sau să lupți. Ritmul cardiac crește. Simți presiune în piept. Aceleași senzații ca într-un eveniment cardiac, dar dintr-o cauză complet diferită.`}
          </p>
        </div>
      </header>

      {/* ─── DIFERENȚE PRACTICE ─── */}
      <Section bg="white">
        <h2
          className="text-[22px] md:text-[28px] leading-[1.3] mb-8"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 400,
            color: "var(--color-primary)",
          }}
        >
          Diferențe practice
        </h2>

        <p
          className="text-[17px] leading-[1.7] mb-8"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--color-text)",
          }}
        >
          Deși nu poți pune diagnostic singur, există câteva diferențe
          observabile:
        </p>

        {/* Comparison table */}
        <div className="overflow-x-auto rounded-lg my-8" style={{ boxShadow: "var(--shadow-sm)" }}>
          <table className="w-full text-left text-[15px]" style={{ fontFamily: "var(--font-body)" }}>
            <thead>
              <tr style={{ backgroundColor: "var(--color-primary)" }}>
                <th className="px-5 py-3 font-medium text-white">
                  Caracteristică
                </th>
                <th className="px-5 py-3 font-medium text-white">
                  Atac de panică
                </th>
                <th className="px-5 py-3 font-medium text-white">
                  Eveniment cardiac
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ backgroundColor: "var(--color-background-white)" }}>
                <td
                  className="px-5 py-3 font-medium"
                  style={{
                    color: "var(--color-primary)",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  Evoluție
                </td>
                <td
                  className="px-5 py-3"
                  style={{
                    color: "var(--color-text)",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  Atinge maximum în minute, apoi scade
                </td>
                <td
                  className="px-5 py-3"
                  style={{
                    color: "var(--color-text)",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  Nu scade spontan
                </td>
              </tr>
              <tr style={{ backgroundColor: "var(--color-background)" }}>
                <td
                  className="px-5 py-3 font-medium"
                  style={{
                    color: "var(--color-primary)",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  Durere toracică
                </td>
                <td
                  className="px-5 py-3"
                  style={{
                    color: "var(--color-text)",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  Difuză, se schimbă ca localizare
                </td>
                <td
                  className="px-5 py-3"
                  style={{
                    color: "var(--color-text)",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  Radiază spre braț, maxilar, spate
                </td>
              </tr>
              <tr style={{ backgroundColor: "var(--color-background-white)" }}>
                <td
                  className="px-5 py-3 font-medium"
                  style={{
                    color: "var(--color-primary)",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  Derealizare
                </td>
                <td
                  className="px-5 py-3"
                  style={{
                    color: "var(--color-text)",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  Frecventă
                </td>
                <td
                  className="px-5 py-3"
                  style={{
                    color: "var(--color-text)",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  Aproape inexistentă
                </td>
              </tr>
              <tr style={{ backgroundColor: "var(--color-background)" }}>
                <td
                  className="px-5 py-3 font-medium"
                  style={{ color: "var(--color-primary)" }}
                >
                  Context
                </td>
                <td
                  className="px-5 py-3"
                  style={{ color: "var(--color-text)" }}
                >
                  Stres, anxietate
                </td>
                <td
                  className="px-5 py-3"
                  style={{ color: "var(--color-text)" }}
                >
                  Efort fizic, factori de risc
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* ─── UN NUMĂR CARE SPUNE MULT ─── */}
      <Section bg="default">
        <h2
          className="text-[22px] md:text-[28px] leading-[1.3] mb-8"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 400,
            color: "var(--color-primary)",
          }}
        >
          Un număr care spune mult
        </h2>

        <Callout>
          <p
            className="text-[16px] leading-[1.7]"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--color-text)",
            }}
          >
            Între <strong>9% și 43%</strong> dintre persoanele care se
            prezintă la urgențe cu durere toracică suferă de fapt de
            tulburare de panică, nu de o afecțiune cardiacă{" "}
            <span style={{ color: "var(--color-text-secondary)" }}>
              (Barsky et al., 1994; Katon et al., 1988; Morris et al.,
              1997)
            </span>
            .
          </p>
        </Callout>
      </Section>

      {/* ─── DAR DACĂ CHIAR AM CEVA LA INIMĂ? ─── */}
      <Section bg="white">
        <h2
          className="text-[22px] md:text-[28px] leading-[1.3] mb-8"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 400,
            color: "var(--color-primary)",
          }}
        >
          Dar dacă chiar am ceva la inimă?
        </h2>

        <p
          className="text-[17px] leading-[1.7] mb-6"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--color-text)",
          }}
        >
          Dacă nu ai fost niciodată evaluat medical, mergi la medic. Serios.
          Exclude mai întâi cauzele fizice.. hipertiroidismul, consumul
          excesiv de cofeină, prolapsul de valvă mitrală, sau alte afecțiuni
          care pot mima simptomele panicii{" "}
          <span style={{ color: "var(--color-text-secondary)" }}>
            (Taylor, 2000; DSM-IV-TR, APA, 2000)
          </span>
          .
        </p>

        <p
          className="text-[17px] leading-[1.7]"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--color-text)",
          }}
        >
          Odată ce un medic ți-a confirmat că ești sănătos fizic, poți
          începe să lucrezi cu ceea ce este: un atac de panică.
        </p>
      </Section>

      {/* ─── PERSPECTIVA CARE SCHIMBĂ TOTUL ─── */}
      <Section bg="default">
        <h2
          className="text-[22px] md:text-[28px] leading-[1.3] mb-8"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 400,
            color: "var(--color-primary)",
          }}
        >
          Perspectiva care schimbă totul
        </h2>

        <p
          className="text-[17px] leading-[1.7] mb-8"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--color-text)",
          }}
        >
          Inima îți bate repede și când faci sport. Și când ești entuziasmat.
          Și în momente de excitare sexuală. Nimeni nu sună la urgențe
          pentru asta.
        </p>

        <PullQuote>
          <p className="mb-4">
            Diferența nu este senzația, ci ce-ți spui despre ea.
            Inima bate repede la sala de sport și ți se pare normal.
            Inima bate repede la metrou și imediat crezi că faci infarct.
            Aceeași senzație, interpretare diferită, rezultat complet diferit.
          </p>
        </PullQuote>
      </Section>

      {/* ─── NAVIGATION ─── */}
      <Section bg="sage">
        <nav aria-label="Navigare articole">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Back to guide */}
            <Link
              href="/tipuri/atac-de-panica/"
              className="group block rounded-lg p-5 transition-all"
              style={{
                backgroundColor: "var(--color-background-white)",
                boxShadow: "var(--shadow-sm)",
                transitionDuration: "var(--transition-fast)",
              }}
            >
              <span
                className="text-xs font-medium uppercase tracking-[0.12em] block mb-2"
                style={{ color: "var(--color-text-secondary)" }}
              >
                ← Înapoi
              </span>
              <span
                className="text-[15px] font-medium block"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--color-primary)",
                }}
              >
                Ghidul complet
              </span>
            </Link>

            {/* Simptome */}
            <Link
              href="/tipuri/atac-de-panica/simptome"
              className="group block rounded-lg p-5 transition-all"
              style={{
                backgroundColor: "var(--color-background-white)",
                boxShadow: "var(--shadow-sm)",
                transitionDuration: "var(--transition-fast)",
              }}
            >
              <span
                className="text-xs font-medium uppercase tracking-[0.12em] block mb-2"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Continuă
              </span>
              <span
                className="text-[15px] font-medium block"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--color-primary)",
                }}
              >
                Ce simți în timpul unui atac
              </span>
            </Link>

            {/* Ce sa faci */}
            <Link
              href="/tipuri/atac-de-panica/ce-sa-faci"
              className="group block rounded-lg p-5 transition-all"
              style={{
                backgroundColor: "var(--color-background-white)",
                boxShadow: "var(--shadow-sm)",
                transitionDuration: "var(--transition-fast)",
              }}
            >
              <span
                className="text-xs font-medium uppercase tracking-[0.12em] block mb-2"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Continuă
              </span>
              <span
                className="text-[15px] font-medium block"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--color-primary)",
                }}
              >
                Ce faci în momentul unui atac
              </span>
            </Link>
          </div>
        </nav>
      </Section>

      {/* ─── AUTHOR FOOTER ─── */}
      <footer style={{ backgroundColor: "var(--color-background-white)" }}>
        <div
          className="mx-auto max-w-[760px] px-6 py-10 text-center"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <p
            className="text-sm"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <span
              className="font-medium"
              style={{ color: "var(--color-primary)" }}
            >
              Daniel Gagea
            </span>{" "}
            , psiholog clinician, 10+ ani experiență, 500+ clienți
          </p>
        </div>
      </footer>
    </>
  );
}
