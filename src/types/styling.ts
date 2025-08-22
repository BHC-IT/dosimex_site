import * as CSS from 'csstype'

/**
 * Base styling interface for components
 * This ensures consistency across the application
 */
export interface BaseStyles {
	[key: string]: CSS.Properties
}

/**
 * Responsive styling interface for components that need mobile/desktop variants
 */
export interface ResponsiveStyles {
	mobile: BaseStyles
	desktop: BaseStyles
}

/**
 * Standard styling properties that can be passed to components
 */
export interface StyleProps {
	style?: BaseStyles
	className?: string
}

/**
 * Common responsive breakpoints used throughout the application
 */
export const BREAKPOINTS = {
	mobile: 1024,
	tablet: 1440,
	desktop: 1920,
} as const

/**
 * Common style constants
 */
export const STYLE_CONSTANTS = {
	colors: {
		main: 'var(--main)',
		dark: 'var(--dark)',
		light: 'var(--light)',
		grey: 'var(--grey)',
		flash: 'var(--flash)',
	},
	fonts: {
		lato: 'var(--lato)',
		nunito: 'var(--nunito)',
	},
	transitions: {
		default: 'all 0.3s ease 0s',
		hover: 'transform 0.2s ease',
	},
	shadows: {
		card: '1px 2px 2px 2px rgba(0, 0, 0, 0.15)',
		button: '0px 5px 5px rgba(0, 0, 0, 0.1)',
	},
	borderRadius: {
		small: '5px',
		medium: '10px',
		large: '20px',
		round: '50%',
		pill: '50px',
	},
} as const

/**
 * Utility type for creating responsive style functions
 */
export type ResponsiveStyleFunction<T extends BaseStyles = BaseStyles> = (mobile: boolean) => T

/**
 * Common spacing utilities
 */
export const spacing = {
	xs: '0.5rem',
	sm: '1rem',
	md: '1.5rem',
	lg: '2rem',
	xl: '3rem',
	xxl: '4rem',
} as const
