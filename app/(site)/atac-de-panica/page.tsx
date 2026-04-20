import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Atacul de panică. Ghid complet",
  description:
    "Ce este un atac de panică, de ce se întâmplă, ce simți, și ce poți face. Ghid complet bazat pe cercetare, de Daniel Gagea, psiholog clinician, psihoterapeut.",
  authors: [{ name: "Daniel Gagea" }],
  alternates: {
    canonical: "https://totuldespreanxietate.ro/atac-de-panica",
  },
  openGraph: {
    title: "Atacul de panică. Ghid complet",
    description:
      "Ce este un atac de panică, de ce se întâmplă, ce simți, și ce poți face.",
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
      headline: "Atacul de panic\u0103. Ghid complet",
      description:
        "Ce este un atac de panic\u0103, de ce se \u00eent\u00e2mpl\u0103, ce sim\u021bi, \u0219i ce po\u021bi face. Ghid complet bazat pe cercetare, de Daniel Gagea, psiholog clinician, psihoterapeut.",
      author: {
        "@type": "Person",
        name: "Daniel Gagea",
        jobTitle: "Psiholog clinician, psihoterapeut",
        url: "https://totuldespreanxietate.ro/despre-daniel/",
      },
      datePublished: "2026-03-18",
      dateModified: "2026-04-13",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://totuldespreanxietate.ro/atac-de-panica/",
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
            text: "Un atac de panic\u0103 atinge intensitatea maxim\u0103 \u00een 5-10 minute \u0219i dureaz\u0103 \u00een medie 10-20 de minute. Atacul trece \u00eentotdeauna.",
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
      ],
    },
    {
      "@type": "Person",
      name: "Daniel Gagea",
      jobTitle: "Psiholog clinician, psihoterapeut",
      description:
        "Psiholog clinician cu peste 10 ani de experien\u021b\u0103 \u0219i peste 500 de clien\u021bi.",
      url: "https://totuldespreanxietate.ro/despre-daniel/",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Acasă", item: "https://totuldespreanxietate.ro" },
        { "@type": "ListItem", position: 2, name: "Atac de panică", item: "https://totuldespreanxietate.ro/atac-de-panica" },
      ],
    },
  ],
};

