import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'

import { useIsMobile } from '../../Hooks/useIsMobile'
import References from '../References'

// Mock the useIsMobile hook
vi.mock('../../Hooks/useIsMobile', () => ({
	useIsMobile: vi.fn(),
}))

// Mock styles for different devices
const mockDesktopStyles = {
	global: { backgroundColor: 'white', padding: '10vh 10vw' },
	container: { maxWidth: '1200px', margin: '0 auto' },
	title: { textAlign: 'center', color: 'var(--dark)', fontSize: '3.6rem', marginBottom: '2vh' },
	subtitle: { textAlign: 'center', color: 'var(--grey)', fontSize: '1.8rem', marginBottom: '6vh', maxWidth: '800px', margin: '0 auto 6vh auto' },
	articlesContainer: { display: 'flex', flexDirection: 'row', gap: '3vw', justifyContent: 'center', alignItems: 'stretch' },
	articleCard: { backgroundColor: 'var(--grey-bg)', padding: '4vh 3vw', borderRadius: '20px', flex: 1, display: 'flex', flexDirection: 'column', maxWidth: '500px' },
	articleTitle: { color: 'var(--dark)', fontSize: '2.4rem', marginBottom: '2vh' },
	articleDescription: { color: 'var(--grey)', fontSize: '1.6rem', marginBottom: '3vh', lineHeight: 1.6, flex: 1 },
	button: {
		base: { padding: '8px 25px', border: '2px solid var(--main)', borderRadius: '50px', color: 'var(--main)', textTransform: 'uppercase', transition: 'all 0.3s ease 0s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', width: 'fit-content', marginTop: 'auto', textDecoration: 'none', fontSize: '1.6rem' },
		hover: { transform: 'translateY(-4px)', boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.1)', backgroundColor: 'var(--main)', color: 'white' },
	},
	icon: { width: '1.2vw', minWidth: '20px' },
}

const mockMobileStyles = {
	global: { backgroundColor: 'white', padding: '8vh 5vw' },
	container: { maxWidth: '1200px', margin: '0 auto' },
	title: { textAlign: 'center', color: 'var(--dark)', fontSize: '3rem', marginBottom: '2vh' },
	subtitle: { textAlign: 'center', color: 'var(--grey)', fontSize: '1.6rem', marginBottom: '6vh', maxWidth: '800px', margin: '0 auto 6vh auto' },
	articlesContainer: { display: 'flex', flexDirection: 'column', gap: '4vh', justifyContent: 'center', alignItems: 'stretch' },
	articleCard: { backgroundColor: 'var(--grey-bg)', padding: '4vh 4vw', borderRadius: '20px', flex: 1, display: 'flex', flexDirection: 'column', maxWidth: '100%' },
	articleTitle: { color: 'var(--dark)', fontSize: '2rem', marginBottom: '2vh' },
	articleDescription: { color: 'var(--grey)', fontSize: '1.4rem', marginBottom: '3vh', lineHeight: 1.6, flex: 1 },
	button: {
		base: { padding: '8px 25px', border: '2px solid var(--main)', borderRadius: '50px', color: 'var(--main)', textTransform: 'uppercase', transition: 'all 0.3s ease 0s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', width: 'fit-content', marginTop: 'auto', textDecoration: 'none', fontSize: '1.4rem' },
		hover: { transform: 'translateY(-4px)', boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.1)', backgroundColor: 'var(--main)', color: 'white' },
	},
	icon: { width: '4.7vw', maxWidth: '20px' },
}

const mockText = {
	title: 'Publications and References',
	subtitle: 'DOSIMEX is cited in numerous scientific publications and reference articles in radiation protection.',
	btnText: 'Download',
	article1: {
		title: 'Operational Radiation Protection Articles',
		description: 'Compilation of articles and publications where DOSIMEX is used as a reference.',
	},
	article2: {
		title: 'Academic Publications and Research',
		description: 'Selection of academic publications and scientific research citing DOSIMEX.',
	},
}

