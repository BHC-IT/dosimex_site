import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import OpinionHome from '../OpinionHome'

describe('OpinionHome Component', () => {
	const mockText = {
		name: 'John Doe',
		job: 'Software Engineer',
		opinion: 'Great product!',
		btn: 'Download PDF',
	}

	const mockProps = {
		text: mockText,
	}

	it('should render correctly with text', () => {
		const { container } = render(<OpinionHome {...mockProps} />)
		expect(container.firstChild).toMatchSnapshot()
	})

	it('should render component structure', () => {
		const { container } = render(<OpinionHome {...mockProps} />)
		// Component should render without errors
		expect(container).toBeDefined()
	})
})
