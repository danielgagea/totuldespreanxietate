"use client";

import Link from "next/link";
import { useState } from "react";

/* ============================================================
   FOBII SPECIFICE — Ghid Complet
   Content: WorkMemory/tipuri/fobii-specifice/fobii-specifice-pagina-finala.md
   Design: Fraunces + Inter, CSS variables, pattern existent
   ============================================================ */

function FAQ({ q, a }: { q: string; a: string }) {
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
      <div style={{ maxHeight: open ? 500 : 0, overflow: "hidden", transition: "max-height 0.3s ease-out" }}>
        <p style={{ padding: "0 0 20px", color: "var(--color-text-secondary)", fontSize: 16, lineHeight: 1.7 }}>{a}</p>
      </div>
    </div>
  );
}

function Insight({ title, text }: { title: string; text: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid var(--color-border)" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 16, fontWeight: 600, color: "var(--color-primary)", textAlign: "left", gap: 16 }}
      >
        <span>{title}</span>
        <span style={{ flexShrink: 0, color: "var(--color-text-secondary)", transition: "transform 0.3s", transform: open ? "rotate(45deg)" : "none" }}>+</span>
      </button>
      <div style={{ maxHeight: open ? 600 : 0, overflow: "hidden", transition: "max-height 0.3s ease-out" }}>
        <p style={{ padding: "0 0 16px", color: "var(--color-text-secondary)", fontSize: 15, lineHeight: 1.7 }}>{text}</p>
      </div>
    </div>
  );
}

