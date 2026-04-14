import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Tratament atac de panică. Când și cum să ceri ajutor | Totul despre Anxietate",
  description:
    "85-90% rată de recuperare cu TCC în 12-15 ședințe. Când să ceri ajutor, ce te oprește, și ce funcționează. De Daniel Gagea, psiholog clinician.",
  authors: [{ name: "Daniel Gagea" }],
  alternates: {
    canonical: "https://totuldespreanxietate.ro/tipuri/atac-de-panica/tratament",
  },
  openGraph: {
    title: "Tratament atac de panică. Când și cum să ceri ajutor",
    description:
      "85-90% rată de recuperare cu TCC în 12-15 ședințe. Când să ceri ajutor, ce te oprește, și ce funcționează.",
    type: "article",
    locale: "ro_RO",
    siteName: "Totul despre Anxietate",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Tratament atac de panică. Când și cum să ceri ajutor",
  description:
    "85-90% rată de recuperare cu TCC în 12-15 ședințe. Când să ceri ajutor, ce te oprește, și ce funcționează. De Daniel Gagea, psiholog clinician.",
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
      "https://totuldespreanxietate.ro/tipuri/atac-de-panica/tratament/",
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

/* ─── Myth / Reality card ─── */
function MythRealityCard({
  myth,
  reality,
}: {
  myth: string;
  reality: string;
}) {
  return (
    <div
      className="rounded-lg p-6 shadow-sm"
      style={{ backgroundColor: "var(--color-background-white)" }}
    >
      <p
        className="text-lg italic mb-3"
        style={{
          fontFamily: "var(--font-heading)",
          color: "var(--color-accent)",
        }}
      >
        {myth}
      </p>
      <p
        className="text-[15px] leading-relaxed"
        style={{
          fontFamily: "var(--font-body)",
          color: "var(--color-text)",
        }}
      >
        {reality}
      </p>
    </div>
  );
}

/* ─── Mechanism card ─── */
function MechanismCard({
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

export default function TratamentPage() {
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
          <span aria-hidden="true">&rarr;</span>
          <span>Tratament</span>
        </nav>

        {/* H1 */}
        <h1
          className="text-3xl md:text-[40px] font-medium leading-tight mb-10"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--color-primary)",
          }}
        >
          Când și cum să ceri ajutor profesionist
        </h1>

        {/* Stats row */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-lg p-6"
          style={{
            backgroundColor: "var(--color-background-white)",
            border: "1px solid var(--color-border)",
          }}
        >
          <div className="text-center">
            <p
              className="text-3xl md:text-4xl font-medium mb-1"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--color-primary)",
              }}
            >
              85-90%
            </p>
            <p
              className="text-sm leading-snug"
              style={{ color: "var(--color-text-secondary)" }}
            >
              rată de recuperare cu TCC
            </p>
          </div>
          <div className="text-center">
            <p
              className="text-3xl md:text-4xl font-medium mb-1"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--color-primary)",
              }}
            >
              12-15
            </p>
            <p
              className="text-sm leading-snug"
              style={{ color: "var(--color-text-secondary)" }}
            >
              ședințe, nu ani
            </p>
          </div>
          <div className="text-center">
            <p
              className="text-3xl md:text-4xl font-medium mb-1"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--color-primary)",
              }}
            >
              78%
            </p>
            <p
              className="text-sm leading-snug"
              style={{ color: "var(--color-text-secondary)" }}
            >
              remisie completă (APA)
            </p>
          </div>
        </div>

        {/* Intro text */}
        <div className="mt-10 space-y-5">
          <p
            className="text-[15px] leading-relaxed"
            style={{ color: "var(--color-text)" }}
          >
            Studii derulate la Universitățile Oxford, Pennsylvania și New York au
            confirmat aceste rezultate în mod repetat. La 15 luni după terminarea
            terapiei, 85% dintre pacienții tratați cu terapie cognitivă nu mai
            aveau atacuri de panică (Clark et al., 1994). 20% dintre pacienți au
            raportat ameliorare semnificativă după doar 2 ședințe (Clerkin et
            al., 2008).
          </p>
          <p
            className="text-[15px] leading-relaxed"
            style={{ color: "var(--color-text)" }}
          >
            APA confirmă: TCC prezintă 78% remisie completă (Asociația
            Psihiatrică Americană, 1998).
          </p>
        </div>
      </Section>

      {/* ─── Ce te oprește ─── */}
      <Section id="ce-te-opreste" bg="sage">
        <h2
          className="text-2xl md:text-3xl font-medium mb-10"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--color-primary)",
          }}
        >
          Ce te oprește, și de ce nu ar trebui
        </h2>

        <div className="flex flex-col gap-6">
          <MythRealityCard
            myth={`\u201ENu am nevoie de ani de terapie.\u201D`}
            reality="Nu ai nevoie. Protocolul standard este 12-15 ședințe. Structurat. Practic. Focalizat pe prezent."
          />
          <MythRealityCard
            myth={`\u201ETerapia înseamnă să stau pe divan și să vorbesc despre copilărie.\u201D`}
            reality="TCC pentru panică este complet diferită. Înveți să-ți înțelegi ciclul, să-ți confrunți interpretările catastrofice și să-ți recapeți viața pas cu pas."
          />
          <MythRealityCard
            myth={`\u201EE mai bine să iau pastile.\u201D`}
            reality="TCC este la fel de eficientă ca medicația, cu un avantaj major: efectele se mențin pe termen lung (Hollon et al., 2006)."
          />
          <MythRealityCard
            myth={`\u201ELa mine nu funcționează, am panică de ani de zile.\u201D`}
            reality="Helen avea 27 de ani și 11 ani de tulburare de panică, cu 8 atacuri pe zi. După 12 ședințe de terapie cognitivă, frecvența atacurilor s-a redus semnificativ (Clark & Beck, 2010)."
          />
        </div>
      </Section>

      {/* ─── Frica de următorul atac ─── */}
      <Section id="frica-de-atac" bg="white">
        <h2
          className="text-2xl md:text-3xl font-medium mb-6"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--color-primary)",
          }}
        >
          Frica de următorul atac
        </h2>

        <p
          className="text-[15px] leading-relaxed mb-4"
          style={{ color: "var(--color-text)" }}
        >
          Caracteristica principală a tulburării de panică nu este atacul în sine,
          ci teama persistentă de a-l retrăi, frica de frică (DSM-IV-TR, APA, 2000).
        </p>

        {/* Mechanism cards */}
        <div className="flex flex-col gap-6 mt-10">
          <MechanismCard number={1} title="Anxietatea anticipativă">
            Îngrijorare constantă, corp în alertă permanentă.
          </MechanismCard>
          <MechanismCard number={2} title="Evitarea">
            98% evită situații. Funcționează pe termen scurt, confirmă
            pericolul.
          </MechanismCard>
          <MechanismCard number={3} title="Comportamentele de siguranță">
            Telefonul, pastila, persoana de siguranță. 80% evită inclusiv
            senzațiile fizice.
          </MechanismCard>
        </div>

        {/* Spirala */}
        <div
          className="mt-10 rounded-lg p-6 text-center"
          style={{
            backgroundColor: "var(--color-secondary-light)",
            border: "1px solid var(--color-border)",
          }}
        >
          <p
            className="text-[15px] font-medium leading-relaxed"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--color-primary)",
            }}
          >
            Evitare &rarr; izolare &rarr; depresie &rarr; automediere &rarr; mai
            multă panică
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div
            className="rounded-lg p-6 text-center"
            style={{
              backgroundColor: "var(--color-background)",
              border: "1px solid var(--color-border)",
            }}
          >
            <p
              className="text-3xl md:text-4xl font-medium mb-1"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--color-accent)",
              }}
            >
              12%
            </p>
            <p
              className="text-sm"
              style={{ color: "var(--color-text-secondary)" }}
            >
              remisie fără tratament la 5 ani
            </p>
          </div>
          <div
            className="rounded-lg p-6 text-center"
            style={{
              backgroundColor: "var(--color-background)",
              border: "1px solid var(--color-border)",
            }}
          >
            <p
              className="text-3xl md:text-4xl font-medium mb-1"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--color-accent)",
              }}
            >
              7&times;
            </p>
            <p
              className="text-sm"
              style={{ color: "var(--color-text-secondary)" }}
            >
              costuri medicale mai mari
            </p>
          </div>
        </div>

        {/* Callout */}
        <div
          className="mt-10 rounded-lg p-6"
          style={{
            backgroundColor: "rgba(196, 97, 74, 0.08)",
            borderLeft: "4px solid var(--color-accent)",
          }}
        >
          <p
            className="text-[15px] font-semibold mb-2"
            style={{ color: "var(--color-accent)" }}
          >
            Comparația care contează
          </p>
          <p
            className="text-[15px] leading-relaxed"
            style={{ color: "var(--color-text)" }}
          >
            Fără tratament, 12% remisie la 5 ani. Cu terapie, 85% recuperare
            la 15 luni. Diferența nu este noroc, ci o decizie.
          </p>
        </div>
      </Section>

      {/* ─── Când este momentul ─── */}
      <Section id="cand-este-momentul" bg="sage">
        <h2
          className="text-2xl md:text-3xl font-medium mb-10"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--color-primary)",
          }}
        >
          Când este momentul
        </h2>

        <ul className="space-y-4">
          {[
            "Atacuri de panică mai mult de o dată pe lună",
            "Eviți locuri, activități sau situații din cauza panicii",
            "Ai renunțat la lucruri importante pentru tine",
            "Folosești alcool, medicamente sau alte substanțe",
            "Simți că viața ta se restrânge",
            "Te temi constant de următorul atac",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span
                className="mt-[7px] h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: "var(--color-accent)" }}
                aria-hidden="true"
              />
              <span
                className="text-[15px] leading-relaxed"
                style={{ color: "var(--color-text)" }}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      {/* ─── CTA ─── */}
      <Section id="cta" bg="white">
        <div className="text-center">
          <h3
            className="text-2xl md:text-3xl font-medium mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--color-primary)",
            }}
          >
            Următorul pas
          </h3>
          <p
            className="text-[15px] leading-relaxed mb-8 max-w-lg mx-auto"
            style={{ color: "var(--color-text)" }}
          >
            Primul pas este o conversație. Nu un angajament, nu o promisiune,
            doar o discuție în care înțelegem împreună ce ți se întâmplă și ce
            poți face.
          </p>
          <Link
            href="/programare/"
            className="inline-block rounded-lg px-7 py-3.5 text-[15px] font-medium text-white transition-colors"
            style={{ backgroundColor: "var(--color-accent)" }}
            onMouseEnter={undefined}
          >
            Programează o conversație cu Daniel
          </Link>
        </div>
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
            &larr; Ghidul complet
          </Link>
          <Link
            href="/tipuri/atac-de-panica/ce-sa-faci"
            className="flex items-center gap-2 text-[15px] font-medium underline underline-offset-2 hover:opacity-80 transition-opacity"
            style={{ color: "var(--color-accent)" }}
          >
            Ce faci în momentul unui atac &rarr;
          </Link>
          <Link
            href="/tipuri/atac-de-panica/ce-vrea-sa-spuna-psihicul"
            className="flex items-center gap-2 text-[15px] font-medium underline underline-offset-2 hover:opacity-80 transition-opacity"
            style={{ color: "var(--color-accent)" }}
          >
            Ce vrea să spună psihicul &rarr;
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
