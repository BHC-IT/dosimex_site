import { useRouter } from 'next/router'
import * as React from 'react'

import { text } from '../Hooks/useText'
import ILang from '../lang/interface'

type TextPageKey = keyof ILang

export const withText = <Props extends object>(
	Component: React.ComponentType<Props & { text?: ILang[TextPageKey] }>,
	page: TextPageKey,
): React.FC<Props> => {
	const WithTextComponent = (props: Props) => {
		const route = useRouter()

		let p_text: ILang[TextPageKey] | null = null
		if (route.locale === 'debug') {
			p_text = text[route.locale]?.[page] ?? null
		} else if (route?.locale) {
			const locale = route.locale.slice(0, 2)
			p_text = text[locale]?.[page] ?? null
		}

		return (
			<Component
				{...props}
				text={p_text}
			/>
		)
	}

	WithTextComponent.displayName = `withText(${Component.displayName ?? Component.name})`
	return WithTextComponent
}
