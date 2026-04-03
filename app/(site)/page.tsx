import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anxietate: ce este, simptome, cauze și tratament | Totul despre Anxietate",
  description:
    "Ce este anxietatea, de ce apare și ce poți face. Ghiduri complete despre atacul de panică, anxietatea socială și alte forme de anxietate. De psihologul Daniel Gagea.",
  alternates: { canonical: "https://totuldespreanxietate.ro" },
  openGraph: {
    title: "Totul despre Anxietate .. Ghiduri complete de la psiholog",
    description: "Ce este anxietatea, de ce apare și ce poți face. Resursa #1 din România despre anxietate.",
    url: "https://totuldespreanxietate.ro",
    type: "website",
    locale: "ro_RO",
    siteName: "Totul despre Anxietate",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Totul despre Anxietate",
      url: "https://totuldespreanxietate.ro",
      publisher: { "@type": "Person", name: "Daniel Gagea", jobTitle: "Psiholog clinician, psihoterapeut" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Ce este anxietatea?", acceptedAnswer: { "@type": "Answer", text: "Anxietatea este un r\u0103spuns natural al corpului la o amenin\u021bare perceput\u0103. Devine o problem\u0103 c\u00e2nd se activeaz\u0103 frecvent, intens \u0219i f\u0103r\u0103 un pericol real." } },
        { "@type": "Question", name: "Anxietatea se trateaz\u0103?", acceptedAnswer: { "@type": "Answer", text: "Da. Psihoterapia are rate de succes \u00eentre 60-80%. Majoritatea persoanelor observ\u0103 \u00eembun\u0103t\u0103\u021biri \u00een 8-16 \u0219edin\u021be." } },
        { "@type": "Question", name: "Anxietatea e periculoas\u0103?", acceptedAnswer: { "@type": "Answer", text: "Anxietatea \u00een sine nu este periculoas\u0103 fizic. Un atac de panic\u0103 nu produce infarct. Totu\u0219i, anxietatea netratat\u0103 afecteaz\u0103 calitatea vie\u021bii." } },
      ],
    },
    { "@type": "Person", name: "Daniel Gagea", jobTitle: "Psiholog clinician, psihoterapeut", url: "https://totuldespreanxietate.ro" },
  ],
};

const tipuri = [
  { title: "Atacul de panică", href: "/atac-de-panica", desc: "Inima bate puternic, simți că nu poți respira, ești convins că faci infarct. Totul durează câteva minute, dar se simte ca o eternitate.", ok: true },
  { title: "Anxietatea socială", href: "/tipuri/anxietate-sociala", desc: "Repeți mental ce vei spune. Analizezi fiecare interacțiune ore sau zile. Eviți situații sociale nu pentru că nu vrei, ci pentru că te temi de judecată.", ok: true },
  { title: "Anxietatea generalizată", href: "#", desc: "Te îngrijorezi constant. Nu despre un lucru anume, ci despre orice. Mintea ta produce scenarii negative non-stop.", ok: false },
  { title: "Tulburarea obsesiv-compulsivă", href: "#", desc: "Gânduri intruzive care revin, ritualuri pe care le repeți ca să scapi de anxietate. Un cerc vicios.", ok: false },
  { title: "Fobii specifice", href: "#", desc: "Frica intensă de ceva concret.. înălțimi, zbor, spații închise. Știi rațional că frica e disproporționată, dar corpul nu ascultă.", ok: false },
];

