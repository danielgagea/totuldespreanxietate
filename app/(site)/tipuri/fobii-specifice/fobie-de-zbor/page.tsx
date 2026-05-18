"use client";

import Link from "next/link";

/* ============================================================
   FOBIA DE ZBOR — Pagină completă (lp-* system)
   ============================================================ */

const FAQS: Array<{ q: string; a: React.ReactNode }> = [
  {
    q: "Pot muri de frică în avion?",
    a: (
      <>
        <p>
          Nu. Senzațiile pe care le trăiești în timpul unui episod de panică nu
          sunt periculoase medical. Inima care bate repede, dificultatea de a
          respira, senzația de leșin.. toate sunt răspunsuri normale ale
          sistemului nervos simpatic.
        </p>
        <p className="mt-3">
          Corpul tău nu poate susține acel nivel de activare mai mult de 20 de
          minute. Chiar dacă nu faci nimic, chiar dacă nu folosești nicio
          tehnică, panica va scădea de la sine. E o limitare fiziologică, nu o
          decizie pe care trebuie s-o iei tu.
        </p>
        <p className="mt-3">
          Nimeni nu a murit de panică într-un avion. Senzația că voi muri e
          parte din panică, nu un semnal real de pericol.
        </p>
      </>
    ),
  },
  {
    q: "De ce mi-e frică de avion dar nu de mașină?",
    a: (
      <>
        <p>
          Pentru că frica nu e despre probabilitatea reală a pericolului. E
          despre percepția controlului. În mașină, tu conduci. Ai volanul. Poți
          opri oricând. Poți schimba direcția. Ai iluzia controlului total,
          chiar dacă statistic mașina e mult mai periculoasă.
        </p>
        <p className="mt-3">
          În avion, nu ai niciun control. Nu poți opri. Nu poți ieși. Nu poți
          decide nimic. Și această neputință activează sistemul de alarmă mult
          mai puternic decât orice probabilitate statistică.
        </p>
        <p className="mt-3">
          E aceeași logică care explică de ce mulți oameni se simt mai în
          siguranță conducând decât fiind pasageri. Nu e despre pericol, ci
          despre control.
        </p>
      </>
    ),
  },
  {
    q: "Am zburat de 100 de ori cu alcool și pastile. De ce nu mi-a trecut?",
    a: (
      <>
        <p>
          Pentru că alcoolul și pastilele sunt comportamente de siguranță. Ele
          te ajută să supraviețuiești zborul, dar împiedică creierul să învețe
          că poți zbura fără ele.
        </p>
        <p className="mt-3">
          De fiecare dată când zbori cu ajutor extern, creierul trage
          concluzia: am supraviețuit pentru că am luat pastila. Nu: am
          supraviețuit pentru că zborul e sigur. Și fobia rămâne intactă,
          indiferent de câte zboruri faci.
        </p>
        <p className="mt-3">
          Tratamentul eficient presupune, la un moment dat, să zbori fără
          aceste ajutoare. Nu de la început, nu brusc, ci treptat, în cadrul
          unei ierarhii de expunere. Dar fără acest pas, 100 de zboruri sau
          1000 nu vor schimba nimic.
        </p>
      </>
    ),
  },
  {
    q: "Fobia de zbor se moștenește?",
    a: (
      <>
        <p>
          Predispoziția, da. Dacă un părinte are anxietate sau fobii, copilul
          are o vulnerabilitate genetică mai mare. Dar vulnerabilitatea nu e
          destin. Mulți oameni cu predispoziție genetică nu dezvoltă niciodată
          o fobie.
        </p>
        <p className="mt-3">
          Pe lângă genetică, modelul parental contează enorm. Un copil care
          vede un părinte speriat de avioane învață, prin observare, că
          avioanele sunt periculoase. Această învățare poate fi la fel de
          puternică ca o experiență directă.
        </p>
        <p className="mt-3">
          Vestea bună: fobia de zbor se poate trata indiferent de cum a
          apărut.. genetic, prin observare, printr-un zbor turbulent sau
          aparent din senin. Mecanismul de menținere e același, și el e cel pe
          care îl vizează tratamentul.
        </p>
      </>
    ),
  },
  {
    q: "Trebuie neapărat să zbor ca să scap de fobie?",
    a: (
      <>
        <p>
          Nu de la început. Tratamentul începe mult înainte de zbor. Expunere
          imaginală (vizualizarea zborului în detaliu), vizite la aeroport fără
          să zbori, simulatoare de zbor, realitate virtuală.. toate sunt pași
          valizi și eficienți.
        </p>
        <p className="mt-3">
          Zborul real vine treptat, ca ultimul pas dintr-o ierarhie în care ai
          construit deja rezistență și încredere. Și când ajungi acolo, nu va
          fi un salt în gol. Va fi o continuare naturală a ceea ce ai practicat
          deja.
        </p>
        <p className="mt-3">
          Mulți oameni descoperă că, ajunși la pasul zborului real, anxietatea
          e mult mai mică decât se așteptau. Pentru că nu mai e necunoscut. L-au
          trăit deja de zeci de ori în imaginație și în simulare.
        </p>
      </>
    ),
  },
];

