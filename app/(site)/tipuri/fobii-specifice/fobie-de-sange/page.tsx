"use client";

import Link from "next/link";
import { useState } from "react";

/* ============================================================
   FOBIA DE SÂNGE ȘI ACE — Pagină completă
   Content: WorkMemory/tipuri/fobii-specifice/fobie-de-sange-pagina.md
   Design: Fraunces + Inter, CSS variables, pattern fobii-specifice hub
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
      <div style={{ maxHeight: open ? 800 : 0, overflow: "hidden", transition: "max-height 0.3s ease-out" }}>
        <p style={{ padding: "0 0 20px", color: "var(--color-text)", fontSize: 16, lineHeight: 1.7 }}>{a}</p>
      </div>
    </div>
  );
}

export default function FobieSangePage() {
  const [refsOpen, setRefsOpen] = useState(false);

  return (
    <main style={{ fontFamily: "var(--font-body)", color: "var(--color-text)", fontSize: 17, lineHeight: 1.75 }}>

      {/* ── HERO ── */}
      <section style={{ background: "var(--color-background)", padding: "48px 24px 64px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 48, flexWrap: "wrap" }}>
            {/* Text */}
            <div style={{ flex: 1, minWidth: 300 }}>
              {/* Breadcrumb */}
              <nav style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--color-text-secondary)", marginBottom: 24 }}>
                <Link href="/tipuri/fobii-specifice" style={{ color: "var(--color-text-secondary)", textDecoration: "underline", textUnderlineOffset: 3 }}>
                  Fobii specifice
                </Link>
                <span aria-hidden="true">&rarr;</span>
                <span style={{ color: "var(--color-text)" }}>Fobia de sânge</span>
              </nav>

              <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--color-text-secondary)", marginBottom: 24 }}>
                De Daniel Gagea, psiholog clinician, psihoterapeut
              </p>
              <h1 style={{ fontFamily: "var(--font-heading)", fontSize: 38, fontWeight: 400, color: "var(--color-primary)", lineHeight: 1.25, marginBottom: 16 }}>
                Fobia de sânge și ace
              </h1>
              <p style={{ fontSize: 17, color: "var(--color-text-secondary)", marginBottom: 24 }}>
                Ghid complet 2026
              </p>
              <p style={{ fontSize: 15, color: "var(--color-text-secondary)", marginBottom: 32 }}>
                Ai o recoltare de sânge programată și deja te gândești cum s-o eviți? <Link href="#ce-poti-face-acum" style={{ color: "var(--color-secondary)", textDecoration: "underline", textUnderlineOffset: 3 }}>Mergi direct la Ce poți face acum</Link>
              </p>
              <p style={{ fontSize: 17, color: "var(--color-text)", lineHeight: 1.75, marginBottom: 16 }}>
                Asistenta pregătește acul. Tu deja simți cum ți se face cald, cum vederea se îngustează, cum genunchii ți se înmoaie. Nu de durere ți-e frică. Durerea e suportabilă. Ce e insuportabil e altceva.. senzația că pierzi controlul, că podeaua se duce de sub tine, că ți se face negru în fața ochilor. Și rușinea. Rușinea că ești adult și că o simplă analiză de sânge te poate pune la pământ.
              </p>
              <p style={{ fontSize: 17, color: "var(--color-text)", lineHeight: 1.75, marginBottom: 16 }}>
                Ai încercat să te relaxezi. Să respiri adânc. Să te gândești la altceva. Nu a funcționat. Și nu a funcționat dintr-un motiv precis pe care probabil nimeni nu ți l-a explicat.
              </p>
              <p style={{ fontSize: 17, color: "var(--color-text)", lineHeight: 1.75 }}>
                <strong>Dacă te recunoști în aceste cuvinte, nu ești slab și nu exagerezi.</strong> Ai o fobie de sânge-injecție-rănire. Corpul tău funcționează diferit de al celorlalți oameni cu fobii. Și în acest ghid vei înțelege exact de ce se întâmplă asta, de ce sfaturile obișnuite nu merg, și ce funcționează în schimb.
              </p>
            </div>

            {/* Illustration */}
            <div style={{ flexShrink: 0, width: 300 }} aria-hidden="true">
              <style>{`
                @keyframes bs-pulse{0%,100%{opacity:0.15}50%{opacity:0.3}}
                @keyframes bs-drop{0%{transform:translateY(-8px);opacity:0}30%{opacity:1}100%{transform:translateY(8px);opacity:0}}
                @keyframes bs-wave{0%,100%{opacity:0.2;transform:scale(1)}50%{opacity:0.35;transform:scale(1.05)}}
                .bs-pulse{animation:bs-pulse 2.5s ease-in-out infinite}
                .bs-drop{animation:bs-drop 2s ease-in-out infinite}
                .bs-wave{animation:bs-wave 3s ease-in-out infinite}
              `}</style>
              <svg viewBox="0 0 300 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%" }}>
                {/* Safety circles */}
                <circle cx="150" cy="150" r="130" fill="#5C7A6A" opacity="0.04" className="bs-wave" />
                <circle cx="150" cy="150" r="95" fill="#5C7A6A" opacity="0.06" />

                {/* Person silhouette */}
                <circle cx="150" cy="100" r="26" fill="#1B2B4B" opacity="0.35" />
                <path d="M120 140 Q150 130 180 140 L175 200 Q150 210 125 200 Z" fill="#1B2B4B" opacity="0.25" />

                {/* Syringe */}
                <rect x="195" y="85" width="6" height="50" rx="2" fill="#1B2B4B" opacity="0.3" transform="rotate(30 198 110)" />
                <rect x="196" y="78" width="4" height="12" rx="1" fill="#1B2B4B" opacity="0.2" transform="rotate(30 198 84)" />
                <line x1="200" y1="132" x2="202" y2="142" stroke="#1B2B4B" strokeWidth="1.5" opacity="0.25" transform="rotate(30 201 137)" />

                {/* Blood drops */}
                <ellipse cx="120" cy="170" rx="5" ry="7" fill="#8B3A3A" opacity="0.3" className="bs-drop" />
                <ellipse cx="175" cy="185" rx="4" ry="6" fill="#8B3A3A" opacity="0.25" className="bs-drop" style={{ animationDelay: "0.7s" }} />
                <ellipse cx="145" cy="195" rx="3" ry="5" fill="#8B3A3A" opacity="0.2" className="bs-drop" style={{ animationDelay: "1.4s" }} />

                {/* Heartbeat line */}
                <polyline points="60,250 90,250 100,250 110,235 120,265 130,245 140,255 150,250 180,250 190,250 200,240 210,260 220,250 240,250" stroke="#5C7A6A" strokeWidth="1.5" opacity="0.25" fill="none" className="bs-pulse" />

                {/* Label */}
                <text x="150" y="305" textAnchor="middle" fill="#1B2B4B" opacity="0.4" style={{ fontSize: 11, fontFamily: "var(--font-body)" }}>răspunsul vasovagal</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── CE ESTE ── */}
      <section style={{ background: "var(--color-background-white)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 id="ce-este" style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", marginBottom: 24 }}>
            Ce este fobia de sânge și ace
          </h2>
          <p style={{ marginBottom: 16 }}>
            Fobia de sânge-injecție-rănire este o frică intensă și persistentă față de vederea sângelui, a rănilor, a acelor sau a procedurilor medicale, disproporționată față de pericolul real, care duce la evitare activă și afectează viața de zi cu zi. Face parte din cele 5 subtipuri de fobii specifice și afectează aproximativ 3-4% din populație.
          </p>
          <p style={{ marginBottom: 16 }}>
            Are cel mai timpuriu debut dintre fobii, apărând frecvent între 5 și 9 ani, și o componentă genetică remarcabilă.. 61% dintre persoanele cu această fobie au cel puțin o rudă de gradul I cu aceeași problemă.
          </p>
          <p style={{ marginBottom: 16 }}>
            Spre deosebire de majoritatea celorlalte fobii, distribuția pe gen este relativ echilibrată. Nu e o problemă &quot;de femei&quot; sau &quot;de bărbați&quot;. Apare la toți, indiferent de vârstă, profesie sau personalitate.
          </p>
          <p>
            Și are o particularitate pe care nicio altă fobie nu o are. Un mecanism fiziologic complet diferit, care face ca aproape tot ce știi despre gestionarea fricii să nu se aplice aici.
          </p>
        </div>
      </section>

      {/* ── DE CE E DIFERITĂ ── */}
      <section style={{ background: "var(--color-background)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", marginBottom: 24 }}>
            De ce e diferită de orice altă fobie
          </h2>
          <p style={{ marginBottom: 24 }}>
            Aici e cheia întregii povești. Dacă înțelegi asta, înțelegi totul.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            Ce se întâmplă în orice altă fobie
          </h3>
          <p style={{ marginBottom: 24 }}>
            Când o persoană cu fobie de câini vede un câine, corpul ei face exact ce face corpul oricui în pericol.. activează sistemul de &quot;luptă sau fugi&quot;. Inima bate mai repede, tensiunea arterială crește, adrenalina se eliberează, mușchii se tensionează. Senzațiile sunt neplăcute, dar corpul rămâne în stare de alertă maximă. Nu leșini. Rămâi conștient, gata să fugi.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            Ce se întâmplă în fobia de sânge
          </h3>
          <p style={{ marginBottom: 16 }}>
            Corpul tău face ceva complet diferit. Și o face în două faze.
          </p>

          {/* Faza 1 & 2 cards */}
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginBottom: 24 }}>
            <div style={{ flex: 1, minWidth: 280, background: "var(--color-background-white)", borderRadius: 12, padding: 24, border: "1px solid var(--color-border)" }}>
              <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-secondary)", fontWeight: 600, marginBottom: 8 }}>Faza 1: Activare</p>
              <p style={{ fontSize: 16 }}>
                La vederea sângelui, a unui ac, sau a unei răni, corpul tău reacționează inițial la fel ca în orice altă fobie. Tensiunea arterială crește. Pulsul se accelerează. Transpiri. Simți frică. Totul pare &quot;normal&quot; pentru o fobie.
              </p>
            </div>
            <div style={{ flex: 1, minWidth: 280, background: "var(--color-background-white)", borderRadius: 12, padding: 24, border: "1px solid var(--color-border)" }}>
              <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", color: "#8B3A3A", fontWeight: 600, marginBottom: 8 }}>Faza 2: Inversare bruscă</p>
              <p style={{ fontSize: 16 }}>
                Și apoi se întâmplă ceva ce nu se întâmplă în nicio altă fobie. În câteva minute, tensiunea arterială scade brusc. Pulsul încetinește dramatic. Fluxul de sânge către creier se reduce. Și pierzi cunoștința.
              </p>
            </div>
          </div>

          <p style={{ marginBottom: 16 }}>
            Acest mecanism se numește <strong>răspuns vasovagal bifazic</strong>. &quot;Bifazic&quot; pentru că are două faze opuse. &quot;Vasovagal&quot; pentru că nervul vag, cel mai lung nerv din corpul tău, preia controlul și produce o scădere bruscă a tensiunii și a pulsului.
          </p>
          <p style={{ marginBottom: 16 }}>
            70-80% dintre persoanele cu această fobie au leșinat cel puțin o dată. Nu din cauza fricii excesive. Nu din cauza slăbiciunii. Din cauza unui mecanism fiziologic concret, măsurabil, pe care corpul lor îl execută automat.
          </p>

          {/* Key statement */}
          <div style={{ background: "var(--color-primary)", borderRadius: 12, padding: "24px 28px", marginTop: 24 }}>
            <p style={{ color: "#ffffff", fontSize: 17, fontWeight: 500, lineHeight: 1.65, margin: 0 }}>
              Asta e singura fobie în care corpul tău nu rămâne în alertă. E singura fobie în care corpul tău, practic, se oprește.
            </p>
          </div>
        </div>
      </section>

      {/* ── DE CE RELAXAREA NU FUNCȚIONEAZĂ ── */}
      <section style={{ background: "var(--color-background-white)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 id="relaxarea-periculoasa" style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", marginBottom: 24 }}>
            De ce &quot;relaxează-te&quot; e cel mai prost sfat
          </h2>
          <p style={{ marginBottom: 16 }}>
            Gândește-te la ce înseamnă relaxarea. Respirație lentă, mușchi relaxați, puls care coboară, tensiune arterială care scade. Exact ce prescrie orice ghid de anxietate de pe internet.
          </p>
          <p style={{ marginBottom: 16 }}>
            Acum gândește-te la ce face corpul tău în fobia de sânge.. deja scade tensiunea arterială, deja încetinește pulsul, deja reduce fluxul sanguin către creier. Și cineva îți spune să te relaxezi.
          </p>
          <p style={{ marginBottom: 16 }}>
            E ca și cum ai turna apă pe un foc care deja se stinge. Doar că aici &quot;focul&quot; e conștiința ta. Relaxarea nu te ajută. <strong>Relaxarea accelerează drumul spre leșin.</strong>
          </p>
          <p style={{ marginBottom: 24 }}>
            De aceea ai încercat de zeci de ori tehnicile standard și nu au funcționat. Nu pentru că le-ai făcut greșit. Pentru că sunt greșite pentru tine. Toate tehnicile de management al anxietății sunt construite pe presupunerea că corpul tău e supra-activat și trebuie calmat. Dar în fobia de sânge, problema nu e supra-activarea. Problema e prăbușirea care vine după ea.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            De ce ai tu această reacție și alții nu
          </h3>
          <p style={{ marginBottom: 16 }}>
            Fobia de sânge are cea mai puternică componentă genetică din toate fobiile. 61% dintre persoanele cu această fobie au cel puțin o rudă de gradul I, un părinte, un frate sau o soră, cu aceeași problemă.
          </p>
          <p style={{ marginBottom: 16 }}>
            Asta înseamnă că dacă mama ta leșina la vederea sângelui, sau tatăl tău evita cabinetul medical, șansele ca tu să ai aceeași reacție sunt semnificativ mai mari. Nu pentru că ai învățat de la ei. Ci pentru că sistemul tău nervos autonom funcționează într-un anumit fel, moștenit genetic.
          </p>
          <p>
            Știu că poate ai crescut crezând că e o slăbiciune de caracter. Că &quot;trebuie să te obișnuiești&quot;. Că &quot;dacă te-ai forța, ar trece&quot;. Nu e o slăbiciune. E un mecanism fiziologic la fel de real ca grupul tău sanguin. Și la fel de puțin controlabil prin voință.
          </p>
        </div>
      </section>

      {/* ── TENSIUNEA ACTIVĂ — INTRO ── */}
      <section id="applied-tension" style={{ background: "var(--color-background)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", marginBottom: 24 }}>
            Tensiunea activă.. singurul lucru care chiar funcționează
          </h2>
          <p style={{ marginBottom: 32 }}>
            Aici vine vestea bună. Exact pentru că fobia de sânge are un mecanism diferit, există o tehnică diferită, specifică, dezvoltată exact pentru ea. Se numește <strong>tensiunea activă</strong> (applied tension în literatura de specialitate), a fost creată de psihologul Lars-Göran Öst în 1987, și are una dintre cele mai mari rate de succes din întreaga psihoterapie.
          </p>

          {/* Contrast card: relaxare vs tensionare */}
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 280, background: "var(--color-background-white)", borderRadius: 12, padding: 28, border: "1px solid var(--color-border)", opacity: 0.7 }}>
              <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", color: "#8B3A3A", fontWeight: 600, marginBottom: 10 }}>Ce faci instinctiv</p>
              <p style={{ fontSize: 16, color: "var(--color-text)" }}>Te relaxezi. Respiri adânc. Încerci să te calmezi. Tensiunea scade și mai mult. Leșinul vine mai repede.</p>
            </div>
            <div style={{ flex: 1, minWidth: 280, background: "var(--color-background-white)", borderRadius: 12, padding: 28, border: "2px solid var(--color-secondary)" }}>
              <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-secondary)", fontWeight: 600, marginBottom: 10 }}>Ce funcționează</p>
              <p style={{ fontSize: 16, color: "var(--color-text)" }}>Te tensionezi. Strângi mușchii. Crești tensiunea arterială. Trimiți sânge înapoi către creier. Și previi leșinul.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TENSIUNEA ACTIVĂ — PAȘII ── */}
      <section style={{ background: "var(--color-background-white)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 26, fontWeight: 400, color: "var(--color-primary)", marginBottom: 32 }}>
            Cum se face, pas cu pas
          </h3>

          {/* Steps as cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { step: "1", title: "Tensionare", text: "Strânge simultan mușchii brațelor, picioarelor și trunchiului. Ca și cum ai încerca să ridici un obiect foarte greu de pe podea. Nu ține respirația, doar tensionează mușchii." },
              { step: "2", title: "Menținere", text: "Ține tensiunea timp de 10-15 secunde. Vei simți o senzație de căldură în față și în urechi. Asta e semnul că sângele ajunge din nou la creier." },
              { step: "3", title: "Relaxare parțială", text: "Relaxează mușchii timp de 20-30 de secunde. Nu relaxare completă, ci doar revenire la normal. Nu te \"lăsa moale\"." },
              { step: "4", title: "Repetare", text: "Repetă ciclul de 5 ori consecutiv." },
              { step: "5", title: "Practică", text: "Exersează asta de 5 ori pe zi, timp de o săptămână, înainte de orice situație care te sperie. Vrei ca mișcarea să devină automată, să nu mai trebuiască să te gândești la ea." },
            ].map((s) => (
              <div key={s.step} style={{ display: "flex", gap: 20, padding: "20px 24px", background: "var(--color-background)", borderRadius: 12 }}>
                <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: "50%", background: "var(--color-secondary)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 16 }}>
                  {s.step}
                </div>
                <div style={{ paddingTop: 2 }}>
                  <p style={{ fontWeight: 600, marginBottom: 4, color: "var(--color-primary)", fontSize: 17 }}>{s.title}</p>
                  <p style={{ fontSize: 16, color: "var(--color-text)", lineHeight: 1.65 }}>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TENSIUNEA ACTIVĂ — CALENDAR ── */}
      <section style={{ background: "var(--color-background)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 26, fontWeight: 400, color: "var(--color-primary)", marginBottom: 32 }}>
            Calendarul de antrenament
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { week: "Săptămâna 1", label: "Doar antrenament", desc: "Practică tensiunea activă fără nicio confruntare cu frica. 5 seturi pe zi. Pur antrenament muscular." },
              { week: "Săptămâna 2", label: "Expunere ușoară", desc: "Te uiți la poze cu sânge sau la scene medicale din filme. Tensionezi când simți primele semnale." },
              { week: "Săptămâna 3", label: "Expunere moderată", desc: "Mergi la un laborator, observi cum altcineva dă sânge. Tensionezi activ." },
              { week: "Săptămâna 4+", label: "Expunere directă", desc: "Recoltare de sânge proprie, vaccinare, cu tensionare în timp real." },
            ].map((w) => (
              <div key={w.week} style={{ display: "flex", gap: 20, padding: "20px 24px", background: "var(--color-background-white)", borderRadius: 12, border: "1px solid var(--color-border)" }}>
                <div style={{ flexShrink: 0, width: 110 }}>
                  <p style={{ fontWeight: 600, fontSize: 15, color: "var(--color-secondary)", marginBottom: 2 }}>{w.week}</p>
                  <p style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>{w.label}</p>
                </div>
                <p style={{ fontSize: 16, color: "var(--color-text)", lineHeight: 1.65, paddingTop: 2 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TENSIUNEA ACTIVĂ — SEMNALE + REZULTATE ── */}
      <section style={{ background: "var(--color-background-white)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 26, fontWeight: 400, color: "var(--color-primary)", marginBottom: 12 }}>
            Cum știi că trebuie să acționezi
          </h3>
          <p style={{ marginBottom: 24, color: "var(--color-text)" }}>
            Corpul tău îți trimite câteva semnale clare înainte de leșin. Dacă le recunoști, poți interveni la timp.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 24 }}>
            {["Amețeală", "Vedere încețoșată sau \"tunel\"", "Greață", "Căldură urmată brusc de frig", "Amorțeală în degete sau buze", "Senzația că \"se face negru\""].map((s) => (
              <span key={s} style={{ display: "inline-block", padding: "10px 18px", background: "var(--color-background)", borderRadius: 8, fontSize: 15, color: "var(--color-text)", border: "1px solid var(--color-border)" }}>{s}</span>
            ))}
          </div>

          <div style={{ background: "var(--color-background)", borderRadius: 12, padding: "24px 28px", marginBottom: 48 }}>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7 }}>
              Când simți oricare din ele, fă exact invers față de ce ai face instinctiv. Nu te întinde, nu te relaxa. <strong>Strânge mușchii.</strong> Brațe, picioare, trunchi. 10-15 secunde. Apoi relaxează puțin și repetă.
            </p>
          </div>

          {/* Rezultate */}
          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 26, fontWeight: 400, color: "var(--color-primary)", marginBottom: 12 }}>
            Cât de bine funcționează
          </h3>
          <p style={{ marginBottom: 24, color: "var(--color-text)" }}>
            Tensiunea activă are o rată de succes de 80-90%. Majoritatea oamenilor care o practică raportează că frica scade semnificativ și leșinul dispare în 5-7 ședințe.
          </p>

          <div style={{ background: "var(--color-primary)", borderRadius: 12, padding: "28px 32px" }}>
            <p style={{ color: "#ffffff", fontSize: 17, fontWeight: 500, lineHeight: 1.65, margin: 0 }}>
              E una dintre cele mai eficiente tehnici din psihologia clinică. Nu doar pentru fobii, ci pentru orice tulburare.
            </p>
          </div>
        </div>
      </section>

      {/* ── IMPACTUL REAL ── */}
      <section id="impactul-real" style={{ background: "var(--color-background-white)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", marginBottom: 24 }}>
            Cum te afectează în viața reală
          </h2>
          <p style={{ marginBottom: 24 }}>
            Fobia de sânge nu e doar despre sânge. E despre tot ce vine la pachet cu evitarea medicală.
          </p>

          {[
            { title: "Analizele de sânge", text: "Le amâni luni întregi. Doctorul ți le prescrie, tu le pui pe \"mai târziu\". Când ajungi la laborator, corpul tău a intrat deja în alertă cu ore înainte. Nu din cauza durerii, ci din cauza anticipării.. a acelei senzații că pierzi controlul." },
            { title: "Vaccinurile", text: "Pandemia a făcut vizibilă problema multor oameni cu această fobie. Nu refuzau vaccinul din convingere. Îl refuzau pentru că ideea de ac într-un braț le producea o reacție pe care nu o puteau gestiona." },
            { title: "Sarcina", text: "Femeile cu fobie de sânge care rămân însărcinate se confruntă cu o situație imposibilă. Analizele de sânge repetate, consultațiile, nașterea, sunt toate situații în care nu poți \"evita\". Și rușinea de a spune \"mi-e frică de o simplă analiză\" când ar trebui să fii \"fericită și puternică\" face totul și mai greu." },
            { title: "Dentistul", text: "Evitat ani de zile. Nu din cauza durerii. Din cauza instrumentelor, a sângelui din gingii, a mirosului de cabinet medical care declanșează întregul mecanism." },
            { title: "Donarea de sânge", text: "Mulți oameni cu fobie de sânge ar vrea să doneze. Înțeleg importanța. Dar corpul lor produce exact reacția opusă." },
          ].map((item) => (
            <div key={item.title} style={{ marginBottom: 24 }}>
              <p style={{ fontWeight: 600, color: "var(--color-primary)", marginBottom: 4 }}>{item.title}</p>
              <p style={{ color: "var(--color-text)", fontSize: 16 }}>{item.text}</p>
            </div>
          ))}

          <div style={{ background: "var(--color-background)", borderRadius: 12, padding: "24px 28px", marginTop: 16 }}>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7 }}>
              Și deasupra tuturor.. <strong>rușinea</strong>. &quot;Sunt un adult funcțional care leșină la o analiză de sânge. Ce e în neregulă cu mine?&quot; Răspunsul e: nimic nu e în neregulă cu tine. Ai un mecanism fiziologic diferit. La fel cum unii oameni au tensiunea mai mică natural, la tine nervul vag reacționează mai puternic la stimulii legați de sânge și rănire. E biologie, nu caracter.
            </p>
          </div>
        </div>
      </section>

      {/* ── PERSPECTIVA PSIHODINAMICĂ ── */}
      <section id="perspectiva-psihodinamica" style={{ background: "var(--color-primary)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "#ffffff", marginBottom: 24 }}>
            Ce vrea să spună psihicul
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 16 }}>
            Până acum am vorbit despre ce face corpul tău. Dar nu despre de ce. Nu toți oamenii cu predispoziție genetică dezvoltă o fobie. Ceva activează această predispoziție și o transformă în problemă.
          </p>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 16 }}>
            Perspectiva psihodinamică privește fobia din alt unghi. Nu ca pe o &quot;eroare de programare&quot; pe care trebuie s-o corectezi, ci ca pe un mesaj pe care psihicul tău încearcă să ți-l transmită.
          </p>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 16 }}>
            Fobia de sânge poate purta semnificații diferite pentru persoane diferite. Pentru cineva, sângele poate fi legat de o experiență medicală timpurie care a fost trăită ca amenințare. Pentru altcineva, de un moment în care a văzut un părinte speriat sau rănit. Pentru altcineva, de senzația de vulnerabilitate a propriului corp, de convingerea profundă că &quot;corpul meu mă va trăda&quot;.
          </p>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 16 }}>
            Psihicul alege obiectul fobic nu la întâmplare. Sângele, rănile, acele.. toate ating ceva profund uman.. fragilitatea corpului, limita dintre control și pierderea controlului, momentul în care pielea se deschide și ceea ce e interior devine exterior.
          </p>
          <p style={{ color: "rgba(255,255,255,0.85)" }}>
            Această perspectivă nu anulează mecanismul fiziologic. Îl completează. Tensiunea activă te ajută să nu mai leșini. Înțelegerea stratului mai profund te ajută să înțelegi de ce corpul tău a ales exact acest răspuns, și ce anume te poate ajuta pe termen lung.
          </p>
        </div>
      </section>

      {/* ── TRATAMENT ── */}
      <section id="tratament" style={{ background: "var(--color-background)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", marginBottom: 24 }}>
            Tratament și speranță
          </h2>
          <p style={{ marginBottom: 24 }}>
            Fobiile specifice sunt cea mai tratabilă condiție din psihologia clinică. Și fobia de sânge, în ciuda mecanismului ei particular, răspunde excelent la tratament.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            Protocolul specific pentru fobia de sânge
          </h3>
          <p style={{ marginBottom: 16 }}>
            Tratamentul eficient combină două elemente:
          </p>
          <p style={{ marginBottom: 8 }}>
            <strong>1. Tensiunea activă</strong> ca tehnică de bază. Antrenamentul muscular care previne leșinul și îți dă înapoi controlul pe care simți că l-ai pierdut.
          </p>
          <p style={{ marginBottom: 24 }}>
            <strong>2. Expunere graduală</strong> adaptată fobiei de sânge. Nu se sare direct la recoltarea de sânge. Se construiește o ierarhie, o scară a fricii, în care fiecare treaptă e puțin mai provocatoare decât precedenta.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            Ierarhia tipică de expunere
          </h3>
          <div style={{ background: "var(--color-background-white)", borderRadius: 12, padding: 24, border: "1px solid var(--color-border)" }}>
            <ol style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "Citesc un text despre proceduri medicale",
                "Mă uit la o poză cu o seringă",
                "Mă uit la un video cu o recoltare de sânge",
                "Țin o seringă în mână (fără ac)",
                "Sunt prezent când altcineva dă sânge, de la distanță",
                "Stau într-un cabinet medical unde se fac injecții",
                "Îmi pun un garou pe braț și simt presiunea",
                "Fac o injecție reală, tensionând activ în timpul procedurii",
                "Privesc cum mi se recoltează sângele fără să întorc capul",
              ].map((s, i) => (
                <li key={i} style={{ fontSize: 16, color: "var(--color-text)" }}>{s}</li>
              ))}
            </ol>
          </div>
          <p style={{ marginTop: 16, marginBottom: 32 }}>
            La fiecare treaptă, practici tensiunea activă și rămâi acolo până frica scade de la sine. Nu pleci la primul semn de disconfort. Stai. Strângi mușchii. Și descoperi că frica are un vârf, iar după vârf, coboară.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            Ce spun datele
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 24 }}>
            {[
              { stat: "80-95%", label: "pacienți cu îmbunătățiri semnificative" },
              { stat: "80-90%", label: "rată de succes tensiunea activă" },
              { stat: "5-12", label: "ședințe de tratament" },
              { stat: "75-90%", label: "succes într-o singură sesiune prelungită" },
            ].map((d) => (
              <div key={d.stat} style={{ flex: "1 1 160px", background: "var(--color-background-white)", borderRadius: 12, padding: "20px 24px", border: "1px solid var(--color-border)", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-heading)", fontSize: 28, fontWeight: 400, color: "var(--color-secondary)", marginBottom: 4 }}>{d.stat}</p>
                <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.4 }}>{d.label}</p>
              </div>
            ))}
          </div>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 12 }}>
            De ce medicamentele nu sunt prima opțiune
          </h3>
          <p>
            Fobia de sânge, ca toate fobiile specifice, se tratează prin psihoterapie, nu prin medicamente. Benzodiazepinele pot chiar să blocheze procesul de învățare care face ca expunerea să funcționeze. Dacă iei un calmant înainte de recoltare, creierul tău nu învață că recoltarea e suportabilă. Învață că &quot;am supraviețuit doar pentru că am luat pastila&quot;. Și data viitoare, frica e la fel.
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
            Nu trebuie să aștepți o programare la psiholog ca să începi.
          </p>

          {[
            {
              nr: "1",
              title: "Începe tensiunea activă chiar azi",
              text: "Fă primele 5 cicluri chiar acum. Strânge brațele, picioarele, trunchiul. Ține 10-15 secunde. Relaxează 20-30 de secunde. Repetă de 5 ori. Fă asta de 5 ori pe zi, o săptămână. Vrei ca mișcarea să devină a doua natură.",
            },
            {
              nr: "2",
              title: "Învață să recunoști semnalele",
              text: "Data viitoare când vezi ceva legat de sânge (într-un film, o știre, o poză), observă ce simți în corp. Nu încerca să oprești reacția. Doar observ-o. Amețeală? Căldură? Vedere în tunel? Notează-le mental. Acestea sunt semnalele tale de avertizare.",
            },
            {
              nr: "3",
              title: "Pregătește-te pentru următoarea vizită medicală",
              text: "Dacă ai o recoltare de sânge sau un vaccin programat, nu merge pe pilotul automat al evitării. Practică tensiunea activă zilnic o săptămână înainte. Spune-i asistentei că ai tendința de a leșina. Stai pe scaun, nu întins. Strânge mușchii activ în timpul procedurii. Și rămâi pe scaun 5 minute după.",
            },
          ].map((ex) => (
            <div key={ex.nr} style={{ display: "flex", gap: 20, marginBottom: 28, padding: 24, background: "var(--color-background)", borderRadius: 12 }}>
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
      <section style={{ background: "var(--color-background)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", marginBottom: 12 }}>
            Când merită să cauți un specialist
          </h2>
          <p style={{ marginBottom: 32 }}>
            Tensiunea activă e o tehnică pe care o poți practica singur. Dar un terapeut poate face diferența prin:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
            {[
              { icon: "🗺️", text: "Construirea unei ierarhii de expunere personalizate" },
              { icon: "🪜", text: "Ghidarea ta prin trepte pe care singur le-ai evita" },
              { icon: "🔍", text: "Identificarea comportamentelor de siguranță pe care le folosești fără să realizezi" },
              { icon: "🔑", text: "Adresarea stratului mai profund, dacă e cazul" },
            ].map((item) => (
              <div key={item.text} style={{ display: "flex", gap: 16, padding: "18px 24px", background: "var(--color-background-white)", borderRadius: 12, border: "1px solid var(--color-border)", alignItems: "center" }}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
                <p style={{ margin: 0, fontSize: 16 }}>{item.text}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "var(--color-primary)", borderRadius: 16, padding: "40px 32px", textAlign: "center" }}>
            <p style={{ color: "#ffffff", fontSize: 20, fontWeight: 500, marginBottom: 8, fontFamily: "var(--font-heading)" }}>
              Fobia de sânge are una dintre cele mai mari rate de succes din psihoterapie.
            </p>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, marginBottom: 28, maxWidth: 480, margin: "0 auto 28px" }}>
              Nu e ceva cu care &quot;trebuie să trăiești&quot;. E ceva ce se tratează.
            </p>
            <Link
              href="/programare?din=fobie-de-sange"
              style={{ display: "inline-block", padding: "16px 40px", background: "var(--color-secondary)", color: "#ffffff", borderRadius: 8, fontWeight: 600, fontSize: 17, textDecoration: "none", transition: "opacity 0.2s" }}
            >
              Programează o consultație
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: "var(--color-background)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 id="intrebari-frecvente" style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", marginBottom: 24 }}>
            Întrebări frecvente
          </h2>
          <FAQ
            q="Leșinul la sânge e periculos?"
            a="Leșinul vasovagal este benign din punct de vedere medical. Durează de obicei câteva secunde până la un minut. Odată ce ești orizontal, fluxul sanguin către creier se restabilește și îți revii. Pericolul real nu e leșinul în sine, ci contextul în care se produce.. dacă leșini în picioare, poți cădea și te poți lovi. De aceea, dacă știi că ai tendința de a leșina, stai pe un scaun cu cotiere sau cere să faci procedura semi-întins."
          />
          <FAQ
            q="De ce am eu această problemă dacă nimeni nu m-a traumatizat?"
            a={`Nu ai nevoie de o traumă directă ca să dezvolți fobia de sânge. Cercetările arată trei căi: o experiență negativă directă (ai leșinat la o recoltare și de atunci eviți), observarea altcuiva speriat (ai văzut un părinte leșinând sau îngroziți de sânge), sau transmitere informațională (ai auzit povești despre proceduri medicale dureroase). În plus, 61% dintre persoane au o componentă genetică. Uneori nu există un "moment zero" identificabil, iar asta e perfect normal.`}
          />
          <FAQ
            q="Pot scăpa de fobia de sânge complet?"
            a="Da. Fobiile specifice au cel mai bun prognostic din toate tulburările de anxietate, cu 80-95% rată de succes la tratament. Mulți oameni raportează că după tratament pot face analize de sânge, vaccinuri și vizite la dentist fără anxietate semnificativă. Tensiunea activă le dă înapoi controlul pe care simțeau că l-au pierdut."
          />
          <FAQ
            q="Copilul meu leșină la sânge. Ce pot face?"
            a="Dacă ai această fobie și ai copii, sunt două lucruri importante de știut. Primul: copilul tău are 61% șanse să fi moștenit predispoziția. Fii atent la semnale, nu ca să-l sperii, ci ca să-l ajuți devreme. Al doilea: modul în care tu reacționezi contează enorm. Dacă tu arăți teroare la vederea sângelui, copilul tău învață prin observare că sângele e periculos. Cele mai bune lucruri pe care le poți face sunt să-ți tratezi propria fobie și să modelezi un răspuns calm, chiar dacă necesită efort."
          />
          <FAQ
            q="De ce mi se face rău și la filme cu sânge, nu doar la sânge real?"
            a="Creierul tău nu face o distincție clară între sânge real și sânge fictiv când activează răspunsul vasovagal. Schema de amenințare se activează la orice stimul asociat cu sângele: o imagine, un video, chiar și o descriere verbală detaliată. Cu cât stimulul e mai realist, cu atât reacția e mai puternică. Dar asta e și o veste bună, pentru că înseamnă că poți folosi materialele vizuale ca prime trepte în ierarhia de expunere, într-un mediu complet sigur."
          />
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
              { href: "/tipuri/fobii-specifice/fobie-de-zbor", label: "Fobia de zbor" },
              { href: "/tipuri/fobii-specifice/claustrofobie", label: "Claustrofobie" },
              { href: "/tipuri/fobii-specifice/fobie-de-inaltime", label: "Fobia de înălțimi" },
              { href: "/tipuri/fobii-specifice/fobie-de-animale", label: "Fobia de animale" },
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
          <div style={{ maxHeight: refsOpen ? 600 : 0, overflow: "hidden", transition: "max-height 0.4s ease-out" }}>
            <ul style={{ marginTop: 16, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8, fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
              <li>Antony, M. M., Craske, M. G., &amp; Barlow, D. H. (2006). <em>Mastering Your Fears and Phobias: Therapist Guide</em> (2nd ed.). Oxford University Press.</li>
              <li>Clark, D. A., &amp; Beck, A. T. (2010). <em>Cognitive Therapy of Anxiety Disorders: Science and Practice</em>. Guilford Press.</li>
              <li>Andrews, G., Creamer, M., Crino, R., Hunt, C., Lampe, L., &amp; Page, A. (2003). <em>The Treatment of Anxiety Disorders</em> (2nd ed.). Cambridge University Press.</li>
              <li>Gabbard, G. O. (2007). <em>Tratat de Psihiatrie Psihodinamică</em>. Editura Trei.</li>
              <li>Wolfe, B. E. (2005). <em>Understanding and Treating Anxiety Disorders</em>. American Psychological Association.</li>
              <li>Öst, L.-G. (1987). Applied tension technique for treatment of blood phobia. <em>Behaviour Research and Therapy</em>, 25(1), 25-29.</li>
              <li>Freud, S. (1926). <em>Inhibitions, Symptoms and Anxiety</em>. Standard Edition, Vol. 20.</li>
            </ul>
          </div>
        </div>
      </section>

    </main>
  );
}
