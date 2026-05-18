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
    title:
      "Specializat în evaluarea, argumentarea și predicția comportamentului uman",
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
  { icon: "👥", title: "Specializat în management resurse umane", detail: "" },
  { icon: "📐", title: "Specializat în management de proiect", detail: "" },
];

const principles = [
  "Nu dau sfaturi. Te ajut să înțelegi ce se întâmplă și de ce.",
  "Fiecare simptom are un mesaj. Când îl asculți, nu mai trebuie să strige.",
  "Nu grăbesc procesul. Fiecare persoană are ritmul ei, și asta e în regulă.",
  "Lucrez cu ceea ce aduci tu, nu cu ceea ce cred eu că ai nevoie.",
];

const diplomas = [
  {
    src: "/images/diplome/wapp-membership.png",
    alt: "WAPP Membership 2019",
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
    color: "#4fb1d6",
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
    color: "#081d3d",
    stars: 5,
    time: "acum 2 ani",
    text: "Am luat cea mai înțeleaptă decizie atunci când am hotărât să îi cer ajutorul lui Daniel. Experiența pierderii mamei și o căsnicie cu probleme urmată de un divorț mi-a lăsat răni. Daniel este un om înțelept, dedicat, implicat, calm și lista poate continua. El m-a ajutat să îmi regăsesc echilibrul pe toate planurile, să mă prețuiesc și să îmi recapăt încrederea în mine.",
  },
  {
    name: "Acasandrei Iulian",
    initial: "A",
    color: "#4fb1d6",
    stars: 5,
    time: "acum 3 ani",
    text: 'Cuvântul "psiholog" e unul de temut pentru majoritatea oamenilor, dar Daniel a reușit să facă experiența una plăcută. Discuțiile cu el m-au făcut să conștientizez anumite lucruri utile pentru viața de zi cu zi și pentru scopul pe care mi l-am propus să-l ating. Mulțumesc Daniel! Recomand cu toată încrederea!',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-px">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#FBBC04">
          <path d="M8 1.3l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9L4.4 12.3l.7-4L2.2 5.5l4-.6z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review: r }: { review: (typeof reviews)[0] }) {
  const [expanded, setExpanded] = useState(false);
  const needsTruncation = r.text.length > 200;

  return (
    <div className="flex w-[300px] shrink-0 snap-start flex-col gap-4 rounded-md border border-lp-border bg-white p-6 shadow-[0_2px_8px_rgba(8,29,61,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(8,29,61,0.08)] md:w-[340px] md:p-7">
      <div className="relative flex items-center gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-base font-bold text-white"
          style={{ backgroundColor: r.color }}
        >
          {r.initial}
        </div>
        <div>
          <p className="text-sm font-semibold text-lp-navy">{r.name}</p>
          <StarRating count={r.stars} />
        </div>
        <span className="absolute right-0 top-0 text-xs text-lp-mute-soft">
          {r.time}
        </span>
      </div>
      <p
        className={`text-sm leading-relaxed text-lp-mute ${expanded ? "" : "line-clamp-5"}`}
      >
        {r.text}
      </p>
      {needsTruncation && (
        <button
          type="button"
          className="self-start text-xs font-semibold text-lp-cyan-dark transition hover:text-lp-navy"
          onClick={() => setExpanded((v) => !v)}
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

  const scroll = useCallback(
    (dir: "left" | "right") => {
      const el = scrollRef.current;
      if (!el) return;
      const cardWidth = 360;
      el.scrollBy({
        left: dir === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 400);
    },
    [checkScroll],
  );

  const navBtn =
    "flex h-10 w-10 items-center justify-center rounded-full border border-lp-border bg-white text-lp-navy transition hover:scale-105 hover:border-lp-cyan disabled:opacity-30 disabled:hover:scale-100";

  return (
    <section className="bg-white px-6 py-20 md:py-24">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
              Recenzii
            </p>
            <h2 className="mt-3 font-work text-3xl font-bold leading-tight tracking-tight text-lp-navy md:text-4xl">
              Ce spun oamenii care au lucrat cu mine.
            </h2>
            <div className="mt-3 flex items-center gap-2 text-sm text-lp-mute-soft">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                <path
                  d="M16.5 9.2c0-.6-.1-1.2-.2-1.7H9v3.2h4.2c-.2 1-.7 1.8-1.5 2.4v2h2.4c1.4-1.3 2.4-3.2 2.4-5.9z"
                  fill="#4285F4"
                />
                <path
                  d="M9 17c2 0 3.7-.7 5-1.9l-2.4-2c-.7.5-1.5.7-2.6.7-2 0-3.7-1.3-4.3-3.2H2.2v2C3.5 15.1 6 17 9 17z"
                  fill="#34A853"
                />
                <path
                  d="M4.7 10.7c-.2-.5-.2-1 0-1.4V7.2H2.2C1.4 8.7 1.4 10.4 2.2 12l2.5-1.3z"
                  fill="#FBBC04"
                />
                <path
                  d="M9 3.6c1.1 0 2.1.4 2.8 1.1l2.1-2.1C12.7 1.4 11 .7 9 .7 6 .7 3.5 2.6 2.2 5.2l2.5 2c.6-1.8 2.3-3.2 4.3-3.6z"
                  fill="#EA4335"
                />
              </svg>
              <span>Google Reviews</span>
              <span className="font-bold text-lp-navy">5.0</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              className={navBtn}
              onClick={() => scroll("left")}
              aria-label="Review anterior"
              disabled={!canScrollLeft}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M12 15L7 10L12 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              className={navBtn}
              onClick={() => scroll("right")}
              aria-label="Review următor"
              disabled={!canScrollRight}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M8 5L13 10L8 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {reviews.map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function DespreDanielPage() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <main className="font-work min-h-screen bg-white text-lp-navy">
      {/* HERO */}
      <section className="bg-white px-6 pt-14 pb-16 md:pt-20 md:pb-24">
        <div className="mx-auto grid max-w-[1100px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <div className="relative mx-auto aspect-[1/1] w-full max-w-[360px] overflow-hidden rounded-md bg-lp-bg shadow-[0_20px_60px_rgba(8,29,61,0.12)] lg:mx-0">
            <Image
              src="/images/daniel-gagea.jpg"
              alt="Daniel Gagea, psiholog clinician, psihoterapeut"
              fill
              sizes="(max-width: 1024px) 80vw, 360px"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
              Psiholog clinician, psihoterapeut
            </p>
            <h1 className="mt-3 font-work text-4xl font-bold leading-[1.05] tracking-tight text-lp-navy md:text-5xl lg:text-6xl">
              <span className="lp-yellow-underline">Daniel Gagea</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-lp-mute md:text-xl">
              Lucrez cu oameni care se confruntă cu anxietatea de peste 10 ani.
              Am avut privilegiul de a însoți peste 500 de persoane în procesul
              lor de a înțelege ce li se întâmplă și de a descoperi că
              simptomele lor au un sens.
            </p>
            <div className="mt-8 flex gap-10">
              <div>
                <span className="block font-work text-3xl font-extrabold leading-none tracking-tight text-lp-navy md:text-4xl">
                  10+
                </span>
                <span className="mt-1 block text-sm text-lp-mute-soft">
                  ani experiență
                </span>
              </div>
              <div>
                <span className="block font-work text-3xl font-extrabold leading-none tracking-tight text-lp-navy md:text-4xl">
                  500+
                </span>
                <span className="mt-1 block text-sm text-lp-mute-soft">
                  clienți
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DE CE ANXIETATEA */}
      <section className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Specializare
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            De ce <span className="lp-yellow-underline">anxietatea</span>.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Majoritatea oamenilor care ajung la mine vin cu aceleași
              întrebări.. de ce îmi bate inima așa, am ceva grav, de ce nu trece.
              Mulți trec prin{" "}
              <Link
                href="/atac-de-panica"
                className="text-lp-cyan-dark underline-offset-2 hover:underline"
              >
                atacuri de panică
              </Link>{" "}
              fără să știe ce sunt. Au fost la cardiolog, la neurolog, la
              urgențe. Analizele sunt normale, dar ei se simt tot rău.
            </p>
            <p>
              Am ales să mă specializez în anxietate pentru că am văzut cât de
              mult suferă oamenii nu doar din cauza simptomelor, ci din cauza
              confuziei. Fie că e vorba de{" "}
              <Link
                href="/tipuri/anxietate-generalizata"
                className="text-lp-cyan-dark underline-offset-2 hover:underline"
              >
                anxietate generalizată
              </Link>
              , de{" "}
              <Link
                href="/tipuri/anxietate-sociala"
                className="text-lp-cyan-dark underline-offset-2 hover:underline"
              >
                anxietate socială
              </Link>{" "}
              sau de{" "}
              <Link
                href="/tipuri/fobii-specifice"
                className="text-lp-cyan-dark underline-offset-2 hover:underline"
              >
                fobii
              </Link>
              , nimeni nu le-a explicat ce se întâmplă, de ce se întâmplă, și
              mai ales, ce vrea să le spună psihicul lor prin aceste simptome.
            </p>
          </div>

          <div className="mt-10 rounded-md border-l-4 border-lp-cyan bg-lp-navy p-8 md:p-10">
            <p className="text-base leading-relaxed text-white/90 md:text-lg">
              Abordarea mea e diferită de ce găsești în majoritatea resurselor
              din România. Nu mă opresc la ce este anxietatea. Merg mai
              departe, spre ce vrea să îți spună psihicul tău prin acest
              simptom. Fiecare senzație fizică, fiecare gând recurent, fiecare
              evitare are o logică. Când o descoperi, simptomul nu mai trebuie
              să strige ca să fie auzit.
            </p>
          </div>
        </div>
      </section>

      {/* FORMAREA MEA */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1000px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Credențiale
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl">
            Formarea mea.
          </h2>

          <h3 className="mt-10 font-work text-xl font-bold text-lp-navy md:text-2xl">
            Formarea clinică
          </h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {clinicalCreds.map((cred) => (
              <div
                key={cred.title}
                className="flex items-start gap-4 rounded-md border border-lp-border bg-white p-5 shadow-[0_2px_8px_rgba(8,29,61,0.04)] transition hover:-translate-y-0.5 hover:border-lp-cyan hover:shadow-[0_8px_24px_rgba(8,29,61,0.08)]"
              >
                <span className="shrink-0 text-2xl leading-none">
                  {cred.icon}
                </span>
                <div>
                  <p className="text-[15px] font-semibold leading-snug text-lp-navy">
                    {cred.title}
                  </p>
                  {cred.detail && (
                    <p className="mt-1 text-xs text-lp-mute-soft">
                      {cred.detail}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <h3 className="mt-12 font-work text-xl font-bold text-lp-navy md:text-2xl">
            Formarea complementară
          </h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {complementaryCreds.map((cred) => (
              <div
                key={cred.title}
                className="flex items-start gap-4 rounded-md border border-lp-border bg-lp-bg p-5"
              >
                <span className="shrink-0 text-2xl leading-none">
                  {cred.icon}
                </span>
                <div>
                  <p className="text-[15px] font-semibold leading-snug text-lp-navy">
                    {cred.title}
                  </p>
                  {cred.detail && (
                    <p className="mt-1 text-xs text-lp-mute-soft">
                      {cred.detail}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIPLOME */}
      <section className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1000px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Documente oficiale
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl">
            Diplome și atestări.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {diplomas.map((diploma) => (
              <button
                key={diploma.src}
                type="button"
                onClick={() => setLightboxImage(diploma.src)}
                className="group block w-full overflow-hidden rounded-md border border-lp-border bg-white text-left transition hover:-translate-y-0.5 hover:border-lp-cyan hover:shadow-[0_12px_40px_rgba(8,29,61,0.08)]"
                aria-label={`Vezi ${diploma.title} în format mare`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-lp-bg">
                  <Image
                    src={diploma.src}
                    alt={diploma.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
                    className="object-contain transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm font-semibold text-lp-navy">
                    {diploma.title}
                  </p>
                  <p className="mt-1 text-xs text-lp-mute-soft">
                    Click pentru mărire →
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CUM LUCREZ */}
      <section className="bg-lp-navy px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[900px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.22em] text-lp-cyan">
            Metoda
          </p>
          <h2 className="mt-4 font-work text-3xl font-bold leading-tight text-white md:text-5xl">
            Cum lucrez.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {principles.map((text, i) => (
              <div
                key={text}
                className="flex items-start gap-5 rounded-md border-l-4 border-lp-cyan bg-white/5 p-6"
              >
                <span className="shrink-0 font-work text-2xl font-extrabold leading-none text-lp-cyan opacity-70 md:text-3xl">
                  0{i + 1}
                </span>
                <p className="text-base leading-relaxed text-white/90 md:text-lg">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <ReviewsCarousel />

      {/* CTA */}
      <section className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <div className="rounded-md border border-lp-border bg-lp-navy px-8 py-12 text-center md:px-12 md:py-16">
            <h2 className="font-work text-3xl font-bold leading-tight text-white md:text-4xl">
              Vrei să{" "}
              <span className="bg-lp-yellow px-2 text-lp-navy">vorbim?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[560px] text-base leading-relaxed text-white/85 md:text-lg">
              Dacă te regăsești în ce ai citit pe acest site și simți că ai
              nevoie de cineva care să te ajute să înțelegi ce ți se întâmplă,
              putem programa o primă conversație.
            </p>
            <Link
              href="/programare?din=despre-daniel"
              className="lp-cta mt-8 inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold md:text-lg"
            >
              Programează o consultație
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center bg-black/85 p-6"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Imagine mărită"
        >
          <button
            type="button"
            className="absolute right-6 top-5 z-[101] p-2 text-2xl text-white/80 transition hover:text-white"
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
            className="max-h-[85vh] max-w-[90vw] cursor-default rounded-md shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}
