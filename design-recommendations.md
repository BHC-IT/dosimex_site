# Dosimex -- Design Vision Document

A complete design system and creative brief for dosimex.fr. Written as an opinionated blueprint that a frontend developer can build from directly.

Based on: competitive analysis of 8 dosimetry companies, copy review of current Dosimex texts, and senior UX/design judgment for B2B scientific software.

Date: 2026-03-20

---

## 1. Design Philosophy

### The market is a sea of surgical blue

Every dosimetry company -- DOSIsoft, IBA, PTW, Dosimetrics, GEX, Voximetry, Rapid Dosimetry -- wraps itself in navy, steel gray, and clinical white. Their sites feel like hospital corridors: functional, antiseptic, forgettable. They convey "we are serious" through blandness. Nobody takes a risk. Nobody has a voice.

This is Dosimex's opening.

### What the site should feel like

**"The sharpest tool in the workshop, not the shiniest brochure in the lobby."**

Imagine a senior physicist's desk: precise instruments, well-organized reference material, a worn copy of ICRP 116 with Post-it notes sticking out. Everything has purpose. Nothing is decorative for decoration's sake. But there is warmth here -- the desk lamp casts amber light, the tools have patina from decades of real use.

That is the feeling. Competence you can feel. Warmth you do not expect.

Three design principles:

1. **Precision over polish.** This audience reads data tables for breakfast. The design should feel meticulous -- tight alignment, consistent spacing, careful typography. Not "creative agency slick" but "engineered with intent."

2. **Warmth in a cold market.** The red/gold palette is genuinely unique in this space. Lean into it. Not aggressively -- a well-placed ember, not a forest fire. The warmth should feel earned, like it comes from 30 years of caring about getting calculations right.

3. **Density where it matters, air where it counts.** Tool pages and documentation pages should be information-rich -- this audience respects density. But the hero, testimonials, pricing, and CTAs need room to breathe. The rhythm is: breathe, inform, breathe, inform, close.

### Personality guardrails

**Dosimex IS:** Expert, precise, transparent, human, proven, accessible
**Dosimex IS NOT:** Corporate, playful, flashy, cheap, academic, bureaucratic

The voice is a senior colleague who explains things clearly, not a salesperson who oversimplifies, and not a professor who overcomplicates.

---

## 2. Color System

### Why red and gold

The entire market uses blue because blue means "trust" and "science." But when everyone signals the same thing, nobody stands out. Dosimex's red and gold are distinctive without being frivolous -- red communicates urgency and precision (think: warning labels, measurement marks on instruments), and gold communicates value and proven quality.

Do not switch to blue. That would be the single worst design decision possible.

### The palette

#### Primary -- Dosimex Red
```
--color-primary-50:  #FEF2F3
--color-primary-100: #FDE3E5
--color-primary-200: #FBC9CE
--color-primary-300: #F8A3AB
--color-primary-400: #F26E7B
--color-primary-500: #E63E50
--color-primary-600: #DB2132   <-- brand red, primary actions, key accents
--color-primary-700: #B71828
--color-primary-800: #981824
--color-primary-900: #7F1A24
--color-primary-950: #45080E
```

Usage: Primary buttons, active nav indicators, key headings on light backgrounds, link hover states, pricing highlights. Use 600 as the default. Use 700 for hover. Use 50/100 for tinted backgrounds on sections that need warmth.

#### Secondary -- Dosimex Gold
```
--color-accent-50:  #FFFBEB
--color-accent-100: #FFF3C6
--color-accent-200: #FFE588
--color-accent-300: #FFD34A
--color-accent-400: #FFC03D      <-- brand gold, secondary accents
--color-accent-500: #F9A80D
--color-accent-600: #DD7F02
--color-accent-700: #B75A06
--color-accent-800: #94450C
--color-accent-900: #7A390D
--color-accent-950: #461C02
```

Usage: Badges ("Essai gratuit," "Nouveau"), stat counter numbers, secondary highlights, pricing savings callout, icon accent dots. Never as background for large sections -- gold backgrounds look cheap. Use it sparingly, like actual gold.

#### Neutrals -- Warm Slate
Do not use pure gray. Pure gray reads cold and detaches from the warm primaries. Use a slightly warm slate:

```
--color-slate-50:  #F8F8F7    <-- page background (light mode)
--color-slate-100: #F0EFED
--color-slate-150: #E8E6E3    <-- alternate section background
--color-slate-200: #D9D6D2
--color-slate-300: #BCB7B0
--color-slate-400: #9A9389
--color-slate-500: #7D756B
--color-slate-600: #6A6259
--color-slate-700: #57504A
--color-slate-800: #4A443F
--color-slate-900: #403B37
--color-slate-950: #22201E    <-- primary text (light mode), bg (dark mode)
```

Usage: Body text in 950 (light mode) or 50 (dark mode). Borders in 200. Muted text in 500. Section alternation between 50 and 150.

#### Semantic colors
```
--color-success:  #16A34A   (green-600)
--color-warning:  #D97706   (amber-600)
--color-error:    #DC2626   (red-600, close to primary but distinct)
--color-info:     #2563EB   (blue-600 -- yes, blue is fine for informational)
```

### Color usage rules

1. **Red is for action and emphasis.** Primary buttons, active states, key headings. Never for backgrounds larger than a badge or tag.
2. **Gold is for distinction and reward.** Pricing savings, badges, stat numbers, small accents. Maximum 10% of any viewport.
3. **White/near-white is the canvas.** Let the content be figure, let the background be ground. Do not fill backgrounds with color for the sake of "visual interest."
4. **Alternate section backgrounds** between `slate-50` (white) and `slate-150` (warm light gray) to create visual rhythm without color noise.
5. **Never pair red and gold directly** as adjacent large blocks -- it reads as fast food branding. Always separate them with neutral space.

### Dark mode palette

```
--dm-background:       #1A1917    (warm near-black)
--dm-surface:          #252320    (cards, elevated elements)
--dm-surface-raised:   #302D29    (modals, dropdowns)
--dm-border:           #3D3A35
--dm-text-primary:     #F0EFED    (slate-100)
--dm-text-secondary:   #9A9389    (slate-400)
--dm-primary:          #E63E50    (primary-500, slightly lighter than 600 for contrast)
--dm-accent:           #FFD34A    (accent-300, brighter gold for dark surfaces)
```

Dark mode keeps the warm undertone. The background is warm charcoal, not blue-black. Red and gold both shift one stop lighter to maintain contrast ratios.

---

## 3. Typography

### Font selection

**Headings: Inter**
```
font-family: 'Inter', system-ui, -apple-system, sans-serif;
```
Inter is the precision instrument of web fonts. Tight, engineered, excellent at every size. Its tabular numbers are perfect for a site that displays calculations and statistics. It reads as modern-technical without being cold. Disponible via Google Fonts or Fontsource.

**Body: Source Sans 3**
```
font-family: 'Source Sans 3', 'Segoe UI', sans-serif;
```
Slightly more humanist than Inter, Source Sans 3 is extremely readable at body sizes and has excellent French language support (proper accent rendering, cedillas). It is warm without being casual. Adobe designed it for long-form reading -- perfect for technical descriptions and founder bios.

Why not Lato/Nunito (current fonts)? Lato is fine but generic -- it is the "I didn't think too hard about fonts" choice. Nunito is rounded and soft, which fights against the precision positioning. Inter + Source Sans 3 give the same readability with more intentional character.

### Type scale

Use a modular scale based on 1rem = 16px, with a ratio of ~1.25 (Major Third):

```
--text-xs:     0.75rem   / 12px    line-height: 1.5   letter-spacing: 0.02em
--text-sm:     0.875rem  / 14px    line-height: 1.5   letter-spacing: 0.01em
--text-base:   1rem      / 16px    line-height: 1.625 letter-spacing: 0
--text-lg:     1.125rem  / 18px    line-height: 1.556 letter-spacing: 0
--text-xl:     1.25rem   / 20px    line-height: 1.5   letter-spacing: -0.01em
--text-2xl:    1.5rem    / 24px    line-height: 1.333 letter-spacing: -0.01em
--text-3xl:    1.875rem  / 30px    line-height: 1.267 letter-spacing: -0.02em
--text-4xl:    2.25rem   / 36px    line-height: 1.222 letter-spacing: -0.02em
--text-5xl:    3rem      / 48px    line-height: 1.125 letter-spacing: -0.025em
--text-6xl:    3.75rem   / 60px    line-height: 1.067 letter-spacing: -0.025em
```

