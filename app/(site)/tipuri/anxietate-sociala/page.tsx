"use client";

import Link from "next/link";
import { useState } from "react";

/* ============================================================
   ANXIETATE SOCIALA — Pagină completă
   Design: lp-* tokens (Work Sans + navy/cyan/yellow)
   ============================================================ */

const ACTE = [
  {
    label: "Înainte",
    monolog:
      "Mâine am ședința. O să trebuiască să vorbesc. Vor vedea că mă bâlbâi. Poate pot să spun că sunt bolnav. Da, o să scriu un mesaj.. nu mă simt bine, nu pot veni. Dar dacă realizează că mint? Poate e mai bine să merg și să stau în spate, să nu mă observe nimeni.",
  },
  {
    label: "În timpul",
    monolog:
      "Îmi tremură mâna pe pahar. Au observat? Sigur au observat. Nu te uita la mână. Dar dacă mă uit în altă parte, or să creadă că e ceva în neregulă cu mine. Rămâi calm. Zâmbește. De ce am zâmbirea asta forțată? Probabil arăt ridicol.",
  },
  {
    label: "După",
    monolog:
      "Acasă. Liniște. Dar în capul tău e zgomot continuu. De ce am spus asta? Cine spune așa ceva? Sigur au crezut că sunt ciudat. Modul în care m-au privit.. da, au observat. Ar fi fost mai bine să nu fi mers.",
  },
];

const STATS_HERO = [
  { value: "12%", label: "din populație experimentează anxietate socială" },
  { value: "15 ani", label: "vârsta medie de debut" },
  { value: "75%", label: "nu consultă niciodată un specialist" },
];

const COMPARE_ROWS: Array<[string, string, string]> = [
  ["Ce este", "O trăsătură de personalitate", "O tulburare clinică"],
  ["Intensitate", "Disconfort ușor-moderat", "Frică intensă, disproporționată"],
  ["Durabilitate", "Se atenuează după 15-20 min", "Persistă sau se intensifică"],
  ["După situație", "Te simți OK", "Ruminezi ore sau zile"],
  ["Evitare", "Rară, depășibilă", "Frecventă, rigidă, costisitoare"],
  ["Impact funcțional", "Minim", "Sever.. carieră, relații, viață"],
  ["Necesită psihoterapie", "Nu", "Da"],
];

const SITUATII = [
  { bold: "Telefonul sună.", text: `Cineva te caută. Îl lași să sune până se oprește. Apoi îi scrii un mesaj.. „scuze, nu am putut răspunde". Știi că ai putut. Dar a răspunde însemna să vorbești nepregătit, și asta e prea mult.` },
  { bold: "Ești la masă cu colegi.", text: "Toți comandă la fel de repede, natural. Tu citești meniul de 3 ori, dar nu fiindcă nu știi ce vrei, ci fiindcă îți repeți în cap cum să comanzi fără să te bâlbâi." },
  { bold: "O ședință de lucru.", text: `Ai o idee bună. O știi. Dar în capul tău se derulează scenariul.. „dacă spun o prostie?", „dacă toți se uită la mine?". Așa că taci. Altcineva spune aceeași idee, 10 minute mai târziu. Primește felicitări.` },
  { bold: "O petrecere.", text: "Te-ai pregătit o oră. Ai repetat mental câteva subiecte de conversație. Ajungi acolo și primele 20 de minute le petreci lângă perete, cu telefonul în mână, prefăcându-te că verifici ceva important." },
  { bold: "Cineva îți face un compliment.", text: "În loc să simți bucurie, simți disconfort. Îți spui că sigur nu vorbește serios. Sau dacă acum așteaptă ceva de la tine și nu te ridici la nivelul așteptărilor?" },
  { bold: "După orice interacțiune socială.", text: "Nu te gândești la ce a mers bine. Derulezi filmul doar pe momentele în care ai simțit că ai greșit. Un cuvânt spus greșit, o pauză prea lungă, un zâmbet care poate a părut forțat.. le analizezi ore întregi." },
  { bold: "Succesul te sperie la fel de tare ca eșecul.", text: "Ai fost lăudat într-o ședință. În loc să te simți bine, simți o presiune enormă. Te gândești că acum așteaptă și mai mult de la tine, și data viitoare, dacă nu performezi la fel, vor vedea că de fapt nu ești așa de bun." },
];

