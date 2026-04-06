# Reguli de Design pentru Pagini — Totul despre Anxietate

> Acest fișier e sursa de adevăr pentru cum arată paginile.
> Citește-l ÎNAINTE de a construi orice pagină nouă.
> Actualizează-l când userul dă feedback nou.

---

## 1. Hero Section

- **Layout obligatoriu:** text pe STÂNGA + SVG/ilustrație pe DREAPTA
- Max-width hero: 1000px
- SVG-ul e o siluetă tematică, animată subtil (doar CSS keyframes pe transform/opacity)
- Pe mobile: se stivuiește vertical (text sus, imagine jos)
- Primele 100 de cuvinte răspund la întrebarea principală a paginii
- Link rapid spre secțiunea "Ce poți face acum" pentru userul în criză

---

## 2. Structura Secțiunilor

- Secțiunile alternează OBLIGATORIU fundalul:
  1. Warm (`--color-background` #F5F0E8)
  2. White (`--color-background-white` #FDFAF5)
  3. Dark (`--color-primary` #1B2B4B, text alb)
  4. Înapoi la warm (ciclul se repetă)
- Informația densă se sparge în secțiuni separate, nu se înghesuie într-una singură
- Max-width conținut: 760px
- Fiecare secțiune: padding 80px vertical (48px pe mobile)

---

## 3. Patterns Vizuale Validate

### A. Specialist Section (secțiune separată)
- Carduri individuale cu emoji (🗺️ 🪜 🔍 🔑 💨) pentru fiecare beneficiu
- Dark CTA block generos la final: `--color-primary`, borderRadius 16px, padding 40px 32px
- Mesaj motivațional + buton "Programează o consultație"

### B. Comparații
- Side-by-side pe desktop, stacked pe mobile
- Border color-coded: VERDE = sănătos, ROȘU/AURIU = problematic
- Carduri vizuale separate, NU text inline cu labels

### C. Ierarhii / Expunere
- Carduri verticale stivuite cu nivele de dificultate
- Color-coded: Verde (ușor) → Galben (mediu) → Roșu (greu)
- NU liste ordonate, CI ierarhie vizuală

### D. Insight-uri Cheie
- Dark box (fundal primary, text alb) pentru concluzii importante
- Callout cu border stânga verde/auriu pentru insight-uri secundare
- Se diferențiază clar de textul body

### E. Cercuri Vicioase / Mecanisme
- Pași numerotați în carduri verticale
- Flow vizual de sus în jos
- Numere mari decorative + border stânga

---

## 4. Tipografie

- **Headings:** Fraunces (serif), H1: 38px w400, H2: 30px w400, H3: 22px w500
- **Body:** font-body (NU Inter, Roboto sau Arial), 17px, line-height 1.75
- **Tracking:** -0.03em pe headings mari
- Heading font ≠ body font, mereu

---

## 5. Culori și Contrast

- Body text care trebuie citit → `var(--color-text)` (#2C2C2C), MEREU
- `var(--color-text-secondary)` (#5A5A5A) DOAR pe: breadcrumbs, labels uppercase mici, subtitluri decorative, iconițe, surse bibliografice
- Niciodată Tailwind default (indigo-500, blue-600 etc.)
- Accent auriu: #C4966C
- Accent verde: #5C7A6A / #7A9E7E

---

## 6. Elemente Interactive

- **Fiecare element clickable** are hover, focus-visible și active state
- Tranziții DOAR pe transform și opacity, NICIODATĂ transition-all
- FAQ accordion cu useState, expand/collapse smooth
- Surse bibliografice colapsabile cu buton "+"
- CTA-uri: link spre `/programare?din=[slug]`

---

## 7. Anti-Generic (ce NU facem)

- NU glassmorphism excesiv
- NU purple gradients pe alb
- NU shadow-md flat (layered, color-tinted, low opacity)
- NU layouts generice AI
- NU aceeași culoare de fundal pe toate secțiunile
- NU text gri pe conținut care trebuie citit

---

## 8. Reguli de Copy (Ton Lingvistic)

- Scrie ca și cum vorbești cu cineva care tocmai a intrat în cabinet
- NU jargon clinic ("expunere interoceptivă" → "expunerea la senzațiile corporale")
- NU termeni englezi netranduși (menționează originalul o singură dată, în paranteză)
- NU diagnostic direct ("Ai X" → "Ce trăiești se numește X")
- NU caps lock pentru urgență
- NU em dash (—), folosește ".." sau virgulă
- NU staccato lists ("Bani. Sănătate. Copiii." → integrează în propoziție)
- NU contrast scurt simetric ("Nu e X. E Y." → reformulează natural)
- Titlu autor mereu complet: "De Daniel Gagea, psiholog clinician, psihoterapeut"

---

## 9. Checklist Pre-Build (parcurge ÎNAINTE de a scrie cod)

- [ ] Am citit conținutul din Obsidian integral?
- [ ] Am citit PAGE_DESIGN_RULES.md (acest fișier)?
- [ ] Hero-ul are text stânga + SVG dreapta?
- [ ] Secțiunile alternează fundalul?
- [ ] Body text folosește `color-text`, nu `color-text-secondary`?
- [ ] Zero em dash, zero staccato, zero contrast scurt?
- [ ] Titlu autor complet (psiholog clinician, psihoterapeut)?
- [ ] CTA spre programare cu parametru `din=`?
- [ ] Secțiune specialist cu emoji cards + dark CTA block?
- [ ] FAQ cu minimum 3 întrebări?
- [ ] Schema markup: Article + FAQPage + Person + BreadcrumbList?
- [ ] Primele 100 cuvinte răspund la întrebarea principală?

---

*Ultima actualizare: 6 aprilie 2026*
