"use client";

import Link from "next/link";

/* ============================================================
   FOBIA DE SÂNGE ȘI ACE — Pagină completă (lp-* system)
   Special: vasovagal reflex causes fainting (opposite mechanism)
   ============================================================ */

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: "Leșinul la sânge e periculos?",
    a: "Leșinul vasovagal este benign din punct de vedere medical. Durează de obicei câteva secunde până la un minut. Odată ce ești orizontal, fluxul sanguin către creier se restabilește și îți revii. Pericolul real nu e leșinul în sine, ci contextul în care se produce.. dacă leșini în picioare, poți cădea și te poți lovi. De aceea, dacă știi că ai tendința de a leșina, stai pe un scaun cu cotiere sau cere să faci procedura semi-întins.",
  },
  {
    q: "De ce am eu această problemă dacă nimeni nu m-a traumatizat?",
    a: `Nu ai nevoie de o traumă directă ca să dezvolți fobia de sânge. Cercetările arată trei căi: o experiență negativă directă (ai leșinat la o recoltare și de atunci eviți), observarea altcuiva speriat (ai văzut un părinte leșinând sau îngroziți de sânge), sau transmitere informațională (ai auzit povești despre proceduri medicale dureroase). În plus, 61% dintre persoane au o componentă genetică. Uneori nu există un "moment zero" identificabil, iar asta e perfect normal.`,
  },
  {
    q: "Pot scăpa de fobia de sânge complet?",
    a: "Da. Fobiile specifice au cel mai bun prognostic din toate tulburările de anxietate, cu 80-95% rată de succes la tratament. Mulți oameni raportează că după tratament pot face analize de sânge, vaccinuri și vizite la dentist fără anxietate semnificativă. Tensiunea activă le dă înapoi controlul pe care simțeau că l-au pierdut.",
  },
  {
    q: "Copilul meu leșină la sânge. Ce pot face?",
    a: "Dacă ai această fobie și ai copii, sunt două lucruri importante de știut. Primul: copilul tău are 61% șanse să fi moștenit predispoziția. Fii atent la semnale, nu ca să-l sperii, ci ca să-l ajuți devreme. Al doilea: modul în care tu reacționezi contează enorm. Dacă tu arăți teroare la vederea sângelui, copilul tău învață prin observare că sângele e periculos. Cele mai bune lucruri pe care le poți face sunt să-ți tratezi propria fobie și să modelezi un răspuns calm, chiar dacă necesită efort.",
  },
  {
    q: "De ce mi se face rău și la filme cu sânge, nu doar la sânge real?",
    a: "Creierul tău nu face o distincție clară între sânge real și sânge fictiv când activează răspunsul vasovagal. Schema de amenințare se activează la orice stimul asociat cu sângele: o imagine, un video, chiar și o descriere verbală detaliată. Cu cât stimulul e mai realist, cu atât reacția e mai puternică. Dar asta e și o veste bună, pentru că înseamnă că poți folosi materialele vizuale ca prime trepte în ierarhia de expunere, într-un mediu complet sigur.",
  },
];

const REFERENCES = [
  "Antony, M. M., Craske, M. G., & Barlow, D. H. (2006). Mastering Your Fears and Phobias: Therapist Guide (2nd ed.). Oxford University Press.",
  "Clark, D. A., & Beck, A. T. (2010). Cognitive Therapy of Anxiety Disorders: Science and Practice. Guilford Press.",
  "Andrews, G., Creamer, M., Crino, R., Hunt, C., Lampe, L., & Page, A. (2003). The Treatment of Anxiety Disorders (2nd ed.). Cambridge University Press.",
  "Gabbard, G. O. (2007). Tratat de Psihiatrie Psihodinamică. Editura Trei.",
  "Wolfe, B. E. (2005). Understanding and Treating Anxiety Disorders. American Psychological Association.",
  "Öst, L.-G. (1987). Applied tension technique for treatment of blood phobia. Behaviour Research and Therapy, 25(1), 25-29.",
  "Freud, S. (1926). Inhibitions, Symptoms and Anxiety. Standard Edition, Vol. 20.",
];

