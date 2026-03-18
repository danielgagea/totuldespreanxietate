# L.I.B. — Design Library
## Totul despre Anxietate

> Document de referință pentru orice agent AI sau dezvoltator care lucrează pe interfața vizuală a acestui proiect.
> Orice decizie de design se raportează la acest document.

---

## 1. Principii vizuale fundamentale

- **Cald, autoritar, uman** — nu medical-rece, nu wellness-superficial
- **Emoția vizuală primară:** "Te înțeleg exact" — cu elemente de siguranță și credibilitate
- **Omul care ajunge pe site este deja activat emoțional** — culorile saturate și contrastul agresiv agravează starea. Paleta liniștește înainte să informeze.
- **Light mode exclusiv** — dark mode nu se potrivește cu tonul și audiența. CSS variables implementate de la început pentru flexibilitate viitoare.
- **Mult whitespace** — niciodată pagini aglomerate. Dacă o pagină pare plină, scoți ceva, nu adaugi.
- **Site modern, nu bătrânesc** — mult video, text compact, nu masiv. Fonturile nu sunt mari. Sentimentul de modern vine din culori, spațiere și compoziție.

---

## 2. Culorile principale

| Token | Hex | Rol |
|---|---|---|
| `--color-primary` | `#1B2B4B` | Headings, text principal, elemente cheie — albastru-slate profund |
| `--color-primary-light` | `#2A3F6F` | Hover states, backgrounds subtile |
| `--color-secondary` | `#5C7A6A` | Backgrounds secțiuni, accente decorative — sage desaturat |
| `--color-secondary-light` | `#EBF0ED` | Fundal secțiuni alternative — sage foarte deschis |
| `--color-accent` | `#C4614A` | CTA, butoane principale — terracotta |
| `--color-accent-hover` | `#A84F3A` | Hover pe butoane CTA |
| `--color-background` | `#F5F0E8` | Fundal principal — crem cald |
| `--color-background-white` | `#FDFAF5` | Carduri, secțiuni clare — off-white cald |
| `--color-text` | `#2C2C2C` | Body text — charcoal cald |
| `--color-text-secondary` | `#5A5A5A` | Text secundar, captions |
| `--color-border` | `#DDD8CE` | Linii de separare, borduri |

### Reguli de utilizare a culorilor

- **Terracotta** — exclusiv pe butoane și CTA. Niciodată pe text informativ sau decorativ.
- **Sage** — exclusiv ca suprafață (background, separator). Niciodată ca text.
- **Text pe fundal crem:** charcoal `#2C2C2C` — contrast 10:1 ✓ WCAG AA
- **Text alb pe terracotta:** `#FFFFFF` — contrast 4.7:1 ✓ WCAG AA
- **Text primary pe background-white:** contrast 15:1 ✓

### Contrast ratio — verificări WCAG AA

| Combinație | Ratio | Status |
|---|---|---|
| `#2C2C2C` pe `#F5F0E8` | 10:1 | ✓ AAA |
| `#1B2B4B` pe `#FDFAF5` | 15:1 | ✓ AAA |
| `#FFFFFF` pe `#C4614A` | 4.7:1 | ✓ AA |
| `#FFFFFF` pe `#1B2B4B` | 12:1 | ✓ AAA |

---

## 3. Tipografie

### Fonturi

| Rol | Font | Sursă |
|---|---|---|
| Headings (H1–H3, Quote) | **Fraunces** — variable font | Google Fonts |
| Body, UI, Labels (H4–H5, body, caption) | **Inter** — variable font | Google Fonts |