export default function FobiiSpecificePage() {
  const [refsOpen, setRefsOpen] = useState(false);

  return (
    <main style={{ fontFamily: "var(--font-body)", color: "var(--color-text)", fontSize: 17, lineHeight: 1.75 }}>

      {/* ── HERO ── */}
      <section style={{ background: "var(--color-background)", padding: "48px 24px 64px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 48, flexWrap: "wrap" }}>
            {/* Text */}
            <div style={{ flex: 1, minWidth: 300 }}>
              <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--color-text-secondary)", marginBottom: 24 }}>
                De Daniel Gagea, psiholog clinician, psihoterapeut
              </p>
              <h1 style={{ fontFamily: "var(--font-heading)", fontSize: 38, fontWeight: 400, color: "var(--color-primary)", lineHeight: 1.25, marginBottom: 16 }}>
                Fobii specifice
              </h1>
              <p style={{ fontSize: 17, color: "var(--color-text-secondary)", marginBottom: 24 }}>
                Ghid complet 2026
              </p>
              <p style={{ fontSize: 15, color: "var(--color-text-secondary)", marginBottom: 32 }}>
                Trăiești cu o fobie de ani de zile? <Link href="#ce-poti-face" style={{ color: "var(--color-secondary)", textDecoration: "underline", textUnderlineOffset: 3 }}>Mergi direct la Ce poți face acum</Link>
              </p>
              <p style={{ fontSize: 17, color: "var(--color-text)", lineHeight: 1.75, marginBottom: 16 }}>
                Știi că nu e periculos. Știi că un păianjen de 2 cm nu te poate omorî. Că liftul nu se va prăbuși. Că avionul e mai sigur decât mașina ta.
              </p>
              <p style={{ fontSize: 17, color: "var(--color-text)", lineHeight: 1.75, marginBottom: 16 }}>
                Și totuși, corpul tău reacționează ca și cum viața ta ar fi în pericol.
              </p>
              <p style={{ fontSize: 17, color: "var(--color-text)", lineHeight: 1.75 }}>
                <strong>Nu ești irațional. Nu ești slab.</strong> Ce trăiești poartă un nume.. fobie specifică.
              </p>
            </div>
            {/* Illustration */}
            <div style={{ flexShrink: 0, width: 300 }} aria-hidden="true">
              <style>{`
                @keyframes fb-pulse{0%,100%{opacity:0.15}50%{opacity:0.3}}
                @keyframes fb-shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-2px)}75%{transform:translateX(2px)}}
                @keyframes fb-wave{0%,100%{opacity:0.2;transform:scale(1)}50%{opacity:0.35;transform:scale(1.05)}}
                .fb-pulse{animation:fb-pulse 2.5s ease-in-out infinite}
                .fb-shake{animation:fb-shake 0.4s ease-in-out infinite}
                .fb-wave{animation:fb-wave 3s ease-in-out infinite}
              `}</style>
              <svg viewBox="0 0 300 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%" }}>
                {/* Safety circles */}
                <circle cx="150" cy="150" r="130" fill="#5C7A6A" opacity="0.04" className="fb-wave" />
                <circle cx="150" cy="150" r="95" fill="#5C7A6A" opacity="0.06" />

                {/* Person */}
                <circle cx="150" cy="100" r="26" fill="#1B2B4B" opacity="0.35" />
                <path d="M150 126 C128 126 110 148 110 173 L110 200 L190 200 L190 173 C190 148 172 126 150 126Z" fill="#1B2B4B" opacity="0.25" />

                {/* Exclamation marks around (anxiety signals) */}
                <text x="85" y="85" fill="#C4614A" fontSize="18" fontWeight="700" opacity="0.4" className="fb-shake">!</text>
                <text x="210" y="90" fill="#C4614A" fontSize="16" fontWeight="700" opacity="0.35" className="fb-shake">!</text>
                <text x="75" y="145" fill="#C4614A" fontSize="14" fontWeight="700" opacity="0.3" className="fb-shake">!</text>
                <text x="220" y="155" fill="#C4614A" fontSize="15" fontWeight="700" opacity="0.3" className="fb-shake">!</text>

                {/* Shield / safety arc */}
                <path d="M70 220 Q150 190 230 220" stroke="#5C7A6A" strokeWidth="2" opacity="0.2" fill="none" strokeLinecap="round" />

                {/* Brain with lock */}
                <circle cx="150" cy="100" r="18" fill="none" stroke="#C4614A" strokeWidth="1.5" opacity="0.25" className="fb-pulse" />
                <circle cx="150" cy="100" r="28" fill="none" stroke="#C4614A" strokeWidth="1" opacity="0.15" className="fb-pulse" />

                {/* Small spider, snake, plane icons (fobia triggers) */}
                <text x="60" y="210" fill="#1B2B4B" fontSize="20" opacity="0.15">🕷️</text>
                <text x="130" y="240" fill="#1B2B4B" fontSize="18" opacity="0.12">✈️</text>
                <text x="210" y="215" fill="#1B2B4B" fontSize="18" opacity="0.15">🏔️</text>

                {/* Bottom text */}
                <text x="150" y="280" textAnchor="middle" fill="#5C7A6A" fontSize="10" fontWeight="500" opacity="0.4">mintea știe. corpul nu.</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── CE SUNT FOBIILE SPECIFICE ── */}
      <section style={{ background: "var(--color-background-white)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", lineHeight: 1.3, marginBottom: 20 }}>
            Ce sunt fobiile specifice
          </h2>
          <p style={{ marginBottom: 16 }}>
            O fobie specifică este o frică intensă și persistentă față de un obiect sau o situație concretă, disproporționată față de pericolul real, care duce la evitare activă și afectează viața de zi cu zi. Fobiile specifice sunt cea mai frecventă tulburare de anxietate, afectând <strong>7-12.5% din populație</strong>.
          </p>
          <p style={{ marginBottom: 32 }}>
            Au cel mai bun prognostic din toate tulburările de anxietate, cu <strong>80-95% rată de succes</strong> la tratamentul prin expunere, adesea în doar 1-12 ședințe.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 24, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            Cele 5 tipuri de fobii specifice
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
            {[
              ["Tipul animal", "Frica de câini, păianjeni, șerpi, insecte. Debutează frecvent în copilărie, între 5 și 9 ani. La multe persoane, nu e doar frică, ci și un dezgust intens."],
              ["Tipul mediu natural", "Frica de înălțimi, apă, furtuni, întuneric. În cazul fobiei de înălțimi, există o componentă vestibulară reală.. amețeala nu e doar \"în capul tău\"."],
              ["Tipul sânge-injecție-rănire", "Singura fobie cu mecanism fiziologic diferit: în loc de puls accelerat, produce o cădere bruscă a tensiunii, ceea ce poate duce la leșin. 61% au cel puțin o rudă de gradul I cu aceeași frică."],
              ["Tipul situațional", "Frica de avion, lift, spații închise, tuneluri, poduri. Debutează mai târziu, frecvent în jurul vârstei de 25 de ani."],
              ["Alt tip", "Orice fobie care nu se încadrează.. frica de a vomita, de sufocare, de personaje costumate, de sunete puternice."],
            ].map(([title, text], i) => (
              <div key={i} style={{ padding: "20px 24px", background: "var(--color-background)", borderRadius: 12, border: "1px solid var(--color-border)" }}>
                <h4 style={{ fontFamily: "var(--font-body)", fontSize: 17, fontWeight: 600, color: "var(--color-primary)", marginBottom: 8 }}>{title}</h4>
                <p style={{ fontSize: 15, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 24, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            Frică normală vs. fobie specifică
          </h3>
          <p style={{ marginBottom: 24 }}>
            Diferența nu e de intensitate. Nu e vorba că ți-e mai frică. E o diferență de tip, nu de grad.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
            <div style={{ padding: "24px", background: "var(--color-secondary-light)", borderRadius: 12, borderTop: "3px solid var(--color-secondary)" }}>
              <h4 style={{ fontFamily: "var(--font-body)", fontSize: 16, fontWeight: 600, color: "var(--color-secondary)", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.05em" }}>Frică normală</h4>
              <p style={{ fontSize: 15, color: "var(--color-text)", lineHeight: 1.7, margin: 0 }}>
                Te temi de câini dar treci pe lângă un câine, cu inima accelerată, poate cu un mic ocol. Disconfortul trece repede. Nu îți modifici viața din cauza asta.
              </p>
            </div>
            <div style={{ padding: "24px", background: "#FDF2EF", borderRadius: 12, borderTop: "3px solid var(--color-accent)" }}>
              <h4 style={{ fontFamily: "var(--font-body)", fontSize: 16, fontWeight: 600, color: "var(--color-accent)", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.05em" }}>Fobie specifică</h4>
              <p style={{ fontSize: 15, color: "var(--color-text)", lineHeight: 1.7, margin: 0 }}>
                Faci un ocol de 3 străzi ca să nu treci pe lângă un câine. Nu mergi la prieteni care au câine. Verifici în avans dacă la destinație vor fi câini. Îți reorganizezi viața.
              </p>
            </div>
          </div>

          <p>
            <strong>Diferența nu e cât de tare bate inima. Diferența e ce faci din cauza asta.</strong>
          </p>
        </div>
      </section>

      {/* ── CUM FUNCȚIONEAZĂ ── */}
      <section style={{ background: "var(--color-primary)", color: "#FAF7F2", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "#FAF7F2", lineHeight: 1.3, marginBottom: 20 }}>
            Cum funcționează fobia
          </h2>

          <p style={{ color: "rgba(250,247,242,0.8)", marginBottom: 24, fontSize: 18 }}>
            Sistemul tău de alarmă intern funcționează perfect. Problema e că <strong style={{ color: "#FAF7F2" }}>reacționează la fel de intens</strong> și la un pericol real, și la ceva inofensiv. Nu e defect. E calibrat prea sensibil. Și pentru că reacția e atât de neplăcută, ai învățat să eviți orice ar putea-o declanșa.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "#FAF7F2", marginBottom: 16, marginTop: 40 }}>
            Ce se întâmplă în corp și minte când apare frica
          </h3>
          <p style={{ color: "rgba(250,247,242,0.8)", marginBottom: 24 }}>
            Frica activează trei sisteme simultan. Fiecare se simte diferit, dar toate se alimentează reciproc:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 32 }}>
            {[
              ["Corpul", "Inima bate repede, palmele transpiră, amețești, simți presiune în piept, tremuri. Corpul se pregătește să fugă de un pericol care nu există."],
              ["Mintea", "Gânduri automate: \"ceva rău se va întâmpla\", \"nu voi putea face față\", \"voi pierde controlul\". Nu le alegi. Apar singure."],
              ["Comportamentul", "Fugi, eviți, cauți scăpare. Fiecare evitare reduce frica pe moment, dar o crește pe termen lung."],
            ].map(([title, text], i) => (
              <div key={i} style={{ padding: 24, background: "rgba(250,247,242,0.06)", borderRadius: 12, borderTop: "3px solid #C4966C" }}>
                <h4 style={{ fontFamily: "var(--font-body)", fontSize: 16, fontWeight: 600, color: "#C4966C", marginBottom: 8 }}>{title}</h4>
                <p style={{ fontSize: 14, color: "rgba(250,247,242,0.7)", lineHeight: 1.7, margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "#FAF7F2", marginBottom: 12, marginTop: 40 }}>
            De ce creierul exagerează pericolul
          </h3>
          <p style={{ color: "rgba(250,247,242,0.8)" }}>
            În fobii, creierul face o eroare sistematică: <strong style={{ color: "#FAF7F2" }}>supraestimează dramatic probabilitatea</strong> ca lucrul temut să se întâmple. O persoană cu fobie de zbor estimează riscul ca avionul să se prăbușească drept semnificativ, deși probabilitatea reală e de 1 la 10 milioane de zboruri. Aceeași persoană traversează strada zilnic fără anxietate, deși riscul real e de 1 la 600. Eroarea nu e generală.. persoana judecă corect în toate celelalte domenii. Doar în zona fobiei, calibrarea e defectă.
          </p>
        </div>
      </section>

      {/* ── DE CE NU TRECE ── */}
      <section style={{ background: "var(--color-background)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", lineHeight: 1.3, marginBottom: 20 }}>
            De ce fobia nu trece de la sine
          </h2>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 12 }}>
            Evitarea.. cea mai logică greșeală
          </h3>
          <p style={{ marginBottom: 16 }}>
            Fiecare act de evitare pare logic. Dar fiecare evitare împiedică două tipuri de învățare simultane: că scenariul temut nu se întâmplă de fapt, și că ai capacitatea de a face față chiar dacă s-ar întâmpla.
          </p>
          <p style={{ marginBottom: 32 }}>
            O persoană care evită lifturile de 5 ani nu are aceeași fobie ca în ziua 1. Are una mai puternică. Evitarea se extinde progresiv, englobând tot mai multe situații.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 12 }}>
            Piramida fricilor.. frica de propria frică
          </h3>
          <p style={{ marginBottom: 24, color: "var(--color-text-secondary)" }}>
            Când cineva spune "mi-e frică de câini", asta e doar stratul de la suprafață. Sub el se ascund straturi mai profunde pe care de obicei nu le conștientizăm. Cu cât cobori mai adânc, cu atât înțelegi mai bine de ce fobia pare atât de "irațională" din exterior:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              ["1", "Frica de obiect", "Mi-e frică de câini.", "Stratul vizibil. Ce spui lumii. Ce știi tu însuți despre frica ta."],
              ["2", "Frica de propria reacție", "Mi-e frică de ce voi simți când voi vedea un câine.", "Nu câinele e problema. Ci avalanșa de senzații pe care o declanșează."],
              ["3", "Frica de pierderea controlului", "Mi-e frică că nu voi putea controla ce simt.", "Voi țipa? Voi îngheța? Mă voi face de rușine? Voi pierde controlul complet?"],
              ["4", "Frica că nu se va opri", "Mi-e frică că odată ce începe, frica nu se va termina.", "Asta explică de ce mulți oameni evită total. Nu se tem de situație, ci de starea care nu se mai oprește."],
              ["5", "Frica de moarte", "La nivelul cel mai profund, corpul crede că e în pericol de moarte.", "Aici ajunge corpul. De aceea reacția e atât de intensă. Nu e dramă. E biologie."],
            ].map(([num, title, quote, explain], i) => (
              <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "16px", background: i === 4 ? "var(--color-secondary-light)" : "var(--color-background-white)", borderRadius: 8, border: "1px solid var(--color-border)" }}>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: 28, fontWeight: 400, color: "var(--color-secondary)", opacity: 0.4, lineHeight: 1, flexShrink: 0, width: 28, textAlign: "center" }}>{num}</span>
                <div>
                  <strong style={{ color: "var(--color-primary)", fontSize: 16 }}>{title}</strong>
                  <p style={{ color: "var(--color-accent)", fontSize: 14, margin: "4px 0", fontWeight: 500 }}>{quote}</p>
                  <p style={{ color: "var(--color-text-secondary)", fontSize: 14, margin: 0, lineHeight: 1.6 }}>{explain}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CE VREA SĂ SPUNĂ PSIHICUL ── */}
      <section style={{ background: "var(--color-background-white)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", lineHeight: 1.3, marginBottom: 20 }}>
            Ce vrea să spună psihicul prin fobia ta
          </h2>
          <p style={{ color: "var(--color-text-secondary)", fontSize: 17, marginBottom: 32 }}>
            Această secțiune e diferită. Până acum am vorbit despre cum funcționează fobia. Acum vreau să vorbim despre <strong style={{ color: "var(--color-primary)" }}>de ce există</strong>. Perspectiva asta vine din practica mea clinică și din psihologia psihodinamică.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 12 }}>
            Fobia ca soluție, nu ca defecțiune
          </h3>
          <p style={{ marginBottom: 32 }}>
            Psihicul ia un pericol intern, ceva pe care nu-l poți evita pentru că vine din tine, un conflict emoțional, o furie neexprimată, o pierdere neprocesată, și îl mută pe un obiect extern pe care POȚI să-l eviți. Pierzi libertate de mișcare, câștigi eliminarea anxietății.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 12 }}>
            Aceeași fobie, trei răni diferite
          </h3>
          <p style={{ marginBottom: 16 }}>
            Trei persoane aveau aceeași fobie: fobie de condus. Dar motivele erau complet diferite.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
            {[
              ["Abandonul la volan", "Un bărbat. Soția i-a spus că îl părăsește în timp ce conducea. Nu se temea de trafic. Se temea de abandonul care devenise asociat cu acel context."],
              ["Conflictul identitar", "O femeie. Se temea că dacă pleacă de acasă, nu se va mai întoarce niciodată. Condusul simboliza autonomia, lucrul de care își-l dorea cel mai mult și de care se temea cel mai tare."],
              ["Mama eșuată", "O mamă. Se temea că dacă pleacă cu o treabă neterminată, este o mamă eșuată. Plecarea activa un audit intern implacabil."],
            ].map(([title, text], i) => (
              <div key={i} style={{ padding: "20px 24px", borderLeft: "3px solid var(--color-secondary)", background: "var(--color-background)", borderRadius: "0 8px 8px 0" }}>
                <h4 style={{ fontFamily: "var(--font-body)", fontSize: 17, fontWeight: 600, color: "var(--color-primary)", marginBottom: 8 }}>{title}</h4>
                <p style={{ fontSize: 15, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 12 }}>
            Cele 5 răni care stau la baza fobiilor
          </h3>
          <p style={{ color: "var(--color-text-secondary)", marginBottom: 24 }}>
            Cercetătorul Barry Wolfe a descoperit că în spatele fiecărei fobii se ascunde o convingere dureroasă despre sine. Nu e un gând conștient, ci o teamă profundă care se activează automat. Citește-le și observă dacă te recunoști:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
            {[
              ["Nu am încredere în propriul corp", "Simți că corpul tău te poate trăda oricând. Că inima se poate opri, că poți leșina, că ceva se poate defecta fără avertisment. Apare mai ales în fobii de zbor, înălțimi sau condus, unde simți că nu ai control asupra a ce se întâmplă cu tine fizic.", "Exemplu: nu te temi de avion, te temi că corpul tău va face ceva catastrofal la 10.000 de metri."],
              ["Voi fi descoperit ca incapabil", "Simți că ești fundamental incompetent și că orice situație cu miză te va expune. Ai crescut într-un mediu unde competența era condiția iubirii, unde standardele se ridicau de fiecare dată când le atingeai.", "Exemplu: nu te temi de prezentare, te temi că oamenii vor vedea cât de incapabil ești de fapt."],
              ["Sunt defect ca persoană", "Nu că ai făcut ceva rău, ci că ești ceva rău. Rușinea nu e despre un comportament, ci despre identitate. Te rușinezi și de faptul că ai o fobie, ceea ce adaugă un strat în plus de suferință.", "Exemplu: știi că un păianjen nu te poate răni, dar faptul că tot ți-e frică e pentru tine dovada că ești defect."],
              ["Voi rămâne singur", "Simți că legăturile cu ceilalți sunt fragile și pot fi rupte oricând. Nu te temi de drum, ci de ce ar putea însemna îndepărtarea: pierderea conexiunii cu cei de care depinzi emoțional.", "Exemplu: nu te temi de condus, te temi de ce se întâmplă dacă te îndepărtezi de casa sigură."],
              ["Nu știu cine sunt fără frica asta", "Două părți din tine trag în direcții opuse: vrei libertate dar ai nevoie de siguranță. Vrei să pleci dar te temi să nu pierzi ce ai. Fobia devine câmpul de luptă pe care cele două părți se confruntă zilnic.", "Exemplu: fobia de condus poate ascunde un conflict între nevoia de independență și frica de separare."],
            ].map(([title, text, exemplu], i) => (
              <div key={i} style={{ padding: "20px 24px", background: "var(--color-background)", borderRadius: 12, border: "1px solid var(--color-border)" }}>
                <h4 style={{ fontFamily: "var(--font-body)", fontSize: 17, fontWeight: 600, color: "var(--color-primary)", marginBottom: 8 }}>{title}</h4>
                <p style={{ fontSize: 15, color: "var(--color-text)", lineHeight: 1.7, marginBottom: 8 }}>{text}</p>
                <p style={{ fontSize: 14, color: "var(--color-secondary)", lineHeight: 1.6, margin: 0, fontWeight: 500 }}>{exemplu}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIPURI DE FOBII ── */}
      <section style={{ background: "var(--color-background)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", lineHeight: 1.3, marginBottom: 20 }}>
            Tipurile de fobii specifice
          </h2>
          <p style={{ color: "var(--color-text-secondary)", marginBottom: 32 }}>
            Fiecare tip de fobie are particularități distincte.. mecanisme fiziologice diferite, strategii de tratament diferite, și o logică internă proprie.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              ["Fobia de animale", "Cea mai frecventă categorie. Include frica de câini, păianjeni, șerpi, insecte. Combină frica cu un dezgust intens.", "/tipuri/fobii-specifice/fobie-de-animale"],
              ["Fobia de sânge și ace", "Singura fobie cu mecanism fiziologic invers: produce căderea tensiunii, nu creșterea ei. 70-80% au leșinat cel puțin o dată.", "/tipuri/fobii-specifice/fobie-de-sange"],
              ["Fobia de înălțimi", "Are o componentă vestibulară reală. Mulți raportează un gând intruziv: impulsul de a sări, care nu e intenție, ci anxietate.", "/tipuri/fobii-specifice/fobie-de-inaltime"],
              ["Claustrofobia", "Nu e o singură frică, ci combinația a două: frica de restricție fizică și frica de sufocare.", "/tipuri/fobii-specifice/claustrofobie"],
              ["Fobia de zbor", "O fobie compusă care poate include până la 5 frici diferite: prăbușire, înălțimi, spații închise, turbulențe și lipsa controlului.", "/tipuri/fobii-specifice/fobie-de-zbor"],
            ].map(([title, desc, href], i) => (
              <Link key={i} href={href} style={{ display: "block", padding: "20px 24px", background: "var(--color-background-white)", borderRadius: 12, border: "1px solid var(--color-border)", textDecoration: "none" }}>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 500, color: "var(--color-primary)", marginBottom: 8 }}>
                  {title} <span style={{ color: "var(--color-accent)", fontSize: 14 }}>&rarr;</span>
                </h3>
                <p style={{ fontSize: 15, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUM SE TRATEAZĂ ── */}
      <section style={{ background: "var(--color-primary)", color: "#FAF7F2", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "#FAF7F2", lineHeight: 1.3, marginBottom: 20 }}>
            Cum se tratează fobiile specifice
          </h2>
          <p style={{ color: "rgba(250,247,242,0.8)", marginBottom: 24 }}>
            Fobiile specifice sunt probabil cea mai tratabilă condiție din psihologia clinică.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 24, marginBottom: 40, textAlign: "center" }}>
            {[
              ["7-12%", "din populație are cel puțin o fobie specifică"],
              ["1-12", "ședințe de psihoterapie necesare"],
              ["#1", "cel mai bun prognostic din toate tulburările de anxietate"],
            ].map(([num, label], i) => (
              <div key={i}>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: 40, fontWeight: 400, color: "#C4966C", display: "block", lineHeight: 1 }}>{num}</span>
                <span style={{ fontSize: 13, color: "rgba(250,247,242,0.6)", marginTop: 4, display: "block" }}>{label}</span>
              </div>
            ))}
          </div>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "#FAF7F2", marginBottom: 12 }}>
            Expunerea ca experiment, nu ca tortură
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
            {[
              ["Pasul 1", "Identifici predicția exactă pe care o face creierul tău. Nu \"o să fie rău\", ci ceva specific și testabil."],
              ["Pasul 2", "Intri în situația temută FĂRĂ comportamente de siguranță. Fără alcool. Fără telefonul în mână. Fără persoana de siguranță."],
              ["Pasul 3", "Observi activ ce se întâmplă. Compari predicția cu realitatea. Cu fiecare experiment care infirmă predicția, schema de amenințare se actualizează."],
            ].map(([step, text], i) => (
              <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 500, color: "#C4966C", flexShrink: 0 }}>{step}</span>
                <p style={{ color: "rgba(250,247,242,0.8)", margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CE POȚI FACE ACUM ── */}
      <section id="ce-poti-face" style={{ background: "var(--color-background-white)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", lineHeight: 1.3, marginBottom: 20 }}>
            Ce poți face acum
          </h2>

          {[
            ["1. Scannerul de siguranță", "În orice situație care îți provoacă frică, răspunde la trei întrebări: Ce anume din această situație este SIGUR? Ce dovezi concrete există că lucrurile ar putea merge bine? Când în trecut o situație similară s-a rezolvat fără probleme?"],
            ["2. Lista evitărilor tale", "Ia o foaie de hârtie și notează TOT ce eviți din cauza fobiei. Nu doar obiectul central, ci tot ce eviți indirect: parcuri, călătorii, analize medicale. Lista completă îți arată costul real al fobiei."],
            ["3. Separarea nivelurilor", "Când simți frica, fă distincția: Ce simt? (descriere neutră) Ce-mi spun DESPRE ce simt? (meta-evaluarea) Este această evaluare un fapt sau o interpretare? Scopul nu e să elimini frica. Scopul e să oprești amplificarea ei."],
          ].map(([title, text], i) => (
            <div key={i} style={{ marginBottom: 32 }}>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 12 }}>{title}</h3>
              <p style={{ color: "var(--color-text-secondary)" }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 12 LUCRURI ── */}
      <section style={{ background: "var(--color-background)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", lineHeight: 1.3, marginBottom: 24 }}>
            12 lucruri pe care majoritatea site-urilor nu ți le spun despre fobii
          </h2>
          {[
            ["Fobia ta nu e irațională. E cea mai inteligentă soluție pe care o puteai găsi la 5 ani.", "Când erai mic, psihicul tău a avut de-a face cu ceva copleșitor, un conflict emoțional, o frică pe care nu o puteai înțelege. Ca să te protejeze, a luat acea frică și a atașat-o de ceva concret din exterior: un câine, un lift, un avion. Acum ai un obiect de care să te ferești, în loc de o durere internă de care nu poți fugi. Dacă te uiți doar la obiect, pare irațional. Dacă te uiți la ce te protejează de fapt, are tot sensul din lume."],
            ["Ce a pornit fobia nu e neapărat ce o menține acum.", "Poate nu știi de unde a venit fobia ta. Poate s-a întâmplat ceva când erai foarte mic și nu îți amintești. Vestea bună: pentru tratament, nu trebuie neapărat să știi cauza originală. Ce contează este ce o ține în viață acum: evitarea (de fiecare dată când ocolești situația, fobia se întărește), comportamentele de siguranță (trucurile pe care le folosești ca să faci față) și gândurile automate care îți spun că pericolul e real."],
            ["Nu trebuie să fi trecut prin ceva traumatic ca să ai o fobie.", "Mulți oameni spun: dar mie nu mi s-a întâmplat nimic grav. Și au dreptate. Fobiile pot apărea pe trei căi diferite: ai trăit direct ceva (un câine te-a mușcat), ai văzut pe altcineva speriat (mama ta țipa când vedea un păianjen), sau ai auzit în mod repetat că ceva e periculos (ai crescut auzind că avioanele sunt periculoase). Oricare dintre aceste căi e suficientă. Nu ai nevoie de o traumă majoră."],
            ["Frica nu se șterge din creier. Se subordonează unei memorii noi.", "Când faci terapie de expunere, creierul nu uită frica veche. Creează o memorie nouă, mai puternică: am fost în situația asta, am simțit frică, și nu s-a întâmplat nimic rău. Noua memorie devine dominantă. Dar cea veche rămâne stocată și poate reapărea în momente de stres intens. Când se întâmplă asta, nu înseamnă că tratamentul a eșuat. Înseamnă doar că trebuie să reîmprospătezi memoria nouă."],
            ["Relaxarea e cel mai periculos sfat pentru fobia de sânge.", "Toată lumea spune: relaxează-te, respiră adânc. La fobia de sânge, asta e exact ce nu trebuie să faci. De ce? Pentru că în această fobie, tensiunea arterială scade brusc (în loc să crească, cum se întâmplă la toate celelalte fobii). Relaxarea o scade și mai mult, ceea ce te duce spre leșin. Singurul protocol care funcționează e inversul: încordezi mușchii brațelor și picioarelor ca să menții tensiunea."],
            ["Dacă ai scăpat de o fobie și a apărut alta, nu e întâmplare.", "Imaginează-ți apa care curge prin grădină. Dacă blochezi un canal, apa nu dispare. Găsește alt drum. La fel funcționează și fobia: dacă tratezi doar simptomul (evitarea câinilor) fără să înțelegi ce se ascunde dedesubt (poate o frică de vulnerabilitate), energia aceea emoțională se mută pe alt obiect. Acum nu mai e câinele, e liftul. Obiectul se schimbă, dar senzația din corp rămâne aceeași."],
            ["40% dintre atacurile de frică nu sunt însoțite de nicio creștere reală a pulsului.", "Într-un studiu cu monitorizare cardiacă 24 de ore, cercetătorii au descoperit ceva surprinzător: în 40% din cazuri, persoanele raportau frică intensă, dar inima lor nu bătea mai repede. Doar credeau că bate. Și invers: multe episoade de puls ridicat real nu au fost percepute ca frică. Ce înseamnă asta? Că experiența fricii e construită de mintea ta, nu doar de corp. Percepția e mai puternică decât fiziologia."],
            ["Oamenii inteligenți sunt adesea cei mai frustrați de fobiile lor.", "Știu că nu e logic. Știu că un păianjen de 2 cm nu mă poate omorî. Am citit statisticile. Și totuși, corpul meu reacționează. Exact asta e frustrarea: problema nu e la nivel de informație. E la nivel de învățare emoțională, un tip de memorie la care mintea rațională nu are acces direct. Un medic cardiolog poate avea atacuri de panică. Cunoștințele lui sunt perfecte. Dar în momentul atacului, cunoștințele nu contează."],
            ["Unele frici sunt programate în noi de mii de ani.", "Psihologul Martin Seligman a demonstrat în 1971 că anumite obiecte au probabilitate mult mai mare de a deveni temute: șerpi, păianjeni, înălțimi, întunericul, spații închise. De ce? Pentru că în istoria speciei umane, acestea au fost amenințări reale. Creierul tău e mai pregătit să învețe frica de un șarpe decât frica de o priză electrică, deși priza e obiectiv mai periculoasă în lumea modernă. Nu e defect. E moștenire biologică."],
            ["Atacul de anxietate atinge maximul în 10 minute și durează sub 20.", "Corpul tău nu poate menține alarma maximă la infinit. Fiziologic, sistemul nervos simpatic (cel care produce palpitațiile, transpirația, tremuratul) se epuizează. După 10-20 de minute, sistemul parasimpatic preia controlul și totul coboară. Această informație, aparent simplă, este unul dintre cele mai puternice instrumente: transformă experiența din ceva ce pare pericol de moarte în disconfort intens cu durată cunoscută și limitată."],
            ["Un bărbat avea fobie de maioneză. Și nu era nebun.", "Maioneza era pe masă în momentul în care părinții lui au avut cearta care a dus la divorț. El avea 6 ani. Nu înțelegea ce se întâmpla, dar simțea catastrofa. Și tot ce mintea lui de 6 ani a putut face a fost să lege haosul de ce era prezent în acel moment: mirosul, textura, imaginea maionezei. Maioneza nu era periculoasă. Era portalul senzorial către momentul în care lumea lui s-a desfăcut. Dacă ai o fobie care pare ciudată, nu ești ciudat. Ai doar un cod pe care încă nu l-ai descifrat."],
            ["Fobia ta protejează pe cineva. Poate chiar pe tine.", "Orice fobie are o funcție în viața ta, chiar dacă nu o vezi. Uneori te protejează de un conflict intern pe care nu-l poți rezolva direct. Alteori protejează o relație: partenerul care conduce mereu pentru că tu nu poți, familia care evită parcurile pentru tine. Întrebarea de ce am această fobie e utilă. Dar o întrebare și mai utilă: pe cine sau ce protejează fobia asta? Și ce s-ar schimba dacă ar dispărea mâine?"],
          ].map(([title, text], i) => (
            <Insight key={i} title={`${i + 1}. ${title}`} text={text} />
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: "var(--color-background-white)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", lineHeight: 1.3, marginBottom: 24 }}>
            Întrebări frecvente despre fobii specifice
          </h2>
          {[
            ["Se vindecă complet o fobie specifică?", "În majoritatea cazurilor, da. 80-95% dintre persoanele care urmează tratament prin expunere raportează îmbunătățiri semnificative. Tratamentul durează între 1 și 12 ședințe."],
            ["Cât durează tratamentul?", "Între 1 și 12 ședințe. În modelul Ost, o singură ședință de 2-3 ore poate fi suficientă. Fobiile au cel mai bun prognostic din toate tulburările de anxietate."],
            ["Pot scăpa de fobie singur?", "Parțial, da. Exercițiile de mai sus pot ajuta. Dar complet, rar. Un terapeut aduce calibrarea pașilor și accesul la straturile mai profunde pe care fobia le protejează."],
            ["Trebuie să iau medicamente?", "Nu ca primă linie. Fobia specifică este una dintre puținele tulburări pentru care medicația NU este recomandată ca prim tratament. Expunerea terapeutică are cele mai puternice dovezi."],
            ["De ce am fobie dacă nu am avut o experiență traumatică?", "Nu ai nevoie de o experiență dramatică ca să dezvolți o fobie. Sunt trei moduri în care poate apărea: ai trăit ceva direct (un câine te-a mușcat), ai văzut pe altcineva speriat (mama ta se panica la vederea unui păianjen) sau ai auzit în mod repetat că ceva e periculos (de mic ai tot auzit că avioanele cad). În plus, creierul uman e programat biologic să învețe mai repede frica de anumite lucruri: șerpi, înălțimi, întuneric. Asta e moștenire din mii de ani de evoluție, nu un defect al tău."],
            ["Pot să mor din cauza fobiei?", "Nu. Senzațiile sunt produse de răspunsul fight-or-flight. Corpul nu poate susține acel nivel de activare mai mult de câteva minute."],
            ["Cum știu dacă am o fobie sau doar o frică puternică?", "Cheia e evitarea activă. Dacă frica te face să îți modifici comportamentul, traseul, planurile, dacă îți afectează viața, e mai mult decât o frică puternică."],
            ["Fobiile se agravează cu vârsta?", "Fără tratament, fobiile nu se ameliorează de la sine. Evitarea se extinde progresiv, teritoriul sigur se micșorează."],
            ["Fobia se moștenește?", "Genele joacă un rol, dar nu mostenești o fobie pe deplin dezvoltată. Moștenești o predispoziție care, în combinație cu anumite experiențe, poate duce la dezvoltarea unei fobii."],
            ["De ce am scăpat de o fobie și a apărut alta?", "Gândește-te la fobia ca la un mesaj pe care psihicul tău încearcă să ți-l transmită. Dacă rezolvi doar forma mesajului (nu te mai temi de câini) dar nu înțelegi ce voia de fapt să-ți spună (poate o frică de vulnerabilitate, de pierdere a controlului, de abandon), atunci mesajul va găsi o altă formă prin care să iasă la suprafață. Ieri era frica de câini, azi e frica de lift, mâine poate fi frica de condus. Obiectul se schimbă, dar senzația din corp rămâne aceeași. Asta e un semn că sub fobie există ceva mai profund care încă așteaptă să fie înțeles."],
          ].map(([q, a], i) => (
            <FAQ key={i} q={q} a={a} />
          ))}
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section style={{ background: "var(--color-background)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 28, fontWeight: 400, color: "var(--color-primary)", lineHeight: 1.3, marginBottom: 12 }}>
            Următorul pas
          </h2>
          <p style={{ color: "var(--color-text-secondary)", marginBottom: 24, maxWidth: 520, margin: "0 auto 24px" }}>
            Dacă ai ajuns până aici, ai făcut deja ceva ce mulți oameni cu fobii nu fac niciodată.. ai căutat să înțelegi ce ți se întâmplă. Fobiile se vindecă. Și vindecarea nu e atât de lungă pe cât crezi.
          </p>
          <Link
            href="/programare?din=fobii-specifice"
            style={{ display: "inline-block", padding: "14px 32px", background: "var(--color-secondary)", color: "#fff", borderRadius: 8, fontSize: 16, fontWeight: 600, textDecoration: "none" }}
          >
            Trimite un mesaj
          </Link>
        </div>
      </section>

      {/* ── REFERINȚE ── */}
      <footer style={{ background: "var(--color-background-white)", padding: "48px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <button
            onClick={() => setRefsOpen(!refsOpen)}
            style={{ display: "flex", alignItems: "center", gap: 10, background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 500, color: "var(--color-primary)", padding: 0 }}
          >
            <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 28, height: 28, borderRadius: 6, background: "var(--color-primary)", color: "#FAF7F2", fontSize: 18, fontWeight: 600, transition: "transform 0.3s", transform: refsOpen ? "rotate(45deg)" : "none" }}>+</span>
            Referințe științifice (6 surse)
          </button>
          <div style={{ maxHeight: refsOpen ? 2000 : 0, overflow: "hidden", transition: "max-height 0.4s ease-out", paddingLeft: 38 }}>
            {[
              "Andrews, G., Creamer, M., Crino, R., Hunt, C., Lampe, L., & Page, A. (2003). The Treatment of Anxiety Disorders: Clinician Guides and Patient Manuals (2nd ed.). Cambridge University Press.",
              "Antony, M. M., Craske, M. G., & Barlow, D. H. (2006). Mastering Your Fears and Phobias: Therapist Guide (2nd ed.). Oxford University Press.",
              "Clark, D. A., & Beck, A. T. (2010). Cognitive Therapy of Anxiety Disorders: Science and Practice. Guilford Press.",
              "Freud, S. (1926). Inhibitions, Symptoms and Anxiety. Standard Edition, Vol. 20. Hogarth Press.",
              "Gabbard, G. O. (2005). Psychodynamic Psychiatry in Clinical Practice (4th ed.). American Psychiatric Publishing.",
              "Öst, L.-G. (1987). Applied relaxation: Description of a coping technique and review of controlled studies. Behaviour Research and Therapy, 25(5), 397-409.",
            ].map((ref, i) => (
              <p key={i} style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: 12, paddingTop: i === 0 ? 20 : 0 }}>{ref}</p>
            ))}
          </div>
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", textAlign: "center", marginTop: 32 }}>
            Această pagină nu înlocuiește un diagnostic profesional. Dacă te recunoști în ce ai citit, te încurajez să vorbești cu un specialist.
          </p>
        </div>
      </footer>
    </main>
  );
}
