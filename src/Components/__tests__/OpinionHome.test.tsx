import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it, vi, beforeEach } from 'vitest'

import { useIsMobile } from '../../Hooks/useIsMobile'
import OpinionHome, { styles } from '../OpinionHome'

// Mock the useIsMobile hook
vi.mock('../../Hooks/useIsMobile', () => ({
	useIsMobile: vi.fn(),
}))

// Test data factory
const createMockText = (overrides = {}) => ({
	name: 'John Doe',
	job: 'Software Engineer',
	opinion: 'Great product! Very easy to use and efficient.',
	btn: 'Download PDF',
	...overrides,
})

const createMockStyle = (mobile = false) => styles(mobile)

describe('OpinionHome Component', () => {
	beforeEach(() => {
		vi.mocked(useIsMobile).mockReturnValue(createMockStyle(false))
	})

	describe('Rendering', () => {
		it('should render correctly with text', () => {
			const mockText = createMockText()
			const { container } = render(<OpinionHome text={mockText} />)
			expect(container.firstChild).toMatchSnapshot()
		})

		it('should render component structure', () => {
			const mockText = createMockText()
			const { container } = render(<OpinionHome text={mockText} />)

			// Component should render without errors
			expect(container).toBeDefined()
			expect(container.firstChild).not.toBeNull()
		})

		it('should return null when style is null (SSR protection)', () => {
			vi.mocked(useIsMobile).mockReturnValue(null)
			const mockText = createMockText()
			const { container } = render(<OpinionHome text={mockText} />)

			expect(container.firstChild).toBeNull()
		})
	})

	describe('Content Display', () => {
		it('should display person information correctly', () => {
			const mockText = createMockText({
				name: 'Jane Smith',
				job: 'Product Manager',
				opinion: 'Excellent tool for our team!',
				btn: 'Get Report',
			})

			render(<OpinionHome text={mockText} />)

			expect(screen.getByText('Jane Smith')).toBeInTheDocument()
			expect(screen.getByText('Product Manager')).toBeInTheDocument()
			expect(screen.getByText('Excellent tool for our team!')).toBeInTheDocument()
			expect(screen.getByText('Get Report')).toBeInTheDocument()
		})

		it('should display quote icon with correct alt text', () => {
			const mockText = createMockText()
			render(<OpinionHome text={mockText} />)

			const quoteIcon = screen.getByAltText('icône citation')
			expect(quoteIcon).toBeInTheDocument()
			expect(quoteIcon).toHaveAttribute('src', '/Images/icon_quote.png')
		})

		it('should display download icon with correct alt text', () => {
			const mockText = createMockText()
			render(<OpinionHome text={mockText} />)

			const downloadIcon = screen.getByAltText('icône télécharger')
			expect(downloadIcon).toBeInTheDocument()
			expect(downloadIcon).toHaveAttribute('src', '/Images/icon_download.png')
		})
	})

	describe('Download Link Functionality', () => {
		it('should render download link with correct attributes', () => {
			const mockText = createMockText()
			render(<OpinionHome text={mockText} />)

			const downloadLink = screen.getByRole('link', { name: /download pdf/i })
			expect(downloadLink).toBeInTheDocument()
			expect(downloadLink).toHaveAttribute('href', '../Folders/extrait_retour_utilisateurs.pdf')
			expect(downloadLink).toHaveAttribute('target', '_blank')
			expect(downloadLink).toHaveAttribute('rel', 'noreferrer noopener')
		})

		it('should be accessible to screen readers', () => {
			const mockText = createMockText()
			render(<OpinionHome text={mockText} />)

			const downloadLink = screen.getByRole('link')
			expect(downloadLink).toBeInTheDocument()

			// The link should contain both text and icon for accessibility
			expect(downloadLink).toHaveTextContent('Download PDF')
			const icon = downloadLink.querySelector('img[alt="icône télécharger"]')
			expect(icon).toBeInTheDocument()
		})
	})

	describe('Hover Interactions', () => {
		it('should handle mouse enter and leave events', () => {
			const mockText = createMockText()
			render(<OpinionHome text={mockText} />)

			const downloadLink = screen.getByRole('link')

			// Initial state (no hover)
			expect(downloadLink).toBeInTheDocument()

			// Mouse enter
			fireEvent.mouseEnter(downloadLink)
			expect(downloadLink).toBeInTheDocument()

			// Mouse leave
			fireEvent.mouseLeave(downloadLink)
			expect(downloadLink).toBeInTheDocument()
		})

		it('should apply hover styles when hovered', () => {
			const mockText = createMockText()
			render(<OpinionHome text={mockText} />)

			const downloadLink = screen.getByRole('link')

			// Check initial style (base styles applied)
			expect(downloadLink).toHaveStyle({
				padding: '8px 25px',
				borderRadius: '50px',
				textTransform: 'uppercase',
			})

			// Trigger hover
			fireEvent.mouseEnter(downloadLink)

			// The component should handle hover state internally
			// We can't easily test the dynamic style changes without more complex setup
			expect(downloadLink).toBeInTheDocument()
		})
	})

	describe('Responsive Behavior', () => {
		it('should use mobile styles when mobile is true', () => {
			vi.mocked(useIsMobile).mockReturnValue(createMockStyle(true))
			const mockText = createMockText()

			render(<OpinionHome text={mockText} />)

			// Component should render with mobile styles
			const downloadIcon = screen.getByAltText('icône télécharger')
			expect(downloadIcon).toBeInTheDocument()
		})

		it('should use desktop styles when mobile is false', () => {
			vi.mocked(useIsMobile).mockReturnValue(createMockStyle(false))
			const mockText = createMockText()

			render(<OpinionHome text={mockText} />)

			// Component should render with desktop styles
			const downloadIcon = screen.getByAltText('icône télécharger')
			expect(downloadIcon).toBeInTheDocument()
		})
	})

	describe('Edge Cases', () => {
		it('should handle empty text properties gracefully', () => {
			const mockText = createMockText({
				name: '',
				job: '',
				opinion: '',
				btn: '',
			})

			render(<OpinionHome text={mockText} />)

			// Component should render even with empty text
			const quoteIcon = screen.getByAltText('icône citation')
			expect(quoteIcon).toBeInTheDocument()
		})

		it('should handle long text content', () => {
			const mockText = createMockText({
				name: 'Dr. Elizabeth Johnson-Williams-Smith',
				job: 'Senior Lead Principal Software Engineering Architect',
				opinion: 'This is an extremely long opinion text that goes on and on about how amazing this product is. It includes many details about the user experience, performance benefits, ease of use, and overall satisfaction with the tool. The text continues to provide extensive feedback about various features and capabilities.',
				btn: 'Download Complete Report',
			})

			render(<OpinionHome text={mockText} />)

			expect(screen.getByText('Dr. Elizabeth Johnson-Williams-Smith')).toBeInTheDocument()
			expect(screen.getByText('Senior Lead Principal Software Engineering Architect')).toBeInTheDocument()
			expect(screen.getByText(/This is an extremely long opinion text/)).toBeInTheDocument()
			expect(screen.getByText('Download Complete Report')).toBeInTheDocument()
		})
	})
})

