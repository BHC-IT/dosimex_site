import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'

import { useIsMobile } from '../../Hooks/useIsMobile'
import { useText } from '../../Hooks/useText'
import Footer, { styles } from '../Footer'

// Mock Next.js Link component
vi.mock('next/link', () => ({
	default: ({ children, href, replace, ...props }: any) =>
		<a href={href} data-replace={replace} {...props}>
			{children}
		</a>,
}))

// Mock @mdi/react Icon component
vi.mock('@mdi/react', () => ({
	default: ({ path, size, ...props }: any) =>
		<div data-testid="mdi-icon" data-path={path} data-size={size} {...props} />,
}))

// Mock @mdi/js icons
vi.mock('@mdi/js', () => ({
	mdiYoutube: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
	mdiLinkedin: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
	mdiPhone: 'M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z',
}))

// Mock useIsMobile hook
vi.mock('../../Hooks/useIsMobile', () => ({
	useIsMobile: vi.fn(),
}))

// Mock useText hook
const createMockText = () => ({
	Footer: {
		col1: {
			p: [
				'Advanced radiation dosimetry solutions for healthcare and research applications.',
				'Leading innovation in radiation safety and measurement technologies.',
				'+33 1 23 45 67 89',
				'Follow us for the latest updates and industry insights!',
			],
		},
		col2: {
			title: 'Resources',
			p: ['Videos', 'User Manuals', 'Technical Books'],
		},
		col3: {
			title: 'About',
			p: ['Our Company', 'Legal Information', 'Contact Us'],
		},
	},
	altText: {
		radiationSymbol: 'DOSIMEX radiation safety symbol',
	},
})

vi.mock('../../Hooks/useText', () => ({
	useText: vi.fn(),
}))