const FAZE = [
  {
    label: "Faza 1",
    title: "Predicția negativă (înainte)",
    text: `Totul începe înainte ca situația socială să aibă loc. Creierul tău lansează o serie de predicții automate.. „vor vedea că sunt anxios", „o să mă bâlbâi și toată lumea o să observe". Aceste predicții nu sunt simple gânduri negative în sensul banal, ci estimări automate ale amenințării pe care creierul tău le generează fără voia ta. Studiile arată că persoanele cu anxietate socială estimează probabilitatea unui rezultat social negativ de 2-3 ori mai mare decât realitatea.`,
  },
  {
    label: "Faza 2",
    title: "Auto-monitorizarea excesivă (în timpul)",
    text: `Odată ce ești în situația socială, atenția ta face ceva paradoxal. În loc să se îndrepte către exterior, se întoarce către interior. Începi să te observi pe tine.. „îmi tremură mâna", „am transpirat pe frunte". Această auto-monitorizare funcționează ca o cameră de supraveghere întoarsă spre tine. Nu mai ești în conversație, ci în evaluare. Ironia e brutală: tocmai încercarea de a nu părea anxios te face să pari și să fii mai anxios.`,
  },
  {
    label: "Faza 3",
    title: "Ruminația post-eveniment (după)",
    text: `După interacțiunea socială, creierul tău nu se oprește. Pornește procesul de revizie, dar cu un filtru sistematic negativ.. derulezi filmul doar pe momentele în care ai simțit că ceva a mers prost, ignori tot ce a mers bine, amplifici semnificația fiecărui mic eșec. Această ruminație confirmă predicția negativă inițială, acel sentiment familiar de „am știut eu că va fi rău". Și astfel, cercul se închide.`,
  },
];

const IMPACT_CARDS = [
  {
    title: "Cariera",
    text: "Nu vorbești în ședințe, refuzi promovările care implică management și nu negociezi salariul. Rămâi sub potențialul tău, deși ai competența, doar că nu suporți să fii văzut.",
    stat: "92%",
    statLabel: "raportează impact asupra carierei",
  },
  {
    title: "Relațiile",
    text: "Eviti să cunoști oameni noi. Relațiile romantice fie nu se formează, fie rămân superficiale.. pentru că intimitatea presupune să fii văzut așa cum ești, și asta e exact ce te sperie.",
    stat: "64%",
    statLabel: "raportează impact asupra relațiilor",
  },
  {
    title: "Sănătatea mintală",
    text: "În 69-88% din cazuri apare alături de alte tulburări. Cel mai frecvent, depresia.. care se instalează în medie la 12 ani după debut. Alcoolismul e precedat de fobia socială în 85% din cazuri.",
    stat: "85%",
    statLabel: "alcoolism precedat de fobie socială",
  },
];

const PSYCHE_BLOCKS = [
  {
    title: "Rușinea de bază",
    subtitle: "Nu am greșit, ci sunt greșit",
    text: "Există o diferență fundamentală între vinovăție și rușine. Vinovăția spune că ai făcut ceva rău, pe când rușinea spune că ești ceva rău. Vinovăția e o pată pe haine, o poți curăța. Rușinea e ca și cum tu ai fi pata. Persoanele cu anxietate socială nu se tem că vor face o greșeală, ci că sunt o greșeală.. că există ceva fundamental greșit la ele, ceva pe care ceilalți îl vor vedea dacă se uită suficient de atent.",
  },
  {
    title: "Părintele interior critic",
    subtitle: "Vocea din capul tău nu e a ta",
    text: `Fiecare persoană cu anxietate socială are un critic interior extrem de vocal.. vocea care spune „nu trebuie să te dai mare", „cine te crezi", „o să te faci de râs". Această voce nu s-a născut în capul tău, ci a fost internalizată. Ai înghițit vocile critice din copilărie și le-ai instalat ca un software care rulează automat.`,
  },
  {
    title: "Dorința vs. teama",
    subtitle: "Conflictul central",
    text: "Stai în fața unei uși. Știi că în spate e ceva ce vrei.. conexiune, aprobare, apartenență. Dar ești convins că ușa te va lovi când încerci să o deschizi. Ești de fapt o persoană care vrea relații disperat, dar care a învățat că prețul conexiunii este riscul umilirii.",
  },
  {
    title: "Succesul amenințător",
    subtitle: "Nu te da mare",
    text: "Una dintre cele mai contra-intuitive descoperiri din practica clinică este că pentru persoanele cu anxietate socială, succesul poate fi la fel de amenințător ca eșecul. O pacientă de 24 de ani nu putea socializa fără alcool. În terapie, s-a descoperit că tatăl ei o critica constant. Când a fost aleasă majoretă la școală, tatăl a numit-o încrezută și răsfățată. Mesajul pe care l-a internalizat: succes = afișare = rușine.",
  },
];

const MESAJE_PSIHIC = [
  `„Am nevoie de siguranță, nu de curaj".. nu îți lipsește curajul, ci senzația că ești în siguranță printre oameni.`,
  `„Cineva mi-a spus că sunt greșit și am crezut".. convingerea ta despre tine nu e un adevăr, e o internalizare.`,
  `„Vreau să fiu văzut, dar mă tem de ce vor vedea".. nu eviți oamenii, ci judecata.`,
  `„Încerc să te protejez de o durere veche".. evitarea nu e slăbiciune, e un mecanism de apărare care a funcționat cândva.`,
  `„Nu mai vreau să mă prefac".. mulți clienți descriu senzația de impostor, că se prefac că sunt adulți, că sunt competenți.`,
  `„Am nevoie să fiu acceptat, nu reparat".. primul pas nu este să te schimbi, ci să înțelegi că nu ești defect.`,
];

