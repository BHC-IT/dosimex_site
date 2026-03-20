# Dosimetry & Nuclear Market — Website Design Patterns

Research conducted 2026-03-20. Analyzed 8 competitor/industry websites to identify common design patterns, trust mechanisms, and UX conventions in the dosimetry and nuclear radiation protection market.

---

## Companies Analyzed

| Company | URL | Segment | Size |
|---------|-----|---------|------|
| DOSIsoft | dosisoft.com | Medical dosimetry software | Mid (600+ customers) |
| IBA Dosimetry | iba-dosimetry.com | QA hardware + software | Large (10,000+ customers) |
| PTW | ptwdosimetry.com | Dosimetry hardware + calibration | Large (100+ years) |
| Grove Software (MicroShield) | radiationsoftware.com | Shielding calculation software | Small/niche |
| Rapid Dosimetry | rapiddosimetry.com | SaaS dosimetry (RPT) | Startup |
| Dosimetrics | dosimetrics.de | Personnel dosimetry (BeOSL) | Mid (Mirion subsidiary) |
| Voximetry | voximetry.com | Monte Carlo dosimetry software | Startup |
| GEX Corporation | gexcorp.com | Industrial dosimetry | Mid |

---

## Common Design Patterns

### 1. Hero Section

Almost every site leads with a **full-width hero** containing:
- A bold, short tagline (1 line) + descriptive subtitle (1-2 lines)
- 1-2 CTAs (primary: "Book a Demo" / "Contact Sales"; secondary: "Learn More" / "Our Services")
- Background: either a professional photo, product screenshot, or abstract/gradient

**Examples of taglines:**
- "Dosimetry Made Simple" (Rapid Dosimetry)
- "Dosimetry Solutions for Radiation Medicine" (PTW)
- "Fighting Cancer. Making it Personal." (Voximetry)
- "Gamma | E-beam | X-ray — Dosimetry for Industrial Radiation Processing" (GEX)

**Takeaway:** The market favors **clarity over cleverness**. Taglines state exactly what the product does. No abstract marketing speak.

### 2. Navigation

Two distinct patterns emerge:

**Large companies (IBA, PTW, Mirion):** Complex mega-menus with deep product hierarchies, organized by application domain (Radiation Therapy, Nuclear Medicine, etc.) or by product type. Often includes utility links (Login, Support, Country selector).

**Small/mid companies (DOSIsoft, Voximetry, Rapid, Grove):** Simple horizontal nav with 4-6 items. Dropdowns are shallow (1 level). Focus on: Products, About, Services/Support, Contact.

**Common elements across all:**
- Logo left-aligned
- Sticky/fixed header
- CTA button in the nav (usually "Contact" or "Book a Demo")
- Language/country selector when multilingual

### 3. Color Palettes

The market **overwhelmingly uses blue-dominant or neutral palettes**:

