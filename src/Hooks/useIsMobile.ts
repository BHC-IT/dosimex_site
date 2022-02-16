import * as React from 'react';

import {
	isMobile
} from "react-device-detect";

export const useIsMobile = <T>(styles : (m: boolean) => T): T | null => {

	const [style, setStyle] = React.useState<T | null>(styles(isMobile))

	React.useEffect(() => {

		setStyle(null)
		setTimeout(() => setStyle(styles(isMobile)), 10);

	}, [])

	return style;
}

export const useMobile = (): boolean | null => {

	const [mobile, setMobile] = React.useState<boolean | null>(null)

	React.useEffect(() => {
		setTimeout(() => setMobile(isMobile), 10);
	}, [])

	return mobile
}