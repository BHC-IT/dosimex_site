/**
 * Entry point for client analytics: boots PostHog, then wires the custom event
 * layer (CTAs, downloads, navigation, section views) via event delegation and an
 * IntersectionObserver.
 *
 * Autocapture, pageviews, web vitals, rageclicks and exceptions are handled by
 * PostHog itself — see `src/lib/analytics.ts`. Only events that need our own
 * semantics live here.
 */

import { capture, getLocale, initAnalytics } from '@/lib/analytics'

initAnalytics()

function initClickTracking() {
	document.body.addEventListener('click', (e) => {
		const anchor = (e.target as HTMLElement).closest('a')
		if (!anchor) return

		const href = anchor.getAttribute('href') ?? ''
		const text = (anchor.textContent ?? '').trim().slice(0, 100)

		// 1. Named CTA (data-ph-cta attribute)
		const ctaName = anchor.dataset.phCta
		if (ctaName) {
			capture('cta_click', {
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
			capture('pdf_download', {
				href,
				filename: href.split('/').pop() ?? href,
			})
			return // PDFs are local, skip external_link_click
		}

		// 3. External link
		if (anchor.hostname && anchor.hostname !== window.location.hostname) {
			capture('external_link_click', {
				href,
				link_text: text,
				domain: anchor.hostname,
			})
		}

		// 4. Anchor / in-page navigation
		if (href.startsWith('#')) {
			capture('anchor_click', { anchor: href })
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
			capture('nav_click', {
				link_text: text,
				href,
				nav_area: navArea,
			})
		}

		// 6. Language switch
		if (/^(FR|EN)$/i.test(text)) {
			capture('language_switch', {
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

				capture('section_viewed', { section_id: key })

				observer.unobserve(el)
			}
		},
		{ threshold: 0.3 },
	)

	document
		.querySelectorAll<HTMLElement>('section[id], [data-ph-section]')
		.forEach((el) => observer.observe(el))
}

let clickTrackingReady = false

function initTracking() {
	// Delegated on <body>, so it survives client-side navigation — bind once.
	if (!clickTrackingReady) {
		clickTrackingReady = true
		initClickTracking()
	}
	initScrollTracking()
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initTracking)
} else {
	initTracking()
}

document.addEventListener('astro:page-load', initTracking)
