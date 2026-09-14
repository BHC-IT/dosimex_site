/// <reference types="astro/client" />

interface ImportMetaEnv {
	// EmailJS (contact form)
	readonly PUBLIC_EMAILJS_SERVICE_ID: string
	readonly PUBLIC_EMAILJS_TEMPLATE_ID: string
	readonly PUBLIC_EMAILJS_PUBLIC_KEY: string

	// PostHog — analytics is disabled entirely when PUBLIC_POSTHOG_KEY is unset.
	readonly PUBLIC_POSTHOG_KEY?: string
	/** Ingestion host (the reverse proxy domain when one is used). */
	readonly PUBLIC_POSTHOG_HOST?: string
	/** PostHog app host, required when ingestion goes through a proxy. */
	readonly PUBLIC_POSTHOG_UI_HOST?: string
	readonly PUBLIC_POSTHOG_PERSON_PROFILES?: 'always' | 'never' | 'identified_only'
	/** `'true'` to enable session replay (consent-gated, all inputs masked). */
	readonly PUBLIC_POSTHOG_SESSION_RECORDING?: string
	/** Requires cookieless mode to be enabled in the PostHog project settings. */
	readonly PUBLIC_POSTHOG_COOKIELESS?: 'always' | 'on_reject'
	readonly PUBLIC_POSTHOG_DEBUG?: string
	/** `'true'` to also capture from `pnpm dev`. */
	readonly PUBLIC_POSTHOG_ENABLE_IN_DEV?: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