### Weight assignments
```
Inter headings:    600 (semi-bold) for h2-h6, 700 (bold) for h1 and hero
Source Sans body:  400 (regular) for paragraphs, 600 (semi-bold) for emphasis
```

### Rules

1. **Hero title:** `text-5xl` on desktop, `text-3xl` on mobile. Inter 700. Tight tracking.
2. **Section headings (h2):** `text-3xl` on desktop, `text-2xl` on mobile. Inter 600.
3. **Sub-headings (h3):** `text-xl` on desktop. Inter 600.
4. **Body text:** `text-base` everywhere. Source Sans 3 400. Line-height 1.625 (26px) -- generous for readability.
5. **Small/caption text:** `text-sm`. Source Sans 3 400.
6. **Stat numbers:** `text-5xl` or `text-6xl`. Inter 700. Use `font-variant-numeric: tabular-nums` for alignment.
7. **Button text:** `text-sm` (small buttons) or `text-base` (default buttons). Inter 600. All-caps ONLY on very small badges -- never on primary CTAs.
8. **Maximum line length:** 70ch for body text. Use `max-w-prose` or equivalent. This is non-negotiable for readability.

---

## 4. Layout & Spacing

### Page structure

```
Max content width:     1280px  (80rem)
Wide content width:    1440px  (90rem)  -- for hero, full-bleed backgrounds
Narrow content width:  768px   (48rem)  -- for text-heavy pages, legal, blog
Content padding:       1.5rem  (24px) on mobile, 2rem (32px) on tablet, 0 on desktop (centered)
```

### Spacing scale

Use an 8px base unit. Every spacing value is a multiple of 8:

```
--space-1:   0.25rem   /  4px    (tight internal padding)
--space-2:   0.5rem    /  8px    (icon gaps, badge padding)
--space-3:   0.75rem   / 12px    (button internal padding-y)
--space-4:   1rem      / 16px    (card internal padding, form field gaps)
--space-5:   1.25rem   / 20px
--space-6:   1.5rem    / 24px    (section internal gaps)
--space-8:   2rem      / 32px    (card padding on desktop)
--space-10:  2.5rem    / 40px
--space-12:  3rem      / 48px    (small section breaks)
--space-16:  4rem      / 64px    (medium section breaks)
--space-20:  5rem      / 80px    (standard section padding-y on desktop)
--space-24:  6rem      / 96px    (large section padding-y)
--space-32:  8rem      / 128px   (hero vertical padding)
```

### Section rhythm

Sections alternate between two background treatments:
- **White sections** (`slate-50`): standard content
- **Tinted sections** (`slate-150` light mode, `surface` dark mode): visual break

Every section has: `padding-top: space-20` and `padding-bottom: space-20` on desktop. On mobile: `space-12` top and bottom.

### Grid system

