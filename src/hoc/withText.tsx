import * as React from 'react';

import { useRouter } from 'next/router';
import { text } from '../Hooks/useText';



export const withText = <Props extends object>(Component: React.ComponentType<Props>, page : string) : React.FC<Props> =>
	(props : Props) => {
		const route = useRouter();

		let p_text = null;
		if (route.locale === 'debug')
			p_text = text[route.locale][page];
		else if (route?.locale)
			p_text = text[route.locale.slice(0,2)][page];
		return <Component {...props} text={p_text} />
	}