"use client";

import Link from "next/link";
import { useState } from "react";

/* ============================================================
   FOBII SPECIFICE — Ghid Complet (lp-* design system)
   ============================================================ */

const hubJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Fobii specifice .. Ghid complet 2026",
      description:
        "Ce sunt fobiile specifice, de ce apar și cum se tratează. 80-95% rată de succes la tratament. De Daniel Gagea, psiholog clinician, psihoterapeut.",
      author: {
        "@type": "Person",
        name: "Daniel Gagea",
        jobTitle: "Psiholog clinician, psihoterapeut",
        url: "https://totuldespreanxietate.ro",
      },
      publisher: {
        "@type": "Organization",
        name: "Totul despre Anxietate",
        url: "https://totuldespreanxietate.ro",
      },
      datePublished: "2026-04-03",
      dateModified: "2026-04-03",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://totuldespreanxietate.ro/tipuri/fobii-specifice" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Se vindecă complet o fobie specifică?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "În majoritatea cazurilor, da. 80-95% dintre persoanele care urmează tratament prin expunere raportează îmbunătățiri semnificative. Tratamentul durează între 1 și 12 ședințe.",
          },
        },
        {
          "@type": "Question",
          name: "Cât durează tratamentul pentru fobii?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Între 1 și 12 ședințe. În modelul Ost, o singură ședință de 2-3 ore poate fi suficientă. Fobiile au cel mai bun prognostic din toate tulburările de anxietate.",
          },
        },
        {
          "@type": "Question",
          name: "Trebuie să iau medicamente pentru fobie?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nu ca primă linie. Fobia specifică este una dintre puținele tulburări pentru care medicația NU este recomandată ca prim tratament. Expunerea terapeutică are cele mai puternice dovezi.",
          },
        },
        {
          "@type": "Question",
          name: "De ce am fobie dacă nu am avut o experiență traumatică?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Există trei căi: experiență directă, învățare observațională (ai văzut pe cineva speriat) și transmitere informațională (ai auzit că e periculos). În plus, unele frici sunt cablate biologic.",
          },
        },
        {
          "@type": "Question",
          name: "Pot să mor din cauza fobiei?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nu. Senzațiile pe care le simți sunt produse de răspunsul fight-or-flight. Sunt menite să te protejeze. Corpul nu poate susține acel nivel de activare mai mult de câteva minute.",
          },
        },
      ],
    },
    {
      "@type": "Person",
      name: "Daniel Gagea",
      jobTitle: "Psiholog clinician, psihoterapeut",
      url: "https://totuldespreanxietate.ro",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Acasă", item: "https://totuldespreanxietate.ro" },
        { "@type": "ListItem", position: 2, name: "Tipuri de anxietate", item: "https://totuldespreanxietate.ro/tipuri" },
        { "@type": "ListItem", position: 3, name: "Fobii specifice", item: "https://totuldespreanxietate.ro/tipuri/fobii-specifice" },
      ],
    },
  ],
};

const PHOBIA_TYPES: Array<{ title: string; desc: string; href: string }> = [
  {
    title: "Fobia de animale",
    desc: "Cea mai frecventă categorie. Include frica de câini, păianjeni, șerpi, insecte. Combină frica cu un dezgust intens.",
    href: "/tipuri/fobii-specifice/fobie-de-animale",
  },
  {
    title: "Fobia de sânge și ace",
    desc: "Singura fobie cu mecanism fiziologic invers: produce căderea tensiunii, nu creșterea ei. 70-80% au leșinat cel puțin o dată.",
    href: "/tipuri/fobii-specifice/fobie-de-sange",
  },
  {
    title: "Fobia de înălțimi",
    desc: "Are o componentă vestibulară reală. Mulți raportează un gând intruziv: impulsul de a sări, care nu e intenție, ci anxietate.",
    href: "/tipuri/fobii-specifice/fobie-de-inaltime",
  },
  {
    title: "Claustrofobia",
    desc: "Nu e o singură frică, ci combinația a două: frica de restricție fizică și frica de sufocare.",
    href: "/tipuri/fobii-specifice/claustrofobie",
  },
  {
    title: "Fobia de zbor",
    desc: "O fobie compusă care poate include până la 5 frici diferite: prăbușire, înălțimi, spații închise, turbulențe și lipsa controlului.",
    href: "/tipuri/fobii-specifice/fobie-de-zbor",
  },
];

