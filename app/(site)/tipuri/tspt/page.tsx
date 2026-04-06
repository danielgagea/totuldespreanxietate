"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/* ============================================================
   STRESUL POST-TRAUMATIC (TSPT) — Landing Page
   Design: Warm editorial, floating TOC, visual breathing
   Fonts: Fraunces (--font-heading) + Source Sans 3 (--font-body)
   Palette: #FAF7F2 / #1B2B4B / #5C7A6A / #C4966C / #1E2A3A
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

// ─── FAQ Accordion ───
function FAQ({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="tspt-faq-item">
      <button
        onClick={() => setOpen(!open)}
        className="tspt-faq-question"
        aria-expanded={open}
      >
        <span>{question}</span>
        <svg
          className={`tspt-faq-chevron ${open ? "tspt-faq-chevron-open" : ""}`}
          width="20" height="20" viewBox="0 0 20 20" fill="none"
        >
          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div className={`tspt-faq-answer ${open ? "tspt-faq-answer-open" : ""}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
}

// ─── Reveal wrapper ───
function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`tspt-reveal ${visible ? "tspt-reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// ─── Pull Quote component ───
function PullQuote({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <blockquote className={`tspt-pull-quote ${dark ? "tspt-pull-quote-dark" : ""}`}>
      <svg className="tspt-pull-quote-mark" width="32" height="24" viewBox="0 0 32 24" fill="none" aria-hidden="true">
        <path d="M0 24V14.4C0 10.4 0.8 7.2 2.4 4.8C4 2.4 6.4 0.8 9.6 0L11.2 3.2C9.2 3.8 7.6 4.8 6.4 6.4C5.2 8 4.6 9.8 4.4 11.8H8V24H0ZM18 24V14.4C18 10.4 18.8 7.2 20.4 4.8C22 2.4 24.4 0.8 27.6 0L29.2 3.2C27.2 3.8 25.6 4.8 24.4 6.4C23.2 8 22.6 9.8 22.4 11.8H26V24H18Z" fill="currentColor"/>
      </svg>
      <p>{children}</p>
    </blockquote>
  );
}

// ─── Stat Callout component ───
function StatCallout({ number, label, sublabel, dark = false }: { number: string; label: string; sublabel?: string; dark?: boolean }) {
  return (
    <div className={`tspt-stat ${dark ? "tspt-stat-dark" : ""}`}>
      <span className="tspt-stat-number">{number}</span>
      <span className="tspt-stat-label">{label}</span>
      {sublabel && <span className="tspt-stat-sublabel">{sublabel}</span>}
    </div>
  );
}

// ─── Section Divider ───
function SectionDivider({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`tspt-section-divider ${dark ? "tspt-section-divider-dark" : ""}`} aria-hidden="true">
      <svg width="40" height="8" viewBox="0 0 40 8" fill="none">
        <circle cx="4" cy="4" r="3" fill="currentColor" opacity="0.2"/>
        <circle cx="20" cy="4" r="3" fill="currentColor" opacity="0.35"/>
        <circle cx="36" cy="4" r="3" fill="currentColor" opacity="0.2"/>
      </svg>
    </div>
  );
}

// ─── TOC sections ───
const tocSections = [
  { id: "ce-este", label: "Ce este" },
  { id: "creier", label: "Ce se întâmplă în creier" },
  { id: "viata-reala", label: "Cum arată în viața reală" },
  { id: "de-ce-nu-trece", label: "De ce nu trece de la sine" },
  { id: "psihicul", label: "Ce vrea să spună psihicul" },
  { id: "tratament", label: "Tratament" },
  { id: "ce-poti-face", label: "Ce poți face acum" },
  { id: "specialist", label: "Când merită un specialist" },
  { id: "faq", label: "Întrebări frecvente" },
];

// ─── Floating TOC ───
function FloatingTOC() {
  const [activeId, setActiveId] = useState("");
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visibleSections = new Map<string, boolean>();

    tocSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          visibleSections.set(id, entry.isIntersecting);
          for (const s of tocSections) {
            if (visibleSections.get(s.id)) {
              setActiveId(s.id);
              break;
            }
          }
        },
        { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setTocOpen(false);
    }
  }, []);

  return (
    <>
      {/* Desktop sidebar TOC */}
      <nav className="tspt-toc-sidebar" aria-label="Cuprins">
        <p className="tspt-toc-title">Cuprins</p>
        <ul>
          {tocSections.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={`tspt-toc-link ${activeId === id ? "tspt-toc-active" : ""}`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile floating TOC button */}
      <button
        className="tspt-toc-fab"
        onClick={() => setTocOpen(!tocOpen)}
        aria-label="Deschide cuprins"
        aria-expanded={tocOpen}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3 5H17M3 10H17M3 15H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Mobile TOC overlay */}
      {tocOpen && (
        <div className="tspt-toc-overlay" onClick={() => setTocOpen(false)}>
          <nav className="tspt-toc-mobile" onClick={e => e.stopPropagation()}>
            <div className="tspt-toc-mobile-header">
              <p className="tspt-toc-title">Cuprins</p>
              <button onClick={() => setTocOpen(false)} className="tspt-toc-close" aria-label="Închide">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            <ul>
              {tocSections.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className={`tspt-toc-link ${activeId === id ? "tspt-toc-active" : ""}`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

// ═══════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════

export default function TSPTPage() {
  return (
    <main className="tspt-page">
      <style>{pageStyles}</style>
      <FloatingTOC />

      {/* ── HERO ── */}
      <section className="tspt-hero">
        <div className="tspt-container tspt-container-narrow">
          <Reveal>
            <p className="tspt-author">De Daniel Gagea, psiholog clinician, psihoterapeut</p>
          </Reveal>

          <div className="tspt-hero-layout">
            <div className="tspt-hero-text">
              <Reveal delay={200}>
                <h1 className="tspt-hero-title">Stresul post-traumatic</h1>
              </Reveal>
              <Reveal delay={400}>
                <p className="tspt-hero-hook">
                  Ai nevoie de ajutor acum?{" "}
                  <a href="#ce-poti-face" className="tspt-link">Mergi direct la Ce poți face acum</a>
                </p>
              </Reveal>
            </div>

            <Reveal delay={300}>
              <div className="tspt-hero-illustration">
                <svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="tspt-hero-svg">
                  {/* Person silhouette - hypervigilant posture */}
                  <circle cx="160" cy="100" r="22" fill="#1B2B4B" opacity="0.35"/>
                  <path d="M160 122 C142 122 128 138 128 158 L128 200 L192 200 L192 158 C192 138 178 122 160 122Z" fill="#1B2B4B" opacity="0.25"/>
                  {/* Alert eyes */}
                  <circle cx="152" cy="97" r="2.5" fill="#C4966C" opacity="0.5"/>
                  <circle cx="168" cy="97" r="2.5" fill="#C4966C" opacity="0.5"/>
                  {/* Tension lines around shoulders */}
                  <path d="M125 145 L115 140" stroke="#C4966C" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" className="tspt-tension-1"/>
                  <path d="M195 145 L205 140" stroke="#C4966C" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" className="tspt-tension-2"/>
                  {/* Fragmented memory pieces floating */}
                  <rect x="60" y="50" width="40" height="30" rx="4" fill="#1B2B4B" opacity="0.08" className="tspt-fragment-1"/>
                  <rect x="65" y="55" width="30" height="3" rx="1.5" fill="#C4966C" opacity="0.2"/>
                  <rect x="65" y="62" width="20" height="3" rx="1.5" fill="#C4966C" opacity="0.15"/>
                  <rect x="220" y="40" width="45" height="35" rx="4" fill="#1B2B4B" opacity="0.08" className="tspt-fragment-2"/>
                  <line x1="228" y1="50" x2="258" y2="50" stroke="#C4966C" strokeWidth="2" strokeLinecap="round" opacity="0.15"/>
                  <line x1="228" y1="58" x2="248" y2="58" stroke="#C4966C" strokeWidth="2" strokeLinecap="round" opacity="0.1"/>
                  <rect x="80" y="160" width="35" height="28" rx="4" fill="#1B2B4B" opacity="0.06" className="tspt-fragment-3"/>
                  <line x1="86" y1="168" x2="108" y2="168" stroke="#C4966C" strokeWidth="2" strokeLinecap="round" opacity="0.12"/>
                  <rect x="210" y="155" width="38" height="30" rx="4" fill="#1B2B4B" opacity="0.06" className="tspt-fragment-4"/>
                  <line x1="216" y1="164" x2="240" y2="164" stroke="#C4966C" strokeWidth="2" strokeLinecap="round" opacity="0.12"/>
                  {/* Shatter lines from head */}
                  <path d="M145 80 L120 55" stroke="#C4966C" strokeWidth="1" strokeLinecap="round" opacity="0.2" className="tspt-shatter-1"/>
                  <path d="M175 80 L200 50" stroke="#C4966C" strokeWidth="1" strokeLinecap="round" opacity="0.2" className="tspt-shatter-2"/>
                  <path d="M160 78 L160 45" stroke="#C4966C" strokeWidth="1" strokeLinecap="round" opacity="0.15" className="tspt-shatter-3"/>
                  {/* Alarm pulse rings */}
                  <circle cx="160" cy="100" r="35" fill="none" stroke="#C4966C" strokeWidth="1" opacity="0.12" className="tspt-pulse-1"/>
                  <circle cx="160" cy="100" r="50" fill="none" stroke="#C4966C" strokeWidth="0.8" opacity="0.08" className="tspt-pulse-2"/>
                  <circle cx="160" cy="100" r="65" fill="none" stroke="#C4966C" strokeWidth="0.5" opacity="0.05" className="tspt-pulse-3"/>
                  {/* Ground */}
                  <rect x="40" y="210" width="240" height="16" rx="6" fill="#1B2B4B" opacity="0.06"/>
                </svg>
              </div>
            </Reveal>
          </div>

          <Reveal delay={800}>
            <div className="tspt-hero-divider" aria-hidden="true">
              <span className="tspt-hero-divider-line" />
            </div>
          </Reveal>
          <Reveal delay={900}>
            <div className="tspt-opening">
              <p>
                Stresul post-traumatic (TSPT) este ceea ce se întâmplă atunci când creierul nu reușește să proceseze un eveniment copleșitor. Amintirea rămâne blocată, ca și cum s-ar fi întâmplat ieri, cu aceeași intensitate emoțională și aceleași reacții corporale.
              </p>
              <p>
                Dacă ai trecut printr-o experiență care te-a depășit, fie că a fost un accident, o agresiune, pierderea cuiva, o experiență medicală traumatică sau altceva, și simți că acea experiență continuă să-ți controleze viața.. acest ghid e pentru tine.
              </p>
              <p>
                Vei înțelege de ce corpul tău reacționează ca și cum pericolul e încă prezent, de ce anumite lucruri te trimit înapoi în acel moment, și ce poți face concret ca să ieși din ciclul în care te afli.
              </p>
              <p className="tspt-opening-conclusion">
                <strong>Nu ești &quot;slab&quot; și nu ești &quot;blocat în trecut&quot; din alegere.</strong> Ce trăiești are un nume, are mecanisme specifice identificabile și, cel mai important, are tratament care funcționează.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CE ESTE TSPT ── */}
      <section className="tspt-section tspt-what" id="ce-este">
        <div className="tspt-container tspt-container-narrow">
          <Reveal>
            <h2>Ce este stresul post-traumatic</h2>
          </Reveal>
          <Reveal delay={150}>
            <p>
              Stresul post-traumatic este o condiție psihologică care apare după un eveniment traumatic, adică un eveniment în care ai fost expus la moarte, amenințare cu moartea, vătămare gravă sau violență sexuală, fie direct, fie ca martor, fie prin aflarea că s-a întâmplat cuiva apropiat.
            </p>
            <p>
              Nu toți cei care trec prin experiențe traumatice dezvoltă stres post-traumatic. Aproximativ 50-60% dintre adulți experimentează cel puțin un eveniment traumatic pe parcursul vieții, dar doar o parte dezvoltă simptome persistente.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="tspt-stats-row">
              <StatCallout number="6-8%" label="din populație" sublabel="va dezvolta stres post-traumatic pe parcursul vieții" />
              <StatCallout number="2x" label="mai frecvent" sublabel="la femei decât la bărbați" />
            </div>
          </Reveal>

          <SectionDivider />

          <Reveal delay={300}>
            <div className="tspt-symptom-groups">
              <h3>Cele patru grupe de simptome</h3>
              <p>Stresul post-traumatic nu e un singur lucru. E o constelație de simptome organizate în patru categorii, care se influențează reciproc.</p>
              <div className="tspt-groups-grid">
                {[
                  {
                    emoji: "🔄",
                    title: "Retrăirea traumei",
                    items: [
                      "Flashback-uri, senzația că evenimentul se întâmplă din nou, acum",
                      "Coșmaruri recurente legate de traumă",
                      "Reacții fizice intense la lucruri care amintesc de eveniment (miros, sunet, loc)",
                      "Gânduri intruzive care vin fără invitație",
                    ],
                  },
                  {
                    emoji: "🚫",
                    title: "Evitarea",
                    items: [
                      "Evitarea locurilor, persoanelor sau situațiilor care amintesc de traumă",
                      "Evitarea gândurilor sau conversațiilor despre ce s-a întâmplat",
                      "Amorțeală emoțională, senzația că emoțiile au fost oprite",
                      "Pierderea interesului pentru activități care înainte contau",
                    ],
                  },
                  {
                    emoji: "⚡",
                    title: "Hiperactivarea",
                    items: [
                      "Hipervigilență, scanezi constant mediul pentru pericole",
                      "Tresărire exagerată la zgomote bruște",
                      "Dificultăți de somn și concentrare",
                      "Iritabilitate sau accese de furie disproporționate",
                    ],
                  },
                  {
                    emoji: "🌫️",
                    title: "Schimbări în gândire și dispoziție",
                    items: [
                      "Credința că lumea e complet periculoasă sau că tu ești complet vinovat",
                      "Incapacitatea de a simți emoții pozitive",
                      `Detașare față de ceilalți, senzația de a fi „diferit"`,
                      "Pierderi de memorie legate de părți ale evenimentului",
                    ],
                  },
                ].map((group, i) => (
                  <Reveal key={i} delay={i * 100}>
                    <div className="tspt-group-card">
                      <span className="tspt-group-emoji">{group.emoji}</span>
                      <h4>{group.title}</h4>
                      <ul>
                        {group.items.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={500}>
            <div className="tspt-causes">
              <h3>Ce poate provoca stresul post-traumatic</h3>
              <p>Lista nu e exhaustivă, dar include cele mai frecvente tipuri de experiențe:</p>
              <div className="tspt-causes-grid">
                {[
                  "Accidente rutiere sau alte accidente grave",
                  "Agresiune fizică sau sexuală",
                  "Experiențe de luptă sau zone de conflict",
                  "Dezastre naturale",
                  "Pierderea bruscă a cuiva apropiat",
                  "Experiențe medicale traumatice (intervenții, diagnostice, ATI)",
                  "Violență domestică",
                  "Abuz în copilărie (fizic, emoțional, sexual)",
                  "Neglijare emoțională cronică",
                  "Martor la violență sau accident",
                ].map((cause, i) => (
                  <div key={i} className="tspt-cause-item">
                    <span className="tspt-cause-dot" />
                    <span>{cause}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={600}>
            <PullQuote>
              Severitatea evenimentului nu prezice severitatea stresului post-traumatic. Ce contează mai mult este semnificația subiectivă a experienței, resursele pe care le aveai în acel moment, și dacă ai avut sau nu sprijin emoțional după.
            </PullQuote>
          </Reveal>
        </div>
      </section>

      {/* ── CE SE ÎNTÂMPLĂ ÎN CREIER ── */}
      <section className="tspt-section tspt-brain" id="creier">
        <div className="tspt-container tspt-container-narrow">
          <Reveal>
            <h2>De ce trecutul se simte ca prezent</h2>
          </Reveal>

          <Reveal delay={150}>
            <div className="tspt-insight-box">
              <h3>Amintirile traumatice funcționează diferit</h3>
              <p>
                O amintire normală are o etichetă de timp.. știi că e din trecut, o poți povesti cronologic, poți vorbi despre ea fără ca trupul să reacționeze.
              </p>
              <p>
                Amintirea traumatică e stocată în fragmente senzoriale, imagini, sunete, mirosuri, senzații corporale, fără ordine cronologică și fără etichetă de „trecut". Când ceva din prezent activează un fragment, creierul îl tratează ca pe un eveniment care se întâmplă acum.
              </p>
              <p>
                De aceea un miros, un ton de voce sau o senzație fizică pot declanșa o reacție intensă.. creierul tău nu face diferența între „îmi amintesc pericolul" și „sunt în pericol".
              </p>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="tspt-dissociative">
              <h3>Când reacția nu e intensă, ci opusul</h3>
              <p>
                Unele persoane cu stres post-traumatic nu reacționează prin hiperactivare, ci prin detașare.. se simt „în afara corpului", ca într-un vis, ca și cum privesc totul de la distanță. Emoțiile par oprite, lumea pare ireală.
              </p>
              <p>
                Aceasta nu e o formă mai ușoară, ci o formă diferită în care creierul a învățat să se protejeze prin deconectare. Apare mai frecvent la persoane care au experimentat traumă repetată sau cronică, mai ales în copilărie.
              </p>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <PullQuote dark>
              Stresul post-traumatic nu e o problemă de voință. E o schimbare reală în modul în care creierul procesează informația, și tocmai de aceea răspunde la tratament specific.
            </PullQuote>
          </Reveal>
        </div>
      </section>

      {/* ── CUM ARATĂ ÎN VIAȚA REALĂ ── */}
      <section className="tspt-section tspt-daily" id="viata-reala">
        <div className="tspt-container tspt-container-narrow">
          <Reveal>
            <h2>Cum arată stresul post-traumatic în viața reală</h2>
          </Reveal>

          <div className="tspt-scenes-grid">
            {[
              {
                title: "Somnul",
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M28 14C22 14 18 18 18 24C18 30 22 34 28 34C24 32 22 28 22 24C22 20 24 16 28 14Z" fill="#1B2B4B" opacity="0.15"/>
                    <circle cx="32" cy="16" r="1.5" fill="#C4966C" opacity="0.3"/>
                    <circle cx="36" cy="22" r="1" fill="#C4966C" opacity="0.2"/>
                    <path d="M14 30L18 26L22 30" stroke="#C4966C" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
                  </svg>
                ),
                text: "Te trezești din coșmar cu inima bătând, transpirat, desorientat. Câteva secunde nu știi unde ești. Apoi realizezi că ești în pat, acasă, dar corpul tău e încă acolo, în acel moment.",
                detail: "Uneori eviți somnul pentru că știi ce urmează. Stai treaz cât mai mult, scrollezi pe telefon, te uiți la seriale. Orice e mai bun decât să adormi și să ajungi iar acolo.",
              },
              {
                title: "Relațiile",
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="20" cy="22" r="6" fill="#1B2B4B" opacity="0.12"/>
                    <circle cx="32" cy="22" r="6" fill="#1B2B4B" opacity="0.08"/>
                    <path d="M18 32C20 28 24 26 26 26C28 26 32 28 34 32" stroke="#C4966C" strokeWidth="1.5" strokeLinecap="round" opacity="0.2"/>
                    <line x1="26" y1="16" x2="26" y2="28" stroke="#C4966C" strokeWidth="0.8" opacity="0.15" strokeDasharray="2 2"/>
                  </svg>
                ),
                text: "Partenerul tău vrea apropiere, dar tu simți un zid invizibil. Nu ești supărat pe el sau pe ea. Pur și simplu nu ajungi la emoție. Ești prezent fizic, dar absent emoțional.",
                detail: `Oamenii din jurul tău spun „s-a schimbat" sau „nu mai e ca înainte". Au dreptate. Dar nu de asta crezi tu.`,
              },
              {
                title: "La muncă",
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="10" y="16" width="28" height="20" rx="3" fill="#1B2B4B" opacity="0.08"/>
                    <rect x="14" y="20" width="12" height="2" rx="1" fill="#C4966C" opacity="0.4"/>
                    <rect x="14" y="24" width="20" height="2" rx="1" fill="#C4966C" opacity="0.25"/>
                    <rect x="14" y="28" width="16" height="2" rx="1" fill="#C4966C" opacity="0.15"/>
                  </svg>
                ),
                text: "Te concentrezi greu. Citești același paragraf de 4 ori fără să înregistrezi nimic. Colegii vorbesc și tu ești cu mintea în altă parte, scanând inconștient ușa, ferestrele, ieșirile.",
                detail: "Sau, paradoxal, te arunci în muncă cu o intensitate care pare impresionantă. Dar știi adevărul: munca e refugiul. Cât lucrezi, nu simți.",
              },
              {
                title: "Amorțeala emoțională",
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="14" fill="#1B2B4B" opacity="0.06"/>
                    <path d="M18 26C18 26 21 24 24 24C27 24 30 26 30 26" stroke="#1B2B4B" strokeWidth="1.5" strokeLinecap="round" opacity="0.15"/>
                    <circle cx="19" cy="20" r="1.5" fill="#1B2B4B" opacity="0.15"/>
                    <circle cx="29" cy="20" r="1.5" fill="#1B2B4B" opacity="0.15"/>
                  </svg>
                ),
                text: "Nu mai simți bucurie, dar nici tristețe. E ca și cum cineva a dat volumul la zero pe toate emoțiile. Lumea pare plată, gri, la distanță.",
                detail: "Oamenii râd și tu observi că ar trebui să râzi și tu, dar nu vine nimic. Te întrebi dacă mai ești capabil să simți ceva.",
              },
              {
                title: "Munca excesivă ca evitare",
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="12" y="12" width="24" height="24" rx="3" fill="#1B2B4B" opacity="0.06"/>
                    <path d="M18 20H30M18 24H30M18 28H26" stroke="#C4966C" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
                    <circle cx="36" cy="12" r="5" fill="#C4966C" opacity="0.15"/>
                    <text x="36" y="15" fill="#C4966C" opacity="0.4" fontSize="8" textAnchor="middle" fontWeight="700">!</text>
                  </svg>
                ),
                text: `Lucrezi 12 ore pe zi. Toată lumea te admiră pentru „dedicare". Nimeni nu vede că de fapt fugi. Cât timp ești ocupat, amintirile nu au loc să intre.`,
                detail: "Weekendurile sunt mai grele decât zilele de muncă, pentru că nu ai unde să te ascunzi de propriile gânduri.",
              },
              {
                title: "Tresăririle",
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M24 10L28 20L38 22L30 30L32 40L24 36L16 40L18 30L10 22L20 20Z" fill="#C4966C" opacity="0.08"/>
                    <path d="M20 22L24 16L28 22" stroke="#C4966C" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
                    <path d="M18 28L24 24L30 28" stroke="#C4966C" strokeWidth="1" strokeLinecap="round" opacity="0.2"/>
                  </svg>
                ),
                text: "O ușă trântită. Un claxon. Cineva care te atinge pe umăr pe neașteptate. Corpul tău sare în alertă maximă, inima bate, mâinile tremură, tot sistemul se activează instant.",
                detail: "Reacția e disproporționată și o știi. Dar nu o poți controla. Corpul reacționează înainte ca mintea ta să evalueze situația.",
              },
            ].map((scene, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="tspt-scene-card">
                  <div className="tspt-scene-visual">
                    {scene.icon}
                  </div>
                  <h3>{scene.title}</h3>
                  <p className="tspt-scene-main">{scene.text}</p>
                  <p className="tspt-scene-detail">{scene.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── DE CE NU TRECE DE LA SINE ── */}
      <section className="tspt-section tspt-persist" id="de-ce-nu-trece">
        <div className="tspt-container tspt-container-narrow">
          <Reveal>
            <h2>De ce nu trece de la sine</h2>
          </Reveal>
          <Reveal delay={100}>
            <p>
              Mulți oameni cu stres post-traumatic așteaptă ca timpul să vindece, dar stresul post-traumatic nu funcționează ca o rană fizică. Fără procesare, amintirea traumatică rămâne blocată exact în forma în care a fost stocată.
            </p>
          </Reveal>

          <SectionDivider dark />

          <Reveal delay={200}>
            <div className="tspt-cycle">
              <h3>Evitarea menține trauma vie</h3>
              <ol className="tspt-cycle-list">
                <li><strong>Un trigger apare</strong> (miros, sunet, loc, senzație fizică sau gând)</li>
                <li><strong>Amintirea traumatică se activează</strong> cu intensitate emoțională completă</li>
                <li><strong>Corpul reacționează</strong> ca și cum pericolul e prezent</li>
                <li><strong>Evitarea se instalează</strong>.. eviți locul, persoana, conversația, gândul</li>
                <li><strong>Ușurarea pe termen scurt:</strong> anxietatea scade</li>
                <li><strong>Creierul învață:</strong> „Evitarea funcționează!"</li>
                <li><strong>Amintirea nu e procesată</strong> și rămâne la fel de „proaspătă"</li>
                <li><strong>Următorul trigger</strong> declanșează același ciclu, cu aceeași intensitate</li>
              </ol>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <PullQuote dark>
              Evitarea e cea mai naturală reacție la durere. Și e exact mecanismul care împiedică vindecarea. Nu pentru că ești „slab", ci pentru că creierul tău face ce știe mai bine: te protejează de disconfort pe termen scurt.
            </PullQuote>
          </Reveal>

          <SectionDivider dark />

          <Reveal delay={350}>
            <div className="tspt-maintain">
              <h3>Alte mecanisme care mențin ciclul</h3>
              <div className="tspt-maintain-grid">
                <div className="tspt-maintain-card">
                  <span className="tspt-maintain-icon">🍷</span>
                  <h4>Alcoolul și substanțele</h4>
                  <p>
                    Multe persoane cu stres post-traumatic folosesc alcoolul sau alte substanțe ca să „oprească" gândurile, să adoarmă sau să anestezicze emoțiile. Funcționează temporar. Pe termen lung, amplifică simptomele și adaugă o problemă peste alta.
                  </p>
                </div>
                <div className="tspt-maintain-card">
                  <span className="tspt-maintain-icon">🔒</span>
                  <h4>Credința „e vina mea"</h4>
                  <p>
                    Una dintre cele mai distructive consecințe ale traumei este convingerea că ai fi putut preveni ce s-a întâmplat. „Dacă nu mergeam acolo." „Dacă reacționam altfel." Această credință te ține blocat în rușine și autoculpabilizare, și împiedică procesarea reală a traumei.
                  </p>
                </div>
                <div className="tspt-maintain-card">
                  <span className="tspt-maintain-icon">🧊</span>
                  <h4>Izolarea</h4>
                  <p>
                    Te retragi de la oameni, fie pentru că nu crezi că vor înțelege, fie pentru că prezența lor te obosește. Izolarea reduce expunerea la triggeri, dar elimină și sursa principală de vindecare: conexiunea umană.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CE VREA SĂ SPUNĂ PSIHICUL ── */}
      <section className="tspt-section tspt-psyche" id="psihicul">
        <div className="tspt-container tspt-container-narrow">
          <Reveal>
            <h2>Ce vrea să spună psihicul prin traumă</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="tspt-psyche-intro">
              Până aici am vorbit despre cum funcționează stresul post-traumatic.. mecanismul, simptomele, de ce se menține. Acum vreau să vorbim despre <strong>ce se întâmplă la un nivel mai profund</strong>.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="tspt-insight-box tspt-insight-box-light">
              <h3>Trauma nu e doar evenimentul, ci absența răspunsului</h3>
              <p>
                O traumă nu e doar ce ți s-a întâmplat. E ce ți s-a întâmplat și nu a fost văzut, recunoscut, validat de nimeni. Un accident e traumatic. Un accident după care nimeni nu te întreabă cum ești e și mai traumatic.
              </p>
              <p>
                De aceea multe persoane cu stres post-traumatic spun „nu înțeleg de ce mă afectează atât de mult, alții au trecut prin lucruri mult mai grave". Gravitatea nu ține doar de eveniment. Ține de singurătatea din timpul și de după eveniment.
              </p>
            </div>
          </Reveal>

          <SectionDivider />

          <Reveal delay={300}>
            <div className="tspt-body-knows">
              <h3>Corpul știe înainte de minte</h3>
              <p>
                Bessel van der Kolk a formulat ideea în modul cel mai direct posibil: corpul ține scorul. Creierul poate „uita" trauma, poate să o pună deoparte, poate să o minimizeze. Corpul nu face asta. Corpul păstrează amintirea în tensiunea musculară, în patterns-ul de respirație, în reactivitatea la atingere.
              </p>
              <p>
                De aceea multe persoane cu stres post-traumatic ajung mai întâi la medic cu simptome fizice: dureri cronice fără cauză aparentă, probleme gastrointestinale, dureri de cap, oboseală care nu se explică prin nimic medical. Corpul vorbește despre trauma pe care mintea nu o poate articula încă.
              </p>
            </div>
          </Reveal>

          <SectionDivider />

          <Reveal delay={350}>
            <div className="tspt-shame">
              <h3>Rușinea ca motor ascuns</h3>
              <p>
                În spatele multora dintre simptomele stresului post-traumatic se află o emoție care rareori e numită: rușinea. Nu vinovăția („am făcut ceva greșit"), ci rușinea („sunt ceva greșit", „sunt stricat", „sunt murdar").
              </p>
              <p>
                Rușinea e emoția care te face să nu vorbești. Care te face să crezi că nimeni nu poate înțelege. Care te face să te ascunzi, nu din frică, ci din convingerea profundă că dacă cineva ar vedea ce s-a întâmplat cu adevărat, te-ar respinge.
              </p>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="tspt-case">
              <div className="tspt-case-label">Studiu de caz</div>
              <h3>Jill: când corpul vorbește pentru minte</h3>
              <p>
                Jill a venit în terapie la 34 de ani, cu atacuri de panică „din senin" și o tensiune musculară cronică în umeri și gât pe care niciun masaj nu o rezolva. A făcut toate analizele, totul era în parametri normali.
              </p>
              <p>
                În ședința a patra, povestind despre copilărie, a menționat „în treacăt" că tatăl ei „se enerva uneori". Corpul ei s-a tensionat vizibil în acel moment, dar vocea a rămas calmă, detașată.
              </p>
              <p>
                Pe parcursul terapiei, a ieșit la suprafață un pattern clar: atacurile de panică apăreau de fiecare dată când cineva din jurul ei ridica vocea. Corpul ei recunoștea semnalul pe care mintea ei încă nu era pregătită să-l numească.
              </p>
              <p className="tspt-case-key">
                Tensiunea din umeri era corpul ei pregătindu-se pentru un pericol care acum 20 de ani era real, dar acum nu mai era.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── TRATAMENT ── */}
      <section className="tspt-section tspt-treatment" id="tratament">
        <div className="tspt-container tspt-container-narrow">
          <Reveal>
            <h2>Tratament</h2>
          </Reveal>
          <Reveal delay={100}>
            <p>
              Stresul post-traumatic răspunde bine la tratament. Și spre deosebire de medicație, beneficiile terapiei se mențin după terminarea tratamentului, pentru că terapia procesează amintirea traumatică, nu doar reduce simptomele.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="tspt-stats-row">
              <StatCallout number="~66%" label="ameliorare" sublabel="dintre persoanele care urmează terapia au ameliorare semnificativă" />
              <StatCallout number="12-16" label="ședințe" sublabel="durata tipică a tratamentului pentru terapii focalizate pe traumă" />
            </div>
          </Reveal>

          <SectionDivider />

          <Reveal delay={200}>
            <div className="tspt-treatment-methods">
              <h3>Terapii validate pentru stresul post-traumatic</h3>
              <div className="tspt-treatment-grid">
                {[
                  {
                    num: "1",
                    title: "Terapia de expunere prelungită",
                    abbr: "(Prolonged Exposure)",
                    text: "Te ajută să te confrunți treptat cu amintirea traumatică și cu situațiile pe care le eviți. Prin expunere repetată, amintirea se procesează și pierde din intensitatea emoțională. Creierul tău învață, în sfârșit, că a povesti despre ce s-a întâmplat nu înseamnă a retrăi evenimentul.",
                  },
                  {
                    num: "2",
                    title: "Procesarea cognitivă",
                    abbr: "(Cognitive Processing Therapy)",
                    text: `Se focalizează pe gândurile și credințele legate de traumă: „e vina mea", „lumea e complet periculoasă", „nu pot avea încredere în nimeni". Aceste credințe se formează în momentul traumei și se autoperpetuează. Terapia te ajută să le examinezi și să le modifici.`,
                  },
                  {
                    num: "3",
                    title: "EMDR",
                    abbr: "(Eye Movement Desensitization and Reprocessing)",
                    text: "Folosește stimulare bilaterală (mișcări oculare, sunete alternante) în timp ce accesezi amintirea traumatică. Mecanismul exact nu e complet înțeles, dar rezultatele sunt bine documentate. Amintirea rămâne, dar pierde din încărcătura emoțională.",
                  },
                ].map((method, i) => (
                  <Reveal key={i} delay={i * 80}>
                    <div className="tspt-treatment-card">
                      <span className="tspt-treatment-num">{method.num}</span>
                      <h4>{method.title}</h4>
                      <span className="tspt-treatment-abbr">{method.abbr}</span>
                      <p>{method.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <SectionDivider />

          <Reveal delay={400}>
            <div className="tspt-shame-flashbacks">
              <h3>Compasiunea în fața flashback-urilor de rușine</h3>
              <p>
                Flashback-urile nu sunt doar vizuale. Există flashback-uri emoționale, în care brusc te inundă rușine, vinovăție sau neputință, fără o amintire vizuală clară. Le-ai putea numi „flashback-uri de rușine".
              </p>
              <p>
                Tratamentul eficient include dezvoltarea unei atitudini de compasiune față de sine în aceste momente. Nu e vorba de „gândire pozitivă". E vorba de a învăța să te tratezi în momentele de vulnerabilitate extremă cu aceeași grijă cu care ai trata pe altcineva care trece prin aceeași situație.
              </p>
            </div>
          </Reveal>

          <Reveal delay={450}>
            <div className="tspt-processing-curve">
              <h3>Curba procesării traumei</h3>
              <p>
                Un lucru important de știut înainte de a începe terapia: procesarea traumei nu e liniară. În primele ședințe, simptomele pot crește temporar, pentru că accesezi conținut pe care l-ai evitat mult timp. Aceasta nu înseamnă că terapia nu funcționează. Înseamnă că procesarea a început.
              </p>
              <div className="tspt-curve-visual">
                <div className="tspt-curve-phase tspt-curve-start">
                  <span className="tspt-curve-label">Faza 1</span>
                  <p>Stabilizare și pregătire</p>
                </div>
                <div className="tspt-curve-arrow">→</div>
                <div className="tspt-curve-phase tspt-curve-peak">
                  <span className="tspt-curve-label">Faza 2</span>
                  <p>Procesare activă (intensitate temporar crescută)</p>
                </div>
                <div className="tspt-curve-arrow">→</div>
                <div className="tspt-curve-phase tspt-curve-end">
                  <span className="tspt-curve-label">Faza 3</span>
                  <p>Integrare și ameliorare</p>
                </div>
              </div>
            </div>
          </Reveal>

          <SectionDivider />

          <Reveal delay={500}>
            <div className="tspt-meds">
              <h3>De ce medicamentele singure nu sunt suficiente</h3>
              <p>
                SSRI-urile (sertralina și paroxetina sunt cele mai studiate) pot reduce intensitatea simptomelor stresului post-traumatic. Dar beneficiile se mențin doar cât iei medicamentul. La oprire, simptomele pot reveni.
              </p>
              <p>
                Motivul: medicamentul reduce activarea emoțională fără să proceseze amintirea traumatică. Amintirea rămâne stocată în aceeași formă. Combinația recomandată de ghidurile clinice: terapia focalizată pe traumă ca tratament de primă linie, cu medicație ca adjuvant dacă simptomele sunt foarte severe sau dacă terapia nu e accesibilă imediat.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CE POȚI FACE ACUM ── */}
      <section className="tspt-section tspt-action" id="ce-poti-face">
        <div className="tspt-container tspt-container-narrow">
          <Reveal>
            <h2>Ce poți face acum</h2>
          </Reveal>
          <Reveal delay={100}>
            <p>Aceste exerciții nu înlocuiesc terapia, dar te pot ajuta să gestionezi momentele dificile și să începi să recâștigi un grad de control.</p>
          </Reveal>

          <div className="tspt-exercises">
            {[
              {
                num: "1",
                title: "Grounding 5-4-3-2-1",
                text: "Când simți că te pierzi în flashback sau că prezentul devine neclar, folosește această tehnică de ancorare senzorială: numește 5 lucruri pe care le vezi, 4 pe care le auzi, 3 pe care le poți atinge, 2 pe care le miroși, 1 pe care îl guști.",
                result: `Nu încerci să „oprești" flashback-ul. Îi oferi creierului tău dovezi senzoriale că ești în prezent, nu în trecut.`,
              },
              {
                num: "2",
                title: "Jurnalul de context",
                text: "De fiecare dată când ai o reacție intensă (flashback, tresărire, anxietate bruscă), notează ce s-a întâmplat chiar înainte. Ce ai văzut, auzit, mirosit? Unde erai? Cu cine? Ce oră era?",
                result: "În 2-3 săptămâni vei începe să observi tipare. Aceste tipare sunt triggerii tăi, și a-i cunoaște e primul pas spre a-i dezactiva.",
              },
              {
                num: "3",
                title: "Containerul mental",
                text: `Imaginează-ți un container solid, cu capac greu, în care poți pune amintirile intruzive când nu ești pregătit să le procesezi. Nu le arunci, nu le distrugi, doar le pui într-un loc sigur pentru moment. „Știu că ești acolo. Mă voi ocupa de tine, dar nu acum."`,
                result: "Aceasta nu e evitare. E amânare deliberată, o abilitate de autoreglare care îți permite să funcționezi în timpul zilei.",
              },
              {
                num: "4",
                title: "Respirația 4-7-8",
                text: "Inspiră pe nas timp de 4 secunde, ține aerul 7 secunde, expiră pe gură timp de 8 secunde. Repetă de 4 ori. Fă asta de 2 ori pe zi, indiferent de cum te simți, nu doar în momente de criză.",
                result: "Expirul prelungit activează sistemul nervos parasimpatic. Cu practică regulată, corpul tău învață o cale de ieșire din starea de alertă.",
              },
              {
                num: "5",
                title: "Mișcarea fizică",
                text: "Stresul post-traumatic blochează energie în corp. Mișcarea fizică o eliberează. Nu trebuie să fie sport intens. O plimbare de 20 de minute, în aer liber, în care ești atent la picioarele tale pe pământ.",
                result: "Mișcarea face ceea ce gândirea nu poate: resetează sistemul nervos și reduce nivelul de cortizol din corp.",
              },
            ].map((ex, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="tspt-exercise">
                  <span className="tspt-exercise-num">{ex.num}</span>
                  <div>
                    <h3>{ex.title}</h3>
                    <p>{ex.text}</p>
                    <p className="tspt-exercise-result">{ex.result}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECIALIST + CTA ── */}
      <section className="tspt-section tspt-help" id="specialist">
        <div className="tspt-container tspt-container-narrow">
          <Reveal>
            <h2>Când merită să cauți un specialist</h2>
          </Reveal>
          <Reveal delay={100}>
            <p>Stresul post-traumatic răspunde foarte bine la terapia specializată. Caută un terapeut cu experiență în traumă dacă:</p>
          </Reveal>

          <Reveal delay={200}>
            <div className="tspt-specialist-signs">
              {[
                "Flashback-urile sau coșmarurile apar de mai mult de o lună",
                "Eviți locuri, persoane sau situații care amintesc de traumă",
                "Somnul e grav afectat de mai mult de 2 săptămâni",
                "Te simți detașat emoțional de oamenii care contează pentru tine",
                "Folosești alcoolul sau alte substanțe ca să faci față",
                "Iritabilitatea sau accesele de furie îți afectează relațiile",
                "Ai gânduri recurente de vinovăție sau rușine legate de ce s-a întâmplat",
                "Funcționarea la muncă sau în viața de zi cu zi e afectată semnificativ",
              ].map((sign, i) => (
                <div key={i} className="tspt-sign">
                  <span className="tspt-sign-check">✓</span>
                  <p>{sign}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="tspt-specialist-cards">
              {[
                { emoji: "🗺️", text: "Un terapeut te ajută să navighezi amintirea traumatică într-un spațiu sigur" },
                { emoji: "🪜", text: "Procesarea se face treptat, la ritmul tău, nu forțat" },
                { emoji: "🔍", text: "Identifici triggerii și înțelegi de ce corpul tău reacționează cum reacționează" },
                { emoji: "🔑", text: `Credințele formate în traumă („e vina mea", „lumea e periculoasă") sunt examinate și modificate` },
                { emoji: "💨", text: "Amintirea traumatică pierde din intensitatea emoțională și devine, în sfârșit, trecut" },
              ].map((card, i) => (
                <div key={i} className="tspt-specialist-card">
                  <span className="tspt-specialist-emoji">{card.emoji}</span>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={500}>
            <div className="tspt-cta-block">
              <h3>Următorul pas</h3>
              <p>Dacă ai ajuns până aici, ai făcut deja ceva important.. ai căutat să înțelegi ce ți se întâmplă. Asta nu e puțin.</p>
              <a href="/programare?din=tspt" className="tspt-cta-primary">Programează o consultație</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="tspt-section tspt-faq" id="faq">
        <div className="tspt-container tspt-container-narrow">
          <Reveal>
            <h2>Întrebări frecvente</h2>
          </Reveal>
          <Reveal delay={150}>
            <div className="tspt-faq-list">
              <FAQ
                question="Pot avea stres post-traumatic dacă trauma mea nu a fost suficient de gravă?"
                answer="Da. Severitatea evenimentului nu prezice severitatea stresului post-traumatic. Ce contează e semnificația subiectivă a evenimentului, resursele pe care le aveai în acel moment, și dacă ai avut sau nu sprijin emoțional după. Nu compara trauma ta cu a altcuiva. Dacă te afectează, merită atenție."
              />
              <FAQ
                question="De ce am stres post-traumatic acum, dacă trauma s-a întâmplat acum mulți ani?"
                answer="Amintirea traumatică nu are etichetă de timp. Poate sta adormită ani de zile și să fie activată de un eveniment din prezent care seamănă senzorial cu trauma originală. Stresul post-traumatic cu debut tardiv nu e neobișnuit și nu înseamnă că inventezi trauma."
              />
              <FAQ
                question="Flashback-urile vor dispărea complet cu tratament?"
                answer="La mulți oameni, da. La alții, flashback-urile devin mult mai rare și mai puțin intense. Ceea ce se schimbă sigur e relația ta cu ele: nu te mai copleșesc, poți reveni la prezent mult mai repede. Amintirea traumei rămâne, dar devine o amintire, nu o retrăire."
              />
              <FAQ
                question="E stres post-traumatic dacă nu am flashback-uri clasice?"
                answer="Da. Stresul post-traumatic nu arată la fel la toată lumea. Unii au flashback-uri vizuale intense. Alții au predominant amorțeală emoțională și detașare. Alții au predominant coșmaruri. Există și un subtip disociativ în care nu simți aproape nimic. Toate sunt forme valide de stres post-traumatic."
              />
              <FAQ
                question="Ar trebui să vorbesc despre traumă cu familia sau prietenii?"
                answer="Depinde. A vorbi despre traumă cu cineva care ascultă cu empatie poate fi util. A vorbi cu cineva care minimizează, dramatizează sau te culpabilizează poate fi dăunător. Procesarea traumei în terapie, cu un profesionist, e locul cel mai sigur. Nu ești obligat să povestești nimănui dacă nu te simți pregătit."
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER: REFERINȚE + DISCLAIMER ── */}
      <footer className="tspt-footer">
        <div className="tspt-container tspt-container-narrow">
          <div className="tspt-references">
            <button
              className="tspt-references-toggle"
              onClick={(e) => {
                const list = (e.currentTarget as HTMLButtonElement).nextElementSibling;
                if (list) list.classList.toggle("tspt-references-open");
                (e.currentTarget as HTMLButtonElement).classList.toggle("tspt-references-toggle-open");
              }}
            >
              <span className="tspt-references-icon">+</span>
              Referințe științifice (12 surse)
            </button>
            <div className="tspt-references-list">
              <p>American Psychiatric Association. (2013). <em>Diagnostic and Statistical Manual of Mental Disorders</em> (5th ed.). APA Publishing.</p>
              <p>van der Kolk, B. A. (2014). <em>The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma.</em> Viking.</p>
              <p>Foa, E. B., Hembree, E. A., &amp; Rothbaum, B. O. (2007). <em>Prolonged Exposure Therapy for PTSD: Emotional Processing of Traumatic Experiences.</em> Oxford University Press.</p>
              <p>Resick, P. A., Monson, C. M., &amp; Chard, K. M. (2017). <em>Cognitive Processing Therapy for PTSD: A Comprehensive Manual.</em> Guilford Press.</p>
              <p>Shapiro, F. (2018). <em>Eye Movement Desensitization and Reprocessing (EMDR) Therapy</em> (3rd ed.). Guilford Press.</p>
              <p>Herman, J. L. (2015). <em>Trauma and Recovery: The Aftermath of Violence.</em> Basic Books.</p>
              <p>Lanius, R. A., Vermetten, E., &amp; Pain, C. (Eds.). (2010). <em>The Impact of Early Life Trauma on Health and Disease.</em> Cambridge University Press.</p>
              <p>Ehlers, A., &amp; Clark, D. M. (2000). A cognitive model of posttraumatic stress disorder. <em>Behaviour Research and Therapy, 38</em>(4), 319-345.</p>
              <p>Brewin, C. R. (2003). <em>Posttraumatic Stress Disorder: Malady or Myth?</em> Yale University Press.</p>
              <p>National Institute for Health and Care Excellence. (2018). <em>Post-traumatic stress disorder.</em> NICE guideline [NG116].</p>
              <p>Yehuda, R. (2002). Post-traumatic stress disorder. <em>New England Journal of Medicine, 346</em>(2), 108-114.</p>
              <p>Cloitre, M., et al. (2011). Treatment of complex PTSD. <em>Journal of Traumatic Stress, 24</em>(6), 615-627.</p>
            </div>
          </div>
          <p className="tspt-disclaimer">
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
.tspt-page {
  font-family: var(--font-body), 'Inter', sans-serif;
  color: var(--color-text, #2C2C2C);
  line-height: 1.75;
  font-size: 17px;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
}

.tspt-page h1, .tspt-page h2, .tspt-page h3 {
  font-family: var(--font-heading), 'Fraunces', serif;
  color: var(--color-primary, #1B2B4B);
  letter-spacing: -0.03em;
  line-height: 1.2;
}

.tspt-page h2 {
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 24px;
}

.tspt-page h3 {
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 12px;
}

.tspt-page p {
  margin-bottom: 16px;
}

/* ─── Layout ─── */
.tspt-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.tspt-container-narrow {
  max-width: 760px;
}

.tspt-section {
  padding: 80px 0;
}

@media (max-width: 767px) {
  .tspt-section { padding: 48px 0; }
}

/* ─── Reveal animation ─── */
.tspt-reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.tspt-reveal-visible {
  opacity: 1;
  transform: translateY(0);
}

/* ─── Pull Quote ─── */
.tspt-pull-quote {
  position: relative;
  margin: 40px 0;
  padding: 32px 32px 32px 40px;
  border-left: 3px solid #C4966C;
  background: rgba(196, 150, 108, 0.04);
  border-radius: 0 12px 12px 0;
}
.tspt-pull-quote-dark {
  background: rgba(196, 150, 108, 0.08);
  border-left-color: #C4966C;
}
.tspt-pull-quote-mark {
  position: absolute;
  top: 16px;
  left: 12px;
  color: #C4966C;
  opacity: 0.15;
}
.tspt-pull-quote p {
  font-family: var(--font-heading), 'Fraunces', serif;
  font-size: 19px;
  line-height: 1.6;
  color: var(--color-primary, #1B2B4B);
  margin-bottom: 0;
  font-weight: 400;
}
.tspt-pull-quote-dark p {
  color: #FAF7F2;
}

/* ─── Stat Callout ─── */
.tspt-stats-row {
  display: flex;
  gap: 20px;
  margin: 32px 0;
}
.tspt-stat {
  flex: 1;
  text-align: center;
  padding: 28px 20px;
  background: var(--color-background, #F5F0E8);
  border-radius: 12px;
  border-top: 3px solid #C4966C;
}
.tspt-stat-dark {
  background: rgba(250, 247, 242, 0.06);
}
.tspt-stat-number {
  display: block;
  font-family: var(--font-heading), 'Fraunces', serif;
  font-size: 40px;
  font-weight: 400;
  color: #C4966C;
  line-height: 1.1;
  margin-bottom: 6px;
}
.tspt-stat-label {
  display: block;
  font-family: var(--font-body), 'Inter', sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: var(--color-primary, #1B2B4B);
  margin-bottom: 4px;
}
.tspt-stat-sublabel {
  display: block;
  font-size: 13px;
  color: var(--color-text-secondary, #5A5A5A);
  line-height: 1.4;
}

@media (max-width: 767px) {
  .tspt-stats-row { flex-direction: column; }
}

/* ─── Section Divider ─── */
.tspt-section-divider {
  display: flex;
  justify-content: center;
  padding: 32px 0;
  color: var(--color-primary, #1B2B4B);
}
.tspt-section-divider-dark {
  color: #FAF7F2;
}

/* ─── Floating TOC (Desktop sidebar) ─── */
.tspt-toc-sidebar {
  position: fixed;
  top: 120px;
  left: max(16px, calc((100vw - 1200px) / 2 - 200px));
  width: 180px;
  z-index: 30;
  background: rgba(253, 250, 245, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 20px 16px;
  border-radius: 12px;
  border: 1px solid rgba(27, 43, 75, 0.06);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
}

.tspt-toc-title {
  font-family: var(--font-body), 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-text-secondary, #5A5A5A);
  margin-bottom: 12px;
}

.tspt-toc-sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tspt-toc-sidebar li {
  margin-bottom: 2px;
}

.tspt-toc-link {
  display: block;
  width: 100%;
  text-align: left;
  padding: 6px 12px;
  font-family: var(--font-body), 'Inter', sans-serif;
  font-size: 13px;
  color: var(--color-text-secondary, #5A5A5A);
  background: none;
  border: none;
  border-left: 2px solid transparent;
  cursor: pointer;
  transition: color 0.2s ease-out, border-color 0.2s ease-out;
  line-height: 1.4;
}
.tspt-toc-link:hover {
  color: var(--color-primary, #1B2B4B);
}
.tspt-toc-active {
  color: var(--color-primary, #1B2B4B);
  border-left-color: var(--color-secondary, #5C7A6A);
  font-weight: 600;
}

@media (max-width: 1440px) {
  .tspt-toc-sidebar { display: none; }
}

/* ─── Mobile TOC FAB ─── */
.tspt-toc-fab {
  display: none;
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 40;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--color-primary, #1B2B4B);
  color: #fff;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(0,0,0,0.2);
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
}
.tspt-toc-fab:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.25);
}
.tspt-toc-fab:active { transform: translateY(0); }

@media (max-width: 1440px) {
  .tspt-toc-fab { display: flex; }
}

/* ─── Mobile TOC overlay ─── */
.tspt-toc-overlay {
  position: fixed;
  inset: 0;
  z-index: 50;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.tspt-toc-mobile {
  background: var(--color-background-white, #FDFAF5);
  border-radius: 16px 16px 0 0;
  padding: 24px 24px 32px;
  width: 100%;
  max-width: 480px;
  max-height: 70vh;
  overflow-y: auto;
}

.tspt-toc-mobile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.tspt-toc-close {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-text-secondary, #5A5A5A);
  padding: 4px;
}

.tspt-toc-mobile ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tspt-toc-mobile .tspt-toc-link {
  font-size: 15px;
  padding: 10px 12px;
}

/* ─── Hero ─── */
.tspt-hero {
  background: linear-gradient(180deg, var(--color-background, #F5F0E8) 0%, #EDE8E0 100%);
  padding-top: 100px;
  padding-bottom: 48px;
}

.tspt-author {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-text-secondary, #5A5A5A);
  margin-bottom: 12px;
}

.tspt-hero-layout {
  display: flex;
  align-items: center;
  gap: 56px;
  margin-bottom: 8px;
}

.tspt-hero-text {
  flex: 1;
}

.tspt-hero-title {
  font-size: 44px;
  font-weight: 400;
  margin-bottom: 20px;
  text-align: left;
  line-height: 1.15;
}

.tspt-hero-illustration {
  flex-shrink: 0;
  width: 260px;
  align-self: center;
}

.tspt-hero-svg {
  width: 100%;
  height: auto;
}

/* SVG animations */
.tspt-fragment-1 { animation: tspt-float 5s ease-in-out infinite; }
.tspt-fragment-2 { animation: tspt-float 5s ease-in-out 1.5s infinite; }
.tspt-fragment-3 { animation: tspt-float 5s ease-in-out 2.5s infinite; }
.tspt-fragment-4 { animation: tspt-float 5s ease-in-out 3.5s infinite; }
@keyframes tspt-float {
  0%, 100% { opacity: 0.06; transform: translateY(0); }
  50% { opacity: 0.12; transform: translateY(-4px); }
}

.tspt-tension-1 { animation: tspt-tension 3s ease-in-out infinite; }
.tspt-tension-2 { animation: tspt-tension 3s ease-in-out 0.5s infinite; }
@keyframes tspt-tension {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.45; }
}

.tspt-shatter-1 { animation: tspt-shatter 4s ease-in-out infinite; }
.tspt-shatter-2 { animation: tspt-shatter 4s ease-in-out 1s infinite; }
.tspt-shatter-3 { animation: tspt-shatter 4s ease-in-out 2s infinite; }
@keyframes tspt-shatter {
  0%, 100% { opacity: 0.1; }
  50% { opacity: 0.3; }
}

.tspt-pulse-1 { animation: tspt-pulse 3s ease-in-out infinite; }
.tspt-pulse-2 { animation: tspt-pulse 3s ease-in-out 0.6s infinite; }
.tspt-pulse-3 { animation: tspt-pulse 3s ease-in-out 1.2s infinite; }
@keyframes tspt-pulse {
  0%, 100% { opacity: 0.08; transform: scale(1); }
  50% { opacity: 0.18; transform: scale(1.04); }
}

.tspt-hero-hook {
  font-size: 15px;
  color: var(--color-text-secondary, #5A5A5A);
  text-align: left;
}

.tspt-link {
  color: var(--color-secondary, #5C7A6A);
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.2s ease-out;
}
.tspt-link:hover { color: #4A6858; }
.tspt-link:focus-visible { outline: 2px solid var(--color-secondary, #5C7A6A); outline-offset: 2px; border-radius: 2px; }

.tspt-hero-divider {
  display: flex;
  justify-content: center;
  margin: 24px 0 32px;
}
.tspt-hero-divider-line {
  display: block;
  width: 60px;
  height: 1px;
  background: rgba(27, 43, 75, 0.15);
}

.tspt-opening p {
  color: var(--color-text, #2C2C2C);
  font-size: 18px;
  line-height: 1.8;
}

.tspt-opening-conclusion {
  margin-top: 24px;
  padding: 24px;
  background: rgba(92, 122, 106, 0.08);
  border-radius: 12px;
  border-left: 3px solid var(--color-secondary, #5C7A6A);
}

@media (max-width: 767px) {
  .tspt-hero { padding-top: 72px; padding-bottom: 40px; }
  .tspt-hero-layout { flex-direction: column; gap: 24px; }
  .tspt-hero-text { text-align: center; }
  .tspt-hero-title { font-size: 34px; text-align: center; }
  .tspt-hero-illustration { width: 200px; }
  .tspt-hero-hook { text-align: center; }
  .tspt-opening p { font-size: 16px; }
}

/* ─── Ce este ─── */
.tspt-what {
  background: var(--color-background-white, #FDFAF5);
}

.tspt-symptom-groups {
  margin: 32px 0;
}

.tspt-groups-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 20px;
}

.tspt-group-card {
  padding: 24px;
  background: var(--color-background, #F5F0E8);
  border-radius: 12px;
  border-top: 3px solid #C4966C;
}

.tspt-group-emoji {
  font-size: 24px;
  display: block;
  margin-bottom: 8px;
}

.tspt-group-card h4 {
  font-family: var(--font-heading), 'Fraunces', serif;
  font-size: 17px;
  color: var(--color-primary, #1B2B4B);
  margin-bottom: 12px;
  font-weight: 500;
}

.tspt-group-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tspt-group-card li {
  font-size: 15px;
  color: var(--color-text, #2C2C2C);
  margin-bottom: 8px;
  padding-left: 16px;
  position: relative;
  line-height: 1.6;
}

.tspt-group-card li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 9px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #C4966C;
  opacity: 0.5;
}

.tspt-group-card li:last-child {
  margin-bottom: 0;
}

.tspt-causes {
  margin: 40px 0;
}

.tspt-causes-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 16px;
}

.tspt-cause-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px 14px;
  background: var(--color-background, #F5F0E8);
  border-radius: 8px;
  font-size: 15px;
  color: var(--color-text, #2C2C2C);
}

.tspt-cause-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-secondary, #5C7A6A);
  flex-shrink: 0;
  margin-top: 8px;
}

@media (max-width: 767px) {
  .tspt-groups-grid { grid-template-columns: 1fr; }
  .tspt-causes-grid { grid-template-columns: 1fr; }
}

/* ─── Ce se întâmplă în creier ─── */
.tspt-brain {
  background: #1E2A3A;
  color: #FAF7F2;
}
.tspt-brain h2 { color: #FAF7F2; }
.tspt-brain h3 { color: #FAF7F2; }
.tspt-brain p { color: rgba(250, 247, 242, 0.85); }

.tspt-insight-box {
  padding: 32px;
  background: rgba(250, 247, 242, 0.06);
  border-radius: 12px;
  border-left: 3px solid #C4966C;
  margin: 32px 0;
}
.tspt-insight-box h3 {
  color: #FAF7F2;
  font-size: 22px;
}

.tspt-insight-box-light {
  background: rgba(27, 43, 75, 0.04);
  border-left-color: var(--color-secondary, #5C7A6A);
}
.tspt-insight-box-light h3 {
  color: var(--color-primary, #1B2B4B);
}
.tspt-insight-box-light p {
  color: var(--color-text, #2C2C2C);
}

.tspt-brain-diagram {
  margin: 32px 0;
}

.tspt-brain-visual {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 24px 0;
}

.tspt-brain-card {
  flex: 1;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 20px;
  border-radius: 12px;
}

.tspt-brain-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.tspt-brain-card strong {
  display: block;
  font-size: 15px;
  color: #FAF7F2;
  margin-bottom: 4px;
}

.tspt-brain-card p {
  font-size: 14px;
  margin-bottom: 0;
  line-height: 1.5;
}

.tspt-brain-amygdala {
  background: rgba(196, 150, 108, 0.12);
  border: 1px solid rgba(196, 150, 108, 0.25);
}

.tspt-brain-cortex {
  background: rgba(92, 122, 106, 0.12);
  border: 1px solid rgba(92, 122, 106, 0.25);
}

.tspt-brain-vs {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tspt-brain-result {
  font-size: 16px;
  margin-top: 8px;
}

.tspt-dissociative {
  padding: 28px;
  background: rgba(250, 247, 242, 0.05);
  border-radius: 12px;
  margin: 32px 0;
  border-left: 3px solid rgba(196, 150, 108, 0.4);
}

@media (max-width: 767px) {
  .tspt-brain-visual { flex-direction: column; }
  .tspt-brain-vs { transform: rotate(90deg); }
}

/* ─── Cum arată ─── */
.tspt-daily {
  background: var(--color-background, #F5F0E8);
}

.tspt-scenes-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 32px;
}

.tspt-scene-card {
  padding: 28px;
  background: var(--color-background-white, #FDFAF5);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(27, 43, 75, 0.04);
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
}
.tspt-scene-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(27, 43, 75, 0.08);
}

.tspt-scene-visual {
  margin-bottom: 16px;
  opacity: 0.8;
}

.tspt-scene-card h3 {
  font-size: 19px;
  margin-bottom: 10px;
  color: var(--color-primary, #1B2B4B);
}

.tspt-scene-main {
  color: var(--color-text, #2C2C2C);
  font-size: 15px;
  margin-bottom: 10px;
  line-height: 1.7;
}

.tspt-scene-detail {
  color: var(--color-text, #2C2C2C);
  font-size: 14px;
  margin-bottom: 0;
  padding-top: 10px;
  border-top: 1px solid rgba(27, 43, 75, 0.06);
  line-height: 1.7;
  opacity: 0.8;
}

@media (max-width: 767px) {
  .tspt-scenes-grid { grid-template-columns: 1fr; }
}

/* ─── De ce nu trece ─── */
.tspt-persist {
  background: #1E2A3A;
  color: #FAF7F2;
}
.tspt-persist h2 { color: #FAF7F2; }
.tspt-persist h3 { color: #FAF7F2; }
.tspt-persist p { color: rgba(250, 247, 242, 0.85); }

.tspt-cycle {
  margin: 40px 0;
}

.tspt-cycle-list {
  list-style: none;
  padding: 0;
  counter-reset: cycle;
}
.tspt-cycle-list li {
  counter-increment: cycle;
  padding: 16px 16px 16px 48px;
  position: relative;
  border-left: 2px solid rgba(196, 150, 108, 0.3);
  margin-left: 16px;
  color: rgba(250, 247, 242, 0.85);
  font-size: 16px;
}
.tspt-cycle-list li::before {
  content: counter(cycle);
  position: absolute;
  left: -14px;
  top: 14px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #C4966C;
  color: #1E2A3A;
  font-family: var(--font-heading), 'Fraunces', serif;
  font-weight: 700;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tspt-cycle-list li strong { color: #FAF7F2; }

.tspt-maintain {
  margin: 40px 0;
}

.tspt-maintain-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 20px;
}

.tspt-maintain-card {
  padding: 24px;
  background: rgba(250, 247, 242, 0.06);
  border-radius: 12px;
  border-top: 2px solid #C4966C;
}

.tspt-maintain-icon {
  font-size: 24px;
  display: block;
  margin-bottom: 8px;
}

.tspt-maintain-card h4 {
  font-family: var(--font-heading), 'Fraunces', serif;
  font-size: 17px;
  color: #FAF7F2;
  margin-bottom: 8px;
  font-weight: 500;
}

.tspt-maintain-card p {
  font-size: 15px;
  margin-bottom: 0;
  line-height: 1.7;
}

@media (max-width: 767px) {
  .tspt-maintain-grid { grid-template-columns: 1fr; }
}

/* ─── Ce vrea psihicul ─── */
.tspt-psyche {
  background: var(--color-background-white, #FDFAF5);
}

.tspt-psyche-intro {
  font-size: 18px;
  margin-bottom: 32px;
}
.tspt-psyche-intro strong {
  color: var(--color-primary, #1B2B4B);
}

.tspt-body-knows {
  margin: 32px 0;
}

.tspt-shame {
  margin: 32px 0;
}

.tspt-case {
  padding: 28px;
  background: rgba(27, 43, 75, 0.04);
  border-radius: 12px;
  margin: 32px 0;
  position: relative;
}

.tspt-case-label {
  font-family: var(--font-body), 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #C4966C;
  margin-bottom: 12px;
}

.tspt-case-key {
  font-family: var(--font-heading), 'Fraunces', serif;
  font-size: 18px;
  color: #C4966C !important;
  margin-bottom: 0;
}

/* ─── Tratament ─── */
.tspt-treatment {
  background: var(--color-background, #F5F0E8);
}

.tspt-treatment-methods {
  margin: 32px 0;
}

.tspt-treatment-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 20px;
}

.tspt-treatment-card {
  padding: 24px;
  background: var(--color-background-white, #FDFAF5);
  border-radius: 12px;
  position: relative;
}

.tspt-treatment-num {
  font-family: var(--font-heading), 'Fraunces', serif;
  font-weight: 700;
  font-size: 36px;
  color: rgba(92, 122, 106, 0.2);
  line-height: 1;
  display: block;
  margin-bottom: 8px;
}

.tspt-treatment-card h4 {
  font-family: var(--font-heading), 'Fraunces', serif;
  font-size: 17px;
  color: var(--color-primary, #1B2B4B);
  margin-bottom: 4px;
  font-weight: 500;
}

.tspt-treatment-abbr {
  display: block;
  font-size: 12px;
  color: var(--color-text-secondary, #5A5A5A);
  margin-bottom: 10px;
  font-style: italic;
}

.tspt-treatment-card p {
  color: var(--color-text, #2C2C2C);
  font-size: 15px;
  margin-bottom: 0;
  line-height: 1.7;
}

.tspt-shame-flashbacks {
  padding: 28px;
  background: var(--color-background-white, #FDFAF5);
  border-radius: 12px;
  border-left: 3px solid var(--color-secondary, #5C7A6A);
  margin: 32px 0;
}
.tspt-shame-flashbacks h3 {
  font-size: 20px;
}

.tspt-processing-curve {
  margin: 40px 0;
  padding: 32px;
  background: var(--color-background-white, #FDFAF5);
  border-radius: 12px;
}

.tspt-curve-visual {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
}

.tspt-curve-phase {
  flex: 1;
  padding: 16px;
  border-radius: 10px;
  text-align: center;
}

.tspt-curve-label {
  font-family: var(--font-body), 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: block;
  margin-bottom: 6px;
}

.tspt-curve-phase p {
  font-size: 14px;
  margin-bottom: 0;
  line-height: 1.4;
}

.tspt-curve-start {
  background: rgba(92, 122, 106, 0.1);
  border: 1px solid rgba(92, 122, 106, 0.2);
}
.tspt-curve-start .tspt-curve-label { color: var(--color-secondary, #5C7A6A); }

.tspt-curve-peak {
  background: rgba(196, 150, 108, 0.1);
  border: 1px solid rgba(196, 150, 108, 0.25);
}
.tspt-curve-peak .tspt-curve-label { color: #C4966C; }

.tspt-curve-end {
  background: rgba(92, 122, 106, 0.15);
  border: 1px solid rgba(92, 122, 106, 0.25);
}
.tspt-curve-end .tspt-curve-label { color: var(--color-secondary, #5C7A6A); }

.tspt-curve-arrow {
  font-size: 18px;
  color: var(--color-text-secondary, #5A5A5A);
  flex-shrink: 0;
  opacity: 0.4;
}

.tspt-meds {
  padding: 28px;
  background: var(--color-background-white, #FDFAF5);
  border-radius: 12px;
  border-left: 3px solid #C4966C;
}
.tspt-meds h3 {
  font-size: 20px;
}
.tspt-meds p {
  color: var(--color-text, #2C2C2C);
  font-size: 16px;
}
.tspt-meds p:last-child { margin-bottom: 0; }

@media (max-width: 767px) {
  .tspt-treatment-grid { grid-template-columns: 1fr; }
  .tspt-curve-visual { flex-direction: column; }
  .tspt-curve-arrow { transform: rotate(90deg); }
}

/* ─── Ce poți face acum ─── */
.tspt-action {
  background: var(--color-background-white, #FDFAF5);
}

.tspt-exercises {
  margin-top: 24px;
}

.tspt-exercise {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  align-items: flex-start;
  padding: 28px;
  background: var(--color-background, #F5F0E8);
  border-radius: 12px;
}

.tspt-exercise-num {
  font-family: var(--font-heading), 'Fraunces', serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 1;
  color: rgba(92, 122, 106, 0.2);
  flex-shrink: 0;
  width: 48px;
  text-align: center;
}

.tspt-exercise h3 {
  font-size: 19px;
  margin-bottom: 6px;
}

.tspt-exercise p {
  color: var(--color-text, #2C2C2C);
  font-size: 16px;
  margin-bottom: 0;
}

.tspt-exercise-result {
  margin-top: 10px !important;
  padding-top: 10px;
  border-top: 1px solid rgba(27, 43, 75, 0.06);
  font-size: 15px !important;
  color: var(--color-secondary, #5C7A6A) !important;
  font-style: italic;
}

/* ─── Specialist + CTA ─── */
.tspt-help {
  background: var(--color-background, #F5F0E8);
}

.tspt-specialist-signs {
  margin: 24px 0 32px;
}

.tspt-sign {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 12px 0;
  border-bottom: 1px solid rgba(27, 43, 75, 0.06);
}
.tspt-sign:last-child { border-bottom: none; }

.tspt-sign-check {
  color: var(--color-secondary, #5C7A6A);
  font-weight: 700;
  font-size: 16px;
  flex-shrink: 0;
  margin-top: 2px;
}

.tspt-sign p {
  color: var(--color-text, #2C2C2C);
  margin-bottom: 0;
}

.tspt-specialist-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin: 24px 0 32px;
}

.tspt-specialist-card {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 20px;
  background: var(--color-background-white, #FDFAF5);
  border-radius: 10px;
}

.tspt-specialist-emoji {
  font-size: 22px;
  flex-shrink: 0;
  margin-top: 2px;
}

.tspt-specialist-card p {
  color: var(--color-text, #2C2C2C);
  margin-bottom: 0;
  font-size: 15px;
  line-height: 1.6;
}

.tspt-cta-block {
  text-align: center;
  padding: 48px 32px;
  background: var(--color-primary, #1B2B4B);
  border-radius: 16px;
  margin-top: 16px;
}

.tspt-cta-block h3 {
  color: #FAF7F2;
  font-size: 28px;
  margin-bottom: 12px;
}

.tspt-cta-block p {
  color: rgba(250, 247, 242, 0.8);
  margin-bottom: 24px;
}

.tspt-cta-primary {
  display: inline-block;
  padding: 14px 36px;
  background: var(--color-secondary, #5C7A6A);
  color: #ffffff;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  transition: background 0.2s ease-out, transform 0.2s ease-out;
}
.tspt-cta-primary:hover { background: #4A6858; transform: translateY(-1px); }
.tspt-cta-primary:focus-visible { outline: 2px solid #fff; outline-offset: 2px; }
.tspt-cta-primary:active { transform: translateY(0); }

@media (max-width: 767px) {
  .tspt-specialist-cards { grid-template-columns: 1fr; }
}

/* ─── FAQ ─── */
.tspt-faq {
  background: var(--color-background-white, #FDFAF5);
}

.tspt-faq-list {
  margin-top: 24px;
}

.tspt-faq-item {
  border-bottom: 1px solid rgba(27, 43, 75, 0.08);
}

.tspt-faq-question {
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
  color: var(--color-primary, #1B2B4B);
  text-align: left;
  gap: 16px;
  transition: color 0.2s ease-out;
}
.tspt-faq-question:hover { color: var(--color-secondary, #5C7A6A); }
.tspt-faq-question:focus-visible { outline: 2px solid var(--color-secondary, #5C7A6A); outline-offset: 2px; border-radius: 2px; }

.tspt-faq-chevron {
  flex-shrink: 0;
  transition: transform 0.3s ease-out;
  color: var(--color-text-secondary, #5A5A5A);
}
.tspt-faq-chevron-open {
  transform: rotate(180deg);
}

.tspt-faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}
.tspt-faq-answer-open {
  max-height: 400px;
}
.tspt-faq-answer p {
  padding: 0 0 20px;
  color: var(--color-text, #2C2C2C);
  font-size: 16px;
  line-height: 1.7;
}

/* ─── Footer ─── */
.tspt-footer {
  background: var(--color-background, #F5F0E8);
  padding: 48px 24px;
}

.tspt-references {
  margin-bottom: 32px;
}

.tspt-references-toggle {
  display: flex;
  align-items: center;
  gap: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-family: var(--font-heading), 'Fraunces', serif;
  font-size: 20px;
  font-weight: 500;
  color: var(--color-primary, #1B2B4B);
  padding: 0;
  transition: color 0.2s ease-out;
}
.tspt-references-toggle:hover { color: var(--color-secondary, #5C7A6A); }
.tspt-references-toggle:focus-visible { outline: 2px solid var(--color-secondary, #5C7A6A); outline-offset: 4px; border-radius: 2px; }

.tspt-references-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: var(--color-primary, #1B2B4B);
  color: #FAF7F2;
  font-size: 18px;
  font-weight: 600;
  font-family: var(--font-body), sans-serif;
  transition: transform 0.3s ease-out;
}

.tspt-references-toggle-open .tspt-references-icon {
  transform: rotate(45deg);
}

.tspt-references-list {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease-out;
  padding-left: 38px;
}
.tspt-references-open {
  max-height: 5000px;
}

.tspt-references-list p {
  font-size: 14px;
  line-height: 1.6;
  color: var(--color-text-secondary, #5A5A5A);
  margin-bottom: 12px;
  padding-top: 12px;
}
.tspt-references-list p:first-child {
  padding-top: 20px;
}
.tspt-references-list em {
  font-style: italic;
}

.tspt-disclaimer {
  font-size: 13px;
  color: var(--color-text-secondary, #5A5A5A);
  text-align: center;
}
`;
