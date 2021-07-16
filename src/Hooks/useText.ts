import * as React from 'react';
import { useRouter } from 'next/router';

import ILang from '../lang/interface';

import fr from '../lang/fr';
import en from '../lang/en';
import debug from '../lang/debug';

export const text : {[$:string]: ILang} = {fr, en, debug};

export const useText = (page: string) : ILang => {
	const route = useRouter();

	if (route.locale === 'debug')
		return text[route.locale][page];

	return text[route.locale.slice(0,2)][page];
}

