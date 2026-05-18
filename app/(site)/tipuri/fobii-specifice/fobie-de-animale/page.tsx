"use client";

import Link from "next/link";

/* ============================================================
   FOBIA DE ANIMALE — Pagină completă (lp-* design system)
   ============================================================ */

const FAQS: Array<{ q: string; a: React.ReactNode }> = [
  {
    q: "Fobia de animale se moștenește?",
    a: (
      <>
        <p>
          Există o predispoziție genetică, dar nu fobia în sine se moștenește.
          Ce se transmite e sensibilitatea la dezgust și predispoziția de a
          învăța rapid frica față de anumite animale.
        </p>
        <p className="mt-3">
          Cercetările pe gemeni arată o componentă genetică semnificativă. Dacă
          un părinte are fobie de păianjeni, copilul are șanse mai mari să
          dezvolte aceeași fobie. Dar nu e inevitabil.
        </p>
        <p className="mt-3">
          Pe lângă genetică, modul în care reacționează părinții în fața
          animalului contează enorm. Un copil care vede mama speriată de câini
          învață, prin observare, că câinii sunt periculoși. Și această
          învățare poate fi la fel de puternică ca o experiență directă.
        </p>
      </>
    ),
  },
  {
    q: "Copilul meu se teme de câini. Ce pot face?",
    a: (
      <>
        <p>
          Nu forțați contactul cu animalul. Nu-i spuneți că nu e nimic sau că
          nu trebuie să fie fricos. Aceste reacții, deși bine intenționate,
          invalidează ce simte copilul și pot agrava fobia.
        </p>
        <p className="mt-3">
          Cel mai important lucru pe care îl puteți face e să vă gestionați
          propria reacție. Copiii învață frica observându-și părinții. Dacă voi
          sunteți calmi în prezența câinilor, copilul preia acest model în
          timp.
        </p>
        <p className="mt-3">
          Expunerea graduală funcționează excelent la copii, adesea mai bine
          decât la adulți. Începeți cu cărți cu imagini, apoi videoclipuri,
          apoi observarea unui câine de la distanță. Lăsați copilul să
          controleze ritmul. Și dacă fobia persistă sau se agravează, un
          psiholog specializat pe copii poate ajuta foarte mult.
        </p>
      </>
    ),
  },
  {
    q: "Se poate vindeca complet o fobie de animale?",
    a: (
      <>
        <p>
          Da. Fobiile de animale au cel mai bun prognostic din toate fobiile
          specifice, care la rândul lor sunt cea mai tratabilă condiție din
          psihologia clinică.
        </p>
        <p className="mt-3">
          Cu expunere graduală, 80-95% dintre persoane obțin îmbunătățiri
          semnificative. Multe studii arată că o singură sesiune prelungită de
          2-3 ore poate fi suficientă, cu rate de succes de 75-90%.
        </p>
        <p className="mt-3">
          Vindecare completă înseamnă că poți funcționa normal în prezența
          animalului, fără evitare, fără anxietate semnificativă. Nu înseamnă
          neapărat că vei adora păianjenii. Dar înseamnă că nu-ți vor mai
          controla viața.
        </p>
      </>
    ),
  },
  {
    q: "De ce am dezgust, nu frică?",
    a: (
      <>
        <p>
          Pentru multe animale, mai ales insecte, păianjeni și rozătoare,
          dezgustul e emoția principală, nu frica. Asta nu e o anomalie. E un
          mecanism diferit de protecție.
        </p>
        <p className="mt-3">
          Dezgustul a evoluat ca răspuns la riscul de contaminare și boală.
          Animalele care stârnesc dezgust sunt adesea cele asociate cu
          murdăria, descompunerea sau bolile. Păianjenii, gândacii,
          șobolanii.. toate sunt legate de idei de contaminare.
        </p>
        <p className="mt-3">
          Asta contează pentru tratament, pentru că dezgustul se procesează
          diferit de frică. Expunerea clasică reduce frica eficient, dar
          dezgustul scade mai lent și poate necesita mai multe sesiuni. Un
          terapeut care înțelege această distincție va adapta tratamentul în
          consecință.
        </p>
      </>
    ),
  },
  {
    q: "Am fobie de animale, dar nu am fost niciodată mușcat. De ce?",
    a: (
      <>
        <p>
          Nu ai nevoie de o experiență traumatică directă. Cercetările arată
          trei căi prin care se dezvoltă fobiile de animale.
        </p>
        <p className="mt-3">
          Prima e experiența directă: ai fost mușcat, înțepat sau speriat de un
          animal. A doua e observarea: ai văzut pe cineva (de obicei un
          părinte) reacționând cu frică sau dezgust. A treia e transmiterea
          informațională: ai auzit povești, ai citit, ai văzut în filme că
          animalul e periculos.
        </p>
        <p className="mt-3">
          Pe lângă aceste trei căi, există predispoziția genetică.. acele frici
          pregătite de care am vorbit. Creierul tău a venit pregătit să învețe
          rapid frica față de anumite animale. Uneori e suficient un stimul
          foarte mic, pe care nici nu ți-l amintești, pentru ca învățarea să se
          producă.
        </p>
      </>
    ),
  },
];

