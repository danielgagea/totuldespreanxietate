import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Atacul de panică — Ghid complet | Totul despre Anxietate",
  description:
    "Ce este un atac de panică, de ce se întâmplă, ce simți, și ce poți face. Ghid complet bazat pe cercetare, de Daniel Gagea, psiholog clinician.",
  authors: [{ name: "Daniel Gagea" }],
  openGraph: {
    title: "Atacul de panică — Ghid complet",
    description:
      "Ce este un atac de panică, de ce se întâmplă, ce simți, și ce poți face.",
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
      dateModified: "2026-03-19",
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
          name: "C\u00e2t dureaz\u0103 un atac de panic\u0103?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Un atac de panic\u0103 atinge de obicei intensitatea maxim\u0103 \u00een 5-10 minute \u0219i dureaz\u0103 \u00een medie 10-20 de minute. Atacul trece \u00eentotdeauna.",
          },
        },
        {
          "@type": "Question",
          name: "Pot s\u0103 mor din cauza unui atac de panic\u0103?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nu. Un atac de panic\u0103 nu este periculos din punct de vedere medical.",
          },
        },
        {
          "@type": "Question",
          name: "Func\u021bioneaz\u0103 terapia pentru atacuri de panic\u0103?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Da. TCC are o rat\u0103 de eficacitate de 85-90% dup\u0103 12-15 \u0219edin\u021be.",
          },
        },
      ],
    },
    {
      "@type": "Person",
      name: "Daniel Gagea",
      jobTitle: "Psiholog clinician",
      description:
        "Psiholog clinician cu peste 10 ani de experien\u021b\u0103 \u0219i peste 500 de clien\u021bi.",
      url: "https://totuldespreanxietate.ro/despre-daniel/",
    },
  ],
};

