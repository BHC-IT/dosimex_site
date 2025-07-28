import { useState, useEffect } from 'react'

import { isMobile, isTablet } from 'react-device-detect'

const TIMEOUT_DELAY = 10

export const useIsMobile = <T>(styles: (m: boolean) => T): T | null => {
	const [style, setStyle] = useState(styles(isMobile) as T | null)

	useEffect(() => {
		setStyle(null)
		const timeoutId = setTimeout(() => setStyle(styles(isMobile)), TIMEOUT_DELAY)
		return () => clearTimeout(timeoutId)
	}, [styles])

	return style
}

export const useMobile = (): boolean | null => {
	const [mobile, setMobile] = useState(null as boolean | null)

	useEffect(() => {
		const timeoutId = setTimeout(() => setMobile(isMobile), TIMEOUT_DELAY)
		return () => clearTimeout(timeoutId)
	}, [])

	return mobile
}

export const useTablet = (): boolean | null => {
	const [tablet, setTablet] = useState(null as boolean | null)

	useEffect(() => {
		const timeoutId = setTimeout(() => setTablet(isTablet), TIMEOUT_DELAY)
		return () => clearTimeout(timeoutId)
	}, [])

	return tablet
}

export const useDeviceType = (): { isMobile: boolean | null; isTablet: boolean | null } => {
	const mobile = useMobile()
	const tablet = useTablet()

	return { isMobile: mobile, isTablet: tablet }
}
