# Dosimex Codebase Correction Plan

## Overall Assessment

**Grade: C+ (Needs Significant Improvement)**

The Dosimex website has a solid architectural foundation with good Next.js structure and decent component organization. However, it suffers from critical technical debt that impacts security, maintainability, and performance.

**Key Strengths:**
- Well-organized folder structure
- Good test setup with Vitest
- Functional i18n implementation
- Working mobile detection system

**Critical Weaknesses:**
- **SECURITY VULNERABILITY**: Hardcoded API keys in source code
- **MAINTENANCE NIGHTMARE**: Four different styling systems used simultaneously
- **TYPE SAFETY COMPROMISED**: Extensive use of `any` types
- **DEPRECATED DEPENDENCIES**: Using unmaintained libraries (Radium)
- **ACCESSIBILITY VIOLATIONS**: Missing ARIA labels, poor keyboard navigation

**Immediate Risk Level: HIGH** - The exposed API keys represent a critical security vulnerability that must be addressed immediately.

---

## Step-by-Step Correction Plan

This plan is organized by priority and confidence level. Each task is designed to be completed independently and safely.

### Phase 1: Critical Security & Safety Fixes (Immediate - 1-2 days)

#### Task 1.1: Secure API Keys
**Priority: CRITICAL | Confidence: HIGH**
- [x] Create `.env.local` file for environment variables
- [x] Move EmailJS credentials to environment variables:
  - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
  - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` 
  - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- [x] Update ContactForm.tsx to use environment variables
- [x] Add `.env.local` to `.gitignore`
- [x] Verify no secrets are committed to git history

#### Task 1.2: Add Error Boundaries
**Priority: HIGH | Confidence: HIGH**
- [x] Create `ErrorBoundary` component
- [x] Wrap main app in error boundary
- [x] Add error logging (console for now)
- [x] Test error boundary with intentional errors

#### Task 1.3: Fix Critical TypeScript Issues
**Priority: HIGH | Confidence: HIGH**
- [x] Fix `any` types in SideBar.tsx interface
- [x] Fix `any` types in HeroBannerCarousel.tsx
- [x] Add proper types for withText HOC
- [x] Run type check to ensure no new errors

### Phase 2: Component Architecture Improvements (3-5 days)

#### Task 2.1: Refactor SideBar Component
**Priority: HIGH | Confidence: HIGH**
- [x] Convert React.createElement pattern to JSX
- [x] Add proper TypeScript interfaces
- [x] Improve component readability
- [x] Ensure all functionality still works

#### Task 2.2: Improve Input Component
**Priority: MEDIUM | Confidence: HIGH**
- [x] Remove eslint-disable comment for useEffect dependencies
- [x] Properly handle controlled/uncontrolled state
- [x] Add better prop validation
- [x] Ensure all tests still pass

#### Task 2.3: Break Down ContactForm Component
**Priority: MEDIUM | Confidence: HIGH**
- [x] Extract validation logic into custom hook
- [x] Create separate components for form sections
- [x] Maintain existing functionality
- [x] Update tests accordingly

#### Task 2.4: Replace HOCs with Custom Hooks
**Priority: HIGH | Confidence: HIGH**
- [x] Convert components using `withText` HOC to use `useText` hook directly
- [x] Convert components using `withIsMobile` HOC to use `useIsMobile` hook directly
- [x] Remove deprecated HOC files (`withText.tsx`, `withIsMobile.tsx`)
- [x] Update all component exports and imports accordingly
- [x] Ensure all tests pass and functionality is preserved
- [x] Verify performance improvements from removing HOC wrapper functions

### Phase 3: Styling System Consolidation (5-7 days)

#### Task 3.1: Remove Radium Dependency
**Priority: HIGH | Confidence: HIGH**
- [x] Identify all components using Radium
- [x] Convert Radium styles to CSS-in-JS objects
- [x] Remove Radium imports and wrapper functions
- [x] Test all components for visual consistency
- [x] Remove Radium from package.json

#### Task 3.2: Standardize CSS-in-JS Approach
**Priority: MEDIUM | Confidence: HIGH**
- [x] Convert inline styles to CSS-in-JS style objects
- [x] Create consistent styling patterns
- [x] Ensure responsive behavior is maintained
- [x] Update components one by one to avoid breaking changes
- [x] COMPLETED: Comprehensively converted all inline styles in components and pages to CSS-in-JS objects
- [x] COMPLETED: Created standardized styling interfaces and patterns
- [x] COMPLETED: All tests passing (114/114) - functionality preserved
- [x] NOTE: Some complex page components may need TypeScript interface refinement

#### Task 3.3: Convert CSS-in-JS to Tailwind CSS
**Priority: HIGH | Confidence: HIGH**
- [x] Install and configure Tailwind CSS with Next.js 13
- [x] Set up Tailwind config to match existing CSS custom properties (--main, --dark, --light, --grey, --flash)
- [ ] Convert component-by-component CSS-in-JS objects to Tailwind classes
- [ ] Replace responsive logic (`mobile ? 'class1' : 'class2'`) with Tailwind responsive prefixes (sm:, md:, lg:)
- [ ] Convert hover effects from React state to Tailwind hover: utilities
- [ ] Update all components systematically: About.tsx, Book.tsx, CardHome.tsx, and remaining components
- [ ] Test each component individually to ensure visual consistency is maintained
- [ ] Run full test suite after each component conversion to catch any breakage
- [ ] Remove unused CSS-in-JS style objects and imports after conversion
- [ ] Verify bundle size improvements and performance gains
- [ ] Update any remaining inline styles to use Tailwind utilities where appropriate

#### Task 3.4: Optimize CSS Performance
**Priority: MEDIUM | Confidence: MEDIUM**
- [ ] Replace CSS left animations with transform
- [ ] Optimize keyframe animations in globals.css
- [ ] Remove unused CSS variables
- [ ] Fix double semicolons in CSS variables

### Phase 4: Performance Optimizations (3-4 days)

#### Task 4.1: Add React Memoization
**Priority: MEDIUM | Confidence: HIGH**
- [ ] Add React.memo to expensive components (ContactForm, HeroBannerCarousel)
- [ ] Add useMemo for expensive calculations
- [ ] Add useCallback for event handlers passed as props
- [ ] Measure performance improvements

#### Task 4.2: Optimize Image Loading
**Priority: MEDIUM | Confidence: HIGH**
- [ ] Review and standardize image quality settings
- [ ] Implement proper loading strategies
- [ ] Add proper alt text for all images
- [ ] Optimize image sizes and formats

#### Task 4.3: Bundle Size Optimization
**Priority: MEDIUM | Confidence: MEDIUM**
- [ ] Remove unused dependencies from package.json
- [ ] Consolidate icon libraries to single solution
- [ ] Remove duplicate UI framework dependencies
- [ ] Analyze bundle with next-bundle-analyzer

### Phase 5: Accessibility Improvements (4-5 days)

#### Task 5.1: Fix Critical Accessibility Issues
**Priority: HIGH | Confidence: HIGH**
- [ ] Add proper ARIA labels to interactive elements
- [ ] Convert clickable divs to buttons
- [ ] Add keyboard navigation support
- [ ] Implement focus indicators

#### Task 5.2: Improve Color Contrast
**Priority: MEDIUM | Confidence: HIGH**
- [ ] Audit color combinations for WCAG compliance
- [ ] Adjust problematic color pairs
- [ ] Add high-contrast mode support
- [ ] Test with accessibility tools

#### Task 5.3: Form Accessibility
**Priority: MEDIUM | Confidence: HIGH**
- [ ] Add proper form labels and descriptions
- [ ] Implement error announcements
- [ ] Add form validation feedback
- [ ] Test with screen readers

### Phase 6: Testing Improvements (3-4 days)

#### Task 6.1: Improve Existing Tests
**Priority: MEDIUM | Confidence: HIGH**
- [ ] Add functionality tests beyond render tests
- [ ] Fix any failing tests after changes
- [ ] Improve test coverage for critical components
- [ ] Add proper test data factories

#### Task 6.2: Add Missing Component Tests
**Priority: LOW | Confidence: HIGH**
- [ ] Add tests for components without coverage
- [ ] Focus on business logic and user interactions
- [ ] Maintain minimum 70% test coverage
- [ ] Document testing patterns

### Phase 7: Security Hardening (2-3 days)

#### Task 7.1: Implement Security Headers
**Priority: MEDIUM | Confidence: MEDIUM**
- [ ] Add CSP headers via next.config.js
- [ ] Implement security-related headers
- [ ] Add input sanitization for contact form
- [ ] Test security improvements

#### Task 7.2: Dependency Security Audit
**Priority: MEDIUM | Confidence: HIGH**
- [ ] Run npm audit and fix vulnerabilities
- [ ] Update dependencies to latest secure versions
- [ ] Remove unused dependencies
- [ ] Document security practices

---

## Tasks Requiring External Expertise (Too Complex for Current Scope)

### Infrastructure & Deployment
- **CI/CD Pipeline Setup**: Implementing automated testing and deployment
- **Performance Monitoring**: Setting up Sentry, analytics, and performance tracking
- **Advanced Security**: Penetration testing, advanced CSP policies
- **SEO Optimization**: Advanced meta tags, structured data, performance auditing

### Architecture Overhauls
- **State Management Migration**: Implementing Redux Toolkit or Zustand
- **Next.js 14 Upgrade**: Migrating to App Router and Server Components
- **Database Integration**: If backend features are needed
- **Advanced i18n**: More complex internationalization requirements

### Design System Creation
- **Comprehensive Design System**: Creating a full component library with Storybook
- **Advanced Styling**: Implementing complex CSS-in-JS with theme systems
- **Animation Library**: Advanced animations and micro-interactions
- **Brand Guidelines**: Comprehensive visual identity system

### Advanced Testing
- **E2E Testing Setup**: Playwright or Cypress implementation
- **Visual Regression Testing**: Automated screenshot comparison
- **Performance Testing**: Load testing and performance benchmarking
- **Cross-browser Testing**: Comprehensive browser compatibility testing

---

## Success Metrics

### Phase 1 Success Criteria
- [ ] No hardcoded secrets in source code
- [ ] TypeScript compiles without 'any' warnings
- [ ] Error boundary catches and logs errors
- [ ] All existing tests pass

### Phase 2-3 Success Criteria  
- [ ] All components use consistent styling approach
- [ ] No Radium dependencies remaining
- [ ] Component architecture is more maintainable
- [ ] Visual appearance unchanged

### Phase 4-6 Success Criteria
- [ ] Improved Lighthouse performance score
- [ ] WCAG AA accessibility compliance
- [ ] Test coverage above 70%
- [ ] No accessibility violations in automated tests

### Phase 7 Success Criteria
- [ ] Security headers implemented
- [ ] No high/critical security vulnerabilities
- [ ] All dependencies up to date
- [ ] Input sanitization in place

---

## Risk Assessment & Mitigation

### High Risk Tasks
1. **Styling System Changes**: Risk of breaking visual appearance
   - *Mitigation*: Test changes in development, take screenshots before/after
2. **ContactForm Refactoring**: Risk of breaking email functionality  
   - *Mitigation*: Maintain existing API, test email sending thoroughly
3. **Bundle Optimization**: Risk of breaking production build
   - *Mitigation*: Test build process after each dependency change

### Medium Risk Tasks
1. **Performance Optimizations**: Risk of over-optimization
   - *Mitigation*: Measure before/after, revert if performance degrades
2. **Security Headers**: Risk of breaking external integrations
   - *Mitigation*: Implement gradually, test all external services

### Low Risk Tasks
1. **TypeScript Improvements**: Minimal functional impact
2. **Test Improvements**: No production impact
3. **Documentation**: No functional impact

---

## Timeline Estimate

- **Phase 1 (Critical)**: 1-2 days
- **Phase 2 (Architecture)**: 3-5 days  
- **Phase 3 (Styling)**: 5-7 days
- **Phase 4 (Performance)**: 3-4 days
- **Phase 5 (Accessibility)**: 4-5 days
- **Phase 6 (Testing)**: 3-4 days
- **Phase 7 (Security)**: 2-3 days

**Total Estimated Time: 21-30 days**

Each phase can be completed independently, allowing for flexible scheduling and the ability to pause between phases for testing and validation.

---

*Plan created on: 2025-08-21*
*Confidence Level: HIGH for specified tasks*
*Estimated Effort: Medium to High*