const STEPS = [
  {
    num: "1",
    title: "Mută atenția de la interior la exterior",
    text: "Data viitoare când ești într-o conversație și simți că te pierzi în auto-monitorizare, concentrează-te pe ce spune cealaltă persoană. Nu pe cum arăți tu, ci pe cuvintele și expresia lor. Cercetările arată că simpla redirecționare a atenției reduce semnificativ anxietatea percepută.",
  },
  {
    num: "2",
    title: "Renunță la un comportament de siguranță (unul singur)",
    text: "Alege cel mai mic comportament de siguranță pe care îl folosești și renunță la el intenționat. Dacă eviți contactul vizual, privește în ochii celuilalt 2-3 secunde mai mult. Nu toate odată, doar unul singur, și observă ce se întâmplă. În cele mai multe cazuri.. nimic.",
  },
  {
    num: "3",
    title: "Testează-ți predicțiile",
    text: `Înainte de o situație socială, notează-ți predicția. Exact, pe hârtie.. „cred că voi roși și toată lumea va observa". Apoi, după situație, verifică: s-a întâmplat? Cu timpul, această practică demolează o iluzie fundamentală.. că predicțiile tale sunt fapte.`,
  },
  {
    num: "4",
    title: "Stai în situație până când anxietatea scade",
    text: "Dacă rămâi în situația temută fără să fugi și fără comportamente de siguranță, anxietatea scade de la sine în 30-90 de minute. Răspunsul fight-or-flight este proiectat să fie un răspuns de urgență. Fiecare rămânere în situație oferă creierului dovada contrară.",
  },
  {
    num: "5",
    title: "Oprește ruminația cu o regulă simplă",
    text: "După o interacțiune socială, dă-ți voie să te gândești la ea maximum 5 minute. Pune un timer. Notează atât ce a mers prost, cât și ce a mers bine. După cele 5 minute, oprește-te deliberat. Ruminația e ca un incendiu. Dacă o oprești devreme, se stinge.",
  },
];

const NU_FUNCTIONEAZA = [
  { bold: "Relaxează-te", text: "Dacă ai putea să te relaxezi, ai face-o. Relaxarea nu e o decizie, e un rezultat." },
  { bold: "Evitarea", text: "Reduce anxietatea pe termen scurt, o amplifică pe termen lung." },
  { bold: "Alcoolul ca lubrifiant social", text: "Funcționează temporar, dar împiedică învățarea. Creierul atribuie succesul social alcoolului, nu ție." },
  { bold: "Autoperfecționarea", text: "Problema nu e performanța ta. Problema e standardul imposibil pe care ți l-ai fixat." },
  { bold: "Căutarea de reasigurare", text: `întrebarea „a fost OK?" oferă alinare pentru 5 minute, apoi revine îndoiala.` },
];

const DEMYSTIFY = [
  { bold: "Nu trebuie să vorbești la telefon.", text: `Poți scrie. Un mesaj, un email, un formular. Primele cuvinte pot fi.. „am citit pagina și mă recunosc". Atât, e suficient.` },
  { bold: "Nu trebuie să fii pregătit pentru terapie.", text: "Nu există un nivel de pregătire necesar. Vii așa cum ești. Cu anxietatea, cu îndoielile, cu senzația că poate exagerezi." },
  { bold: "Nu te voi judeca.", text: "Lucrez cu oameni care trăiesc exact ce trăiești tu de peste 10 ani. Am auzit fiecare variantă a acestei povești. Nimic nu te va face să pari ciudat în ochii mei." },
  { bold: "Nu va fi un interogatoriu.", text: "Terapia nu înseamnă să răspunzi la întrebări inconfortabile în prima ședință. Înseamnă să construim, în ritmul tău, un spațiu în care poți fi văzut fără să te temi." },
];

const FAQS = [
  {
    q: "Anxietatea socială se vindecă complet?",
    a: `În majoritatea cazurilor, da. 75% dintre persoanele care urmează terapia au ameliorare durabilă. Vindecare nu înseamnă că nu vei mai simți niciodată anxietate în situații sociale.. înseamnă că anxietatea nu îți va mai controla viața și deciziile.`,
  },
  {
    q: "Cât durează tratamentul?",
    a: "În medie, 16-20 de ședințe. Unele persoane au nevoie de mai puțin, altele de mai mult. Depinde de severitate, de cât de veche e tulburarea și de prezența altor tulburări asociate.",
  },
  {
    q: "Am nevoie de medicamente?",
    a: "Nu neapărat. Psihoterapia singură este eficientă în cele mai multe cazuri. Medicația poate fi utilă în cazuri severe, dar cercetarea arată că beneficiile se pierd adesea după oprirea tratamentului.",
  },
  {
    q: "Dar dacă e doar timiditate?",
    a: "Doar 36% dintre persoanele foarte timide au fobia socială. Dar dacă timiditatea ta te face să eviți situații, să refuzi oportunități și să ruminezi după fiecare interacțiune, nu e timiditate.",
  },
  {
    q: "De ce mi-e frică să contactez un psiholog când am anxietate socială?",
    a: "Tocmai asta face anxietatea socială.. transformă orice interacțiune nouă într-un obstacol. Frica de a contacta un specialist este unul dintre simptomele tulburării, nu un motiv să nu o faci. Poți începe cu un mesaj scris, fără apel telefonic, fără presiune.",
  },
  {
    q: "Anxietatea socială afectează și oamenii care par încrezători?",
    a: `Da. Mulți oameni cu anxietate socială au învățat să performeze normalitatea. Sunt cei care par cei mai dezinvolți la petrecere și apoi petrec 3 zile analizând fiecare cuvânt.`,
  },
  {
    q: "De ce am anxietate socială dacă nu am avut o copilărie traumatică?",
    a: "Nu e nevoie de o traumă majoră. Uneori e suficient un părinte care critică consistent, un mediu școlar competitiv, sau chiar o predispoziție genetică activată de un mediu care nu a oferit suficientă siguranță emoțională.",
  },
];

