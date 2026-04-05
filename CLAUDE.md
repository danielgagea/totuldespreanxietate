# CLAUDE.md — Totul despre Anxietate

> Document de referință pentru orice sesiune Claude Code pe acest proiect.
> Citește-l complet înainte de orice acțiune.

---

## 1. Always Do First

- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.
- **Check `brand_assets/`** before designing. If assets exist, use them. Do not use placeholders where real assets are available.
- **Citește `SEO-GEO-CHECKLIST.md`** înainte de a publica orice pagină. Nicio pagină nu se publică fără scor minim 32/38. Aplică secțiunile A1-A6 la fiecare pagină nouă.

---

## 2. Proiect Overview

**Website:** Totul despre Anxietate
**Autor:** Daniel Gagea — psiholog clinician, 10+ ani experiență, 500+ clienți
**Limbă:** Română exclusiv
**Scop primar:** Resursa #1 din România despre anxietate — găsită organic pe Google și recomandată de AI-uri (ChatGPT, Gemini, Claude, Perplexity)
**Scop secundar:** Conversie spre terapie individuală cu Daniel Gagea
**Brief complet:** Obsidian vault "activebrain" → `Skills/Context/totul-despre-anxietate-brief.md` (citește via MCP la începutul fiecărei sesiuni)

### Audiență
- Adulți 25–40 ani, funcționali profesional — nu au diagnostic, suspectează că ceva nu e în regulă
- Caută simptome fizice pe Google (palpitații, insomnie, amețeli) → descoperă anxietatea
- Segmente prioritare: antreprenori cu anxietate, bărbați cu anxietate, femei cu anxietate
- Stare la intrare pe site: confuzie, frică, uneori criză acută
- Bariere: stigmă socială, rușine, convingerea că "trece de la sine"

### Diferențiatorul unic Daniel
Fiecare simptom e tratat nu doar ca "ce este" ci și **"ce vrea să spună psihicul prin el"** — dinamica din spatele simptomului, mesajul, semnificația. Nu există în nicio altă resursă românească.

### Funnel de conversie
```
Confuzie → Recunoaștere → Înțelegere → Încredere → Acțiune
```
Arhitectura nu sare etape și nu grăbește procesul.

---

## 3. Regula #0 — Filtrul universal de decizie

> Orice decizie de conținut, structură, design sau tehnică se ia ținând cont de:
> **"E căutat cineva pe Google sau îl recomandă un AI?"**

Aceasta nu blochează automat o decizie, dar este primul filtru aplicat întotdeauna.

---

## 4. Stack tehnic

- **Next.js 16** (App Router) — SSR/SSG, deploy pe Vercel
- **React 19** + **TypeScript**
- **Tailwind CSS 4** (PostCSS plugin)
- **Puppeteer** — screenshots automate

### Build & Dev Commands

```bash
npm install          # Instalare dependențe
npm run dev          # Server local → http://localhost:3000
npm run build        # Build producție
npm run lint         # ESLint
```

---

## 5. Reference Images

- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see Anti-Generic Guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

---

## 6. Local Server

- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `npm run dev` (serves at `http://localhost:3000`)
- If the server is already running, do not start a second instance.

---

## 7. Screenshot Loop — Autocorectare vizuală

Scriptul de screenshots se află la `scripts/screenshot.js`.

```bash
node scripts/screenshot.js http://localhost:3000              # → screenshot-1.png
node scripts/screenshot.js http://localhost:3000 hero-fix     # → screenshot-2-hero-fix.png
```

Screenshots sunt salvate în `temp_screenshots/` cu auto-increment (nu suprascrie).

**Workflow obligatoriu după orice modificare frontend:**
1. Pornește serverul local (`npm run dev`) dacă nu rulează deja
2. Scrie/modifică codul
3. Rulează `node scripts/screenshot.js http://localhost:3000`
4. Citește PNG-ul rezultat cu Read tool — Claude poate vedea și analiza imaginea direct
5. Analizează: layout, typography, spacing, culori, CTA-uri
6. Corectează codul pe baza a ce vezi
7. Screenshot din nou → compară cu precedentul
8. **Repetă până la minimum 2 runde fără probleme vizibile**
9. Raportează userului ce ai văzut și ce ai schimbat în fiecare rundă

**Când compari, fii specific:** "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
**Checklist comparare:** spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

**Dacă există reference image:** compară screenshot-ul cu referința pixel cu pixel. Nu te opri până nu e identic sau userul spune stop.

**Când NU folosești screenshots:**
- Componente animate (background animations, particle effects, WebGL)
- Spune explicit userului: "Am sărit screenshots pentru [componentă] — animațiile nu se capturează corect"

---

## 8. Brand Assets

Folderul `brand_assets/` conține logo și brand guidelines.
**Citește-le înainte de orice sesiune de frontend.**
- If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.
- Dacă folderul e gol sau lipsesc assets, întreabă userul înainte să improvizezi.

---

## 9. Anti-Generic Guardrails

Tonul vizual al acestui site:
- Uman, calm, profesionist — nu clinic-rece, nu motivational-fals
- Audiența vine în stare de confuzie sau frică — designul transmite **siguranță și claritate**

### Reguli specifice:
- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Pick a custom brand color and derive from it.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. Pair a display/serif with a clean sans. Apply tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body. Nu folosi Inter, Roboto sau Arial.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.
- **Text contrast:** Orice text de corp care trebuie citit folosește `var(--color-text)`, nu `var(--color-text-secondary)`. Secondary se folosește DOAR pe elemente decorative: breadcrumbs, label-uri uppercase mici, subtitluri de tip "Ghid complet 2026", iconițe, surse bibliografice. Dacă un paragraf, o descriere de card, un răspuns FAQ sau un exercițiu e greu de citit, culoarea e greșită.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.
- Evită: glassmorphism excesiv, purple gradients pe alb, layouts generice AI

---

## 10. SEO & GEO — Reguli obligatorii pentru fiecare pagină

- Fiecare pagină răspunde la o **întrebare specifică în primele 100 de cuvinte**
- **Daniel Gagea apare ca autor** pe fiecare pagină (entity consistency pentru AI)
- **Nicio pagină nu e dead-end** — CTA sau link spre pasul următor întotdeauna
- **Fiecare pagină are un job primar și unul secundar** — niciodată trei
- Schema markup: FAQ schema, Article schema, Person schema pentru Daniel
- Internal linking: paginile hub leagă toate articolele satelit
- Keyword-uri prioritare: anxietate simptome, atac de panică, cum scap de anxietate, palpitații anxietate

---

## 11. Deployment Rules

- **Testează întotdeauna pe localhost** înainte de orice push
- **NU face push la GitHub** până când userul nu spune explicit "push" sau "commit"
- Workflow: `localhost` → confirmare user → `git commit` → GitHub → Vercel autodeploy

---

## 12. Hard Rules — Ce NU faci niciodată

- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color
- Nu adaugi conceptele proprii Daniel (Fractal Mind, Negociere Internă) — aparțin danielgagea.ro
- Nu construiești pagini fără job primar clar definit
- Nu lași pagini fără CTA sau link spre pasul următor
- Nu abordezi anxietatea la copii și adolescenți (faza 1)
- Nu produci conținut medical-rece sau motivational-fals
- Nu folosești design generic AI (purple gradients, glassmorphism)
