import * as React from 'react'

import { isMobile, isTablet } from 'react-device-detect'

export const useIsMobile = <T>(styles: (m: boolean) => T): T | null => {
	// @ts-ignore - React hooks compatibility with React 18
	const [style, setStyle] = React.useState<T | null>(styles(isMobile))

	// @ts-ignore - React hooks compatibility with React 18
	React.useEffect(() => {
		setStyle(null)
		const timeoutId = setTimeout(() => setStyle(styles(isMobile)), 10)
		return () => clearTimeout(timeoutId)
	}, [])

	return style
}

export const useMobile = (): boolean | null => {
	// @ts-ignore - React hooks compatibility with React 18
	const [mobile, setMobile] = React.useState<boolean | null>(null)

	// @ts-ignore - React hooks compatibility with React 18
	React.useEffect(() => {
		const timeoutId = setTimeout(() => setMobile(isMobile), 10)
		return () => clearTimeout(timeoutId)
	}, [])

	return mobile
}

export const useTablet = (): boolean | null => {
	// @ts-ignore - React hooks compatibility with React 18
	const [tablet, setTablet] = React.useState<boolean | null>(null)

	// @ts-ignore - React hooks compatibility with React 18
	React.useEffect(() => {
		const timeoutId = setTimeout(() => setTablet(isTablet), 10)
		return () => clearTimeout(timeoutId)
	}, [])

	return tablet
}

export const useDeviceType = (): { isMobile: boolean | null; isTablet: boolean | null } => {
	const mobile = useMobile()
	const tablet = useTablet()

	return { isMobile: mobile, isTablet: tablet }
}