const REFERENCES = [
  <>American Psychiatric Association. (2013). <em>Diagnostic and Statistical Manual of Mental Disorders</em> (5th ed.). Arlington, VA: American Psychiatric Publishing.</>,
  <>Andrews, G., Creamer, M., Crino, R., Hunt, C., Lampe, L., &amp; Page, A. (2003). <em>The Treatment of Anxiety Disorders: Clinician Guides and Patient Manuals</em> (2nd ed.). Cambridge University Press.</>,
  <>Bandelow, B., &amp; Michaelis, S. (2015). Epidemiology of anxiety disorders in the 21st century. <em>Dialogues in Clinical Neuroscience</em>, 17(3), 327-335.</>,
  <>Clark, D.M. (2001). A cognitive perspective on social phobia. In W.R. Crozier &amp; L.E. Alden (Eds.), <em>International Handbook of Social Anxiety</em> (pp. 405-430). Wiley.</>,
  <>Clark, D.M., &amp; Beck, A.T. (2010). <em>Cognitive Therapy of Anxiety Disorders: Science and Practice</em>. Guilford Press.</>,
  <>Clark, D.M., &amp; Wells, A. (1995). A cognitive model of social phobia. In R.G. Heimberg et al. (Eds.), <em>Social Phobia: Diagnosis, Assessment, and Treatment</em> (pp. 69-93). Guilford Press.</>,
  <>Fehm, L., Pelissolo, A., Furmark, T., &amp; Wittchen, H.U. (2005). Size and burden of social phobia in Europe. <em>European Neuropsychopharmacology</em>, 15(4), 453-462.</>,
  <>Gabbard, G.O. (2014). <em>Psychodynamic Psychiatry in Clinical Practice</em> (5th ed.). American Psychiatric Publishing.</>,
  <>Heimberg, R.G., Brozovich, F.A., &amp; Rapee, R.M. (2010). A cognitive-behavioral model of social anxiety disorder. In S.G. Hofmann &amp; P.M. DiBartolo (Eds.), <em>Social Anxiety</em> (2nd ed., pp. 395-422). Academic Press.</>,
  <>Hofmann, S.G., &amp; DiBartolo, P.M. (2000). An instrument to assess self-statements during public speaking: Scale development and preliminary psychometric properties. <em>Behavior Therapy</em>, 31(3), 499-515.</>,
  <>Kessler, R.C., Berglund, P., Demler, O., Jin, R., Merikangas, K.R., &amp; Walters, E.E. (2005). Lifetime prevalence and age-of-onset distributions of DSM-IV disorders in the National Comorbidity Survey Replication. <em>Archives of General Psychiatry</em>, 62(6), 593-602.</>,
  <>Kessler, R.C., Petukhova, M., Sampson, N.A., Zaslavsky, A.M., &amp; Wittchen, H.U. (2012). Twelve-month and lifetime prevalence and lifetime morbid risk of anxiety and mood disorders in the United States. <em>International Journal of Methods in Psychiatric Research</em>, 21(3), 169-184.</>,
  <>Leahy, R.L., Holland, S.J., &amp; McGinn, L.K. (2012). <em>Treatment Plans and Interventions for Depression and Anxiety Disorders</em> (2nd ed.). Guilford Press.</>,
  <>Leichsenring, F., Salzer, S., Beutel, M.E., et al. (2013). Psychodynamic therapy and cognitive-behavioral therapy in social anxiety disorder: A multicenter randomized controlled trial. <em>American Journal of Psychiatry</em>, 170(7), 759-767.</>,
  <>Mayo-Wilson, E., Dias, S., Mavranezouli, I., et al. (2014). Psychological and pharmacological interventions for social anxiety disorder in adults: A systematic review and network meta-analysis. <em>The Lancet Psychiatry</em>, 1(5), 368-376.</>,
  <>Moscovitch, D.A. (2009). What is the core fear in social phobia? A new model to facilitate individualized case conceptualization and treatment. <em>Cognitive and Behavioral Practice</em>, 16(2), 123-134.</>,
  <>Rapee, R.M., &amp; Heimberg, R.G. (1997). A cognitive-behavioral model of anxiety in social phobia. <em>Behaviour Research and Therapy</em>, 35(8), 741-756.</>,
  <>Ruscio, A.M., Brown, T.A., Chiu, W.T., Sareen, J., Stein, M.B., &amp; Kessler, R.C. (2008). Social fears and social phobia in the USA: Results from the National Comorbidity Survey Replication. <em>Psychological Medicine</em>, 38(1), 15-28.</>,
  <>Schneier, F.R., Johnson, J., Hornig, C.D., Liebowitz, M.R., &amp; Weissman, M.M. (1992). Social phobia: Comorbidity and morbidity in an epidemiologic sample. <em>Archives of General Psychiatry</em>, 49(4), 282-288.</>,
  <>Stein, M.B., &amp; Stein, D.J. (2008). Social anxiety disorder. <em>The Lancet</em>, 371(9618), 1115-1125.</>,
  <>Wang, P.S., Berglund, P., Olfson, M., Pincus, H.A., Wells, K.B., &amp; Kessler, R.C. (2005). Failure and delay in initial treatment contact after first onset of mental disorders in the National Comorbidity Survey Replication. <em>Archives of General Psychiatry</em>, 62(6), 603-613.</>,
  <>Wittchen, H.U., &amp; Fehm, L. (2003). Epidemiology and natural course of social fears and social phobia. <em>Acta Psychiatrica Scandinavica</em>, 108(Suppl. 417), 4-18.</>,
  <>Wong, Q.J., &amp; Rapee, R.M. (2016). The aetiology and maintenance of social anxiety disorder: A synthesis of complementary theoretical models and formulation of a new integrated model. <em>Journal of Affective Disorders</em>, 203, 84-100.</>,
];