Use CSS Grid with a 12-column system:

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;  /* 32px */
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1.5rem;
}
```

Common column layouts:
- **2 equal columns:** `span 6 / span 6` -> mobile: full width stack
- **3 equal columns:** `span 4 / span 4 / span 4` -> tablet: `span 6`, mobile: full
- **Content + sidebar:** `span 8 / span 4` -> mobile: stack, sidebar first on some pages
- **Wide + narrow:** `span 7 / span 5` -> for asymmetric hero layouts

### Responsive breakpoints

```
sm:   640px    (large phones landscape)
md:   768px    (tablets)
lg:   1024px   (small laptops)
xl:   1280px   (standard desktop -- content max-width)
2xl:  1536px   (large screens -- hero/full-bleed elements)
```

Mobile-first. Stack everything by default, add columns at `md` and `lg`.

---

## 5. Homepage -- Section by Section

The homepage has one job: take a radiation protection professional from "I've never heard of Dosimex" to "I should try this" in 60 seconds of scrolling. Every section either builds credibility or nudges toward conversion. Nothing is decorative.

### 5.1 Navigation Bar

Sticky. Always visible. 64px height on desktop, 56px on mobile.

```
+-----------------------------------------------------------------------+
|  [DOSIMEX logo]     Logiciel   Produit   Formation   A propos   |  FR/EN  |  [Essai gratuit]  |
+-----------------------------------------------------------------------+
```

- **Logo:** left-aligned. Red Dosimex wordmark. Links to homepage.
- **Nav items:** 5 items maximum. No dropdowns -- every item goes directly to its page. The audience is technical professionals who do not want to hunt through mega-menus.
  - Logiciel (Software/Tools)
  - Produit (Product/Pricing)
  - Formation (Training)
  - A propos (About)
  - Contact (visible on desktop, moves to hamburger menu on mobile)
- **Language switcher:** Simple "FR | EN" text toggle, right side. Not a dropdown. Not a flag icon (flags represent countries, not languages).
- **Dark mode toggle:** Small icon (sun/moon), next to language switcher. Not prominent -- it is a utility, not a feature.
- **Primary CTA:** "Essai gratuit" button, always visible, right-most element. Red background, white text. This is the only red element in the nav.

**Mobile:** Hamburger menu. Logo centered or left. "Essai gratuit" still visible as a small button. Dark mode toggle and language switcher in the hamburger dropdown.

**Scroll behavior:** On scroll down, the nav slides up and hides. On scroll up, it slides back down. This reclaims vertical space on content-heavy pages but keeps navigation one scroll-gesture away. The transition should be 200ms ease-out.

**Background:** White with a subtle bottom border (`1px solid slate-200`). In dark mode: `dm-surface` with `dm-border`. Never transparent over hero content -- always opaque.

### 5.2 Hero Section

This is the single most important piece of real estate on the entire site. It must answer three questions in under 5 seconds:
1. What is this? (Radiation protection calculation tools)
2. Why should I care? (Validated, fast, affordable)
3. What do I do next? (Try free or see the tools)

**Layout:**

```
+-----------------------------------------------------------------------+
|                                                                       |
|    La radioprotection,                    +-------------------------+ |
|    calculee juste.                        |                         | |
|                                           |   [Product screenshot   | |
|    17 outils de calcul valides MCNP.      |    or short product     | |
|    Gamma, beta, neutron, exposition       |    demo animation]      | |
|    interne. Prise en main immediate.      |                         | |
|                                           +-------------------------+ |
|    [Essai gratuit 14j]  [Voir les outils]                            |
|                                                                       |
|    Dosimex (Excel) + Dosismart (navigateur)   500 EUR/an             |
|                                                                       |
+-----------------------------------------------------------------------+
```

**Left column (7/12):**
- **Title:** `text-5xl`, Inter 700, `slate-950`. One line that speaks to the user's need, not the product's features. "La radioprotection, calculee juste." (or the English equivalent: "Radiation protection, calculated right.") This is aspirational but grounded -- it says "you will get the right answer."
- **Subtitle:** `text-lg`, Source Sans 3 400, `slate-600`. 2-3 lines maximum. Technical specifics that the audience cares about: validation method, particle types, ease of use.
- **CTAs:** Two buttons side by side.
  - Primary: "Essai gratuit 14 jours" -- red background, white text, large (48px height)
  - Secondary: "Voir les outils" -- outline style, `slate-700` border and text, same height
- **Micro-details:** Below the CTAs, a single line in `text-sm`, `slate-500`: "Dosimex (Excel) + Dosismart (navigateur) -- A partir de 500 EUR/an". This is the transparency hook. No competitor shows price at this level. It is a flex disguised as a footnote.

**Right column (5/12):**
- A product screenshot of Dosismart in a browser mockup, or a short (8-10 second) looping animation showing a calculation being run. NOT a stock photo. NOT an abstract illustration. The product is the hero -- show it.
- The screenshot should have a subtle `shadow-xl` and slight `rotate-1` tilt to break the grid and add depth.

**Background:** `slate-50` (white). No gradient, no pattern, no image. Let the content and screenshot do the work. A very subtle dot grid pattern (opacity 0.03) at the top of the section is acceptable for texture.

**Vertical padding:** `space-32` (128px) top and bottom on desktop. `space-16` on mobile.

**Mobile:** Stack vertically. Title and CTAs first, screenshot below (or hidden if it compresses badly). The title drops to `text-3xl`.

### 5.3 Partner / Client Logo Bar

Immediately below the hero. This is the "you're in good company" moment.

```
+-----------------------------------------------------------------------+
|   Ils nous font confiance                                              |
|                                                                       |
|   [Logo]  [Logo]  [Logo]  [Logo]  [Logo]  [Logo]  [Logo]  [Logo]    |
|                                                                       |
+-----------------------------------------------------------------------+
```

- **Heading:** Optional. If used, `text-sm` uppercase, `slate-400`, Inter 600, tracked wide (`letter-spacing: 0.1em`). Something like "ILS NOUS FONT CONFIANCE" or simply omit and let logos speak.
- **Logos:** Displayed in a single horizontal row. Grayscale by default (desaturated, opacity 0.6), full color on hover. This is a standard pattern that prevents logo colors from clashing with the Dosimex palette.
- **Background:** `slate-150` (the first tinted band).
- **Padding:** `space-10` top and bottom. This is a thin section -- do not give it the same weight as content sections.
- **Mobile:** Two rows of 4, or a slow auto-scrolling marquee (no user-controlled carousel -- carousels are a proven anti-pattern).

**Critical:** Do NOT include the informal partner descriptions that currently exist ("A gogo", "Merci", etc.). Logos only, no commentary. The copy review flagged these as tone-inconsistent, and removing them is the right call. If context is needed, a tooltip on hover with a one-line institutional description (e.g., "INSTN -- Institut National des Sciences et Techniques Nucleaires") is fine.

### 5.4 Product Overview Cards

The "what do you actually sell" section. Three cards representing the three pillars: Software, Documentation, Training.

```
+-----------------------------------------------------------------------+
|                                                                       |
|   Ce que vous obtenez                                                 |
|                                                                       |
|   +-------------------+  +-------------------+  +-------------------+ |
|   |  [icon]           |  |  [icon]           |  |  [icon]           | |
|   |                   |  |                   |  |                   | |
|   |  17 outils de     |  |  Documentation    |  |  Formation sur    | |
|   |  calcul           |  |  scientifique     |  |  mesure           | |
|   |                   |  |                   |  |                   | |
|   |  Dosimex (Excel)  |  |  Dossiers de      |  |  Sur site ou a    | |
|   |  et Dosismart     |  |  validation MCNP  |  |  distance.        | |
|   |  (navigateur).    |  |  telechargeables  |  |  Adaptee a vos    | |
|   |  Gamma, beta,     |  |  + videos         |  |  cas concrets.    | |
|   |  neutron...       |  |  explicatives     |  |                   | |
|   |                   |  |  pour chaque      |  |                   | |
|   |  [En savoir plus] |  |  outil.           |  |  [En savoir plus] | |
|   +-------------------+  |                   |  +-------------------+ |
|                           |  [En savoir plus] |                       |
|                           +-------------------+                       |
+-----------------------------------------------------------------------+
```

- **Section title:** "Ce que vous obtenez" (not "Ce que nous proposons" -- the copy review correctly flagged this as generic. Frame it from the user's perspective.)
- **Cards:** Equal-height, 3-column grid at `lg`, stack on mobile. Each card has:
  - A simple Lucide icon at top (e.g., `Calculator`, `FileText`, `GraduationCap`), 32px, `primary-600` color
  - Card title: `text-xl`, Inter 600
  - Card description: `text-base`, Source Sans 3, `slate-600`. 3-4 lines maximum.
  - A text link at bottom: "En savoir plus ->" with arrow, `primary-600`, underline on hover
- **Card styling:** White background in both light and dark mode (cards are surfaces, not transparent). `border-radius: 12px`. `border: 1px solid slate-200`. `padding: space-8`. No shadow by default -- `shadow-sm` on hover with 200ms transition.
- **Background:** `slate-50` (white section).
- **Key copy improvement:** The Documentation card should lead with the differentiator: "Chaque outil accompagne de son dossier de validation MCNP et de sa video explicative." No competitor offers this. Make it the first thing people read on that card.

### 5.5 Stats Counter

The credibility bar. Three (or four) numbers that establish authority at a glance.

```
+-----------------------------------------------------------------------+
|                                                                       |
|      +30               1 000+             17                          |
|      ans d'experience   utilisateurs      outils de calcul            |
|                         en industrie                                  |
|                         et sante                                      |
+-----------------------------------------------------------------------+
```

- **Layout:** 3 numbers in a row, evenly spaced. Centered in the section.
- **Numbers:** `text-6xl` (60px) on desktop, `text-4xl` on mobile. Inter 700. `accent-400` (gold) color. Use `font-variant-numeric: tabular-nums`. Animate count-up on scroll-into-view (Intersection Observer, 1.5s duration, ease-out).
- **Labels:** `text-base`, Source Sans 3, `slate-600`. Directly below each number.
- **Background:** `slate-950` (dark) with `slate-50` text in light mode. This inverts the color scheme and creates a strong visual break. In dark mode: `dm-surface` with `dm-text-primary`.
- **Padding:** `space-16` top and bottom.

**The "+1000 utilisateurs" should specify the audience:** "1 000+ utilisateurs en industrie et sante" (per the copy review). If geographic data exists ("X pays"), add a 4th number.

**Do not use a 4th number unless it is genuinely impressive.** Three strong numbers beat four mediocre ones.

### 5.6 Tool Packs Preview

This is the meat of the site. Show the 17 tools organized in their 3 packs: Operationnel, Pedagogique, Mesure.

```
+-----------------------------------------------------------------------+
|                                                                       |
|   3 packs, 17 outils                                                 |
|   Chaque outil resout un probleme precis de radioprotection.          |
|                                                                       |
|   [Operationnel]  [Pedagogique]  [Mesure]     <-- tab selector        |
|                                                                       |
|   +-------------------------------+  +------------------------------+ |
|   | Pack Operationnel             |  |                              | |
|   |                               |  |  [Video thumbnail or         | |
|   | - GAMMA AMBIANCE              |  |   animation showing          | |
|   | - GAMMA BETON                 |  |   the tool in action]        | |
|   | - GAMMA SOURCE                |  |                              | |
|   | - BETA PEAU                   |  |                              | |
|   | - NEUTRON DOSE                |  |                              | |
|   | - ...                         |  |                              | |
|   |                               |  |                              | |
|   | 10 outils pour les calculs    |  |                              | |
|   | operationnels du quotidien.   |  |                              | |
|   |                               |  |                              | |
|   | [Voir tous les outils]        |  |                              | |
|   +-------------------------------+  +------------------------------+ |
|                                                                       |
+-----------------------------------------------------------------------+
```

- **Section title:** "3 packs, 17 outils" -- direct, factual, specific.
- **Tab interface:** Three horizontal tabs that switch the content. Selected tab has a `primary-600` bottom border (3px). Unselected tabs in `slate-500`. Transition: 150ms ease.
- **Content layout:** Two columns. Left (7/12): pack description + tool list. Right (5/12): representative video thumbnail or product screenshot.
- **Tool names in the list:** Displayed as small chips/tags (`text-sm`, `slate-150` background, `slate-700` text, `border-radius: 6px`, `padding: space-1 space-3`). Clicking a chip goes to the Software detail page scrolled to that tool.
- **Video thumbnail:** Dark overlay with a centered play button icon. On click, expands to a lightbox video player (not inline -- lightbox keeps the page layout stable).
- **Background:** `slate-50` (white section).
- **Mobile:** Tabs become a horizontally scrollable row or a small select dropdown. Content stacks vertically (description, then video).

### 5.7 Dosismart Web App Banner

A focused callout for the newer web-based product. This differentiates from the Excel product and speaks to users who want modern tooling.

```
+-----------------------------------------------------------------------+
|                                                                       |
|    +----------------------------+                                     |
|    |                            |    Dosismart                        |
|    |  [Browser screenshot       |    Vos calculs dans le navigateur   |
|    |   showing Dosismart UI     |                                     |
|    |   with a calculation       |    Pas d'installation. Pas d'Excel. |
|    |   in progress]             |    Memes outils, meme precision,    |
|    |                            |    accessible partout.               |
|    +----------------------------+                                     |
|                                      [Essai gratuit 14 jours]         |
|                                                                       |
+-----------------------------------------------------------------------+
```

- **Layout:** Two columns, reversed from hero (image LEFT, text RIGHT). This visual zigzag creates rhythm.
- **Screenshot:** Real Dosismart UI in a browser window mockup. The screenshot should show an actual calculation result -- numbers, a table, maybe a dose curve. Authenticity matters.
- **Headline:** "Dosismart" in `text-3xl`, Inter 700. Subtitle explaining the web advantage.
- **Copy:** 3-4 short lines. Focus on the benefit (no installation, access anywhere) not the technology.
- **CTA:** "Essai gratuit 14 jours" -- same red button as the hero. Consistent CTA text throughout the site.
- **Background:** `primary-50` (very light red tint) to give this section its own identity without being loud.
- **Padding:** `space-20` top and bottom.

### 5.8 Testimonial

One strong testimonial, displayed prominently. Do not dilute with multiple weak ones. If more testimonials are collected later, use a 2-3 card carousel.

```
+-----------------------------------------------------------------------+
|                                                                       |
|         "J'utilise DOSIMEX, qui me donne totalement                   |
|          satisfaction. Je l'utilise quotidiennement                    |
|          pour les formations du personnel du                          |
|          ministere des armees..."                                     |
|                                                                       |
|         Jean-Lionel Trolet                                            |
|         EAMEA -- Ecole des Applications Militaires                    |
|         de l'Energie Atomique                                         |
|                                                                       |
+-----------------------------------------------------------------------+
```

- **Layout:** Centered, single column. Maximum width `48rem`.
- **Quote text:** `text-2xl` on desktop, `text-xl` on mobile. Source Sans 3 400, italic. `slate-800`. The quote should be edited for length -- extract the 2-3 most impactful sentences. The current full quote is too long.
- **Attribution:** Name in `text-base`, Inter 600. Title/institution in `text-sm`, `slate-500`. Crucially, expand "EAMEA" to its full name, as the copy review recommends. The acronym means nothing to most visitors; the full name is a trust bomb.
- **Visual accent:** A large opening quotation mark (`"`) in `text-6xl`, `primary-200`, positioned above-left of the quote as a decorative element.
- **Background:** `slate-150` (tinted).
- **Optional photo:** If a photo of the quoted person exists, display it as a 64px circle left of the attribution.
- **Padding:** `space-20` top and bottom.

