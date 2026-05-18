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

const tipuriSublinks = [
  { href: "/tipuri/anxietate-sociala", label: "Anxietatea socială" },
  { href: "/tipuri/anxietate-generalizata", label: "Anxietatea generalizată" },
  { href: "/tipuri/tspt", label: "Stresul post-traumatic" },
  { href: "/tipuri/toc", label: "Tulburarea obsesiv-compulsivă" },
  { href: "/tipuri/fobii-specifice", label: "Fobii specifice" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [tipuriDropdownOpen, setTipuriDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [mobileTipuriDropdownOpen, setMobileTipuriDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const tipuriDropdownRef = useRef<HTMLDivElement>(null);

  const isAtacPage = pathname.startsWith("/atac-de-panica");
  const isTipuriPage = pathname.startsWith("/tipuri/");

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
    setTipuriDropdownOpen(false);
    setMobileDropdownOpen(false);
    setMobileTipuriDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
      if (tipuriDropdownRef.current && !tipuriDropdownRef.current.contains(e.target as Node)) {
        setTipuriDropdownOpen(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const linkBase =
    "font-work text-sm font-medium text-lp-mute transition hover:text-lp-navy";
  const linkActive = "text-lp-navy";

  return (
    <header className="sticky top-0 z-50 border-b border-lp-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-6">
        <Link
          href="/"
          className="font-work text-base font-bold uppercase tracking-tight text-lp-navy md:text-lg"
        >
          TOTUL DESPRE ANXIETATE
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-7 md:flex">
          <Link
            href="/"
            className={`${linkBase} ${pathname === "/" ? linkActive : ""}`}
          >
            Acasă
          </Link>

          {/* Atac dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              className={`${linkBase} flex items-center gap-1 ${isAtacPage ? linkActive : ""}`}
              onClick={() => setDropdownOpen((v) => !v)}
              aria-expanded={dropdownOpen}
            >
              Atac de panică
              <svg
                className={`h-3 w-3 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden
              >
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              className={`absolute left-1/2 top-[calc(100%+12px)] -translate-x-1/2 rounded-md border border-lp-border bg-white py-2 shadow-[0_8px_24px_rgba(8,29,61,0.1)] transition-all ${
                dropdownOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-1 opacity-0"
              }`}
              style={{ minWidth: 220 }}
            >
              {atacSublinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-5 py-2.5 text-sm transition ${
                    pathname === link.href
                      ? "bg-lp-bg font-semibold text-lp-navy"
                      : "text-lp-mute hover:bg-lp-bg hover:text-lp-navy"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Tipuri dropdown */}
          <div className="relative" ref={tipuriDropdownRef}>
            <button
              type="button"
              className={`${linkBase} flex items-center gap-1 ${isTipuriPage ? linkActive : ""}`}
              onClick={() => setTipuriDropdownOpen((v) => !v)}
              aria-expanded={tipuriDropdownOpen}
            >
              Tipuri de anxietate
              <svg
                className={`h-3 w-3 transition-transform ${tipuriDropdownOpen ? "rotate-180" : ""}`}
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden
              >
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              className={`absolute left-1/2 top-[calc(100%+12px)] -translate-x-1/2 rounded-md border border-lp-border bg-white py-2 shadow-[0_8px_24px_rgba(8,29,61,0.1)] transition-all ${
                tipuriDropdownOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-1 opacity-0"
              }`}
              style={{ minWidth: 240 }}
            >
              {tipuriSublinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-5 py-2.5 text-sm transition ${
                    pathname === link.href || pathname.startsWith(link.href + "/")
                      ? "bg-lp-bg font-semibold text-lp-navy"
                      : "text-lp-mute hover:bg-lp-bg hover:text-lp-navy"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/despre-daniel"
            className={`${linkBase} ${pathname === "/despre-daniel" ? linkActive : ""}`}
          >
            Despre Daniel
          </Link>

          <Link
            href="/programare"
            className="lp-cta inline-flex items-center gap-1.5 rounded-md px-5 py-2.5 text-sm font-semibold"
          >
            Programare
            <span aria-hidden>→</span>
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex flex-col gap-1.5 p-2 md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Închide meniul" : "Deschide meniul"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block h-0.5 w-5 origin-center bg-lp-navy transition ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-lp-navy transition ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 origin-center bg-lp-navy transition ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-lp-border bg-white transition-[max-height] duration-300 md:hidden ${
          mobileOpen ? "max-h-[640px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4">
          <Link
            href="/"
            className={`border-b border-lp-border py-3 text-base font-medium ${pathname === "/" ? "text-lp-navy" : "text-lp-mute"}`}
          >
            Acasă
          </Link>

          <button
            type="button"
            className={`flex w-full items-center justify-between border-b border-lp-border py-3 text-base font-medium ${isAtacPage ? "text-lp-navy" : "text-lp-mute"}`}
            onClick={() => setMobileDropdownOpen((v) => !v)}
          >
            Atac de panică
            <svg
              className={`h-3 w-3 transition-transform ${mobileDropdownOpen ? "rotate-180" : ""}`}
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden
            >
              <path
                d="M3 4.5L6 7.5L9 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-[max-height] duration-300 ${mobileDropdownOpen ? "max-h-[320px]" : "max-h-0"}`}
          >
            {atacSublinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2.5 pl-4 text-sm ${pathname === link.href ? "font-semibold text-lp-navy" : "text-lp-mute"}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            className={`flex w-full items-center justify-between border-b border-lp-border py-3 text-base font-medium ${isTipuriPage ? "text-lp-navy" : "text-lp-mute"}`}
            onClick={() => setMobileTipuriDropdownOpen((v) => !v)}
          >
            Tipuri de anxietate
            <svg
              className={`h-3 w-3 transition-transform ${mobileTipuriDropdownOpen ? "rotate-180" : ""}`}
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden
            >
              <path
                d="M3 4.5L6 7.5L9 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-[max-height] duration-300 ${mobileTipuriDropdownOpen ? "max-h-[320px]" : "max-h-0"}`}
          >
            {tipuriSublinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2.5 pl-4 text-sm ${pathname === link.href ? "font-semibold text-lp-navy" : "text-lp-mute"}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/despre-daniel"
            className={`border-b border-lp-border py-3 text-base font-medium ${pathname === "/despre-daniel" ? "text-lp-navy" : "text-lp-mute"}`}
          >
            Despre Daniel
          </Link>

          <Link
            href="/programare"
            className="lp-cta mt-4 inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold"
          >
            Programare
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