export default function AnxietateSocialaPage() {
  const [refsOpen, setRefsOpen] = useState(false);

  return (
    <main className="font-work min-h-screen bg-white text-lp-navy">

      {/* ── HERO ── */}
      <section className="bg-white px-6 pt-14 pb-12 md:pt-20 md:pb-16">
        <div className="mx-auto max-w-[820px]">
          <nav className="mb-6 flex items-center gap-2 text-sm text-lp-mute-soft">
            <Link href="/tipuri" className="underline underline-offset-2 hover:no-underline">
              Tipuri
            </Link>
            <span aria-hidden>→</span>
            <span className="text-lp-navy">Anxietate socială</span>
          </nav>

          <p className="text-base font-semibold uppercase tracking-[0.2em] text-lp-mute md:text-lg">
            De{" "}
            <Link href="/despre-daniel" className="text-lp-navy underline-offset-2 hover:underline">
              Daniel Gagea
            </Link>
            , psiholog clinician, psihoterapeut
          </p>

          <h1 className="mt-4 font-work text-4xl font-bold leading-[1.05] tracking-tight text-lp-navy md:text-5xl lg:text-6xl">
            <span className="lp-yellow-underline">Anxietatea</span> socială.
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-lp-mute md:text-xl">
            Nu ești nici timid, nici ciudat, și cu siguranță nu ești singur.
          </p>

          <p className="mt-4 text-sm text-lp-mute-soft">
            Trăiești cu asta de ani de zile?{" "}
            <Link
              href="#ce-poti-face"
              className="font-semibold text-lp-cyan-dark underline underline-offset-2 hover:no-underline"
            >
              Mergi direct la Ce poți face acum
            </Link>
          </p>
        </div>
      </section>

      {/* ── ACTE: CUM ARATĂ DIN INTERIOR ── */}
      <section className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1100px]">
          <div className="mx-auto max-w-[820px] text-center">
            <p className="text-base font-semibold uppercase tracking-[0.2em] text-lp-mute md:text-lg">
              Din interior
            </p>
            <h2 className="mt-3 font-work text-3xl font-bold leading-tight tracking-tight text-lp-navy md:text-4xl lg:text-[44px]">
              Cum arată anxietatea socială, în <span className="lp-yellow-underline">trei acte</span>.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {ACTE.map((act) => (
              <div
                key={act.label}
                className="rounded-md border border-lp-border bg-white p-7 transition hover:-translate-y-0.5 hover:border-lp-cyan hover:shadow-[0_16px_48px_rgba(8,29,61,0.08)]"
              >
                <span className="inline-block rounded-full bg-lp-yellow px-3 py-1 text-xs font-bold uppercase tracking-wider text-lp-navy">
                  {act.label}
                </span>
                <p className="mt-5 text-base leading-relaxed text-lp-mute md:text-[17px]">
                  {act.monolog}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-[820px] space-y-4 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Dacă ai recunoscut ceva din ce ai citit, nu ești nici timid, nici ciudat, și cu siguranță nu ești singur.
            </p>
            <p>
              Ce tocmai ai citit este experiența trăită de aproximativ{" "}
              <strong className="text-lp-navy">1 din 8 oameni</strong> la un moment dat în viața lor. Și are un nume.
            </p>
          </div>
        </div>
      </section>

      {/* ── CE ESTE ── */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-16">
            <div>
              <p className="text-base font-semibold uppercase tracking-[0.2em] text-lp-mute md:text-lg">
                Definiție
              </p>
              <h2 className="mt-3 font-work text-3xl font-bold leading-tight tracking-tight text-lp-navy md:text-4xl lg:text-[44px]">
                Ce este <span className="lp-yellow-underline">anxietatea socială</span>.
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
                <p>
                  Anxietatea socială (numită și fobia socială) este o frică intensă și persistentă de situațiile sociale în care te simți observat, evaluat sau judecat de ceilalți. Nu are legătură cu timiditatea sau introversiunea, ci este o tulburare reală, frecventă și tratabilă.
                </p>
                <p>
                  Frica își are originea într-o convingere profundă.. că ceilalți vor observa ceva greșit la tine și te vor respinge, umili sau ridiculiza. Această convingere activează un lanț de reacții cognitive, emoționale și fizice care îți sabotează exact ceea ce îți dorești cel mai mult.. să funcționezi normal printre oameni.
                </p>
              </div>
            </div>

            <div className="rounded-md border-l-4 border-lp-cyan bg-lp-navy p-8 md:p-10">
              <div className="space-y-7">
                {STATS_HERO.map((s) => (
                  <div key={s.label}>
                    <p className="font-work text-3xl font-bold tracking-tight text-lp-cyan md:text-4xl">
                      {s.value}
                    </p>
                    <p className="mt-2 text-sm leading-snug text-white/75 md:text-base">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <blockquote className="mx-auto mt-12 max-w-[820px] border-l-4 border-lp-cyan pl-6 italic">
            <p className="font-work text-lg leading-relaxed text-lp-navy md:text-xl">
              Ultima cifră e cea care doare cel mai tare. Înseamnă că 3 din 4 oameni cu această tulburare trăiesc cu ea în tăcere, fără să știe că există un nume pentru ceea ce simt și, mai important, un tratament care funcționează.
            </p>
          </blockquote>
        </div>
      </section>

      {/* ── COMPARE TABLE ── */}
      <section className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1000px]">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-lp-mute md:text-lg">
            Diferența
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight tracking-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Nu ești timid. <span className="lp-yellow-underline">Uite diferența</span>.
          </h2>

          <div className="mt-10 overflow-x-auto rounded-md border border-lp-border bg-white">
            <table className="w-full table-fixed text-left text-sm md:text-base">
              <colgroup>
                <col className="w-[28%]" />
                <col className="w-[36%]" />
                <col className="w-[36%]" />
              </colgroup>
              <thead>
                <tr className="bg-lp-navy text-white">
                  <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wider md:px-6 md:text-sm"></th>
                  <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wider md:px-6 md:text-sm">
                    Timiditate
                  </th>
                  <th className="border-l-4 border-lp-yellow px-4 py-4 text-xs font-semibold uppercase tracking-wider md:px-6 md:text-sm">
                    Anxietate socială
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map(([label, a, b], i) => (
                  <tr
                    key={i}
                    className={`border-b border-lp-border last:border-b-0 ${i % 2 === 1 ? "bg-lp-bg/40" : ""}`}
                  >
                    <td className="px-4 py-4 text-sm font-semibold text-lp-navy md:px-6 md:text-base">
                      {label}
                    </td>
                    <td className="px-4 py-4 text-sm text-lp-mute md:px-6 md:text-base">
                      {a}
                    </td>
                    <td className="border-l-4 border-lp-yellow bg-lp-yellow/10 px-4 py-4 text-sm text-lp-navy md:px-6 md:text-base">
                      {b}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 space-y-4 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              <strong className="text-lp-navy">Omul timid</strong> merge la petrecere și după 20 de minute se simte OK, începe să vorbească, se relaxează.
            </p>
            <p>
              <strong className="text-lp-navy">Omul cu anxietate socială</strong> petrece 3 ore monitorizându-se.. „am spus ceva greșit", „se vede că transpir".. apoi 2 zile analizând fiecare moment.
            </p>
          </div>
        </div>
      </section>

      {/* ── RECUNOAȘTERE ── */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-lp-mute md:text-lg">
            Recunoaștere
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight tracking-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Ai anxietate socială? Cum o <span className="lp-yellow-underline">recunoști</span>.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            Nu îți voi cere să bifezi un checklist. Dacă ai anxietate socială, simpla idee de a fi catalogat produce exact acel sentiment. În schimb, îți voi descrie câteva situații. Tu doar citește.
          </p>

          <div className="mt-10 space-y-6">
            {SITUATII.map((item, i) => (
              <div
                key={i}
                className="border-l-4 border-lp-border pl-6 transition hover:border-lp-cyan"
              >
                <p className="text-base leading-relaxed text-lp-mute md:text-[17px]">
                  <strong className="text-lp-navy">{item.bold}</strong> {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-md border-l-4 border-lp-cyan bg-lp-bg p-8 md:p-10">
            <div className="space-y-4 text-base leading-relaxed text-lp-mute md:text-lg">
              <p>
                Dacă ai recunoscut trei sau mai multe din aceste situații ca un{" "}
                <strong className="text-lp-navy">pattern</strong>.. nu ca ceva care s-a întâmplat o dată, ci ca ceva care se repetă constant.. atunci ceea ce trăiești nu e un defect de caracter. Este o tulburare frecventă, înțeleasă și tratabilă.
              </p>
              <p>
                <strong className="text-lp-cyan-dark">92%</strong> din persoanele cu fobie socială raportează că tulburarea le-a afectat cariera.{" "}
                <strong className="text-lp-cyan-dark">64%</strong> spun că le-a afectat relațiile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MECANISM (DARK) ── */}
      <section className="bg-lp-navy px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base font-semibold uppercase tracking-[0.22em] text-lp-cyan md:text-lg">
            Mecanism
          </p>
          <h2 className="mt-4 font-work text-3xl font-bold leading-tight text-white md:text-4xl lg:text-[44px]">
            De ce se <span className="bg-lp-yellow px-2 text-lp-navy">întâmplă</span>.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/85 md:text-lg">
            Anxietatea socială nu este un mister. Funcționează după un algoritm precis, în trei faze, care se repetă și se auto-alimentează.
          </p>

          <div className="mt-10 space-y-10">
            {FAZE.map((phase) => (
              <div
                key={phase.label}
                className="border-b border-white/10 pb-8 last:border-b-0 last:pb-0"
              >
                <span className="inline-block rounded-full bg-lp-cyan px-3 py-1 text-xs font-bold uppercase tracking-wider text-lp-navy">
                  {phase.label}
                </span>
                <h3 className="mt-4 font-work text-2xl font-bold tracking-tight text-white md:text-3xl">
                  {phase.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
                  {phase.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-md border-l-4 border-lp-yellow bg-white/[0.06] p-6 md:p-8">
            <p className="text-base leading-relaxed text-white/90 md:text-lg">
              <strong className="text-lp-yellow">Asta este capcana:</strong> fiecare fază o alimentează pe următoarea.. predicția negativă crește auto-monitorizarea, care degradează performanța, care alimentează ruminația, care confirmă predicția. Și totul se repetă, tot mai intens.
            </p>
          </div>
        </div>
      </section>

      {/* ── AUTO-PERPETUARE ── */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1100px]">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-lp-mute md:text-lg">
            Impact
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight tracking-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Cum se <span className="lp-yellow-underline">auto-perpetuează</span>.
          </h2>
          <p className="mt-6 max-w-[820px] text-base leading-relaxed text-lp-mute md:text-lg">
            La început, eviti doar situațiile foarte dificile. Pe măsură ce trece timpul, începi să eviți și situații tot mai mici. Zona ta de confort se micșorează până când viața devine o serie de scuze și retrageri.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {IMPACT_CARDS.map((card) => (
              <div
                key={card.title}
                className="flex flex-col rounded-md border border-lp-border bg-white p-7 transition hover:-translate-y-0.5 hover:border-lp-cyan hover:shadow-[0_16px_48px_rgba(8,29,61,0.08)]"
              >
                <h3 className="font-work text-xl font-bold text-lp-navy md:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-lp-mute">
                  {card.text}
                </p>
                <div className="mt-6 flex items-baseline gap-3 border-t border-lp-border pt-5">
                  <span className="font-work text-3xl font-bold tracking-tight text-lp-cyan-dark md:text-4xl">
                    {card.stat}
                  </span>
                  <span className="text-xs text-lp-mute-soft md:text-sm">
                    {card.statLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-[820px] rounded-md border-l-4 border-lp-cyan bg-lp-bg p-8 md:p-10">
            <h3 className="font-work text-xl font-bold tracking-tight text-lp-navy md:text-2xl">
              De ce ideea că trece de la sine e un mit
            </h3>
            <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
              Spre deosebire de alte tulburări de anxietate, anxietatea socială netratată are un curs cronic.. nu se ameliorează cu vârsta și nu dispare când te obișnuiești. Fără intervenție, se agravează, pentru că fiecare evitare confirmă convingerea că nu poți face față.
            </p>
          </div>
        </div>
      </section>

      {/* ── PSYCHE ── */}
      <section className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-lp-mute md:text-lg">
            Perspectiva clinică
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight tracking-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Ce vrea să spună <span className="lp-yellow-underline">psihicul</span>.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-lp-mute md:text-lg">
            <p>
              Această secțiune e diferită de restul paginii. Până acum am vorbit despre cum funcționează anxietatea socială. Acum vreau să vorbim despre{" "}
              <strong className="text-lp-navy">de ce există</strong>. Ce încearcă psihicul tău să comunice prin acest simptom.
            </p>
            <p>
              Perspectiva asta vine din practica mea clinică și din psihologia psihodinamică. Nu o să găsești asta într-un articol generic despre anxietatea socială.
            </p>
          </div>

          <div className="mt-12 space-y-10">
            {PSYCHE_BLOCKS.map((sub) => (
              <div key={sub.title} className="border-b border-lp-border pb-8 last:border-b-0 last:pb-0">
                <h3 className="font-work text-2xl font-bold tracking-tight text-lp-navy md:text-3xl">
                  {sub.title}
                </h3>
                <p className="mt-1 text-base font-semibold text-lp-cyan-dark md:text-lg">
                  {sub.subtitle}
                </p>
                <p className="mt-4 text-base leading-relaxed text-lp-mute md:text-lg">
                  {sub.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <h3 className="font-work text-2xl font-bold tracking-tight text-lp-navy md:text-3xl">
              Cele șase mesaje ale psihicului
            </h3>
            <p className="mt-3 text-base text-lp-mute md:text-lg">
              Dacă ar putea vorbi, anxietatea ta socială ți-ar spune:
            </p>

            <div className="mt-6 flex flex-col gap-3">
              {MESAJE_PSIHIC.map((msg, i) => (
                <div
                  key={i}
                  className="rounded-md border-l-4 border-lp-cyan bg-white p-5 text-base leading-relaxed text-lp-navy md:text-[17px]"
                >
                  {msg}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CE POȚI FACE ── */}
      <section id="ce-poti-face" className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-lp-mute md:text-lg">
            Practic
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight tracking-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Ce poți face <span className="lp-yellow-underline">acum</span>.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            Nu îți voi spune să fii curajos sau să ieși din zona de confort. Dacă ai citit până aici, știi deja că problema nu e lipsa de curaj. Îți voi oferi în schimb câteva lucruri practice, validate științific.
          </p>

          <div className="mt-10 flex flex-col gap-5">
            {STEPS.map((step) => (
              <div
                key={step.num}
                className="flex gap-5 rounded-md border border-lp-border bg-white p-6 md:p-7"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lp-cyan text-base font-bold text-lp-navy">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-work text-lg font-bold text-lp-navy md:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-lp-mute md:text-[17px]">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-md border-l-4 border-lp-yellow bg-lp-bg p-7 md:p-8">
            <h3 className="font-work text-xl font-bold tracking-tight text-lp-navy md:text-2xl">
              Ce nu funcționează (deși pare logic)
            </h3>
            <ul className="mt-5 space-y-3 text-base leading-relaxed text-lp-mute md:text-[17px]">
              {NU_FUNCTIONEAZA.map((item) => (
                <li key={item.bold} className="flex gap-3">
                  <span aria-hidden className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-lp-cyan-dark" />
                  <span>
                    <strong className="text-lp-navy">{item.bold}</strong>.. {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── AJUTOR PROFESIONIST ── */}
      <section className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-lp-mute md:text-lg">
            Ajutor profesionist
          </p>
          <h2 className="mt-3 font-work text-3xl font-bold leading-tight tracking-tight text-lp-navy md:text-4xl lg:text-[44px]">
            Când să ceri <span className="lp-yellow-underline">ajutor</span>.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-lp-mute md:text-lg">
            Dacă te-ai recunoscut în ceea ce ai citit și dacă acest pattern îți afectează viața de cel puțin 6 luni, ceea ce faci singur poate să nu fie suficient. Și asta nu e o slăbiciune.
          </p>

          <div className="mt-10 space-y-5">
            {DEMYSTIFY.map((item, i) => (
              <div
                key={i}
                className="rounded-md border border-lp-border bg-white p-6 md:p-7"
              >
                <p className="text-base leading-relaxed text-lp-mute md:text-[17px]">
                  <strong className="text-lp-navy">{item.bold}</strong> {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CITESTE SI ── */}
      <section className="bg-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[820px]">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-lp-mute md:text-lg">
            Citește și
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/tipuri/anxietate-generalizata"
              className="inline-flex items-center gap-2 rounded-md border border-lp-border bg-white px-5 py-3 text-sm font-semibold text-lp-navy transition hover:border-lp-cyan hover:text-lp-cyan-dark"
            >
              Anxietatea generalizată
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/tipuri/fobii-specifice"
              className="inline-flex items-center gap-2 rounded-md border border-lp-border bg-white px-5 py-3 text-sm font-semibold text-lp-navy transition hover:border-lp-cyan hover:text-lp-cyan-dark"
            >
              Fobii specifice
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-lp-bg px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <div className="text-center">
            <p className="text-base font-semibold uppercase tracking-[0.2em] text-lp-cyan-dark md:text-lg">
              Întrebări frecvente
            </p>
            <h2 className="mt-3 font-work text-3xl font-bold leading-tight tracking-tight text-lp-navy md:text-4xl">
              Ce vor să știe oamenii despre anxietatea socială.
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
              Referințe științifice ({REFERENCES.length} surse)
            </button>
            <div className={`overflow-hidden transition-[max-height] duration-300 ${refsOpen ? "max-h-[4000px]" : "max-h-0"}`}>
              <ol className="mt-6 list-decimal space-y-2 pl-6 text-[13px] leading-relaxed text-lp-mute-soft">
                {REFERENCES.map((ref, i) => (
                  <li key={i}>{ref}</li>
                ))}
              </ol>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-lp-mute-soft">
            Această pagină nu înlocuiește un diagnostic profesional. Dacă te recunoști în ce ai citit, te încurajez să vorbești cu un specialist.
          </p>
        </div>
      </section>

      {/* ── CTA DARK ── */}
      <section className="bg-lp-navy px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1100px] text-center text-white">
          <p className="text-base font-semibold uppercase tracking-[0.22em] text-lp-cyan md:text-lg">
            Cabinet
          </p>
          <h2 className="mt-4 font-work text-3xl font-bold leading-tight md:text-5xl">
            Ai făcut deja{" "}
            <span className="bg-lp-yellow px-2 text-lp-navy">primul pas.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[680px] text-lg leading-relaxed text-white/85 md:text-xl">
            Dacă ai ajuns până aici, ai făcut deja ceva ce 75% dintre persoanele cu anxietate socială nu fac niciodată.. ai căutat să înțelegi ce ți se întâmplă.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <Link
              href="/programare?din=anxietate-sociala"
              className="lp-cta inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold md:text-lg"
            >
              Trimite un mesaj
              <span aria-hidden>→</span>
            </Link>
            <p className="text-sm text-white/60">Răspund personal la fiecare mesaj.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
