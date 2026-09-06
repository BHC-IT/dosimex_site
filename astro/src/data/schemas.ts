import type { Locale } from '@/i18n/utils'

export const organizationSchema = {
	'@context': 'https://schema.org',
	'@type': 'Organization',
	name: 'Dosimex',
	url: 'https://dosimex.fr',
	logo: 'https://dosimex.fr/Images/logo_dosimex_ink.webp',
	description:
		'Dosimex — Outils de calcul en radioprotection : Dosimex (17 codes de calcul validés, Excel) et Dosismart (application web).',
	contactPoint: {
		'@type': 'ContactPoint',
		telephone: '+33-6-89-70-90-35',
		contactType: 'sales',
		availableLanguage: ['French', 'English'],
	},
	sameAs: ['https://www.youtube.com/channel/UCmijJyGaFfJte4xsTk90MVA'],
} as const

export function websiteSchema(locale: Locale) {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'Dosimex',
		url: locale === 'fr' ? 'https://dosimex.fr/' : 'https://dosimex.fr/en/',
		inLanguage: locale === 'fr' ? 'fr-FR' : 'en-US',
		publisher: {
			'@type': 'Organization',
			name: 'Dosimex',
		},
	}
}
