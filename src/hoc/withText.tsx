import * as React from 'react';

import { useRouter } from 'next/router';
import { text } from '../Hooks/useText';

export const withText = (Component: React.ComponentType, page : string) =>
	(props : object) => {
		const route = useRouter();

		let p_text;
		if (route.locale === 'debug')
			p_text = text[route.locale][page];
		else
			p_text = text[route.locale.slice(0,2)][page];
		return <Component text={p_text} {...props} />
	}