/**
 * PostHog custom event tracking — centralized via event delegation + IntersectionObserver.
 * PostHog is initialized in Layout.astro <head> (auto-pageview already enabled).
 */

declare const posthog: {
	capture: (event: string, properties?: Record<string, unknown>) => void
}

function getLocale(): string {
	const [, lang] = window.location.pathname.split('/')
	return lang === 'en' ? 'en' : 'fr'
}

function getPageName(): string {
	const path =
		window.location.pathname.replace(/^\/en/, '').replace(/\/$/, '') || '/'
	const map: Record<string, string> = {
		'/': 'home',
		'/software': 'software',
		'/training': 'training',
		'/manuals': 'manuals',
		'/about': 'about',
		'/contact': 'contact',
		'/product': 'product',
		'/videos': 'videos',
		'/books': 'books',
	}
	return map[path] ?? 'unknown'
}

function baseProps(): Record<string, unknown> {
	return {
		locale: getLocale(),
		page: getPageName(),
		path: window.location.pathname,
	}
}

function initClickTracking() {
	document.body.addEventListener('click', (e) => {
		const anchor = (e.target as HTMLElement).closest('a')
		if (!anchor) return

		const href = anchor.getAttribute('href') ?? ''
		const text = (anchor.textContent ?? '').trim().slice(0, 100)
		const props = baseProps()

		// 1. Named CTA (data-ph-cta attribute)
		const ctaName = anchor.dataset.phCta
		if (ctaName) {
			posthog.capture('cta_click', {
				...props,
				cta_name: ctaName,
				href,
				target_type: href.startsWith('#')
					? 'anchor'
					: href.startsWith('http')
						? 'external'
						: 'internal',
			})
		}

		// 2. PDF download
		if (href.toLowerCase().endsWith('.pdf')) {
			posthog.capture('pdf_download', {
				...props,
				href,
				filename: href.split('/').pop() ?? href,
			})
			return // PDFs are local, skip external_link_click
		}

		// 3. External link
		if (anchor.hostname && anchor.hostname !== window.location.hostname) {
			posthog.capture('external_link_click', {
				...props,
				href,
				link_text: text,
				domain: anchor.hostname,
			})
		}

		// 4. Anchor / in-page navigation
		if (href.startsWith('#')) {
			posthog.capture('anchor_click', {
				...props,
				anchor: href,
			})
		}

		// 5. Navigation area detection
		const navArea = anchor.closest('header')
			? 'navbar'
			: anchor.closest('footer')
				? 'footer'
				: anchor.closest('[data-mobile-menu]')
					? 'mobile_menu'
					: null
		if (navArea) {
			posthog.capture('nav_click', {
				...props,
				link_text: text,
				href,
				nav_area: navArea,
			})
		}

		// 6. Language switch
		if (/^(FR|EN)$/i.test(text)) {
			posthog.capture('language_switch', {
				...props,
				from_locale: getLocale(),
				to_locale: getLocale() === 'fr' ? 'en' : 'fr',
			})
		}
	})
}

function initScrollTracking() {
	const observed = new Set<string>()

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue
				const el = entry.target as HTMLElement
				const key = el.dataset.phSection ?? el.id
				if (!key || observed.has(key)) continue
				observed.add(key)

				posthog.capture('section_viewed', {
					...baseProps(),
					section_id: key,
				})

				observer.unobserve(el)
			}
		},
		{ threshold: 0.3 },
	)

	document
		.querySelectorAll<HTMLElement>('section[id], [data-ph-section]')
		.forEach((el) => observer.observe(el))
}

function initTracking() {
	if (typeof posthog === 'undefined') return
	initClickTracking()
	initScrollTracking()
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initTracking)
} else {
	initTracking()
}

document.addEventListener('astro:page-load', initTracking)
