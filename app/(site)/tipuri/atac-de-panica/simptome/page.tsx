import type { Metadata } from "next";
import Link from "next/link";
import { VideoPlaceholder } from "@/components/sections/VideoPlaceholder";

export const metadata: Metadata = {
  title:
    "Ce sim\u021Bi \u00EEn timpul unui atac de panic\u0103 \u2014 Simptome fizice \u0219i mentale | Totul despre Anxietate",
  description:
    "Simptomele unui atac de panic\u0103: palpita\u021Bii, dificult\u0103\u021Bi de respira\u021Bie, ame\u021Beal\u0103, derealizare. Cum escaladeaz\u0103 \u0219i de ce. De Daniel Gagea, psiholog clinician.",
  authors: [{ name: "Daniel Gagea" }],
  openGraph: {
    title:
      "Ce sim\u021Bi \u00EEn timpul unui atac de panic\u0103 \u2014 Simptome fizice \u0219i mentale",
    description:
      "Simptomele unui atac de panic\u0103: palpita\u021Bii, dificult\u0103\u021Bi de respira\u021Bie, ame\u021Beal\u0103, derealizare. Cum escaladeaz\u0103 \u0219i de ce.",
    type: "article",
  },
};

/* ─── Reusable section wrapper ─── */
function Section({
  children,
  bg = "default",
  className = "",
}: {
  children: React.ReactNode;
  bg?: "default" | "white";
  className?: string;
}) {
  const bgMap = {
    default: "var(--color-background)",
    white: "var(--color-background-white)",
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

/* ─── Page ─── */
export default function SimptomePage() {
  return (
    <>
      {/* ── Hero / Intro ── */}
      <Section bg="white">
        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-2 text-sm mb-10"
          style={{ color: "var(--color-text-secondary)" }}
        >
          <Link
            href="/tipuri/atac-de-panica/"
            className="underline underline-offset-2 transition-colors"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Atac de panic\u0103
          </Link>
          <span aria-hidden="true">\u2192</span>
          <span style={{ color: "var(--color-text)" }}>Simptome</span>
        </nav>

        {/* H1 */}
        <h1
          className="text-3xl md:text-[42px] leading-[1.2] font-medium mb-4"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--color-primary)",
          }}
        >
          Ce sim\u021Bi \u00EEn timpul unui atac de panic\u0103
        </h1>

        {/* Author */}
        <p
          className="text-sm mb-10"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Daniel Gagea, psiholog clinician
        </p>

        {/* Intro */}
        <p
          className="text-lg leading-relaxed"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--color-text)",
          }}
        >
          Totul \u00EEncepe brusc. Uneori \u00EEntr-o situa\u021Bie specific\u0103 &mdash; un loc
          aglomerat, o c\u0103l\u0103torie, o \u00EEnt\u00E2lnire. Alteori, aparent din senin
          &mdash; acas\u0103, la birou, sau chiar \u00EEn somn.
        </p>
      </Section>

      {/* ── Senza\u021Biile fizice ── */}
      <Section bg="default">
        <h2
          className="text-2xl md:text-3xl font-medium mb-8"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--color-primary)",
          }}
        >
          Senza\u021Biile fizice
        </h2>

        <div
          className="space-y-6 text-[17px] leading-[1.75]"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--color-text)",
          }}
        >
          <p>
            Inima \u00EEncepe s\u0103 bat\u0103 puternic, repede, de parc\u0103 ar vrea s\u0103 ias\u0103
            din piept. Sim\u021Bi durere sau presiune \u00EEn piept &mdash; \u0219i imediat te
            g\u00E2nde\u0219ti la ce e mai r\u0103u.
          </p>

          <p>
            Respira\u021Bia se schimb\u0103. Sim\u021Bi c\u0103 nu prime\u0219ti destul aer, c\u0103 te
            sufoci, c\u0103 ceva \u00EE\u021Bi blocheaz\u0103 g\u00E2tul. \u0218i iat\u0103 paradoxul pe care
            pu\u021Bini oameni \u00EEl \u0219tiu: \u00EEn timpul unui atac de panic\u0103, respiri{" "}
            <strong>PREA MULT</strong>, nu prea pu\u021Bin. Senza\u021Bia de sufocare este
            produs\u0103 de hiperventila\u021Bie &mdash; respira\u021Bia rapid\u0103 \u0219i profund\u0103
            scade brusc presiunea CO2 din s\u00E2nge (hipocapnie), ceea ce produce
            ame\u021Beal\u0103, furnic\u0103turi \u0219i senza\u021Bie de sufocare{" "}
            <span style={{ color: "var(--color-text-secondary)" }}>
              (Meuret, Ritz, Wilhelm &amp; Roth, 2005; Clark et al., 1985)
            </span>
            .
          </p>

          <p>
            Ame\u021Beala vine \u00EEn val. Sim\u021Bi c\u0103 te pierzi, c\u0103 le\u0219ini, c\u0103 solul se
            mi\u0219c\u0103 sub tine. M\u00E2inile \u0219i picioarele amor\u021Besc sau furnic\u0103tur\u0103
            &mdash; senza\u021Bie ciudat\u0103, ca \u0219i cum nu ar fi ale tale.
          </p>

          <p>
            Transpiri &mdash; uneori abundent, uneori doar palme umede.
            Alternezi \u00EEntre valuri de c\u0103ldur\u0103 \u0219i frisoane. Sim\u021Bi grea\u021B\u0103, ca \u0219i
            cum ai vomita.
          </p>

          <p>
            \u0218i poate cea mai \u00EEnsp\u0103im\u00E2nt\u0103toare senza\u021Bie: totul din jur pare
            ireal. De parc\u0103 ai privi un film cu tine \u00EEnsu\u021Bi. De parc\u0103 lumea
            s-a decuplat. Asta se nume\u0219te{" "}
            <strong>derealizare</strong>, \u0219i este un simptom frecvent, nu un
            semn de nebunie.
          </p>
        </div>
      </Section>

      {/* ── Ce se \u00EEnt\u00E2mpl\u0103 \u00EEn minte ── */}
      <Section bg="white">
        <h2
          className="text-2xl md:text-3xl font-medium mb-8"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--color-primary)",
          }}
        >
          Ce se \u00EEnt\u00E2mpl\u0103 \u00EEn minte
        </h2>

        <p
          className="text-[17px] leading-[1.75] mb-8"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--color-text)",
          }}
        >
          Senza\u021Biile fizice vin cu g\u00E2nduri automate &mdash; rapide, intense, \u0219i
          extrem de conving\u0103toare \u00EEn acel moment:
        </p>

        {/* Thoughts list */}
        <ul className="space-y-3 mb-8">
          {[
            `\u201EFac infarct.\u201D`,
            `\u201E\u00CEnnebunesc.\u201D`,
            `\u201EPierd controlul.\u201D`,
            `\u201ENu pot respira \u2014 m\u0103 sufoc.\u201D`,
            `\u201ETrebuie s\u0103 ies de aici.\u201D`,
            `\u201EM\u0103 voi face de r\u00E2s.\u201D`,
            `\u201ENu se va termina niciodat\u0103.\u201D`,
          ].map((thought) => (
            <li
              key={thought}
              className="pl-5 py-2 italic"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "18px",
                lineHeight: 1.6,
                color: "var(--color-primary)",
                borderLeft: "3px solid var(--color-accent)",
              }}
            >
              {thought}
            </li>
          ))}
        </ul>

        <div
          className="space-y-6 text-[17px] leading-[1.75]"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--color-text)",
          }}
        >
          <p>
            Aceste g\u00E2nduri nu sunt ra\u021Bionale. Dar \u00EEn mijlocul atacului, ele se
            simt absolut adev\u0103rate. \u0218i tocmai asta este problema.
          </p>
        </div>
      </Section>

      {/* ── Cascada ── */}
      <Section bg="default">
        <h2
          className="text-2xl md:text-3xl font-medium mb-8"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--color-primary)",
          }}
        >
          Cascada: cum escaladeaz\u0103 totul
        </h2>

        <p
          className="text-[17px] leading-[1.75] mb-10"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--color-text)",
          }}
        >
          Iat\u0103 ce se \u00EEnt\u00E2mpl\u0103 de fapt, pas cu pas:
        </p>

        {/* Numbered cascade steps */}
        <ol className="space-y-6 mb-10">
          {[
            `Apare o senza\u021Bie fizic\u0103 \u2014 poate o palpita\u021Bie, o ame\u021Beal\u0103, o u\u0219oar\u0103 dificultate de respira\u021Bie. Poate fi cauzat\u0103 de stres, oboseal\u0103, cafea, sau pur \u0219i simplu de corpul t\u0103u func\u021Bion\u00E2nd normal.`,
            `Creierul interpreteaz\u0103 senza\u021Bia ca pericol: \u201EInima bate repede \u2014 probabil fac infarct.\u201D`,
            `Interpretarea produce fric\u0103. Frica intensific\u0103 senza\u021Biile fizice \u2014 inima bate \u0219i mai repede, respira\u021Bia se accelereaz\u0103 \u0219i mai mult.`,
            `Senza\u021Biile intensificate confirm\u0103 interpretarea: \u201EVede\u021Bi? E \u0219i mai r\u0103u. Chiar e ceva grav.\u201D`,
            `Ciclul se repet\u0103 \u2014 \u0219i \u00EEn c\u00E2teva secunde, e\u0219ti \u00EEn mijlocul unui atac de panic\u0103 complet.`,
          ].map((step, i) => (
            <li key={i} className="flex gap-4 items-start">
              <span
                className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "#fff",
                  fontFamily: "var(--font-body)",
                }}
              >
                {i + 1}
              </span>
              <p
                className="text-[17px] leading-[1.75] pt-1"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--color-text)",
                }}
              >
                {step}
              </p>
            </li>
          ))}
        </ol>

        {/* Callout */}
        <Callout>
          <p
            className="text-[17px] leading-[1.75] font-medium"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--color-text)",
            }}
          >
            Asta este ceea ce cercet\u0103torii numesc{" "}
            <strong>cercul vicios al panicii</strong>{" "}
            <span style={{ color: "var(--color-text-secondary)" }}>
              (Clark, 1986; Beck, 1988)
            </span>
            . Nu senza\u021Bia fizic\u0103 produce atacul. Interpretarea catastrofic\u0103 a
            senza\u021Biei &mdash; aceea produce atacul.
          </p>
        </Callout>

        <div
          className="space-y-6 text-[17px] leading-[1.75]"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--color-text)",
          }}
        >
          <p>
            Fiecare senza\u021Bie pe care o sim\u021Bi \u00EEn timpul unui atac de panic\u0103 are
            o explica\u021Bie biologic\u0103 clar\u0103. Niciuna nu este periculoas\u0103. Corpul
            t\u0103u face exact ceea ce e programat s\u0103 fac\u0103 \u00EEntr-o situa\u021Bie de
            pericol. Singura problem\u0103: pericolul nu exist\u0103.
          </p>
        </div>
      </Section>

      {/* ── Video ── */}
      <Section bg="white">
        <VideoPlaceholder title="Daniel Gagea explic\u0103: Simptomele atacului de panic\u0103" />
      </Section>

      {/* ── Navigation links ── */}
      <Section bg="default">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Back to guide */}
          <Link
            href="/tipuri/atac-de-panica/"
            className="group block rounded-xl p-5 transition-shadow"
            style={{
              backgroundColor: "var(--color-background-white)",
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <span
              className="text-sm block mb-1"
              style={{ color: "var(--color-text-secondary)" }}
            >
              \u2190 \u00CEnapoi
            </span>
            <span
              className="font-medium block"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--color-primary)",
              }}
            >
              Ghidul complet
            </span>
          </Link>

          {/* Next: sau-infarct */}
          <Link
            href="/tipuri/atac-de-panica/sau-infarct"
            className="group block rounded-xl p-5 transition-shadow"
            style={{
              backgroundColor: "var(--color-background-white)",
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <span
              className="text-sm block mb-1"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Urm\u0103tor \u2192
            </span>
            <span
              className="font-medium block"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--color-primary)",
              }}
            >
              Atac de panic\u0103 sau infarct?
            </span>
          </Link>

          {/* Next: ce-sa-faci */}
          <Link
            href="/tipuri/atac-de-panica/ce-sa-faci"
            className="group block rounded-xl p-5 transition-shadow"
            style={{
              backgroundColor: "var(--color-background-white)",
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <span
              className="text-sm block mb-1"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Urm\u0103tor \u2192
            </span>
            <span
              className="font-medium block"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--color-primary)",
              }}
            >
              Ce faci \u00EEn momentul unui atac
            </span>
          </Link>
        </div>
      </Section>

      {/* ── Author footer ── */}
      <Section bg="white">
        <div
          className="text-center text-sm"
          style={{ color: "var(--color-text-secondary)" }}
        >
          <p
            className="font-medium mb-1"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--color-primary)",
              fontSize: "16px",
            }}
          >
            Daniel Gagea
          </p>
          <p>
            Psiholog clinician &middot; 10+ ani experien\u021B\u0103 &middot; 500+ clien\u021Bi
          </p>
        </div>
      </Section>
    </>
  );
}
