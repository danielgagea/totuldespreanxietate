"use client";

import Link from "next/link";
import { useState } from "react";

/* ============================================================
   FOBIA DE ZBOR — Pagină completă
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

export default function FobieDeZborPage() {
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
                <Link href="/tipuri/fobii-specifice" style={{ color: "var(--color-text-secondary)", textDecoration: "underline", textUnderlineOffset: 3 }}>
                  Fobii specifice
                </Link>
                <span aria-hidden="true">&rarr;</span>
                <span style={{ color: "var(--color-text)" }}>Fobia de zbor</span>
              </nav>

              <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--color-text-secondary)", marginBottom: 24 }}>
                De Daniel Gagea, psiholog clinician, psihoterapeut
              </p>
              <h1 style={{ fontFamily: "var(--font-heading)", fontSize: 38, fontWeight: 400, color: "var(--color-primary)", lineHeight: 1.25, marginBottom: 16 }}>
                Fobia de zbor
              </h1>
              <p style={{ fontSize: 17, color: "var(--color-text-secondary)", marginBottom: 24 }}>
                Ghid complet 2026
              </p>
              <p style={{ fontSize: 15, color: "var(--color-text-secondary)", marginBottom: 32 }}>
                Ai nevoie de ajutor imediat? <Link href="#ce-poti-face-acum" style={{ color: "var(--color-secondary)", textDecoration: "underline", textUnderlineOffset: 3 }}>Mergi direct la Ce poți face acum</Link>
              </p>
              <p style={{ fontSize: 17, color: "var(--color-text)", lineHeight: 1.75, marginBottom: 16 }}>
                Ești în avion. Ușa s-a închis. Auzi motoarele accelerând și simți cum ți se strânge stomacul. Mâinile se încleștează pe cotieră. Inima bate tot mai tare. Te uiți la ceilalți pasageri și nimeni nu pare speriat. Doar tu. Doar tu simți că ceva groaznic urmează să se întâmple.
              </p>
              <p style={{ fontSize: 17, color: "var(--color-text)", lineHeight: 1.75, marginBottom: 16 }}>
                Sau poate nu ești în avion. Poate ești acasă, la trei luni distanță de zbor, și deja simți acel nod în stomac când te gândești. Poate refuzi invitații, amâni vacanțe, găsești scuze pentru orice implică un aeroport. Poate ai condus 14 ore ca să eviți un zbor de două.
              </p>
              <p style={{ fontSize: 17, color: "var(--color-text)", lineHeight: 1.75, marginBottom: 16 }}>
                Știi că avioanele sunt sigure. Ai citit statisticile. Ai auzit de o mie de ori că e mai periculos drumul spre aeroport decât zborul în sine. Și totuși.. nu contează. Corpul tău nu ascultă.
              </p>
              <p style={{ fontSize: 17, color: "var(--color-text)", lineHeight: 1.75 }}>
                <strong>Nu ești irațional și nu exagerezi.</strong> Ce trăiești se numește fobie de zbor (aviofobie). Și în acest ghid vei înțelege de ce rațiunea nu ajunge, care sunt cele cinci frici combinate din spatele ei, și ce funcționează ca tratament.
              </p>
            </div>

            {/* Illustration */}
            <div style={{ flexShrink: 0, width: 300 }} aria-hidden="true">
              <style>{`
                @keyframes fz-pulse{0%,100%{opacity:0.12;transform:scale(1)}50%{opacity:0.25;transform:scale(1.15)}}
                @keyframes fz-turb1{0%,100%{d:path("M60 170 Q90 165 120 170 Q150 175 180 170 Q210 165 240 170")}50%{d:path("M60 170 Q90 178 120 170 Q150 162 180 170 Q210 178 240 170")}}
                @keyframes fz-turb2{0%,100%{d:path("M50 190 Q85 185 120 190 Q155 195 190 190 Q225 185 250 190")}50%{d:path("M50 190 Q85 198 120 190 Q155 182 190 190 Q225 198 250 190")}}
                @keyframes fz-turb3{0%,100%{d:path("M40 210 Q80 205 120 210 Q160 215 200 210 Q240 205 260 210")}50%{d:path("M40 210 Q80 218 120 210 Q160 202 200 210 Q240 218 260 210")}}
                @keyframes fz-grip{0%,100%{transform:translate(0,0)}25%{transform:translate(-0.5px,0.3px)}75%{transform:translate(0.5px,-0.3px)}}
                .fz-pulse{animation:fz-pulse 3s ease-in-out infinite}
                .fz-grip{animation:fz-grip 0.12s ease-in-out infinite}
              `}</style>
              <svg viewBox="0 0 300 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%" }}>
                {/* Background glow */}
                <circle cx="150" cy="150" r="120" fill="#5C7A6A" opacity="0.04" className="fz-pulse" />
                {/* Airplane silhouette */}
                <g opacity="0.2">
                  {/* Fuselage */}
                  <ellipse cx="150" cy="130" rx="70" ry="14" fill="#1B2B4B" />
                  {/* Nose */}
                  <path d="M220 130 L245 128 L220 126 Z" fill="#1B2B4B" />
                  {/* Tail */}
                  <path d="M80 130 L65 110 L85 122 Z" fill="#1B2B4B" />
                  <path d="M80 130 L65 150 L85 138 Z" fill="#1B2B4B" />
                  {/* Wings */}
                  <path d="M130 130 L110 95 L175 125 Z" fill="#1B2B4B" />
                  <path d="M130 130 L110 165 L175 135 Z" fill="#1B2B4B" />
                  {/* Windows */}
                  <circle cx="140" cy="128" r="2.5" fill="#F5F0EB" />
                  <circle cx="150" cy="128" r="2.5" fill="#F5F0EB" />
                  <circle cx="160" cy="128" r="2.5" fill="#F5F0EB" />
                  <circle cx="170" cy="128" r="2.5" fill="#F5F0EB" />
                  <circle cx="180" cy="128" r="2.5" fill="#F5F0EB" />
                  <circle cx="190" cy="128" r="2.5" fill="#F5F0EB" />
                </g>
                {/* Turbulence waves */}
                <path d="M60 170 Q90 165 120 170 Q150 175 180 170 Q210 165 240 170" stroke="#8B3A3A" strokeWidth="1" opacity="0.15" fill="none">
                  <animate attributeName="d" dur="2s" repeatCount="indefinite" values="M60 170 Q90 165 120 170 Q150 175 180 170 Q210 165 240 170;M60 170 Q90 178 120 170 Q150 162 180 170 Q210 178 240 170;M60 170 Q90 165 120 170 Q150 175 180 170 Q210 165 240 170" />
                </path>
                <path d="M50 190 Q85 185 120 190 Q155 195 190 190 Q225 185 250 190" stroke="#8B3A3A" strokeWidth="1" opacity="0.10" fill="none">
                  <animate attributeName="d" dur="2.5s" repeatCount="indefinite" values="M50 190 Q85 185 120 190 Q155 195 190 190 Q225 185 250 190;M50 190 Q85 198 120 190 Q155 182 190 190 Q225 198 250 190;M50 190 Q85 185 120 190 Q155 195 190 190 Q225 185 250 190" />
                </path>
                <path d="M40 210 Q80 205 120 210 Q160 215 200 210 Q240 205 260 210" stroke="#8B3A3A" strokeWidth="1" opacity="0.07" fill="none">
                  <animate attributeName="d" dur="3s" repeatCount="indefinite" values="M40 210 Q80 205 120 210 Q160 215 200 210 Q240 205 260 210;M40 210 Q80 218 120 210 Q160 202 200 210 Q240 218 260 210;M40 210 Q80 205 120 210 Q160 215 200 210 Q240 205 260 210" />
                </path>
                {/* Person gripping seat */}
                <g className="fz-grip" opacity="0.3">
                  {/* Head */}
                  <circle cx="150" cy="230" r="12" fill="#1B2B4B" />
                  {/* Body */}
                  <rect x="140" y="242" width="20" height="30" rx="4" fill="#1B2B4B" />
                  {/* Arms gripping armrests */}
                  <path d="M140 250 L125 255 L122 258" stroke="#1B2B4B" strokeWidth="4" strokeLinecap="round" />
                  <path d="M160 250 L175 255 L178 258" stroke="#1B2B4B" strokeWidth="4" strokeLinecap="round" />
                  {/* Seat */}
                  <rect x="118" y="256" width="64" height="4" rx="2" fill="#1B2B4B" opacity="0.5" />
                  <rect x="120" y="240" width="6" height="20" rx="2" fill="#1B2B4B" opacity="0.4" />
                  <rect x="174" y="240" width="6" height="20" rx="2" fill="#1B2B4B" opacity="0.4" />
                </g>
                {/* Label */}
                <text x="150" y="300" textAnchor="middle" fill="#1B2B4B" opacity="0.4" style={{ fontSize: 11, fontFamily: "var(--font-body)" }}>frica care nu ascultă de rațiune</text>
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
                  { href: "#ce-este", label: "Ce este fobia de zbor" },
                  { href: "#cum-arata", label: "Cum arată în viața reală" },
                  { href: "#cele-5-frici", label: "Cele 5 frici combinate" },
                  { href: "#statistici", label: "De ce știi că e sigur dar tot ți-e frică" },
                  { href: "#comportamente-de-siguranta", label: "Comportamente de siguranță" },
                  { href: "#cazul-jim", label: "Când avionul nu e despre avion" },
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
            Ce este fobia de zbor
          </h2>
          <p style={{ marginBottom: 16 }}>
            Fobia de zbor (aviofobie) este o frică intensă, persistentă și disproporționată legată de călătoria cu avionul, care duce la evitare activă și afectează viața de zi cu zi. Face parte din subtipul situațional al fobiilor specifice și afectează aproximativ 2.5-6.5% din populație.
          </p>
          <p style={{ marginBottom: 16 }}>
            Dar iată ce o face diferită de celelalte fobii: <strong>fobia de zbor nu e o singură frică. E o fobie compusă.</strong> Un pachet de mai multe frici care se suprapun și se alimentează reciproc. Frica de prăbușire, frica de înălțimi, frica de spații închise, frica de turbulențe, frica de lipsa controlului. Fiecare persoană are o combinație diferită, și asta explică de ce doi oameni cu aceeași fobie pot descrie experiențe complet diferite.
          </p>
          <p style={{ marginBottom: 16 }}>
            Debutul apare de obicei în jurul vârstei de 25-30 de ani, mai târziu decât majoritatea celorlalte fobii specifice. Mulți oameni au zburat fără probleme ani de zile, iar apoi, aparent din senin, fobia apare. Uneori e legată de un zbor turbulent, uneori de o perioadă de stres din viață, uneori de un eveniment care nu are nicio legătură cu avioanele.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16, marginTop: 32 }}>
            Impactul real
          </h3>
          <p style={{ marginBottom: 16 }}>
            Fobia de zbor nu e doar disconfort. E o constrângere care se ramifică în toate zonele vieții. Cariera care stagnează pentru că refuzi deplasările. Familia pe care n-o vizitezi. Vacanțele care nu se întâmplă. Oportunitățile pe care le lași să treacă.
          </p>
          <p style={{ marginBottom: 16 }}>
            Și pe lângă toate acestea, rușinea. Pentru că toți ceilalți par să zboare fără probleme. Pentru că &quot;e irațional&quot; și tu știi asta. Pentru că ai 35 de ani și nu poți face ceva ce face un copil de 5 ani fără să clipească. Rușinea asta e poate mai grea decât fobia în sine.
          </p>
        </div>
      </section>

      {/* ── CUM ARATĂ ÎN VIAȚA REALĂ ── */}
      <section id="cum-arata" style={{ background: "var(--color-background)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", marginBottom: 24 }}>
            Cum arată în viața reală
          </h2>
          <p style={{ marginBottom: 32 }}>
            Fobia de zbor nu e doar ce simți în avion. E tot ce faci ca să nu ajungi acolo. Iată patru zone pe care le afectează cel mai des:
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
            {[
              {
                title: "Cariera",
                text: "Refuzi promovarea care implică deplasări. Inventezi scuze pentru conferințe. Colegii nu știu de ce nu mergi niciodată la sediul din altă țară. Sau știu, și asta e și mai greu.",
              },
              {
                title: "Familia",
                text: "Părinții sunt în alt oraș, în altă țară. Nepoții cresc fără tine. Nunțile, botezurile, sărbătorile.. le ratezi sau conduci 20 de ore ca să ajungi. Și nimeni nu înțelege de ce nu iei pur și simplu avionul.",
              },
              {
                title: "Relațiile la distanță",
                text: "Partenerul vrea să meargă în vacanță. Tu vrei și tu, dar nu poți. Sau mergi, dar cu pastile și alcool, și vacanța începe cu o zi de recuperare. Relația suferă nu din cauza lipsei de iubire, ci din cauza fobiei.",
              },
              {
                title: "Timpul pierdut",
                text: "Conduci 14 ore în loc să zbori două. Iei trenul 12 ore în loc de un zbor de 90 de minute. Planifici vacanțe doar în locuri accesibile cu mașina. Harta lumii tale se micșorează constant.",
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

      {/* ── CELE 5 FRICI ── */}
      <section id="cele-5-frici" style={{ background: "var(--color-background-white)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", marginBottom: 24 }}>
            Cele 5 frici combinate
          </h2>
          <p style={{ marginBottom: 32 }}>
            Fobia de zbor nu e o singură frică cu un singur obiect. E un pachet de cinci frici care se suprapun diferit la fiecare persoană. Când înțelegi care e combinația ta, înțelegi și de ce tratamentul generic nu funcționează.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
            {[
              {
                nr: "1",
                title: "Frica de prăbușire",
                text: "Catastrofizarea pură. Fiecare sunet neobișnuit e semnalul că ceva s-a defectat. Fiecare ușoară schimbare de altitudine confirmă scenariul cel mai rău. Creierul rulează filmul prăbușirii în buclă, cu detalii din ce în ce mai vivide. Nu contează că probabilitatea e de 1 la 10 milioane. Mintea nu lucrează cu probabilități atunci când e în modul de alarmă.",
              },
              {
                nr: "2",
                title: "Frica de înălțimi",
                text: "Componenta de acrofobie. Nu e doar despre cât de sus ești, ci despre lipsa suportului vizual. Pe un munte vezi pământul sub tine. Într-un avion, la 10.000 de metri, nu vezi nimic care să-ți confirme că ești susținut. Și acel gol de sub tine devine insuportabil.",
              },
              {
                nr: "3",
                title: "Frica de spații închise",
                text: <>Componenta de <Link href="/tipuri/fobii-specifice/claustrofobie" style={{ color: "var(--color-secondary)", textDecoration: "underline", textUnderlineOffset: 3 }}>claustrofobie</Link>. Ușa e închisă și nu o poți deschide. Nu poți ieși. Nu poți opri. Nu poți spune &quot;vreau să cobor&quot;. Ești blocat într-un tub de metal pentru următoarele ore, și senzația de captivitate poate fi copleșitoare.</>,
              },
              {
                nr: "4",
                title: "Frica de turbulențe",
                text: "Senzațiile fizice ale turbulențelor activează direct sistemul de alarmă. Stomacul care se ridică, scaunul care se mișcă, avionul care pare că se scufundă. Pentru creierul tău, senzațiile din corp sunt dovada că ceva e în neregulă, chiar dacă turbulențele sunt echivalentul unei denivelări în drum.",
              },
              {
                nr: "5",
                title: "Frica de lipsa controlului",
                text: "Aceasta e adesea cea mai profundă. Nu tu conduci. Nu tu decizi. Nu poți face nimic. Ești complet la mâna altcuiva.. a pilotului, a vremii, a mecanicii. Pentru persoanele care au nevoie să controleze totul în viața lor, această neputință e intolerabilă. Fobia de zbor devine, de fapt, fobia de a nu avea control.",
              },
            ].map((fear) => (
              <div key={fear.nr} style={{ display: "flex", gap: 20, padding: "24px 28px", background: "var(--color-background)", borderRadius: 12, border: "1px solid var(--color-border)" }}>
                <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: "50%", background: "var(--color-primary)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 17, fontFamily: "var(--font-heading)" }}>
                  {fear.nr}
                </div>
                <div>
                  <p style={{ fontWeight: 600, color: "var(--color-primary)", marginBottom: 8, fontSize: 18 }}>{fear.title}</p>
                  <p style={{ color: "var(--color-text)", fontSize: 16, lineHeight: 1.7 }}>{fear.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: "var(--color-background)", borderRadius: 12, padding: "24px 28px", borderLeft: "3px solid var(--color-secondary)" }}>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7 }}>
              <strong>De ce contează.</strong> Două persoane pot avea aceeași fobie de zbor, dar combinații complet diferite. Una se teme de prăbușire și turbulențe. Alta se teme de spații închise și lipsa controlului. Tratamentul eficient începe cu identificarea combinației tale specifice, pentru că fiecare frică se abordează diferit.
            </p>
          </div>
        </div>
      </section>

      {/* ── STATISTICI ── */}
      <section id="statistici" style={{ background: "var(--color-background)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", marginBottom: 24 }}>
            De ce știi că e sigur dar tot ți-e frică
          </h2>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 32 }}>
            {[
              { stat: "1 la 10 mil", label: "probabilitatea unui accident de avion fatal" },
              { stat: "1250x", label: "mai periculos să mergi cu mașina decât cu avionul" },
              { stat: "0", label: "avioane prăbușite din cauza turbulențelor în aviația modernă" },
              { stat: "1500+ ore", label: "de pregătire pentru fiecare pilot comercial" },
            ].map((d) => (
              <div key={d.stat} style={{ flex: "1 1 140px", background: "var(--color-background-white)", borderRadius: 12, padding: "20px 24px", border: "1px solid var(--color-border)", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-heading)", fontSize: 24, fontWeight: 400, color: "var(--color-secondary)", marginBottom: 4 }}>{d.stat}</p>
                <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.4 }}>{d.label}</p>
              </div>
            ))}
          </div>

          <p style={{ marginBottom: 16 }}>
            Le-ai citit. Le știi. Și tot nu te ajută. De ce?
          </p>
          <p style={{ marginBottom: 16 }}>
            Pentru că creierul tău procesează riscul pe două sisteme diferite. Sistemul rațional lucrează cu numere, probabilități, dovezi. Și el știe că zborul e sigur. Dar sistemul emoțional lucrează cu imagini, senzații, scenarii catastrofice. Și el nu știe să citească statistici.
          </p>
          <p style={{ marginBottom: 16 }}>
            Când ești în avion și simți o turbulență, sistemul emoțional nu consultă un tabel cu probabilități. Simte căderea din stomac, aude zgomotul, și trage singura concluzie pe care o știe: pericol. Iar această concluzie suprascrie orice argument rațional.
          </p>
          <p style={{ marginBottom: 32 }}>
            În plus, creierul supraevaluează probabilitatea evenimentelor care sunt ușor de imaginat și dramatice. Un accident de avion e ușor de imaginat, apare la știri, produce imagini puternice. Un accident de mașină e banal, cotidian, invizibil. Așa că percepi zborul ca periculos, deși e unul dintre cele mai sigure lucruri pe care le faci.
          </p>

          <div style={{ background: "var(--color-background-white)", borderRadius: 12, padding: "24px 28px", borderLeft: "3px solid var(--color-secondary)" }}>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7 }}>
              <strong>Concluzia importantă:</strong> informația nu vindecă fobia. Dacă ar fi suficient să știi că e sigur, niciun pilot nu ar avea fobie de zbor. Și totuși, unii au. Tratamentul nu e despre informație. E despre cum procesează creierul tău experiența.
            </p>
          </div>
        </div>
      </section>

      {/* ── COMPORTAMENTE DE SIGURANȚĂ ── */}
      <section id="comportamente-de-siguranta" style={{ background: "var(--color-background-white)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", marginBottom: 24 }}>
            Comportamente de siguranță
          </h2>
          <p style={{ marginBottom: 16 }}>
            Sunt lucrurile pe care le faci &quot;ca să faci față&quot;. Fiecare în parte pare rezonabil. Dar pune-le pe toate la un loc și vei vedea ce fac cu adevărat: mențin fobia activă.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 32 }}>
            {[
              "Alcool înainte sau în timpul zborului",
              "Pastile calmante (benzodiazepine)",
              "Muzică în căști pe tot zborul",
              "Loc pe culoar, niciodată la geam",
              "Verifici meteo-ul obsesiv cu zile înainte",
              "Cauți turbulențe pe harta în timp real",
              "Te ții de cotieră în permanență",
              "Monitorizezi fiecare sunet al motorului",
              "Studiezi fața stewardeselor pentru semne de panică",
              "Eviți zborurile de noapte sau cele lungi",
              "Porți obiecte norocoase",
              "Faci rugăciuni sau ritualuri la decolare",
            ].map((s) => (
              <span key={s} style={{ display: "inline-block", padding: "10px 18px", background: "var(--color-background)", borderRadius: 8, fontSize: 15, color: "var(--color-text)", border: "1px solid var(--color-border)" }}>{s}</span>
            ))}
          </div>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            Povestea Juliei
          </h3>
          <p style={{ marginBottom: 16 }}>
            Julia zbura de 15 ani cu același ritual: un Xanax cu o oră înainte, un pahar de vin la bord, muzică în căști, loc pe culoar, ochii închiși la decolare și aterizare. Și funcționa. Ajungea la destinație. Dar fobia nu se micșora. Ba chiar creștea, ușor, de la an la an.
          </p>
          <p style={{ marginBottom: 32 }}>
            Pentru că creierul Juliei nu învăța niciodată că poate zbura fără aceste lucruri. De fiecare dată, concluzia era aceeași: &quot;Am supraviețuit pentru că am luat pastila, pentru că am băut vinul, pentru că am stat pe culoar.&quot; Nu &quot;Am supraviețuit pentru că zborul e sigur.&quot;
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            Testul simplu
          </h3>
          <p style={{ marginBottom: 16 }}>
            Întreabă-te: dacă ar trebui să zbori mâine, fără niciun fel de ajutor.. fără pastile, fără alcool, fără muzică, fără ritualuri.. ai putea? Dacă răspunsul e nu, atunci lucrurile pe care le folosești nu sunt strategii de coping. Sunt comportamente de siguranță care mențin fobia activă.
          </p>
          <p>
            Nu e vina ta că le folosești. Sunt soluții naturale pe care le găsește mintea când nu are altceva. Dar ca să tratezi fobia, va trebui la un moment dat să le lași.
          </p>
        </div>
      </section>

      {/* ── CAZUL JIM ── */}
      <section id="cazul-jim" style={{ background: "var(--color-primary)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "#ffffff", marginBottom: 24 }}>
            Când avionul nu e despre avion
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 16 }}>
            Jim avea 42 de ani când a venit în terapie. Zburase fără probleme toată viața. Și apoi, brusc, nu mai putea. Nu se întâmplase nimic dramatic. Niciun zbor turbulent, niciun accident evitat la limită. Pur și simplu, într-o zi, a știut că nu mai poate urca în avion.
          </p>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 16 }}>
            În terapie, lucrurile au început să se clarifice. Jim crescuse cu o mamă care controla totul. Ce mânca, ce îmbrăca, cu cine vorbea. Ca adult, Jim și-a construit o viață în care controla totul. Carieră proprie, decizii proprii, ritmul propriu. Avionul era singurul loc în care nu avea niciun control. Și atâta timp cât restul vieții mergea bine, putea tolera asta.
          </p>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 16 }}>
            Dar în anul dinaintea fobiei, Jim trecuse printr-un divorț. Pierduse controlul asupra celei mai importante relații din viața lui. Și brusc, pierderea controlului nu mai era tolerabilă nicăieri. Nici în avion.
          </p>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 32 }}>
            Fobia lui Jim nu era despre avioane. Era despre neputință. Despre captivitate. Despre faptul că nu poți controla totul, oricât ai încerca.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "rgba(255,255,255,0.95)", marginBottom: 12 }}>
            Ce ne spune asta
          </h3>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 16 }}>
            Nu spun că orice fobie de zbor ascunde un conflict psihic nerezolvat. Multe fobii de zbor au o componentă puternic biologică și situațională. Dar merită să te întrebi: ce se întâmpla în viața mea când a apărut fobia? Am pierdut controlul asupra a ceva important? Mă simt captiv undeva, nu doar în avion?
          </p>
          <p style={{ color: "rgba(255,255,255,0.85)" }}>
            Perspectiva psihodinamică nu înlocuiește expunerea. O completează. Uneori, fobia se tratează mai repede când înțelegi nu doar mecanismul, ci și semnificația ei.
          </p>
        </div>
      </section>

      {/* ── TRATAMENT ── */}
      <section id="tratament" style={{ background: "var(--color-background-white)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", marginBottom: 24 }}>
            Tratament
          </h2>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            De ce expunerea, nu pastilele
          </h3>
          <p style={{ marginBottom: 16 }}>
            Fobia de zbor, ca toate fobiile specifice, se tratează prin psihoterapie, nu prin medicamente. Benzodiazepinele pot reduce temporar anxietatea, dar blochează exact procesul de învățare care face expunerea să funcționeze. Dacă iei un calmant înainte de zbor, creierul tău nu învață că zborul e sigur. Învață că &quot;am supraviețuit doar pentru că am luat pastila&quot;.
          </p>
          <p style={{ marginBottom: 32 }}>
            Expunerea funcționează diferit. Nu-ți spune că zborul e sigur. Te lasă să descoperi singur, prin experiență directă, că poți tolera disconfortul fără niciun ajutor extern. Și acea descoperire e cea care schimbă totul.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            Ierarhia de expunere: cum arată concret
          </h3>
          <p style={{ marginBottom: 16 }}>
            Tratamentul nu înseamnă să fii pus brusc în avion. Înseamnă un progres treptat, calibrat, în care tu controlezi fiecare pas:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 32, background: "var(--color-background)", borderRadius: 12, padding: 24, border: "1px solid var(--color-border)" }}>
            {[
              { level: "Ușor", color: "var(--color-secondary)", steps: [
                "Citești despre mecanica zborului",
                "Privești video din cabina de pilotaj",
              ]},
              { level: "Mediu", color: "#C4873B", steps: [
                "Mergi la aeroport fără să zbori",
                "Stai într-un avion la sol sau într-un simulator",
              ]},
              { level: "Greu", color: "#8B3A3A", steps: [
                "Zbor scurt, fără comportamente de siguranță",
                "Zbor lung, în condiții de turbulență",
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

      {/* ── TRATAMENT - DETALII ── */}
      <section style={{ background: "var(--color-background)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            Expunerea imaginală
          </h3>
          <p style={{ marginBottom: 16 }}>
            Nu trebuie să zbori ca să începi tratamentul. Expunerea imaginală înseamnă să-ți imaginezi zborul, pas cu pas, în detaliu: drumul spre aeroport, check-in-ul, zona de îmbarcare, coridorul avionului, locul tău, ușa care se închide, decolarea. Fiecare scenariu se repetă până când anxietatea scade.
          </p>
          <p style={{ marginBottom: 32 }}>
            Cercetările arată că creierul procesează expunerea imaginală similar cu expunerea reală. Nu la fel de puternic, dar suficient de puternic ca să fie un punct de pornire valoros. E ca un antrenament mental înainte de meciul real.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            Realitatea virtuală
          </h3>
          <p style={{ marginBottom: 16 }}>
            Tehnologia de realitate virtuală (RV) oferă un pas intermediar între imaginație și realitate. Cu un set de ochelari VR, poți &quot;zbura&quot; într-un mediu controlat.. poți experimenta decolarea, turbulențele, aterizarea, totul fără să pleci din cabinetul terapeutului.
          </p>
          <p style={{ marginBottom: 32 }}>
            Studiile arată rezultate comparabile cu expunerea reală pentru fobia de zbor. Avantajul e că poți repeta același scenariu de zeci de ori, poți controla intensitatea, și poți opri oricând. E un instrument excelent, mai ales pentru persoanele care refuză complet să zboare.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            Supra-expunerea
          </h3>
          <p style={{ marginBottom: 16 }}>
            Nu e suficient să zbori o dată și să spui &quot;gata, am reușit&quot;. Cercetările arată că oprirea la pragul minim crește riscul de revenire a fobiei. Conceptul se numește supra-expunere (overlearning).. te expui mai mult decât &quot;trebuie&quot;, pentru ca creierul să consolideze noua învățare.
          </p>
          <p style={{ marginBottom: 32 }}>
            Concret, asta înseamnă: nu un zbor, ci mai multe. Nu doar zboruri scurte, ci și lungi. Nu doar în condiții ideale, ci și cu turbulențe. Cu cât ești mai departe de linia de start, cu atât riscul de revenire e mai mic.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            Ce spun datele
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            {[
              { stat: "80-95%", label: "pacienți cu îmbunătățiri semnificative" },
              { stat: "1-12", label: "ședințe de tratament" },
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
              title: "Identifică-ți combinația de frici",
              text: "Ia cele cinci frici de mai sus și dă-le un scor de la 1 la 10. Care e cea mai puternică? Frica de prăbușire? De spații închise? De lipsa controlului? Combinația ta e unică și ea determină ce tip de expunere va funcționa cel mai bine. Scrie scorurile. Doar acest exercițiu simplu reduce confuzia și îți dă un punct de pornire concret.",
            },
            {
              nr: "2",
              title: "Inventarul comportamentelor de siguranță",
              text: "Scrie pe hârtie tot ce faci ca să \"supraviețuiești\" un zbor sau ca să eviți unul. Alcoolul, pastilele, muzica, locul pe culoar, verificarea meteo-ului, rugăciunile. Fii onest. Nu există răspunsuri greșite. Scopul nu e să le elimini pe toate acum, ci să le vezi. Să realizezi câte sunt. Și să înțelegi că fiecare dintre ele e un semnal că fobia e activă.",
            },
            {
              nr: "3",
              title: "Pregătirea pentru un zbor: expunere imaginală",
              text: "Închide ochii. Imaginează-ți că ești în mașina spre aeroport. Simte drumul. Imaginează-ți check-in-ul, scannerul de securitate, zona de așteptare. Apoi coridorul avionului, locul tău, centura, ușa care se închide. Motoarele pornesc. Avionul accelerează. Decolarea. Observă ce simți în corp. Nu încerca să oprești. Doar observă. Repetă zilnic. Anxietatea va scădea de la sine.",
            },
            {
              nr: "4",
              title: "Informația concretă: mecanica zborului",
              text: "Caută un curs de tip \"Fear of Flying\" de la o companie aeriană. Multe oferă cursuri gratuite sau la cost redus. Învață cum funcționează turbulențele, ce fac piloții în diferite scenarii, ce sunt zgomotele pe care le auzi. Informația singură nu vindecă, dar reduce componenta de necunoscut, care alimentează catastrofizarea.",
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
              { icon: "🎯", text: "Ierarhie de expunere personalizată, adaptată combinației tale specifice de frici" },
              { icon: "🔍", text: "Identificarea comportamentelor de siguranță pe care le folosești fără să realizezi" },
              { icon: "🥽", text: "Acces la realitate virtuală pentru expunere controlată, fără să pleci din cabinet" },
              { icon: "🔑", text: "Explorarea stratului mai profund.. ce înseamnă avionul pentru tine, dincolo de zbor" },
              { icon: "⚡", text: <>Legătura cu <Link href="/tipuri/atac-de-panica" style={{ color: "var(--color-secondary)", textDecoration: "underline", textUnderlineOffset: 3 }}>atacurile de panică</Link>, dacă apar în timpul zborului</> },
            ].map((item) => (
              <div key={typeof item.text === "string" ? item.text : item.icon} style={{ display: "flex", gap: 16, padding: "18px 24px", background: "var(--color-background-white)", borderRadius: 12, border: "1px solid var(--color-border)", alignItems: "center" }}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
                <p style={{ margin: 0, fontSize: 16, color: "var(--color-text)" }}>{item.text}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "var(--color-primary)", borderRadius: 16, padding: "40px 32px", textAlign: "center" }}>
            <p style={{ color: "#ffffff", fontSize: 20, fontWeight: 500, marginBottom: 8, fontFamily: "var(--font-heading)" }}>
              Fobia de zbor răspunde excelent la tratament.
            </p>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, marginBottom: 28, maxWidth: 480, margin: "0 auto 28px" }}>
              Nu e ceva cu care &quot;trebuie să trăiești&quot;. E ceva ce se tratează.
            </p>
            <Link
              href="/programare?din=fobie-de-zbor"
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

          <FAQ q="Pot muri de frică în avion?">
            <p style={{ marginBottom: 8 }}>Nu. Senzațiile pe care le trăiești în timpul unui episod de panică nu sunt periculoase medical. Inima care bate repede, dificultatea de a respira, senzația de leșin.. toate sunt răspunsuri normale ale sistemului nervos simpatic.</p>
            <p style={{ marginBottom: 8 }}>Corpul tău nu poate susține acel nivel de activare mai mult de 20 de minute. Chiar dacă nu faci nimic, chiar dacă nu folosești nicio tehnică, panica va scădea de la sine. E o limitare fiziologică, nu o decizie pe care trebuie s-o iei tu.</p>
            <p>Nimeni nu a murit de panică într-un avion. Senzația de &quot;voi muri&quot; e parte din panică, nu un semnal real de pericol.</p>
          </FAQ>

          <FAQ q="De ce mi-e frică de avion dar nu de mașină?">
            <p style={{ marginBottom: 8 }}>Pentru că frica nu e despre probabilitatea reală a pericolului. E despre percepția controlului. În mașină, tu conduci. Ai volanul. Poți opri oricând. Poți schimba direcția. Ai iluzia controlului total, chiar dacă statistic mașina e mult mai periculoasă.</p>
            <p style={{ marginBottom: 8 }}>În avion, nu ai niciun control. Nu poți opri. Nu poți ieși. Nu poți decide nimic. Și această neputință activează sistemul de alarmă mult mai puternic decât orice probabilitate statistică.</p>
            <p>E aceeași logică care explică de ce mulți oameni se simt mai în siguranță conducând decât fiind pasageri. Nu e despre pericol. E despre control.</p>
          </FAQ>

          <FAQ q="Am zburat de 100 de ori cu alcool și pastile. De ce nu mi-a trecut?">
            <p style={{ marginBottom: 8 }}>Pentru că alcoolul și pastilele sunt comportamente de siguranță. Ele te ajută să supraviețuiești zborul, dar împiedică creierul să învețe că poți zbura fără ele.</p>
            <p style={{ marginBottom: 8 }}>De fiecare dată când zbori cu ajutor extern, creierul trage concluzia: &quot;Am supraviețuit pentru că am luat pastila.&quot; Nu: &quot;Am supraviețuit pentru că zborul e sigur.&quot; Și fobia rămâne intactă, indiferent de câte zboruri faci.</p>
            <p>Tratamentul eficient presupune, la un moment dat, să zbori fără aceste ajutoare. Nu de la început, nu brusc, ci treptat, în cadrul unei ierarhii de expunere. Dar fără acest pas, 100 de zboruri sau 1000 nu vor schimba nimic.</p>
          </FAQ>

          <FAQ q="Fobia de zbor se moștenește?">
            <p style={{ marginBottom: 8 }}>Predispoziția, da. Dacă un părinte are anxietate sau fobii, copilul are o vulnerabilitate genetică mai mare. Dar vulnerabilitatea nu e destin. Mulți oameni cu predispoziție genetică nu dezvoltă niciodată o fobie.</p>
            <p style={{ marginBottom: 8 }}>Pe lângă genetică, modelul parental contează enorm. Un copil care vede un părinte speriat de avioane învață, prin observare, că avioanele sunt periculoase. Această învățare poate fi la fel de puternică ca o experiență directă.</p>
            <p>Vestea bună: fobia de zbor se poate trata indiferent de cum a apărut.. genetic, prin observare, printr-un zbor turbulent sau aparent din senin. Mecanismul de menținere e același, și el e cel pe care îl vizează tratamentul.</p>
          </FAQ>

          <FAQ q="Trebuie neapărat să zbor ca să scap de fobie?">
            <p style={{ marginBottom: 8 }}>Nu de la început. Tratamentul începe mult înainte de zbor. Expunere imaginală (vizualizarea zborului în detaliu), vizite la aeroport fără să zbori, simulatoare de zbor, realitate virtuală.. toate sunt pași valizi și eficienți.</p>
            <p style={{ marginBottom: 8 }}>Zborul real vine treptat, ca ultimul pas dintr-o ierarhie în care ai construit deja rezistență și încredere. Și când ajungi acolo, nu va fi un salt în gol. Va fi o continuare naturală a ceea ce ai practicat deja.</p>
            <p>Mulți oameni descoperă că, ajunși la pasul zborului real, anxietatea e mult mai mică decât se așteptau. Pentru că nu mai e necunoscut. L-au &quot;trăit&quot; deja de zeci de ori în imaginație și în simulare.</p>
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
              { href: "/tipuri/fobii-specifice/fobie-de-inaltime", label: "Fobia de înălțimi" },
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
              <li>Clark, D. A., &amp; Beck, A. T. (2010). <em>Cognitive Therapy of Anxiety Disorders: Science and Practice</em>. Guilford Press.</li>
              <li>Andrews, G., Creamer, M., Crino, R., Hunt, C., Lampe, L., &amp; Page, A. (2003). <em>The Treatment of Anxiety Disorders: Clinician Guides and Patient Manuals</em> (2nd ed.). Cambridge University Press.</li>
              <li>Wolpe, J. (1958). <em>Psychotherapy by Reciprocal Inhibition</em>. Stanford University Press.</li>
              <li>Gabbard, G. O. (2007). <em>Tratat de Psihiatrie Psihodinamică</em>. Editura Trei.</li>
              <li>Freud, S. (1926). <em>Inhibitions, Symptoms and Anxiety</em>. Standard Edition, Vol. 20.</li>
              <li>Rothbaum, B. O., Hodges, L., Smith, S., Lee, J. H., &amp; Price, L. (2000). A controlled study of virtual reality exposure therapy for the fear of flying. <em>Journal of Consulting and Clinical Psychology, 68</em>(6), 1020-1026.</li>
              <li>Craske, M. G., Treanor, M., Conway, C. C., Zbozinek, T., &amp; Vervliet, B. (2014). Maximizing exposure therapy: An inhibitory learning approach. <em>Behaviour Research and Therapy, 58</em>, 10-23.</li>
              <li>&Ouml;st, L. G. (1989). One-session treatment for specific phobias. <em>Behaviour Research and Therapy, 27</em>(1), 1-7.</li>
            </ul>
          </div>
        </div>
      </section>

    </main>
  );
}
