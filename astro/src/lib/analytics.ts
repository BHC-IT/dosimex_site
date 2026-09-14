/**
 * PostHog bootstrap — configuration, consent gating and a typed `capture()` helper.
 *
 * Everything is driven by `PUBLIC_POSTHOG_*` env vars (see `.env.example`); with no
 * key set the module degrades to a no-op so local dev and previews stay clean.
 *
 * PostHog is *lazily imported and initialised only once the visitor accepts the
 * `analytics` cookie category* (wired in `CookieConsent.astro`). Initialising it
 * earlier — even opted out — still hits the ingestion host for remote config,
 * feature flags and the autocapture extension bundles, which is exactly what a
 * pre-consent visitor must not trigger. Declining costs zero bytes.
 */

import type { PostHog, PostHogConfig } from 'posthog-js'

declare global {
	interface Window {
		posthog?: PostHog
	}
}

export type EventProperties = Record<string, unknown>

const env = import.meta.env

/** `'true'` / `'1'` enable, `'false'` / `'0'` disable, anything empty falls back. */
function flag(value: string | undefined, fallback: boolean): boolean {
	if (value === undefined || value === '') return fallback
	return value === 'true' || value === '1'
}

function personProfiles(): 'always' | 'never' | 'identified_only' {
	const value = env.PUBLIC_POSTHOG_PERSON_PROFILES
	return value === 'always' || value === 'never' ? value : 'identified_only'
}

function cookielessMode(): 'always' | 'on_reject' | undefined {
	const value = env.PUBLIC_POSTHOG_COOKIELESS
	return value === 'always' || value === 'on_reject' ? value : undefined
}

/* -------------------------------------------------------------------------- */
/* Shared event properties                                                     */
/* -------------------------------------------------------------------------- */

const PAGE_NAMES: Record<string, string> = {
	'/': 'home',
	'/software': 'software',
	'/dosismart': 'dosismart',
	'/learn': 'learn',
	'/references': 'references',
	'/training': 'training',
	'/manuals': 'manuals',
	'/about': 'about',
	'/contact': 'contact',
	'/product': 'product',
	'/books': 'books',
	'/testimonials': 'testimonials',
}

export function getLocale(): 'fr' | 'en' {
	const [, lang] = window.location.pathname.split('/')
	return lang === 'en' ? 'en' : 'fr'
}

export function getPageName(): string {
	const path =
		window.location.pathname.replace(/^\/en/, '').replace(/\/$/, '') || '/'
	return PAGE_NAMES[path] ?? 'unknown'
}

/** Locale/page context attached to every custom event. */
export function pageProperties(): EventProperties {
	return {
		locale: getLocale(),
		page: getPageName(),
		path: window.location.pathname,
	}
}

/* -------------------------------------------------------------------------- */
/* Lifecycle                                                                   */
/* -------------------------------------------------------------------------- */

type State =
	/** Not initialised yet — no key, or waiting for the consent decision. */
	| 'idle'
	/** Analytics is switched off for this build; every call is a no-op. */
	| 'disabled'
	/** PostHog is loading. */
	| 'loading'
	/** PostHog is live and capturing. */
	| 'ready'
	/** The visitor declined; events are dropped. */
	| 'denied'

let state: State = 'idle'
let client: PostHog | null = null

/** Events fired before PostHog is live (island hydration, banner still open). */
const queue: Array<{ event: string; properties: EventProperties }> = []
const QUEUE_LIMIT = 50

