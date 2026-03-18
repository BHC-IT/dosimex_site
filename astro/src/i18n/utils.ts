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
