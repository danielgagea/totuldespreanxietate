# Design System

Acest proiect împrumută tema vizuală de la **platforma-antreprenori** (danielgagea.ro / liderperformant.ro). Repos separate, deploy-uri separate, sync manual al design-tokens.

> Sursa originală: `/Users/danielgagea/platforma-antreprenori/src/app/globals.css`
> Snapshot adus aici: **2026-05-18**

## Paleta de culori (Tailwind v4 — folosește direct ca `bg-lp-navy`, `text-lp-cyan` etc.)

| Token | Hex | Folosit pentru |
|---|---|---|
| `lp-navy` | `#081d3d` | Text principal, butoane secundare, branding |
| `lp-navy-soft` | `#102a52` | Backgrounds dark (footer) |
| `lp-cyan` | `#61c6ea` | CTA principal, accente |
| `lp-cyan-dark` | `#4fb1d6` | Hover CTA, link-uri în articole |
| `lp-yellow` | `#fee770` | Highlight underline, label-uri |
| `lp-bg` | `#f2f4f5` | Background secțiuni |
| `lp-border` | `#e2e5ed` | Border-uri carduri/inputs |
| `lp-mute` | `#555555` | Text secundar |
| `lp-mute-soft` | `#4a5560` | Text terțiar, label-uri |

Tokens vechi anxiety (păstrate ca `anx-*`):  `anx-background`, `anx-primary`, `anx-secondary`, `anx-accent`, `anx-text`, `anx-border`. Folosite pentru pagini care încă n-au fost redesign-uite.

## Fonturi

Setate în `app/layout.tsx` ca CSS variables:

| Variabilă CSS | Font | Clasă utilitară | Folosit pentru |
|---|---|---|---|
| `--font-inter` | Inter | (default body) | Body text general |
| `--font-work-sans` | Work Sans | `font-work` | Titluri principale, UI text |
| `--font-merriweather` | Merriweather (italic) | `font-serif` | Citate, accente serif |
| `--font-bebas` | Bebas Neue | `font-display` | Display foarte mare (rar) |
| `--font-heading` | Fraunces | `font-heading-anx` | Pagini vechi anxiety (legacy) |

## Componente / clase utilitare

| Clasă | Descriere |
|---|---|
| `lp-cta` | Buton primary (cyan, hover dark, shadow) |
| `lp-cta-ghost` | Buton secundar (outline navy) |
| `lp-input` | Input/textarea cu focus state cyan |
| `lp-yellow-underline` | Highlight text cu galben pe ultima jumătate (folosit pe cuvinte cheie în titluri) |
| `lp-arrow-pulse` | Animație CTA cu ring care pulsează |
| `lp-arrow-icon-right` / `lp-arrow-icon-down` | Animație săgeată discretă |
| `article-prose` | Wrapper pentru long-form articole (typography completă) |
| `logo-marquee` + `logo-marquee-track` | Carousel logos infinit |

## Cum redesignez o pagină

1. Înlocuiește orice `text-primary` / `bg-background` / `border-border` cu echivalent `text-lp-navy` / `bg-white` / `border-lp-border`
2. Pentru CTA-uri.. `<a className="lp-cta px-6 py-3 ...">Text</a>`
3. Pentru titluri.. `<h1 className="font-work text-5xl font-bold text-lp-navy">`
4. Pentru long-form articole.. wrap în `<div className="article-prose">...</div>`
5. Pentru highlight pe un cuvânt din titlu.. `<span className="lp-yellow-underline">cuvântul</span>`

## Reguli sync cu platforma-antreprenori

- **Sursa de adevăr** rămâne `platforma-antreprenori/src/app/globals.css`. Dacă se schimbă acolo, vine în acest fișier prin copy-paste manual.
- **NU adăuga aici reguli care nu vin din platforma** — dacă vrei ceva specific anxiety, pune-l într-un fișier `app/anx.css` separat și importă-l din `layout.tsx` după `globals.css`.
- **Convenția numelor**.. `lp-*` = împrumutat din platforma (nu modifica), `anx-*` = specific anxiety (poți modifica).

## TODO migrare

- [ ] Pagina home: redesign cu paleta nouă
- [ ] Pagini articol (resurse anxietate): redesign hero + body cu `article-prose`
- [ ] Footer + Nav: aliniat cu look-ul de pe danielgagea.ro
- [ ] FAQ-uri: pattern din `/lider-performant`
- [ ] Form-uri (newsletter, contact): folosit `lp-input` + `lp-cta`
- [ ] Eliminat fontul Fraunces după ce toate paginile sunt migrate (acum păstrat pentru compatibilitate)
