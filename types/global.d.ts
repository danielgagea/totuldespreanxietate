/* eslint-disable no-var */

interface Window {
  gtag: (...args: unknown[]) => void;
  fbq: (...args: unknown[]) => void;
  dataLayer: unknown[];
}
