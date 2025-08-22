import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Book from '../Book'

describe('Book Component', () => {
	const mockProps = {
		author: 'Test Author',
		text: 'This is a test book description',
		href: 'https://example.com/book.pdf',
		imageUrl: 'test-book.jpg',
		isLandscape: false,
	}

	it('should render correctly with portrait orientation', () => {
		const { container } = render(<Book {...mockProps} />)
		expect(container.firstChild).toMatchSnapshot()
	})

	it('should render correctly with landscape orientation', () => {
		const landscapeProps = { ...mockProps, isLandscape: true }
		const { container } = render(<Book {...landscapeProps} />)
		expect(container.firstChild).toMatchSnapshot()
	})

	it('should render component structure', () => {
		const { container } = render(<Book {...mockProps} />)
		// Component should render without errors
		expect(container).toBeDefined()
	})
})