export default function FobieSangePage() {
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
            <span className="text-lp-navy">Fobia de sânge</span>
          </nav>

          <p className="mt-6 text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Ghid complet 2026
          </p>
          <h1 className="mt-4 font-work text-4xl font-bold leading-[1.05] tracking-tight text-lp-navy md:text-5xl lg:text-6xl">
            Fobia de <span className="lp-yellow-underline">sânge</span> și ace.
          </h1>
          <p className="mt-5 text-sm text-lp-mute-soft">
            De{" "}
            <Link href="/despre-daniel" className="font-semibold text-lp-navy underline-offset-2 hover:underline">
              Daniel Gagea
            </Link>
            , psiholog clinician, psihoterapeut
          </p>

          <p className="mt-6 text-sm text-lp-mute-soft">
            Ai o recoltare de sânge programată și deja te gândești cum s-o eviți?{" "}
            <Link href="#ce-poti-face-acum" className="font-semibold text-lp-cyan-dark underline-offset-2 hover:underline">
              Mergi direct la Ce poți face acum
            </Link>
          </p>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-lp-mute md:text-xl">
            <p>
              Asistenta pregătește acul. Tu deja simți cum ți se face cald, cum
              vederea se îngustează, cum genunchii ți se înmoaie. Nu de durere
              ți-e frică. Durerea e suportabilă. Ce e insuportabil e altceva..
              senzația că pierzi controlul, că podeaua se duce de sub tine, că
              ți se face negru în fața ochilor. Și rușinea. Rușinea că ești
              adult și că o simplă analiză de sânge te poate pune la pământ.
            </p>
            <p>
              Ai încercat să te relaxezi. Să respiri adânc. Să te gândești la
              altceva. Nu a funcționat. Și nu a funcționat dintr-un motiv
              precis pe care probabil nimeni nu ți l-a explicat.
            </p>
            <p>
              <strong className="text-lp-navy">
                Dacă te recunoști în aceste cuvinte, nu ești slab și nu
                exagerezi.
              </strong>{" "}
              Ce trăiești se numește fobie de sânge-injecție-rănire. Corpul tău
              funcționează diferit de al celorlalți oameni cu fobii. Și în
              acest ghid vei înțelege exact de ce se întâmplă asta, de ce
              sfaturile obișnuite nu merg, și ce funcționează în schimb.
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
            Ce este fobia de sânge și ace.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Fobia de sânge-injecție-rănire este o frică intensă și
              persistentă față de vederea sângelui, a rănilor, a acelor sau a
              procedurilor medicale, disproporționată față de pericolul real,
              care duce la evitare activă și afectează viața de zi cu zi. Face
              parte din cele 5 subtipuri de fobii specifice și afectează
              aproximativ 3-4% din populație.
            </p>
            <p>
              Are cel mai timpuriu debut dintre fobii, apărând frecvent între 5
              și 9 ani, și o componentă genetică remarcabilă.. 61% dintre
              persoanele cu această fobie au cel puțin o rudă de gradul I cu
              aceeași problemă.
            </p>
            <p>
              Spre deosebire de majoritatea celorlalte fobii, distribuția pe
              gen este relativ echilibrată. Nu e o problemă de femei sau de
              bărbați. Apare la toți, indiferent de vârstă, profesie sau
              personalitate.
            </p>
            <p>
              Și are o particularitate pe care nicio altă fobie nu o are. Un
              mecanism fiziologic complet diferit, care face ca aproape tot ce
              știi despre gestionarea fricii să nu se aplice aici.
            </p>
          </div>
        </div>
      </section>

      {/* DE CE E DIFERITĂ - dark */}
      <section className="bg-lp-navy px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px] text-white">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.22em] text-lp-cyan">
            Mecanism unic
          </p>
          <h2 className="mt-4 font-work text-3xl font-bold leading-tight md:text-4xl lg:text-[44px]">
            De ce e diferită de orice altă fobie.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/85 md:text-lg">
            Aici e cheia întregii povești. Dacă înțelegi asta, înțelegi totul.
          </p>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-white md:text-3xl">
            Ce se întâmplă în orice altă fobie
          </h3>
          <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
            Când o persoană cu fobie de câini vede un câine, corpul ei face
            exact ce face corpul oricui în pericol.. activează sistemul de
            luptă sau fugi. Inima bate mai repede, tensiunea arterială crește,
            adrenalina se eliberează, mușchii se tensionează. Senzațiile sunt
            neplăcute, dar corpul rămâne în stare de alertă maximă. Nu leșini.
            Rămâi conștient, gata să fugi.
          </p>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-white md:text-3xl">
            Ce se întâmplă în fobia de sânge
          </h3>
          <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
            Corpul tău face ceva complet diferit. Și o face în două faze.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-md border-t-4 border-lp-cyan bg-white/5 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-lp-cyan">Faza 1: Activare</p>
              <p className="mt-3 text-base leading-relaxed text-white/90 md:text-[17px]">
                La vederea sângelui, a unui ac, sau a unei răni, corpul tău
                reacționează inițial la fel ca în orice altă fobie. Tensiunea
                arterială crește. Pulsul se accelerează. Transpiri. Simți
                frică. Totul pare normal pentru o fobie.
              </p>
            </div>
            <div className="rounded-md border-t-4 border-lp-yellow bg-white/5 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-lp-yellow">Faza 2: Inversare bruscă</p>
              <p className="mt-3 text-base leading-relaxed text-white/90 md:text-[17px]">
                Și apoi se întâmplă ceva ce nu se întâmplă în nicio altă fobie.
                În câteva minute, tensiunea arterială scade brusc. Pulsul
                încetinește dramatic. Fluxul de sânge către creier se reduce.
                Și pierzi cunoștința.
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-white/85 md:text-lg">
            <p>
              Acest mecanism se numește{" "}
              <strong className="text-white">răspuns vasovagal bifazic</strong>.
              Bifazic pentru că are două faze opuse. Vasovagal pentru că nervul
              vag, cel mai lung nerv din corpul tău, preia controlul și produce
              o scădere bruscă a tensiunii și a pulsului.
            </p>
            <p>
              70-80% dintre persoanele cu această fobie au leșinat cel puțin o
              dată. Nu din cauza fricii excesive. Nu din cauza slăbiciunii. Din
              cauza unui mecanism fiziologic concret, măsurabil, pe care corpul
              lor îl execută automat.
            </p>
          </div>

          <div className="mt-8 rounded-md border-l-4 border-lp-yellow bg-white/10 p-8 md:p-10">
            <p className="text-base leading-relaxed text-white md:text-lg">
              Asta e singura fobie în care corpul tău nu rămâne în alertă. E
              singura fobie în care corpul tău, practic, se oprește.
            </p>
          </div>
        </div>
      </section>

      {/* DE CE RELAXAREA NU FUNCȚIONEAZĂ */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Paradox
          </p>
          <h2 id="relaxarea-periculoasa" className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            De ce relaxează-te e cel mai prost sfat.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Gândește-te la ce înseamnă relaxarea. Respirație lentă, mușchi
              relaxați, puls care coboară, tensiune arterială care scade. Exact
              ce prescrie orice ghid de anxietate de pe internet.
            </p>
            <p>
              Acum gândește-te la ce face corpul tău în fobia de sânge.. deja
              scade tensiunea arterială, deja încetinește pulsul, deja reduce
              fluxul sanguin către creier. Și cineva îți spune să te relaxezi.
            </p>
            <p>
              E ca și cum ai turna apă pe un foc care deja se stinge. Doar că
              aici focul e conștiința ta. Relaxarea nu te ajută.{" "}
              <strong className="text-lp-navy">
                Relaxarea accelerează drumul spre leșin.
              </strong>
            </p>
            <p>
              De aceea ai încercat de zeci de ori tehnicile standard și nu au
              funcționat. Nu pentru că le-ai făcut greșit. Pentru că sunt
              greșite pentru tine. Toate tehnicile de management al anxietății
              sunt construite pe presupunerea că corpul tău e supra-activat și
              trebuie calmat. Dar în fobia de sânge, problema nu e
              supra-activarea. Problema e prăbușirea care vine după ea.
            </p>
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            De ce ai tu această reacție și alții nu
          </h3>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Fobia de sânge are cea mai puternică componentă genetică din
              toate fobiile. 61% dintre persoanele cu această fobie au cel
              puțin o rudă de gradul I, un părinte, un frate sau o soră, cu
              aceeași problemă.
            </p>
            <p>
              Asta înseamnă că dacă mama ta leșina la vederea sângelui, sau
              tatăl tău evita cabinetul medical, șansele ca tu să ai aceeași
              reacție sunt semnificativ mai mari. Nu pentru că ai învățat de la
              ei, ci pentru că sistemul tău nervos autonom funcționează într-un
              anumit fel, moștenit genetic.
            </p>
            <p>
              Știu că poate ai crescut crezând că e o slăbiciune de caracter.
              Că trebuie să te obișnuiești. Că dacă te-ai forța, ar trece. Nu e
              o slăbiciune, ci un mecanism fiziologic la fel de real ca grupul
              tău sanguin. Și la fel de puțin controlabil prin voință.
            </p>
          </div>
        </div>
      </section>

      {/* TENSIUNEA ACTIVĂ - INTRO */}
      <section id="applied-tension" className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Soluția specifică
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            <span className="lp-yellow-underline">Tensiunea activă</span>.. singurul lucru care chiar funcționează.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            Aici vine vestea bună. Exact pentru că fobia de sânge are un
            mecanism diferit, există o tehnică diferită, specifică, dezvoltată
            exact pentru ea. Se numește{" "}
            <strong className="text-lp-navy">tensiunea activă</strong> (applied
            tension în literatura de specialitate), a fost creată de psihologul
            Lars-Göran Öst în 1987, și are una dintre cele mai mari rate de
            succes din întreaga psihoterapie.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-md border border-lp-border bg-white p-7 opacity-75">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-lp-mute">Ce faci instinctiv</p>
              <p className="mt-3 text-base leading-relaxed text-lp-navy md:text-[17px]">
                Te relaxezi. Respiri adânc. Încerci să te calmezi. Tensiunea
                scade și mai mult. Leșinul vine mai repede.
              </p>
            </div>
            <div className="rounded-md border-2 border-lp-cyan-dark bg-white p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-lp-cyan-dark">Ce funcționează</p>
              <p className="mt-3 text-base leading-relaxed text-lp-navy md:text-[17px]">
                Te tensionezi. Strângi mușchii. Crești tensiunea arterială.
                Trimiți sânge înapoi către creier. Și previi leșinul.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TENSIUNEA ACTIVĂ - PAȘII */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <h3 className="font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Cum se face, pas cu pas
          </h3>

          <div className="mt-8 flex flex-col gap-4">
            {[
              { step: "1", title: "Tensionare", text: "Strânge simultan mușchii brațelor, picioarelor și trunchiului. Ca și cum ai încerca să ridici un obiect foarte greu de pe podea. Nu ține respirația, doar tensionează mușchii." },
              { step: "2", title: "Menținere", text: "Ține tensiunea timp de 10-15 secunde. Vei simți o senzație de căldură în față și în urechi. Asta e semnul că sângele ajunge din nou la creier." },
              { step: "3", title: "Relaxare parțială", text: "Relaxează mușchii timp de 20-30 de secunde. Nu relaxare completă, ci doar revenire la normal. Nu te lăsa moale." },
              { step: "4", title: "Repetare", text: "Repetă ciclul de 5 ori consecutiv." },
              { step: "5", title: "Practică", text: "Exersează asta de 5 ori pe zi, timp de o săptămână, înainte de orice situație care te sperie. Vrei ca mișcarea să devină automată, să nu mai trebuiască să te gândești la ea." },
            ].map((s) => (
              <div key={s.step} className="flex items-start gap-5 rounded-md border border-lp-border bg-lp-bg p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lp-cyan font-bold text-lp-navy">
                  {s.step}
                </div>
                <div>
                  <p className="font-work text-lg font-bold text-lp-navy">{s.title}</p>
                  <p className="mt-2 text-base leading-relaxed text-lp-mute md:text-[17px]">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALENDAR */}
      <section className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <h3 className="font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Calendarul de antrenament
          </h3>

          <div className="mt-8 flex flex-col gap-4">
            {[
              { week: "Săptămâna 1", label: "Doar antrenament", desc: "Practică tensiunea activă fără nicio confruntare cu frica. 5 seturi pe zi. Pur antrenament muscular." },
              { week: "Săptămâna 2", label: "Expunere ușoară", desc: "Te uiți la poze cu sânge sau la scene medicale din filme. Tensionezi când simți primele semnale." },
              { week: "Săptămâna 3", label: "Expunere moderată", desc: "Mergi la un laborator, observi cum altcineva dă sânge. Tensionezi activ." },
              { week: "Săptămâna 4+", label: "Expunere directă", desc: "Recoltare de sânge proprie, vaccinare, cu tensionare în timp real." },
            ].map((w) => (
              <div key={w.week} className="flex flex-col gap-3 rounded-md border border-lp-border bg-white p-6 md:flex-row md:items-start md:gap-6">
                <div className="md:w-[140px] md:shrink-0">
                  <p className="font-work text-base font-bold text-lp-cyan-dark">{w.week}</p>
                  <p className="text-sm text-lp-mute">{w.label}</p>
                </div>
                <p className="text-base leading-relaxed text-lp-navy md:text-[17px]">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEMNALE + REZULTATE */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <h3 className="font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Cum știi că trebuie să acționezi
          </h3>
          <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
            Corpul tău îți trimite câteva semnale clare înainte de leșin. Dacă
            le recunoști, poți interveni la timp.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Amețeală", "Vedere încețoșată sau în tunel", "Greață", "Căldură urmată brusc de frig", "Amorțeală în degete sau buze", "Senzația că se face negru"].map((s) => (
              <span key={s} className="rounded-md border border-lp-border bg-lp-bg px-4 py-2 text-sm text-lp-navy md:text-[15px]">
                {s}
              </span>
            ))}
          </div>

          <div className="mt-8 rounded-md border-l-4 border-lp-yellow bg-lp-bg p-6 md:p-8">
            <p className="text-base leading-relaxed text-lp-navy md:text-lg">
              Când simți oricare din ele, fă exact invers față de ce ai face
              instinctiv. Nu te întinde, nu te relaxa.{" "}
              <strong>Strânge mușchii.</strong> Brațe, picioare, trunchi. 10-15
              secunde. Apoi relaxează puțin și repetă.
            </p>
          </div>

          <h3 className="mt-14 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Cât de bine funcționează
          </h3>
          <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
            Tensiunea activă are o rată de succes de 80-90%. Majoritatea
            oamenilor care o practică raportează că frica scade semnificativ și
            leșinul dispare în 5-7 ședințe.
          </p>

          <div className="mt-8 rounded-md border-l-4 border-lp-cyan bg-lp-navy p-8 md:p-10">
            <p className="text-base leading-relaxed text-white/90 md:text-lg">
              E una dintre cele mai eficiente tehnici din psihologia clinică.
              Nu doar pentru fobii, ci pentru orice tulburare.
            </p>
          </div>
        </div>
      </section>

      {/* IMPACTUL REAL */}
      <section id="impactul-real" className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Impactul real
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Cum te afectează în viața reală.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            Fobia de sânge nu e doar despre sânge. E despre tot ce vine la
            pachet cu evitarea medicală.
          </p>

          <div className="mt-8 flex flex-col gap-5">
            {[
              { title: "Analizele de sânge", text: "Le amâni luni întregi. Doctorul ți le prescrie, tu le pui pe mai târziu. Când ajungi la laborator, corpul tău a intrat deja în alertă cu ore înainte. Nu din cauza durerii, ci din cauza anticipării.. a acelei senzații că pierzi controlul." },
              { title: "Vaccinurile", text: "Pandemia a făcut vizibilă problema multor oameni cu această fobie. Nu refuzau vaccinul din convingere. Îl refuzau pentru că ideea de ac într-un braț le producea o reacție pe care nu o puteau gestiona." },
              { title: "Sarcina", text: "Femeile cu fobie de sânge care rămân însărcinate se confruntă cu o situație imposibilă. Analizele de sânge repetate, consultațiile, nașterea, sunt toate situații în care nu poți evita. Și rușinea de a spune că ți-e frică de o simplă analiză când ar trebui să fii fericită și puternică face totul și mai greu." },
              { title: "Dentistul", text: "Evitat ani de zile. Nu din cauza durerii. Din cauza instrumentelor, a sângelui din gingii, a mirosului de cabinet medical care declanșează întregul mecanism." },
              { title: "Donarea de sânge", text: "Mulți oameni cu fobie de sânge ar vrea să doneze. Înțeleg importanța. Dar corpul lor produce exact reacția opusă." },
            ].map((item) => (
              <div key={item.title} className="rounded-md border border-lp-border bg-white p-6">
                <p className="font-work text-lg font-bold text-lp-navy">{item.title}</p>
                <p className="mt-2 text-base leading-relaxed text-lp-mute md:text-[17px]">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-md border-l-4 border-lp-yellow bg-white p-6 md:p-8">
            <p className="text-base leading-relaxed text-lp-navy md:text-lg">
              Și deasupra tuturor.. <strong>rușinea</strong>. Sunt un adult
              funcțional care leșină la o analiză de sânge, ce e în neregulă cu
              mine? Răspunsul e: nimic nu e în neregulă cu tine. Ai un mecanism
              fiziologic diferit. La fel cum unii oameni au tensiunea mai mică
              natural, la tine nervul vag reacționează mai puternic la stimulii
              legați de sânge și rănire. E biologie, nu caracter.
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
            Ce vrea să spună psihicul.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-white/85 md:text-lg">
            <p>
              Până acum am vorbit despre ce face corpul tău. Dar nu despre de
              ce. Nu toți oamenii cu predispoziție genetică dezvoltă o fobie.
              Ceva activează această predispoziție și o transformă în problemă.
            </p>
            <p>
              Perspectiva psihodinamică privește fobia din alt unghi. Nu ca pe
              o eroare de programare pe care trebuie s-o corectezi, ci ca pe un
              mesaj pe care psihicul tău încearcă să ți-l transmită.
            </p>
            <p>
              Fobia de sânge poate purta semnificații diferite pentru persoane
              diferite. Pentru cineva, sângele poate fi legat de o experiență
              medicală timpurie care a fost trăită ca amenințare. Pentru
              altcineva, de un moment în care a văzut un părinte speriat sau
              rănit. Pentru altcineva, de senzația de vulnerabilitate a
              propriului corp, de convingerea profundă că corpul meu mă va
              trăda.
            </p>
            <p>
              Psihicul alege obiectul fobic nu la întâmplare. Sângele, rănile,
              acele.. toate ating ceva profund uman.. fragilitatea corpului,
              limita dintre control și pierderea controlului, momentul în care
              pielea se deschide și ceea ce e interior devine exterior.
            </p>
            <p>
              Această perspectivă nu anulează mecanismul fiziologic. Îl
              completează. Tensiunea activă te ajută să nu mai leșini.
              Înțelegerea stratului mai profund te ajută să înțelegi de ce
              corpul tău a ales exact acest răspuns, și ce anume te poate
              ajuta pe termen lung.
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
            Tratament și speranță.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            Fobiile specifice sunt cea mai tratabilă condiție din psihologia
            clinică. Și fobia de sânge, în ciuda mecanismului ei particular,
            răspunde excelent la tratament.
          </p>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Protocolul specific pentru fobia de sânge
          </h3>
          <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
            Tratamentul eficient combină două elemente:
          </p>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              <strong className="text-lp-navy">1. Tensiunea activă</strong> ca
              tehnică de bază. Antrenamentul muscular care previne leșinul și
              îți dă înapoi controlul pe care simți că l-ai pierdut.
            </p>
            <p>
              <strong className="text-lp-navy">2. Expunere graduală</strong>{" "}
              adaptată fobiei de sânge. Nu se sare direct la recoltarea de
              sânge. Se construiește o ierarhie, o scară a fricii, în care
              fiecare treaptă e puțin mai provocatoare decât precedenta.
            </p>
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Ierarhia tipică de expunere
          </h3>
          <div className="mt-6 rounded-md border border-lp-border bg-lp-bg p-6">
            <ol className="list-decimal space-y-3 pl-6 text-base leading-relaxed text-lp-navy md:text-[17px]">
              {[
                "Citesc un text despre proceduri medicale",
                "Mă uit la o poză cu o seringă",
                "Mă uit la un video cu o recoltare de sânge",
                "Țin o seringă în mână (fără ac)",
                "Sunt prezent când altcineva dă sânge, de la distanță",
                "Stau într-un cabinet medical unde se fac injecții",
                "Îmi pun un garou pe braț și simt presiunea",
                "Fac o injecție reală, tensionând activ în timpul procedurii",
                "Privesc cum mi se recoltează sângele fără să întorc capul",
              ].map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
          </div>
          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            La fiecare treaptă, practici tensiunea activă și rămâi acolo până
            frica scade de la sine. Nu pleci la primul semn de disconfort.
            Stai. Strângi mușchii. Și descoperi că frica are un vârf, iar după
            vârf, coboară.
          </p>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Ce spun datele
          </h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {[
              { stat: "80-95%", label: "pacienți cu îmbunătățiri semnificative" },
              { stat: "80-90%", label: "rată de succes tensiunea activă" },
              { stat: "5-12", label: "ședințe de tratament" },
              { stat: "75-90%", label: "succes într-o singură sesiune prelungită" },
            ].map((d) => (
              <div key={d.stat} className="rounded-md border border-lp-border bg-lp-bg p-5 text-center">
                <p className="font-work text-2xl font-bold tracking-tight text-lp-navy md:text-3xl">
                  {d.stat}
                </p>
                <p className="mt-2 text-xs leading-snug text-lp-mute md:text-sm">
                  {d.label}
                </p>
              </div>
            ))}
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            De ce medicamentele nu sunt prima opțiune
          </h3>
          <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
            Fobia de sânge, ca toate fobiile specifice, se tratează prin
            psihoterapie, nu prin medicamente. Benzodiazepinele pot chiar să
            blocheze procesul de învățare care face ca expunerea să
            funcționeze. Dacă iei un calmant înainte de recoltare, creierul tău
            nu învață că recoltarea e suportabilă. Învață că a supraviețuit
            doar pentru că a luat pastila. Și data viitoare, frica e la fel.
          </p>
        </div>
      </section>

      {/* CE POȚI FACE ACUM */}
      <section id="ce-poti-face-acum" className="bg-lp-bg px-6 py-20 md:py-24">
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
                title: "Începe tensiunea activă chiar azi",
                text: "Fă primele 5 cicluri chiar acum. Strânge brațele, picioarele, trunchiul. Ține 10-15 secunde. Relaxează 20-30 de secunde. Repetă de 5 ori. Fă asta de 5 ori pe zi, o săptămână. Vrei ca mișcarea să devină a doua natură.",
              },
              {
                nr: "2",
                title: "Învață să recunoști semnalele",
                text: "Data viitoare când vezi ceva legat de sânge (într-un film, o știre, o poză), observă ce simți în corp. Nu încerca să oprești reacția. Doar observ-o. Amețeală? Căldură? Vedere în tunel? Notează-le mental. Acestea sunt semnalele tale de avertizare.",
              },
              {
                nr: "3",
                title: "Pregătește-te pentru următoarea vizită medicală",
                text: "Dacă ai o recoltare de sânge sau un vaccin programat, nu merge pe pilotul automat al evitării. Practică tensiunea activă zilnic o săptămână înainte. Spune-i asistentei că ai tendința de a leșina. Stai pe scaun, nu întins. Strânge mușchii activ în timpul procedurii. Și rămâi pe scaun 5 minute după.",
              },
            ].map((ex) => (
              <div key={ex.nr} className="flex items-start gap-5 rounded-md border border-lp-border bg-white p-6">
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
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Specialist
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Când merită să cauți un specialist.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
            Tensiunea activă e o tehnică pe care o poți practica singur. Dar un
            terapeut poate face diferența prin:
          </p>

          <div className="mt-8 flex flex-col gap-3">
            {[
              "Construirea unei ierarhii de expunere personalizate",
              "Ghidarea ta prin trepte pe care singur le-ai evita",
              "Identificarea comportamentelor de siguranță pe care le folosești fără să realizezi",
              "Adresarea stratului mai profund, dacă e cazul",
            ].map((text) => (
              <div key={text} className="flex items-start gap-3 rounded-md border border-lp-border bg-lp-bg p-5">
                <span aria-hidden className="mt-0.5 shrink-0 text-lg leading-none text-lp-cyan-dark">→</span>
                <p className="text-base leading-relaxed text-lp-navy md:text-[17px]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="intrebari-frecvente" className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <div className="text-center">
            <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-cyan-dark">
              Întrebări frecvente
            </p>
            <h2 className="mt-3 font-work text-3xl font-bold leading-tight tracking-tight text-lp-navy md:text-4xl">
              Ce vor să știe oamenii despre fobia de sânge.
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
        </div>
      </section>

      {/* NAVIGARE */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-[820px]">
          <h2 className="font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Continuă să citești
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              { href: "/tipuri/fobii-specifice", label: "Fobii specifice .. ghid complet" },
              { href: "/tipuri/fobii-specifice/fobie-de-zbor", label: "Fobia de zbor" },
              { href: "/tipuri/fobii-specifice/claustrofobie", label: "Claustrofobie" },
              { href: "/tipuri/fobii-specifice/fobie-de-inaltime", label: "Fobia de înălțimi" },
              { href: "/tipuri/fobii-specifice/fobie-de-animale", label: "Fobia de animale" },
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
      <section className="bg-lp-bg px-6 py-16">
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
            Fobia de sânge se{" "}
            <span className="bg-lp-yellow px-2 text-lp-navy">tratează</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-[680px] text-lg leading-relaxed text-white/85 md:text-xl">
            Are una dintre cele mai mari rate de succes din psihoterapie. Nu e
            ceva cu care trebuie să trăiești.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <Link
              href="/programare?din=fobie-de-sange"
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
