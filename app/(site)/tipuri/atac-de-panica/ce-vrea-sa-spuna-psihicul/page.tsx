import type { Metadata } from "next";
import Link from "next/link";
import { VideoPlaceholder } from "@/components/sections/VideoPlaceholder";

export const metadata: Metadata = {
  title:
    "Ce vrea să spună psihicul prin atacul de panică",
  description:
    "De ce ți se întâmplă tocmai ție? Perspectiva clinică a lui Daniel Gagea despre mesajul din spatele atacului de panică.",
  authors: [{ name: "Daniel Gagea" }],
  alternates: {
    canonical: "https://totuldespreanxietate.ro/tipuri/atac-de-panica/ce-vrea-sa-spuna-psihicul",
  },
  openGraph: {
    title: "Ce vrea să spună psihicul prin atacul de panică",
    description:
      "De ce ți se întâmplă tocmai ție? Perspectiva clinică a lui Daniel Gagea despre mesajul din spatele atacului de panică.",
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
      headline: "Ce vrea să spună psihicul prin atacul de panică",
      description:
        "De ce ți se întâmplă tocmai ție? Perspectiva clinică a lui Daniel Gagea despre mesajul din spatele atacului de panică.",
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
          "https://totuldespreanxietate.ro/tipuri/atac-de-panica/ce-vrea-sa-spuna-psihicul/",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Acasă", item: "https://totuldespreanxietate.ro" },
        { "@type": "ListItem", position: 2, name: "Tipuri", item: "https://totuldespreanxietate.ro/tipuri" },
        { "@type": "ListItem", position: 3, name: "Atac de panică", item: "https://totuldespreanxietate.ro/tipuri/atac-de-panica" },
        { "@type": "ListItem", position: 4, name: "Ce vrea să spună psihicul", item: "https://totuldespreanxietate.ro/tipuri/atac-de-panica/ce-vrea-sa-spuna-psihicul" },
      ],
    },
  ],
};

const BELIEFS = [
  "„Trebuie să am grijă de toată lumea înainte de mine.”",
  "„Dacă sunt fericit, urmează ceva rău.”",
  "„Nu am voie să fiu furios, furia distruge relațiile.”",
  "„Dacă cer ajutor, voi fi controlat sau voi datora ceva.”",
  "„Dacă devin independent, voi fi singur.”",
];

