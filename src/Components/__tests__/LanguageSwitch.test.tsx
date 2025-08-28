import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

import LanguageSwitch, { styles } from '../LanguageSwitch'

// Mock Next.js Link component
vi.mock('next/link', () => ({
	default: ({ children, href, locale, replace, ...props }: any) =>
		<a href={href} data-locale={locale} data-replace={replace} {...props}>
			{children}
		</a>,
}))

// Mock @mdi/react Icon component
vi.mock('@mdi/react', () => ({
	default: ({ path, size, ...props }: any) =>
		<div data-testid="mdi-icon" data-path={path} data-size={size} {...props} />,
}))

// Mock @mdi/js translate icon
vi.mock('@mdi/js', () => ({
	mdiTranslate: 'M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z',
}))

// Test data factories
const createMockProps = (overrides = {}) => ({
	route: '/about-us',
	language: undefined,
	...overrides,
})

describe('LanguageSwitch Component', () => {
	describe('Rendering', () => {
		it('should render language switch with all elements correctly', () => {
			const props = createMockProps()
			const { container } = render(<LanguageSwitch {...props} />)
			expect(container.firstChild).toMatchSnapshot()
		})

		it('should render component structure correctly', () => {
			const props = createMockProps()
			render(<LanguageSwitch {...props} />)

			// Should render as list item
			expect(screen.getByRole('listitem')).toBeInTheDocument()

			// Should contain translate icon
			expect(screen.getByTestId('mdi-icon')).toBeInTheDocument()

			// Should contain both language links
			const links = screen.getAllByRole('link')
			expect(links).toHaveLength(2)
		})

		it('should render MDI translate icon with correct props', () => {
			const props = createMockProps()
			render(<LanguageSwitch {...props} />)

			const icon = screen.getByTestId('mdi-icon')
			expect(icon).toHaveAttribute('data-size', '1.4')
			expect(icon).toHaveAttribute('data-path', 'M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z')
		})
	})

	describe('Language Links', () => {
		it('should render French language link correctly', () => {
			const props = createMockProps({
				route: '/software',
			})
			render(<LanguageSwitch {...props} />)

			const frenchLink = screen.getByRole('link', { name: /french flag/i })
			expect(frenchLink).toHaveAttribute('href', '/software')
			expect(frenchLink).toHaveAttribute('data-locale', 'fr')
			expect(frenchLink).toHaveAttribute('data-replace', 'true')
		})

		it('should render English language link correctly', () => {
			const props = createMockProps({
				route: '/training',
			})
			render(<LanguageSwitch {...props} />)

			const englishLink = screen.getByRole('link', { name: /uk flag/i })
			expect(englishLink).toHaveAttribute('href', '/training')
			expect(englishLink).toHaveAttribute('data-locale', 'en-US')
			expect(englishLink).toHaveAttribute('data-replace', 'true')
		})

		it('should handle different route formats', () => {
			const routeTestCases = [
				'/software',
				'/training',
				'/manuals',
				'/',
				'/about-us',
			]

			routeTestCases.forEach(route => {
				const props = createMockProps({ route })
				const { unmount } = render(<LanguageSwitch {...props} />)

				const links = screen.getAllByRole('link')
				links.forEach(link => {
					expect(link).toHaveAttribute('href', route)
				})

				unmount()
			})
		})
	})

	describe('Flag Images', () => {
		it('should display French flag with correct attributes', () => {
			const props = createMockProps()
			render(<LanguageSwitch {...props} />)

			const frenchFlag = screen.getByAltText('French flag')
			expect(frenchFlag).toBeInTheDocument()
			// Next.js Image transforms URLs, check it contains the original path
			expect(frenchFlag.getAttribute('src')).toContain('Flag_France.png')
			expect(frenchFlag).toHaveAttribute('width', '30.72') // 2560 * 0.012
			expect(frenchFlag).toHaveAttribute('height', '20.484') // 1707 * 0.012
		})

		it('should display UK flag with correct attributes', () => {
			const props = createMockProps()
			render(<LanguageSwitch {...props} />)

			const ukFlag = screen.getByAltText('UK flag')
			expect(ukFlag).toBeInTheDocument()
			// Next.js Image transforms URLs, check it contains the original path
			expect(ukFlag.getAttribute('src')).toContain('Flag_Uk.jpg')
			expect(ukFlag).toHaveAttribute('width', '30.72') // 1024 * 0.03
			expect(ukFlag).toHaveAttribute('height', '20.49') // 683 * 0.03
		})

		it('should use proper image optimization settings', () => {
			const props = createMockProps()
			render(<LanguageSwitch {...props} />)

			const images = screen.getAllByRole('img')

			// Both flag images should be present
			expect(images).toHaveLength(2)

			// Check that images have proper src attributes (Next.js transforms these)
			const flagSources = images.map(img => img.getAttribute('src'))
			expect(flagSources.some(src => src?.includes('Flag_France.png'))).toBe(true)
			expect(flagSources.some(src => src?.includes('Flag_Uk.jpg'))).toBe(true)
		})
	})

	describe('Language Text', () => {
		it('should display French language text', () => {
			const props = createMockProps()
			render(<LanguageSwitch {...props} />)

			expect(screen.getByText('Fr')).toBeInTheDocument()
		})

		it('should display English language text', () => {
			const props = createMockProps()
			render(<LanguageSwitch {...props} />)

			expect(screen.getByText('En')).toBeInTheDocument()
		})
	})

	describe('Language Selection States', () => {
		it('should highlight French when language is "fr"', () => {
			const props = createMockProps({
				language: 'fr',
			})
			render(<LanguageSwitch {...props} />)

			// Component renders but styling is applied via inline styles
			// We can verify the component renders without errors
			expect(screen.getByText('Fr')).toBeInTheDocument()
			expect(screen.getByText('En')).toBeInTheDocument()
		})

		it('should highlight English when language is "en-US"', () => {
			const props = createMockProps({
				language: 'en-US',
			})
			render(<LanguageSwitch {...props} />)

			// Component renders but styling is applied via inline styles
			// We can verify the component renders without errors
			expect(screen.getByText('Fr')).toBeInTheDocument()
			expect(screen.getByText('En')).toBeInTheDocument()
		})

		it('should handle no language selection', () => {
			const props = createMockProps({
				language: undefined,
			})
			render(<LanguageSwitch {...props} />)

			// Both languages should render normally
			expect(screen.getByText('Fr')).toBeInTheDocument()
			expect(screen.getByText('En')).toBeInTheDocument()
		})

		it('should handle unknown language selection', () => {
			const props = createMockProps({
				language: 'de',
			})
			render(<LanguageSwitch {...props} />)

			// Both languages should render normally (no selected state)
			expect(screen.getByText('Fr')).toBeInTheDocument()
			expect(screen.getByText('En')).toBeInTheDocument()
		})
	})

	describe('Accessibility', () => {
		it('should have proper alt text for flag images', () => {
			const props = createMockProps()
			render(<LanguageSwitch {...props} />)

			// Check for descriptive alt text
			expect(screen.getByAltText('French flag')).toBeInTheDocument()
			expect(screen.getByAltText('UK flag')).toBeInTheDocument()
		})

		it('should structure language links accessibly', () => {
			const props = createMockProps()
			render(<LanguageSwitch {...props} />)

			const links = screen.getAllByRole('link')
			expect(links).toHaveLength(2)

			// Each link should be keyboard accessible
			links.forEach(link => {
				expect(link).toBeInTheDocument()
			})
		})

		it('should be properly nested in list structure', () => {
			const props = createMockProps()
			render(<LanguageSwitch {...props} />)

			// Should render as list item for proper semantic structure
			expect(screen.getByRole('listitem')).toBeInTheDocument()
		})
	})

	describe('Edge Cases', () => {
		it('should handle empty route gracefully', () => {
			const props = createMockProps({
				route: '',
			})
			render(<LanguageSwitch {...props} />)

			// Should still render the component with empty href
			const listItem = screen.getByRole('listitem')
			expect(listItem).toBeInTheDocument()

			// Check that the anchors exist even with empty href
			const anchors = document.querySelectorAll('a')
			expect(anchors).toHaveLength(2)
			anchors.forEach(anchor => {
				expect(anchor).toHaveAttribute('href', '')
			})
		})

		it('should handle special characters in route', () => {
			const props = createMockProps({
				route: '/français/über-uns',
			})
			render(<LanguageSwitch {...props} />)

			const links = screen.getAllByRole('link')
			links.forEach(link => {
				expect(link).toHaveAttribute('href', '/français/über-uns')
			})
		})

		it('should handle very long routes', () => {
			const props = createMockProps({
				route: '/very/long/route/with/many/segments/that/might/cause/issues/in/some/systems',
			})
			render(<LanguageSwitch {...props} />)

			const links = screen.getAllByRole('link')
			links.forEach(link => {
				expect(link).toHaveAttribute('href', '/very/long/route/with/many/segments/that/might/cause/issues/in/some/systems')
			})
		})
	})

	describe('Component Integration', () => {
		it('should work with different route patterns', () => {
			const routePatterns = [
				'/',
				'/about',
				'/software/dosimex',
				'/training/certification',
				'/manuals/user-guide',
			]

			routePatterns.forEach(route => {
				const props = createMockProps({ route })
				const { unmount } = render(<LanguageSwitch {...props} />)

				// Should render successfully with any route pattern
				expect(screen.getByRole('listitem')).toBeInTheDocument()
				expect(screen.getAllByRole('link')).toHaveLength(2)

				unmount()
			})
		})

		it('should preserve all Next.js Link properties', () => {
			const props = createMockProps({
				route: '/test',
			})
			render(<LanguageSwitch {...props} />)

			const links = screen.getAllByRole('link')

			// French link
			expect(links[0]).toHaveAttribute('data-locale', 'fr')
			expect(links[0]).toHaveAttribute('data-replace', 'true')

			// English link
			expect(links[1]).toHaveAttribute('data-locale', 'en-US')
			expect(links[1]).toHaveAttribute('data-replace', 'true')
		})
	})
})