### 5.9 Video Section

Video is a massive differentiator -- almost no competitor uses it on the homepage. Show one hero video that demonstrates the product in action.

```
+-----------------------------------------------------------------------+
|                                                                       |
|   Voyez par vous-meme                                                 |
|                                                                       |
|   +---------------------------------------------------------------+   |
|   |                                                               |   |
|   |                                                               |   |
|   |                  [VIDEO EMBED -- 16:9]                        |   |
|   |                  Product demo or overview                     |   |
|   |                                                               |   |
|   |                                                               |   |
|   +---------------------------------------------------------------+   |
|                                                                       |
|   Plus de 20 videos explicatives disponibles                          |
|   [Voir toutes les videos ->]                                         |
|                                                                       |
+-----------------------------------------------------------------------+
```

- **Video:** Single YouTube embed, `aspect-ratio: 16/9`, rounded corners (`border-radius: 12px`), `shadow-lg`. Use a privacy-enhanced embed (`youtube-nocookie.com`) and lazy-load it.
- **Below the video:** A text link to the full videos page. Keep it understated.
- **Background:** `slate-50` (white section).
- **What video to feature:** The best general overview/demo video. Not a training module, not a niche tool walkthrough. Something a first-time visitor can understand in 2 minutes.

### 5.10 Scientific References / Publications

This section exists for the technical buyer who needs to verify the science. It is not for casual browsers.

```
+-----------------------------------------------------------------------+
|                                                                       |
|   Fondements scientifiques                                            |
|   Nos outils s'appuient sur les references internationales.           |
|                                                                       |
|   [ICRP 116]  [ICRU]  [MCNP]  [NRC Reg Guide]  [...]               |
|                                                                       |
|   Gerald Lopez et Alain Vivier ont publie dans...                     |
|   [Voir les publications ->]                                          |
|                                                                       |
+-----------------------------------------------------------------------+
```

- **Layout:** Simple. A row of reference "badges" (styled like the tool chips from section 5.6) showing the key standards and validation sources. Below, a brief sentence about publications with a link.
- **This section should be BRIEF on the homepage.** The detailed references belong on the About or Software pages. On the homepage, it is a trust signal, not a bibliography.
- **Background:** `slate-150` (tinted).
- **Padding:** `space-12` -- smaller than other sections. This is a credibility footnote, not a feature showcase.

### 5.11 Pricing Teaser / CTA Close

The final conversion section before the footer. This is the "OK, I'm interested, what does it cost?" moment.

```
+-----------------------------------------------------------------------+
|                                                                       |
|   Pret a calculer juste ?                                             |
|                                                                       |
|   A partir de 500 EUR/an. 17 outils. Resultats valides MCNP.         |
|   Essai gratuit 14 jours, sans carte bancaire.                        |
|                                                                       |
|   [Essai gratuit 14 jours]        [Voir les tarifs]                   |
|                                                                       |
+-----------------------------------------------------------------------+
```

- **Headline:** `text-3xl`, Inter 700. A closing question that mirrors the hero headline.
- **Supporting text:** One or two lines. Price, key fact, trial terms. Every word earns its place.
- **CTAs:** Same as hero -- primary red "Essai gratuit 14 jours", secondary outline "Voir les tarifs".
- **Background:** `slate-950` (dark). White text. This is the visual bookend to the stats counter section (both dark-on-light). It creates a sense of finality and urgency.
- **Padding:** `space-24` top and bottom. Let this breathe. It is the climactic moment.

### 5.12 Footer

```
+-----------------------------------------------------------------------+
|                                                                       |
|   [DOSIMEX logo - white]                                              |
|                                                                       |
|   Logiciel        Ressources         Contact          Legal           |
|   Dosimex         Videos             contact@...      CGV             |
|   Dosismart       Manuels            +33 ...          Mentions legales|
|   17 outils       Publications       Adresse          RGPD            |
|                   Livres                                              |
|   Produit         Formation                                           |
|   Tarifs          Programme                                           |
|   Essai gratuit                                                       |
|                                                                       |
|   -------------------------------------------------------------------  |
|   (c) 2026 Dosimex. Tous droits reserves.          [LinkedIn] [YT]   |
|                                                                       |
+-----------------------------------------------------------------------+
```

- **Background:** `slate-950` (same as CTA close section -- they merge seamlessly, creating one continuous dark block at page bottom).
- **Text:** `slate-400` for links, `slate-300` on hover. Logo in white.
- **Structure:** 4 columns on desktop, 2 on tablet, stacked on mobile. Each column has a `text-sm` uppercase heading in `slate-500` and `text-sm` links below.
- **Social links:** LinkedIn and YouTube icons only. No Twitter/X, no Facebook -- Dosimex does not appear to be active there and dead social links are worse than no social links.
- **Bottom bar:** Thin separator (`1px solid slate-800`), copyright, social icons.
- **Padding:** `space-16` top, `space-8` bottom.

---

## 6. Key Page Layouts

### 6.1 Product / Pricing Page (the money page)

This is the conversion engine. The page structure:

1. **Hero:** "Choisissez votre formule" or "Le bon outil, le bon prix." Brief value recap.
2. **Pricing cards** side by side:

