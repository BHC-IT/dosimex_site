---
name: market-research
description: Research the dosimetry market, competitors, and positioning for Dosimex/DosiSmart products.
argument-hint: "<topic or question>"
user-invocable: true
---

# Market Research

Conduct market research related to Dosimex, DosiSmart, and the radiation dosimetry industry. Use `$ARGUMENTS` as the research focus. If empty, ask the user what they want to research.

## Context

**Dosimex** develops radiation dosimetry software. Their main product **DosiSmart** is used for calculating radiation doses in medical, industrial, and nuclear contexts. The website is at dosimex.fr. The market includes radiation protection, health physics, nuclear safety, and medical physics.

## Process

1. **Clarify scope**: Parse `$ARGUMENTS` to determine the research angle:
   - **Competitors**: Other dosimetry software vendors and their offerings
   - **Market size**: Dosimetry/radiation protection market data and trends
   - **Positioning**: How DosiSmart compares to alternatives
   - **Regulations**: Relevant standards (ICRP, ICRU, NRC, ASN, IAEA)
   - **Customers**: Target segments (hospitals, nuclear plants, research labs, industrial radiography)
   - **Trends**: Emerging tech, AI in dosimetry, real-time monitoring, cloud-based solutions
   - If unclear, ask the user which angle to focus on.

2. **Web research**: Use WebSearch to gather current information. Search for:
   - Direct queries related to `$ARGUMENTS`
   - Competitor products and pricing when relevant
   - Industry reports and market data
   - Regulatory changes that affect the market

   Run multiple searches in parallel to cover different angles.

3. **Cross-reference with the site**: Use Read/Grep to check the current dosimex-site codebase for:
   - How DosiSmart is currently positioned (`src/lang/fr.ts`, `src/lang/en.ts`)
   - Current product descriptions and claims
   - Existing competitor mentions or comparison pages

4. **Check memory**: Read `.claude/memory/` for any past market research or business context that's been captured.

5. **Synthesize findings**: Present a structured research report:

### Research Report: [Topic]

**Key Findings**
- [Bullet points of the most important discoveries]

**Market Landscape**
- [Current state of the market relevant to the query]

**Competitive Analysis** (if applicable)
- [How competitors compare on relevant dimensions]

**Opportunities**
- [Gaps, underserved segments, or positioning advantages]

**Risks & Threats**
- [Challenges, regulatory headwinds, competitive threats]

**Recommendations**
- [Actionable next steps for Dosimex]

**Sources**
- [List all URLs and references used]

6. **Offer next steps**:
   - `/remember <key insight>` — to save important findings for future reference
   - `/brainstorm <feature idea>` — if research suggests a product opportunity
   - `/create-issue <title>` — if research reveals something actionable for the site

## Research Tips

- Dosimetry is niche — broaden searches when specific queries return little (e.g., "radiation protection software" instead of just "dosimetry software")
- Key competitors to be aware of: MCNP, GEANT4, FLUKA (Monte Carlo codes), Microshield, RadPro, PCXMC, dosimetry service providers (Mirion, Landauer, Nagase)
- Relevant regulatory bodies: ASN (France), NRC (US), IAEA, ICRP, ICRU, EURATOM
- The market spans medical (radiology, radiotherapy, nuclear medicine), industrial (NDT, gauging), nuclear (power plants, waste), and research sectors

## Rules

- ALWAYS cite sources with URLs — never present unsourced claims as facts
- ALWAYS note when data is estimated, outdated, or from a single source
- Be honest about gaps — say "I couldn't find reliable data on X" rather than speculating
- Distinguish between DosiSmart-specific findings and general market observations
- Keep the report actionable — every section should have a "so what" for Dosimex