function buildConfig(): Partial<PostHogConfig> {
	const config: Partial<PostHogConfig> = {
		api_host: env.PUBLIC_POSTHOG_HOST ?? 'https://eu.i.posthog.com',
		defaults: '2026-05-30',
		person_profiles: personProfiles(),
		debug: flag(env.PUBLIC_POSTHOG_DEBUG, false),

		// Pageviews & engagement. The site is a classic MPA, but `history_change`
		// keeps us correct if Astro's ClientRouter is ever switched on.
		capture_pageview: 'history_change',
		capture_pageleave: true,
		autocapture: true,
		rageclick: true,
		capture_dead_clicks: true,
		capture_heatmaps: true,

		// Web vitals (LCP / CLS / FCP / INP) + resource timings.
		capture_performance: {
			web_vitals: true,
			web_vitals_attribution: true,
			network_timing: true,
		},

		// Client-side error tracking. Console errors stay off — too noisy from
		// third-party embeds (YouTube, EmailJS) to be actionable.
		capture_exceptions: {
			capture_unhandled_errors: true,
			capture_unhandled_rejections: true,
			capture_console_errors: false,
		},

		// A static brand site: no flags, no surveys, no toolbar chatter. Turning
		// them off removes the `/flags/` round-trip and the surveys bundle.
		advanced_disable_flags: true,
		disable_surveys: true,
		disable_web_experiments: true,

		respect_dnt: true,
		mask_personal_data_properties: true,
		secure_cookie: window.location.protocol === 'https:',

		disable_session_recording: !flag(env.PUBLIC_POSTHOG_SESSION_RECORDING, false),
		session_recording: {
			maskAllInputs: true,
			maskTextSelector: '[data-ph-mask]',
		},
	}

	// Only set when proxied — otherwise PostHog derives the UI host itself.
	if (env.PUBLIC_POSTHOG_UI_HOST) config.ui_host = env.PUBLIC_POSTHOG_UI_HOST

	const cookieless = cookielessMode()
	if (cookieless) config.cookieless_mode = cookieless

	return config
}

function flushQueue(): void {
	if (!client) return
	for (const { event, properties } of queue.splice(0)) {
		client.capture(event, properties)
	}
}

/**
 * Checks the build-time configuration. Called once at startup; it never contacts
 * PostHog — that only happens from {@link setAnalyticsConsent}.
 */
export function initAnalytics(): void {
	if (state !== 'idle') return

	const key = env.PUBLIC_POSTHOG_KEY
	const enabledInDev = flag(env.PUBLIC_POSTHOG_ENABLE_IN_DEV, false)

	if (!key || (env.DEV && !enabledInDev)) {
		state = 'disabled'
		queue.length = 0
		if (env.DEV && !key) {
			console.info('[analytics] PUBLIC_POSTHOG_KEY not set — PostHog disabled.')
		}
	}
}

async function load(key: string): Promise<void> {
	state = 'loading'
	const { default: posthog } = await import('posthog-js')

	// Consent may have been revoked while the chunk was downloading.
	if (state !== 'loading') return

	posthog.init(key, buildConfig())
	// Record the decision in PostHog's own consent state too, so `opt_out` on a
	// later revoke is symmetric and `get_explicit_consent_status()` is truthful.
	posthog.opt_in_capturing({ captureEventName: false })
	client = posthog
	window.posthog = posthog
	state = 'ready'
	flushQueue()
}

/**
 * Grants or revokes analytics consent. Called by the cookie banner on every page
 * load (with the stored decision) and whenever the visitor changes preferences.
 *
 * The first `true` loads and starts PostHog, which captures the pageview itself.
 */
export function setAnalyticsConsent(granted: boolean): void {
	if (state === 'disabled') return

	if (!granted) {
		queue.length = 0
		state = 'denied'
		client?.opt_out_capturing()
		return
	}

	if (state === 'ready') {
		client?.opt_in_capturing({ captureEventName: false })
		flushQueue()
		return
	}
	if (state === 'loading') return

	const key = env.PUBLIC_POSTHOG_KEY
	if (!key) return
	void load(key)
}

/* -------------------------------------------------------------------------- */
/* Capture                                                                     */
/* -------------------------------------------------------------------------- */

/**
 * Captures a custom event with the shared locale/page context.
 *
 * Events fired before PostHog is live — island hydration, or the cookie banner
 * still open — are queued and replayed on consent. Once the visitor has
 * declined, events are dropped.
 */
export function capture(event: string, properties?: EventProperties): void {
	if (state === 'disabled' || state === 'denied') return

	const merged = { ...pageProperties(), ...properties }

	if (state === 'ready' && client) {
		client.capture(event, merged)
		return
	}

	queue.push({ event, properties: merged })
	if (queue.length > QUEUE_LIMIT) queue.shift()
}