function GuideCard({
  number,
  title,
  subtitle,
  description,
  href,
  accent = false,
}: {
  number: string;
  title: string;
  subtitle: string;
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
        boxShadow: accent ? "none" : "var(--shadow-sm)",
        transition: "var(--transition-fast)",
      }}
    >
      <div className="flex items-start gap-4">
        <span
          className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium"
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
          <p
            className="text-xs font-medium uppercase tracking-[0.12em] mb-1"
            style={{
              color: accent
                ? "rgba(255,255,255,0.7)"
                : "var(--color-text-secondary)",
            }}
          >
            {subtitle}
          </p>
          <h3
            className="text-[18px] font-semibold mb-2"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 500,
              color: accent ? "#FFFFFF" : "var(--color-primary)",
            }}
          >
            {title}
            <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
              &rarr;
            </span>
          </h3>
          <p
            className="text-[14px] leading-[1.60] mb-3"
            style={{
              color: accent
                ? "rgba(255,255,255,0.85)"
                : "var(--color-text-secondary)",
            }}
          >
            {description}
          </p>
          <span
            className="inline-flex items-center gap-1.5 text-[13px] font-medium"
            style={{
              color: accent ? "#FFFFFF" : "var(--color-accent)",
            }}
          >
            Citește mai mult
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </span>
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
          href="/atac-de-panica/actioneaza"
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
            Ghid complet
          </p>
          <h1
            className="text-[28px] md:text-[38px] leading-[1.25] mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              color: "var(--color-primary)",
            }}
          >
            Atacul de panică
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
            , psiholog clinician, psihoterapeut
            <span className="mx-2">&middot;</span>
            Ultima actualizare: Martie 2026
          </p>

          <div
            className="text-[17px] leading-[1.75] space-y-5"
            style={{ color: "var(--color-text)" }}
          >
            <p>
              Inima bate atât de tare că o simți în gât. Simți că nu mai poți
              respira, de parcă cineva ți-ar apăsa pieptul. Mâinile tremură.
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
            <Stat number="5-20 min" text="durată medie" />
            <Stat number="0" text="pericol real. Senzațiile sunt intense dar inofensive" />
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
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div
              className="flex-1 text-[17px] leading-[1.75] space-y-5"
              style={{ color: "var(--color-text)" }}
            >
              <p>
                <strong>
                  Un atac de panică este un episod brusc de frică intensă în care
                  corpul tău reacționează ca și cum ai fi în pericol de moarte
                  deși nu există niciun pericol real.
                </strong>{" "}
                Senzațiile fizice sunt reale. Pericolul nu este.
              </p>
              <p>
                Gândește-te la o alarmă de incendiu care pornește într-o clădire
                în care nu există niciun foc. Alarma urlă la fel de tare. Toată
                lumea reacționează la fel de intens. Singura diferență: nu arde
                nimic. Asta face corpul tău.. activează sistemul de alarmă fără
                pericol real.
              </p>
              <p>
                <strong>
                  A avea un atac de panică NU înseamnă că ai o tulburare.
                </strong>{" "}
                Un atac izolat este extrem de comun. Ceea ce transformă un atac
                izolat în tulburare este{" "}
                <strong>interpretarea</strong> pe care i-o dai și{" "}
                <strong>frica</strong> de a-l retrăi.
              </p>
            </div>
            {/* Illustration: person with heart racing but safe */}
            <div
              className="shrink-0 w-full md:w-[280px] h-[320px] rounded-2xl flex items-center justify-center"
              style={{
                background: "linear-gradient(160deg, #DDD6CA 0%, #D0C9BC 100%)",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <style>{`
                @keyframes adp-beat {
                  0%, 100% { transform: scale(1); }
                  12% { transform: scale(1.18); }
                  24% { transform: scale(0.95); }
                  36% { transform: scale(1.1); }
                  48% { transform: scale(1); }
                }
                @keyframes adp-ripple {
                  0% { r: 22; opacity: 0.4; }
                  100% { r: 65; opacity: 0; }
                }
                @keyframes adp-breathe {
                  0%, 100% { opacity: 0.08; }
                  50% { opacity: 0.15; }
                }
                .adp-beat { transform-origin: 140px 155px; animation: adp-beat 1.3s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
                .adp-rip1 { animation: adp-ripple 2.2s ease-out infinite; }
                .adp-rip2 { animation: adp-ripple 2.2s ease-out 0.7s infinite; }
                .adp-rip3 { animation: adp-ripple 2.2s ease-out 1.4s infinite; }
                .adp-breathe { animation: adp-breathe 4s ease-in-out infinite; }
              `}</style>
              <svg viewBox="0 0 280 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
                <defs>
                  <radialGradient id="adp-warmth" cx="50%" cy="48%" r="35%">
                    <stop offset="0%" stopColor="#C4614A" stopOpacity="0.35"/>
                    <stop offset="100%" stopColor="#C4614A" stopOpacity="0"/>
                  </radialGradient>
                  <radialGradient id="adp-calm" cx="50%" cy="48%" r="50%">
                    <stop offset="0%" stopColor="#5C7A6A" stopOpacity="0.12"/>
                    <stop offset="100%" stopColor="#5C7A6A" stopOpacity="0"/>
                  </radialGradient>
                </defs>

                {/* Calm field - large green glow behind everything */}
                <circle cx="140" cy="150" r="120" fill="url(#adp-calm)" className="adp-breathe"/>

                {/* Person - head with subtle face suggestion */}
                <circle cx="140" cy="82" r="26" fill="#1B2B4B" opacity="0.45"/>
                {/* Eyes closed - peaceful/enduring expression */}
                <path d="M131 80 Q134 82 137 80" fill="none" stroke="#1B2B4B" strokeWidth="1.5" opacity="0.35" strokeLinecap="round"/>
                <path d="M143 80 Q146 82 149 80" fill="none" stroke="#1B2B4B" strokeWidth="1.5" opacity="0.35" strokeLinecap="round"/>

                {/* Person - neck */}
                <path d="M134 107 L134 118 Q134 122 137 122 L143 122 Q146 122 146 118 L146 107" fill="#1B2B4B" opacity="0.35"/>

                {/* Person - shoulders flowing into torso */}
                <path d="M140 122 C120 122 98 138 88 158 L82 178 Q80 186 86 188 L94 188 L94 260 L186 260 L186 188 L194 188 Q200 186 198 178 L192 158 C182 138 160 122 140 122Z" fill="#1B2B4B" opacity="0.3"/>

                {/* Arms crossed on chest - left arm */}
                <path d="M88 158 C92 164 100 172 118 168 L132 158" fill="none" stroke="#1B2B4B" strokeWidth="8" opacity="0.25" strokeLinecap="round"/>
                {/* Right arm */}
                <path d="M192 158 C188 164 180 172 162 168 L148 158" fill="none" stroke="#1B2B4B" strokeWidth="8" opacity="0.25" strokeLinecap="round"/>
                {/* Hands meeting at chest */}
                <ellipse cx="132" cy="162" rx="10" ry="6" fill="#1B2B4B" opacity="0.28" transform="rotate(-10 132 162)"/>
                <ellipse cx="148" cy="162" rx="10" ry="6" fill="#1B2B4B" opacity="0.28" transform="rotate(10 148 162)"/>

                {/* Warm glow from chest */}
                <circle cx="140" cy="155" r="35" fill="url(#adp-warmth)"/>

                {/* Ripple waves from heart */}
                <circle cx="140" cy="155" r="22" fill="none" stroke="#C4614A" strokeWidth="1.2" className="adp-rip1"/>
                <circle cx="140" cy="155" r="22" fill="none" stroke="#C4614A" strokeWidth="0.8" className="adp-rip2"/>
                <circle cx="140" cy="155" r="22" fill="none" stroke="#C4614A" strokeWidth="0.5" className="adp-rip3"/>

                {/* Heart - the focal point */}
                <g className="adp-beat">
                  <path d="M140 160 C140 153 133 148 128 148 C122 148 117 153 117 160 C117 171 140 182 140 182 C140 182 163 171 163 160 C163 153 158 148 152 148 C147 148 140 153 140 160Z" fill="#C4614A" opacity="0.9"/>
                  {/* Heart sheen */}
                  <path d="M128 153 Q131 149 135 153" fill="none" stroke="white" strokeWidth="1.5" opacity="0.25" strokeLinecap="round"/>
                </g>

                {/* Safety circle - single, clear, protective */}
                <circle cx="140" cy="150" r="100" fill="none" stroke="#5C7A6A" strokeWidth="1.8" opacity="0.25" strokeDasharray="4 6"/>

                {/* Small leaf/nature element - calm anchor */}
                <g transform="translate(210, 248)" opacity="0.35">
                  <path d="M0 12 Q4 0 12 0 Q8 6 6 12 Z" fill="#5C7A6A"/>
                  <path d="M6 12 L6 0" fill="none" stroke="#5C7A6A" strokeWidth="0.7" opacity="0.6"/>
                </g>

                {/* Text */}
                <text x="140" y="290" textAnchor="middle" fill="#4A6B5C" fontSize="11" fontWeight="600" opacity="0.65" fontFamily="system-ui, sans-serif" letterSpacing="0.08em">ești în siguranță</text>
              </svg>
            </div>
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
            Toate informațiile de care ai nevoie pentru a înțelege ce se întâmplă cu tine
          </h2>

          <div className="grid gap-4">
            <GuideCard
              number="1"
              subtitle="Recunoaște-l"
              title="Infarct sau Atac de panică? Recunoaște corect"
              description="Simptomele fizice și mentale, cum escaladează totul (cercul vicios), și cum deosebești de un infarct."
              href="/atac-de-panica/recunoaste"
            />
            <GuideCard
              number="2"
              subtitle="Înțelege"
              title="De ce se întâmplă și ce încearcă să-ți spună"
              description="Mecanismul din spatele panicii, perspectiva clinică a lui Daniel, și de ce frica de următorul atac e mai importantă decât atacul în sine."
              href="/atac-de-panica/intelege"
            />
            <GuideCard
              number="3"
              subtitle="Acționează"
              title="Ce poți face acum și pe termen lung"
              description="5 pași concreți pentru momentul de criză, ce NU ajută, și când și cum ceri ajutor profesionist."
              href="/atac-de-panica/actioneaza"
              accent
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
                a: "Un atac de panică atinge de obicei intensitatea maximă în 5-10 minute și durează în medie 10-20 de minute. Starea de anxietate crescută poate persista mai mult, dar senzațiile intense sunt limitate în timp. Atacul trece întotdeauna.",
              },
              {
                q: "Pot să mor din cauza unui atac de panică?",
                a: "Nu. Un atac de panică nu este periculos din punct de vedere medical. Nu produce infarct, nu produce AVC, nu produce nebunie. Este important să excluzi mai întâi cauzele medicale, dar odată confirmat că ești sănătos fizic, atacul de panică este, prin definiție, inofensiv.",
              },
              {
                q: "De ce am atacuri de panică noaptea?",
                a: "Între 25% și 70% dintre persoanele cu tulburare de panică raportează cel puțin un atac în timpul somnului. Trezirea bruscă apare în tranziția dintre fazele de somn, când corpul trece prin schimbări fiziologice naturale pe care creierul le interpretează catastrofic.",
              },
              {
                q: "Funcționează terapia pentru atacuri de panică?",
                a: "Da. Psihoterapia are o rată de eficacitate de 85-90% după 12-15 ședințe. Este cel mai studiat și cel mai eficient tratament, cu efecte care se mențin pe termen lung.",
              },
              {
                q: "Am nevoie de medicamente?",
                a: "Nu neapărat. Psihoterapia este la fel de eficientă ca medicația. Medicamentele pot fi utile în cazurile severe, dar efectele lor tind să dispară după oprirea tratamentului. Decizia se ia împreună cu un specialist.",
              },
              {
                q: "Atacul de panică poate reveni?",
                a: "Da, atacurile pot reveni, mai ales dacă nu sunt înțelese și adresate. Frica de următorul atac este de fapt ceea ce menține ciclul activ. Vestea bună este că odată ce înțelegi mecanismul și lucrezi cu un specialist, ciclul se poate opri.",
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

          {/* Referințe științifice */}
          <div className="mt-12">
          <details>
            <summary
              className="cursor-pointer text-[16px] font-medium list-none flex items-center gap-2"
              style={{ color: "var(--color-primary)" }}
            >
              <span className="text-xl">+</span>
              Referințe științifice (47 surse)
            </summary>
            <ol
              className="mt-6 space-y-2 text-[13px] leading-[1.60] pl-6"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <li>American Psychiatric Association. (1998). <em>Practice guideline for the treatment of patients with panic disorder.</em> American Journal of Psychiatry, 155(5 Suppl), 1-34.</li>
              <li>American Psychiatric Association. (2000). <em>Diagnostic and Statistical Manual of Mental Disorders</em> (4th ed., text rev.). Washington, DC: Author.</li>
              <li>Barlow, D.H. (2002). <em>Anxiety and its disorders: The nature and treatment of anxiety and panic</em> (2nd ed.). New York: Guilford Press.</li>
              <li>Barlow, D.H., Gorman, J.M., Shear, M.K., &amp; Woods, S.W. (2000). Cognitive-behavioral therapy, imipramine, or their combination for panic disorder. <em>JAMA</em>, 283, 2529-2536.</li>
              <li>Barsky, A.J., Cleary, P.D., Sarnie, M.K., &amp; Rushkin, J.N. (1994). Panic disorder, palpitations, and the awareness of cardiac activity. <em>Journal of Nervous and Mental Disease</em>, 182, 63-71.</li>
              <li>Beck, A.T. (1988). Cognitive approaches to panic disorder: Theory and therapy. In S. Rachman &amp; J.D. Maser (Eds.), <em>Panic: Psychological perspectives</em> (pp. 91-109).</li>
              <li>Beck, A.T., &amp; Greenberg, R.L. (1988). Cognitive therapy of panic disorder. In R.E. Hales &amp; A.J. Frances (Eds.), <em>APA Annual Review</em> (Vol. 7, pp. 571-583).</li>
              <li>Beck, A.T., Sokol, L., Clark, D.A., Berchick, R., &amp; Wright, F. (1992). A crossover study of focused cognitive therapy for panic disorder. <em>American Journal of Psychiatry</em>, 149, 778-783.</li>
              <li>Burke, K.C., Burke, J.D., Regier, D.A., &amp; Rae, D.S. (1990). Age at onset of selected mental disorders. <em>Archives of General Psychiatry</em>, 47, 511-518.</li>
              <li>Chambless, D.L., &amp; Peterman, M. (2004). Evidence on CBT for generalized anxiety disorder and panic disorder. In R.L. Leahy (Ed.), <em>Contemporary cognitive therapy</em> (pp. 86-115).</li>
              <li>Clark, D.M. (1986). A cognitive approach to panic. <em>Behaviour Research and Therapy</em>, 24, 461-470.</li>
              <li>Clark, D.M. (1988). A cognitive model of panic attacks. In S. Rachman &amp; J.D. Maser (Eds.), <em>Panic: Psychological perspectives</em> (pp. 71-89).</li>
              <li>Clark, D.M. (1996). Panic disorder: From theory to therapy. In P.M. Salkovskis (Ed.), <em>Frontiers of cognitive therapy</em> (pp. 318-344).</li>
              <li>Clark, D.M. (1997). Panic disorder and social phobia. In D.M. Clark &amp; C.G. Fairburn (Eds.), <em>Science and practice of CBT</em> (pp. 121-153).</li>
              <li>Clark, D.M., Salkovskis, P.M., Hackmann, A., et al. (1994). A comparison of cognitive therapy, applied relaxation, and imipramine. <em>British Journal of Psychiatry</em>, 164, 759-769.</li>
              <li>Clark, D.M., Salkovskis, P.M., &amp; Chalkley, A.J. (1985). Respiratory control as treatment for panic attacks. <em>JBTEP</em>, 16, 23-30.</li>
              <li>Clark, D.A., &amp; Beck, A.T. (2010). <em>Cognitive therapy of anxiety disorders.</em> New York: Guilford Press.</li>
              <li>Clerkin, E.M., Teachman, B.A., &amp; Smith-Janik, S.B. (2008). Sudden gains in group CBT for panic disorder. <em>Behaviour Research and Therapy</em>, 46, 1244-1250.</li>
              <li>Craske, M.G., &amp; Rowe, M.K. (1997). Nocturnal panic. <em>Clinical Psychology: Science and Practice</em>, 4, 153-174.</li>
              <li>Craske, M.G., Lang, A.J., Aikins, D., &amp; Mystkowski, J.L. (2005). CBT for nocturnal panic. <em>Behavior Therapy</em>, 36, 43-54.</li>
              <li>Faravelli, C., &amp; Pallanti, S. (1989). Recent life events and panic disorder. <em>American Journal of Psychiatry</em>, 146, 622-626.</li>
              <li>Faravelli, C., Paterniti, S., &amp; Scarpato, A. (1995). 5-year prospective follow-up of panic disorder. <em>Comprehensive Psychiatry</em>, 36, 271-277.</li>
              <li>Franklin, J.A., &amp; Andrews, G. (1989). Stress and the onset of agoraphobia. <em>Australian Psychologist</em>, 24, 203-219.</li>
              <li>Gassner, S.M. (2004). The role of traumatic experience in panic disorder and agoraphobia. <em>Psychoanalytic Psychology</em>, 21(2), 222-243.</li>
              <li>Hollon, S.D., Stuart, G.L., &amp; Strunk, D. (2006). Enduring effects for CBT in depression and anxiety. <em>Annual Review of Psychology</em>, 57, 285-315.</li>
              <li>Katon, W.J., et al. (1988). Panic disorder: Epidemiology in primary care. <em>Journal of Family Practice</em>, 23, 233-239.</li>
              <li>Kessler, R.C., Berglund, P., Demler, O., et al. (2005). Lifetime prevalence and age-of-onset distributions of DSM-IV disorders. <em>Archives of General Psychiatry</em>, 62, 593-602.</li>
              <li>Landon, T.M., &amp; Barlow, D.H. (2004). Cognitive-behavioral treatment for panic disorder: Current status. <em>Journal of Psychiatric Practice</em>, 10, 211-226.</li>
              <li>Leahy, R.L., Holland, S.J.F., &amp; McGinn, L.K. (2012). <em>Treatment plans and interventions for depression and anxiety disorders</em> (2nd ed.). New York: Guilford Press.</li>
              <li>Lint, D.W., Taylor, C.B., Fried-Behar, R., &amp; Kenardy, J.A. (1995). Ambulatory monitoring in assessment of panic disorder. <em>Behaviour Research and Therapy</em>, 33, 779-782.</li>
              <li>Mellman, T.A., &amp; Uhde, T.W. (1989). Sleep panic attacks. <em>American Journal of Psychiatry</em>, 146, 1204-1207.</li>
              <li>Meuret, A.E., Ritz, T., Wilhelm, F.H., &amp; Roth, W.T. (2005). Voluntary hyperventilation in treatment of panic disorder. <em>Clinical Psychology Review</em>, 25, 738-752.</li>
              <li>Morris, A., Baker, B., Devins, G.M., &amp; Shapiro, C.M. (1997). Prevalence of panic disorder in cardiac outpatients. <em>Canadian Journal of Psychiatry</em>, 42, 185-190.</li>
              <li>Norton, G.R., Dorward, J., &amp; Cox, B.J. (1986). Factors associated with panic attacks in nonclinical subjects. <em>Behavior Therapy</em>, 17, 239-252.</li>
              <li>Norton, G.R., Harrison, B., Hauch, J., &amp; Rhodes, L. (1985). Characteristics of people with infrequent panic attacks. <em>Journal of Abnormal Psychology</em>, 94, 216-221.</li>
              <li>Rachman, S. (2004). <em>Anxiety</em> (2nd ed.). Hove, UK: Psychology Press.</li>
              <li>Schmidt, N.B., Woolaway-Bickel, K., et al. (2000). Dismantling CBT for panic disorder. <em>Journal of Consulting and Clinical Psychology</em>, 68, 417-424.</li>
              <li>Siegel, L., Jones, W.C., &amp; Wilson, J.O. (1990). Economic consequences of panic disorder. <em>Journal of Anxiety Disorders</em>, 4, 201-211.</li>
              <li>Story, T.J., &amp; Craske, M.G. (2008). Responses to false physiological feedback in panic. <em>Behaviour Research and Therapy</em>, 46, 1001-1008.</li>
              <li>Stroufe, L.A. (1997). Psychopathology as an outcome of development. <em>Development and Psychopathology</em>, 9, 251-268.</li>
              <li>Taylor, S. (2000). <em>Understanding and treating panic disorder.</em> Chichester, UK: Wiley.</li>
              <li>Taylor, C.B., et al. (1986). Ambulatory heart rate changes in panic attacks. <em>American Journal of Psychiatry</em>, 143, 478-482.</li>
              <li>Torgersen, S. (1983). Genetic factors in anxiety disorders. <em>Archives of General Psychiatry</em>, 40, 1085-1089.</li>
              <li>Vickers, K., &amp; McNally, R.J. (2004). Panic disorder and suicide attempt in the NCS. <em>Journal of Abnormal Psychology</em>, 113, 582-591.</li>
              <li>Weiss, J., Sampson, H., &amp; The Mount Zion Psychotherapy Research Group. (1986). <em>The psychoanalytic process.</em> New York: Guilford Press.</li>
              <li>White, K.S., Brown, T.A., Somers, T.J., &amp; Barlow, D.H. (2006). Avoidance behavior in panic disorder. <em>Behaviour Research and Therapy</em>, 44, 147-157.</li>
              <li>White, K.S., &amp; Barlow, D.H. (2002). Panic disorder and agoraphobia. In D.H. Barlow (Ed.), <em>Anxiety and its disorders</em> (2nd ed., pp. 328-379).</li>
            </ol>
          </details>
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
              acum. Știu cum arată, știu cum se simte, și știu că se poate
              schimba.
            </p>
            <Link
              href="/programare/?din=atac-de-panica"
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

    </>
  );
}
