"use client";

import { useState, useEffect } from "react";

type TocItem = {
  id: string;
  label: string;
  icon?: string;
};

const sections: TocItem[] = [
  { id: "ce-este", label: "Ce este" },
  { id: "ce-simti", label: "Ce simți" },
  { id: "panica-sau-infarct", label: "Panică sau infarct?" },
  { id: "de-ce-se-intampla", label: "De ce se întâmplă" },
  { id: "ce-vrea-sa-spuna-psihicul", label: "Ce vrea să spună psihicul" },
  { id: "frica-de-urmatorul-atac", label: "Frica de următorul atac" },
  { id: "ce-faci-in-momentul-unui-atac", label: "Ce faci acum" },
  { id: "cand-sa-ceri-ajutor", label: "Când ceri ajutor" },
  { id: "faq", label: "Întrebări frecvente" },
  { id: "referinte", label: "Referințe" },
];

export function TableOfContents() {
  const [activeId, setActiveId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Mobile: floating button + drawer */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white shadow-lg"
          style={{
            backgroundColor: "var(--color-primary)",
            transition: "var(--transition-fast)",
          }}
          aria-label="Navigare secțiuni"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          Secțiuni
        </button>

        {isOpen && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="absolute bottom-20 right-6 w-72 rounded-xl p-4 shadow-lg"
              style={{
                backgroundColor: "var(--color-background-white)",
                border: "1px solid var(--color-border)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <p
                className="text-xs font-medium uppercase tracking-widest mb-3"
                style={{ color: "var(--color-text-secondary)" }}
              >
                În acest ghid
              </p>
              <nav>
                <ul className="flex flex-col gap-1">
                  {sections.map(({ id, label }) => (
                    <li key={id}>
                      <button
                        onClick={() => handleClick(id)}
                        className="w-full text-left rounded-lg px-3 py-2 text-sm"
                        style={{
                          color:
                            activeId === id
                              ? "var(--color-accent)"
                              : "var(--color-text)",
                          backgroundColor:
                            activeId === id
                              ? "rgba(196, 97, 74, 0.08)"
                              : "transparent",
                          fontWeight: activeId === id ? 500 : 400,
                          transition: "var(--transition-fast)",
                        }}
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>

      {/* Desktop: sticky sidebar */}
      <aside className="hidden lg:block w-56 shrink-0">
        <div className="sticky top-8">
          <p
            className="text-xs font-medium uppercase tracking-widest mb-4"
            style={{ color: "var(--color-text-secondary)" }}
          >
            În acest ghid
          </p>
          <nav>
            <ul className="flex flex-col gap-0.5">
              {sections.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => handleClick(id)}
                    className="w-full text-left rounded-lg px-3 py-2 text-sm cursor-pointer"
                    style={{
                      color:
                        activeId === id
                          ? "var(--color-accent)"
                          : "var(--color-text-secondary)",
                      backgroundColor:
                        activeId === id
                          ? "rgba(196, 97, 74, 0.08)"
                          : "transparent",
                      fontWeight: activeId === id ? 500 : 400,
                      borderLeft:
                        activeId === id
                          ? "2px solid var(--color-accent)"
                          : "2px solid transparent",
                      transition: "var(--transition-fast)",
                    }}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
