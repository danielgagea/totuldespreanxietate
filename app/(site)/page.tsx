import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anxietate: ce este, simptome, cauze și tratament | Totul despre Anxietate",
  description:
    "Ce este anxietatea, de ce apare și ce poți face. Ghiduri complete despre atacul de panică, anxietatea socială și alte forme de anxietate. De psihologul Daniel Gagea.",
  alternates: { canonical: "https://totuldespreanxietate.ro" },
  openGraph: {
    title: "Totul despre Anxietate .. Ghiduri complete de la psiholog",
    description: "Ce este anxietatea, de ce apare și ce poți face. Resursa #1 din România despre anxietate.",
    url: "https://totuldespreanxietate.ro",
    type: "website",
    locale: "ro_RO",
    siteName: "Totul despre Anxietate",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Totul despre Anxietate",
      url: "https://totuldespreanxietate.ro",
      publisher: { "@type": "Person", name: "Daniel Gagea", jobTitle: "Psiholog clinician, psihoterapeut" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Ce este anxietatea?", acceptedAnswer: { "@type": "Answer", text: "Anxietatea este un r\u0103spuns natural al corpului la o amenin\u021bare perceput\u0103. Devine o problem\u0103 c\u00e2nd se activeaz\u0103 frecvent, intens \u0219i f\u0103r\u0103 un pericol real." } },
        { "@type": "Question", name: "Anxietatea se trateaz\u0103?", acceptedAnswer: { "@type": "Answer", text: "Da. Psihoterapia are rate de succes \u00eentre 60-80%. Majoritatea persoanelor observ\u0103 \u00eembun\u0103t\u0103\u021biri \u00een 8-16 \u0219edin\u021be." } },
        { "@type": "Question", name: "Anxietatea e periculoas\u0103?", acceptedAnswer: { "@type": "Answer", text: "Anxietatea \u00een sine nu este periculoas\u0103 fizic. Un atac de panic\u0103 nu produce infarct. Totu\u0219i, anxietatea netratat\u0103 afecteaz\u0103 calitatea vie\u021bii." } },
      ],
    },
    { "@type": "Person", name: "Daniel Gagea", jobTitle: "Psiholog clinician, psihoterapeut", url: "https://totuldespreanxietate.ro" },
  ],
};

const tipuri = [
  { title: "Atacul de panică", href: "/atac-de-panica", desc: "Inima bate puternic, simți că nu poți respira, ești convins că faci infarct. Totul durează câteva minute, dar se simte ca o eternitate." },
  { title: "Anxietatea socială", href: "/tipuri/anxietate-sociala", desc: "Repeți mental ce vei spune. Analizezi fiecare interacțiune ore sau zile. Eviți situații sociale nu pentru că nu vrei, ci pentru că te temi de judecată." },
  { title: "Anxietatea generalizată", href: "/tipuri/anxietate-generalizata", desc: "Te îngrijorezi constant, nu despre un lucru anume, ci despre orice. Mintea ta produce scenarii negative non-stop." },
  { title: "Tulburarea obsesiv-compulsivă", href: "/tipuri/toc", desc: "Gânduri intruzive care revin, ritualuri pe care le repeți ca să scapi de anxietate. Un cerc vicios." },
  { title: "Stresul post-traumatic", href: "/tipuri/tspt", desc: "Tresări la sunete puternice, ai coșmaruri sau eviți anumite locuri de luni de zile. Trecutul se simte ca prezent." },
  { title: "Fobii specifice", href: "/tipuri/fobii-specifice", desc: "Frica intensă de ceva concret.. înălțimi, zbor, spații închise. Știi rațional că frica e disproporționată, dar corpul nu ascultă." },
];

