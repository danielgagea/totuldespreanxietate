"use client";

import Link from "next/link";
import { useState } from "react";

/* ============================================================
   CLAUSTROFOBIE — Pagină completă (lp-* design system)
   ============================================================ */

const FAQS: Array<{ q: string; a: React.ReactNode }> = [
  {
    q: "Pot face RMN cu claustrofobie?",
    a: (
      <>
        <p>
          Da. Și e important să nu amâni investigațiile medicale din cauza
          claustrofobiei. Mai multe lucruri pot ajuta.
        </p>
        <p className="mt-3">
          Spune-i echipei medicale că ai claustrofobie. Nu e prima oară când aud
          asta, și au protocoale pentru asta. Cere un aparat de RMN deschis (open
          MRI), dacă există în zonă. Exersează respirația controlată în zilele
          dinaintea investigației.
        </p>
        <p className="mt-3">
          Aparatul de RMN are ventilație activă și comunicare permanentă cu
          operatorul, care te poate auzi și îți poate vorbi pe tot parcursul. Nu
          ești singur acolo, chiar dacă senzația e că ești.
        </p>
      </>
    ),
  },
  {
    q: "Claustrofobia se agravează cu vârsta?",
    a: (
      <p>
        Nu e o regulă. Dar fără tratament, evitarea tinde să se extindă în
        timp. Ceea ce a început ca nu iau liftul mic poate ajunge, în câțiva
        ani, la niciun lift, niciun metrou, nicio cameră cu ușa închisă. Nu e
        că frica crește, ci că strategia de evitare își urmează logica
        naturală. Cu cât eviți mai mult, cu atât teritoriul sigur se
        micșorează. Cu tratament, tendința se inversează.
      </p>
    ),
  },
  {
    q: "E periculos să rămâi blocat în lift?",
    a: (
      <p>
        Din punct de vedere al siguranței fizice, nu. Lifturile moderne au
        multiple sisteme de siguranță, ventilație pasivă (aerul circulă prin
        goluri structurale) și buton de alarmă conectat la un dispecerat.
        Blocajele se rezolvă de obicei în 15-30 de minute. Cantitatea de aer
        dintr-un lift e suficientă pentru ore întregi. Pericolul pe care îl
        simți nu vine din situație, ci din predicția pe care o face creierul
        tău în acea situație.
      </p>
    ),
  },
  {
    q: "De ce mi se face rău în metrou dar nu în mașină?",
    a: (
      <p>
        Pentru că cele două frici din claustrofobie (restricție și sufocare) se
        activează diferit în funcție de context. În mașină, tu ai control. Poți
        opri oricând, poți deschide geamul, poți ieși. În metrou, nu ai niciuna
        din aceste opțiuni. Ușile se deschid când decide trenul, nu când decizi
        tu. Dacă frica ta dominantă e cea de restricție, metroul o activează
        puternic, iar mașina nu.
      </p>
    ),
  },
  {
    q: "De ce s-a agravat claustrofobia mea în timp, deși nu s-a întâmplat nimic?",
    a: (
      <p>{`Tocmai pentru că nu s-a întâmplat nimic. Fiecare act de evitare confirmă creierului tău că pericolul era real. "Am evitat liftul și sunt bine, deci liftul chiar era periculos." Logica e circulară, dar pentru creier e convingătoare. Lista lucrurilor evitate se lungește fără ca tu să observi, pentru că fiecare extensie pare rezonabilă în momentul în care o faci.`}</p>
    ),
  },
];

