import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "De ce ai atacuri de panică. Mecanismul din spate",
  description:
    "De ce se întâmplă atacurile de panică: alarma falsă, cercul vicios, mesajul psihicului și frica de următorul atac. De Daniel Gagea, psihoterapeut.",
  authors: [{ name: "Daniel Gagea" }],
  alternates: {
    canonical: "https://totuldespreanxietate.ro/atac-de-panica/intelege",
  },
  openGraph: {
    title: "De ce ai atacuri de panică. Mecanismul din spate",
    description:
      "De ce se întâmplă atacurile de panică: alarma falsă, cercul vicios, mesajul psihicului și frica de următorul atac.",
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
      headline:
        "De ce ai atacuri de panică. Mecanismul din spate",
      description:
        "De ce se întâmplă atacurile de panică: alarma falsă, cercul vicios, mesajul psihicului și frica de următorul atac. De Daniel Gagea, psihoterapeut.",
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
          "https://totuldespreanxietate.ro/atac-de-panica/intelege/",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Acasă", item: "https://totuldespreanxietate.ro" },
        { "@type": "ListItem", position: 2, name: "Atac de panică", item: "https://totuldespreanxietate.ro/atac-de-panica" },
        { "@type": "ListItem", position: 3, name: "Înțelege", item: "https://totuldespreanxietate.ro/atac-de-panica/intelege" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Trece de la sine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Rareori. Fără ajutor profesional, doar 12% dintre persoane ajung la remisie completă în 5 ani. Panica tinde să se cronicizeze.. evitarea crește, viața se restrânge, iar atacurile devin mai frecvente. Cu psihoterapie, 85-90% se recuperează în câteva luni.",
          },
        },
        {
          "@type": "Question",
          name: "De ce am atacuri de panică fără niciun motiv aparent?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Atacurile par că vin din senin, dar de cele mai multe ori sunt declanșate de o senzație internă pe care creierul o interpretează ca pericol. O ușoară amețeală, o palpitație, chiar și o digestie mai dificilă pot porni ciclul. 40% din atacurile raportate nici măcar nu sunt însoțite de o creștere reală a ritmului cardiac.",
          },
        },
        {
          "@type": "Question",
          name: "De ce îmi e frică de lucruri care înainte nu mă deranjau?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Când experimentezi atacuri de panică repetate, creierul începe să asocieze tot mai multe locuri, activități și senzații cu pericolul. E un proces de sensibilizare.. nu pentru că acele lucruri sunt periculoase, ci pentru că îți amintesc de senzațiile din atac.",
          },
        },
      ],
    },
  ],
};

const CYCLE_STEPS = [
  {
    label: "Senzație",
    text: "O senzație fizică apare.. cauzată de stres, oboseală, emoții, cafea, sau funcționarea normală a corpului.",
  },
  {
    label: "Interpretare",
    text: `Creierul o detectează și o interpretează catastrofic: „Senzația asta înseamnă că am o problemă gravă.”`,
  },
  {
    label: "Frică",
    text: "Interpretarea produce frică, și frica intensifică senzațiile fizice.",
  },
  {
    label: "Confirmare",
    text: `Senzațiile mai intense confirmă interpretarea: „Vedeți? E din ce în ce mai rău.”`,
  },
  {
    label: "Blocaj",
    text: "Se pierde capacitatea de reevaluare.. creierul nu mai poate genera o explicație alternativă.",
  },
];

const RULES = [
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
];

const MECHANISMS = [
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
];

const FAQS = [
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
];

