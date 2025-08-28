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

describe('CardHome Basic Functionality', () => {
	beforeEach(() => {
		vi.clearAllMocks()
		;(useIsMobile as any).mockReturnValue(createMockStyles())
		;(useText as any).mockReturnValue({
			altText: { cardIcon: 'Card icon' },
		})
	})

	describe('Rendering', () => {
		it('should render card with all content correctly', () => {
			const props = createMockCardProps()
			const { container } = render(<CardHome {...props} />)

			expect(container.firstChild).toMatchSnapshot()
		})

		it('should render card title', () => {
			const props = createMockCardProps()
			render(<CardHome {...props} />)

			expect(screen.getByText('Software Solutions')).toBeInTheDocument()
		})

		it('should render card content', () => {
			const props = createMockCardProps()
			render(<CardHome {...props} />)

			expect(
				screen.getByText(
					'Advanced radiation dosimetry software for comprehensive dose management and analysis.',
				),
			).toBeInTheDocument()
		})

		it('should render card with image', () => {
			const props = createMockCardProps()
			render(<CardHome {...props} />)

			const image = screen.getByRole('img')
			expect(image).toBeInTheDocument()
			expect(image).toHaveAttribute('alt', 'Card icon - Software Solutions')
		})

		it('should render tilt wrapper component', () => {
			const props = createMockCardProps()
			render(<CardHome {...props} />)

			expect(screen.getByTestId('tilt-wrapper')).toBeInTheDocument()
		})
	})

	describe('Props Handling', () => {
		it('should handle different icon paths', () => {
			const props = createMockCardProps({ icon: '/Images/training-icon.png' })
			render(<CardHome {...props} />)

			const image = screen.getByRole('img')
			expect(image).toHaveAttribute('src', expect.stringContaining('training-icon.png'))
		})

		it('should handle different titles', () => {
			const props = createMockCardProps({ title: 'Training Programs' })
			render(<CardHome {...props} />)

			expect(screen.getByText('Training Programs')).toBeInTheDocument()
		})

		it('should handle different content', () => {
			const props = createMockCardProps({
				content: 'Comprehensive training programs for professionals.',
			})
			render(<CardHome {...props} />)

			expect(
				screen.getByText('Comprehensive training programs for professionals.'),
			).toBeInTheDocument()
		})

		it('should handle different routes', () => {
			const props = createMockCardProps({ route: '/training' })
			render(<CardHome {...props} />)

			const button = screen.getByRole('button')
			fireEvent.click(button)

			expect(mockPush).toHaveBeenCalledWith('/training')
		})
	})
})