const REFERENCES = [
  "Antony, M. M., Craske, M. G., & Barlow, D. H. (2006). Mastering Your Fears and Phobias: Therapist Guide (2nd ed.). Oxford University Press.",
  "Clark, D. A., & Beck, A. T. (2010). Cognitive Therapy of Anxiety Disorders: Science and Practice. Guilford Press.",
  "Rachman, S., & Taylor, S. (1993). Analyses of claustrophobia. Journal of Anxiety Disorders, 7(4), 281-291.",
  "Öst, L. G. (1989). One-session treatment for specific phobias. Behaviour Research and Therapy, 27(1), 1-7.",
  "Craske, M. G., Treanor, M., Conway, C. C., Zbozinek, T., & Vervliet, B. (2014). Maximizing exposure therapy: An inhibitory learning approach. Behaviour Research and Therapy, 58, 10-23.",
  "Radomsky, A. S., Rachman, S., et al. (2001). The Claustrophobia Questionnaire. Journal of Anxiety Disorders, 15(4), 287-297.",
  "Andrews, G., et al. (2003). The Treatment of Anxiety Disorders (2nd ed.). Cambridge University Press.",
  "Gabbard, G. O. (2007). Tratat de Psihiatrie Psihodinamică. Editura Trei.",
  "Wolfe, B. E. (2005). Understanding and Treating Anxiety Disorders. American Psychological Association.",
  "Freud, S. (1926). Inhibitions, Symptoms and Anxiety. Standard Edition, Vol. 20.",
];

