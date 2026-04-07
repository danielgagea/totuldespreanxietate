"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useCallback } from "react";

const clinicalCreds = [
  {
    icon: "🌿",
    title: "Psihoterapeut format în Psihoterapie Pozitivă",
    detail: "WAPP, Wiesbaden, Germania",
  },
  {
    icon: "🔮",
    title: "În formare în Psihologie analitică",
    detail: "Societatea Română de Analiză Jungiană",
  },
  {
    icon: "🧠",
    title: "Specializat în evaluarea, argumentarea și predicția comportamentului uman",
    detail: "",
  },
  {
    icon: "🫀",
    title: "Specializat în Evaluarea și Intervenția în Traumă",
    detail: "Gabor Maté",
  },
  {
    icon: "🛡️",
    title: "Format în Intervenția Traumei",
    detail: "APP Institute",
  },
  {
    icon: "📋",
    title: "Atestat în Psihologie clinică",
    detail: "Colegiul Psihologilor din România",
  },
];

const complementaryCreds = [
  { icon: "🏢", title: "Atestat în Psihologia muncii", detail: "" },
  { icon: "⚙️", title: "Atestat în Psihologie organizațională", detail: "" },
  { icon: "🥗", title: "Specializat în psihonutriție", detail: "" },
  {
    icon: "🎯",
    title: "Specializat în psihologia performanței și a productivității",
    detail: "",
  },
  {
    icon: "👥",
    title: "Specializat în management resurse umane",
    detail: "",
  },
  {
    icon: "📐",
    title: "Specializat în management de proiect",
    detail: "",
  },
];

const principles = [
  {
    text: "Nu dau sfaturi. Te ajut să înțelegi ce se întâmplă și de ce.",
  },
  {
    text: "Fiecare simptom are un mesaj. Când îl asculți, nu mai trebuie să strige.",
  },
  {
    text: "Nu grăbesc procesul. Fiecare persoană are ritmul ei, și asta e în regulă.",
  },
  {
    text: "Lucrez cu ceea ce aduci tu, nu cu ceea ce cred eu că ai nevoie.",
  },
];

const diplomas = [
  {
    src: "/images/diplome/wapp-membership.png",
    alt: "WAPP Membership 2019 .. Certificat de membru al World Association for Positive and Transcultural Psychotherapy",
    title: "WAPP Membership 2019",
  },
  {
    src: "/images/diplome/atestat-psihologie-clinica.png",
    alt: "Atestat Liberă Practică emis de Colegiul Psihologilor din România",
    title: "Atestat Liberă Practică CPR",
  },
];