const INSIGHTS: Array<{ title: string; text: string }> = [
  {
    title: "Fobia ta nu e irațională. E cea mai inteligentă soluție pe care o puteai găsi la 5 ani.",
    text: "Când erai mic, psihicul tău a avut de-a face cu ceva copleșitor, un conflict emoțional, o frică pe care nu o puteai înțelege. Ca să te protejeze, a luat acea frică și a atașat-o de ceva concret din exterior: un câine, un lift, un avion. Acum ai un obiect de care să te ferești, în loc de o durere internă de care nu poți fugi. Dacă te uiți doar la obiect, pare irațional. Dacă te uiți la ce te protejează de fapt, are tot sensul din lume.",
  },
  {
    title: "Ce a pornit fobia nu e neapărat ce o menține acum.",
    text: "Poate nu știi de unde a venit fobia ta. Poate s-a întâmplat ceva când erai foarte mic și nu îți amintești. Vestea bună: pentru tratament, nu trebuie neapărat să știi cauza originală. Ce contează este ce o ține în viață acum: evitarea (de fiecare dată când ocolești situația, fobia se întărește), comportamentele de siguranță (trucurile pe care le folosești ca să faci față) și gândurile automate care îți spun că pericolul e real.",
  },
  {
    title: "Nu trebuie să fi trecut prin ceva traumatic ca să ai o fobie.",
    text: "Mulți oameni spun: dar mie nu mi s-a întâmplat nimic grav. Și au dreptate. Fobiile pot apărea pe trei căi diferite: ai trăit direct ceva (un câine te-a mușcat), ai văzut pe altcineva speriat (mama ta țipa când vedea un păianjen), sau ai auzit în mod repetat că ceva e periculos (ai crescut auzind că avioanele sunt periculoase). Oricare dintre aceste căi e suficientă. Nu ai nevoie de o traumă majoră.",
  },
  {
    title: "Frica nu se șterge din creier. Se subordonează unei memorii noi.",
    text: "Când faci terapie de expunere, creierul nu uită frica veche. Creează o memorie nouă, mai puternică: am fost în situația asta, am simțit frică, și nu s-a întâmplat nimic rău. Noua memorie devine dominantă. Dar cea veche rămâne stocată și poate reapărea în momente de stres intens. Când se întâmplă asta, nu înseamnă că tratamentul a eșuat. Înseamnă doar că trebuie să reîmprospătezi memoria nouă.",
  },
  {
    title: "Relaxarea e cel mai periculos sfat pentru fobia de sânge.",
    text: "Toată lumea spune: relaxează-te, respiră adânc. La fobia de sânge, asta e exact ce nu trebuie să faci. De ce? Pentru că în această fobie, tensiunea arterială scade brusc (în loc să crească, cum se întâmplă la toate celelalte fobii). Relaxarea o scade și mai mult, ceea ce te duce spre leșin. Singurul protocol care funcționează e inversul: încordezi mușchii brațelor și picioarelor ca să menții tensiunea.",
  },
  {
    title: "Dacă ai scăpat de o fobie și a apărut alta, nu e întâmplare.",
    text: "Imaginează-ți apa care curge prin grădină. Dacă blochezi un canal, apa nu dispare. Găsește alt drum. La fel funcționează și fobia: dacă tratezi doar simptomul (evitarea câinilor) fără să înțelegi ce se ascunde dedesubt (poate o frică de vulnerabilitate), energia aceea emoțională se mută pe alt obiect. Acum nu mai e câinele, e liftul. Obiectul se schimbă, dar senzația din corp rămâne aceeași.",
  },
  {
    title: "40% dintre atacurile de frică nu sunt însoțite de nicio creștere reală a pulsului.",
    text: "Într-un studiu cu monitorizare cardiacă 24 de ore, cercetătorii au descoperit ceva surprinzător: în 40% din cazuri, persoanele raportau frică intensă, dar inima lor nu bătea mai repede. Doar credeau că bate. Și invers: multe episoade de puls ridicat real nu au fost percepute ca frică. Ce înseamnă asta? Că experiența fricii e construită de mintea ta, nu doar de corp. Percepția e mai puternică decât fiziologia.",
  },
  {
    title: "Oamenii inteligenți sunt adesea cei mai frustrați de fobiile lor.",
    text: "Știu că nu e logic. Știu că un păianjen de 2 cm nu mă poate omorî. Am citit statisticile. Și totuși, corpul meu reacționează. Exact asta e frustrarea: problema nu e la nivel de informație. E la nivel de învățare emoțională, un tip de memorie la care mintea rațională nu are acces direct. Un medic cardiolog poate avea atacuri de panică. Cunoștințele lui sunt perfecte. Dar în momentul atacului, cunoștințele nu contează.",
  },
  {
    title: "Unele frici sunt programate în noi de mii de ani.",
    text: "Psihologul Martin Seligman a demonstrat în 1971 că anumite obiecte au probabilitate mult mai mare de a deveni temute: șerpi, păianjeni, înălțimi, întunericul, spații închise. De ce? Pentru că în istoria speciei umane, acestea au fost amenințări reale. Creierul tău e mai pregătit să învețe frica de un șarpe decât frica de o priză electrică, deși priza e obiectiv mai periculoasă în lumea modernă. Nu e un defect, ci moștenire biologică.",
  },
  {
    title: "Atacul de anxietate atinge maximul în 10 minute și durează sub 20.",
    text: "Corpul tău nu poate menține alarma maximă la infinit. Fiziologic, sistemul nervos simpatic (cel care produce palpitațiile, transpirația, tremuratul) se epuizează. După 10-20 de minute, sistemul parasimpatic preia controlul și totul coboară. Această informație, aparent simplă, este unul dintre cele mai puternice instrumente: transformă experiența din ceva ce pare pericol de moarte în disconfort intens cu durată cunoscută și limitată.",
  },
  {
    title: "Un bărbat avea fobie de maioneză. Și nu era nebun.",
    text: "Maioneza era pe masă în momentul în care părinții lui au avut cearta care a dus la divorț. El avea 6 ani. Nu înțelegea ce se întâmpla, dar simțea catastrofa. Și tot ce mintea lui de 6 ani a putut face a fost să lege haosul de ce era prezent în acel moment: mirosul, textura, imaginea maionezei. Maioneza nu era periculoasă. Era portalul senzorial către momentul în care lumea lui s-a desfăcut. Dacă ai o fobie care pare ciudată, nu ești ciudat. Ai doar un cod pe care încă nu l-ai descifrat.",
  },
  {
    title: "Fobia ta protejează pe cineva. Poate chiar pe tine.",
    text: "Orice fobie are o funcție în viața ta, chiar dacă nu o vezi. Uneori te protejează de un conflict intern pe care nu-l poți rezolva direct. Alteori protejează o relație: partenerul care conduce mereu pentru că tu nu poți, familia care evită parcurile pentru tine. Întrebarea de ce am această fobie e utilă. Dar o întrebare și mai utilă: pe cine sau ce protejează fobia asta? Și ce s-ar schimba dacă ar dispărea mâine?",
  },
];

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: "Se vindecă complet o fobie specifică?",
    a: "În majoritatea cazurilor, da. 80-95% dintre persoanele care urmează tratament prin expunere raportează îmbunătățiri semnificative. Tratamentul durează între 1 și 12 ședințe.",
  },
  {
    q: "Cât durează tratamentul?",
    a: "Între 1 și 12 ședințe. În modelul Ost, o singură ședință de 2-3 ore poate fi suficientă. Fobiile au cel mai bun prognostic din toate tulburările de anxietate.",
  },
  {
    q: "Pot scăpa de fobie singur?",
    a: "Parțial, da. Exercițiile de mai sus pot ajuta. Dar complet, rar. Un terapeut aduce calibrarea pașilor și accesul la straturile mai profunde pe care fobia le protejează.",
  },
  {
    q: "Trebuie să iau medicamente?",
    a: "Nu ca primă linie. Fobia specifică este una dintre puținele tulburări pentru care medicația NU este recomandată ca prim tratament. Expunerea terapeutică are cele mai puternice dovezi.",
  },
  {
    q: "De ce am fobie dacă nu am avut o experiență traumatică?",
    a: "Nu ai nevoie de o experiență dramatică ca să dezvolți o fobie. Sunt trei moduri în care poate apărea: ai trăit ceva direct (un câine te-a mușcat), ai văzut pe altcineva speriat (mama ta se panica la vederea unui păianjen) sau ai auzit în mod repetat că ceva e periculos (de mic ai tot auzit că avioanele cad). În plus, creierul uman e programat biologic să învețe mai repede frica de anumite lucruri: șerpi, înălțimi, întuneric. Asta e moștenire din mii de ani de evoluție, nu un defect al tău.",
  },
  {
    q: "Pot să mor din cauza fobiei?",
    a: "Nu. Senzațiile sunt produse de răspunsul fight-or-flight. Corpul nu poate susține acel nivel de activare mai mult de câteva minute.",
  },
  {
    q: "Cum știu dacă am o fobie sau doar o frică puternică?",
    a: "Cheia e evitarea activă. Dacă frica te face să îți modifici comportamentul, traseul, planurile, dacă îți afectează viața, e mai mult decât o frică puternică.",
  },
  {
    q: "Fobiile se agravează cu vârsta?",
    a: "Fără tratament, fobiile nu se ameliorează de la sine. Evitarea se extinde progresiv, teritoriul sigur se micșorează.",
  },
  {
    q: "Fobia se moștenește?",
    a: "Genele joacă un rol, dar nu mostenești o fobie pe deplin dezvoltată. Moștenești o predispoziție care, în combinație cu anumite experiențe, poate duce la dezvoltarea unei fobii.",
  },
  {
    q: "De ce am scăpat de o fobie și a apărut alta?",
    a: "Gândește-te la fobia ca la un mesaj pe care psihicul tău încearcă să ți-l transmită. Dacă rezolvi doar forma mesajului (nu te mai temi de câini) dar nu înțelegi ce voia de fapt să-ți spună (poate o frică de vulnerabilitate, de pierdere a controlului, de abandon), atunci mesajul va găsi o altă formă prin care să iasă la suprafață. Ieri era frica de câini, azi e frica de lift, mâine poate fi frica de condus. Obiectul se schimbă, dar senzația din corp rămâne aceeași. Asta e un semn că sub fobie există ceva mai profund care încă așteaptă să fie înțeles.",
  },
];

