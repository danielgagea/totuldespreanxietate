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
      headline: "Atacul de panică. Ghid complet",
      description:
        "Ce este un atac de panică, de ce se întâmplă, ce simți, și ce poți face. Ghid complet bazat pe cercetare, de Daniel Gagea, psiholog clinician, psihoterapeut.",
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
          name: "Cât durează un atac de panică?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Un atac de panică atinge intensitatea maximă în 5-10 minute și durează în medie 10-20 de minute. Atacul trece întotdeauna.",
          },
        },
        {
          "@type": "Question",
          name: "Pot să mor din cauza unui atac de panică?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nu. Un atac de panică nu este periculos din punct de vedere medical.",
          },
        },
      ],
    },
    {
      "@type": "Person",
      name: "Daniel Gagea",
      jobTitle: "Psiholog clinician, psihoterapeut",
      description:
        "Psiholog clinician cu peste 10 ani de experiență și peste 500 de clienți.",
      url: "https://totuldespreanxietate.ro/despre-daniel/",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Acasă",
          item: "https://totuldespreanxietate.ro",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Atac de panică",
          item: "https://totuldespreanxietate.ro/atac-de-panica",
        },
      ],
    },
  ],
};

const FAQS = [
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
];

const REFERENCES = [
  "American Psychiatric Association. (1998). Practice guideline for the treatment of patients with panic disorder. American Journal of Psychiatry, 155(5 Suppl), 1-34.",
  "American Psychiatric Association. (2000). Diagnostic and Statistical Manual of Mental Disorders (4th ed., text rev.). Washington, DC: Author.",
  "Barlow, D.H. (2002). Anxiety and its disorders: The nature and treatment of anxiety and panic (2nd ed.). New York: Guilford Press.",
  "Barlow, D.H., Gorman, J.M., Shear, M.K., & Woods, S.W. (2000). Cognitive-behavioral therapy, imipramine, or their combination for panic disorder. JAMA, 283, 2529-2536.",
  "Barsky, A.J., Cleary, P.D., Sarnie, M.K., & Rushkin, J.N. (1994). Panic disorder, palpitations, and the awareness of cardiac activity. Journal of Nervous and Mental Disease, 182, 63-71.",
  "Beck, A.T. (1988). Cognitive approaches to panic disorder: Theory and therapy. In S. Rachman & J.D. Maser (Eds.), Panic: Psychological perspectives (pp. 91-109).",
  "Beck, A.T., & Greenberg, R.L. (1988). Cognitive therapy of panic disorder. In R.E. Hales & A.J. Frances (Eds.), APA Annual Review (Vol. 7, pp. 571-583).",
  "Beck, A.T., Sokol, L., Clark, D.A., Berchick, R., & Wright, F. (1992). A crossover study of focused cognitive therapy for panic disorder. American Journal of Psychiatry, 149, 778-783.",
  "Burke, K.C., Burke, J.D., Regier, D.A., & Rae, D.S. (1990). Age at onset of selected mental disorders. Archives of General Psychiatry, 47, 511-518.",
  "Chambless, D.L., & Peterman, M. (2004). Evidence on CBT for generalized anxiety disorder and panic disorder. In R.L. Leahy (Ed.), Contemporary cognitive therapy (pp. 86-115).",
  "Clark, D.M. (1986). A cognitive approach to panic. Behaviour Research and Therapy, 24, 461-470.",
  "Clark, D.M. (1988). A cognitive model of panic attacks. In S. Rachman & J.D. Maser (Eds.), Panic: Psychological perspectives (pp. 71-89).",
  "Clark, D.M. (1996). Panic disorder: From theory to therapy. In P.M. Salkovskis (Ed.), Frontiers of cognitive therapy (pp. 318-344).",
  "Clark, D.M. (1997). Panic disorder and social phobia. In D.M. Clark & C.G. Fairburn (Eds.), Science and practice of CBT (pp. 121-153).",
  "Clark, D.M., Salkovskis, P.M., Hackmann, A., et al. (1994). A comparison of cognitive therapy, applied relaxation, and imipramine. British Journal of Psychiatry, 164, 759-769.",
  "Clark, D.M., Salkovskis, P.M., & Chalkley, A.J. (1985). Respiratory control as treatment for panic attacks. JBTEP, 16, 23-30.",
  "Clark, D.A., & Beck, A.T. (2010). Cognitive therapy of anxiety disorders. New York: Guilford Press.",
  "Clerkin, E.M., Teachman, B.A., & Smith-Janik, S.B. (2008). Sudden gains in group CBT for panic disorder. Behaviour Research and Therapy, 46, 1244-1250.",
  "Craske, M.G., & Rowe, M.K. (1997). Nocturnal panic. Clinical Psychology: Science and Practice, 4, 153-174.",
  "Craske, M.G., Lang, A.J., Aikins, D., & Mystkowski, J.L. (2005). CBT for nocturnal panic. Behavior Therapy, 36, 43-54.",
  "Faravelli, C., & Pallanti, S. (1989). Recent life events and panic disorder. American Journal of Psychiatry, 146, 622-626.",
  "Faravelli, C., Paterniti, S., & Scarpato, A. (1995). 5-year prospective follow-up of panic disorder. Comprehensive Psychiatry, 36, 271-277.",
  "Franklin, J.A., & Andrews, G. (1989). Stress and the onset of agoraphobia. Australian Psychologist, 24, 203-219.",
  "Gassner, S.M. (2004). The role of traumatic experience in panic disorder and agoraphobia. Psychoanalytic Psychology, 21(2), 222-243.",
  "Hollon, S.D., Stuart, G.L., & Strunk, D. (2006). Enduring effects for CBT in depression and anxiety. Annual Review of Psychology, 57, 285-315.",
  "Katon, W.J., et al. (1988). Panic disorder: Epidemiology in primary care. Journal of Family Practice, 23, 233-239.",
  "Kessler, R.C., Berglund, P., Demler, O., et al. (2005). Lifetime prevalence and age-of-onset distributions of DSM-IV disorders. Archives of General Psychiatry, 62, 593-602.",
  "Landon, T.M., & Barlow, D.H. (2004). Cognitive-behavioral treatment for panic disorder: Current status. Journal of Psychiatric Practice, 10, 211-226.",
  "Leahy, R.L., Holland, S.J.F., & McGinn, L.K. (2012). Treatment plans and interventions for depression and anxiety disorders (2nd ed.). New York: Guilford Press.",
  "Lint, D.W., Taylor, C.B., Fried-Behar, R., & Kenardy, J.A. (1995). Ambulatory monitoring in assessment of panic disorder. Behaviour Research and Therapy, 33, 779-782.",
  "Mellman, T.A., & Uhde, T.W. (1989). Sleep panic attacks. American Journal of Psychiatry, 146, 1204-1207.",
  "Meuret, A.E., Ritz, T., Wilhelm, F.H., & Roth, W.T. (2005). Voluntary hyperventilation in treatment of panic disorder. Clinical Psychology Review, 25, 738-752.",
  "Morris, A., Baker, B., Devins, G.M., & Shapiro, C.M. (1997). Prevalence of panic disorder in cardiac outpatients. Canadian Journal of Psychiatry, 42, 185-190.",
  "Norton, G.R., Dorward, J., & Cox, B.J. (1986). Factors associated with panic attacks in nonclinical subjects. Behavior Therapy, 17, 239-252.",
  "Norton, G.R., Harrison, B., Hauch, J., & Rhodes, L. (1985). Characteristics of people with infrequent panic attacks. Journal of Abnormal Psychology, 94, 216-221.",
  "Rachman, S. (2004). Anxiety (2nd ed.). Hove, UK: Psychology Press.",
  "Schmidt, N.B., Woolaway-Bickel, K., et al. (2000). Dismantling CBT for panic disorder. Journal of Consulting and Clinical Psychology, 68, 417-424.",
  "Siegel, L., Jones, W.C., & Wilson, J.O. (1990). Economic consequences of panic disorder. Journal of Anxiety Disorders, 4, 201-211.",
  "Story, T.J., & Craske, M.G. (2008). Responses to false physiological feedback in panic. Behaviour Research and Therapy, 46, 1001-1008.",
  "Stroufe, L.A. (1997). Psychopathology as an outcome of development. Development and Psychopathology, 9, 251-268.",
  "Taylor, S. (2000). Understanding and treating panic disorder. Chichester, UK: Wiley.",
  "Taylor, C.B., et al. (1986). Ambulatory heart rate changes in panic attacks. American Journal of Psychiatry, 143, 478-482.",
  "Torgersen, S. (1983). Genetic factors in anxiety disorders. Archives of General Psychiatry, 40, 1085-1089.",
  "Vickers, K., & McNally, R.J. (2004). Panic disorder and suicide attempt in the NCS. Journal of Abnormal Psychology, 113, 582-591.",
  "Weiss, J., Sampson, H., & The Mount Zion Psychotherapy Research Group. (1986). The psychoanalytic process. New York: Guilford Press.",
  "White, K.S., Brown, T.A., Somers, T.J., & Barlow, D.H. (2006). Avoidance behavior in panic disorder. Behaviour Research and Therapy, 44, 147-157.",
  "White, K.S., & Barlow, D.H. (2002). Panic disorder and agoraphobia. In D.H. Barlow (Ed.), Anxiety and its disorders (2nd ed., pp. 328-379).",
];

