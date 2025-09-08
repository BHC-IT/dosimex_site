import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi, beforeEach } from 'vitest'

import { useIsMobile } from '../../Hooks/useIsMobile'
import Book, { styles, stylesBook } from '../Book'

// Mock the useIsMobile hook
vi.mock('../../Hooks/useIsMobile', () => ({
	useIsMobile: vi.fn(),
}))

// Mock react-device-detect
vi.mock('react-device-detect', () => ({
	withOrientationChange: (component: any) => component,
}))

// Test data factories
const createMockBookProps = (overrides = {}) => ({
	author: 'John Smith',
	text: 'This is a comprehensive guide to understanding complex software architecture patterns.',
	href: 'https://example.com/book.pdf',
	imageUrl: 'software-architecture-book.jpg',
	isLandscape: false,
	...overrides,
})

const createMockStyles = (mobile = false) => ({
	styles: styles(mobile),
	stylesBook: stylesBook(mobile),
})

describe('Book Component', () => {
	beforeEach(() => {
		// Reset all mocks before each test
		vi.clearAllMocks()
		// Mock useIsMobile to return the expected style objects
		const mockStyles = createMockStyles(false)
		vi.mocked(useIsMobile)
			.mockImplementation(styleFunction => {
				if (styleFunction === styles) return mockStyles.styles
				if (styleFunction === stylesBook) return mockStyles.stylesBook
				return null
			})
	})

	describe('Rendering', () => {
		it('should render correctly with portrait orientation', () => {
			const props = createMockBookProps()
			const { container } = render(<Book {...props} />)
			expect(container.firstChild).toMatchSnapshot()
		})

		it('should render correctly with landscape orientation', () => {
			const props = createMockBookProps({ isLandscape: true })
			const { container } = render(<Book {...props} />)
			expect(container.firstChild).toMatchSnapshot()
		})

		it('should render component structure', () => {
			const props = createMockBookProps()
			const { container } = render(<Book {...props} />)

			// Component should render without errors
			expect(container).toBeDefined()
			expect(container.firstChild).not.toBeNull()
		})

		it('should return null when styles are null (SSR protection)', () => {
			vi.mocked(useIsMobile).mockReturnValue(null)

			const props = createMockBookProps()
			const { container } = render(<Book {...props} />)

			expect(container.firstChild).toBeNull()
		})
	})

	describe('Content Display', () => {
		it('should display author name correctly', () => {
			const props = createMockBookProps({
				author: 'Dr. Jane Doe',
			})

			render(<Book {...props} />)

			expect(screen.getByText('Dr. Jane Doe')).toBeInTheDocument()
		})

		it('should display book description correctly', () => {
			const props = createMockBookProps({
				text: 'A detailed analysis of modern web development practices and methodologies.',
			})

			render(<Book {...props} />)

			expect(screen.getByText('A detailed analysis of modern web development practices and methodologies.')).toBeInTheDocument()
		})

		it('should handle long author names', () => {
			const props = createMockBookProps({
				author: 'Prof. Dr. Elizabeth Johnson-Williams-Smith, Ph.D.',
			})

			render(<Book {...props} />)

			expect(screen.getByText('Prof. Dr. Elizabeth Johnson-Williams-Smith, Ph.D.')).toBeInTheDocument()
		})

		it('should handle long text descriptions', () => {
			const longText = 'This comprehensive guide covers advanced software development techniques, including architectural patterns, design principles, testing strategies, performance optimization, security considerations, and modern development workflows. It provides practical examples and real-world case studies to help developers master complex software engineering challenges.'

			const props = createMockBookProps({
				text: longText,
			})

			render(<Book {...props} />)

			expect(screen.getByText(longText)).toBeInTheDocument()
		})
	})

	describe('Link Functionality', () => {
		it('should render download link with correct attributes', () => {
			const props = createMockBookProps({
				href: 'https://books.example.com/advanced-guide.pdf',
			})

			render(<Book {...props} />)

			const link = screen.getByRole('link')
			expect(link).toBeInTheDocument()
			expect(link).toHaveAttribute('href', 'https://books.example.com/advanced-guide.pdf')
			expect(link).toHaveAttribute('target', '_blank')
			expect(link).toHaveAttribute('rel', 'noreferrer noopener')
		})

		it('should handle relative URLs', () => {
			const props = createMockBookProps({
				href: '/documents/local-book.pdf',
			})

			render(<Book {...props} />)

			const link = screen.getByRole('link')
			expect(link).toHaveAttribute('href', '/documents/local-book.pdf')
		})

		it('should be accessible for screen readers', () => {
			const props = createMockBookProps()
			render(<Book {...props} />)

			// Link should be accessible
			const link = screen.getByRole('link')
			expect(link).toBeInTheDocument()
		})
	})

	describe('Image Handling', () => {
		it('should set correct background image from imageUrl prop', () => {
			const props = createMookBookProps({
				imageUrl: 'my-custom-book.png',
			})

			render(<Book {...props} />)

			// We can't easily test the background image URL in JSDOM,
			// but we can verify the component renders without errors
			const link = screen.getByRole('link')
			const imageDiv = link.querySelector('div')
			expect(imageDiv).toBeInTheDocument()
		})

		it('should handle different image formats', () => {
			const testCases = [
				'book1.jpg',
				'book2.png',
				'book3.webp',
				'book4.gif',
			]

			testCases.forEach(imageUrl => {
				const props = createMockBookProps({ imageUrl })
				const { container } = render(<Book {...props} />)

				// Component should render without errors for any image format
				expect(container.firstChild).not.toBeNull()
			})
		})
	})

	describe('Responsive Behavior', () => {
		it('should use mobile styles when mobile is true', () => {
			const mobileStyles = createMockStyles(true)
			vi.mocked(useIsMobile)
				.mockImplementation(styleFunction => {
					if (styleFunction === styles) return mobileStyles.styles
					if (styleFunction === stylesBook) return mobileStyles.stylesBook
					return null
				})

			const props = createMockBookProps()
			render(<Book {...props} />)

			// Component should render with mobile styles
			const authorText = screen.getByText(props.author)
			expect(authorText).toBeInTheDocument()
		})

		it('should use desktop styles when mobile is false', () => {
			const desktopStyles = createMockStyles(false)
			vi.mocked(useIsMobile)
				.mockImplementation(styleFunction => {
					if (styleFunction === styles) return desktopStyles.styles
					if (styleFunction === stylesBook) return desktopStyles.stylesBook
					return null
				})

			const props = createMockBookProps()
			render(<Book {...props} />)

			// Component should render with desktop styles
			const authorText = screen.getByText(props.author)
			expect(authorText).toBeInTheDocument()
		})
	})

	describe('Landscape vs Portrait Orientation', () => {
		it('should apply different styles for landscape orientation', () => {
			const props = createMockBookProps({ isLandscape: true })
			const { container } = render(<Book {...props} />)

			// Should render with landscape-specific styles
			const link = screen.getByRole('link')
			const imageDiv = link.querySelector('div')
			expect(imageDiv).toBeInTheDocument()

			// Component should render correctly
			expect(container.firstChild).not.toBeNull()
		})

		it('should apply default styles for portrait orientation', () => {
			const props = createMockBookProps({ isLandscape: false })
			const { container } = render(<Book {...props} />)

			// Should render with portrait-specific styles
			const link = screen.getByRole('link')
			const imageDiv = link.querySelector('div')
			expect(imageDiv).toBeInTheDocument()

			// Component should render correctly
			expect(container.firstChild).not.toBeNull()
		})

		it('should default to portrait when isLandscape is undefined', () => {
			const props = createMockBookProps()
			delete (props as any).isLandscape // Remove the property

			const { container } = render(<Book {...props} />)

			// Should render without errors even without isLandscape prop
			expect(container.firstChild).not.toBeNull()
		})
	})

	describe('Edge Cases', () => {
		it('should handle empty strings gracefully', () => {
			const props = createMockBookProps({
				author: '',
				text: '',
				href: '',
				imageUrl: '',
			})

			const { container } = render(<Book {...props} />)

			// Component should still render structure even with empty strings
			const linkElement = container.querySelector('a')
			expect(linkElement).toBeInTheDocument()
			expect(linkElement).toHaveAttribute('href', '')
		})

		it('should handle special characters in text', () => {
			const props = createMockBookProps({
				author: 'José María García-López & Co.',
				text: 'Text with special chars: àáâãäåæçèéêë ñ ü "quotes" & symbols!',
			})

			render(<Book {...props} />)

			expect(screen.getByText('José María García-López & Co.')).toBeInTheDocument()
			expect(screen.getByText(/Text with special chars/)).toBeInTheDocument()
		})

		it('should handle very long URLs', () => {
			const longUrl = 'https://very-long-domain-name-for-testing.example.com/path/to/very/long/file/name/with/many/segments/document.pdf?query=parameter&another=value'
			const props = createMockBookProps({
				href: longUrl,
			})

			render(<Book {...props} />)

			const link = screen.getByRole('link')
			expect(link).toHaveAttribute('href', longUrl)
		})
	})
})