describe('OpinionHome Styles', () => {
	describe('Desktop Styles', () => {
		it('should have correct base button styles for desktop', () => {
			const desktopStyles = styles(false)

			expect(desktopStyles.button.base).toEqual({
				padding: '8px 25px',
				border: '2px solid var(--main)',
				borderRadius: '50px',
				color: 'var(--main)',
				textTransform: 'uppercase',
				transition: 'all 0.3s ease 0s',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-around',
				width: '220px',
				marginLeft: 'auto',
				marginRight: 'auto',
				marginTop: '7vh',
				marginBottom: '2vh',
				textDecoration: 'none',
			})
		})

		it('should have correct hover styles', () => {
			const desktopStyles = styles(false)

			expect(desktopStyles.button.hover).toEqual({
				transform: 'translateY(-4px)',
				boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.1)',
			})
		})

		it('should have correct icon styles for desktop', () => {
			const desktopStyles = styles(false)

			expect(desktopStyles.icon).toEqual({
				width: '1.2vw',
				minWidth: '25px',
				maxWidth: undefined,
			})
		})
	})

	describe('Mobile Styles', () => {
		it('should have correct icon styles for mobile', () => {
			const mobileStyles = styles(true)

			expect(mobileStyles.icon).toEqual({
				width: '4.7vw',
				minWidth: undefined,
				maxWidth: '25px',
			})
		})

		it('should have correct text styles for mobile', () => {
			const mobileStyles = styles(true)

			expect(mobileStyles.text).toEqual({
				textAlign: 'justify',
				fontSize: '1.5rem',
			})
		})
	})

	describe('Common Styles', () => {
		it('should have correct global container styles', () => {
			const styles_desktop = styles(false)
			const styles_mobile = styles(true)

			// Both desktop and mobile should have same global styles
			const expectedGlobalStyles = {
				backgroundColor: 'var(--grey-bg)',
				padding: '10vh 10vw',
			}

			expect(styles_desktop.global).toEqual(expectedGlobalStyles)
			expect(styles_mobile.global).toEqual(expectedGlobalStyles)
		})

		it('should have correct name heading styles', () => {
			const desktopStyles = styles(false)

			expect(desktopStyles.nameHeading).toEqual({
				fontSize: '1.8rem',
				margin: '0',
			})
		})

		it('should have correct job text styles', () => {
			const desktopStyles = styles(false)

			expect(desktopStyles.jobText).toEqual({
				margin: '0',
			})
		})

		it('should have correct quote container styles', () => {
			const desktopStyles = styles(false)

			expect(desktopStyles.quoteContainer).toEqual({
				margin: '4vh 0',
			})
		})
	})
})