const REFERENCES = [
  "Andrews, G., Creamer, M., Crino, R., Hunt, C., Lampe, L., & Page, A. (2003). The Treatment of Anxiety Disorders: Clinician Guides and Patient Manuals (2nd ed.). Cambridge University Press.",
  "Antony, M. M., Craske, M. G., & Barlow, D. H. (2006). Mastering Your Fears and Phobias: Therapist Guide (2nd ed.). Oxford University Press.",
  "Clark, D. A., & Beck, A. T. (2010). Cognitive Therapy of Anxiety Disorders: Science and Practice. Guilford Press.",
  "Freud, S. (1926). Inhibitions, Symptoms and Anxiety. Standard Edition, Vol. 20. Hogarth Press.",
  "Gabbard, G. O. (2005). Psychodynamic Psychiatry in Clinical Practice (4th ed.). American Psychiatric Publishing.",
  "Öst, L.-G. (1987). Applied relaxation: Description of a coping technique and review of controlled studies. Behaviour Research and Therapy, 25(5), 397-409.",
];

export default function FobiiSpecificePage() {
  const [openInsight, setOpenInsight] = useState<number | null>(null);

  return (
    <main className="font-work min-h-screen bg-white text-lp-navy">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubJsonLd) }}
      />

      {/* HERO */}
      <section className="bg-white px-6 pt-14 pb-12 md:pt-20 md:pb-16">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Ghid complet 2026
          </p>
          <h1 className="mt-4 font-work text-4xl font-bold leading-[1.05] tracking-tight text-lp-navy md:text-5xl lg:text-6xl">
            <span className="lp-yellow-underline">Fobii</span> specifice.
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

          <p className="mt-6 text-sm text-lp-mute-soft">
            Trăiești cu o fobie de ani de zile?{" "}
            <Link href="#ce-poti-face" className="font-semibold text-lp-cyan-dark underline-offset-2 hover:underline">
              Mergi direct la Ce poți face acum
            </Link>
          </p>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-lp-mute md:text-xl">
            <p>
              Știi că nu e periculos. Știi că un păianjen de 2 cm nu te poate
              omorî. Că liftul nu se va prăbuși. Că avionul e mai sigur decât
              mașina ta.
            </p>
            <p>Și totuși, corpul tău reacționează ca și cum viața ta ar fi în pericol.</p>
            <p>
              <strong className="text-lp-navy">
                Nu ești irațional. Nu ești slab.
              </strong>{" "}
              Ce trăiești poartă un nume.. fobie specifică.
            </p>
          </div>
        </div>
      </section>

      {/* CE SUNT FOBIILE SPECIFICE */}
      <section className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Definiție
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Ce sunt <span className="lp-yellow-underline">fobiile specifice</span>.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              O fobie specifică este o frică intensă și persistentă față de un
              obiect sau o situație concretă, disproporționată față de pericolul
              real, care duce la evitare activă și afectează viața de zi cu zi.
              Fobiile specifice sunt cea mai frecventă tulburare de anxietate
              (mai frecventă decât{" "}
              <Link href="/tipuri/anxietate-sociala" className="font-semibold text-lp-cyan-dark underline-offset-2 hover:underline">
                anxietatea socială
              </Link>{" "}
              sau{" "}
              <Link href="/tipuri/anxietate-generalizata" className="font-semibold text-lp-cyan-dark underline-offset-2 hover:underline">
                anxietatea generalizată
              </Link>
              ), afectând{" "}
              <strong className="text-lp-navy">7-12.5% din populație</strong>.
            </p>
            <p>
              Au cel mai bun prognostic din toate tulburările de anxietate, cu{" "}
              <strong className="text-lp-navy">80-95% rată de succes</strong> la
              tratamentul prin expunere, adesea în doar 1-12 ședințe.
            </p>
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Cele 5 tipuri de fobii specifice
          </h3>
          <div className="mt-6 grid gap-4">
            {[
              ["Tipul animal", "Frica de câini, păianjeni, șerpi, insecte. Debutează frecvent în copilărie, între 5 și 9 ani. La multe persoane, nu e doar frică, ci și un dezgust intens."],
              ["Tipul mediu natural", "Frica de înălțimi, apă, furtuni, întuneric. În cazul fobiei de înălțimi, există o componentă vestibulară reală.. amețeala nu e doar în capul tău."],
              ["Tipul sânge-injecție-rănire", "Singura fobie cu mecanism fiziologic diferit: în loc de puls accelerat, produce o cădere bruscă a tensiunii, ceea ce poate duce la leșin. 61% au cel puțin o rudă de gradul I cu aceeași frică."],
              ["Tipul situațional", "Frica de avion, lift, spații închise, tuneluri, poduri. Debutează mai târziu, frecvent în jurul vârstei de 25 de ani."],
              ["Alt tip", "Orice fobie care nu se încadrează.. frica de a vomita, de sufocare, de personaje costumate, de sunete puternice."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-md border border-lp-border bg-white p-6">
                <h4 className="font-work text-lg font-bold text-lp-navy">{title}</h4>
                <p className="mt-2 text-base leading-relaxed text-lp-mute md:text-[17px]">{text}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Frică normală vs. fobie specifică
          </h3>
          <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
            Diferența nu e de intensitate, ci de tip. Nu e vorba că ți-e mai
            frică, ci că frica funcționează altfel.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-md border-t-4 border-lp-cyan-dark bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-lp-cyan-dark">Frică normală</p>
              <p className="mt-3 text-base leading-relaxed text-lp-navy md:text-[17px]">
                Te temi de câini dar treci pe lângă un câine, cu inima
                accelerată, poate cu un mic ocol. Disconfortul trece repede. Nu
                îți modifici viața din cauza asta.
              </p>
            </div>
            <div className="rounded-md border-t-4 border-lp-yellow bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-lp-mute">Fobie specifică</p>
              <p className="mt-3 text-base leading-relaxed text-lp-navy md:text-[17px]">
                Faci un ocol de 3 străzi ca să nu treci pe lângă un câine. Nu
                mergi la prieteni care au câine. Verifici în avans dacă la
                destinație vor fi câini. Îți reorganizezi viața.
              </p>
            </div>
          </div>
          <p className="mt-6 text-base leading-relaxed text-lp-navy md:text-lg">
            <strong>Diferența nu e cât de tare bate inima. Diferența e ce faci din cauza asta.</strong>
          </p>
        </div>
      </section>

      {/* CUM FUNCȚIONEAZĂ - dark section */}
      <section className="bg-lp-navy px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px] text-white">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.22em] text-lp-cyan">
            Mecanismul
          </p>
          <h2 className="mt-4 font-work text-3xl font-bold leading-tight md:text-4xl lg:text-[44px]">
            Cum funcționează fobia.
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-white/85 md:text-lg">
            <p>
              Sistemul tău de alarmă intern funcționează perfect. Problema e că{" "}
              <strong className="text-white">reacționează la fel de intens</strong>{" "}
              și la un pericol real, și la ceva inofensiv (la fel ca într-un{" "}
              <Link href="/atac-de-panica" className="font-semibold text-lp-cyan underline-offset-2 hover:underline">
                atac de panică
              </Link>
              ). Nu e un defect, doar e calibrat prea sensibil. Și pentru că
              reacția e atât de neplăcută, ai învățat să eviți orice ar putea-o
              declanșa.
            </p>
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-white md:text-3xl">
            Ce se întâmplă în corp și minte
          </h3>
          <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
            Frica activează trei sisteme simultan. Fiecare se simte diferit, dar
            toate se alimentează reciproc:
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["Corpul", "Inima bate repede, palmele transpiră, amețești, simți presiune în piept, tremuri. Corpul se pregătește să fugă de un pericol care nu există."],
              ["Mintea", "Gânduri automate care vin de la sine.. ceva rău se va întâmpla, nu voi putea face față, voi pierde controlul. Nu le alegi, pur și simplu apar."],
              ["Comportamentul", "Fugi, eviți, cauți scăpare. Fiecare evitare reduce frica pe moment, dar o crește pe termen lung."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-md border-t-4 border-lp-yellow bg-white/5 p-6">
                <h4 className="font-work text-lg font-bold text-lp-yellow">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-white/80 md:text-base">{text}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-white md:text-3xl">
            De ce creierul exagerează pericolul
          </h3>
          <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
            În fobii, creierul face o eroare sistematică:{" "}
            <strong className="text-white">supraestimează dramatic probabilitatea</strong>{" "}
            ca lucrul temut să se întâmple. O persoană cu fobie de zbor
            estimează riscul ca avionul să se prăbușească drept semnificativ,
            deși probabilitatea reală e de 1 la 10 milioane de zboruri. Aceeași
            persoană traversează strada zilnic fără anxietate, deși riscul real
            e de 1 la 600. Eroarea nu e generală.. persoana judecă corect în
            toate celelalte domenii. Doar în zona fobiei, calibrarea e defectă.
          </p>
        </div>
      </section>

      {/* DE CE NU TRECE */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            De ce nu trece de la sine
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Evitarea.. cea mai logică greșeală.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Fiecare act de evitare pare logic. Dar fiecare evitare împiedică
              două tipuri de învățare simultane: că scenariul temut nu se
              întâmplă de fapt, și că ai capacitatea de a face față chiar dacă
              s-ar întâmpla.
            </p>
            <p>
              O persoană care evită lifturile de 5 ani nu are aceeași fobie ca
              în ziua 1. Are una mai puternică. Evitarea se extinde progresiv,
              englobând tot mai multe situații.
            </p>
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Piramida fricilor.. frica de propria frică
          </h3>
          <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
            Când cineva spune mi-e frică de câini, asta e doar stratul de la
            suprafață. Sub el se ascund straturi mai profunde pe care de obicei
            nu le conștientizăm. Cu cât cobori mai adânc, cu atât înțelegi mai
            bine de ce fobia pare atât de irațională din exterior:
          </p>
          <div className="mt-6 flex flex-col gap-3">
            {[
              ["1", "Frica de obiect", "Mi-e frică de câini.", "Stratul vizibil. Ce spui lumii. Ce știi tu însuți despre frica ta."],
              ["2", "Frica de propria reacție", "Mi-e frică de ce voi simți când voi vedea un câine.", "Câinele nu e problema în sine, ci avalanșa de senzații pe care o declanșează."],
              ["3", "Frica de pierderea controlului", "Mi-e frică că nu voi putea controla ce simt.", "Voi țipa? Voi îngheța? Mă voi face de rușine? Voi pierde controlul complet?"],
              ["4", "Frica că nu se va opri", "Mi-e frică că odată ce începe, frica nu se va termina.", "Asta explică de ce mulți oameni evită total. Nu se tem de situație, ci de starea care nu se mai oprește."],
              ["5", "Frica de moarte", "La nivelul cel mai profund, corpul crede că e în pericol de moarte.", "Aici ajunge corpul. De aceea reacția e atât de intensă. Nu e dramă, e pur și simplu biologie."],
            ].map(([num, title, quote, explain]) => (
              <div key={num} className="flex items-start gap-4 rounded-md border border-lp-border bg-lp-bg p-5">
                <span className="shrink-0 font-work text-3xl font-bold text-lp-cyan-dark/40">{num}</span>
                <div>
                  <p className="font-work font-bold text-lp-navy md:text-[17px]">{title}</p>
                  <p className="mt-1 text-sm font-medium italic text-lp-cyan-dark md:text-[15px]">{quote}</p>
                  <p className="mt-2 text-sm leading-relaxed text-lp-mute md:text-[15px]">{explain}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CE VREA SĂ SPUNĂ PSIHICUL */}
      <section className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Perspectiva clinică
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Ce vrea să spună psihicul prin fobia ta.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            Această secțiune e diferită. Până acum am vorbit despre cum
            funcționează fobia. Acum vreau să vorbim despre{" "}
            <strong className="text-lp-navy">de ce există</strong>. Perspectiva
            asta vine din practica mea clinică și din psihologia psihodinamică.
          </p>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Fobia ca soluție, nu ca defecțiune
          </h3>
          <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
            Psihicul ia un pericol intern, ceva pe care nu-l poți evita pentru
            că vine din tine, un conflict emoțional, o furie neexprimată, o
            pierdere neprocesată, și îl mută pe un obiect extern pe care poți
            să-l eviți. Pierzi libertate de mișcare, câștigi eliminarea
            anxietății.
          </p>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Aceeași fobie, trei răni diferite
          </h3>
          <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
            Trei persoane aveau aceeași fobie: fobie de condus. Dar motivele
            erau complet diferite.
          </p>
          <div className="mt-6 flex flex-col gap-4">
            {[
              ["Abandonul la volan", "Un bărbat. Soția i-a spus că îl părăsește în timp ce conducea. Nu se temea de trafic. Se temea de abandonul care devenise asociat cu acel context."],
              ["Conflictul identitar", "O femeie. Se temea că dacă pleacă de acasă, nu se va mai întoarce niciodată. Condusul simboliza autonomia, lucrul de care își-l dorea cel mai mult și de care se temea cel mai tare."],
              ["Mama eșuată", "O mamă. Se temea că dacă pleacă cu o treabă neterminată, este o mamă eșuată. Plecarea activa un audit intern implacabil."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-r-md border-l-4 border-lp-cyan bg-white p-6">
                <h4 className="font-work font-bold text-lp-navy md:text-[17px]">{title}</h4>
                <p className="mt-2 text-base leading-relaxed text-lp-mute md:text-[17px]">{text}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-12 font-work text-2xl font-bold leading-tight text-lp-navy md:text-3xl">
            Cele 5 răni care stau la baza fobiilor
          </h3>
          <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
            Cercetătorul Barry Wolfe a descoperit că în spatele fiecărei fobii
            se ascunde o convingere dureroasă despre sine. Nu e un gând
            conștient, ci o teamă profundă care se activează automat. Citește-le
            și observă dacă te recunoști:
          </p>
          <div className="mt-6 flex flex-col gap-4">
            {[
              ["Nu am încredere în propriul corp", "Simți că corpul tău te poate trăda oricând. Că inima se poate opri, că poți leșina, că ceva se poate defecta fără avertisment. Apare mai ales în fobii de zbor, înălțimi sau condus, unde simți că nu ai control asupra a ce se întâmplă cu tine fizic.", "Exemplu: nu te temi de avion, te temi că corpul tău va face ceva catastrofal la 10.000 de metri."],
              ["Voi fi descoperit ca incapabil", "Simți că ești fundamental incompetent și că orice situație cu miză te va expune. Ai crescut într-un mediu unde competența era condiția iubirii, unde standardele se ridicau de fiecare dată când le atingeai.", "Exemplu: nu te temi de prezentare, te temi că oamenii vor vedea cât de incapabil ești de fapt."],
              ["Sunt defect ca persoană", "Nu că ai făcut ceva rău, ci că ești ceva rău. Rușinea nu e despre un comportament, ci despre identitate. Te rușinezi și de faptul că ai o fobie, ceea ce adaugă un strat în plus de suferință.", "Exemplu: știi că un păianjen nu te poate răni, dar faptul că tot ți-e frică e pentru tine dovada că ești defect."],
              ["Voi rămâne singur", "Simți că legăturile cu ceilalți sunt fragile și pot fi rupte oricând. Nu te temi de drum, ci de ce ar putea însemna îndepărtarea: pierderea conexiunii cu cei de care depinzi emoțional.", "Exemplu: nu te temi de condus, te temi de ce se întâmplă dacă te îndepărtezi de casa sigură."],
              ["Nu știu cine sunt fără frica asta", "Două părți din tine trag în direcții opuse: vrei libertate dar ai nevoie de siguranță. Vrei să pleci dar te temi să nu pierzi ce ai. Fobia devine câmpul de luptă pe care cele două părți se confruntă zilnic.", "Exemplu: fobia de condus poate ascunde un conflict între nevoia de independență și frica de separare."],
            ].map(([title, text, exemplu]) => (
              <div key={title} className="rounded-md border border-lp-border bg-white p-6">
                <h4 className="font-work font-bold text-lp-navy md:text-[17px]">{title}</h4>
                <p className="mt-2 text-base leading-relaxed text-lp-navy md:text-[17px]">{text}</p>
                <p className="mt-2 text-sm font-medium leading-relaxed text-lp-cyan-dark md:text-[15px]">{exemplu}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIPURI DE FOBII GRID */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1100px]">
          <div className="mx-auto max-w-[820px]">
            <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
              Tipuri detaliate
            </p>
            <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
              Tipurile de <span className="lp-yellow-underline">fobii</span> specifice.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
              Fiecare tip de fobie are particularități distincte.. mecanisme
              fiziologice diferite, strategii de tratament diferite, și o logică
              internă proprie.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {PHOBIA_TYPES.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="group flex flex-col rounded-md border border-lp-border bg-white p-7 transition hover:-translate-y-0.5 hover:border-lp-cyan hover:shadow-[0_12px_40px_rgba(8,29,61,0.08)] md:p-8"
              >
                <h3 className="font-work text-xl font-bold leading-tight tracking-tight text-lp-navy transition group-hover:text-lp-cyan-dark md:text-2xl">
                  {t.title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-lp-mute md:text-lg">
                  {t.desc}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-lp-cyan-dark">
                  Citește ghidul complet
                  <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CUM SE TRATEAZĂ - dark */}
      <section className="bg-lp-navy px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px] text-white">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.22em] text-lp-cyan">
            Tratament
          </p>
          <h2 className="mt-4 font-work text-3xl font-bold leading-tight md:text-4xl lg:text-[44px]">
            Cum se tratează fobiile specifice.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/85 md:text-lg">
            Fobiile specifice sunt probabil cea mai tratabilă condiție din psihologia clinică.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["7-12%", "din populație are cel puțin o fobie specifică"],
              ["1-12", "ședințe de psihoterapie necesare"],
              ["#1", "cel mai bun prognostic din toate tulburările de anxietate"],
            ].map(([num, label]) => (
              <div key={num} className="text-center">
                <p className="font-work text-4xl font-bold tracking-tight text-lp-yellow md:text-5xl">
                  {num}
                </p>
                <p className="mt-2 text-sm leading-snug text-white/70 md:text-base">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <h3 className="mt-14 font-work text-2xl font-bold leading-tight text-white md:text-3xl">
            Expunerea ca experiment, nu ca tortură
          </h3>
          <div className="mt-6 flex flex-col gap-4">
            {[
              ["Pasul 1", "Identifici predicția exactă pe care o face creierul tău. Nu ceva vag precum o să fie rău, ci ceva specific și testabil."],
              ["Pasul 2", "Intri în situația temută fără comportamente de siguranță.. fără alcool, fără telefonul în mână, fără persoana de siguranță."],
              ["Pasul 3", "Observi activ ce se întâmplă. Compari predicția cu realitatea. Cu fiecare experiment care infirmă predicția, schema de amenințare se actualizează."],
            ].map(([step, text]) => (
              <div key={step} className="flex gap-4">
                <span className="shrink-0 font-work text-lg font-bold text-lp-yellow">{step}</span>
                <p className="text-base leading-relaxed text-white/85 md:text-lg">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CE POȚI FACE ACUM */}
      <section id="ce-poti-face" className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Primii pași
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Ce poți face acum.
          </h2>

          <div className="mt-10 flex flex-col gap-6">
            {[
              ["1. Scannerul de siguranță", "În orice situație care îți provoacă frică, răspunde la trei întrebări: Ce anume din această situație este sigur? Ce dovezi concrete există că lucrurile ar putea merge bine? Când în trecut o situație similară s-a rezolvat fără probleme?"],
              ["2. Lista evitărilor tale", "Ia o foaie de hârtie și notează tot ce eviți din cauza fobiei. Nu doar obiectul central, ci tot ce eviți indirect: parcuri, călătorii, analize medicale. Lista completă îți arată costul real al fobiei."],
              ["3. Separarea nivelurilor", "Când simți frica, fă distincția: Ce simt? (descriere neutră) Ce-mi spun despre ce simt? (meta-evaluarea) Este această evaluare un fapt sau o interpretare? Scopul nu e să elimini frica. Scopul e să oprești amplificarea ei."],
            ].map(([title, text]) => (
              <div key={title}>
                <h3 className="font-work text-xl font-bold leading-tight text-lp-navy md:text-2xl">{title}</h3>
                <p className="mt-3 text-base leading-relaxed text-lp-mute md:text-lg">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12 LUCRURI */}
      <section className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Insight-uri din practică
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight text-lp-navy md:text-4xl lg:text-[44px]">
            12 lucruri pe care majoritatea site-urilor nu ți le spun despre fobii.
          </h2>

          <div className="mt-10 divide-y divide-lp-border rounded-md border border-lp-border bg-white">
            {INSIGHTS.map((item, i) => (
              <details
                key={item.title}
                open={openInsight === i}
                onToggle={(e) => {
                  if ((e.target as HTMLDetailsElement).open) setOpenInsight(i);
                  else if (openInsight === i) setOpenInsight(null);
                }}
                className="group"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 px-6 py-5 text-left text-[17px] font-semibold text-lp-navy md:text-lg">
                  <span>
                    <span className="text-lp-cyan-dark">{i + 1}.</span> {item.title}
                  </span>
                  <span aria-hidden className="mt-1 shrink-0 text-2xl leading-none text-lp-cyan-dark transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="px-6 pb-5 text-base leading-relaxed text-lp-mute md:text-[17px]">
                  {item.text}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <div className="text-center">
            <p className="text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-cyan-dark">
              Întrebări frecvente
            </p>
            <h2 className="mt-3 font-work text-3xl font-bold leading-tight tracking-tight text-lp-navy md:text-4xl">
              Ce vor să știe oamenii despre fobii specifice.
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
            Această pagină nu înlocuiește un diagnostic profesional. Dacă te
            recunoști în ce ai citit, te încurajez să vorbești cu un specialist.
          </p>
        </div>
      </section>

      {/* CTA DARK */}
      <section className="bg-lp-navy px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1100px] text-center text-white">
          <p className="text-base md:text-lg font-semibold uppercase tracking-[0.22em] text-lp-cyan">
            Următorul pas
          </p>
          <h2 className="mt-4 font-work text-3xl font-bold leading-tight md:text-5xl">
            Fobiile se vindecă.{" "}
            <span className="bg-lp-yellow px-2 text-lp-navy">Vorbim?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[680px] text-lg leading-relaxed text-white/85 md:text-xl">
            Dacă ai ajuns până aici, ai făcut deja ceva ce mulți oameni cu fobii
            nu fac niciodată.. ai căutat să înțelegi ce ți se întâmplă.
            Vindecarea nu e atât de lungă pe cât crezi.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <Link
              href="/programare?din=fobii-specifice"
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
