"use client";

import Link from "next/link";
import { useState } from "react";

/* ============================================================
   CLAUSTROFOBIE — Pagină completă
   Content: WorkMemory/tipuri/fobii-specifice/claustrofobie-pagina-finala.md
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

export default function ClaustrofobiePage() {
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
                <span style={{ color: "var(--color-text)" }}>Claustrofobie</span>
              </nav>

              <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--color-text-secondary)", marginBottom: 24 }}>
                De Daniel Gagea, psiholog clinician, psihoterapeut
              </p>
              <h1 style={{ fontFamily: "var(--font-heading)", fontSize: 38, fontWeight: 400, color: "var(--color-primary)", lineHeight: 1.25, marginBottom: 16 }}>
                Claustrofobie
              </h1>
              <p style={{ fontSize: 17, color: "var(--color-text-secondary)", marginBottom: 24 }}>
                Ghid complet 2026
              </p>
              <p style={{ fontSize: 15, color: "var(--color-text-secondary)", marginBottom: 32 }}>
                Ai un RMN programat și deja te gândești cum să-l amâni? <Link href="#ce-poti-face-acum" style={{ color: "var(--color-secondary)", textDecoration: "underline", textUnderlineOffset: 3 }}>Mergi direct la Ce poți face acum</Link>
              </p>
              <p style={{ fontSize: 17, color: "var(--color-text)", lineHeight: 1.75, marginBottom: 16 }}>
                Ușa liftului se închide. În primele două secunde nu simți nimic. Apoi apare. O strângere în piept, de parcă cineva a pus o greutate pe tine. Respirația se accelerează. Gâtul se strânge. Simți că aerul nu mai ajunge. Pereții par că se apropie. Mintea îți spune un singur lucru, foarte tare: trebuie să ieși. Acum.
              </p>
              <p style={{ fontSize: 17, color: "var(--color-text)", lineHeight: 1.75, marginBottom: 16 }}>
                Apesi pe buton. Ușa se deschide. Și totul trece. În câteva secunde ești bine. Rămâi cu inima accelerată, cu un gust de rușine în gură, și cu întrebarea pe care ți-o pui de fiecare dată.. &quot;Ce e în neregulă cu mine?&quot;
              </p>
              <p style={{ fontSize: 17, color: "var(--color-text)", lineHeight: 1.75 }}>
                <strong>Dacă te recunoști, nu ești slab și nu exagerezi.</strong> Ce trăiești se numește claustrofobie. Și în acest ghid vei înțelege exact de ce corpul tău reacționează așa, ce se întâmplă de fapt când &quot;rămâi fără aer&quot;, și ce funcționează ca tratament.
              </p>
            </div>

            {/* Illustration */}
            <div style={{ flexShrink: 0, width: 300 }} aria-hidden="true">
              <style>{`
                @keyframes cl-close{0%,100%{transform:scaleX(1)}50%{transform:scaleX(0.85)}}
                @keyframes cl-breathe{0%,100%{opacity:0.2;transform:scale(1)}50%{opacity:0.35;transform:scale(1.04)}}
                .cl-close{animation:cl-close 4s ease-in-out infinite}
                .cl-breathe{animation:cl-breathe 3s ease-in-out infinite}
              `}</style>
              <svg viewBox="0 0 300 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%" }}>
                <circle cx="150" cy="155" r="130" fill="#5C7A6A" opacity="0.04" className="cl-breathe" />
                {/* Walls closing in */}
                <rect x="50" y="60" width="12" height="200" rx="4" fill="#1B2B4B" opacity="0.15" className="cl-close" style={{ transformOrigin: "56px 160px" }} />
                <rect x="238" y="60" width="12" height="200" rx="4" fill="#1B2B4B" opacity="0.15" className="cl-close" style={{ transformOrigin: "244px 160px" }} />
                {/* Person */}
                <circle cx="150" cy="120" r="22" fill="#1B2B4B" opacity="0.3" />
                <path d="M128 155 Q150 145 172 155 L168 215 Q150 225 132 215 Z" fill="#1B2B4B" opacity="0.2" />
                {/* Chest tightness lines */}
                <path d="M138 175 Q150 170 162 175" stroke="#8B3A3A" strokeWidth="1.5" opacity="0.25" fill="none" />
                <path d="M140 182 Q150 177 160 182" stroke="#8B3A3A" strokeWidth="1" opacity="0.2" fill="none" />
                {/* Air flow indicators */}
                <circle cx="120" cy="140" r="3" fill="#5C7A6A" opacity="0.2" className="cl-breathe" />
                <circle cx="180" cy="135" r="2.5" fill="#5C7A6A" opacity="0.15" className="cl-breathe" style={{ animationDelay: "0.5s" }} />
                <circle cx="130" cy="100" r="2" fill="#5C7A6A" opacity="0.15" className="cl-breathe" style={{ animationDelay: "1s" }} />
                {/* Floor */}
                <line x1="70" y1="260" x2="230" y2="260" stroke="#1B2B4B" strokeWidth="1" opacity="0.1" />
                {/* Label */}
                <text x="150" y="300" textAnchor="middle" fill="#1B2B4B" opacity="0.4" style={{ fontSize: 11, fontFamily: "var(--font-body)" }}>spațiul care se strânge</text>
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
                  { href: "#ce-este", label: "Ce este claustrofobia" },
                  { href: "#doua-frici", label: "Două frici, nu una: restricție și sufocare" },
                  { href: "#senzatia-de-sufocare", label: "De ce simți că rămâi fără aer" },
                  { href: "#comportamente-de-siguranta", label: "Cum te menții singur în claustrofobie" },
                  { href: "#perspectiva-psihodinamica", label: "Ce vrea să spună psihicul" },
                  { href: "#tratament", label: "Tratament" },
                  { href: "#ce-poti-face-acum", label: "Ce poți face acum" },
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
            Ce este claustrofobia
          </h2>
          <p style={{ marginBottom: 16 }}>
            Claustrofobia este o frică intensă și persistentă față de spațiile închise sau restrânse, disproporționată față de pericolul real, care duce la evitare activă și afectează viața de zi cu zi. Face parte din subtipul situațional al fobiilor specifice și afectează aproximativ 2-5% din populație.
          </p>
          <p style={{ marginBottom: 16 }}>
            Debutul apare frecvent în jurul vârstei de 25 de ani, mai târziu decât majoritatea celorlalte fobii, deși poate apărea și după o experiență negativă concretă, de exemplu un blocaj într-un lift sau o experiență stresantă într-un spațiu mic.
          </p>
          <p style={{ marginBottom: 16 }}>
            Dar claustrofobia nu e doar &quot;frica de spații mici&quot;. Și tocmai asta face diferența între a o înțelege și a rămâne prizonier în ea.
          </p>
          <p style={{ marginBottom: 16 }}>
            Unii oameni cu claustrofobie nu au nicio problemă într-o cameră mică, dar intră în panică într-un lift. Alții tolerează liftul dar nu suportă un aparat de RMN. Alții nu au nicio problemă cu niciunul din acestea, dar nu pot purta o cravată strânsă pe gât sau nu pot dormi sub o pătură grea.
          </p>
          <p>
            Asta se întâmplă pentru că claustrofobia nu e o singură frică. Sunt două.
          </p>
        </div>
      </section>

      {/* ── DOUĂ FRICI ── */}
      <section id="doua-frici" style={{ background: "var(--color-background)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", marginBottom: 24 }}>
            Două frici, nu una: restricție și sufocare
          </h2>
          <p style={{ marginBottom: 32 }}>
            Aici e cheia întregii povești. Dacă înțelegi asta, înțelegi de ce claustrofobia ta arată diferit de a altcuiva.
          </p>

          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginBottom: 32 }}>
            <div style={{ flex: 1, minWidth: 280, background: "var(--color-background-white)", borderRadius: 12, padding: 28, border: "1px solid var(--color-border)" }}>
              <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-secondary)", fontWeight: 600, marginBottom: 10 }}>Frica de restricție</p>
              <p style={{ fontSize: 16, marginBottom: 12 }}>
                Senzația că nu poți ieși, că ești captiv, că nu ai control asupra mișcării tale. E frica de a fi blocat, prins într-un loc din care nu poți pleca când vrei.
              </p>
              <p style={{ fontSize: 14, color: "var(--color-text-secondary)" }}>
                Situații tipice: liftul, metroul, avionul, sala de spectacol în mijlocul rândului
              </p>
            </div>
            <div style={{ flex: 1, minWidth: 280, background: "var(--color-background-white)", borderRadius: 12, padding: 28, border: "1px solid var(--color-border)" }}>
              <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", color: "#8B3A3A", fontWeight: 600, marginBottom: 10 }}>Frica de sufocare</p>
              <p style={{ fontSize: 16, marginBottom: 12 }}>
                Convingerea că aerul se va termina, că nu poți respira, că pereții se strâng și oxigenul dispare.
              </p>
              <p style={{ fontSize: 14, color: "var(--color-text-secondary)" }}>
                Situații tipice: RMN-ul, o debara, un tunel, o mască pe față
              </p>
            </div>
          </div>

          <p style={{ marginBottom: 16 }}>
            La fiecare persoană, proporția e diferită. Unii au predominant frica de restricție. Alții au predominant frica de sufocare. Mulți le au pe amândouă, dar într-un raport diferit.
          </p>
          <p style={{ marginBottom: 32 }}>
            De aceea doi oameni cu claustrofobie pot avea experiențe complet diferite. Cel cu frica de restricție se teme cel mai tare de lift și de metrou. Cel cu frica de sufocare se teme cel mai tare de RMN și de spații mici și închise. Cel care le are pe amândouă evită totul.
          </p>

        </div>
      </section>

      {/* ── SENZAȚIA DE SUFOCARE ── */}
      <section id="senzatia-de-sufocare" style={{ background: "var(--color-background-white)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", marginBottom: 24 }}>
            &quot;Nu rămân fără aer. Dar corpul meu crede că da.&quot;
          </h2>
          <p style={{ marginBottom: 16 }}>
            Cea mai frecventă senzație în claustrofobie e senzația de sufocare. Simți că nu mai poți respira. Că gâtul se strânge. Că aerul nu mai intră.
          </p>
          <p style={{ marginBottom: 16 }}>
            Și totuși, aerul e acolo. Poți respira. Poți vorbi. Dacă cineva ți-ar măsura oxigenul din sânge în acel moment, ar fi perfect normal.
          </p>
          <p style={{ marginBottom: 32 }}>
            Ce se întâmplă de fapt e opusul a ceea ce crezi. Nu respiri prea puțin. <strong>Respiri prea mult.</strong>
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            Hiperventilația: paradoxul claustrofobiei
          </h3>
          <p style={{ marginBottom: 16 }}>
            Când frica se activează, corpul tău accelerează respirația.. e parte din răspunsul de &quot;luptă sau fugi&quot;, pregătire pentru efort fizic. Dar tu nu fugi și nu lupți. Stai pe loc, într-un lift. Și continui să respiri rapid.
          </p>
          <p style={{ marginBottom: 16 }}>
            Rezultatul e hiperventilația. Scoți prea mult dioxid de carbon din sânge. Iar scăderea dioxidului de carbon produce exact senzațiile de care te temi: senzația de lipsă de aer, amețeală, furnicături în degete și buze, senzație de strângere în gât. <strong>Senzația că nu poți respira nu e cauzată de lipsa de aer, ci de excesul de respirație.</strong>
          </p>

          <div style={{ background: "var(--color-background)", borderRadius: 12, padding: "24px 28px", marginBottom: 32 }}>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7 }}>
              Cercul vicios: frica produce hiperventilație. Hiperventilația produce senzația de sufocare. Senzația de sufocare confirmă frica. Frica accelerează și mai mult respirația.
            </p>
          </div>

          <p style={{ marginBottom: 32 }}>
            Același mecanism funcționează și în <Link href="/tipuri/atac-de-panica" style={{ color: "var(--color-secondary)", textDecoration: "underline", textUnderlineOffset: 3 }}>atacul de panică</Link>.. dacă ai experimentat și atacuri de panică în spații închise, nu e o coincidență. Hiperventilația e adesea motorul comun.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            Globus: nodul din gât care nu e nod
          </h3>
          <p style={{ marginBottom: 16 }}>
            Mulți oameni cu claustrofobie descriu o senzație specifică.. un nod în gât, o strângere, ca și cum ceva blochează calea aerului. Această senzație se numește globus și e o manifestare a anxietății. Tensiunea musculară din zona gâtului, provocată de starea de alertă, creează senzația fizică reală de &quot;ceva blocat acolo&quot;.
          </p>
          <p style={{ marginBottom: 16 }}>
            Nu e imaginație. Senzația e reală. Dar cauza ei e tensiunea musculară, nu o obstrucție a căilor respiratorii.
          </p>
          <p>
            Când un pacient îmi spune &quot;simt că nu pot respira&quot;, ce simte e autentic. Dar senzația vine din mecanismul anxietății, nu din lipsa de aer. Și înțelegerea asta, deși nu oprește senzația, îi ia puterea de a convinge.
          </p>
        </div>
      </section>

      {/* ── COMPORTAMENTE DE SIGURANȚĂ ── */}
      <section id="comportamente-de-siguranta" style={{ background: "var(--color-background)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", marginBottom: 24 }}>
            Cum te menții singur în claustrofobie fără să știi
          </h2>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            Catalogul claustrofobiei
          </h3>
          <p style={{ marginBottom: 16 }}>
            Acestea sunt lucrurile pe care le faci &quot;ca să faci față&quot;. Fiecare în parte pare rezonabil. Dar pune-le pe toate la un loc și vei vedea costul real:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 32 }}>
            {[
              "Evitarea lifturilor, chiar și pentru 10 etaje",
              "Statul lângă ușă în orice încăpere",
              "Verificarea dacă ușile se deschid înainte de a intra",
              "Evitarea metroului, tunelurilor, avioanelor",
              "Fereastra deschisă obligatoriu, și iarna",
              "Refuzul hainelor strâmte pe gât",
              "Evitarea mulțimilor dense",
              "Căutarea ieșirii de urgență imediat ce intri",
              "Telefonul în mână permanent",
              "Amânarea sau refuzul investigațiilor RMN",
            ].map((s) => (
              <span key={s} style={{ display: "inline-block", padding: "10px 18px", background: "var(--color-background-white)", borderRadius: 8, fontSize: 15, color: "var(--color-text)", border: "1px solid var(--color-border)" }}>{s}</span>
            ))}
          </div>

          <div style={{ background: "var(--color-background-white)", borderRadius: 12, padding: "24px 28px", marginBottom: 32, borderLeft: "3px solid #8B3A3A" }}>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7 }}>
              Un RMN amânat înseamnă un diagnostic ratat. Un lift evitat poate însemna o promovare la care nu ajungi. Metroul evitat înseamnă ore pierdute în trafic, zilnic, ani de zile.
            </p>
          </div>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            Strategiile tale de coping sunt probabil evitare deghizată
          </h3>
          <p style={{ marginBottom: 16 }}>
            Stai lângă ușă &quot;ca să ai aer&quot;? E un comportament de siguranță. Verifici ieșirile? Un ritual de scanare. Ții telefonul în mână &quot;la caz&quot;? O plasă de siguranță.
          </p>
          <p style={{ marginBottom: 16 }}>
            Testul e simplu: ai putea sta în acel spațiu fără aceste comportamente? Dacă răspunsul e &quot;nu&quot;, atunci nu ai depășit frica. Ai găsit o modalitate de a coexista cu ea. Iar comportamentele de siguranță împiedică exact învățarea care ți-ar reduce frica.
          </p>
          <p style={{ marginBottom: 32 }}>
            O persoană care ia liftul dar stă lângă butonul de urgență, cu telefonul în mână, numărând secundele, nu învață niciodată că liftul e sigur. Creierul ei învață: &quot;Am supraviețuit doar pentru că am stat lângă buton.&quot; Și data viitoare, frica e la fel.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            Cum se extinde evitarea
          </h3>
          <p style={{ marginBottom: 16 }}>
            La început evitai doar liftul cel mic. Apoi orice lift. Apoi metroul. Apoi avioanele. Apoi camerele cu ușa închisă. Apoi baia cu ușa închisă. Teritoriul sigur se micșorează constant, iar tu nici nu observi, pentru că fiecare extensie pare logică în momentul în care o faci.
          </p>
          <p>
            Întreabă-te sincer: lista lucrurilor pe care le eviți e mai lungă sau mai scurtă decât acum un an? Dacă e mai lungă, frica ta crește, nu stagnează.
          </p>
        </div>
      </section>

      {/* ── PERSPECTIVA PSIHODINAMICĂ ── */}
      <section id="perspectiva-psihodinamica" style={{ background: "var(--color-primary)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "#ffffff", marginBottom: 24 }}>
            Ce vrea să spună psihicul prin claustrofobie
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 16 }}>
            Până aici am vorbit despre cum funcționează claustrofobia. Acum vreau să vorbim despre de ce există. Ce încearcă psihicul tău să comunice prin acest simptom.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "rgba(255,255,255,0.95)", marginBottom: 12, marginTop: 32 }}>
            Spațiul închis ca metaforă
          </h3>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 16 }}>
            Freud a observat ceva esențial despre claustrofobie: spațiul închis din care nu poți ieși e adesea o metaforă pentru o captivitate psihică. Nu ești prins într-un lift. Ești prins în ceva ce nu poți numi.
          </p>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 16 }}>
            Poate e o relație din care simți că nu poți pleca. Poate e o situație profesională care te sufocă. Poate e un rol pe care l-ai acceptat și în care nu te mai regăsești. Poate e un pattern de dependență care te ține legat de cineva sau de ceva.
          </p>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 32 }}>
            Psihicul face o mutare specifică: ia senzația de captivitate interioară și o mută pe un obiect exterior, concret. Un lift. Un tunel. Un aparat de RMN. Obiectul exterior poate fi evitat. Captivitatea interioară nu.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "rgba(255,255,255,0.95)", marginBottom: 12 }}>
            Cazul Jim
          </h3>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 16 }}>
            Jim avea 35 de ani și se temea de avioane, metrouri și lifturi. Toate aveau un numitor comun pe care Jim nu-l conștientiza inițial: erau situații în care se simțea captiv, prins, fără ieșire.
          </p>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 16 }}>
            Prin terapie, s-a descoperit că tema &quot;prins fără ieșire&quot; nu era doar despre transportul public. Rădăcina era în relația cu mama sa, o femeie dominantă. Jim învățase de mic că nu își poate exprima furia sau dezacordul fără să fie umilit. Când mama lua o decizie, nu exista contestație.
          </p>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 16 }}>
            Totul ducea înapoi la vârsta de 8 ani. Mama sa l-a mințit despre destinația unui zbor. Jim a fost furios dar complet neputincios. Când ușile avionului s-au închis, a avut primul atac de panică. &quot;Prins fără ieșire&quot; era tema vieții lui.
          </p>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 16 }}>
            Aceeași senzație de captivitate apărea când o relație romantică devenea prea intimă. Jim se temea de angajament, de apropierea emoțională, de momentul în care simțea că nu mai poate ieși fără consecințe. Ușile care se închid în lift erau aceleași cu ușile care se închid când spui &quot;te iubesc&quot;.
          </p>
          <p style={{ color: "rgba(255,255,255,0.85)" }}>
            Nu spun că orice claustrofobie ascunde o relație sufocantă. Dar merită să te întrebi: unde altundeva în viața mea mă simt &quot;prins&quot;? Unde simt că nu pot ieși?
          </p>
        </div>
      </section>

      {/* ── TRATAMENT ── */}
      <section id="tratament" style={{ background: "var(--color-background-white)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", marginBottom: 24 }}>
            Tratament
          </h2>
          <p style={{ marginBottom: 32 }}>
            Claustrofobia, ca toate fobiile specifice, răspunde foarte bine la tratament. Fobiile specifice sunt cea mai tratabilă condiție din psihologia clinică, cu 80-95% rată de succes, adesea în doar câteva ședințe.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            Expunere graduală: cum arată concret
          </h3>
          <p style={{ marginBottom: 16 }}>
            Tratamentul nu înseamnă să fii închis într-un lift și &quot;forțat&quot; să suporți. Înseamnă un progres treptat, calibrat, în care tu controlezi fiecare pas:
          </p>
          <div style={{ background: "var(--color-background)", borderRadius: 12, padding: 24, marginBottom: 24 }}>
            <ol style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "Stai într-o cameră mare cu ușa închisă",
                "Stai într-o cameră mică cu ușa închisă",
                "Stai în lift un etaj, cu altcineva",
                "Stai în lift un etaj, singur",
                "Stai în lift 5 etaje, singur",
                "Stai într-o cabină de probă cu perdea trasă",
                "Stai într-o mașină cu geamurile ridicate, motor oprit",
                "Stai într-un spațiu mic (baie, debara) cu ușa închisă, 10 minute",
                "Stai într-un tunel sau faci un RMN (simulat sau real)",
              ].map((s, i) => (
                <li key={i} style={{ fontSize: 16 }}>{s}</li>
              ))}
            </ol>
          </div>
          <p style={{ marginBottom: 32 }}>
            La fiecare treaptă, rămâi în situație până când frica scade de la sine. Nu pleci la primul semn de disconfort. Stai. Și descoperi ceva pe care evitarea nu te lasă niciodată să descoperi: frica are un vârf, iar după vârf, coboară.
          </p>
        </div>
      </section>

      {/* ── CURBA ANXIETĂȚII ── */}
      <section style={{ background: "var(--color-background)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 26, fontWeight: 400, color: "var(--color-primary)", marginBottom: 16 }}>
            De ce contează să rămâi
          </h3>
          <p style={{ marginBottom: 16 }}>
            Când intri în liftul de care te temi, frica crește rapid. Atinge un vârf în primele 10-15 minute. În acel moment totul în tine urlă &quot;ieși!&quot;. Dacă ieși, frica scade instant, dar s-a întărit. Dacă rămâi, se întâmplă ceva pe care nu l-ai crezut posibil: frica începe să scadă de la sine. Fără ca tu să faci nimic special.
          </p>
          <p style={{ marginBottom: 32 }}>
            Corpul tău nu poate menține acel nivel de activare la infinit. După 20-30 de minute, senzațiile se domolesc. Și în acel moment, creierul tău învață ceva nou: &quot;Am stat aici și nu s-a întâmplat nimic. Pot supraviețui asta.&quot;
          </p>

          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginBottom: 32 }}>
            <div style={{ flex: 1, minWidth: 280, background: "var(--color-background-white)", borderRadius: 12, padding: 28, border: "1px solid var(--color-border)" }}>
              <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-secondary)", fontWeight: 600, marginBottom: 10 }}>Supra-expunerea</p>
              <p style={{ fontSize: 16 }}>
                Nu e suficient să tolerezi un etaj de lift. Mergi la 10. Stai 30 de minute, nu 2. Cu cât ești mai departe de linia de start, cu atât riscul de revenire e mai mic.
              </p>
            </div>
            <div style={{ flex: 1, minWidth: 280, background: "var(--color-background-white)", borderRadius: 12, padding: 28, border: "1px solid var(--color-border)" }}>
              <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-secondary)", fontWeight: 600, marginBottom: 10 }}>Predictibilitatea</p>
              <p style={{ fontSize: 16 }}>
                Dacă lucrezi cu cineva, cere-i să anunțe fiecare pas înainte. Surprizele sunt contraproductive. Expunerea nu e un test de curaj. E un experiment controlat.
              </p>
            </div>
          </div>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 16 }}>
            Expunerea interoceptivă: frica de senzațiile din corp
          </h3>
          <p style={{ marginBottom: 16 }}>
            Multe persoane cu claustrofobie nu se tem doar de spațiul mic. Se tem de senzația de sufocare pe care spațiul mic o produce. De aceea, tratamentul include și expunerea la senzațiile corporale temute, separat de situația reală.
          </p>
          <p style={{ marginBottom: 16 }}>
            Un exercițiu specific: respirația prin pai timp de două minute. Produce exact senzația de lipsă de aer de care te temi. Dar într-un context complet sigur. Când descoperi că poți tolera acea senzație fără să ți se întâmple nimic, senzația își pierde o parte din putere.
          </p>

          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-primary)", marginBottom: 12, marginTop: 32 }}>
            De ce medicamentele nu sunt prima opțiune
          </h3>
          <p style={{ marginBottom: 16 }}>
            Claustrofobia, ca toate fobiile specifice, se tratează prin psihoterapie, nu prin medicamente. Benzodiazepinele pot reduce temporar anxietatea, dar blochează exact procesul de învățare care face expunerea să funcționeze. Dacă iei un calmant înainte de a intra în lift, creierul tău nu învață că liftul e sigur. Învață că &quot;am supraviețuit doar pentru că am luat pastila&quot;.
          </p>

          <div style={{ background: "var(--color-primary)", borderRadius: 12, padding: "24px 28px" }}>
            <p style={{ color: "#ffffff", fontSize: 17, fontWeight: 500, lineHeight: 1.65, margin: 0 }}>
              Există evidențe că o singură sesiune de expunere prelungită (2-3 ore) poate fi suficientă pentru claustrofobie, cu rate de succes de 75-90%.
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
              title: "Respirația controlată",
              text: "Hiperventilația produce senzația de sufocare care alimentează frica. Când simți furnicături, amețeală sau lipsă de aer, încetinește deliberat respirația. Inspiră lent pe nas în 4 secunde, ține 2 secunde, expiră lent pe gură în 6 secunde. Nu respira adânc, ci lent. Scopul e să readuci dioxidul de carbon la normal, nu să \"bagi mai mult aer\".",
            },
            {
              nr: "2",
              title: "Identifică-ți predicțiile",
              text: "Scrie pe hârtie, cât mai specific: \"Ce cred eu că se va întâmpla dacă rămân în lift?\" Nu accepta răspunsuri vagi. Forțează-te să fii precis: \"Voi rămâne fără aer.\" \"Liftul se va bloca și nimeni nu va veni.\" Apoi întreabă-te: câte din aceste predicții s-au adeverit vreodată?",
            },
            {
              nr: "3",
              title: "Scannerul de siguranță",
              text: "Data viitoare când ești într-un spațiu care te neliniștește, în loc să scanezi mediul pentru pericole (ceea ce faci automat), scanează deliberat pentru semnale de siguranță. Unde e ieșirea? Funcționează. Sunt alți oameni aici? Da, și sunt relaxați. Am aer? Da, respir, vorbesc, sunt bine.",
            },
            {
              nr: "4",
              title: "Micro-expuneri zilnice",
              text: "Alege o situație de care te temi ușor, nu cea mai grea. Poate e liftul de la birou un etaj. Poate e baia cu ușa închisă 5 minute. Fă-o zilnic. Rămâi până când simți că frica a scăzut, chiar și puțin. Și fă-o fără comportamente de siguranță. Nu sta lângă buton. Nu ține telefonul în mână. Doar stai.",
            },
            {
              nr: "5",
              title: "Expunere interoceptivă acasă",
              text: "Respiră prin pai timp de 60 de secunde. Vei simți exact senzația de \"lipsă de aer\" de care te temi în spații închise. Dar ești acasă, în siguranță. Observă cum crește, atinge un vârf, și apoi coboară. Repetă de 3 ori. Scopul nu e să te simți confortabil. Scopul e să descoperi că senzația trece.",
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
      <section style={{ background: "var(--color-background)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 400, color: "var(--color-primary)", marginBottom: 12 }}>
            Când merită să cauți un specialist
          </h2>
          <p style={{ marginBottom: 32 }}>
            Exercițiile de mai sus sunt un punct de pornire. Dar un terapeut poate face diferența prin:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
            {[
              { icon: "🗺️", text: "Construirea unei ierarhii de expunere personalizate, adaptate exact fricilor tale" },
              { icon: "🪜", text: "Ghidarea ta prin trepte pe care singur le-ai evita" },
              { icon: "🔍", text: "Identificarea comportamentelor de siguranță pe care le folosești fără să realizezi" },
              { icon: "💨", text: "Expunerea interoceptivă ghidată, pentru frica de senzațiile corporale" },
              { icon: "🔑", text: "Explorarea stratului mai profund.. ce înseamnă captivitatea pentru tine" },
            ].map((item) => (
              <div key={item.text} style={{ display: "flex", gap: 16, padding: "18px 24px", background: "var(--color-background-white)", borderRadius: 12, border: "1px solid var(--color-border)", alignItems: "center" }}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
                <p style={{ margin: 0, fontSize: 16 }}>{item.text}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "var(--color-primary)", borderRadius: 16, padding: "40px 32px", textAlign: "center" }}>
            <p style={{ color: "#ffffff", fontSize: 20, fontWeight: 500, marginBottom: 8, fontFamily: "var(--font-heading)" }}>
              Claustrofobia are una dintre cele mai mari rate de succes din psihoterapie.
            </p>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, marginBottom: 28, maxWidth: 480, margin: "0 auto 28px" }}>
              Nu e ceva cu care &quot;trebuie să trăiești&quot;. E ceva ce se tratează.
            </p>
            <Link
              href="/programare?din=claustrofobie"
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
          <FAQ q="Pot face RMN cu claustrofobie?">
            <p style={{ marginBottom: 8 }}>Da. Și e important să nu amâni investigațiile medicale din cauza claustrofobiei. Mai multe lucruri pot ajuta.</p>
            <p style={{ marginBottom: 8 }}>Spune-i echipei medicale că ai claustrofobie. Nu e prima oară când aud asta, și au protocoale pentru asta. Cere un aparat de RMN deschis (open MRI), dacă există în zonă. Exersează respirația controlată în zilele dinaintea investigației.</p>
            <p>Aparatul de RMN are ventilație activă și comunicare permanentă cu operatorul, care te poate auzi și îți poate vorbi pe tot parcursul. Nu ești singur acolo, chiar dacă senzația e că ești.</p>
          </FAQ>
          <FAQ q="Claustrofobia se agravează cu vârsta?">
            <p>Nu e o regulă. Dar fără tratament, evitarea tinde să se extindă în timp. Ceea ce a început ca &quot;nu iau liftul mic&quot; poate ajunge, în câțiva ani, la &quot;niciun lift&quot;, &quot;niciun metrou&quot;, &quot;nicio cameră cu ușa închisă&quot;. Nu e că frica crește, ci că strategia de evitare își urmează logica naturală. Cu cât eviți mai mult, cu atât teritoriul sigur se micșorează. Cu tratament, tendința se inversează.</p>
          </FAQ>
          <FAQ q="E periculos să rămâi blocat în lift?">
            <p>Din punct de vedere al siguranței fizice, nu. Lifturile moderne au multiple sisteme de siguranță, ventilație pasivă (aerul circulă prin goluri structurale) și buton de alarmă conectat la un dispecerat. Blocajele se rezolvă de obicei în 15-30 de minute. Cantitatea de aer dintr-un lift e suficientă pentru ore întregi. Pericolul pe care îl simți nu vine din situație, ci din predicția pe care o face creierul tău în acea situație.</p>
          </FAQ>
          <FAQ q="De ce mi se face rău în metrou dar nu în mașină?">
            <p>Pentru că cele două frici din claustrofobie (restricție și sufocare) se activează diferit în funcție de context. În mașină, tu ai control. Poți opri oricând, poți deschide geamul, poți ieși. În metrou, nu ai niciuna din aceste opțiuni. Ușile se deschid când decide trenul, nu când decizi tu. Dacă frica ta dominantă e cea de restricție, metroul o activează puternic, iar mașina nu.</p>
          </FAQ>
          <FAQ q="De ce s-a agravat claustrofobia mea în timp, deși nu s-a întâmplat nimic?">
            <p>{`Tocmai pentru că nu s-a întâmplat nimic. Fiecare act de evitare confirmă creierului tău că pericolul era real. "Am evitat liftul și sunt bine, deci liftul chiar era periculos." Logica e circulară, dar pentru creier e convingătoare. Lista lucrurilor evitate se lungește fără ca tu să observi, pentru că fiecare extensie pare rezonabilă în momentul în care o faci.`}</p>
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
              { href: "/tipuri/fobii-specifice/fobie-de-sange", label: "Fobia de sânge și ace" },
              { href: "/tipuri/fobii-specifice/fobie-de-zbor", label: "Fobia de zbor" },
              { href: "/tipuri/fobii-specifice/fobie-de-inaltime", label: "Fobia de înălțimi" },
              { href: "/tipuri/fobii-specifice/fobie-de-animale", label: "Fobia de animale" },
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
              <li>Rachman, S., &amp; Taylor, S. (1993). Analyses of claustrophobia. <em>Journal of Anxiety Disorders, 7</em>(4), 281-291.</li>
              <li>Öst, L. G. (1989). One-session treatment for specific phobias. <em>Behaviour Research and Therapy, 27</em>(1), 1-7.</li>
              <li>Craske, M. G., Treanor, M., Conway, C. C., Zbozinek, T., &amp; Vervliet, B. (2014). Maximizing exposure therapy: An inhibitory learning approach. <em>Behaviour Research and Therapy, 58</em>, 10-23.</li>
              <li>Radomsky, A. S., Rachman, S., et al. (2001). The Claustrophobia Questionnaire. <em>Journal of Anxiety Disorders, 15</em>(4), 287-297.</li>
              <li>Andrews, G., et al. (2003). <em>The Treatment of Anxiety Disorders</em> (2nd ed.). Cambridge University Press.</li>
              <li>Gabbard, G. O. (2007). <em>Tratat de Psihiatrie Psihodinamică</em>. Editura Trei.</li>
              <li>Wolfe, B. E. (2005). <em>Understanding and Treating Anxiety Disorders</em>. American Psychological Association.</li>
              <li>Freud, S. (1926). <em>Inhibitions, Symptoms and Anxiety</em>. Standard Edition, Vol. 20.</li>
            </ul>
          </div>
        </div>
      </section>

    </main>
  );
}