const GUIDE_STEPS: Array<{
  number: string;
  eyebrow: string;
  title: string;
  desc: string;
  href: string;
  accent: "cyan" | "yellow" | "navy";
}> = [
  {
    number: "1",
    eyebrow: "Recunoaște-l",
    title: "Infarct sau atac de panică? Recunoaște corect.",
    desc: "Simptomele fizice și mentale, cum escaladează totul (cercul vicios), și cum deosebești de un infarct.",
    href: "/atac-de-panica/recunoaste",
    accent: "cyan",
  },
  {
    number: "2",
    eyebrow: "Înțelege",
    title: "De ce se întâmplă și ce încearcă să-ți spună.",
    desc: "Mecanismul din spatele panicii, perspectiva clinică a lui Daniel, și de ce frica de următorul atac contează mai mult decât atacul.",
    href: "/atac-de-panica/intelege",
    accent: "yellow",
  },
  {
    number: "3",
    eyebrow: "Acționează",
    title: "Ce poți face acum și pe termen lung.",
    desc: "5 pași concreți pentru momentul de criză, ce NU ajută, și când și cum ceri ajutor profesionist.",
    href: "/atac-de-panica/actioneaza",
    accent: "navy",
  },
];

const ACCENT_PILL: Record<"cyan" | "yellow" | "navy", string> = {
  cyan: "bg-lp-cyan text-lp-navy",
  yellow: "bg-lp-yellow text-lp-navy",
  navy: "bg-lp-navy text-white",
};

