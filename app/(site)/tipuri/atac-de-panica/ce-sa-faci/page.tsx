import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Ce faci în momentul unui atac de panică — 5 pași | Totul despre Anxietate",
  description:
    "5 pași concreți pentru momentul unui atac de panică. Ce ajută și ce NU ajută. Ghid practic de Daniel Gagea, psiholog clinician.",
  authors: [{ name: "Daniel Gagea" }],
  openGraph: {
    title: "Ce faci în momentul unui atac de panică — 5 pași",
    description:
      "5 pași concreți pentru momentul unui atac de panică. Ce ajută și ce NU ajută. Ghid practic.",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ce faci în momentul unui atac de panică — 5 pași",
  description:
    "5 pași concreți pentru momentul unui atac de panică. Ce ajută și ce NU ajută. Ghid practic de Daniel Gagea, psiholog clinician.",
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
      "https://totuldespreanxietate.ro/tipuri/atac-de-panica/ce-sa-faci/",
  },
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

/* ─── Step card ─── */
function StepCard({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-lg p-6 shadow-sm"
      style={{ backgroundColor: "var(--color-background-white)" }}
    >
      <div className="flex items-start gap-4">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          {number}
        </div>
        <div>
          <h3
            className="text-lg font-semibold mb-2"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--color-primary)",
            }}
          >
            {title}
          </h3>
          <p
            className="text-[15px] leading-relaxed"
            style={{ color: "var(--color-text)" }}
          >
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Warning card ─── */
function WarningCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-lg p-5"
      style={{ backgroundColor: "rgba(196, 97, 74, 0.08)" }}
    >
      <p
        className="font-semibold mb-1"
        style={{ color: "var(--color-accent)" }}
      >
        {title}
      </p>
      <p
        className="text-[15px] leading-relaxed"
        style={{ color: "var(--color-text)" }}
      >
        {children}
      </p>
    </div>
  );
}

export default function CeSaFaciPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── Breadcrumb + Hero ─── */}
      <Section id="hero" bg="default">
        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-2 text-sm mb-8"
          style={{ color: "var(--color-text-secondary)" }}
        >
          <Link
            href="/tipuri/atac-de-panica/"
            className="underline underline-offset-2 hover:opacity-80 transition-opacity"
            style={{ color: "var(--color-accent)" }}
          >
            Atac de panică
          </Link>
          <span aria-hidden="true">→</span>
          <span>Ce faci acum</span>
        </nav>

        {/* H1 */}
        <h1
          className="text-3xl md:text-[40px] font-medium leading-tight mb-6"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--color-primary)",
          }}
        >
          Ce faci în momentul unui atac de panică
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Dacă ești în mijlocul unui atac de panică acum, citește doar{" "}
          <strong style={{ color: "var(--color-text)" }}>textul bold</strong>.
        </p>
      </Section>

      {/* ─── 5 Steps ─── */}
      <Section id="pasi" bg="sage">
        <h2
          className="text-2xl md:text-3xl font-medium mb-10"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--color-primary)",
          }}
        >
          5 pași concreți
        </h2>

        <div className="flex flex-col gap-6">
          <StepCard number={1} title="Oprește-te. Nu fugi.">
            Impulsul de a fugi este puternic. Dar fuga confirmă creierului că
            pericolul este real. Rămâi unde ești. Dacă ești într-un loc sigur
            — și ești, chiar dacă nu simți asta acum — rămâi.
          </StepCard>

          <StepCard
            number={2}
            title="Amintește-ți: nu mori, nu înnebunești, nu pierzi controlul."
          >
            Gândurile tale de panică au un track record de 0%. De câte ori ai
            crezut că mori — și de câte ori s-a întâmplat? Răspunsul este
            zero. De fiecare dată.
          </StepCard>

          <StepCard number={3} title="Observă, nu lupta.">
            Nu încerca să oprești senzațiile cu forța. Privește-le ca un
            observator: {`\u201EInima bate repede. Interesant. Mâinile tremură. Ok.\u201D`}{" "}
            Când observi în loc să lupți, senzațiile își pierd puterea.
          </StepCard>

          <StepCard number={4} title="Expiră lung și lent.">
            NU respira adânc și repede — asta este hiperventilație. În schimb:
            inspiră ușor pe nas, 4 secunde. Apoi expiră lent pe gură, 6
            secunde — ca și cum ai sufla printr-un pai. Repetă de 5-6 ori.
          </StepCard>

          <StepCard number={5} title="Rămâi în situație.">
            Anxietatea are un plafon. Nu crește la infinit. Dacă rămâi unde
            ești, fără să fugi și fără să lupți, după 10-20 de minute
            anxietatea începe să scadă natural.
          </StepCard>
        </div>
      </Section>

      {/* ─── Ce NU ajută ─── */}
      <Section id="ce-nu-ajuta" bg="white">
        <h2
          className="text-2xl md:text-3xl font-medium mb-10"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--color-primary)",
          }}
        >
          Ce NU ajută
        </h2>

        <div className="flex flex-col gap-5">
          <WarningCard title="Respirația adâncă ca ritual">
            Un studiu controlat a arătat că adăugarea trainingului respirației
            la TCC a scăzut rata de recuperare de la 57% la 37% la 12 luni
            (Schmidt et al., 2000).
          </WarningCard>

          <WarningCard title="Fuga din situație">
            Te calmezi imediat, dar confirmi creierului că pericolul era real.
          </WarningCard>

          <WarningCard title="Căutarea repetată de reasigurare">
            {`\u201ESpune-mi că sunt ok\u201D`} funcționează 5 minute. Apoi
            nevoia revine, mai puternică.
          </WarningCard>

          <WarningCard title="Monitorizarea obsesivă a corpului">
            Cu cât cauți mai mult semne de pericol, cu atât găsești mai multe
            (Clark &amp; Beck, 2010).
          </WarningCard>
        </div>

        <p
          className="mt-10 text-[15px] italic leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Aceste tehnici te ajută să treci prin atac. Dar nu înlocuiesc
          ajutorul profesionist.
        </p>
      </Section>

      {/* ─── Navigation ─── */}
      <Section id="navigare" bg="default">
        <div
          className="flex flex-col gap-4 rounded-lg p-6"
          style={{
            backgroundColor: "var(--color-background-white)",
            border: "1px solid var(--color-border)",
          }}
        >
          <Link
            href="/tipuri/atac-de-panica/"
            className="flex items-center gap-2 text-[15px] font-medium underline underline-offset-2 hover:opacity-80 transition-opacity"
            style={{ color: "var(--color-accent)" }}
          >
            ← Înapoi la ghidul complet
          </Link>
          <Link
            href="/tipuri/atac-de-panica/tratament"
            className="flex items-center gap-2 text-[15px] font-medium underline underline-offset-2 hover:opacity-80 transition-opacity"
            style={{ color: "var(--color-accent)" }}
          >
            Când să ceri ajutor profesionist →
          </Link>
          <Link
            href="/tipuri/atac-de-panica/simptome"
            className="flex items-center gap-2 text-[15px] font-medium underline underline-offset-2 hover:opacity-80 transition-opacity"
            style={{ color: "var(--color-accent)" }}
          >
            Simptomele atacului de panică →
          </Link>
        </div>
      </Section>

      {/* ─── Author footer ─── */}
      <Section id="autor" bg="white">
        <div
          className="text-center text-sm"
          style={{ color: "var(--color-text-secondary)" }}
        >
          <p className="font-medium" style={{ color: "var(--color-text)" }}>
            Daniel Gagea
          </p>
          <p>psiholog clinician</p>
        </div>
      </Section>
    </>
  );
}