const faqs = [
  { q: "Ce este anxietatea?", a: "Anxietatea este un răspuns natural al corpului la o amenințare percepută. Devine o problemă atunci când se activează frecvent, intens și fără un pericol real. Se manifestă prin senzații fizice (palpitații, amețeli, dificultăți de respirație), gânduri catastrofice și comportamente de evitare." },
  { q: "Care sunt simptomele anxietății?", a: "Palpitații, presiune în piept, amețeli, senzație de sufocare, furnicături, transpirație, tremur, greață, tensiune musculară. Mental: îngrijorare excesivă, gânduri catastrofice, dificultăți de concentrare." },
  { q: "Cum scap de anxietate?", a: "Nu scapi de anxietate ca de o răceală. Obiectivul este înțelegerea și gestionarea ei. Pașii includ: înțelegerea mecanismului, tehnici de reglare a respirației, modificarea gândurilor catastrofice și, când e necesar, psihoterapie." },
  { q: "Anxietatea se tratează?", a: "Da. Anxietatea este una dintre cele mai tratabile condiții din psihologie. Psihoterapia are rate de succes între 60-80%. Majoritatea persoanelor observă îmbunătățiri semnificative în 8-16 ședințe." },
  { q: "Anxietatea e periculoasă?", a: "Anxietatea în sine nu este periculoasă fizic. Un atac de panică nu produce infarct și nu te face să înnebunești. Totuși, anxietatea netratată poate afecta semnificativ calitatea vieții." },
  { q: "De ce am anxietate dacă analizele sunt normale?", a: "Pentru că anxietatea nu este o boală fizică, ci un răspuns al sistemului nervos. Corpul funcționează perfect mecanic. Problema este că sistemul de alarmă se activează când nu ar trebui." },
  { q: "Trebuie să iau medicamente pentru anxietate?", a: "Nu neapărat. Multe persoane reușesc să gestioneze anxietatea doar prin psihoterapie. Medicația funcționează cel mai bine în combinație cu terapia, nu ca înlocuitor." },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "var(--color-background)" }}>
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-xs font-medium uppercase tracking-[0.15em] mb-6" style={{ color: "var(--color-text-secondary)" }}>
                De Daniel Gagea, psiholog clinician, psihoterapeut
              </p>
              <h1 className="text-[28px] md:text-[42px] leading-[1.2] mb-6" style={{ fontFamily: "var(--font-heading)", fontWeight: 400, color: "var(--color-primary)" }}>
                Anxietatea ta are un sens. Aici îl înțelegi.
              </h1>
              <p className="text-[17px] md:text-[19px] leading-[1.7] mb-10" style={{ color: "var(--color-text-secondary)" }}>
                Informații complete despre anxietate, scrise de specialiști în anxietate. Ca să te recunoști, să înțelegi ce ți se întâmplă și să știi ce ai de făcut.
              </p>
              <Link href="#tipuri" className="inline-block px-8 py-4 rounded-lg text-[16px] font-semibold text-white" style={{ backgroundColor: "var(--color-secondary)" }}>
                Descoperă ce tip de anxietate ai &rarr;
              </Link>
            </div>
            {/* Hero image */}
            <div className="shrink-0 w-[280px] md:w-[360px]">
              <Image
                src="/images/homepage-hero.png"
                alt="Persoană pe un fotoliu, privind pe fereastră într-o dimineață liniștită"
                width={720}
                height={720}
                className="rounded-2xl"
                style={{ width: "100%", height: "auto", boxShadow: "0 8px 32px rgba(27, 43, 75, 0.08)" }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "var(--color-background-white)" }}>
        <style>{`
          .hp-journey-container { max-width: 760px; margin: 0 auto; padding: 0 24px; }
          .hp-journey-intro { font-size: 17px; line-height: 1.75; color: var(--color-text); margin-bottom: 40px; }
          .hp-journey-timeline { position: relative; padding-left: 32px; margin-bottom: 40px; }
          .hp-journey-timeline::before {
            content: '';
            position: absolute;
            left: 7px;
            top: 8px;
            bottom: 8px;
            width: 2px;
            background: linear-gradient(180deg, var(--color-secondary) 0%, #C4966C 100%);
            opacity: 0.3;
            border-radius: 1px;
          }
          .hp-journey-step {
            position: relative;
            margin-bottom: 28px;
          }
          .hp-journey-step:last-child { margin-bottom: 0; }
          .hp-journey-dot {
            position: absolute;
            left: -32px;
            top: 6px;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            border: 2px solid var(--color-secondary);
            background: var(--color-background-white);
          }
          .hp-journey-step:last-child .hp-journey-dot {
            border-color: #C4966C;
            background: #C4966C;
          }
          .hp-journey-label {
            font-family: var(--font-body), sans-serif;
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: var(--color-secondary);
            margin-bottom: 4px;
          }
          .hp-journey-step:last-child .hp-journey-label { color: #C4966C; }
          .hp-journey-text {
            font-size: 16px;
            line-height: 1.7;
            color: var(--color-text);
          }
          .hp-journey-close {
            padding: 28px;
            background: var(--color-background);
            border-radius: 12px;
            border-left: 3px solid var(--color-secondary);
          }
          .hp-journey-close p {
            font-size: 17px;
            line-height: 1.75;
            color: var(--color-text);
            margin: 0;
          }
        `}</style>
        <div className="hp-journey-container">
          <h2 className="text-[24px] md:text-[30px] leading-[1.3] mb-6" style={{ fontFamily: "var(--font-heading)", fontWeight: 400, color: "var(--color-primary)" }}>
            Ți se pare cunoscută povestea asta?
          </h2>
          <p className="hp-journey-intro">
            Începe cu o senzație fizică pe care nu o poți explica. Și de acolo urmează un drum pe care milioane de oameni l-au parcurs deja.
          </p>

          <div className="hp-journey-timeline">
            {[
              { label: "Senzația", text: "Palpitații, amețeli, furnicături, presiune în piept, senzația că nu poți respira. Apar din senin, fără un motiv clar." },
              { label: "Doctorul", text: "Mergi la urgență sau la medicul de familie. EKG, analize de sânge, investigații. Totul iese în parametri normali." },
              { label: "Răspunsul", text: "\"Nu aveți nimic. Probabil e stresul.\" Dar tu simți ceva. Senzațiile sunt reale. Dacă nu ai nimic, de ce corpul tău face asta?" },
              { label: "Căutarea", text: "Ajungi pe Google. Cauți \"palpitații fără cauză\" sau \"de ce îmi bate inima repede fără motiv\". Citești zeci de articole." },
              { label: "Cuvântul", text: "Undeva, într-un articol, citești pentru prima dată cuvântul anxietate. Și ceva se potrivește." },
            ].map((step, i) => (
              <div key={i} className="hp-journey-step">
                <span className="hp-journey-dot" />
                <p className="hp-journey-label">{step.label}</p>
                <p className="hp-journey-text">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="hp-journey-close">
            <p>
              Dacă ai ajuns aici prin acest drum, ești exact unde trebuie. Aici vei găsi răspunsurile pe care nimeni nu ți le-a dat încă.
            </p>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "var(--color-background)" }}>
        <div className="mx-auto max-w-[760px] px-6">
          <h2 className="text-[24px] md:text-[30px] leading-[1.3] mb-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 400, color: "var(--color-primary)" }}>
            Ce găsești pe acest site
          </h2>
          <p className="text-[17px] leading-[1.75] mb-10" style={{ color: "var(--color-text-secondary)" }}>
            Acest site nu este o enciclopedie medicală. Vei găsi trei lucruri pe care, împreună, nu le oferă nicio altă resursă.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["Recunoaștere", "Ceea ce simți are un nume. Nu ești ciudat, nu ți se pare și nu ești singurul. Aici vei găsi descrieri exacte ale experiențelor prin care treci."],
              ["Claritate", "Înțelegi ce ți se întâmplă și de ce. Cum funcționează anxietatea în corp, în minte, în relații. Explicate pe înțelesul tău."],
              ["Direcție", "Știi ce urmează. Fiecare articol se termină cu pași concreți, nu cu sfaturi vagi de tipul relaxează-te sau gândește pozitiv."],
            ].map(([title, text], i) => (
              <div key={i} className="p-6 rounded-xl" style={{ backgroundColor: "var(--color-background-white)", border: "1px solid var(--color-border)" }}>
                <h3 className="text-[20px] mb-3" style={{ fontFamily: "var(--font-heading)", fontWeight: 500, color: "var(--color-primary)" }}>{title}</h3>
                <p className="text-[15px] leading-[1.7]" style={{ color: "var(--color-text-secondary)" }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIPURI */}
      <section id="tipuri" className="py-16 md:py-24" style={{ backgroundColor: "var(--color-background-white)", position: "relative", overflow: "hidden" }}>
        {/* Subtle background texture */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.03, pointerEvents: "none" }} aria-hidden="true">
          <svg width="100%" height="100%">
            <filter id="tipuri-grain">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#tipuri-grain)" />
          </svg>
        </div>

        <div className="mx-auto max-w-[1000px] px-6" style={{ position: "relative" }}>
          <div className="text-center mb-12 md:mb-16">
            <p className="text-xs font-medium uppercase tracking-[0.18em] mb-4" style={{ color: "var(--color-accent)" }}>
              Ghiduri complete
            </p>
            <h2 className="text-[26px] md:text-[34px] leading-[1.2] mb-5" style={{ fontFamily: "var(--font-heading)", fontWeight: 400, color: "var(--color-primary)", letterSpacing: "-0.02em" }}>
              Tipuri de anxietate
            </h2>
            <p className="text-[17px] leading-[1.75] mx-auto" style={{ color: "var(--color-text)", maxWidth: 560 }}>
              Anxietatea nu e un singur lucru. Are forme diferite, cu mecanisme diferite și cu soluții diferite. Alege-o pe cea în care te recunoști.
            </p>
          </div>

          <style>{`
            /* Featured card */
            .hp-tip-featured {
              display: flex;
              flex-direction: column;
              position: relative;
              padding: 36px 32px 32px;
              border-radius: 16px;
              background: var(--color-primary);
              text-decoration: none;
              overflow: hidden;
              margin-bottom: 16px;
              transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.25s ease-out;
            }
            @media (min-width: 768px) {
              .hp-tip-featured {
                flex-direction: row;
                align-items: center;
                gap: 40px;
                padding: 48px 44px;
              }
            }
            .hp-tip-featured:hover {
              transform: translateY(-4px);
            }
            .hp-tip-featured:focus-visible {
              outline: 3px solid var(--color-accent);
              outline-offset: 3px;
            }
            .hp-tip-featured:active { transform: translateY(-1px); }
            .hp-tip-featured::before {
              content: '';
              position: absolute;
              top: 0; left: 0; right: 0; bottom: 0;
              background: radial-gradient(ellipse at 80% 20%, rgba(196,150,108,0.15) 0%, transparent 60%),
                          radial-gradient(ellipse at 20% 80%, rgba(92,122,106,0.1) 0%, transparent 50%);
              pointer-events: none;
            }
            .hp-tip-featured-icon {
              flex-shrink: 0;
              width: 120px;
              height: 120px;
              margin: 0 auto 20px;
              opacity: 0.85;
              transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease-out;
            }
            @media (min-width: 768px) {
              .hp-tip-featured-icon { margin: 0; width: 140px; height: 140px; }
            }
            .hp-tip-featured:hover .hp-tip-featured-icon {
              transform: scale(1.06);
              opacity: 1;
            }
            .hp-tip-featured-content { flex: 1; position: relative; z-index: 1; }
            .hp-tip-featured-label {
              display: inline-block;
              font-size: 11px;
              font-weight: 600;
              letter-spacing: 0.12em;
              text-transform: uppercase;
              color: #C4966C;
              margin-bottom: 12px;
              padding: 4px 12px;
              border-radius: 20px;
              background: rgba(196,150,108,0.12);
            }
            .hp-tip-featured-title {
              font-family: var(--font-heading), 'Fraunces', serif;
              font-size: 24px;
              font-weight: 400;
              color: #FAF7F2;
              margin-bottom: 10px;
              letter-spacing: -0.02em;
            }
            @media (min-width: 768px) {
              .hp-tip-featured-title { font-size: 28px; }
            }
            .hp-tip-featured-desc {
              font-size: 16px;
              line-height: 1.7;
              color: rgba(250,247,242,0.75);
              margin-bottom: 20px;
            }
            .hp-tip-featured-cta {
              display: inline-flex;
              align-items: center;
              gap: 8px;
              font-size: 15px;
              font-weight: 600;
              color: #C4966C;
              padding: 10px 20px;
              border-radius: 8px;
              background: rgba(196,150,108,0.1);
              border: 1px solid rgba(196,150,108,0.2);
              transition: transform 0.2s ease-out, opacity 0.2s ease-out;
            }
            .hp-tip-featured:hover .hp-tip-featured-cta {
              transform: translateX(4px);
            }

            /* Secondary cards grid - 3 top, 2 bottom centered */
            .hp-tipuri-grid-v2 {
              display: grid;
              grid-template-columns: 1fr;
              gap: 14px;
            }
            @media (min-width: 640px) {
              .hp-tipuri-grid-v2 { grid-template-columns: 1fr 1fr; }
            }
            @media (min-width: 900px) {
              .hp-tipuri-grid-v2 {
                grid-template-columns: repeat(6, 1fr);
              }
              .hp-tipuri-grid-v2 > a:nth-child(1),
              .hp-tipuri-grid-v2 > a:nth-child(2),
              .hp-tipuri-grid-v2 > a:nth-child(3) {
                grid-column: span 2;
              }
              .hp-tipuri-grid-v2 > a:nth-child(4) {
                grid-column: 2 / span 2;
              }
              .hp-tipuri-grid-v2 > a:nth-child(5) {
                grid-column: 4 / span 2;
              }
            }

            /* Secondary card */
            .hp-tip-card-v2 {
              display: flex;
              flex-direction: column;
              padding: 24px 22px 22px;
              border-radius: 14px;
              background: var(--color-background);
              text-decoration: none;
              position: relative;
              overflow: hidden;
              transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.25s ease-out;
            }
            .hp-tip-card-v2::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              height: 3px;
              border-radius: 14px 14px 0 0;
              transition: opacity 0.25s ease-out;
            }
            .hp-tip-card-v2:hover {
              transform: translateY(-5px);
            }
            .hp-tip-card-v2:focus-visible {
              outline: 2px solid var(--color-secondary);
              outline-offset: 2px;
            }
            .hp-tip-card-v2:active { transform: translateY(-1px); }

            /* Color accents per card */
            .hp-tip-card-v2[data-accent="green"]::before { background: #5C7A6A; }
            .hp-tip-card-v2[data-accent="amber"]::before { background: #C4966C; }
            .hp-tip-card-v2[data-accent="teal"]::before { background: #4A8B7F; }
            .hp-tip-card-v2[data-accent="slate"]::before { background: #6B7B8D; }
            .hp-tip-card-v2[data-accent="rust"]::before { background: #A0735C; }

            .hp-tip-card-v2-icon {
              width: 44px;
              height: 44px;
              margin-bottom: 14px;
              opacity: 0.7;
              transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease-out;
            }
            .hp-tip-card-v2:hover .hp-tip-card-v2-icon {
              transform: scale(1.1) translateY(-2px);
              opacity: 1;
            }
            .hp-tip-card-v2-title {
              font-family: var(--font-heading), 'Fraunces', serif;
              font-size: 18px;
              font-weight: 500;
              color: var(--color-primary);
              margin-bottom: 8px;
              letter-spacing: -0.01em;
            }
            .hp-tip-card-v2-desc {
              font-size: 14px;
              line-height: 1.65;
              color: var(--color-text);
              margin-bottom: 16px;
              flex: 1;
            }
            .hp-tip-card-v2-cta {
              font-size: 13px;
              font-weight: 600;
              display: inline-flex;
              align-items: center;
              gap: 5px;
              transition: transform 0.2s ease-out, opacity 0.2s ease-out;
            }
            .hp-tip-card-v2:hover .hp-tip-card-v2-cta {
              transform: translateX(3px);
            }
            .hp-tip-card-v2[data-accent="green"] .hp-tip-card-v2-cta { color: #5C7A6A; }
            .hp-tip-card-v2[data-accent="amber"] .hp-tip-card-v2-cta { color: #B08050; }
            .hp-tip-card-v2[data-accent="teal"] .hp-tip-card-v2-cta { color: #4A8B7F; }
            .hp-tip-card-v2[data-accent="slate"] .hp-tip-card-v2-cta { color: #6B7B8D; }
            .hp-tip-card-v2[data-accent="rust"] .hp-tip-card-v2-cta { color: #A0735C; }

            /* Shadow system for cards */
            .hp-tip-card-v2 {
              box-shadow: 0 1px 3px rgba(27,43,75,0.04), 0 4px 12px rgba(27,43,75,0.03);
            }
            .hp-tip-card-v2:hover {
              box-shadow: 0 4px 12px rgba(27,43,75,0.06), 0 12px 32px rgba(27,43,75,0.06);
            }
            .hp-tip-featured {
              box-shadow: 0 4px 16px rgba(0,0,0,0.15), 0 12px 40px rgba(0,0,0,0.1);
            }
            .hp-tip-featured:hover {
              box-shadow: 0 8px 24px rgba(0,0,0,0.18), 0 20px 56px rgba(0,0,0,0.12);
            }
          `}</style>

          {/* Featured card: Atacul de panică */}
          <Link href={tipuri[0].href} className="hp-tip-featured">
            <div className="hp-tip-featured-icon" aria-hidden="true">
              <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Pulsing circles */}
                <circle cx="70" cy="70" r="55" stroke="#C4966C" strokeWidth="0.8" opacity="0.15">
                  <animate attributeName="r" values="50;58;50" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.15;0.05;0.15" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="70" cy="70" r="40" stroke="#C4966C" strokeWidth="0.8" opacity="0.2">
                  <animate attributeName="r" values="38;44;38" dur="2.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.2;0.08;0.2" dur="2.5s" repeatCount="indefinite" />
                </circle>
                {/* Heart shape */}
                <path d="M70 95 C70 95 45 78 45 62 C45 52 53 46 62 48 C67 49 70 54 70 54 C70 54 73 49 78 48 C87 46 95 52 95 62 C95 78 70 95 70 95Z" fill="#C4966C" opacity="0.35">
                  <animate attributeName="opacity" values="0.35;0.5;0.35" dur="1.8s" repeatCount="indefinite" />
                </path>
                <path d="M70 95 C70 95 45 78 45 62 C45 52 53 46 62 48 C67 49 70 54 70 54 C70 54 73 49 78 48 C87 46 95 52 95 62 C95 78 70 95 70 95Z" stroke="#C4966C" strokeWidth="1.2" fill="none" opacity="0.5" />
                {/* ECG line */}
                <path d="M20 70 L45 70 L52 70 L56 55 L60 85 L64 60 L68 75 L70 70 L95 70 L120 70" stroke="#FAF7F2" strokeWidth="1.2" opacity="0.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="hp-tip-featured-content">
              <span className="hp-tip-featured-label">Cel mai căutat ghid</span>
              <h3 className="hp-tip-featured-title">{tipuri[0].title}</h3>
              <p className="hp-tip-featured-desc">{tipuri[0].desc}</p>
              <span className="hp-tip-featured-cta">
                Citește ghidul complet
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </Link>

          {/* Secondary cards */}
          <div className="hp-tipuri-grid-v2">
            {/* Anxietatea socială */}
            <Link href={tipuri[1].href} className="hp-tip-card-v2" data-accent="green">
              <div className="hp-tip-card-v2-icon" aria-hidden="true">
                <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Two figures, one faded */}
                  <circle cx="16" cy="14" r="5" fill="#5C7A6A" opacity="0.5" />
                  <path d="M8 30 C8 24 12 20 16 20 C20 20 24 24 24 30" fill="#5C7A6A" opacity="0.35" />
                  <circle cx="30" cy="14" r="5" fill="#5C7A6A" opacity="0.2" />
                  <path d="M22 30 C22 24 26 20 30 20 C34 20 38 24 38 30" fill="#5C7A6A" opacity="0.12" />
                  {/* Dividing line */}
                  <line x1="22" y1="8" x2="22" y2="34" stroke="#5C7A6A" strokeWidth="0.8" opacity="0.15" strokeDasharray="2 2" />
                </svg>
              </div>
              <h3 className="hp-tip-card-v2-title">{tipuri[1].title}</h3>
              <p className="hp-tip-card-v2-desc">{tipuri[1].desc}</p>
              <span className="hp-tip-card-v2-cta">
                Citește ghidul
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>

            {/* Anxietatea generalizată */}
            <Link href={tipuri[2].href} className="hp-tip-card-v2" data-accent="amber">
              <div className="hp-tip-card-v2-icon" aria-hidden="true">
                <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Thought cloud / spiraling lines */}
                  <circle cx="22" cy="20" r="10" stroke="#C4966C" strokeWidth="0.8" opacity="0.3" fill="none" />
                  <circle cx="22" cy="20" r="6" stroke="#C4966C" strokeWidth="0.8" opacity="0.4" fill="none" />
                  <circle cx="22" cy="20" r="2.5" fill="#C4966C" opacity="0.35" />
                  {/* Radiating worry lines */}
                  <path d="M22 6 L22 3" stroke="#C4966C" strokeWidth="0.8" opacity="0.25" strokeLinecap="round" />
                  <path d="M32 10 L34.5 7.5" stroke="#C4966C" strokeWidth="0.8" opacity="0.25" strokeLinecap="round" />
                  <path d="M36 20 L39 20" stroke="#C4966C" strokeWidth="0.8" opacity="0.25" strokeLinecap="round" />
                  <path d="M12 10 L9.5 7.5" stroke="#C4966C" strokeWidth="0.8" opacity="0.25" strokeLinecap="round" />
                  <path d="M8 20 L5 20" stroke="#C4966C" strokeWidth="0.8" opacity="0.25" strokeLinecap="round" />
                  {/* Small dots - scattered thoughts */}
                  <circle cx="15" cy="34" r="1.2" fill="#C4966C" opacity="0.2" />
                  <circle cx="29" cy="36" r="1" fill="#C4966C" opacity="0.15" />
                  <circle cx="22" cy="38" r="0.8" fill="#C4966C" opacity="0.1" />
                </svg>
              </div>
              <h3 className="hp-tip-card-v2-title">{tipuri[2].title}</h3>
              <p className="hp-tip-card-v2-desc">{tipuri[2].desc}</p>
              <span className="hp-tip-card-v2-cta">
                Citește ghidul
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>

            {/* TOC */}
            <Link href={tipuri[3].href} className="hp-tip-card-v2" data-accent="teal">
              <div className="hp-tip-card-v2-icon" aria-hidden="true">
                <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Circular arrows / loop */}
                  <path d="M22 8 A14 14 0 0 1 36 22" stroke="#4A8B7F" strokeWidth="1.2" opacity="0.4" fill="none" strokeLinecap="round" />
                  <path d="M36 22 A14 14 0 0 1 22 36" stroke="#4A8B7F" strokeWidth="1.2" opacity="0.3" fill="none" strokeLinecap="round" />
                  <path d="M22 36 A14 14 0 0 1 8 22" stroke="#4A8B7F" strokeWidth="1.2" opacity="0.4" fill="none" strokeLinecap="round" />
                  <path d="M8 22 A14 14 0 0 1 22 8" stroke="#4A8B7F" strokeWidth="1.2" opacity="0.3" fill="none" strokeLinecap="round" />
                  {/* Arrows */}
                  <polygon points="35,18 37,22 33,22" fill="#4A8B7F" opacity="0.4" />
                  <polygon points="9,26 7,22 11,22" fill="#4A8B7F" opacity="0.4" />
                  {/* Center lock */}
                  <rect x="18" y="19" width="8" height="7" rx="1.5" stroke="#4A8B7F" strokeWidth="1" opacity="0.35" fill="none" />
                  <path d="M20 19 V16 A2 2 0 0 1 24 16 V19" stroke="#4A8B7F" strokeWidth="1" opacity="0.35" fill="none" />
                </svg>
              </div>
              <h3 className="hp-tip-card-v2-title">{tipuri[3].title}</h3>
              <p className="hp-tip-card-v2-desc">{tipuri[3].desc}</p>
              <span className="hp-tip-card-v2-cta">
                Citește ghidul
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>

            {/* TSPT */}
            <Link href={tipuri[4].href} className="hp-tip-card-v2" data-accent="slate">
              <div className="hp-tip-card-v2-icon" aria-hidden="true">
                <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Cracked / fractured shape */}
                  <circle cx="22" cy="22" r="14" stroke="#6B7B8D" strokeWidth="0.8" opacity="0.25" fill="none" />
                  {/* Lightning crack */}
                  <path d="M22 8 L20 18 L25 19 L19 36" stroke="#6B7B8D" strokeWidth="1.2" opacity="0.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  {/* Fragment lines */}
                  <path d="M20 18 L12 15" stroke="#6B7B8D" strokeWidth="0.6" opacity="0.2" strokeLinecap="round" />
                  <path d="M25 19 L33 16" stroke="#6B7B8D" strokeWidth="0.6" opacity="0.2" strokeLinecap="round" />
                  <path d="M19 28 L10 30" stroke="#6B7B8D" strokeWidth="0.6" opacity="0.2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="hp-tip-card-v2-title">{tipuri[4].title}</h3>
              <p className="hp-tip-card-v2-desc">{tipuri[4].desc}</p>
              <span className="hp-tip-card-v2-cta">
                Citește ghidul
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>

            {/* Fobii specifice */}
            <Link href={tipuri[5].href} className="hp-tip-card-v2" data-accent="rust">
              <div className="hp-tip-card-v2-icon" aria-hidden="true">
                <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Eye with fearful pupil */}
                  <path d="M6 22 C6 22 14 12 22 12 C30 12 38 22 38 22 C38 22 30 32 22 32 C14 32 6 22 6 22Z" stroke="#A0735C" strokeWidth="1" opacity="0.35" fill="none" />
                  <circle cx="22" cy="22" r="6" stroke="#A0735C" strokeWidth="0.8" opacity="0.3" fill="none" />
                  <circle cx="22" cy="22" r="2.5" fill="#A0735C" opacity="0.4" />
                  {/* Avoidance - looking away lines */}
                  <path d="M4 18 L2 16" stroke="#A0735C" strokeWidth="0.8" opacity="0.2" strokeLinecap="round" />
                  <path d="M4 26 L2 28" stroke="#A0735C" strokeWidth="0.8" opacity="0.2" strokeLinecap="round" />
                  <path d="M40 18 L42 16" stroke="#A0735C" strokeWidth="0.8" opacity="0.2" strokeLinecap="round" />
                  <path d="M40 26 L42 28" stroke="#A0735C" strokeWidth="0.8" opacity="0.2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="hp-tip-card-v2-title">{tipuri[5].title}</h3>
              <p className="hp-tip-card-v2-desc">{tipuri[5].desc}</p>
              <span className="hp-tip-card-v2-cta">
                Citește ghidul
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CE VREA SA SPUNA CORPUL */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "var(--color-primary)", color: "#FAF7F2" }}>
        <div className="mx-auto max-w-[760px] px-6">
          <h2 className="text-[24px] md:text-[30px] leading-[1.3] mb-6" style={{ fontFamily: "var(--font-heading)", fontWeight: 400, color: "#FAF7F2" }}>
            Ce vrea să-ți spună corpul tău
          </h2>
          <p className="text-[17px] leading-[1.75] mb-8" style={{ color: "rgba(250,247,242,0.8)" }}>
            Fiecare simptom de anxietate este o formă de comunicare. Corpul tău nu se defectează. El încearcă să-ți transmită ceva prin singurele mijloace pe care le are.. senzații fizice.
          </p>
          <div className="space-y-4 mb-10">
            {[
              ["Palpitațiile", "corpul tău se pregătește pentru ceva pe care mintea ta nu a procesat încă"],
              ["Respirația blocată", "senzația de sufocare reflectă adesea un spațiu emoțional în care simți că nu ai loc"],
              ["Nodul din stomac", "o tensiune pe care o porți, dar pe care nu ai pus-o în cuvinte"],
              ["Tensiunea din maxilar, gât, umeri", "lucruri pe care le înghiți în loc să le spui"],
            ].map(([bold, text], i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="shrink-0 w-2 h-2 rounded-full mt-2.5" style={{ backgroundColor: "#C4966C" }} />
                <p className="text-[17px] leading-[1.75]"><strong style={{ color: "#FAF7F2" }}>{bold}</strong> .. {text}</p>
              </div>
            ))}
          </div>
          <p className="text-[17px] leading-[1.75]" style={{ color: "rgba(250,247,242,0.8)" }}>
            <strong style={{ color: "#FAF7F2" }}>Anxietatea nu este dușmanul tău. Este un mesaj.</strong> Când înțelegi mesajul, simptomul începe să aibă sens. Și când are sens, încetează să mai fie atât de înfricoșător.
          </p>
        </div>
      </section>

      {/* DESPRE DANIEL */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "var(--color-background)" }}>
        <div className="mx-auto max-w-[760px] px-6">
          <h2 className="text-[24px] md:text-[30px] leading-[1.3] mb-8" style={{ fontFamily: "var(--font-heading)", fontWeight: 400, color: "var(--color-primary)" }}>
            Cine scrie acest site
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="shrink-0 mx-auto md:mx-0">
              <Image
                src="/images/daniel-gagea.jpg"
                alt="Daniel Gagea, psiholog clinician, psihoterapeut"
                width={200}
                height={200}
                className="rounded-xl object-cover"
                style={{ width: 200, height: 200, border: "1px solid var(--color-border)" }}
              />
            </div>
            <div className="flex-1">
              <p className="text-[17px] leading-[1.75] mb-4" style={{ color: "var(--color-text)" }}>
                <strong>Daniel Gagea</strong> este psiholog clinician și psihoterapeut cu peste 10 ani de experiență.
              </p>
              <p className="text-[17px] leading-[1.75] mb-4" style={{ color: "var(--color-text)" }}>
                Nu a construit acest site ca pe o broșură de promovare. L-a construit din aceeași frustrare pe care o au cei care caută răspunsuri: cele mai multe resurse din România despre anxietate sunt incomplete, superficiale și pline de sfaturi generice.
              </p>
              <p className="text-[17px] leading-[1.75] mb-6" style={{ color: "var(--color-text)" }}>
                Abordarea lui Daniel este diferită.. nu lucrează pe simptome, ci pe cauze. Te ajută să înțelegi de ce corpul și mintea ta au ajuns să funcționeze așa, și ce trebuie să se schimbe la rădăcină.
              </p>
              <Link
                href="/despre-daniel"
                className="inline-flex items-center gap-2 text-[15px] font-semibold"
                style={{ color: "var(--color-secondary)", textDecoration: "none", transition: "opacity 0.2s ease-out" }}
              >
                Află mai multe despre Daniel
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TREI PASI */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "var(--color-background-white)" }}>
        <div className="mx-auto max-w-[760px] px-6">
          <h2 className="text-[24px] md:text-[30px] leading-[1.3] mb-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 400, color: "var(--color-primary)" }}>
            Trei pași simpli
          </h2>
          <p className="text-[17px] leading-[1.75] mb-10" style={{ color: "var(--color-text-secondary)" }}>
            Nu trebuie să știi de unde să începi. Site-ul este construit să te ghideze natural.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["1", "Citește", "Alege tipul de anxietate. Fiecare ghid începe cu experiența trăită, ca să te recunoști, și continuă cu mecanismul."],
              ["2", "Înțelege", "Când înțelegi ce ți se întâmplă și de ce, anxietatea își pierde din putere. Nu dispare prin magie, dar încetează să mai fie un mister."],
              ["3", "Acționează", "Fiecare ghid se termină cu pași concreți. Ce poți face singur, acum. Și dacă ai nevoie de mai mult, cum arată următorul pas."],
            ].map(([num, title, text], i) => (
              <div key={i} className="text-center">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full text-[18px] font-semibold mb-4" style={{ backgroundColor: "var(--color-secondary)", color: "#ffffff" }}>{num}</span>
                <h3 className="text-[20px] mb-2" style={{ fontFamily: "var(--font-heading)", fontWeight: 500, color: "var(--color-primary)" }}>{title}</h3>
                <p className="text-[15px] leading-[1.7]" style={{ color: "var(--color-text-secondary)" }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "var(--color-background)" }}>
        <div className="mx-auto max-w-[760px] px-6 text-center">
          <h2 className="text-[24px] md:text-[30px] leading-[1.3] mb-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 400, color: "var(--color-primary)" }}>
            Nu trebuie să faci nimic acum
          </h2>
          <p className="text-[17px] leading-[1.75] mb-10" style={{ color: "var(--color-text-secondary)" }}>
            Dacă ai ajuns aici, ai făcut deja primul pas. Ai căutat. Ai citit. Ai început să înțelegi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programare?din=homepage" className="inline-block px-8 py-4 rounded-lg text-[16px] font-semibold text-white" style={{ backgroundColor: "var(--color-secondary)" }}>
              Scrie-mi un mesaj
            </Link>
            <Link href="/programare?din=homepage" className="inline-block px-8 py-4 rounded-lg text-[16px] font-semibold" style={{ border: "2px solid var(--color-secondary)", color: "var(--color-secondary)" }}>
              Programează o ședință
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "var(--color-background-white)" }}>
        <div className="mx-auto max-w-[760px] px-6">
          <h2 className="text-[24px] md:text-[30px] leading-[1.3] mb-8" style={{ fontFamily: "var(--font-heading)", fontWeight: 400, color: "var(--color-primary)" }}>
            Întrebări frecvente despre anxietate
          </h2>
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <details key={i} className="group border-b" style={{ borderColor: "var(--color-border)" }}>
                <summary className="flex items-center justify-between py-5 cursor-pointer list-none text-[17px] font-semibold" style={{ color: "var(--color-primary)" }}>
                  {faq.q}
                  <span className="shrink-0 ml-4 transition-transform group-open:rotate-45" style={{ color: "var(--color-text-secondary)" }}>+</span>
                </summary>
                <p className="pb-5 text-[16px] leading-[1.7]" style={{ color: "var(--color-text-secondary)" }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