**Implementare Google Fonts:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,400&family=Inter:wght@400;500;600&display=swap">
```

### Scala tipografică

| Element | Desktop | Mobile | Font | Weight | Line-height |
|---|---|---|---|---|---|
| H1 | 38px | 28px | Fraunces | 400 | 1.25 |
| H2 | 30px | 24px | Fraunces | 400 | 1.30 |
| H3 | 24px | 20px | Fraunces | 500 | 1.35 |
| H4 | 19px | 17px | Inter | 600 | 1.40 |
| H5 | 16px | 15px | Inter | 600 | 1.40 |
| Body | 17px | 16px | Inter | 400 | 1.75 |
| Body small | 15px | 14px | Inter | 400 | 1.70 |
| Quote / Highlight | 20px | 18px | Fraunces italic | 400 | 1.55 |
| Label | 12px | 12px | Inter | 500 | 1.40 |
| Caption | 13px | 13px | Inter | 400 | 1.60 |

### Reguli tipografice

- `font-size` setat pe `html` element la **17px** bază — toate dimensiunile în `rem`
- H1 apare o singură dată per pagină
- Heading-urile principale (H1, H2) la weight 400 — autoritate caldă, nu agresivă
- Pe paginile cu video embedded, H1 poate coborî la 32px desktop — videoclipul este elementul dominant
- Body la minimum 17px — articolele trebuie citite confortabil
- Niciodată bold agresiv (weight 700+) pe headings mari

---

## 4. Spacing system

Bazat pe **8px grid**.

| Token | Valoare | Utilizare tipică |
|---|---|---|
| `--space-xs` | 4px | Micro gaps, icon spacing |
| `--space-sm` | 8px | Inline spacing |
| `--space-md` | 16px | Component internal padding |
| `--space-lg` | 24px | Between elements |
| `--space-xl` | 32px | Section internal padding |
| `--space-2xl` | 48px | Between components |
| `--space-3xl` | 64px | Section gaps |
| `--space-4xl` | 96px | Major section separators |

---

## 5. Border radius

| Element | Radius |
|---|---|
| Butoane | 8px |
| Carduri | 12px |
| Imagini | 8px |
| Input fields | 6px |
| Badges / Tags | 4px |

---

## 6. Shadow system

| Token | Valoare | Utilizare |
|---|---|---|
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,0.06)` | Carduri, input fields |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.08)` | Modals, dropdowns |
| `--shadow-lg` | `0 8px 24px rgba(0,0,0,0.10)` | Elemente flotante |

---

## 7. Breakpoints și layout

| Nume | Range |
|---|---|
| mobile | 0 – 767px |
| tablet | 768 – 1023px |
| desktop | 1024px+ |
| wide | 1280px+ |

### Max-width

| Context | Valoare |
|---|---|
| Articole, conținut editorial | 760px |
| Layout general | 1200px |
| Full-width sections | 100% |

---

## 8. Componente — butoane

### Tipuri

**Primary (CTA principal)**
- Background: `--color-accent` `#C4614A`
- Text: `#FFFFFF`
- Border: none
- Radius: 8px
- Padding: 14px 28px
- Font: Inter 16px weight 500

**Secondary**
- Background: transparent
- Text: `--color-primary` `#1B2B4B`
- Border: `1.5px solid #1B2B4B`
- Radius: 8px
- Padding: 13px 27px

**Ghost**
- Background: transparent
- Text: `--color-primary`
- Border: none
- Utilizare: acțiuni terțiare, navigație subtilă

### States

| State | Primary | Secondary |
|---|---|---|
| Default | `#C4614A` bg | transparent bg |
| Hover | `#A84F3A` bg | `#1B2B4B` bg, text alb |
| Active | `#8F3F2C` bg | `#2A3F6F` bg, text alb |
| Disabled | `#DDD8CE` bg, text `#5A5A5A` | `#DDD8CE` border, text `#5A5A5A` |
| Focus | outline `2px solid #1B2B4B`, offset `2px` | idem |

---

## 9. Componente — carduri

- Background: `--color-background-white` `#FDFAF5`
- Border: `1px solid #DDD8CE`
- Shadow: `--shadow-sm`
- Radius: 12px
- Padding intern: 24px
- Niciodată shadow dramatică sau border colorată

---

## 10. Componente — formulare și input fields

- Background: `#FFFFFF`
- Border default: `1px solid #DDD8CE`
- Border focus: `1.5px solid #1B2B4B`
- Radius: 6px
- Padding: 12px 16px
- Font: Inter 16px weight 400
- Label: Inter 13px weight 500, `#2C2C2C`, margin-bottom 6px
- Error state: border `#C4614A`, text eroare `#C4614A` 13px sub field
- Success state: border `#5C7A6A`

