import { fr } from './fr'
import { en } from './en'

const translations = { fr, en } as const

export type Locale = keyof typeof translations

export type Translations = (typeof translations)[Locale]

export function getTranslations(locale: Locale): Translations {
	return translations[locale]
}

export function getLocaleFromUrl(url: URL): Locale {
	const [, lang] = url.pathname.split('/')
	if (lang === 'en') return 'en'
	return 'fr'
}

/**
 * Given a pathname, return the equivalent path in the alternate locale.
 * `/software` → `/en/software`, `/en/software` → `/software`
 * `/` → `/en/`, `/en/` → `/`
 */
export function getAlternateUrl(pathname: string): string {
	const clean = pathname.replace(/\/$/, '') || '/'
	if (clean.startsWith('/en')) {
		const rest = clean.slice(3) // strip "/en"
		return rest || '/'
	}
	return `/en${clean === '/' ? '/' : clean}`
}

/**
 * Build an absolute canonical URL from the site origin and pathname.
 * Strips trailing slashes except for root `/`.
 */
/**
 * Static paths for [...locale] dynamic routes.
 * `undefined` param = default locale (fr), no prefix.
 */
export function getLocalePaths() {
	return [
		{ params: { locale: undefined }, props: { locale: 'fr' as const } },
		{ params: { locale: 'en' }, props: { locale: 'en' as const } },
	]
}

/**
 * Prefix a path with the locale segment when needed.
 * `localePath('fr', '/software')` → `/software`
 * `localePath('en', '/software')` → `/en/software`
 */
export function localePath(locale: Locale, path: string): string {
	return locale === 'fr' ? path : `/en${path}`
}

/**
 * Build an absolute canonical URL from the site origin and pathname.
 * Strips trailing slashes except for root `/`.
 */
export function getCanonicalUrl(site: string, pathname: string): string {
	const base = site.replace(/\/$/, '')
	const path = pathname.replace(/\/$/, '') || '/'
	return path === '/' ? `${base}/` : `${base}${path}`
}
