"use client";

import Link from "next/link";
import { useState } from "react";

/* ============================================================
   TOC (Tulburarea Obsesiv-Compulsivă) — Pagină completă
   Design: lp-* tokens (Work Sans + navy/cyan/yellow)
   ============================================================ */

const OBSESII = [
  { label: "Contaminare", desc: "Am atins ceva murdar, voi face boală, voi contamina pe altcineva" },
  { label: "Verificare", desc: "Am lăsat aragazul aprins, ușa deschisă, fierul de călcat pornit" },
  { label: "Gânduri agresive sau sexuale", desc: "Ce-ar fi dacă fac rău copilului meu? Ce-ar fi dacă sunt atras de ceva ce nu ar trebui?" },
  { label: "Simetrie și ordine", desc: "Lucrurile trebuie să fie aranjate exact altfel se va întâmpla ceva rău" },
  { label: "Gânduri religioase sau morale", desc: "Am avut un gând blasfemiator, sunt o persoană rea" },
];

const CICLU_STEPS = [
  { nr: 1, text: "Gândul intruziv apare.. ce-ar fi dacă nu am încuiat ușa?" },
  { nr: 2, text: "Mintea îi atribuie o semnificație exagerată.. dacă nu am încuiat, va intra cineva în casă și va fi vina mea" },
  { nr: 3, text: "Anxietatea crește (tensiune, neliniște, urgență)" },
  { nr: 4, text: "Faci ritualul (verifici ușa)" },
  { nr: 5, text: "Ușurare imediată (anxietatea scade pentru 30 de secunde)" },
  { nr: 6, text: "Creierul învață că ritualul funcționează, și data viitoare va cere să-l faci iar" },
  { nr: 7, text: "Gândul revine.. mai insistent, pentru că tocmai l-ai confirmat ca important" },
];

const VIATA_REALA = [
  {
    title: "La muncă",
    text: "Recitești email-ul de 5 ori înainte să-l trimiți, verifici prezentarea încă o dată, și încă o dată. Colegii au plecat de o oră. Tu ești încă la birou, deși nu ai mai mult de lucru, doar că nu ești sigur că ce ai făcut e destul de bine.",
  },
  {
    title: "În relații",
    text: "Partenerul tău e obosit, nu de tine, ci de întrebările care nu se termină.. mă iubești cu adevărat, ești sigur că nu te-am supărat. Fiecare reasigurare durează 30 de secunde, apoi îndoiala revine.",
  },
  {
    title: "Ca părinte",
    text: "Gândul apare.. ce-ar fi dacă fac rău copilului meu. Și te îngheață, tocmai pentru că nu ai vrea vreodată așa ceva. Multe mame cu TOC postpartum trăiesc acest coșmar în tăcere, convinse că sunt monștri, deși nu sunt.",
  },
  {
    title: "Timp pierdut",
    text: "Ritualurile consumă ore. Literalmente. Unii oameni cu TOC petrec 3-4 ore pe zi în ritualuri. Viața se desfășoară în jurul TOC-ului, nu invers.",
  },
];

const EXERCITII = [
  {
    nr: "1",
    title: "Identifică ciclul",
    text: "Ia o foaie de hârtie și împarte-o în patru coloane: Gândul (ce-ți vine în minte), Interpretarea (ce înseamnă gândul pentru tine), Ritualul (ce faci ca să scapi de anxietate), Rezultatul (ce se întâmplă după ritual). Completează de câteva ori. Scopul nu e să oprești ciclul, ci să-l vezi. Conștientizarea este primul pas.",
  },
  {
    nr: "2",
    title: "Amânarea ritualului",
    text: "Când simți nevoia de a face ritualul, nu încerca să o oprești complet. Amân-o. Spune-ți că vei face ritualul, dar peste 5 minute. Stai cu anxietatea 5 minute. Apoi, dacă tot mai simți nevoia, fă-l. Săptămâna viitoare, crește la 10 minute, apoi la 15. Scopul nu e să elimini ritualul dintr-o dată, ci să descoperi că anxietatea scade și fără el.",
  },
  {
    nr: "3",
    title: "Antrenament de incertitudine",
    text: "Alege zilnic o situație mică în care tolerezi incertitudinea: trimite un email fără să-l recitești, ia un traseu fără GPS, comandă ceva nou la restaurant fără să citești recenzii. Nu sunt exerciții despre email-uri sau restaurante, ci despre a trăi cu incertitudinea și a descoperi că e suportabil.",
  },
  {
    nr: "4",
    title: "Etichetează gândul",
    text: "Când gândul intruziv apare, pune-i o etichetă.. în loc să spui că ușa e deschisă, spune-ți că ai gândul că ușa e deschisă. În loc să spui că vei face rău cuiva, spune-ți că ai gândul că vei face rău cuiva. Această distanță mică schimbă modul în care creierul procesează informația. Gândul devine ceva ce observi, nu ceva ce ești.",
  },
  {
    nr: "5",
    title: "Ce ai face dacă TOC-ul nu te-ar mai opri",
    text: "Scrie pe o foaie: dacă TOC-ul ar dispărea mâine, ce ai face diferit? Unde ai merge? Ce ai accepta? Ce conversație ai avea? Acest exercițiu nu vindecă TOC-ul, dar îți arată exact cât de mult teren i-ai cedat. Și îți dă un motiv concret pentru care merită să lupți.",
  },
];

const SPECIALIST_SEMNE = [
  { icon: "🎯", text: "Ai nevoie de un terapeut format specific în ERP pentru TOC" },
  { icon: "⏰", text: "Ritualurile îți ocupă mai mult de o oră pe zi" },
  { icon: "🚫", text: "Evitarea a început să-ți restricționeze viața" },
  { icon: "👨‍👩‍👧", text: "Familia ta s-a adaptat la ritualuri" },
  { icon: "💭", text: "Gândurile intruzive te fac să te temi de tine" },
];

