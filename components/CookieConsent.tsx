"use client";

import { useState, useEffect, useCallback } from "react";

interface ConsentState {
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

function getStoredConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem("cookie-consent");
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function storeConsent(consent: ConsentState) {
  localStorage.setItem("cookie-consent", JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent("consent-updated"));
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored) {
      setVisible(true);
    }
    setMounted(true);

    function handleOpenSettings() {
      const stored = getStoredConsent();
      if (stored) {
        setAnalytics(stored.analytics);
        setMarketing(stored.marketing);
      }
      setShowSettings(true);
      setVisible(true);
    }

    window.addEventListener("open-cookie-settings", handleOpenSettings);
    return () => window.removeEventListener("open-cookie-settings", handleOpenSettings);
  }, []);

  const accept = useCallback((analyticsVal: boolean, marketingVal: boolean) => {
    storeConsent({
      analytics: analyticsVal,
      marketing: marketingVal,
      timestamp: new Date().toISOString(),
    });
    setVisible(false);
    setShowSettings(false);
  }, []);

  const acceptAll = useCallback(() => accept(true, true), [accept]);
  const acceptEssential = useCallback(() => accept(false, false), [accept]);
  const saveSettings = useCallback(() => accept(analytics, marketing), [accept, analytics, marketing]);

  if (!mounted || !visible) return null;

  return (
    <>
      <style>{cssText}</style>
      <div
        className="cc-overlay"
        style={{
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? "auto" : "none",
        }}
      >
        <div
          className="cc-banner"
          role="dialog"
          aria-label="Setări cookie-uri"
          style={{
            transform: visible ? "translateY(0)" : "translateY(100%)",
            opacity: visible ? 1 : 0,
          }}
        >
          {!showSettings ? (
            /* Main banner */
            <div className="cc-main">
              <div className="cc-text">
                <h3 className="cc-title">Respectăm confidențialitatea ta</h3>
                <p className="cc-desc">
                  Folosim cookie-uri pentru a înțelege cum navighezi pe site și pentru a-ți arăta
                  conținut relevant. Cookie-urile esențiale sunt mereu active, cele de analytics
                  și marketing le activezi tu.
                </p>
              </div>
              <div className="cc-actions">
                <button className="cc-btn cc-btn-primary" onClick={acceptAll}>
                  Acceptă toate
                </button>
                <button className="cc-btn cc-btn-secondary" onClick={acceptEssential}>
                  Doar esențiale
                </button>
                <button className="cc-btn cc-btn-link" onClick={() => setShowSettings(true)}>
                  Setări
                </button>
              </div>
            </div>
          ) : (
            /* Settings panel */
            <div className="cc-settings">
              <h3 className="cc-title">Setări cookie-uri</h3>
              <p className="cc-desc" style={{ marginBottom: 24 }}>
                Alege ce tipuri de cookie-uri dorești să fie active. Poți reveni oricând
                la aceste setări.
              </p>

              <div className="cc-toggle-group">
                {/* Essential - always on */}
                <div className="cc-toggle-row">
                  <div className="cc-toggle-info">
                    <span className="cc-toggle-label">Esențiale</span>
                    <span className="cc-toggle-desc">
                      Necesare pentru funcționarea site-ului. Nu pot fi dezactivate.
                    </span>
                  </div>
                  <div className="cc-toggle cc-toggle-locked">
                    <div className="cc-toggle-track cc-toggle-on">
                      <div className="cc-toggle-thumb cc-thumb-on" />
                    </div>
                  </div>
                </div>

                {/* Analytics */}
                <div className="cc-toggle-row">
                  <div className="cc-toggle-info">
                    <span className="cc-toggle-label">Analytics</span>
                    <span className="cc-toggle-desc">
                      Ne ajută să înțelegem cum folosești site-ul, ca să-l facem mai util.
                    </span>
                  </div>
                  <button
                    className="cc-toggle"
                    onClick={() => setAnalytics((v) => !v)}
                    role="switch"
                    aria-checked={analytics}
                    aria-label="Analytics cookie-uri"
                  >
                    <div className={`cc-toggle-track ${analytics ? "cc-toggle-on" : ""}`}>
                      <div className={`cc-toggle-thumb ${analytics ? "cc-thumb-on" : ""}`} />
                    </div>
                  </button>
                </div>

                {/* Marketing */}
                <div className="cc-toggle-row">
                  <div className="cc-toggle-info">
                    <span className="cc-toggle-label">Marketing</span>
                    <span className="cc-toggle-desc">
                      Permit afișarea de conținut relevant pe alte platforme.
                    </span>
                  </div>
                  <button
                    className="cc-toggle"
                    onClick={() => setMarketing((v) => !v)}
                    role="switch"
                    aria-checked={marketing}
                    aria-label="Marketing cookie-uri"
                  >
                    <div className={`cc-toggle-track ${marketing ? "cc-toggle-on" : ""}`}>
                      <div className={`cc-toggle-thumb ${marketing ? "cc-thumb-on" : ""}`} />
                    </div>
                  </button>
                </div>
              </div>

              <div className="cc-actions" style={{ marginTop: 24 }}>
                <button className="cc-btn cc-btn-primary" onClick={saveSettings}>
                  Salvează preferințele
                </button>
                <button className="cc-btn cc-btn-secondary" onClick={acceptAll}>
                  Acceptă toate
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

/* Inline button to open cookie settings from footer */
export function CookieSettingsButton() {
  return (
    <button
      onClick={() => window.dispatchEvent(new CustomEvent("open-cookie-settings"))}
      style={{
        background: "none",
        border: "none",
        padding: 0,
        font: "inherit",
        fontSize: 13,
        color: "var(--color-text-secondary, #5A5A5A)",
        cursor: "pointer",
        textDecoration: "underline",
        textUnderlineOffset: "2px",
      }}
    >
      Setări cookie
    </button>
  );
}

const cssText = `
.cc-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: rgba(0, 0, 0, 0.15);
  transition: opacity 0.3s ease-out;
}

.cc-banner {
  width: 100%;
  max-width: 720px;
  margin: 0 16px 16px;
  padding: 28px 32px;
  background: var(--color-background-white, #FDFAF5);
  border: 1px solid rgba(27, 43, 75, 0.1);
  border-radius: 16px;
  box-shadow:
    0 -4px 24px rgba(27, 43, 75, 0.08),
    0 -1px 6px rgba(27, 43, 75, 0.04);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
              opacity 0.3s ease-out;
}

.cc-title {
  font-family: var(--font-heading, 'Fraunces', serif);
  font-size: 22px;
  font-weight: 500;
  color: var(--color-primary, #1B2B4B);
  margin: 0 0 8px;
  letter-spacing: -0.02em;
}

.cc-desc {
  font-size: 15px;
  line-height: 1.6;
  color: var(--color-text, #2C2C2C);
  margin: 0;
}

.cc-actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.cc-btn {
  font-family: var(--font-body, sans-serif);
  font-size: 14px;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: transform 0.15s ease-out, opacity 0.15s ease-out;
}

.cc-btn:hover {
  transform: translateY(-1px);
  opacity: 0.9;
}

.cc-btn:active {
  transform: translateY(0);
}

.cc-btn:focus-visible {
  outline: 2px solid var(--color-secondary, #5C7A6A);
  outline-offset: 2px;
}

.cc-btn-primary {
  background: var(--color-secondary, #5C7A6A);
  color: #ffffff;
}

.cc-btn-secondary {
  background: transparent;
  border: 1px solid var(--color-primary, #1B2B4B);
  color: var(--color-primary, #1B2B4B);
}

.cc-btn-link {
  background: transparent;
  color: var(--color-text-secondary, #5A5A5A);
  text-decoration: underline;
  text-underline-offset: 2px;
  padding: 10px 12px;
}

/* Toggle group */
.cc-toggle-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.cc-toggle-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 12px 16px;
  background: var(--color-background, #F5F0E8);
  border-radius: 10px;
}

.cc-toggle-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.cc-toggle-label {
  font-size: 15px;
  font-weight: 600;
  color: var(--color-primary, #1B2B4B);
}

.cc-toggle-desc {
  font-size: 13px;
  line-height: 1.4;
  color: var(--color-text-secondary, #5A5A5A);
}

.cc-toggle {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex-shrink: 0;
}

.cc-toggle-locked {
  cursor: default;
  opacity: 0.7;
}

.cc-toggle-track {
  width: 44px;
  height: 24px;
  border-radius: 12px;
  background: #C5C5C5;
  position: relative;
  transition: background 0.2s ease-out;
}

.cc-toggle-on {
  background: var(--color-secondary, #5C7A6A);
}

.cc-toggle-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.15);
  transition: transform 0.2s ease-out;
}

.cc-thumb-on {
  transform: translateX(20px);
}

/* Mobile */
@media (max-width: 600px) {
  .cc-banner {
    margin: 0 8px 8px;
    padding: 20px 20px;
  }

  .cc-title {
    font-size: 19px;
  }

  .cc-desc {
    font-size: 14px;
  }

  .cc-actions {
    flex-direction: column;
  }

  .cc-btn {
    width: 100%;
    text-align: center;
  }
}
`;
