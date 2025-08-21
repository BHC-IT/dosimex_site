import { useState, useEffect } from 'react'

const TIMEOUT_DELAY = 10

// Mobile breakpoint - commonly used in responsive design
const MOBILE_BREAKPOINT = 768
const TABLET_BREAKPOINT = 1024

// Helper function to detect mobile based on screen width and user agent
const detectIsMobile = (): boolean => {
	if (typeof window === 'undefined') return false

	// Primary detection via screen width (works with responsive design mode)
	const screenWidth = window.innerWidth
	if (screenWidth < MOBILE_BREAKPOINT) return true

	// Secondary detection via user agent (for actual mobile devices)
	const userAgent = navigator.userAgent.toLowerCase()
	const mobileKeywords = [
		'android',
		'webos',
		'iphone',
		'ipad',
		'ipod',
		'blackberry',
		'windows phone',
		'mobile',
	]

	return mobileKeywords.some(keyword => userAgent.includes(keyword))
}

// Helper function to detect tablet based on screen width and user agent
const detectIsTablet = (): boolean => {
	if (typeof window === 'undefined') return false

	const screenWidth = window.innerWidth

	// Tablet range: between mobile and desktop breakpoints
	if (screenWidth >= MOBILE_BREAKPOINT && screenWidth < TABLET_BREAKPOINT) {
		return true
	}

	// Additional tablet detection via user agent
	const userAgent = navigator.userAgent.toLowerCase()
	const tabletKeywords = ['ipad', 'tablet', 'kindle']

	return tabletKeywords.some(keyword => userAgent.includes(keyword))
}

export const useIsMobile = <T>(styles: (m: boolean) => T): T | null => {
	const [style, setStyle] = useState<T | null>(null)

	useEffect(() => {
		const updateStyle = () => {
			const isMobile = detectIsMobile()
			setStyle(styles(isMobile))
		}

		// Initial calculation
		const timeoutId = setTimeout(updateStyle, TIMEOUT_DELAY)

		// Listen for window resize to handle responsive design mode
		const handleResize = () => {
			updateStyle()
		}

		window.addEventListener('resize', handleResize)

		return () => {
			clearTimeout(timeoutId)
			window.removeEventListener('resize', handleResize)
		}
	}, [styles])

	return style
}

export const useMobile = (): boolean => {
	const [mobile, setMobile] = useState(false) // Default to false for SSR/initial render

	useEffect(() => {
		const updateMobile = () => {
			setMobile(detectIsMobile())
		}

		// Initial calculation
		const timeoutId = setTimeout(updateMobile, TIMEOUT_DELAY)

		// Listen for window resize to handle responsive design mode
		const handleResize = () => {
			updateMobile()
		}

		window.addEventListener('resize', handleResize)

		return () => {
			clearTimeout(timeoutId)
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return mobile
}

export const useTablet = (): boolean => {
	const [tablet, setTablet] = useState(false) // Default to false for SSR/initial render

	useEffect(() => {
		const updateTablet = () => {
			setTablet(detectIsTablet())
		}

		// Initial calculation
		const timeoutId = setTimeout(updateTablet, TIMEOUT_DELAY)

		// Listen for window resize to handle responsive design mode
		const handleResize = () => {
			updateTablet()
		}

		window.addEventListener('resize', handleResize)

		return () => {
			clearTimeout(timeoutId)
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return tablet
}

export const useDeviceType = (): { isMobile: boolean; isTablet: boolean } => {
	const mobile = useMobile()
	const tablet = useTablet()

	return { isMobile: mobile, isTablet: tablet }
}
