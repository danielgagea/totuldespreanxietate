"use client";

import Link from "next/link";
import { useState } from "react";

/* ============================================================
   TOC (Tulburarea Obsesiv-Compulsivă) — Pagină completă
   Design: CSS variables, pattern fobii-specifice
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

export default function TOCPage() {
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
                <Link href="/tipuri" style={{ color: "var(--color-text-secondary)", textDecoration: "underline", textUnderlineOffset: 3 }}>
                  Tipuri
                </Link>
                <span aria-hidden="true">&rarr;</span>
                <span style={{ color: "var(--color-text)" }}>TOC</span>
              </nav>

              <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--color-text-secondary)", marginBottom: 24 }}>
                De Daniel Gagea, psiholog clinician, psihoterapeut
              </p>
              <h1 style={{ fontFamily: "var(--font-heading)", fontSize: 38, fontWeight: 400, color: "var(--color-primary)", lineHeight: 1.25, marginBottom: 16 }}>
                Tulburarea Obsesiv-Compulsivă (TOC)
              </h1>
              <p style={{ fontSize: 17, color: "var(--color-text-secondary)", marginBottom: 24 }}>
                Ghid complet 2026
              </p>
              <p style={{ fontSize: 15, color: "var(--color-text-secondary)", marginBottom: 32 }}>
                Ești prins într-un ritual care nu se mai termină? <Link href="#ce-poti-face-acum" style={{ color: "var(--color-secondary)", textDecoration: "underline", textUnderlineOffset: 3 }}>Mergi direct la Ce poți face acum</Link>
              </p>
              <p style={{ fontSize: 17, color: "var(--color-text)", lineHeight: 1.75, marginBottom: 16 }}>
                Gândul apare din senin. Poate e o imagine. Poate e o frază. Poate e un impuls pe care nu l-ai cerut și nu l-ai vrut. &quot;Ce-ar fi dacă am lăsat aragazul aprins?&quot; &quot;Ce-ar fi dacă fac rău cuiva?&quot; &quot;Ce-ar fi dacă ating ceva contaminat?&quot;
              </p>
              <p style={{ fontSize: 17, color: "var(--color-text)", lineHeight: 1.75, marginBottom: 16 }}>
                Și știi că nu are sens. Știi că ai verificat deja. Știi că gândul e absurd. Dar corpul tău nu a primit mesajul. Tensiunea crește. Neliniștea nu trece. Și faci singurul lucru care pare că ajută.. verifici încă o dată. Speli încă o dată. Repeți în minte încă o dată.
              </p>
              <p style={{ fontSize: 17, color: "var(--color-text)", lineHeight: 1.75, marginBottom: 16 }}>
                Și funcționează. Timp de 30 de secunde. Poate un minut. Apoi gândul revine. Mai tare. Mai insistent. Și ciclul o ia de la capăt.
              </p>
              <p style={{ fontSize: 17, color: "var(--color-text)", lineHeight: 1.75 }}>
                <strong>Dacă te recunoști, nu ești nebun și nu pierzi controlul.</strong> Ce trăiești seamănă foarte mult cu ceea ce se numește TOC. Și în acest ghid vei înțelege exact de ce se întâmplă asta, de ce ritualurile nu funcționează, și ce funcționează în schimb.
              </p>
            </div>

            {/* Illustration - cycle/loop motif */}
            <div style={{ flexShrink: 0, width: 300 }} aria-hidden="true">
              <style>{`
                @keyframes cl-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
                @keyframes cl-pulse{0%,100%{opacity:0.15;transform:scale(1)}50%{opacity:0.3;transform:scale(1.06)}}
                .cl-spin{animation:cl-spin 12s linear infinite}
                .cl-pulse{animation:cl-pulse 3s ease-in-out infinite}
              `}</style>
              <svg viewBox="0 0 300 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%" }}>
                {/* Background pulse */}
                <circle cx="150" cy="155" r="130" fill="#5C7A6A" opacity="0.04" className="cl-pulse" />

                {/* Person silhouette */}
                <circle cx="150" cy="120" r="22" fill="#1B2B4B" opacity="0.3" />
                <path d="M128 155 Q150 145 172 155 L168 215 Q150 225 132 215 Z" fill="#1B2B4B" opacity="0.2" />

                {/* Rotating cycle arrows */}
                <g className="cl-spin" style={{ transformOrigin: "150px 155px" }}>
                  {/* Outer circle path */}
                  <path d="M150 60 A95 95 0 0 1 245 155" stroke="#1B2B4B" strokeWidth="2" opacity="0.15" fill="none" />
                  <path d="M245 155 A95 95 0 0 1 150 250" stroke="#1B2B4B" strokeWidth="2" opacity="0.15" fill="none" />
                  <path d="M150 250 A95 95 0 0 1 55 155" stroke="#1B2B4B" strokeWidth="2" opacity="0.15" fill="none" />
                  <path d="M55 155 A95 95 0 0 1 150 60" stroke="#1B2B4B" strokeWidth="2" opacity="0.15" fill="none" />
                  {/* Arrow heads */}
                  <polygon points="245,155 235,148 235,162" fill="#1B2B4B" opacity="0.2" />
                  <polygon points="150,250 143,240 157,240" fill="#1B2B4B" opacity="0.2" />
                  <polygon points="55,155 65,148 65,162" fill="#1B2B4B" opacity="0.2" />
                  <polygon points="150,60 143,70 157,70" fill="#1B2B4B" opacity="0.2" />
                </g>

                {/* Inner rotating arrows (opposite direction) */}
                <g className="cl-spin" style={{ transformOrigin: "150px 155px", animationDirection: "reverse", animationDuration: "8s" }}>
                  <path d="M150 100 A55 55 0 0 1 205 155" stroke="#5C7A6A" strokeWidth="1.5" opacity="0.12" fill="none" strokeDasharray="6 4" />
                  <path d="M205 155 A55 55 0 0 1 150 210" stroke="#5C7A6A" strokeWidth="1.5" opacity="0.12" fill="none" strokeDasharray="6 4" />
                  <path d="M150 210 A55 55 0 0 1 95 155" stroke="#5C7A6A" strokeWidth="1.5" opacity="0.12" fill="none" strokeDasharray="6 4" />
                  <path d="M95 155 A55 55 0 0 1 150 100" stroke="#5C7A6A" strokeWidth="1.5" opacity="0.12" fill="none" strokeDasharray="6 4" />
                </g>

                {/* Thought bubble dots */}
                <circle cx="170" cy="100" r="4" fill="#8B3A3A" opacity="0.2" className="cl-pulse" />
                <circle cx="182" cy="90" r="3" fill="#8B3A3A" opacity="0.15" className="cl-pulse" style={{ animationDelay: "0.5s" }} />
                <circle cx="190" cy="78" r="2.5" fill="#8B3A3A" opacity="0.12" className="cl-pulse" style={{ animationDelay: "1s" }} />

                {/* Label */}
                <text x="150" y="300" textAnchor="middle" fill="#1B2B4B" opacity="0.4" style={{ fontSize: 11, fontFamily: "var(--font-body)" }}>ciclul obsesie-compulsie</text>
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
                  { href: "#ce-este", label: "Ce este TOC-ul" },
                  { href: "#cum-functioneaza", label: "Cum funcționează TOC-ul: cercul vicios" },
                  { href: "#viata-reala", label: "Cum arată TOC-ul în viața reală" },
                  { href: "#de-ce-ritualul", label: "De ce ritualul nu funcționează" },
                  { href: "#ganduri-normale", label: "De ce gândurile obsesive sunt normale" },
                  { href: "#perspectiva-psihodinamica", label: "Ce vrea să spună psihicul prin TOC" },
                  { href: "#tratament", label: "Tratament" },
                  { href: "#ce-poti-face-acum", label: "Ce poți face acum" },
                  { href: "#specialist", label: "Când merită să cauți un specialist" },
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
            Ce este TOC-ul
          </h2>
          <p style={{ marginBottom: 16 }}>
            Tulburarea obsesiv-compulsivă (TOC) este o condiție psihologică în care persoana experimentează gânduri, imagini sau impulsuri nedorite și recurente (obsesii) care provoacă anxietate intensă, și răspunde la ele prin comportamente repetitive sau acte mentale (compulsii/ritualuri) menite să reducă acea anxietate. Afectează aproximativ 2-3% din populație și este una dintre cele mai invalidante tulburări psihologice, fiind clasată de Organizația Mondială a Sănătății printre primele 10 cauze de dizabilitate.
          </p>
          <p style={{ marginBottom: 16 }}>
            Dar TOC-ul nu e &quot;mania de curățenie&quot; sau &quot;nevoia de ordine&quot; pe care o vezi în filme. Majoritatea oamenilor cu TOC nu sunt ordonați sau curați. Mulți au gânduri violente, sexuale sau blasfemiatoare care îi terorizează. Alții verifică, numără, repetă, ating, aranjează sau cer confirmare de zeci de ori pe zi.
          </p>
          <p style={{ marginBottom: 32 }}>
            Ce au toți în comun: un gând care nu pleacă și un ritual care nu ajută.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            Obsesii și compulsii.. ce sunt de fapt
          </h3>

          <p style={{ fontWeight: 600, color: "var(--color-primary)", marginBottom: 16 }}>Obsesiile cele mai frecvente:</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28 }}>
            {[
              { label: "Contaminare", desc: "Am atins ceva murdar, voi face boală, voi contamina pe altcineva" },
              { label: "Verificare", desc: "Am lăsat aragazul aprins, ușa deschisă, fierul de călcat pornit" },
              { label: "Gânduri agresive sau sexuale", desc: "Ce-ar fi dacă fac rău copilului meu? Ce-ar fi dacă sunt atras de ceva ce nu ar trebui?" },
              { label: "Simetrie și ordine", desc: "Lucrurile trebuie să fie aranjate exact altfel se va întâmpla ceva rău" },
              { label: "Gânduri religioase sau morale", desc: "Am avut un gând blasfemiator, sunt o persoană rea" },
            ].map((item) => (
              <div key={item.label} style={{ background: "var(--color-background)", borderRadius: 10, padding: "14px 18px", border: "1px solid var(--color-border)", flex: "1 1 300px" }}>
                <span style={{ display: "inline-block", background: "var(--color-primary)", color: "#fff", fontSize: 13, fontWeight: 600, padding: "3px 10px", borderRadius: 20, marginBottom: 8 }}>{item.label}</span>
                <p style={{ fontSize: 15, margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <p style={{ fontWeight: 600, color: "var(--color-primary)", marginBottom: 12 }}>Compulsiile:</p>
          <p style={{ marginBottom: 16 }}>
            Compulsiile sunt ritualurile pe care le faci ca să scapi de anxietatea produsă de obsesie. Unele sunt vizibile (spălat, verificat, aranjat). Altele sunt invizibile (număratul mental, repetarea unor fraze în minte, &quot;anularea&quot; unui gând cu alt gând, căutarea reasigurării).
          </p>
          <p>
            Compulsia funcționează ca un analgesic.. ia durerea temporar, dar nu tratează cauza. Și ca orice analgesic folosit excesiv, necesită doze tot mai mari.
          </p>
        </div>
      </section>

      {/* ── CUM FUNCȚIONEAZĂ ── */}
      <section id="cum-functioneaza" style={{ background: "var(--color-background)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", marginBottom: 24 }}>
            Cum funcționează TOC-ul: cercul vicios
          </h2>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 20 }}>
            Cercul vicios al TOC-ului
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
            {[
              { nr: 1, text: `Gândul intruziv apare ("Ce-ar fi dacă nu am încuiat ușa?")` },
              { nr: 2, text: `Mintea îi atribuie o semnificație exagerată ("Dacă nu am încuiat, va intra cineva în casă și va fi vina mea")` },
              { nr: 3, text: "Anxietatea crește (tensiune, neliniște, urgență)" },
              { nr: 4, text: "Faci ritualul (verifici ușa)" },
              { nr: 5, text: "Ușurare imediată (anxietatea scade pentru 30 de secunde)" },
              { nr: 6, text: `Creierul învață: "Ritualul funcționează! Data viitoare, fă-l iar."` },
              { nr: 7, text: `Gândul revine.. mai insistent, pentru că tocmai l-ai "confirmat" ca important` },
            ].map((step) => (
              <div key={step.nr} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "16px 20px", background: "var(--color-background-white)", borderRadius: 10, border: "1px solid var(--color-border)" }}>
                <div style={{ flexShrink: 0, width: 36, height: 36, borderRadius: "50%", background: "var(--color-primary)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 15 }}>
                  {step.nr}
                </div>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, paddingTop: 6 }}>{step.text}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "var(--color-primary)", borderRadius: 12, padding: "20px 24px", marginBottom: 40 }}>
            <p style={{ color: "#ffffff", fontSize: 16, fontWeight: 500, lineHeight: 1.65, margin: 0 }}>
              Fiecare ritual întărește ciclul. Cu cât verifici mai mult, cu atât nevoia de a verifica crește.
            </p>
          </div>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 20 }}>
            Dubla eroare: probabilitate și catastrofă
          </h3>

          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginBottom: 40 }}>
            <div style={{ flex: 1, minWidth: 280, background: "var(--color-background-white)", borderRadius: 12, padding: 28, border: "1px solid var(--color-border)" }}>
              <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-secondary)", fontWeight: 600, marginBottom: 10 }}>Supraestimarea probabilității</p>
              <p style={{ fontSize: 16, margin: 0 }}>
                Estimezi că scenariul temut e mult mai probabil decât este în realitate.
              </p>
            </div>
            <div style={{ flex: 1, minWidth: 280, background: "var(--color-background-white)", borderRadius: 12, padding: 28, border: "1px solid var(--color-border)" }}>
              <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", color: "#8B3A3A", fontWeight: 600, marginBottom: 10 }}>Catastrofizarea</p>
              <p style={{ fontSize: 16, margin: 0 }}>
                Mintea face un salt direct la cel mai rău scenariu posibil. Nu &quot;poate o să fie neplăcut&quot;, ci &quot;casa va lua foc, familia va muri, și va fi vina mea&quot;.
              </p>
            </div>
          </div>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            Intoleranța la incertitudine.. nucleul real
          </h3>
          <p style={{ marginBottom: 16 }}>
            Nucleul real al TOC-ului este incapacitatea de a tolera incertitudinea. Faci ritualuri pentru a obține certitudinea că ușa e încuiată, mâinile sunt curate, nimeni nu va fi rănit. Dar certitudinea absolută nu există. Niciodată. Pentru nimeni.
          </p>
          <p style={{ marginBottom: 16 }}>
            Tratamentul eficient nu încearcă să te convingă că &quot;nu se va întâmpla nimic rău&quot;. Te învață să tolerezi faptul că nu știi și să funcționezi în ciuda incertitudinii.
          </p>
          <p style={{ marginBottom: 24 }}>
            Acest nucleu, intoleranța la incertitudine, leagă TOC-ul de <Link href="/tipuri/anxietate-generalizata" style={{ color: "var(--color-secondary)", textDecoration: "underline", textUnderlineOffset: 3 }}>tulburarea de anxietate generalizată</Link>.
          </p>

          <div style={{ background: "var(--color-primary)", borderRadius: 12, padding: "24px 28px" }}>
            <p style={{ color: "#ffffff", fontSize: 17, fontWeight: 500, lineHeight: 1.65, margin: 0 }}>
              Certitudinea absolută nu există. Nici pentru tine, nici pentru nimeni. Diferența e că tu ai învățat să nu poți funcționa fără ea.
            </p>
          </div>
        </div>
      </section>

      {/* ── CUM ARATĂ ÎN VIAȚA REALĂ ── */}
      <section id="viata-reala" style={{ background: "var(--color-background-white)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", marginBottom: 24 }}>
            Cum arată TOC-ul în viața reală
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              {
                title: "La muncă",
                text: `Recitești email-ul de 5 ori înainte să-l trimiți. Verifici prezentarea încă o dată. Și încă o dată. Colegii au plecat de o oră. Tu ești încă la birou, nu pentru că ai mai mult de lucru, ci pentru că nu ești sigur că ce ai făcut e destul de bine.`,
              },
              {
                title: "În relații",
                text: `Partenerul tău e obosit. Nu de tine, ci de întrebările care nu se termină. "Mă iubești cu adevărat?" "Ești sigur că nu te-am supărat?" Fiecare reasigurare durează 30 de secunde. Apoi îndoiala revine.`,
              },
              {
                title: "Ca părinte",
                text: `Gândul apare: "Ce-ar fi dacă fac rău copilului meu?" Și te îngheață. Nu pentru că ai vrea vreodată așa ceva. Ci tocmai pentru că nu ai vrea. Multe mame cu TOC postpartum trăiesc acest coșmar în tăcere, convinse că sunt monștri. Nu sunt.`,
              },
              {
                title: "Timp pierdut",
                text: "Ritualurile consumă ore. Literalmente. Unii oameni cu TOC petrec 3-4 ore pe zi în ritualuri. Viața se desfășoară în jurul TOC-ului, nu invers.",
              },
            ].map((item) => (
              <div key={item.title} style={{ background: "var(--color-background)", borderRadius: 12, padding: "24px 28px", border: "1px solid var(--color-border)" }}>
                <p style={{ fontWeight: 600, color: "var(--color-primary)", marginBottom: 10, fontSize: 18 }}>{item.title}</p>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DE CE RITUALUL NU FUNCȚIONEAZĂ ── */}
      <section id="de-ce-ritualul" style={{ background: "var(--color-background)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", marginBottom: 24 }}>
            De ce ritualul nu funcționează
          </h2>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 12 }}>
            Paradoxul ritualului
          </h3>
          <p style={{ marginBottom: 32 }}>
            Cu cât faci mai multe ritualuri de verificare, cu atât crește incertitudinea și nevoia de a le repeta. Fiecare ritual îi spune creierului &quot;ai dreptate să te temi&quot;.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 12 }}>
            Reasigurarea ca ritual invizibil
          </h3>
          <p style={{ marginBottom: 32 }}>
            Multe persoane cu TOC nu fac ritualuri vizibile. Fac altceva: cer confirmare. &quot;Ești sigur că am încuiat?&quot; &quot;Nu ți se pare că arăt bolnav?&quot; &quot;Crezi că am greșit?&quot; Reasigurarea funcționează identic cu verificarea. Oferă o ușurare scurtă și întărește ciclul.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 12 }}>
            Ritualurile mentale
          </h3>
          <p style={{ marginBottom: 32 }}>
            Există o categorie întreagă de ritualuri care se întâmplă exclusiv în minte: repetarea unei fraze, număratul, &quot;anularea&quot; unui gând rău cu un gând bun, revizuirea mentală a unor situații, rugăciuni repetate. Sunt la fel de puternice ca ritualurile vizibile, dar nimeni din jur nu le observă.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 12 }}>
            TOC-ul pe care nimeni nu-l vede
          </h3>
          <p>
            Există o formă de TOC pe care nimeni din jurul tău nu o observă. Persoana nu se spală pe mâini, nu verifică ușa. Dar în mintea ei, ritualurile sunt non-stop. Gânduri care vin, gânduri care &quot;anulează&quot;, analize interminabile, verificări mentale. Afară, totul pare normal. Înăuntru, epuizarea e totală. Dacă nu ai ritualuri vizibile dar mintea ta nu se oprește, dacă te &quot;testezi&quot; constant sau &quot;analizezi&quot; ore întregi.. ai ritualuri. Doar că sunt invizibile.
          </p>
        </div>
      </section>

      {/* ── GÂNDURILE SUNT NORMALE ── */}
      <section id="ganduri-normale" style={{ background: "var(--color-background-white)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", marginBottom: 24 }}>
            De ce gândurile obsesive sunt normale
          </h2>

          {/* Key stat */}
          <div style={{ background: "var(--color-background)", borderRadius: 12, padding: "28px 32px", marginBottom: 28, border: "1px solid var(--color-border)" }}>
            <p style={{ fontSize: 22, fontWeight: 600, color: "var(--color-primary)", marginBottom: 8, fontFamily: "var(--font-heading)" }}>
              90% din oameni au aceleași gânduri ca tine
            </p>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7 }}>
              Studiile arată că peste 90% din populația generală are gânduri intruzive cu conținut identic obsesiilor clinice. Diferența dintre o persoană cu TOC și una fără nu stă în prezența gândurilor. Stă în ce face cu ele.
            </p>
          </div>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            Când gândurile devin fapte în mintea ta
          </h3>
          <p style={{ marginBottom: 24 }}>
            Mintea persoanei cu TOC face ceva specific: tratează gândurile ca și cum ar fi la fel de importante ca faptele. Acest lucru se întâmplă în două feluri:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
            <div style={{ background: "var(--color-background)", borderRadius: 12, padding: 28, border: "1px solid var(--color-border)" }}>
              <p style={{ fontWeight: 600, color: "var(--color-secondary)", marginBottom: 8, fontSize: 17 }}>Gândul influențează realitatea</p>
              <p style={{ fontSize: 16, marginBottom: 8 }}>
                &quot;Dacă mă gândesc că se va întâmpla ceva rău, crește probabilitatea să se întâmple cu adevărat.&quot;
              </p>
              <p style={{ fontSize: 15, color: "var(--color-text)", margin: 0 }}>
                Ca și cum gândul ar avea putere magică de a influența ce se întâmplă în lume. Mintea spune: &quot;M-am gândit la un accident, deci acum e mai probabil să se întâmple.&quot;
              </p>
            </div>
            <div style={{ background: "var(--color-background)", borderRadius: 12, padding: 28, border: "1px solid var(--color-border)" }}>
              <p style={{ fontWeight: 600, color: "#8B3A3A", marginBottom: 8, fontSize: 17 }}>Gândul egal cu fapta</p>
              <p style={{ fontSize: 16, marginBottom: 8 }}>
                &quot;A gândi ceva rău este la fel de grav ca și cum ai fi făcut acel lucru.&quot;
              </p>
              <p style={{ fontSize: 15, color: "var(--color-text)", margin: 0 }}>
                Mama care are un gând intruziv despre a face rău copilului se simte ca și cum ar fi făcut-o deja. Nu e un gând. E o crimă în mintea ei. Deși în realitate, nu a făcut nimic.
              </p>
            </div>
          </div>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 12 }}>
            De ce simți că totul e responsabilitatea ta
          </h3>
          <p style={{ marginBottom: 16 }}>
            Dacă te gândești la ceva rău și nu faci nimic să-l previi, iar acel lucru se întâmplă.. simți că e vina ta. Nu verifici aragazul pentru că ești neglijent. Verifici pentru că simți o responsabilitate copleșitoare pentru siguranța tuturor.
          </p>
          <p>
            Această senzație că &quot;trebuie să previn orice rău posibil&quot; transformă fiecare gând intruziv într-o urgență. Nu poți lăsa gândul să treacă, pentru că a-l lăsa să treacă ar însemna că nu îți pasă. Și ție îți pasă enorm. De fapt, tocmai asta e problema.. îți pasă prea mult.
          </p>
        </div>
      </section>

      {/* ── PERSPECTIVA PSIHODINAMICĂ (dark section) ── */}
      <section id="perspectiva-psihodinamica" style={{ background: "var(--color-primary)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "#ffffff", marginBottom: 24 }}>
            Ce vrea să spună psihicul prin TOC
          </h2>

          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 16 }}>
            Până acum am discutat ce face TOC-ul și cum funcționează. Dar de ce tocmai aceste gânduri? De ce tocmai aceste ritualuri? De ce tocmai acum?
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "#ffffff", marginBottom: 12, marginTop: 32 }}>
            De ce ritualul nu e un gest absurd
          </h3>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 16 }}>
            Ritualul pare irațional văzut din exterior. Dar psihicul nu face nimic la întâmplare. Ritualul e cel mai bun răspuns pe care mintea ta l-a găsit pentru ceva ce simți dar nu poți numi. Nu e problema. E soluția.. doar că una care te costă prea mult.
          </p>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 32 }}>
            Cineva care se spală compulsiv pe mâini, de exemplu, poate exprima prin asta nevoia de a se &quot;curăța&quot; de gânduri pe care le consideră inacceptabile. Ritualul ține locul unei conversații pe care persoana nu o poate avea cu sine.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "#ffffff", marginBottom: 16 }}>
            Ce se întâmplă sub suprafață
          </h3>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 20 }}>
            Mulți oameni cu TOC trăiesc cu o prăpastie între cine sunt în ochii lumii și ce simt de fapt:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
            <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 12, padding: "20px 24px", border: "1px solid rgba(255,255,255,0.1)" }}>
              <p style={{ color: "var(--color-secondary)", fontWeight: 600, marginBottom: 6, fontSize: 16 }}>Ce vede lumea</p>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 15, margin: 0, lineHeight: 1.65 }}>O persoană responsabilă, amabilă, conștiincioasă. Cineva pe care te poți baza.</p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 12, padding: "20px 24px", border: "1px solid rgba(255,255,255,0.1)" }}>
              <p style={{ color: "var(--color-secondary)", fontWeight: 600, marginBottom: 6, fontSize: 16 }}>Ce simți tu</p>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 15, margin: 0, lineHeight: 1.65 }}>Îndoieli constante, nesiguranță, senzația că nu ești destul de bun. O tensiune permanentă între cine &quot;ar trebui&quot; să fii și cine ești de fapt.</p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 12, padding: "20px 24px", border: "1px solid rgba(255,255,255,0.1)" }}>
              <p style={{ color: "var(--color-secondary)", fontWeight: 600, marginBottom: 6, fontSize: 16 }}>Ce te sperie cel mai tare</p>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 15, margin: 0, lineHeight: 1.65 }}>Gândurile pe care le consideri inacceptabile.. exact cele care alimentează obsesiile. Nu pentru că sunt adevărate, ci pentru că te temi de ce ar spune despre tine.</p>
            </div>
          </div>

          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 32 }}>
            Tocmai această prăpastie face TOC-ul atât de chinuitor. Persoana cu TOC e adesea cea mai conștiincioasă din anturaj. Și exact acest exces de conștiinciozitate o face vulnerabilă: orice gând &quot;greșit&quot; devine o criză.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "#ffffff", marginBottom: 12 }}>
            Cazul dlui N
          </h3>
          <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 12, padding: "24px 28px", marginBottom: 32, border: "1px solid rgba(255,255,255,0.1)" }}>
            <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 12 }}>
              Dl N avea 29 de ani și TOC sever, cu un ritual de 58 de pași pe care îl executa zilnic. Prin terapie, s-a descoperit că simptomele dezvăluiau o dorință simbolică.. ritualul era o modalitate de a controla un mediu interior care se simțea haotic și periculos.
            </p>
            <p style={{ color: "rgba(255,255,255,0.85)", margin: 0 }}>
              Fiecare pas din ritual avea o funcție: unii pași exprimau agresivitate mascată, alții exprimau nevoia de reparație. Ritualul nu era un simptom fără sens. Era o narațiune comprimată a unei vieți interioare pe care dl N nu și-o putea permite să o trăiască deschis.
            </p>
          </div>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "#ffffff", marginBottom: 12 }}>
            Familia ca ecosistem
          </h3>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 12 }}>
            88,2% din rudele pacienților cu TOC recunosc că și-au modificat comportamentul pentru a se acomoda la ritualurile persoanei. Familia participă la ritual: verifică împreună, reasigură, modifică rutine. Nu din slăbiciune, ci din dragoste. Dar această acomodare întărește ciclul.
          </p>
          <p style={{ color: "rgba(255,255,255,0.85)" }}>
            Tratamentul eficient include frecvent și familia, nu pentru că familia e &quot;vinovată&quot;, ci pentru că familia e parte din sistem. Și schimbarea sistemului accelerează vindecarea.
          </p>
        </div>
      </section>

      {/* ── TRATAMENT ── */}
      <section id="tratament" style={{ background: "var(--color-background-white)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", marginBottom: 24 }}>
            Tratament
          </h2>
          <p style={{ marginBottom: 16 }}>
            TOC-ul este una dintre cele mai studiate tulburări psihologice. Iar vestea bună este că și una dintre cele mai tratabile. Rata de succes a terapiei de primă linie este între 60-80%, cu îmbunătățiri semnificative în calitatea vieții.
          </p>
          <p style={{ marginBottom: 32 }}>
            Tratamentul de elecție pentru TOC se numește ERP (Expunere cu Prevenirea Răspunsului) și este considerat standardul de aur în intervențiile pentru această tulburare.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 12 }}>
            ERP (Expunere cu Prevenirea Răspunsului)
          </h3>
          <p style={{ marginBottom: 16 }}>
            Principiul e simplu, chiar dacă execuția e dificilă: te expui deliberat la gândul sau situația care îți provoacă anxietatea, dar fără să faci ritualul. Stai cu anxietatea. Și descoperi că anxietatea scade de la sine, fără ritual.
          </p>
          <p style={{ marginBottom: 32 }}>
            Nu e vorba de a-ți face curaj. E vorba de a-ți oferi creierului o experiență nouă. Ritualul i-a spus creierului &quot;frica ta era justificată&quot;. ERP-ul îi spune creierului &quot;ai supraviețuit fără ritual, deci amenințarea nu era reală&quot;.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            Cum arată tratamentul concret
          </h3>
          <p style={{ marginBottom: 24 }}>
            Nu începi cu cel mai greu lucru. Începi cu ceva ușor și urci treptat. La fiecare pas, stai cu disconfortul fără să faci ritualul. Iată cum poate arăta asta în practică:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
            <div style={{ background: "var(--color-background)", borderRadius: 12, padding: 24, border: "1px solid var(--color-border)" }}>
              <p style={{ fontWeight: 600, color: "var(--color-secondary)", marginBottom: 12, fontSize: 17 }}>Dacă verifici tot timpul</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { level: "Ușor", text: "Închide ușa fără să o verifici a doua oară" },
                  { level: "Mediu", text: "Trimite un email fără să-l recitești" },
                  { level: "Mediu", text: "Oprește aragazul și pleacă din bucătărie imediat" },
                  { level: "Greu", text: "Pleacă de acasă fără să te întorci să verifici nimic" },
                  { level: "Greu", text: "Încuie mașina și nu te mai uita înapoi" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <span style={{ flexShrink: 0, fontSize: 12, fontWeight: 600, color: item.level === "Ușor" ? "var(--color-secondary)" : item.level === "Mediu" ? "#B8860B" : "#8B3A3A", width: 40 }}>{item.level}</span>
                    <p style={{ margin: 0, fontSize: 15 }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: "var(--color-background)", borderRadius: 12, padding: 24, border: "1px solid var(--color-border)" }}>
              <p style={{ fontWeight: 600, color: "#8B3A3A", marginBottom: 12, fontSize: 17 }}>Dacă te temi de contaminare</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { level: "Ușor", text: "Atinge o clanță publică și așteaptă 5 minute fără să te speli" },
                  { level: "Mediu", text: "Mănâncă acasă fără să te speli pe mâini înainte" },
                  { level: "Mediu", text: "Atinge pantofii și apoi masa, fără să ștergi" },
                  { level: "Greu", text: "Folosește o toaletă publică fără ritualul de curățare" },
                  { level: "Greu", text: "Atinge un coș de gunoi și așteaptă 30 de minute fără spălat" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <span style={{ flexShrink: 0, fontSize: 12, fontWeight: 600, color: item.level === "Ușor" ? "var(--color-secondary)" : item.level === "Mediu" ? "#B8860B" : "#8B3A3A", width: 40 }}>{item.level}</span>
                    <p style={{ margin: 0, fontSize: 15 }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 12 }}>
            Curba anxietății
          </h3>
          <p style={{ marginBottom: 16 }}>
            Când te expui fără să faci ritualul, anxietatea crește. Atinge un vârf în primele 15-20 de minute. Totul în tine urlă &quot;fă ritualul!&quot;. Dacă faci ritualul, anxietatea scade instant, dar s-a întărit. Dacă nu faci ritualul, ceva neașteptat se întâmplă: anxietatea începe să scadă de la sine.
          </p>
          <p style={{ marginBottom: 32 }}>
            Corpul tău nu poate menține acel nivel de activare la infinit. După 30-45 de minute, senzațiile se domolesc. Și creierul tău învață ceva nou: &quot;Am stat cu gândul și nu s-a întâmplat nimic. Pot tolera incertitudinea.&quot;
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 12 }}>
            Defuziunea
          </h3>
          <p style={{ marginBottom: 16 }}>
            Defuziunea este o tehnică din terapia ACT (Acceptance and Commitment Therapy) care te învață să schimbi relația cu gândul, nu conținutul gândului.
          </p>
          <p style={{ marginBottom: 16 }}>
            În loc de &quot;Ușa e deschisă!&quot; (fuziune cu gândul, gândul e realitate), spui &quot;Am gândul că ușa e deschisă&quot; (defuziune, observi gândul ca pe un eveniment mental, nu ca pe un fapt).
          </p>
          <p style={{ marginBottom: 32 }}>
            Această distanță mică, aparent banală, schimbă modul în care creierul procesează informația. Gândul nu mai e o amenințare care necesită acțiune imediată. E un eveniment mental care poate fi observat și lăsat să treacă.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            Cazul Chester
          </h3>
          <div style={{ background: "var(--color-background)", borderRadius: 12, padding: "24px 28px", marginBottom: 32, border: "1px solid var(--color-border)" }}>
            <p style={{ marginBottom: 12 }}>
              Chester a trăit cu TOC timp de 35 de ani. Ritualuri de verificare, ritualuri de numărare, ritualuri de simetrie. Viața lui se desfășura în jurul evitării și al ritualurilor. A încercat mai multe forme de terapie fără succes.
            </p>
            <p style={{ marginBottom: 12 }}>
              Apoi a început un program structurat de ERP. Pas cu pas, treptat, cu un terapeut specializat. După câteva luni de tratament, scorul lui la scala Yale-Brown (instrumentul standard de măsurare a severității TOC) a ajuns la 0.
            </p>
            <p style={{ margin: 0, fontWeight: 600, color: "var(--color-primary)" }}>
              35 de ani de TOC. Apoi scor 0. Nu pentru că a fost ușor, ci pentru că tratamentul funcționează.
            </p>
          </div>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 12 }}>
            De ce medicamentele singure nu sunt suficiente
          </h3>
          <p style={{ marginBottom: 16 }}>
            SSRI-urile (inhibitorii selectivi ai recaptării serotoninei) pot reduce intensitatea obsesiilor și pot face ERP-ul mai ușor de suportat. Sunt utile, uneori necesare. Dar singure, fără terapie, ratele de recădere după oprirea medicației sunt foarte mari.
          </p>
          <p>
            Motivul e simplu: medicamentul reduce volumul gândului, dar nu te învață ce să faci cu el. ERP-ul te învață. Combinația medicament + ERP oferă cele mai bune rezultate, mai ales în cazurile severe.
          </p>
        </div>
      </section>

      {/* ── CE POȚI FACE ACUM ── */}
      <section id="ce-poti-face-acum" style={{ background: "var(--color-background-white)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", marginBottom: 8 }}>
            Ce poți face acum
          </h2>
          <p style={{ color: "var(--color-text)", marginBottom: 32 }}>
            Nu trebuie să aștepți o programare la psiholog ca să începi. Iată cinci exerciții pe care le poți face singur, azi.
          </p>

          {[
            {
              nr: "1",
              title: "Identifică ciclul",
              text: `Ia o foaie de hârtie și împarte-o în patru coloane: Gândul (ce-ți vine în minte), Interpretarea (ce înseamnă gândul pentru tine), Ritualul (ce faci ca să scapi de anxietate), Rezultatul (ce se întâmplă după ritual). Completează de câteva ori. Scopul nu e să oprești ciclul, ci să-l vezi. Conștientizarea este primul pas.`,
            },
            {
              nr: "2",
              title: "Amânarea ritualului",
              text: "Când simți nevoia de a face ritualul, nu încerca să o oprești complet. Amân-o. Spune-ți: \"Voi face ritualul, dar peste 5 minute.\" Stai cu anxietatea 5 minute. Apoi, dacă tot mai simți nevoia, fă-l. Săptămâna viitoare, crește la 10 minute. Apoi la 15. Scopul nu e să elimini ritualul dintr-o dată, ci să descoperi că anxietatea scade și fără el.",
            },
            {
              nr: "3",
              title: "Antrenament de incertitudine",
              text: `Alege zilnic o situație mică în care tolerezi incertitudinea: trimite un email fără să-l recitești, ia un traseu fără GPS, comandă ceva nou la restaurant fără să citești recenzii. Nu sunt exerciții despre email-uri sau restaurante. Sunt exerciții despre a trăi cu "nu știu sigur" și a descoperi că e suportabil.`,
            },
            {
              nr: "4",
              title: "Etichetează gândul",
              text: `Când gândul intruziv apare, pune-i o etichetă: "Am gândul că ușa e deschisă" în loc de "Ușa e deschisă!" sau "Am gândul că voi face rău cuiva" în loc de "Voi face rău cuiva." Această distanță mică schimbă modul în care creierul procesează informația. Gândul devine ceva ce observi, nu ceva ce ești.`,
            },
            {
              nr: "5",
              title: "Ce ai face dacă TOC-ul nu te-ar mai opri",
              text: "Scrie pe o foaie: dacă TOC-ul ar dispărea mâine, ce ai face diferit? Unde ai merge? Ce ai accepta? Ce conversație ai avea? Acest exercițiu nu vindecă TOC-ul, dar îți arată exact cât de mult teren i-ai cedat. Și îți dă un motiv concret pentru care merită să lupți.",
            },
          ].map((ex) => (
            <div key={ex.nr} style={{ display: "flex", gap: 20, marginBottom: 20, padding: "20px 24px", background: "var(--color-background)", borderRadius: 12 }}>
              <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: "50%", background: "var(--color-secondary)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 17 }}>
                {ex.nr}
              </div>
              <div>
                <p style={{ fontWeight: 600, color: "var(--color-primary)", marginBottom: 8, fontSize: 18 }}>{ex.title}</p>
                <p style={{ color: "var(--color-text)", fontSize: 16, lineHeight: 1.7, margin: 0 }}>{ex.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CÂND MERITĂ UN SPECIALIST ── */}
      <section id="specialist" style={{ background: "var(--color-background)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", marginBottom: 12 }}>
            Când merită să cauți un specialist
          </h2>
          <p style={{ marginBottom: 32 }}>
            Exercițiile de mai sus sunt un punct de pornire. Dar un terapeut specializat poate face diferența atunci când:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
            {[
              { icon: "🎯", text: "Ai nevoie de un terapeut format specific în ERP pentru TOC" },
              { icon: "⏰", text: "Ritualurile îți ocupă mai mult de o oră pe zi" },
              { icon: "🚫", text: "Evitarea a început să-ți restricționeze viața" },
              { icon: "👨‍👩‍👧", text: "Familia ta s-a adaptat la ritualuri" },
              { icon: "💭", text: "Gândurile intruzive te fac să te temi de tine" },
            ].map((item) => (
              <div key={item.text} style={{ display: "flex", gap: 16, padding: "18px 24px", background: "var(--color-background-white)", borderRadius: 12, border: "1px solid var(--color-border)", alignItems: "center" }}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
                <p style={{ margin: 0, fontSize: 16 }}>{item.text}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "var(--color-primary)", borderRadius: 16, padding: "40px 32px", textAlign: "center" }}>
            <p style={{ color: "#ffffff", fontSize: 20, fontWeight: 500, marginBottom: 8, fontFamily: "var(--font-heading)" }}>
              TOC-ul răspunde excelent la tratament specializat.
            </p>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, marginBottom: 28, maxWidth: 480, margin: "0 auto 28px" }}>
              Nu e ceva cu care &quot;trebuie să trăiești&quot;. E ceva ce se tratează.
            </p>
            <Link
              href="/programare?din=toc"
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
          <FAQ q="TOC-ul se vindecă complet?">
            <p style={{ marginBottom: 8 }}>TOC-ul poate fi adus în remisiune completă. Mulți oameni care fac ERP ajung la un punct în care gândurile intruzive încă apar ocazional, dar nu mai produc anxietate semnificativă și nu mai declanșează ritualuri. Diferența dintre &quot;vindecare&quot; și &quot;remisiune&quot; este subtilă, dar practică: gândurile pot reveni în perioade de stres, iar recunoașterea lor rapidă și aplicarea instrumentelor învățate în terapie previne recăderea.</p>
          </FAQ>
          <FAQ q="Dacă am gânduri violente, înseamnă că sunt periculos?">
            <p style={{ marginBottom: 8 }}>Nu. Cercetările arată că persoanele cu TOC au exact aceeași probabilitate de a comite acte violente ca și populația generală. De fapt, tocmai pentru că aceste gânduri te îngrozesc atât de tare, ele sunt un semn că valorile tale sunt opuse conținutului gândului. O persoană cu adevărat periculoasă nu ar fi tulburată de acele gânduri.</p>
          </FAQ>
          <FAQ q="Copilul meu face ritualuri. E TOC?">
            <p style={{ marginBottom: 8 }}>Multe ritualuri sunt normale în copilărie (aranjatul jucăriilor, rutine de culcare stricte). Devin problematice când produc suferință, consumă timp semnificativ (peste 30 de minute pe zi) sau interferează cu activitățile zilnice. Dacă ești îngrijorat, o evaluare cu un specialist în TOC pediatric poate clarifica situația.</p>
          </FAQ>
          <FAQ q="Partenerul meu are TOC. Cum îl pot ajuta?">
            <p style={{ marginBottom: 8 }}>Cel mai important lucru: nu participa la ritualuri. Știu că e greu, pentru că refuzul tău va crește temporar anxietatea partenerului. Dar participarea ta la ritual întărește ciclul. Nu reasigura (&quot;da, ai încuiat&quot;, &quot;nu, nu ești bolnav&quot;). Nu verifica în locul lui. Spune-i, cu blândețe: &quot;Te iubesc, dar nu te pot ajuta făcând asta pentru tine.&quot; Și încurajează-l să lucreze cu un terapeut specializat în ERP.</p>
          </FAQ>
          <FAQ q={`Am TOC "ușor". Merită să merg la terapie?`}>
            <p>{`Tocmai formele "ușoare" răspund cel mai bine la tratament. Nu aștepta ca TOC-ul să devină sever ca să ceri ajutor. Cu cât ciclul e mai scurt și ritualurile mai puțin înrădăcinate, cu atât ERP-ul funcționează mai rapid. Mulți oameni cu TOC "ușor" se descurcă în 8-12 ședințe.`}</p>
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
              { href: "/tipuri/atac-de-panica", label: "Atacul de panică" },
              { href: "/tipuri/anxietate-sociala", label: "Anxietate socială" },
              { href: "/tipuri/fobii-specifice", label: "Fobii specifice" },
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
              <li>Clark, D. A., &amp; Beck, A. T. (2010). <em>Cognitive Therapy of Anxiety Disorders: Science and Practice</em>. Guilford Press.</li>
              <li>Gabbard, G. O. (2007). <em>Tratat de Psihiatrie Psihodinamică</em>. Editura Trei.</li>
              <li>Andrews, G., et al. (2003). <em>The Treatment of Anxiety Disorders</em> (2nd ed.). Cambridge University Press.</li>
              <li>Abramowitz, J. S., Deacon, B. J., &amp; Whiteside, S. P. H. (2019). <em>Exposure Therapy for Anxiety</em> (2nd ed.). Guilford Press.</li>
              <li>Rachman, S. (1997). A cognitive theory of obsessions. <em>Behaviour Research and Therapy, 35</em>(9), 793-802.</li>
              <li>Rachman, S., &amp; de Silva, P. (1978). Abnormal and normal obsessions. <em>Behaviour Research and Therapy, 16</em>(4), 233-248.</li>
              <li>Salkovskis, P. M. (1985). Obsessional-compulsive problems: A cognitive-behavioural analysis. <em>Behaviour Research and Therapy, 23</em>(5), 571-583.</li>
              <li>Foa, E. B., &amp; Kozak, M. J. (1986). Emotional processing of fear: Exposure to corrective information. <em>Psychological Bulletin, 99</em>(1), 20-35.</li>
              <li>Hayes, S. C., Strosahl, K. D., &amp; Wilson, K. G. (2012). <em>Acceptance and Commitment Therapy</em> (2nd ed.). Guilford Press.</li>
              <li>Leahy, R. L., Holland, S. J. F., &amp; McGinn, L. K. (2012). <em>Treatment Plans and Interventions for Depression and Anxiety Disorders</em> (2nd ed.). Guilford Press.</li>
              <li>Freud, S. (1926). <em>Inhibitions, Symptoms and Anxiety</em>. Standard Edition, Vol. 20.</li>
              <li>Riemann, F. (2003). <em>Formele fundamentale ale angoasei</em>. Editura Trei.</li>
            </ul>
          </div>
        </div>
      </section>

    </main>
  );
}
