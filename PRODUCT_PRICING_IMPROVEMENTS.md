# Product Pricing & Messaging Improvements

## Current Analysis

### Product Clarity Assessment

After reviewing the Product page and related content, here's my assessment:

**Is it clear that Dosimex sells a pack of Excel codes for radiation protection?**

**Partially clear, but could be improved.** Here's why:

#### What's Working ✅
1. The Software page clearly mentions "17 utilitaires" (17 utilities/tools)
2. Prerequisites section mentions "Les codes sont écrits en VBA sous Excel" (codes written in VBA in Excel)
3. The pack structure is well-described (operational, educational, measurement packs)

#### What Needs Improvement ⚠️
1. **Excel nature not prominent**: The fact these are Excel-based tools is buried in the prerequisites section
2. **"Pack" concept unclear early**: Visitors might not immediately understand they're buying a comprehensive toolkit
3. **Digital delivery not emphasized**: Should highlight this is a digital product delivered by email
4. **Professional nature understated**: These are professional-grade calculation tools, not simple templates

## Pricing Implementation Recommendations

### 1. Add Pricing Section to Product Page

**Location**: After the prerequisites section, before the contact form

**Content to add**:
```
### Tarification

**Pack DOSIMEX 3.2 - Licence mono-poste**
- Prix: 500€ HT/an
- Licence annuelle avec mises à jour incluses
- Support technique inclus
- Installation immédiate après achat

**Tarifs dégressifs disponibles**
Pour l'achat de plusieurs licences, nous proposons des tarifs préférentiels:
- 1-5 licences: Demander un devis
- 6+ licences: Tarifs entreprise sur mesure

**Comment commander?**
Demandez votre devis personnalisé via le formulaire ci-dessous.
Nous vous répondrons dans les plus brefs délais avec votre devis et les modalités de paiement.
```

### 2. Update Product Description for Clarity

**Current opening** is too generic. Suggest updating to:

```
**DOSIMEX 3.2** - Pack professionnel de 17 outils Excel pour la radioprotection

Solution complète de calculs en radioprotection, DOSIMEX regroupe 17 codes
professionnels développés en VBA/Excel, prêts à l'emploi:
- 6 codes opérationnels (calculs de dose, zonage, protection)
- 6 modules pédagogiques interactifs
- 5 utilitaires de mesure et analyse

Livraison numérique immédiate • Licence mono-poste • Support inclus
```

### 3. Create Clear Value Proposition

Add a benefits section highlighting:
- **Gain de temps**: Calculs automatisés vs calculs manuels
- **Conformité**: Respecte les normes (NF C15-160, arrêté du 16/11/23)
- **Validé**: Dossiers de validation fournis pour chaque code
- **Formation**: Support et formations disponibles

## Text Messaging Improvements

### Homepage Hero Section
**Current**: "Des outils de calculs radioprotection pour tous"
**Suggested**: "DOSIMEX - La suite Excel professionnelle pour vos calculs en radioprotection"

### Product Page Title
**Current**: "Fiche technique du produit"
**Suggested**: "Pack DOSIMEX 3.2 - 17 outils Excel pour la radioprotection"

### Software Page Opening
**Current**: Good but could emphasize Excel nature
**Add**: "Tous nos outils fonctionnent dans Excel"

## Additional Recommendations

### 1. Add Visual Elements
- Screenshot montage showing Excel interfaces
- Infographic: "17 outils = 1 solution complète"

### 3. FAQ Section
Common questions to address:
- "Pourquoi Excel?" → Familiarité, pas de logiciel supplémentaire, intégration facile
- "Quelle version d'Excel?" → Excel 2003 à 2024
- "Support Mac?" → Via machine virtuelle
- "Mises à jour?" → Incluses dans la licence annuelle

### 4. Call-to-Action Improvements
Current CTAs are passive. Suggest:
- "Des questions?" → "Parlons de vos besoins en radioprotection"

## Implementation Priority

1. **High Priority** (Do immediately):
   - Add pricing information (500€/year)
   - Update Product page title and description
   - Add "Request quote" emphasis

2. **Medium Priority** (Next iteration):
   - Add volume pricing information
   - Create FAQ section
   - Improve value proposition messaging

3. **Low Priority** (Future enhancement):
   - Visual improvements

## Key Message to Emphasize

**DOSIMEX is a professional pack of 17 Excel-based radiation protection calculation tools, delivered digitally for 500€/year per license, with volume discounts available.**

This should be crystal clear within the first 10 seconds of visiting the site.

---

## TODO for Implementation

### Tasks for Next Session

#### 1. Update Language Files (High Priority)
- [ ] Update `src/lang/fr.ts`:
  - [ ] Change Product.title to "Pack DOSIMEX 3.2 - 17 outils Excel pour la radioprotection"
  - [ ] Update Product.descrip to emphasize Excel nature upfront
  - [ ] Add new pricing section fields (price, volumePricing, orderProcess)
  - [ ] Update Home.header.title to "DOSIMEX - La suite Excel professionnelle pour vos calculs en radioprotection"
  - [ ] Add FAQ section content

- [ ] Update `src/lang/en.ts`:
  - [ ] Apply same changes as French version
  - [ ] Ensure pricing is clearly stated as "€500/year"

#### 2. Update Product Page Component
- [ ] Add pricing section after prerequisites
- [ ] Style pricing information prominently
- [ ] Add "Demander un devis" button with emphasis which focus on the contact form
- [ ] Consider adding pricing badge/highlight

#### 3. Update Homepage
- [ ] Change main tagline to emphasize Excel suite

#### 4. Update Software Page
- [ ] Add subtitle emphasizing Excel integration
- [ ] Add benefit: "Fonctionne dans votre environnement Excel habituel"

#### 5. Create FAQ Component (Medium Priority)
- [ ] Create new FAQ component
- [ ] Add to Product page
- [ ] Include key questions about Excel, pricing, licenses
- [ ] Add tests for it

#### 6. Testing & Validation
- [ ] Run all tests after changes
- [ ] Verify TypeScript types are updated
- [ ] Check both French and English versions, no plain text allowed, always use translations in locales
- [ ] Ensure mobile responsiveness for new sections
- [ ] Run lint, check-types and build to verify there are no errors or warning

### Notes for Implementation
- Keep all existing functionality intact
- Ensure new text fields are added to the language interface
- Maintain consistent styling with existing design
- Price should be prominent but not aggressive
- "Demander un devis" should be the primary CTA