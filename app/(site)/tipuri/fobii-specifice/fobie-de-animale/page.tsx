"use client";

import Link from "next/link";
import { useState } from "react";

/* ============================================================
   FOBIA DE ANIMALE — Pagină completă
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

export default function FobieDeAnimalePage() {
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
                <span style={{ color: "var(--color-text)" }}>Fobia de animale</span>
              </nav>

              <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--color-text-secondary)", marginBottom: 24 }}>
                De Daniel Gagea, psiholog clinician, psihoterapeut
              </p>
              <h1 style={{ fontFamily: "var(--font-heading)", fontSize: 38, fontWeight: 400, color: "var(--color-primary)", lineHeight: 1.25, marginBottom: 16 }}>
                Fobia de animale
              </h1>
              <p style={{ fontSize: 17, color: "var(--color-text-secondary)", marginBottom: 24 }}>
                Ghid complet 2026
              </p>
              <p style={{ fontSize: 15, color: "var(--color-text-secondary)", marginBottom: 32 }}>
                Ai nevoie de ajutor imediat? <Link href="#ce-poti-face-acum" style={{ color: "var(--color-secondary)", textDecoration: "underline", textUnderlineOffset: 3 }}>Mergi direct la Ce poți face acum</Link>
              </p>
              <p style={{ fontSize: 17, color: "var(--color-text)", lineHeight: 1.75, marginBottom: 16 }}>
                Câinele vecinului aleargă spre tine și totul se oprește. Nu contează că e mic, că dă din coadă, că stăpânul îți spune că nu face nimic. Inima bate în gât. Mâinile se ridică instinctiv. Corpul tău deja a luat decizia înainte ca mintea să fi apucat să gândească: fugi.
              </p>
              <p style={{ fontSize: 17, color: "var(--color-text)", lineHeight: 1.75, marginBottom: 16 }}>
                Sau poate nu e un câine. Poate e un păianjen pe peretele din baie. Poate e o insectă pe masă. Poate e un șarpe pe care l-ai văzut într-un documentar și care ți-a stricat seara. Poate e doar gândul că ar putea fi un păianjen undeva în cameră, și asta e suficient ca să nu poți dormi.
              </p>
              <p style={{ fontSize: 17, color: "var(--color-text)", lineHeight: 1.75, marginBottom: 16 }}>
                Gândacul acela de pe podea, cel pe care alții îl calcă fără să clipească.. pe tine te face să sari de pe scaun, să ieși din cameră, să simți un val de dezgust care te cuprinde ca o mână rece.
              </p>
              <p style={{ fontSize: 17, color: "var(--color-text)", lineHeight: 1.75 }}>
                <strong>Nu ești irațional și nu exagerezi.</strong> Ce trăiești se numește fobie de animale. Și în acest ghid vei înțelege de ce corpul tău reacționează așa, de ce rațiunea nu ajunge, și ce funcționează ca tratament.
              </p>
            </div>

            {/* Illustration */}
            <div style={{ flexShrink: 0, width: 300 }} aria-hidden="true">
              <style>{`
                @keyframes fa-pulse{0%,100%{opacity:0.12;transform:scale(1)}50%{opacity:0.25;transform:scale(1.15)}}
                @keyframes fa-wave1{0%,100%{r:40}50%{r:52}}
                @keyframes fa-wave2{0%,100%{r:65}50%{r:80}}
                @keyframes fa-wave3{0%,100%{r:90}50%{r:108}}
                @keyframes fa-tremble{0%,100%{transform:translate(0,0)}25%{transform:translate(-1px,0.5px)}75%{transform:translate(1px,-0.5px)}}
                .fa-pulse{animation:fa-pulse 3s ease-in-out infinite}
                .fa-wave1{animation:fa-wave1 2.5s ease-in-out infinite}
                .fa-wave2{animation:fa-wave2 3s ease-in-out infinite;animation-delay:0.3s}
                .fa-wave3{animation:fa-wave3 3.5s ease-in-out infinite;animation-delay:0.6s}
                .fa-tremble{animation:fa-tremble 0.15s ease-in-out infinite}
              `}</style>
              <svg viewBox="0 0 300 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%" }}>
                {/* Fear waves emanating outward */}
                <circle cx="150" cy="155" r="90" stroke="#8B3A3A" strokeWidth="1" opacity="0.08" fill="none" className="fa-wave3" />
                <circle cx="150" cy="155" r="65" stroke="#8B3A3A" strokeWidth="1" opacity="0.12" fill="none" className="fa-wave2" />
                <circle cx="150" cy="155" r="40" stroke="#8B3A3A" strokeWidth="1.5" opacity="0.18" fill="none" className="fa-wave1" />
                {/* Background glow */}
                <circle cx="150" cy="155" r="120" fill="#5C7A6A" opacity="0.04" className="fa-pulse" />
                {/* Animal silhouette (dog-like) */}
                <g opacity="0.2" style={{ transformOrigin: "150px 200px" }}>
                  {/* Body */}
                  <ellipse cx="150" cy="210" rx="35" ry="18" fill="#1B2B4B" />
                  {/* Head */}
                  <circle cx="120" cy="195" r="14" fill="#1B2B4B" />
                  {/* Ears */}
                  <path d="M112 185 L108 172 L118 183 Z" fill="#1B2B4B" />
                  <path d="M124 183 L128 170 L132 182 Z" fill="#1B2B4B" />
                  {/* Legs */}
                  <rect x="125" y="225" width="5" height="18" rx="2" fill="#1B2B4B" />
                  <rect x="145" y="225" width="5" height="18" rx="2" fill="#1B2B4B" />
                  <rect x="160" y="225" width="5" height="18" rx="2" fill="#1B2B4B" />
                  <rect x="170" y="225" width="5" height="18" rx="2" fill="#1B2B4B" />
                  {/* Tail */}
                  <path d="M185 205 Q195 190 190 178" stroke="#1B2B4B" strokeWidth="4" strokeLinecap="round" fill="none" />
                </g>
                {/* Person silhouette (pulling back, trembling) */}
                <g className="fa-tremble" opacity="0.3">
                  <circle cx="210" cy="115" r="18" fill="#1B2B4B" />
                  <path d="M195 140 Q210 130 225 140 L222 195 Q210 205 198 195 Z" fill="#1B2B4B" />
                  {/* Raised arms (defensive) */}
                  <path d="M195 150 L178 130" stroke="#1B2B4B" strokeWidth="5" strokeLinecap="round" />
                  <path d="M225 150 L238 128" stroke="#1B2B4B" strokeWidth="5" strokeLinecap="round" />
                </g>
                {/* Spider silhouette (small, upper left) */}
                <g opacity="0.15">
                  <circle cx="80" cy="100" r="5" fill="#1B2B4B" />
                  <line x1="80" y1="100" x2="70" y2="92" stroke="#1B2B4B" strokeWidth="1" />
                  <line x1="80" y1="100" x2="90" y2="92" stroke="#1B2B4B" strokeWidth="1" />
                  <line x1="80" y1="100" x2="72" y2="105" stroke="#1B2B4B" strokeWidth="1" />
                  <line x1="80" y1="100" x2="88" y2="105" stroke="#1B2B4B" strokeWidth="1" />
                  {/* Web thread */}
                  <line x1="80" y1="95" x2="80" y2="65" stroke="#1B2B4B" strokeWidth="0.5" opacity="0.5" />
                </g>
                {/* Floor */}
                <line x1="70" y1="255" x2="230" y2="255" stroke="#1B2B4B" strokeWidth="1" opacity="0.1" />
                {/* Label */}
                <text x="150" y="295" textAnchor="middle" fill="#1B2B4B" opacity="0.4" style={{ fontSize: 11, fontFamily: "var(--font-body)" }}>frica care nu ascultă de rațiune</text>
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
            <div style={{ maxHeight: tocOpen ? 400 : 0, overflow: "hidden", transition: "max-height 0.3s ease-out" }}>
              <ul style={{ marginTop: 12, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6, fontSize: 15 }}>
                {[
                  { href: "#ce-este", label: "Ce este fobia de animale" },
                  { href: "#frica-si-dezgust", label: "Frică și dezgust: două emoții, nu una" },
                  { href: "#corpul-nu-asculta", label: "De ce corpul nu ascultă de rațiune" },
                  { href: "#comportamente-de-siguranta", label: "Comportamente de siguranță" },
                  { href: "#perspectiva-psihodinamica", label: "Micul Hans: ce ne spune psihicul" },
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
            Ce este fobia de animale
          </h2>
          <p style={{ marginBottom: 16 }}>
            Fobia de animale este o frică intensă, persistentă și disproporționată față de un anumit animal sau o categorie de animale, care duce la evitare activă și afectează viața de zi cu zi. Face parte din subtipul animal al fobiilor specifice și este cel mai frecvent subtip.. afectează aproximativ 3-6% din populație.
          </p>
          <p style={{ marginBottom: 16 }}>
            Cele mai comune fobii de animale sunt fobia de câini (cinofobie), de păianjeni (arahnofobie), de șerpi (ofidiofobie), de insecte (entomofobie) și de rozătoare. Dar orice animal poate deveni obiectul unei fobii, de la pisici la păsări, de la pești la fluturi.
          </p>
          <p style={{ marginBottom: 16 }}>
            Debutul apare de obicei în copilărie, în jurul vârstei de 7-9 ani, mai devreme decât majoritatea celorlalte fobii. Multe persoane nu-și amintesc un moment precis în care a început. Pare că a fost acolo dintotdeauna.
          </p>
          <p style={{ marginBottom: 32 }}>
            Fobia de animale e mai frecventă la femei, într-un raport de aproximativ 2:1 față de bărbați. Dar bărbații cu fobie de animale suferă la fel de mult, cu un strat suplimentar de rușine.. un bărbat nu se teme de un păianjen.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            Frică normală sau fobie?
          </h3>
          <p style={{ marginBottom: 16 }}>
            E normal să te ferești de un câine care mârâie sau de un șarpe pe care nu-l recunoști. Asta e prudență, nu fobie. Diferența apare când reacția e disproporționată față de pericolul real.
          </p>
          <p style={{ marginBottom: 16 }}>
            Un exemplu concret: vezi o fotografie cu un păianjen într-o carte. Nu e real, nu te poate atinge, nu e în aceeași cameră cu tine. Dar inima ți se accelerează, simți un val de dezgust, și închizi cartea. Sau schimbi pagina. Sau lași cartea din mână.
          </p>
          <p>
            Dacă reacția ta la un animal mic, inofensiv sau absent fizic e la fel de intensă ca reacția la un pericol real, atunci ce trăiești e mai mult decât o simplă neplăcere. E un mecanism care funcționează pe pilot automat, independent de ce știi rațional.
          </p>
        </div>
      </section>

      {/* ── FRICĂ ȘI DEZGUST ── */}
      <section id="frica-si-dezgust" style={{ background: "var(--color-background)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", marginBottom: 24 }}>
            Frică și dezgust: două emoții, nu una
          </h2>
          <p style={{ marginBottom: 16 }}>
            Majoritatea oamenilor cred că fobia de animale e doar frică. Dar cercetările arată că sunt două emoții distincte implicate, și proporția lor variază în funcție de animal.
          </p>
          <p style={{ marginBottom: 32 }}>
            Pentru câini, emoția dominantă e frica.. frica de mușcătură, de atac, de pierderea controlului. Pentru păianjeni, insecte și șerpi, emoția dominantă e adesea dezgustul. Nu te temi că păianjenul te va răni. Te dezgustă. Simți o repulsie fizică, viscerală, care vine din stomac, nu din minte.
          </p>

          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginBottom: 32 }}>
            <div style={{ flex: 1, minWidth: 280, background: "var(--color-background-white)", borderRadius: 12, padding: 28, border: "1px solid var(--color-border)" }}>
              <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-secondary)", fontWeight: 600, marginBottom: 10 }}>Frica</p>
              <p style={{ fontSize: 16, marginBottom: 12 }}>
                Activează răspunsul de luptă sau fugă. Inima bate repede, mușchii se tensionează, vrei să fugi sau să te aperi. E despre pericol.
              </p>
              <p style={{ fontSize: 14, color: "var(--color-text-secondary)" }}>
                Animale tipice: câini, șerpi mari, animale sălbatice
              </p>
            </div>
            <div style={{ flex: 1, minWidth: 280, background: "var(--color-background-white)", borderRadius: 12, padding: 28, border: "1px solid var(--color-border)" }}>
              <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", color: "#8B3A3A", fontWeight: 600, marginBottom: 10 }}>Dezgustul</p>
              <p style={{ fontSize: 16, marginBottom: 12 }}>
                Activează răspunsul de respingere. Greață, senzație de murdărie, nevoia de a te spăla sau de a te îndepărta. E despre contaminare.
              </p>
              <p style={{ fontSize: 14, color: "var(--color-text-secondary)" }}>
                Animale tipice: păianjeni, insecte, gândaci, rozătoare
              </p>
            </div>
          </div>

          <p style={{ marginBottom: 16 }}>
            Această distincție contează enorm pentru tratament. Dacă emoția ta dominantă e dezgustul, nu doar frica, atunci tratamentul trebuie să includă și expunere la dezgust, nu doar la frică. Altfel lucrezi pe jumătate.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16, marginTop: 32 }}>
            De ce ne temem de șerpi dar nu de prize electrice
          </h3>
          <p style={{ marginBottom: 16 }}>
            O priză electrică poate fi letală. Un șarpe de grădină, nu. Și totuși, aproape nimeni nu are fobie de prize, dar milioane de oameni au fobie de șerpi. De ce?
          </p>
          <p style={{ marginBottom: 16 }}>
            Psihologul Martin Seligman a propus conceptul de frici pregătite (prepared fears). Ideea e că creierul uman vine din fabrică cu o predispoziție de a învăța rapid frica față de anumite lucruri.. animale, înălțimi, întuneric, spații închise. Sunt lucruri care au fost periculoase pentru strămoșii noștri timp de sute de mii de ani.
          </p>
          <p style={{ marginBottom: 16 }}>
            Prizele electrice există de 150 de ani. Creierul nu a avut timp să le includă în lista de pericole prestabilite. Dar șerpii, păianjenii, câinii sălbatici au fost acolo de la început.
          </p>
          <p>
            De aceea fobiile de animale se învață mai ușor, mai rapid și sunt mai rezistente la stingere decât fricile de obiecte moderne. Nu e o defecțiune a creierului tău, ci un software vechi care încă rulează.
          </p>
        </div>
      </section>

      {/* ── CORPUL NU ASCULTĂ ── */}
      <section id="corpul-nu-asculta" style={{ background: "var(--color-background-white)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", marginBottom: 24 }}>
            De ce corpul nu ascultă de rațiune
          </h2>
          <p style={{ marginBottom: 16 }}>
            Știu că păianjenul nu-mi face nimic, dar nu pot. Această frază o aud de la aproape fiecare persoană cu fobie de animale. Și are o explicație foarte concretă.
          </p>
          <p style={{ marginBottom: 32 }}>
            Creierul tău procesează frica pe două căi diferite, care funcționează în paralel dar cu viteze diferite.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            Calea rapidă și calea lentă
          </h3>
          <p style={{ marginBottom: 16 }}>
            <strong>Calea rapidă</strong> trece prin amigdală (centrul de alarmă al creierului). E veche, automată și foarte rapidă. Vede ceva care seamănă cu un șarpe și declanșează alarma în milisecunde. Nu analizează, nu judecă, nu gândește. Reacționează.
          </p>
          <p style={{ marginBottom: 16 }}>
            <strong>Calea lentă</strong> trece prin cortexul prefrontal (partea rațională). Analizează, compară, evaluează. Și ajunge la concluzia corectă: e doar un furtun de grădină, nu un șarpe. Dar ajunge acolo cu câteva sute de milisecunde mai târziu.
          </p>
          <p style={{ marginBottom: 32 }}>
            Când ai fobie de animale, calea rapidă câștigă de fiecare dată. Corpul tău a reacționat deja înainte ca mintea să fi apucat să analizeze. Și odată ce alarma a sunat, e foarte greu să o oprești, chiar dacă știi rațional că nu e pericol.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            Predicțiile ascunse
          </h3>
          <p style={{ marginBottom: 16 }}>
            Creierul tău nu doar reacționează la ce vede. Anticipează. Face predicții constante despre ce urmează să se întâmple. Și aceste predicții sunt cele care alimentează fobia.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 24 }}>
            {[
              "Va sări pe mine",
              "Va intra în casă",
              "Mă va mușca",
              "Va urca pe mine",
              "Nu voi putea scăpa",
              "Voi pierde controlul",
              "Mă voi face de râs",
              "Dezgustul nu va trece niciodată",
            ].map((s) => (
              <span key={s} style={{ display: "inline-block", padding: "10px 18px", background: "var(--color-background)", borderRadius: 8, fontSize: 15, color: "var(--color-text)", border: "1px solid var(--color-border)" }}>{s}</span>
            ))}
          </div>

          <div style={{ background: "var(--color-background)", borderRadius: 12, padding: "24px 28px" }}>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7 }}>
              Niciuna din aceste predicții nu se verifică de obicei. Dar fiecare act de evitare împiedică verificarea. Dacă fugi de câine, nu afli niciodată că nu te-ar fi mușcat. Și creierul tău continuă să creadă că predicția era corectă.
            </p>
          </div>
        </div>
      </section>

      {/* ── COMPORTAMENTE DE SIGURANȚĂ ── */}
      <section id="comportamente-de-siguranta" style={{ background: "var(--color-background)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", marginBottom: 24 }}>
            Comportamente de siguranță
          </h2>
          <p style={{ marginBottom: 16 }}>
            Acestea sunt lucrurile pe care le faci ca să faci față. Fiecare în parte pare rezonabil. Dar pune-le pe toate la un loc și vei vedea costul real:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 32 }}>
            {[
              "Verifici fiecare cameră înainte de a intra",
              "Scanezi mereu podeaua, pereții, tavanul",
              "Nu mergi pe iarbă sau prin parcuri",
              "Eviți pivnițele, podurile, magaziile",
              "Ții geamurile și ușile mereu închise",
              "Verifici patul înainte de culcare",
              "Eviți documentarele, filmele, pozele cu animale",
              "Ceri altcuiva să scoată insecta din cameră",
              "Nu mergi la țară sau în vacanțe în natură",
              "Porți pantofi închiși mereu, chiar și vara",
              "Folosești insecticide preventiv, zilnic",
              "Traversezi strada când vezi un câine",
            ].map((s) => (
              <span key={s} style={{ display: "inline-block", padding: "10px 18px", background: "var(--color-background-white)", borderRadius: 8, fontSize: 15, color: "var(--color-text)", border: "1px solid var(--color-border)" }}>{s}</span>
            ))}
          </div>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            Cum se extinde evitarea
          </h3>
          <p style={{ marginBottom: 16 }}>
            La început evitai doar câinii mari. Apoi orice câine. Apoi parcurile unde ar putea fi câini. Apoi străzile unde ai văzut câini. Apoi întreaga zonă. Teritoriul sigur se micșorează constant, iar tu nici nu observi, pentru că fiecare extensie pare logică în momentul în care o faci.
          </p>
          <p style={{ marginBottom: 16 }}>
            Sau evitai doar păianjenii reali. Apoi pozele cu păianjeni. Apoi filmele în care ar putea apărea un păianjen. Apoi cărțile cu ilustrații. Apoi conversațiile despre păianjeni. Fobia nu stă pe loc. Se extinde dacă o lași.
          </p>

          <div style={{ background: "var(--color-background-white)", borderRadius: 12, padding: "24px 28px", borderLeft: "3px solid #8B3A3A" }}>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7 }}>
              O vacanță la munte anulată. O vizită la bunici evitată. Un job refuzat pentru că biroul e la parter. Un copil care preia frica ta și o duce mai departe. Costul evitării nu e doar disconfortul tău. E viața pe care n-o trăiești.
            </p>
          </div>
        </div>
      </section>

      {/* ── LITTLE HANS / PERSPECTIVA PSIHODINAMICĂ ── */}
      <section id="perspectiva-psihodinamica" style={{ background: "var(--color-primary)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "#ffffff", marginBottom: 24 }}>
            Micul Hans: ce ne spune psihicul prin frica de animale
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 16 }}>
            Până aici am vorbit despre cum funcționează fobia. Acum vreau să vorbim despre de ce există. Ce încearcă psihicul tău să comunice prin acest simptom.
          </p>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 32 }}>
            Una dintre cele mai cunoscute povești din istoria psihologiei este despre un băiețel pe nume Hans, care la 5 ani a dezvoltat o frică intensă de cai. Povestea lui e relevantă și azi, nu pentru detaliile ei clinice, ci pentru principiul pe care îl ilustrează.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "rgba(255,255,255,0.95)", marginBottom: 12 }}>
            Povestea lui Hans
          </h3>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 16 }}>
            Hans trăia într-o vreme în care caii erau peste tot pe străzi, exact cum sunt azi câinii sau mașinile. Și brusc, a început să se teamă de ei. Nu voia să iasă din casă. Plângea când vedea un cal. Era convins că un cal va veni și-l va mușca.
          </p>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 16 }}>
            Prin terapie (prima psihoterapie a unui copil din istorie), s-a descoperit că frica de cai nu era despre cai. Hans traversa o perioadă emoțional complicată. Avea sentimente amestecate față de tatăl său.. îl iubea, dar se și temea de el. Avea sentimente pe care nu le putea numi sau exprima la 5 ani.
          </p>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 32 }}>
            Psihicul lui a făcut o mutare specifică: a luat emoțiile complicate, pe care nu le putea procesa, și le-a mutat pe un obiect exterior, concret, vizibil.. calul. Calul putea fi evitat. Sentimentele față de tată, nu.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "rgba(255,255,255,0.95)", marginBottom: 12 }}>
            Ce ne spune asta
          </h3>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 16 }}>
            Nu spun că orice fobie de animale ascunde un conflict psihic nerezolvat. Multe fobii de animale au o componentă puternic biologică, pregătită genetic, și nu au nicio legătură cu dinamica familiei.
          </p>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 16 }}>
            Dar merită să te întrebi: ce s-a întâmplat în viața mea când a apărut fobia? Sau dacă a fost dintotdeauna acolo, ce funcție servește ea? Ce evit prin ea, dincolo de animalul în sine?
          </p>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 16 }}>
            Uneori, frica de câini ascunde o frică de agresivitate, a ta sau a altcuiva. Frica de păianjeni poate masca o senzație de invazie a intimității, ceva care intră unde nu e invitat. Frica de șerpi poate fi legată de ceva ascuns, imprevizibil, care apare de nicăieri.
          </p>
          <p style={{ color: "rgba(255,255,255,0.85)" }}>
            Animalul de care te temi poate fi un ecran pe care psihicul tău proiectează ceva ce nu poate exprima direct. Nu întotdeauna. Dar suficient de des încât merită întrebarea.
          </p>
        </div>
      </section>

      {/* ── TRATAMENT - STATISTICI ── */}
      <section id="tratament" style={{ background: "var(--color-background-white)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", marginBottom: 24 }}>
            Tratament
          </h2>
          <p style={{ marginBottom: 24 }}>
            Fobiile de animale au cel mai bun prognostic din toate fobiile specifice. Și fobiile specifice sunt cea mai tratabilă condiție din psihologia clinică. Asta înseamnă că ce ai tu se tratează, și se tratează bine.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            Ce spun datele
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 32 }}>
            {[
              { stat: "80-95%", label: "pacienți cu îmbunătățiri semnificative" },
              { stat: "1-12", label: "ședințe de tratament" },
              { stat: "75-90%", label: "succes într-o singură sesiune prelungită" },
            ].map((d) => (
              <div key={d.stat} style={{ flex: "1 1 160px", background: "var(--color-background)", borderRadius: 12, padding: "20px 24px", border: "1px solid var(--color-border)", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-heading)", fontSize: 28, fontWeight: 400, color: "var(--color-secondary)", marginBottom: 4 }}>{d.stat}</p>
                <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.4 }}>{d.label}</p>
              </div>
            ))}
          </div>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            Ierarhia de expunere: cum arată concret
          </h3>
          <p style={{ marginBottom: 16 }}>
            Tratamentul nu înseamnă să fii pus brusc în fața animalului de care te temi. Înseamnă un progres treptat, calibrat, în care tu controlezi fiecare pas:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 32, background: "var(--color-background)", borderRadius: 12, padding: 24, border: "1px solid var(--color-border)" }}>
            {[
              { level: "Ușor", color: "var(--color-secondary)", steps: [
                "Citesc un text despre animalul de care mă tem",
                "Mă uit la o poză cu animalul, de la distanță",
                "Mă uit la o poză cu animalul, de aproape, timp de 2 minute",
              ]},
              { level: "Mediu", color: "#C4873B", steps: [
                "Mă uit la un video cu animalul",
                "Stau în aceeași cameră cu animalul (într-o cutie/cușcă), la 3 metri",
                "Stau în aceeași cameră cu animalul, la 1 metru",
                "Mă uit la animal de aproape, fără barieră, 5 minute",
              ]},
              { level: "Greu", color: "#8B3A3A", steps: [
                "Ating cutia sau cușca în care e animalul",
                "Ating animalul (cu mănuși, apoi fără)",
                "Țin animalul în mână sau stau lângă el fără protecție, 10 minute",
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
            La fiecare treaptă, rămâi în situație până când frica sau dezgustul scade de la sine. Nu pleci la primul semn de disconfort. Stai. Și descoperi ceva pe care evitarea nu te lasă niciodată să descoperi: frica are un vârf, iar după vârf, coboară.
          </p>
        </div>
      </section>

      {/* ── TRATAMENT - DETALII ── */}
      <section style={{ background: "var(--color-background)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            De ce a ajunge nu e suficient
          </h3>
          <p style={{ marginBottom: 16 }}>
            Mulți oameni fac un lucru curajos.. ajung până la treapta care îi sperie, o trec, și se opresc. Am reușit, gata, am terminat. Dar cercetările arată că oprirea la pragul minim crește riscul de revenire a fobiei.
          </p>
          <p style={{ marginBottom: 16 }}>
            Conceptul se numește supra-expunere (overlearning). Nu e suficient să atingi păianjenul o dată. Trebuie să-l atingi de 10 ori. Să-l ții în mână 5 minute, nu 5 secunde. Să te expui mai mult decât trebuie. Cu cât ești mai departe de linia de start, cu atât riscul de revenire e mai mic.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16, marginTop: 32 }}>
            Expunerea ca experiment
          </h3>
          <p style={{ marginBottom: 16 }}>
            Abordarea modernă a expunerii nu e stai acolo până trece frica, ci hai să testăm o predicție. Înainte de fiecare pas, identifici ce crezi că se va întâmpla.. dacă ating cutia cu păianjenul, voi avea un atac de panică și nu voi putea suporta.
          </p>
          <p style={{ marginBottom: 16 }}>
            Apoi faci pasul. Și verifici: s-a adeverit predicția? De obicei, nu. Și acea verificare e mai puternică decât orice explicație rațională. Nu te conving eu că ești în siguranță. Te convingi singur, prin experiență directă.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 12, marginTop: 32 }}>
            De ce medicamentele nu sunt prima opțiune
          </h3>
          <p style={{ marginBottom: 16 }}>
            Fobia de animale, ca toate fobiile specifice, se tratează prin psihoterapie, nu prin medicamente. Benzodiazepinele pot reduce temporar anxietatea, dar blochează exact procesul de învățare care face expunerea să funcționeze. Dacă iei un calmant înainte de a te expune la animal, creierul tău nu învață că animalul e sigur. Învață că a supraviețuit doar pentru că a luat pastila.
          </p>

          <div style={{ background: "var(--color-primary)", borderRadius: 12, padding: "24px 28px" }}>
            <p style={{ color: "#ffffff", fontSize: 17, fontWeight: 500, lineHeight: 1.65, margin: 0 }}>
              Există evidențe că o singură sesiune de expunere prelungită (2-3 ore) poate fi suficientă pentru fobia de animale, cu rate de succes de 75-90%.
            </p>
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
              title: "Construiește-ți propria ierarhie",
              text: "Scrie pe hârtie 10 situații legate de animalul de care te temi, de la cea mai puțin înfricoșătoare la cea mai grea. Fii specific: nu câini în general, ci un câine mic, în lesă, la 5 metri. Apoi începe de la prima treaptă. Rămâi acolo până frica scade, chiar și puțin. Nu trece la următoarea până nu o stăpânești pe aceasta.",
            },
            {
              nr: "2",
              title: "Expunerea la imagini",
              text: "Caută imagini cu animalul de care te temi. Începe cu desene animate, care sunt mai puțin realiste. Apoi treci la fotografii. Apoi la videoclipuri. La fiecare pas, observă ce simți în corp. Nu încerca să oprești senzația. Doar observ-o. Notează cât durează până scade. Data viitoare, va scădea mai repede.",
            },
            {
              nr: "3",
              title: "Identifică-ți predicțiile",
              text: "Scrie pe hârtie, cât mai specific: ce cred eu că se va întâmpla dacă stau lângă un câine? Forțează-te să fii precis.. mă va mușca, voi face un atac de panică, dezgustul nu va trece niciodată. Apoi întreabă-te: câte din aceste predicții s-au adeverit vreodată? Și dacă s-au adeverit, cât de grav a fost de fapt?",
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
              { icon: "🗺️", text: "Construirea unei ierarhii de expunere personalizate, adaptate exact animalului și fricilor tale" },
              { icon: "🪜", text: "Ghidarea ta prin trepte pe care singur le-ai evita sau le-ai sări" },
              { icon: "🔍", text: "Identificarea comportamentelor de siguranță pe care le folosești fără să realizezi" },
              { icon: "🧠", text: "Lucrul cu dezgustul, nu doar cu frica, atunci când dezgustul e emoția dominantă" },
              { icon: "🔑", text: "Explorarea stratului mai profund.. ce înseamnă animalul acesta pentru tine" },
            ].map((item) => (
              <div key={item.text} style={{ display: "flex", gap: 16, padding: "18px 24px", background: "var(--color-background-white)", borderRadius: 12, border: "1px solid var(--color-border)", alignItems: "center" }}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
                <p style={{ margin: 0, fontSize: 16 }}>{item.text}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "var(--color-primary)", borderRadius: 16, padding: "40px 32px", textAlign: "center" }}>
            <p style={{ color: "#ffffff", fontSize: 20, fontWeight: 500, marginBottom: 8, fontFamily: "var(--font-heading)" }}>
              Fobia de animale are una dintre cele mai mari rate de succes din psihoterapie.
            </p>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, marginBottom: 28, maxWidth: 480, margin: "0 auto 28px" }}>
              Nu e ceva cu care trebuie să trăiești, ci ceva ce se tratează.
            </p>
            <Link
              href="/programare?din=fobie-de-animale"
              style={{ display: "inline-block", padding: "16px 40px", background: "var(--color-secondary)", color: "#ffffff", borderRadius: 8, fontWeight: 600, fontSize: 17, textDecoration: "none", transition: "opacity 0.2s" }}
            >
              Programează o consultație
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="intrebari-frecvente" style={{ background: "var(--color-background)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", marginBottom: 24 }}>
            Întrebări frecvente
          </h2>

          <FAQ q="Fobia de animale se moștenește?">
            <p style={{ marginBottom: 8 }}>Există o predispoziție genetică, dar nu fobia în sine se moștenește. Ce se transmite e sensibilitatea la dezgust și predispoziția de a învăța rapid frica față de anumite animale.</p>
            <p style={{ marginBottom: 8 }}>Cercetările pe gemeni arată o componentă genetică semnificativă. Dacă un părinte are fobie de păianjeni, copilul are șanse mai mari să dezvolte aceeași fobie. Dar nu e inevitabil.</p>
            <p>Pe lângă genetică, modul în care reacționează părinții în fața animalului contează enorm. Un copil care vede mama speriată de câini învață, prin observare, că câinii sunt periculoși. Și această învățare poate fi la fel de puternică ca o experiență directă.</p>
          </FAQ>

          <FAQ q="Copilul meu se teme de câini. Ce pot face?">
            <p style={{ marginBottom: 8 }}>Nu forțați contactul cu animalul. Nu-i spuneți că nu e nimic sau că nu trebuie să fie fricos. Aceste reacții, deși bine intenționate, invalidează ce simte copilul și pot agrava fobia.</p>
            <p style={{ marginBottom: 8 }}>Cel mai important lucru pe care îl puteți face e să vă gestionați propria reacție. Copiii învață frica observându-și părinții. Dacă voi sunteți calmi în prezența câinilor, copilul preia acest model în timp.</p>
            <p>Expunerea graduală funcționează excelent la copii, adesea mai bine decât la adulți. Începeți cu cărți cu imagini, apoi videoclipuri, apoi observarea unui câine de la distanță. Lăsați copilul să controleze ritmul. Și dacă fobia persistă sau se agravează, un psiholog specializat pe copii poate ajuta foarte mult.</p>
          </FAQ>

          <FAQ q="Se poate vindeca complet o fobie de animale?">
            <p style={{ marginBottom: 8 }}>Da. Fobiile de animale au cel mai bun prognostic din toate fobiile specifice, care la rândul lor sunt cea mai tratabilă condiție din psihologia clinică.</p>
            <p style={{ marginBottom: 8 }}>Cu expunere graduală, 80-95% dintre persoane obțin îmbunătățiri semnificative. Multe studii arată că o singură sesiune prelungită de 2-3 ore poate fi suficientă, cu rate de succes de 75-90%.</p>
            <p>Vindecare completă înseamnă că poți funcționa normal în prezența animalului, fără evitare, fără anxietate semnificativă. Nu înseamnă neapărat că vei adora păianjenii. Dar înseamnă că nu-ți vor mai controla viața.</p>
          </FAQ>

          <FAQ q="De ce am dezgust, nu frică?">
            <p style={{ marginBottom: 8 }}>Pentru multe animale, mai ales insecte, păianjeni și rozătoare, dezgustul e emoția principală, nu frica. Asta nu e o anomalie. E un mecanism diferit de protecție.</p>
            <p style={{ marginBottom: 8 }}>Dezgustul a evoluat ca răspuns la riscul de contaminare și boală. Animalele care stârnesc dezgust sunt adesea cele asociate cu murdăria, descompunerea sau bolile. Păianjenii, gândacii, șobolanii.. toate sunt legate de idei de contaminare.</p>
            <p>Asta contează pentru tratament, pentru că dezgustul se procesează diferit de frică. Expunerea clasică reduce frica eficient, dar dezgustul scade mai lent și poate necesita mai multe sesiuni. Un terapeut care înțelege această distincție va adapta tratamentul în consecință.</p>
          </FAQ>

          <FAQ q="Am fobie de animale, dar nu am fost niciodată mușcat. De ce?">
            <p style={{ marginBottom: 8 }}>Nu ai nevoie de o experiență traumatică directă. Cercetările arată trei căi prin care se dezvoltă fobiile de animale.</p>
            <p style={{ marginBottom: 8 }}>Prima e experiența directă: ai fost mușcat, înțepat sau speriat de un animal. A doua e observarea: ai văzut pe cineva (de obicei un părinte) reacționând cu frică sau dezgust. A treia e transmiterea informațională: ai auzit povești, ai citit, ai văzut în filme că animalul e periculos.</p>
            <p>Pe lângă aceste trei căi, există predispoziția genetică.. acele frici pregătite de care am vorbit. Creierul tău a venit pregătit să învețe rapid frica față de anumite animale. Uneori e suficient un stimul foarte mic, pe care nici nu ți-l amintești, pentru ca învățarea să se producă.</p>
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
              { href: "/tipuri/fobii-specifice/fobie-de-sange", label: "Fobia de sânge și ace" },
              { href: "/tipuri/fobii-specifice/fobie-de-zbor", label: "Fobia de zbor" },
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
              <li>Seligman, M. E. P. (1971). Phobias and preparedness. <em>Behavior Therapy, 2</em>(3), 307-320.</li>
              <li>&Ouml;hman, A., &amp; Mineka, S. (2001). Fears, phobias, and preparedness: Toward an evolved module of fear and fear learning. <em>Psychological Review, 108</em>(3), 483-522.</li>
              <li>&Ouml;st, L. G. (1989). One-session treatment for specific phobias. <em>Behaviour Research and Therapy, 27</em>(1), 1-7.</li>
              <li>Craske, M. G., Treanor, M., Conway, C. C., Zbozinek, T., &amp; Vervliet, B. (2014). Maximizing exposure therapy: An inhibitory learning approach. <em>Behaviour Research and Therapy, 58</em>, 10-23.</li>
              <li>Davey, G. C. L. (1994). The disgusting spider: The role of disease and illness in the perpetuation of fear of spiders. <em>Society and Animals, 2</em>(1), 17-25.</li>
              <li>Matchett, G., &amp; Davey, G. C. L. (1991). A test of a disease-avoidance model of animal phobias. <em>Behaviour Research and Therapy, 29</em>(1), 91-94.</li>
              <li>Rachman, S. (1977). The conditioning theory of fear acquisition: A critical examination. <em>Behaviour Research and Therapy, 15</em>(5), 375-387.</li>
              <li>Freud, S. (1909). <em>Analysis of a Phobia in a Five-Year-Old Boy</em>. Standard Edition, Vol. 10.</li>
              <li>Gabbard, G. O. (2007). <em>Tratat de Psihiatrie Psihodinamică</em>. Editura Trei.</li>
              <li>Clark, D. A., &amp; Beck, A. T. (2010). <em>Cognitive Therapy of Anxiety Disorders: Science and Practice</em>. Guilford Press.</li>
            </ul>
          </div>
        </div>
      </section>

    </main>
  );
}