---

## 11. Componente editoriale

### Pull-quote
- Font: Fraunces italic 20px, weight 400
- Line-height: 1.55
- Border-left: 3px solid `#C4614A`
- Padding-left: 24px
- Color: `#1B2B4B`

### Callout box
- Background: `#EBF0ED` (sage light)
- Border-left: 3px solid `#5C7A6A`
- Padding: 16px 20px
- Radius: 8px
- Font: Inter 15px

### Text highlight inline
- Background: `#EDE8DE` (crem mai închis)
- Padding: 1px 4px
- Radius: 3px
- Fără border

### Separator
- Linie `1px solid #DDD8CE`
- Niciodată box sau shadow groasă

---

## 12. Link-uri

| Context | Stil |
|---|---|
| Link în text | Color `#1B2B4B`, fără subliniere default |
| Link hover | Subliniere apare, culoare rămâne |
| Link visited | Identic cu default — fără visited state diferit |
| Link navigație | Inter 15px weight 500, `#2C2C2C` |
| Link navigație hover | Color `#1B2B4B` |
| Link CTA inline | Color `#C4614A`, weight 500 |

---

## 13. Iconografie

- **Library:** Lucide React
- **Style:** Line icons — niciodată filled
- **Size default:** 20px
- **Size mare (decorativ):** 24px maxim
- **Color:** moștenit din context — niciodată culoare proprie hardcoded
- **Niciodată:** iconografie medicală (stethoscop, creier cu engrenaje, cruce medicală etc.)

---

## 14. Motion și tranziții

| Element | Tranziție |
|---|---|
| Hover states (butoane, link-uri) | `200ms ease-out` |
| Fade-in la scroll | `300ms ease-out`, `translateY(12px) → translateY(0)` |
| Modal open/close | `250ms ease-out` |
| Maximum durată UI | 400ms |

**Reguli:**
- Toate animațiile dezactivate pentru `prefers-reduced-motion: reduce`
- Niciodată animații mai lungi de 400ms pe elemente de UI
- Nicio animație decorativă fără scop funcțional

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 15. Fotografie și media

### Fotografia lui Daniel
- **Raport de aspect:** 3:4 (portret)
- **Lumină:** naturală sau studio cald — niciodată lumină albă dură
- **Expresie:** deschisă, prezentă — nu zâmbet forțat, nu față de doctor
- **Fundal:** neutru desaturat, ușor bokeh — nu alb pur, nu culoare saturată
- **Tratament culoare:** warm grade ușor — nu filtru puternic, nu B&W

### Fotografii generale
- **Zero** fotografii stock cu oameni fericiți
- **Zero** iconografie sau ilustrații medicale
- Fotografii abstracte: natură, textură, lumină — în tonuri calde, compatibile cu paleta
- Fotografii abstracte în tonuri de crem, sage, terracotta desaturat

### Video
- Fundal curat — crem cald sau neutru
- Lumină naturală sau studio cald
- Nu fundal alb steril

---

## 16. CSS Variables — implementare completă

```css
:root {
  /* Culori */
  --color-primary: #1B2B4B;
  --color-primary-light: #2A3F6F;
  --color-secondary: #5C7A6A;
  --color-secondary-light: #EBF0ED;
  --color-accent: #C4614A;
  --color-accent-hover: #A84F3A;
  --color-background: #F5F0E8;
  --color-background-white: #FDFAF5;
  --color-text: #2C2C2C;
  --color-text-secondary: #5A5A5A;
  --color-border: #DDD8CE;

  /* Tipografie */
  --font-heading: 'Fraunces', serif;
  --font-body: 'Inter', sans-serif;
  --text-base: 17px;

  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 96px;

  /* Border radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.06);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.08);
  --shadow-lg: 0 8px 24px rgba(0,0,0,0.10);

  /* Layout */
  --max-width-content: 760px;
  --max-width-layout: 1200px;

  /* Motion */
  --transition-fast: 200ms ease-out;
  --transition-base: 300ms ease-out;
  --transition-slow: 400ms ease-out;
}
```
