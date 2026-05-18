import Link from "next/link";

const FAQS = [
  {
    q: "Dacă mă îngrijorez mereu, nu înseamnă că sunt doar o persoană anxioasă?",
    a: "Anxietatea generalizată nu e o trăsătură de personalitate, ci o condiție cu mecanisme specifice (meta-worry, intoleranța la incertitudine, evitare emoțională) care pot fi identificate și tratate. Diferența între a crede că ești anxios din fire și a înțelege că ai anxietate generalizată e că prima te oprește din a căuta ajutor, iar a doua deschide o cale de tratament.",
  },
  {
    q: "De ce grijile mele sar de la un subiect la altul?",
    a: "Pentru că nucleul anxietății generalizate nu e conținutul grijilor, ci intoleranța la incertitudine. Orice domeniu al vieții conține incertitudine. Când rezolvi o grijă, mintea ta se mută automat pe următorul domeniu incert. Tratamentul eficient vizează nucleul, nu conținutul.",
  },
  {
    q: "Anxietatea generalizată poate produce simptome fizice reale?",
    a: "Da. Tensiunea musculară cronică, durerile de cap de tip tensional, problemele gastrointestinale, oboseala cronică și tulburările de somn sunt simptome directe ale anxietății generalizate. Nu sunt imaginare. Corpul tău trăiește într-o stare permanentă de pregătire pentru pericol, și asta are consecințe fizice reale, măsurabile.",
  },
  {
    q: "Pot scăpa complet de anxietatea generalizată?",
    a: "Mulți oameni ajung la un punct în care anxietatea generalizată nu le mai afectează funcționarea. Grijile ocazionale pot apărea, dar nu mai declanșează spirala. Aproximativ 75% dintre persoanele care urmează terapia au ameliorare semnificativă. Tratamentul funcționează și durează de obicei 12-20 de ședințe.",
  },
  {
    q: "E anxietate generalizată dacă mă îngrijorez doar de un singur lucru?",
    a: "Nu neapărat. Anxietatea generalizată se definește prin îngrijorare pe multiple domenii, care sare de la una la alta. Dacă îngrijorarea e focalizată predominant pe sănătate, poate fi anxietate de boală. Dacă e focalizată pe evaluarea socială, poate fi anxietate socială. Un specialist poate face diferența diagnostică.",
  },
];

const REFERENCES = [
  "Clark, D. A., & Beck, A. T. (2010). Cognitive Therapy of Anxiety Disorders: Science and Practice. Guilford Press.",
  "Gabbard, G. O. (2007). Tratat de Psihiatrie Psihodinamică (ed. a 4-a). Editura Trei.",
  "Andrews, G., Creamer, M., Crino, R., Hunt, C., Lampe, L., & Page, A. (2003). The Treatment of Anxiety Disorders: Clinician Guides and Patient Manuals (2nd ed.). Cambridge University Press.",
  "Leahy, R. L., Holland, S. J., & McGinn, L. K. (2012). Treatment Plans and Interventions for Depression and Anxiety Disorders (2nd ed.). Guilford Press.",
  "Wolfe, B. E. (2005). Understanding and Treating Anxiety Disorders: An Integrative Approach to Healing the Wounded Self. American Psychological Association.",
  "Borkovec, T. D., & Roemer, L. (1995). Perceived functions of worry among generalized anxiety disorder subjects. Journal of Behavior Therapy and Experimental Psychiatry, 26(1), 25-30.",
  "Wells, A. (2009). Metacognitive Therapy for Anxiety and Depression. Guilford Press.",
  "Dugas, M. J., & Robichaud, M. (2007). Cognitive-Behavioral Treatment for Generalized Anxiety Disorder: From Science to Practice. Routledge.",
  "Freud, S. (1926). Inhibitions, Symptoms and Anxiety. Standard Edition, Vol. 20.",
  "Borkovec, T. D., Alcaine, O. M., & Behar, E. (2004). Avoidance theory of worry and generalized anxiety disorder. In R. G. Heimberg et al. (Eds.), Generalized Anxiety Disorder: Advances in Research and Practice. Guilford Press.",
];

const SYMPTOMS = [
  { icon: "💪", label: "Tensiune musculară", detail: "cronică, mai ales în umeri, maxilar și gât" },
  { icon: "🔋", label: "Oboseală persistentă", detail: "chiar și după somn aparent suficient" },
  { icon: "🧠", label: "Dificultăți de concentrare", detail: "senzația de minte goală sau supraîncărcată" },
  { icon: "😤", label: "Iritabilitate", detail: "disproporționată față de situație" },
  { icon: "🌙", label: "Tulburări de somn", detail: "adormi greu, te trezești des, somnul nu e odihnitor" },
  { icon: "⚡", label: "Neliniște fizică", detail: "senzația că nu poți sta locului" },
];