const REFERENCES = [
  "Antony, M. M., Craske, M. G., & Barlow, D. H. (2006). Mastering Your Fears and Phobias: Therapist Guide (2nd ed.). Oxford University Press.",
  "Seligman, M. E. P. (1971). Phobias and preparedness. Behavior Therapy, 2(3), 307-320.",
  "Öhman, A., & Mineka, S. (2001). Fears, phobias, and preparedness: Toward an evolved module of fear and fear learning. Psychological Review, 108(3), 483-522.",
  "Öst, L. G. (1989). One-session treatment for specific phobias. Behaviour Research and Therapy, 27(1), 1-7.",
  "Craske, M. G., Treanor, M., Conway, C. C., Zbozinek, T., & Vervliet, B. (2014). Maximizing exposure therapy: An inhibitory learning approach. Behaviour Research and Therapy, 58, 10-23.",
  "Davey, G. C. L. (1994). The disgusting spider: The role of disease and illness in the perpetuation of fear of spiders. Society and Animals, 2(1), 17-25.",
  "Matchett, G., & Davey, G. C. L. (1991). A test of a disease-avoidance model of animal phobias. Behaviour Research and Therapy, 29(1), 91-94.",
  "Rachman, S. (1977). The conditioning theory of fear acquisition: A critical examination. Behaviour Research and Therapy, 15(5), 375-387.",
  "Freud, S. (1909). Analysis of a Phobia in a Five-Year-Old Boy. Standard Edition, Vol. 10.",
  "Gabbard, G. O. (2007). Tratat de Psihiatrie Psihodinamică. Editura Trei.",
  "Clark, D. A., & Beck, A. T. (2010). Cognitive Therapy of Anxiety Disorders: Science and Practice. Guilford Press.",
];

