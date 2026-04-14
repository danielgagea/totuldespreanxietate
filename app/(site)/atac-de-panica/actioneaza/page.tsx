import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Ce faci la un atac de panică + Când ceri ajutor | Totul despre Anxietate",
  description:
    "5 pași concreți pentru momentul unui atac de panică și când să ceri ajutor profesionist. Ghid complet de Daniel Gagea, psiholog clinician, psihoterapeut. De Daniel Gagea.",
  authors: [{ name: "Daniel Gagea" }],
  alternates: {
    canonical: "https://totuldespreanxietate.ro/atac-de-panica/actioneaza",
  },
  openGraph: {
    title: "Ce faci la un atac de panică + Când ceri ajutor",
    description:
      "5 pași concreți pentru momentul unui atac de panică și când să ceri ajutor profesionist. Ghid complet de Daniel Gagea, psiholog clinician, psihoterapeut.",
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
      headline: "Ce faci la un atac de panică + Când ceri ajutor",
      description:
        "5 pași concreți pentru momentul unui atac de panică și când să ceri ajutor profesionist. Ghid complet de Daniel Gagea, psiholog clinician, psihoterapeut. De Daniel Gagea.",
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
          "https://totuldespreanxietate.ro/atac-de-panica/actioneaza/",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Acasă", item: "https://totuldespreanxietate.ro" },
        { "@type": "ListItem", position: 2, name: "Atac de panică", item: "https://totuldespreanxietate.ro/atac-de-panica" },
        { "@type": "ListItem", position: 3, name: "Ce este de făcut", item: "https://totuldespreanxietate.ro/atac-de-panica/actioneaza" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Funcționează terapia pentru atacuri de panică?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Da. Psihoterapia pentru atacurile de panică este unul dintre cele mai studiate și eficiente tratamente din psihologie, cu efecte pe termen lung. Durata variază de la persoană la persoană, în funcție de complexitatea și profunzimea problemei.",
          },
        },
      ],
    },
  ],
};

/* ─── Reusable section wrapper ─── */
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

/* ─── Section label ─── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-xs font-semibold uppercase tracking-[0.15em] mb-4"
      style={{ color: "var(--color-text-secondary)" }}
    >
      {children}
    </p>
  );
}

/* ─── Callout ─── */
function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-lg p-6"
      style={{
        backgroundColor: "var(--color-secondary-light)",
        borderLeft: "4px solid var(--color-secondary)",
      }}
    >
      {children}
    </div>
  );
}