const REFERENCES = [
  "Antony, M. M., Craske, M. G., & Barlow, D. H. (2006). Mastering Your Fears and Phobias: Therapist Guide (2nd ed.). Oxford University Press.",
  "Clark, D. A., & Beck, A. T. (2010). Cognitive Therapy of Anxiety Disorders: Science and Practice. Guilford Press.",
  "Andrews, G., Creamer, M., Crino, R., Hunt, C., Lampe, L., & Page, A. (2003). The Treatment of Anxiety Disorders: Clinician Guides and Patient Manuals (2nd ed.). Cambridge University Press.",
  "Wolpe, J. (1958). Psychotherapy by Reciprocal Inhibition. Stanford University Press.",
  "Gabbard, G. O. (2007). Tratat de Psihiatrie Psihodinamică. Editura Trei.",
  "Freud, S. (1926). Inhibitions, Symptoms and Anxiety. Standard Edition, Vol. 20.",
  "Rothbaum, B. O., Hodges, L., Smith, S., Lee, J. H., & Price, L. (2000). A controlled study of virtual reality exposure therapy for the fear of flying. Journal of Consulting and Clinical Psychology, 68(6), 1020-1026.",
  "Craske, M. G., Treanor, M., Conway, C. C., Zbozinek, T., & Vervliet, B. (2014). Maximizing exposure therapy: An inhibitory learning approach. Behaviour Research and Therapy, 58, 10-23.",
  "Öst, L. G. (1989). One-session treatment for specific phobias. Behaviour Research and Therapy, 27(1), 1-7.",
];