const reviews = [
  {
    name: "Kis Claudiu",
    initial: "K",
    color: "#7E57C2",
    stars: 5,
    time: "acum 2 luni",
    text: "Am apelat la serviciile lui Daniel deoarece îmi era dificil să vorbesc despre ceea ce simt, despre relațiile conflictuale din familie, dar și despre etape dificile din viața profesională. Cu ajutorul lui, am reușit să depășesc aceste momente și, totodată, să mă pregătesc pentru provocările viitoare. Ședințele de terapie au reprezentat un adevărat boost de moral, pentru că m-au ajutat să ajung singur la concluziile care erau cu adevărat bune pentru mine. Recomand cu încredere, pe lângă profesionalismul de care a dat dovadă, Daniel este un om deosebit.",
  },
  {
    name: "George Dumitrescu",
    initial: "G",
    color: "#5C7A6A",
    stars: 5,
    time: "acum 3 luni",
    text: "Am avut o experiență deosebită cu domnul Daniel pe parcursul dezvoltării personale. Cel mai mult m-a ajutat sa vad aceeasi problema din mai multe perspective și sa actionez conform necesităților. Pe aceasta cale îi mulțumesc cu deferență pentru activitate extrem de fructuoasă.",
  },
  {
    name: "Alex Diaconu (Carbit)",
    initial: "A",
    color: "#C4966C",
    stars: 5,
    time: "acum 6 luni",
    text: "Am găsit în Daniel sprijinul de care aveam nevoie pentru a înțelege și gestiona anxietatea. Experiența mea a fost una foarte benefică. Am învățat să îmi stăpânesc anxietatea și să privesc cu mai multă claritate situațiile din viața mea. Cel mai important, am dobândit fermitate în luarea deciziilor și curajul de a le susține. Sunt recunoscător pentru sprijin și recomand cu încredere oricui caută ajutor psihologic autentic!",
  },
  {
    name: "Miruna Balu",
    initial: "M",
    color: "#C4614A",
    stars: 5,
    time: "acum un an",
    text: "Anul acesta a fost unul plin de provocări, iar sprijinul terapeutului meu a fost esențial pentru a le depăși. Am construit împreună un raport terapeutic deosebit, care m-a ajutat să înțeleg și să accesez resursele interioare necesare pentru a gestiona emoțiile negative și situațiile dificile. Prin sesiuni pline de empatie și profesionalism, am reușit să capăt încredere în capacitatea mea de a face față neprevăzutului și de a găsi echilibrul în momente complicate.",
  },
  {
    name: "Dora Constantinescu",
    initial: "D",
    color: "#1B2B4B",
    stars: 5,
    time: "acum 2 ani",
    text: "Am luat cea mai înțeleaptă decizie atunci când am hotărât să îi cer ajutorul lui Daniel. Experiența pierderii mamei și o căsnicie cu probleme urmată de un divorț mi-a lăsat răni. Daniel este un om înțelept, dedicat, implicat, calm și lista poate continua. El m-a ajutat să îmi regăsesc echilibrul pe toate planurile, să mă prețuiesc și să îmi recapăt încrederea în mine.",
  },
  {
    name: "Acasandrei Iulian",
    initial: "A",
    color: "#5C7A6A",
    stars: 5,
    time: "acum 3 ani",
    text: "Cuvântul \"psiholog\" e unul de temut pentru majoritatea oamenilor, dar Daniel a reușit să facă experiența una plăcută. Discuțiile cu el m-au făcut să conștientizez anumite lucruri utile pentru viața de zi cu zi și pentru scopul pe care mi l-am propus să-l ating. Mulțumesc Daniel! Recomand cu toată încrederea!",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="rv-stars">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#FBBC04">
          <path d="M8 1.3l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9L4.4 12.3l.7-4L2.2 5.5l4-.6z"/>
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review: r }: { review: typeof reviews[0] }) {
  const [expanded, setExpanded] = useState(false);
  const needsTruncation = r.text.length > 200;

  return (
    <div className={`rv-card ${expanded ? "rv-card-expanded" : ""}`}>
      <div className="rv-card-header">
        <div className="rv-avatar" style={{ backgroundColor: r.color }}>
          {r.initial}
        </div>
        <div>
          <p className="rv-name">{r.name}</p>
          <StarRating count={r.stars} />
        </div>
        <span className="rv-time">{r.time}</span>
      </div>
      <p className={`rv-text ${expanded ? "rv-text-expanded" : ""}`}>{r.text}</p>
      {needsTruncation && (
        <button
          className="rv-expand"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Mai puțin" : "Citește tot"}
        </button>
      )}
    </div>
  );
}

function ReviewsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  const scroll = useCallback((dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 340;
    el.scrollBy({ left: dir === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
    setTimeout(checkScroll, 400);
  }, [checkScroll]);

  return (
    <section className="about-section about-bg-white">
      <div className="about-wide">
        <div className="rv-header">
          <div>
            <h2 className="rv-title">Ce spun oamenii care au lucrat cu mine</h2>
            <div className="rv-google-badge">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M16.5 9.2c0-.6-.1-1.2-.2-1.7H9v3.2h4.2c-.2 1-.7 1.8-1.5 2.4v2h2.4c1.4-1.3 2.4-3.2 2.4-5.9z" fill="#4285F4"/>
                <path d="M9 17c2 0 3.7-.7 5-1.9l-2.4-2c-.7.5-1.5.7-2.6.7-2 0-3.7-1.3-4.3-3.2H2.2v2C3.5 15.1 6 17 9 17z" fill="#34A853"/>
                <path d="M4.7 10.7c-.2-.5-.2-1 0-1.4V7.2H2.2C1.4 8.7 1.4 10.4 2.2 12l2.5-1.3z" fill="#FBBC04"/>
                <path d="M9 3.6c1.1 0 2.1.4 2.8 1.1l2.1-2.1C12.7 1.4 11 .7 9 .7 6 .7 3.5 2.6 2.2 5.2l2.5 2c.6-1.8 2.3-3.2 4.3-3.6z" fill="#EA4335"/>
              </svg>
              <span>Google Reviews</span>
              <span className="rv-rating">5.0</span>
            </div>
          </div>
          <div className="rv-nav">
            <button
              className={`rv-nav-btn ${!canScrollLeft ? "rv-nav-disabled" : ""}`}
              onClick={() => scroll("left")}
              aria-label="Review anterior"
              disabled={!canScrollLeft}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12 15L7 10L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              className={`rv-nav-btn ${!canScrollRight ? "rv-nav-disabled" : ""}`}
              onClick={() => scroll("right")}
              aria-label="Review următor"
              disabled={!canScrollRight}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M8 5L13 10L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div
          className="rv-track"
          ref={scrollRef}
          onScroll={checkScroll}
        >
          {reviews.map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function DespreDesignPage() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <>
      <style>{aboutStyles}</style>

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <div className="about-hero-photo-wrap">
            <Image
              src="/images/daniel-gagea.jpg"
              alt="Daniel Gagea, psiholog clinician, psihoterapeut"
              width={300}
              height={300}
              className="about-hero-photo"
              priority
            />
          </div>
          <div className="about-hero-text">
            <p className="about-hero-label">
              Psiholog clinician, psihoterapeut
            </p>
            <h1 className="about-hero-name">Daniel Gagea</h1>
            <p className="about-hero-intro">
              Lucrez cu oameni care se confruntă cu anxietatea de peste 10 ani.
              Am avut privilegiul de a însoți peste 500 de persoane în procesul
              lor de a înțelege ce li se întâmplă și de a descoperi că
              simptomele lor au un sens.
            </p>
            <div className="about-hero-stats">
              <div className="about-stat">
                <span className="about-stat-number">10+</span>
                <span className="about-stat-label">ani experiență</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-number">500+</span>
                <span className="about-stat-label">clienți</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DE CE ANXIETATEA */}
      <section className="about-section about-bg-white">
        <div className="about-content">
          <h2 className="about-h2">De ce anxietatea</h2>
          <p className="about-body">
            Majoritatea oamenilor care ajung la mine vin cu aceleași întrebări..
            „De ce îmi bate inima așa?", „Am ceva grav?", „De ce nu trece?".
            Au fost la cardiolog, la neurolog, la urgențe. Analizele sunt
            normale, dar ei se simt tot rău.
          </p>
          <p className="about-body">
            Am ales să mă specializez în anxietate pentru că am văzut cât de
            mult suferă oamenii nu doar din cauza simptomelor, ci din cauza
            confuziei. Nimeni nu le-a explicat ce se întâmplă, de ce se
            întâmplă, și mai ales, ce vrea să le spună psihicul lor prin aceste
            simptome.
          </p>
          <div className="about-insight-box">
            <p className="about-insight-text">
              Abordarea mea e diferită de ce găsești în majoritatea resurselor
              din România. Nu mă opresc la „ce este anxietatea". Merg mai
              departe, spre „ce vrea să îți spună psihicul tău prin acest
              simptom". Fiecare senzație fizică, fiecare gând recurent, fiecare
              evitare are o logică. Când o descoperi, simptomul nu mai trebuie
              să strige ca să fie auzit.
            </p>
          </div>
        </div>
      </section>

      {/* FORMAREA MEA */}
      <section className="about-section about-bg-warm">
        <div className="about-content about-content-wide">
          <h2 className="about-h2">Formarea mea</h2>

          <h3 className="about-h3">Formarea clinică</h3>
          <div className="about-creds-grid">
            {clinicalCreds.map((cred, i) => (
              <div key={i} className="about-cred-card">
                <span className="about-cred-icon">{cred.icon}</span>
                <div>
                  <p className="about-cred-title">{cred.title}</p>
                  {cred.detail && (
                    <p className="about-cred-detail">{cred.detail}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <h3 className="about-h3 about-h3-spacing">Formarea complementară</h3>
          <div className="about-creds-grid">
            {complementaryCreds.map((cred, i) => (
              <div key={i} className="about-cred-card about-cred-card-secondary">
                <span className="about-cred-icon">{cred.icon}</span>
                <div>
                  <p className="about-cred-title">{cred.title}</p>
                  {cred.detail && (
                    <p className="about-cred-detail">{cred.detail}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIPLOME */}
      <section className="about-section about-bg-white">
        <div className="about-content about-content-wide">
          <h2 className="about-h2">Diplome și atestări</h2>
          <div className="about-diplomas-grid">
            {diplomas.map((diploma, i) => (
              <button
                key={i}
                className="about-diploma-card"
                onClick={() => setLightboxImage(diploma.src)}
                aria-label={`Vezi ${diploma.title} în format mare`}
              >
                <Image
                  src={diploma.src}
                  alt={diploma.alt}
                  width={400}
                  height={300}
                  className="about-diploma-img"
                />
                <p className="about-diploma-title">{diploma.title}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CUM LUCREZ */}
      <section className="about-section about-bg-dark">
        <div className="about-content">
          <h2 className="about-h2 about-h2-light">Cum lucrez</h2>
          <div className="about-principles">
            {principles.map((p, i) => (
              <div key={i} className="about-principle">
                <span className="about-principle-number">0{i + 1}</span>
                <p className="about-principle-text">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <ReviewsCarousel />

      {/* CTA */}
      <section className="about-section about-bg-warm">
        <div className="about-content">
          <div className="about-cta-block">
            <h2 className="about-cta-title">Vrei să vorbim?</h2>
            <p className="about-cta-body">
              Dacă te regăsești în ce ai citit pe acest site și simți că ai
              nevoie de cineva care să te ajute să înțelegi ce ți se întâmplă,
              putem programa o primă conversație.
            </p>
            <Link
              href="/programare?din=despre-daniel"
              className="about-cta-button"
            >
              Programează o consultație
            </Link>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxImage && (
        <div
          className="about-lightbox"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Imagine mărită"
        >
          <button
            className="about-lightbox-close"
            onClick={() => setLightboxImage(null)}
            aria-label="Închide"
          >
            ✕
          </button>
          <Image
            src={lightboxImage}
            alt="Diplomă mărită"
            width={900}
            height={700}
            className="about-lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

const aboutStyles = `
/* HERO */
.about-hero {
  background: var(--color-background, #F5F0E8);
  padding: 100px 24px 80px;
}

.about-hero-inner {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 56px;
}

.about-hero-photo-wrap {
  flex-shrink: 0;
}

.about-hero-photo {
  width: 300px;
  height: 300px;
  border-radius: 16px;
  object-fit: cover;
  box-shadow:
    0 4px 16px rgba(27, 43, 75, 0.08),
    0 1px 4px rgba(27, 43, 75, 0.04);
}

.about-hero-text {
  flex: 1;
}

.about-hero-label {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-secondary, #5C7A6A);
  margin-bottom: 8px;
}

.about-hero-name {
  font-family: var(--font-heading), 'Fraunces', serif;
  font-size: 38px;
  font-weight: 400;
  color: var(--color-primary, #1B2B4B);
  letter-spacing: -0.03em;
  margin-bottom: 20px;
  line-height: 1.2;
}

.about-hero-intro {
  font-family: var(--font-body);
  font-size: 17px;
  line-height: 1.75;
  color: var(--color-text, #2C2C2C);
  margin-bottom: 28px;
}

.about-hero-stats {
  display: flex;
  gap: 40px;
}

.about-stat {
  display: flex;
  flex-direction: column;
}

.about-stat-number {
  font-family: var(--font-heading), 'Fraunces', serif;
  font-size: 32px;
  font-weight: 400;
  color: var(--color-primary, #1B2B4B);
  line-height: 1.1;
}

.about-stat-label {
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--color-text-secondary, #5A5A5A);
  margin-top: 4px;
}

/* SECTIONS */
.about-section {
  padding: 80px 24px;
}

.about-bg-warm {
  background: var(--color-background, #F5F0E8);
}

.about-bg-white {
  background: var(--color-background-white, #FDFAF5);
}

.about-bg-dark {
  background: var(--color-primary, #1B2B4B);
}

.about-content {
  max-width: 760px;
  margin: 0 auto;
}

.about-content-wide {
  max-width: 900px;
}

/* TYPOGRAPHY */
.about-h2 {
  font-family: var(--font-heading), 'Fraunces', serif;
  font-size: 30px;
  font-weight: 400;
  color: var(--color-primary, #1B2B4B);
  letter-spacing: -0.03em;
  margin-bottom: 28px;
  line-height: 1.25;
}

.about-h2-light {
  color: #FAF7F2;
}

.about-h3 {
  font-family: var(--font-heading), 'Fraunces', serif;
  font-size: 22px;
  font-weight: 500;
  color: var(--color-primary, #1B2B4B);
  margin-bottom: 20px;
}

.about-h3-spacing {
  margin-top: 48px;
}

.about-body {
  font-family: var(--font-body);
  font-size: 17px;
  line-height: 1.75;
  color: var(--color-text, #2C2C2C);
  margin-bottom: 20px;
}

/* INSIGHT BOX */
.about-insight-box {
  background: var(--color-primary, #1B2B4B);
  border-radius: 12px;
  padding: 32px;
  margin-top: 32px;
}

.about-insight-text {
  font-family: var(--font-body);
  font-size: 17px;
  line-height: 1.75;
  color: rgba(250, 247, 242, 0.9);
}

/* CREDENTIALS GRID */
.about-creds-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.about-cred-card {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 20px;
  background: var(--color-background-white, #FDFAF5);
  border-radius: 12px;
  border: 1px solid rgba(27, 43, 75, 0.06);
  box-shadow:
    0 2px 8px rgba(27, 43, 75, 0.04),
    0 1px 2px rgba(27, 43, 75, 0.02);
}

.about-cred-card-secondary {
  background: rgba(253, 250, 245, 0.6);
  border: 1px solid rgba(27, 43, 75, 0.04);
  box-shadow: 0 1px 4px rgba(27, 43, 75, 0.03);
}

.about-cred-icon {
  font-size: 24px;
  flex-shrink: 0;
  line-height: 1;
  margin-top: 2px;
}

.about-cred-title {
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 600;
  color: var(--color-text, #2C2C2C);
  line-height: 1.45;
}

.about-cred-detail {
  font-family: var(--font-body);
  font-size: 13px;
  color: var(--color-text-secondary, #5A5A5A);
  margin-top: 4px;
  line-height: 1.4;
}

/* DIPLOMAS */
.about-diplomas-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.about-diploma-card {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  text-align: center;
  transition: transform 0.2s ease-out, opacity 0.2s ease-out;
}

.about-diploma-card:hover {
  transform: translateY(-2px);
}

.about-diploma-card:focus-visible {
  outline: 2px solid var(--color-secondary, #5C7A6A);
  outline-offset: 4px;
  border-radius: 12px;
}

.about-diploma-card:active {
  transform: translateY(0);
}

.about-diploma-img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow:
    0 4px 16px rgba(27, 43, 75, 0.08),
    0 1px 4px rgba(27, 43, 75, 0.04);
}

.about-diploma-title {
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--color-text-secondary, #5A5A5A);
  margin-top: 12px;
}

/* PRINCIPLES (dark section) */
.about-principles {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.about-principle {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 24px;
  background: rgba(250, 247, 242, 0.06);
  border-radius: 12px;
  border-left: 3px solid var(--color-secondary, #5C7A6A);
}

.about-principle-number {
  font-family: var(--font-heading), 'Fraunces', serif;
  font-size: 28px;
  font-weight: 400;
  color: rgba(250, 247, 242, 0.25);
  flex-shrink: 0;
  line-height: 1;
  margin-top: 2px;
}

.about-principle-text {
  font-family: var(--font-body);
  font-size: 17px;
  line-height: 1.75;
  color: rgba(250, 247, 242, 0.9);
}

/* CTA */
.about-cta-block {
  background: var(--color-primary, #1B2B4B);
  border-radius: 16px;
  padding: 40px 32px;
  text-align: center;
}

.about-cta-title {
  font-family: var(--font-heading), 'Fraunces', serif;
  font-size: 30px;
  font-weight: 400;
  color: #FAF7F2;
  margin-bottom: 16px;
  letter-spacing: -0.03em;
}

.about-cta-body {
  font-family: var(--font-body);
  font-size: 17px;
  line-height: 1.75;
  color: rgba(250, 247, 242, 0.8);
  max-width: 520px;
  margin: 0 auto 28px;
}

.about-cta-button {
  display: inline-block;
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 600;
  color: var(--color-primary, #1B2B4B);
  background: #FAF7F2;
  padding: 14px 32px;
  border-radius: 8px;
  text-decoration: none;
  transition: transform 0.2s ease-out, opacity 0.2s ease-out;
}

.about-cta-button:hover {
  transform: translateY(-1px);
  opacity: 0.92;
}

.about-cta-button:active {
  transform: translateY(0);
}

.about-cta-button:focus-visible {
  outline: 2px solid var(--color-secondary, #5C7A6A);
  outline-offset: 3px;
}

/* LIGHTBOX */
.about-lightbox {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.82);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  cursor: pointer;
}

.about-lightbox-close {
  position: absolute;
  top: 20px;
  right: 24px;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  font-size: 28px;
  cursor: pointer;
  padding: 8px;
  transition: opacity 0.2s ease-out;
  z-index: 101;
}

.about-lightbox-close:hover {
  opacity: 0.6;
}

.about-lightbox-close:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 4px;
  border-radius: 4px;
}

.about-lightbox-img {
  max-width: 90vw;
  max-height: 85vh;
  width: auto;
  height: auto;
  border-radius: 8px;
  cursor: default;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.4);
}

/* MOBILE */
@media (max-width: 767px) {
  .about-hero {
    padding: 80px 24px 48px;
  }

  .about-hero-inner {
    flex-direction: column;
    text-align: center;
    gap: 32px;
  }

  .about-hero-photo {
    width: 200px;
    height: 200px;
  }

  .about-hero-name {
    font-size: 30px;
  }

  .about-hero-stats {
    justify-content: center;
  }

  .about-section {
    padding: 48px 24px;
  }

  .about-h2 {
    font-size: 26px;
  }

  .about-creds-grid {
    grid-template-columns: 1fr;
  }

  .about-diplomas-grid {
    grid-template-columns: 1fr;
  }

  .about-cta-block {
    padding: 32px 24px;
  }

  .about-cta-title {
    font-size: 26px;
  }
}

/* ─── Reviews Carousel ─── */
.about-wide {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

.rv-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 32px;
}

.rv-title {
  font-family: var(--font-heading), 'Fraunces', serif;
  font-size: 28px;
  font-weight: 400;
  color: var(--color-primary, #1B2B4B);
  letter-spacing: -0.02em;
  margin-bottom: 8px;
}

.rv-google-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--color-text-secondary, #5A5A5A);
}

.rv-rating {
  font-weight: 700;
  color: var(--color-primary, #1B2B4B);
}

.rv-nav {
  display: flex;
  gap: 8px;
}

.rv-nav-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(27, 43, 75, 0.15);
  background: var(--color-background-white, #FDFAF5);
  color: var(--color-primary, #1B2B4B);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease-out, opacity 0.2s ease-out;
}
.rv-nav-btn:hover { transform: scale(1.08); }
.rv-nav-btn:active { transform: scale(0.95); }
.rv-nav-btn:focus-visible { outline: 2px solid var(--color-secondary); outline-offset: 2px; }
.rv-nav-disabled {
  opacity: 0.3;
  cursor: default;
}
.rv-nav-disabled:hover { transform: none; }

.rv-track {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 8px;
  scrollbar-width: none;
}
.rv-track::-webkit-scrollbar { display: none; }

.rv-card {
  flex-shrink: 0;
  width: 340px;
  padding: 28px;
  background: var(--color-background, #F5F0E8);
  border-radius: 14px;
  border: 1px solid rgba(27, 43, 75, 0.06);
  scroll-snap-align: start;
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
}
.rv-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(27, 43, 75, 0.06);
}

.rv-card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  position: relative;
}

.rv-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  font-family: var(--font-body), sans-serif;
  flex-shrink: 0;
}

.rv-name {
  font-size: 15px;
  font-weight: 600;
  color: var(--color-primary, #1B2B4B);
  margin-bottom: 2px;
}

.rv-stars {
  display: flex;
  gap: 1px;
}

.rv-time {
  position: absolute;
  right: 0;
  top: 0;
  font-size: 12px;
  color: var(--color-text-secondary, #5A5A5A);
}

.rv-text {
  font-size: 14px;
  line-height: 1.7;
  color: var(--color-text, #2C2C2C);
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.rv-text-expanded {
  display: block;
  -webkit-line-clamp: unset;
  overflow: visible;
}

.rv-expand {
  display: inline-block;
  margin-top: 8px;
  font-size: 13px;
  font-weight: 600;
  color: var(--color-secondary, #5C7A6A);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  transition: color 0.2s ease-out;
}
.rv-expand:hover { color: #4A6858; }
.rv-expand:focus-visible { outline: 2px solid var(--color-secondary); outline-offset: 2px; border-radius: 2px; }

.rv-card-expanded {
  width: 340px;
}

@media (max-width: 767px) {
  .rv-header { flex-direction: column; align-items: flex-start; gap: 16px; }
  .rv-title { font-size: 24px; }
  .rv-card { width: 290px; padding: 22px; }
  .rv-nav { align-self: flex-end; }
}
`;
