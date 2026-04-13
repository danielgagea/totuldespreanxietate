"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/* ============================================================
   ANXIETATE GENERALIZATĂ (TAG) — Landing Page
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
    <div className="tag-faq-item">
      <button
        onClick={() => setOpen(!open)}
        className="tag-faq-question"
        aria-expanded={open}
      >
        <span>{question}</span>
        <svg
          className={`tag-faq-chevron ${open ? "tag-faq-chevron-open" : ""}`}
          width="20" height="20" viewBox="0 0 20 20" fill="none"
        >
          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div className={`tag-faq-answer ${open ? "tag-faq-answer-open" : ""}`}>
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
      className={`tag-reveal ${visible ? "tag-reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// ─── Pull Quote component ───
function PullQuote({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <blockquote className={`tag-pull-quote ${dark ? "tag-pull-quote-dark" : ""}`}>
      <svg className="tag-pull-quote-mark" width="32" height="24" viewBox="0 0 32 24" fill="none" aria-hidden="true">
        <path d="M0 24V14.4C0 10.4 0.8 7.2 2.4 4.8C4 2.4 6.4 0.8 9.6 0L11.2 3.2C9.2 3.8 7.6 4.8 6.4 6.4C5.2 8 4.6 9.8 4.4 11.8H8V24H0ZM18 24V14.4C18 10.4 18.8 7.2 20.4 4.8C22 2.4 24.4 0.8 27.6 0L29.2 3.2C27.2 3.8 25.6 4.8 24.4 6.4C23.2 8 22.6 9.8 22.4 11.8H26V24H18Z" fill="currentColor"/>
      </svg>
      <p>{children}</p>
    </blockquote>
  );
}

// ─── Stat Callout component ───
function StatCallout({ number, label, sublabel, dark = false }: { number: string; label: string; sublabel?: string; dark?: boolean }) {
  return (
    <div className={`tag-stat ${dark ? "tag-stat-dark" : ""}`}>
      <span className="tag-stat-number">{number}</span>
      <span className="tag-stat-label">{label}</span>
      {sublabel && <span className="tag-stat-sublabel">{sublabel}</span>}
    </div>
  );
}

// ─── Section Divider ───
function SectionDivider({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`tag-section-divider ${dark ? "tag-section-divider-dark" : ""}`} aria-hidden="true">
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
  { id: "cum-arata", label: "Cum arată în viața reală" },
  { id: "mecanismul", label: "De ce nu se oprește" },
  { id: "meta-worry", label: "Meta-worry" },
  { id: "incertitudine", label: "Intoleranța la incertitudine" },
  { id: "comportamente", label: "Comportamente de siguranță" },
  { id: "psihodinamic", label: "Ce ascunde îngrijorarea" },
  { id: "tratament", label: "Tratament" },
  { id: "ce-poti-face", label: "Ce poți face acum" },
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
      <nav className="tag-toc-sidebar" aria-label="Cuprins">
        <p className="tag-toc-title">Cuprins</p>
        <ul>
          {tocSections.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={`tag-toc-link ${activeId === id ? "tag-toc-active" : ""}`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile floating TOC button */}
      <button
        className="tag-toc-fab"
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
        <div className="tag-toc-overlay" onClick={() => setTocOpen(false)}>
          <nav className="tag-toc-mobile" onClick={e => e.stopPropagation()}>
            <div className="tag-toc-mobile-header">
              <p className="tag-toc-title">Cuprins</p>
              <button onClick={() => setTocOpen(false)} className="tag-toc-close" aria-label="Închide">
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
                    className={`tag-toc-link ${activeId === id ? "tag-toc-active" : ""}`}
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

export default function AnxietateGeneralizataPage() {
  return (
    <main className="tag-page">
      <style>{pageStyles}</style>
      <FloatingTOC />

      {/* ── HERO ── */}
      <section className="tag-hero">
        <div className="tag-container tag-container-narrow">
          <Reveal>
            <p className="tag-author">De Daniel Gagea, psiholog clinician, psihoterapeut</p>
          </Reveal>

          <div className="tag-hero-layout">
            <div className="tag-hero-text">
              <Reveal delay={200}>
                <h1 className="tag-hero-title">Anxietatea generalizată</h1>
              </Reveal>
              <Reveal delay={400}>
                <p className="tag-hero-hook">
                  Trăiești cu asta de mult timp?{" "}
                  <a href="#ce-poti-face" className="tag-link">Mergi direct la Ce poți face acum</a>
                </p>
              </Reveal>
            </div>

            <Reveal delay={300}>
              <div className="tag-hero-illustration">
                <svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="tag-hero-svg">
                  <rect x="40" y="200" width="240" height="24" rx="6" fill="#1B2B4B" opacity="0.1"/>
                  <rect x="30" y="190" width="60" height="36" rx="8" fill="#1B2B4B" opacity="0.08"/>
                  <circle cx="160" cy="130" r="22" fill="#1B2B4B" opacity="0.35"/>
                  <path d="M160 152 C142 152 128 168 128 188 L128 200 L192 200 L192 188 C192 168 178 152 160 152Z" fill="#1B2B4B" opacity="0.25"/>
                  <path d="M138 140 Q130 125 138 118" stroke="#1B2B4B" strokeWidth="3" strokeLinecap="round" opacity="0.3"/>
                  <path d="M182 140 Q190 125 182 118" stroke="#1B2B4B" strokeWidth="3" strokeLinecap="round" opacity="0.3"/>
                  <path d="M100 80 Q85 75 88 60 Q92 45 108 48 Q120 50 118 65" stroke="#C4966C" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" className="tag-spiral-1"/>
                  <path d="M220 70 Q235 65 232 50 Q228 35 212 38 Q200 40 202 55" stroke="#C4966C" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.4" className="tag-spiral-2"/>
                  <text x="65" y="105" fill="#C4966C" opacity="0.45" fontSize="11" fontWeight="500" className="tag-float-1">banii</text>
                  <text x="215" y="95" fill="#C4966C" opacity="0.4" fontSize="11" fontWeight="500" className="tag-float-2">sănătatea</text>
                  <text x="80" y="55" fill="#C4966C" opacity="0.35" fontSize="10" fontWeight="500" className="tag-float-3">copiii</text>
                  <text x="205" y="45" fill="#C4966C" opacity="0.35" fontSize="10" fontWeight="500" className="tag-float-1">viitorul</text>
                  <text x="140" y="70" fill="#C4966C" opacity="0.3" fontSize="10" fontWeight="500" className="tag-float-2">munca</text>
                  <circle cx="260" cy="100" r="18" fill="none" stroke="#1B2B4B" strokeWidth="1.5" opacity="0.15"/>
                  <line x1="260" y1="100" x2="260" y2="88" stroke="#1B2B4B" strokeWidth="1.5" opacity="0.2"/>
                  <line x1="260" y1="100" x2="268" y2="100" stroke="#1B2B4B" strokeWidth="1.5" opacity="0.2"/>
                  <text x="248" y="135" fill="#1B2B4B" opacity="0.15" fontSize="10" fontWeight="600">4:00</text>
                  <circle cx="160" cy="130" r="35" fill="none" stroke="#C4966C" strokeWidth="1" opacity="0.15" className="tag-pulse-1"/>
                  <circle cx="160" cy="130" r="48" fill="none" stroke="#C4966C" strokeWidth="0.8" opacity="0.1" className="tag-pulse-2"/>
                </svg>
              </div>
            </Reveal>
          </div>

          <Reveal delay={800}>
            <div className="tag-hero-divider" aria-hidden="true">
              <span className="tag-hero-divider-line" />
            </div>
          </Reveal>
          <Reveal delay={900}>
            <div className="tag-opening">
              <p>
                Te-ai trezit la 4 dimineața cu gândurile deja pornite.. banii, sănătatea, copiii, munca, viitorul. Nu s-a întâmplat nimic concret. Nu e nicio criză. Dar mintea ta rulează scenarii, unul după altul, ca un motor care nu se oprește.
              </p>
              <p>
                Te ridici din pat obosit, deși ai dormit 7 ore. Tensiune în umeri, în maxilar, în stomac. O stare de fond pe care nu o poți numi exact.. nu e panică, nu e tristețe, e ceva între neliniște și vigilență permanentă.
              </p>
              <p>
                Lumea din jur pare relaxată. Partenerul tău doarme liniștit. Colegii tăi nu par să aibă aceleași griji. Și te întrebi de ce tu nu poți, pur și simplu, să te oprești din gândit.
              </p>
              <p className="tag-opening-conclusion">
                <strong>Dacă te recunoști, nu ești stresat și nu ești prea sensibil.</strong> Ce trăiești se numește tulburare de anxietate generalizată. Și în acest ghid vei înțelege de ce mintea ta nu se oprește, de ce îngrijorarea e mai complicată decât crezi, și ce funcționează ca tratament.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CE ESTE ── */}
      <section className="tag-section tag-what" id="ce-este">
        <div className="tag-container tag-container-narrow">
          <Reveal>
            <h2>Ce este anxietatea generalizată</h2>
          </Reveal>
          <Reveal delay={150}>
            <p>
              Tulburarea de anxietate generalizată (TAG) este o condiție psihologică definită prin îngrijorare excesivă și persistentă legată de mai multe domenii ale vieții.. sănătate, bani, muncă, relații, viitor.. pe care persoana o percepe ca dificil de controlat.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="tag-stats-row">
              <StatCallout number="5-6%" label="din populație" sublabel="pe parcursul vieții" />
              <StatCallout number="2x" label="mai frecventă" sublabel="la femei decât la bărbați" />
            </div>
          </Reveal>

          <Reveal delay={250}>
            <div className="tag-distinction">
              <div className="tag-distinction-card">
                <h3>Nu e stres</h3>
                <p>Stresul are o cauză identificabilă și se oprește când cauza dispare. Anxietatea generalizată nu are o cauză specifică. Sau, mai precis, cauza se schimbă.. azi e sănătatea, mâine sunt banii, poimâine e relația.</p>
                <p className="tag-distinction-key">Conținutul variază. Mecanismul rămâne același.</p>
              </div>
              <div className="tag-distinction-card">
                <h3>Nu e a fi anxios din fire</h3>
                <p>E o tulburare cu mecanisme specifice, identificabile și tratabile.. nu personalitatea ta, ci ceva ce se întâmplă minții tale.</p>
              </div>
            </div>
          </Reveal>

          <SectionDivider />

          <Reveal delay={300}>
            <div className="tag-feel">
              <h3>Cum se simte de fapt</h3>
              <p>Anxietatea generalizată nu vine în episoade intense, ca atacul de panică. E mai degrabă un fond permanent de neliniște, ca un motor care nu se oprește niciodată complet.</p>
              <div className="tag-symptoms-grid">
                {[
                  { icon: "💪", label: "Tensiune musculară", detail: "cronică, mai ales în umeri, maxilar și gât" },
                  { icon: "🔋", label: "Oboseală persistentă", detail: "chiar și după somn aparent suficient" },
                  { icon: "🧠", label: "Dificultăți de concentrare", detail: "senzația de minte goală sau supraîncărcată" },
                  { icon: "😤", label: "Iritabilitate", detail: "disproporționată față de situație" },
                  { icon: "🌙", label: "Tulburări de somn", detail: "adormi greu, te trezești des, somnul nu e odihnitor" },
                  { icon: "⚡", label: "Neliniște fizică", detail: "senzația că nu poți sta locului" },
                ].map((s, i) => (
                  <div key={i} className="tag-symptom">
                    <span className="tag-symptom-icon">{s.icon}</span>
                    <div>
                      <strong>{s.label}</strong>
                      <span className="tag-symptom-detail"> {s.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <PullQuote>
              Multe persoane cu anxietate generalizată ajung mai întâi la medic, nu la psiholog. Vin cu dureri de cap, probleme gastrointestinale, tensiune musculară. Fac analize. Totul e în parametri normali.
            </PullQuote>
          </Reveal>
        </div>
      </section>

      {/* ── CUM ARATĂ ÎN VIAȚA REALĂ ── */}
      <section className="tag-section tag-daily" id="cum-arata">
        <div className="tag-container tag-container-narrow">
          <Reveal>
            <h2>Cum arată anxietatea generalizată în viața reală</h2>
          </Reveal>

          <div className="tag-scenes-grid">
            {[
              {
                time: "Dimineața",
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="28" r="12" fill="#C4966C" opacity="0.15"/>
                    <path d="M24 16V12M32 20L35 17M16 20L13 17M36 28H40M8 28H12" stroke="#C4966C" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
                    <path d="M14 36H34" stroke="#1B2B4B" strokeWidth="1.5" strokeLinecap="round" opacity="0.2"/>
                  </svg>
                ),
                text: "Alarmele sună și gândurile pornesc înainte să deschizi ochii.. nu ceva concret, mai degrabă o stare difuză de anticipare că ziua va fi grea.",
                detail: "Verifici telefonul imediat, căutând semne că totul e ok. Niciun email urgent. Nicio veste proastă. Și totuși, neliniștea nu scade.",
              },
              {
                time: "La muncă",
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="10" y="16" width="28" height="20" rx="3" fill="#1B2B4B" opacity="0.08"/>
                    <rect x="14" y="20" width="12" height="2" rx="1" fill="#C4966C" opacity="0.4"/>
                    <rect x="14" y="24" width="20" height="2" rx="1" fill="#C4966C" opacity="0.25"/>
                    <rect x="14" y="28" width="16" height="2" rx="1" fill="#C4966C" opacity="0.15"/>
                    <path d="M32 20C34 18 36 18 38 20" stroke="#C4966C" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
                  </svg>
                ),
                text: "Te concentrezi greu, deși ești la fel de capabil ca oricând.. doar că o parte din mintea ta rulează scenarii în fundal.",
                detail: "Analizezi dacă ai trimis emailul corect, ce a vrut să spună șeful cu un anumit ton. Colegii tăi par relaxați. Tu faci aceeași muncă dar cu de 3 ori mai mult efort mental.",
              },
              {
                time: "Seara",
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M28 14C22 14 18 18 18 24C18 30 22 34 28 34C24 32 22 28 22 24C22 20 24 16 28 14Z" fill="#1B2B4B" opacity="0.15"/>
                    <circle cx="32" cy="16" r="1.5" fill="#C4966C" opacity="0.3"/>
                    <circle cx="36" cy="22" r="1" fill="#C4966C" opacity="0.2"/>
                    <circle cx="14" cy="20" r="1" fill="#C4966C" opacity="0.2"/>
                  </svg>
                ),
                text: "Ar trebui să te relaxezi. Dar relaxarea înseamnă că nu mai ai ce ocupa mintea. Și când mintea e liberă, grijile vin.",
                detail: "Poate deschizi telefonul ca să le ții la distanță. Poate pui un serial. Orice ca să nu rămâi singur cu gândurile.",
              },
              {
                time: "În relații",
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="20" cy="22" r="6" fill="#1B2B4B" opacity="0.12"/>
                    <circle cx="32" cy="22" r="6" fill="#1B2B4B" opacity="0.08"/>
                    <path d="M18 32C20 28 24 26 26 26C28 26 32 28 34 32" stroke="#C4966C" strokeWidth="1.5" strokeLinecap="round" opacity="0.2"/>
                    <path d="M26 14L28 12L30 14" stroke="#C4966C" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
                    <path d="M24 16L26 14L28 16" stroke="#C4966C" strokeWidth="1" strokeLinecap="round" opacity="0.2"/>
                  </svg>
                ),
                text: "Partenerul tău nu a răspuns la mesaj de 2 ore. Mintea ta a generat deja 4 scenarii catastrofice.",
                detail: "Sau partenerul tău e bine, dar tu îl întrebi de 3 ori dacă e sigur, pentru că prima confirmare nu a fost suficientă.",
              },
              {
                time: "Somnul",
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <ellipse cx="24" cy="30" rx="14" ry="6" fill="#1B2B4B" opacity="0.06"/>
                    <path d="M16 28C16 24 20 20 24 20C28 20 32 24 32 28" stroke="#1B2B4B" strokeWidth="1.5" opacity="0.12"/>
                    <text x="28" y="18" fill="#C4966C" opacity="0.4" fontSize="10" fontWeight="600">Z</text>
                    <text x="32" y="14" fill="#C4966C" opacity="0.3" fontSize="8" fontWeight="600">Z</text>
                    <text x="35" y="11" fill="#C4966C" opacity="0.2" fontSize="6" fontWeight="600">Z</text>
                  </svg>
                ),
                text: "Adormi greu pentru că mintea nu se oprește. Te trezești la 3-4 dimineața cu gândurile deja pe pilot automat.",
                detail: "Dimineața ești la fel de obosit ca seara. Oboseala face îngrijorarea mai intensă, și îngrijorarea face somnul mai greu.",
              },
              {
                time: "Corpul",
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M24 12V36" stroke="#1B2B4B" strokeWidth="1.5" opacity="0.1"/>
                    <circle cx="24" cy="14" r="4" fill="#1B2B4B" opacity="0.12"/>
                    <path d="M18 22L24 18L30 22" stroke="#C4966C" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
                    <path d="M20 28L24 36L28 28" stroke="#C4966C" strokeWidth="1.5" strokeLinecap="round" opacity="0.2"/>
                    <circle cx="24" cy="24" r="10" fill="none" stroke="#C4966C" strokeWidth="1" opacity="0.12" strokeDasharray="3 3"/>
                  </svg>
                ),
                text: "Tensiune musculară cronică pe care nici nu o mai observi, pentru că a devenit normală.. maxilarul încleștat, umerii ridicați, stomacul strâns.",
                detail: "Corpul tău trăiește într-o stare permanentă de pregătire pentru pericol care consumă resurse fizice reale.",
              },
            ].map((scene, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="tag-scene-card">
                  <div className="tag-scene-visual">
                    {scene.icon}
                  </div>
                  <h3>{scene.time}</h3>
                  <p className="tag-scene-main">{scene.text}</p>
                  <p className="tag-scene-detail">{scene.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── MECANISMUL ÎNGRIJORĂRII ── */}
      <section className="tag-section tag-mechanism" id="mecanismul">
        <div className="tag-container tag-container-narrow">
          <Reveal>
            <h2>De ce mintea ta nu se oprește</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="tag-mechanism-subtitle">Mecanismul îngrijorării</p>
          </Reveal>

          <Reveal delay={200}>
            <div className="tag-insight-box">
              <h3>Nu e ce crezi.. nu simți prea mult, ci eviti să simți</h3>
              <p>
                Cercetătorul Thomas Borkovec a descoperit că îngrijorarea cronică nu apare pentru că simți prea mult, ci tocmai pentru că mintea ta încearcă să evite să simtă.
              </p>
              <p>
                Gândește-te la ce se întâmplă când te îngrijorezi de sănătate. Rulezi în cap fraze vagi despre posibile probleme, despre ce ar putea să nu fie în regulă cu tine. Sunt gânduri, nu imagini. Și tocmai de asta nu simți nimic foarte intens.. doar acea neliniște difuză de fond.
              </p>
            </div>
          </Reveal>

          <Reveal delay={250}>
            <div className="tag-mechanism-visual">
              <div className="tag-mech-flow">
                <div className="tag-mech-node tag-mech-avoid">
                  <span className="tag-mech-node-icon">✕</span>
                  <div>
                    <strong>Vizualizare concretă</strong>
                    <p>Imagini clare, emoție puternică</p>
                  </div>
                </div>
                <div className="tag-mech-center">
                  <span className="tag-mech-arrow tag-mech-arrow-left">←</span>
                  <span className="tag-mech-arrow-label">evită</span>
                  <div className="tag-mech-brain">Mintea ta</div>
                  <span className="tag-mech-arrow-label">preferă</span>
                  <span className="tag-mech-arrow tag-mech-arrow-right">→</span>
                </div>
                <div className="tag-mech-node tag-mech-prefer">
                  <span className="tag-mech-node-icon">✓</span>
                  <div>
                    <strong>Gânduri vagi, difuze</strong>
                    <p>Fraze abstracte, neliniște ușoară</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <PullQuote dark>
              Îngrijorarea funcționează ca un anestezic emoțional. Mintea ta preferă să ruleze scenarii vagi la nesfârșit decât să coboare în emoția reală de dedesubt.
            </PullQuote>
          </Reveal>

          <SectionDivider dark />

          <Reveal delay={350}>
            <div className="tag-cycle">
              <h3>Cercul vicios al anxietății generalizate</h3>
              <ol className="tag-cycle-list">
                <li><strong>Un stimul ambiguu apare</strong> (un email neclar, o senzație fizică, o veste)</li>
                <li><strong>Mintea îl interpretează ca potențial pericol</strong> (ar putea fi ceva grav)</li>
                <li><strong>Îngrijorarea pornește</strong> (scenarii abstracte despre ce ar putea să meargă prost)</li>
                <li><strong>Îngrijorarea reduce temporar activarea emoțională</strong></li>
                <li><strong>Creierul învață că îngrijorarea funcționează</strong></li>
                <li><strong>Îngrijorarea devine strategie automată</strong></li>
                <li><strong>Procesarea emoțională reală nu se produce</strong> niciodată</li>
                <li><strong>Problema subiacentă rămâne nerezolvată</strong> → mai multă îngrijorare</li>
              </ol>
            </div>
          </Reveal>

          <SectionDivider dark />

          <Reveal delay={400}>
            <div className="tag-productive">
              <h3>Productivă vs. neproductivă: nu toate grijile sunt la fel</h3>
              <div className="tag-compare-grid">
                <div className="tag-compare-col tag-compare-good">
                  <h4>Îngrijorare productivă</h4>
                  <ul>
                    <li>Focalizată pe o problemă concretă și imediată</li>
                    <li>Ai un grad de control asupra ei</li>
                    <li>Conduce la o acțiune pe care o poți face acum</li>
                    <li>Are un punct final natural</li>
                  </ul>
                </div>
                <div className="tag-compare-col tag-compare-bad">
                  <h4>Îngrijorare neproductivă</h4>
                  <ul>
                    <li>Focalizată pe scenarii abstracte și îndepărtate</li>
                    <li>Nu ai control asupra ei</li>
                    <li>Se învârte în cerc, nu conduce la nicio acțiune</li>
                    <li>Nu are punct final</li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={450}>
            <div className="tag-test-box">
              <h4>Testul celor 4 întrebări</h4>
              <p>Când te prinzi că te îngrijorezi, pune-ți aceste întrebări:</p>
              <div className="tag-test-questions">
                {[
                  { num: "1", q: "Problema e concretă sau abstractă?" },
                  { num: "2", q: "Am vreun grad de control asupra ei?" },
                  { num: "3", q: "Pot face ceva acum sau în zilele următoare?" },
                  { num: "4", q: "Mă gândesc la soluții sau la catastrofe?" },
                ].map((item, i) => (
                  <div key={i} className="tag-test-q">
                    <span className="tag-test-q-num">{item.num}</span>
                    <p>{item.q}</p>
                  </div>
                ))}
              </div>
              <div className="tag-test-outcomes">
                <div className="tag-test-outcome tag-test-productive">
                  <span className="tag-test-outcome-label">Concretă, da, da, soluții</span>
                  <p>Ai o îngrijorare productivă. Acționează.</p>
                </div>
                <div className="tag-test-outcome tag-test-unproductive">
                  <span className="tag-test-outcome-label">Abstractă, nu, nu, catastrofe</span>
                  <p>Ai o îngrijorare neproductivă. Trebuie tratată diferit.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── META-WORRY ── */}
      <section className="tag-section tag-meta" id="meta-worry">
        <div className="tag-container tag-container-narrow">
          <Reveal>
            <h2>Îngrijorarea despre îngrijorare</h2>
            <p className="tag-meta-intro">
              Aceasta e o particularitate a anxietății generalizate care nu există în nicio altă tulburare de anxietate. Și e adesea motorul principal care menține totul în mișcare.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="tag-beliefs">
              <h3>Credințele contradictorii despre îngrijorare</h3>
              <p>Persoanele cu anxietate generalizată dețin simultan două seturi de credințe care se contrazic:</p>
              <div className="tag-beliefs-grid">
                <div className="tag-belief-col tag-belief-pos">
                  <h4>Credințe pozitive</h4>
                  <ul>
                    <li>Dacă mă îngrijorez, sunt pregătit</li>
                    <li>Îngrijorarea mă ajută să evit surprizele</li>
                    <li>Dacă nu m-aș îngrijora, ar fi neglijent</li>
                    <li>Îngrijorarea arată că îmi pasă</li>
                  </ul>
                </div>
                <div className="tag-belief-col tag-belief-neg">
                  <h4>Credințe negative</h4>
                  <ul>
                    <li>Îngrijorarea mea e incontrolabilă</li>
                    <li>Îmi va face rău fizic</li>
                    <li>O să mă înnebunească</li>
                    <li>Nu sunt în stare să o opresc</li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>

          <SectionDivider />

          <Reveal delay={300}>
            <div className="tag-meta-examples">
              <h3>Cum funcționează meta-worry</h3>
              <div className="tag-meta-example-cards">
                <div className="tag-meta-example">
                  <div className="tag-meta-example-icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect x="6" y="8" width="20" height="16" rx="2" fill="#1B2B4B" opacity="0.08"/>
                      <rect x="10" y="12" width="12" height="2" rx="1" fill="#C4966C" opacity="0.3"/>
                      <rect x="10" y="16" width="8" height="2" rx="1" fill="#C4966C" opacity="0.2"/>
                    </svg>
                  </div>
                  <div>
                    <strong>Studentul</strong>
                    <p>Studentul nu se oprește la îngrijorarea despre examen.. se îngrijorează că îngrijorarea va fi atât de intensă încât nu va dormi, nu va putea studia, va pica din cauza anxietății, nu din cauza materiei.</p>
                  </div>
                </div>
                <div className="tag-meta-example">
                  <div className="tag-meta-example-icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <circle cx="16" cy="12" r="5" fill="#1B2B4B" opacity="0.08"/>
                      <circle cx="22" cy="18" r="3" fill="#C4966C" opacity="0.12"/>
                      <path d="M12 22C14 20 18 20 20 22" stroke="#C4966C" strokeWidth="1.5" strokeLinecap="round" opacity="0.2"/>
                    </svg>
                  </div>
                  <div>
                    <strong>Mama</strong>
                    <p>Mama nu se oprește la îngrijorarea despre sănătatea copilului.. se îngrijorează că anxietatea ei excesivă îl va afecta pe copil, că fiul va simți tensiunea, că îi transmite fricile.</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={350}>
            <PullQuote>
              Meta-worry e motorul care ține motorul pornit. Și e exact ce trebuie adresat în tratament.
            </PullQuote>
          </Reveal>

          <SectionDivider />

          <Reveal delay={400}>
            <div className="tag-exercise-inline">
              <div className="tag-exercise-inline-header">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                  <circle cx="14" cy="14" r="12" fill="#5C7A6A" opacity="0.1"/>
                  <path d="M10 14L13 17L18 11" stroke="#5C7A6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3>Exercițiu de separare</h3>
              </div>
              <p>Când observi că te îngrijorezi, pune-ți două întrebări:</p>
              <div className="tag-exercise-levels">
                <div className="tag-exercise-level">
                  <span className="tag-level-label">Nivel 1</span>
                  <p>Despre ce mă îngrijorez? (problema concretă)</p>
                </div>
                <div className="tag-exercise-level">
                  <span className="tag-level-label">Nivel 2</span>
                  <p>Ce cred despre faptul că mă îngrijorez? (meta-convingerea)</p>
                </div>
              </div>
              <p className="tag-exercise-note">
                Apoi întreabă-te dacă îngrijorarea ta e cu adevărat incontrolabilă, dacă ai reușit vreodată să te oprești. De cele mai multe ori, meta-convingerile nu rezistă la examinare directă.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── INTOLERANȚA LA INCERTITUDINE ── */}
      <section className="tag-section tag-uncertainty" id="incertitudine">
        <div className="tag-container tag-container-narrow">
          <Reveal>
            <h2>Intoleranța la incertitudine</h2>
            <p className="tag-uncertainty-subtitle">Nucleul real al anxietății generalizate</p>
          </Reveal>
          <Reveal delay={100}>
            <p>
              Se crede adesea că anxietatea generalizată e despre griji, când de fapt nucleul real e incapacitatea de a tolera faptul că nu știi.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p>
              Luni te îngrijorezi de sănătate. Marți de bani. Miercuri de relație. Joi de copii. Vineri de carieră. Conținutul se schimbă constant, dar mecanismul e identic: nu poți tolera incertitudinea.
            </p>
            <p>
              Persoanele cu anxietate generalizată nu au mai multă anxietate decât alții pentru că se confruntă cu mai multe pericole, ci pentru că tolerează mai puțin incertitudinea.
            </p>
          </Reveal>

          <SectionDivider />

          <Reveal delay={300}>
            <div className="tag-insight-box">
              <h3>Îngrijorarea ca soluție la incertitudine</h3>
              <p>
                Îngrijorarea cronică e o tentativă de a elimina incertitudinea din viață, convingerea că dacă te gândești la toate scenariile posibile nu vei fi surprins. Dar incertitudinea nu poate fi eliminată. E parte din viață.
              </p>
              <p className="tag-insight-key">
                Tratamentul eficient nu încearcă să te convingă că nu se va întâmpla nimic rău. Te învață să tolerezi faptul că nu știi și să funcționezi în ciuda incertitudinii.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── COMPORTAMENTE DE SIGURANȚĂ ── */}
      <section className="tag-section tag-behaviors" id="comportamente">
        <div className="tag-container tag-container-narrow">
          <Reveal>
            <h2>Comportamentele de siguranță</h2>
            <p className="tag-behaviors-subtitle">Ce faci ca să faci față și de fapt menții anxietatea activă</p>
          </Reveal>

          <div className="tag-behaviors-grid">
            {[
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="14" fill="#5C7A6A" opacity="0.08"/>
                    <path d="M14 18C14 18 16 20 18 20C20 20 22 18 22 18" stroke="#5C7A6A" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="14" cy="14" r="1.5" fill="#5C7A6A" opacity="0.4"/>
                    <circle cx="22" cy="14" r="1.5" fill="#5C7A6A" opacity="0.4"/>
                    <path d="M12 24L10 28M24 24L26 28" stroke="#C4966C" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
                  </svg>
                ),
                title: "Căutarea reasigurării",
                text: "Întrebi constant dacă totul e în regulă, dacă ceva nu e grav. Fiecare confirmare aduce ușurare pentru câteva secunde, apoi îndoiala revine.",
                key: "Cu cât primești mai multă reasigurare, cu atât ai nevoie de mai multă.",
              },
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <rect x="8" y="8" width="20" height="20" rx="3" fill="#5C7A6A" opacity="0.08"/>
                    <path d="M13 14H23M13 18H20M13 22H17" stroke="#5C7A6A" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M21 20L23 22L27 16" stroke="#C4966C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
                  </svg>
                ),
                title: "Planificarea excesivă",
                text: "Liste de liste. Planuri de backup pentru planuri de backup. Fiecare minut al zilei structurat.",
                key: "Fiecare abatere de la plan devine o nouă sursă de anxietate.",
              },
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="10" fill="none" stroke="#5C7A6A" strokeWidth="1.5" opacity="0.2"/>
                    <circle cx="18" cy="18" r="4" fill="#C4966C" opacity="0.15"/>
                    <path d="M18 8V10M18 26V28M8 18H10M26 18H28" stroke="#5C7A6A" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
                  </svg>
                ),
                title: "Verificarea obsesivă",
                text: "Recitești email-ul de 5 ori. Verifici contul bancar de 3 ori pe zi. Cauți pe Google fiecare simptom fizic.",
                key: "Îți spui că e doar ca să fii sigur, dar niciodată nu ești destul de sigur.",
              },
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M12 18H24" stroke="#5C7A6A" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
                    <path d="M18 12V24" stroke="#5C7A6A" strokeWidth="1.5" strokeLinecap="round" opacity="0.15"/>
                    <circle cx="12" cy="18" r="3" fill="#5C7A6A" opacity="0.08"/>
                    <circle cx="24" cy="18" r="3" fill="#C4966C" opacity="0.08"/>
                    <text x="18" y="32" fill="#5C7A6A" opacity="0.3" fontSize="8" textAnchor="middle">?</text>
                  </svg>
                ),
                title: "Evitarea deciziilor",
                text: "Amâni orice decizie care conține incertitudine, mereu pe motiv că mai trebuie să te gândești, că mai vrei să vezi.",
                key: "Lista de decizii neluate devine ea însăși sursă de îngrijorare.",
              },
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M10 18C14 14 22 14 26 18" stroke="#5C7A6A" strokeWidth="1.5" strokeLinecap="round" opacity="0.2"/>
                    <path d="M26 18C22 22 14 22 10 18" stroke="#C4966C" strokeWidth="1.5" strokeLinecap="round" opacity="0.2"/>
                    <path d="M14 12L12 10M22 12L24 10" stroke="#5C7A6A" strokeWidth="1" strokeLinecap="round" opacity="0.2"/>
                    <circle cx="18" cy="18" r="2" fill="#C4966C" opacity="0.2"/>
                  </svg>
                ),
                title: "Supraanaliza retroactivă",
                text: "Derulezi mental conversațiile de ieri, analizând ce a vrut să spună cealaltă persoană sau dacă nu cumva ai spus ceva greșit.",
                key: "Ore de procesare retroactivă care nu produce nicio concluzie.",
              },
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M18 10C14 10 10 14 10 18C10 22 14 26 18 26C22 26 26 22 26 18" stroke="#5C7A6A" strokeWidth="1.5" strokeLinecap="round" opacity="0.2"/>
                    <path d="M26 18C26 14 22 10 18 10" stroke="#C4966C" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" strokeDasharray="3 3"/>
                    <path d="M24 12L26 18L28 14" stroke="#C4966C" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
                  </svg>
                ),
                title: "Îngrijorarea în sine",
                text: "Paradoxal, îngrijorarea e ea însăși un comportament de siguranță.",
                key: "Crezi că dacă te îngrijorezi ești pregătit. Creierul tratează îngrijorarea ca pe o formă de protecție.",
              },
            ].map((b, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="tag-behavior-card">
                  <div className="tag-behavior-icon">{b.icon}</div>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                  <p className="tag-behavior-key">{b.key}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={700}>
            <PullQuote>
              Fiecare funcționează pe termen scurt. Fiecare amplifică anxietatea pe termen lung. Și fiecare împiedică exact învățarea care ar reduce îngrijorarea: că poți tolera incertitudinea fără să se întâmple nimic catastrofal.
            </PullQuote>
          </Reveal>
        </div>
      </section>

      {/* ── CE VREA SĂ SPUNĂ PSIHICUL ── */}
      <section className="tag-section tag-psyche" id="psihodinamic">
        <div className="tag-container tag-container-narrow">
          <Reveal>
            <h2>Ce vrea să spună psihicul prin îngrijorare cronică</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="tag-psyche-intro">
              Până aici am vorbit despre cum funcționează anxietatea generalizată.. mecanismul, cercul vicios, meta-worry. Acum vreau să vorbim despre <strong>de ce există</strong>.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="tag-iceberg">
              <div className="tag-iceberg-visual">
                <svg width="200" height="160" viewBox="0 0 200 160" fill="none" className="tag-iceberg-svg">
                  {/* Water line */}
                  <line x1="0" y1="60" x2="200" y2="60" stroke="rgba(250,247,242,0.15)" strokeWidth="1" strokeDasharray="4 4"/>
                  <text x="10" y="55" fill="rgba(250,247,242,0.3)" fontSize="9">suprafață</text>
                  <text x="10" y="75" fill="rgba(250,247,242,0.3)" fontSize="9">profunzime</text>
                  {/* Tip */}
                  <path d="M80 58L100 20L120 58Z" fill="#C4966C" opacity="0.35"/>
                  <text x="100" y="42" fill="#FAF7F2" fontSize="8" textAnchor="middle" fontWeight="500">îngrijorare</text>
                  {/* Below */}
                  <path d="M60 62L100 62L140 62L155 100L140 140L60 140L45 100Z" fill="#C4966C" opacity="0.12"/>
                  <text x="100" y="85" fill="#C4966C" fontSize="9" textAnchor="middle">furie</text>
                  <text x="100" y="100" fill="#C4966C" fontSize="9" textAnchor="middle">tristețe</text>
                  <text x="100" y="115" fill="#C4966C" fontSize="9" textAnchor="middle">rușine</text>
                  <text x="100" y="130" fill="#C4966C" fontSize="9" textAnchor="middle">pierdere</text>
                </svg>
              </div>
              <div className="tag-iceberg-text">
                <h3>Anxietatea generalizată ca vârf de iceberg</h3>
                <p>
                  Gabbard propune o imagine care merită reținută: îngrijorarea difuză, cronică, pe care o simți la suprafață ascunde conflicte mai specifice și mai profunde sub apă.
                </p>
                <p>
                  Întrebările care contează sunt despre ce funcție are îngrijorarea în viața ta și ce s-ar întâmpla dacă te-ai opri, mai degrabă decât despre cum s-o reduci.
                </p>
              </div>
            </div>
          </Reveal>

          <SectionDivider dark />

          <Reveal delay={300}>
            <div className="tag-under">
              <h3>Sub îngrijorare: furia, tristețea, rușinea</h3>
              <p>
                Când întreb un pacient cu anxietate generalizată ce ar simți dacă nu s-ar mai îngrijora deloc, răspunsul rareori e că s-ar simți bine.
              </p>
              <p>
                Cel mai des e un moment de confuzie, urmat de ceva neașteptat: furie. Sau tristețe. Sau rușine. Sau un gol pe care nu-l pot numi.
              </p>
            </div>
          </Reveal>

          <Reveal delay={350}>
            <div className="tag-case">
              <div className="tag-case-label">Studiu de caz</div>
              <h3>Anton: banii nu erau despre bani</h3>
              <p>
                Anton era funcționar public, proaspăt pensionat, cu îngrijorare cronică despre finanțe. A încercat soluția logică: a deschis o mică afacere. Îngrijorarea nu a scăzut. A crescut.
              </p>
              <p>
                Motivul: îngrijorarea lui Anton nu era despre bani. Era despre incertitudinea existențială a pensionării. Pierderea identității profesionale, a structurii zilnice, a rolului social. Banii erau vehiculul. Sub ei era întrebarea pe care Anton nu o putea pune cu voce tare: &quot;Cine mai sunt eu dacă nu mai lucrez?&quot;
              </p>
              <p className="tag-case-key">
                A trata banii fără a adresa identitatea e ca și cum ai trata febra fără a căuta infecția.
              </p>
            </div>
          </Reveal>

          <SectionDivider dark />

          <Reveal delay={400}>
            <div className="tag-origins">
              <h3>Originile în copilărie</h3>
              <p>Anxietatea generalizată are rădăcini specifice în experiența timpurie:</p>
              <div className="tag-origins-grid">
                {[
                  {
                    emoji: "🛡️",
                    title: "Părinți supra-protectivi",
                    text: "Părinții îi repetă constant să fie atent, că totul e periculos. Copilul învață că lumea e un loc periculos și că trebuie să fie mereu pregătit.",
                  },
                  {
                    emoji: "🔄",
                    title: "Parenting inversat",
                    text: "Copilul care are grijă de părinte, emoțional sau practic. Învață că nu are voie să se relaxeze.",
                  },
                  {
                    emoji: "⚡",
                    title: "Pedepse imprevizibile",
                    text: "Când copilul nu poate anticipa ce va declanșa furia părintelui, dezvoltă un sistem de scanare permanentă. Hipervigilența rămâne activă și la 30, 40, 50 de ani.",
                  },
                  {
                    emoji: "💔",
                    title: "Separare sau pierdere timpurie",
                    text: "Pierderea unui părinte, o spitalizare, o schimbare bruscă. Copilul învață că lucrurile pot dispărea fără avertisment.",
                  },
                ].map((o, i) => (
                  <div key={i} className="tag-origin-card">
                    <span className="tag-origin-emoji">{o.emoji}</span>
                    <h4>{o.title}</h4>
                    <p>{o.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── TRATAMENT ── */}
      <section className="tag-section tag-treatment" id="tratament">
        <div className="tag-container tag-container-narrow">
          <Reveal>
            <h2>Tratament</h2>
          </Reveal>
          <Reveal delay={100}>
            <p>
              Anxietatea generalizată răspunde bine la tratament. Și spre deosebire de medicație, beneficiile terapiei se mențin după terminarea tratamentului.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="tag-stats-row">
              <StatCallout number="75%" label="ameliorare" sublabel="dintre persoanele care urmează terapia au ameliorare semnificativă" />
              <StatCallout number="12-20" label="ședințe" sublabel="durata tipică a tratamentului" />
            </div>
          </Reveal>

          <SectionDivider />

          <Reveal delay={200}>
            <div className="tag-treatment-components">
              <h3>Restructurarea relației cu îngrijorarea</h3>
              <p>Tratamentul anxietății generalizate schimbă relația ta cu îngrijorarea. Nu încearcă să o facă să dispară, pentru că îngrijorarea în sine nu e problema.</p>
              <div className="tag-treatment-grid">
                {[
                  {
                    num: "1",
                    title: "Distincția productiv/neproductiv",
                    text: "Învață să diferențiezi îngrijorarea care conduce la acțiune de cea care se învârte în cerc. Prima o lași să funcționeze. A doua o tratezi diferit.",
                  },
                  {
                    num: "2",
                    title: "Adresarea meta-convingerilor",
                    text: "Examinezi direct credințele despre îngrijorare.. dacă e cu adevărat incontrolabilă și dacă ți-a făcut vreodată rău fizic.",
                  },
                  {
                    num: "3",
                    title: "Construirea toleranței la incertitudine",
                    text: "Nu elimini incertitudinea (imposibil). O tolerezi. Prin exerciții gradate care te expun la ambiguitate în doze suportabile.",
                  },
                ].map((c, i) => (
                  <div key={i} className="tag-treatment-card">
                    <span className="tag-treatment-num">{c.num}</span>
                    <h4>{c.title}</h4>
                    <p>{c.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <SectionDivider />

          <Reveal delay={300}>
            <div className="tag-worry-time">
              <div className="tag-worry-time-header">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                  <circle cx="16" cy="16" r="12" fill="#5C7A6A" opacity="0.1"/>
                  <circle cx="16" cy="16" r="8" fill="none" stroke="#5C7A6A" strokeWidth="1.5" opacity="0.3"/>
                  <line x1="16" y1="12" x2="16" y2="16" stroke="#5C7A6A" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
                  <line x1="16" y1="16" x2="20" y2="16" stroke="#5C7A6A" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
                </svg>
                <h3>Worry Time: tehnica paradoxală care funcționează</h3>
              </div>
              <p>
                Una dintre cele mai eficiente tehnici e contra-intuitivă: în loc să încerci să te oprești din îngrijorat, programezi deliberat un moment de îngrijorare.
              </p>
              <div className="tag-wt-steps">
                {[
                  { step: "Aloci 15 minute pe zi, la aceeași oră, în același loc" },
                  { step: "Te îngrijorezi deliberat și complet despre un singur subiect" },
                  { step: "Urmezi firul catastrofic până la capăt, întrebându-te care e cel mai rău scenariu care s-ar putea întâmpla" },
                  { step: "Continui până ajungi la un plan, oricât de rudimentar" },
                  { step: "Restul zilei, când apare o îngrijorare, o notezi și o amâni până la slotul de mai târziu" },
                ].map((s, i) => (
                  <div key={i} className="tag-wt-step">
                    <span className="tag-wt-step-num">{i + 1}</span>
                    <span>{s.step}</span>
                  </div>
                ))}
              </div>
              <div className="tag-wt-why">
                <h4>De ce funcționează:</h4>
                <ul>
                  <li>Demonstrează că îngrijorarea nu e incontrolabilă (ai reușit să o amâni)</li>
                  <li>Transformă procesul cronic difuz în activitate delimitată</li>
                  <li>Forțează vizualizarea completă a scenariului</li>
                  <li>Permite elaborarea unui plan de coping</li>
                </ul>
              </div>
            </div>
          </Reveal>

          <SectionDivider />

          <Reveal delay={400}>
            <div className="tag-meds">
              <h3>De ce medicamentele singure nu sunt suficiente</h3>
              <p>
                Antidepresivele din clasa SSRI (inhibitori selectivi ai recaptării serotoninei) pot reduce simptomele anxietății generalizate. Dar beneficiile se mențin doar cât iei medicamentul. La oprire, simptomele pot reveni.
              </p>
              <p>
                Medicamentul reduce anxietatea fără să te învețe să tolerezi incertitudinea sau să procesezi emoțiile evitate. Combinația optimă: terapia cognitiv-comportamentală ca bază, cu SSRI ca adjuvant dacă simptomele sunt foarte severe.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CE POȚI FACE ACUM ── */}
      <section className="tag-section tag-action" id="ce-poti-face">
        <div className="tag-container tag-container-narrow">
          <Reveal>
            <h2>Ce poți face acum</h2>
          </Reveal>
          <Reveal delay={100}>
            <p>Nu trebuie să aștepți o programare la psiholog ca să începi.</p>
          </Reveal>

          <div className="tag-exercises">
            {[
              {
                num: "1",
                title: "Jurnalul P/N (productiv / neproductiv)",
                text: "Timp de o săptămână, de fiecare dată când te prinzi îngrijorat, notează subiectul și pune eticheta productivă sau neproductivă folosind testul celor 4 întrebări.",
                result: "Dacă peste 70% din îngrijorări sunt neproductive, problema ta nu e conținutul grijilor, ci intoleranța la incertitudine.",
              },
              {
                num: "2",
                title: "Worry Time (15 minute programate)",
                text: "Alege o oră fixă și un loc fix. Fiecare zi, la acea oră, îngrijorează-te deliberat timp de 15 minute despre un singur subiect. Urmează firul până la capăt.",
                result: "Restul zilei, amână orice grijă la slotul de mâine.",
              },
              {
                num: "3",
                title: "Ce e sub îngrijorare?",
                text: "Când te prinzi în spirala de griji, oprește-te și întreabă-te ce ai simți dacă nu te-ai mai îngrijora deloc.",
                result: "Nu căuta un răspuns logic. Observă ce apare în corp. Permite-ți 2 minute să simți acea emoție brută.",
              },
              {
                num: "4",
                title: "Scannerul de siguranță",
                text: "Anxietatea generalizată produce un filtru care vede doar amenințarea. Când observi că scanezi mediul pentru pericole, inversează deliberat.",
                result: "Caută activ ce e sigur acum, ce funcționează bine, ce nu e în pericol. Nu confunda asta cu gândirea pozitivă.. e o corecție a unui filtru calibrat greșit.",
              },
              {
                num: "5",
                title: "Relaxarea musculară progresivă",
                text: "Tensionezi un grup muscular 5 secunde, apoi relaxezi 15 secunde, de la picioare la cap. Fă-o seara, înainte de somn. 15 minute.",
                result: "Scopul e să muți atenția pe corp, nu să-ți golești mintea complet.",
              },
            ].map((ex, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="tag-exercise">
                  <span className="tag-exercise-num">{ex.num}</span>
                  <div>
                    <h3>{ex.title}</h3>
                    <p>{ex.text}</p>
                    <p className="tag-exercise-result">{ex.result}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECIALIST + CTA ── */}
      <section className="tag-section tag-help">
        <div className="tag-container tag-container-narrow">
          <Reveal>
            <h2>Când merită să cauți un specialist</h2>
          </Reveal>
          <Reveal delay={100}>
            <p>Anxietatea generalizată răspunde excelent la terapia cognitiv-comportamentală. Caută un specialist dacă:</p>
          </Reveal>

          <Reveal delay={200}>
            <div className="tag-specialist-signs">
              {[
                "Îngrijorarea îți ocupă mai mult de o oră pe zi",
                "Somnul e afectat de mai mult de 2 săptămâni",
                "Tensiunea musculară e cronică și afectează funcționarea",
                "Ai început să eviți situații, decizii sau conversații din cauza anxietății",
                "Folosești alcoolul sau alte substanțe ca să faci față",
                "Ai încercat singur și ciclul continuă",
              ].map((sign, i) => (
                <div key={i} className="tag-sign">
                  <span className="tag-sign-check">✓</span>
                  <p>{sign}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="tag-cta-block">
              <h3>Următorul pas</h3>
              <p>Dacă ai ajuns până aici, ai făcut deja ceva important.. ai căutat să înțelegi ce ți se întâmplă. Asta nu e puțin.</p>
              <a href="/programare?din=anxietate-generalizata" className="tag-cta-primary">Programează o consultație</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="tag-section tag-faq" id="faq">
        <div className="tag-container tag-container-narrow">
          <Reveal>
            <h2>Întrebări frecvente</h2>
          </Reveal>
          <Reveal delay={150}>
            <div className="tag-faq-list">
              <FAQ
                question="Dacă mă îngrijorez mereu, nu înseamnă că sunt doar o persoană anxioasă?"
                answer={`Anxietatea generalizată nu e o trăsătură de personalitate, ci o condiție cu mecanisme specifice (meta-worry, intoleranța la incertitudine, evitare emoțională) care pot fi identificate și tratate. Diferența între a crede că ești anxios din fire și a înțelege că ai anxietate generalizată e că prima te oprește din a căuta ajutor, iar a doua deschide o cale de tratament.`}
              />
              <FAQ
                question="De ce grijile mele sar de la un subiect la altul?"
                answer="Pentru că nucleul anxietății generalizate nu e conținutul grijilor, ci intoleranța la incertitudine. Orice domeniu al vieții conține incertitudine. Când rezolvi o grijă, mintea ta se mută automat pe următorul domeniu incert. Tratamentul eficient vizează nucleul, nu conținutul."
              />
              <FAQ
                question="Anxietatea generalizată poate produce simptome fizice reale?"
                answer="Da. Tensiunea musculară cronică, durerile de cap de tip tensional, problemele gastrointestinale, oboseala cronică și tulburările de somn sunt simptome directe ale anxietății generalizate. Nu sunt imaginare. Corpul tău trăiește într-o stare permanentă de pregătire pentru pericol, și asta are consecințe fizice reale, măsurabile."
              />
              <FAQ
                question="Pot scăpa complet de anxietatea generalizată?"
                answer="Mulți oameni ajung la un punct în care anxietatea generalizată nu le mai afectează funcționarea. Grijile ocazionale pot apărea, dar nu mai declanșează spirala. Aproximativ 75% dintre persoanele care urmează terapia au ameliorare semnificativă. Tratamentul funcționează și durează de obicei 12-20 de ședințe."
              />
              <FAQ
                question="E anxietate generalizată dacă mă îngrijorez doar de un singur lucru?"
                answer="Nu neapărat. Anxietatea generalizată se definește prin îngrijorare pe multiple domenii, care sare de la una la alta. Dacă îngrijorarea e focalizată predominant pe sănătate, poate fi anxietate de boală. Dacă e focalizată pe evaluarea socială, poate fi anxietate socială. Un specialist poate face diferența diagnostică."
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER: REFERINȚE + DISCLAIMER ── */}
      <footer className="tag-footer">
        <div className="tag-container tag-container-narrow">
          <div className="tag-references">
            <button
              className="tag-references-toggle"
              onClick={(e) => {
                const list = (e.currentTarget as HTMLButtonElement).nextElementSibling;
                if (list) list.classList.toggle("tag-references-open");
                (e.currentTarget as HTMLButtonElement).classList.toggle("tag-references-toggle-open");
              }}
            >
              <span className="tag-references-icon">+</span>
              Referințe științifice (10 surse)
            </button>
            <div className="tag-references-list">
              <p>Clark, D. A., &amp; Beck, A. T. (2010). <em>Cognitive Therapy of Anxiety Disorders: Science and Practice.</em> Guilford Press.</p>
              <p>Gabbard, G. O. (2007). <em>Tratat de Psihiatrie Psihodinamică</em> (ed. a 4-a). Editura Trei.</p>
              <p>Andrews, G., Creamer, M., Crino, R., Hunt, C., Lampe, L., &amp; Page, A. (2003). <em>The Treatment of Anxiety Disorders: Clinician Guides and Patient Manuals</em> (2nd ed.). Cambridge University Press.</p>
              <p>Leahy, R. L., Holland, S. J., &amp; McGinn, L. K. (2012). <em>Treatment Plans and Interventions for Depression and Anxiety Disorders</em> (2nd ed.). Guilford Press.</p>
              <p>Wolfe, B. E. (2005). <em>Understanding and Treating Anxiety Disorders: An Integrative Approach to Healing the Wounded Self.</em> American Psychological Association.</p>
              <p>Borkovec, T. D., &amp; Roemer, L. (1995). Perceived functions of worry among generalized anxiety disorder subjects. <em>Journal of Behavior Therapy and Experimental Psychiatry, 26</em>(1), 25-30.</p>
              <p>Wells, A. (2009). <em>Metacognitive Therapy for Anxiety and Depression.</em> Guilford Press.</p>
              <p>Dugas, M. J., &amp; Robichaud, M. (2007). <em>Cognitive-Behavioral Treatment for Generalized Anxiety Disorder: From Science to Practice.</em> Routledge.</p>
              <p>Freud, S. (1926). <em>Inhibitions, Symptoms and Anxiety.</em> Standard Edition, Vol. 20.</p>
              <p>Borkovec, T. D., Alcaine, O. M., &amp; Behar, E. (2004). Avoidance theory of worry and generalized anxiety disorder. In R. G. Heimberg et al. (Eds.), <em>Generalized Anxiety Disorder: Advances in Research and Practice.</em> Guilford Press.</p>
            </div>
          </div>
          <p className="tag-disclaimer">
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
.tag-page {
  font-family: var(--font-body), 'Inter', sans-serif;
  color: var(--color-text, #2C2C2C);
  line-height: 1.75;
  font-size: 17px;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
}

.tag-page h1, .tag-page h2, .tag-page h3 {
  font-family: var(--font-heading), 'Fraunces', serif;
  color: var(--color-primary, #1B2B4B);
  letter-spacing: -0.03em;
  line-height: 1.2;
}

.tag-page h2 {
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 24px;
}

.tag-page h3 {
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 12px;
}

.tag-page p {
  margin-bottom: 16px;
}

/* ─── Layout ─── */
.tag-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.tag-container-narrow {
  max-width: 760px;
}

.tag-section {
  padding: 80px 0;
}

@media (max-width: 767px) {
  .tag-section { padding: 48px 0; }
}

/* ─── Reveal animation ─── */
.tag-reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.tag-reveal-visible {
  opacity: 1;
  transform: translateY(0);
}

/* ─── Pull Quote ─── */
.tag-pull-quote {
  position: relative;
  margin: 40px 0;
  padding: 32px 32px 32px 40px;
  border-left: 3px solid #C4966C;
  background: rgba(196, 150, 108, 0.04);
  border-radius: 0 12px 12px 0;
}
.tag-pull-quote-dark {
  background: rgba(196, 150, 108, 0.08);
  border-left-color: #C4966C;
}
.tag-pull-quote-mark {
  position: absolute;
  top: 16px;
  left: 12px;
  color: #C4966C;
  opacity: 0.15;
}
.tag-pull-quote p {
  font-family: var(--font-heading), 'Fraunces', serif;
  font-size: 19px;
  line-height: 1.6;
  color: var(--color-primary, #1B2B4B);
  margin-bottom: 0;
  font-weight: 400;
}
.tag-pull-quote-dark p {
  color: #FAF7F2;
}

/* ─── Stat Callout ─── */
.tag-stats-row {
  display: flex;
  gap: 20px;
  margin: 32px 0;
}
.tag-stat {
  flex: 1;
  text-align: center;
  padding: 28px 20px;
  background: var(--color-background, #F5F0E8);
  border-radius: 12px;
  border-top: 3px solid #C4966C;
}
.tag-stat-dark {
  background: rgba(250, 247, 242, 0.06);
}
.tag-stat-number {
  display: block;
  font-family: var(--font-heading), 'Fraunces', serif;
  font-size: 40px;
  font-weight: 400;
  color: #C4966C;
  line-height: 1.1;
  margin-bottom: 6px;
}
.tag-stat-label {
  display: block;
  font-family: var(--font-body), 'Inter', sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: var(--color-primary, #1B2B4B);
  margin-bottom: 4px;
}
.tag-stat-sublabel {
  display: block;
  font-size: 13px;
  color: var(--color-text-secondary, #5A5A5A);
  line-height: 1.4;
}

@media (max-width: 767px) {
  .tag-stats-row { flex-direction: column; }
}

/* ─── Section Divider ─── */
.tag-section-divider {
  display: flex;
  justify-content: center;
  padding: 32px 0;
  color: var(--color-primary, #1B2B4B);
}
.tag-section-divider-dark {
  color: #FAF7F2;
}

/* ─── Floating TOC (Desktop sidebar) ─── */
.tag-toc-sidebar {
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

.tag-toc-title {
  font-family: var(--font-body), 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-text-secondary, #5A5A5A);
  margin-bottom: 12px;
}

.tag-toc-sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tag-toc-sidebar li {
  margin-bottom: 2px;
}

.tag-toc-link {
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
.tag-toc-link:hover {
  color: var(--color-primary, #1B2B4B);
}
.tag-toc-active {
  color: var(--color-primary, #1B2B4B);
  border-left-color: var(--color-secondary, #5C7A6A);
  font-weight: 600;
}

@media (max-width: 1440px) {
  .tag-toc-sidebar { display: none; }
}

/* ─── Mobile TOC FAB ─── */
.tag-toc-fab {
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
.tag-toc-fab:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.25);
}
.tag-toc-fab:active { transform: translateY(0); }

@media (max-width: 1440px) {
  .tag-toc-fab { display: flex; }
}

/* ─── Mobile TOC overlay ─── */
.tag-toc-overlay {
  position: fixed;
  inset: 0;
  z-index: 50;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.tag-toc-mobile {
  background: var(--color-background-white, #FDFAF5);
  border-radius: 16px 16px 0 0;
  padding: 24px 24px 32px;
  width: 100%;
  max-width: 480px;
  max-height: 70vh;
  overflow-y: auto;
}

.tag-toc-mobile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.tag-toc-close {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-text-secondary, #5A5A5A);
  padding: 4px;
}

.tag-toc-mobile ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tag-toc-mobile .tag-toc-link {
  font-size: 15px;
  padding: 10px 12px;
}

/* ─── Hero ─── */
.tag-hero {
  background: linear-gradient(180deg, var(--color-background, #F5F0E8) 0%, #EDE8E0 100%);
  padding-top: 100px;
  padding-bottom: 48px;
}

.tag-hero-container {
  max-width: 900px;
}

.tag-author {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-text-secondary, #5A5A5A);
  margin-bottom: 12px;
}

.tag-hero-layout {
  display: flex;
  align-items: center;
  gap: 56px;
  margin-bottom: 8px;
}

.tag-hero-text {
  flex: 1;
}

.tag-hero-title {
  font-size: 44px;
  font-weight: 400;
  margin-bottom: 20px;
  text-align: left;
  line-height: 1.15;
}

.tag-hero-illustration {
  flex-shrink: 0;
  width: 260px;
  align-self: center;
}

.tag-hero-svg {
  width: 100%;
  height: auto;
}

/* SVG animations */
.tag-spiral-1 { animation: tag-spiral 4s ease-in-out infinite; }
.tag-spiral-2 { animation: tag-spiral 4s ease-in-out 1.5s infinite; }
@keyframes tag-spiral {
  0%, 100% { opacity: 0.3; transform: translateY(0); }
  50% { opacity: 0.55; transform: translateY(-3px); }
}

.tag-float-1 { animation: tag-float 5s ease-in-out infinite; }
.tag-float-2 { animation: tag-float 5s ease-in-out 1.2s infinite; }
.tag-float-3 { animation: tag-float 5s ease-in-out 2.4s infinite; }
@keyframes tag-float {
  0%, 100% { opacity: 0.2; transform: translateY(0); }
  50% { opacity: 0.45; transform: translateY(-5px); }
}

.tag-pulse-1 { animation: tag-pulse 3s ease-in-out infinite; }
.tag-pulse-2 { animation: tag-pulse 3s ease-in-out 0.8s infinite; }
@keyframes tag-pulse {
  0%, 100% { opacity: 0.1; transform: scale(1); }
  50% { opacity: 0.2; transform: scale(1.06); }
}

.tag-hero-hook {
  font-size: 15px;
  color: var(--color-text-secondary, #5A5A5A);
  text-align: left;
}

.tag-link {
  color: var(--color-secondary, #5C7A6A);
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.2s ease-out;
}
.tag-link:hover { color: #4A6858; }
.tag-link:focus-visible { outline: 2px solid var(--color-secondary, #5C7A6A); outline-offset: 2px; border-radius: 2px; }

.tag-hero-divider {
  display: flex;
  justify-content: center;
  margin: 24px 0 32px;
}
.tag-hero-divider-line {
  display: block;
  width: 60px;
  height: 1px;
  background: rgba(27, 43, 75, 0.15);
}

.tag-opening p {
  color: var(--color-text, #2C2C2C);
  font-size: 18px;
  line-height: 1.8;
}

.tag-opening-conclusion {
  margin-top: 24px;
  padding: 24px;
  background: rgba(92, 122, 106, 0.08);
  border-radius: 12px;
  border-left: 3px solid var(--color-secondary, #5C7A6A);
}

@media (max-width: 767px) {
  .tag-hero { padding-top: 72px; padding-bottom: 40px; }
  .tag-hero-layout { flex-direction: column; gap: 24px; }
  .tag-hero-text { text-align: center; }
  .tag-hero-title { font-size: 34px; text-align: center; }
  .tag-hero-illustration { width: 200px; }
  .tag-hero-hook { text-align: center; }
  .tag-opening p { font-size: 16px; }
}

/* ─── Ce este ─── */
.tag-what {
  background: var(--color-background-white, #FDFAF5);
}

.tag-distinction {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 32px 0;
}

.tag-distinction-card {
  padding: 28px;
  background: var(--color-background, #F5F0E8);
  border-radius: 12px;
  border-top: 3px solid #C4966C;
}
.tag-distinction-card h3 {
  font-size: 18px;
  margin-bottom: 8px;
}
.tag-distinction-card p {
  color: var(--color-text, #2C2C2C);
  font-size: 15px;
  margin-bottom: 0;
}
.tag-distinction-key {
  margin-top: 12px !important;
  font-family: var(--font-heading), 'Fraunces', serif;
  font-size: 15px;
  color: #C4966C !important;
  font-style: italic;
}

.tag-feel {
  margin-top: 32px;
}

.tag-symptoms-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin: 24px 0;
}

.tag-symptom {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 16px;
  background: var(--color-background, #F5F0E8);
  border-radius: 10px;
}

.tag-symptom-icon {
  font-size: 20px;
  flex-shrink: 0;
  margin-top: 2px;
}

.tag-symptom strong {
  color: var(--color-primary, #1B2B4B);
  font-size: 15px;
  display: block;
}

.tag-symptom-detail {
  color: var(--color-text-secondary, #5A5A5A);
  font-size: 14px;
}

@media (max-width: 767px) {
  .tag-distinction { grid-template-columns: 1fr; }
  .tag-symptoms-grid { grid-template-columns: 1fr; }
}

/* ─── Cum arată ─── */
.tag-daily {
  background: var(--color-background, #F5F0E8);
}

.tag-scenes-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 32px;
}

.tag-scene-card {
  padding: 28px;
  background: var(--color-background-white, #FDFAF5);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(27, 43, 75, 0.04);
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
}
.tag-scene-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(27, 43, 75, 0.08);
}

.tag-scene-visual {
  margin-bottom: 16px;
  opacity: 0.8;
}

.tag-scene-card h3 {
  font-size: 19px;
  margin-bottom: 10px;
  color: var(--color-primary, #1B2B4B);
}

.tag-scene-main {
  color: var(--color-text, #2C2C2C);
  font-size: 15px;
  margin-bottom: 10px;
  line-height: 1.7;
}

.tag-scene-detail {
  color: var(--color-text, #2C2C2C);
  font-size: 14px;
  margin-bottom: 0;
  padding-top: 10px;
  border-top: 1px solid rgba(27, 43, 75, 0.06);
  line-height: 1.7;
  opacity: 0.8;
}

@media (max-width: 767px) {
  .tag-scenes-grid { grid-template-columns: 1fr; }
}

/* ─── Mecanismul ─── */
.tag-mechanism {
  background: #1E2A3A;
  color: #FAF7F2;
}
.tag-mechanism h2 { color: #FAF7F2; }
.tag-mechanism p { color: rgba(250, 247, 242, 0.85); }
.tag-mechanism-subtitle {
  font-family: var(--font-body), 'Inter', sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #C4966C;
  margin-bottom: 32px;
}

.tag-mechanism-visual {
  margin: 32px 0 16px;
}

.tag-mech-flow {
  display: flex;
  align-items: center;
  gap: 0;
  justify-content: center;
}

.tag-mech-node {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-radius: 12px;
  flex: 1;
  max-width: 220px;
}

.tag-mech-node-icon {
  font-size: 18px;
  font-weight: 700;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.tag-mech-node strong {
  display: block;
  font-size: 14px;
  color: #FAF7F2;
  margin-bottom: 2px;
}

.tag-mech-node p {
  font-size: 12px;
  margin-bottom: 0;
  line-height: 1.4;
}

.tag-mech-avoid {
  background: rgba(196, 150, 108, 0.1);
  border: 1px solid rgba(196, 150, 108, 0.25);
}
.tag-mech-avoid .tag-mech-node-icon {
  background: rgba(196, 150, 108, 0.2);
  color: #C4966C;
}
.tag-mech-avoid p { color: rgba(250, 247, 242, 0.5); }

.tag-mech-prefer {
  background: rgba(92, 122, 106, 0.12);
  border: 1px solid rgba(92, 122, 106, 0.25);
}
.tag-mech-prefer .tag-mech-node-icon {
  background: rgba(92, 122, 106, 0.25);
  color: #7A9E7E;
}
.tag-mech-prefer p { color: rgba(250, 247, 242, 0.5); }

.tag-mech-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 0 12px;
  min-width: 100px;
}

.tag-mech-brain {
  font-family: var(--font-heading), 'Fraunces', serif;
  font-size: 15px;
  font-weight: 600;
  color: #FAF7F2;
  padding: 10px 16px;
  background: rgba(196, 150, 108, 0.15);
  border: 1.5px solid #C4966C;
  border-radius: 8px;
  text-align: center;
}

.tag-mech-arrow {
  font-size: 18px;
  color: rgba(250, 247, 242, 0.25);
}

.tag-mech-arrow-label {
  font-size: 11px;
  color: rgba(250, 247, 242, 0.35);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

@media (max-width: 767px) {
  .tag-mech-flow {
    flex-direction: column;
    gap: 8px;
  }
  .tag-mech-node { max-width: 100%; }
  .tag-mech-center {
    flex-direction: row;
    padding: 8px 0;
  }
  .tag-mech-arrow { transform: rotate(90deg); }
}

.tag-insight-box {
  padding: 32px;
  background: rgba(250, 247, 242, 0.06);
  border-radius: 12px;
  border-left: 3px solid #C4966C;
  margin: 32px 0;
}
.tag-insight-box h3 {
  color: #FAF7F2;
  font-size: 22px;
}

.tag-insight-key {
  font-family: var(--font-heading), 'Fraunces', serif;
  font-size: 20px;
  color: #C4966C !important;
  line-height: 1.5;
  margin-top: 16px;
  margin-bottom: 0;
}

.tag-cycle {
  margin: 40px 0;
}
.tag-cycle h3 { color: #FAF7F2; }

.tag-cycle-list {
  list-style: none;
  padding: 0;
  counter-reset: cycle;
}
.tag-cycle-list li {
  counter-increment: cycle;
  padding: 16px 16px 16px 48px;
  position: relative;
  border-left: 2px solid rgba(196, 150, 108, 0.3);
  margin-left: 16px;
  color: rgba(250, 247, 242, 0.85);
  font-size: 16px;
}
.tag-cycle-list li::before {
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
.tag-cycle-list li strong { color: #FAF7F2; }

.tag-productive {
  margin-top: 40px;
}
.tag-productive h3 { color: #FAF7F2; }

.tag-compare-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 24px 0;
}

.tag-compare-col {
  padding: 24px;
  border-radius: 12px;
}
.tag-compare-col h4 {
  font-family: var(--font-heading), 'Fraunces', serif;
  font-size: 18px;
  margin-bottom: 12px;
  font-weight: 500;
}
.tag-compare-col ul {
  list-style: none;
  padding: 0;
}
.tag-compare-col li {
  font-size: 15px;
  margin-bottom: 8px;
  padding-left: 16px;
  position: relative;
}
.tag-compare-col li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.tag-compare-good {
  background: rgba(92, 122, 106, 0.15);
}
.tag-compare-good h4 { color: #7A9E7E; }
.tag-compare-good li { color: rgba(250, 247, 242, 0.85); }
.tag-compare-good li::before { background: #7A9E7E; }

.tag-compare-bad {
  background: rgba(196, 150, 108, 0.12);
}
.tag-compare-bad h4 { color: #C4966C; }
.tag-compare-bad li { color: rgba(250, 247, 242, 0.85); }
.tag-compare-bad li::before { background: #C4966C; }

.tag-test-box {
  margin-top: 32px;
  padding: 32px;
  background: rgba(250, 247, 242, 0.04);
  border-radius: 16px;
  border: 1px solid rgba(250, 247, 242, 0.08);
}
.tag-test-box h4 {
  font-family: var(--font-heading), 'Fraunces', serif;
  font-size: 22px;
  color: #FAF7F2;
  margin-bottom: 8px;
}
.tag-test-box > p { font-size: 15px; color: rgba(250, 247, 242, 0.7); margin-bottom: 20px; }

.tag-test-questions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 24px;
}

.tag-test-q {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background: rgba(250, 247, 242, 0.06);
  border-radius: 10px;
  border-left: 3px solid rgba(196, 150, 108, 0.4);
}

.tag-test-q-num {
  font-family: var(--font-heading), 'Fraunces', serif;
  font-weight: 700;
  font-size: 24px;
  color: #C4966C;
  line-height: 1;
  flex-shrink: 0;
  width: 28px;
}

.tag-test-q p {
  color: #FAF7F2;
  font-size: 15px;
  margin-bottom: 0;
  line-height: 1.5;
}

.tag-test-outcomes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.tag-test-outcome {
  padding: 20px;
  border-radius: 10px;
}

.tag-test-outcome-label {
  display: block;
  font-family: var(--font-body), 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 6px;
}

.tag-test-outcome p {
  font-size: 15px;
  margin-bottom: 0;
  font-weight: 500;
}

.tag-test-productive {
  background: rgba(92, 122, 106, 0.2);
  border: 1px solid rgba(92, 122, 106, 0.3);
}
.tag-test-productive .tag-test-outcome-label { color: #7A9E7E; }
.tag-test-productive p { color: #FAF7F2; }

.tag-test-unproductive {
  background: rgba(196, 150, 108, 0.15);
  border: 1px solid rgba(196, 150, 108, 0.25);
}
.tag-test-unproductive .tag-test-outcome-label { color: #C4966C; }
.tag-test-unproductive p { color: #FAF7F2; }

@media (max-width: 767px) {
  .tag-compare-grid { grid-template-columns: 1fr; }
  .tag-test-questions { grid-template-columns: 1fr; }
  .tag-test-outcomes { grid-template-columns: 1fr; }
}

/* ─── Meta-worry ─── */
.tag-meta {
  background: var(--color-background-white, #FDFAF5);
}

.tag-meta-intro {
  color: var(--color-text, #2C2C2C);
  font-size: 18px;
  margin-bottom: 32px;
}

.tag-beliefs {
  margin-bottom: 40px;
}

.tag-beliefs-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 24px 0;
}

.tag-belief-col {
  padding: 24px;
  border-radius: 12px;
}
.tag-belief-col h4 {
  font-family: var(--font-heading), 'Fraunces', serif;
  font-size: 17px;
  margin-bottom: 12px;
  font-weight: 500;
}
.tag-belief-col ul {
  list-style: none;
  padding: 0;
}
.tag-belief-col li {
  font-size: 15px;
  color: var(--color-text, #2C2C2C);
  margin-bottom: 8px;
  font-style: italic;
}

.tag-belief-pos {
  background: rgba(92, 122, 106, 0.08);
  border-left: 3px solid var(--color-secondary, #5C7A6A);
}
.tag-belief-pos h4 { color: var(--color-secondary, #5C7A6A); }

.tag-belief-neg {
  background: rgba(196, 150, 108, 0.08);
  border-left: 3px solid #C4966C;
}
.tag-belief-neg h4 { color: #C4966C; }

/* ─── Meta-worry flow diagram ─── */
.tag-meta-flow {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  margin: 32px 0;
}
.tag-meta-flow-step {
  width: 100%;
  max-width: 480px;
  padding: 20px 24px;
  background: var(--color-background, #F5F0E8);
  border-radius: 12px;
  border-left: 3px solid var(--color-secondary, #5C7A6A);
}
.tag-meta-flow-step p {
  margin-bottom: 0;
  color: var(--color-text, #2C2C2C);
  font-size: 16px;
}
.tag-meta-flow-step-danger {
  border-left-color: #C4966C;
  background: rgba(196, 150, 108, 0.06);
}
.tag-meta-flow-step-result {
  border-left-color: #c0392b;
  background: rgba(192, 57, 43, 0.04);
}
.tag-meta-flow-step-result p {
  font-weight: 600;
  color: var(--color-primary, #1B2B4B);
}
.tag-meta-flow-label {
  display: inline-block;
  font-family: var(--font-body), 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-secondary, #5A5A5A);
  margin-bottom: 4px;
}
.tag-meta-flow-arrow {
  color: #C4966C;
  padding: 4px 0;
}

.tag-meta-examples {
  margin-bottom: 32px;
}

.tag-meta-example-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
}

.tag-meta-example {
  display: flex;
  gap: 16px;
  padding: 24px;
  background: var(--color-background, #F5F0E8);
  border-radius: 12px;
  align-items: flex-start;
}
.tag-meta-example-icon {
  flex-shrink: 0;
  margin-top: 4px;
}
.tag-meta-example p {
  color: var(--color-text, #2C2C2C);
  margin-bottom: 0;
  font-size: 15px;
  line-height: 1.7;
}
.tag-meta-example strong {
  color: var(--color-primary, #1B2B4B);
  display: block;
  margin-bottom: 4px;
  font-size: 16px;
}

.tag-exercise-inline {
  padding: 28px;
  background: var(--color-background, #F5F0E8);
  border-radius: 12px;
  margin-top: 32px;
}
.tag-exercise-inline-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}
.tag-exercise-inline-header h3 {
  margin-bottom: 0;
}
.tag-exercise-note {
  color: var(--color-text, #2C2C2C);
  font-size: 15px;
  opacity: 0.85;
  margin-bottom: 0;
}

.tag-exercise-levels {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin: 16px 0;
}

.tag-exercise-level {
  padding: 16px;
  background: var(--color-background-white, #FDFAF5);
  border-radius: 8px;
}

.tag-level-label {
  font-family: var(--font-body), 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-secondary, #5C7A6A);
  display: block;
  margin-bottom: 4px;
}

.tag-exercise-level p {
  color: var(--color-text, #2C2C2C);
  font-size: 15px;
  margin-bottom: 0;
}

@media (max-width: 767px) {
  .tag-beliefs-grid { grid-template-columns: 1fr; }
  .tag-exercise-levels { grid-template-columns: 1fr; }
}

/* ─── Intoleranța la incertitudine ─── */
.tag-uncertainty {
  background: var(--color-background, #F5F0E8);
}

.tag-uncertainty-subtitle {
  font-family: var(--font-body), 'Inter', sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #C4966C;
  margin-top: -16px;
  margin-bottom: 32px;
}

.tag-uncertainty-visual {
  display: flex;
  gap: 20px;
  align-items: stretch;
  margin: 32px 0;
}
.tag-uncertainty-days {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.tag-uncertainty-day {
  padding: 10px 16px;
  background: var(--color-background-white, #FDFAF5);
  border-radius: 8px;
  font-size: 14px;
  color: var(--color-text, #2C2C2C);
  border-left: 2px solid #C4966C;
}
.tag-uncertainty-core {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
  background: rgba(27, 43, 75, 0.04);
  border-radius: 12px;
  border: 1px solid rgba(27, 43, 75, 0.08);
}
.tag-uncertainty-core-label {
  font-family: var(--font-body), 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-secondary, #5C7A6A);
  margin-bottom: 8px;
}
.tag-uncertainty-core p {
  color: var(--color-text, #2C2C2C);
  font-size: 15px;
  margin-bottom: 0;
  line-height: 1.6;
}

@media (max-width: 767px) {
  .tag-uncertainty-visual { flex-direction: column; }
}

.tag-uncertainty .tag-insight-box {
  background: rgba(27, 43, 75, 0.04);
  border-left-color: var(--color-secondary, #5C7A6A);
}
.tag-uncertainty .tag-insight-box h3 {
  color: var(--color-primary, #1B2B4B);
}
.tag-uncertainty .tag-insight-box p {
  color: var(--color-text, #2C2C2C);
}
.tag-uncertainty .tag-insight-key {
  color: var(--color-secondary, #5C7A6A) !important;
}

/* ─── Comportamente ─── */
.tag-behaviors {
  background: var(--color-background-white, #FDFAF5);
}

.tag-behaviors-subtitle {
  color: var(--color-text, #2C2C2C);
  font-size: 17px;
  margin-top: -16px;
  margin-bottom: 32px;
}

.tag-behaviors-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 8px 0 24px;
}

.tag-behavior-card {
  padding: 28px;
  background: var(--color-background, #F5F0E8);
  border-radius: 12px;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
}
.tag-behavior-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(27, 43, 75, 0.06);
}

.tag-behavior-icon {
  margin-bottom: 16px;
}

.tag-behavior-card h3 {
  font-size: 18px;
  margin-bottom: 8px;
  color: var(--color-primary, #1B2B4B);
}

.tag-behavior-card p {
  color: var(--color-text, #2C2C2C);
  font-size: 15px;
  margin-bottom: 0;
  line-height: 1.7;
}

.tag-behavior-key {
  margin-top: 12px !important;
  font-size: 14px !important;
  font-style: italic;
  color: #C4966C !important;
  padding-top: 12px;
  border-top: 1px solid rgba(27, 43, 75, 0.06);
}

@media (max-width: 767px) {
  .tag-behaviors-grid { grid-template-columns: 1fr; }
}

/* ─── Psihodinamic ─── */
.tag-psyche {
  background: #1E2A3A;
  color: #FAF7F2;
}
.tag-psyche h2 { color: #FAF7F2; }
.tag-psyche h3 { color: #FAF7F2; }
.tag-psyche p { color: rgba(250, 247, 242, 0.85); }

.tag-psyche-intro {
  font-size: 18px;
  margin-bottom: 32px;
}
.tag-psyche-intro strong {
  color: #C4966C;
}

/* ─── Iceberg visual ─── */
.tag-iceberg {
  display: flex;
  gap: 32px;
  align-items: center;
  margin-bottom: 40px;
  padding-bottom: 0;
  border-bottom: none;
}
.tag-iceberg-visual {
  flex-shrink: 0;
}
.tag-iceberg-svg {
  width: 200px;
  height: auto;
}
.tag-iceberg-text {
  flex: 1;
}
.tag-iceberg-text p {
  font-size: 16px;
}

@media (max-width: 767px) {
  .tag-iceberg { flex-direction: column; gap: 20px; }
  .tag-iceberg-visual { order: -1; }
  .tag-iceberg-svg { width: 160px; }
}

.tag-under {
  margin-bottom: 40px;
  padding-bottom: 0;
  border-bottom: none;
}

.tag-case {
  padding: 28px;
  background: rgba(250, 247, 242, 0.05);
  border-radius: 12px;
  margin-bottom: 40px;
  position: relative;
}

.tag-case-label {
  font-family: var(--font-body), 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #C4966C;
  margin-bottom: 12px;
}

.tag-case-key {
  font-family: var(--font-heading), 'Fraunces', serif;
  font-size: 18px;
  color: #C4966C !important;
  margin-bottom: 0;
}

.tag-origins {
  margin-top: 20px;
}

.tag-origins-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 20px;
}

.tag-origin-card {
  padding: 24px;
  background: rgba(250, 247, 242, 0.06);
  border-radius: 10px;
  border-top: 2px solid #C4966C;
}
.tag-origin-emoji {
  font-size: 24px;
  display: block;
  margin-bottom: 8px;
}
.tag-origin-card h4 {
  font-family: var(--font-heading), 'Fraunces', serif;
  font-size: 17px;
  color: #FAF7F2;
  margin-bottom: 8px;
  font-weight: 500;
}
.tag-origin-card p {
  font-size: 15px;
  margin-bottom: 0;
}

@media (max-width: 767px) {
  .tag-origins-grid { grid-template-columns: 1fr; }
}

/* ─── Tratament ─── */
.tag-treatment {
  background: var(--color-background-white, #FDFAF5);
}

.tag-treatment-components {
  margin: 32px 0;
}

.tag-treatment-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 20px;
}

.tag-treatment-card {
  padding: 24px;
  background: var(--color-background, #F5F0E8);
  border-radius: 12px;
  position: relative;
}

.tag-treatment-num {
  font-family: var(--font-heading), 'Fraunces', serif;
  font-weight: 700;
  font-size: 36px;
  color: rgba(92, 122, 106, 0.2);
  line-height: 1;
  display: block;
  margin-bottom: 8px;
}

.tag-treatment-card h4 {
  font-family: var(--font-heading), 'Fraunces', serif;
  font-size: 17px;
  color: var(--color-primary, #1B2B4B);
  margin-bottom: 8px;
  font-weight: 500;
}

.tag-treatment-card p {
  color: var(--color-text, #2C2C2C);
  font-size: 15px;
  margin-bottom: 0;
}

.tag-worry-time {
  margin: 40px 0;
  padding: 32px;
  background: var(--color-background, #F5F0E8);
  border-radius: 12px;
}

.tag-worry-time-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}
.tag-worry-time-header h3 {
  margin-bottom: 0;
}

.tag-wt-steps {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tag-wt-step {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 16px;
  border-left: 2px solid var(--color-secondary, #5C7A6A);
  font-size: 15px;
  color: var(--color-text, #2C2C2C);
}

.tag-wt-step-num {
  font-family: var(--font-heading), 'Fraunces', serif;
  font-weight: 700;
  font-size: 18px;
  color: var(--color-secondary, #5C7A6A);
  flex-shrink: 0;
  width: 20px;
  line-height: 1.4;
}

.tag-wt-why {
  margin-top: 24px;
  padding: 20px;
  background: var(--color-background-white, #FDFAF5);
  border-radius: 8px;
}
.tag-wt-why h4 {
  font-family: var(--font-heading), 'Fraunces', serif;
  font-size: 16px;
  color: var(--color-primary, #1B2B4B);
  margin-bottom: 8px;
  font-weight: 500;
}
.tag-wt-why ul {
  list-style: none;
  padding: 0;
}
.tag-wt-why li {
  font-size: 15px;
  color: var(--color-text, #2C2C2C);
  margin-bottom: 6px;
  padding-left: 16px;
  position: relative;
}
.tag-wt-why li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-secondary, #5C7A6A);
  font-weight: 600;
}

.tag-meds {
  padding: 28px;
  background: var(--color-background, #F5F0E8);
  border-radius: 12px;
  border-left: 3px solid #C4966C;
}
.tag-meds h3 {
  font-size: 20px;
}
.tag-meds p {
  color: var(--color-text, #2C2C2C);
  font-size: 16px;
}
.tag-meds p:last-child { margin-bottom: 0; }

@media (max-width: 767px) {
  .tag-treatment-grid { grid-template-columns: 1fr; }
}

/* ─── Ce poți face acum ─── */
.tag-action {
  background: var(--color-background, #F5F0E8);
}

.tag-exercises {
  margin-top: 24px;
}

.tag-exercise {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  align-items: flex-start;
  padding: 28px;
  background: var(--color-background-white, #FDFAF5);
  border-radius: 12px;
}

.tag-exercise-num {
  font-family: var(--font-heading), 'Fraunces', serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 1;
  color: rgba(92, 122, 106, 0.2);
  flex-shrink: 0;
  width: 48px;
  text-align: center;
}

.tag-exercise h3 {
  font-size: 19px;
  margin-bottom: 6px;
}

.tag-exercise p {
  color: var(--color-text, #2C2C2C);
  font-size: 16px;
  margin-bottom: 0;
}

.tag-exercise-result {
  margin-top: 10px !important;
  padding-top: 10px;
  border-top: 1px solid rgba(27, 43, 75, 0.06);
  font-size: 15px !important;
  color: var(--color-secondary, #5C7A6A) !important;
  font-style: italic;
}

/* ─── Specialist + CTA ─── */
.tag-help {
  background: var(--color-background-white, #FDFAF5);
}

.tag-specialist-signs {
  margin: 24px 0 32px;
}

.tag-sign {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 12px 0;
  border-bottom: 1px solid rgba(27, 43, 75, 0.06);
}
.tag-sign:last-child { border-bottom: none; }

.tag-sign-check {
  color: var(--color-secondary, #5C7A6A);
  font-weight: 700;
  font-size: 16px;
  flex-shrink: 0;
  margin-top: 2px;
}

.tag-sign p {
  color: var(--color-text, #2C2C2C);
  margin-bottom: 0;
}

.tag-cta-block {
  text-align: center;
  padding: 48px 32px;
  background: var(--color-primary, #1B2B4B);
  border-radius: 16px;
  margin-top: 16px;
}

.tag-cta-block h3 {
  color: #FAF7F2;
  font-size: 28px;
  margin-bottom: 12px;
}

.tag-cta-block p {
  color: rgba(250, 247, 242, 0.8);
  margin-bottom: 24px;
}

.tag-cta-primary {
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
.tag-cta-primary:hover { background: #4A6858; transform: translateY(-1px); }
.tag-cta-primary:focus-visible { outline: 2px solid #fff; outline-offset: 2px; }
.tag-cta-primary:active { transform: translateY(0); }

/* ─── FAQ ─── */
.tag-faq {
  background: var(--color-background, #F5F0E8);
}

.tag-faq-list {
  margin-top: 24px;
}

.tag-faq-item {
  border-bottom: 1px solid rgba(27, 43, 75, 0.08);
}

.tag-faq-question {
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
.tag-faq-question:hover { color: var(--color-secondary, #5C7A6A); }
.tag-faq-question:focus-visible { outline: 2px solid var(--color-secondary, #5C7A6A); outline-offset: 2px; border-radius: 2px; }

.tag-faq-chevron {
  flex-shrink: 0;
  transition: transform 0.3s ease-out;
  color: var(--color-text-secondary, #5A5A5A);
}
.tag-faq-chevron-open {
  transform: rotate(180deg);
}

.tag-faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}
.tag-faq-answer-open {
  max-height: 400px;
}
.tag-faq-answer p {
  padding: 0 0 20px;
  color: var(--color-text, #2C2C2C);
  font-size: 16px;
  line-height: 1.7;
}

/* ─── Footer ─── */
.tag-footer {
  background: var(--color-background-white, #FDFAF5);
  padding: 48px 24px;
}

.tag-references {
  margin-bottom: 32px;
}

.tag-references-toggle {
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
.tag-references-toggle:hover { color: var(--color-secondary, #5C7A6A); }
.tag-references-toggle:focus-visible { outline: 2px solid var(--color-secondary, #5C7A6A); outline-offset: 4px; border-radius: 2px; }

.tag-references-icon {
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

.tag-references-toggle-open .tag-references-icon {
  transform: rotate(45deg);
}

.tag-references-list {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease-out;
  padding-left: 38px;
}
.tag-references-open {
  max-height: 5000px;
}

.tag-references-list p {
  font-size: 14px;
  line-height: 1.6;
  color: var(--color-text-secondary, #5A5A5A);
  margin-bottom: 12px;
  padding-top: 12px;
}
.tag-references-list p:first-child {
  padding-top: 20px;
}
.tag-references-list em {
  font-style: italic;
}

.tag-disclaimer {
  font-size: 13px;
  color: var(--color-text-secondary, #5A5A5A);
  text-align: center;
}
`;