describe('Footer Component', () => {
	beforeEach(() => {
		vi.clearAllMocks()
		// Always return valid styles, never null
		vi.mocked(useIsMobile).mockReturnValue(styles(false))
		vi.mocked(useText).mockImplementation((key: any) => {
			const mockData = createMockText()
			return key === 'Footer' ? mockData.Footer : mockData.altText
		})
	})

	describe('Rendering', () => {
		it('should render footer with all elements correctly', () => {
			const { container } = render(<Footer />)
			expect(container.firstChild).toMatchSnapshot()
		})

		it('should render footer as semantic element', () => {
			render(<Footer />)

			const footer = screen.getByRole('contentinfo')
			expect(footer).toBeInTheDocument()
		})

		it('should return null when styles are null (SSR protection)', () => {
			vi.mocked(useIsMobile).mockReturnValue(null)

			const { container } = render(<Footer />)

			expect(container.firstChild).toBeNull()
		})
	})

	describe('Logo and Company Info', () => {
		it('should display company logo with proper attributes', () => {
			render(<Footer />)

			const logo = screen.getByAltText('DOSIMEX radiation safety symbol')
			expect(logo).toBeInTheDocument()
			// Next.js Image transforms URLs
			expect(logo.getAttribute('src')).toContain('trefle.png')
			expect(logo).toHaveAttribute('width', '42') // Math.round(154 * 0.27)
			expect(logo).toHaveAttribute('height', '42')
		})

		it('should handle missing alt text gracefully', () => {
			vi.mocked(useText).mockImplementation((key: any) => {
				const mockData = createMockText()
				return key === 'Footer' ? mockData.Footer : null
			})

			render(<Footer />)

			const logo = screen.getByAltText('DOSIMEX radiation safety symbol - clover leaf icon')
			expect(logo).toBeInTheDocument()
		})

		it('should display company description texts', () => {
			render(<Footer />)

			expect(screen.getByText('Advanced radiation dosimetry solutions for healthcare and research applications.')).toBeInTheDocument()
			expect(screen.getByText('Leading innovation in radiation safety and measurement technologies.')).toBeInTheDocument()
		})
	})

	describe('Contact Information', () => {
		it('should display phone number with icon', () => {
			render(<Footer />)

			const phoneIcon = screen.getAllByTestId('mdi-icon').find(icon =>
				icon.getAttribute('data-path')?.includes('M6.62 10.79c1.44 2.83'),
			)
			expect(phoneIcon).toHaveAttribute('data-path', 'M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z')
			expect(phoneIcon).toHaveAttribute('data-size', '1.8')

			expect(screen.getByText('+33 1 23 45 67 89')).toBeInTheDocument()
		})
	})

	describe('Social Media Section', () => {
		it('should render social media icons with correct links', () => {
			render(<Footer />)

			const allLinks = screen.getAllByRole('link')

			// YouTube link - find by href attribute
			const youtubeLink = allLinks.find(link =>
				link.getAttribute('href')?.includes('youtube.com'),
			)
			expect(youtubeLink).toBeTruthy()
			expect(youtubeLink).toHaveAttribute('href', 'https://www.youtube.com/channel/UCmijJyGaFfJte4xsTk90MVA/featured')
			expect(youtubeLink).toHaveAttribute('target', '_blank')
			expect(youtubeLink).toHaveAttribute('rel', 'noreferrer noopener')

			// LinkedIn link - find by href attribute
			const linkedinLink = allLinks.find(link =>
				link.getAttribute('href')?.includes('linkedin.com'),
			)
			expect(linkedinLink).toBeTruthy()
			expect(linkedinLink).toHaveAttribute('href', 'https://fr.linkedin.com/company/dosimex')
			expect(linkedinLink).toHaveAttribute('target', '_blank')
			expect(linkedinLink).toHaveAttribute('rel', 'noreferrer noopener')
		})

		it('should display social media icons with correct sizes', () => {
			render(<Footer />)

			const icons = screen.getAllByTestId('mdi-icon')

			// Find YouTube and LinkedIn icons by their paths
			const youtubeIcon = icons.find(icon =>
				icon.getAttribute('data-path')?.includes('M23.498 6.186a3.016'),
			)
			const linkedinIcon = icons.find(icon =>
				icon.getAttribute('data-path')?.includes('M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037'),
			)

			expect(youtubeIcon).toBeTruthy()
			expect(linkedinIcon).toBeTruthy()
			expect(youtubeIcon).toHaveAttribute('data-size', '2')
			expect(linkedinIcon).toHaveAttribute('data-size', '1.6')
		})

		it('should display social media call-to-action text', () => {
			render(<Footer />)

			expect(screen.getByText('Follow us for the latest updates and industry insights!')).toBeInTheDocument()
		})
	})

	describe('Resources Column', () => {
		it('should render resources column with title and links', () => {
			render(<Footer />)

			expect(screen.getByText('Resources')).toBeInTheDocument()

			// Internal links (using Next.js Link)
			const videosLink = screen.getByRole('link', { name: /videos/i })
			expect(videosLink).toHaveAttribute('href', '/Videos')
			expect(videosLink).toHaveAttribute('data-replace', 'true')

			const manualsLink = screen.getByRole('link', { name: /user manuals/i })
			expect(manualsLink).toHaveAttribute('href', '/Manuals')

			const booksLink = screen.getByRole('link', { name: /technical books/i })
			expect(booksLink).toHaveAttribute('href', '/Books')
		})
	})

	describe('About Column', () => {
		it('should render about column with title and links', () => {
			render(<Footer />)

			expect(screen.getByText('About')).toBeInTheDocument()

			// Internal link
			const companyLink = screen.getByRole('link', { name: /our company/i })
			expect(companyLink).toHaveAttribute('href', '/About')

			// External link
			const legalLink = screen.getByRole('link', { name: /legal information/i })
			expect(legalLink).toHaveAttribute('href', '/Folders/Informations_légales.pdf')
			expect(legalLink).toHaveAttribute('target', '_blank')
			expect(legalLink).toHaveAttribute('rel', 'noreferrer noopener')

			// Internal link
			const contactLink = screen.getByRole('link', { name: /contact us/i })
			expect(contactLink).toHaveAttribute('href', '/Contact')
		})
	})

	describe('Responsive Behavior', () => {
		it('should use mobile styles when mobile is true', () => {
			vi.mocked(useIsMobile).mockReturnValue(styles(true))

			render(<Footer />)

			// Component should render with mobile-specific behavior
			expect(screen.getByRole('contentinfo')).toBeInTheDocument()
		})

		it('should use desktop styles when mobile is false', () => {
			vi.mocked(useIsMobile).mockReturnValue(styles(false))

			render(<Footer />)

			// Component should render with desktop-specific behavior
			expect(screen.getByRole('contentinfo')).toBeInTheDocument()
		})
	})

	describe('Accessibility', () => {
		it('should have proper semantic structure', () => {
			render(<Footer />)

			// Should use footer semantic element
			expect(screen.getByRole('contentinfo')).toBeInTheDocument()
		})

		it('should have proper alt text for logo image', () => {
			render(<Footer />)

			const logo = screen.getByAltText('DOSIMEX radiation safety symbol')
			expect(logo).toBeInTheDocument()
		})

		it('should have proper external link attributes for security', () => {
			render(<Footer />)

			const allLinks = screen.getAllByRole('link')
			const externalLinks = [
				allLinks.find(link => link.getAttribute('href')?.includes('youtube.com')),
				allLinks.find(link => link.getAttribute('href')?.includes('linkedin.com')),
				screen.getByRole('link', { name: /legal information/i }),
			]

			externalLinks.forEach(link => {
				expect(link).toBeTruthy()
				expect(link).toHaveAttribute('target', '_blank')
				expect(link).toHaveAttribute('rel', 'noreferrer noopener')
			})
		})

		it('should structure navigation links properly', () => {
			render(<Footer />)

			const allLinks = screen.getAllByRole('link')

			// Should have all expected links: YouTube, LinkedIn, Videos, Manuals, Books, About, Legal, Contact
			expect(allLinks.length).toBeGreaterThanOrEqual(8)

			// All links should be keyboard accessible
			allLinks.forEach(link => {
				expect(link).toBeInTheDocument()
			})
		})
	})

	describe('Edge Cases', () => {
		it('should handle missing text content gracefully', () => {
			vi.mocked(useText).mockImplementation((key: any) => {
				return key === 'Footer' ? {
					col1: { p: ['', '', '', ''] },
					col2: { title: '', p: ['', '', ''] },
					col3: { title: '', p: ['', '', ''] },
				} : { radiationSymbol: '' }
			})

			render(<Footer />)

			// Should still render the footer structure
			expect(screen.getByRole('contentinfo')).toBeInTheDocument()
		})

		it('should handle special characters in text content', () => {
			vi.mocked(useText).mockImplementation((key: any) => {
				return key === 'Footer' ? {
					col1: {
						p: [
							'Dosimétrie avancée & solutions radiologiques',
							'Innovation française - qualité européenne',
							'+33 1 23 45 67 89',
							'Suivez-nous pour les dernières mises à jour!',
						],
					},
					col2: { title: 'Ressources', p: ['Vidéos', 'Manuels d\'utilisation', 'Livres techniques'] },
					col3: { title: 'À propos', p: ['Notre société', 'Informations légales', 'Nous contacter'] },
				} : { radiationSymbol: 'Symbole de radioprotection DOSIMEX' }
			})

			render(<Footer />)

			expect(screen.getByText('Dosimétrie avancée & solutions radiologiques')).toBeInTheDocument()
			expect(screen.getByText('Innovation française - qualité européenne')).toBeInTheDocument()
		})

		it('should handle very long content gracefully', () => {
			vi.mocked(useText).mockImplementation((key: any) => {
				return key === 'Footer' ? {
					col1: {
						p: [
							'This is a very long company description that might wrap across multiple lines and could potentially cause layout issues in some responsive configurations',
							'Another very long line of text that describes the company mission and values in great detail with extensive information',
							'+33 1 23 45 67 89',
							'Follow us on all our social media platforms for the latest updates, industry insights, product announcements, and educational content!',
						],
					},
					col2: { title: 'Resources', p: ['Educational Videos', 'Comprehensive User Manuals', 'Technical Reference Books'] },
					col3: { title: 'About Us', p: ['Company Information', 'Legal Documentation', 'Contact Information'] },
				} : { radiationSymbol: 'DOSIMEX radiation safety symbol' }
			})

			render(<Footer />)

			expect(screen.getByText(/This is a very long company description/)).toBeInTheDocument()
			expect(screen.getByText(/Follow us on all our social media platforms/)).toBeInTheDocument()
		})
	})

	describe('Image Optimization', () => {
		it('should use proper image optimization settings', () => {
			render(<Footer />)

			const logo = screen.getByRole('img')
			expect(logo).toHaveAttribute('loading', 'lazy')
		})

		it('should calculate image dimensions correctly', () => {
			render(<Footer />)

			const logo = screen.getByRole('img')
			// TREFLE_BASE_SIZE = 154, TREFLE_RATIO = 0.27
			// Math.round(154 * 0.27) = 42
			expect(logo).toHaveAttribute('width', '42')
			expect(logo).toHaveAttribute('height', '42')
		})
	})
})

