import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'

import { useIsMobile } from '../../Hooks/useIsMobile'
import { useText } from '../../Hooks/useText'
import CardHome, { styles } from '../CardHome'

// Mock Next.js router
const mockPush = vi.fn()
vi.mock('next/router', () => ({
	useRouter: vi.fn(() => ({
		push: mockPush,
		pathname: '/',
		query: {},
		asPath: '/',
	})),
}))

// Mock useIsMobile hook
vi.mock('../../Hooks/useIsMobile', () => ({
	useIsMobile: vi.fn(),
}))

// Mock useText hook
vi.mock('../../Hooks/useText', () => ({
	useText: vi.fn(),
}))

// Mock react-parallax-tilt
vi.mock('react-parallax-tilt', () => ({
	default: ({ children, ...props }: any) => (
		<div
			data-testid='tilt-wrapper'
			{...props}
		>
			{children}
		</div>
	),
}))

const createMockCardProps = (overrides = {}) => ({
	icon: '/Images/software-icon.png',
	title: 'Software Solutions',
	content: 'Advanced radiation dosimetry software.',
	route: '/software',
	...overrides,
})

const createMockStyles = () => ({
	container: { display: 'flex', flexDirection: 'column' },
	image: { width: '80px', height: '80px' },
	title: { fontSize: '1.5rem' },
	content: { fontSize: '1rem' },
})

describe('CardHome Component', () => {
	beforeEach(() => {
		vi.clearAllMocks()
		;(useIsMobile as any).mockReturnValue(createMockStyles())
		;(useText as any).mockReturnValue({ altText: { cardIcon: 'Card icon' } })
	})

	it('should render card with content', () => {
		const props = createMockCardProps()
		render(<CardHome {...props} />)
		expect(screen.getByText('Software Solutions')).toBeInTheDocument()
	})

	it('should handle click events', () => {
		const props = createMockCardProps()
		render(<CardHome {...props} />)
		fireEvent.click(screen.getByRole('button'))
		expect(mockPush).toHaveBeenCalledWith('/software')
	})

	it('should have proper styles function', () => {
		const mobileStyles = styles(true)
		expect(mobileStyles).toBeDefined()
	})
})
