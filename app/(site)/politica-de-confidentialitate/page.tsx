import Link from "next/link";

export default function PoliticaDeConfidentialitate() {
  const h2Class =
    "font-work text-2xl font-bold leading-tight tracking-tight text-lp-navy md:text-3xl";
  const h3Class =
    "mt-7 font-work text-lg font-bold leading-snug tracking-tight text-lp-navy md:text-xl";
  const proseClass =
    "mt-5 space-y-4 text-base leading-relaxed text-lp-mute md:text-[17px]";
  const linkClass =
    "font-semibold text-lp-cyan-dark underline underline-offset-2 hover:no-underline";
  const ulClass = "mt-4 space-y-2 pl-5 list-disc marker:text-lp-cyan-dark";
  const tableWrapClass =
    "mt-5 overflow-x-auto rounded-md border border-lp-border";
  const tableClass = "w-full border-collapse text-sm md:text-[15px]";
  const thClass =
    "bg-lp-navy text-white px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.06em] md:text-[13px]";
  const tdClass =
    "border-t border-lp-border px-4 py-3 text-lp-mute leading-relaxed";

  return (
    <main className="font-work min-h-screen bg-white text-lp-navy">
      {/* HERO */}
      <section className="bg-white px-6 pt-14 pb-10 md:pt-20 md:pb-12">
        <div className="mx-auto max-w-[820px]">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-lp-mute-soft"
          >
            <Link href="/" className="hover:text-lp-navy transition">
              Acasă
            </Link>
            <span aria-hidden className="opacity-40">
              /
            </span>
            <span className="text-lp-mute">Politica de confidențialitate</span>
          </nav>

          <p className="mt-8 text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-lp-mute">
            Legal
          </p>
          <h1 className="mt-4 font-work text-4xl font-bold leading-[1.05] tracking-tight text-lp-navy md:text-5xl lg:text-6xl">
            Politica de confidențialitate.
          </h1>
          <p className="mt-5 text-sm text-lp-mute-soft">
            Ultima actualizare: 7 aprilie 2026
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-[820px] space-y-12">
          <section>
            <h2 className={h2Class}>1. Cine suntem</h2>
            <div className={proseClass}>
              <p>
                Website-ul{" "}
                <strong className="font-semibold text-lp-navy">
                  totuldespreanxietate.ro
                </strong>{" "}
                este operat de{" "}
                <strong className="font-semibold text-lp-navy">
                  Gagea D. Dumitru Daniel Cabinet Individual de Psihologie
                </strong>
                , cu sediul în Str. Tiberiu Ricci, Nr. 7, Et. 1, Ap. 27, Cam. 2, cod poștal 555300, CIF 41912250.
              </p>
              <p>
                Pentru orice întrebare legată de datele tale personale, ne poți contacta la adresa de email:{" "}
                <a
                  href="mailto:office@danielgagea.ro"
                  className={linkClass}
                >
                  office@danielgagea.ro
                </a>
                .
              </p>
            </div>
          </section>

          <section>
            <h2 className={h2Class}>2. Ce date personale colectăm</h2>

            <h3 className={h3Class}>2.1. Date pe care ni le oferi direct</h3>
            <div className={proseClass}>
              <p>Când completezi formularul de programare, colectăm:</p>
              <ul className={ulClass}>
                <li>Numele și prenumele</li>
                <li>Adresa de email</li>
                <li>Numărul de telefon (dacă îl furnizezi)</li>
                <li>Mesajul pe care ni-l trimiți</li>
              </ul>
            </div>

            <h3 className={h3Class}>2.2. Date colectate automat</h3>
            <div className={proseClass}>
              <p>
                Cu consimțământul tău explicit (prin banner-ul de cookie), colectăm:
              </p>
              <ul className={ulClass}>
                <li>
                  <strong className="font-semibold text-lp-navy">
                    Google Analytics (GA4)
                  </strong>{" "}
                  .. pagini vizitate, durata vizitei, sursa traficului, tipul dispozitivului, țara. Nu colectăm date care te identifică personal.
                </li>
                <li>
                  <strong className="font-semibold text-lp-navy">
                    Meta Pixel (Facebook)
                  </strong>{" "}
                  .. pagini vizitate, acțiuni pe site (ex: trimiterea formularului de programare). Aceste date sunt folosite pentru a afișa reclame relevante pe platformele Meta.
                </li>
              </ul>
              <p>
                Aceste instrumente se activează doar după ce apeși Acceptă toate sau activezi manual categoriile Analytics și Marketing în setările de cookie. Dacă alegi Doar esențiale, aceste instrumente nu se încarcă.
              </p>
            </div>

            <h3 className={h3Class}>2.3. Date tehnice</h3>
            <div className={proseClass}>
              <p>
                Serverele noastre (Vercel) colectează automat date tehnice minime necesare funcționării site-ului: adresa IP, tipul browser-ului, sistemul de operare. Aceste date nu sunt folosite pentru a te identifica personal.
              </p>
            </div>
          </section>

          <section>
            <h2 className={h2Class}>3. De ce colectăm aceste date</h2>
            <div className={tableWrapClass}>
              <table className={tableClass}>
                <thead>
                  <tr>
                    <th className={thClass}>Ce colectăm</th>
                    <th className={thClass}>De ce</th>
                    <th className={thClass}>Baza legală</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tdClass}>Date din formularul de programare</td>
                    <td className={tdClass}>
                      Pentru a prelua cererea ta și a te contacta
                    </td>
                    <td className={tdClass}>
                      Consimțământ (Art. 6(1)(a) GDPR)
                    </td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Google Analytics</td>
                    <td className={tdClass}>
                      Pentru a înțelege cum e folosit site-ul și a îmbunătăți conținutul
                    </td>
                    <td className={tdClass}>
                      Consimțământ (Art. 6(1)(a) GDPR)
                    </td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Meta Pixel</td>
                    <td className={tdClass}>
                      Pentru a măsura eficiența campaniilor publicitare
                    </td>
                    <td className={tdClass}>
                      Consimțământ (Art. 6(1)(a) GDPR)
                    </td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Date tehnice (IP, browser)</td>
                    <td className={tdClass}>
                      Funcționarea și securitatea site-ului
                    </td>
                    <td className={tdClass}>
                      Interes legitim (Art. 6(1)(f) GDPR)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className={h2Class}>4. Cookie-uri</h2>
            <div className={proseClass}>
              <p>
                Cookie-urile sunt fișiere mici stocate pe dispozitivul tău. Le folosim doar cu consimțământul tău explicit, cu excepția celor strict necesare pentru funcționarea site-ului.
              </p>
            </div>

            <h3 className={h3Class}>4.1. Cookie-uri esențiale (mereu active)</h3>
            <div className={tableWrapClass}>
              <table className={tableClass}>
                <thead>
                  <tr>
                    <th className={thClass}>Cookie</th>
                    <th className={thClass}>Scop</th>
                    <th className={thClass}>Durată</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tdClass}>cookie-consent</td>
                    <td className={tdClass}>
                      Stochează preferințele tale de cookie
                    </td>
                    <td className={tdClass}>localStorage (persistent)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className={h3Class}>
              4.2. Cookie-uri de analytics (necesită consimțământ)
            </h3>
            <div className={tableWrapClass}>
              <table className={tableClass}>
                <thead>
                  <tr>
                    <th className={thClass}>Cookie</th>
                    <th className={thClass}>Furnizor</th>
                    <th className={thClass}>Scop</th>
                    <th className={thClass}>Durată</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tdClass}>_ga</td>
                    <td className={tdClass}>Google</td>
                    <td className={tdClass}>Distinge utilizatorii unici</td>
                    <td className={tdClass}>2 ani</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>_ga_*</td>
                    <td className={tdClass}>Google</td>
                    <td className={tdClass}>Menține starea sesiunii</td>
                    <td className={tdClass}>2 ani</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className={h3Class}>
              4.3. Cookie-uri de marketing (necesită consimțământ)
            </h3>
            <div className={tableWrapClass}>
              <table className={tableClass}>
                <thead>
                  <tr>
                    <th className={thClass}>Cookie</th>
                    <th className={thClass}>Furnizor</th>
                    <th className={thClass}>Scop</th>
                    <th className={thClass}>Durată</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tdClass}>_fbp</td>
                    <td className={tdClass}>Meta</td>
                    <td className={tdClass}>
                      Identifică browser-ul pentru targetare publicitară
                    </td>
                    <td className={tdClass}>3 luni</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>_fbc</td>
                    <td className={tdClass}>Meta</td>
                    <td className={tdClass}>Stochează click-ul pe reclamă</td>
                    <td className={tdClass}>3 luni</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className={proseClass}>
              <p>
                Poți modifica preferințele de cookie oricând prin butonul Setări cookie din footer-ul site-ului.
              </p>
            </div>
          </section>

          <section>
            <h2 className={h2Class}>5. Cui transmitem datele</h2>
            <div className={proseClass}>
              <p>Datele tale pot fi accesate de:</p>
              <ul className={ulClass}>
                <li>
                  <strong className="font-semibold text-lp-navy">
                    Google Ireland Limited
                  </strong>{" "}
                  .. prin Google Analytics, pentru analiza traficului
                </li>
                <li>
                  <strong className="font-semibold text-lp-navy">
                    Meta Platforms Ireland Limited
                  </strong>{" "}
                  .. prin Meta Pixel, pentru publicitate
                </li>
                <li>
                  <strong className="font-semibold text-lp-navy">
                    Vercel Inc.
                  </strong>{" "}
                  .. furnizorul nostru de hosting, pentru funcționarea site-ului
                </li>
              </ul>
              <p>
                Nu vindem, nu închiriem și nu partajăm datele tale personale cu alte terțe părți în scopuri comerciale.
              </p>
              <p>
                Google și Meta pot transfera date în afara Spațiului Economic European. Ambele companii operează sub mecanisme de transfer aprobate (Clauze Contractuale Standard).
              </p>
            </div>
          </section>

          <section>
            <h2 className={h2Class}>6. Cât timp păstrăm datele</h2>
            <div className={proseClass}>
              <ul className={ulClass}>
                <li>
                  <strong className="font-semibold text-lp-navy">
                    Date din formularul de programare:
                  </strong>{" "}
                  2 ani de la ultima interacțiune sau până la solicitarea ta de ștergere
                </li>
                <li>
                  <strong className="font-semibold text-lp-navy">
                    Date Google Analytics:
                  </strong>{" "}
                  conform setărilor GA4 (14 luni retenție automată)
                </li>
                <li>
                  <strong className="font-semibold text-lp-navy">
                    Date Meta Pixel:
                  </strong>{" "}
                  conform politicii Meta (maximum 2 ani)
                </li>
                <li>
                  <strong className="font-semibold text-lp-navy">
                    Date tehnice server:
                  </strong>{" "}
                  maximum 30 de zile
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className={h2Class}>7. Drepturile tale</h2>
            <div className={proseClass}>
              <p>
                Conform Regulamentului General privind Protecția Datelor (GDPR), ai următoarele drepturi:
              </p>
              <ul className={ulClass}>
                <li>
                  <strong className="font-semibold text-lp-navy">
                    Dreptul de acces
                  </strong>{" "}
                  .. poți solicita o copie a datelor pe care le deținem despre tine
                </li>
                <li>
                  <strong className="font-semibold text-lp-navy">
                    Dreptul la rectificare
                  </strong>{" "}
                  .. poți cere corectarea datelor inexacte
                </li>
                <li>
                  <strong className="font-semibold text-lp-navy">
                    Dreptul la ștergere
                  </strong>{" "}
                  .. poți cere ștergerea datelor tale personale
                </li>
                <li>
                  <strong className="font-semibold text-lp-navy">
                    Dreptul la restricționare
                  </strong>{" "}
                  .. poți cere limitarea prelucrării datelor
                </li>
                <li>
                  <strong className="font-semibold text-lp-navy">
                    Dreptul la portabilitate
                  </strong>{" "}
                  .. poți solicita datele într-un format structurat
                </li>
                <li>
                  <strong className="font-semibold text-lp-navy">
                    Dreptul la opoziție
                  </strong>{" "}
                  .. poți te opune prelucrării datelor în anumite situații
                </li>
                <li>
                  <strong className="font-semibold text-lp-navy">
                    Dreptul de a retrage consimțământul
                  </strong>{" "}
                  .. poți modifica oricând preferințele de cookie din footer
                </li>
              </ul>
              <p>
                Pentru exercitarea oricăruia dintre aceste drepturi, trimite un email la{" "}
                <a
                  href="mailto:office@danielgagea.ro"
                  className={linkClass}
                >
                  office@danielgagea.ro
                </a>
                . Vom răspunde în maximum 30 de zile.
              </p>
              <p>
                Dacă consideri că drepturile tale au fost încălcate, poți depune o plângere la{" "}
                <strong className="font-semibold text-lp-navy">
                  Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)
                </strong>
                , B-dul G-ral. Gheorghe Magheru nr. 28-30, Sector 1, București,{" "}
                <a
                  href="https://www.dataprotection.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  www.dataprotection.ro
                </a>
                .
              </p>
            </div>
          </section>

          <section>
            <h2 className={h2Class}>8. Securitatea datelor</h2>
            <div className={proseClass}>
              <p>Protejăm datele tale prin următoarele măsuri:</p>
              <ul className={ulClass}>
                <li>Conexiune securizată HTTPS pe întregul site</li>
                <li>Acces restricționat la datele personale (doar operatorul)</li>
                <li>
                  Furnizori de hosting și servicii cu standarde de securitate certificate
                </li>
                <li>
                  Cookie-urile de tracking se activează doar cu consimțământ explicit
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className={h2Class}>9. Minori</h2>
            <div className={proseClass}>
              <p>
                Acest site nu este destinat persoanelor sub 16 ani. Nu colectăm cu bună știință date personale de la minori. Dacă ești părinte sau tutore și crezi că minorul tău ne-a furnizat date personale, contactează-ne la{" "}
                <a
                  href="mailto:office@danielgagea.ro"
                  className={linkClass}
                >
                  office@danielgagea.ro
                </a>{" "}
                și le vom șterge.
              </p>
            </div>
          </section>

          <section>
            <h2 className={h2Class}>10. Modificări ale acestei politici</h2>
            <div className={proseClass}>
              <p>
                Ne rezervăm dreptul de a actualiza această politică. Orice modificare va fi publicată pe această pagină cu o nouă dată de actualizare. Te încurajăm să verifici periodic această pagină.
              </p>
            </div>
          </section>

          <section>
            <h2 className={h2Class}>11. Contact</h2>
            <div className={proseClass}>
              <p>
                Pentru orice întrebare legată de confidențialitatea datelor tale:
              </p>
              <ul className={ulClass}>
                <li>
                  <strong className="font-semibold text-lp-navy">
                    Operator:
                  </strong>{" "}
                  Gagea D. Dumitru Daniel Cabinet Individual de Psihologie
                </li>
                <li>
                  <strong className="font-semibold text-lp-navy">CIF:</strong>{" "}
                  41912250
                </li>
                <li>
                  <strong className="font-semibold text-lp-navy">
                    Adresă:
                  </strong>{" "}
                  Str. Tiberiu Ricci, Nr. 7, Et. 1, Ap. 27, Cam. 2, cod poștal 555300
                </li>
                <li>
                  <strong className="font-semibold text-lp-navy">Email:</strong>{" "}
                  <a
                    href="mailto:office@danielgagea.ro"
                    className={linkClass}
                  >
                    office@danielgagea.ro
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
