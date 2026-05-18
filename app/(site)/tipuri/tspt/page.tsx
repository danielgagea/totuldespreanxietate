import Link from "next/link";

const SYMPTOM_GROUPS: Array<{ emoji: string; title: string; items: string[] }> = [
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
      "Detașare față de ceilalți, senzația de a fi diferit",
      "Pierderi de memorie legate de părți ale evenimentului",
    ],
  },
];

const CAUSES: string[] = [
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
];

const SCENES: Array<{ title: string; text: string; detail: string }> = [
  {
    title: "Somnul",
    text: "Te trezești din coșmar cu inima bătând, transpirat, desorientat. Câteva secunde nu știi unde ești. Apoi realizezi că ești în pat, acasă, dar corpul tău e încă acolo, în acel moment.",
    detail: "Uneori eviți somnul pentru că știi ce urmează. Stai treaz cât mai mult, scrollezi pe telefon, te uiți la seriale. Orice e mai bun decât să adormi și să ajungi iar acolo.",
  },
  {
    title: "Relațiile",
    text: "Partenerul tău vrea apropiere, dar tu simți un zid invizibil. Nu ești supărat pe el sau pe ea. Pur și simplu nu ajungi la emoție. Ești prezent fizic, dar absent emoțional.",
    detail: "Oamenii din jurul tău observă că te-ai schimbat, că nu mai ești ca înainte. Au dreptate. Dar nu de asta crezi tu.",
  },
  {
    title: "La muncă",
    text: "Te concentrezi greu. Citești același paragraf de 4 ori fără să înregistrezi nimic. Colegii vorbesc și tu ești cu mintea în altă parte, scanând inconștient ușa, ferestrele, ieșirile.",
    detail: "Sau, paradoxal, te arunci în muncă cu o intensitate care pare impresionantă. Dar știi adevărul: munca e refugiul. Cât lucrezi, nu simți.",
  },
  {
    title: "Amorțeala emoțională",
    text: "Nu mai simți bucurie, dar nici tristețe. E ca și cum cineva a dat volumul la zero pe toate emoțiile. Lumea pare plată, gri, la distanță.",
    detail: "Oamenii râd și tu observi că ar trebui să râzi și tu, dar nu vine nimic. Te întrebi dacă mai ești capabil să simți ceva.",
  },
  {
    title: "Munca excesivă ca evitare",
    text: "Lucrezi 12 ore pe zi. Toată lumea te admiră pentru dedicare. Nimeni nu vede că de fapt fugi. Cât timp ești ocupat, amintirile nu au loc să intre.",
    detail: "Weekendurile sunt mai grele decât zilele de muncă, pentru că nu ai unde să te ascunzi de propriile gânduri.",
  },
  {
    title: "Tresăririle",
    text: "O ușă trântită. Un claxon. Cineva care te atinge pe umăr pe neașteptate. Corpul tău sare în alertă maximă, inima bate, mâinile tremură, tot sistemul se activează instant.",
    detail: "Reacția e disproporționată și o știi. Dar nu o poți controla. Corpul reacționează înainte ca mintea ta să evalueze situația.",
  },
];

const CYCLE_STEPS: Array<{ strong: string; rest: string }> = [
  { strong: "Un trigger apare", rest: " (miros, sunet, loc, senzație fizică sau gând)" },
  { strong: "Amintirea traumatică se activează", rest: " cu intensitate emoțională completă" },
  { strong: "Corpul reacționează", rest: " ca și cum pericolul e prezent" },
  { strong: "Evitarea se instalează", rest: ".. eviți locul, persoana, conversația, gândul" },
  { strong: "Ușurarea pe termen scurt:", rest: " anxietatea scade" },
  { strong: "Creierul învață:", rest: " „Evitarea funcționează!”" },
  { strong: "Amintirea nu e procesată", rest: " și rămâne la fel de proaspătă" },
  { strong: "Următorul trigger", rest: " declanșează același ciclu, cu aceeași intensitate" },
];

const MAINTENANCE: Array<{ emoji: string; title: string; text: string }> = [
  {
    emoji: "🍷",
    title: "Alcoolul și substanțele",
    text: "Multe persoane cu stres post-traumatic folosesc alcoolul sau alte substanțe ca să oprească gândurile, să adoarmă sau să anestezicze emoțiile. Funcționează temporar. Pe termen lung, amplifică simptomele și adaugă o problemă peste alta.",
  },
  {
    emoji: "🔒",
    title: "Credința că e vina ta",
    text: "Una dintre cele mai distructive consecințe ale traumei este convingerea că ai fi putut preveni ce s-a întâmplat, că dacă nu mergeai acolo sau dacă reacționai altfel, nimic din toate astea nu s-ar fi întâmplat. Această credință te ține blocat în rușine și autoculpabilizare, și împiedică procesarea reală a traumei.",
  },
  {
    emoji: "🧊",
    title: "Izolarea",
    text: "Te retragi de la oameni, fie pentru că nu crezi că vor înțelege, fie pentru că prezența lor te obosește. Izolarea reduce expunerea la triggeri, dar elimină și sursa principală de vindecare: conexiunea umană.",
  },
];