```
+-----------------------------+    +-----------------------------+
|  Licence annuelle           |    |  Licence 3 ans         [BEST VALUE badge, gold]
|                             |    |
|       500 EUR HT            |    |       1 000 EUR HT
|       par an                |    |       pour 3 ans
|                             |    |
|  - 17 outils de calcul     |    |  - 17 outils de calcul
|  - Dosimex + Dosismart      |    |  - Dosimex + Dosismart
|  - Mises a jour incluses    |    |  - Mises a jour incluses
|  - Support par email        |    |  - Support par email
|  - Videos + documentation   |    |  - Videos + documentation
|                             |    |
|  [Demander un devis]        |    |  Vous economisez 500 EUR
|                             |    |
+-----------------------------+    |  [Demander un devis]
                                   |
                                   +-----------------------------+
```

  - Cards are equal height. The 3-year card has a `primary-600` top border (4px) and a gold "Meilleure offre" badge.
  - Features are identical between plans (this is fine -- the copy review noted it simplifies the decision).
  - Add a savings callout on the 3-year card: "Vous economisez 500 EUR" in `accent-600`.
  - Below both cards: "Essai gratuit 14 jours, sans carte bancaire." with a link.
  - Price anchoring: Add a subtle line "Soit moins de 42 EUR/mois" under the annual price, per the copy review suggestion.

3. **What's included** section: Expandable list of all 17 tools grouped by pack, each with a one-liner description. This reassures the prospect that 500 EUR/year covers everything.

4. **FAQ accordion:** 6-8 questions. Expand the answers significantly from current versions (the copy review flagged them as too terse). Cover:
   - How does the free trial work? (be specific: what happens after 14 days, is data kept?)
   - What do I need to run Dosimex? (Excel version, OS requirements)
   - What about Dosismart? (browser requirements, offline access?)
   - How is it validated? (MCNP, reference to publications)
   - Can I get an invoice / purchase order?
   - Do you offer multi-user licenses?
   - What support is included?
   - How do updates work?

5. **CTA close:** "Essai gratuit 14 jours" + "Demander un devis" + "Nous contacter".

### 6.2 Software / Tools Page

The product catalog. This is where a radiation protection professional evaluates whether Dosimex covers their specific needs.

1. **Hero:** "17 outils pour chaque scenario de radioprotection." Brief intro.

2. **Pack sections:** Three distinct sections, one per pack (Operationnel, Pedagogique, Mesure). Each pack section contains:
   - Pack title and brief description
   - Grid of tool cards (2-3 columns)
   - Each tool card shows:
     - Tool name (e.g., "GAMMA AMBIANCE")
     - One-sentence purpose
     - An icon or small illustration representing the particle type / use case
     - "Voir la video" link (opens lightbox)
     - "Dossier de validation" download link (PDF icon)

3. **Comparison element:** A summary table or matrix showing which tools cover which particle types / scenarios. This is the kind of density that technical buyers love.

4. **CTA at bottom:** "Essai gratuit 14 jours" + link to pricing.

### 6.3 About Page

The founder story is Dosimex's secret weapon. Gerald and Alain have authentic, credible backgrounds that no startup can fabricate. But the current page is a wall of text. Restructure:

1. **Hero:** "30 ans d'experience terrain." or "Nes du terrain, valides par la science."

2. **Founder cards:** Side by side (2-column at `lg`, stacked on mobile).

```
+---------------------------------------+
|  [Photo placeholder]                  |
|                                       |
|  Gerald Lopez                         |
|  Co-fondateur                         |
|                                       |
|  Marine Nationale > Orano la Hague    |
|  > Dosimex                            |
|                                       |
|  [Expandable bio text]                |
+---------------------------------------+
```

  - Each card has: name, title, a **one-line career trajectory** (institution names separated by arrows -- these ARE the trust signals), and an expandable/collapsible detailed bio.
  - The career trajectory line is the power move. "Marine Nationale > Orano la Hague" communicates more institutional credibility in one glance than three paragraphs of text.
  - Default state: collapsed. Show the trajectory and 2-3 key sentences. "Lire plus" expands the full bio.

3. **Timeline (optional):** A vertical timeline showing key milestones:
   - 1990s: First tools created on the ground
   - 2000s: Dosimex formalized, first validation
   - 2010s: 500+ users, MCNP validation
   - 2020s: Dosismart launch, 1000+ users
   This is a lightweight way to show longevity without text walls.

4. **Publications / References:** List of scientific publications with journal names, DOIs if available.

### 6.4 Contact Page

Simple. This is not the page for selling -- if someone is here, they already want to reach out.

1. **Two columns:**
   - Left (7/12): Contact form (name, email, phone, company, message, submit).
   - Right (5/12): Direct contact info (email, phone, address), office hours, and a small trust sidebar ("Reponse sous 48h", "Plus de 1000 utilisateurs", "Support en francais et anglais").

2. **Form design:** Standard form with clear labels, generous spacing. Phone field with country code selector (already using `react-phone-number-input`). Submit button: primary red, full-width on mobile.

3. **No map.** Unless Dosimex has a physical office that visitors frequent, a Google Map is wasted space.

4. **Post-submission:** Clear success state with a message: "Merci, nous vous repondons sous 48h." and a suggestion to try the free trial in the meantime.

---

## 7. Component Library

### 7.1 Cards

**Standard Card (product cards, tool cards):**
```
background:      white (light) / dm-surface (dark)
border:          1px solid slate-200 (light) / dm-border (dark)
border-radius:   12px
padding:         space-8 (32px)
shadow:          none default, shadow-sm on hover
transition:      box-shadow 200ms ease, transform 200ms ease
hover:           shadow-sm + translateY(-2px)
```

**Highlighted Card (pricing card best-value):**
```
Same as standard, plus:
border-top:      4px solid primary-600
badge:           accent-400 background, slate-950 text, border-radius: 6px,
                 padding: space-1 space-3, text-sm, Inter 600
```

**Reference Card (publications, resources):**
```
background:      slate-100 (light) / dm-surface (dark)
border:          none
border-radius:   8px
padding:         space-4 (16px)
shadow:          none
Minimal styling -- these are small utility cards, not feature showcases.
```

### 7.2 Buttons & CTAs

Three tiers only. Always use the same text for the same action across the entire site.

**Primary Button (conversion actions):**
```
background:      primary-600
color:           white
font:            Inter 600, text-base
padding:         12px 24px (space-3 space-6)
border-radius:   8px
border:          none
height:          48px (large) / 40px (default) / 32px (small)
hover:           primary-700 background
active:          primary-800 background
focus:           2px solid primary-300 offset 2px
transition:      background 150ms ease
cursor:          pointer

Text options:    "Essai gratuit 14 jours" / "Demander un devis"
```

**Secondary Button (navigation, secondary actions):**
```
background:      transparent
color:           slate-700 (light) / slate-200 (dark)
font:            Inter 600, text-base
padding:         12px 24px
border-radius:   8px
border:          1.5px solid slate-300 (light) / dm-border (dark)
height:          48px / 40px / 32px
hover:           slate-100 background (light) / slate-800 (dark)
transition:      background 150ms ease, border-color 150ms ease

Text options:    "Voir les outils" / "Voir les tarifs" / "En savoir plus"
```

**Ghost Button (tertiary, text links with arrow):**
```
background:      transparent
color:           primary-600
font:            Inter 600, text-base
padding:         0
border:          none
hover:           underline, color primary-700
transition:      color 150ms ease
icon:            right-arrow (-->) after text, translateX(4px) on hover

Text options:    "En savoir plus ->" / "Voir toutes les videos ->"
```

**Rule:** Primary buttons appear maximum 2 per viewport. If there are two, one is primary and one is secondary. Never two primary buttons side by side.

### 7.3 Stats / Number Counters

```
number:
  font:          Inter 700, text-6xl (desktop) / text-4xl (mobile)
  color:         accent-400
  font-feature:  tabular-nums
  animation:     count-up on scroll, 1.5s ease-out

label:
  font:          Source Sans 3 400, text-base
  color:         slate-400 (on dark bg) / slate-600 (on light bg)
  margin-top:    space-2
  text-align:    center
```

### 7.4 Testimonial Block