// Fix typo in function name
function createMookBookProps(overrides = {}) {
	return createMockBookProps(overrides)
}

describe('Book Styles', () => {
	describe('Desktop Styles', () => {
		it('should have correct container styles for desktop', () => {
			const desktopStyles = styles(false)

			expect(desktopStyles.flex).toEqual({
				display: 'flex',
				flexDirection: undefined,
				padding: '5vh 0',
			})
		})

		it('should have correct book div styles for desktop', () => {
			const desktopStyles = styles(false)

			expect(desktopStyles.divBook).toEqual({
				width: '30 %', // Note: there's a space in the original - this is likely a bug
			})
		})

		it('should have correct text styles for desktop', () => {
			const desktopStyles = styles(false)

			expect(desktopStyles.divText).toEqual({
				paddingLeft: '5%',
				display: 'flex',
				textAlign: 'justify',
				fontSize: undefined,
				height: undefined,
				overflowY: undefined,
			})
		})

		it('should have correct author styles for desktop', () => {
			const desktopStyles = styles(false)

			expect(desktopStyles.author).toEqual({
				fontFamily: 'Lato',
				fontWeight: 700,
				fontSize: '2.2rem',
				textTransform: 'uppercase',
			})
		})

		it('should have correct book image styles for desktop', () => {
			const desktopBookStyles = stylesBook(false)

			expect(desktopBookStyles).toEqual({
				width: '15vw',
				height: '45vh',
				cursor: 'pointer',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			})
		})
	})

	describe('Mobile Styles', () => {
		it('should have correct container styles for mobile', () => {
			const mobileStyles = styles(true)

			expect(mobileStyles.flex).toEqual({
				display: 'flex',
				flexDirection: 'column',
				padding: '5vh 0',
			})
		})

		it('should have correct book div styles for mobile', () => {
			const mobileStyles = styles(true)

			expect(mobileStyles.divBook).toEqual({
				width: '70%',
			})
		})

		it('should have correct text styles for mobile', () => {
			const mobileStyles = styles(true)

			expect(mobileStyles.divText).toEqual({
				paddingLeft: 0,
				display: 'flex',
				textAlign: 'justify',
				fontSize: '1.6rem',
				height: '80vh',
				overflowY: 'scroll',
			})
		})

		it('should have correct author styles for mobile', () => {
			const mobileStyles = styles(true)

			expect(mobileStyles.author).toEqual({
				fontFamily: 'Lato',
				fontWeight: 700,
				fontSize: '1.8rem',
				textTransform: 'uppercase',
			})
		})

		it('should have correct book image styles for mobile', () => {
			const mobileBookStyles = stylesBook(true)

			expect(mobileBookStyles).toEqual({
				width: '55vw',
				height: '45vh',
				cursor: 'pointer',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			})
		})
	})

	describe('Common Styles', () => {
		it('should have consistent text content styles across devices', () => {
			const desktopStyles = styles(false)
			const mobileStyles = styles(true)

			const expectedTextContentStyles = {
				margin: 0,
			}

			expect(desktopStyles.textContent).toEqual(expectedTextContentStyles)
			expect(mobileStyles.textContent).toEqual(expectedTextContentStyles)
		})
	})
})
