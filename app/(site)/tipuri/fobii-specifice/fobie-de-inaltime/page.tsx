"use client";

import Link from "next/link";

/* ============================================================
   FOBIA DE ÎNĂLȚIMI (ACROFOBIE) — Pagină completă (lp-* system)
   ============================================================ */

const FAQS: Array<{ q: string; a: React.ReactNode }> = [
  {
    q: "E normal să ți se facă rău la înălțime?",
    a: (
      <>
        <p>
          Da. Un grad de disconfort la înălțime e normal și protectiv. E un
          mecanism de supraviețuire pe care evoluția l-a instalat în creierul
          nostru. Strămoșii care nu se temeau deloc de prăpăstii nu au apucat
          să devină strămoși.
        </p>
        <p className="mt-3">
          Diferența între frica normală și fobie e de intensitate, durată și
          impact. Frica normală: simți un fior, te dai un pas înapoi, continui.
          Fobia: eviți complet situația, planifici totul în funcție de
          înălțime, renunți la experiențe importante.
        </p>
        <p className="mt-3">
          Când înălțimea începe să-ți controleze deciziile și să-ți restrângă
          viața, nu mai e doar prudență. E fobie. Și fobia e tratabilă.
        </p>
      </>
    ),
  },
  {
    q: "Gândul voi sări înseamnă că sunt suicidar?",
    a: (
      <>
        <p>
          Nu. Acest gând se numește chemarea vidului (l&apos;appel du vide) și
          apare la peste 50% din oameni, inclusiv la cei fără nicio problemă
          psihică și fără nicio tendință suicidară.
        </p>
        <p className="mt-3">
          E un artefact al modului în care creierul procesează pericolul.
          Detectează marginea, trimite un semnal de retragere, iar partea
          conștientă interpretează greșit impulsul ca pe o dorință. Logica e
          inversată, dar fenomenul e universal.
        </p>
        <p className="mt-3">
          Dacă gândul te sperie, asta e de fapt dovada că NU vrei să sari.
          Persoanele cu risc suicidar real nu se sperie de acest gând. Sperierea
          e semnul că valorile tale sunt intacte.
        </p>
      </>
    ),
  },
  {
    q: "Se agravează cu vârsta?",
    a: (
      <>
        <p>
          Poate. Fără tratament, fobia de înălțimi tinde să se extindă treptat.
          Situații care înainte erau tolerabile devin intolerabile. Lista
          locurilor evitate crește. Lumea se micșorează ușor, de la an la an,
          fără ca persoana să observe cât de mult a renunțat.
        </p>
        <p className="mt-3">
          În plus, odată cu vârsta, echilibrul fizic scade natural, ceea ce
          poate amplifica amețeala reală la înălțime și poate hrăni fobia.
        </p>
        <p className="mt-3">
          Vestea bună: tratamentul funcționează la orice vârstă. Expunerea
          terapeutică are rate de succes de 80-95% indiferent de cât timp a
          durat fobia. Nu e prea târziu.
        </p>
      </>
    ),
  },
  {
    q: "Vertijul e același lucru cu fobia de înălțimi?",
    a: (
      <>
        <p>
          Nu. Vertijul e o senzație de rotire sau instabilitate care poate avea
          cauze medicale: probleme ale urechii interne, tensiune arterială,
          disfuncții vestibulare. Apare indiferent de context, nu doar la
          înălțime.
        </p>
        <p className="mt-3">
          Fobia de înălțimi produce amețeală prin conflict senzorial (ochii,
          urechea internă și mușchii trimit informații contradictorii), nu prin
          disfuncție medicală. Amețeala apare doar în situații legate de
          înălțime și dispare când te îndepărtezi.
        </p>
        <p className="mt-3">
          Dacă ai amețeli și în alte situații (când te ridici brusc, în spații
          închise, fără legătură cu înălțimea), merită un consult ORL ca să
          excludi cauzele medicale. Un diagnostic corect e important pentru
          tratamentul corect.
        </p>
      </>
    ),
  },
  {
    q: "Pot scăpa complet de fobia de înălțimi?",
    a: (
      <>
        <p>
          Da. Expunerea terapeutică are o rată de succes de 80-95% pentru
          fobiile specifice. Majoritatea pacienților ajung să funcționeze
          normal în situații care înainte păreau imposibile.
        </p>
        <p className="mt-3">
          Complet nu înseamnă că nu vei mai simți niciodată nimic la înălțime.
          Un grad de precauție e sănătos și normal. Înseamnă că înălțimea nu-ți
          mai controlează viața, nu mai eviți, nu mai planifici totul în
          funcție de ea, și poți face lucrurile care contează pentru tine fără
          ca frica să decidă în locul tău.
        </p>
        <p className="mt-3">
          Tratamentul durează de obicei 4-12 ședințe. Unele cercetări arată
          rezultate excelente chiar și după o singură sesiune prelungită de
          expunere (75-90% succes). Nu e un proces lung sau complicat, ci unul
          dintre cele mai bine studiate și mai eficiente tratamente din
          psihologie.
        </p>
      </>
    ),
  },
];