```
container:
  max-width:     48rem
  margin:        0 auto
  text-align:    center
  padding:       space-8

quote:
  font:          Source Sans 3 400 italic, text-2xl (desktop) / text-xl (mobile)
  color:         slate-800 (light) / dm-text-primary (dark)
  line-height:   1.5
  margin-bottom: space-6

decorative-quote:
  content:       open-quote character or SVG
  font-size:     text-6xl
  color:         primary-200
  position:      above-left of quote text

attribution-name:
  font:          Inter 600, text-base
  color:         slate-900 (light) / dm-text-primary (dark)

attribution-role:
  font:          Source Sans 3 400, text-sm
  color:         slate-500 (light) / dm-text-secondary (dark)

avatar (optional):
  width:         64px
  height:        64px
  border-radius: 50%
  border:        2px solid slate-200
  margin-bottom: space-3
```

### 7.5 Video Embed

```
container:
  aspect-ratio:  16 / 9
  border-radius: 12px
  overflow:      hidden
  box-shadow:    shadow-lg
  max-width:     100%

thumbnail-overlay:
  background:    rgba(0, 0, 0, 0.35)
  display:       flex, center, center

play-button:
  width:         72px
  height:        72px
  background:    primary-600
  border-radius: 50%
  icon:          play triangle, white, 24px
  box-shadow:    0 4px 24px rgba(219, 33, 50, 0.3)
  hover:         scale(1.1), shadow increase
  transition:    transform 200ms ease, box-shadow 200ms ease

iframe:
  src:           youtube-nocookie.com
  loading:       lazy
  No autoplay. No related videos at end (rel=0).
```

### 7.6 Partner Logo Display

```
container:
  display:       flex
  align-items:   center
  justify-content: center (or space-between)
  gap:           space-8 (desktop) / space-6 (mobile)
  flex-wrap:     wrap

logo:
  height:        40px (constrained, variable width based on aspect ratio)
  max-width:     120px
  filter:        grayscale(100%) opacity(0.5)
  hover:         grayscale(0%) opacity(1)
  transition:    filter 300ms ease, opacity 300ms ease
  cursor:        default (no link unless the partner has a relevant page)
```

### 7.7 FAQ Accordion

```
container:
  max-width:     48rem
  margin:        0 auto
  border-top:    1px solid slate-200

item:
  border-bottom: 1px solid slate-200
  padding:       space-5 0

question-button:
  display:       flex, space-between, center
  width:         100%
  background:    transparent
  border:        none
  font:          Inter 600, text-lg
  color:         slate-900 (light) / dm-text-primary (dark)
  cursor:        pointer
  text-align:    left

chevron-icon:
  width:         20px
  color:         slate-400
  rotation:      0deg closed, 180deg open
  transition:    transform 200ms ease

answer:
  font:          Source Sans 3 400, text-base
  color:         slate-600 (light) / dm-text-secondary (dark)
  padding-top:   space-3
  line-height:   1.625
  max-height:    0 (closed) -> auto (open), with CSS transition or JS animation
```

### 7.8 Pricing Cards

```
card:
  background:    white (light) / dm-surface (dark)
  border:        1px solid slate-200 (light) / dm-border (dark)
  border-radius: 16px
  padding:       space-10 space-8
  text-align:    center (price area) / left (features list)
  position:      relative (for badge)
  flex:          1 (equal width in row)

best-value badge:
  position:      absolute, top: -14px, right: space-6
  background:    accent-400
  color:         slate-950
  font:          Inter 600, text-sm
  padding:       space-1 space-4
  border-radius: 6px

plan-name:
  font:          Inter 600, text-xl
  color:         slate-900
  margin-bottom: space-2

price:
  font:          Inter 700, text-5xl
  color:         slate-950 (light) / dm-text-primary (dark)

price-suffix:
  font:          Source Sans 3 400, text-lg
  color:         slate-500

price-anchoring:
  font:          Source Sans 3 400, text-sm
  color:         slate-400
  e.g.:          "Soit moins de 42 EUR/mois"

savings:
  font:          Inter 600, text-base
  color:         accent-600
  margin-top:    space-2

features-list:
  list-style:    none
  padding:       0
  margin-top:    space-6
  each item:     flex row, check icon (primary-600, 16px) + text (text-base, slate-700)
  gap:           space-3 between items

cta:
  Full-width primary button at bottom of card
  margin-top:    space-8
```

### 7.9 Form Inputs

```
input / textarea / select:
  background:       white (light) / dm-surface (dark)
  border:           1.5px solid slate-300 (light) / dm-border (dark)
  border-radius:    8px
  padding:          12px 16px (space-3 space-4)
  font:             Source Sans 3 400, text-base
  color:            slate-900 (light) / dm-text-primary (dark)
  width:            100%
  transition:       border-color 150ms ease, box-shadow 150ms ease

  focus:
    border-color:   primary-500
    box-shadow:     0 0 0 3px primary-100 (light) / 0 0 0 3px rgba(230, 62, 80, 0.2) (dark)
    outline:        none

  error:
    border-color:   error (red-600)
    box-shadow:     0 0 0 3px rgba(220, 38, 38, 0.1)

  placeholder:
    color:          slate-400

label:
  font:             Inter 600, text-sm
  color:            slate-700 (light) / dm-text-secondary (dark)
  margin-bottom:    space-2
  display:          block

error-message:
  font:             Source Sans 3 400, text-sm
  color:            error (red-600)
  margin-top:       space-1

help-text:
  font:             Source Sans 3 400, text-sm
  color:            slate-400
  margin-top:       space-1

textarea:
  min-height:       120px
  resize:           vertical
```

---

## 8. Navigation Design

### Desktop (>= 1024px)

```
+-----------------------------------------------------------------------+
| [DOSIMEX]    Logiciel  Produit  Formation  A propos  Contact  | FR|EN  [sun/moon]  [Essai gratuit 14j] |
+-----------------------------------------------------------------------+
```

- **Position:** `position: sticky; top: 0; z-index: 50`.
- **Height:** 64px.
- **Background:** `white` with `border-bottom: 1px solid slate-200`. In dark mode: `dm-surface` with `dm-border`.
- **Logo:** Dosimex wordmark, red, left-aligned. Height ~28px.
- **Nav links:** Inter 500, `text-sm`, `slate-600`. Hover: `slate-950` with a 2px `primary-600` bottom border that animates from center outward (width from 0 to 100%, 200ms ease).
- **Active page:** `slate-950` text with `primary-600` bottom border visible.
- **Right cluster:** Language toggle, dark mode toggle, CTA button. Gap: `space-4`.
- **Language toggle:** "FR" / "EN" text, separated by a pipe. Active language in `slate-950` 600 weight, inactive in `slate-400` 400 weight. Hover on inactive: `slate-600`.
- **Dark mode toggle:** 20px icon (sun = light mode indicator, moon = dark mode indicator). `slate-500`, hover `slate-700`.
- **CTA button:** Primary button, small size (32px height, `text-sm`). Always "Essai gratuit".
- **Scroll behavior:** Nav hides on scroll-down, shows on scroll-up. Transition: `transform 300ms ease`. Implementation: track scroll direction with a 10px threshold to avoid flicker.

### Mobile (<= 1023px)

```
+-----------------------------------------------+
| [DOSIMEX]                    [Essai]  [menu]   |
+-----------------------------------------------+
```

- **Height:** 56px.
- **Logo:** Left.
- **Right cluster:** Small "Essai" CTA button (text only, no "gratuit" -- space is tight) + hamburger icon.
- **Hamburger icon:** Three horizontal lines, 24px, `slate-700`. On open: morphs to X with 200ms transition.
- **Mobile menu:** Full-screen overlay, `slate-50` background (dark: `dm-background`). Nav items stacked vertically, `text-xl`, Inter 500, centered. Language toggle and dark mode at bottom.
- **Animation:** Menu slides in from right, 250ms ease-out. Background page does not scroll while menu is open (`overflow: hidden` on body).

### Number of items: 5 maximum

Five items is the hard limit. More than five and the nav becomes a chore. Current pages:
1. Logiciel (Software)
2. Produit (Product/Pricing)
3. Formation (Training)
4. A propos (About)
5. Contact

Videos, Manuals, Books can be consolidated under Logiciel as sub-pages or reached from the footer. They do not need top-level nav presence.

---

## 9. Imagery & Visual Assets

### What to use

