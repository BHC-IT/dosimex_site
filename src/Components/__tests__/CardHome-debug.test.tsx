import { render } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

import CardHome, { styles } from '../CardHome'

// Mock Next.js router
vi.mock('next/router', () => ({
	useRouter: vi.fn(() => ({
		push: vi.fn(),
		pathname: '/',
		query: {},
		asPath: '/',
	})),
}))

// Mock useIsMobile hook - return valid styles directly
vi.mock('../Hooks/useIsMobile', () => ({
	useIsMobile: vi.fn(() => styles(false)),
}))

// Mock useText hook
vi.mock('../Hooks/useText', () => ({
	useText: vi.fn(() => ({ cardIcon: 'Feature icon' })),
}))

// Mock react-parallax-tilt
vi.mock('react-parallax-tilt', () => ({
	default: ({ children }: any) => <div data-testid="tilt-wrapper">{children}</div>,
}))

describe('CardHome Debug', () => {
	it('should render something basic', () => {
		const props = {
			icon: '/Images/software-icon.png',
			title: 'Test Title',
			content: 'Test content',
			route: '/test',
		}

		const { container } = render(<CardHome {...props} />)

		// Just check if anything renders at all
		expect(container).toBeDefined()
	})
})
