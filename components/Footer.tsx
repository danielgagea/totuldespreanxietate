"use client";

import Link from "next/link";

export function Footer() {
  return (
    <>
      <style>{footerStyles}</style>
      <footer className="site-footer">
        <div className="site-footer-inner">
          <div className="site-footer-grid">
            {/* Brand */}
            <div className="site-footer-brand">
              <Link href="/" className="site-footer-logo">
                Totul despre Anxietate
              </Link>
              <p className="site-footer-tagline">
                Resursa #1 din România despre anxietate. Scrisă de Daniel Gagea, psiholog clinician, psihoterapeut.
              </p>
            </div>

            {/* Links */}
            <div className="site-footer-links">
              <h4>Ghiduri</h4>
              <Link href="/atac-de-panica">Atacul de panică</Link>
              <Link href="/tipuri/anxietate-sociala">Anxietatea socială</Link>
              <Link href="/tipuri/anxietate-generalizata">Anxietatea generalizată</Link>
              <Link href="/tipuri/tspt">Stresul post-traumatic</Link>
              <Link href="/tipuri/toc">Tulburarea obsesiv-compulsivă</Link>
              <Link href="/tipuri/fobii-specifice">Fobii specifice</Link>
            </div>

            <div className="site-footer-links">
              <h4>Informații</h4>
              <Link href="/despre-daniel">Despre Daniel</Link>
              <Link href="/programare">Programare</Link>
              <Link href="/termeni-si-conditii">Termeni și condiții</Link>
              <Link href="/politica-de-confidentialitate">Politica de confidențialitate</Link>
              <button
                className="site-footer-cookie-btn"
                onClick={() => window.dispatchEvent(new CustomEvent("open-cookie-settings"))}
              >
                Setări cookie
              </button>
            </div>
          </div>

          <div className="site-footer-bottom">
            <p>&copy; {new Date().getFullYear()} Totul despre Anxietate. Toate drepturile rezervate.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

const footerStyles = `
.site-footer {
  background: var(--color-primary, #1B2B4B);
  color: rgba(250, 247, 242, 0.7);
  padding: 56px 24px 32px;
}

.site-footer-inner {
  max-width: 1000px;
  margin: 0 auto;
}

.site-footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 40px;
}

.site-footer-logo {
  font-family: var(--font-heading), 'Fraunces', serif;
  font-size: 20px;
  font-weight: 500;
  color: #FAF7F2;
  text-decoration: none;
  display: block;
  margin-bottom: 12px;
  transition: opacity 0.2s ease-out;
}
.site-footer-logo:hover { opacity: 0.8; }
.site-footer-logo:focus-visible { outline: 2px solid var(--color-secondary); outline-offset: 4px; border-radius: 2px; }

.site-footer-tagline {
  font-size: 14px;
  line-height: 1.6;
  color: rgba(250, 247, 242, 0.5);
  max-width: 300px;
}

.site-footer-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.site-footer-links h4 {
  font-family: var(--font-body), 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(250, 247, 242, 0.4);
  margin-bottom: 4px;
}

.site-footer-links a {
  font-size: 14px;
  color: rgba(250, 247, 242, 0.7);
  text-decoration: none;
  transition: color 0.2s ease-out;
}
.site-footer-links a:hover { color: #FAF7F2; }
.site-footer-links a:focus-visible { outline: 2px solid var(--color-secondary); outline-offset: 2px; border-radius: 2px; }

.site-footer-cookie-btn {
  font-size: 14px;
  color: rgba(250, 247, 242, 0.7);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  text-align: left;
  font-family: inherit;
  transition: color 0.2s ease-out;
}
.site-footer-cookie-btn:hover { color: #FAF7F2; }
.site-footer-cookie-btn:focus-visible { outline: 2px solid var(--color-secondary); outline-offset: 2px; border-radius: 2px; }

.site-footer-bottom {
  border-top: 1px solid rgba(250, 247, 242, 0.08);
  padding-top: 24px;
}

.site-footer-bottom p {
  font-size: 13px;
  color: rgba(250, 247, 242, 0.35);
  text-align: center;
}

@media (max-width: 767px) {
  .site-footer { padding: 40px 24px 24px; }
  .site-footer-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
`;