const REFERENCES = [
  "Antony, M. M., Craske, M. G., & Barlow, D. H. (2006). Mastering Your Fears and Phobias: Therapist Guide (2nd ed.). Oxford University Press.",
  "Brandt, T., Arnold, F., Bles, W., & Kapteyn, T. S. (1980). The mechanism of physiological height vertigo. Acta Otolaryngologica, 89(5-6), 534-540.",
  "Huppert, D., Grill, E., & Brandt, T. (2017). A new questionnaire for estimating the severity of visual height intolerance and acrophobia. Frontiers in Neurology, 8, 211.",
  "Hames, J. L., Ribeiro, J. D., Smith, A. R., & Joiner, T. E. (2012). An urge to jump affirms the urge to live. Journal of Affective Disorders, 136(3), 1114-1120.",
  "Gabbard, G. O. (2007). Tratat de Psihiatrie Psihodinamică. Editura Trei.",
  "Freud, S. (1926). Inhibitions, Symptoms and Anxiety. Standard Edition, Vol. 20.",
  "Rothbaum, B. O., et al. (1995). Effectiveness of computer-generated (virtual reality) graded exposure in the treatment of acrophobia. American Journal of Psychiatry, 152(4), 626-628.",
  "Craske, M. G., Treanor, M., Conway, C. C., Zbozinek, T., & Vervliet, B. (2014). Maximizing exposure therapy: An inhibitory learning approach. Behaviour Research and Therapy, 58, 10-23.",
  "Öst, L. G. (1989). One-session treatment for specific phobias. Behaviour Research and Therapy, 27(1), 1-7.",
];