/* ─── Stat ─── */
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p
        className="text-3xl md:text-4xl font-medium mb-1"
        style={{
          fontFamily: "var(--font-heading)",
          color: "var(--color-primary)",
        }}
      >
        {value}
      </p>
      <p
        className="text-sm leading-snug"
        style={{ color: "var(--color-text-secondary)" }}
      >
        {label}
      </p>
    </div>
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
      style={{
        backgroundColor: "rgba(196, 97, 74, 0.06)",
        border: "1px solid rgba(196, 97, 74, 0.15)",
      }}
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
      style={{
        backgroundColor: "var(--color-background-white)",
        border: "1px solid var(--color-border)",
      }}
    >
      <p
        className="text-lg italic mb-3"
        style={{
          fontFamily: "var(--font-heading)",
          color: "var(--color-text-secondary)",
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

/* ─── FAQ Accordion ─── */
function FAQItem({
  question,
  children,
}: {
  question: string;
  children: React.ReactNode;
}) {
  return (
    <details
      className="group rounded-lg p-6"
      style={{
        backgroundColor: "var(--color-background-white)",
        border: "1px solid var(--color-border)",
      }}
    >
      <summary
        className="cursor-pointer list-none text-[15px] font-medium flex items-center justify-between"
        style={{ color: "var(--color-text)" }}
      >
        {question}
        <span
          className="ml-4 shrink-0 transition-transform duration-200 group-open:rotate-45"
          aria-hidden="true"
        >
          +
        </span>
      </summary>
      <div
        className="mt-4 text-[15px] leading-relaxed"
        style={{ color: "var(--color-text)" }}
      >
        {children}
      </div>
    </details>
  );
}

export default function ActioneazaPage() {
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
          href="#acum"
          className="underline underline-offset-2 hover:no-underline"
        >
          Ai un atac de panică acum? &rarr; Mergi direct la cei 5 pași
        </Link>
      </div>

      {/* ─── HERO + 5 PAȘI (combined) ─── */}
      <header
        id="acum"
        className="scroll-mt-8"
        style={{ backgroundColor: "var(--color-secondary-light)" }}
      >
        <div className="mx-auto max-w-[760px] px-6 pt-16 md:pt-24 pb-8">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-sm mb-8"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <Link
              href="/atac-de-panica/"
              className="hover:underline"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Atac de panică
            </Link>
            <span aria-hidden="true">&rarr;</span>
            <span style={{ color: "var(--color-primary)" }} className="font-medium">
              Acționează
            </span>
          </nav>

          <SectionLabel>01 &middot; Acum</SectionLabel>

          <h1
            className="text-[28px] md:text-[38px] leading-[1.25] mb-3"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              color: "var(--color-primary)",
            }}
          >
            Ce poți face, acum și pe termen lung
          </h1>

          <p
            className="text-sm mb-2"
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

          <p
            className="text-[15px] leading-relaxed mb-10"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Dacă ești în mijlocul unui atac de panică acum, citește doar{" "}
            <strong style={{ color: "var(--color-text)" }}>textul bold</strong>.
          </p>

          <h2
            className="text-[22px] md:text-[26px] font-medium mb-8"
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
            , și ești, chiar dacă nu simți asta acum, rămâi.
          </StepCard>

          <StepCard
            number={2}
            title="Amintește-ți: nu mori, nu înnebunești, nu pierzi controlul."
          >
            Corpul tău a trecut prin asta de fiecare dată și de fiecare dată a fost ok. Inima a bătut repede și s-a oprit. Amețeala a venit și a trecut. Senzația de sufocare s-a dizolvat. Niciodată nu s-a întâmplat ce te-ai temut.
          </StepCard>

          <StepCard number={3} title="Observă, nu lupta.">
            În loc să lupți cu senzațiile, încearcă să le observi fără să reacționezi.. notează mental ce simți, unde simți, și cât durează. Când observi în loc să lupți, senzațiile își pierd din intensitate.
          </StepCard>

          <StepCard number={4} title="Expiră lung și lent.">
            NU respira adânc și repede.. asta este hiperventilație. În schimb:
            inspiră ușor pe nas, 4 secunde. Apoi expiră lent pe gură, 6
            secunde, ca și cum ai sufla printr-un pai. Repetă de 5-6 ori.
          </StepCard>

          <StepCard number={5} title="Rămâi în situație.">
            Anxietatea are un plafon. Nu crește la infinit. Dacă rămâi unde
            ești, fără să fugi și fără să lupți, după 10-20 de minute
            anxietatea începe să scadă natural.
          </StepCard>
        </div>
        </div>
      </header>

      {/* ─── PART 2: Ce NU ajută ─── */}
      <Section id="ce-nu-ajuta" bg="white">
        <SectionLabel>02 · Evită</SectionLabel>

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
            Dacă respiri adânc doar pentru că simți că fără tehnica ta pierzi controlul, respirația devine parte din problemă. Scopul nu e să controlezi panica cu o tehnică, ci să înveți că panica trece singură.
          </WarningCard>

          <WarningCard title="Fuga din situație">
            Te calmezi imediat, dar confirmi creierului că pericolul era real.
          </WarningCard>

          <WarningCard title="Căutarea repetată de reasigurare">
            Când ceri cuiva să te asigure că ești ok, ușurarea durează câteva minute, dar apoi nevoia revine mai puternică. Cu cât primești mai multă reasigurare, cu atât ai nevoie de mai multă.
          </WarningCard>

          <WarningCard title="Monitorizarea obsesivă a corpului">
            Cu cât cauți mai mult semne de pericol, cu atât găsești mai multe.
            Hipervigilența amplifică exact senzațiile de care te temi.
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

      {/* ─── PART 3: Când să ceri ajutor ─── */}
      <Section id="ajutor" bg="default">
        <SectionLabel>03 · Pasul următor</SectionLabel>

        <h2
          className="text-2xl md:text-3xl font-medium mb-10"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--color-primary)",
          }}
        >
          Când să ceri ajutor profesionist
        </h2>

        {/* Stats row */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-lg p-6"
          style={{
            backgroundColor: "var(--color-background-white)",
            border: "1px solid var(--color-border)",
          }}
        >
          <Stat value="85–90%" label="rată de recuperare cu psihoterapie" />
          <Stat value="12–15" label="ședințe, nu ani" />
          <Stat value="78%" label="remisie completă (APA)" />
        </div>

        {/* Evidence text */}
        <div className="mt-10 space-y-5">
          <p
            className="text-[15px] leading-relaxed"
            style={{ color: "var(--color-text)" }}
          >
            Studii derulate la Universitățile Oxford, Pennsylvania și New York
            au confirmat aceste rezultate. La 15 luni după terminarea terapiei,
            85% dintre pacienții tratați cu psihoterapie nu mai aveau
            atacuri de panică (Clark et al., 1994). 20% dintre pacienți au
            raportat ameliorare semnificativă după doar 2 ședințe (Clerkin et
            al., 2008).
          </p>
        </div>

        {/* Ce te oprește */}
        <h3
          className="text-xl md:text-2xl font-medium mt-14 mb-8"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--color-primary)",
          }}
        >
          Ce te oprește și de ce nu ar trebui
        </h3>

        <div className="flex flex-col gap-6">
          <MythRealityCard
            myth={`„Nu am nevoie de ani de terapie."`}
            reality="Terapia durează cât are nevoie să dureze.. până înțelegi mesajul pe care corpul și psihicul tău încearcă să ți-l transmită. La unii oameni e mai scurt, la alții mai lung."
          />
          <MythRealityCard
            myth={`„Terapia înseamnă să stau pe divan și să vorbesc despre copilărie."`}
            reality="Psihoterapia pentru panică este complet diferită. Cu teme de casă, exerciții concrete, rezultate măsurabile."
          />
          <MythRealityCard
            myth={`„E mai bine să iau pastile."`}
            reality="Psihoterapia este la fel de eficientă ca medicația, cu un avantaj major: efectele se mențin pe termen lung."
          />
        </div>

        {/* Când este momentul */}
        <h3
          className="text-xl md:text-2xl font-medium mt-14 mb-8"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--color-primary)",
          }}
        >
          Când este momentul
        </h3>

        <ul className="space-y-4">
          {[
            "Atacuri de panică mai mult de o dată pe lună",
            "Eviți locuri, activități sau situații din cauza panicii",
            "Ai renunțat la lucruri importante pentru tine",
            "Folosești alcool, medicamente sau alte substanțe ca să faci față",
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

        {/* Callout */}
      </Section>

      {/* ─── CTA ─── */}
      <Section id="cta" bg="white">
        <div
          className="rounded-lg p-8 md:p-10 text-center"
          style={{
            backgroundColor: "var(--color-background-white)",
            border: "1px solid var(--color-border)",
          }}
        >
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
          >
            Programează o conversație cu Daniel
          </Link>
        </div>
      </Section>

      {/* ─── FAQ ─── */}
      <Section id="faq" bg="default">
        <h2
          className="text-2xl md:text-3xl font-medium mb-8"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--color-primary)",
          }}
        >
          Întrebări frecvente
        </h2>

        <FAQItem question="Funcționează terapia pentru atacuri de panică?">
          <p>
            Da. Psihoterapia pentru atacurile de panică este unul dintre cele mai studiate și eficiente tratamente din psihologie, cu efecte pe termen lung. Durata variază de la persoană la persoană, în funcție de complexitatea și profunzimea problemei.
          </p>
        </FAQItem>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "40px" }}>
          <Link href="/atac-de-panica" style={{ display: "flex", alignItems: "center", gap: "8px", padding: "16px 20px", borderRadius: "10px", background: "var(--color-background-white)", border: "1px solid var(--color-border)", textDecoration: "none", fontSize: "15px", fontWeight: 500, color: "var(--color-primary)", transition: "transform 0.2s ease-out" }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13 8H3M3 8L7 4M3 8L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Înapoi la ghid
          </Link>
          <Link href="/programare?din=atac-de-panica" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderRadius: "10px", background: "var(--color-secondary)", textDecoration: "none", fontSize: "15px", fontWeight: 600, color: "#fff", transition: "transform 0.2s ease-out" }}>
            Programează o consultație
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </Section>
    </>
  );
}