export default function IntelegePage() {
  return (
    <main className="font-work min-h-screen bg-white text-lp-navy">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── CRISIS ANCHOR ─── */}
      <div className="w-full bg-lp-yellow px-6 py-3 text-center text-sm font-semibold text-lp-navy">
        <Link
          href="/atac-de-panica/actioneaza"
          className="underline underline-offset-2 hover:no-underline"
        >
          Ai un atac de panică acum? → Mergi direct la ce poți face
        </Link>
      </div>

      {/* ─── HERO ─── */}
      <header className="bg-white px-6 pt-10 pb-12 md:pt-16 md:pb-16">
        <div className="mx-auto max-w-[820px]">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-lp-mute-soft">
            <Link
              href="/atac-de-panica/"
              className="hover:text-lp-cyan-dark hover:underline underline-offset-2"
            >
              Atac de panică
            </Link>
            <span aria-hidden="true">→</span>
            <span className="font-semibold text-lp-navy">Înțelege</span>
          </nav>

          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            02. Înțelege
          </p>
          <h1 className="mt-4 font-work text-4xl font-bold leading-[1.05] tracking-tight text-lp-navy md:text-5xl lg:text-6xl">
            De ce se întâmplă și ce încearcă să-ți{" "}
            <span className="lp-yellow-underline">spună</span>.
          </h1>
          <p className="mt-5 text-sm text-lp-mute-soft">
            De{" "}
            <Link
              href="/despre-daniel/"
              className="font-semibold text-lp-navy underline-offset-2 hover:underline"
            >
              Daniel Gagea
            </Link>
            , psiholog clinician, psihoterapeut
          </p>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-lp-mute md:text-xl">
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
              {`„luptă sau fugi”`} și ne-a protejat ca specie de milioane de
              ani. Problema este că, în tulburarea de panică, acest sistem se
              activează fără un pericol real. Se activează pentru o palpitație.
              Pentru o ușoară amețeală.
            </p>
          </div>
        </div>
      </header>

      {/* ─── CERCUL VICIOS ─── */}
      <section className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <div className="rounded-md border border-lp-border bg-white p-8 md:p-10">
            <h2 className="font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
              Cercul vicios al panicii
            </h2>
            <p className="mt-2 text-sm text-lp-mute-soft md:text-base">
              Ce se întâmplă pas cu pas în corpul și mintea ta
            </p>

            {/* Timeline */}
            <div className="relative mt-8">
              <div
                className="absolute left-5 top-0 bottom-0 w-px"
                style={{
                  background:
                    "linear-gradient(to bottom, #e2e5ed, #4fb1d6)",
                }}
              />

              <div className="space-y-0">
                {CYCLE_STEPS.map(({ label, text }, i) => {
                  const isHot = i >= 3;
                  return (
                    <div
                      key={label}
                      className="relative flex items-start gap-5 pb-6 last:pb-0"
                    >
                      <div
                        className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                          isHot
                            ? "bg-lp-yellow text-lp-navy"
                            : "bg-lp-navy text-white"
                        }`}
                      >
                        {i + 1}
                      </div>
                      <div
                        className={`flex-1 rounded-md px-5 py-4 ${
                          isHot ? "bg-lp-yellow/20" : "bg-lp-bg"
                        }`}
                      >
                        <p
                          className={`text-xs font-semibold uppercase tracking-[0.12em] ${
                            isHot ? "text-lp-navy" : "text-lp-cyan-dark"
                          }`}
                        >
                          {label}
                        </p>
                        <p className="mt-1.5 text-base leading-relaxed text-lp-mute">
                          {text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Loop indicator */}
              <div className="mt-6 flex justify-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-lp-yellow/30 px-4 py-2 text-[13px] font-semibold text-lp-navy">
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

      {/* ─── CE ARATĂ CERCETAREA ─── */}
      <section id="cercetarea" className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Date
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Ce arată <span className="lp-yellow-underline">cercetarea</span>.
          </h2>

          <div className="mt-6 space-y-6 text-base leading-relaxed text-lp-mute md:text-lg">
            <div className="rounded-md border-l-4 border-lp-cyan bg-lp-bg p-6 md:p-8">
              <p>
                {`Într-un studiu cu monitorizare cardiacă 24 de ore, 40% dintre atacurile de panică auto-raportate NU s-au asociat cu nicio creștere reală a ritmului cardiac (Barsky et al., 1994). Inima nu bătea mai repede. Persoanele doar credeau că bate mai repede.`}
              </p>
            </div>

            <p>
              {`Într-un alt studiu, persoanele cu risc de panică au primit informații false despre ritmul lor cardiac. Au raportat semnificativ mai multe simptome de panică deși ritmul cardiac real era identic (Story & Craske, 2008).`}
            </p>

            <blockquote className="my-4 border-l-4 border-lp-cyan pl-6 italic">
              <p className="font-work text-xl font-medium leading-relaxed text-lp-navy md:text-2xl">
                Problema nu este în ce simți. Problema este ce crezi despre ce
                simți.
              </p>
            </blockquote>

            <p>
              Persoanele cu tulburare de panică nu au un corp defect. Studiile
              arată că nu sunt mai reactive fiziologic la stres decât persoanele
              fără panică. Ceea ce diferă este modul în care interpretează
              senzațiile, și asta este ceva ce se poate schimba.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CE VREA SĂ SPUNĂ PSIHICUL ─── */}
      <section id="perspectiva-daniel" className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Perspectiva clinică
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Ce vrea să spună <span className="lp-yellow-underline">psihicul</span>.
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Tot ce ai citit până acum explică cum funcționează atacul de
              panică. Dar există și o altă întrebare, mai profundă: de ce ți se
              întâmplă tocmai ție?
            </p>

            <blockquote className="my-4 border-l-4 border-lp-cyan pl-6 italic">
              <p className="font-work text-xl font-medium leading-relaxed text-lp-navy md:text-2xl">
                {`Mulți dintre clienții mei au descoperit ceva neașteptat: sub frică era furie. Furie pe care nu și-o permiteau.. pe un părinte, pe un partener, pe o situație. Furie înghițită de ani de zile, care și-a găsit un alt drum de exprimare.. prin corp.`}
              </p>
            </blockquote>

            <p>
              Cercetarea clinică psihodinamică susține această perspectivă.
              Gassner (2004): mulți pacienți cu panică au fost subprotejați și
              neglijați emoțional în copilărie. 100% din 20 de psihoterapeuți au
              confirmat aceste tipuri de istorii.
            </p>
          </div>

          {/* Regulile invizibile */}
          <h3 className="mt-14 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Regulile după care trăiești fără să știi
          </h3>
          <p className="mt-3 text-base leading-relaxed text-lp-mute md:text-lg">
            Multe persoane cu atacuri de panică trăiesc după niște reguli pe
            care nu le-au ales conștient. Au fost învățate în copilărie, din
            relația cu cei care ar fi trebuit să le ofere siguranță. Iată câteva
            dintre cele mai frecvente:
          </p>

          <div className="mt-8 space-y-3">
            {RULES.map(({ belief, meaning }) => (
              <div
                key={belief}
                className="rounded-md border-l-4 border-lp-cyan-dark bg-white px-6 py-5"
              >
                <p className="font-work text-base italic leading-snug text-lp-navy md:text-lg">
                  {belief}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-lp-mute-soft md:text-base">
                  {meaning}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-base leading-relaxed text-lp-mute md:text-lg">
            Nimeni nu ți-a dat aceste reguli în scris. Dar le simți în corp de
            fiecare dată când le încalci.. printr-un val de anxietate, o
            senzație de sufocare, palpitații care vin aparent din senin.
          </p>

          {/* Când fericirea declanșează panică */}
          <h3 className="mt-14 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Când fericirea declanșează panică
          </h3>
          <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
            Atacurile de panică pot fi declanșate nu de pericol, ci de fericire
            și succes. O femeie a avut primul atac într-o după-amiază în care
            era entuziasmată și fericită (Gassner, 2004). În terapie,
            furnicăturile s-au oprit. Femeia a spus:{" "}
            {`„Am nevoie doar să plâng.”`}
          </p>

          {/* Nu toți, dar mulți */}
          <h3 className="mt-14 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Nu toți, dar mulți
          </h3>
          <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
            Nu toată lumea are o poveste din copilărie. Dar dacă te recunoști,
            un terapeut te poate ajuta să asculți mesajul, într-un spațiu sigur,
            fără grabă.
          </p>
        </div>
      </section>

      {/* ─── FRICA DE URMĂTORUL ATAC ─── */}
      <section id="ciclul-fricii" className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Ciclul fricii
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Frica de <span className="lp-yellow-underline">următorul</span>{" "}
            atac.
          </h2>

          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            {`Poate atacul în sine a durat 15 minute. Dar frica că va reveni durează zile, săptămâni, luni. Aceasta este caracteristica principală a tulburării de panică.. teama persistentă de a-l retrăi, frica de frică.`}
          </p>

          {/* Trei mecanisme */}
          <h3 className="mt-14 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Trei mecanisme care țin panica vie
          </h3>

          <div className="mt-6 space-y-4">
            {MECHANISMS.map((m, i) => (
              <div
                key={m.title}
                className="flex items-start gap-4 rounded-md border border-lp-border bg-white p-6 transition hover:-translate-y-0.5 hover:border-lp-cyan hover:shadow-[0_12px_40px_rgba(8,29,61,0.08)]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lp-yellow text-sm font-bold text-lp-navy">
                  {i + 1}
                </span>
                <div>
                  <p className="font-work text-lg font-bold leading-snug text-lp-navy">
                    {m.title}
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-lp-mute">
                    {m.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Spirala descendentă */}
          <h3 className="mt-14 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Spirala descendentă
          </h3>

          <p className="my-8 text-center font-work text-lg italic leading-relaxed text-lp-navy md:text-xl">
            {`Evitare → izolare → depresie → automediere → și mai multă panică`}
          </p>

          {/* Stats */}
          <div className="my-10 grid grid-cols-2 gap-6 rounded-md border border-lp-border bg-lp-bg p-8">
            <div className="text-center">
              <p className="font-work text-3xl font-bold tracking-tight text-lp-navy md:text-4xl">
                12%
              </p>
              <p className="mt-2 text-sm leading-snug text-lp-mute md:text-base">
                remisie fără tratament la 5 ani
              </p>
            </div>
            <div className="text-center">
              <p className="font-work text-3xl font-bold tracking-tight text-lp-navy md:text-4xl">
                7×
              </p>
              <p className="mt-2 text-sm leading-snug text-lp-mute md:text-base">
                costuri medicale mai mari
              </p>
            </div>
          </div>

          <p className="text-base leading-relaxed text-lp-mute md:text-lg">
            {`Panica nu trece de la sine, ci se cronicizează. Dar există o veste bună, și vine pe pagina următoare.`}
          </p>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <div className="text-center">
            <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-cyan-dark">
              Întrebări frecvente
            </p>
            <h2 className="mt-3 font-work text-3xl font-bold leading-tight tracking-tight text-lp-navy md:text-4xl">
              Ce vor să știe oamenii despre mecanism.
            </h2>
          </div>

          <div className="mt-10 divide-y divide-lp-border rounded-md border border-lp-border bg-white">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 px-6 py-5 text-left text-[17px] font-semibold text-lp-navy md:text-lg">
                  <span>{faq.q}</span>
                  <span
                    aria-hidden
                    className="mt-1 shrink-0 text-2xl leading-none text-lp-cyan-dark transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="px-6 pb-5 text-base leading-relaxed text-lp-mute md:text-[17px]">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-10 grid gap-3 md:grid-cols-2">
            <Link
              href="/atac-de-panica"
              className="flex items-center gap-2 rounded-md border border-lp-border bg-white px-5 py-4 text-[15px] font-semibold text-lp-navy transition hover:-translate-y-0.5 hover:border-lp-cyan hover:shadow-[0_12px_40px_rgba(8,29,61,0.08)]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden
              >
                <path
                  d="M13 8H3M3 8L7 4M3 8L7 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Înapoi la ghid
            </Link>
            <Link
              href="/atac-de-panica/actioneaza"
              className="lp-cta flex items-center justify-between gap-2 rounded-md px-5 py-4 text-[15px] font-semibold"
            >
              Următorul pas: Acționează
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden
              >
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
