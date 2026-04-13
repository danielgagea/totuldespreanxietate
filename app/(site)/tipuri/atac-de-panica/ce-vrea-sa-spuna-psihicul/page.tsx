import type { Metadata } from "next";
import Link from "next/link";
import { VideoPlaceholder } from "@/components/sections/VideoPlaceholder";

export const metadata: Metadata = {
  title:
    "Ce vrea să spună psihicul prin atacul de panică | Totul despre Anxietate",
  description:
    "De ce ți se întâmplă tocmai ție? Perspectiva clinică a lui Daniel Gagea despre mesajul din spatele atacului de panică.",
  authors: [{ name: "Daniel Gagea" }],
  openGraph: {
    title: "Ce vrea să spună psihicul prin atacul de panică",
    description:
      "De ce ți se întâmplă tocmai ție? Perspectiva clinică a lui Daniel Gagea despre mesajul din spatele atacului de panică.",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ce vrea să spună psihicul prin atacul de panică",
  description:
    "De ce ți se întâmplă tocmai ție? Perspectiva clinică a lui Daniel Gagea despre mesajul din spatele atacului de panică.",
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
      "https://totuldespreanxietate.ro/tipuri/atac-de-panica/ce-vrea-sa-spuna-psihicul/",
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

export default function CeVreaSaSpunaPsihiculPage() {
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
          <span aria-hidden="true">{"\u2192"}</span>
          <span>Ce vrea să spună psihicul</span>
        </nav>

        {/* H1 */}
        <h1
          className="text-3xl md:text-[40px] font-medium leading-tight mb-10"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--color-primary)",
          }}
        >
          Ce vrea să spună psihicul
        </h1>

        {/* Author card */}
        <div
          className="flex items-start gap-5 rounded-lg p-5"
          style={{
            backgroundColor: "var(--color-background-white)",
            border: "1px solid var(--color-border)",
          }}
        >
          {/* Photo placeholder */}
          <div
            className="shrink-0 flex items-center justify-center rounded-lg"
            style={{
              width: 64,
              height: 80,
              backgroundColor: "var(--color-secondary-light)",
            }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: "var(--color-secondary)" }}
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>

          <div>
            <p
              className="font-semibold text-[15px]"
              style={{ color: "var(--color-primary)" }}
            >
              Daniel Gagea
            </p>
            <p
              className="text-sm mb-2"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Psiholog clinician &middot; 10+ ani experiență &middot; 500+
              clienți
            </p>
            <p
              className="text-[14px] italic leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {`\u201EAceast\u0103 sec\u021Biune reflect\u0103 perspectiva mea clinic\u0103, dezvoltat\u0103 din lucrul direct cu sute de persoane cu atacuri de panic\u0103.\u201D`}
            </p>
          </div>
        </div>
      </Section>

      {/* ─── Intro ─── */}
      <Section id="intro" bg="white">
        <p
          className="text-[17px] leading-relaxed mb-6"
          style={{ color: "var(--color-text)" }}
        >
          Tot ce ai citit până acum explică cum funcționează atacul de panică.
          Dar există și o altă întrebare, mai profundă:{" "}
          <strong>de ce ți se întâmplă tocmai ție?</strong>
        </p>

        <p
          className="text-[17px] leading-relaxed mb-10"
          style={{ color: "var(--color-text)" }}
        >
          Majoritatea abordărilor tratează atacul de panică ca pe o eroare de
          sistem.. creierul s-a stricat și trebuie reparat. Și
          în mare parte, au dreptate. Dar în cabinetul meu, lucrul cu sute de
          persoane cu atacuri de panică mi-a arătat și altceva.
        </p>

        {/* Pull quote */}
        <blockquote
          className="rounded-lg p-6 my-10"
          style={{
            backgroundColor: "var(--color-secondary-light)",
            borderLeft: "4px solid var(--color-secondary)",
          }}
        >
          <p
            className="text-[17px] leading-relaxed italic"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--color-primary)",
            }}
          >
            Mulți dintre clienții mei au descoperit ceva neașteptat: sub frică
            era furie. Furie pe care nu și-o permiteau. Pe un părinte. Pe un
            partener. Pe o situație. Furie înghițită de ani de zile, care și-a
            găsit un alt drum de exprimare.. prin corp.
          </p>
        </blockquote>

        <p
          className="text-[17px] leading-relaxed"
          style={{ color: "var(--color-text)" }}
        >
          Cercetarea clinică psihodinamică susține această perspectivă. Gassner
          (2004) a propus că mulți pacienți cu panică au fost subprotejați și
          neglijați emoțional în copilărie. Într-un seminar cu 20 de
          psihoterapeuți, 100% au confirmat că aceste tipuri de istorii din
          copilărie erau prezente la pacienții lor cu panică.
        </p>
      </Section>

      {/* ─── Regulile invizibile ─── */}
      <Section id="reguli-invizibile" bg="default">
        <h2
          className="text-2xl md:text-3xl font-medium mb-6"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--color-primary)",
          }}
        >
          Regulile invizibile
        </h2>

        <p
          className="text-[15px] leading-relaxed mb-8"
          style={{ color: "var(--color-text)" }}
        >
          Credințe patogene (Weiss, Sampson, 1986):
        </p>

        <ul className="flex flex-col gap-4">
          {[
            `\u201ETrebuie s\u0103 am grij\u0103 de toat\u0103 lumea \u00EEnainte de mine.\u201D`,
            `\u201EDac\u0103 sunt fericit, urmeaz\u0103 ceva r\u0103u.\u201D`,
            `\u201ENu am voie s\u0103 fiu furios, furia distruge rela\u021Biile.\u201D`,
            `\u201EDac\u0103 cer ajutor, voi fi controlat sau voi datora ceva.\u201D`,
            `\u201EDac\u0103 devin independent, voi fi singur.\u201D`,
          ].map((belief) => (
            <li
              key={belief}
              className="rounded-lg py-4 px-5"
              style={{
                borderLeft: "4px solid var(--color-accent)",
                backgroundColor: "var(--color-background-white)",
              }}
            >
              <p
                className="text-[16px] italic leading-relaxed"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--color-text)",
                }}
              >
                {belief}
              </p>
            </li>
          ))}
        </ul>

        <p
          className="mt-8 text-[17px] leading-relaxed"
          style={{ color: "var(--color-text)" }}
        >
          Aceste reguli nu sunt scrise nicăieri. Dar le simți în corp de fiecare
          dată când le încalci.
        </p>
      </Section>

      {/* ─── Când fericirea declanșează panică ─── */}
      <Section id="fericirea-declenseaza-panica" bg="white">
        <h2
          className="text-2xl md:text-3xl font-medium mb-6"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--color-primary)",
          }}
        >
          Când fericirea declanșează panică
        </h2>

        <p
          className="text-[17px] leading-relaxed mb-6"
          style={{ color: "var(--color-text)" }}
        >
          Atacurile de panică pot fi declanșate nu de pericol, ci de fericire și
          succes.
        </p>

        <p
          className="text-[17px] leading-relaxed mb-6"
          style={{ color: "var(--color-text)" }}
        >
          O femeie a avut primul atac de panică într-o după-amiază în care
          era entuziasmată și fericită, așteptând
          să-și revadă soțul (Gassner, 2004). Ani mai târziu, în terapie,
          furnicăturile s-au oprit. Femeia a spus:{" "}
          {`\u201EAm nevoie doar s\u0103 pl\u00E2ng.\u201D`}
        </p>

        <p
          className="text-[17px] leading-relaxed"
          style={{ color: "var(--color-text)" }}
        >
          Nu corpul ei era problema. Fericirea activa un conflict mai vechi, mai
          adânc.
        </p>
      </Section>

      {/* ─── Dublu-bind-ul din spatele panicii ─── */}
      <Section id="dublu-bind" bg="sage">
        <h2
          className="text-2xl md:text-3xl font-medium mb-6"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--color-primary)",
          }}
        >
          Dublu-bind-ul din spatele panicii
        </h2>

        <p
          className="text-[17px] leading-relaxed mb-6"
          style={{ color: "var(--color-text)" }}
        >
          Te apropii de cineva și te simți sufocat. Te îndepărtezi și te simți
          abandonat. Nu există direcție sigură. Și corpul exprimă ce mintea nu
          poate: panică.
        </p>

        <p
          className="text-[15px] leading-relaxed italic"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Atașamentul rezistent (insecurizat), descris ca unic legat de tulburările de anxietate{" "}
          (Stroufe, 1997, citat în Gassner, 2004).
        </p>
      </Section>

      {/* ─── Nu toți, dar mulți ─── */}
      <Section id="nu-toti-dar-multi" bg="white">
        <h2
          className="text-2xl md:text-3xl font-medium mb-6"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--color-primary)",
          }}
        >
          Nu toți, dar mulți
        </h2>

        <p
          className="text-[17px] leading-relaxed"
          style={{ color: "var(--color-text)" }}
        >
          Nu toată lumea cu atacuri de panică are o poveste din copilărie în
          spatele lor. Dar dacă te recunoști, un terapeut te poate ajuta să
          asculți mesajul, într-un spațiu sigur, fără grabă.
        </p>
      </Section>

      {/* ─── Video ─── */}
      <Section id="video" bg="default">
        <VideoPlaceholder title="Daniel Gagea: Ce vrea să spună psihicul prin atacul de panică" />
      </Section>

      {/* ─── Navigation ─── */}
      <Section id="navigare" bg="white">
        <div
          className="flex flex-col gap-4 rounded-lg p-6"
          style={{
            backgroundColor: "var(--color-background)",
            border: "1px solid var(--color-border)",
          }}
        >
          <Link
            href="/tipuri/atac-de-panica/"
            className="flex items-center gap-2 text-[15px] font-medium underline underline-offset-2 hover:opacity-80 transition-opacity"
            style={{ color: "var(--color-accent)" }}
          >
            {"\u2190"} Ghidul complet
          </Link>
          <Link
            href="/tipuri/atac-de-panica/de-ce-se-intampla"
            className="flex items-center gap-2 text-[15px] font-medium underline underline-offset-2 hover:opacity-80 transition-opacity"
            style={{ color: "var(--color-accent)" }}
          >
            De ce se întâmplă {"\u2192"}
          </Link>
          <Link
            href="/tipuri/atac-de-panica/tratament"
            className="flex items-center gap-2 text-[15px] font-medium underline underline-offset-2 hover:opacity-80 transition-opacity"
            style={{ color: "var(--color-accent)" }}
          >
            Când să ceri ajutor {"\u2192"}
          </Link>
        </div>
      </Section>

      {/* ─── Author footer ─── */}
      <Section id="autor" bg="default">
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