const TREATMENT_METHODS: Array<{ num: string; title: string; abbr: string; text: string }> = [
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
    text: "Se focalizează pe gândurile și credințele rigide care se formează în momentul traumei, convingeri despre vina ta în ce s-a întâmplat, despre cât de periculoasă e lumea, despre imposibilitatea de a mai avea încredere în cineva. Odată formate, aceste credințe se autoperpetuează și distorsionează felul în care interpretezi tot ce urmează. Terapia te ajută să le examinezi și să le modifici.",
  },
  {
    num: "3",
    title: "EMDR",
    abbr: "(Eye Movement Desensitization and Reprocessing)",
    text: "Folosește stimulare bilaterală (mișcări oculare, sunete alternante) în timp ce accesezi amintirea traumatică. Mecanismul exact nu e complet înțeles, dar rezultatele sunt bine documentate. Amintirea rămâne, dar pierde din încărcătura emoțională.",
  },
];

const EXERCISES: Array<{ num: string; title: string; text: string; result: string }> = [
  {
    num: "1",
    title: "Grounding 5-4-3-2-1",
    text: "Când simți că te pierzi în flashback sau că prezentul devine neclar, folosește această tehnică de ancorare senzorială: numește 5 lucruri pe care le vezi, 4 pe care le auzi, 3 pe care le poți atinge, 2 pe care le miroși, 1 pe care îl guști.",
    result: "Nu încerci să oprești flashback-ul. Îi oferi creierului tău dovezi senzoriale că ești în prezent, nu în trecut.",
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
    text: "Imaginează-ți un container solid, cu capac greu, în care poți pune amintirile intruzive când nu ești pregătit să le procesezi. Nu le arunci, nu le distrugi, doar le pui într-un loc sigur pentru moment, știind că sunt acolo și că te vei ocupa de ele, dar nu acum.",
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
];

const SPECIALIST_SIGNS: string[] = [
  "Flashback-urile sau coșmarurile apar de mai mult de o lună",
  "Eviți locuri, persoane sau situații care amintesc de traumă",
  "Somnul e grav afectat de mai mult de 2 săptămâni",
  "Te simți detașat emoțional de oamenii care contează pentru tine",
  "Folosești alcoolul sau alte substanțe ca să faci față",
  "Iritabilitatea sau accesele de furie îți afectează relațiile",
  "Ai gânduri recurente de vinovăție sau rușine legate de ce s-a întâmplat",
  "Funcționarea la muncă sau în viața de zi cu zi e afectată semnificativ",
];

const SPECIALIST_CARDS: Array<{ emoji: string; text: string }> = [
  { emoji: "🗺️", text: "Un terapeut te ajută să navighezi amintirea traumatică într-un spațiu sigur" },
  { emoji: "🪜", text: "Procesarea se face treptat, la ritmul tău, nu forțat" },
  { emoji: "🔍", text: "Identifici triggerii și înțelegi de ce corpul tău reacționează cum reacționează" },
  { emoji: "🔑", text: "Credințele rigide formate în traumă, despre vina ta sau despre cât de periculoasă e lumea, sunt examinate și modificate" },
  { emoji: "💨", text: "Amintirea traumatică pierde din intensitatea emoțională și devine, în sfârșit, trecut" },
];

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: "Pot avea stres post-traumatic dacă trauma mea nu a fost suficient de gravă?",
    a: "Da. Severitatea evenimentului nu prezice severitatea stresului post-traumatic. Ce contează e semnificația subiectivă a evenimentului, resursele pe care le aveai în acel moment, și dacă ai avut sau nu sprijin emoțional după. Nu compara trauma ta cu a altcuiva. Dacă te afectează, merită atenție.",
  },
  {
    q: "De ce am stres post-traumatic acum, dacă trauma s-a întâmplat acum mulți ani?",
    a: "Amintirea traumatică nu are etichetă de timp. Poate sta adormită ani de zile și să fie activată de un eveniment din prezent care seamănă senzorial cu trauma originală. Stresul post-traumatic cu debut tardiv nu e neobișnuit și nu înseamnă că inventezi trauma.",
  },
  {
    q: "Flashback-urile vor dispărea complet cu tratament?",
    a: "La mulți oameni, da. La alții, flashback-urile devin mult mai rare și mai puțin intense. Ceea ce se schimbă sigur e relația ta cu ele: nu te mai copleșesc, poți reveni la prezent mult mai repede. Amintirea traumei rămâne, dar devine o amintire, nu o retrăire.",
  },
  {
    q: "E stres post-traumatic dacă nu am flashback-uri clasice?",
    a: "Da. Stresul post-traumatic nu arată la fel la toată lumea. Unii au flashback-uri vizuale intense. Alții au predominant amorțeală emoțională și detașare. Alții au predominant coșmaruri. Există și un subtip disociativ în care nu simți aproape nimic. Toate sunt forme valide de stres post-traumatic.",
  },
  {
    q: "Ar trebui să vorbesc despre traumă cu familia sau prietenii?",
    a: "Depinde. A vorbi despre traumă cu cineva care ascultă cu empatie poate fi util. A vorbi cu cineva care minimizează, dramatizează sau te culpabilizează poate fi dăunător. Procesarea traumei în terapie, cu un profesionist, e locul cel mai sigur. Nu ești obligat să povestești nimănui dacă nu te simți pregătit.",
  },
];

