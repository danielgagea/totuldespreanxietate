"use client";

import { useEffect, useRef, useState } from "react";

/* ============================================================
   ANXIETATE SOCIALA — Landing Page
   Design: LANDA v1.0 — Direcția A "Cum arată anxietatea socială, din interior"
   Fonts: Playfair Display (--font-playfair) + Source Sans 3 (--font-source-sans)
   Palette: #FAF7F2 / #2C3E50 / #7A9E7E / #C4966C / #1E2A3A
   ============================================================ */

// ─── Scroll reveal hook ───
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

// ─── Animated counter hook ───
function useCounter(target: number, duration = 1200) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return { ref, count };
}

// ─── Stat component ───
function Stat({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const { ref, count } = useCounter(value);
  return (
    <div className="text-center md:text-left">
      <span ref={ref} className="stat-number">{count}{suffix}</span>
      <p className="stat-label">{label}</p>
    </div>
  );
}

// ─── FAQ Accordion ───
function FAQ({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button
        onClick={() => setOpen(!open)}
        className="faq-question"
        aria-expanded={open}
      >
        <span>{question}</span>
        <svg
          className={`faq-chevron ${open ? "faq-chevron-open" : ""}`}
          width="20" height="20" viewBox="0 0 20 20" fill="none"
        >
          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div className={`faq-answer ${open ? "faq-answer-open" : ""}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
}

// ─── Typewriter hook ───
function useTypewriter(text: string, speed = 35, startDelay = 0) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) { clearInterval(interval); setDone(true); }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [started, text, speed, startDelay]);

  return { ref, displayed, done, started };
}

// ─── Typewriter line component ───
function TypewriterLine({ text, speed = 30, startDelay = 0 }: { text: string; speed?: number; startDelay?: number }) {
  const { ref, displayed, done } = useTypewriter(text, speed, startDelay);
  return (
    <div ref={ref} className="as-typewriter-line">
      <span>{displayed}</span>
      {!done && displayed.length > 0 && <span className="as-cursor">|</span>}
    </div>
  );
}

// ─── Scene illustrations (SVG) ───
function SceneBefore() {
  return (
    <div className="as-scene">
      <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Room background hint */}
        <rect x="40" y="20" width="200" height="120" rx="4" fill="#1B2B4B" opacity="0.04"/>
        {/* Desk */}
        <rect x="55" y="130" width="170" height="10" rx="3" fill="#1B2B4B" opacity="0.4"/>
        <rect x="70" y="138" width="8" height="45" rx="1" fill="#1B2B4B" opacity="0.25"/>
        <rect x="202" y="138" width="8" height="45" rx="1" fill="#1B2B4B" opacity="0.25"/>
        {/* Laptop on desk */}
        <rect x="85" y="100" width="55" height="35" rx="3" fill="#1B2B4B" opacity="0.3"/>
        <rect x="89" y="104" width="47" height="27" rx="2" fill="#1B2B4B" opacity="0.12"/>
        <rect x="78" y="130" width="70" height="4" rx="1" fill="#1B2B4B" opacity="0.25"/>
        {/* Person sitting - hunched posture */}
        <circle cx="140" cy="65" r="18" fill="#1B2B4B" opacity="0.5"/>
        {/* Eyes looking down/anxious */}
        <path d="M134 63 L137 65" stroke="#1B2B4B" strokeWidth="1.5" opacity="0.3" strokeLinecap="round"/>
        <path d="M143 63 L146 65" stroke="#1B2B4B" strokeWidth="1.5" opacity="0.3" strokeLinecap="round"/>
        <path d="M140 83 C128 83 118 95 118 110 L118 130 L162 130 L162 110 C162 95 152 83 140 83Z" fill="#1B2B4B" opacity="0.35"/>
        {/* Phone in hand - composing excuse message */}
        <rect x="155" y="102" width="13" height="22" rx="2" fill="#1B2B4B" opacity="0.45"/>
        <rect x="157" y="105" width="9" height="14" rx="1" fill="#C4966C" opacity="0.25"/>
        {/* Thought cloud - anxiety spiral */}
        <circle cx="190" cy="42" r="24" fill="#C4966C" opacity="0.15"/>
        <circle cx="190" cy="42" r="24" fill="none" stroke="#C4966C" strokeWidth="2.5" opacity="0.7"/>
        {/* Spiral inside the thought */}
        <path d="M190 50 Q195 42 190 36 Q184 30 190 26" fill="none" stroke="#C4966C" strokeWidth="1.5" opacity="0.5" strokeLinecap="round"/>
        {/* Smaller bubbles trailing */}
        <circle cx="215" cy="25" r="10" fill="none" stroke="#C4966C" strokeWidth="2" opacity="0.55"/>
        <circle cx="232" cy="15" r="5" fill="none" stroke="#C4966C" strokeWidth="1.5" opacity="0.45"/>
        {/* Clock ticking - time pressure */}
        <circle cx="225" cy="70" r="15" fill="#1B2B4B" opacity="0.08"/>
        <circle cx="225" cy="70" r="15" fill="none" stroke="#1B2B4B" strokeWidth="2" opacity="0.4"/>
        <line x1="225" y1="70" x2="225" y2="60" stroke="#1B2B4B" strokeWidth="2" opacity="0.5" strokeLinecap="round"/>
        <line x1="225" y1="70" x2="232" y2="72" stroke="#1B2B4B" strokeWidth="2" opacity="0.5" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

function SceneDuring() {
  return (
    <div className="as-scene">
      <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Table */}
        <ellipse cx="140" cy="155" rx="115" ry="28" fill="#1B2B4B" opacity="0.15"/>
        {/* People around (3 others) - more visible */}
        <circle cx="55" cy="100" r="14" fill="#1B2B4B" opacity="0.3"/>
        <path d="M55 114 C43 114 36 124 36 135 L74 135 C74 124 67 114 55 114Z" fill="#1B2B4B" opacity="0.22"/>
        <circle cx="225" cy="100" r="14" fill="#1B2B4B" opacity="0.3"/>
        <path d="M225 114 C213 114 206 124 206 135 L244 135 C244 124 237 114 225 114Z" fill="#1B2B4B" opacity="0.22"/>
        <circle cx="140" cy="88" r="13" fill="#1B2B4B" opacity="0.25"/>
        <path d="M140 101 C129 101 122 110 122 120 L158 120 C158 110 151 101 140 101Z" fill="#1B2B4B" opacity="0.18"/>
        {/* Main person (highlighted, in front) - clearly different */}
        <circle cx="140" cy="50" r="16" fill="#1B2B4B" opacity="0.55"/>
        {/* Worried expression */}
        <path d="M134 48 Q137 50 140 48" fill="none" stroke="#1B2B4B" strokeWidth="1.2" opacity="0.3" strokeLinecap="round"/>
        <path d="M140 48 Q143 50 146 48" fill="none" stroke="#1B2B4B" strokeWidth="1.2" opacity="0.3" strokeLinecap="round"/>
        <path d="M140 66 C126 66 117 78 117 92 L163 92 C163 78 154 66 140 66Z" fill="#1B2B4B" opacity="0.4"/>
        {/* Glass with trembling lines */}
        <rect x="157" y="76" width="9" height="16" rx="1.5" fill="#C4966C" opacity="0.7"/>
        <line x1="152" y1="79" x2="149" y2="76" stroke="#C4966C" strokeWidth="2" opacity="0.65" className="as-tremble-1"/>
        <line x1="170" y1="79" x2="173" y2="76" stroke="#C4966C" strokeWidth="2" opacity="0.65" className="as-tremble-2"/>
        <line x1="152" y1="87" x2="149" y2="84" stroke="#C4966C" strokeWidth="2" opacity="0.65" className="as-tremble-1"/>
        <line x1="170" y1="87" x2="173" y2="84" stroke="#C4966C" strokeWidth="2" opacity="0.65" className="as-tremble-2"/>
        {/* Gaze lines - eyes pointing at person */}
        <line x1="70" y1="98" x2="124" y2="60" stroke="#C4966C" strokeWidth="1.5" opacity="0.5" strokeDasharray="4 4" className="as-gaze"/>
        <line x1="210" y1="98" x2="156" y2="60" stroke="#C4966C" strokeWidth="1.5" opacity="0.5" strokeDasharray="4 4" className="as-gaze"/>
        <line x1="140" y1="88" x2="140" y2="66" stroke="#C4966C" strokeWidth="1.5" opacity="0.4" strokeDasharray="4 4" className="as-gaze"/>
        {/* Spotlight / exposure feeling */}
        <circle cx="140" cy="60" r="35" fill="#C4966C" opacity="0.06"/>
      </svg>
    </div>
  );
}

function SceneAfter() {
  return (
    <div className="as-scene">
      <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Dark cloud behind everything - makes scene feel heavy */}
        <circle cx="140" cy="120" r="85" fill="#1B2B4B" opacity="0.05"/>
        {/* Couch */}
        <rect x="40" y="145" width="190" height="30" rx="10" fill="#1B2B4B" opacity="0.35"/>
        {/* Pillow */}
        <rect x="42" y="133" width="45" height="42" rx="8" fill="#1B2B4B" opacity="0.25"/>
        {/* Armrest */}
        <rect x="35" y="128" width="16" height="50" rx="6" fill="#1B2B4B" opacity="0.3"/>
        {/* Person sitting curled up */}
        <circle cx="130" cy="105" r="18" fill="#1B2B4B" opacity="0.55"/>
        {/* Eyes looking down - defeated */}
        <path d="M124 104 L128 107" stroke="#1B2B4B" strokeWidth="1.5" opacity="0.35" strokeLinecap="round"/>
        <path d="M132 104 L136 107" stroke="#1B2B4B" strokeWidth="1.5" opacity="0.35" strokeLinecap="round"/>
        <path d="M100 145 L108 128 C115 120 145 120 152 128 L160 145Z" fill="#1B2B4B" opacity="0.4"/>
        {/* Knees drawn up */}
        <circle cx="115" cy="138" r="11" fill="#1B2B4B" opacity="0.35"/>
        <circle cx="145" cy="138" r="11" fill="#1B2B4B" opacity="0.35"/>
        {/* Replay/loop symbol around head - the post-mortem */}
        <path d="M105 88 A30 30 0 1 1 155 88" fill="none" stroke="#C4966C" strokeWidth="3" opacity="0.75" className="as-replay"/>
        <polygon points="155,85 155,93 162,89" fill="#C4966C" opacity="0.75" className="as-replay"/>
        {/* Thought fragments floating - bold and visible */}
        <text x="175" y="50" fill="#C4966C" opacity="0.85" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif" className="as-float-1">de ce?</text>
        <text x="192" y="80" fill="#C4966C" opacity="0.75" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif" className="as-float-2">ciudat</text>
        <text x="168" y="108" fill="#C4966C" opacity="0.85" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif" className="as-float-3">greșit</text>
        <text x="200" y="63" fill="#C4966C" opacity="0.7" fontSize="12" fontWeight="600" fontFamily="system-ui, sans-serif" className="as-float-1">au observat</text>
      </svg>
    </div>
  );
}

// ─── Reveal wrapper ───
function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// ═══════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════

export default function AnxietateSocialaPage() {
  return (
    <main className="as-page">
      <style>{pageStyles}</style>

      {/* ── S1+S2: HERO + CELE 3 ACTE (unified) ── */}
      <section className="as-hero-acts">
        <div className="as-container as-container-narrow">
          {/* Hero header */}
          <div className="as-hero-header">
            <Reveal>
              <p className="as-author">De Daniel Gagea, psiholog clinician, psihoterapeut</p>
            </Reveal>
            <Reveal delay={200}>
              <h1 className="as-hero-title">Anxietatea socială</h1>
            </Reveal>
            <Reveal delay={400}>
              <p className="as-hero-sub">
                Nu ești nici timid, nici ciudat, și cu siguranță nu ești singur.
              </p>
            </Reveal>
            <Reveal delay={600}>
              <p className="as-hero-hook">
                Trăiești cu asta de ani de zile?{" "}
                <a href="#ce-poti-face" className="as-link">Mergi direct la Ce poți face acum</a>
              </p>
            </Reveal>
          </div>

          {/* Transition into narrative */}
          <Reveal delay={800}>
            <div className="as-hero-divider" aria-hidden="true">
              <span className="as-hero-divider-line" />
            </div>
          </Reveal>
        </div>

        <div className="as-container">
          <Reveal delay={900}>
            <h2 className="as-acts-title">Cum arată anxietatea socială, din interior</h2>
          </Reveal>

          {[
            {
              label: "Înainte",
              monolog: "Mâine am ședința. O să trebuiască să vorbesc. Vor vedea că mă bâlbâi. Poate pot să spun că sunt bolnav. Da, o să scriu un mesaj.. nu mă simt bine, nu pot veni. Dar dacă realizează că mint? Poate e mai bine să merg și să stau în spate, să nu mă observe nimeni.",
              Scene: SceneBefore,
            },
            {
              label: "În timpul",
              monolog: "Îmi tremură mâna pe pahar. Au observat? Sigur au observat. Nu te uita la mână. Dar dacă mă uit în altă parte, or să creadă că e ceva în neregulă cu mine. Rămâi calm. Zâmbește. De ce am zâmbirea asta forțată? Probabil arăt ridicol.",
              Scene: SceneDuring,
            },
            {
              label: "După",
              monolog: "Acasă. Liniște. Dar în capul tău e zgomot continuu. De ce am spus asta? Cine spune așa ceva? Sigur au crezut că sunt ciudat. Modul în care m-au privit.. da, au observat. Ar fi fost mai bine să nu fi mers.",
              Scene: SceneAfter,
            },
          ].map((act, i) => (
            <Reveal key={i} delay={i * 200}>
              <div className={`as-act-card ${i % 2 === 1 ? "as-act-card-reverse" : ""}`}>
                <div className="as-act-illustration">
                  <act.Scene />
                </div>
                <div className="as-act-content">
                  <span className="as-act-label">{act.label}</span>
                  <p className="as-act-text">{act.monolog}</p>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal>
            <div className="as-act-conclusion">
              <p>
                Dacă ai recunoscut ceva din ce ai citit, nu ești nici timid, nici ciudat, și cu siguranță nu ești singur.
              </p>
              <p>
                Ce tocmai ai citit este experiența trăită de aproximativ <strong>1 din 8 oameni</strong> la un moment dat în viața lor. Și are un nume.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── S3: CE ESTE ── */}
      <section className="as-section as-what">
        <div className="as-container">
          <div className="as-what-grid">
            <div className="as-what-text">
              <Reveal>
                <h2>Ce este anxietatea socială</h2>
              </Reveal>
              <Reveal delay={150}>
                <p>
                  Anxietatea socială (numită și fobia socială) este o frică intensă și persistentă de situațiile sociale în care te simți observat, evaluat sau judecat de ceilalți. Nu are legătură cu timiditatea sau introversiunea, ci este o tulburare reală, frecventă și tratabilă.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <p>
                  Frica își are originea într-o convingere profundă.. că ceilalți vor observa ceva greșit la tine și te vor respinge, umili sau ridiculiza. Această convingere activează un lanț de reacții cognitive, emoționale și fizice care îți sabotează exact ceea ce îți dorești cel mai mult.. să funcționezi normal printre oameni.
                </p>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <div className="as-stats-card">
                <Stat value={12} suffix="%" label="din populație experimentează anxietate socială" />
                <Stat value={15} suffix=" ani" label="vârsta medie de debut" />
                <Stat value={75} suffix="%" label="nu consultă niciodată un specialist" />
              </div>
            </Reveal>
          </div>
          <Reveal delay={400}>
            <p className="as-callout">
              Ultima cifră e cea care doare cel mai tare. Înseamnă că 3 din 4 oameni cu această tulburare trăiesc cu ea în tăcere, fără să știe că există un nume pentru ceea ce simt și, mai important, un tratament care funcționează.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── S4: TABEL COMPARATIV ── */}
      <section className="as-section as-compare">
        <div className="as-container">
          <Reveal>
            <h2>Nu ești timid. Uite diferența.</h2>
          </Reveal>
          <Reveal delay={200}>
            <div className="as-table-wrap">
              <table className="as-table">
                <colgroup>
                  <col />
                  <col />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th></th>
                    <th>Timiditate</th>
                    <th className="as-table-highlight-col">Anxietate socială</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Ce este", "O trăsătură de personalitate", "O tulburare clinică"],
                    ["Intensitate", "Disconfort ușor-moderat", "Frică intensă, disproporționată"],
                    ["Durabilitate", "Se atenuează după 15-20 min", "Persistă sau se intensifică"],
                    ["După situație", "Te simți OK", "Ruminezi ore sau zile"],
                    ["Evitare", "Rară, depășibilă", "Frecventă, rigidă, costisitoare"],
                    ["Impact funcțional", "Minim", "Sever.. carieră, relații, viață"],
                    ["Necesită psihoterapie", "Nu", "Da"],
                  ].map(([label, ...cells], i) => (
                    <tr key={i}>
                      <td className="as-table-label">{label}</td>
                      {cells.map((cell, j) => (
                        <td key={j} className={j === 1 ? "as-table-highlight-col" : ""}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="as-compare-stories">
              <p>
                <strong>Omul timid</strong> merge la petrecere și după 20 de minute se simte OK, începe să vorbească, se relaxează.
              </p>
              <p>
                <strong>Omul cu anxietate socială</strong> petrece 3 ore monitorizându-se.. „am spus ceva greșit", „se vede că transpir".. apoi 2 zile analizând fiecare moment.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── S5: RECUNOAȘTERE ── */}
      <section className="as-section as-recognize">
        <div className="as-container as-container-narrow">
          <Reveal>
            <h2>Ai anxietate socială? Cum o recunoști</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="as-recognize-intro">
              Nu îți voi cere să bifezi un checklist. Dacă ai anxietate socială, simpla idee de a fi catalogat produce exact acel sentiment. În schimb, îți voi descrie câteva situații. Tu doar citește.
            </p>
          </Reveal>

          {[
            { bold: "Telefonul sună.", text: `Cineva te caută. Îl lași să sune până se oprește. Apoi îi scrii un mesaj.. „scuze, nu am putut răspunde". Știi că ai putut. Dar a răspunde însemna să vorbești nepregătit, și asta e prea mult.` },
            { bold: "Ești la masă cu colegi.", text: "Toți comandă la fel de repede, natural. Tu citești meniul de 3 ori, dar nu fiindcă nu știi ce vrei, ci fiindcă îți repeți în cap cum să comanzi fără să te bâlbâi." },
            { bold: "O ședință de lucru.", text: `Ai o idee bună. O știi. Dar în capul tău se derulează scenariul.. „dacă spun o prostie?", „dacă toți se uită la mine?". Așa că taci. Altcineva spune aceeași idee, 10 minute mai târziu. Primește felicitări.` },
            { bold: "O petrecere.", text: "Te-ai pregătit o oră. Ai repetat mental câteva subiecte de conversație. Ajungi acolo și primele 20 de minute le petreci lângă perete, cu telefonul în mână, prefăcându-te că verifici ceva important." },
            { bold: "Cineva îți face un compliment.", text: "În loc să simți bucurie, simți disconfort. Îți spui că sigur nu vorbește serios. Sau dacă acum așteaptă ceva de la tine și nu te ridici la nivelul așteptărilor?" },
            { bold: "După orice interacțiune socială.", text: "Nu te gândești la ce a mers bine. Derulezi filmul doar pe momentele în care ai simțit că ai greșit. Un cuvânt spus greșit, o pauză prea lungă, un zâmbet care poate a părut forțat.. le analizezi ore întregi." },
            { bold: "Succesul te sperie la fel de tare ca eșecul.", text: "Ai fost lăudat într-o ședință. În loc să te simți bine, simți o presiune enormă. Te gândești că acum așteaptă și mai mult de la tine, și data viitoare, dacă nu performezi la fel, vor vedea că de fapt nu ești așa de bun." },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="as-situation">
                <p><strong>{item.bold}</strong> {item.text}</p>
              </div>
            </Reveal>
          ))}

          <Reveal>
            <div className="as-recognize-conclusion">
              <p>
                Dacă ai recunoscut trei sau mai multe din aceste situații ca un <strong>pattern</strong>.. nu ca ceva care s-a întâmplat o dată, ci ca ceva care se repetă constant.. atunci ceea ce trăiești nu e un defect de caracter. Este o tulburare frecventă, înțeleasă și tratabilă.
              </p>
              <p>
                <strong>92%</strong> din persoanele cu fobie socială raportează că tulburarea le-a afectat cariera. <strong>64%</strong> spun că le-a afectat relațiile.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── S6: MECANISM (DARK) ── */}
      <section className="as-section as-mechanism">
        <div className="as-container as-container-narrow">
          <Reveal>
            <h2>De ce se întâmplă</h2>
          </Reveal>
          <Reveal delay={100}>
            <p>
              Anxietatea socială nu este un mister. Funcționează după un algoritm precis, în trei faze, care se repetă și se auto-alimentează.
            </p>
          </Reveal>

          {[
            {
              label: "Faza 1",
              title: "Predicția negativă (înainte)",
              text: `Totul începe înainte ca situația socială să aibă loc. Creierul tău lansează o serie de predicții automate.. „vor vedea că sunt anxios", „o să mă bâlbâi și toată lumea o să observe". Aceste predicții nu sunt simple gânduri negative în sensul banal, ci estimări automate ale amenințării pe care creierul tău le generează fără voia ta. Studiile arată că persoanele cu anxietate socială estimează probabilitatea unui rezultat social negativ de 2-3 ori mai mare decât realitatea.`
            },
            {
              label: "Faza 2",
              title: "Auto-monitorizarea excesivă (în timpul)",
              text: `Odată ce ești în situația socială, atenția ta face ceva paradoxal. În loc să se îndrepte către exterior, se întoarce către interior. Începi să te observi pe tine.. „îmi tremură mâna", „am transpirat pe frunte". Această auto-monitorizare funcționează ca o cameră de supraveghere întoarsă spre tine. Nu mai ești în conversație, ci în evaluare. Ironia e brutală: tocmai încercarea de a nu părea anxios te face să pari și să fii mai anxios.`
            },
            {
              label: "Faza 3",
              title: "Ruminația post-eveniment (după)",
              text: `După interacțiunea socială, creierul tău nu se oprește. Pornește procesul de revizie, dar cu un filtru sistematic negativ.. derulezi filmul doar pe momentele în care ai simțit că ceva a mers prost, ignori tot ce a mers bine, amplifici semnificația fiecărui mic eșec. Această ruminație confirmă predicția negativă inițială, acel sentiment familiar de „am știut eu că va fi rău". Și astfel, cercul se închide.`
            },
          ].map((phase, i) => (
            <Reveal key={i} delay={i * 200}>
              <div className="as-phase">
                <span className="as-phase-label">{phase.label}</span>
                <h3>{phase.title}</h3>
                <p>{phase.text}</p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={600}>
            <div className="as-mechanism-loop">
              <p>
                <strong>Asta este capcana:</strong> fiecare fază o alimentează pe următoarea.. predicția negativă crește auto-monitorizarea, care degradează performanța, care alimentează ruminația, care confirmă predicția. Și totul se repetă, tot mai intens.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── S7: AUTO-PERPETUARE (DARK CONT) ── */}
      <section className="as-section as-perpetuate">
        <div className="as-container">
          <Reveal>
            <h2>Cum se auto-perpetuează</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="as-perpetuate-intro">
              La început, eviti doar situațiile foarte dificile. Pe măsură ce trece timpul, începi să eviți și situații tot mai mici. Zona ta de confort se micșorează până când viața devine o serie de scuze și retrageri.
            </p>
          </Reveal>

          <div className="as-impact-grid">
            {[
              {
                title: "Cariera",
                text: "Nu vorbești în ședințe, refuzi promovările care implică management și nu negociezi salariul. Rămâi sub potențialul tău, deși ai competența, doar că nu suporți să fii văzut.",
                stat: "92%",
                statLabel: "raportează impact asupra carierei"
              },
              {
                title: "Relațiile",
                text: "Eviti să cunoști oameni noi. Relațiile romantice fie nu se formează, fie rămân superficiale.. pentru că intimitatea presupune să fii văzut așa cum ești, și asta e exact ce te sperie.",
                stat: "64%",
                statLabel: "raportează impact asupra relațiilor"
              },
              {
                title: "Sănătatea mintală",
                text: "În 69-88% din cazuri apare alături de alte tulburări. Cel mai frecvent, depresia.. care se instalează în medie la 12 ani după debut. Alcoolismul e precedat de fobia socială în 85% din cazuri.",
                stat: "85%",
                statLabel: "alcoolism precedat de fobie socială"
              },
            ].map((card, i) => (
              <Reveal key={i} delay={i * 200}>
                <div className="as-impact-card">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <div className="as-impact-stat">
                    <span className="as-impact-stat-number">{card.stat}</span>
                    <span className="as-impact-stat-label">{card.statLabel}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={600}>
            <div className="as-myth">
              <h3>De ce ideea că trece de la sine e un mit</h3>
              <p>
                Spre deosebire de alte tulburări de anxietate, anxietatea socială netratată are un curs cronic.. nu se ameliorează cu vârsta și nu dispare când te obișnuiești. Fără intervenție, se agravează, pentru că fiecare evitare confirmă convingerea că nu poți face față.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── S8: CE VREA SĂ SPUNĂ PSIHICUL ── */}
      <section className="as-section as-psyche">
        <div className="as-container as-container-narrow">
          <Reveal>
            <h2>Ce vrea să spună psihicul</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="as-psyche-intro">
              Această secțiune e diferită de restul paginii. Până acum am vorbit despre cum funcționează anxietatea socială. Acum vreau să vorbim despre <strong>de ce există</strong>. Ce încearcă psihicul tău să comunice prin acest simptom.
            </p>
            <p>
              Perspectiva asta vine din practica mea clinică și din psihologia psihodinamică. Nu o să găsești asta într-un articol generic despre anxietatea socială.
            </p>
          </Reveal>

          {[
            {
              title: "Rușinea de bază",
              subtitle: "Nu am greșit, ci sunt greșit",
              text: "Există o diferență fundamentală între vinovăție și rușine. Vinovăția spune că ai făcut ceva rău, pe când rușinea spune că ești ceva rău. Vinovăția e o pată pe haine, o poți curăța. Rușinea e ca și cum tu ai fi pata. Persoanele cu anxietate socială nu se tem că vor face o greșeală, ci că sunt o greșeală.. că există ceva fundamental greșit la ele, ceva pe care ceilalți îl vor vedea dacă se uită suficient de atent."
            },
            {
              title: "Părintele interior critic",
              subtitle: "Vocea din capul tău nu e a ta",
              text: `Fiecare persoană cu anxietate socială are un critic interior extrem de vocal.. vocea care spune „nu trebuie să te dai mare", „cine te crezi", „o să te faci de râs". Această voce nu s-a născut în capul tău, ci a fost internalizată. Ai înghițit vocile critice din copilărie și le-ai instalat ca un software care rulează automat.`
            },
            {
              title: "Dorința vs. teama",
              subtitle: "Conflictul central",
              text: "Stai în fața unei uși. Știi că în spate e ceva ce vrei.. conexiune, aprobare, apartenență. Dar ești convins că ușa te va lovi când încerci să o deschizi. Ești de fapt o persoană care vrea relații disperat, dar care a învățat că prețul conexiunii este riscul umilirii."
            },
            {
              title: "Succesul amenințător",
              subtitle: "Nu te da mare",
              text: "Una dintre cele mai contra-intuitive descoperiri din practica clinică este că pentru persoanele cu anxietate socială, succesul poate fi la fel de amenințător ca eșecul. O pacientă de 24 de ani nu putea socializa fără alcool. În terapie, s-a descoperit că tatăl ei o critica constant. Când a fost aleasă majoretă la școală, tatăl a numit-o încrezută și răsfățată. Mesajul pe care l-a internalizat: succes = afișare = rușine."
            },
          ].map((sub, i) => (
            <Reveal key={i} delay={i * 150}>
              <div className="as-psyche-block">
                <h3>{sub.title}</h3>
                <p className="as-psyche-subtitle">{sub.subtitle}</p>
                <p>{sub.text}</p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={600}>
            <div className="as-messages">
              <h3>Cele șase mesaje ale psihicului</h3>
              <p className="as-messages-intro">Dacă ar putea vorbi, anxietatea ta socială ți-ar spune:</p>
              {[
                `„Am nevoie de siguranță, nu de curaj".. nu îți lipsește curajul, ci senzația că ești în siguranță printre oameni.`,
                `„Cineva mi-a spus că sunt greșit și am crezut".. convingerea ta despre tine nu e un adevăr, e o internalizare.`,
                `„Vreau să fiu văzut, dar mă tem de ce vor vedea".. nu eviți oamenii, ci judecata.`,
                `„Încerc să te protejez de o durere veche".. evitarea nu e slăbiciune, e un mecanism de apărare care a funcționat cândva.`,
                `„Nu mai vreau să mă prefac".. mulți clienți descriu senzația de impostor, că se prefac că sunt adulți, că sunt competenți.`,
                `„Am nevoie să fiu acceptat, nu reparat".. primul pas nu este să te schimbi, ci să înțelegi că nu ești defect.`,
              ].map((msg, i) => (
                <Reveal key={i} delay={i * 150}>
                  <div className="as-message">{msg}</div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── S9: CE POȚI FACE ACUM ── */}
      <section className="as-section as-action" id="ce-poti-face">
        <div className="as-container">
          <Reveal>
            <h2>Ce poți face acum</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="as-action-intro">
              Nu îți voi spune să fii curajos sau să ieși din zona de confort. Dacă ai citit până aici, știi deja că problema nu e lipsa de curaj. Îți voi oferi în schimb câteva lucruri practice, validate științific.
            </p>
          </Reveal>

          <div className="as-steps">
            {[
              {
                num: "1",
                title: "Mută atenția de la interior la exterior",
                text: "Data viitoare când ești într-o conversație și simți că te pierzi în auto-monitorizare, concentrează-te pe ce spune cealaltă persoană. Nu pe cum arăți tu, ci pe cuvintele și expresia lor. Cercetările arată că simpla redirecționare a atenției reduce semnificativ anxietatea percepută."
              },
              {
                num: "2",
                title: "Renunță la un comportament de siguranță (unul singur)",
                text: "Alege cel mai mic comportament de siguranță pe care îl folosești și renunță la el intenționat. Dacă eviți contactul vizual, privește în ochii celuilalt 2-3 secunde mai mult. Nu toate odată, doar unul singur, și observă ce se întâmplă. În cele mai multe cazuri.. nimic."
              },
              {
                num: "3",
                title: "Testează-ți predicțiile",
                text: `Înainte de o situație socială, notează-ți predicția. Exact, pe hârtie.. „cred că voi roși și toată lumea va observa". Apoi, după situație, verifică: s-a întâmplat? Cu timpul, această practică demolează o iluzie fundamentală.. că predicțiile tale sunt fapte.`
              },
              {
                num: "4",
                title: "Stai în situație până când anxietatea scade",
                text: "Dacă rămâi în situația temută fără să fugi și fără comportamente de siguranță, anxietatea scade de la sine în 30-90 de minute. Răspunsul fight-or-flight este proiectat să fie un răspuns de urgență. Fiecare rămânere în situație oferă creierului dovada contrară."
              },
              {
                num: "5",
                title: "Oprește ruminația .. cu o regulă simplă",
                text: "După o interacțiune socială, dă-ți voie să te gândești la ea maximum 5 minute. Pune un timer. Notează atât ce a mers prost, cât și ce a mers bine. După cele 5 minute, oprește-te deliberat. Ruminația e ca un incendiu. Dacă o oprești devreme, se stinge."
              },
            ].map((step, i) => (
              <Reveal key={i} delay={i * 150}>
                <div className="as-step">
                  <span className="as-step-num">{step.num}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={800}>
            <div className="as-not-working">
              <h3>Ce nu funcționează (deși pare logic)</h3>
              <ul>
                <li><strong>Relaxează-te</strong> .. Dacă ai putea să te relaxezi, ai face-o. Relaxarea nu e o decizie, e un rezultat.</li>
                <li><strong>Evitarea</strong> .. Reduce anxietatea pe termen scurt, o amplifică pe termen lung.</li>
                <li><strong>Alcoolul ca lubrifiant social</strong> .. Funcționează temporar, dar împiedică învățarea. Creierul atribuie succesul social alcoolului, nu ție.</li>
                <li><strong>Autoperfecționarea</strong> .. Problema nu e performanța ta. Problema e standardul imposibil pe care ți l-ai fixat.</li>
                <li><strong>Căutarea de reasigurare</strong> .. întrebarea „a fost OK?" oferă alinare pentru 5 minute, apoi revine îndoiala.</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── S10: AJUTOR PROFESIONIST + CTA ── */}
      <section className="as-section as-help">
        <div className="as-container as-container-narrow">
          <Reveal>
            <h2>Când să ceri ajutor profesionist</h2>
          </Reveal>
          <Reveal delay={100}>
            <p>
              Dacă te-ai recunoscut în ceea ce ai citit și dacă acest pattern îți afectează viața de cel puțin 6 luni, ceea ce faci singur poate să nu fie suficient. Și asta nu e o slăbiciune.
            </p>
          </Reveal>

          <div className="as-demystify">
            {[
              { bold: "Nu trebuie să vorbești la telefon.", text: `Poți scrie. Un mesaj, un email, un formular. Primele cuvinte pot fi.. „am citit pagina și mă recunosc". Atât, e suficient.` },
              { bold: "Nu trebuie să fii pregătit pentru terapie.", text: "Nu există un nivel de pregătire necesar. Vii așa cum ești. Cu anxietatea, cu îndoielile, cu senzația că poate exagerezi." },
              { bold: "Nu te voi judeca.", text: "Lucrez cu oameni care trăiesc exact ce trăiești tu de peste 10 ani. Am auzit fiecare variantă a acestei povești. Nimic nu te va face să pari ciudat în ochii mei." },
              { bold: "Nu va fi un interogatoriu.", text: "Terapia nu înseamnă să răspunzi la întrebări inconfortabile în prima ședință. Înseamnă să construim, în ritmul tău, un spațiu în care poți fi văzut fără să te temi." },
            ].map((item, i) => (
              <Reveal key={i} delay={300 + i * 100}>
                <p><strong>{item.bold}</strong> {item.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={700}>
            <div className="as-cta-section">
              <h3>Următorul pas</h3>
              <p>Dacă ai ajuns până aici, ai făcut deja ceva ce 75% dintre persoanele cu anxietate socială nu fac niciodată.. ai căutat să înțelegi ce ți se întâmplă.</p>
              <a href="/programare?din=anxietate-sociala" className="as-cta-primary">Trimite un mesaj</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CITESTE SI ── */}
      <section className="as-section" id="citeste-si" style={{ paddingTop: 0 }}>
        <div className="as-container as-container-narrow">
          <Reveal>
            <p style={{ fontSize: "14px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-text-secondary)", marginBottom: "12px" }}>Citește și</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <a href="/tipuri/anxietate-generalizata" style={{ fontSize: "15px", color: "var(--color-secondary)", textDecoration: "underline", textUnderlineOffset: "3px" }}>Anxietatea generalizată: de ce mintea nu se oprește din gândit</a>
              <a href="/tipuri/fobii-specifice" style={{ fontSize: "15px", color: "var(--color-secondary)", textDecoration: "underline", textUnderlineOffset: "3px" }}>Fobii specifice: când frica e disproporționată și corpul nu ascultă</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── S11: FAQ ── */}
      <section className="as-section as-faq">
        <div className="as-container as-container-narrow">
          <Reveal>
            <h2>Întrebări frecvente</h2>
          </Reveal>
          <Reveal delay={150}>
            <div className="as-faq-list">
              <FAQ
                question="Anxietatea socială se vindecă complet?"
                answer={`În majoritatea cazurilor, da. 75% dintre persoanele care urmează terapia au ameliorare durabilă. Vindecare nu înseamnă că nu vei mai simți niciodată anxietate în situații sociale.. înseamnă că anxietatea nu îți va mai controla viața și deciziile.`}
              />
              <FAQ
                question="Cât durează tratamentul?"
                answer="În medie, 16-20 de ședințe. Unele persoane au nevoie de mai puțin, altele de mai mult. Depinde de severitate, de cât de veche e tulburarea și de prezența altor tulburări asociate."
              />
              <FAQ
                question="Am nevoie de medicamente?"
                answer="Nu neapărat. Psihoterapia singură este eficientă în cele mai multe cazuri. Medicația poate fi utilă în cazuri severe, dar cercetarea arată că beneficiile se pierd adesea după oprirea tratamentului."
              />
              <FAQ
                question={`Dar dacă e doar timiditate?`}
                answer={`Doar 36% dintre persoanele foarte timide au fobia socială. Dar dacă timiditatea ta te face să eviți situații, să refuzi oportunități și să ruminezi după fiecare interacțiune, nu e timiditate.`}
              />
              <FAQ
                question="De ce mi-e frică să contactez un psiholog când am anxietate socială?"
                answer="Tocmai asta face anxietatea socială.. transformă orice interacțiune nouă într-un obstacol. Frica de a contacta un specialist este unul dintre simptomele tulburării, nu un motiv să nu o faci. Poți începe cu un mesaj scris, fără apel telefonic, fără presiune."
              />
              <FAQ
                question="Anxietatea socială afectează și oamenii care par încrezători?"
                answer={`Da. Mulți oameni cu anxietate socială au învățat să performeze normalitatea. Sunt cei care par cei mai dezinvolți la petrecere și apoi petrec 3 zile analizând fiecare cuvânt.`}
              />
              <FAQ
                question="De ce am anxietate socială dacă nu am avut o copilărie traumatică?"
                answer="Nu e nevoie de o traumă majoră. Uneori e suficient un părinte care critică consistent, un mediu școlar competitiv, sau chiar o predispoziție genetică activată de un mediu care nu a oferit suficientă siguranță emoțională."
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER: REFERINȚE + DISCLAIMER ── */}
      <footer className="as-footer">
        <div className="as-container as-container-narrow">
          <div className="as-references">
            <button
              className="as-references-toggle"
              onClick={(e) => {
                const list = (e.currentTarget as HTMLButtonElement).nextElementSibling;
                if (list) list.classList.toggle("as-references-open");
                (e.currentTarget as HTMLButtonElement).classList.toggle("as-references-toggle-open");
              }}
            >
              <span className="as-references-icon">+</span>
              Referințe științifice (23 surse)
            </button>
            <div className="as-references-list">
              <p>American Psychiatric Association. (2013). <em>Diagnostic and Statistical Manual of Mental Disorders</em> (5th ed.). Arlington, VA: American Psychiatric Publishing.</p>
              <p>Andrews, G., Creamer, M., Crino, R., Hunt, C., Lampe, L., &amp; Page, A. (2003). <em>The Treatment of Anxiety Disorders: Clinician Guides and Patient Manuals</em> (2nd ed.). Cambridge University Press.</p>
              <p>Bandelow, B., &amp; Michaelis, S. (2015). Epidemiology of anxiety disorders in the 21st century. <em>Dialogues in Clinical Neuroscience</em>, 17(3), 327-335.</p>
              <p>Clark, D.M. (2001). A cognitive perspective on social phobia. In W.R. Crozier &amp; L.E. Alden (Eds.), <em>International Handbook of Social Anxiety</em> (pp. 405-430). Wiley.</p>
              <p>Clark, D.M., &amp; Beck, A.T. (2010). <em>Cognitive Therapy of Anxiety Disorders: Science and Practice</em>. Guilford Press.</p>
              <p>Clark, D.M., &amp; Wells, A. (1995). A cognitive model of social phobia. In R.G. Heimberg et al. (Eds.), <em>Social Phobia: Diagnosis, Assessment, and Treatment</em> (pp. 69-93). Guilford Press.</p>
              <p>Fehm, L., Pelissolo, A., Furmark, T., &amp; Wittchen, H.U. (2005). Size and burden of social phobia in Europe. <em>European Neuropsychopharmacology</em>, 15(4), 453-462.</p>
              <p>Gabbard, G.O. (2014). <em>Psychodynamic Psychiatry in Clinical Practice</em> (5th ed.). American Psychiatric Publishing.</p>
              <p>Heimberg, R.G., Brozovich, F.A., &amp; Rapee, R.M. (2010). A cognitive-behavioral model of social anxiety disorder. In S.G. Hofmann &amp; P.M. DiBartolo (Eds.), <em>Social Anxiety</em> (2nd ed., pp. 395-422). Academic Press.</p>
              <p>Hofmann, S.G., &amp; DiBartolo, P.M. (2000). An instrument to assess self-statements during public speaking: Scale development and preliminary psychometric properties. <em>Behavior Therapy</em>, 31(3), 499-515.</p>
              <p>Kessler, R.C., Berglund, P., Demler, O., Jin, R., Merikangas, K.R., &amp; Walters, E.E. (2005). Lifetime prevalence and age-of-onset distributions of DSM-IV disorders in the National Comorbidity Survey Replication. <em>Archives of General Psychiatry</em>, 62(6), 593-602.</p>
              <p>Kessler, R.C., Petukhova, M., Sampson, N.A., Zaslavsky, A.M., &amp; Wittchen, H.U. (2012). Twelve-month and lifetime prevalence and lifetime morbid risk of anxiety and mood disorders in the United States. <em>International Journal of Methods in Psychiatric Research</em>, 21(3), 169-184.</p>
              <p>Leahy, R.L., Holland, S.J., &amp; McGinn, L.K. (2012). <em>Treatment Plans and Interventions for Depression and Anxiety Disorders</em> (2nd ed.). Guilford Press.</p>
              <p>Leichsenring, F., Salzer, S., Beutel, M.E., et al. (2013). Psychodynamic therapy and cognitive-behavioral therapy in social anxiety disorder: A multicenter randomized controlled trial. <em>American Journal of Psychiatry</em>, 170(7), 759-767.</p>
              <p>Mayo-Wilson, E., Dias, S., Mavranezouli, I., et al. (2014). Psychological and pharmacological interventions for social anxiety disorder in adults: A systematic review and network meta-analysis. <em>The Lancet Psychiatry</em>, 1(5), 368-376.</p>
              <p>Moscovitch, D.A. (2009). What is the core fear in social phobia? A new model to facilitate individualized case conceptualization and treatment. <em>Cognitive and Behavioral Practice</em>, 16(2), 123-134.</p>
              <p>Rapee, R.M., &amp; Heimberg, R.G. (1997). A cognitive-behavioral model of anxiety in social phobia. <em>Behaviour Research and Therapy</em>, 35(8), 741-756.</p>
              <p>Ruscio, A.M., Brown, T.A., Chiu, W.T., Sareen, J., Stein, M.B., &amp; Kessler, R.C. (2008). Social fears and social phobia in the USA: Results from the National Comorbidity Survey Replication. <em>Psychological Medicine</em>, 38(1), 15-28.</p>
              <p>Schneier, F.R., Johnson, J., Hornig, C.D., Liebowitz, M.R., &amp; Weissman, M.M. (1992). Social phobia: Comorbidity and morbidity in an epidemiologic sample. <em>Archives of General Psychiatry</em>, 49(4), 282-288.</p>
              <p>Stein, M.B., &amp; Stein, D.J. (2008). Social anxiety disorder. <em>The Lancet</em>, 371(9618), 1115-1125.</p>
              <p>Wang, P.S., Berglund, P., Olfson, M., Pincus, H.A., Wells, K.B., &amp; Kessler, R.C. (2005). Failure and delay in initial treatment contact after first onset of mental disorders in the National Comorbidity Survey Replication. <em>Archives of General Psychiatry</em>, 62(6), 603-613.</p>
              <p>Wittchen, H.U., &amp; Fehm, L. (2003). Epidemiology and natural course of social fears and social phobia. <em>Acta Psychiatrica Scandinavica</em>, 108(Suppl. 417), 4-18.</p>
              <p>Wong, Q.J., &amp; Rapee, R.M. (2016). The aetiology and maintenance of social anxiety disorder: A synthesis of complementary theoretical models and formulation of a new integrated model. <em>Journal of Affective Disorders</em>, 203, 84-100.</p>
            </div>
          </div>
          <p className="as-disclaimer">
            Această pagină nu înlocuiește un diagnostic profesional. Dacă te recunoști în ce ai citit, te încurajez să vorbești cu un specialist.
          </p>
        </div>
      </footer>
    </main>
  );
}

// ═══════════════════════════════════════════════
// STYLES
// ═══════════════════════════════════════════════

const pageStyles = `
/* ─── Base ─── */
.as-page {
  font-family: var(--font-body), 'Inter', sans-serif;
  color: #1B2B4B;
  line-height: 1.75;
  font-size: 17px;
  -webkit-font-smoothing: antialiased;
}

.as-page h1, .as-page h2, .as-page h3 {
  font-family: var(--font-heading), 'Fraunces', serif;
  color: #1B2B4B;
  letter-spacing: -0.03em;
  line-height: 1.2;
}

/* ─── Layout ─── */
.as-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.as-container-narrow {
  max-width: 760px;
}

.as-section {
  padding: 80px 0;
}

@media (max-width: 767px) {
  .as-section { padding: 48px 0; }
}

/* ─── Reveal animation ─── */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.reveal-visible {
  opacity: 1;
  transform: translateY(0);
}

/* ─── S1+S2: Hero + Acts unified ─── */
.as-hero-acts {
  background: linear-gradient(180deg, #FAF7F2 0%, #F0EBE3 100%);
  padding-top: 48px;
  padding-bottom: 80px;
}

.as-hero-header {
  text-align: center;
  margin-bottom: 48px;
}

.as-author {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #5A5A5A;
  margin-bottom: 24px;
}

.as-hero-divider {
  display: flex;
  justify-content: center;
  margin: 16px 0 48px;
}
.as-hero-divider-line {
  display: block;
  width: 60px;
  height: 1px;
  background: rgba(27, 43, 75, 0.15);
}

/* Hero visual layout */
.as-hero-visual {
  display: flex;
  align-items: center;
  gap: 48px;
  margin-bottom: 48px;
  max-width: 700px;
}

.as-hero-illustration {
  flex-shrink: 0;
  width: 180px;
  height: 200px;
}

.as-hero-svg {
  width: 100%;
  height: 100%;
}

.as-hero-typewriter {
  flex: 1;
  text-align: left;
}

.as-typewriter-line {
  font-family: var(--font-heading), 'Fraunces', serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.7;
  color: #2C2C2C;
  margin-bottom: 16px;
  min-height: 1.7em;
}

.as-cursor {
  display: inline-block;
  color: #C4966C;
  font-weight: 300;
  animation: as-blink 0.8s step-end infinite;
  margin-left: 1px;
}

@keyframes as-blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Cloud/thought animations */
.as-cloud-pulse {
  animation: as-cloud 3s ease-in-out infinite;
}
@keyframes as-cloud {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.45; transform: scale(1.05); }
}

.as-cloud-dot-1 { animation: as-dot-float 2.5s ease-in-out infinite; }
.as-cloud-dot-2 { animation: as-dot-float 2.5s ease-in-out 0.5s infinite; }
@keyframes as-dot-float {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.35; }
}

.as-wave-1 { animation: as-wave 2s ease-in-out infinite; }
.as-wave-2 { animation: as-wave 2s ease-in-out 0.4s infinite; }
.as-wave-3 { animation: as-wave 2s ease-in-out 0.8s infinite; }
@keyframes as-wave {
  0%, 100% { opacity: 0.15; transform: translateY(0); }
  50% { opacity: 0.25; transform: translateY(-3px); }
}

/* Tremble animation for glass */
.as-tremble-1 { animation: as-tremble 0.3s ease-in-out infinite; }
.as-tremble-2 { animation: as-tremble 0.3s ease-in-out 0.1s infinite; }
@keyframes as-tremble {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-1px); }
  75% { transform: translateX(1px); }
}

/* Float animation for thought words */
.as-float-1 { animation: as-float 4s ease-in-out infinite; }
.as-float-2 { animation: as-float 4s ease-in-out 1s infinite; }
.as-float-3 { animation: as-float 4s ease-in-out 2s infinite; }
@keyframes as-float {
  0%, 100% { opacity: 0.15; transform: translateY(0); }
  50% { opacity: 0.3; transform: translateY(-6px); }
}

/* Gaze lines */
.as-gaze { animation: as-gaze-pulse 2s ease-in-out infinite; }
@keyframes as-gaze-pulse {
  0%, 100% { opacity: 0.15; }
  50% { opacity: 0.3; }
}

/* Replay arrow */
.as-replay { animation: as-replay-spin 3s linear infinite; transform-origin: 120px 75px; }
@keyframes as-replay-spin {
  0% { opacity: 0.3; }
  50% { opacity: 0.5; }
  100% { opacity: 0.3; }
}

@media (max-width: 767px) {
  .as-hero-visual { flex-direction: column; gap: 24px; }
  .as-hero-illustration { width: 140px; height: 160px; }
  .as-hero-typewriter { text-align: center; }
  .as-typewriter-line { font-size: 17px; }
}

.as-hero-title {
  font-size: 56px;
  font-weight: 700;
  margin-bottom: 16px;
}

.as-hero-sub {
  font-size: 20px;
  color: #5A5A5A;
  margin-bottom: 24px;
}

.as-hero-hook {
  font-size: 15px;
  color: #5A5A5A;
}

.as-link {
  color: #7A9E7E;
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.2s ease-out;
}
.as-link:hover { color: #5C7E62; }
.as-link:focus-visible {
  outline: 2px solid #7A9E7E;
  outline-offset: 2px;
  border-radius: 2px;
}

@media (max-width: 767px) {
  .as-hero-acts { padding-top: 64px; padding-bottom: 48px; }
  .as-hero-title { font-size: 36px; }
  .as-hero-sub { font-size: 17px; }
}

.as-acts-title {
  text-align: center;
  margin-bottom: 48px;
  font-size: 32px;
}

/* Act cards with illustration */
.as-act-card {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 48px;
  align-items: center;
  margin-bottom: 64px;
  padding: 40px;
  background: rgba(240, 235, 225, 0.5);
  border-radius: 16px;
  border: 1px solid rgba(27, 43, 75, 0.08);
}

.as-act-card-reverse {
  grid-template-columns: 1fr 250px;
}
.as-act-card-reverse .as-act-illustration {
  order: 2;
}
.as-act-card-reverse .as-act-content {
  order: 1;
}

.as-act-illustration {
  display: flex;
  justify-content: center;
  align-items: center;
}

.as-scene svg {
  width: 100%;
  max-width: 250px;
  height: auto;
}

.as-act-content {
  flex: 1;
}

.as-act-text {
  color: #5A5A5A;
  font-size: 17px;
  line-height: 1.75;
}

.as-act-label {
  display: block;
  font-family: var(--font-body), 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #C4966C;
  margin-bottom: 12px;
}

@media (max-width: 767px) {
  .as-act-card,
  .as-act-card-reverse {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 24px;
  }
  .as-act-card-reverse .as-act-illustration { order: 0; }
  .as-act-card-reverse .as-act-content { order: 0; }
  .as-scene svg { max-width: 180px; }
}

.as-act-conclusion {
  padding-top: 32px;
}
.as-act-conclusion p {
  color: #5A5A5A;
  margin-bottom: 12px;
}
.as-act-conclusion strong {
  color: #1B2B4B;
}

/* ─── S3: What ─── */
.as-what {
  background: #FAF7F2;
}

.as-what-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
  margin-bottom: 48px;
}

.as-what-text p {
  color: #5A5A5A;
  margin-bottom: 16px;
}

.as-stats-card {
  background: #1E2A3A;
  border-radius: 16px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.stat-number {
  font-family: var(--font-heading), 'Fraunces', serif;
  font-weight: 700;
  font-size: 48px;
  color: #C4966C;
  line-height: 1;
  display: block;
}

.stat-label {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.65);
  margin-top: 4px;
  line-height: 1.4;
}

.as-callout {
  color: #5A5A5A;
  font-size: 18px;
  line-height: 1.8;
  border-left: 3px solid #C4966C;
  padding-left: 24px;
}

@media (max-width: 767px) {
  .as-what-grid { grid-template-columns: 1fr; }
  .stat-number { font-size: 36px; }
}

/* ─── S4: Compare ─── */
.as-compare {
  background: #F0EBE3;
}

.as-table-wrap {
  overflow-x: auto;
  margin: 32px 0;
  border-radius: 12px;
  -webkit-overflow-scrolling: touch;
}

.as-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 15px;
  table-layout: fixed;
}

.as-table col:first-child { width: 28%; }
.as-table col:nth-child(2) { width: 36%; }
.as-table col:nth-child(3) { width: 36%; }

@media (max-width: 767px) {
  .as-table { font-size: 13px; }
  .as-table th { padding: 12px 10px; font-size: 12px; }
  .as-table td { padding: 10px; }
  .as-table col:first-child { width: 30%; }
  .as-table col:nth-child(2) { width: 35%; }
  .as-table col:nth-child(3) { width: 35%; }
}

.as-table th {
  background: #2C3E50;
  color: #FAF7F2;
  padding: 16px 20px;
  text-align: left;
  font-family: var(--font-body), 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  border-left: 3px solid #C4966C;
}
.as-table th:first-child {
  border-left: none;
}
  letter-spacing: 0.05em;
}

.as-table td {
  padding: 14px 20px;
  border-bottom: 1px solid rgba(27, 43, 75, 0.06);
  color: #5A5A5A;
  border-left: 3px solid #C4966C;
}
.as-table td:first-child {
  border-left: none;
}

.as-table tr:nth-child(even) td {
  background: rgba(250, 247, 242, 0.5);
}

.as-table-label {
  font-weight: 600;
  color: #2C3E50 !important;
  font-size: 14px;
}

@media (max-width: 767px) {
  .as-table-label { font-size: 12px; }
}

.as-table-highlight-col {
  background: rgba(196, 150, 108, 0.04);
}

.as-compare-stories {
  margin-top: 32px;
}
.as-compare-stories p {
  color: #5A5A5A;
  margin-bottom: 16px;
}
.as-compare-stories strong {
  color: #1B2B4B;
}

/* ─── S5: Recognize ─── */
.as-recognize {
  background: #FAF7F2;
}

.as-recognize-intro {
  color: #5A5A5A;
  margin-bottom: 32px;
}

.as-situation {
  border-left: 2px solid rgba(27, 43, 75, 0.12);
  padding-left: 24px;
  margin-bottom: 24px;
}
.as-situation p {
  color: #5A5A5A;
}
.as-situation strong {
  color: #1B2B4B;
  font-weight: 600;
}

.as-recognize-conclusion {
  margin-top: 40px;
  padding: 32px;
  background: #F0EBE3;
  border-radius: 12px;
}
.as-recognize-conclusion p {
  color: #5A5A5A;
  margin-bottom: 12px;
}
.as-recognize-conclusion strong {
  color: #C4966C;
  font-weight: 700;
}

/* ─── S6: Mechanism (dark) ─── */
.as-mechanism {
  background: #1E2A3A;
  color: #FAF7F2;
}
.as-mechanism h2 {
  color: #FAF7F2;
}
.as-mechanism p {
  color: rgba(250, 247, 242, 0.8);
}

.as-phase:first-child {
  margin-top: 40px;
}

.as-phase {
  margin-bottom: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid rgba(250, 247, 242, 0.08);
}
.as-phase:last-child { border-bottom: none; }

.as-phase-label {
  display: block;
  font-family: var(--font-body), 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #C4966C;
  margin-bottom: 8px;
}

.as-phase h3 {
  color: #FAF7F2;
  font-size: 24px;
  margin-bottom: 16px;
}

.as-mechanism-loop {
  background: rgba(250, 247, 242, 0.06);
  border-radius: 12px;
  padding: 32px;
  border-left: 3px solid #C4966C;
}
.as-mechanism-loop strong {
  color: #C4966C;
}

/* ─── S7: Perpetuate (dark) ─── */
.as-perpetuate {
  background: #1E2A3A;
  color: #FAF7F2;
  padding-top: 0;
}
.as-perpetuate h2 { color: #FAF7F2; }
.as-perpetuate-intro { color: rgba(250, 247, 242, 0.8); margin-bottom: 40px; }

.as-impact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin: 40px 0;
}

.as-impact-card {
  background: #263750;
  border-radius: 12px;
  padding: 32px;
  border-top: 3px solid #7A9E7E;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
}
.as-impact-card h3 {
  color: #FAF7F2;
  font-size: 22px;
  margin-bottom: 12px;
}
.as-impact-card p {
  color: rgba(250, 247, 242, 0.75);
  font-size: 15px;
  margin-bottom: 20px;
  flex: 1;
}

.as-impact-stat {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-top: auto;
  padding-top: 16px;
}
.as-impact-stat-number {
  font-family: var(--font-heading), 'Fraunces', serif;
  font-weight: 700;
  font-size: 36px;
  color: #C4966C;
}
.as-impact-stat-label {
  font-size: 13px;
  color: rgba(250, 247, 242, 0.55);
}

.as-myth {
  margin-top: 48px;
  padding: 32px;
  background: rgba(250, 247, 242, 0.05);
  border-radius: 12px;
}
.as-myth h3 {
  color: #FAF7F2;
  font-size: 22px;
  margin-bottom: 12px;
}
.as-myth p { color: rgba(250, 247, 242, 0.8); }

@media (max-width: 767px) {
  .as-impact-grid { grid-template-columns: 1fr; }
}

/* ─── S8: Psyche ─── */
.as-psyche {
  background: #FAF7F2;
}

.as-psyche-intro {
  color: #5A5A5A;
  font-size: 18px;
  margin-bottom: 40px;
}

.as-psyche-block {
  margin-bottom: 40px;
  margin-top: 40px;
}
.as-psyche-block h3 {
  font-size: 26px;
  margin-bottom: 4px;
}
.as-psyche-subtitle {
  font-family: var(--font-heading), 'Fraunces', serif;
  color: #C4966C;
  font-size: 18px;
  margin-bottom: 16px;
}
.as-psyche-block p:last-child {
  color: #5A5A5A;
}

.as-messages {
  margin-top: 48px;
}
.as-messages h3 {
  font-size: 26px;
  margin-bottom: 8px;
}
.as-messages-intro {
  color: #5A5A5A;
  margin-bottom: 24px;
}

.as-message {
  background: #F0EBE3;
  border-left: 3px solid #7A9E7E;
  padding: 20px 24px;
  margin-bottom: 12px;
  border-radius: 0 8px 8px 0;
  font-family: var(--font-heading), 'Fraunces', serif;
  font-size: 17px;
  color: #1B2B4B;
  line-height: 1.7;
}

/* ─── S9: Action ─── */
.as-action {
  background: #F0EBE3;
}

.as-action-intro {
  color: #5A5A5A;
  margin-bottom: 40px;
}

.as-steps {
  max-width: 760px;
}

.as-step {
  display: flex;
  gap: 24px;
  margin-bottom: 40px;
  align-items: flex-start;
}

.as-step-num {
  font-family: var(--font-heading), 'Fraunces', serif;
  font-weight: 700;
  font-size: 56px;
  line-height: 1;
  color: rgba(122, 158, 126, 0.22);
  flex-shrink: 0;
  width: 56px;
  text-align: center;
}

.as-step h3 {
  font-size: 20px;
  margin-bottom: 8px;
}
.as-step p {
  color: #5A5A5A;
  font-size: 16px;
}

.as-not-working {
  margin-top: 48px;
  padding: 32px;
  background: #FAF7F2;
  border-radius: 12px;
  border-left: 3px solid #C4966C;
}
.as-not-working h3 {
  font-size: 22px;
  margin-bottom: 16px;
}
.as-not-working ul {
  list-style: none;
  padding: 0;
}
.as-not-working li {
  color: #5A5A5A;
  margin-bottom: 12px;
  padding-left: 0;
  font-size: 15px;
}
.as-not-working strong {
  color: #1B2B4B;
}

/* ─── S10: Help + CTA ─── */
.as-help {
  background: #FAF7F2;
}
.as-help > .as-container-narrow > p {
  color: #5A5A5A;
  margin-bottom: 16px;
}

.as-therapy-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin: 40px 0;
  text-align: center;
}

.as-therapy-stat-number {
  font-family: var(--font-heading), 'Fraunces', serif;
  font-weight: 700;
  font-size: 48px;
  color: #7A9E7E;
  display: block;
  line-height: 1;
}
.as-therapy-stat-label {
  font-size: 14px;
  color: #5A5A5A;
  margin-top: 8px;
  display: block;
}

.as-demystify {
  margin: 40px 0;
}
.as-demystify p {
  color: #5A5A5A;
  margin-bottom: 16px;
}
.as-demystify strong {
  color: #1B2B4B;
}

.as-cta-section {
  margin-top: 48px;
  text-align: center;
}
.as-cta-section h3 {
  font-size: 28px;
  margin-bottom: 8px;
}
.as-cta-section > p {
  color: #5A5A5A;
  margin-bottom: 16px;
}
.as-cta-section > a {
  margin-top: 16px;
}

.as-cta-options {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  text-align: center;
}

.as-cta-option {
  padding: 32px 24px;
  background: #F0EBE3;
  border-radius: 12px;
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
}
.as-cta-option:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}
.as-cta-option h4 {
  font-family: var(--font-body), 'Inter', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #1B2B4B;
  margin-bottom: 8px;
}
.as-cta-option p {
  color: #5A5A5A;
  font-size: 14px;
  margin-bottom: 16px;
}

.as-cta-option-primary {
  background: #FAF7F2;
  border: 2px solid #7A9E7E;
}

.as-cta-primary {
  display: inline-block;
  padding: 14px 32px;
  background: #7A9E7E;
  color: #ffffff;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  transition: background 0.2s ease-out, transform 0.2s ease-out;
}
.as-cta-primary:hover { background: #6A8E6E; transform: translateY(-1px); }
.as-cta-primary:focus-visible { outline: 2px solid #7A9E7E; outline-offset: 2px; }
.as-cta-primary:active { transform: translateY(0); }

.as-cta-secondary {
  display: inline-block;
  padding: 14px 32px;
  background: transparent;
  color: #7A9E7E;
  border: 2px solid #7A9E7E;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  transition: background 0.2s ease-out, color 0.2s ease-out, transform 0.2s ease-out;
}
.as-cta-secondary:hover { background: #7A9E7E; color: #ffffff; transform: translateY(-1px); }
.as-cta-secondary:focus-visible { outline: 2px solid #7A9E7E; outline-offset: 2px; }
.as-cta-secondary:active { transform: translateY(0); }

.as-cta-tertiary {
  color: #1B2B4B;
  text-decoration: underline;
  text-underline-offset: 3px;
  font-weight: 600;
  font-size: 16px;
  transition: color 0.2s ease-out;
}
.as-cta-tertiary:hover { color: #7A9E7E; }
.as-cta-tertiary:focus-visible { outline: 2px solid #7A9E7E; outline-offset: 2px; border-radius: 2px; }

@media (max-width: 767px) {
  .as-therapy-stats { grid-template-columns: 1fr; gap: 24px; }
  .as-therapy-stat-number { font-size: 36px; }
  .as-cta-options { grid-template-columns: 1fr; }
}

/* ─── S11: FAQ ─── */
.as-faq {
  background: #F0EBE3;
}

.as-faq-list {
  margin-top: 32px;
}

.faq-item {
  border-bottom: 1px solid rgba(27, 43, 75, 0.08);
}

.faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: var(--font-body), 'Inter', sans-serif;
  font-size: 17px;
  font-weight: 600;
  color: #1B2B4B;
  text-align: left;
  gap: 16px;
  transition: color 0.2s ease-out;
}
.faq-question:hover { color: #7A9E7E; }
.faq-question:focus-visible { outline: 2px solid #7A9E7E; outline-offset: 2px; border-radius: 2px; }

.faq-chevron {
  flex-shrink: 0;
  transition: transform 0.3s ease-out;
  color: #5A5A5A;
}
.faq-chevron-open {
  transform: rotate(180deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}
.faq-answer-open {
  max-height: 400px;
}
.faq-answer p {
  padding: 0 0 20px;
  color: #5A5A5A;
  font-size: 16px;
  line-height: 1.7;
}

/* ─── Footer ─── */
.as-footer {
  background: #FAF7F2;
  padding: 48px 24px;
}

.as-references {
  margin-bottom: 32px;
}

.as-references-toggle {
  display: flex;
  align-items: center;
  gap: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-family: var(--font-heading), 'Fraunces', serif;
  font-size: 20px;
  font-weight: 500;
  color: #1B2B4B;
  padding: 0;
  margin-bottom: 0;
  transition: color 0.2s ease-out;
}
.as-references-toggle:hover { color: #7A9E7E; }
.as-references-toggle:focus-visible { outline: 2px solid #7A9E7E; outline-offset: 4px; border-radius: 2px; }

.as-references-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: #1B2B4B;
  color: #FAF7F2;
  font-size: 18px;
  font-weight: 600;
  font-family: var(--font-body), sans-serif;
  transition: transform 0.3s ease-out;
}

.as-references-toggle-open .as-references-icon {
  transform: rotate(45deg);
}

.as-references-list {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease-out;
  padding-left: 38px;
}
.as-references-open {
  max-height: 5000px;
}

.as-references-list p {
  font-size: 14px;
  line-height: 1.6;
  color: #5A5A5A;
  margin-bottom: 12px;
  padding-top: 12px;
}
.as-references-list p:first-child {
  padding-top: 20px;
}
.as-references-list em {
  font-style: italic;
}

.as-disclaimer {
  font-size: 13px;
  color: #5A5A5A;
  text-align: center;
}
`;