const faqs = [
  { q: "Ce este anxietatea?", a: "Anxietatea este un răspuns natural al corpului la o amenințare percepută. Devine o problemă atunci când se activează frecvent, intens și fără un pericol real. Se manifestă prin senzații fizice (palpitații, amețeli, dificultăți de respirație), gânduri catastrofice și comportamente de evitare." },
  { q: "Care sunt simptomele anxietății?", a: "Palpitații, presiune în piept, amețeli, senzație de sufocare, furnicături, transpirație, tremur, greață, tensiune musculară. Mental: îngrijorare excesivă, gânduri catastrofice, dificultăți de concentrare." },
  { q: "Cum scap de anxietate?", a: "Nu scapi de anxietate ca de o răceală. Obiectivul este înțelegerea și gestionarea ei. Pașii includ: înțelegerea mecanismului, tehnici de reglare a respirației, modificarea gândurilor catastrofice și, când e necesar, psihoterapie." },
  { q: "Anxietatea se tratează?", a: "Da. Anxietatea este una dintre cele mai tratabile condiții din psihologie. Psihoterapia are rate de succes între 60-80%. Majoritatea persoanelor observă îmbunătățiri semnificative în 8-16 ședințe." },
  { q: "Anxietatea e periculoasă?", a: "Anxietatea în sine nu este periculoasă fizic. Un atac de panică nu produce infarct și nu te face să înnebunești. Totuși, anxietatea netratată poate afecta semnificativ calitatea vieții." },
  { q: "De ce am anxietate dacă analizele sunt normale?", a: "Pentru că anxietatea nu este o boală fizică, ci un răspuns al sistemului nervos. Corpul funcționează perfect mecanic. Problema este că sistemul de alarmă se activează când nu ar trebui." },
  { q: "Trebuie să iau medicamente pentru anxietate?", a: "Nu neapărat. Multe persoane reușesc să gestioneze anxietatea doar prin psihoterapie. Medicația funcționează cel mai bine în combinație cu terapia, nu ca înlocuitor." },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "var(--color-background)" }}>
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-xs font-medium uppercase tracking-[0.15em] mb-6" style={{ color: "var(--color-text-secondary)" }}>
                De Daniel Gagea, psiholog clinician, psihoterapeut
              </p>
              <h1 className="text-[28px] md:text-[42px] leading-[1.2] mb-6" style={{ fontFamily: "var(--font-heading)", fontWeight: 400, color: "var(--color-primary)" }}>
                Anxietatea ta are un sens. Aici îl înțelegi.
              </h1>
              <p className="text-[17px] md:text-[19px] leading-[1.7] mb-10" style={{ color: "var(--color-text-secondary)" }}>
                Informații complete despre anxietate, scrise de specialiști în anxietate. Ca să te recunoști, să înțelegi ce ți se întâmplă și să știi ce ai de făcut.
              </p>
              <Link href="#tipuri" className="inline-block px-8 py-4 rounded-lg text-[16px] font-semibold text-white" style={{ backgroundColor: "var(--color-secondary)" }}>
                Descoperă ce tip de anxietate ai &rarr;
              </Link>
            </div>
            {/* Illustration */}
            <div className="shrink-0 w-[280px] md:w-[340px]" aria-hidden="true">
              <style>{`
                @keyframes hp-wave1{0%,100%{d:path("M40 100 Q70 80 100 100 Q130 120 160 100 Q190 80 220 100")}50%{d:path("M40 100 Q70 120 100 100 Q130 80 160 100 Q190 120 220 100")}}
                @keyframes hp-wave2{0%,100%{d:path("M40 120 Q70 100 100 120 Q130 140 160 120 Q190 100 220 120")}50%{d:path("M40 120 Q70 140 100 120 Q130 100 160 120 Q190 140 220 120")}}
                @keyframes hp-glow{0%,100%{opacity:0.15}50%{opacity:0.3}}
                @keyframes hp-breathe{0%,100%{transform:scale(1)}50%{transform:scale(1.03)}}
                .hp-wave1{animation:hp-wave1 4s ease-in-out infinite}
                .hp-wave2{animation:hp-wave2 4s ease-in-out 0.5s infinite}
                .hp-glow{animation:hp-glow 3s ease-in-out infinite}
                .hp-breathe{animation:hp-breathe 4s ease-in-out infinite}
              `}</style>
              <svg viewBox="0 0 260 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Soft background circle */}
                <circle cx="130" cy="130" r="120" fill="#5C7A6A" opacity="0.04" className="hp-breathe" />
                <circle cx="130" cy="130" r="90" fill="#5C7A6A" opacity="0.06" className="hp-breathe" />

                {/* Person silhouette */}
                <circle cx="130" cy="85" r="26" fill="#1B2B4B" opacity="0.35" />
                <path d="M130 111 C108 111 90 133 90 158 L90 185 L170 185 L170 158 C170 133 152 111 130 111Z" fill="#1B2B4B" opacity="0.25" />

                {/* Hand on chest */}
                <ellipse cx="145" cy="148" rx="10" ry="7" fill="#1B2B4B" opacity="0.25" transform="rotate(-10 145 148)" />

                {/* Heart glow */}
                <circle cx="130" cy="145" r="12" fill="#C4614A" opacity="0.12" className="hp-glow" />
                <circle cx="130" cy="145" r="6" fill="#C4614A" opacity="0.2" className="hp-glow" />

                {/* Calm waves below */}
                <path d="M40 100 Q70 80 100 100 Q130 120 160 100 Q190 80 220 100" stroke="#5C7A6A" strokeWidth="1.5" opacity="0.2" fill="none" className="hp-wave1" />
                <path d="M40 120 Q70 100 100 120 Q130 140 160 120 Q190 100 220 120" stroke="#5C7A6A" strokeWidth="1" opacity="0.15" fill="none" className="hp-wave2" />

                {/* Safety/understanding arc */}
                <path d="M60 200 Q130 170 200 200" stroke="#5C7A6A" strokeWidth="2" opacity="0.15" fill="none" strokeLinecap="round" />
                <path d="M75 215 Q130 190 185 215" stroke="#5C7A6A" strokeWidth="1.5" opacity="0.1" fill="none" strokeLinecap="round" />

                {/* Small text */}
                <text x="130" y="250" textAnchor="middle" fill="#5C7A6A" fontSize="10" fontWeight="500" opacity="0.4">înțelege. acționează.</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "var(--color-background-white)" }}>
        <div className="mx-auto max-w-[760px] px-6">
          <h2 className="text-[24px] md:text-[30px] leading-[1.3] mb-6" style={{ fontFamily: "var(--font-heading)", fontWeight: 400, color: "var(--color-primary)" }}>
            Călătoria pe care probabil ai făcut-o deja
          </h2>
          <p className="text-[17px] leading-[1.75] mb-8" style={{ color: "var(--color-text)" }}>
            Începe cu o senzație fizică. Poate o palpitație. Poate o presiune în piept. Poate o amețeală care vine din senin.
          </p>
          <div className="space-y-4 mb-8">
            {[
              ["Senzații inexplicabile", "palpitații, amețeli, furnicături, presiune în piept, senzația că nu poți respira"],
              ["Medicul", "urgență sau familie. EKG, analize de sânge. Totul iese normal"],
              ["Răspunsul care nu ajută", "Nu aveți nimic. Probabil e stresul."],
              ["Confuzia", "dar tu simți ceva. Senzațiile sunt reale. Dacă nu ai nimic, de ce corpul tău face asta?"],
              ["Google", "cauți palpitații fără cauză sau de ce îmi bate inima repede fără motiv"],
              ["Cuvântul", "undeva, într-un articol, citești pentru prima dată cuvântul anxietate"],
            ].map(([bold, text], i) => (
              <div key={i} className="flex gap-3 items-start" style={{ color: "var(--color-text)" }}>
                <span className="shrink-0 w-2 h-2 rounded-full mt-2.5" style={{ backgroundColor: "var(--color-accent)" }} />
                <p className="text-[17px] leading-[1.75]"><strong style={{ color: "var(--color-primary)" }}>{bold}</strong> .. {text}</p>
              </div>
            ))}
          </div>
          <p className="text-[17px] leading-[1.75]" style={{ color: "var(--color-text)" }}>
            <strong>Dacă ai ajuns aici prin această călătorie, nu ești singur.</strong> Milioane de oameni trec prin exact aceeași secvență. Și majoritatea pierd luni sau ani până găsesc un răspuns clar.
          </p>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "var(--color-background)" }}>
        <div className="mx-auto max-w-[760px] px-6">
          <h2 className="text-[24px] md:text-[30px] leading-[1.3] mb-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 400, color: "var(--color-primary)" }}>
            Ce găsești pe acest site
          </h2>
          <p className="text-[17px] leading-[1.75] mb-10" style={{ color: "var(--color-text-secondary)" }}>
            Acest site nu este o enciclopedie medicală. Vei găsi trei lucruri pe care, împreună, nu le oferă nicio altă resursă.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["Recunoaștere", "Ceea ce simți are un nume. Nu ești ciudat, nu ți se pare și nu ești singurul. Aici vei găsi descrieri exacte ale experiențelor prin care treci."],
              ["Claritate", "Înțelegi ce ți se întâmplă și de ce. Cum funcționează anxietatea în corp, în minte, în relații. Explicate pe înțelesul tău."],
              ["Direcție", "Știi ce urmează. Fiecare articol se termină cu pași concreți, nu cu sfaturi vagi de tipul relaxează-te sau gândește pozitiv."],
            ].map(([title, text], i) => (
              <div key={i} className="p-6 rounded-xl" style={{ backgroundColor: "var(--color-background-white)", border: "1px solid var(--color-border)" }}>
                <h3 className="text-[20px] mb-3" style={{ fontFamily: "var(--font-heading)", fontWeight: 500, color: "var(--color-primary)" }}>{title}</h3>
                <p className="text-[15px] leading-[1.7]" style={{ color: "var(--color-text-secondary)" }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIPURI */}
      <section id="tipuri" className="py-16 md:py-20" style={{ backgroundColor: "var(--color-background-white)" }}>
        <div className="mx-auto max-w-[760px] px-6">
          <h2 className="text-[24px] md:text-[30px] leading-[1.3] mb-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 400, color: "var(--color-primary)" }}>
            Tipuri de anxietate
          </h2>
          <p className="text-[17px] leading-[1.75] mb-10" style={{ color: "var(--color-text-secondary)" }}>
            Anxietatea nu e un singur lucru. Are forme diferite, cu mecanisme diferite și cu soluții diferite.
          </p>
          <div className="space-y-4">
            {tipuri.map((t, i) => (
              <Link key={i} href={t.href} className={`block p-6 rounded-xl ${t.ok ? "group cursor-pointer" : "opacity-60 pointer-events-none"}`} style={{ backgroundColor: "var(--color-background)", border: "1px solid var(--color-border)" }} tabIndex={t.ok ? 0 : -1}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[20px] mb-2" style={{ fontFamily: "var(--font-heading)", fontWeight: 500, color: "var(--color-primary)" }}>
                      {t.title}
                      {!t.ok && <span className="ml-2 text-[12px] font-medium uppercase tracking-wider px-2 py-0.5 rounded" style={{ backgroundColor: "var(--color-border)", color: "var(--color-text-secondary)" }}>în curând</span>}
                    </h3>
                    <p className="text-[15px] leading-[1.7]" style={{ color: "var(--color-text-secondary)" }}>{t.desc}</p>
                  </div>
                  {t.ok && <span className="shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--color-accent)" }}>&rarr;</span>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CE VREA SA SPUNA CORPUL */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "var(--color-primary)", color: "#FAF7F2" }}>
        <div className="mx-auto max-w-[760px] px-6">
          <h2 className="text-[24px] md:text-[30px] leading-[1.3] mb-6" style={{ fontFamily: "var(--font-heading)", fontWeight: 400, color: "#FAF7F2" }}>
            Ce vrea să-ți spună corpul tău
          </h2>
          <p className="text-[17px] leading-[1.75] mb-8" style={{ color: "rgba(250,247,242,0.8)" }}>
            Fiecare simptom de anxietate este o formă de comunicare. Corpul tău nu se defectează. El încearcă să-ți transmită ceva prin singurele mijloace pe care le are.. senzații fizice.
          </p>
          <div className="space-y-4 mb-10">
            {[
              ["Palpitațiile", "corpul tău se pregătește pentru ceva pe care mintea ta nu a procesat încă"],
              ["Respirația blocată", "senzația de sufocare reflectă adesea un spațiu emoțional în care simți că nu ai loc"],
              ["Nodul din stomac", "o tensiune pe care o porți, dar pe care nu ai pus-o în cuvinte"],
              ["Tensiunea din maxilar, gât, umeri", "lucruri pe care le înghiți în loc să le spui"],
            ].map(([bold, text], i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="shrink-0 w-2 h-2 rounded-full mt-2.5" style={{ backgroundColor: "#C4966C" }} />
                <p className="text-[17px] leading-[1.75]"><strong style={{ color: "#FAF7F2" }}>{bold}</strong> .. {text}</p>
              </div>
            ))}
          </div>
          <p className="text-[17px] leading-[1.75]" style={{ color: "rgba(250,247,242,0.8)" }}>
            <strong style={{ color: "#FAF7F2" }}>Anxietatea nu este dușmanul tău. Este un mesaj.</strong> Când înțelegi mesajul, simptomul începe să aibă sens. Și când are sens, încetează să mai fie atât de înfricoșător.
          </p>
        </div>
      </section>

      {/* DESPRE DANIEL */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "var(--color-background)" }}>
        <div className="mx-auto max-w-[760px] px-6">
          <h2 className="text-[24px] md:text-[30px] leading-[1.3] mb-8" style={{ fontFamily: "var(--font-heading)", fontWeight: 400, color: "var(--color-primary)" }}>
            Cine scrie acest site
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="shrink-0 mx-auto md:mx-0">
              <Image
                src="/images/daniel-gagea.jpg"
                alt="Daniel Gagea, psiholog clinician, psihoterapeut"
                width={200}
                height={200}
                className="rounded-xl object-cover"
                style={{ width: 200, height: 200, border: "1px solid var(--color-border)" }}
              />
            </div>
            <div className="flex-1">
              <p className="text-[17px] leading-[1.75] mb-4" style={{ color: "var(--color-text)" }}>
                <strong>Daniel Gagea</strong> este psiholog clinician și psihoterapeut cu peste 10 ani de experiență.
              </p>
              <p className="text-[17px] leading-[1.75] mb-4" style={{ color: "var(--color-text)" }}>
                Nu a construit acest site ca pe o broșură de promovare. L-a construit din aceeași frustrare pe care o au cei care caută răspunsuri: cele mai multe resurse din România despre anxietate sunt incomplete, superficiale și pline de sfaturi generice.
              </p>
              <p className="text-[17px] leading-[1.75]" style={{ color: "var(--color-text)" }}>
                Abordarea lui Daniel este diferită. Nu lucrează pe simptome. <strong>Lucrează pe cauze.</strong> Te ajută să înțelegi de ce corpul și mintea ta au ajuns să funcționeze așa, și ce trebuie să se schimbe la rădăcină.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TREI PASI */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "var(--color-background-white)" }}>
        <div className="mx-auto max-w-[760px] px-6">
          <h2 className="text-[24px] md:text-[30px] leading-[1.3] mb-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 400, color: "var(--color-primary)" }}>
            Trei pași simpli
          </h2>
          <p className="text-[17px] leading-[1.75] mb-10" style={{ color: "var(--color-text-secondary)" }}>
            Nu trebuie să știi de unde să începi. Site-ul este construit să te ghideze natural.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["1", "Citește", "Alege tipul de anxietate. Fiecare ghid începe cu experiența trăită, ca să te recunoști, și continuă cu mecanismul."],
              ["2", "Înțelege", "Când înțelegi ce ți se întâmplă și de ce, anxietatea își pierde din putere. Nu dispare prin magie, dar încetează să mai fie un mister."],
              ["3", "Acționează", "Fiecare ghid se termină cu pași concreți. Ce poți face singur, acum. Și dacă ai nevoie de mai mult, cum arată următorul pas."],
            ].map(([num, title, text], i) => (
              <div key={i} className="text-center">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full text-[18px] font-semibold mb-4" style={{ backgroundColor: "var(--color-secondary)", color: "#ffffff" }}>{num}</span>
                <h3 className="text-[20px] mb-2" style={{ fontFamily: "var(--font-heading)", fontWeight: 500, color: "var(--color-primary)" }}>{title}</h3>
                <p className="text-[15px] leading-[1.7]" style={{ color: "var(--color-text-secondary)" }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "var(--color-background)" }}>
        <div className="mx-auto max-w-[760px] px-6 text-center">
          <h2 className="text-[24px] md:text-[30px] leading-[1.3] mb-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 400, color: "var(--color-primary)" }}>
            Nu trebuie să faci nimic acum
          </h2>
          <p className="text-[17px] leading-[1.75] mb-10" style={{ color: "var(--color-text-secondary)" }}>
            Dacă ai ajuns aici, ai făcut deja primul pas. Ai căutat. Ai citit. Ai început să înțelegi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programare?din=homepage" className="inline-block px-8 py-4 rounded-lg text-[16px] font-semibold text-white" style={{ backgroundColor: "var(--color-secondary)" }}>
              Scrie-mi un mesaj
            </Link>
            <Link href="/programare?din=homepage" className="inline-block px-8 py-4 rounded-lg text-[16px] font-semibold" style={{ border: "2px solid var(--color-secondary)", color: "var(--color-secondary)" }}>
              Programează o ședință
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "var(--color-background-white)" }}>
        <div className="mx-auto max-w-[760px] px-6">
          <h2 className="text-[24px] md:text-[30px] leading-[1.3] mb-8" style={{ fontFamily: "var(--font-heading)", fontWeight: 400, color: "var(--color-primary)" }}>
            Întrebări frecvente despre anxietate
          </h2>
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <details key={i} className="group border-b" style={{ borderColor: "var(--color-border)" }}>
                <summary className="flex items-center justify-between py-5 cursor-pointer list-none text-[17px] font-semibold" style={{ color: "var(--color-primary)" }}>
                  {faq.q}
                  <span className="shrink-0 ml-4 transition-transform group-open:rotate-45" style={{ color: "var(--color-text-secondary)" }}>+</span>
                </summary>
                <p className="pb-5 text-[16px] leading-[1.7]" style={{ color: "var(--color-text-secondary)" }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center" style={{ backgroundColor: "var(--color-background)" }}>
        <p className="text-[13px]" style={{ color: "var(--color-text-secondary)" }}>
          &copy; 2026 Totul despre Anxietate. Daniel Gagea, psiholog clinician, psihoterapeut.
        </p>
      </footer>
    </>
  );
}