const ACCENT_BORDER: Record<"cyan" | "yellow" | "navy", string> = {
  cyan: "hover:border-lp-cyan",
  yellow: "hover:border-lp-yellow",
  navy: "hover:border-lp-navy",
};

export default function AtacDePanicaHub() {
  return (
    <main className="font-work min-h-screen bg-white text-lp-navy">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* CRISIS ANCHOR */}
      <div className="w-full bg-lp-yellow px-6 py-3 text-center text-sm font-semibold text-lp-navy">
        <Link
          href="/atac-de-panica/actioneaza"
          className="underline underline-offset-2 hover:no-underline"
        >
          Ai un atac de panică acum? → Mergi direct la ce poți face
        </Link>
      </div>

      {/* HERO */}
      <header className="bg-white px-6 pt-14 pb-12 md:pt-20 md:pb-16">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Ghid complet
          </p>
          <h1 className="mt-4 font-work text-4xl font-bold leading-[1.05] tracking-tight text-lp-navy md:text-5xl lg:text-6xl">
            <span className="lp-yellow-underline">Atacul</span> de panică.
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
            <span className="mx-2">·</span>
            Ultima actualizare: martie 2026
          </p>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-lp-mute md:text-xl">
            <p>
              Inima bate atât de tare că o simți în gât. Simți că nu mai poți
              respira, de parcă cineva ți-ar apăsa pieptul. Mâinile tremură.
              Amețești. Totul din jur pare ireal, ca și cum ai privi prin
              sticlă.
            </p>
            <p>
              <strong className="text-lp-navy">
                Dacă te recunoști în aceste cuvinte, nu ești singur și nu ești
                nebun.
              </strong>{" "}
              Ceea ce trăiești se numește atac de panică. Și în acest ghid vei
              înțelege exact ce ți se întâmplă, de ce ți se întâmplă, și ce poți
              face.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 rounded-md border border-lp-border bg-lp-bg px-6 py-8">
            <Stat number="30-40%" text="dintre adulți experimentează cel puțin un atac" />
            <Stat number="5-20 min" text="durată medie" />
            <Stat number="0" text="pericol real. Senzațiile sunt intense dar inofensive" />
          </div>
        </div>
      </header>

      {/* CE ESTE */}
      <section className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
            <div>
              <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
                Definiție
              </p>
              <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
                Ce este un atac de panică.
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
                <p>
                  <strong className="text-lp-navy">
                    Un atac de panică este un episod brusc de frică intensă în
                    care corpul tău reacționează ca și cum ai fi în pericol de
                    moarte deși nu există niciun pericol real.
                  </strong>{" "}
                  Senzațiile fizice sunt reale. Pericolul nu este.
                </p>
                <p>
                  Gândește-te la o alarmă de incendiu care pornește într-o
                  clădire în care nu există niciun foc. Alarma urlă la fel de
                  tare. Toată lumea reacționează la fel de intens. Singura
                  diferență.. nu arde nimic. Asta face corpul tău: activează
                  sistemul de alarmă fără pericol real.
                </p>
                <p>
                  <strong className="text-lp-navy">
                    A avea un atac de panică NU înseamnă că ai o tulburare.
                  </strong>{" "}
                  Un atac izolat este extrem de comun. Ceea ce transformă un
                  atac izolat în tulburare este{" "}
                  <strong className="text-lp-navy">interpretarea</strong> pe
                  care i-o dai și{" "}
                  <strong className="text-lp-navy">frica</strong> de a-l
                  retrăi.
                </p>
              </div>
            </div>

            {/* Illustration */}
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[400px] overflow-hidden rounded-md bg-gradient-to-br from-[#DDE5EB] to-[#C5D2DC] shadow-[0_20px_60px_rgba(8,29,61,0.12)] lg:mx-0">
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
              <svg
                viewBox="0 0 280 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "100%", height: "100%" }}
              >
                <defs>
                  <radialGradient id="adp-warmth" cx="50%" cy="48%" r="35%">
                    <stop offset="0%" stopColor="#4fb1d6" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#4fb1d6" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="adp-calm" cx="50%" cy="48%" r="50%">
                    <stop offset="0%" stopColor="#081d3d" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#081d3d" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="140" cy="150" r="120" fill="url(#adp-calm)" className="adp-breathe" />
                <circle cx="140" cy="82" r="26" fill="#081d3d" opacity="0.45" />
                <path d="M131 80 Q134 82 137 80" fill="none" stroke="#081d3d" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />
                <path d="M143 80 Q146 82 149 80" fill="none" stroke="#081d3d" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />
                <path d="M134 107 L134 118 Q134 122 137 122 L143 122 Q146 122 146 118 L146 107" fill="#081d3d" opacity="0.35" />
                <path d="M140 122 C120 122 98 138 88 158 L82 178 Q80 186 86 188 L94 188 L94 260 L186 260 L186 188 L194 188 Q200 186 198 178 L192 158 C182 138 160 122 140 122Z" fill="#081d3d" opacity="0.3" />
                <path d="M88 158 C92 164 100 172 118 168 L132 158" fill="none" stroke="#081d3d" strokeWidth="8" opacity="0.25" strokeLinecap="round" />
                <path d="M192 158 C188 164 180 172 162 168 L148 158" fill="none" stroke="#081d3d" strokeWidth="8" opacity="0.25" strokeLinecap="round" />
                <ellipse cx="132" cy="162" rx="10" ry="6" fill="#081d3d" opacity="0.28" transform="rotate(-10 132 162)" />
                <ellipse cx="148" cy="162" rx="10" ry="6" fill="#081d3d" opacity="0.28" transform="rotate(10 148 162)" />
                <circle cx="140" cy="155" r="35" fill="url(#adp-warmth)" />
                <circle cx="140" cy="155" r="22" fill="none" stroke="#4fb1d6" strokeWidth="1.2" className="adp-rip1" />
                <circle cx="140" cy="155" r="22" fill="none" stroke="#4fb1d6" strokeWidth="0.8" className="adp-rip2" />
                <circle cx="140" cy="155" r="22" fill="none" stroke="#4fb1d6" strokeWidth="0.5" className="adp-rip3" />
                <g className="adp-beat">
                  <path d="M140 160 C140 153 133 148 128 148 C122 148 117 153 117 160 C117 171 140 182 140 182 C140 182 163 171 163 160 C163 153 158 148 152 148 C147 148 140 153 140 160Z" fill="#4fb1d6" opacity="0.95" />
                  <path d="M128 153 Q131 149 135 153" fill="none" stroke="white" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
                </g>
                <circle cx="140" cy="150" r="100" fill="none" stroke="#081d3d" strokeWidth="1.5" opacity="0.18" strokeDasharray="4 6" />
                <text x="140" y="290" textAnchor="middle" fill="#081d3d" fontSize="11" fontWeight="600" opacity="0.55" fontFamily="Work Sans, system-ui, sans-serif" letterSpacing="0.08em">
                  ești în siguranță
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* GUIDE NAVIGATION */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <div className="text-center">
            <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
              Explorează ghidul
            </p>
            <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-5xl">
              Recunoaște. Înțelege. Acționează.
            </h2>
            <p className="mx-auto mt-4 max-w-[640px] text-base leading-relaxed text-lp-mute md:text-lg">
              Trei capitole care răspund la cele trei întrebări pe care le ai
              acum.. ce mi se întâmplă, de ce, și ce fac.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {GUIDE_STEPS.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className={`group relative flex flex-col rounded-md border border-lp-border bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(8,29,61,0.12)] md:p-8 ${ACCENT_BORDER[s.accent]}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${ACCENT_PILL[s.accent]}`}
                  >
                    {s.number}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-lp-mute-soft">
                    {s.eyebrow}
                  </span>
                </div>
                <h3 className="mt-5 font-work text-xl font-bold leading-tight tracking-tight text-lp-navy md:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-lp-mute md:text-base">
                  {s.desc}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-lp-cyan-dark transition group-hover:text-lp-navy">
                  Citește capitolul
                  <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <div className="text-center">
            <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-cyan-dark">
              Întrebări frecvente
            </p>
            <h2 className="mt-3 font-work text-3xl font-bold leading-tight tracking-tight text-lp-navy md:text-4xl">
              Ce vor să știe oamenii despre atacul de panică.
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

          {/* References */}
          <div className="mt-12">
            <details className="rounded-md border border-lp-border bg-white px-6 py-4">
              <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-semibold text-lp-navy">
                <span className="text-lg leading-none text-lp-cyan-dark">+</span>
                Referințe științifice ({REFERENCES.length} surse)
              </summary>
              <ol className="mt-6 list-decimal space-y-2 pl-6 text-[13px] leading-relaxed text-lp-mute-soft">
                {REFERENCES.map((ref, i) => (
                  <li key={i}>{ref}</li>
                ))}
              </ol>
            </details>
          </div>
        </div>
      </section>

      {/* CTA DARK */}
      <section className="bg-lp-navy px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1100px]">
          <div className="text-center text-white">
            <p className="text-base md:text-lg font-semibold uppercase tracking-[0.22em] text-lp-cyan">
              Cabinet
            </p>
            <h2 className="mt-4 font-work text-3xl font-bold leading-tight md:text-5xl">
              Primul pas este{" "}
              <span className="bg-lp-yellow px-2 text-lp-navy">
                o conversație.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-[680px] text-lg leading-relaxed text-white/85 md:text-xl">
              Am lucrat cu sute de persoane care au trecut prin exact ce treci
              tu acum. Știu cum arată, știu cum se simte, și știu că se poate
              schimba.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4">
              <Link
                href="/programare/?din=atac-de-panica"
                className="lp-cta inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold md:text-lg"
              >
                Programează o conversație cu Daniel
                <span aria-hidden>→</span>
              </Link>
              <p className="text-sm text-white/60">
                Răspund personal la fiecare mesaj.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({ number, text }: { number: string; text: string }) {
  return (
    <div className="text-center">
      <p className="font-work text-2xl font-bold tracking-tight text-lp-navy md:text-3xl">
        {number}
      </p>
      <p className="mt-1 text-xs leading-snug text-lp-mute md:text-sm">
        {text}
      </p>
    </div>
  );
}
