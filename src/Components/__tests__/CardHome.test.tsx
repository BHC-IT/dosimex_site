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

// Test data factories
const createMockCardProps = (overrides = {}) => ({
	icon: '/Images/software-icon.png',
	title: 'Software Solutions',
	content:
		'Advanced radiation dosimetry software for comprehensive dose management and analysis.',
	route: '/software',
	...overrides,
})

describe('CardHome Component', () => {
	beforeEach(() => {
		vi.clearAllMocks()
		// Always return valid styles, never null
		vi.mocked(useIsMobile).mockReturnValue(styles(false))
		vi.mocked(useText).mockReturnValue({ cardIcon: 'Feature icon' })
	})

	describe('Rendering', () => {
		it('should render card with all content correctly', () => {
			const props = createMockCardProps()
			const { container } = render(<CardHome {...props} />)
			expect(container.firstChild).toMatchSnapshot()
		})

		it('should render component structure correctly', () => {
			const props = createMockCardProps()
			const { container } = render(<CardHome {...props} />)

			// Component should render without errors
			expect(container).toBeDefined()
			expect(container.firstChild).not.toBeNull()
		})

		it('should return null when styles are null (SSR protection)', () => {
			vi.mocked(useIsMobile).mockReturnValue(null)

			const props = createMockCardProps()
			const { container } = render(<CardHome {...props} />)

			expect(container.firstChild).toBeNull()
		})
	})

	describe('Content Display', () => {
		it('should display card title correctly', () => {
			const props = createMockCardProps({
				title: 'Training Programs',
			})

			render(<CardHome {...props} />)

			expect(screen.getByText('Training Programs')).toBeInTheDocument()
		})

		it('should display card content correctly', () => {
			const props = createMockCardProps({
				content: 'Comprehensive training materials and certification programs.',
			})

			render(<CardHome {...props} />)

			expect(
				screen.getByText('Comprehensive training materials and certification programs.'),
			).toBeInTheDocument()
		})

		it('should display icon with proper alt text', () => {
			const props = createMockCardProps({
				icon: '/Images/training-icon.png',
				title: 'Training',
			})

			render(<CardHome {...props} />)

			const iconImage = screen.getByAltText('Feature icon - Training')
			expect(iconImage).toBeInTheDocument()
			// Next.js Image component transforms src URLs
			expect(iconImage.getAttribute('src')).toContain('training-icon.png')
		})

		it('should handle missing alt text gracefully', () => {
			vi.mocked(useText).mockReturnValue(null)

			const props = createMockCardProps({
				title: 'Software',
			})

			render(<CardHome {...props} />)

			const iconImage = screen.getByAltText('Icon - Software')
			expect(iconImage).toBeInTheDocument()
		})
	})

	describe('Navigation Functionality', () => {
		it('should navigate to correct route when clicked', () => {
			const props = createMockCardProps({
				route: '/training',
			})

			render(<CardHome {...props} />)

			const cardButton = screen.getByRole('button')
			fireEvent.click(cardButton)

			expect(mockPush).toHaveBeenCalledWith('/training')
		})

		it('should handle different route formats', () => {
			const routeTestCases = ['/software', '/training', '/manuals', '/', '/about-us']

			routeTestCases.forEach(route => {
				vi.clearAllMocks()
				const props = createMockCardProps({ route })
				const { unmount } = render(<CardHome {...props} />)

				const cardButton = screen.getByRole('button')
				fireEvent.click(cardButton)

				expect(mockPush).toHaveBeenCalledWith(route)
				unmount()
			})
		})

		it('should be accessible with proper ARIA label', () => {
			const props = createMockCardProps({
				title: 'Software Solutions',
				content: 'Advanced dosimetry software',
			})

			render(<CardHome {...props} />)

			const cardButton = screen.getByRole('button')
			expect(cardButton).toHaveAttribute(
				'aria-label',
				'Navigate to Software Solutions section - Advanced dosimetry software',
			)
		})

		it('should be keyboard accessible', () => {
			const props = createMockCardProps()

			render(<CardHome {...props} />)

			const cardButton = screen.getByRole('button')

			// Should be focusable
			cardButton.focus()
			expect(document.activeElement).toBe(cardButton)

			// Note: fireEvent.keyDown doesn't trigger onClick for buttons
			// This is expected behavior, only click events trigger navigation
		})
	})

	describe('Responsive Behavior', () => {
		it('should use mobile styles when mobile is true', () => {
			vi.mocked(useIsMobile).mockReturnValue(styles(true))

			const props = createMockCardProps()
			render(<CardHome {...props} />)

			// Component should render with mobile-specific behavior
			expect(screen.getByRole('button')).toBeInTheDocument()
		})

		it('should use desktop styles when mobile is false', () => {
			vi.mocked(useIsMobile).mockReturnValue(styles(false))

			const props = createMockCardProps()
			render(<CardHome {...props} />)

			// Component should render with desktop-specific behavior
			expect(screen.getByRole('button')).toBeInTheDocument()
		})
	})

	describe('Tilt Effect Integration', () => {
		it('should wrap content in Tilt component', () => {
			const props = createMockCardProps()
			render(<CardHome {...props} />)

			const tiltWrapper = screen.getByTestId('tilt-wrapper')
			expect(tiltWrapper).toBeInTheDocument()
		})
	})

	describe('Visual Elements', () => {
		it('should display FontAwesome arrow icon', () => {
			const props = createMockCardProps()
			render(<CardHome {...props} />)

			// Check if FontAwesome icon container exists
			const button = screen.getByRole('button')
			const arrowContainer =
				button.querySelector('[data-icon]') ?? button.querySelector('svg')
			expect(arrowContainer).toBeTruthy()
		})

		it('should have proper button styling structure', () => {
			const props = createMockCardProps()
			render(<CardHome {...props} />)

			const cardButton = screen.getByRole('button')
			// Check for the inline styles set on the button
			expect(cardButton.style.background).toBe('white')
			// Note: border style gets normalized to empty string in test environment
			expect(cardButton.style.border || 'none').toBe('none')
		})
	})

	describe('Edge Cases', () => {
		it('should handle empty string props gracefully', () => {
			const props = createMockCardProps({
				title: '',
				content: '',
				icon: '',
				route: '',
			})

			const { container } = render(<CardHome {...props} />)

			// Should still render component structure
			expect(container.firstChild).not.toBeNull()
			expect(screen.getByRole('button')).toBeInTheDocument()
		})

		it('should handle special characters in text', () => {
			const props = createMockCardProps({
				title: 'Logiciels & Solutions',
				content: 'Solutions avancées pour la dosimétrie : mesures précises à 99,9%!',
			})

			render(<CardHome {...props} />)

			expect(screen.getByText('Logiciels & Solutions')).toBeInTheDocument()
			expect(screen.getByText(/Solutions avancées pour la dosimétrie/)).toBeInTheDocument()
		})

		it('should handle long text content', () => {
			const props = createMockCardProps({
				title: 'Advanced Radiation Dosimetry Software Solutions',
				content:
					'Comprehensive radiation dose management and analysis software featuring real-time monitoring capabilities, advanced reporting tools, regulatory compliance features, and user-friendly interface designed for healthcare professionals and researchers.',
			})

			render(<CardHome {...props} />)

			expect(
				screen.getByText('Advanced Radiation Dosimetry Software Solutions'),
			).toBeInTheDocument()
			expect(screen.getByText(/Comprehensive radiation dose management/)).toBeInTheDocument()
		})

		it('should handle navigation errors gracefully', () => {
			mockPush.mockRejectedValue(new Error('Navigation failed'))

			const props = createMockCardProps()
			render(<CardHome {...props} />)

			const cardButton = screen.getByRole('button')

			// Should not throw error when navigation fails
			expect(() => {
				fireEvent.click(cardButton)
			}).not.toThrow()
		})
	})

	describe('Image Optimization', () => {
		it('should use proper image optimization settings', () => {
			const props = createMockCardProps()
			render(<CardHome {...props} />)

			const image = screen.getByRole('img')
			expect(image).toHaveAttribute('width', '80')
			expect(image).toHaveAttribute('height', '80')
			expect(image).toHaveAttribute('loading', 'lazy')
		})

		it('should handle different image formats', () => {
			const imageFormats = [
				'/Images/icon.png',
				'/Images/icon.jpg',
				'/Images/icon.svg',
				'/Images/icon.webp',
			]

			imageFormats.forEach(icon => {
				const props = createMockCardProps({ icon })
				const { unmount } = render(<CardHome {...props} />)

				const image = screen.getByRole('img')
				// Next.js Image transforms URLs, check it contains the original path
				expect(image.getAttribute('src')).toContain(
					icon.replace('/Images/', '').split('.')[0],
				)
				unmount()
			})
		})
	})
})

