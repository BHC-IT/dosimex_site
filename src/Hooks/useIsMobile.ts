import * as React from 'react'

import { isMobile } from 'react-device-detect'

export const useIsMobile = <T>(styles: (m: boolean) => T): T | null => {
	// @ts-ignore - React hooks compatibility with React 18
	const [style, setStyle] = React.useState<T | null>(styles(isMobile))

	// @ts-ignore - React hooks compatibility with React 18
	React.useEffect(() => {
		setStyle(null)
		setTimeout(() => setStyle(styles(isMobile)), 10)
	}, [])

	return style
}

export const useMobile = (): boolean | null => {
	// @ts-ignore - React hooks compatibility with React 18
	const [mobile, setMobile] = React.useState<boolean | null>(null)

	// @ts-ignore - React hooks compatibility with React 18
	React.useEffect(() => {
		setTimeout(() => setMobile(isMobile), 10)
	}, [])

	return mobile
}
