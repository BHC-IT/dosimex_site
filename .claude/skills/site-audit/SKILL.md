---
name: site-audit
description: Audit the website content as a product/marketing expert — identify messaging gaps, conversion issues, and positioning weaknesses.
argument-hint: "<page or focus area>"
user-invocable: true
---

# Site Audit — Product & Marketing Critique

Analyze the Dosimex website content through the lens of a senior product marketer. Evaluate messaging, positioning, conversion design, and content strategy. Be brutally honest — the goal is to find what's weak, missing, or confusing so it can be fixed.

## Context

**Dosimex** sells **DosiSmart**, a radiation dosimetry calculation software. The website targets technical buyers (radiation protection officers, health physicists, medical physicists) and organizational decision-makers (lab directors, safety managers, procurement). It's bilingual (French/English).

## Process

### 1. Determine scope

Parse `$ARGUMENTS`:
- If a **specific page** is named (e.g., "home", "product", "software", "about", "contact", "training", "books", "manuals", "videos"), audit that page deeply.
- If a **focus area** is named (e.g., "CTA", "value proposition", "trust signals", "SEO"), audit across all pages for that dimension.
- If **empty**, run a full-site audit covering all pages.

### 2. Read the actual website content

Read the translation files to understand what the site actually says:

- `src/lang/fr.ts` — French content (primary market)
- `src/lang/en.ts` — English content (international market)
- `src/lang/interface.ts` — Content structure and page sections

Then read the page components to understand layout, CTAs, and user flow:
- `src/pages/index.tsx` (Home)
- `src/pages/Product.tsx`
- `src/pages/Software.tsx`
- `src/pages/About.tsx`
- `src/pages/Contact.tsx`
- `src/pages/Training.tsx`
- `src/pages/Books.tsx`
- `src/pages/Manuals.tsx`
- `src/pages/Videos.tsx`

Also read key components:
- `src/Components/Navbar.tsx` — Navigation structure and labels
- `src/Components/Footer.tsx` — Footer content and links
- `src/Components/HeroBannerCarousel.tsx` — First impression
- `src/Components/Button.tsx` — CTA design
- `src/Components/ContactForm.tsx` — Lead capture

Use Glob and Read in parallel to gather all relevant files efficiently.

### 3. Evaluate each page against marketing criteria

For each page in scope, assess:

#### A. Value Proposition Clarity
- Can a visitor understand what DosiSmart does within 5 seconds?
- Is the benefit stated in terms of the customer's problem, not just features?
- Is there a clear "so what?" — why should they care?

#### B. Messaging Quality
- Is the language concrete or vague/generic?
- Are there specific numbers, proof points, or differentiators?
- Does the copy speak to the buyer's pain or just describe the product?
- Is the tone appropriate for the audience (technical professionals)?

#### C. Call-to-Action (CTA) Strategy
- Is there a clear next step on every page?
- Are CTAs specific ("Request a demo", "Download trial") or weak ("Contact us", "Learn more")?
- Is there a logical progression: awareness -> interest -> action?
- Is the contact form asking for the right amount of information?

#### D. Trust & Credibility Signals
- Are there customer logos, testimonials, case studies, or usage stats?
- Are certifications, regulatory compliance, or industry standards mentioned?
- Is the team/company credibility established?
- Are there social proof elements?

#### E. Competitive Differentiation
- Is it clear why DosiSmart over alternatives (Microshield, MCNP, spreadsheets)?
- Are unique advantages named and substantiated?
- Is there a comparison or "why us" section?

#### F. Content Completeness
- Are there obvious missing pages (pricing, FAQ, case studies, documentation)?
- Is each page pulling its weight or is it filler?
- Is the content deep enough for technical buyers doing due diligence?

#### G. Conversion Path
- What's the user journey from landing to conversion?
- Are there friction points or dead ends?
- Is lead capture happening at the right moments?

#### H. Bilingual Consistency
- Is the English version a proper localization or a literal translation?
- Does the English version adapt messaging for international markets?
- Are there content gaps between languages?

### 4. Optional: Market context

If the audit reveals positioning questions (e.g., unclear differentiation, missing competitor comparison), invoke `/market-research <specific question>` to get competitive context. Only do this when the audit findings warrant it — don't research for the sake of it.

### 5. Produce the audit report

Structure the output as:

---

## Site Audit Report

### Executive Summary
[2-3 sentences: the single biggest problem and overall grade]

**Overall Score: X/10** — [one-line justification]

### Page-by-Page Analysis

#### [Page Name]
**Score: X/10**

| Dimension | Rating | Issue |
|-----------|--------|-------|
| Value Prop | :red_circle: / :yellow_circle: / :green_circle: | [Brief finding] |
| Messaging | :red_circle: / :yellow_circle: / :green_circle: | [Brief finding] |
| CTA | :red_circle: / :yellow_circle: / :green_circle: | [Brief finding] |
| Trust | :red_circle: / :yellow_circle: / :green_circle: | [Brief finding] |
| Differentiation | :red_circle: / :yellow_circle: / :green_circle: | [Brief finding] |

**Biggest problem**: [What's the #1 thing hurting this page]
**Quick win**: [Smallest change, biggest impact]
**Deep fix**: [What this page really needs]

[Repeat for each page in scope]

### Cross-Site Issues
- [Problems that appear across multiple pages]

### Missing Content
- [Pages or sections that should exist but don't]

### Priority Actions (ranked)

| Priority | Action | Impact | Effort |
|----------|--------|--------|--------|
| 1 | [Specific action] | High/Med/Low | High/Med/Low |
| 2 | ... | ... | ... |
| ... | ... | ... | ... |

### What's Working Well
- [Don't just criticize — acknowledge strengths]

---

### 6. Suggest next steps

Based on findings:
- `/brainstorm <improvement idea>` — for the highest-impact content change
- `/create-issue <title>` — for specific actionable fixes
- `/market-research <question>` — if competitive positioning needs investigation
- `/blueprint <content overhaul plan>` — if a major rewrite is warranted

## Evaluation Lenses

Apply these personas when reading the site:

1. **The busy RPO** (Radiation Protection Officer): "I have 5 minutes. Does this solve my dose calculation problem? Can I trust it? How do I try it?"
2. **The procurement manager**: "What does it cost? Is it compliant? Who else uses it? What's the support model?"
3. **The technical evaluator**: "What's the calculation methodology? What standards does it follow? Can I validate the results?"
4. **The international buyer**: "Is this a real company? Do they support English? Can I get training remotely?"

## Tone

- Be a **tough but fair critic** — like a CMO reviewing a team's work
- Be specific: "The hero says 'innovative solution' which means nothing" not "messaging could be improved"
- Quantify when possible: "The product page has 0 customer quotes and 0 specific metrics"
- Propose concrete alternatives, not just problems: "Instead of 'contact us', try 'Get a 15-minute demo'"
- Acknowledge good work when you see it — credibility comes from balanced feedback

## Rules

- ALWAYS read the actual content before judging — never critique based on assumptions
- ALWAYS provide specific examples from the content, quoting actual text
- ALWAYS suggest concrete fixes, not just problems
- NEVER soften criticism to be polite — the user wants honest feedback
- NEVER make up content that isn't on the site — only critique what exists
- NEVER skip the English version analysis — international market matters
- Rate with a consistent scale: red (needs major work), yellow (functional but weak), green (solid)
- Keep the report scannable — tables and bullet points over prose
