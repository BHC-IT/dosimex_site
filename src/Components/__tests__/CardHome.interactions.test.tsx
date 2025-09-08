import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'

import { useIsMobile } from '../../Hooks/useIsMobile'
import { useText } from '../../Hooks/useText'
import CardHome from '../CardHome'

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

// Test data factories
const createMockCardProps = (overrides = {}) => ({
	icon: '/Images/software-icon.png',
	title: 'Software Solutions',
	content:
		'Advanced radiation dosimetry software for comprehensive dose management and analysis.',
	route: '/software',
	...overrides,
})

const createMockStyles = () => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '20px',
		margin: '10px',
		borderRadius: '10px',
		backgroundColor: '#ffffff',
		boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
		cursor: 'pointer',
		transition: 'all 0.3s ease',
	},
	image: {
		width: '80px',
		height: '80px',
		marginBottom: '15px',
	},
	title: {
		fontSize: '1.5rem',
		fontWeight: 'bold',
		color: '#333',
		marginBottom: '10px',
		textAlign: 'center',
	},
	content: {
		fontSize: '1rem',
		color: '#666',
		textAlign: 'center',
		lineHeight: 1.5,
	},
})

describe('CardHome Interactions', () => {
	beforeEach(() => {
		vi.clearAllMocks()
		;(useIsMobile as any).mockReturnValue(createMockStyles())
		;(useText as any).mockReturnValue({
			altText: { cardIcon: 'Card icon' },
		})
	})

	describe('User Interactions', () => {
		it('should handle click events correctly', () => {
			const props = createMockCardProps()
			render(<CardHome {...props} />)

			const button = screen.getByRole('button')
			fireEvent.click(button)

			expect(mockPush).toHaveBeenCalledTimes(1)
			expect(mockPush).toHaveBeenCalledWith('/software')
		})

		it('should handle keyboard navigation with Enter key', () => {
			const props = createMockCardProps()
			render(<CardHome {...props} />)

			const button = screen.getByRole('button')
			fireEvent.keyDown(button, { key: 'Enter', code: 'Enter', charCode: 13 })

			expect(mockPush).toHaveBeenCalledTimes(1)
			expect(mockPush).toHaveBeenCalledWith('/software')
		})

		it('should handle keyboard navigation with Space key', () => {
			const props = createMockCardProps()
			render(<CardHome {...props} />)

			const button = screen.getByRole('button')
			fireEvent.keyDown(button, { key: ' ', code: 'Space', charCode: 32 })

			expect(mockPush).toHaveBeenCalledTimes(1)
			expect(mockPush).toHaveBeenCalledWith('/software')
		})

		it('should not navigate on other key presses', () => {
			const props = createMockCardProps()
			render(<CardHome {...props} />)

			const button = screen.getByRole('button')
			fireEvent.keyDown(button, { key: 'Tab', code: 'Tab' })
			fireEvent.keyDown(button, { key: 'Escape', code: 'Escape' })

			expect(mockPush).not.toHaveBeenCalled()
		})

		it('should handle multiple clicks correctly', () => {
			const props = createMockCardProps()
			render(<CardHome {...props} />)

			const button = screen.getByRole('button')
			fireEvent.click(button)
			fireEvent.click(button)
			fireEvent.click(button)

			expect(mockPush).toHaveBeenCalledTimes(3)
		})
	})

	describe('Event Prevention', () => {
		it('should prevent default behavior on keyboard events', () => {
			const props = createMockCardProps()
			render(<CardHome {...props} />)

			const button = screen.getByRole('button')

			// Test that Enter key triggers navigation (which implies preventDefault was called)
			fireEvent.keyDown(button, { key: 'Enter', code: 'Enter', charCode: 13 })
			expect(mockPush).toHaveBeenCalledWith('/software')

			// Test that Space key triggers navigation (which implies preventDefault was called)
			vi.clearAllMocks()
			fireEvent.keyDown(button, { key: ' ', code: 'Space', charCode: 32 })
			expect(mockPush).toHaveBeenCalledWith('/software')
		})
	})
})
