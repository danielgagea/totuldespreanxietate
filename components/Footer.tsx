"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-lp-navy-soft px-6 py-12 text-white/70">
      <div className="mx-auto max-w-[1180px] space-y-10">
        {/* Top row: brand + socials */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="font-work text-base font-bold uppercase tracking-tight text-white"
            >
              TOTUL DESPRE ANXIETATE
            </Link>
            <p className="mt-2 max-w-[360px] text-sm text-white/55">
              Resursa #1 din România despre anxietate. Scrisă de Daniel Gagea,
              psiholog clinician, psihoterapeut.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/PsihologDumitruDanielGagea/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition hover:border-white hover:bg-white hover:text-lp-navy"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
                aria-hidden
              >
                <path d="M13.5 21v-7.7h2.6l.4-3h-3v-1.9c0-.9.2-1.5 1.5-1.5H17V4.1c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.2H8v3h2.9V21h2.6z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/danielgagea.ro/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition hover:border-white hover:bg-white hover:text-lp-navy"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/dumitru-daniel-gagea/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition hover:border-white hover:bg-white hover:text-lp-navy"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
                aria-hidden
              >
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3V9.5zm6 0h3.8v1.6h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6V21h-4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H9V9.5z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@DanielGagea"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition hover:border-white hover:bg-white hover:text-lp-navy"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
                aria-hidden
              >
                <path d="M21.6 7.2s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9-2.8-.2-7-.2-7-.2s-4.2 0-7 .2c-.4.1-1.2.1-2 .9-.6.6-.8 2-.8 2S1.7 8.8 1.7 10.5v1.6c0 1.6.2 3.3.2 3.3s.2 1.4.8 2c.8.8 1.8.8 2.3.9 1.7.2 7.2.2 7.2.2s4.2 0 7-.2c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.3v-1.6c0-1.6-.2-3.3-.2-3.3zM9.7 14.4V8.7l5.4 2.9-5.4 2.8z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid gap-10 border-t border-white/10 pt-10 md:grid-cols-4">
          <div>
            <h4 className="font-work text-xs font-bold uppercase tracking-[0.12em] text-white/45">
              Ghiduri
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/atac-de-panica" className="transition hover:text-white">
                  Atacul de panică
                </Link>
              </li>
              <li>
                <Link
                  href="/tipuri/anxietate-sociala"
                  className="transition hover:text-white"
                >
                  Anxietatea socială
                </Link>
              </li>
              <li>
                <Link
                  href="/tipuri/anxietate-generalizata"
                  className="transition hover:text-white"
                >
                  Anxietatea generalizată
                </Link>
              </li>
              <li>
                <Link href="/tipuri/tspt" className="transition hover:text-white">
                  Stresul post-traumatic
                </Link>
              </li>
              <li>
                <Link href="/tipuri/toc" className="transition hover:text-white">
                  Tulburarea obsesiv-compulsivă
                </Link>
              </li>
              <li>
                <Link
                  href="/tipuri/fobii-specifice"
                  className="transition hover:text-white"
                >
                  Fobii specifice
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-work text-xs font-bold uppercase tracking-[0.12em] text-white/45">
              Despre
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/despre-daniel" className="transition hover:text-white">
                  Despre Daniel Gagea
                </Link>
              </li>
              <li>
                <Link href="/programare" className="transition hover:text-white">
                  Programare consultație
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-work text-xs font-bold uppercase tracking-[0.12em] text-white/45">
              Legal
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/termeni-si-conditii"
                  className="transition hover:text-white"
                >
                  Termeni și condiții
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-de-confidentialitate"
                  className="transition hover:text-white"
                >
                  Politica de confidențialitate
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="text-left transition hover:text-white"
                  onClick={() =>
                    window.dispatchEvent(new CustomEvent("open-cookie-settings"))
                  }
                >
                  Setări cookie
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-work text-xs font-bold uppercase tracking-[0.12em] text-white/45">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="mailto:office@danielgagea.ro"
                  className="transition hover:text-white"
                >
                  office@danielgagea.ro
                </a>
              </li>
              <li>
                <a href="tel:+40752229513" className="transition hover:text-white">
                  0752 229 513
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 md:flex-row">
          <p className="text-xs text-white/45">
            &copy; {new Date().getFullYear()} Totul despre Anxietate. Toate
            drepturile rezervate.
          </p>
          <p className="text-xs text-white/45">
            Scris de Daniel Gagea, psiholog clinician, psihoterapeut.
          </p>
        </div>
      </div>
    </footer>
  );
}