/* ─── Card component for hub navigation ─── */
function GuideCard({
  number,
  title,
  description,
  href,
  accent = false,
}: {
  number: string;
  title: string;
  description: string;
  href: string;
  accent?: boolean;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-xl p-6 cursor-pointer"
      style={{
        backgroundColor: accent
          ? "var(--color-accent)"
          : "var(--color-background-white)",
        border: accent ? "none" : "1px solid var(--color-border)",
        transition: "var(--transition-fast)",
      }}
    >
      <div className="flex items-start gap-4">
        <span
          className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium"
          style={{
            backgroundColor: accent
              ? "rgba(255,255,255,0.2)"
              : "var(--color-primary)",
            color: "#FFFFFF",
          }}
        >
          {number}
        </span>
        <div>
          <h3
            className="text-[17px] font-semibold mb-1"
            style={{ color: accent ? "#FFFFFF" : "var(--color-primary)" }}
          >
            {title}
            <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
              &rarr;
            </span>
          </h3>
          <p
            className="text-[14px] leading-relaxed"
            style={{
              color: accent
                ? "rgba(255,255,255,0.85)"
                : "var(--color-text-secondary)",
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </Link>
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
export default function AtacDePanicaHub() {
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
          href="/tipuri/atac-de-panica/ce-sa-faci"
          className="underline underline-offset-2 hover:no-underline"
        >
          Ai un atac de panică acum? &rarr; Mergi direct la ce poți face
        </Link>
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
            , psiholog clinician — 10+ ani experiență, 500+ clienți
          </p>

          {/* Empathic intro */}
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
              <strong>
                Dacă te recunoști în aceste cuvinte, nu ești singur și nu ești
                nebun.
              </strong>{" "}
              Ceea ce trăiești se numește atac de panică. Și în acest ghid vei
              înțelege exact ce ți se întâmplă, de ce ți se întâmplă, și ce poți
              face.
            </p>
          </div>

          {/* Quick stats */}
          <div
            className="grid grid-cols-3 gap-4 mt-10 py-8 px-6 rounded-xl"
            style={{
              backgroundColor: "var(--color-background-white)",
              border: "1px solid var(--color-border)",
            }}
          >
            <Stat
              number="30-40%"
              text="dintre adulți experimentează cel puțin un atac"
            />
            <Stat number="5-20 min" text="durata medie a unui atac de panică" />
            <Stat
              number="85-90%"
              text="rată de recuperare cu terapie (TCC)"
            />
          </div>
        </div>
      </header>

      {/* ─── CE ESTE (scurt) ─── */}
      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: "var(--color-background-white)" }}
      >
        <div className="mx-auto max-w-[760px] px-6">
          <h2
            className="text-[24px] md:text-[30px] leading-[1.30] mb-5"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              color: "var(--color-primary)",
            }}
          >
            Ce este un atac de panică
          </h2>
          <div
            className="text-[17px] leading-[1.75] space-y-5"
            style={{ color: "var(--color-text)" }}
          >
            <p>
              <strong>
                Un atac de panică este un episod brusc de frică intensă în care
                corpul tău reacționează ca și cum ai fi în pericol de moarte —
                deși nu există niciun pericol real.
              </strong>{" "}
              Durează de obicei între 5 și 20 de minute. Senzațiile fizice sunt
              reale. Pericolul nu este.
            </p>
            <p>
              Gândește-te la o alarmă de incendiu care pornește într-o clădire
              în care nu există niciun foc. Alarma urlă la fel de tare. Toată
              lumea reacționează la fel de intens. Singura diferență: nu arde
              nimic. Asta face corpul tău — activează sistemul de alarmă fără
              pericol real.
            </p>
            <p>
              <strong>
                A avea un atac de panică NU înseamnă că ai o tulburare.
              </strong>{" "}
              Un atac izolat este extrem de comun. Ceea ce transformă un atac
              izolat în tulburare nu este senzația în sine — ci{" "}
              <strong>interpretarea</strong> pe care i-o dai și{" "}
              <strong>frica</strong> de a-l retrăi.
            </p>
          </div>
        </div>
      </section>

      {/* ─── GUIDE NAVIGATION ─── */}
      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        <div className="mx-auto max-w-[760px] px-6">
          <p
            className="text-xs font-medium uppercase tracking-[0.15em] mb-3"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Explorează ghidul
          </p>
          <h2
            className="text-[24px] md:text-[30px] leading-[1.30] mb-8"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              color: "var(--color-primary)",
            }}
          >
            Ce vrei să înțelegi?
          </h2>

          <div className="grid gap-4">
            <GuideCard
              number="1"
              title="Ce simți în timpul unui atac"
              description="Senzațiile fizice, gândurile automate, și cum escaladează totul — cercul vicios explicat pas cu pas."
              href="/tipuri/atac-de-panica/simptome"
            />
            <GuideCard
              number="2"
              title="Atac de panică sau infarct?"
              description="Diferențele practice, când mergi la medic, și perspectiva care schimbă totul."
              href="/tipuri/atac-de-panica/sau-infarct"
            />
            <GuideCard
              number="3"
              title="De ce se întâmplă"
              description="Alarma falsă, cercul vicios, ce arată cercetarea, declanșatori și vulnerabilitate."
              href="/tipuri/atac-de-panica/de-ce-se-intampla"
            />
            <GuideCard
              number="4"
              title="Ce vrea să spună psihicul"
              description="Perspectiva clinică a lui Daniel Gagea — mesajul din spatele atacului de panică. Conținut unic."
              href="/tipuri/atac-de-panica/ce-vrea-sa-spuna-psihicul"
            />
            <GuideCard
              number="!"
              title="Ce faci în momentul unui atac"
              description="5 pași concreți pentru momentul de criză. Ce ajută și ce NU ajută."
              href="/tipuri/atac-de-panica/ce-sa-faci"
              accent
            />
            <GuideCard
              number="6"
              title="Când și cum să ceri ajutor"
              description="85-90% se recuperează în 12-15 ședințe. Ce te oprește, ce funcționează, și următorul pas."
              href="/tipuri/atac-de-panica/tratament"
            />
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: "var(--color-background-white)" }}
      >
        <div className="mx-auto max-w-[760px] px-6">
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
                a: "Un atac de panică atinge de obicei intensitatea maximă în 5-10 minute și durează în medie 10-20 de minute (Rachman, 2004). Atacul trece întotdeauna.",
              },
              {
                q: "Pot să mor din cauza unui atac de panică?",
                a: "Nu. Un atac de panică nu este periculos din punct de vedere medical. Nu produce infarct, nu produce AVC, nu produce nebunie. Este important să excluzi mai întâi cauzele medicale, dar odată confirmat că ești sănătos fizic, atacul de panică este — prin definiție — inofensiv.",
              },
              {
                q: "De ce am atacuri de panică noaptea?",
                a: "Între 25% și 70% dintre persoanele cu tulburare de panică raportează cel puțin un atac în timpul somnului. Trezirea bruscă apare în tranziția dintre fazele de somn, când corpul trece prin schimbări fiziologice naturale pe care creierul le interpretează catastrofic.",
              },
              {
                q: "Funcționează terapia pentru atacuri de panică?",
                a: "Da. Terapia cognitiv-comportamentală are o rată de eficacitate de 85-90% după 12-15 ședințe. Este cel mai studiat și cel mai eficient tratament, cu efecte care se mențin pe termen lung.",
              },
              {
                q: "Am nevoie de medicamente?",
                a: "Nu neapărat. TCC este la fel de eficientă ca medicația. Medicamentele pot fi utile în cazurile severe, dar efectele lor tind să dispară după oprirea tratamentului. Decizia se ia împreună cu un specialist.",
              },
            ].map(({ q, a }) => (
              <details
                key={q}
                className="group rounded-xl"
                style={{
                  backgroundColor: "var(--color-background)",
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
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        <div className="mx-auto max-w-[760px] px-6">
          <div
            className="rounded-xl p-8 md:p-12 text-center"
            style={{
              backgroundColor: "var(--color-background-white)",
              border: "1px solid var(--color-border)",
            }}
          >
            <h2
              className="text-[24px] md:text-[30px] mb-4"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 400,
                color: "var(--color-primary)",
              }}
            >
              Primul pas este o conversație
            </h2>
            <p
              className="text-[15px] mb-8 max-w-lg mx-auto leading-relaxed"
              style={{ color: "var(--color-text)" }}
            >
              Am lucrat cu sute de persoane care au trecut prin exact ce treci tu
              acum. Știu cum arată. Știu cum se simte. Și știu că se poate
              schimba.
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
        </div>
      </section>

      {/* ─── Author footer ─── */}
      <section
        className="py-8"
        style={{ backgroundColor: "var(--color-background-white)" }}
      >
        <div className="mx-auto max-w-[760px] px-6">
        </div>
      </section>
    </>
  );
}
