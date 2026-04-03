# SEO & GEO CHECKLIST — Totul despre Anxietate

> Acest checklist se aplică la FIECARE pagină publicată și la website-ul în ansamblu.
> Nicio pagină nu se publică fără 10/10 pe secțiunile aplicabile.
> Surse: Ulise UXSOGO, CITE Framework, SEO Technical, GEO Optimization, Master Framework Notion.

---

## A. CHECKLIST PER PAGINĂ (obligatoriu înainte de publish)

### A1. Metadata (SEO)
- [ ] **Title tag** .. 50-60 caractere, keyword principal la început, brand la final
- [ ] **Meta description** .. 120-155 caractere, răspunde la întrebarea principală, include CTA soft
- [ ] **H1** .. unul singur, conține keyword-ul principal, diferit de title tag dar aceeași intenție
- [ ] **URL** .. scurt, descriptiv, cu keyword, lowercase, cu cratime (ex: `/tipuri/anxietate-sociala`)
- [ ] **Canonical URL** .. self-referencing, HTTPS, format consistent (cu sau fără trailing slash)
- [ ] **Open Graph tags** .. title, description, type, locale (ro_RO), site_name
- [ ] **Autor vizibil** .. "Daniel Gagea, psiholog clinician, psihoterapeut" pe fiecare pagină

### A2. Schema Markup (SEO + GEO)
- [ ] **Article schema** .. cu `datePublished`, `dateModified`, `author` (Person), `publisher` (Organization)
- [ ] **FAQ schema** .. pentru orice secțiune Q&A (minimum 3 întrebări)
- [ ] **Person schema** .. Daniel Gagea cu jobTitle, url, credențiale
- [ ] **BreadcrumbList schema** .. reflectă ierarhia site-ului
- [ ] **Schema validată** .. testat pe search.google.com/test/rich-results

### A3. Structură conținut GEO (CITE Framework)

#### C .. Citable Structure (Structură Citabilă)
- [ ] **Răspuns direct în primele 100 cuvinte** .. propoziția pe care AI-ul o extrage
- [ ] **Fiecare paragraf face O SINGURĂ afirmație clară**
- [ ] **Header-e specifice** .. "Cum funcționează anxietatea socială", NU "Introducere" sau "Despre"
- [ ] **Date în tabele** .. nu îngropate în proză
- [ ] **Testul piramidei inversate** .. citind doar prima propoziție din fiecare paragraf, obții toate ideile cheie

#### I .. Information Density (Densitate Informațională)
- [ ] **Numere specifice** .. "12% din populație", nu "mulți oameni"
- [ ] **Exemple concrete** .. studii de caz, situații reale anonimizate
- [ ] **Date din practica lui Daniel** .. "Din 500+ clienți, am observat că..."
- [ ] **Surse citate** .. referințe științifice cu an, autori, publicație
- [ ] **Testul înlocuirii** .. ar putea apărea acest paragraf în ORICE articol pe subiect? Dacă da, e prea generic.

#### T .. Topical Authority (Autoritate Topică)
- [ ] **Internal links** .. 3-5 link-uri spre pagini din același cluster
- [ ] **Link bidirecțional** .. pagina curentă linkuiește pillar page-ul ȘI invers
- [ ] **Author box** .. credențiale vizibile pe pagină
- [ ] **datePublished + dateModified** .. vizibile pe pagină, nu doar în schema

#### E .. Entity Clarity (Claritate Entități)
- [ ] **"Daniel Gagea"** .. folosit consistent, nu "autorul" sau "specialistul"
- [ ] **Termeni definiți** .. orice concept nou e explicat la prima utilizare
- [ ] **Entități numite** .. DSM-5, nu "manualul de diagnostic". Clark & Beck, nu "cercetătorii"
- [ ] **Consistență** .. același termen pentru același concept pe tot site-ul

### A4. Heading Structure (SEO + GEO)
- [ ] **H1 → H2 → H3** .. ierarhie corectă, fără skip-uri
- [ ] **H2-uri** .. conțin keyword-uri secundare natural
- [ ] **Fiecare H2 e o mini-pagină** .. poate fi extrasă de AI ca răspuns de sine stătător
- [ ] **Niciun heading decorativ** .. toate heading-urile descriu conținutul, nu sunt stilistice

### A5. CTA și Conversie (UX)
- [ ] **CTA primar** .. prezent, clar, link funcțional spre `/programare`
- [ ] **Nicio pagină dead-end** .. mereu link spre pasul următor
- [ ] **Parametru sursă** .. `?din=numele-paginii` pe link-urile spre programare

### A6. Accesibilitate și Mobile
- [ ] **Responsive** .. verificat pe mobile (375px)
- [ ] **Touch targets** .. butoane minimum 48x48px
- [ ] **Font body** .. minimum 16px
- [ ] **Contrast text** .. WCAG AA (4.5:1 text mic, 3:1 text mare)
- [ ] **Alt text pe imagini** .. descriptiv, include keyword natural

---

## B. CHECKLIST SITE-WIDE (verificat lunar)