const SCENES = [
  {
    time: "Dimineața",
    text: "Alarmele sună și gândurile pornesc înainte să deschizi ochii.. nu ceva concret, mai degrabă o stare difuză de anticipare că ziua va fi grea.",
    detail: "Verifici telefonul imediat, căutând semne că totul e ok. Niciun email urgent. Nicio veste proastă. Și totuși, neliniștea nu scade.",
  },
  {
    time: "La muncă",
    text: "Te concentrezi greu, deși ești la fel de capabil ca oricând.. doar că o parte din mintea ta rulează scenarii în fundal.",
    detail: "Analizezi dacă ai trimis emailul corect, ce a vrut să spună șeful cu un anumit ton. Colegii tăi par relaxați. Tu faci aceeași muncă dar cu de 3 ori mai mult efort mental.",
  },
  {
    time: "Seara",
    text: "Ar trebui să te relaxezi. Dar relaxarea înseamnă că nu mai ai ce ocupa mintea. Și când mintea e liberă, grijile vin.",
    detail: "Poate deschizi telefonul ca să le ții la distanță. Poate pui un serial. Orice ca să nu rămâi singur cu gândurile.",
  },
  {
    time: "În relații",
    text: "Partenerul tău nu a răspuns la mesaj de 2 ore. Mintea ta a generat deja 4 scenarii catastrofice.",
    detail: "Sau partenerul tău e bine, dar tu îl întrebi de 3 ori dacă e sigur, pentru că prima confirmare nu a fost suficientă.",
  },
  {
    time: "Somnul",
    text: "Adormi greu pentru că mintea nu se oprește. Te trezești la 3-4 dimineața cu gândurile deja pe pilot automat.",
    detail: "Dimineața ești la fel de obosit ca seara. Oboseala face îngrijorarea mai intensă, și îngrijorarea face somnul mai greu.",
  },
  {
    time: "Corpul",
    text: "Tensiune musculară cronică pe care nici nu o mai observi, pentru că a devenit normală.. maxilarul încleștat, umerii ridicați, stomacul strâns.",
    detail: "Corpul tău trăiește într-o stare permanentă de pregătire pentru pericol care consumă resurse fizice reale.",
  },
];

const BEHAVIORS = [
  {
    icon: "🤲",
    title: "Căutarea reasigurării",
    text: "Întrebi constant dacă totul e în regulă, dacă ceva nu e grav. Fiecare confirmare aduce ușurare pentru câteva secunde, apoi îndoiala revine.",
    key: "Cu cât primești mai multă reasigurare, cu atât ai nevoie de mai multă.",
  },
  {
    icon: "📋",
    title: "Planificarea excesivă",
    text: "Liste de liste. Planuri de backup pentru planuri de backup. Fiecare minut al zilei structurat.",
    key: "Fiecare abatere de la plan devine o nouă sursă de anxietate.",
  },
  {
    icon: "🔍",
    title: "Verificarea obsesivă",
    text: "Recitești email-ul de 5 ori. Verifici contul bancar de 3 ori pe zi. Cauți pe Google fiecare simptom fizic.",
    key: "Îți spui că e doar ca să fii sigur, dar niciodată nu ești destul de sigur.",
  },
  {
    icon: "🤔",
    title: "Evitarea deciziilor",
    text: "Amâni orice decizie care conține incertitudine, mereu pe motiv că mai trebuie să te gândești, că mai vrei să vezi.",
    key: "Lista de decizii neluate devine ea însăși sursă de îngrijorare.",
  },
  {
    icon: "🔁",
    title: "Supraanaliza retroactivă",
    text: "Derulezi mental conversațiile de ieri, analizând ce a vrut să spună cealaltă persoană sau dacă nu cumva ai spus ceva greșit.",
    key: "Ore de procesare retroactivă care nu produce nicio concluzie.",
  },
  {
    icon: "🌀",
    title: "Îngrijorarea în sine",
    text: "Paradoxal, îngrijorarea e ea însăși un comportament de siguranță.",
    key: "Crezi că dacă te îngrijorezi ești pregătit. Creierul tratează îngrijorarea ca pe o formă de protecție.",
  },
];

const ORIGINS = [
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
];

const TREATMENT_COMPONENTS = [
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
];

const WORRY_TIME_STEPS = [
  "Aloci 15 minute pe zi, la aceeași oră, în același loc",
  "Te îngrijorezi deliberat și complet despre un singur subiect",
  "Urmezi firul catastrofic până la capăt, întrebându-te care e cel mai rău scenariu care s-ar putea întâmpla",
  "Continui până ajungi la un plan, oricât de rudimentar",
  "Restul zilei, când apare o îngrijorare, o notezi și o amâni până la slotul de mai târziu",
];

const EXERCISES = [
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
];

const SPECIALIST_SIGNS = [
  "Îngrijorarea îți ocupă mai mult de o oră pe zi",
  "Somnul e afectat de mai mult de 2 săptămâni",
  "Tensiunea musculară e cronică și afectează funcționarea",
  "Ai început să eviți situații, decizii sau conversații din cauza anxietății",
  "Folosești alcoolul sau alte substanțe ca să faci față",
  "Ai încercat singur și ciclul continuă",
];

