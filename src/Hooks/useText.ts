import { useRouter } from 'next/router'

import debug from '../lang/debug'
import en from '../lang/en'
import fr from '../lang/fr'
import ILang from '../lang/interface'

export const text : {[$:string]: ILang} = { fr, en, debug }

export const useText = (page: string) : any => {
	const route = useRouter()

	if (route.locale === 'debug')
		return text[route.locale][page]
	else if (route?.locale)
		return text[route.locale.slice(0,2)]?.[page]
	return null
}