const REFERENCES: string[] = [
  "American Psychiatric Association. (2013). Diagnostic and Statistical Manual of Mental Disorders (5th ed.). APA Publishing.",
  "van der Kolk, B. A. (2014). The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma. Viking.",
  "Foa, E. B., Hembree, E. A., & Rothbaum, B. O. (2007). Prolonged Exposure Therapy for PTSD: Emotional Processing of Traumatic Experiences. Oxford University Press.",
  "Resick, P. A., Monson, C. M., & Chard, K. M. (2017). Cognitive Processing Therapy for PTSD: A Comprehensive Manual. Guilford Press.",
  "Shapiro, F. (2018). Eye Movement Desensitization and Reprocessing (EMDR) Therapy (3rd ed.). Guilford Press.",
  "Herman, J. L. (2015). Trauma and Recovery: The Aftermath of Violence. Basic Books.",
  "Lanius, R. A., Vermetten, E., & Pain, C. (Eds.). (2010). The Impact of Early Life Trauma on Health and Disease. Cambridge University Press.",
  "Ehlers, A., & Clark, D. M. (2000). A cognitive model of posttraumatic stress disorder. Behaviour Research and Therapy, 38(4), 319-345.",
  "Brewin, C. R. (2003). Posttraumatic Stress Disorder: Malady or Myth? Yale University Press.",
  "National Institute for Health and Care Excellence. (2018). Post-traumatic stress disorder. NICE guideline [NG116].",
  "Yehuda, R. (2002). Post-traumatic stress disorder. New England Journal of Medicine, 346(2), 108-114.",
  "Cloitre, M., et al. (2011). Treatment of complex PTSD. Journal of Traumatic Stress, 24(6), 615-627.",
];

