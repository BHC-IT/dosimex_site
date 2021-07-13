import { useRouter } from 'next/router';

import fr from '../lang/fr';
import en from '../lang/en';

const text : {[$:string]: {[$:string]: any}} = {fr, en};

export const useText = (page: string) => {
	const route = useRouter();
	console.log(route.locale.slice(0,2));

	return text[route.locale.slice(0,2)][page];
}