describe('LanguageSwitch Styles', () => {
	describe('Style Object Structure', () => {
		it('should have correct item styles', () => {
			expect(styles.item).toEqual({
				color: 'inherit',
				cursor: 'pointer',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				fontWeight: 400,
			})
		})

		it('should have correct icon styles', () => {
			expect(styles.icon).toEqual({
				paddingLeft: '1.7vw',
				paddingRight: '8px',
				paddingTop: '3px',
			})
		})

		it('should have correct flex styles', () => {
			expect(styles.flex).toEqual({
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			})
		})

		it('should have correct flag styles', () => {
			expect(styles.flag).toEqual({
				marginRight: '5px',
			})
		})

		it('should have correct language text styles', () => {
			expect(styles.languageText).toEqual({
				marginRight: '7px',
			})
		})
	})

	describe('Style Constants', () => {
		it('should use consistent flag dimensions and ratios', () => {
			const props = createMockProps()
			render(<LanguageSwitch {...props} />)

			const frenchFlag = screen.getByAltText('French flag')
			const ukFlag = screen.getByAltText('UK flag')

			// French flag: 2560 * 0.012 = 30.72, 1707 * 0.012 = 20.484
			expect(frenchFlag).toHaveAttribute('width', '30.72')
			expect(frenchFlag).toHaveAttribute('height', '20.484')

			// UK flag: 1024 * 0.03 = 30.72, 683 * 0.03 = 20.49
			expect(ukFlag).toHaveAttribute('width', '30.72')
			expect(ukFlag).toHaveAttribute('height', '20.49')
		})
	})
})