const FAQS = [
  {
    q: "TOC-ul se vindecă complet?",
    a: "TOC-ul poate fi adus în remisiune completă. Mulți oameni care fac ERP ajung la un punct în care gândurile intruzive încă apar ocazional, dar nu mai produc anxietate semnificativă și nu mai declanșează ritualuri. Diferența dintre vindecare și remisiune este subtilă, dar practică: gândurile pot reveni în perioade de stres, iar recunoașterea lor rapidă și aplicarea instrumentelor învățate în terapie previne recăderea.",
  },
  {
    q: "Dacă am gânduri violente, înseamnă că sunt periculos?",
    a: "Nu. Cercetările arată că persoanele cu TOC au exact aceeași probabilitate de a comite acte violente ca și populația generală. De fapt, tocmai pentru că aceste gânduri te îngrozesc atât de tare, ele sunt un semn că valorile tale sunt opuse conținutului gândului. O persoană cu adevărat periculoasă nu ar fi tulburată de acele gânduri.",
  },
  {
    q: "Copilul meu face ritualuri. E TOC?",
    a: "Multe ritualuri sunt normale în copilărie (aranjatul jucăriilor, rutine de culcare stricte). Devin problematice când produc suferință, consumă timp semnificativ (peste 30 de minute pe zi) sau interferează cu activitățile zilnice. Dacă ești îngrijorat, o evaluare cu un specialist în TOC pediatric poate clarifica situația.",
  },
  {
    q: "Partenerul meu are TOC. Cum îl pot ajuta?",
    a: "Cel mai important lucru: nu participa la ritualuri. Știu că e greu, pentru că refuzul tău va crește temporar anxietatea partenerului. Dar participarea ta la ritual întărește ciclul. Nu reasigura, nu verifica în locul lui. Spune-i, cu blândețe, că îl iubești dar nu îl poți ajuta făcând asta pentru el. Și încurajează-l să lucreze cu un terapeut specializat în ERP.",
  },
  {
    q: "Am TOC ușor. Merită să merg la terapie?",
    a: "Tocmai formele ușoare răspund cel mai bine la tratament. Nu aștepta ca TOC-ul să devină sever ca să ceri ajutor. Cu cât ciclul e mai scurt și ritualurile mai puțin înrădăcinate, cu atât ERP-ul funcționează mai rapid. Mulți oameni cu TOC ușor se descurcă în 8-12 ședințe.",
  },
];

const TOC_LINKS = [
  { href: "#ce-este", label: "Ce este TOC-ul" },
  { href: "#cum-functioneaza", label: "Cum funcționează TOC-ul: cercul vicios" },
  { href: "#viata-reala", label: "Cum arată TOC-ul în viața reală" },
  { href: "#de-ce-ritualul", label: "De ce ritualul nu funcționează" },
  { href: "#ganduri-normale", label: "De ce gândurile obsesive sunt normale" },
  { href: "#perspectiva-psihodinamica", label: "Ce vrea să spună psihicul prin TOC" },
  { href: "#tratament", label: "Tratament" },
  { href: "#ce-poti-face-acum", label: "Ce poți face acum" },
  { href: "#specialist", label: "Când merită să cauți un specialist" },
  { href: "#intrebari-frecvente", label: "Întrebări frecvente" },
];

const LEVEL_COLOR: Record<string, string> = {
  "Ușor": "text-lp-cyan-dark",
  "Mediu": "text-[#B8860B]",
  "Greu": "text-[#8B3A3A]",
};

