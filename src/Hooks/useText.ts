import { useRouter } from 'next/router'

import debug from '../lang/debug'
import en from '../lang/en'
import fr from '../lang/fr'
import ILang from '../lang/interface'

export const text : {[$:string]: ILang} = { fr, en, debug }

export const useText = (page: keyof ILang): ILang[keyof ILang] | null => {
	const route = useRouter()

	if (route.locale === 'debug') {
		return text[route.locale]?.[page] ?? null
	} else if (route?.locale) {
		const locale = route.locale.slice(0, 2)
		return text[locale]?.[page] ?? null
	}
	return null
}