export default function FobieDeAnimalePage() {
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
            <span className="text-lp-navy">Fobia de animale</span>
          </nav>

          <p className="mt-6 text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Ghid complet 2026
          </p>
          <h1 className="mt-4 font-work text-4xl font-bold leading-[1.05] tracking-tight text-lp-navy md:text-5xl lg:text-6xl">
            Fobia de <span className="lp-yellow-underline">animale</span>.
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
              Câinele vecinului aleargă spre tine și totul se oprește. Nu
              contează că e mic, că dă din coadă, că stăpânul îți spune că nu
              face nimic. Inima bate în gât. Mâinile se ridică instinctiv.
              Corpul tău deja a luat decizia înainte ca mintea să fi apucat să
              gândească: fugi.
            </p>
            <p>
              Sau poate nu e un câine. Poate e un păianjen pe peretele din baie.
              Poate e o insectă pe masă. Poate e un șarpe pe care l-ai văzut
              într-un documentar și care ți-a stricat seara. Poate e doar gândul
              că ar putea fi un păianjen undeva în cameră, și asta e suficient
              ca să nu poți dormi.
            </p>
            <p>
              Gândacul acela de pe podea, cel pe care alții îl calcă fără să
              clipească.. pe tine te face să sari de pe scaun, să ieși din
              cameră, să simți un val de dezgust care te cuprinde ca o mână
              rece.
            </p>
            <p>
              <strong className="text-lp-navy">
                Nu ești irațional și nu exagerezi.
              </strong>{" "}
              Ce trăiești se numește fobie de animale. Și în acest ghid vei
              înțelege de ce corpul tău reacționează așa, de ce rațiunea nu
              ajunge, și ce funcționează ca tratament.
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
            Ce este fobia de animale.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Fobia de animale este o frică intensă, persistentă și
              disproporționată față de un anumit animal sau o categorie de
              animale, care duce la evitare activă și afectează viața de zi cu
              zi. Face parte din subtipul animal al fobiilor specifice și este
              cel mai frecvent subtip.. afectează aproximativ 3-6% din
              populație.
            </p>
            <p>
              Cele mai comune fobii de animale sunt fobia de câini (cinofobie),
              de păianjeni (arahnofobie), de șerpi (ofidiofobie), de insecte
              (entomofobie) și de rozătoare. Dar orice animal poate deveni
              obiectul unei fobii, de la pisici la păsări, de la pești la
              fluturi.
            </p>
            <p>
              Debutul apare de obicei în copilărie, în jurul vârstei de 7-9 ani,
              mai devreme decât majoritatea celorlalte fobii. Multe persoane
              nu-și amintesc un moment precis în care a început. Pare că a fost
              acolo dintotdeauna.
            </p>
            <p>
              Fobia de animale e mai frecventă la femei, într-un raport de
              aproximativ 2:1 față de bărbați. Dar bărbații cu fobie de animale
              suferă la fel de mult, cu un strat suplimentar de rușine.. un
              bărbat nu se teme de un păianjen.
            </p>
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Frică normală sau fobie?
          </h3>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              E normal să te ferești de un câine care mârâie sau de un șarpe pe
              care nu-l recunoști. Asta e prudență, nu fobie. Diferența apare
              când reacția e disproporționată față de pericolul real.
            </p>
            <p>
              Un exemplu concret: vezi o fotografie cu un păianjen într-o carte.
              Nu e real, nu te poate atinge, nu e în aceeași cameră cu tine. Dar
              inima ți se accelerează, simți un val de dezgust, și închizi
              cartea. Sau schimbi pagina. Sau lași cartea din mână.
            </p>
            <p>
              Dacă reacția ta la un animal mic, inofensiv sau absent fizic e la
              fel de intensă ca reacția la un pericol real, atunci ce trăiești e
              mai mult decât o simplă neplăcere. E un mecanism care funcționează
              pe pilot automat, independent de ce știi rațional.
            </p>
          </div>
        </div>
      </section>

      {/* FRICĂ ȘI DEZGUST */}
      <section id="frica-si-dezgust" className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Două emoții
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Frică și dezgust: două emoții, nu una.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Majoritatea oamenilor cred că fobia de animale e doar frică. Dar
              cercetările arată că sunt două emoții distincte implicate, și
              proporția lor variază în funcție de animal.
            </p>
            <p>
              Pentru câini, emoția dominantă e frica.. frica de mușcătură, de
              atac, de pierderea controlului. Pentru păianjeni, insecte și
              șerpi, emoția dominantă e adesea dezgustul. Nu te temi că
              păianjenul te va răni. Te dezgustă. Simți o repulsie fizică,
              viscerală, care vine din stomac, nu din minte.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-md border-t-4 border-lp-cyan-dark bg-lp-bg p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-lp-cyan-dark">Frica</p>
              <p className="mt-3 text-base leading-relaxed text-lp-navy md:text-[17px]">
                Activează răspunsul de luptă sau fugă. Inima bate repede,
                mușchii se tensionează, vrei să fugi sau să te aperi. E despre
                pericol.
              </p>
              <p className="mt-3 text-sm text-lp-mute">
                Animale tipice: câini, șerpi mari, animale sălbatice
              </p>
            </div>
            <div className="rounded-md border-t-4 border-lp-yellow bg-lp-bg p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-lp-mute">Dezgustul</p>
              <p className="mt-3 text-base leading-relaxed text-lp-navy md:text-[17px]">
                Activează răspunsul de respingere. Greață, senzație de
                murdărie, nevoia de a te spăla sau de a te îndepărta. E despre
                contaminare.
              </p>
              <p className="mt-3 text-sm text-lp-mute">
                Animale tipice: păianjeni, insecte, gândaci, rozătoare
              </p>
            </div>
          </div>

          <p className="mt-8 text-base leading-relaxed text-lp-mute md:text-lg">
            Această distincție contează enorm pentru tratament. Dacă emoția ta
            dominantă e dezgustul, nu doar frica, atunci tratamentul trebuie să
            includă și expunere la dezgust, nu doar la frică. Altfel lucrezi pe
            jumătate.
          </p>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            De ce ne temem de șerpi dar nu de prize electrice
          </h3>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              O priză electrică poate fi letală. Un șarpe de grădină, nu. Și
              totuși, aproape nimeni nu are fobie de prize, dar milioane de
              oameni au fobie de șerpi. De ce?
            </p>
            <p>
              Psihologul Martin Seligman a propus conceptul de frici pregătite
              (prepared fears). Ideea e că creierul uman vine din fabrică cu o
              predispoziție de a învăța rapid frica față de anumite lucruri..
              animale, înălțimi, întuneric, spații închise. Sunt lucruri care au
              fost periculoase pentru strămoșii noștri timp de sute de mii de
              ani.
            </p>
            <p>
              Prizele electrice există de 150 de ani. Creierul nu a avut timp să
              le includă în lista de pericole prestabilite. Dar șerpii,
              păianjenii, câinii sălbatici au fost acolo de la început.
            </p>
            <p>
              De aceea fobiile de animale se învață mai ușor, mai rapid și sunt
              mai rezistente la stingere decât fricile de obiecte moderne. Nu e
              o defecțiune a creierului tău, ci un software vechi care încă
              rulează.
            </p>
          </div>
        </div>
      </section>

      {/* CORPUL NU ASCULTĂ - dark */}
      <section id="corpul-nu-asculta" className="bg-lp-navy px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px] text-white">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.22em] text-lp-cyan">
            Mecanismul
          </p>
          <h2 className="mt-4 font-work text-3xl font-bold leading-tight md:text-4xl lg:text-[44px]">
            De ce corpul nu ascultă de rațiune.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-white/85 md:text-lg">
            <p>
              Știu că păianjenul nu-mi face nimic, dar nu pot. Această frază o
              aud de la aproape fiecare persoană cu fobie de animale. Și are o
              explicație foarte concretă.
            </p>
            <p>
              Creierul tău procesează frica pe două căi diferite, care
              funcționează în paralel dar cu viteze diferite.
            </p>
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-white md:text-3xl">
            Calea rapidă și calea lentă
          </h3>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-white/85 md:text-lg">
            <p>
              <strong className="text-white">Calea rapidă</strong> trece prin
              amigdală (centrul de alarmă al creierului). E veche, automată și
              foarte rapidă. Vede ceva care seamănă cu un șarpe și declanșează
              alarma în milisecunde. Nu analizează, nu judecă, nu gândește.
              Reacționează.
            </p>
            <p>
              <strong className="text-white">Calea lentă</strong> trece prin
              cortexul prefrontal (partea rațională). Analizează, compară,
              evaluează. Și ajunge la concluzia corectă: e doar un furtun de
              grădină, nu un șarpe. Dar ajunge acolo cu câteva sute de
              milisecunde mai târziu.
            </p>
            <p>
              Când ai fobie de animale, calea rapidă câștigă de fiecare dată.
              Corpul tău a reacționat deja înainte ca mintea să fi apucat să
              analizeze. Și odată ce alarma a sunat, e foarte greu să o
              oprești, chiar dacă știi rațional că nu e pericol.
            </p>
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-white md:text-3xl">
            Predicțiile ascunse
          </h3>
          <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
            Creierul tău nu doar reacționează la ce vede. Anticipează. Face
            predicții constante despre ce urmează să se întâmple. Și aceste
            predicții sunt cele care alimentează fobia.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Va sări pe mine",
              "Va intra în casă",
              "Mă va mușca",
              "Va urca pe mine",
              "Nu voi putea scăpa",
              "Voi pierde controlul",
              "Mă voi face de râs",
              "Dezgustul nu va trece niciodată",
            ].map((s) => (
              <span key={s} className="rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/90 md:text-[15px]">
                {s}
              </span>
            ))}
          </div>

          <div className="mt-8 rounded-md border-l-4 border-lp-yellow bg-white/5 p-8 md:p-10">
            <p className="text-base leading-relaxed text-white/90 md:text-lg">
              Niciuna din aceste predicții nu se verifică de obicei. Dar fiecare
              act de evitare împiedică verificarea. Dacă fugi de câine, nu afli
              niciodată că nu te-ar fi mușcat. Și creierul tău continuă să
              creadă că predicția era corectă.
            </p>
          </div>
        </div>
      </section>

      {/* COMPORTAMENTE DE SIGURANȚĂ */}
      <section id="comportamente-de-siguranta" className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Cercul vicios
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Comportamente de siguranță.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            Acestea sunt lucrurile pe care le faci ca să faci față. Fiecare în
            parte pare rezonabil. Dar pune-le pe toate la un loc și vei vedea
            costul real:
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Verifici fiecare cameră înainte de a intra",
              "Scanezi mereu podeaua, pereții, tavanul",
              "Nu mergi pe iarbă sau prin parcuri",
              "Eviți pivnițele, podurile, magaziile",
              "Ții geamurile și ușile mereu închise",
              "Verifici patul înainte de culcare",
              "Eviți documentarele, filmele, pozele cu animale",
              "Ceri altcuiva să scoată insecta din cameră",
              "Nu mergi la țară sau în vacanțe în natură",
              "Porți pantofi închiși mereu, chiar și vara",
              "Folosești insecticide preventiv, zilnic",
              "Traversezi strada când vezi un câine",
            ].map((s) => (
              <span key={s} className="rounded-md border border-lp-border bg-lp-bg px-4 py-2 text-sm text-lp-navy md:text-[15px]">
                {s}
              </span>
            ))}
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Cum se extinde evitarea
          </h3>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              La început evitai doar câinii mari. Apoi orice câine. Apoi
              parcurile unde ar putea fi câini. Apoi străzile unde ai văzut
              câini. Apoi întreaga zonă. Teritoriul sigur se micșorează
              constant, iar tu nici nu observi, pentru că fiecare extensie pare
              logică în momentul în care o faci.
            </p>
            <p>
              Sau evitai doar păianjenii reali. Apoi pozele cu păianjeni. Apoi
              filmele în care ar putea apărea un păianjen. Apoi cărțile cu
              ilustrații. Apoi conversațiile despre păianjeni. Fobia nu stă pe
              loc. Se extinde dacă o lași.
            </p>
          </div>

          <div className="mt-8 rounded-md border-l-4 border-lp-yellow bg-lp-bg p-6 md:p-8">
            <p className="text-base leading-relaxed text-lp-navy md:text-lg">
              O vacanță la munte anulată. O vizită la bunici evitată. Un job
              refuzat pentru că biroul e la parter. Un copil care preia frica ta
              și o duce mai departe. Costul evitării nu e doar disconfortul tău.
              E viața pe care n-o trăiești.
            </p>
          </div>
        </div>
      </section>

      {/* MICUL HANS - dark */}
      <section id="perspectiva-psihodinamica" className="bg-lp-navy px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px] text-white">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.22em] text-lp-cyan">
            Perspectiva clinică
          </p>
          <h2 className="mt-4 font-work text-3xl font-bold leading-tight md:text-4xl lg:text-[44px]">
            Micul Hans: ce ne spune psihicul prin frica de animale.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-white/85 md:text-lg">
            <p>
              Până aici am vorbit despre cum funcționează fobia. Acum vreau să
              vorbim despre de ce există. Ce încearcă psihicul tău să comunice
              prin acest simptom.
            </p>
            <p>
              Una dintre cele mai cunoscute povești din istoria psihologiei este
              despre un băiețel pe nume Hans, care la 5 ani a dezvoltat o frică
              intensă de cai. Povestea lui e relevantă și azi, nu pentru
              detaliile ei clinice, ci pentru principiul pe care îl ilustrează.
            </p>
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-white md:text-3xl">
            Povestea lui Hans
          </h3>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-white/85 md:text-lg">
            <p>
              Hans trăia într-o vreme în care caii erau peste tot pe străzi,
              exact cum sunt azi câinii sau mașinile. Și brusc, a început să se
              teamă de ei. Nu voia să iasă din casă. Plângea când vedea un cal.
              Era convins că un cal va veni și-l va mușca.
            </p>
            <p>
              Prin terapie (prima psihoterapie a unui copil din istorie), s-a
              descoperit că frica de cai nu era despre cai. Hans traversa o
              perioadă emoțional complicată. Avea sentimente amestecate față de
              tatăl său.. îl iubea, dar se și temea de el. Avea sentimente pe
              care nu le putea numi sau exprima la 5 ani.
            </p>
            <p>
              Psihicul lui a făcut o mutare specifică: a luat emoțiile
              complicate, pe care nu le putea procesa, și le-a mutat pe un
              obiect exterior, concret, vizibil.. calul. Calul putea fi evitat.
              Sentimentele față de tată, nu.
            </p>
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-white md:text-3xl">
            Ce ne spune asta
          </h3>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-white/85 md:text-lg">
            <p>
              Nu spun că orice fobie de animale ascunde un conflict psihic
              nerezolvat. Multe fobii de animale au o componentă puternic
              biologică, pregătită genetic, și nu au nicio legătură cu dinamica
              familiei.
            </p>
            <p>
              Dar merită să te întrebi: ce s-a întâmplat în viața mea când a
              apărut fobia? Sau dacă a fost dintotdeauna acolo, ce funcție
              servește ea? Ce evit prin ea, dincolo de animalul în sine?
            </p>
            <p>
              Uneori, frica de câini ascunde o frică de agresivitate, a ta sau a
              altcuiva. Frica de păianjeni poate masca o senzație de invazie a
              intimității, ceva care intră unde nu e invitat. Frica de șerpi
              poate fi legată de ceva ascuns, imprevizibil, care apare de
              nicăieri.
            </p>
            <p>
              Animalul de care te temi poate fi un ecran pe care psihicul tău
              proiectează ceva ce nu poate exprima direct. Nu întotdeauna. Dar
              suficient de des încât merită întrebarea.
            </p>
          </div>
        </div>
      </section>

      {/* TRATAMENT STATS */}
      <section id="tratament" className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Tratament
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Ce spun datele.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            Fobiile de animale au cel mai bun prognostic din toate fobiile
            specifice. Și fobiile specifice sunt cea mai tratabilă condiție din
            psihologia clinică. Asta înseamnă că ce ai tu se tratează, și se
            tratează bine.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { stat: "80-95%", label: "pacienți cu îmbunătățiri semnificative" },
              { stat: "1-12", label: "ședințe de tratament" },
              { stat: "75-90%", label: "succes într-o singură sesiune prelungită" },
            ].map((d) => (
              <div key={d.stat} className="rounded-md border border-lp-border bg-lp-bg p-6 text-center">
                <p className="font-work text-3xl font-bold tracking-tight text-lp-navy md:text-4xl">
                  {d.stat}
                </p>
                <p className="mt-2 text-sm leading-snug text-lp-mute md:text-base">
                  {d.label}
                </p>
              </div>
            ))}
          </div>

          <h3 className="mt-14 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Ierarhia de expunere: cum arată concret
          </h3>
          <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
            Tratamentul nu înseamnă să fii pus brusc în fața animalului de care
            te temi. Înseamnă un progres treptat, calibrat, în care tu
            controlezi fiecare pas:
          </p>

          <div className="mt-6 flex flex-col gap-6 rounded-md border border-lp-border bg-lp-bg p-6">
            {[
              { level: "Ușor", color: "bg-lp-cyan text-lp-navy", steps: [
                "Citesc un text despre animalul de care mă tem",
                "Mă uit la o poză cu animalul, de la distanță",
                "Mă uit la o poză cu animalul, de aproape, timp de 2 minute",
              ]},
              { level: "Mediu", color: "bg-lp-yellow text-lp-navy", steps: [
                "Mă uit la un video cu animalul",
                "Stau în aceeași cameră cu animalul (într-o cutie/cușcă), la 3 metri",
                "Stau în aceeași cameră cu animalul, la 1 metru",
                "Mă uit la animal de aproape, fără barieră, 5 minute",
              ]},
              { level: "Greu", color: "bg-lp-navy text-white", steps: [
                "Ating cutia sau cușca în care e animalul",
                "Ating animalul (cu mănuși, apoi fără)",
                "Țin animalul în mână sau stau lângă el fără protecție, 10 minute",
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
            La fiecare treaptă, rămâi în situație până când frica sau dezgustul
            scade de la sine. Nu pleci la primul semn de disconfort. Stai. Și
            descoperi ceva pe care evitarea nu te lasă niciodată să descoperi:
            frica are un vârf, iar după vârf, coboară.
          </p>
        </div>
      </section>

      {/* TRATAMENT DETALII */}
      <section className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <h3 className="font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            De ce a ajunge nu e suficient
          </h3>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Mulți oameni fac un lucru curajos.. ajung până la treapta care îi
              sperie, o trec, și se opresc. Am reușit, gata, am terminat. Dar
              cercetările arată că oprirea la pragul minim crește riscul de
              revenire a fobiei.
            </p>
            <p>
              Conceptul se numește supra-expunere (overlearning). Nu e suficient
              să atingi păianjenul o dată. Trebuie să-l atingi de 10 ori. Să-l
              ții în mână 5 minute, nu 5 secunde. Să te expui mai mult decât
              trebuie. Cu cât ești mai departe de linia de start, cu atât riscul
              de revenire e mai mic.
            </p>
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Expunerea ca experiment
          </h3>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Abordarea modernă a expunerii nu e stai acolo până trece frica, ci
              hai să testăm o predicție. Înainte de fiecare pas, identifici ce
              crezi că se va întâmpla.. dacă ating cutia cu păianjenul, voi avea
              un atac de panică și nu voi putea suporta.
            </p>
            <p>
              Apoi faci pasul. Și verifici: s-a adeverit predicția? De obicei,
              nu. Și acea verificare e mai puternică decât orice explicație
              rațională. Nu te conving eu că ești în siguranță. Te convingi
              singur, prin experiență directă.
            </p>
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            De ce medicamentele nu sunt prima opțiune
          </h3>
          <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
            Fobia de animale, ca toate fobiile specifice, se tratează prin
            psihoterapie, nu prin medicamente. Benzodiazepinele pot reduce
            temporar anxietatea, dar blochează exact procesul de învățare care
            face expunerea să funcționeze. Dacă iei un calmant înainte de a te
            expune la animal, creierul tău nu învață că animalul e sigur. Învață
            că a supraviețuit doar pentru că a luat pastila.
          </p>

          <div className="mt-8 rounded-md border-l-4 border-lp-cyan bg-lp-navy p-8 md:p-10">
            <p className="text-base leading-relaxed text-white/90 md:text-lg">
              Există evidențe că o singură sesiune de expunere prelungită (2-3
              ore) poate fi suficientă pentru fobia de animale, cu rate de
              succes de 75-90%.
            </p>
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
                title: "Construiește-ți propria ierarhie",
                text: "Scrie pe hârtie 10 situații legate de animalul de care te temi, de la cea mai puțin înfricoșătoare la cea mai grea. Fii specific: nu câini în general, ci un câine mic, în lesă, la 5 metri. Apoi începe de la prima treaptă. Rămâi acolo până frica scade, chiar și puțin. Nu trece la următoarea până nu o stăpânești pe aceasta.",
              },
              {
                nr: "2",
                title: "Expunerea la imagini",
                text: "Caută imagini cu animalul de care te temi. Începe cu desene animate, care sunt mai puțin realiste. Apoi treci la fotografii. Apoi la videoclipuri. La fiecare pas, observă ce simți în corp. Nu încerca să oprești senzația. Doar observ-o. Notează cât durează până scade. Data viitoare, va scădea mai repede.",
              },
              {
                nr: "3",
                title: "Identifică-ți predicțiile",
                text: "Scrie pe hârtie, cât mai specific: ce cred eu că se va întâmpla dacă stau lângă un câine? Forțează-te să fii precis.. mă va mușca, voi face un atac de panică, dezgustul nu va trece niciodată. Apoi întreabă-te: câte din aceste predicții s-au adeverit vreodată? Și dacă s-au adeverit, cât de grav a fost de fapt?",
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
              "Construirea unei ierarhii de expunere personalizate, adaptate exact animalului și fricilor tale",
              "Ghidarea ta prin trepte pe care singur le-ai evita sau le-ai sări",
              "Identificarea comportamentelor de siguranță pe care le folosești fără să realizezi",
              "Lucrul cu dezgustul, nu doar cu frica, atunci când dezgustul e emoția dominantă",
              "Explorarea stratului mai profund.. ce înseamnă animalul acesta pentru tine",
            ].map((text) => (
              <div key={text} className="flex items-start gap-3 rounded-md border border-lp-border bg-white p-5">
                <span aria-hidden className="mt-0.5 shrink-0 text-lg leading-none text-lp-cyan-dark">→</span>
                <p className="text-base leading-relaxed text-lp-navy md:text-[17px]">{text}</p>
              </div>
            ))}
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
              Ce vor să știe oamenii despre fobia de animale.
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
              { href: "/tipuri/fobii-specifice/fobie-de-sange", label: "Fobia de sânge și ace" },
              { href: "/tipuri/fobii-specifice/fobie-de-zbor", label: "Fobia de zbor" },
              { href: "/tipuri/fobii-specifice/fobie-de-inaltime", label: "Fobia de înălțimi" },
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
            Fobia de animale se{" "}
            <span className="bg-lp-yellow px-2 text-lp-navy">tratează</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-[680px] text-lg leading-relaxed text-white/85 md:text-xl">
            Are una dintre cele mai mari rate de succes din psihoterapie. Nu e
            ceva cu care trebuie să trăiești.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <Link
              href="/programare?din=fobie-de-animale"
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