describe('References Component', () => {
	const useIsMobileMock = useIsMobile as ReturnType<typeof vi.fn>

	beforeEach(() => {
		vi.clearAllMocks()
	})

	describe('Rendering', () => {
		it('should render nothing when style is null', () => {
			useIsMobileMock.mockReturnValue(null)
			const { container } = render(<References text={mockText} />)
			expect(container.firstChild).toBeNull()
		})

		it('should render correctly with desktop styles', () => {
			useIsMobileMock.mockReturnValue(mockDesktopStyles)
			render(<References text={mockText} />)

			expect(screen.getByText('Publications and References')).toBeInTheDocument()
			expect(screen.getByText(/DOSIMEX is cited in numerous/)).toBeInTheDocument()
			expect(screen.getByText('Operational Radiation Protection Articles')).toBeInTheDocument()
			expect(screen.getByText('Academic Publications and Research')).toBeInTheDocument()
			expect(screen.getAllByText('Download')).toHaveLength(2)
		})

		it('should render correctly with mobile styles', () => {
			useIsMobileMock.mockReturnValue(mockMobileStyles)
			render(<References text={mockText} />)

			expect(screen.getByText('Publications and References')).toBeInTheDocument()
			expect(screen.getByText(/DOSIMEX is cited in numerous/)).toBeInTheDocument()
			expect(screen.getByText('Operational Radiation Protection Articles')).toBeInTheDocument()
			expect(screen.getByText('Academic Publications and Research')).toBeInTheDocument()
			expect(screen.getAllByText('Download')).toHaveLength(2)
		})

		it('should render download icons for each article', () => {
			useIsMobileMock.mockReturnValue(mockDesktopStyles)
			render(<References text={mockText} />)

			const icons = screen.getAllByAltText('icône télécharger')
			expect(icons).toHaveLength(2)
			icons.forEach(icon => {
				expect(icon).toHaveAttribute('src', '/Images/icon_download.png')
			})
		})
	})

	describe('Styling', () => {
		it('should apply correct desktop styles', () => {
			useIsMobileMock.mockReturnValue(mockDesktopStyles)
			const { container } = render(<References text={mockText} />)

			const globalDiv = container.firstChild as HTMLElement
			expect(globalDiv).toHaveStyle({ padding: '10vh 10vw' })

			const title = screen.getByText('Publications and References')
			expect(title).toHaveStyle({ fontSize: '3.6rem' })

			const buttons = screen.getAllByText('Download')
			buttons.forEach(button => {
				expect(button).toHaveStyle({ fontSize: '1.6rem' })
			})
		})

		it('should apply correct mobile styles', () => {
			useIsMobileMock.mockReturnValue(mockMobileStyles)
			const { container } = render(<References text={mockText} />)

			const globalDiv = container.firstChild as HTMLElement
			expect(globalDiv).toHaveStyle({ padding: '8vh 5vw' })

			const title = screen.getByText('Publications and References')
			expect(title).toHaveStyle({ fontSize: '3rem' })

			const buttons = screen.getAllByText('Download')
			buttons.forEach(button => {
				expect(button).toHaveStyle({ fontSize: '1.4rem' })
			})
		})
	})

	describe('Interactions', () => {
		it('should handle hover state on buttons', () => {
			useIsMobileMock.mockReturnValue(mockDesktopStyles)
			render(<References text={mockText} />)

			const buttons = screen.getAllByText('Download')
			const firstButton = buttons[0]

			// Initial state
			expect(firstButton).toHaveStyle({
				color: 'var(--main)',
			})

			// Hover state
			fireEvent.mouseEnter(firstButton)
			expect(firstButton).toHaveStyle({
				transform: 'translateY(-4px)',
				color: 'rgb(255, 255, 255)',
			})

			// Leave hover state
			fireEvent.mouseLeave(firstButton)
			expect(firstButton).toHaveStyle({
				color: 'var(--main)',
			})
		})

		it('should handle independent hover states for multiple buttons', () => {
			useIsMobileMock.mockReturnValue(mockDesktopStyles)
			render(<References text={mockText} />)

			const buttons = screen.getAllByText('Download')
			const firstButton = buttons[0]
			const secondButton = buttons[1]

			// Hover first button
			fireEvent.mouseEnter(firstButton)
			expect(firstButton).toHaveStyle({ color: 'rgb(255, 255, 255)' })
			expect(secondButton).not.toHaveStyle({ color: 'rgb(255, 255, 255)' })

			// Switch to second button
			fireEvent.mouseLeave(firstButton)
			fireEvent.mouseEnter(secondButton)
			expect(firstButton).not.toHaveStyle({ color: 'rgb(255, 255, 255)' })
			expect(secondButton).toHaveStyle({ color: 'rgb(255, 255, 255)' })
		})

		it('should have correct link attributes', () => {
			useIsMobileMock.mockReturnValue(mockDesktopStyles)
			render(<References text={mockText} />)

			const links = screen.getAllByText('Download')
			links.forEach(link => {
				expect(link).toHaveAttribute('href', '#')
				expect(link).toHaveAttribute('target', '_blank')
				expect(link).toHaveAttribute('rel', 'noreferrer noopener')
			})
		})
	})

	describe('Snapshot Tests', () => {
		it('should match desktop snapshot', () => {
			useIsMobileMock.mockReturnValue(mockDesktopStyles)
			const { container } = render(<References text={mockText} />)
			expect(container.firstChild).toMatchSnapshot()
		})

		it('should match mobile snapshot', () => {
			useIsMobileMock.mockReturnValue(mockMobileStyles)
			const { container } = render(<References text={mockText} />)
			expect(container.firstChild).toMatchSnapshot()
		})

		it('should match snapshot with hover state', () => {
			useIsMobileMock.mockReturnValue(mockDesktopStyles)
			const { container } = render(<References text={mockText} />)

			const firstButton = screen.getAllByText('Download')[0]
			fireEvent.mouseEnter(firstButton)

			expect(container.firstChild).toMatchSnapshot()
		})
	})

	describe('Responsive Behavior', () => {
		it('should switch from row to column layout on mobile', () => {
			// Desktop
			useIsMobileMock.mockReturnValue(mockDesktopStyles)
			const { rerender } = render(<References text={mockText} />)
			let articlesContainer = screen.getByText('Operational Radiation Protection Articles').parentElement?.parentElement
			expect(articlesContainer).toHaveStyle({ flexDirection: 'row' })

			// Mobile
			useIsMobileMock.mockReturnValue(mockMobileStyles)
			rerender(<References text={mockText} />)
			articlesContainer = screen.getByText('Operational Radiation Protection Articles').parentElement?.parentElement
			expect(articlesContainer).toHaveStyle({ flexDirection: 'column' })
		})

		it('should adjust padding based on device type', () => {
			// Desktop
			useIsMobileMock.mockReturnValue(mockDesktopStyles)
			const { container, rerender } = render(<References text={mockText} />)
			let globalDiv = container.firstChild as HTMLElement
			expect(globalDiv).toHaveStyle({ padding: '10vh 10vw' })

			// Mobile
			useIsMobileMock.mockReturnValue(mockMobileStyles)
			rerender(<References text={mockText} />)
			globalDiv = container.firstChild as HTMLElement
			expect(globalDiv).toHaveStyle({ padding: '8vh 5vw' })
		})
	})
})