| Company | Primary | Accent | Background |
|---------|---------|--------|------------|
| DOSIsoft | Dark navy (#222) | — | White/light gray |
| IBA | Neutral grays | Blue | White |
| PTW | Dark navy | — | White |
| Grove | Dark gray (#656870) | Orange (#f18937) | Light gray (#f1f4f7) |
| Rapid | Black (#000) | Dark gray (#424242) | White |
| Dosimetrics | Blue (hsl 201) | — | White |
| Voximetry | Navy blue (#3654C6) | Orange (#E18724) | White |
| GEX | Blue (#4b81e8) | — | Light backgrounds |

**Pattern:** Blue = trust/science/authority. Orange/warm accent = occasional CTA highlight. Very few companies use red or bold colors as primary. The overall feel is **conservative, clinical, and professional**.

**Contrast with Dosimex:** Dosimex uses red (#DB2132) as primary and gold/amber (#FFC03D) as accent — a significantly warmer, more distinctive palette that stands out in this market.

### 4. Typography

- **Sans-serif universally** (Open Sans is the most common specific choice)
- Body text: 14-16px, generous line-height (~1.5)
- Headings: Bold weights, scaled 20-42px
- No serif fonts observed on any site
- Clean, clinical readability is prioritized over personality

### 5. Homepage Section Structure

Most sites follow a remarkably similar section flow:

1. **Hero** (tagline + CTA)
2. **Product/Solution cards** (grid of 3-6 cards with icons/images)
3. **Stats/Facts counter** (years of experience, customers, countries)
4. **News/Updates** (3-4 recent article cards)
5. **Testimonials or partner logos** (social proof carousel)
6. **CTA banner** (demo request / contact)
7. **Footer** (links, contact info, social, legal)

**Notably absent from most sites:**
- Pricing information (everything is "contact us")
- Video content on homepage
- Interactive demos or product screenshots
- Comparison tables

### 6. Trust Signals

This is where the market invests most heavily. Common trust mechanisms:

**Quantified metrics (appears on ~75% of sites):**
- Number of customers/installations
- Years of experience
- Countries served
- Measurements per year

**Certifications & standards:**
- ISO 17025, NVLAP accreditation
- Compliance with ICRP, ICRU, NRC standards
- EcoVadis sustainability ratings

**Institutional partnerships:**
- University logos (often research partners)
- Hospital/clinic names
- Professional society affiliations (ESTRO, EFOMP)

**Testimonials:**
- Always attributed (name, title, institution)
- Usually medical physicists or radiation safety officers
- Quote format with photo

### 7. Imagery Style

Two distinct approaches:

**Clinical/professional (IBA, PTW, DOSIsoft):** Photos of equipment in hospital settings, people in lab coats, medical imaging screens. High production value.

**Minimal/abstract (Voximetry, Rapid, Dosimetrics):** Product screenshots, simple illustrations, iconography. Lower production cost but clean execution.

**Nobody uses:** Stock photos of generic business people, abstract tech imagery, or AI-generated visuals. The market values **authenticity and domain specificity**.

### 8. CTA Strategy

| Pattern | Frequency | Companies |
|---------|-----------|-----------|
| "Book a Demo" / "Schedule a Demo" | Most common | DOSIsoft, Rapid |
| "Contact Sales" / "Contact Us" | Very common | GEX, IBA, PTW |
| "Learn More" (per-product) | Universal | All |
| "Buy Now" | Rare | Grove only |
| Free trial / signup | Very rare | Rapid (free account) |

**Takeaway:** The market is almost entirely sales-driven, not self-serve. Demo requests and contact forms dominate. Only Grove (small, niche) offers direct purchase. Rapid is the only one offering free account creation.

### 9. Mobile & Performance

- All sites are responsive, but **mobile experience is clearly secondary** — these are B2B sites where buyers browse on desktop
- Page builders (Elementor) are common among smaller companies
- Larger companies have custom-built sites
- Analytics: mix of Matomo (DOSIsoft), Hotjar (Rapid), and Google Analytics
- Cookie consent banners on all EU-based sites

---

## Market Positioning Tiers (by website quality)

### Tier 1 — Enterprise polish
**IBA, PTW, Mirion** — Large companies with dedicated marketing teams. Sophisticated navigation, consistent brand systems, deep content libraries, multi-language. These sites look like they cost $50k-200k+.

### Tier 2 — Professional but simpler
**DOSIsoft, GEX, Dosimetrics** — Clean, professional sites with clear messaging. Likely built by small agencies or in-house with a CMS. Well-organized but not as polished as Tier 1. ~$10k-50k range.

### Tier 3 — Functional startup/niche
**Voximetry, Rapid Dosimetry, Grove** — Elementor/page-builder sites or dated custom builds. Functional but clearly budget-constrained. Message-forward but visually modest. ~$2k-15k range.

---

## Opportunities for Dosimex

Based on what the market does (and doesn't do):

1. **Stand out with color:** Dosimex's red/gold palette is genuinely distinctive. Every competitor uses blue/gray/navy. This is an advantage — lean into it.

2. **Show the product:** Almost nobody shows their actual software UI on the homepage. Screenshots, interactive demos, or short product videos would immediately differentiate Dosimex.

3. **Be specific about value:** Most competitor taglines are generic ("Solutions for radiation medicine"). A tagline that names the specific problem solved ("Calculate shielding thickness in minutes, not hours") would cut through.

4. **Offer self-serve paths:** The market is stuck in "contact us for everything." Even a simple pricing page, downloadable trial, or online calculator would stand out.

5. **Video content:** Almost no competitor uses video on their homepage. A 60-second product demo video would be highly differentiating.

6. **Modern tech stack:** Most competitors use WordPress/Elementor or dated custom builds. Dosimex's Astro/React stack already provides a performance and UX advantage.

---

## Sources

- [DOSIsoft](https://www.dosisoft.com/)
- [IBA Dosimetry](https://www.iba-dosimetry.com/)
- [PTW](https://www.ptwdosimetry.com/en/)
- [Grove Software / MicroShield](https://radiationsoftware.com/)
- [Rapid Dosimetry](https://rapiddosimetry.com/)
- [Dosimetrics](https://www.dosimetrics.de/)
- [Voximetry](https://voximetry.com/)
- [GEX Corporation](https://www.gexcorp.com/)
- [Mirion Technologies](https://www.mirion.com/) (blocked, data from search results)