export default function TSPTPage() {
  return (
    <main className="font-work min-h-screen bg-white text-lp-navy">
      {/* CRISIS BANNER */}
      <div className="w-full bg-lp-yellow px-6 py-3 text-center text-sm font-semibold text-lp-navy">
        <Link
          href="#ce-poti-face"
          className="underline underline-offset-2 hover:no-underline"
        >
          Ai nevoie de ajutor acum? → Mergi direct la Ce poți face
        </Link>
      </div>

      {/* HERO */}
      <header className="bg-white px-6 pt-14 pb-12 md:pt-20 md:pb-16">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Ghid complet
          </p>
          <h1 className="mt-4 font-work text-4xl font-bold leading-[1.05] tracking-tight text-lp-navy md:text-5xl lg:text-6xl">
            Stresul <span className="lp-yellow-underline">post-traumatic</span>.
          </h1>
          <p className="mt-5 text-sm text-lp-mute-soft">
            De{" "}
            <Link
              href="/despre-daniel"
              className="font-semibold text-lp-navy underline-offset-2 hover:underline"
            >
              Daniel Gagea
            </Link>
            , psiholog clinician, psihoterapeut
            <span className="mx-2">·</span>
            Ultima actualizare: aprilie 2026
          </p>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-lp-mute md:text-xl">
            <p>
              Stresul post-traumatic (TSPT) este ceea ce se întâmplă atunci când creierul nu reușește să proceseze un eveniment copleșitor. Amintirea rămâne blocată, ca și cum s-ar fi întâmplat ieri, cu aceeași intensitate emoțională și aceleași reacții corporale.
            </p>
            <p>
              Dacă ai trecut printr-o experiență care te-a depășit, fie că a fost un accident, o agresiune, pierderea cuiva, o experiență medicală traumatică sau altceva, și simți că acea experiență continuă să-ți controleze viața.. acest ghid e pentru tine.
            </p>
            <p>
              Vei înțelege de ce corpul tău reacționează ca și cum pericolul e încă prezent, de ce anumite lucruri te trimit înapoi în acel moment, și ce poți face concret ca să ieși din ciclul în care te afli.
            </p>
            <p>
              <strong className="text-lp-navy">Nu ești slab și nu ești blocat în trecut din alegere.</strong> Ce trăiești are un nume, are mecanisme specifice identificabile și, cel mai important, are tratament care funcționează.
            </p>
          </div>
        </div>
      </header>

      {/* CE ESTE */}
      <section id="ce-este" className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Ce este
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Ce este stresul post-traumatic.
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Stresul post-traumatic este o condiție psihologică care apare după un eveniment traumatic, adică un eveniment în care ai fost expus la moarte, amenințare cu moartea, vătămare gravă sau violență sexuală, fie direct, fie ca martor, fie prin aflarea că s-a întâmplat cuiva apropiat.
            </p>
            <p>
              Nu toți cei care trec prin experiențe traumatice dezvoltă stres post-traumatic. Aproximativ 50-60% dintre adulți experimentează cel puțin un eveniment traumatic pe parcursul vieții, dar doar o parte dezvoltă simptome persistente.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 rounded-md border border-lp-border bg-white px-6 py-8 md:grid-cols-2">
            <div className="text-center">
              <p className="font-work text-2xl font-bold tracking-tight text-lp-navy md:text-3xl">
                6-8%
              </p>
              <p className="mt-1 text-xs leading-snug text-lp-mute md:text-sm">
                din populație va dezvolta stres post-traumatic pe parcursul vieții
              </p>
            </div>
            <div className="text-center">
              <p className="font-work text-2xl font-bold tracking-tight text-lp-navy md:text-3xl">
                2x
              </p>
              <p className="mt-1 text-xs leading-snug text-lp-mute md:text-sm">
                mai frecvent la femei decât la bărbați
              </p>
            </div>
          </div>

          <div className="mt-14">
            <h3 className="font-work text-2xl font-bold leading-tight tracking-tight text-lp-navy md:text-3xl">
              Cele patru grupe de simptome.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
              Stresul post-traumatic nu e un singur lucru. E o constelație de simptome organizate în patru categorii, care se influențează reciproc.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {SYMPTOM_GROUPS.map((group) => (
                <div
                  key={group.title}
                  className="rounded-md border border-lp-border bg-white p-6 transition hover:-translate-y-0.5 hover:border-lp-cyan hover:shadow-[0_12px_40px_rgba(8,29,61,0.08)]"
                >
                  <span className="block text-2xl leading-none">{group.emoji}</span>
                  <h4 className="mt-4 font-work text-lg font-bold leading-snug text-lp-navy">
                    {group.title}
                  </h4>
                  <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-lp-mute md:text-base">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span aria-hidden className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-lp-cyan-dark" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <h3 className="font-work text-2xl font-bold leading-tight tracking-tight text-lp-navy md:text-3xl">
              Ce poate provoca stresul post-traumatic.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
              Lista nu e exhaustivă, dar include cele mai frecvente tipuri de experiențe:
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {CAUSES.map((cause) => (
                <div
                  key={cause}
                  className="flex items-start gap-3 rounded-md border border-lp-border bg-white px-5 py-4"
                >
                  <span aria-hidden className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-lp-cyan-dark" />
                  <span className="text-base leading-relaxed text-lp-mute">{cause}</span>
                </div>
              ))}
            </div>
          </div>

          <blockquote className="mt-12 border-l-4 border-lp-cyan pl-6 italic">
            <p className="font-work text-xl font-medium leading-relaxed text-lp-navy md:text-2xl">
              Severitatea evenimentului nu prezice severitatea stresului post-traumatic. Ce contează mai mult este semnificația subiectivă a experienței, resursele pe care le aveai în acel moment, și dacă ai avut sau nu sprijin emoțional după.
            </p>
          </blockquote>
        </div>
      </section>

      {/* CREIER */}
      <section id="creier" className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Ce se întâmplă în creier
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            De ce <span className="lp-yellow-underline">trecutul</span> se simte ca prezent.
          </h2>

          <div className="mt-10 rounded-md border-l-4 border-lp-cyan bg-lp-navy p-8 md:p-10">
            <h3 className="font-work text-xl font-bold leading-tight text-white md:text-2xl">
              Amintirile traumatice funcționează diferit.
            </h3>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-white/90 md:text-lg">
              <p>
                O amintire normală are o etichetă de timp.. știi că e din trecut, o poți povesti cronologic, poți vorbi despre ea fără ca trupul să reacționeze.
              </p>
              <p>
                Amintirea traumatică e stocată în fragmente senzoriale, imagini, sunete, mirosuri, senzații corporale, fără ordine cronologică și fără etichetă de „trecut”. Când ceva din prezent activează un fragment, creierul îl tratează ca pe un eveniment care se întâmplă acum.
              </p>
              <p>
                De aceea un miros, un ton de voce sau o senzație fizică pot declanșa o reacție intensă.. creierul tău nu face diferența între „îmi amintesc pericolul” și „sunt în pericol”.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="font-work text-2xl font-bold leading-tight tracking-tight text-lp-navy md:text-3xl">
              Când reacția nu e intensă, ci opusul.
            </h3>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-lp-mute md:text-lg">
              <p>
                Unele persoane cu stres post-traumatic nu reacționează prin hiperactivare, ci prin detașare.. se simt în afara corpului, ca într-un vis, ca și cum privesc totul de la distanță. Emoțiile par oprite, lumea pare ireală.
              </p>
              <p>
                Aceasta nu e o formă mai ușoară, ci o formă diferită în care creierul a învățat să se protejeze prin deconectare. Apare mai frecvent la persoane care au experimentat traumă repetată sau cronică, mai ales în copilărie.
              </p>
            </div>
          </div>

          <blockquote className="mt-12 border-l-4 border-lp-cyan pl-6 italic">
            <p className="font-work text-xl font-medium leading-relaxed text-lp-navy md:text-2xl">
              Stresul post-traumatic nu e o problemă de voință. E o schimbare reală în modul în care creierul procesează informația, și tocmai de aceea răspunde la tratament specific.
            </p>
          </blockquote>
        </div>
      </section>

      {/* VIATA REALA */}
      <section id="viata-reala" className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1100px]">
          <div className="mx-auto max-w-[820px]">
            <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
              În viața de zi cu zi
            </p>
            <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
              Cum arată stresul post-traumatic în viața reală.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SCENES.map((scene) => (
              <article
                key={scene.title}
                className="flex flex-col rounded-md border border-lp-border bg-white p-7 transition hover:-translate-y-0.5 hover:border-lp-cyan hover:shadow-[0_12px_40px_rgba(8,29,61,0.08)]"
              >
                <h3 className="font-work text-lg font-bold leading-snug tracking-tight text-lp-navy md:text-xl">
                  {scene.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-lp-mute">
                  {scene.text}
                </p>
                <p className="mt-4 border-t border-lp-border pt-4 text-[15px] leading-relaxed text-lp-mute-soft">
                  {scene.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DE CE NU TRECE */}
      <section id="de-ce-nu-trece" className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Mecanismul
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            De ce nu trece de la sine.
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Mulți oameni cu stres post-traumatic așteaptă ca timpul să vindece, dar stresul post-traumatic nu funcționează ca o rană fizică. Fără procesare, amintirea traumatică rămâne blocată exact în forma în care a fost stocată.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="font-work text-2xl font-bold leading-tight tracking-tight text-lp-navy md:text-3xl">
              Evitarea menține trauma vie.
            </h3>
            <ol className="mt-6 space-y-3">
              {CYCLE_STEPS.map((step, i) => (
                <li
                  key={step.strong}
                  className="flex gap-4 rounded-md border border-lp-border bg-white p-5"
                >
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lp-cyan text-sm font-bold text-lp-navy">
                    {i + 1}
                  </span>
                  <p className="text-base leading-relaxed text-lp-mute md:text-lg">
                    <strong className="text-lp-navy">{step.strong}</strong>
                    {step.rest}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <blockquote className="mt-12 border-l-4 border-lp-cyan pl-6 italic">
            <p className="font-work text-xl font-medium leading-relaxed text-lp-navy md:text-2xl">
              Evitarea e cea mai naturală reacție la durere. Și e exact mecanismul care împiedică vindecarea. Nu pentru că ești slab, ci pentru că creierul tău face ce știe mai bine.. te protejează de disconfort pe termen scurt.
            </p>
          </blockquote>

          <div className="mt-14">
            <h3 className="font-work text-2xl font-bold leading-tight tracking-tight text-lp-navy md:text-3xl">
              Alte mecanisme care mențin ciclul.
            </h3>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {MAINTENANCE.map((item) => (
                <div
                  key={item.title}
                  className="rounded-md border border-lp-border bg-white p-6 transition hover:-translate-y-0.5 hover:border-lp-cyan hover:shadow-[0_12px_40px_rgba(8,29,61,0.08)]"
                >
                  <span className="block text-2xl leading-none">{item.emoji}</span>
                  <h4 className="mt-4 font-work text-lg font-bold leading-snug text-lp-navy">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-[15px] leading-relaxed text-lp-mute md:text-base">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PSIHICUL */}
      <section id="psihicul" className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Perspectiva clinică
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Ce vrea să spună <span className="lp-yellow-underline">psihicul</span> prin traumă.
          </h2>

          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            Până aici am vorbit despre cum funcționează stresul post-traumatic.. mecanismul, simptomele, de ce se menține. Acum vreau să vorbim despre <strong className="text-lp-navy">ce se întâmplă la un nivel mai profund</strong>.
          </p>

          <div className="mt-10 rounded-md border-l-4 border-lp-cyan bg-white p-8 md:p-10">
            <h3 className="font-work text-xl font-bold leading-tight text-lp-navy md:text-2xl">
              Trauma nu e doar evenimentul, ci absența răspunsului.
            </h3>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-lp-mute md:text-lg">
              <p>
                O traumă nu e doar ce ți s-a întâmplat. E ce ți s-a întâmplat și nu a fost văzut, recunoscut, validat de nimeni. Un accident e traumatic. Un accident după care nimeni nu te întreabă cum ești e și mai traumatic.
              </p>
              <p>
                De aceea multe persoane cu stres post-traumatic spun „nu înțeleg de ce mă afectează atât de mult, alții au trecut prin lucruri mult mai grave”. Gravitatea nu ține doar de eveniment. Ține de singurătatea din timpul și de după eveniment.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="font-work text-2xl font-bold leading-tight tracking-tight text-lp-navy md:text-3xl">
              Corpul știe înainte de minte.
            </h3>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-lp-mute md:text-lg">
              <p>
                Bessel van der Kolk a formulat ideea în modul cel mai direct posibil: corpul ține scorul. Creierul poate uita trauma, poate să o pună deoparte, poate să o minimizeze. Corpul nu face asta. Corpul păstrează amintirea în tensiunea musculară, în patterns-ul de respirație, în reactivitatea la atingere.
              </p>
              <p>
                De aceea multe persoane cu stres post-traumatic ajung mai întâi la medic cu simptome fizice.. dureri cronice fără cauză aparentă, probleme gastrointestinale, dureri de cap, oboseală care nu se explică prin nimic medical. Corpul vorbește despre trauma pe care mintea nu o poate articula încă.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="font-work text-2xl font-bold leading-tight tracking-tight text-lp-navy md:text-3xl">
              Rușinea ca motor ascuns.
            </h3>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-lp-mute md:text-lg">
              <p>
                În spatele multora dintre simptomele stresului post-traumatic se află o emoție care rareori e numită.. rușinea. Vinovăția e despre ceva ce ai făcut, iar rușinea e despre cine ești. E convingerea interioară că ești stricat, că ești murdar, că e ceva greșit cu tine la nivel fundamental.
              </p>
              <p>
                Rușinea e emoția care te face să nu vorbești. Care te face să crezi că nimeni nu poate înțelege. Care te face să te ascunzi, nu din frică, ci din convingerea profundă că dacă cineva ar vedea ce s-a întâmplat cu adevărat, te-ar respinge.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-md border border-lp-border bg-white p-8 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-lp-cyan-dark">
              Studiu de caz
            </p>
            <h3 className="mt-3 font-work text-xl font-bold leading-tight tracking-tight text-lp-navy md:text-2xl">
              Cristina.. când corpul vorbește pentru minte.
            </h3>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-lp-mute md:text-lg">
              <p>
                Cristina a venit în terapie la 34 de ani, cu{" "}
                <Link href="/atac-de-panica" className="font-semibold text-lp-cyan-dark underline underline-offset-2 hover:no-underline">
                  atacuri de panică
                </Link>{" "}
                aparent din senin și o tensiune musculară cronică în umeri și gât pe care niciun masaj nu o rezolva. A făcut toate analizele, totul era în parametri normali.
              </p>
              <p>
                În ședința a patra, povestind despre copilărie, a menționat în treacăt că tatăl ei se enerva uneori. Corpul ei s-a tensionat vizibil în acel moment, dar vocea a rămas calmă, detașată.
              </p>
              <p>
                Pe parcursul terapiei, a ieșit la suprafață un pattern clar.. atacurile de panică apăreau de fiecare dată când cineva din jurul ei ridica vocea. Corpul ei recunoștea semnalul pe care mintea ei încă nu era pregătită să-l numească.
              </p>
              <p className="border-l-4 border-lp-yellow pl-5 font-medium text-lp-navy">
                Tensiunea din umeri era corpul ei pregătindu-se pentru un pericol care acum 20 de ani era real, dar acum nu mai era.
              </p>
            </div>
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
            Ce <span className="lp-yellow-underline">funcționează</span> ca tratament.
          </h2>

          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            Stresul post-traumatic răspunde bine la tratament. Și spre deosebire de medicație, beneficiile terapiei se mențin după terminarea tratamentului, pentru că terapia procesează amintirea traumatică, nu doar reduce simptomele.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 rounded-md border border-lp-border bg-lp-bg px-6 py-8 md:grid-cols-2">
            <div className="text-center">
              <p className="font-work text-2xl font-bold tracking-tight text-lp-navy md:text-3xl">
                ~66%
              </p>
              <p className="mt-1 text-xs leading-snug text-lp-mute md:text-sm">
                dintre persoanele care urmează terapia au ameliorare semnificativă
              </p>
            </div>
            <div className="text-center">
              <p className="font-work text-2xl font-bold tracking-tight text-lp-navy md:text-3xl">
                12-16
              </p>
              <p className="mt-1 text-xs leading-snug text-lp-mute md:text-sm">
                ședințe.. durata tipică a tratamentului focalizat pe traumă
              </p>
            </div>
          </div>

          <div className="mt-14">
            <h3 className="font-work text-2xl font-bold leading-tight tracking-tight text-lp-navy md:text-3xl">
              Terapii validate pentru stresul post-traumatic.
            </h3>
            <div className="mt-8 space-y-5">
              {TREATMENT_METHODS.map((method) => (
                <article
                  key={method.title}
                  className="rounded-md border border-lp-border bg-white p-7 transition hover:border-lp-cyan hover:shadow-[0_12px_40px_rgba(8,29,61,0.08)] md:p-8"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-lp-cyan text-sm font-bold text-lp-navy">
                      {method.num}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-lp-mute-soft">
                      Metodă validată
                    </span>
                  </div>
                  <h4 className="mt-4 font-work text-xl font-bold leading-tight tracking-tight text-lp-navy md:text-2xl">
                    {method.title}
                  </h4>
                  <p className="mt-1 text-sm italic text-lp-mute-soft">
                    {method.abbr}
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
                    {method.text}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <h3 className="font-work text-2xl font-bold leading-tight tracking-tight text-lp-navy md:text-3xl">
              Compasiunea în fața flashback-urilor de rușine.
            </h3>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-lp-mute md:text-lg">
              <p>
                Flashback-urile nu sunt doar vizuale. Există și flashback-uri emoționale, în care brusc te inundă rușine, vinovăție sau neputință, fără o amintire vizuală clară.
              </p>
              <p>
                Tratamentul eficient include dezvoltarea unei atitudini de compasiune față de sine în aceste momente. Nu are legătură cu gândirea pozitivă, ci cu capacitatea de a te trata în momentele de vulnerabilitate extremă cu aceeași grijă cu care ai trata pe altcineva care trece prin aceeași situație.
              </p>
            </div>
          </div>

          <div className="mt-14">
            <h3 className="font-work text-2xl font-bold leading-tight tracking-tight text-lp-navy md:text-3xl">
              Curba procesării traumei.
            </h3>
            <p className="mt-5 text-base leading-relaxed text-lp-mute md:text-lg">
              Un lucru important de știut înainte de a începe terapia.. procesarea traumei nu e liniară. În primele ședințe, simptomele pot crește temporar, pentru că accesezi conținut pe care l-ai evitat mult timp. Aceasta nu înseamnă că terapia nu funcționează. Înseamnă că procesarea a început.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                { label: "Faza 1", text: "Stabilizare și pregătire" },
                { label: "Faza 2", text: "Procesare activă (intensitate temporar crescută)" },
                { label: "Faza 3", text: "Integrare și ameliorare" },
              ].map((phase) => (
                <div
                  key={phase.label}
                  className="rounded-md border border-lp-border bg-lp-bg p-6 text-center"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-lp-cyan-dark">
                    {phase.label}
                  </p>
                  <p className="mt-3 text-base font-semibold leading-relaxed text-lp-navy">
                    {phase.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <h3 className="font-work text-2xl font-bold leading-tight tracking-tight text-lp-navy md:text-3xl">
              De ce medicamentele singure nu sunt suficiente.
            </h3>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-lp-mute md:text-lg">
              <p>
                SSRI-urile (sertralina și paroxetina sunt cele mai studiate) pot reduce intensitatea simptomelor stresului post-traumatic. Dar beneficiile se mențin doar cât iei medicamentul. La oprire, simptomele pot reveni.
              </p>
              <p>
                Motivul.. medicamentul reduce activarea emoțională fără să proceseze amintirea traumatică. Amintirea rămâne stocată în aceeași formă. Combinația recomandată de ghidurile clinice.. terapia focalizată pe traumă ca tratament de primă linie, cu medicație ca adjuvant dacă simptomele sunt foarte severe sau dacă terapia nu e accesibilă imediat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CE POTI FACE */}
      <section id="ce-poti-face" className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Pași concreți
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Ce poți face acum.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            Aceste exerciții nu înlocuiesc terapia, dar te pot ajuta să gestionezi momentele dificile și să începi să recâștigi un grad de control.
          </p>

          <div className="mt-10 space-y-5">
            {EXERCISES.map((ex) => (
              <article
                key={ex.title}
                className="rounded-md border border-lp-border bg-white p-7 transition hover:border-lp-cyan hover:shadow-[0_12px_40px_rgba(8,29,61,0.08)] md:p-8"
              >
                <div className="flex items-start gap-5">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lp-yellow text-base font-bold text-lp-navy">
                    {ex.num}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-work text-xl font-bold leading-tight tracking-tight text-lp-navy md:text-2xl">
                      {ex.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-lp-mute md:text-lg">
                      {ex.text}
                    </p>
                    <p className="mt-4 border-l-4 border-lp-cyan pl-4 text-[15px] italic leading-relaxed text-lp-navy md:text-base">
                      {ex.result}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALIST */}
      <section id="specialist" className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Sprijin specializat
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Când merită să cauți un specialist.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            Stresul post-traumatic răspunde foarte bine la terapia specializată. Caută un terapeut cu experiență în traumă dacă:
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {SPECIALIST_SIGNS.map((sign) => (
              <div
                key={sign}
                className="flex items-start gap-3 rounded-md border border-lp-border bg-white px-5 py-4"
              >
                <span
                  aria-hidden
                  className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lp-cyan text-xs font-bold text-lp-navy"
                >
                  ✓
                </span>
                <span className="text-[15px] leading-relaxed text-lp-mute md:text-base">{sign}</span>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <h3 className="font-work text-2xl font-bold leading-tight tracking-tight text-lp-navy md:text-3xl">
              Ce primești în terapie.
            </h3>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {SPECIALIST_CARDS.map((card) => (
                <div
                  key={card.text}
                  className="flex items-start gap-4 rounded-md border border-lp-border bg-white p-6 transition hover:-translate-y-0.5 hover:border-lp-cyan hover:shadow-[0_12px_40px_rgba(8,29,61,0.08)]"
                >
                  <span className="shrink-0 text-2xl leading-none">{card.emoji}</span>
                  <p className="text-base leading-relaxed text-lp-mute">{card.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CITESTE SI */}
          <div className="mt-16 rounded-md border border-lp-border bg-lp-bg p-7 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-lp-cyan-dark">
              Citește și
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/tipuri/anxietate-generalizata"
                  className="text-base font-semibold text-lp-navy underline underline-offset-2 hover:no-underline md:text-lg"
                >
                  Anxietatea generalizată.. de ce mintea nu se oprește din gândit
                </Link>
              </li>
              <li>
                <Link
                  href="/atac-de-panica"
                  className="text-base font-semibold text-lp-navy underline underline-offset-2 hover:no-underline md:text-lg"
                >
                  Atacul de panică.. ce se întâmplă în corp și ce poți face
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ + REFERENCES */}
      <section id="faq" className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <div className="text-center">
            <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-cyan-dark">
              Întrebări frecvente
            </p>
            <h2 className="mt-3 font-work text-3xl font-bold leading-tight tracking-tight text-lp-navy md:text-4xl">
              Ce vor să știe oamenii despre stresul post-traumatic.
            </h2>
          </div>

          <div className="mt-10 divide-y divide-lp-border rounded-md border border-lp-border bg-white">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 px-6 py-5 text-left text-[17px] font-semibold text-lp-navy md:text-lg">
                  <span>{faq.q}</span>
                  <span
                    aria-hidden
                    className="mt-1 shrink-0 text-2xl leading-none text-lp-cyan-dark transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="px-6 pb-5 text-base leading-relaxed text-lp-mute md:text-[17px]">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-12">
            <details className="rounded-md border border-lp-border bg-white px-6 py-4">
              <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-semibold text-lp-navy">
                <span className="text-lg leading-none text-lp-cyan-dark">+</span>
                Referințe științifice ({REFERENCES.length} surse)
              </summary>
              <ol className="mt-6 list-decimal space-y-2 pl-6 text-[13px] leading-relaxed text-lp-mute-soft">
                {REFERENCES.map((ref, i) => (
                  <li key={i}>{ref}</li>
                ))}
              </ol>
            </details>
          </div>

          <p className="mt-10 text-center text-sm leading-relaxed text-lp-mute-soft">
            Această pagină nu înlocuiește un diagnostic profesional. Dacă te recunoști în ce ai citit, te încurajez să vorbești cu un specialist.
          </p>
        </div>
      </section>

      {/* CTA DARK */}
      <section className="bg-lp-navy px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1100px] text-center text-white">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.22em] text-lp-cyan">
            Cabinet
          </p>
          <h2 className="mt-4 font-work text-3xl font-bold leading-tight md:text-5xl">
            Dacă ai ajuns până aici,{" "}
            <span className="bg-lp-yellow px-2 text-lp-navy">ai făcut deja ceva important.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[680px] text-lg leading-relaxed text-white/85 md:text-xl">
            Ai căutat să înțelegi ce ți se întâmplă. Asta nu e puțin. Următorul pas e o conversație.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <Link
              href="/programare?din=tspt"
              className="lp-cta inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold md:text-lg"
            >
              Programează o consultație <span aria-hidden>→</span>
            </Link>
            <p className="text-sm text-white/60">Răspund personal la fiecare mesaj.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
