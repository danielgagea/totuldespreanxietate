"use client";

import Link from "next/link";

export default function PoliticaDeConfidentialitate() {
  return (
    <>
      <style>{styles}</style>
      <main className="legal-page">
        <div className="legal-container">
          <nav className="legal-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Acasă</Link>
            <span className="legal-breadcrumb-sep">/</span>
            <span>Politica de confidențialitate</span>
          </nav>

          <h1>Politica de confidențialitate</h1>
          <p className="legal-updated">Ultima actualizare: 7 aprilie 2026</p>

          <div className="legal-content">
            <section>
              <h2>1. Cine suntem</h2>
              <p>
                Website-ul <strong>totuldespreanxietate.ro</strong> este operat de <strong>Gagea D. Dumitru Daniel Cabinet Individual de Psihologie</strong>, cu sediul în Str. Tiberiu Ricci, Nr. 7, Et. 1, Ap. 27, Cam. 2, cod poștal 555300, CIF 41912250.
              </p>
              <p>
                Pentru orice întrebare legată de datele tale personale, ne poți contacta la adresa de email: <a href="mailto:office@danielgagea.ro">office@danielgagea.ro</a>.
              </p>
            </section>

            <section>
              <h2>2. Ce date personale colectăm</h2>

              <h3>2.1. Date pe care ni le oferi direct</h3>
              <p>Când completezi formularul de programare, colectăm:</p>
              <ul>
                <li>Numele și prenumele</li>
                <li>Adresa de email</li>
                <li>Numărul de telefon (dacă îl furnizezi)</li>
                <li>Mesajul pe care ni-l trimiți</li>
              </ul>

              <h3>2.2. Date colectate automat</h3>
              <p>Cu consimțământul tău explicit (prin banner-ul de cookie), colectăm:</p>
              <ul>
                <li><strong>Google Analytics (GA4)</strong> .. pagini vizitate, durata vizitei, sursa traficului, tipul dispozitivului, țara. Nu colectăm date care te identifică personal.</li>
                <li><strong>Meta Pixel (Facebook)</strong> .. pagini vizitate, acțiuni pe site (ex: trimiterea formularului de programare). Aceste date sunt folosite pentru a afișa reclame relevante pe platformele Meta.</li>
              </ul>
              <p>
                Aceste instrumente se activează doar după ce apeși &quot;Acceptă toate&quot; sau activezi manual categoriile &quot;Analytics&quot; și &quot;Marketing&quot; în setările de cookie. Dacă alegi &quot;Doar esențiale&quot;, aceste instrumente nu se încarcă.
              </p>

              <h3>2.3. Date tehnice</h3>
              <p>
                Serverele noastre (Vercel) colectează automat date tehnice minime necesare funcționării site-ului: adresa IP, tipul browser-ului, sistemul de operare. Aceste date nu sunt folosite pentru a te identifica personal.
              </p>
            </section>

            <section>
              <h2>3. De ce colectăm aceste date</h2>
              <div className="legal-table-wrap">
                <table className="legal-table">
                  <thead>
                    <tr>
                      <th>Ce colectăm</th>
                      <th>De ce</th>
                      <th>Baza legală</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Date din formularul de programare</td>
                      <td>Pentru a prelua cererea ta și a te contacta</td>
                      <td>Consimțământ (Art. 6(1)(a) GDPR)</td>
                    </tr>
                    <tr>
                      <td>Google Analytics</td>
                      <td>Pentru a înțelege cum e folosit site-ul și a îmbunătăți conținutul</td>
                      <td>Consimțământ (Art. 6(1)(a) GDPR)</td>
                    </tr>
                    <tr>
                      <td>Meta Pixel</td>
                      <td>Pentru a măsura eficiența campaniilor publicitare</td>
                      <td>Consimțământ (Art. 6(1)(a) GDPR)</td>
                    </tr>
                    <tr>
                      <td>Date tehnice (IP, browser)</td>
                      <td>Funcționarea și securitatea site-ului</td>
                      <td>Interes legitim (Art. 6(1)(f) GDPR)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>4. Cookie-uri</h2>
              <p>
                Cookie-urile sunt fișiere mici stocate pe dispozitivul tău. Le folosim doar cu consimțământul tău explicit, cu excepția celor strict necesare pentru funcționarea site-ului.
              </p>

              <h3>4.1. Cookie-uri esențiale (mereu active)</h3>
              <div className="legal-table-wrap">
                <table className="legal-table">
                  <thead>
                    <tr>
                      <th>Cookie</th>
                      <th>Scop</th>
                      <th>Durată</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>cookie-consent</td>
                      <td>Stochează preferințele tale de cookie</td>
                      <td>localStorage (persistent)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>4.2. Cookie-uri de analytics (necesită consimțământ)</h3>
              <div className="legal-table-wrap">
                <table className="legal-table">
                  <thead>
                    <tr>
                      <th>Cookie</th>
                      <th>Furnizor</th>
                      <th>Scop</th>
                      <th>Durată</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>_ga</td>
                      <td>Google</td>
                      <td>Distinge utilizatorii unici</td>
                      <td>2 ani</td>
                    </tr>
                    <tr>
                      <td>_ga_*</td>
                      <td>Google</td>
                      <td>Menține starea sesiunii</td>
                      <td>2 ani</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>4.3. Cookie-uri de marketing (necesită consimțământ)</h3>
              <div className="legal-table-wrap">
                <table className="legal-table">
                  <thead>
                    <tr>
                      <th>Cookie</th>
                      <th>Furnizor</th>
                      <th>Scop</th>
                      <th>Durată</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>_fbp</td>
                      <td>Meta</td>
                      <td>Identifică browser-ul pentru targetare publicitară</td>
                      <td>3 luni</td>
                    </tr>
                    <tr>
                      <td>_fbc</td>
                      <td>Meta</td>
                      <td>Stochează click-ul pe reclamă</td>
                      <td>3 luni</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                Poți modifica preferințele de cookie oricând prin butonul &quot;Setări cookie&quot; din footer-ul site-ului.
              </p>
            </section>

            <section>
              <h2>5. Cui transmitem datele</h2>
              <p>Datele tale pot fi accesate de:</p>
              <ul>
                <li><strong>Google Ireland Limited</strong> .. prin Google Analytics, pentru analiza traficului</li>
                <li><strong>Meta Platforms Ireland Limited</strong> .. prin Meta Pixel, pentru publicitate</li>
                <li><strong>Vercel Inc.</strong> .. furnizorul nostru de hosting, pentru funcționarea site-ului</li>
              </ul>
              <p>
                Nu vindem, nu închiriem și nu partajăm datele tale personale cu alte terțe părți în scopuri comerciale.
              </p>
              <p>
                Google și Meta pot transfera date în afara Spațiului Economic European. Ambele companii operează sub mecanisme de transfer aprobate (Clauze Contractuale Standard).
              </p>
            </section>

            <section>
              <h2>6. Cât timp păstrăm datele</h2>
              <ul>
                <li><strong>Date din formularul de programare:</strong> 2 ani de la ultima interacțiune sau până la solicitarea ta de ștergere</li>
                <li><strong>Date Google Analytics:</strong> conform setărilor GA4 (14 luni retenție automată)</li>
                <li><strong>Date Meta Pixel:</strong> conform politicii Meta (maximum 2 ani)</li>
                <li><strong>Date tehnice server:</strong> maximum 30 de zile</li>
              </ul>
            </section>

            <section>
              <h2>7. Drepturile tale</h2>
              <p>Conform Regulamentului General privind Protecția Datelor (GDPR), ai următoarele drepturi:</p>
              <ul>
                <li><strong>Dreptul de acces</strong> .. poți solicita o copie a datelor pe care le deținem despre tine</li>
                <li><strong>Dreptul la rectificare</strong> .. poți cere corectarea datelor inexacte</li>
                <li><strong>Dreptul la ștergere</strong> .. poți cere ștergerea datelor tale personale</li>
                <li><strong>Dreptul la restricționare</strong> .. poți cere limitarea prelucrării datelor</li>
                <li><strong>Dreptul la portabilitate</strong> .. poți solicita datele într-un format structurat</li>
                <li><strong>Dreptul la opoziție</strong> .. poți te opune prelucrării datelor în anumite situații</li>
                <li><strong>Dreptul de a retrage consimțământul</strong> .. poți modifica oricând preferințele de cookie din footer</li>
              </ul>
              <p>
                Pentru exercitarea oricăruia dintre aceste drepturi, trimite un email la <a href="mailto:office@danielgagea.ro">office@danielgagea.ro</a>. Vom răspunde în maximum 30 de zile.
              </p>
              <p>
                Dacă consideri că drepturile tale au fost încălcate, poți depune o plângere la <strong>Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</strong>, B-dul G-ral. Gheorghe Magheru nr. 28-30, Sector 1, București, <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer">www.dataprotection.ro</a>.
              </p>
            </section>

            <section>
              <h2>8. Securitatea datelor</h2>
              <p>
                Protejăm datele tale prin următoarele măsuri:
              </p>
              <ul>
                <li>Conexiune securizată HTTPS pe întregul site</li>
                <li>Acces restricționat la datele personale (doar operatorul)</li>
                <li>Furnizori de hosting și servicii cu standarde de securitate certificate</li>
                <li>Cookie-urile de tracking se activează doar cu consimțământ explicit</li>
              </ul>
            </section>

            <section>
              <h2>9. Minori</h2>
              <p>
                Acest site nu este destinat persoanelor sub 16 ani. Nu colectăm cu bună știință date personale de la minori. Dacă ești părinte sau tutore și crezi că minorul tău ne-a furnizat date personale, contactează-ne la <a href="mailto:office@danielgagea.ro">office@danielgagea.ro</a> și le vom șterge.
              </p>
            </section>

            <section>
              <h2>10. Modificări ale acestei politici</h2>
              <p>
                Ne rezervăm dreptul de a actualiza această politică. Orice modificare va fi publicată pe această pagină cu o nouă dată de actualizare. Te încurajăm să verifici periodic această pagină.
              </p>
            </section>

            <section>
              <h2>11. Contact</h2>
              <p>
                Pentru orice întrebare legată de confidențialitatea datelor tale:
              </p>
              <ul>
                <li><strong>Operator:</strong> Gagea D. Dumitru Daniel Cabinet Individual de Psihologie</li>
                <li><strong>CIF:</strong> 41912250</li>
                <li><strong>Adresă:</strong> Str. Tiberiu Ricci, Nr. 7, Et. 1, Ap. 27, Cam. 2, cod poștal 555300</li>
                <li><strong>Email:</strong> <a href="mailto:office@danielgagea.ro">office@danielgagea.ro</a></li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

const styles = `
.legal-page {
  min-height: 100vh;
  background: var(--color-background, #F5F0E8);
  padding: 48px 24px 80px;
}

.legal-container {
  max-width: 760px;
  margin: 0 auto;
}

.legal-breadcrumb {
  font-family: var(--font-body), 'Inter', sans-serif;
  font-size: 13px;
  color: var(--color-text-secondary, #5A5A5A);
  margin-bottom: 32px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.legal-breadcrumb a {
  color: var(--color-text-secondary, #5A5A5A);
  text-decoration: none;
  transition: color 0.2s ease-out;
}

.legal-breadcrumb a:hover {
  color: var(--color-primary, #1B2B4B);
}

.legal-breadcrumb-sep {
  margin: 0 8px;
  opacity: 0.4;
}

.legal-page h1 {
  font-family: var(--font-heading), 'Fraunces', serif;
  font-size: 38px;
  font-weight: 400;
  color: var(--color-primary, #1B2B4B);
  letter-spacing: -0.02em;
  margin-bottom: 8px;
  line-height: 1.25;
}

.legal-updated {
  font-family: var(--font-body), 'Inter', sans-serif;
  font-size: 14px;
  color: var(--color-text-secondary, #5A5A5A);
  margin-bottom: 48px;
}

.legal-content section {
  margin-bottom: 40px;
}

.legal-content h2 {
  font-family: var(--font-heading), 'Fraunces', serif;
  font-size: 24px;
  font-weight: 400;
  color: var(--color-primary, #1B2B4B);
  margin-bottom: 16px;
  letter-spacing: -0.02em;
}

.legal-content h3 {
  font-family: var(--font-heading), 'Fraunces', serif;
  font-size: 19px;
  font-weight: 500;
  color: var(--color-primary, #1B2B4B);
  margin-bottom: 12px;
  margin-top: 24px;
}

.legal-content p {
  font-family: var(--font-body), 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.75;
  color: var(--color-text, #2C2C2C);
  margin-bottom: 16px;
}

.legal-content ul {
  padding-left: 20px;
  margin-bottom: 16px;
}

.legal-content li {
  font-family: var(--font-body), 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.75;
  color: var(--color-text, #2C2C2C);
  margin-bottom: 8px;
}

.legal-content a {
  color: var(--color-secondary, #5C7A6A);
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.2s ease-out;
}

.legal-content a:hover {
  color: #4A6858;
}

.legal-content a:focus-visible {
  outline: 2px solid var(--color-secondary);
  outline-offset: 2px;
  border-radius: 2px;
}

.legal-content strong {
  color: var(--color-primary, #1B2B4B);
  font-weight: 600;
}

.legal-table-wrap {
  overflow-x: auto;
  margin: 16px 0 24px;
  border-radius: 8px;
}

.legal-table {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--font-body), 'Inter', sans-serif;
  font-size: 14px;
}

.legal-table th {
  background: var(--color-primary, #1B2B4B);
  color: #FAF7F2;
  padding: 12px 16px;
  text-align: left;
  font-weight: 600;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.legal-table td {
  padding: 12px 16px;
  border-bottom: 1px solid rgba(27, 43, 75, 0.06);
  color: var(--color-text, #2C2C2C);
  line-height: 1.5;
}

.legal-table tr:nth-child(even) td {
  background: rgba(245, 240, 232, 0.5);
}

@media (max-width: 767px) {
  .legal-page { padding: 80px 16px 60px; }
  .legal-page h1 { font-size: 28px; }
  .legal-table { font-size: 13px; }
  .legal-table th, .legal-table td { padding: 10px 12px; }
}
`;