export default function FobieDeZborPage() {
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
            <span className="text-lp-navy">Fobia de zbor</span>
          </nav>

          <p className="mt-6 text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Ghid complet 2026
          </p>
          <h1 className="mt-4 font-work text-4xl font-bold leading-[1.05] tracking-tight text-lp-navy md:text-5xl lg:text-6xl">
            Fobia de <span className="lp-yellow-underline">zbor</span>.
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
              Ești în avion. Ușa s-a închis. Auzi motoarele accelerând și simți
              cum ți se strânge stomacul. Mâinile se încleștează pe cotieră.
              Inima bate tot mai tare. Te uiți la ceilalți pasageri și nimeni
              nu pare speriat. Doar tu. Doar tu simți că ceva groaznic urmează
              să se întâmple.
            </p>
            <p>
              Sau poate nu ești în avion. Poate ești acasă, la trei luni
              distanță de zbor, și deja simți acel nod în stomac când te
              gândești. Poate refuzi invitații, amâni vacanțe, găsești scuze
              pentru orice implică un aeroport. Poate ai condus 14 ore ca să
              eviți un zbor de două.
            </p>
            <p>
              Știi că avioanele sunt sigure. Ai citit statisticile. Ai auzit de
              o mie de ori că e mai periculos drumul spre aeroport decât zborul
              în sine. Și totuși.. nu contează. Corpul tău nu ascultă.
            </p>
            <p>
              <strong className="text-lp-navy">
                Nu ești irațional și nu exagerezi.
              </strong>{" "}
              Ce trăiești se numește fobie de zbor (aviofobie). Și în acest
              ghid vei înțelege de ce rațiunea nu ajunge, care sunt cele cinci
              frici combinate din spatele ei, și ce funcționează ca tratament.
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
            Ce este fobia de zbor.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Fobia de zbor (aviofobie) este o frică intensă, persistentă și
              disproporționată legată de călătoria cu avionul, care duce la
              evitare activă și afectează viața de zi cu zi. Face parte din
              subtipul situațional al fobiilor specifice și afectează
              aproximativ 2.5-6.5% din populație.
            </p>
            <p>
              Dar iată ce o face diferită de celelalte fobii:{" "}
              <strong className="text-lp-navy">
                fobia de zbor nu e o singură frică. E o fobie compusă.
              </strong>{" "}
              Un pachet de mai multe frici care se suprapun și se alimentează
              reciproc. Frica de prăbușire, frica de înălțimi, frica de spații
              închise, frica de turbulențe, frica de lipsa controlului. Fiecare
              persoană are o combinație diferită, și asta explică de ce doi
              oameni cu aceeași fobie pot descrie experiențe complet diferite.
            </p>
            <p>
              Debutul apare de obicei în jurul vârstei de 25-30 de ani, mai
              târziu decât majoritatea celorlalte fobii specifice. Mulți oameni
              au zburat fără probleme ani de zile, iar apoi, aparent din senin,
              fobia apare. Uneori e legată de un zbor turbulent, uneori de o
              perioadă de stres din viață, uneori de un eveniment care nu are
              nicio legătură cu avioanele.
            </p>
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Impactul real
          </h3>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Fobia de zbor nu e doar disconfort. E o constrângere care se
              ramifică în toate zonele vieții. Cariera care stagnează pentru că
              refuzi deplasările. Familia pe care n-o vizitezi. Vacanțele care
              nu se întâmplă. Oportunitățile pe care le lași să treacă.
            </p>
            <p>
              Și pe lângă toate acestea, rușinea. Pentru că toți ceilalți par
              să zboare fără probleme. Pentru că e irațional și tu știi asta.
              Pentru că ai 35 de ani și nu poți face ceva ce face un copil de 5
              ani fără să clipească. Rușinea asta e poate mai grea decât fobia
              în sine.
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
            Fobia de zbor nu e doar ce simți în avion. E tot ce faci ca să nu
            ajungi acolo. Iată patru zone pe care le afectează cel mai des:
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Cariera",
                text: "Refuzi promovarea care implică deplasări. Inventezi scuze pentru conferințe. Colegii nu știu de ce nu mergi niciodată la sediul din altă țară. Sau știu, și asta e și mai greu.",
              },
              {
                title: "Familia",
                text: "Părinții sunt în alt oraș, în altă țară. Nepoții cresc fără tine. Nunțile, botezurile, sărbătorile.. le ratezi sau conduci 20 de ore ca să ajungi. Și nimeni nu înțelege de ce nu iei pur și simplu avionul.",
              },
              {
                title: "Relațiile la distanță",
                text: "Partenerul vrea să meargă în vacanță. Tu vrei și tu, dar nu poți. Sau mergi, dar cu pastile și alcool, și vacanța începe cu o zi de recuperare. Relația suferă nu din cauza lipsei de iubire, ci din cauza fobiei.",
              },
              {
                title: "Timpul pierdut",
                text: "Conduci 14 ore în loc să zbori două. Iei trenul 12 ore în loc de un zbor de 90 de minute. Planifici vacanțe doar în locuri accesibile cu mașina. Harta lumii tale se micșorează constant.",
              },
            ].map((card) => (
              <div key={card.title} className="rounded-md border border-lp-border bg-lp-bg p-7">
                <p className="font-work text-lg font-bold text-lp-navy">{card.title}</p>
                <p className="mt-3 text-base leading-relaxed text-lp-mute md:text-[17px]">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CELE 5 FRICI */}
      <section id="cele-5-frici" className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Anatomia fobiei
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Cele 5 frici combinate.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            Fobia de zbor nu e o singură frică cu un singur obiect. E un pachet
            de cinci frici care se suprapun diferit la fiecare persoană. Când
            înțelegi care e combinația ta, înțelegi și de ce tratamentul
            generic nu funcționează.
          </p>

          <div className="mt-8 flex flex-col gap-5">
            {[
              {
                nr: "1",
                title: "Frica de prăbușire",
                text: <>Catastrofizarea pură. Fiecare sunet neobișnuit e semnalul că ceva s-a defectat. Fiecare ușoară schimbare de altitudine confirmă scenariul cel mai rău. Creierul rulează filmul prăbușirii în buclă, cu detalii din ce în ce mai vivide. Nu contează că probabilitatea e de 1 la 10 milioane. Mintea nu lucrează cu probabilități atunci când e în modul de alarmă.</>,
              },
              {
                nr: "2",
                title: "Frica de înălțimi",
                text: <>Componenta de acrofobie. Nu e doar despre cât de sus ești, ci despre lipsa suportului vizual. Pe un munte vezi pământul sub tine. Într-un avion, la 10.000 de metri, nu vezi nimic care să-ți confirme că ești susținut. Și acel gol de sub tine devine insuportabil.</>,
              },
              {
                nr: "3",
                title: "Frica de spații închise",
                text: <>Componenta de <Link href="/tipuri/fobii-specifice/claustrofobie" className="font-semibold text-lp-cyan-dark underline-offset-2 hover:underline">claustrofobie</Link>. Ușa e închisă și nu o poți deschide. Nu poți ieși. Nu poți opri. Nu poți spune că vrei să cobori. Ești blocat într-un tub de metal pentru următoarele ore, și senzația de captivitate poate fi copleșitoare.</>,
              },
              {
                nr: "4",
                title: "Frica de turbulențe",
                text: <>Senzațiile fizice ale turbulențelor activează direct sistemul de alarmă. Stomacul care se ridică, scaunul care se mișcă, avionul care pare că se scufundă. Pentru creierul tău, senzațiile din corp sunt dovada că ceva e în neregulă, chiar dacă turbulențele sunt echivalentul unei denivelări în drum.</>,
              },
              {
                nr: "5",
                title: "Frica de lipsa controlului",
                text: <>Aceasta e adesea cea mai profundă. Nu tu conduci. Nu tu decizi. Nu poți face nimic. Ești complet la mâna altcuiva.. a pilotului, a vremii, a mecanicii. Pentru persoanele care au nevoie să controleze totul în viața lor, această neputință e intolerabilă. Fobia de zbor devine, de fapt, fobia de a nu avea control.</>,
              },
            ].map((fear) => (
              <div key={fear.nr} className="flex items-start gap-5 rounded-md border border-lp-border bg-white p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lp-navy font-bold text-white">
                  {fear.nr}
                </div>
                <div>
                  <p className="font-work text-lg font-bold text-lp-navy">{fear.title}</p>
                  <p className="mt-2 text-base leading-relaxed text-lp-mute md:text-[17px]">{fear.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-md border-l-4 border-lp-cyan bg-white p-6 md:p-8">
            <p className="text-base leading-relaxed text-lp-navy md:text-lg">
              <strong>De ce contează.</strong> Două persoane pot avea aceeași
              fobie de zbor, dar combinații complet diferite. Una se teme de
              prăbușire și turbulențe. Alta se teme de spații închise și lipsa
              controlului. Tratamentul eficient începe cu identificarea
              combinației tale specifice, pentru că fiecare frică se abordează
              diferit.
            </p>
          </div>
        </div>
      </section>

      {/* STATISTICI */}
      <section id="statistici" className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Rațiune vs frică
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            De ce știi că e sigur dar tot ți-e frică.
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {[
              { stat: "1 la 10 mil", label: "probabilitatea unui accident de avion fatal" },
              { stat: "1250x", label: "mai periculos să mergi cu mașina decât cu avionul" },
              { stat: "0", label: "avioane prăbușite din cauza turbulențelor în aviația modernă" },
              { stat: "1500+ ore", label: "de pregătire pentru fiecare pilot comercial" },
            ].map((d) => (
              <div key={d.stat} className="rounded-md border border-lp-border bg-lp-bg p-5 text-center">
                <p className="font-work text-xl font-bold tracking-tight text-lp-navy md:text-2xl">
                  {d.stat}
                </p>
                <p className="mt-2 text-xs leading-snug text-lp-mute md:text-sm">
                  {d.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>Le-ai citit. Le știi. Și tot nu te ajută. De ce?</p>
            <p>
              Pentru că creierul tău procesează riscul pe două sisteme
              diferite. Sistemul rațional lucrează cu numere, probabilități,
              dovezi. Și el știe că zborul e sigur. Dar sistemul emoțional
              lucrează cu imagini, senzații, scenarii catastrofice. Și el nu
              știe să citească statistici.
            </p>
            <p>
              Când ești în avion și simți o turbulență, sistemul emoțional nu
              consultă un tabel cu probabilități. Simte căderea din stomac,
              aude zgomotul, și trage singura concluzie pe care o știe:
              pericol. Iar această concluzie suprascrie orice argument
              rațional.
            </p>
            <p>
              În plus, creierul supraevaluează probabilitatea evenimentelor
              care sunt ușor de imaginat și dramatice. Un accident de avion e
              ușor de imaginat, apare la știri, produce imagini puternice. Un
              accident de mașină e banal, cotidian, invizibil. Așa că percepi
              zborul ca periculos, deși e unul dintre cele mai sigure lucruri
              pe care le faci.
            </p>
          </div>

          <div className="mt-8 rounded-md border-l-4 border-lp-yellow bg-lp-bg p-6 md:p-8">
            <p className="text-base leading-relaxed text-lp-navy md:text-lg">
              <strong>Concluzia importantă:</strong> informația nu vindecă
              fobia. Dacă ar fi suficient să știi că e sigur, niciun pilot nu
              ar avea fobie de zbor. Și totuși, unii au. Tratamentul nu e
              despre informație. E despre cum procesează creierul tău
              experiența.
            </p>
          </div>
        </div>
      </section>

      {/* COMPORTAMENTE DE SIGURANȚĂ */}
      <section id="comportamente-de-siguranta" className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Cercul vicios
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Comportamente de siguranță.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            Sunt lucrurile pe care le faci ca să faci față. Fiecare în parte
            pare rezonabil. Dar pune-le pe toate la un loc și vei vedea ce fac
            cu adevărat: mențin fobia activă.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Alcool înainte sau în timpul zborului",
              "Pastile calmante (benzodiazepine)",
              "Muzică în căști pe tot zborul",
              "Loc pe culoar, niciodată la geam",
              "Verifici meteo-ul obsesiv cu zile înainte",
              "Cauți turbulențe pe harta în timp real",
              "Te ții de cotieră în permanență",
              "Monitorizezi fiecare sunet al motorului",
              "Studiezi fața stewardeselor pentru semne de panică",
              "Eviți zborurile de noapte sau cele lungi",
              "Porți obiecte norocoase",
              "Faci rugăciuni sau ritualuri la decolare",
            ].map((s) => (
              <span key={s} className="rounded-md border border-lp-border bg-white px-4 py-2 text-sm text-lp-navy md:text-[15px]">
                {s}
              </span>
            ))}
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Povestea Juliei
          </h3>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Julia zbura de 15 ani cu același ritual: un Xanax cu o oră
              înainte, un pahar de vin la bord, muzică în căști, loc pe culoar,
              ochii închiși la decolare și aterizare. Și funcționa. Ajungea la
              destinație. Dar fobia nu se micșora. Ba chiar creștea, ușor, de
              la an la an.
            </p>
            <p>
              Pentru că creierul Juliei nu învăța niciodată că poate zbura fără
              aceste lucruri. De fiecare dată, concluzia era aceeași: am
              supraviețuit pentru că am luat pastila, pentru că am băut vinul,
              pentru că am stat pe culoar. Nu: am supraviețuit pentru că zborul
              e sigur.
            </p>
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Testul simplu
          </h3>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Întreabă-te: dacă ar trebui să zbori mâine, fără niciun fel de
              ajutor.. fără pastile, fără alcool, fără muzică, fără ritualuri..
              ai putea? Dacă răspunsul e nu, atunci lucrurile pe care le
              folosești nu sunt strategii de coping. Sunt comportamente de
              siguranță care mențin fobia activă.
            </p>
            <p>
              Nu e vina ta că le folosești. Sunt soluții naturale pe care le
              găsește mintea când nu are altceva. Dar ca să tratezi fobia, va
              trebui la un moment dat să le lași.
            </p>
          </div>
        </div>
      </section>

      {/* CAZUL JIM - dark */}
      <section id="cazul-jim" className="bg-lp-navy px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px] text-white">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.22em] text-lp-cyan">
            Perspectiva clinică
          </p>
          <h2 className="mt-4 font-work text-3xl font-bold leading-tight md:text-4xl lg:text-[44px]">
            Când avionul nu e despre avion.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-white/85 md:text-lg">
            <p>
              Jim avea 42 de ani când a venit în terapie. Zburase fără probleme
              toată viața. Și apoi, brusc, nu mai putea. Nu se întâmplase nimic
              dramatic. Niciun zbor turbulent, niciun accident evitat la
              limită. Pur și simplu, într-o zi, a știut că nu mai poate urca în
              avion.
            </p>
            <p>
              În terapie, lucrurile au început să se clarifice. Jim crescuse cu
              o mamă care controla totul. Ce mânca, ce îmbrăca, cu cine vorbea.
              Ca adult, Jim și-a construit o viață în care controla totul.
              Carieră proprie, decizii proprii, ritmul propriu. Avionul era
              singurul loc în care nu avea niciun control. Și atâta timp cât
              restul vieții mergea bine, putea tolera asta.
            </p>
            <p>
              Dar în anul dinaintea fobiei, Jim trecuse printr-un divorț.
              Pierduse controlul asupra celei mai importante relații din viața
              lui. Și brusc, pierderea controlului nu mai era tolerabilă
              nicăieri. Nici în avion.
            </p>
            <p>
              Fobia lui Jim nu era despre avioane. Era despre neputință. Despre
              captivitate. Despre faptul că nu poți controla totul, oricât ai
              încerca.
            </p>
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-white md:text-3xl">
            Ce ne spune asta
          </h3>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-white/85 md:text-lg">
            <p>
              Nu spun că orice fobie de zbor ascunde un conflict psihic
              nerezolvat. Multe fobii de zbor au o componentă puternic
              biologică și situațională. Dar merită să te întrebi: ce se
              întâmpla în viața mea când a apărut fobia? Am pierdut controlul
              asupra a ceva important? Mă simt captiv undeva, nu doar în avion?
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
            De ce expunerea, nu pastilele.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Fobia de zbor, ca toate fobiile specifice, se tratează prin
              psihoterapie, nu prin medicamente. Benzodiazepinele pot reduce
              temporar anxietatea, dar blochează exact procesul de învățare
              care face expunerea să funcționeze. Dacă iei un calmant înainte
              de zbor, creierul tău nu învață că zborul e sigur. Învață că a
              supraviețuit doar pentru că a luat pastila.
            </p>
            <p>
              Expunerea funcționează diferit. Nu-ți spune că zborul e sigur. Te
              lasă să descoperi singur, prin experiență directă, că poți tolera
              disconfortul fără niciun ajutor extern. Și acea descoperire e cea
              care schimbă totul.
            </p>
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Ierarhia de expunere: cum arată concret
          </h3>
          <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
            Tratamentul nu înseamnă să fii pus brusc în avion. Înseamnă un
            progres treptat, calibrat, în care tu controlezi fiecare pas:
          </p>

          <div className="mt-6 flex flex-col gap-6 rounded-md border border-lp-border bg-lp-bg p-6">
            {[
              { level: "Ușor", color: "bg-lp-cyan text-lp-navy", steps: [
                "Citești despre mecanica zborului",
                "Privești video din cabina de pilotaj",
              ]},
              { level: "Mediu", color: "bg-lp-yellow text-lp-navy", steps: [
                "Mergi la aeroport fără să zbori",
                "Stai într-un avion la sol sau într-un simulator",
              ]},
              { level: "Greu", color: "bg-lp-navy text-white", steps: [
                "Zbor scurt, fără comportamente de siguranță",
                "Zbor lung, în condiții de turbulență",
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

      {/* TRATAMENT - DETALII */}
      <section className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <h3 className="font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Expunerea imaginală
          </h3>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Nu trebuie să zbori ca să începi tratamentul. Expunerea imaginală
              înseamnă să-ți imaginezi zborul, pas cu pas, în detaliu: drumul
              spre aeroport, check-in-ul, zona de îmbarcare, coridorul
              avionului, locul tău, ușa care se închide, decolarea. Fiecare
              scenariu se repetă până când anxietatea scade.
            </p>
            <p>
              Cercetările arată că creierul procesează expunerea imaginală
              similar cu expunerea reală. Nu la fel de puternic, dar suficient
              de puternic ca să fie un punct de pornire valoros. E ca un
              antrenament mental înainte de meciul real.
            </p>
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Realitatea virtuală
          </h3>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Tehnologia de realitate virtuală (RV) oferă un pas intermediar
              între imaginație și realitate. Cu un set de ochelari VR, poți
              zbura într-un mediu controlat.. poți experimenta decolarea,
              turbulențele, aterizarea, totul fără să pleci din cabinetul
              terapeutului.
            </p>
            <p>
              Studiile arată rezultate comparabile cu expunerea reală pentru
              fobia de zbor. Avantajul e că poți repeta același scenariu de
              zeci de ori, poți controla intensitatea, și poți opri oricând. E
              un instrument excelent, mai ales pentru persoanele care refuză
              complet să zboare.
            </p>
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Supra-expunerea
          </h3>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Nu e suficient să zbori o dată și să spui gata, am reușit.
              Cercetările arată că oprirea la pragul minim crește riscul de
              revenire a fobiei. Conceptul se numește supra-expunere
              (overlearning).. te expui mai mult decât trebuie, pentru ca
              creierul să consolideze noua învățare.
            </p>
            <p>
              Concret, asta înseamnă: nu un zbor, ci mai multe. Nu doar zboruri
              scurte, ci și lungi. Nu doar în condiții ideale, ci și cu
              turbulențe. Cu cât ești mai departe de linia de start, cu atât
              riscul de revenire e mai mic.
            </p>
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Ce spun datele
          </h3>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              { stat: "80-95%", label: "pacienți cu îmbunătățiri semnificative" },
              { stat: "1-12", label: "ședințe de tratament" },
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
                title: "Identifică-ți combinația de frici",
                text: "Ia cele cinci frici de mai sus și dă-le un scor de la 1 la 10. Care e cea mai puternică? Frica de prăbușire? De spații închise? De lipsa controlului? Combinația ta e unică și ea determină ce tip de expunere va funcționa cel mai bine. Scrie scorurile. Doar acest exercițiu simplu reduce confuzia și îți dă un punct de pornire concret.",
              },
              {
                nr: "2",
                title: "Inventarul comportamentelor de siguranță",
                text: "Scrie pe hârtie tot ce faci ca să supraviețuiești un zbor sau ca să eviți unul. Alcoolul, pastilele, muzica, locul pe culoar, verificarea meteo-ului, rugăciunile. Fii onest. Nu există răspunsuri greșite. Scopul nu e să le elimini pe toate acum, ci să le vezi. Să realizezi câte sunt. Și să înțelegi că fiecare dintre ele e un semnal că fobia e activă.",
              },
              {
                nr: "3",
                title: "Pregătirea pentru un zbor: expunere imaginală",
                text: "Închide ochii. Imaginează-ți că ești în mașina spre aeroport. Simte drumul. Imaginează-ți check-in-ul, scannerul de securitate, zona de așteptare. Apoi coridorul avionului, locul tău, centura, ușa care se închide. Motoarele pornesc. Avionul accelerează. Decolarea. Observă ce simți în corp. Nu încerca să oprești. Doar observă. Repetă zilnic. Anxietatea va scădea de la sine.",
              },
              {
                nr: "4",
                title: "Informația concretă: mecanica zborului",
                text: "Caută un curs de tip Fear of Flying de la o companie aeriană. Multe oferă cursuri gratuite sau la cost redus. Învață cum funcționează turbulențele, ce fac piloții în diferite scenarii, ce sunt zgomotele pe care le auzi. Informația singură nu vindecă, dar reduce componenta de necunoscut, care alimentează catastrofizarea.",
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
              "Ierarhie de expunere personalizată, adaptată combinației tale specifice de frici",
              "Identificarea comportamentelor de siguranță pe care le folosești fără să realizezi",
              "Acces la realitate virtuală pentru expunere controlată, fără să pleci din cabinet",
              "Explorarea stratului mai profund.. ce înseamnă avionul pentru tine, dincolo de zbor",
              <>Legătura cu <Link key="ap" href="/tipuri/atac-de-panica" className="font-semibold text-lp-cyan-dark underline-offset-2 hover:underline">atacurile de panică</Link>, dacă apar în timpul zborului</>,
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3 rounded-md border border-lp-border bg-white p-5">
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
              Ce vor să știe oamenii despre fobia de zbor.
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
            Fobia de zbor se{" "}
            <span className="bg-lp-yellow px-2 text-lp-navy">tratează</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-[680px] text-lg leading-relaxed text-white/85 md:text-xl">
            Răspunde excelent la tratament. Nu e ceva cu care trebuie să
            trăiești.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <Link
              href="/programare?din=fobie-de-zbor"
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