export default function FobieDeInaltimePage() {
  return (
    <main className="font-work min-h-screen bg-white text-lp-navy">

      {/* HERO */}
      <section className="bg-white px-6 pt-14 pb-12 md:pt-20 md:pb-16">
        <div className="mx-auto max-w-[820px]">
          <nav className="flex items-center gap-2 text-sm text-lp-mute-soft">
            <Link href="/tipuri/fobii-specifice" className="underline-offset-2 hover:underline">
              Fobii specifice
            </Link>
            <span aria-hidden>→</span>
            <span className="text-lp-navy">Fobia de înălțimi</span>
          </nav>

          <p className="mt-6 text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Ghid complet 2026
          </p>
          <h1 className="mt-4 font-work text-4xl font-bold leading-[1.05] tracking-tight text-lp-navy md:text-5xl lg:text-6xl">
            Fobia de <span className="lp-yellow-underline">înălțimi</span>.
          </h1>
          <p className="mt-5 text-sm text-lp-mute-soft">
            De{" "}
            <Link href="/despre-daniel" className="font-semibold text-lp-navy underline-offset-2 hover:underline">
              Daniel Gagea
            </Link>
            , psiholog clinician, psihoterapeut
          </p>

          <p className="mt-6 text-sm text-lp-mute-soft">
            Ai nevoie de ajutor imediat?{" "}
            <Link href="#ce-poti-face-acum" className="font-semibold text-lp-cyan-dark underline-offset-2 hover:underline">
              Mergi direct la Ce poți face acum
            </Link>
          </p>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-lp-mute md:text-xl">
            <p>
              Ești pe balconul unui hotel. Al patrulea etaj. Te apropii de
              balustradă și pui mâinile pe ea. Și în acel moment, ceva se
              întâmplă. Picioarele se înmoaie. Stomacul se ridică. O amețeală
              bruscă te face să te dai înapoi. Și apoi vine gândul, cel pe care
              nu l-ai spus nimănui.. dacă sar?
            </p>
            <p>
              Rușinea e imediată. Te întrebi ce e în neregulă cu tine. De ce ai
              gândi așa ceva. Te simți defect, periculos, nebun. Și din acel
              moment eviți balcoanele, etajele înalte, scările deschise,
              podurile, platformele de observație. Lumea ta se micșorează cu
              fiecare loc de care te ferești.
            </p>
            <p>
              <strong className="text-lp-navy">Ești în locul potrivit.</strong>{" "}
              Ce trăiești se numește fobie de înălțimi (acrofobie). Amețeala e
              reală, gândul e explicabil, și totul se tratează. În acest ghid
              vei înțelege de ce corpul tău reacționează așa, ce vrea să spună
              acel gând, și ce funcționează ca tratament.
            </p>
          </div>
        </div>
      </section>

      {/* CE ESTE */}
      <section id="ce-este" className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Definiție
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Ce este fobia de înălțimi.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Fobia de înălțimi (acrofobie) este o frică intensă, persistentă
              și disproporționată față de situațiile care implică înălțime.
              Face parte din categoria fobiilor specifice de tip mediu natural
              și afectează aproximativ 3-5% din populație. Femeile sunt afectate
              de aproximativ două ori mai des decât bărbații.
            </p>
            <p>
              Dar nu orice frică de înălțimi e fobie. Un grad de disconfort la
              înălțime e normal. E un mecanism de protecție pe care evoluția
              l-a instalat în creierul nostru. Strămoșii care nu se temeau
              deloc de prăpăstii aveau o problemă serioasă de supraviețuire.
            </p>
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Toată lumea se teme puțin de înălțimi
          </h3>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-md border-t-4 border-lp-cyan-dark bg-white p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-lp-cyan-dark">Frică normală</p>
              <p className="mt-3 text-base leading-relaxed text-lp-navy md:text-[17px]">
                Stai pe marginea unei stânci și simți un fior. Te dai un pas
                înapoi.
              </p>
              <p className="mt-3 text-base font-semibold text-lp-navy">Apoi continui drumul.</p>
            </div>
            <div className="rounded-md border-t-4 border-lp-yellow bg-white p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-lp-mute">Fobie</p>
              <p className="mt-3 text-base leading-relaxed text-lp-navy md:text-[17px]">
                Refuzi excursia pentru că traseul are un punct cu vedere
                panoramică.
              </p>
              <p className="mt-3 text-base leading-relaxed text-lp-navy md:text-[17px]">
                Sau mergi, dar tremuri, transpiri și te agăți de cineva tot
                drumul.
              </p>
              <p className="mt-3 text-base font-semibold text-lp-navy">Sau stai în mașină și aștepți pe ceilalți.</p>
            </div>
          </div>

          <div className="mt-8 rounded-md border-l-4 border-lp-cyan bg-lp-navy p-8 md:p-10">
            <p className="text-base leading-relaxed text-white/90 md:text-lg">
              Când înălțimea începe să-ți controleze deciziile, când refuzi
              locuințe, locuri de muncă, vacanțe sau experiențe din cauza ei,
              nu mai e prudență. E fobie. Și fobia e tratabilă.
            </p>
          </div>
        </div>
      </section>

      {/* AMEȚEALA */}
      <section id="ameteala" className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Conflict senzorial
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Amețeala ta nu e imaginară.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            Mulți oameni cred că amețeala pe care o simt la înălțime e doar în
            capul lor. Nu e. E un fenomen real, fiziologic, și are o explicație
            clară.
          </p>

          <p className="mt-8 font-semibold text-lp-navy md:text-lg">
            Corpul tău menține echilibrul folosind trei sisteme. Când ele se
            contrazic, apare amețeala.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              { icon: "👁️", name: "Ce văd ochii", normal: "Caută puncte de referință.. pereți, mobilier, podea.", inaltime: "La înălțime, punctele de referință sunt departe sau lipsesc. Ochii nu au pe ce se ancora." },
              { icon: "👂", name: "Ce simte urechea internă", normal: "Detectează mișcarea și poziția capului. Spune dacă ești stabil.", inaltime: "La înălțime funcționează normal, dar trimite informații care nu se potrivesc cu ce văd ochii." },
              { icon: "🦶", name: "Ce simt picioarele", normal: "Receptorii din tălpi simt suprafața solidă sub tine.", inaltime: "La înălțime suprafața e acolo, dar vizual pare că nu e nimic sub tine." },
            ].map((sys) => (
              <div key={sys.name} className="rounded-md border border-lp-border bg-lp-bg p-6">
                <p className="text-3xl">{sys.icon}</p>
                <p className="mt-3 font-work text-lg font-bold text-lp-navy">{sys.name}</p>
                <p className="mt-2 text-sm text-lp-mute md:text-[15px]">{sys.normal}</p>
                <p className="mt-2 text-sm font-medium text-lp-navy md:text-[15px]">{sys.inaltime}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-md border-l-4 border-lp-cyan bg-lp-navy p-8 md:p-10">
            <p className="text-base leading-relaxed text-white/90 md:text-lg">
              Când cele trei sisteme trimit mesaje contradictorii, creierul
              primește un conflict pe care nu-l poate rezolva. Și acel conflict
              se simte ca amețeală. Nu e panică, nu e slăbiciune, ci un fenomen
              fiziologic real.
            </p>
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Amețeală normală vs. fobie
          </h3>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-md border border-lp-border bg-lp-bg p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-lp-cyan-dark">Fără fobie</p>
              <p className="mt-3 text-base leading-relaxed text-lp-navy md:text-[17px]">
                Simți amețeala. Te dai un pas înapoi. Și gata. Continui ce
                făceai.
              </p>
            </div>
            <div className="rounded-md border border-lp-border bg-lp-bg p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-lp-mute">Cu fobie</p>
              <p className="mt-3 text-base leading-relaxed text-lp-navy md:text-[17px]">
                Simți amețeala și o interpretezi catastrofic: o să cad, o să
                leșin, o să pierd controlul. Interpretarea declanșează
                anxietatea, care amplifică amețeala, care confirmă
                interpretarea.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-md border-l-4 border-lp-yellow bg-lp-bg p-6 md:p-8">
            <p className="text-base leading-relaxed text-lp-navy md:text-lg">
              Amețeala la înălțime e normală. Interpretarea amețelii e cea care
              face diferența între disconfort și fobie.
            </p>
          </div>
        </div>
      </section>

      {/* GÂNDUL INTRUZIV */}
      <section id="gandul-intruziv" className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Chemarea vidului
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Gândul pe care nu l-ai spus nimănui.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Ești pe un balcon, pe un pod sau pe marginea unei stânci. Și
              brusc, apare gândul.. dacă sar?
            </p>
            <p>
              Nu l-ai chemat. Nu l-ai vrut. Dar e acolo, clar și intens. Și te
              sperie mai tare decât înălțimea în sine. Te întrebi dacă ești
              periculos. Dacă o parte din tine vrea cu adevărat să sară. Dacă
              ești suicidar fără să știi.
            </p>
            <p>
              Fenomenul are un nume:{" "}
              <strong className="text-lp-navy">chemarea vidului</strong> (în
              franceză, <em>l&apos;appel du vide</em>). Și nu e un semn că ceva
              e în neregulă cu tine. E exact opusul.
            </p>
            <p>
              Cercetările arată că peste 50% dintre oameni au acest gând la
              înălțime, inclusiv cei fără nicio problemă psihică și fără nicio
              tendință suicidară. Un studiu publicat în{" "}
              <em>Journal of Affective Disorders</em> a constatat că experiența
              e chiar mai frecventă la persoanele cu sensibilitate anxioasă
              ridicată, nu la cele cu ideație suicidară.
            </p>
            <p>
              Ce se întâmplă de fapt: creierul tău detectează pericolul
              (marginea, golul) și trimite un semnal rapid de retragere.. dă-te
              înapoi! Dar partea conștientă, care procesează mai lent, primește
              semnalul cu o fracțiune de secundă întârziere. Și în acea
              fracțiune, creierul caută o explicație pentru impulsul de
              retragere. Explicația pe care o găsește e că trebuie că a vrut să
              sară, de aceea s-a retras. Logica e inversată, dar creierul o
              acceptă.
            </p>
          </div>

          <div className="mt-8 rounded-md border-l-4 border-lp-cyan bg-lp-navy p-8 md:p-10">
            <p className="text-base leading-relaxed text-white md:text-lg">
              Nu ești periculos. Ai un creier care își face treaba prea bine.
              Gândul dacă sar nu e o dorință. E un semnal de protecție
              interpretat greșit. Și cu cât îl ții secret și te rușinezi de el,
              cu atât pare mai amenințător.
            </p>
          </div>
        </div>
      </section>

      {/* CUM ARATĂ */}
      <section id="cum-arata" className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Impactul real
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Cum arată în viața reală.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            Fobia de înălțimi nu e doar ce simți pe un balcon. E tot ce faci ca
            să nu ajungi acolo. Iată cinci zone pe care le afectează cel mai
            des:
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              { title: "Apartamentul", text: "Refuzi orice locuință peste etajul 2. Sau accepți, dar nu ieși niciodată pe balcon. Balconul devine un spațiu mort, cu ușa permanent închisă. Vizitatorii se întreabă de ce nu profiți de vedere. Tu știi de ce." },
              { title: "Vacanțele", text: "Nicio cameră cu vedere panoramică. Nicio excursie cu traseu montan. Niciun restaurant la etaj. Planifici totul în funcție de înălțime, nu de ce-ți dorești de fapt. Și nimeni nu știe că asta e criteriul principal." },
              { title: "Orașul", text: "Eviți pasarelele, podurile pietonale, parcările supraetajate. Urci pe scări doar dacă sunt închise. Escalatoarele deschise din mall-uri îți produc amețeală. Cladirile cu pereți de sticlă și etaje vizibile te fac să te simți instabil." },
              { title: "Copiii", text: "Balconul e încuiat permanent. Nu-i lași să se apropie de margini. Parcurile cu structuri de cățărat devin un coșmar. Și cea mai grea parte: începi să le transmiți frica ta, fără să vrei." },
              { title: "Cariera", text: "Refuzi biroul de la etajul 15. Inventezi scuze pentru team-building-ul de la munte. Nu poți lucra pe șantiere, în telecomunicații, în orice domeniu care implică înălțime. Uneori cariera e limitată de o frică despre care nu vorbești la interviuri." },
            ].map((card) => (
              <div key={card.title} className="rounded-md border border-lp-border bg-lp-bg p-7">
                <p className="font-work text-lg font-bold text-lp-navy">{card.title}</p>
                <p className="mt-3 text-base leading-relaxed text-lp-mute md:text-[17px]">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUM FUNCȚIONEAZĂ */}
      <section id="cum-functioneaza" className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Mecanismul
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Cum funcționează fobia de înălțimi.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            Fobia nu e despre înălțime. E despre ce crede creierul tău că se va
            întâmpla acolo. Și odată ce cercul vicios pornește, se
            auto-alimentează:
          </p>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Cercul vicios
          </h3>
          <div className="mt-6 flex flex-col gap-3 rounded-md border border-lp-border bg-white p-6">
            {[
              { step: "1", text: "Te apropii de o situație cu înălțime (balcon, pod, etaj înalt)" },
              { step: "2", text: "Apare amețeala (conflictul senzorial real)" },
              { step: "3", text: "Interpretezi catastrofic.. o să cad, o să leșin, o să pierd controlul" },
              { step: "4", text: "Anxietatea crește rapid: inimă, transpirație, tremur, respirație" },
              { step: "5", text: "Senzațiile fizice amplifică amețeala (confirmă dovada că ești în pericol)" },
              { step: "6", text: "Te retragi sau eviți complet" },
              { step: "7", text: "Anxietatea scade imediat. Creierul învață: evitarea m-a salvat." },
            ].map((s) => (
              <div key={s.step} className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lp-navy text-sm font-bold text-white">
                  {s.step}
                </div>
                <p className="pt-1 text-base leading-relaxed text-lp-navy md:text-[17px]">{s.text}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Comportamente de siguranță
          </h3>
          <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
            Pe lângă evitare, fobia creează o rețea de comportamente de
            siguranță, lucruri pe care le faci ca să faci față dar care mențin
            fobia activă:
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Te ții de balustradă cu ambele mâini",
              "Nu te uiți niciodată în jos",
              "Mergi lipit de perete, departe de margine",
              "Stai pe vine sau te apleci spre interior",
              "Respiri controlat, numeri pașii",
              "Te concentrezi pe telefon ca să nu te gândești",
              "Mergi doar dacă te ține cineva de mână",
              "Eviți geamurile mari la etaje înalte",
              "Închizi jaluzelele la hotel",
              "Refuzi scările deschise sau escalatoarele",
            ].map((s) => (
              <span key={s} className="rounded-md border border-lp-border bg-white px-4 py-2 text-sm text-lp-navy md:text-[15px]">
                {s}
              </span>
            ))}
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Expansiunea
          </h3>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Fără tratament, fobia de înălțimi tinde să se extindă. La început
              e doar despre balcoane. Apoi despre poduri. Apoi despre etajele
              de la mall. Apoi despre scările deschise. Apoi despre
              escalatoarele cu vedere în jos. Fiecare evitare reușită confirmă
              creierului că a avut dreptate, și el adaugă noi situații pe lista
              de pericole.
            </p>
            <p>
              La unii oameni, expansiunea ajunge atât de departe încât evită
              orice clădire cu mai mult de două etaje, orice drum de munte,
              orice pod, orice loc de unde se vede în jos. Lumea se micșorează
              constant, iar persoana abia observă, pentru că fiecare renunțare
              pare mică și rezonabilă în momentul în care o face.
            </p>
          </div>
        </div>
      </section>

      {/* PERSPECTIVA PSIHODINAMICĂ - dark */}
      <section id="perspectiva-psihodinamica" className="bg-lp-navy px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px] text-white">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.22em] text-lp-cyan">
            Perspectiva clinică
          </p>
          <h2 className="mt-4 font-work text-3xl font-bold leading-tight md:text-4xl lg:text-[44px]">
            Când înălțimea nu e despre înălțime.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-white/85 md:text-lg">
            <p>
              Glen Gabbard, unul dintre cei mai importanți psihiatri
              psihodinamici, observă un pattern interesant la pacienții cu
              fobie de înălțimi: pentru mulți, înălțimea simbolizează altceva.
              Distanța. Căderea. Pierderea.
            </p>
            <p>
              Înălțimea înseamnă distanță față de sol, de siguranță, de ceea ce
              e familiar. Pentru unele persoane, această distanță rezonează cu
              o experiență internă.. de a fi departe de ceva sau cineva de care
              depind, de a fi suspendat fără sprijin, de a nu avea pe ce te
              baza.
            </p>
            <p>
              Căderea, la rândul ei, nu e doar fizică. Căderea poate fi eșec,
              pierderea statutului, prăbușirea a ceva construit cu grijă. Unii
              oameni dezvoltă fobia de înălțimi tocmai în perioade în care simt
              că pot cădea din altceva.. dintr-o relație, dintr-o carieră, din
              propria imagine de sine.
            </p>
            <p>
              Freud nota ceva profund: atunci când un pericol intern devine
              intolerabil, mintea îl mută pe un obiect extern. E mai ușor să-ți
              fie frică de un balcon decât de faptul că relația ta se destramă.
              E mai ușor să eviți etajele înalte decât să admiți că te simți
              nesigur în propria viață.
            </p>
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-white md:text-3xl">
            Ce înseamnă asta pentru tine
          </h3>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-white/85 md:text-lg">
            <p>
              Nu înseamnă că fobia ta nu e reală sau că e doar simbolică. Fobia
              e reală, amețeala e reală, suferința e reală. Dar merită să te
              întrebi: ce se întâmpla în viața mea când a apărut sau s-a
              agravat? Mă simt nesigur undeva? Am pierdut un sprijin important?
            </p>
            <p>
              Perspectiva psihodinamică nu înlocuiește expunerea. O
              completează. Uneori, fobia se tratează mai repede când înțelegi
              nu doar mecanismul, ci și semnificația ei.
            </p>
          </div>
        </div>
      </section>

      {/* TRATAMENT */}
      <section id="tratament" className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Tratament
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Cum se tratează.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            Fobia de înălțimi se tratează prin expunere terapeutică, nu prin
            medicamente. Principiul e simplu: rămâi în situația temută
            suficient de mult încât creierul să învețe că nu se întâmplă nimic
            rău. Anxietatea atinge un vârf, apoi scade de la sine. Iar această
            experiență de am rămas și nu s-a întâmplat nimic e cea care
            rescrie fobia.
          </p>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Ierarhia de expunere
          </h3>
          <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
            Nu sari direct pe balconul de la etajul 10. Tratamentul e treptat,
            calibrat, și tu controlezi fiecare pas:
          </p>

          <div className="mt-6 flex flex-col gap-6 rounded-md border border-lp-border bg-lp-bg p-6">
            {[
              { level: "Ușor", color: "bg-lp-cyan text-lp-navy", steps: [
                "Fotografii și video-uri cu peisaje de la înălțime",
                "Privit pe geam de la etajul 2",
              ]},
              { level: "Mediu", color: "bg-lp-yellow text-lp-navy", steps: [
                "Balcon la etajul 3, cu balustradă solidă",
                "Pod pietonal, cu oprire la mijloc",
                "Balcon la etajul 5, apropiere treptată de margine",
              ]},
              { level: "Greu", color: "bg-lp-navy text-white", steps: [
                "Platformă de observație deschisă",
                "Balcon la etajul 8-10, privit în jos",
                "Podea de sticlă (CN Tower, Skydecks)",
              ]},
            ].map((group) => (
              <div key={group.level}>
                <span className={`inline-block rounded px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] ${group.color}`}>
                  {group.level}
                </span>
                <ol className="mt-3 list-decimal space-y-2 pl-6 text-base leading-relaxed text-lp-navy md:text-[17px]">
                  {group.steps.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            La fiecare treaptă, rămâi în situație până când anxietatea scade de
            la sine. Nu pleci la primul semn de disconfort. Stai. Și descoperi
            ceva pe care evitarea nu te lasă niciodată să descoperi: frica are
            un vârf, iar după vârf, coboară.
          </p>
        </div>
      </section>

      {/* TRATAMENT DETALII */}
      <section className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <h3 className="font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Expunerea interoceptivă (antrenamentul de amețeală)
          </h3>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              O componentă unică a tratamentului fobiei de înălțimi. Amețeala e
              unul dintre simptomele cele mai temute, și mulți oameni o
              interpretează ca semn de pericol iminent.. o să leșin, o să cad.
            </p>
            <p>
              Expunerea interoceptivă înseamnă să produci amețeala intenționat,
              în condiții controlate. Te rotești pe scaun. Stai cu capul în jos
              și te ridici rapid. Te uiți la un punct fix și întorci capul
              brusc. Scopul: creierul tău învață că amețeala nu e periculoasă.
              Nu duce la leșin. Nu duce la cădere. E doar o senzație neplăcută
              care trece.
            </p>
            <p>
              Când amețeala nu mai e interpretată ca pericol, unul dintre cele
              mai puternice motoare ale fobiei se oprește.
            </p>
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Realitatea virtuală
          </h3>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              VR-ul oferă un pas intermediar valoros. Cu un set de ochelari,
              poți sta pe balconul de la etajul 20, pe o platformă de
              observație sau pe marginea unei stânci, totul fără să pleci din
              cabinetul terapeutului.
            </p>
            <p>
              Studiile arată rezultate comparabile cu expunerea reală.
              Avantajul: poți repeta aceeași situație de zeci de ori, poți
              controla intensitatea, și poți opri oricând. E deosebit de util
              pentru persoanele care refuză complet să se expună la înălțimi
              reale.
            </p>
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Ce spun datele
          </h3>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              { stat: "80-95%", label: "pacienți cu îmbunătățiri semnificative" },
              { stat: "4-12", label: "ședințe de tratament" },
              { stat: "75-90%", label: "succes într-o singură sesiune prelungită" },
            ].map((d) => (
              <div key={d.stat} className="rounded-md border border-lp-border bg-white p-6 text-center">
                <p className="font-work text-3xl font-bold tracking-tight text-lp-navy md:text-4xl">
                  {d.stat}
                </p>
                <p className="mt-2 text-sm leading-snug text-lp-mute md:text-base">
                  {d.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CE POȚI FACE ACUM */}
      <section id="ce-poti-face-acum" className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Primii pași
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Ce poți face acum.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
            Nu trebuie să aștepți o programare la psiholog ca să începi.
          </p>

          <div className="mt-10 flex flex-col gap-5">
            {[
              {
                nr: "1",
                title: "Grounding (ancorarea în corp)",
                text: "Data viitoare când simți amețeală la înălțime, nu fugi. Pune picioarele ferm pe podea. Simte contactul tălpilor cu suprafața. Apasă degetele de la picioare în jos. Privește un punct fix la nivelul ochilor, nu în jos. Respiră lent: 4 secunde inspirație, 6 secunde expirație. Amețeala nu dispare instant, dar se stabilizează. Scopul nu e să elimini senzația, ci să descoperi că poți rămâne cu ea.",
              },
              {
                nr: "2",
                title: "Testează predicțiile",
                text: "Fobia funcționează pe predicții catastrofice: dacă mă uit în jos, o să leșin sau dacă stau pe balcon, o să cad. Scrie predicția pe hârtie. Apoi testează-o, treptat. Uită-te pe geam de la etajul 2. Ai leșinat? Nu. Stai pe balconul de la etajul 1 pentru 30 de secunde. Ai căzut? Nu. Fiecare predicție infirmată slăbește fobia. Nu trebuie să sari la etajul 10. Începe cu ceea ce simți că e la limita suportabilului, nu dincolo de ea.",
              },
              {
                nr: "3",
                title: "Scannerul de siguranță",
                text: "Când ești într-o situație cu înălțime și simți panică, oprește-te și fă un inventar concret: Balustrada e solidă? Da. Podeaua e stabilă? Da. Am spațiu suficient? Da. Alți oameni stau aici fără probleme? Da. Nu încerci să te convingi că e sigur. Verifici, concret, element cu element. E o diferență importantă. Convingerea nu funcționează. Verificarea, da.",
              },
            ].map((ex) => (
              <div key={ex.nr} className="flex items-start gap-5 rounded-md border border-lp-border bg-lp-bg p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lp-cyan font-bold text-lp-navy">
                  {ex.nr}
                </div>
                <div>
                  <p className="font-work text-lg font-bold text-lp-navy">{ex.title}</p>
                  <p className="mt-2 text-base leading-relaxed text-lp-mute md:text-[17px]">{ex.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CÂND MERITĂ SPECIALIST */}
      <section id="cand-merita-specialist" className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Specialist
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Când merită să cauți un specialist.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
            Exercițiile de mai sus sunt un punct de pornire. Dar un terapeut
            poate face diferența prin:
          </p>

          <div className="mt-8 flex flex-col gap-3">
            {[
              "Ierarhie de expunere personalizată, calibrată pe situațiile care contează pentru tine",
              "Trepte ghidate de expunere, cu suport profesional la fiecare pas",
              "Identificarea comportamentelor de siguranță pe care le folosești fără să realizezi",
              "Expunere interoceptivă structurată, antrenamentul de amețeală care dezactivează interpretarea catastrofică",
              "Explorarea stratului mai profund.. ce înseamnă înălțimea pentru tine, dincolo de balcon",
            ].map((text) => (
              <div key={text} className="flex items-start gap-3 rounded-md border border-lp-border bg-white p-5">
                <span aria-hidden className="mt-0.5 shrink-0 text-lg leading-none text-lp-cyan-dark">→</span>
                <p className="text-base leading-relaxed text-lp-navy md:text-[17px]">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-md border-l-4 border-lp-cyan bg-white p-6 md:p-8">
            <p className="text-base leading-relaxed text-lp-navy md:text-lg">
              <strong>Notă:</strong> fobia de înălțimi apare frecvent în
              combinație cu{" "}
              <Link href="/tipuri/fobii-specifice/claustrofobie" className="font-semibold text-lp-cyan-dark underline-offset-2 hover:underline">
                claustrofobia
              </Link>
              . Mulți oameni se tem atât de spații deschise la înălțime cât și
              de spații închise. Dacă te recunoști, un terapeut poate lucra pe
              ambele simultan.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="intrebari-frecvente" className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <div className="text-center">
            <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-cyan-dark">
              Întrebări frecvente
            </p>
            <h2 className="mt-3 font-work text-3xl font-bold leading-tight tracking-tight text-lp-navy md:text-4xl">
              Ce vor să știe oamenii despre fobia de înălțimi.
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
                <div className="px-6 pb-5 text-base leading-relaxed text-lp-mute md:text-[17px]">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* NAVIGARE */}
      <section className="bg-lp-bg px-6 py-16">
        <div className="mx-auto max-w-[820px]">
          <h2 className="font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Continuă să citești
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              { href: "/tipuri/fobii-specifice", label: "Fobii specifice .. ghid complet" },
              { href: "/tipuri/fobii-specifice/claustrofobie", label: "Claustrofobie" },
              { href: "/tipuri/fobii-specifice/fobie-de-animale", label: "Fobia de animale" },
              { href: "/tipuri/fobii-specifice/fobie-de-sange", label: "Fobia de sânge și ace" },
              { href: "/tipuri/fobii-specifice/fobie-de-zbor", label: "Fobia de zbor" },
              { href: "/tipuri/atac-de-panica", label: "Atacul de panică" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 rounded-md border border-lp-border bg-white px-4 py-2.5 text-sm font-semibold text-lp-navy transition hover:border-lp-cyan hover:text-lp-cyan-dark md:text-[15px]"
              >
                {link.label}
                <span aria-hidden>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SURSE */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-[820px]">
          <details className="rounded-md border border-lp-border bg-white px-6 py-4">
            <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-semibold text-lp-navy">
              <span className="text-lg leading-none text-lp-cyan-dark">+</span>
              Surse bibliografice ({REFERENCES.length})
            </summary>
            <ol className="mt-6 list-decimal space-y-2 pl-6 text-[13px] leading-relaxed text-lp-mute-soft">
              {REFERENCES.map((ref, i) => (
                <li key={i}>{ref}</li>
              ))}
            </ol>
          </details>
        </div>
      </section>

      {/* CTA DARK */}
      <section className="bg-lp-navy px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1100px] text-center text-white">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.22em] text-lp-cyan">
            Cabinet
          </p>
          <h2 className="mt-4 font-work text-3xl font-bold leading-tight md:text-5xl">
            Fobia de înălțimi se{" "}
            <span className="bg-lp-yellow px-2 text-lp-navy">tratează</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-[680px] text-lg leading-relaxed text-white/85 md:text-xl">
            Răspunde excelent la tratament. Nu e ceva cu care trebuie să
            trăiești.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <Link
              href="/programare?din=fobie-de-inaltime"
              className="lp-cta inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold md:text-lg"
            >
              Programează o consultație
              <span aria-hidden>→</span>
            </Link>
            <p className="text-sm text-white/60">
              Răspund personal la fiecare mesaj.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