export default function CeVreaSaSpunaPsihiculPage() {
  return (
    <main className="font-work min-h-screen bg-white text-lp-navy">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <header className="bg-white px-6 pt-14 pb-12 md:pt-20 md:pb-16">
        <div className="mx-auto max-w-[820px]">
          <nav className="mb-8 flex items-center gap-2 text-sm text-lp-mute-soft">
            <Link
              href="/tipuri/atac-de-panica/"
              className="underline underline-offset-2 hover:no-underline"
            >
              Atac de panică
            </Link>
            <span aria-hidden="true">→</span>
            <span className="text-lp-navy">Ce vrea să spună psihicul</span>
          </nav>

          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Perspectivă clinică
          </p>
          <h1 className="mt-4 font-work text-4xl font-bold leading-[1.05] tracking-tight text-lp-navy md:text-5xl lg:text-6xl">
            Ce vrea să spună <span className="lp-yellow-underline">psihicul</span>.
          </h1>

          <div className="mt-8 flex items-start gap-5 rounded-md border border-lp-border bg-lp-bg p-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md bg-white">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-lp-cyan-dark"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>

            <div>
              <p className="font-work text-base font-bold text-lp-navy">
                Daniel Gagea
              </p>
              <p className="text-sm text-lp-mute-soft">
                Psiholog clinician · 10+ ani experiență · 500+ clienți
              </p>
              <p className="mt-2 text-sm italic leading-relaxed text-lp-mute">
                „Această secțiune reflectă perspectiva mea clinică, dezvoltată din lucrul direct cu sute de persoane cu atacuri de panică.”
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* INTRO */}
      <section id="intro" className="bg-lp-bg px-6 py-20 md:py-24 scroll-mt-8">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Întrebarea mai profundă
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            De ce ți se întâmplă tocmai <span className="lp-yellow-underline">ție</span>?
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Tot ce ai citit până acum explică cum funcționează atacul de panică.
              Dar există și o altă întrebare, mai profundă:{" "}
              <strong className="text-lp-navy">de ce ți se întâmplă tocmai ție?</strong>
            </p>

            <p>
              Majoritatea abordărilor tratează atacul de panică ca pe o eroare de
              sistem.. creierul s-a stricat și trebuie reparat. Și
              în mare parte, au dreptate. Dar în cabinetul meu, lucrul cu sute de
              persoane cu atacuri de panică mi-a arătat și altceva.
            </p>
          </div>

          <div className="mt-10 rounded-md border-l-4 border-lp-cyan bg-lp-navy p-8 md:p-10">
            <p className="font-work text-lg italic leading-relaxed text-white/95 md:text-xl">
              Mulți dintre clienții mei au descoperit ceva neașteptat: sub frică
              era furie. Furie pe care nu și-o permiteau. Pe un părinte. Pe un
              partener. Pe o situație. Furie înghițită de ani de zile, care și-a
              găsit un alt drum de exprimare.. prin corp.
            </p>
          </div>

          <p className="mt-8 text-base leading-relaxed text-lp-mute md:text-lg">
            Cercetarea clinică psihodinamică susține această perspectivă. Gassner
            (2004) a propus că mulți pacienți cu panică au fost subprotejați și
            neglijați emoțional în copilărie. Într-un seminar cu 20 de
            psihoterapeuți, 100% au confirmat că aceste tipuri de istorii din
            copilărie erau prezente la pacienții lor cu panică.
          </p>
        </div>
      </section>

      {/* REGULILE INVIZIBILE */}
      <section id="reguli-invizibile" className="bg-white px-6 py-20 md:py-24 scroll-mt-8">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Credințe patogene
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Regulile <span className="lp-yellow-underline">invizibile</span>.
          </h2>

          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            Credințe patogene (Weiss, Sampson, 1986):
          </p>

          <ul className="mt-8 space-y-4">
            {BELIEFS.map((belief) => (
              <li
                key={belief}
                className="rounded-md border-l-4 border-lp-yellow bg-lp-bg px-5 py-4 font-work text-lg italic leading-relaxed text-lp-navy"
              >
                {belief}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-base leading-relaxed text-lp-mute md:text-lg">
            Aceste reguli nu sunt scrise nicăieri. Dar le simți în corp de fiecare
            dată când le încalci.
          </p>
        </div>
      </section>

      {/* FERICIREA DECLANȘEAZĂ PANICĂ */}
      <section id="fericirea-declenseaza-panica" className="bg-lp-bg px-6 py-20 md:py-24 scroll-mt-8">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Paradoxul
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Când fericirea declanșează panică.
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Atacurile de panică pot fi declanșate nu de pericol, ci de fericire și
              succes.
            </p>

            <p>
              O femeie a avut primul atac de panică într-o după-amiază în care
              era entuziasmată și fericită, așteptând
              să-și revadă soțul (Gassner, 2004). Ani mai târziu, în terapie,
              furnicăturile s-au oprit. Femeia a spus:{" "}
              „Am nevoie doar să plâng.”
            </p>

            <p>
              Nu corpul ei era problema. Fericirea activa un conflict mai vechi, mai
              adânc.
            </p>
          </div>
        </div>
      </section>

      {/* DUBLU-BIND */}
      <section id="dublu-bind" className="bg-lp-navy px-6 py-20 md:py-24 scroll-mt-8">
        <div className="mx-auto max-w-[820px] text-white">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.22em] text-lp-cyan">
            Atașament rezistent
          </p>
          <h2 className="mt-4 font-work text-3xl font-bold leading-tight md:text-4xl lg:text-[44px]">
            Dublu-bind-ul din spatele panicii.
          </h2>

          <p className="mt-6 text-base leading-relaxed text-white/85 md:text-lg">
            Te apropii de cineva și te simți sufocat. Te îndepărtezi și te simți
            abandonat. Nu există direcție sigură. Și corpul exprimă ce mintea nu
            poate: panică.
          </p>

          <p className="mt-6 text-sm italic leading-relaxed text-white/60">
            Atașamentul rezistent (insecurizat), descris ca unic legat de tulburările de anxietate{" "}
            (Stroufe, 1997, citat în Gassner, 2004).
          </p>
        </div>
      </section>

      {/* NU TOȚI DAR MULȚI */}
      <section id="nu-toti-dar-multi" className="bg-white px-6 py-20 md:py-24 scroll-mt-8">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Mesajul
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Nu toți, dar mulți.
          </h2>

          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            Nu toată lumea cu atacuri de panică are o poveste din copilărie în
            spatele lor. Dar dacă te recunoști, un terapeut te poate ajuta să
            asculți mesajul, într-un spațiu sigur, fără grabă.
          </p>
        </div>
      </section>

      {/* VIDEO */}
      <section className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <VideoPlaceholder title="Daniel Gagea: Ce vrea să spună psihicul prin atacul de panică" />
        </div>
      </section>

      {/* NAVIGATION */}
      <section className="bg-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/tipuri/atac-de-panica/"
              className="group block rounded-md border border-lp-border bg-white p-6 transition hover:-translate-y-0.5 hover:border-lp-cyan hover:shadow-[0_12px_40px_rgba(8,29,61,0.08)]"
            >
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-lp-mute-soft">
                ← Înapoi
              </span>
              <span className="mt-2 block font-work text-lg font-bold text-lp-navy">
                Ghidul complet
              </span>
            </Link>

            <Link
              href="/tipuri/atac-de-panica/de-ce-se-intampla"
              className="group block rounded-md border border-lp-border bg-white p-6 transition hover:-translate-y-0.5 hover:border-lp-cyan hover:shadow-[0_12px_40px_rgba(8,29,61,0.08)]"
            >
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-lp-mute-soft">
                Citește
              </span>
              <span className="mt-2 block font-work text-lg font-bold text-lp-navy">
                De ce se întâmplă
              </span>
            </Link>

            <Link
              href="/tipuri/atac-de-panica/tratament"
              className="group block rounded-md border border-lp-border bg-white p-6 transition hover:-translate-y-0.5 hover:border-lp-cyan hover:shadow-[0_12px_40px_rgba(8,29,61,0.08)]"
            >
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-lp-mute-soft">
                Următor →
              </span>
              <span className="mt-2 block font-work text-lg font-bold text-lp-navy">
                Când să ceri ajutor
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* AUTHOR FOOTER */}
      <section className="bg-lp-bg px-6 py-12 md:py-16">
        <div className="mx-auto max-w-[820px] text-center text-sm text-lp-mute-soft">
          <p className="font-work text-base font-bold text-lp-navy">
            Daniel Gagea
          </p>
          <p>psiholog clinician</p>
        </div>
      </section>
    </main>
  );
}