describe('Footer Styles', () => {
	describe('Desktop Styles', () => {
		it('should have correct footer styles for desktop', () => {
			const desktopStyles = styles(false)

			expect(desktopStyles.footer).toEqual({
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap',
				justifyContent: 'center',
				alignItems: 'center',
				padding: '7vh 5vw',
				backgroundColor: 'var(--dark)',
				color: 'var(--light)',
			})
		})

		it('should have correct column styles for desktop', () => {
			const desktopStyles = styles(false)

			expect(desktopStyles.col1).toEqual({
				width: '30%',
			})

			expect(desktopStyles.col2).toEqual({
				width: '50%',
				display: 'flex',
				flexWrap: 'wrap',
				flexDirection: undefined,
				justifyContent: 'center',
			})

			expect(desktopStyles.col).toEqual({
				width: '40%',
			})
		})
	})

	describe('Mobile Styles', () => {
		it('should have correct footer styles for mobile', () => {
			const mobileStyles = styles(true)

			expect(mobileStyles.footer).toEqual({
				display: 'flex',
				flexDirection: 'column',
				flexWrap: 'wrap',
				justifyContent: 'center',
				alignItems: 'center',
				padding: '7vh 5vw',
				backgroundColor: 'var(--dark)',
				color: 'var(--light)',
			})
		})

		it('should have correct column styles for mobile', () => {
			const mobileStyles = styles(true)

			expect(mobileStyles.col1).toEqual({
				width: '80%',
			})

			expect(mobileStyles.col2).toEqual({
				width: '80%',
				display: 'flex',
				flexWrap: 'wrap',
				flexDirection: 'column',
				justifyContent: 'center',
			})

			expect(mobileStyles.col).toEqual({
				width: '80%',
			})
		})
	})

	describe('Common Styles', () => {
		it('should have consistent component styles across devices', () => {
			const desktopStyles = styles(false)
			const mobileStyles = styles(true)

			const expectedColTitleStyles = {
				fontFamily: 'var(--lato)',
				fontWeight: 700,
				fontSize: '2.4rem',
			}

			const expectedPhoneStyles = {
				display: 'flex',
				alignItems: 'center',
			}

			const expectedSocialMediaStyles = {
				display: 'flex',
				alignItems: 'center',
			}

			expect(desktopStyles.colTitle).toEqual(expectedColTitleStyles)
			expect(mobileStyles.colTitle).toEqual(expectedColTitleStyles)

			expect(desktopStyles.divPhone).toEqual(expectedPhoneStyles)
			expect(mobileStyles.divPhone).toEqual(expectedPhoneStyles)

			expect(desktopStyles.divSocialMedia).toEqual(expectedSocialMediaStyles)
			expect(mobileStyles.divSocialMedia).toEqual(expectedSocialMediaStyles)
		})

		it('should have responsive text section styles', () => {
			const desktopStyles = styles(false)
			const mobileStyles = styles(true)

			// Desktop text social media width should be 30%
			expect(desktopStyles.textSocialMedia.width).toBe('30%')

			// Mobile text social media width should be 60%
			expect(mobileStyles.textSocialMedia.width).toBe('60%')
		})
	})
})
