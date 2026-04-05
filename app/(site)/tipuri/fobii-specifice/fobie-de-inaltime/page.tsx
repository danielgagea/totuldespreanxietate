"use client";

import Link from "next/link";
import { useState } from "react";

/* ============================================================
   FOBIA DE ÎNĂLȚIMI (ACROFOBIE) — Pagină completă
   Design: Fraunces + Inter, CSS variables, pattern fobii-specifice
   ============================================================ */

function FAQ({ q, children }: { q: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid var(--color-border)" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0", background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 17, fontWeight: 600, color: "var(--color-primary)", textAlign: "left", gap: 16 }}
      >
        <span>{q}</span>
        <span style={{ flexShrink: 0, color: "var(--color-text-secondary)", transition: "transform 0.3s", transform: open ? "rotate(180deg)" : "none" }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
      </button>
      <div style={{ maxHeight: open ? 1200 : 0, overflow: "hidden", transition: "max-height 0.4s ease-out" }}>
        <div style={{ padding: "0 0 20px", color: "var(--color-text)", fontSize: 16, lineHeight: 1.7 }}>{children}</div>
      </div>
    </div>
  );
}

export default function FobieDeInaltimePage() {
  const [refsOpen, setRefsOpen] = useState(false);
  const [tocOpen, setTocOpen] = useState(false);

  return (
    <main style={{ fontFamily: "var(--font-body)", color: "var(--color-text)", fontSize: 17, lineHeight: 1.75 }}>

      {/* ── HERO ── */}
      <section style={{ background: "var(--color-background)", padding: "48px 24px 64px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 48, flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 300 }}>
              {/* Breadcrumb */}
              <nav style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--color-text-secondary)", marginBottom: 24 }}>
                <Link href="/" style={{ color: "var(--color-text-secondary)", textDecoration: "underline", textUnderlineOffset: 3 }}>
                  Acasă
                </Link>
                <span aria-hidden="true">&rarr;</span>
                <Link href="/tipuri" style={{ color: "var(--color-text-secondary)", textDecoration: "underline", textUnderlineOffset: 3 }}>
                  Tipuri
                </Link>
                <span aria-hidden="true">&rarr;</span>
                <Link href="/tipuri/fobii-specifice" style={{ color: "var(--color-text-secondary)", textDecoration: "underline", textUnderlineOffset: 3 }}>
                  Fobii specifice
                </Link>
                <span aria-hidden="true">&rarr;</span>
                <span style={{ color: "var(--color-text)" }}>Fobia de înălțimi</span>
              </nav>

              <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--color-text-secondary)", marginBottom: 24 }}>
                De Daniel Gagea, psiholog clinician, psihoterapeut
              </p>
              <h1 style={{ fontFamily: "var(--font-heading)", fontSize: 38, fontWeight: 400, color: "var(--color-primary)", lineHeight: 1.25, marginBottom: 16 }}>
                Fobia de înălțimi
              </h1>
              <p style={{ fontSize: 17, color: "var(--color-text-secondary)", marginBottom: 24 }}>
                Ghid complet 2026
              </p>
              <p style={{ fontSize: 15, color: "var(--color-text-secondary)", marginBottom: 32 }}>
                Ai nevoie de ajutor imediat? <Link href="#ce-poti-face-acum" style={{ color: "var(--color-secondary)", textDecoration: "underline", textUnderlineOffset: 3 }}>Mergi direct la Ce poți face acum</Link>
              </p>
              <p style={{ fontSize: 17, color: "var(--color-text)", lineHeight: 1.75, marginBottom: 16 }}>
                Ești pe balconul unui hotel. Al patrulea etaj. Te apropii de balustradă și pui mâinile pe ea. Și în acel moment, ceva se întâmplă. Picioarele se înmoaie. Stomacul se ridică. O amețeală bruscă te face să te dai înapoi. Și apoi vine gândul, cel pe care nu l-ai spus nimănui.. &quot;dacă sar?&quot;
              </p>
              <p style={{ fontSize: 17, color: "var(--color-text)", lineHeight: 1.75, marginBottom: 16 }}>
                Rușinea e imediată. Te întrebi ce e în neregulă cu tine. De ce ai gândi așa ceva. Te simți defect, periculos, nebun. Și din acel moment eviți balcoanele, etajele înalte, scările deschise, podurile, platformele de observație. Lumea ta se micșorează cu fiecare loc de care te ferești.
              </p>
              <p style={{ fontSize: 17, color: "var(--color-text)", lineHeight: 1.75 }}>
                <strong>Ești în locul potrivit.</strong> Ce trăiești se numește fobie de înălțimi (acrofobie). Amețeala e reală, gândul e explicabil, și totul se tratează. În acest ghid vei înțelege de ce corpul tău reacționează așa, ce vrea să spună acel gând, și ce funcționează ca tratament.
              </p>
            </div>

            {/* Illustration: person on edge with vertigo waves */}
            <div style={{ flexShrink: 0, width: 300 }} aria-hidden="true">
              <style>{`
                @keyframes fi-pulse{0%,100%{opacity:0.12;transform:scale(1)}50%{opacity:0.25;transform:scale(1.15)}}
                @keyframes fi-wave1{0%,100%{d:path("M40 200 Q80 192 120 200 Q160 208 200 200 Q240 192 260 200")}50%{d:path("M40 200 Q80 210 120 200 Q160 190 200 200 Q240 210 260 200")}}
                @keyframes fi-wave2{0%,100%{d:path("M50 220 Q90 214 130 220 Q170 226 210 220 Q250 214 270 220")}50%{d:path("M50 220 Q90 228 130 220 Q170 212 210 220 Q250 228 270 220")}}
                @keyframes fi-tremble{0%,100%{transform:translate(0,0)}25%{transform:translate(-0.4px,0.3px)}75%{transform:translate(0.4px,-0.3px)}}
                .fi-pulse{animation:fi-pulse 3s ease-in-out infinite}
                .fi-tremble{animation:fi-tremble 0.15s ease-in-out infinite}
              `}</style>
              <svg viewBox="0 0 300 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%" }}>
                {/* Background glow */}
                <circle cx="150" cy="140" r="120" fill="#5C7A6A" opacity="0.04" className="fi-pulse" />
                {/* Building edge / ledge */}
                <rect x="60" y="150" width="180" height="8" rx="2" fill="#1B2B4B" opacity="0.15" />
                <rect x="60" y="158" width="180" height="120" rx="0" fill="#1B2B4B" opacity="0.05" />
                {/* Railing */}
                <rect x="60" y="120" width="4" height="30" rx="1" fill="#1B2B4B" opacity="0.2" />
                <rect x="236" y="120" width="4" height="30" rx="1" fill="#1B2B4B" opacity="0.2" />
                <rect x="60" y="118" width="180" height="4" rx="1" fill="#1B2B4B" opacity="0.2" />
                {/* Person standing near edge, trembling */}
                <g className="fi-tremble" opacity="0.35">
                  {/* Head */}
                  <circle cx="150" cy="88" r="12" fill="#1B2B4B" />
                  {/* Body */}
                  <rect x="140" y="100" width="20" height="32" rx="4" fill="#1B2B4B" />
                  {/* Arms gripping railing */}
                  <path d="M140 108 L68 122" stroke="#1B2B4B" strokeWidth="4" strokeLinecap="round" />
                  <path d="M160 108 L232 122" stroke="#1B2B4B" strokeWidth="4" strokeLinecap="round" />
                  {/* Legs */}
                  <path d="M144 132 L140 150" stroke="#1B2B4B" strokeWidth="5" strokeLinecap="round" />
                  <path d="M156 132 L160 150" stroke="#1B2B4B" strokeWidth="5" strokeLinecap="round" />
                </g>
                {/* Vertigo waves below */}
                <path d="M40 200 Q80 192 120 200 Q160 208 200 200 Q240 192 260 200" stroke="#8B3A3A" strokeWidth="1" opacity="0.15" fill="none">
                  <animate attributeName="d" dur="2s" repeatCount="indefinite" values="M40 200 Q80 192 120 200 Q160 208 200 200 Q240 192 260 200;M40 200 Q80 210 120 200 Q160 190 200 200 Q240 210 260 200;M40 200 Q80 192 120 200 Q160 208 200 200 Q240 192 260 200" />
                </path>
                <path d="M50 220 Q90 214 130 220 Q170 226 210 220 Q250 214 270 220" stroke="#8B3A3A" strokeWidth="1" opacity="0.10" fill="none">
                  <animate attributeName="d" dur="2.5s" repeatCount="indefinite" values="M50 220 Q90 214 130 220 Q170 226 210 220 Q250 214 270 220;M50 220 Q90 228 130 220 Q170 212 210 220 Q250 228 270 220;M50 220 Q90 214 130 220 Q170 226 210 220 Q250 214 270 220" />
                </path>
                <path d="M60 240 Q100 234 140 240 Q180 246 220 240 Q250 234 270 240" stroke="#8B3A3A" strokeWidth="1" opacity="0.07" fill="none">
                  <animate attributeName="d" dur="3s" repeatCount="indefinite" values="M60 240 Q100 234 140 240 Q180 246 220 240 Q250 234 270 240;M60 240 Q100 248 140 240 Q180 232 220 240 Q250 248 270 240;M60 240 Q100 234 140 240 Q180 246 220 240 Q250 234 270 240" />
                </path>
                {/* Depth lines */}
                <line x1="80" y1="170" x2="75" y2="280" stroke="#1B2B4B" strokeWidth="0.5" opacity="0.08" />
                <line x1="150" y1="170" x2="150" y2="280" stroke="#1B2B4B" strokeWidth="0.5" opacity="0.08" />
                <line x1="220" y1="170" x2="225" y2="280" stroke="#1B2B4B" strokeWidth="0.5" opacity="0.08" />
                {/* Label */}
                <text x="150" y="305" textAnchor="middle" fill="#1B2B4B" opacity="0.4" style={{ fontSize: 11, fontFamily: "var(--font-body)" }}>amețeala care nu e imaginară</text>
              </svg>
            </div>
          </div>

          {/* TOC collapsible */}
          <div style={{ maxWidth: 760, margin: "32px auto 0" }}>
            <button
              onClick={() => setTocOpen(!tocOpen)}
              style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 15, fontWeight: 600, color: "var(--color-primary)", padding: 0 }}
            >
              Ce vei găsi aici
              <span style={{ transition: "transform 0.3s", transform: tocOpen ? "rotate(180deg)" : "none", color: "var(--color-text-secondary)" }}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </button>
            <div style={{ maxHeight: tocOpen ? 500 : 0, overflow: "hidden", transition: "max-height 0.3s ease-out" }}>
              <ul style={{ marginTop: 12, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6, fontSize: 15 }}>
                {[
                  { href: "#ce-este", label: "Ce este fobia de înălțimi" },
                  { href: "#ameteala", label: "Amețeala ta nu e imaginară" },
                  { href: "#gandul-intruziv", label: "Gândul pe care nu l-ai spus nimănui" },
                  { href: "#cum-arata", label: "Cum arată în viața reală" },
                  { href: "#cum-functioneaza", label: "Cum funcționează fobia" },
                  { href: "#perspectiva-psihodinamica", label: "Perspectiva psihodinamică" },
                  { href: "#tratament", label: "Tratament" },
                  { href: "#ce-poti-face-acum", label: "Ce poți face acum" },
                  { href: "#cand-merita-specialist", label: "Când merită un specialist" },
                  { href: "#intrebari-frecvente", label: "Întrebări frecvente" },
                ].map((item) => (
                  <li key={item.href}><Link href={item.href} style={{ color: "var(--color-secondary)", textDecoration: "underline", textUnderlineOffset: 3 }}>{item.label}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CE ESTE ── */}
      <section id="ce-este" style={{ background: "var(--color-background-white)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", marginBottom: 24 }}>
            Ce este fobia de înălțimi
          </h2>
          <p style={{ marginBottom: 16 }}>
            Fobia de înălțimi (acrofobie) este o frică intensă, persistentă și disproporționată față de situațiile care implică înălțime. Face parte din categoria fobiilor specifice de tip mediu natural și afectează aproximativ 3-5% din populație. Femeile sunt afectate de aproximativ două ori mai des decât bărbații.
          </p>
          <p style={{ marginBottom: 16 }}>
            Dar nu orice frică de înălțimi e fobie. Un grad de disconfort la înălțime e normal. E un mecanism de protecție pe care evoluția l-a instalat în creierul nostru. Strămoșii care nu se temeau deloc de prăpăstii aveau o problemă serioasă de supraviețuire.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 24, marginTop: 32 }}>
            Toată lumea se teme puțin de înălțimi
          </h3>

          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginBottom: 24 }}>
            <div style={{ flex: 1, minWidth: 280, background: "var(--color-background)", borderRadius: 12, padding: 28, border: "2px solid var(--color-secondary)" }}>
              <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-secondary)", fontWeight: 600, marginBottom: 12 }}>Frică normală</p>
              <p style={{ fontSize: 16, marginBottom: 12 }}>Stai pe marginea unei stânci și simți un fior. Te dai un pas înapoi.</p>
              <p style={{ fontSize: 16, fontWeight: 600, margin: 0 }}>Apoi continui drumul.</p>
            </div>
            <div style={{ flex: 1, minWidth: 280, background: "var(--color-background)", borderRadius: 12, padding: 28, border: "2px solid #8B3A3A" }}>
              <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", color: "#8B3A3A", fontWeight: 600, marginBottom: 12 }}>Fobie</p>
              <p style={{ fontSize: 16, marginBottom: 12 }}>Refuzi excursia pentru că traseul are un punct cu vedere panoramică.</p>
              <p style={{ fontSize: 16, marginBottom: 12 }}>Sau mergi, dar tremuri, transpiri și te agăți de cineva tot drumul.</p>
              <p style={{ fontSize: 16, fontWeight: 600, margin: 0 }}>Sau stai în mașină și aștepți pe ceilalți.</p>
            </div>
          </div>

          <div style={{ background: "var(--color-primary)", borderRadius: 12, padding: "24px 28px" }}>
            <p style={{ color: "#ffffff", fontSize: 16, lineHeight: 1.7, margin: 0 }}>
              Când înălțimea începe să-ți controleze deciziile, când refuzi locuințe, locuri de muncă, vacanțe sau experiențe din cauza ei, nu mai e prudență. E fobie. Și fobia e tratabilă.
            </p>
          </div>
        </div>
      </section>

      {/* ── AMEȚEALA — INTRO + CELE 3 SISTEME ── */}
      <section id="ameteala" style={{ background: "var(--color-background)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", marginBottom: 24 }}>
            Amețeala ta nu e imaginară
          </h2>
          <p style={{ marginBottom: 32 }}>
            Mulți oameni cred că amețeala pe care o simt la înălțime e &quot;doar în capul lor&quot;. Nu e. E un fenomen real, fiziologic, și are o explicație clară.
          </p>

          <p style={{ fontSize: 15, fontWeight: 600, color: "var(--color-primary)", marginBottom: 20 }}>
            Corpul tău menține echilibrul folosind trei sisteme. Când ele se contrazic, apare amețeala.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 32 }}>
            {[
              { icon: "👁️", name: "Ce văd ochii", normal: "Caută puncte de referință.. pereți, mobilier, podea.", inaltime: "La înălțime, punctele de referință sunt departe sau lipsesc. Ochii nu au pe ce se ancora." },
              { icon: "👂", name: "Ce simte urechea internă", normal: "Detectează mișcarea și poziția capului. Spune dacă ești stabil.", inaltime: "La înălțime funcționează normal, dar trimite informații care nu se potrivesc cu ce văd ochii." },
              { icon: "🦶", name: "Ce simt picioarele", normal: "Receptorii din tălpi simt suprafața solidă sub tine.", inaltime: "La înălțime suprafața e acolo, dar vizual pare că nu e nimic sub tine." },
            ].map((sys) => (
              <div key={sys.name} style={{ flex: "1 1 220px", background: "var(--color-background-white)", borderRadius: 12, padding: 24, border: "1px solid var(--color-border)" }}>
                <p style={{ fontSize: 28, marginBottom: 8 }}>{sys.icon}</p>
                <p style={{ fontWeight: 600, color: "var(--color-primary)", marginBottom: 10, fontSize: 17 }}>{sys.name}</p>
                <p style={{ fontSize: 15, marginBottom: 8 }}>{sys.normal}</p>
                <p style={{ fontSize: 15, color: "#8B3A3A", margin: 0 }}>{sys.inaltime}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "var(--color-primary)", borderRadius: 12, padding: "24px 28px" }}>
            <p style={{ color: "#ffffff", fontSize: 17, fontWeight: 500, lineHeight: 1.65, margin: 0 }}>
              Când cele trei sisteme trimit mesaje contradictorii, creierul primește un conflict pe care nu-l poate rezolva. Și acel conflict se simte ca amețeală. Nu e panică. Nu e slăbiciune. E un fenomen fiziologic real.
            </p>
          </div>
        </div>
      </section>

      {/* ── AMEȚEALA — NORMALĂ VS FOBIE ── */}
      <section style={{ background: "var(--color-background-white)", padding: "48px 24px 64px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 26, fontWeight: 400, color: "var(--color-primary)", marginBottom: 24 }}>
            Amețeală normală vs. fobie
          </h3>

          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginBottom: 24 }}>
            <div style={{ flex: 1, minWidth: 280, background: "var(--color-background)", borderRadius: 12, padding: 28, border: "1px solid var(--color-border)" }}>
              <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-secondary)", fontWeight: 600, marginBottom: 10 }}>Fără fobie</p>
              <p style={{ fontSize: 16, margin: 0 }}>Simți amețeala. Te dai un pas înapoi. Și gata. Continui ce făceai.</p>
            </div>
            <div style={{ flex: 1, minWidth: 280, background: "var(--color-background)", borderRadius: 12, padding: 28, border: "1px solid var(--color-border)" }}>
              <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", color: "#8B3A3A", fontWeight: 600, marginBottom: 10 }}>Cu fobie</p>
              <p style={{ fontSize: 16, margin: 0 }}>Simți amețeala și o interpretezi catastrofic: &quot;O să cad. O să leșin. O să pierd controlul.&quot; Interpretarea declanșează anxietatea, care amplifică amețeala, care confirmă interpretarea.</p>
            </div>
          </div>

          <div style={{ background: "var(--color-background)", borderRadius: 12, padding: "20px 28px", borderLeft: "3px solid var(--color-secondary)" }}>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7 }}>
              Amețeala la înălțime e normală. Interpretarea amețelii e cea care face diferența între disconfort și fobie.
            </p>
          </div>
        </div>
      </section>

      {/* ── GÂNDUL INTRUZIV ── */}
      <section id="gandul-intruziv" style={{ background: "var(--color-background-white)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", marginBottom: 24 }}>
            Gândul pe care nu l-ai spus nimănui
          </h2>
          <p style={{ marginBottom: 16 }}>
            Ești pe un balcon, pe un pod sau pe marginea unei stânci. Și brusc, apare gândul: &quot;Dacă sar?&quot;
          </p>
          <p style={{ marginBottom: 16 }}>
            Nu l-ai chemat. Nu l-ai vrut. Dar e acolo, clar și intens. Și te sperie mai tare decât înălțimea în sine. Te întrebi dacă ești periculos. Dacă o parte din tine vrea cu adevărat să sară. Dacă ești suicidar fără să știi.
          </p>
          <p style={{ marginBottom: 16 }}>
            Fenomenul are un nume: <strong>chemarea vidului</strong> (în franceză, <em>l&apos;appel du vide</em>). Și nu e un semn că ceva e în neregulă cu tine. E exact opusul.
          </p>
          <p style={{ marginBottom: 16 }}>
            Cercetările arată că peste 50% dintre oameni au acest gând la înălțime, inclusiv cei fără nicio problemă psihică și fără nicio tendință suicidară. Un studiu publicat în <em>Journal of Affective Disorders</em> a constatat că experiența e chiar mai frecventă la persoanele cu sensibilitate anxioasă ridicată, nu la cele cu ideație suicidară.
          </p>
          <p style={{ marginBottom: 24 }}>
            Ce se întâmplă de fapt: creierul tău detectează pericolul (marginea, golul) și trimite un semnal rapid de retragere.. &quot;Dă-te înapoi!&quot;. Dar partea conștientă, care procesează mai lent, primește semnalul cu o fracțiune de secundă întârziere. Și în acea fracțiune, creierul caută o explicație pentru impulsul de retragere. Explicația pe care o găsește e: &quot;Trebuie că am vrut să sar, de aceea m-am retras.&quot; Logica e inversată, dar creierul o acceptă.
          </p>

          <div style={{ background: "var(--color-secondary)", borderRadius: 12, padding: "28px 32px" }}>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.75, color: "#ffffff", fontWeight: 500 }}>
              Nu ești periculos. Ai un creier care își face treaba prea bine. Gândul &quot;dacă sar&quot; nu e o dorință. E un semnal de protecție interpretat greșit. Și cu cât îl ții secret și te rușinezi de el, cu atât pare mai amenințător.
            </p>
          </div>
        </div>
      </section>

      {/* ── CUM ARATĂ ÎN VIAȚA REALĂ ── */}
      <section id="cum-arata" style={{ background: "var(--color-background)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", marginBottom: 24 }}>
            Cum arată în viața reală
          </h2>
          <p style={{ marginBottom: 32 }}>
            Fobia de înălțimi nu e doar ce simți pe un balcon. E tot ce faci ca să nu ajungi acolo. Iată cinci zone pe care le afectează cel mai des:
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
            {[
              {
                title: "Apartamentul",
                text: "Refuzi orice locuință peste etajul 2. Sau accepți, dar nu ieși niciodată pe balcon. Balconul devine un spațiu mort, cu ușa permanent închisă. Vizitatorii se întreabă de ce nu profiți de vedere. Tu știi de ce.",
              },
              {
                title: "Vacanțele",
                text: "Nicio cameră cu vedere panoramică. Nicio excursie cu traseu montan. Niciun restaurant la etaj. Planifici totul în funcție de înălțime, nu de ce-ți dorești de fapt. Și nimeni nu știe că asta e criteriul principal.",
              },
              {
                title: "Orașul",
                text: "Eviți pasarelele, podurile pietonale, parcările supraetajate. Urci pe scări doar dacă sunt închise. Escalatoarele deschise din mall-uri îți produc amețeală. Cladirile cu pereți de sticlă și etaje vizibile te fac să te simți instabil.",
              },
              {
                title: "Copiii",
                text: "Balconul e încuiat permanent. Nu-i lași să se apropie de margini. Parcurile cu structuri de cățărat devin un coșmar. Și cea mai grea parte: începi să le transmiți frica ta, fără să vrei.",
              },
              {
                title: "Cariera",
                text: "Refuzi biroul de la etajul 15. Inventezi scuze pentru team-building-ul de la munte. Nu poți lucra pe șantiere, în telecomunicații, în orice domeniu care implică înălțime. Uneori cariera e limitată de o frică despre care nu vorbești la interviuri.",
              },
            ].map((card) => (
              <div key={card.title} style={{ flex: "1 1 320px", background: "var(--color-background-white)", borderRadius: 12, padding: 28, border: "1px solid var(--color-border)" }}>
                <p style={{ fontWeight: 600, fontSize: 18, color: "var(--color-primary)", marginBottom: 10 }}>{card.title}</p>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--color-text)" }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUM FUNCȚIONEAZĂ ── */}
      <section id="cum-functioneaza" style={{ background: "var(--color-background-white)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", marginBottom: 24 }}>
            Cum funcționează fobia de înălțimi
          </h2>
          <p style={{ marginBottom: 16 }}>
            Fobia nu e despre înălțime. E despre ce crede creierul tău că se va întâmpla acolo. Și odată ce cercul vicios pornește, se auto-alimentează:
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16, marginTop: 32 }}>
            Cercul vicios
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 32, background: "var(--color-background)", borderRadius: 12, padding: 24, border: "1px solid var(--color-border)" }}>
            {[
              { step: "1", text: "Te apropii de o situație cu înălțime (balcon, pod, etaj înalt)" },
              { step: "2", text: "Apare amețeala (conflictul senzorial real)" },
              { step: "3", text: "Interpretezi catastrofic: \"O să cad. O să leșin. O să pierd controlul.\"" },
              { step: "4", text: "Anxietatea crește rapid: inimă, transpirație, tremur, respirație" },
              { step: "5", text: "Senzațiile fizice amplifică amețeala (confirmă \"dovada\" că ești în pericol)" },
              { step: "6", text: "Te retragi sau eviți complet" },
              { step: "7", text: "Anxietatea scade imediat. Creierul învață: \"Evitarea m-a salvat.\"" },
            ].map((s) => (
              <div key={s.step} style={{ display: "flex", gap: 16, padding: "12px 0", borderBottom: s.step === "7" ? "none" : "1px solid var(--color-border)" }}>
                <div style={{ flexShrink: 0, width: 32, height: 32, borderRadius: "50%", background: "var(--color-primary)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, fontFamily: "var(--font-heading)" }}>
                  {s.step}
                </div>
                <p style={{ margin: 0, paddingTop: 4, color: "var(--color-text)", fontSize: 16, lineHeight: 1.6 }}>{s.text}</p>
              </div>
            ))}
          </div>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            Comportamente de siguranță
          </h3>
          <p style={{ marginBottom: 16 }}>
            Pe lângă evitare, fobia creează o rețea de comportamente de siguranță, lucruri pe care le faci &quot;ca să faci față&quot; dar care mențin fobia activă:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 32 }}>
            {[
              "Te ții de balustradă cu ambele mâini",
              "Nu te uiți niciodată în jos",
              "Mergi lipit de perete, departe de margine",
              "Stai pe vine sau te apleci spre interior",
              "Respiri controlat, numeri pașii",
              "Te concentrezi pe telefon ca să nu te gândești",
              "Mergi doar dacă te ține cineva de mână",
              "Eviți geamurile mari la etaje înalte",
              "Închizi jaluzelele la hotel",
              "Refuzi scările deschise sau escalatoarele",
            ].map((s) => (
              <span key={s} style={{ display: "inline-block", padding: "10px 18px", background: "var(--color-background)", borderRadius: 8, fontSize: 15, color: "var(--color-text)", border: "1px solid var(--color-border)" }}>{s}</span>
            ))}
          </div>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            Expansiunea
          </h3>
          <p style={{ marginBottom: 16 }}>
            Fără tratament, fobia de înălțimi tinde să se extindă. La început e doar despre balcoane. Apoi despre poduri. Apoi despre etajele de la mall. Apoi despre scările deschise. Apoi despre escalatoarele cu vedere în jos. Fiecare evitare reușită confirmă creierului că a avut dreptate, și el adaugă noi situații pe lista de pericole.
          </p>
          <p>
            La unii oameni, expansiunea ajunge atât de departe încât evită orice clădire cu mai mult de două etaje, orice drum de munte, orice pod, orice loc de unde se vede în jos. Lumea se micșorează constant, iar persoana abia observă, pentru că fiecare renunțare pare mică și rezonabilă în momentul în care o face.
          </p>
        </div>
      </section>

      {/* ── PERSPECTIVA PSIHODINAMICĂ ── */}
      <section id="perspectiva-psihodinamica" style={{ background: "var(--color-primary)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "#ffffff", marginBottom: 24 }}>
            Când înălțimea nu e despre înălțime
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 16 }}>
            Glen Gabbard, unul dintre cei mai importanți psihiatri psihodinamici, observă un pattern interesant la pacienții cu fobie de înălțimi: pentru mulți, înălțimea simbolizează altceva. Distanța. Căderea. Pierderea.
          </p>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 16 }}>
            Înălțimea înseamnă distanță față de sol, de siguranță, de ceea ce e familiar. Pentru unele persoane, această distanță rezonează cu o experiență internă.. de a fi departe de ceva sau cineva de care depind, de a fi &quot;suspendat&quot; fără sprijin, de a nu avea pe ce te baza.
          </p>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 16 }}>
            Căderea, la rândul ei, nu e doar fizică. Căderea poate fi eșec, pierderea statutului, prăbușirea a ceva construit cu grijă. Unii oameni dezvoltă fobia de înălțimi tocmai în perioade în care simt că &quot;pot cădea&quot; din altceva.. dintr-o relație, dintr-o carieră, din propria imagine de sine.
          </p>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 32 }}>
            Freud nota ceva profund: atunci când un pericol intern devine intolerabil, mintea îl mută pe un obiect extern. E mai ușor să-ți fie frică de un balcon decât de faptul că relația ta se destramă. E mai ușor să eviți etajele înalte decât să admiți că te simți nesigur în propria viață.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "rgba(255,255,255,0.95)", marginBottom: 12 }}>
            Ce înseamnă asta pentru tine
          </h3>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 16 }}>
            Nu înseamnă că fobia ta &quot;nu e reală&quot; sau că e &quot;doar simbolică&quot;. Fobia e reală, amețeala e reală, suferința e reală. Dar merită să te întrebi: ce se întâmpla în viața mea când a apărut sau s-a agravat? Mă simt nesigur undeva? Am pierdut un sprijin important?
          </p>
          <p style={{ color: "rgba(255,255,255,0.85)" }}>
            Perspectiva psihodinamică nu înlocuiește expunerea. O completează. Uneori, fobia se tratează mai repede când înțelegi nu doar mecanismul, ci și semnificația ei.
          </p>
        </div>
      </section>

      {/* ── TRATAMENT: EXPUNERE ── */}
      <section id="tratament" style={{ background: "var(--color-background-white)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", marginBottom: 24 }}>
            Tratament
          </h2>
          <p style={{ marginBottom: 16 }}>
            Fobia de înălțimi se tratează prin expunere terapeutică, nu prin medicamente. Principiul e simplu: rămâi în situația temută suficient de mult încât creierul să învețe că nu se întâmplă nimic rău. Anxietatea atinge un vârf, apoi scade de la sine. Iar această experiență de &quot;am rămas și nu s-a întâmplat nimic&quot; e cea care rescrie fobia.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16, marginTop: 32 }}>
            Ierarhia de expunere
          </h3>
          <p style={{ marginBottom: 16 }}>
            Nu sari direct pe balconul de la etajul 10. Tratamentul e treptat, calibrat, și tu controlezi fiecare pas:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 32, background: "var(--color-background)", borderRadius: 12, padding: 24, border: "1px solid var(--color-border)" }}>
            {[
              { level: "Ușor", color: "var(--color-secondary)", steps: [
                "Fotografii și video-uri cu peisaje de la înălțime",
                "Privit pe geam de la etajul 2",
              ]},
              { level: "Mediu", color: "#C4873B", steps: [
                "Balcon la etajul 3, cu balustradă solidă",
                "Pod pietonal, cu oprire la mijloc",
                "Balcon la etajul 5, apropiere treptată de margine",
              ]},
              { level: "Greu", color: "#8B3A3A", steps: [
                "Platformă de observație deschisă",
                "Balcon la etajul 8-10, privit în jos",
                "Podea de sticlă (CN Tower, Skydecks)",
              ]},
            ].map((group) => (
              <div key={group.level} style={{ marginBottom: 20 }}>
                <div style={{ display: "inline-block", padding: "4px 14px", borderRadius: 6, background: group.color, color: "#fff", fontSize: 13, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 12 }}>
                  {group.level}
                </div>
                <ol style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                  {group.steps.map((s, i) => (
                    <li key={i} style={{ fontSize: 16, color: "var(--color-text)" }}>{s}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
          <p style={{ marginBottom: 16 }}>
            La fiecare treaptă, rămâi în situație până când anxietatea scade de la sine. Nu pleci la primul semn de disconfort. Stai. Și descoperi ceva pe care evitarea nu te lasă niciodată să descoperi: frica are un vârf, iar după vârf, coboară.
          </p>
        </div>
      </section>

      {/* ── TRATAMENT: EXPUNERE INTEROCEPTIVĂ + VR + STATS ── */}
      <section style={{ background: "var(--color-background)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            Expunerea interoceptivă (antrenamentul de amețeală)
          </h3>
          <p style={{ marginBottom: 16 }}>
            O componentă unică a tratamentului fobiei de înălțimi. Amețeala e unul dintre simptomele cele mai temute, și mulți oameni o interpretează ca semn de pericol iminent.. &quot;O să leșin. O să cad.&quot;
          </p>
          <p style={{ marginBottom: 16 }}>
            Expunerea interoceptivă înseamnă să produci amețeala intenționat, în condiții controlate. Te rotești pe scaun. Stai cu capul în jos și te ridici rapid. Te uiți la un punct fix și întorci capul brusc. Scopul: creierul tău învață că amețeala nu e periculoasă. Nu duce la leșin. Nu duce la cădere. E doar o senzație neplăcută care trece.
          </p>
          <p style={{ marginBottom: 32 }}>
            Când amețeala nu mai e interpretată ca pericol, unul dintre cele mai puternice motoare ale fobiei se oprește.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            Realitatea virtuală
          </h3>
          <p style={{ marginBottom: 16 }}>
            VR-ul oferă un pas intermediar valoros. Cu un set de ochelari, poți &quot;sta&quot; pe balconul de la etajul 20, pe o platformă de observație sau pe marginea unei stânci, totul fără să pleci din cabinetul terapeutului.
          </p>
          <p style={{ marginBottom: 32 }}>
            Studiile arată rezultate comparabile cu expunerea reală. Avantajul: poți repeta aceeași situație de zeci de ori, poți controla intensitatea, și poți opri oricând. E deosebit de util pentru persoanele care refuză complet să se expună la înălțimi reale.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            Ce spun datele
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            {[
              { stat: "80-95%", label: "pacienți cu îmbunătățiri semnificative" },
              { stat: "4-12", label: "ședințe de tratament" },
              { stat: "75-90%", label: "succes într-o singură sesiune prelungită" },
            ].map((d) => (
              <div key={d.stat} style={{ flex: "1 1 160px", background: "var(--color-background-white)", borderRadius: 12, padding: "20px 24px", border: "1px solid var(--color-border)", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-heading)", fontSize: 28, fontWeight: 400, color: "var(--color-secondary)", marginBottom: 4 }}>{d.stat}</p>
                <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.4 }}>{d.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CE POȚI FACE ACUM ── */}
      <section id="ce-poti-face-acum" style={{ background: "var(--color-background-white)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", marginBottom: 8 }}>
            Ce poți face acum
          </h2>
          <p style={{ color: "var(--color-text)", marginBottom: 32 }}>
            Nu trebuie să aștepți o programare la psiholog ca să începi.
          </p>

          {[
            {
              nr: "1",
              title: "Grounding (ancorarea în corp)",
              text: "Data viitoare când simți amețeală la înălțime, nu fugi. Pune picioarele ferm pe podea. Simte contactul tălpilor cu suprafața. Apasă degetele de la picioare în jos. Privește un punct fix la nivelul ochilor, nu în jos. Respiră lent: 4 secunde inspirație, 6 secunde expirație. Amețeala nu dispare instant, dar se stabilizează. Scopul nu e să elimini senzația, ci să descoperi că poți rămâne cu ea.",
            },
            {
              nr: "2",
              title: "Testează predicțiile",
              text: "Fobia funcționează pe predicții catastrofice: \"Dacă mă uit în jos, o să leșin.\" \"Dacă stau pe balcon, o să cad.\" Scrie predicția pe hârtie. Apoi testează-o, treptat. Uită-te pe geam de la etajul 2. Ai leșinat? Nu. Stai pe balconul de la etajul 1 pentru 30 de secunde. Ai căzut? Nu. Fiecare predicție infirmată slăbește fobia. Nu trebuie să sari la etajul 10. Începe cu ceea ce simți că e la limita suportabilului, nu dincolo de ea.",
            },
            {
              nr: "3",
              title: "Scannerul de siguranță",
              text: "Când ești într-o situație cu înălțime și simți panică, oprește-te și fă un inventar concret: \"Balustrada e solidă? Da. Podeaua e stabilă? Da. Am spațiu suficient? Da. Alți oameni stau aici fără probleme? Da.\" Nu încerci să te convingi că e sigur. Verifici, concret, element cu element. E o diferență importantă. Convingerea nu funcționează. Verificarea, da.",
            },
          ].map((ex) => (
            <div key={ex.nr} style={{ display: "flex", gap: 20, marginBottom: 20, padding: "20px 24px", background: "var(--color-background)", borderRadius: 12 }}>
              <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: "50%", background: "var(--color-secondary)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 17 }}>
                {ex.nr}
              </div>
              <div>
                <p style={{ fontWeight: 600, color: "var(--color-primary)", marginBottom: 8, fontSize: 18 }}>{ex.title}</p>
                <p style={{ color: "var(--color-text)", fontSize: 16, lineHeight: 1.7 }}>{ex.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CÂND MERITĂ UN SPECIALIST ── */}
      <section id="cand-merita-specialist" style={{ background: "var(--color-background)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", marginBottom: 12 }}>
            Când merită să cauți un specialist
          </h2>
          <p style={{ marginBottom: 32 }}>
            Exercițiile de mai sus sunt un punct de pornire. Dar un terapeut poate face diferența prin:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
            {[
              { icon: "🗺️", text: "Ierarhie de expunere personalizată, calibrată pe situațiile care contează pentru tine" },
              { icon: "🪜", text: "Trepte ghidate de expunere, cu suport profesional la fiecare pas" },
              { icon: "🔍", text: "Identificarea comportamentelor de siguranță pe care le folosești fără să realizezi" },
              { icon: "💫", text: "Expunere interoceptivă structurată, antrenamentul de amețeală care dezactivează interpretarea catastrofică" },
              { icon: "🔑", text: "Explorarea stratului mai profund.. ce înseamnă înălțimea pentru tine, dincolo de balcon" },
            ].map((item) => (
              <div key={item.icon} style={{ display: "flex", gap: 16, padding: "18px 24px", background: "var(--color-background-white)", borderRadius: 12, border: "1px solid var(--color-border)", alignItems: "center" }}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
                <p style={{ margin: 0, fontSize: 16, color: "var(--color-text)" }}>{item.text}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "var(--color-background-white)", borderRadius: 12, padding: "20px 24px", borderLeft: "3px solid var(--color-secondary)", marginBottom: 40 }}>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: "var(--color-text)" }}>
              <strong>Notă:</strong> fobia de înălțimi apare frecvent în combinație cu <Link href="/tipuri/fobii-specifice/claustrofobie" style={{ color: "var(--color-secondary)", textDecoration: "underline", textUnderlineOffset: 3 }}>claustrofobia</Link>. Mulți oameni se tem atât de spații deschise la înălțime cât și de spații închise. Dacă te recunoști, un terapeut poate lucra pe ambele simultan.
            </p>
          </div>

          <div style={{ background: "var(--color-primary)", borderRadius: 16, padding: "40px 32px", textAlign: "center" }}>
            <p style={{ color: "#ffffff", fontSize: 20, fontWeight: 500, marginBottom: 8, fontFamily: "var(--font-heading)" }}>
              Fobia de înălțimi răspunde excelent la tratament.
            </p>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, marginBottom: 28, maxWidth: 480, margin: "0 auto 28px" }}>
              Nu e ceva cu care &quot;trebuie să trăiești&quot;. E ceva ce se tratează.
            </p>
            <Link
              href="/programare?din=fobie-de-inaltime"
              style={{ display: "inline-block", padding: "16px 40px", background: "var(--color-secondary)", color: "#ffffff", borderRadius: 8, fontWeight: 600, fontSize: 17, textDecoration: "none", transition: "opacity 0.2s" }}
            >
              Programează o consultație
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="intrebari-frecvente" style={{ background: "var(--color-background-white)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", marginBottom: 24 }}>
            Întrebări frecvente
          </h2>

          <FAQ q="E normal să ți se facă rău la înălțime?">
            <p style={{ marginBottom: 8 }}>Da. Un grad de disconfort la înălțime e normal și protectiv. E un mecanism de supraviețuire pe care evoluția l-a instalat în creierul nostru. Strămoșii care nu se temeau deloc de prăpăstii nu au apucat să devină strămoși.</p>
            <p style={{ marginBottom: 8 }}>Diferența între frica normală și fobie e de intensitate, durată și impact. Frica normală: simți un fior, te dai un pas înapoi, continui. Fobia: eviți complet situația, planifici totul în funcție de înălțime, renunți la experiențe importante.</p>
            <p>Când înălțimea începe să-ți controleze deciziile și să-ți restrângă viața, nu mai e doar prudență. E fobie. Și fobia e tratabilă.</p>
          </FAQ>

          <FAQ q="Gândul &quot;voi sări&quot; înseamnă că sunt suicidar?">
            <p style={{ marginBottom: 8 }}>Nu. Acest gând se numește chemarea vidului (l&apos;appel du vide) și apare la peste 50% din oameni, inclusiv la cei fără nicio problemă psihică și fără nicio tendință suicidară.</p>
            <p style={{ marginBottom: 8 }}>E un artefact al modului în care creierul procesează pericolul. Detectează marginea, trimite un semnal de retragere, iar partea conștientă interpretează greșit impulsul ca pe o dorință. Logica e inversată, dar fenomenul e universal.</p>
            <p>Dacă gândul te sperie, asta e de fapt dovada că NU vrei să sari. Persoanele cu risc suicidar real nu se sperie de acest gând. Sperierea e semnul că valorile tale sunt intacte.</p>
          </FAQ>

          <FAQ q="Se agravează cu vârsta?">
            <p style={{ marginBottom: 8 }}>Poate. Fără tratament, fobia de înălțimi tinde să se extindă treptat. Situații care înainte erau tolerabile devin intolerabile. Lista locurilor evitate crește. Lumea se micșorează ușor, de la an la an, fără ca persoana să observe cât de mult a renunțat.</p>
            <p style={{ marginBottom: 8 }}>În plus, odată cu vârsta, echilibrul fizic scade natural, ceea ce poate amplifica amețeala reală la înălțime și poate hrăni fobia.</p>
            <p>Vestea bună: tratamentul funcționează la orice vârstă. Expunerea terapeutică are rate de succes de 80-95% indiferent de cât timp a durat fobia. Nu e &quot;prea târziu&quot;.</p>
          </FAQ>

          <FAQ q="Vertijul e același lucru cu fobia de înălțimi?">
            <p style={{ marginBottom: 8 }}>Nu. Vertijul e o senzație de rotire sau instabilitate care poate avea cauze medicale: probleme ale urechii interne, tensiune arterială, disfuncții vestibulare. Apare indiferent de context, nu doar la înălțime.</p>
            <p style={{ marginBottom: 8 }}>Fobia de înălțimi produce amețeală prin conflict senzorial (ochii, urechea internă și mușchii trimit informații contradictorii), nu prin disfuncție medicală. Amețeala apare doar în situații legate de înălțime și dispare când te îndepărtezi.</p>
            <p>Dacă ai amețeli și în alte situații (când te ridici brusc, în spații închise, fără legătură cu înălțimea), merită un consult ORL ca să excludi cauzele medicale. Un diagnostic corect e important pentru tratamentul corect.</p>
          </FAQ>

          <FAQ q="Pot scăpa complet de fobia de înălțimi?">
            <p style={{ marginBottom: 8 }}>Da. Expunerea terapeutică are o rată de succes de 80-95% pentru fobiile specifice. Majoritatea pacienților ajung să funcționeze normal în situații care înainte păreau imposibile.</p>
            <p style={{ marginBottom: 8 }}>&quot;Complet&quot; nu înseamnă că nu vei mai simți niciodată nimic la înălțime. Un grad de precauție e sănătos și normal. Înseamnă că înălțimea nu-ți mai controlează viața, nu mai eviți, nu mai planifici totul în funcție de ea, și poți face lucrurile care contează pentru tine fără ca frica să decidă în locul tău.</p>
            <p>Tratamentul durează de obicei 4-12 ședințe. Unele cercetări arată rezultate excelente chiar și după o singură sesiune prelungită de expunere (75-90% succes). Nu e un proces lung sau complicat. E unul dintre cele mai bine studiate și mai eficiente tratamente din psihologie.</p>
          </FAQ>
        </div>
      </section>

      {/* ── NAVIGARE ── */}
      <section style={{ background: "var(--color-background-white)", padding: "48px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 400, color: "var(--color-primary)", marginBottom: 20 }}>
            Continuă să citești
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {[
              { href: "/tipuri/fobii-specifice", label: "Fobii Specifice .. Ghid Complet" },
              { href: "/tipuri/fobii-specifice/claustrofobie", label: "Claustrofobie" },
              { href: "/tipuri/fobii-specifice/fobie-de-animale", label: "Fobia de animale" },
              { href: "/tipuri/fobii-specifice/fobie-de-sange", label: "Fobia de sânge și ace" },
              { href: "/tipuri/fobii-specifice/fobie-de-zbor", label: "Fobia de zbor" },
              { href: "/tipuri/atac-de-panica", label: "Atacul de panică" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ display: "inline-block", padding: "10px 20px", borderRadius: 8, border: "1px solid var(--color-border)", color: "var(--color-primary)", fontSize: 15, fontWeight: 500, textDecoration: "none", transition: "background 0.2s" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SURSE BIBLIOGRAFICE ── */}
      <section style={{ background: "var(--color-background)", padding: "48px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <button
            onClick={() => setRefsOpen(!refsOpen)}
            style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-heading)", fontSize: 18, fontWeight: 400, color: "var(--color-primary)", padding: 0 }}
          >
            Surse bibliografice
            <span style={{ transition: "transform 0.3s", transform: refsOpen ? "rotate(180deg)" : "none", color: "var(--color-text-secondary)" }}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </button>
          <div style={{ maxHeight: refsOpen ? 800 : 0, overflow: "hidden", transition: "max-height 0.4s ease-out" }}>
            <ul style={{ marginTop: 16, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8, fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
              <li>Antony, M. M., Craske, M. G., &amp; Barlow, D. H. (2006). <em>Mastering Your Fears and Phobias: Therapist Guide</em> (2nd ed.). Oxford University Press.</li>
              <li>Brandt, T., Arnold, F., Bles, W., &amp; Kapteyn, T. S. (1980). The mechanism of physiological height vertigo. <em>Acta Otolaryngologica, 89</em>(5-6), 534-540.</li>
              <li>Huppert, D., Grill, E., &amp; Brandt, T. (2017). A new questionnaire for estimating the severity of visual height intolerance and acrophobia. <em>Frontiers in Neurology, 8</em>, 211.</li>
              <li>Hames, J. L., Ribeiro, J. D., Smith, A. R., &amp; Joiner, T. E. (2012). An urge to jump affirms the urge to live. <em>Journal of Affective Disorders, 136</em>(3), 1114-1120.</li>
              <li>Gabbard, G. O. (2007). <em>Tratat de Psihiatrie Psihodinamică</em>. Editura Trei.</li>
              <li>Freud, S. (1926). <em>Inhibitions, Symptoms and Anxiety</em>. Standard Edition, Vol. 20.</li>
              <li>Rothbaum, B. O., et al. (1995). Effectiveness of computer-generated (virtual reality) graded exposure in the treatment of acrophobia. <em>American Journal of Psychiatry, 152</em>(4), 626-628.</li>
              <li>Craske, M. G., Treanor, M., Conway, C. C., Zbozinek, T., &amp; Vervliet, B. (2014). Maximizing exposure therapy: An inhibitory learning approach. <em>Behaviour Research and Therapy, 58</em>, 10-23.</li>
              <li>&Ouml;st, L. G. (1989). One-session treatment for specific phobias. <em>Behaviour Research and Therapy, 27</em>(1), 1-7.</li>
            </ul>
          </div>
        </div>
      </section>

    </main>
  );
}