export default function ClaustrofobiePage() {
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
            <span className="text-lp-navy">Claustrofobie</span>
          </nav>

          <p className="mt-6 text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Ghid complet 2026
          </p>
          <h1 className="mt-4 font-work text-4xl font-bold leading-[1.05] tracking-tight text-lp-navy md:text-5xl lg:text-6xl">
            <span className="lp-yellow-underline">Claustrofobie</span>.
          </h1>
          <p className="mt-5 text-sm text-lp-mute-soft">
            De{" "}
            <Link href="/despre-daniel" className="font-semibold text-lp-navy underline-offset-2 hover:underline">
              Daniel Gagea
            </Link>
            , psiholog clinician, psihoterapeut
          </p>

          <p className="mt-6 text-sm text-lp-mute-soft">
            Ai un RMN programat și deja te gândești cum să-l amâni?{" "}
            <Link href="#ce-poti-face-acum" className="font-semibold text-lp-cyan-dark underline-offset-2 hover:underline">
              Mergi direct la Ce poți face acum
            </Link>
          </p>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-lp-mute md:text-xl">
            <p>
              Ușa liftului se închide. În primele două secunde nu simți nimic.
              Apoi apare. O strângere în piept, de parcă cineva a pus o
              greutate pe tine. Respirația se accelerează. Gâtul se strânge.
              Simți că aerul nu mai ajunge. Pereții par că se apropie. Mintea
              îți spune un singur lucru, foarte tare: trebuie să ieși. Acum.
            </p>
            <p>
              Apesi pe buton. Ușa se deschide. Și totul trece. În câteva
              secunde ești bine. Rămâi cu inima accelerată, cu un gust de
              rușine în gură, și cu întrebarea pe care ți-o pui de fiecare
              dată.. ce e în neregulă cu mine?
            </p>
            <p>
              <strong className="text-lp-navy">
                Dacă te recunoști, nu ești slab și nu exagerezi.
              </strong>{" "}
              Ce trăiești se numește claustrofobie. Și în acest ghid vei
              înțelege exact de ce corpul tău reacționează așa, ce se întâmplă
              de fapt când simți că rămâi fără aer, și ce funcționează ca
              tratament.
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
            Ce este claustrofobia.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Claustrofobia este o frică intensă și persistentă față de spațiile
              închise sau restrânse, disproporționată față de pericolul real,
              care duce la evitare activă și afectează viața de zi cu zi. Face
              parte din subtipul situațional al fobiilor specifice și afectează
              aproximativ 2-5% din populație.
            </p>
            <p>
              Debutul apare frecvent în jurul vârstei de 25 de ani, mai târziu
              decât majoritatea celorlalte fobii, deși poate apărea și după o
              experiență negativă concretă, de exemplu un blocaj într-un lift
              sau o experiență stresantă într-un spațiu mic.
            </p>
            <p>
              Dar claustrofobia nu e doar frica de spații mici. Și tocmai asta
              face diferența între a o înțelege și a rămâne prizonier în ea.
            </p>
            <p>
              Unii oameni cu claustrofobie nu au nicio problemă într-o cameră
              mică, dar intră în panică într-un lift. Alții tolerează liftul dar
              nu suportă un aparat de RMN. Alții nu au nicio problemă cu niciunul
              din acestea, dar nu pot purta o cravată strânsă pe gât sau nu pot
              dormi sub o pătură grea.
            </p>
            <p>
              Asta se întâmplă pentru că claustrofobia nu e o singură frică.
              Sunt două.
            </p>
          </div>
        </div>
      </section>

      {/* DOUĂ FRICI */}
      <section id="doua-frici" className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Anatomia fobiei
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Două frici, nu una: restricție și sufocare.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            Aici e cheia întregii povești. Dacă înțelegi asta, înțelegi de ce
            claustrofobia ta arată diferit de a altcuiva.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-md border-t-4 border-lp-cyan-dark bg-lp-bg p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-lp-cyan-dark">Frica de restricție</p>
              <p className="mt-3 text-base leading-relaxed text-lp-navy md:text-[17px]">
                Senzația că nu poți ieși, că ești captiv, că nu ai control
                asupra mișcării tale. E frica de a fi blocat, prins într-un loc
                din care nu poți pleca când vrei.
              </p>
              <p className="mt-3 text-sm text-lp-mute">
                Situații tipice: liftul, metroul, avionul, sala de spectacol în mijlocul rândului
              </p>
            </div>
            <div className="rounded-md border-t-4 border-lp-yellow bg-lp-bg p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-lp-mute">Frica de sufocare</p>
              <p className="mt-3 text-base leading-relaxed text-lp-navy md:text-[17px]">
                Convingerea că aerul se va termina, că nu poți respira, că
                pereții se strâng și oxigenul dispare.
              </p>
              <p className="mt-3 text-sm text-lp-mute">
                Situații tipice: RMN-ul, o debara, un tunel, o mască pe față
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              La fiecare persoană, proporția e diferită. Unii au predominant
              frica de restricție. Alții au predominant frica de sufocare. Mulți
              le au pe amândouă, dar într-un raport diferit.
            </p>
            <p>
              De aceea doi oameni cu claustrofobie pot avea experiențe complet
              diferite. Cel cu frica de restricție se teme cel mai tare de lift
              și de metrou. Cel cu frica de sufocare se teme cel mai tare de RMN
              și de spații mici și închise. Cel care le are pe amândouă evită
              totul.
            </p>
          </div>
        </div>
      </section>

      {/* SENZAȚIA DE SUFOCARE */}
      <section id="senzatia-de-sufocare" className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Paradoxul respirației
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Nu rămân fără aer, dar corpul meu crede că da.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Cea mai frecventă senzație în claustrofobie e senzația de
              sufocare. Simți că nu mai poți respira. Că gâtul se strânge. Că
              aerul nu mai intră.
            </p>
            <p>
              Și totuși, aerul e acolo. Poți respira. Poți vorbi. Dacă cineva
              ți-ar măsura oxigenul din sânge în acel moment, ar fi perfect
              normal.
            </p>
            <p>
              Ce se întâmplă de fapt e opusul a ceea ce crezi. Nu respiri prea
              puțin. <strong className="text-lp-navy">Respiri prea mult.</strong>
            </p>
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Hiperventilația: paradoxul claustrofobiei
          </h3>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Când frica se activează, corpul tău accelerează respirația.. e
              parte din răspunsul de luptă sau fugi, pregătire pentru efort
              fizic. Dar tu nu fugi și nu lupți. Stai pe loc, într-un lift. Și
              continui să respiri rapid.
            </p>
            <p>
              Rezultatul e hiperventilația. Scoți prea mult dioxid de carbon din
              sânge. Iar scăderea dioxidului de carbon produce exact senzațiile
              de care te temi: senzația de lipsă de aer, amețeală, furnicături
              în degete și buze, senzație de strângere în gât.{" "}
              <strong className="text-lp-navy">
                Senzația că nu poți respira nu e cauzată de lipsa de aer, ci de
                excesul de respirație.
              </strong>
            </p>
          </div>

          <div className="mt-8 rounded-md border-l-4 border-lp-cyan bg-lp-navy p-8 md:p-10">
            <p className="text-base leading-relaxed text-white/90 md:text-lg">
              Cercul vicios: frica produce hiperventilație. Hiperventilația
              produce senzația de sufocare. Senzația de sufocare confirmă frica.
              Frica accelerează și mai mult respirația.
            </p>
          </div>

          <p className="mt-8 text-base leading-relaxed text-lp-mute md:text-lg">
            Același mecanism funcționează și în{" "}
            <Link href="/tipuri/atac-de-panica" className="font-semibold text-lp-cyan-dark underline-offset-2 hover:underline">
              atacul de panică
            </Link>
            .. dacă ai experimentat și atacuri de panică în spații închise, nu e
            o coincidență. Hiperventilația e adesea motorul comun.
          </p>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Globus: nodul din gât care nu e nod
          </h3>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Mulți oameni cu claustrofobie descriu o senzație specifică.. un
              nod în gât, o strângere, ca și cum ceva blochează calea aerului.
              Această senzație se numește globus și e o manifestare a
              anxietății. Tensiunea musculară din zona gâtului, provocată de
              starea de alertă, creează senzația fizică reală că ceva e blocat
              acolo.
            </p>
            <p>
              Nu e imaginație. Senzația e reală. Dar cauza ei e tensiunea
              musculară, nu o obstrucție a căilor respiratorii.
            </p>
            <p>
              Când un pacient îmi spune că simte că nu poate respira, ce simte e
              autentic. Dar senzația vine din mecanismul anxietății, nu din
              lipsa de aer. Și înțelegerea asta, deși nu oprește senzația, îi ia
              puterea de a convinge.
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
            Cum te menții singur în claustrofobie fără să știi.
          </h2>

          <h3 className="mt-10 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Catalogul claustrofobiei
          </h3>
          <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
            Acestea sunt lucrurile pe care le faci ca să faci față. Fiecare în
            parte pare rezonabil. Dar pune-le pe toate la un loc și vei vedea
            costul real:
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Evitarea lifturilor, chiar și pentru 10 etaje",
              "Statul lângă ușă în orice încăpere",
              "Verificarea dacă ușile se deschid înainte de a intra",
              "Evitarea metroului, tunelurilor, avioanelor",
              "Fereastra deschisă obligatoriu, și iarna",
              "Refuzul hainelor strâmte pe gât",
              "Evitarea mulțimilor dense",
              "Căutarea ieșirii de urgență imediat ce intri",
              "Telefonul în mână permanent",
              "Amânarea sau refuzul investigațiilor RMN",
            ].map((s) => (
              <span key={s} className="rounded-md border border-lp-border bg-lp-bg px-4 py-2 text-sm text-lp-navy md:text-[15px]">
                {s}
              </span>
            ))}
          </div>

          <div className="mt-8 rounded-md border-l-4 border-lp-yellow bg-lp-bg p-6 md:p-8">
            <p className="text-base leading-relaxed text-lp-navy md:text-lg">
              Un RMN amânat înseamnă un diagnostic ratat. Un lift evitat poate
              însemna o promovare la care nu ajungi. Metroul evitat înseamnă ore
              pierdute în trafic, zilnic, ani de zile.
            </p>
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Strategiile tale de coping sunt probabil evitare deghizată
          </h3>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Stai lângă ușă ca să ai aer? E un comportament de siguranță.
              Verifici ieșirile? Un ritual de scanare. Ții telefonul în mână la
              caz? O plasă de siguranță.
            </p>
            <p>
              Testul e simplu: ai putea sta în acel spațiu fără aceste
              comportamente? Dacă răspunsul e nu, atunci nu ai depășit frica. Ai
              găsit o modalitate de a coexista cu ea. Iar comportamentele de
              siguranță împiedică exact învățarea care ți-ar reduce frica.
            </p>
            <p>
              O persoană care ia liftul dar stă lângă butonul de urgență, cu
              telefonul în mână, numărând secundele, nu învață niciodată că
              liftul e sigur. Creierul ei învață că a supraviețuit doar pentru
              că a stat lângă buton. Și data viitoare, frica e la fel.
            </p>
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Cum se extinde evitarea
          </h3>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              La început evitai doar liftul cel mic. Apoi orice lift. Apoi
              metroul. Apoi avioanele. Apoi camerele cu ușa închisă. Apoi baia
              cu ușa închisă. Teritoriul sigur se micșorează constant, iar tu
              nici nu observi, pentru că fiecare extensie pare logică în
              momentul în care o faci.
            </p>
            <p>
              Întreabă-te sincer: lista lucrurilor pe care le eviți e mai lungă
              sau mai scurtă decât acum un an? Dacă e mai lungă, frica ta
              crește, nu stagnează.
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
            Ce vrea să spună psihicul prin claustrofobie.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/85 md:text-lg">
            Până aici am vorbit despre cum funcționează claustrofobia. Acum
            vreau să vorbim despre de ce există. Ce încearcă psihicul tău să
            comunice prin acest simptom.
          </p>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-white md:text-3xl">
            Spațiul închis ca metaforă
          </h3>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-white/85 md:text-lg">
            <p>
              Freud a observat ceva esențial despre claustrofobie: spațiul
              închis din care nu poți ieși e adesea o metaforă pentru o
              captivitate psihică. Nu ești prins într-un lift. Ești prins în
              ceva ce nu poți numi.
            </p>
            <p>
              Poate e o relație din care simți că nu poți pleca. Poate e o
              situație profesională care te sufocă. Poate e un rol pe care l-ai
              acceptat și în care nu te mai regăsești. Poate e un pattern de
              dependență care te ține legat de cineva sau de ceva.
            </p>
            <p>
              Psihicul face o mutare specifică: ia senzația de captivitate
              interioară și o mută pe un obiect exterior, concret. Un lift. Un
              tunel. Un aparat de RMN. Obiectul exterior poate fi evitat.
              Captivitatea interioară nu.
            </p>
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-white md:text-3xl">
            Cazul Jim
          </h3>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-white/85 md:text-lg">
            <p>
              Jim avea 35 de ani și se temea de avioane, metrouri și lifturi.
              Toate aveau un numitor comun pe care Jim nu-l conștientiza
              inițial: erau situații în care se simțea captiv, prins, fără
              ieșire.
            </p>
            <p>
              Prin terapie, s-a descoperit că tema prins fără ieșire nu era doar
              despre transportul public. Rădăcina era în relația cu mama sa, o
              femeie dominantă. Jim învățase de mic că nu își poate exprima
              furia sau dezacordul fără să fie umilit. Când mama lua o decizie,
              nu exista contestație.
            </p>
            <p>
              Totul ducea înapoi la vârsta de 8 ani. Mama sa l-a mințit despre
              destinația unui zbor. Jim a fost furios dar complet neputincios.
              Când ușile avionului s-au închis, a avut primul atac de panică.
              Prins fără ieșire era tema vieții lui.
            </p>
            <p>
              Aceeași senzație de captivitate apărea când o relație romantică
              devenea prea intimă. Jim se temea de angajament, de apropierea
              emoțională, de momentul în care simțea că nu mai poate ieși fără
              consecințe. Ușile care se închid în lift erau aceleași cu ușile
              care se închid când spui te iubesc.
            </p>
            <p>
              Nu spun că orice claustrofobie ascunde o relație sufocantă. Dar
              merită să te întrebi: unde altundeva în viața mea mă simt prins?
              Unde simt că nu pot ieși?
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
            Expunere graduală: cum arată concret.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            Claustrofobia, ca toate fobiile specifice, răspunde foarte bine la
            tratament. Fobiile specifice sunt cea mai tratabilă condiție din
            psihologia clinică, cu 80-95% rată de succes, adesea în doar câteva
            ședințe.
          </p>

          <p className="mt-8 text-base leading-relaxed text-lp-mute md:text-lg">
            Tratamentul nu înseamnă să fii închis într-un lift și forțat să
            suporți. Înseamnă un progres treptat, calibrat, în care tu
            controlezi fiecare pas:
          </p>
          <div className="mt-6 rounded-md border border-lp-border bg-lp-bg p-6">
            <ol className="list-decimal space-y-3 pl-6 text-base leading-relaxed text-lp-navy md:text-[17px]">
              {[
                "Stai într-o cameră mare cu ușa închisă",
                "Stai într-o cameră mică cu ușa închisă",
                "Stai în lift un etaj, cu altcineva",
                "Stai în lift un etaj, singur",
                "Stai în lift 5 etaje, singur",
                "Stai într-o cabină de probă cu perdea trasă",
                "Stai într-o mașină cu geamurile ridicate, motor oprit",
                "Stai într-un spațiu mic (baie, debara) cu ușa închisă, 10 minute",
                "Stai într-un tunel sau faci un RMN (simulat sau real)",
              ].map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
          </div>
          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            La fiecare treaptă, rămâi în situație până când frica scade de la
            sine. Nu pleci la primul semn de disconfort. Stai. Și descoperi ceva
            pe care evitarea nu te lasă niciodată să descoperi: frica are un
            vârf, iar după vârf, coboară.
          </p>
        </div>
      </section>

      {/* CURBA ANXIETĂȚII */}
      <section className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <h3 className="font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            De ce contează să rămâi
          </h3>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Când intri în liftul de care te temi, frica crește rapid. Atinge
              un vârf în primele 10-15 minute. În acel moment totul în tine urlă
              să ieși. Dacă ieși, frica scade instant, dar s-a întărit. Dacă
              rămâi, se întâmplă ceva pe care nu l-ai crezut posibil: frica
              începe să scadă de la sine. Fără ca tu să faci nimic special.
            </p>
            <p>
              Corpul tău nu poate menține acel nivel de activare la infinit.
              După 20-30 de minute, senzațiile se domolesc. Și în acel moment,
              creierul tău învață ceva nou: am stat aici și nu s-a întâmplat
              nimic, pot supraviețui asta.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-md border border-lp-border bg-white p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-lp-cyan-dark">Supra-expunerea</p>
              <p className="mt-3 text-base leading-relaxed text-lp-navy md:text-[17px]">
                Nu e suficient să tolerezi un etaj de lift. Mergi la 10. Stai 30
                de minute, nu 2. Cu cât ești mai departe de linia de start, cu
                atât riscul de revenire e mai mic.
              </p>
            </div>
            <div className="rounded-md border border-lp-border bg-white p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-lp-cyan-dark">Predictibilitatea</p>
              <p className="mt-3 text-base leading-relaxed text-lp-navy md:text-[17px]">
                Dacă lucrezi cu cineva, cere-i să anunțe fiecare pas înainte.
                Surprizele sunt contraproductive. Expunerea nu e un test de
                curaj. E un experiment controlat.
              </p>
            </div>
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Expunerea interoceptivă: frica de senzațiile din corp
          </h3>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Multe persoane cu claustrofobie nu se tem doar de spațiul mic. Se
              tem de senzația de sufocare pe care spațiul mic o produce. De
              aceea, tratamentul include și expunerea la senzațiile corporale
              temute, separat de situația reală.
            </p>
            <p>
              Un exercițiu specific: respirația prin pai timp de două minute.
              Produce exact senzația de lipsă de aer de care te temi. Dar
              într-un context complet sigur. Când descoperi că poți tolera acea
              senzație fără să ți se întâmple nimic, senzația își pierde o parte
              din putere.
            </p>
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            De ce medicamentele nu sunt prima opțiune
          </h3>
          <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
            Claustrofobia, ca toate fobiile specifice, se tratează prin
            psihoterapie, nu prin medicamente. Benzodiazepinele pot reduce
            temporar anxietatea, dar blochează exact procesul de învățare care
            face expunerea să funcționeze. Dacă iei un calmant înainte de a
            intra în lift, creierul tău nu învață că liftul e sigur. Învață că a
            supraviețuit doar pentru că a luat pastila.
          </p>

          <div className="mt-8 rounded-md border-l-4 border-lp-cyan bg-lp-navy p-8 md:p-10">
            <p className="text-base leading-relaxed text-white/90 md:text-lg">
              Există evidențe că o singură sesiune de expunere prelungită (2-3
              ore) poate fi suficientă pentru claustrofobie, cu rate de succes
              de 75-90%.
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
                title: "Respirația controlată",
                text: "Hiperventilația produce senzația de sufocare care alimentează frica. Când simți furnicături, amețeală sau lipsă de aer, încetinește deliberat respirația. Inspiră lent pe nas în 4 secunde, ține 2 secunde, expiră lent pe gură în 6 secunde. Nu respira adânc, ci lent. Scopul e să readuci dioxidul de carbon la normal, nu să bagi mai mult aer.",
              },
              {
                nr: "2",
                title: "Identifică-ți predicțiile",
                text: "Scrie pe hârtie, cât mai specific: ce cred eu că se va întâmpla dacă rămân în lift? Nu accepta răspunsuri vagi. Forțează-te să fii precis.. voi rămâne fără aer, liftul se va bloca și nimeni nu va veni. Apoi întreabă-te: câte din aceste predicții s-au adeverit vreodată?",
              },
              {
                nr: "3",
                title: "Scannerul de siguranță",
                text: "Data viitoare când ești într-un spațiu care te neliniștește, în loc să scanezi mediul pentru pericole (ceea ce faci automat), scanează deliberat pentru semnale de siguranță. Unde e ieșirea? Funcționează. Sunt alți oameni aici? Da, și sunt relaxați. Am aer? Da, respir, vorbesc, sunt bine.",
              },
              {
                nr: "4",
                title: "Micro-expuneri zilnice",
                text: "Alege o situație de care te temi ușor, nu cea mai grea. Poate e liftul de la birou un etaj. Poate e baia cu ușa închisă 5 minute. Fă-o zilnic. Rămâi până când simți că frica a scăzut, chiar și puțin. Și fă-o fără comportamente de siguranță. Nu sta lângă buton. Nu ține telefonul în mână. Doar stai.",
              },
              {
                nr: "5",
                title: "Expunere interoceptivă acasă",
                text: "Respiră prin pai timp de 60 de secunde. Vei simți exact senzația de lipsă de aer de care te temi în spații închise. Dar ești acasă, în siguranță. Observă cum crește, atinge un vârf, și apoi coboară. Repetă de 3 ori. Scopul nu e să te simți confortabil. Scopul e să descoperi că senzația trece.",
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

      {/* CÂND MERITĂ UN SPECIALIST */}
      <section className="bg-lp-bg px-6 py-20 md:py-24">
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
              "Construirea unei ierarhii de expunere personalizate, adaptate exact fricilor tale",
              "Ghidarea ta prin trepte pe care singur le-ai evita",
              "Identificarea comportamentelor de siguranță pe care le folosești fără să realizezi",
              "Expunerea interoceptivă ghidată, pentru frica de senzațiile corporale",
              "Explorarea stratului mai profund.. ce înseamnă captivitatea pentru tine",
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
              Ce vor să știe oamenii despre claustrofobie.
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
              { href: "/tipuri/fobii-specifice/fobie-de-sange", label: "Fobia de sânge și ace" },
              { href: "/tipuri/fobii-specifice/fobie-de-zbor", label: "Fobia de zbor" },
              { href: "/tipuri/fobii-specifice/fobie-de-inaltime", label: "Fobia de înălțimi" },
              { href: "/tipuri/fobii-specifice/fobie-de-animale", label: "Fobia de animale" },
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
            Claustrofobia se{" "}
            <span className="bg-lp-yellow px-2 text-lp-navy">tratează</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-[680px] text-lg leading-relaxed text-white/85 md:text-xl">
            Are una dintre cele mai mari rate de succes din psihoterapie. Nu e
            ceva cu care trebuie să trăiești.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <Link
              href="/programare?din=claustrofobie"
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