1. **Product screenshots:** Real UI screenshots of Dosimex (Excel) and Dosismart (browser). Show actual calculations with real numbers. Crop tightly. Place in device mockups (browser frames, Excel windows) for context.

2. **Iconography:** Lucide icons, 24px default, stroke-width 2. Use sparingly. Icons should clarify, not decorate. Color: `primary-600` for feature icons, `slate-400` for utility icons (nav, form, etc.).

3. **Simple diagrams:** For explaining how radiation types work or what each tool calculates, clean SVG diagrams (not clipart, not 3D renders) would be extremely valuable. Think: ICRP-style dose diagrams recreated in a clean, modern style with the Dosimex color palette.

4. **Founder photos:** Professional headshots if available. Not corporate-studio-with-gray-backdrop style -- something more natural, with a hint of their working environment. If photos do not exist, skip them entirely. Do not use placeholder silhouettes.

### What to avoid

1. **Stock photos of people in lab coats.** The market research notes that the clinical photo style is the hallmark of large companies (IBA, PTW). Dosimex is not a 10,000-employee corporation. Stock photos would create a false impression.

2. **Abstract tech imagery.** Glowing blue molecules, circuit board patterns, abstract data visualizations -- these are the visual equivalent of saying nothing. Every tech company uses them. They communicate zero information.

3. **AI-generated images.** The audience is scientists. They will notice. It undermines credibility.

4. **Generic illustrations.** Undraw-style flat illustrations (person at laptop, gears turning, etc.) feel like a template website. Dosimex has 30 years of domain expertise -- the visuals should reflect specificity, not generality.

5. **Photographic backgrounds on text sections.** Dark overlay on photo with white text is a design pattern from 2015. It reduces readability and ages fast. Use solid color backgrounds.

### Image optimization

All images served as WebP with fallback to JPEG. Maximum width 1920px for hero images, 800px for inline images. Use `<picture>` with `srcset` for responsive delivery. Astro's image optimization pipeline (Sharp) handles this.

---

## 10. Motion & Interaction

### The principle: purposeful, not performative

This audience opens radiation safety reports, not Dribbble. Every animation must communicate something: state change, spatial relationship, attention direction. Decorative motion is not just unnecessary -- it actively undermines the impression of seriousness.

### Approved animations

**Scroll-reveal (sections entering viewport):**
```css
opacity: 0 -> 1
translateY: 16px -> 0
duration: 400ms
easing: ease-out
trigger: IntersectionObserver, threshold: 0.1
stagger: 100ms between sibling elements (cards in a grid)
```
Subtle. 16px is enough to create a sense of entry without being theatrical. Apply to: cards, stats, testimonials. Do NOT apply to: the hero (it should be visible immediately) or the nav.

**Count-up (stat numbers):**
```
Start: 0
End: target value
Duration: 1500ms
Easing: ease-out (fast start, slow finish)
Trigger: scroll into view (once)
```
Use the `Intl.NumberFormat` for locale-aware number formatting (e.g., "1 000" not "1,000" for French locale).

**Hover states:**
```css
/* Cards */
transform: translateY(-2px)
box-shadow: 0 4px 12px rgba(0,0,0,0.08)
transition: 200ms ease

/* Buttons */
background-color change
transition: 150ms ease

/* Links */
color change + underline appearance
transition: 150ms ease

/* Nav items */
border-bottom width from 0 to 100%
transition: 200ms ease
```

**Tab switching (tool packs):**
```
Content: opacity 0 -> 1, translateX(8px) -> 0
Duration: 200ms ease
Tab indicator: left/width animation to follow active tab, 250ms ease
```

**Mobile menu:**
```
Overlay: opacity 0 -> 1, 200ms ease
Menu panel: translateX(100%) -> translateX(0), 250ms ease-out
Items: staggered fade-in, 50ms apart, starting 100ms after panel opens
```

**FAQ accordion:**
```
Content: max-height 0 -> measured height, 250ms ease
Chevron: rotate 0 -> 180deg, 200ms ease
```

### Forbidden animations

- **Parallax scrolling.** It adds loading weight, causes scroll jank on lower-powered devices, and screams "2016 agency portfolio."
- **Auto-playing carousels.** Users do not interact with them. Use static grids or, at most, a manual slider.
- **Background video.** Heavy, distracting, and sets the wrong tone.
- **Floating/bouncing elements.** Nothing should pulse, bounce, or orbit. This is a calculation tool website, not a game.
- **Page transitions.** Full-page wipes, fades, or slides between routes are disorienting and slow. Let Astro's static HTML do its job -- instant page loads are the best "transition."
- **Typing animations.** Text that types itself character-by-character is a startup cliche.
- **Loading skeletons for static content.** The site is statically generated. There is nothing to load. Skeleton screens would be performative.

---

## 11. Dark Mode

### Is it important?

Yes, more than you might think. Radiation protection professionals often work in controlled environments (reactor facilities, hospital basements, military installations) where screens are the primary light source. Many in this demographic use dark mode system-wide. Supporting it is a sign of technical competence, not just a design trend.

### Implementation

- **Toggle:** Manual toggle in nav (sun/moon icon). Persisted in `localStorage`. On first visit, respect `prefers-color-scheme` OS setting.
- **No auto-switch.** Do not switch based on time of day. Let the user decide.

### What changes

