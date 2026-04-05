"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const atacSublinks = [
  { href: "/atac-de-panica", label: "Ghid complet" },
  { href: "/atac-de-panica/recunoaste", label: "Cum îl recunoști" },
  { href: "/atac-de-panica/intelege", label: "Înțelege-l mai bine" },
  { href: "/atac-de-panica/actioneaza", label: "Ce este de făcut" },
];

const fobiiSublinks = [
  { href: "/tipuri/fobii-specifice", label: "Ghid complet" },
  { href: "/tipuri/fobii-specifice/fobie-de-sange", label: "Fobia de sânge și ace" },
  { href: "/tipuri/fobii-specifice/claustrofobie", label: "Claustrofobie" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [fobiiDropdownOpen, setFobiiDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [mobileFobiiDropdownOpen, setMobileFobiiDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const fobiiDropdownRef = useRef<HTMLDivElement>(null);

  const isAtacPage = pathname.startsWith("/atac-de-panica");
  const isFobiiPage = pathname.startsWith("/tipuri/fobii-specifice");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
    setFobiiDropdownOpen(false);
    setMobileDropdownOpen(false);
    setMobileFobiiDropdownOpen(false);
  }, [pathname]);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
      if (fobiiDropdownRef.current && !fobiiDropdownRef.current.contains(e.target as Node)) {
        setFobiiDropdownOpen(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <style>{navStyles}</style>
      <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            Totul despre Anxietate
          </Link>

          {/* Desktop links */}
          <div className="nav-links">
            <Link
              href="/"
              className={`nav-link ${pathname === "/" ? "nav-link-active" : ""}`}
            >
              Acasă
            </Link>

            {/* Atac de panică dropdown */}
            <div className="nav-dropdown" ref={dropdownRef}>
              <button
                className={`nav-link nav-dropdown-trigger ${isAtacPage ? "nav-link-active" : ""}`}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
              >
                Atac de panică
                <svg className={`nav-chevron ${dropdownOpen ? "nav-chevron-open" : ""}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className={`nav-dropdown-menu ${dropdownOpen ? "nav-dropdown-open" : ""}`}>
                {atacSublinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-dropdown-item ${pathname === link.href ? "nav-dropdown-item-active" : ""}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/tipuri/anxietate-sociala"
              className={`nav-link ${pathname === "/tipuri/anxietate-sociala" ? "nav-link-active" : ""}`}
            >
              Anxietate socială
            </Link>

            <Link
              href="/tipuri/toc"
              className={`nav-link ${pathname === "/tipuri/toc" ? "nav-link-active" : ""}`}
            >
              TOC
            </Link>

            {/* Fobii specifice dropdown */}
            <div className="nav-dropdown" ref={fobiiDropdownRef}>
              <button
                className={`nav-link nav-dropdown-trigger ${isFobiiPage ? "nav-link-active" : ""}`}
                onClick={() => setFobiiDropdownOpen(!fobiiDropdownOpen)}
                aria-expanded={fobiiDropdownOpen}
              >
                Fobii specifice
                <svg className={`nav-chevron ${fobiiDropdownOpen ? "nav-chevron-open" : ""}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className={`nav-dropdown-menu ${fobiiDropdownOpen ? "nav-dropdown-open" : ""}`}>
                {fobiiSublinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-dropdown-item ${pathname === link.href ? "nav-dropdown-item-active" : ""}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/programare"
              className={`nav-cta ${pathname === "/programare" ? "nav-cta-active" : ""}`}
            >
              Programare
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Închide meniul" : "Deschide meniul"}
            aria-expanded={mobileOpen}
          >
            <span className={`nav-hamburger-line ${mobileOpen ? "nav-h-open-1" : ""}`} />
            <span className={`nav-hamburger-line ${mobileOpen ? "nav-h-open-2" : ""}`} />
            <span className={`nav-hamburger-line ${mobileOpen ? "nav-h-open-3" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`nav-mobile ${mobileOpen ? "nav-mobile-open" : ""}`}>
          <Link
            href="/"
            className={`nav-mobile-link ${pathname === "/" ? "nav-link-active" : ""}`}
          >
            Acasă
          </Link>

          {/* Mobile atac dropdown */}
          <button
            className={`nav-mobile-link nav-mobile-dropdown-trigger ${isAtacPage ? "nav-link-active" : ""}`}
            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
          >
            Atac de panică
            <svg className={`nav-chevron ${mobileDropdownOpen ? "nav-chevron-open" : ""}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className={`nav-mobile-sub ${mobileDropdownOpen ? "nav-mobile-sub-open" : ""}`}>
            {atacSublinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-mobile-sublink ${pathname === link.href ? "nav-link-active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/tipuri/anxietate-sociala"
            className={`nav-mobile-link ${pathname === "/tipuri/anxietate-sociala" ? "nav-link-active" : ""}`}
          >
            Anxietate socială
          </Link>
          <Link
            href="/tipuri/toc"
            className={`nav-mobile-link ${pathname === "/tipuri/toc" ? "nav-link-active" : ""}`}
          >
            TOC
          </Link>
          {/* Mobile fobii dropdown */}
          <button
            className={`nav-mobile-link nav-mobile-dropdown-trigger ${isFobiiPage ? "nav-link-active" : ""}`}
            onClick={() => setMobileFobiiDropdownOpen(!mobileFobiiDropdownOpen)}
          >
            Fobii specifice
            <svg className={`nav-chevron ${mobileFobiiDropdownOpen ? "nav-chevron-open" : ""}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className={`nav-mobile-sub ${mobileFobiiDropdownOpen ? "nav-mobile-sub-open" : ""}`}>
            {fobiiSublinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-mobile-sublink ${pathname === link.href ? "nav-link-active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link href="/programare" className="nav-mobile-cta">
            Programare
          </Link>
        </div>
      </nav>
    </>
  );
}

const navStyles = `
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  height: 64px;
  transition: background 0.3s ease-out, box-shadow 0.3s ease-out;
}

.nav-scrolled {
  background: rgba(245, 240, 232, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.06);
}

.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-family: var(--font-heading), 'Fraunces', serif;
  font-size: 18px;
  font-weight: 500;
  color: var(--color-primary, #1B2B4B);
  text-decoration: none;
  letter-spacing: -0.02em;
  transition: opacity 0.2s ease-out;
}
.nav-logo:hover { opacity: 0.7; }

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-link {
  font-family: var(--font-body), 'Inter', sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: var(--color-text-secondary, #5A5A5A);
  text-decoration: none;
  transition: color 0.2s ease-out;
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
.nav-link:hover { color: var(--color-primary, #1B2B4B); }
.nav-link-active { color: var(--color-primary, #1B2B4B); }
.nav-link-active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-secondary, #5C7A6A);
  border-radius: 1px;
}

/* Dropdown trigger */
.nav-dropdown-trigger {
  display: flex;
  align-items: center;
  gap: 4px;
}

.nav-chevron {
  transition: transform 0.2s ease-out;
}
.nav-chevron-open {
  transform: rotate(180deg);
}

/* Dropdown menu */
.nav-dropdown {
  position: relative;
}

.nav-dropdown-menu {
  position: absolute;
  top: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%);
  background: rgba(253, 250, 245, 0.98);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--color-border, #DDD8CE);
  border-radius: 10px;
  padding: 8px 0;
  min-width: 200px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  opacity: 0;
  visibility: hidden;
  transform: translateX(-50%) translateY(-4px);
  transition: opacity 0.2s ease-out, transform 0.2s ease-out, visibility 0.2s;
}

.nav-dropdown-open {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.nav-dropdown-item {
  display: block;
  padding: 10px 20px;
  font-family: var(--font-body), 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-secondary, #5A5A5A);
  text-decoration: none;
  transition: background 0.15s ease-out, color 0.15s ease-out;
}
.nav-dropdown-item:hover {
  background: rgba(27, 43, 75, 0.04);
  color: var(--color-primary, #1B2B4B);
}
.nav-dropdown-item-active {
  color: var(--color-primary, #1B2B4B);
  background: rgba(92, 122, 106, 0.06);
}

.nav-cta {
  font-family: var(--font-body), 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: var(--color-secondary, #5C7A6A);
  padding: 8px 20px;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.2s ease-out, transform 0.2s ease-out;
}
.nav-cta:hover { background: #4A6858; transform: translateY(-1px); }
.nav-cta:active { transform: translateY(0); }
.nav-cta:focus-visible { outline: 2px solid var(--color-secondary, #5C7A6A); outline-offset: 2px; }
.nav-cta-active { background: #4A6858; }

/* Hamburger */
.nav-hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.nav-hamburger-line {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--color-primary, #1B2B4B);
  border-radius: 1px;
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
}

.nav-h-open-1 { transform: rotate(45deg) translate(5px, 5px); }
.nav-h-open-2 { opacity: 0; }
.nav-h-open-3 { transform: rotate(-45deg) translate(5px, -5px); }

/* Mobile menu */
.nav-mobile {
  display: none;
  flex-direction: column;
  background: rgba(245, 240, 232, 0.98);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 0 24px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out, padding 0.3s ease-out;
}

.nav-mobile-open {
  max-height: 500px;
  padding: 16px 24px 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.nav-mobile-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-family: var(--font-body), 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: var(--color-text-secondary, #5A5A5A);
  text-decoration: none;
  padding: 12px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  transition: color 0.2s ease-out;
  background: none;
  border-left: none;
  border-right: none;
  border-top: none;
  cursor: pointer;
}
.nav-mobile-link:hover { color: var(--color-primary, #1B2B4B); }
.nav-mobile-link.nav-link-active { color: var(--color-primary, #1B2B4B); }

.nav-mobile-dropdown-trigger {
  border-bottom: none;
}

.nav-mobile-sub {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
}
.nav-mobile-sub-open {
  max-height: 300px;
}

.nav-mobile-sublink {
  display: block;
  padding: 10px 0 10px 16px;
  font-family: var(--font-body), 'Inter', sans-serif;
  font-size: 15px;
  color: var(--color-text-secondary, #5A5A5A);
  text-decoration: none;
  transition: color 0.2s ease-out;
}
.nav-mobile-sublink:hover { color: var(--color-primary, #1B2B4B); }
.nav-mobile-sublink.nav-link-active { color: var(--color-primary, #1B2B4B); font-weight: 600; }

.nav-mobile-cta {
  display: inline-block;
  text-align: center;
  margin-top: 12px;
  font-family: var(--font-body), 'Inter', sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
  background: var(--color-secondary, #5C7A6A);
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.2s ease-out;
}
.nav-mobile-cta:hover { background: #4A6858; }

@media (max-width: 767px) {
  .nav { height: 56px; }
  .nav-inner { height: 56px; }
  .nav-links { display: none; }
  .nav-hamburger { display: flex; }
  .nav-mobile { display: flex; }
}
`;