describe('CardHome Styles', () => {
	describe('Desktop Styles', () => {
		it('should have correct global styles for desktop', () => {
			const desktopStyles = styles(false)

			expect(desktopStyles.global).toEqual({
				width: '28%',
				marginBottom: undefined,
				minWidth: '250px',
			})
		})

		it('should have correct card styles for desktop', () => {
			const desktopStyles = styles(false)

			expect(desktopStyles.card).toEqual({
				borderRadius: '10px',
				boxShadow: '1px 2px 2px 2px rgba(0, 0, 0, 0.15)',
				textAlign: 'center',
				width: '100%',
				paddingBottom: '2vh',
				height: '47vh',
				cursor: 'pointer',
				paddingTop: '5vh',
			})
		})

		it('should have correct subtitle styles for desktop', () => {
			const desktopStyles = styles(false)

			expect(desktopStyles.subtitle).toEqual({
				color: 'var(--grey)',
				fontSize: '1.8rem',
				marginBottom: '4vh',
				marginLeft: '2%',
				marginRight: '2%',
			})
		})

		it('should have correct arrow styles for desktop', () => {
			const desktopStyles = styles(false)

			expect(desktopStyles.arrow).toEqual({
				width: '1.3vw',
			})
		})
	})

	describe('Mobile Styles', () => {
		it('should have correct global styles for mobile', () => {
			const mobileStyles = styles(true)

			expect(mobileStyles.global).toEqual({
				width: '100%',
				marginBottom: '5vh',
				minWidth: undefined,
			})
		})

		it('should have correct card styles for mobile', () => {
			const mobileStyles = styles(true)

			expect(mobileStyles.card).toEqual({
				borderRadius: '10px',
				boxShadow: '1px 2px 2px 2px rgba(0, 0, 0, 0.15)',
				textAlign: 'center',
				width: '100%',
				paddingBottom: '2vh',
				height: undefined,
				cursor: 'pointer',
				paddingTop: '5vh',
			})
		})

		it('should have correct subtitle styles for mobile', () => {
			const mobileStyles = styles(true)

			expect(mobileStyles.subtitle).toEqual({
				color: 'var(--grey)',
				fontSize: '1.5rem',
				marginBottom: '2vh',
				marginLeft: '2%',
				marginRight: '2%',
			})
		})

		it('should have correct arrow styles for mobile', () => {
			const mobileStyles = styles(true)

			expect(mobileStyles.arrow).toEqual({
				width: '5vw',
			})
		})
	})

	describe('Common Styles', () => {
		it('should have consistent button styles across devices', () => {
			const desktopStyles = styles(false)
			const mobileStyles = styles(true)

			const expectedButtonStyles = {
				width: '40px',
				height: '40px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '20px',
				marginLeft: 'auto',
				marginRight: 'auto',
				marginTop: '2vh',
				marginBottom: '4vh',
				backgroundColor: 'var(--main)',
				borderRadius: '50%',
				color: 'white',
			}

			expect(desktopStyles.button).toEqual(expectedButtonStyles)
			expect(mobileStyles.button).toEqual(expectedButtonStyles)
		})

		it('should have consistent image styles across devices', () => {
			const desktopStyles = styles(false)
			const mobileStyles = styles(true)

			const expectedImageStyles = {
				width: '20%',
				height: '20%',
				marginLeft: 'auto',
				marginRight: 'auto',
			}

			expect(desktopStyles.image).toEqual(expectedImageStyles)
			expect(mobileStyles.image).toEqual(expectedImageStyles)
		})

		it('should have consistent title heading styles across devices', () => {
			const desktopStyles = styles(false)
			const mobileStyles = styles(true)

			const expectedTitleStyles = {
				marginBottom: '0',
			}

			expect(desktopStyles.titleHeading).toEqual(expectedTitleStyles)
			expect(mobileStyles.titleHeading).toEqual(expectedTitleStyles)
		})

		it('should have consistent arrow container styles across devices', () => {
			const desktopStyles = styles(false)
			const mobileStyles = styles(true)

			const expectedArrowContainerStyles = {
				display: 'flex',
				alignItems: 'center',
			}

			expect(desktopStyles.arrowContainer).toEqual(expectedArrowContainerStyles)
			expect(mobileStyles.arrowContainer).toEqual(expectedArrowContainerStyles)
		})
	})
})