### B1. Infrastructură Tehnică
- [ ] **Viteză** .. sub 2 secunde (testează pe pagespeed.web.dev)
- [ ] **HTTPS** .. valid, nicio eroare mixed content
- [ ] **robots.txt** .. nu blochează GPTBot, ClaudeBot, PerplexityBot, Google-Extended
- [ ] **sitemap.xml** .. actualizat, toate paginile publice incluse, trimis la Search Console
- [ ] **Zero 404-uri** .. niciun link rupt intern
- [ ] **Core Web Vitals** .. LCP ≤2.5s, INP ≤200ms, CLS ≤0.1

### B2. Indexare Duală
- [ ] **Google Search Console** .. proprietate verificată, sitemap trimis, monitorizat
- [ ] **Bing Webmaster Tools** .. înregistrat, verificat (ChatGPT folosește Bing)
- [ ] **Toate paginile indexate** .. verifică în Search Console → Pagini

### B3. Entity Identity
- [ ] **Organization schema** .. pe homepage, cu name, url, logo
- [ ] **Person schema** .. Daniel Gagea, consistent pe tot site-ul
- [ ] **Google Business Profile** .. complet și activ (dacă aplicabil)
- [ ] **NAP consistent** .. Nume, Adresă, Telefon identice peste tot

### B4. Fișiere Speciale
- [ ] **llms.txt** .. "cuprins" pentru crawlerii AI cu rezumat conținut și semnale autoritate
- [ ] **robots.txt** .. permite toți crawlerii AI
- [ ] **sitemap.xml** .. cu lastmod corect

### B5. Internal Linking
- [ ] **Hub-and-spoke** .. pillar pages linkuiesc toate sub-paginile și invers
- [ ] **Max 3 click-uri** .. orice pagină accesibilă în max 3 click-uri de la homepage
- [ ] **Anchor text descriptiv** .. "anxietatea socială", nu "click aici" sau "citește mai mult"
- [ ] **Niciun orphan page** .. fiecare pagină e linkuită din cel puțin o altă pagină

### B6. Freshness
- [ ] **dateModified actualizat** .. la fiecare modificare de conținut
- [ ] **Refresh trimestrial** .. conținut flagship actualizat cu date noi
- [ ] **An în titluri** .. "Ghid 2026" pe conținut time-sensitive

---

## C. CHECKLIST GEO TESTARE (lunar)

### C1. Testare AI Search
- [ ] **5 query-uri target** .. testate în ChatGPT, Perplexity, Claude cu web search
- [ ] **Documentare** .. cine e citat, ce au ei și noi nu
- [ ] **Ajustare conținut** .. pe baza observațiilor
- [ ] **Re-testare** .. la 2-4 săptămâni

### C2. Query-uri de monitorizat pentru totuldespreanxietate.ro
1. "ce este anxietatea socială"
2. "atac de panică ce să fac"
3. "simptome anxietate socială"
4. "diferența între timiditate și anxietate socială"
5. "psiholog anxietate România"
6. "cum scap de atacuri de panică"
7. "de ce am atacuri de panică"
8. "psihoterapeut anxietate online"
9. "anxietate socială tratament"
10. "Daniel Gagea psiholog"

---

## D. SCOR PAGINĂ

Fiecare pagină primește scor înainte de publish:

| Secțiune | Puncte | Max |
|----------|--------|-----|
| A1. Metadata | /7 | 7 |
| A2. Schema Markup | /5 | 5 |
| A3. CITE Framework | /14 | 14 |
| A4. Heading Structure | /4 | 4 |
| A5. CTA și Conversie | /3 | 3 |
| A6. Accesibilitate | /5 | 5 |
| **TOTAL** | **/38** | **38** |

**Prag minim publish: 32/38 (85%)**
**Target: 36/38 (95%)**

---

## E. DE CE ACEST CHECKLIST

1. **Google indexează prima impresie.** O pagină publicată fără metadata corectă primește o clasificare slabă de la început. E mai greu să urci decât să pornești bine.

2. **AI-urile crawl-uiesc constant.** ChatGPT (prin Bing), Perplexity, Claude și Gemini caută surse citabile. Conținut structurat conform CITE = probabilitate de 2-4x mai mare să fii citat.

3. **Conținutul actualizat în ultimele 30 zile** are 3.2x mai multe citări AI. Freshness nu e opțional.

4. **Site-urile cu schema markup** au probabilitate de 2-4x mai mare să apară în AI Overviews.

5. **H2 → H3 → bullet points** cresc probabilitatea de citare cu 40%. Paragraf de deschidere cu răspuns direct crește citările cu 67%.

6. **Bing este infrastructura ascunsă a ChatGPT.** Dacă nu ești indexat în Bing, ești invizibil pentru ChatGPT.

7. **Entity clarity** permite AI-urilor să asocieze "Daniel Gagea" cu "psiholog anxietate România". Fără consistență, asocierea nu se formează.

---

*Bazat pe: Ulise UXSOGO v1.1, CITE Framework (GEO Optimization), SEO Technical, SEO Audit, SEO & GEO Master Framework, Plan Strategic SEO & GEO, Checklist Operațional Implementare SEO & GEO.*
