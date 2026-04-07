"use client";

import Script from "next/script";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const GA_ID = "G-WDYJ09S9F0";
const META_PIXEL_ID = "869231695107877";

interface ConsentState {
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

function getConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem("cookie-consent");
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function AnalyticsLoader() {
  const [analyticsConsent, setAnalyticsConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [gaLoaded, setGaLoaded] = useState(false);
  const [fbLoaded, setFbLoaded] = useState(false);
  const pathname = usePathname();

  // Read consent on mount and listen for updates
  useEffect(() => {
    function readConsent() {
      const consent = getConsent();
      if (consent) {
        setAnalyticsConsent(consent.analytics);
        setMarketingConsent(consent.marketing);
      }
    }

    readConsent();

    window.addEventListener("consent-updated", readConsent);
    return () => window.removeEventListener("consent-updated", readConsent);
  }, []);

  // Track ViewContent on /tipuri/* pages
  useEffect(() => {
    if (!pathname) return;
    const isTipuriPage = pathname.startsWith("/tipuri/");

    if (isTipuriPage && gaLoaded && analyticsConsent) {
      if (typeof window.gtag === "function") {
        window.gtag("event", "view_content", {
          content_type: "article",
          page_path: pathname,
        });
      }
    }

    if (isTipuriPage && fbLoaded && marketingConsent) {
      if (typeof window.fbq === "function") {
        window.fbq("track", "ViewContent", {
          content_type: "article",
          content_name: pathname,
        });
      }
    }
  }, [pathname, gaLoaded, fbLoaded, analyticsConsent, marketingConsent]);

  return (
    <>
      {/* GA4 */}
      {analyticsConsent && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
            onLoad={() => setGaLoaded(true)}
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {/* Meta Pixel */}
      {marketingConsent && (
        <Script id="fb-pixel-init" strategy="afterInteractive" onLoad={() => setFbLoaded(true)}>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}