export default function TOCPage() {
  const [refsOpen, setRefsOpen] = useState(false);
  const [tocOpen, setTocOpen] = useState(false);

  return (
    <main className="font-work min-h-screen bg-white text-lp-navy">

      {/* ── HERO ── */}
      <section className="bg-white px-6 pt-12 pb-14 md:pt-16 md:pb-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:gap-12">
            <div className="flex-1 min-w-0">
              <nav className="mb-6 flex items-center gap-2 text-sm text-lp-mute-soft">
                <Link href="/tipuri" className="underline underline-offset-2 hover:no-underline">
                  Tipuri
                </Link>
                <span aria-hidden="true">→</span>
                <span className="text-lp-navy">TOC</span>
              </nav>

              <p className="text-base font-semibold uppercase tracking-[0.2em] text-lp-mute md:text-lg">
                De{" "}
                <Link href="/despre-daniel" className="text-lp-navy underline-offset-2 hover:underline">
                  Daniel Gagea
                </Link>
                , psiholog clinician, psihoterapeut
              </p>

              <h1 className="mt-4 font-work text-4xl font-bold leading-[1.05] tracking-tight text-lp-navy md:text-5xl lg:text-6xl">
                Tulburarea <span className="lp-yellow-underline">Obsesiv-Compulsivă</span>.
              </h1>

              <p className="mt-4 text-sm text-lp-mute-soft">
                Ghid complet 2026
                <span className="mx-2">·</span>
                Ești prins într-un ritual care nu se mai termină?{" "}
                <Link href="#ce-poti-face-acum" className="font-semibold text-lp-cyan-dark underline underline-offset-2 hover:no-underline">
                  Mergi direct la Ce poți face acum
                </Link>
              </p>

              <div className="mt-8 space-y-5 text-lg leading-relaxed text-lp-mute md:text-xl">
                <p>
                  Gândul apare din senin. Poate e o imagine, poate e o frază, poate e un impuls pe care nu l-ai cerut și nu l-ai vrut.. ce-ar fi dacă am lăsat aragazul aprins, ce-ar fi dacă fac rău cuiva, ce-ar fi dacă ating ceva contaminat.
                </p>
                <p>
                  Și știi că nu are sens. Știi că ai verificat deja. Știi că gândul e absurd. Dar corpul tău nu a primit mesajul. Tensiunea crește. Neliniștea nu trece. Și faci singurul lucru care pare că ajută.. verifici încă o dată. Speli încă o dată. Repeți în minte încă o dată.
                </p>
                <p>
                  Și funcționează. Timp de 30 de secunde. Poate un minut. Apoi gândul revine. Mai tare. Mai insistent. Și ciclul o ia de la capăt.
                </p>
                <p>
                  <strong className="text-lp-navy">Dacă te recunoști, nu ești nebun și nu pierzi controlul.</strong>{" "}
                  Ce trăiești seamănă foarte mult cu ceea ce se numește TOC. Și în acest ghid vei înțelege exact de ce se întâmplă asta, de ce ritualurile nu funcționează, și ce funcționează în schimb.
                </p>
              </div>
            </div>

            <div className="w-full shrink-0 md:w-[340px]" aria-hidden="true">
              <img
                src="/images/toc-hero.jpg"
                alt=""
                width={340}
                height={230}
                className="h-auto w-full rounded-md object-cover shadow-[0_12px_40px_rgba(8,29,61,0.08)]"
              />
            </div>
          </div>

          {/* Table of contents */}
          <div className="mx-auto mt-10 max-w-[760px]">
            <button
              onClick={() => setTocOpen(!tocOpen)}
              className="flex items-center gap-2 text-base font-semibold text-lp-navy hover:text-lp-cyan-dark"
            >
              Ce vei găsi aici
              <span aria-hidden className={`text-lg leading-none text-lp-cyan-dark transition-transform ${tocOpen ? "rotate-45" : ""}`}>
                +
              </span>
            </button>
            <div className={`overflow-hidden transition-[max-height] duration-300 ${tocOpen ? "max-h-[500px]" : "max-h-0"}`}>
              <ul className="mt-4 grid gap-2 pl-1 text-base md:grid-cols-2">
                {TOC_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-lp-cyan-dark underline underline-offset-2 hover:no-underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CE ESTE ── */}
      <section id="ce-este" className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-lp-mute md:text-lg">
            Definiție
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight tracking-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Ce este <span className="lp-yellow-underline">TOC-ul</span>.
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Tulburarea obsesiv-compulsivă (TOC) este o condiție psihologică în care persoana experimentează gânduri, imagini sau impulsuri nedorite și recurente (obsesii) care provoacă anxietate intensă, și răspunde la ele prin comportamente repetitive sau acte mentale (compulsii/ritualuri) menite să reducă acea anxietate. Afectează aproximativ 2-3% din populație și este una dintre cele mai invalidante tulburări psihologice, fiind clasată de Organizația Mondială a Sănătății printre primele 10 cauze de dizabilitate.
            </p>
            <p>
              Dar TOC-ul nu e mania de curățenie sau nevoia de ordine pe care o vezi în filme. Majoritatea oamenilor cu TOC nu sunt ordonați sau curați. Mulți au gânduri violente, sexuale sau blasfemiatoare care îi terorizează. Alții verifică, numără, repetă, ating, aranjează sau cer confirmare de zeci de ori pe zi.
            </p>
            <p>
              Ce au toți în comun: <strong className="text-lp-navy">un gând care nu pleacă și un ritual care nu ajută.</strong>
            </p>
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold tracking-tight text-lp-navy md:text-3xl">
            Obsesii și compulsii.. ce sunt de fapt
          </h3>

          <p className="mt-6 text-base font-semibold text-lp-navy md:text-lg">Obsesiile cele mai frecvente:</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {OBSESII.map((item) => (
              <div
                key={item.label}
                className="rounded-md border border-lp-border bg-white p-5 transition hover:-translate-y-0.5 hover:border-lp-cyan hover:shadow-[0_12px_40px_rgba(8,29,61,0.08)]"
              >
                <span className="inline-block rounded-full bg-lp-navy px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                  {item.label}
                </span>
                <p className="mt-3 text-base leading-relaxed text-lp-mute">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-base font-semibold text-lp-navy md:text-lg">Compulsiile:</p>
          <div className="mt-3 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Compulsiile sunt ritualurile pe care le faci ca să scapi de anxietatea produsă de obsesie. Unele sunt vizibile (spălat, verificat, aranjat). Altele sunt invizibile (număratul mental, repetarea unor fraze în minte, anularea unui gând cu alt gând, căutarea reasigurării).
            </p>
            <p>
              Compulsia funcționează ca un analgesic.. ia durerea temporar, dar nu tratează cauza. Și ca orice analgesic folosit excesiv, necesită doze tot mai mari.
            </p>
          </div>
        </div>
      </section>

      {/* ── CUM FUNCȚIONEAZĂ ── */}
      <section id="cum-functioneaza" className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-lp-mute md:text-lg">
            Mecanism
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight tracking-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Cum funcționează TOC-ul.. <span className="lp-yellow-underline">cercul vicios</span>.
          </h2>

          <h3 className="mt-10 font-work text-xl font-bold tracking-tight text-lp-navy md:text-2xl">
            Cercul vicios al TOC-ului
          </h3>

          <div className="mt-6 flex flex-col gap-3">
            {CICLU_STEPS.map((step) => (
              <div
                key={step.nr}
                className="flex items-start gap-4 rounded-md border border-lp-border bg-white p-5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lp-navy text-sm font-bold text-white">
                  {step.nr}
                </div>
                <p className="mt-1 text-base leading-relaxed text-lp-mute md:text-[17px]">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-md border-l-4 border-lp-cyan bg-lp-navy p-8 md:p-10">
            <p className="text-base font-medium leading-relaxed text-white/90 md:text-lg">
              Fiecare ritual întărește ciclul. Cu cât verifici mai mult, cu atât nevoia de a verifica crește.
            </p>
          </div>

          <h3 className="mt-12 font-work text-xl font-bold tracking-tight text-lp-navy md:text-2xl">
            Dubla eroare.. probabilitate și catastrofă
          </h3>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-md border border-lp-border bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-lp-cyan-dark">
                Supraestimarea probabilității
              </p>
              <p className="mt-3 text-base leading-relaxed text-lp-mute">
                Estimezi că scenariul temut e mult mai probabil decât este în realitate.
              </p>
            </div>
            <div className="rounded-md border border-lp-border bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#8B3A3A]">
                Catastrofizarea
              </p>
              <p className="mt-3 text-base leading-relaxed text-lp-mute">
                Mintea face un salt direct la cel mai rău scenariu posibil.. nu că poate o să fie neplăcut, ci că casa va lua foc, familia va muri, și va fi vina mea.
              </p>
            </div>
          </div>

          <h3 className="mt-12 font-work text-xl font-bold tracking-tight text-lp-navy md:text-2xl">
            Intoleranța la incertitudine.. nucleul real
          </h3>
          <div className="mt-4 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Nucleul real al TOC-ului este incapacitatea de a tolera incertitudinea. Faci ritualuri pentru a obține certitudinea că ușa e încuiată, mâinile sunt curate, nimeni nu va fi rănit. Dar certitudinea absolută nu există. Niciodată. Pentru nimeni.
            </p>
            <p>
              Tratamentul eficient nu încearcă să te convingă că nu se va întâmpla nimic rău. Te învață să tolerezi faptul că nu știi și să funcționezi în ciuda incertitudinii.
            </p>
            <p>
              Acest nucleu, intoleranța la incertitudine, leagă TOC-ul de{" "}
              <Link
                href="/tipuri/anxietate-generalizata"
                className="font-semibold text-lp-cyan-dark underline underline-offset-2 hover:no-underline"
              >
                tulburarea de anxietate generalizată
              </Link>
              .
            </p>
          </div>

          <blockquote className="mt-10 border-l-4 border-lp-cyan pl-6 italic">
            <p className="font-work text-xl font-medium leading-relaxed text-lp-navy md:text-2xl">
              Certitudinea absolută nu există. Nici pentru tine, nici pentru nimeni. Diferența e că tu ai învățat să nu poți funcționa fără ea.
            </p>
          </blockquote>
        </div>
      </section>

      {/* ── CUM ARATĂ ÎN VIAȚA REALĂ ── */}
      <section id="viata-reala" className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-lp-mute md:text-lg">
            Cotidian
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight tracking-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Cum arată TOC-ul în <span className="lp-yellow-underline">viața reală</span>.
          </h2>

          <div className="mt-8 flex flex-col gap-4">
            {VIATA_REALA.map((item) => (
              <div
                key={item.title}
                className="rounded-md border border-lp-border bg-white p-6 transition hover:border-lp-cyan hover:shadow-[0_12px_40px_rgba(8,29,61,0.08)] md:p-7"
              >
                <p className="font-work text-lg font-bold text-lp-navy md:text-xl">{item.title}</p>
                <p className="mt-2 text-base leading-relaxed text-lp-mute md:text-[17px]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DE CE RITUALUL NU FUNCȚIONEAZĂ ── */}
      <section id="de-ce-ritualul" className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-lp-mute md:text-lg">
            Paradox
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight tracking-tight text-lp-navy md:text-4xl lg:text-[44px]">
            De ce <span className="lp-yellow-underline">ritualul</span> nu funcționează.
          </h2>

          <h3 className="mt-10 font-work text-xl font-bold tracking-tight text-lp-navy md:text-2xl">
            Paradoxul ritualului
          </h3>
          <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
            Cu cât faci mai multe ritualuri de verificare, cu atât crește incertitudinea și nevoia de a le repeta. Fiecare ritual îi spune creierului că ai dreptate să te temi.
          </p>

          <h3 className="mt-10 font-work text-xl font-bold tracking-tight text-lp-navy md:text-2xl">
            Reasigurarea ca ritual invizibil
          </h3>
          <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
            Multe persoane cu TOC nu fac ritualuri vizibile. Fac altceva: cer confirmare.. ești sigur că am încuiat, nu ți se pare că arăt bolnav, crezi că am greșit. Reasigurarea funcționează identic cu verificarea. Oferă o ușurare scurtă și întărește ciclul.
          </p>

          <h3 className="mt-10 font-work text-xl font-bold tracking-tight text-lp-navy md:text-2xl">
            Ritualurile mentale
          </h3>
          <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
            Există o categorie întreagă de ritualuri care se întâmplă exclusiv în minte: repetarea unei fraze, număratul, anularea unui gând rău cu un gând bun, revizuirea mentală a unor situații, rugăciuni repetate. Sunt la fel de puternice ca ritualurile vizibile, dar nimeni din jur nu le observă.
          </p>

          <h3 className="mt-10 font-work text-xl font-bold tracking-tight text-lp-navy md:text-2xl">
            TOC-ul pe care nimeni nu-l vede
          </h3>
          <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
            Există o formă de TOC pe care nimeni din jurul tău nu o observă. Persoana nu se spală pe mâini, nu verifică ușa. Dar în mintea ei, ritualurile sunt non-stop.. gânduri care vin, gânduri care anulează, analize interminabile, verificări mentale. Afară, totul pare normal. Înăuntru, epuizarea e totală. Dacă nu ai ritualuri vizibile dar mintea ta nu se oprește, dacă te testezi constant sau analizezi ore întregi.. ai ritualuri. Doar că sunt invizibile.
          </p>
        </div>
      </section>

      {/* ── GÂNDURILE SUNT NORMALE ── */}
      <section id="ganduri-normale" className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-lp-mute md:text-lg">
            Date
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight tracking-tight text-lp-navy md:text-4xl lg:text-[44px]">
            De ce gândurile obsesive sunt <span className="lp-yellow-underline">normale</span>.
          </h2>

          <div className="mt-8 rounded-md border border-lp-border bg-white p-7 md:p-8">
            <p className="font-work text-2xl font-bold text-lp-navy md:text-3xl">
              90% din oameni au aceleași gânduri ca tine
            </p>
            <p className="mt-3 text-base leading-relaxed text-lp-mute md:text-[17px]">
              Studiile arată că peste 90% din populația generală are gânduri intruzive cu conținut identic obsesiilor clinice. Diferența dintre o persoană cu TOC și una fără nu stă în prezența gândurilor. Stă în ce face cu ele.
            </p>
          </div>

          <h3 className="mt-12 font-work text-xl font-bold tracking-tight text-lp-navy md:text-2xl">
            Când gândurile devin fapte în mintea ta
          </h3>
          <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
            Mintea persoanei cu TOC face ceva specific: tratează gândurile ca și cum ar fi la fel de importante ca faptele. Acest lucru se întâmplă în două feluri:
          </p>

          <div className="mt-6 flex flex-col gap-4">
            <div className="rounded-md border border-lp-border bg-white p-6 md:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-lp-cyan-dark">
                Gândul influențează realitatea
              </p>
              <p className="mt-3 text-base leading-relaxed text-lp-navy md:text-[17px]">
                Dacă mă gândesc că se va întâmpla ceva rău, crește probabilitatea să se întâmple cu adevărat.
              </p>
              <p className="mt-2 text-base leading-relaxed text-lp-mute">
                Ca și cum gândul ar avea putere magică de a influența ce se întâmplă în lume. Mintea spune că m-am gândit la un accident, deci acum e mai probabil să se întâmple.
              </p>
            </div>
            <div className="rounded-md border border-lp-border bg-white p-6 md:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#8B3A3A]">
                Gândul egal cu fapta
              </p>
              <p className="mt-3 text-base leading-relaxed text-lp-navy md:text-[17px]">
                A gândi ceva rău este la fel de grav ca și cum ai fi făcut acel lucru.
              </p>
              <p className="mt-2 text-base leading-relaxed text-lp-mute">
                Mama care are un gând intruziv despre a face rău copilului se simte ca și cum ar fi făcut-o deja.. nu mai e un simplu gând, ci o crimă în mintea ei. Deși în realitate, nu a făcut nimic.
              </p>
            </div>
          </div>

          <h3 className="mt-12 font-work text-xl font-bold tracking-tight text-lp-navy md:text-2xl">
            De ce simți că totul e responsabilitatea ta
          </h3>
          <div className="mt-4 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Dacă te gândești la ceva rău și nu faci nimic să-l previi, iar acel lucru se întâmplă.. simți că e vina ta. Nu verifici aragazul pentru că ești neglijent. Verifici pentru că simți o responsabilitate copleșitoare pentru siguranța tuturor.
            </p>
            <p>
              Această senzație că trebuie să previi orice rău posibil transformă fiecare gând intruziv într-o urgență. Nu poți lăsa gândul să treacă, pentru că a-l lăsa să treacă ar însemna că nu îți pasă. Și ție îți pasă enorm. De fapt, tocmai asta e problema.. îți pasă prea mult.
            </p>
          </div>
        </div>
      </section>

      {/* ── PERSPECTIVA PSIHODINAMICĂ (DARK) ── */}
      <section id="perspectiva-psihodinamica" className="bg-lp-navy px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base font-semibold uppercase tracking-[0.22em] text-lp-cyan md:text-lg">
            Perspectiva clinică
          </p>
          <h2 className="mt-4 font-work text-3xl font-bold leading-tight text-white md:text-4xl lg:text-[44px]">
            Ce vrea să spună <span className="bg-lp-yellow px-2 text-lp-navy">psihicul</span> prin TOC.
          </h2>

          <p className="mt-6 text-base leading-relaxed text-white/85 md:text-lg">
            Până acum am discutat ce face TOC-ul și cum funcționează. Dar de ce tocmai aceste gânduri? De ce tocmai aceste ritualuri? De ce tocmai acum?
          </p>

          <h3 className="mt-10 font-work text-xl font-bold tracking-tight text-white md:text-2xl">
            De ce ritualul nu e un gest absurd
          </h3>
          <div className="mt-4 space-y-5 text-base leading-relaxed text-white/85 md:text-lg">
            <p>
              Ritualul pare irațional văzut din exterior. Dar psihicul nu face nimic la întâmplare. Ritualul e cel mai bun răspuns pe care mintea ta l-a găsit pentru ceva ce simți dar nu poți numi.. nu e problema în sine, ci soluția, doar că una care te costă prea mult.
            </p>
            <p>
              Cineva care se spală compulsiv pe mâini, de exemplu, poate exprima prin asta nevoia de a se curăța de gânduri pe care le consideră inacceptabile. Ritualul ține locul unei conversații pe care persoana nu o poate avea cu sine.
            </p>
          </div>

          <h3 className="mt-10 font-work text-xl font-bold tracking-tight text-white md:text-2xl">
            Ce se întâmplă sub suprafață
          </h3>
          <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
            Mulți oameni cu TOC trăiesc cu o prăpastie între cine sunt în ochii lumii și ce simt de fapt:
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <div className="rounded-md border border-white/10 bg-white/[0.06] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-lp-cyan">Ce vede lumea</p>
              <p className="mt-2 text-base leading-relaxed text-white/80">
                O persoană responsabilă, amabilă, conștiincioasă. Cineva pe care te poți baza.
              </p>
            </div>
            <div className="rounded-md border border-white/10 bg-white/[0.06] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-lp-cyan">Ce simți tu</p>
              <p className="mt-2 text-base leading-relaxed text-white/80">
                Îndoieli constante, nesiguranță, senzația că nu ești destul de bun. O tensiune permanentă între cine ar trebui să fii și cine ești de fapt.
              </p>
            </div>
            <div className="rounded-md border border-white/10 bg-white/[0.06] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-lp-cyan">Ce te sperie cel mai tare</p>
              <p className="mt-2 text-base leading-relaxed text-white/80">
                Gândurile pe care le consideri inacceptabile.. exact cele care alimentează obsesiile. Te temi de ce ar spune despre tine, nu de faptul că ar fi adevărate.
              </p>
            </div>
          </div>

          <p className="mt-8 text-base leading-relaxed text-white/85 md:text-lg">
            Tocmai această prăpastie face TOC-ul atât de chinuitor. Persoana cu TOC e adesea cea mai conștiincioasă din anturaj. Și exact acest exces de conștiinciozitate o face vulnerabilă: orice gând greșit devine o criză.
          </p>

          <h3 className="mt-10 font-work text-xl font-bold tracking-tight text-white md:text-2xl">
            Cazul dlui N
          </h3>
          <div className="mt-4 rounded-md border-l-4 border-lp-cyan bg-white/[0.06] p-6 md:p-8">
            <p className="text-base leading-relaxed text-white/85 md:text-lg">
              Dl N avea 29 de ani și TOC sever, cu un ritual de 58 de pași pe care îl executa zilnic. Prin terapie, s-a descoperit că simptomele dezvăluiau o dorință simbolică.. ritualul era o modalitate de a controla un mediu interior care se simțea haotic și periculos.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
              Fiecare pas din ritual avea o funcție: unii pași exprimau agresivitate mascată, alții exprimau nevoia de reparație. Ritualul nu era un simptom fără sens. Era o narațiune comprimată a unei vieți interioare pe care dl N nu și-o putea permite să o trăiască deschis.
            </p>
          </div>

          <h3 className="mt-10 font-work text-xl font-bold tracking-tight text-white md:text-2xl">
            Familia ca ecosistem
          </h3>
          <div className="mt-4 space-y-5 text-base leading-relaxed text-white/85 md:text-lg">
            <p>
              88,2% din rudele pacienților cu TOC recunosc că și-au modificat comportamentul pentru a se acomoda la ritualurile persoanei. Familia participă la ritual: verifică împreună, reasigură, modifică rutine. Nu din slăbiciune, ci din dragoste. Dar această acomodare întărește ciclul.
            </p>
            <p>
              Tratamentul eficient include frecvent și familia, care nu e vinovată, dar e parte din sistem. Și schimbarea sistemului accelerează vindecarea.
            </p>
          </div>
        </div>
      </section>

      {/* ── TRATAMENT ── */}
      <section id="tratament" className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-lp-mute md:text-lg">
            Tratament
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight tracking-tight text-lp-navy md:text-4xl lg:text-[44px]">
            <span className="lp-yellow-underline">Tratamentul</span> care funcționează.
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              TOC-ul este una dintre cele mai studiate tulburări psihologice. Iar vestea bună este că și una dintre cele mai tratabile. Rata de succes a terapiei de primă linie este între 60-80%, cu îmbunătățiri semnificative în calitatea vieții.
            </p>
            <p>
              Tratamentul de elecție pentru TOC se numește ERP (Expunere cu Prevenirea Răspunsului) și este considerat standardul de aur în intervențiile pentru această tulburare.
            </p>
          </div>

          <h3 className="mt-12 font-work text-xl font-bold tracking-tight text-lp-navy md:text-2xl">
            ERP (Expunere cu Prevenirea Răspunsului)
          </h3>
          <div className="mt-4 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Principiul e simplu, chiar dacă execuția e dificilă: te expui deliberat la gândul sau situația care îți provoacă anxietatea, dar fără să faci ritualul. Stai cu anxietatea. Și descoperi că anxietatea scade de la sine, fără ritual.
            </p>
            <p>
              Scopul nu e să-ți faci curaj, ci să-i oferi creierului o experiență nouă. Ritualul i-a spus creierului că frica ta era justificată. ERP-ul îi spune creierului că ai supraviețuit fără ritual, deci amenințarea nu era reală.
            </p>
          </div>

          <h3 className="mt-12 font-work text-xl font-bold tracking-tight text-lp-navy md:text-2xl">
            Cum arată tratamentul concret
          </h3>
          <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
            Nu începi cu cel mai greu lucru. Începi cu ceva ușor și urci treptat. La fiecare pas, stai cu disconfortul fără să faci ritualul. Iată cum poate arăta asta în practică:
          </p>

          <div className="mt-6 flex flex-col gap-4">
            <div className="rounded-md border border-lp-border bg-lp-bg p-6 md:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-lp-cyan-dark">
                Dacă verifici tot timpul
              </p>
              <div className="mt-4 flex flex-col gap-2">
                {[
                  { level: "Ușor", text: "Închide ușa fără să o verifici a doua oară" },
                  { level: "Mediu", text: "Trimite un email fără să-l recitești" },
                  { level: "Mediu", text: "Oprește aragazul și pleacă din bucătărie imediat" },
                  { level: "Greu", text: "Pleacă de acasă fără să te întorci să verifici nimic" },
                  { level: "Greu", text: "Încuie mașina și nu te mai uita înapoi" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className={`w-12 shrink-0 text-xs font-bold uppercase ${LEVEL_COLOR[item.level]}`}>
                      {item.level}
                    </span>
                    <p className="text-base text-lp-mute">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-md border border-lp-border bg-lp-bg p-6 md:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#8B3A3A]">
                Dacă te temi de contaminare
              </p>
              <div className="mt-4 flex flex-col gap-2">
                {[
                  { level: "Ușor", text: "Atinge o clanță publică și așteaptă 5 minute fără să te speli" },
                  { level: "Mediu", text: "Mănâncă acasă fără să te speli pe mâini înainte" },
                  { level: "Mediu", text: "Atinge pantofii și apoi masa, fără să ștergi" },
                  { level: "Greu", text: "Folosește o toaletă publică fără ritualul de curățare" },
                  { level: "Greu", text: "Atinge un coș de gunoi și așteaptă 30 de minute fără spălat" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className={`w-12 shrink-0 text-xs font-bold uppercase ${LEVEL_COLOR[item.level]}`}>
                      {item.level}
                    </span>
                    <p className="text-base text-lp-mute">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h3 className="mt-12 font-work text-xl font-bold tracking-tight text-lp-navy md:text-2xl">
            Curba anxietății
          </h3>
          <div className="mt-4 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Când te expui fără să faci ritualul, anxietatea crește. Atinge un vârf în primele 15-20 de minute. Totul în tine urlă să faci ritualul. Dacă îl faci, anxietatea scade instant, dar s-a întărit. Dacă nu îl faci, ceva neașteptat se întâmplă: anxietatea începe să scadă de la sine.
            </p>
            <p>
              Corpul tău nu poate menține acel nivel de activare la infinit. După 30-45 de minute, senzațiile se domolesc. Și creierul tău învață ceva nou.. am stat cu gândul și nu s-a întâmplat nimic, pot tolera incertitudinea.
            </p>
          </div>

          <h3 className="mt-12 font-work text-xl font-bold tracking-tight text-lp-navy md:text-2xl">
            Defuziunea
          </h3>
          <div className="mt-4 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Defuziunea este o tehnică din terapia ACT (Acceptance and Commitment Therapy) care te învață să schimbi relația cu gândul, nu conținutul gândului.
            </p>
            <p>
              În loc să spui că ușa e deschisă (fuziune cu gândul, gândul e realitate), spui că ai gândul că ușa e deschisă (defuziune, observi gândul ca pe un eveniment mental, nu ca pe un fapt).
            </p>
            <p>
              Această distanță mică, aparent banală, schimbă modul în care creierul procesează informația. Gândul nu mai e o amenințare care necesită acțiune imediată. E un eveniment mental care poate fi observat și lăsat să treacă.
            </p>
          </div>

          <h3 className="mt-12 font-work text-xl font-bold tracking-tight text-lp-navy md:text-2xl">
            Cazul Chester
          </h3>
          <div className="mt-4 rounded-md border-l-4 border-lp-cyan bg-lp-bg p-6 md:p-8">
            <div className="space-y-4 text-base leading-relaxed text-lp-mute md:text-lg">
              <p>
                Chester a trăit cu TOC timp de 35 de ani. Ritualuri de verificare, ritualuri de numărare, ritualuri de simetrie. Viața lui se desfășura în jurul evitării și al ritualurilor. A încercat mai multe forme de terapie fără succes.
              </p>
              <p>
                Apoi a început un program structurat de ERP. Pas cu pas, treptat, cu un terapeut specializat. După câteva luni de tratament, scorul lui la scala Yale-Brown (instrumentul standard de măsurare a severității TOC) a ajuns la 0.
              </p>
              <p className="font-semibold text-lp-navy">
                35 de ani de TOC, apoi scor 0. Nu a fost ușor, dar tratamentul funcționează.
              </p>
            </div>
          </div>

          <h3 className="mt-12 font-work text-xl font-bold tracking-tight text-lp-navy md:text-2xl">
            De ce medicamentele singure nu sunt suficiente
          </h3>
          <div className="mt-4 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              SSRI-urile (inhibitorii selectivi ai recaptării serotoninei) pot reduce intensitatea obsesiilor și pot face ERP-ul mai ușor de suportat. Sunt utile, uneori necesare. Dar singure, fără terapie, ratele de recădere după oprirea medicației sunt foarte mari.
            </p>
            <p>
              Motivul e simplu: medicamentul reduce volumul gândului, dar nu te învață ce să faci cu el. ERP-ul te învață. Combinația medicament + ERP oferă cele mai bune rezultate, mai ales în cazurile severe.
            </p>
          </div>
        </div>
      </section>

      {/* ── CE POȚI FACE ACUM ── */}
      <section id="ce-poti-face-acum" className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-lp-mute md:text-lg">
            Practic
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight tracking-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Ce poți face <span className="lp-yellow-underline">acum</span>.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            Nu trebuie să aștepți o programare la psiholog ca să începi. Iată cinci exerciții pe care le poți face singur, azi.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {EXERCITII.map((ex) => (
              <div
                key={ex.nr}
                className="flex gap-5 rounded-md border border-lp-border bg-white p-6 md:p-7"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lp-cyan text-base font-bold text-lp-navy">
                  {ex.nr}
                </div>
                <div>
                  <p className="font-work text-lg font-bold text-lp-navy md:text-xl">{ex.title}</p>
                  <p className="mt-2 text-base leading-relaxed text-lp-mute md:text-[17px]">{ex.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CÂND MERITĂ UN SPECIALIST ── */}
      <section id="specialist" className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-lp-mute md:text-lg">
            Ajutor profesionist
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight tracking-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Când merită să cauți un <span className="lp-yellow-underline">specialist</span>.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            Exercițiile de mai sus sunt un punct de pornire. Dar un terapeut specializat poate face diferența atunci când:
          </p>

          <div className="mt-8 flex flex-col gap-3">
            {SPECIALIST_SEMNE.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-4 rounded-md border border-lp-border bg-white p-5 transition hover:border-lp-cyan hover:shadow-[0_8px_24px_rgba(8,29,61,0.06)]"
              >
                <span className="text-2xl leading-none" aria-hidden>{item.icon}</span>
                <p className="text-base text-lp-mute md:text-[17px]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="intrebari-frecvente" className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <div className="text-center">
            <p className="text-base font-semibold uppercase tracking-[0.2em] text-lp-cyan-dark md:text-lg">
              Întrebări frecvente
            </p>
            <h2 className="mt-3 font-work text-3xl font-bold leading-tight tracking-tight text-lp-navy md:text-4xl">
              Ce vor să știe oamenii despre TOC.
            </h2>
          </div>

          <div className="mt-10 divide-y divide-lp-border rounded-md border border-lp-border bg-white">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 px-6 py-5 text-left text-[17px] font-semibold text-lp-navy md:text-lg">
                  <span>{faq.q}</span>
                  <span aria-hidden className="mt-1 shrink-0 text-2xl leading-none text-lp-cyan-dark transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="px-6 pb-5 text-base leading-relaxed text-lp-mute md:text-[17px]">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

          {/* References */}
          <div className="mt-12">
            <button
              onClick={() => setRefsOpen(!refsOpen)}
              className="flex items-center gap-2 text-base font-semibold text-lp-navy hover:text-lp-cyan-dark"
            >
              <span aria-hidden className={`text-lg leading-none text-lp-cyan-dark transition-transform ${refsOpen ? "rotate-45" : ""}`}>
                +
              </span>
              Surse bibliografice
            </button>
            <div className={`overflow-hidden transition-[max-height] duration-300 ${refsOpen ? "max-h-[1200px]" : "max-h-0"}`}>
              <ul className="mt-6 list-disc space-y-2 pl-6 text-[13px] leading-relaxed text-lp-mute-soft">
                <li>Clark, D. A., &amp; Beck, A. T. (2010). <em>Cognitive Therapy of Anxiety Disorders: Science and Practice</em>. Guilford Press.</li>
                <li>Gabbard, G. O. (2007). <em>Tratat de Psihiatrie Psihodinamică</em>. Editura Trei.</li>
                <li>Andrews, G., et al. (2003). <em>The Treatment of Anxiety Disorders</em> (2nd ed.). Cambridge University Press.</li>
                <li>Abramowitz, J. S., Deacon, B. J., &amp; Whiteside, S. P. H. (2019). <em>Exposure Therapy for Anxiety</em> (2nd ed.). Guilford Press.</li>
                <li>Rachman, S. (1997). A cognitive theory of obsessions. <em>Behaviour Research and Therapy, 35</em>(9), 793-802.</li>
                <li>Rachman, S., &amp; de Silva, P. (1978). Abnormal and normal obsessions. <em>Behaviour Research and Therapy, 16</em>(4), 233-248.</li>
                <li>Salkovskis, P. M. (1985). Obsessional-compulsive problems: A cognitive-behavioural analysis. <em>Behaviour Research and Therapy, 23</em>(5), 571-583.</li>
                <li>Foa, E. B., &amp; Kozak, M. J. (1986). Emotional processing of fear: Exposure to corrective information. <em>Psychological Bulletin, 99</em>(1), 20-35.</li>
                <li>Hayes, S. C., Strosahl, K. D., &amp; Wilson, K. G. (2012). <em>Acceptance and Commitment Therapy</em> (2nd ed.). Guilford Press.</li>
                <li>Leahy, R. L., Holland, S. J. F., &amp; McGinn, L. K. (2012). <em>Treatment Plans and Interventions for Depression and Anxiety Disorders</em> (2nd ed.). Guilford Press.</li>
                <li>Freud, S. (1926). <em>Inhibitions, Symptoms and Anxiety</em>. Standard Edition, Vol. 20.</li>
                <li>Riemann, F. (2003). <em>Formele fundamentale ale angoasei</em>. Editura Trei.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTINUĂ SĂ CITEȘTI ── */}
      <section className="bg-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-lp-mute md:text-lg">
            Continuă să citești
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: "/atac-de-panica", label: "Atacul de panică" },
              { href: "/tipuri/anxietate-sociala", label: "Anxietate socială" },
              { href: "/tipuri/fobii-specifice", label: "Fobii specifice" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 rounded-md border border-lp-border bg-white px-5 py-3 text-sm font-semibold text-lp-navy transition hover:border-lp-cyan hover:text-lp-cyan-dark"
              >
                {link.label}
                <span aria-hidden>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA DARK ── */}
      <section className="bg-lp-navy px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1100px] text-center text-white">
          <p className="text-base font-semibold uppercase tracking-[0.22em] text-lp-cyan md:text-lg">
            Cabinet
          </p>
          <h2 className="mt-4 font-work text-3xl font-bold leading-tight md:text-5xl">
            TOC-ul răspunde la <span className="bg-lp-yellow px-2 text-lp-navy">tratament specializat.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[680px] text-lg leading-relaxed text-white/85 md:text-xl">
            Nu e ceva cu care trebuie să trăiești, ci ceva ce se tratează.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <Link
              href="/programare?din=toc"
              className="lp-cta inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold md:text-lg"
            >
              Programează o consultație
              <span aria-hidden>→</span>
            </Link>
            <p className="text-sm text-white/60">Răspund personal la fiecare mesaj.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
