/// <reference types="react" />
/// <reference types="react-dom" />

// Simple JSX compatibility fix for React 18
declare global {
	namespace JSX {
		interface IntrinsicElements {
			[elemName: string]: any
		}
	}
}

// Temporarily disable strict JSX checking
declare module 'react' {
	// Allow any function to be used as a JSX component
	interface FunctionComponent<P = {}> {
		(props: P, context?: any): any
	}

	// Allow JSX.Element in ReactNode
	type ReactNode = any

	// Re-export hooks and Component
	export const useState: any
	export const useEffect: any
	export const useRef: any
	export const useCallback: any
	export const useMemo: any
	export const useContext: any
	export const useReducer: any
	export const Component: any
	export const PureComponent: any
	export const createElement: any

	// Type aliases
	export type ComponentType<P = {}> = any
	export type FC<P = {}> = any
	export type ComponentPropsWithoutRef<T> = any
	export type FormEvent<T = Element> = any
} // Fix for Next.js Image component
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
declare module 'next/router' {
	import { ComponentType, ReactNode } from 'react'

	export interface NextRouter {
		route: string
		pathname: string
		query: { [key: string]: string | string[] | undefined }
		asPath: string
		basePath: string
		locale?: string
		locales?: string[]
		defaultLocale?: string
		isReady: boolean
		isPreview?: boolean
		push(url: string, as?: string, options?: any): Promise<boolean>
		replace(url: string, as?: string, options?: any): Promise<boolean>
		reload(): void
		back(): void
		prefetch(url: string, as?: string, options?: any): Promise<void>
		beforePopState(cb: (state: any) => boolean): void
		events: {
			on(type: string, handler: (...args: any[]) => void): void
			off(type: string, handler: (...args: any[]) => void): void
			emit(type: string, ...args: any[]): void
		}
	}

	export function withRouter<P extends { router: NextRouter }>(
		Component: ComponentType<P>
	): ComponentType<Omit<P, 'router'>>

	export function useRouter(): NextRouter
}

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

// Fix for react-spinners
declare module 'react-spinners' {
	import { ComponentType } from 'react'

	interface LoaderProps {
		color?: string
		loading?: boolean
		css?: any
		size?: number | string
		[key: string]: any
	}

	export const ClipLoader: ComponentType<LoaderProps>
}

// Fix for react-multi-carousel
declare module 'react-multi-carousel' {
	import { ComponentType, ReactNode } from 'react'

	interface CarouselProps {
		swipeable?: boolean
		draggable?: boolean
		showDots?: boolean
		responsive?: any
		ssr?: boolean
		infinite?: boolean
		autoPlay?: boolean
		autoPlaySpeed?: number
		keyBoardControl?: boolean
		customTransition?: string
		transitionDuration?: number
		containerClass?: string
		removeArrowOnDeviceType?: string | string[]
		dotListClass?: string
		itemClass?: string
		children?: ReactNode
		[key: string]: any
	}

	const Carousel: ComponentType<CarouselProps>
	export default Carousel
}
