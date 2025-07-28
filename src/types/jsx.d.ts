// JSX compatibility fixes for React 18
declare global {
	namespace JSX {
		interface IntrinsicElements {
			[elemName: string]: any
		}

		// Allow key prop on all components
		interface ElementAttributesProperty {
			props: {}
		}

		interface ElementChildrenAttribute {
			children: {}
		}
	}
}

// Suppress specific React warnings
if (typeof window !== 'undefined') {
	const originalError = console.error
	console.error = (...args) => {
		// Suppress fetchPriority warning from Next.js Image component
		if (typeof args[0] === 'string' && args[0].includes('fetchPriority')) {
			return
		}
		// Suppress ToastContainer defaultProps warning
		if (
			typeof args[0] === 'string' &&
			args[0].includes('ToastContainer: Support for defaultProps')
		) {
			return
		}
		// Suppress function ref warning from Navbar
		if (
			typeof args[0] === 'string' &&
			args[0].includes('Function components cannot be given refs')
		) {
			return
		}
		originalError.call(console, ...args)
	}
}

// Allow any React component to accept key prop
declare module 'react' {
	interface Attributes {
		key?: React.Key | null | undefined
	}

	interface ClassAttributes<T> extends Attributes {
		ref?: React.Ref<T>
	}

	interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
		key?: React.Key | null | undefined
	}
}

// Fix for Next.js Image component
declare module 'next/image' {
	import { ComponentType } from 'react'

	interface ImageProps {
		src: string
		alt: string
		width?: number | `${number}`
		height?: number | `${number}`
		fill?: boolean
		priority?: boolean
		loading?: 'lazy' | 'eager'
		placeholder?: 'blur' | 'empty'
		quality?: number | `${number}`
		sizes?: string
		style?: React.CSSProperties
		className?: string
		onLoad?: () => void
		onError?: () => void
		blurDataURL?: string
		unoptimized?: boolean
		layout?: string // Legacy support
		objectFit?: string // Legacy support
		objectPosition?: string // Legacy support
		lazyBoundary?: string
		fetchpriority?: 'high' | 'low' | 'auto' // Fix for fetchPriority warning
		fetchPriority?: 'high' | 'low' | 'auto' // Alternative case
		loader?: ({
			src,
			width,
			quality,
		}: {
			src: string
			width: number
			quality?: number
		}) => string
	}

	const Image: ComponentType<ImageProps>
	export default Image
}

// Fix for react-device-detect
declare module 'react-device-detect' {
	import { ComponentType, ReactNode } from 'react'

	export const isMobile: boolean
	export const isTablet: boolean
	export const isDesktop: boolean

	interface ViewProps {
		children?: ReactNode
	}

	export const BrowserView: ComponentType<ViewProps>
	export const MobileView: ComponentType<ViewProps>
	export const TabletView: ComponentType<ViewProps>
}

// Fix for FontAwesome
declare module '@fortawesome/react-fontawesome' {
	import { ComponentType } from 'react'

	interface FontAwesomeIconProps {
		icon: any
		size?: string
		color?: string
		style?: React.CSSProperties
		className?: string
		[key: string]: any
	}

	export const FontAwesomeIcon: ComponentType<FontAwesomeIconProps>
}

// Fix for react-parallax-tilt
declare module 'react-parallax-tilt' {
	import { ComponentType, ReactNode } from 'react'

	interface TiltProps {
		children?: ReactNode
		tiltReverse?: boolean
		scale?: number
		tiltMaxAngleX?: number
		tiltMaxAngleY?: number
		style?: React.CSSProperties
		className?: string
		[key: string]: any
	}

	const Tilt: ComponentType<TiltProps>
	export default Tilt
}

// Fix for Next.js Link
declare module 'next/link' {
	import { ComponentType, ReactNode } from 'react'

	interface LinkProps {
		href: string
		children?: ReactNode
		replace?: boolean
		scroll?: boolean
		shallow?: boolean
		passHref?: boolean
		prefetch?: boolean
		locale?: string
		[key: string]: any
	}

	const Link: ComponentType<LinkProps>
	export default Link
}

// Fix for Next.js modules
declare module 'next/app' {
	import { ComponentType } from 'react'
	export interface AppProps {
		Component: ComponentType<any>
		pageProps: any
	}
}

declare module 'next/head' {
	import { ComponentType, ReactNode } from 'react'
	interface HeadProps {
		children?: ReactNode
	}
	const Head: ComponentType<HeadProps>
	export default Head
}

declare module 'next/document' {
	import { ComponentType, ReactNode } from 'react'

	interface DocumentProps {
		children?: ReactNode
	}

	export const Html: ComponentType<DocumentProps>
	export const Head: ComponentType<DocumentProps>
	export const Main: ComponentType<DocumentProps>
	export const NextScript: ComponentType<DocumentProps>

	const Document: ComponentType<DocumentProps>
	export default Document
}

// Fix for react-youtube
declare module 'react-youtube' {
	import { ComponentType } from 'react'

	interface YouTubeProps {
		videoId: string
		opts?: {
			height?: string | number
			width?: string | number
			[key: string]: any
		}
		[key: string]: any
	}

	const YouTube: ComponentType<YouTubeProps>
	export default YouTube
}
