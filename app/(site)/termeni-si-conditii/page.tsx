import Link from "next/link";

export default function TermeniSiConditii() {
  return (
    <main className="font-work min-h-screen bg-white text-lp-navy">
      {/* HERO */}
      <section className="bg-white px-6 pt-14 pb-10 md:pt-20 md:pb-12">
        <div className="mx-auto max-w-[820px]">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-lp-mute-soft"
          >
            <Link
              href="/"
              className="hover:text-lp-navy transition"
            >
              Acasă
            </Link>
            <span aria-hidden className="opacity-40">
              /
            </span>
            <span className="text-lp-mute">Termeni și Condiții</span>
          </nav>

          <p className="mt-8 text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Legal
          </p>
          <h1 className="mt-4 font-work text-4xl font-bold leading-[1.05] tracking-tight text-lp-navy md:text-5xl lg:text-6xl">
            Termeni și Condiții.
          </h1>
          <p className="mt-5 text-sm text-lp-mute-soft">
            Ultima actualizare: 6 aprilie 2026
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-[820px] space-y-12">
            <section>
              <h2 className="font-work text-2xl font-bold leading-tight tracking-tight text-lp-navy md:text-3xl">
                Capitolul I. Prezentare generală
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-lp-mute md:text-[17px]">
                <p>
                  Website-ul totuldespreanxietate.ro este deținut de către{" "}
                  <strong className="font-semibold text-lp-navy">
                    Gagea D. Dumitru Daniel Cabinet Individual de Psihologie
                  </strong>
                  , o entitate legală înregistrată în România.
                </p>
                <p>
                  Gagea D. Dumitru Daniel Cabinet Individual de Psihologie are sediul social în Str. Tiberiu Ricci, Nr. 7, Et. 1, Ap. 27, Cam. 2, cod poștal 555300, având cod de identificare fiscală (CIF) 41912250.
                </p>
                <p>
                  Prin &bdquo;totuldespreanxietate.ro&rdquo; înțelegem orice pagină web (website, landing page, subdomeniu etc.) deținută, administrată sau aflată sub umbrela Gagea D. Dumitru Daniel Cabinet Individual de Psihologie. În timpul navigării pe Site-ul nostru, termenii precum, dar fără a ne limita la: &bdquo;noi&rdquo;, &bdquo;al/ale nostru/noastre&rdquo; se referă la Gagea D. Dumitru Daniel Cabinet Individual de Psihologie.
                </p>
                <p>
                  totuldespreanxietate.ro include toate informațiile online pentru utilizatorii care acceptă termenii și condițiile prezentate în acest document.
                </p>
                <p>
                  Vizitând platforma noastră online, vă angajați să acceptați și să respectați următorii Termeni și Condiții, incluzând termenii, condițiile și politicile adiționale menționate în cele ce urmează și/sau disponibile prin hyperlink. Acești Termeni și Condiții se aplică tuturor utilizatorilor platformei noastre, incluzând fără limitare utilizatorii care sunt navigatori și/sau distribuitori de conținut.
                </p>
                <p>
                  Vă rugăm să citiți acești Termeni și Condiții cu atenție înainte de a utiliza platforma noastră. Accesând sau utilizând orice parte a Site-ului, înseamnă că acceptați Termenii și Condițiile noastre. Dacă nu acceptați Termenii și Condițiile prezentate în această documentație, atunci nu ar trebui să continuați accesarea platformei noastre și/sau utilizarea serviciilor noastre.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-work text-2xl font-bold leading-tight tracking-tight text-lp-navy md:text-3xl">
                Capitolul II. Termeni și Definiții
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-lp-mute md:text-[17px]">
                <p>
                  <strong className="font-semibold text-lp-navy">
                    Platforma online / Site
                  </strong>{" "}
                  - Se referă la totuldespreanxietate.ro și implicit la Gagea D. Dumitru Daniel Cabinet Individual de Psihologie.
                </p>
                <p>
                  <strong className="font-semibold text-lp-navy">Proprietar</strong>{" "}
                  - Gagea D. Dumitru Daniel Cabinet Individual de Psihologie, cu sediul social în Str. Tiberiu Ricci, Nr. 7, Et. 1, Ap. 27, Cam. 2, cod poștal 555300, CIF 41912250.
                </p>
                <p>
                  <strong className="font-semibold text-lp-navy">Utilizator</strong>{" "}
                  - Persoana fizică sau juridică care folosește platforma noastră.
                </p>
                <p>
                  <strong className="font-semibold text-lp-navy">Depunere</strong>{" "}
                  - Împărtășirea datelor personale ale Utilizatorului prin platforma online, de exemplu, completarea unui formular de contact (împărtășirea adresei de e-mail, nume, prenume, telefon).
                </p>
                <p>
                  <strong className="font-semibold text-lp-navy">Link</strong>{" "}
                  - Se referă la un cuvânt cheie sau adresa unui site din afara sau interiorul Site-ului care, prin angajarea acestuia prin click, inițiază vizitarea unei pagini de internet noi.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-work text-2xl font-bold leading-tight tracking-tight text-lp-navy md:text-3xl">
                Capitolul III. Dreptul de proprietate intelectuală
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-lp-mute md:text-[17px]">
                <p>
                  Conținutul Site-ului totuldespreanxietate.ro (imagini, texte, elemente de grafică web, scripturi, software, drepturi de proiectare, drepturi de model, patente, mărci înregistrate) constituie integral proprietatea Gagea D. Dumitru Daniel Cabinet Individual de Psihologie și este protejat de Legea privind dreptul de autor și drepturile conexe, precum și de legile privind proprietatea intelectuală și industrială.
                </p>
                <p>
                  Utilizarea oricăror elemente enumerate mai sus fără acordul Gagea D. Dumitru Daniel Cabinet Individual de Psihologie se pedepsește conform legislației în vigoare.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-work text-2xl font-bold leading-tight tracking-tight text-lp-navy md:text-3xl">
                Capitolul IV. Condiții Generale
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-lp-mute md:text-[17px]">
                <p>
                  Acceptând Termenii și Condițiile prezentate pe această pagină, se înțelege că sunteți de vârstă majoră conform legilor României și consimțiți utilizarea platformei noastre de către minorii dumneavoastră.
                </p>
                <p>
                  Nicio parte a conținutului site-ului nu trebuie considerată o ofertă de a vinde sau de a cumpăra, cu excepția anunțurilor explicite de vânzare sau cumpărare.
                </p>
                <p>
                  Gagea D. Dumitru Daniel Cabinet Individual de Psihologie ia măsuri rezonabile pentru a asigura acuratețea informațiilor de pe site, dar nu poate fi considerată răspunzătoare pentru distorsionări ale datelor cauzate de erori de transmitere, defecte tehnice, viruși etc.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-work text-2xl font-bold leading-tight tracking-tight text-lp-navy md:text-3xl">
                Capitolul V. Caracter informativ
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-lp-mute md:text-[17px]">
                <p>
                  Conținutul de pe totuldespreanxietate.ro are scop exclusiv informativ și educațional. Informațiile prezentate pe acest site nu constituie sfat medical, diagnostic sau tratament și nu înlocuiesc consultul cu un specialist în sănătate mintală.
                </p>
                <p>
                  Fiecare persoană este diferită, iar ceea ce funcționează pentru o persoană poate să nu funcționeze pentru alta. Dacă vă confruntați cu simptome de anxietate sau alte dificultăți emoționale, vă recomandăm să consultați un psiholog sau psihoterapeut.
                </p>
                <p>
                  Într-o situație de urgență medicală, contactați 112 sau cel mai apropiat serviciu de urgență.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-work text-2xl font-bold leading-tight tracking-tight text-lp-navy md:text-3xl">
                Capitolul VI. Servicii de psihoterapie
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-lp-mute md:text-[17px]">
                <p>
                  Prin intermediul paginii de{" "}
                  <Link
                    href="/programare"
                    className="font-semibold text-lp-cyan-dark underline underline-offset-2 hover:no-underline"
                  >
                    programare
                  </Link>
                  , puteți solicita o consultație individuală online cu Daniel Gagea, psiholog clinician și psihoterapeut. Trimiterea formularului nu constituie un contract de psihoterapie, ci o cerere de contact.
                </p>
                <p>
                  Detaliile despre ședințe (frecvență, durată, onorariu, modalitate de plată) se stabilesc direct între terapeut și client, în cadrul primei discuții.
                </p>
                <p>
                  Anularea sau reprogramarea unei ședințe se face cu minimum 24 de ore înainte de ora stabilită. Ședințele anulate fără notificare prealabilă pot fi considerate efectuate.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-work text-2xl font-bold leading-tight tracking-tight text-lp-navy md:text-3xl">
                Capitolul VII. Prelucrarea datelor personale
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-lp-mute md:text-[17px]">
                <p>
                  Gagea D. Dumitru Daniel Cabinet Individual de Psihologie respectă confidențialitatea identității vizitatorilor acestui site. Site-ul poate fi vizitat fără ca vizitatorii să își dezvăluie identitatea sau alte informații personale despre ei înșiși.
                </p>
                <p>
                  Când completați formularul de programare, colectăm: numele, prenumele, adresa de email, numărul de telefon și mesajul dumneavoastră. Aceste date sunt utilizate exclusiv pentru a vă contacta în legătură cu cererea de consultație.
                </p>
                <p>
                  Nu vindem, nu închiriem și nu transmitem datele dumneavoastră personale către terți, cu excepția situațiilor impuse de lege.
                </p>
                <p>
                  Conform Regulamentului General privind Protecția Datelor (GDPR), aveți dreptul de a solicita: accesul la datele dumneavoastră personale, rectificarea datelor inexacte, ștergerea datelor (&bdquo;dreptul de a fi uitat&rdquo;), restricționarea prelucrării, portabilitatea datelor, precum și dreptul de a vă opune prelucrării.
                </p>
                <p>
                  Pentru exercitarea oricăruia dintre aceste drepturi, ne puteți contacta prin pagina de{" "}
                  <Link
                    href="/programare"
                    className="font-semibold text-lp-cyan-dark underline underline-offset-2 hover:no-underline"
                  >
                    contact
                  </Link>
                  . De asemenea, aveți dreptul de a depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP) dacă considerați că prelucrarea datelor dumneavoastră încalcă legislația în vigoare.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-work text-2xl font-bold leading-tight tracking-tight text-lp-navy md:text-3xl">
                Capitolul VIII. Utilizarea cookie-urilor
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-lp-mute md:text-[17px]">
                <p>
                  totuldespreanxietate.ro folosește cookie-uri. Cookie-urile reprezintă date stocate pe dispozitivul utilizatorului, conținând informații despre utilizator. Folosirea mecanismului de tip cookie reprezintă un avantaj pentru vizitatori, facilitând navigarea și afișarea conținutului relevant.
                </p>
                <p>
                  Acest site utilizează Google Analytics pentru analiza traficului. Google Analytics colectează informații anonime despre modul în care vizitatorii folosesc site-ul (pagini vizitate, durata vizitei, sursa traficului), fără a colecta date care vă identifică personal.
                </p>
                <p>
                  Puteți dezactiva cookie-urile din setările browserului dumneavoastră. Dezactivarea lor poate afecta funcționalitatea unor elemente ale site-ului.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-work text-2xl font-bold leading-tight tracking-tight text-lp-navy md:text-3xl">
                Capitolul IX. Securitatea datelor
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-lp-mute md:text-[17px]">
                <p>
                  Gagea D. Dumitru Daniel Cabinet Individual de Psihologie adoptă măsurile necesare pentru protejarea informațiilor personale ale utilizatorilor platformei totuldespreanxietate.ro.
                </p>
                <p>
                  Toate informațiile despre utilizatori sunt confidențiale și protejate atât online, cât și offline.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-work text-2xl font-bold leading-tight tracking-tight text-lp-navy md:text-3xl">
                Capitolul X. Exonerarea de răspundere
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-lp-mute md:text-[17px]">
                <p>
                  Informațiile incluse pe Site-ul totuldespreanxietate.ro sunt prezentate cu bună credință, din surse pe care le considerăm de încredere. Gagea D. Dumitru Daniel Cabinet Individual de Psihologie nu poate fi considerată responsabilă pentru daunele apărute ca urmare a utilizării improprii a informațiilor de pe site.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-work text-2xl font-bold leading-tight tracking-tight text-lp-navy md:text-3xl">
                Capitolul XI. Link-uri către terți
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-lp-mute md:text-[17px]">
                <p>
                  Site-ul nostru poate conține link-uri către site-uri externe. Nu suntem responsabili pentru conținutul acestora și nu ne asumăm răspunderea pentru daunele cauzate de utilizarea acestora.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-work text-2xl font-bold leading-tight tracking-tight text-lp-navy md:text-3xl">
                Capitolul XII. Modificarea Termenilor și Condițiilor
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-lp-mute md:text-[17px]">
                <p>
                  Ne rezervăm dreptul de a modifica Termenii și Condițiile noastre în orice moment. Este responsabilitatea dumneavoastră să verificați periodic această pagină pentru a fi la curent cu schimbările.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-work text-2xl font-bold leading-tight tracking-tight text-lp-navy md:text-3xl">
                Capitolul XIII. Contact
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-lp-mute md:text-[17px]">
                <p>
                  Pentru orice întrebări legate de Termenii și Condițiile noastre, vă rugăm să ne contactați prin pagina de{" "}
                  <Link
                    href="/programare"
                    className="font-semibold text-lp-cyan-dark underline underline-offset-2 hover:no-underline"
                  >
                    contact
                  </Link>
                  .
                </p>
              </div>
            </section>

            <section className="border-t border-lp-border pt-8">
              <p className="text-sm italic text-lp-mute-soft md:text-base">
                Acești termeni și condiții sunt guvernați de legislația din România.
              </p>
            </section>
        </div>
      </section>
    </main>
  );
}
