import * as React from 'react';

import {
	isMobile
} from "react-device-detect";

export const useIsMobile = (styles : Function) => {

	const [style, setStyle] = React.useState<any | null>(styles(isMobile))

	React.useEffect(() => {

		setStyle(null)
		setTimeout(() => setStyle(styles(isMobile)), 10);

	}, [])

	return style;
}