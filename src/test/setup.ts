import '@testing-library/jest-dom'
import * as React from 'react'

// Mock Next.js router
import { vi } from 'vitest'

vi.mock('next/router', () => ({
	useRouter: () => ({
		push: vi.fn(),
		replace: vi.fn(),
		back: vi.fn(),
		pathname: '/',
		query: {},
		asPath: '/',
	}),
}))

// Mock next/link
vi.mock('next/link', () => ({
	__esModule: true,
	default: ({ children, href, ...props }: any) => {
		// @ts-ignore - React.createElement compatibility
		return React.createElement('a', { href, ...props }, children)
	},
}))

// Mock react-device-detect
vi.mock('react-device-detect', () => ({
	isMobile: false,
	isTablet: false,
	isDesktop: true,
}))