export default function AnxietateGeneralizataPage() {
  return (
    <main className="font-work min-h-screen bg-white text-lp-navy">
      {/* ── HERO ── */}
      <section className="bg-white px-6 pt-14 pb-12 md:pt-20 md:pb-16">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Ghid complet
          </p>
          <h1 className="mt-4 font-work text-4xl font-bold leading-[1.05] tracking-tight text-lp-navy md:text-5xl lg:text-6xl">
            <span className="lp-yellow-underline">Anxietatea</span> generalizată.
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

          <p className="mt-8 text-base font-medium text-lp-navy">
            Trăiești cu asta de mult timp?{" "}
            <Link href="#ce-poti-face" className="text-lp-cyan-dark underline-offset-2 hover:underline">
              Mergi direct la Ce poți face acum
            </Link>
          </p>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-lp-mute md:text-xl">
            <p>
              Te-ai trezit la 4 dimineața cu gândurile deja pornite.. banii, sănătatea, copiii, munca, viitorul. Nu s-a întâmplat nimic concret. Nu e nicio criză. Dar mintea ta rulează scenarii, unul după altul, ca un motor care nu se oprește.
            </p>
            <p>
              Te ridici din pat obosit, deși ai dormit 7 ore. Tensiune în umeri, în maxilar, în stomac. O stare de fond pe care nu o poți numi exact.. nu e panică, nu e tristețe, e ceva între neliniște și vigilență permanentă.
            </p>
            <p>
              Lumea din jur pare relaxată. Partenerul tău doarme liniștit. Colegii tăi nu par să aibă aceleași griji. Și te întrebi de ce tu nu poți, pur și simplu, să te oprești din gândit.
            </p>
          </div>

          <div className="mt-8 rounded-md border-l-4 border-lp-cyan bg-lp-bg p-6 md:p-7">
            <p className="text-base leading-relaxed text-lp-navy md:text-lg">
              <strong className="font-semibold">Dacă te recunoști, nu ești stresat și nu ești prea sensibil.</strong> Ce trăiești se numește tulburare de anxietate generalizată. Și în acest ghid vei înțelege de ce mintea ta nu se oprește, de ce îngrijorarea e mai complicată decât crezi, și ce funcționează ca tratament.
            </p>
          </div>
        </div>
      </section>

      {/* ── CE ESTE ── */}
      <section id="ce-este" className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Definiție
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Ce este <span className="lp-yellow-underline">anxietatea</span> generalizată.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Tulburarea de anxietate generalizată (TAG) este o condiție psihologică definită prin îngrijorare excesivă și persistentă legată de mai multe domenii ale vieții.. sănătate, bani, muncă, relații, viitor.. pe care persoana o percepe ca dificil de controlat.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-md border border-lp-border bg-white p-6 text-center">
              <p className="font-work text-3xl font-bold tracking-tight text-lp-navy md:text-4xl">5-6%</p>
              <p className="mt-1 text-sm font-semibold text-lp-navy">din populație</p>
              <p className="mt-1 text-xs text-lp-mute-soft md:text-sm">pe parcursul vieții</p>
            </div>
            <div className="rounded-md border border-lp-border bg-white p-6 text-center">
              <p className="font-work text-3xl font-bold tracking-tight text-lp-navy md:text-4xl">2x</p>
              <p className="mt-1 text-sm font-semibold text-lp-navy">mai frecventă</p>
              <p className="mt-1 text-xs text-lp-mute-soft md:text-sm">la femei decât la bărbați</p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-md border border-lp-border bg-white p-6">
              <h3 className="font-work text-lg font-bold leading-snug text-lp-navy">Nu e stres</h3>
              <p className="mt-3 text-base leading-relaxed text-lp-mute">
                Stresul are o cauză identificabilă și se oprește când cauza dispare. Anxietatea generalizată nu are o cauză specifică. Sau, mai precis, cauza se schimbă.. azi e sănătatea, mâine sunt banii, poimâine e relația.
              </p>
              <p className="mt-3 text-sm font-semibold italic text-lp-cyan-dark">
                Conținutul variază. Mecanismul rămâne același.
              </p>
            </div>
            <div className="rounded-md border border-lp-border bg-white p-6">
              <h3 className="font-work text-lg font-bold leading-snug text-lp-navy">Nu e a fi anxios din fire</h3>
              <p className="mt-3 text-base leading-relaxed text-lp-mute">
                E o tulburare cu mecanisme specifice, identificabile și tratabile.. nu personalitatea ta, ci ceva ce se întâmplă minții tale.
              </p>
            </div>
          </div>

          <div className="mt-14">
            <h3 className="font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
              Cum se simte de fapt
            </h3>
            <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
              Anxietatea generalizată nu vine în episoade intense, ca{" "}
              <Link href="/atac-de-panica" className="text-lp-cyan-dark underline underline-offset-2 hover:no-underline">
                atacul de panică
              </Link>
              . E mai degrabă un fond permanent de neliniște, ca un motor care nu se oprește niciodată complet.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {SYMPTOMS.map((s) => (
                <div
                  key={s.label}
                  className="flex items-start gap-4 rounded-md border border-lp-border bg-white p-5 transition hover:-translate-y-0.5 hover:border-lp-cyan hover:shadow-[0_12px_40px_rgba(8,29,61,0.08)]"
                >
                  <span className="shrink-0 text-2xl leading-none">{s.icon}</span>
                  <div>
                    <p className="font-semibold text-lp-navy">{s.label}</p>
                    <p className="mt-1 text-sm leading-relaxed text-lp-mute">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <blockquote className="mt-12 border-l-4 border-lp-cyan pl-6 italic">
            <p className="font-work text-xl font-medium leading-relaxed text-lp-navy md:text-2xl">
              Multe persoane cu anxietate generalizată ajung mai întâi la medic, nu la psiholog. Vin cu dureri de cap, probleme gastrointestinale, tensiune musculară. Fac analize. Totul e în parametri normali.
            </p>
          </blockquote>
        </div>
      </section>

      {/* ── CUM ARATĂ ÎN VIAȚA REALĂ ── */}
      <section id="cum-arata" className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1100px]">
          <div className="mx-auto max-w-[820px]">
            <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
              Viața de zi cu zi
            </p>
            <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
              Cum arată anxietatea generalizată în <span className="lp-yellow-underline">viața</span> reală.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SCENES.map((scene) => (
              <div
                key={scene.time}
                className="rounded-md border border-lp-border bg-white p-6 transition hover:-translate-y-0.5 hover:border-lp-cyan hover:shadow-[0_12px_40px_rgba(8,29,61,0.08)]"
              >
                <span className="inline-block rounded-full bg-lp-bg px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-lp-cyan-dark">
                  {scene.time}
                </span>
                <p className="mt-4 text-base leading-relaxed text-lp-navy">{scene.text}</p>
                <p className="mt-4 border-t border-lp-border pt-4 text-sm leading-relaxed text-lp-mute">
                  {scene.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MECANISMUL ÎNGRIJORĂRII ── */}
      <section id="mecanismul" className="bg-lp-navy px-6 py-20 md:py-24 text-white">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-cyan">
            Mecanismul îngrijorării
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight md:text-4xl lg:text-[44px]">
            De ce mintea ta <span className="bg-lp-yellow px-2 text-lp-navy">nu se oprește.</span>
          </h2>

          <div className="mt-10 rounded-md border-l-4 border-lp-cyan bg-white/5 p-8 md:p-10">
            <h3 className="font-work text-xl font-bold text-white md:text-2xl">
              Nu e ce crezi.. nu simți prea mult, ci eviti să simți
            </h3>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-white/85 md:text-lg">
              <p>
                Cercetătorul Thomas Borkovec a descoperit că îngrijorarea cronică nu apare pentru că simți prea mult, ci tocmai pentru că mintea ta încearcă să evite să simtă.
              </p>
              <p>
                Gândește-te la ce se întâmplă când te îngrijorezi de sănătate. Rulezi în cap fraze vagi despre posibile probleme, despre ce ar putea să nu fie în regulă cu tine. Sunt gânduri, nu imagini. Și tocmai de asta nu simți nimic foarte intens.. doar acea neliniște difuză de fond.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
            <div className="rounded-md border border-white/15 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lp-yellow/20 text-lg font-bold text-lp-yellow">
                  ✕
                </span>
                <p className="font-semibold text-white">Vizualizare concretă</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Imagini clare, emoție puternică
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center text-xs uppercase tracking-[0.12em] text-white/45 md:px-2">
              <span>evită</span>
              <div className="rounded-md border border-lp-cyan/60 bg-lp-cyan/15 px-4 py-2 font-semibold text-white">
                Mintea ta
              </div>
              <span>preferă</span>
            </div>
            <div className="rounded-md border border-lp-cyan/40 bg-lp-cyan/10 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lp-cyan/20 text-lg font-bold text-lp-cyan">
                  ✓
                </span>
                <p className="font-semibold text-white">Gânduri vagi, difuze</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Fraze abstracte, neliniște ușoară
              </p>
            </div>
          </div>

          <blockquote className="mt-10 border-l-4 border-lp-cyan pl-6 italic">
            <p className="font-work text-xl font-medium leading-relaxed text-white md:text-2xl">
              Îngrijorarea funcționează ca un anestezic emoțional. Mintea ta preferă să ruleze scenarii vagi la nesfârșit decât să coboare în emoția reală de dedesubt.
            </p>
          </blockquote>

          <div className="mt-12">
            <h3 className="font-work text-xl font-bold text-white md:text-2xl">
              Cercul vicios al anxietății generalizate
            </h3>
            <ol className="mt-6 space-y-4">
              {[
                "Un stimul ambiguu apare (un email neclar, o senzație fizică, o veste)",
                "Mintea îl interpretează ca potențial pericol (ar putea fi ceva grav)",
                "Îngrijorarea pornește (scenarii abstracte despre ce ar putea să meargă prost)",
                "Îngrijorarea reduce temporar activarea emoțională",
                "Creierul învață că îngrijorarea funcționează",
                "Îngrijorarea devine strategie automată",
                "Procesarea emoțională reală nu se produce niciodată",
                "Problema subiacentă rămâne nerezolvată → mai multă îngrijorare",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lp-yellow font-bold text-lp-navy">
                    {i + 1}
                  </span>
                  <p className="text-base leading-relaxed text-white/85 md:text-lg">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-14">
            <h3 className="font-work text-xl font-bold text-white md:text-2xl">
              Productivă vs. neproductivă: nu toate grijile sunt la fel
            </h3>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div className="rounded-md border border-lp-cyan/30 bg-lp-cyan/10 p-6">
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-lp-cyan">Îngrijorare productivă</p>
                <ul className="mt-4 space-y-2 text-base leading-relaxed text-white/85">
                  <li className="flex gap-2"><span className="text-lp-cyan">•</span> Focalizată pe o problemă concretă și imediată</li>
                  <li className="flex gap-2"><span className="text-lp-cyan">•</span> Ai un grad de control asupra ei</li>
                  <li className="flex gap-2"><span className="text-lp-cyan">•</span> Conduce la o acțiune pe care o poți face acum</li>
                  <li className="flex gap-2"><span className="text-lp-cyan">•</span> Are un punct final natural</li>
                </ul>
              </div>
              <div className="rounded-md border border-lp-yellow/30 bg-lp-yellow/10 p-6">
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-lp-yellow">Îngrijorare neproductivă</p>
                <ul className="mt-4 space-y-2 text-base leading-relaxed text-white/85">
                  <li className="flex gap-2"><span className="text-lp-yellow">•</span> Focalizată pe scenarii abstracte și îndepărtate</li>
                  <li className="flex gap-2"><span className="text-lp-yellow">•</span> Nu ai control asupra ei</li>
                  <li className="flex gap-2"><span className="text-lp-yellow">•</span> Se învârte în cerc, nu conduce la nicio acțiune</li>
                  <li className="flex gap-2"><span className="text-lp-yellow">•</span> Nu are punct final</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-md border border-white/10 bg-white/5 p-8 md:p-10">
            <h4 className="font-work text-xl font-bold text-white md:text-2xl">
              Testul celor 4 întrebări
            </h4>
            <p className="mt-3 text-base text-white/70 md:text-lg">
              Când te prinzi că te îngrijorezi, pune-ți aceste întrebări:
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Problema e concretă sau abstractă?",
                "Am vreun grad de control asupra ei?",
                "Pot face ceva acum sau în zilele următoare?",
                "Mă gândesc la soluții sau la catastrofe?",
              ].map((q, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-md border-l-2 border-lp-yellow bg-white/5 p-4"
                >
                  <span className="font-work text-2xl font-bold text-lp-yellow">{i + 1}</span>
                  <p className="text-base text-white md:text-[17px]">{q}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              <div className="rounded-md border border-lp-cyan/30 bg-lp-cyan/10 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-lp-cyan">
                  Concretă, da, da, soluții
                </p>
                <p className="mt-2 font-semibold text-white">
                  Ai o îngrijorare productivă. Acționează.
                </p>
              </div>
              <div className="rounded-md border border-lp-yellow/30 bg-lp-yellow/10 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-lp-yellow">
                  Abstractă, nu, nu, catastrofe
                </p>
                <p className="mt-2 font-semibold text-white">
                  Ai o îngrijorare neproductivă. Trebuie tratată diferit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── META-WORRY ── */}
      <section id="meta-worry" className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Meta-worry
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Îngrijorarea despre <span className="lp-yellow-underline">îngrijorare.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            Aceasta e o particularitate a anxietății generalizate care nu există în nicio altă tulburare de anxietate. Și e adesea motorul principal care menține totul în mișcare.
          </p>

          <div className="mt-12">
            <h3 className="font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
              Credințele contradictorii despre îngrijorare
            </h3>
            <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
              Persoanele cu anxietate generalizată dețin simultan două seturi de credințe care se contrazic:
            </p>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div className="rounded-md border border-lp-border bg-lp-bg p-6">
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-lp-cyan-dark">
                  Credințe pozitive
                </p>
                <ul className="mt-4 space-y-2 text-base italic leading-relaxed text-lp-navy">
                  <li>„Dacă mă îngrijorez, sunt pregătit"</li>
                  <li>„Îngrijorarea mă ajută să evit surprizele"</li>
                  <li>„Dacă nu m-aș îngrijora, ar fi neglijent"</li>
                  <li>„Îngrijorarea arată că îmi pasă"</li>
                </ul>
              </div>
              <div className="rounded-md border border-lp-border bg-lp-bg p-6">
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-lp-cyan-dark">
                  Credințe negative
                </p>
                <ul className="mt-4 space-y-2 text-base italic leading-relaxed text-lp-navy">
                  <li>„Îngrijorarea mea e incontrolabilă"</li>
                  <li>„Îmi va face rău fizic"</li>
                  <li>„O să mă înnebunească"</li>
                  <li>„Nu sunt în stare să o opresc"</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <h3 className="font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
              Cum funcționează meta-worry
            </h3>
            <div className="mt-6 space-y-5">
              <div className="rounded-md border border-lp-border bg-white p-6">
                <p className="font-semibold text-lp-navy">Studentul</p>
                <p className="mt-2 text-base leading-relaxed text-lp-mute">
                  Studentul nu se oprește la îngrijorarea despre examen.. se îngrijorează că îngrijorarea va fi atât de intensă încât nu va dormi, nu va putea studia, va pica din cauza anxietății, nu din cauza materiei.
                </p>
              </div>
              <div className="rounded-md border border-lp-border bg-white p-6">
                <p className="font-semibold text-lp-navy">Mama</p>
                <p className="mt-2 text-base leading-relaxed text-lp-mute">
                  Mama nu se oprește la îngrijorarea despre sănătatea copilului.. se îngrijorează că anxietatea ei excesivă îl va afecta pe copil, că fiul va simți tensiunea, că îi transmite fricile.
                </p>
              </div>
            </div>
          </div>

          <blockquote className="mt-12 border-l-4 border-lp-cyan pl-6 italic">
            <p className="font-work text-xl font-medium leading-relaxed text-lp-navy md:text-2xl">
              Meta-worry e motorul care ține motorul pornit. Și e exact ce trebuie adresat în tratament.
            </p>
          </blockquote>

          <div className="mt-12 rounded-md border border-lp-border bg-lp-bg p-8">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎯</span>
              <h3 className="font-work text-xl font-bold leading-tight text-lp-navy md:text-2xl">
                Exercițiu de separare
              </h3>
            </div>
            <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
              Când observi că te îngrijorezi, pune-ți două întrebări:
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-md bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-lp-cyan-dark">
                  Nivel 1
                </p>
                <p className="mt-2 text-base text-lp-navy">
                  Despre ce mă îngrijorez? (problema concretă)
                </p>
              </div>
              <div className="rounded-md bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-lp-cyan-dark">
                  Nivel 2
                </p>
                <p className="mt-2 text-base text-lp-navy">
                  Ce cred despre faptul că mă îngrijorez? (meta-convingerea)
                </p>
              </div>
            </div>
            <p className="mt-5 text-base leading-relaxed text-lp-mute">
              Apoi întreabă-te dacă îngrijorarea ta e cu adevărat incontrolabilă, dacă ai reușit vreodată să te oprești. De cele mai multe ori, meta-convingerile nu rezistă la examinare directă.
            </p>
          </div>
        </div>
      </section>

      {/* ── INTOLERANȚA LA INCERTITUDINE ── */}
      <section id="incertitudine" className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Nucleul real
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Intoleranța la <span className="lp-yellow-underline">incertitudine.</span>
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Se crede adesea că anxietatea generalizată e despre griji, când de fapt nucleul real e incapacitatea de a tolera faptul că nu știi.
            </p>
            <p>
              Luni te îngrijorezi de sănătate. Marți de bani. Miercuri de relație. Joi de copii. Vineri de carieră. Conținutul se schimbă constant, dar mecanismul e identic: nu poți tolera incertitudinea.
            </p>
            <p>
              Persoanele cu anxietate generalizată nu au mai multă anxietate decât alții pentru că se confruntă cu mai multe pericole, ci pentru că tolerează mai puțin incertitudinea.
            </p>
          </div>

          <div className="mt-10 rounded-md border-l-4 border-lp-cyan bg-white p-8 md:p-10">
            <h3 className="font-work text-xl font-bold text-lp-navy md:text-2xl">
              Îngrijorarea ca soluție la incertitudine
            </h3>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-lp-mute md:text-lg">
              <p>
                Îngrijorarea cronică e o tentativă de a elimina incertitudinea din viață, convingerea că dacă te gândești la toate scenariile posibile nu vei fi surprins. Dar incertitudinea nu poate fi eliminată. E parte din viață.
              </p>
              <p className="font-semibold text-lp-cyan-dark">
                Tratamentul eficient nu încearcă să te convingă că nu se va întâmpla nimic rău. Te învață să tolerezi faptul că nu știi și să funcționezi în ciuda incertitudinii.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPORTAMENTE DE SIGURANȚĂ ── */}
      <section id="comportamente" className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1100px]">
          <div className="mx-auto max-w-[820px]">
            <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
              Comportamente de siguranță
            </p>
            <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
              Ce faci ca să faci față și de fapt menții anxietatea <span className="lp-yellow-underline">activă.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {BEHAVIORS.map((b) => (
              <div
                key={b.title}
                className="rounded-md border border-lp-border bg-white p-6 transition hover:-translate-y-0.5 hover:border-lp-cyan hover:shadow-[0_12px_40px_rgba(8,29,61,0.08)]"
              >
                <span className="text-3xl">{b.icon}</span>
                <h3 className="mt-4 font-work text-lg font-bold leading-snug text-lp-navy">
                  {b.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-lp-mute">{b.text}</p>
                <p className="mt-4 border-t border-lp-border pt-4 text-sm italic leading-relaxed text-lp-cyan-dark">
                  {b.key}
                </p>
              </div>
            ))}
          </div>

          <blockquote className="mx-auto mt-12 max-w-[820px] border-l-4 border-lp-cyan pl-6 italic">
            <p className="font-work text-xl font-medium leading-relaxed text-lp-navy md:text-2xl">
              Fiecare funcționează pe termen scurt. Fiecare amplifică anxietatea pe termen lung. Și fiecare împiedică exact învățarea care ar reduce îngrijorarea: că poți tolera incertitudinea fără să se întâmple nimic catastrofal.
            </p>
          </blockquote>
        </div>
      </section>

      {/* ── PSIHODINAMIC ── */}
      <section id="psihodinamic" className="bg-lp-navy px-6 py-20 md:py-24 text-white">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-cyan">
            Perspectiva psihodinamică
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight md:text-4xl lg:text-[44px]">
            Ce vrea să spună psihicul prin <span className="bg-lp-yellow px-2 text-lp-navy">îngrijorare cronică.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/85 md:text-lg">
            Până aici am vorbit despre cum funcționează anxietatea generalizată.. mecanismul, cercul vicios, meta-worry. Acum vreau să vorbim despre <strong className="text-white">de ce există</strong>.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-[auto_1fr] md:items-center">
            <div className="mx-auto md:mx-0">
              <svg width="200" height="160" viewBox="0 0 200 160" fill="none">
                <line x1="0" y1="60" x2="200" y2="60" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 4" />
                <text x="10" y="55" fill="rgba(255,255,255,0.4)" fontSize="9">suprafață</text>
                <text x="10" y="75" fill="rgba(255,255,255,0.4)" fontSize="9">profunzime</text>
                <path d="M80 58L100 20L120 58Z" fill="#fee770" opacity="0.85" />
                <text x="100" y="42" fill="#081d3d" fontSize="8" textAnchor="middle" fontWeight="700">îngrijorare</text>
                <path d="M60 62L100 62L140 62L155 100L140 140L60 140L45 100Z" fill="#fee770" opacity="0.18" />
                <text x="100" y="85" fill="#fee770" fontSize="9" textAnchor="middle">furie</text>
                <text x="100" y="100" fill="#fee770" fontSize="9" textAnchor="middle">tristețe</text>
                <text x="100" y="115" fill="#fee770" fontSize="9" textAnchor="middle">rușine</text>
                <text x="100" y="130" fill="#fee770" fontSize="9" textAnchor="middle">pierdere</text>
              </svg>
            </div>
            <div>
              <h3 className="font-work text-xl font-bold text-white md:text-2xl">
                Anxietatea generalizată ca vârf de iceberg
              </h3>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-white/85 md:text-lg">
                <p>
                  Gabbard propune o imagine care merită reținută: îngrijorarea difuză, cronică, pe care o simți la suprafață ascunde conflicte mai specifice și mai profunde sub apă.
                </p>
                <p>
                  Întrebările care contează sunt despre ce funcție are îngrijorarea în viața ta și ce s-ar întâmpla dacă te-ai opri, mai degrabă decât despre cum s-o reduci.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <h3 className="font-work text-xl font-bold text-white md:text-2xl">
              Sub îngrijorare: furia, tristețea, rușinea
            </h3>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-white/85 md:text-lg">
              <p>
                Când întreb un pacient cu anxietate generalizată ce ar simți dacă nu s-ar mai îngrijora deloc, răspunsul rareori e că s-ar simți bine.
              </p>
              <p>
                Cel mai des e un moment de confuzie, urmat de ceva neașteptat: furie. Sau tristețe. Sau rușine. Sau un gol pe care nu-l pot numi.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-md border-l-4 border-lp-yellow bg-white/5 p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-lp-yellow">
              Studiu de caz
            </p>
            <h3 className="mt-3 font-work text-xl font-bold text-white md:text-2xl">
              Anton: banii nu erau despre bani
            </h3>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-white/85 md:text-lg">
              <p>
                Anton era funcționar public, proaspăt pensionat, cu îngrijorare cronică despre finanțe. A încercat soluția logică: a deschis o mică afacere. Îngrijorarea nu a scăzut. A crescut.
              </p>
              <p>
                Motivul: îngrijorarea lui Anton nu era despre bani. Era despre incertitudinea existențială a pensionării. Pierderea identității profesionale, a structurii zilnice, a rolului social. Banii erau vehiculul. Sub ei era întrebarea pe care Anton nu o putea pune cu voce tare: „Cine mai sunt eu dacă nu mai lucrez?"
              </p>
              <p className="font-semibold italic text-lp-yellow">
                A trata banii fără a adresa identitatea e ca și cum ai trata febra fără a căuta infecția.
              </p>
            </div>
          </div>

          <div className="mt-14">
            <h3 className="font-work text-xl font-bold text-white md:text-2xl">
              Originile în copilărie
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
              Anxietatea generalizată are rădăcini specifice în experiența timpurie:
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {ORIGINS.map((o) => (
                <div
                  key={o.title}
                  className="rounded-md border border-white/10 bg-white/5 p-6"
                >
                  <span className="text-2xl">{o.emoji}</span>
                  <h4 className="mt-3 font-work text-base font-bold text-white md:text-lg">
                    {o.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/75 md:text-base">
                    {o.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRATAMENT ── */}
      <section id="tratament" className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Tratament
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Ce <span className="lp-yellow-underline">funcționează.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            Anxietatea generalizată răspunde bine la tratament. Și spre deosebire de medicație, beneficiile terapiei se mențin după terminarea tratamentului.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-md border border-lp-border bg-lp-bg p-6 text-center">
              <p className="font-work text-3xl font-bold tracking-tight text-lp-navy md:text-4xl">75%</p>
              <p className="mt-1 text-sm font-semibold text-lp-navy">ameliorare</p>
              <p className="mt-1 text-xs text-lp-mute-soft md:text-sm">
                dintre persoanele care urmează terapia au ameliorare semnificativă
              </p>
            </div>
            <div className="rounded-md border border-lp-border bg-lp-bg p-6 text-center">
              <p className="font-work text-3xl font-bold tracking-tight text-lp-navy md:text-4xl">12-20</p>
              <p className="mt-1 text-sm font-semibold text-lp-navy">ședințe</p>
              <p className="mt-1 text-xs text-lp-mute-soft md:text-sm">
                durata tipică a tratamentului
              </p>
            </div>
          </div>

          <div className="mt-14">
            <h3 className="font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
              Restructurarea relației cu îngrijorarea
            </h3>
            <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
              Tratamentul anxietății generalizate schimbă relația ta cu îngrijorarea. Nu încearcă să o facă să dispară, pentru că îngrijorarea în sine nu e problema.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {TREATMENT_COMPONENTS.map((c) => (
                <div
                  key={c.num}
                  className="rounded-md border border-lp-border bg-white p-6"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lp-cyan font-bold text-lp-navy">
                    {c.num}
                  </span>
                  <h4 className="mt-4 font-work text-lg font-bold leading-snug text-lp-navy">
                    {c.title}
                  </h4>
                  <p className="mt-3 text-base leading-relaxed text-lp-mute">{c.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 rounded-md border border-lp-border bg-lp-bg p-8 md:p-10">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⏱️</span>
              <h3 className="font-work text-xl font-bold leading-tight text-lp-navy md:text-2xl">
                Worry Time: tehnica paradoxală care funcționează
              </h3>
            </div>
            <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
              Una dintre cele mai eficiente tehnici e contra-intuitivă: în loc să încerci să te oprești din îngrijorat, programezi deliberat un moment de îngrijorare.
            </p>
            <ol className="mt-6 space-y-3">
              {WORRY_TIME_STEPS.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lp-cyan text-sm font-bold text-lp-navy">
                    {i + 1}
                  </span>
                  <p className="text-base leading-relaxed text-lp-navy md:text-[17px]">{step}</p>
                </li>
              ))}
            </ol>
            <div className="mt-8 rounded-md bg-white p-6">
              <p className="font-semibold text-lp-navy">De ce funcționează:</p>
              <ul className="mt-3 space-y-2 text-base leading-relaxed text-lp-mute">
                <li className="flex gap-2"><span className="text-lp-cyan-dark">•</span> Demonstrează că îngrijorarea nu e incontrolabilă (ai reușit să o amâni)</li>
                <li className="flex gap-2"><span className="text-lp-cyan-dark">•</span> Transformă procesul cronic difuz în activitate delimitată</li>
                <li className="flex gap-2"><span className="text-lp-cyan-dark">•</span> Forțează vizualizarea completă a scenariului</li>
                <li className="flex gap-2"><span className="text-lp-cyan-dark">•</span> Permite elaborarea unui plan de coping</li>
              </ul>
            </div>
          </div>

          <div className="mt-14">
            <h3 className="font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
              De ce medicamentele singure nu sunt suficiente
            </h3>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-lp-mute md:text-lg">
              <p>
                Antidepresivele din clasa SSRI (inhibitori selectivi ai recaptării serotoninei) pot reduce simptomele anxietății generalizate. Dar beneficiile se mențin doar cât iei medicamentul. La oprire, simptomele pot reveni.
              </p>
              <p>
                Medicamentul reduce anxietatea fără să te învețe să tolerezi incertitudinea sau să procesezi emoțiile evitate. Combinația optimă: terapia cognitiv-comportamentală ca bază, cu SSRI ca adjuvant dacă simptomele sunt foarte severe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CE POȚI FACE ACUM ── */}
      <section id="ce-poti-face" className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Exerciții practice
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Ce poți face <span className="lp-yellow-underline">acum.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            Nu trebuie să aștepți o programare la psiholog ca să începi.
          </p>

          <div className="mt-10 space-y-5">
            {EXERCISES.map((ex) => (
              <div
                key={ex.num}
                className="flex flex-col gap-4 rounded-md border border-lp-border bg-white p-6 md:flex-row md:p-7"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lp-cyan font-bold text-lp-navy">
                  {ex.num}
                </span>
                <div>
                  <h3 className="font-work text-lg font-bold leading-snug text-lp-navy md:text-xl">
                    {ex.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-lp-mute">{ex.text}</p>
                  <p className="mt-3 border-l-2 border-lp-cyan pl-4 text-base italic leading-relaxed text-lp-navy">
                    {ex.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECIALIST ── */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Când să ceri ajutor
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Când merită să cauți un <span className="lp-yellow-underline">specialist.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            Anxietatea generalizată răspunde excelent la terapia cognitiv-comportamentală. Caută un specialist dacă:
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {SPECIALIST_SIGNS.map((sign) => (
              <div
                key={sign}
                className="flex items-start gap-3 rounded-md border border-lp-border bg-white p-5"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lp-cyan font-bold text-lp-navy">
                  ✓
                </span>
                <p className="text-base leading-relaxed text-lp-navy">{sign}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-lp-mute-soft">
              Citește și
            </p>
            <div className="mt-3 flex flex-col gap-2">
              <Link
                href="/tipuri/anxietate-sociala"
                className="text-base text-lp-cyan-dark underline underline-offset-2 hover:no-underline"
              >
                Anxietatea socială: cum arată din interior și ce poți face
              </Link>
              <Link
                href="/tipuri/toc"
                className="text-base text-lp-cyan-dark underline underline-offset-2 hover:no-underline"
              >
                Tulburarea obsesiv-compulsivă (TOC): gânduri intruzive și ritualuri
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <div className="text-center">
            <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-cyan-dark">
              Întrebări frecvente
            </p>
            <h2 className="mt-3 font-work text-3xl font-bold leading-tight tracking-tight text-lp-navy md:text-4xl">
              Ce vor să știe oamenii despre anxietatea generalizată.
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

          {/* References */}
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

          <p className="mt-10 text-center text-sm text-lp-mute-soft">
            Această pagină nu înlocuiește un diagnostic profesional. Dacă te recunoști în ce ai citit, te încurajez să vorbești cu un specialist.
          </p>
        </div>
      </section>

      {/* ── CTA DARK ── */}
      <section className="bg-lp-navy px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1100px]">
          <div className="text-center text-white">
            <p className="text-base md:text-lg font-semibold uppercase tracking-[0.22em] text-lp-cyan">
              Cabinet
            </p>
            <h2 className="mt-4 font-work text-3xl font-bold leading-tight md:text-5xl">
              Dacă ai ajuns până aici,{" "}
              <span className="bg-lp-yellow px-2 text-lp-navy">
                ai făcut deja ceva important.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-[680px] text-lg leading-relaxed text-white/85 md:text-xl">
              Ai căutat să înțelegi ce ți se întâmplă. Asta nu e puțin. Următorul pas e o conversație cu cineva care a lucrat cu sute de persoane care au trecut prin exact ce treci tu acum.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4">
              <Link
                href="/programare?din=anxietate-generalizata"
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
        </div>
      </section>
    </main>
  );
}