| Element | Light mode | Dark mode |
|---------|------------|-----------|
| Page background | `slate-50` (#F8F8F7) | `dm-background` (#1A1917) |
| Cards/surfaces | white | `dm-surface` (#252320) |
| Primary text | `slate-950` (#22201E) | `dm-text-primary` (#F0EFED) |
| Secondary text | `slate-600` (#6A6259) | `dm-text-secondary` (#9A9389) |
| Borders | `slate-200` (#D9D6D2) | `dm-border` (#3D3A35) |
| Primary red | `primary-600` (#DB2132) | `dm-primary` (#E63E50) -- one step lighter |
| Gold accent | `accent-400` (#FFC03D) | `dm-accent` (#FFD34A) -- one step lighter |
| Dark sections (stats, CTA) | `slate-950` bg | `dm-surface` bg (not black -- that would flatten) |
| Code/mono text | `slate-100` bg | `dm-surface-raised` (#302D29) bg |

### What stays the same

- Logo color (red wordmark, always the same)
- Button styles (red buttons remain red in both modes)
- Image content (do not apply filters to product screenshots)
- Shadow colors (adjust opacity, not hue)
- Interactive states (focus rings, hover colors, active states)

### Transition

```css
html {
  transition: background-color 200ms ease, color 200ms ease;
}

/* Apply transition to key elements, not * (wildcard is too expensive) */
body, .card, .nav, .footer, .section {
  transition: background-color 200ms ease, color 200ms ease, border-color 200ms ease;
}
```

The switch should feel smooth, not jarring. 200ms is fast enough to feel responsive, slow enough to not flash.

---

## 12. Anti-patterns -- What NOT to Do

These are patterns observed in competitor sites that Dosimex should deliberately avoid.

### 1. The Blue Default
Every competitor uses blue. If Dosimex switches to blue, it loses its single strongest visual differentiator. Red and gold are warmer, more memorable, and signal something different: this is not another faceless corporation.

### 2. "Contact Us for Pricing"
IBA, PTW, DOSIsoft, and most others hide pricing behind a sales gate. Dosimex showing 500 EUR/year publicly is an enormous advantage. Do not hide it. Put it on the homepage. Put it in the nav if possible. Make it impossible to miss.

### 3. Mega-menus and Deep Navigation
Large competitors (IBA, PTW) have 50+ pages organized in mega-menus. This makes sense when you sell hardware, software, services, calibration, and training across 15 application domains. Dosimex has one product with two delivery formats. Five nav items. No dropdowns. Simplicity is the feature.

### 4. Generic Taglines
"Solutions for radiation protection" could be on any competitor's homepage. The copy review correctly identified that "17 codes de calcul pour la radioprotection" is descriptive but not aspirational. The tagline should name the benefit, not the inventory. "La radioprotection, calculee juste" is better -- it implies accuracy, which is the core value proposition.

### 5. CTA Chaos
The copy review found 5 different formulations for the free trial CTA. This is a conversion killer. Standardize on exactly one formulation per action:
- Trial: "Essai gratuit 14 jours" (always, everywhere, no variation)
- Quote: "Demander un devis" (always, everywhere)
- Learn more: "En savoir plus" (always, everywhere)

### 6. Walls of Text
The About page bios are excellent content, but they are too long for web scanning. The market research shows that trust signals work best as fragments: institution names, years of experience, specific achievements. Structure founder bios as scannable cards with expandable details, not as essays.

### 7. Partner Descriptions
The informal partner descriptions ("a gogo", "merci", etc.) are charming in conversation but wrong for a B2B website. Partner sections should be logos only, possibly with a hover tooltip showing the institution's full name. Let the logos speak for themselves.

### 8. Carousel Everything
DOSIsoft uses carousels for testimonials. IBA uses carousels for news. Carousels hide content and have near-zero interaction rates. Show 1 strong testimonial statically. Show 3 news items in a grid. The user sees everything without clicking.

### 9. Stock Photography
The market research identified two imagery approaches: clinical photos (expensive, corporate) and minimal/abstract (cheaper, cleaner). Dosimex should go with the second approach -- product screenshots, clean iconography, simple diagrams. Stock photos of people in protective gear would make Dosimex look like it is pretending to be PTW.

### 10. Newsletter Signup Popups
Nobody in radiation protection subscribes to newsletters via popup. If Dosimex wants email collection, offer a gated PDF (a free calculation example, a white paper on shielding methodology) in exchange for an email. Value exchange, not interruption.

### 11. Social Media Icons in the Hero
Social links belong in the footer. Period. They distract from conversion and send traffic away from the site.

### 12. "Powered by WordPress" / Page Builder Artifacts
Many competitor sites (Grove, Voximetry, Rapid) have visible page builder artifacts: inconsistent spacing, section dividers, cookie-cutter layouts. Dosimex's Astro stack avoids this entirely, but the design must also avoid the patterns that make page-builder sites look templated: wavy section dividers, alternating full-width image/text blocks with forced symmetry, and generic icon grids.

---

## Appendix: Quick Reference

A cheat-sheet for developers. Copy-paste these values into your CSS variables / Tailwind config.

### Colors

```css
/* Primary (Red) */
--color-primary-50:  #FEF2F3;
--color-primary-100: #FDE3E5;
--color-primary-200: #FBC9CE;
--color-primary-300: #F8A3AB;
--color-primary-400: #F26E7B;
--color-primary-500: #E63E50;
--color-primary-600: #DB2132;  /* DEFAULT -- brand red */
--color-primary-700: #B71828;
--color-primary-800: #981824;
--color-primary-900: #7F1A24;
--color-primary-950: #45080E;

/* Accent (Gold) */
--color-accent-50:  #FFFBEB;
--color-accent-100: #FFF3C6;
--color-accent-200: #FFE588;
--color-accent-300: #FFD34A;
--color-accent-400: #FFC03D;  /* DEFAULT -- brand gold */
--color-accent-500: #F9A80D;
--color-accent-600: #DD7F02;
--color-accent-700: #B75A06;
--color-accent-800: #94450C;
--color-accent-900: #7A390D;
--color-accent-950: #461C02;

/* Neutral (Warm Slate) */
--color-slate-50:  #F8F8F7;   /* page bg (light) */
--color-slate-100: #F0EFED;
--color-slate-150: #E8E6E3;   /* alt section bg */
--color-slate-200: #D9D6D2;
--color-slate-300: #BCB7B0;
--color-slate-400: #9A9389;
--color-slate-500: #7D756B;
--color-slate-600: #6A6259;
--color-slate-700: #57504A;
--color-slate-800: #4A443F;
--color-slate-900: #403B37;
--color-slate-950: #22201E;   /* text (light), bg (dark) */

/* Dark mode */
--dm-background:     #1A1917;
--dm-surface:        #252320;
--dm-surface-raised: #302D29;
--dm-border:         #3D3A35;
--dm-text-primary:   #F0EFED;
--dm-text-secondary: #9A9389;
--dm-primary:        #E63E50;
--dm-accent:         #FFD34A;

/* Semantic */
--color-success: #16A34A;
--color-warning: #D97706;
--color-error:   #DC2626;
--color-info:    #2563EB;
```

### Typography

```css
/* Fonts */
--font-heading: 'Inter', system-ui, -apple-system, sans-serif;
--font-body:    'Source Sans 3', 'Segoe UI', sans-serif;

/* Scale */
--text-xs:   0.75rem;    /* 12px */
--text-sm:   0.875rem;   /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg:   1.125rem;   /* 18px */
--text-xl:   1.25rem;    /* 20px */
--text-2xl:  1.5rem;     /* 24px */
--text-3xl:  1.875rem;   /* 30px */
--text-4xl:  2.25rem;    /* 36px */
--text-5xl:  3rem;       /* 48px */
--text-6xl:  3.75rem;    /* 60px */

/* Weights */
--font-regular:  400;
--font-medium:   500;
--font-semibold: 600;
--font-bold:     700;
```

### Spacing

```css
--space-1:  0.25rem;   /*  4px */
--space-2:  0.5rem;    /*  8px */
--space-3:  0.75rem;   /* 12px */
--space-4:  1rem;      /* 16px */
--space-5:  1.25rem;   /* 20px */
--space-6:  1.5rem;    /* 24px */
--space-8:  2rem;      /* 32px */
--space-10: 2.5rem;    /* 40px */
--space-12: 3rem;      /* 48px */
--space-16: 4rem;      /* 64px */
--space-20: 5rem;      /* 80px */
--space-24: 6rem;      /* 96px */
--space-32: 8rem;      /* 128px */
```

### Layout

```css
--max-w-content:  80rem;   /* 1280px */
--max-w-wide:     90rem;   /* 1440px */
--max-w-narrow:   48rem;   /* 768px */
--max-w-prose:    70ch;

--breakpoint-sm:  640px;
--breakpoint-md:  768px;
--breakpoint-lg:  1024px;
--breakpoint-xl:  1280px;
--breakpoint-2xl: 1536px;
```

### Component Values

```css
/* Border radius */
--radius-sm:   6px;    /* chips, badges, small elements */
--radius-md:   8px;    /* buttons, inputs */
--radius-lg:   12px;   /* cards, video embeds */
--radius-xl:   16px;   /* pricing cards, modal */
--radius-full: 9999px; /* avatars, pills */

/* Shadows */
--shadow-sm:   0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);
--shadow-md:   0 4px 6px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.04);
--shadow-lg:   0 10px 25px rgba(0, 0, 0, 0.08), 0 4px 10px rgba(0, 0, 0, 0.04);
--shadow-xl:   0 20px 50px rgba(0, 0, 0, 0.1), 0 8px 20px rgba(0, 0, 0, 0.06);

/* Transitions */
--transition-fast:   150ms ease;
--transition-normal: 200ms ease;
--transition-slow:   300ms ease;
--transition-count:  1500ms ease-out;

/* Nav */
--nav-height-desktop: 64px;
--nav-height-mobile:  56px;

/* Button heights */
--btn-sm: 32px;
--btn-md: 40px;
--btn-lg: 48px;
```

### CTA Text (canonical, do not vary)

| Action | French | English |
|--------|--------|---------|
| Free trial | Essai gratuit 14 jours | Free trial 14 days |
| Request quote | Demander un devis | Request a quote |
| Learn more | En savoir plus | Learn more |
| View tools | Voir les outils | View the tools |
| View pricing | Voir les tarifs | View pricing |
| Contact | Nous contacter | Contact us |

### Section Background Pattern

```
Hero:           slate-50  (white)
Partners:       slate-150 (tinted)
Products:       slate-50  (white)
Stats:          slate-950 (dark)
Tool Packs:     slate-50  (white)
Dosismart:      primary-50 (light red tint)
Testimonial:    slate-150 (tinted)
Video:          slate-50  (white)
References:     slate-150 (tinted)
CTA Close:      slate-950 (dark)
Footer:         slate-950 (dark, merges with CTA)
```

---

*This document is a creative brief, not a specification. Adjust values during implementation where the eye demands it. The spirit matters more than the letter -- but start with these numbers and deviate with intention, not laziness.*
