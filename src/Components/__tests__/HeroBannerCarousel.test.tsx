import { render } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

import HeroBannerCarousel, { styles } from '../HeroBannerCarousel'

// Mock useIsMobile hook
vi.mock('../../Hooks/useIsMobile', () => ({
	useIsMobile: vi.fn(() => styles()),
}))

// Mock window.innerWidth
Object.defineProperty(window, 'innerWidth', {
	writable: true,
	configurable: true,
	value: 1024,
})

describe('HeroBannerCarousel Component', () => {
	const mockText = ['Text 1', 'Text 2', 'Text 3', 'Text 4']

	it('should render with text array', () => {
		const { container } = render(<HeroBannerCarousel text={mockText} />)
		expect(container).toBeInTheDocument()
	})

	it('should render without text (fixed with TypeScript improvements)', () => {
		// After TypeScript fixes, this should handle undefined text gracefully
		const { container } = render(<HeroBannerCarousel />)
		expect(container).toBeInTheDocument()
	})

	it('should match snapshot with text', () => {
		const { container } = render(<HeroBannerCarousel text={mockText} />)
		expect(container.firstChild).toMatchSnapshot()
	})

	it('should handle undefined text after TypeScript fixes', () => {
		// After TypeScript fixes, this should handle undefined text gracefully
		const { container } = render(<HeroBannerCarousel text={undefined} />)
		expect(container).toBeInTheDocument()
	})

	it('should handle different text lengths', () => {
		const shortText = ['Text 1', 'Text 2']
		const { container } = render(<HeroBannerCarousel text={shortText} />)
		expect(container).toBeInTheDocument()
	})
})
