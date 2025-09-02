import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'

import { useIsMobile } from '../../Hooks/useIsMobile'
import References from '../References'

// Mock the useIsMobile hook
vi.mock('../../Hooks/useIsMobile', () => ({
	useIsMobile: vi.fn(),
}))

// Mock styles for different devices
const mockDesktopStyles = {
	global: { backgroundColor: 'white', padding: '8vh 8vw 6vh 8vw' },
	container: { maxWidth: '1200px', margin: '0 auto' },
	title: { textAlign: 'center', color: 'var(--dark)', fontSize: '3.6rem', marginBottom: '2vh' },
	subtitle: { textAlign: 'center', color: 'var(--grey)', fontSize: '1.8rem', marginBottom: '4vh', maxWidth: '800px', margin: '0 auto 4vh auto' },
	referencesList: { display: 'flex', flexDirection: 'column', gap: '2.5vh', marginBottom: '6vh' },
	referenceItem: { borderRadius: '15px', padding: '1vh 3vw', borderLeft: '4px solid var(--main)' },
	referenceTitle: { color: 'var(--dark)', fontSize: '2rem', marginBottom: '1vh', lineHeight: 1.3 },
	referenceMetadata: { fontSize: '1.4rem', fontWeight: '600', fontStyle: 'italic', marginBottom: '1.5vh' },
	referenceDescription: { color: 'var(--grey)', fontSize: '1.5rem', marginBottom: '0', lineHeight: 1.5, margin: '0', flex: 1 },
	referenceDescriptionContainer: { display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0' },
	textButton: { color: 'var(--main)', fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none', cursor: 'pointer', marginLeft: '3vw', flexShrink: 0, whiteSpace: 'nowrap', alignSelf: 'center', display: 'flex', alignItems: 'center', minHeight: '3rem' },
	internshipsSection: { backgroundColor: 'var(--flashTrans)', borderRadius: '15px', padding: '3vh 3vw', textAlign: 'center', borderLeft: '4px solid var(--main)' },
	internshipsText: { color: 'var(--grey)', fontSize: '1.6rem', marginBottom: '2vh', lineHeight: 1.5 },
	internshipsButton: { color: 'var(--main)', fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none', cursor: 'pointer' },
}

const mockMobileStyles = {
	global: { backgroundColor: 'white', padding: '6vh 5vw' },
	container: { maxWidth: '1200px', margin: '0 auto' },
	title: { textAlign: 'center', color: 'var(--dark)', fontSize: '3rem', marginBottom: '2vh' },
	subtitle: { textAlign: 'center', color: 'var(--grey)', fontSize: '1.6rem', marginBottom: '4vh', maxWidth: '800px', margin: '0 auto 4vh auto' },
	referencesList: { display: 'flex', flexDirection: 'column', gap: '3vh', marginBottom: '4vh' },
	referenceItem: { borderRadius: '15px', padding: '1vh 4vw', borderLeft: '4px solid var(--main)' },
	referenceTitle: { color: 'var(--dark)', fontSize: '1.8rem', marginBottom: '1vh', lineHeight: 1.3 },
	referenceMetadata: { fontSize: '1.3rem', fontWeight: '600', fontStyle: 'italic', marginBottom: '1.5vh' },
	referenceDescription: { color: 'var(--grey)', fontSize: '1.4rem', marginBottom: '2vh', lineHeight: 1.5, margin: '0 0 2vh 0', flex: 1 },
	referenceDescriptionContainer: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1.5vh' },
	textButton: { color: 'var(--main)', fontSize: '1.4rem', fontWeight: 'bold', textDecoration: 'none', cursor: 'pointer', marginLeft: '0', flexShrink: 0, whiteSpace: 'nowrap', alignSelf: 'flex-start', display: 'flex', alignItems: 'center', minHeight: 'auto' },
	internshipsSection: { backgroundColor: 'var(--flashTrans)', borderRadius: '15px', padding: '3vh 4vw', textAlign: 'center', borderLeft: '4px solid var(--main)' },
	internshipsText: { color: 'var(--grey)', fontSize: '1.5rem', marginBottom: '2vh', lineHeight: 1.5 },
	internshipsButton: { color: 'var(--main)', fontSize: '1.4rem', fontWeight: 'bold', textDecoration: 'none', cursor: 'pointer' },
}

const mockText = {
	title: 'Publications et Références',
	subtitle: 'DOSIMEX est cité dans de nombreuses publications scientifiques, articles de presse spécialisée et travaux de recherche.',
	btnText: 'Lire l\'article',
	internshipsText: 'Retrouvez également des rapports de stage de fin d\'études citant DOSIMEX dans leurs méthodologies.',
	internshipsBtn: 'Voir les stages',
	items: [
		{
			title: 'Le calcul prédictif de dose pour une meilleure protection',
			description: 'Article SIH-Solutions sur l\'utilisation de DOSIMEX à l\'Institut Curie pour la prédiction des expositions en radiologie médicale.',
			url: 'https://www.sih-solutions.fr/le-calcul-predictif-de-dose-pour-une-meilleure-protection',
		},
		{
			title: 'L\'évaluation de la dose : un pré-requis de la gestion des risques',
			description: 'Post LinkedIn sur l\'utilisation de DOSIMEX dans les CHU de Nantes et Toulouse.',
			url: 'https://www.linkedin.com/posts/sih-solutions_dosimex-activity-6940552424990380032-wsY9',
		},
		{
			title: 'Étude de l\'impact de couches de PMMA sur l\'équilibre électronique',
			description: 'Étudie l\'impact de couches de PMMA sur l\'équilibre électronique pour l\'étalonnage d\'instruments de radioprotection.',
			url: 'https://www.sciencedirect.com/science/article/abs/pii/S0969804324004160',
			authors: 'Zidouz T. et al.',
			year: '2025',
			journal: 'Radiation Physics and Chemistry',
		},
	],
}

describe('References Component', () => {
	beforeEach(() => {
		vi.clearAllMocks()
	})

	describe('Rendering', () => {
		it('should render correctly with desktop styles', () => {
			;(useIsMobile as any).mockReturnValue(mockDesktopStyles)

			const { container } = render(<References text={mockText} />)

			expect(screen.getByText('Publications et Références')).toBeInTheDocument()
			expect(screen.getByText('DOSIMEX est cité dans de nombreuses publications scientifiques, articles de presse spécialisée et travaux de recherche.')).toBeInTheDocument()
			expect(container).toMatchSnapshot()
		})

		it('should render correctly with mobile styles', () => {
			;(useIsMobile as any).mockReturnValue(mockMobileStyles)

			const { container } = render(<References text={mockText} />)

			expect(screen.getByText('Publications et Références')).toBeInTheDocument()
			expect(container).toMatchSnapshot()
		})

		it('should render all reference items', () => {
			;(useIsMobile as any).mockReturnValue(mockDesktopStyles)

			render(<References text={mockText} />)

			// Check all reference titles
			expect(screen.getByText('Le calcul prédictif de dose pour une meilleure protection')).toBeInTheDocument()
			expect(screen.getByText('L\'évaluation de la dose : un pré-requis de la gestion des risques')).toBeInTheDocument()
			expect(screen.getByText('Étude de l\'impact de couches de PMMA sur l\'équilibre électronique')).toBeInTheDocument()
		})

		it('should render reference items with metadata when available', () => {
			;(useIsMobile as any).mockReturnValue(mockDesktopStyles)

			const { container } = render(<References text={mockText} />)

			// Check that academic items show authors, year, and journal
			expect(screen.getByText('Zidouz T. et al.')).toBeInTheDocument()
			expect(container.textContent).toContain('(2025)')
			expect(container.textContent).toContain('- Radiation Physics and Chemistry')
		})

		it('should render internships section', () => {
			;(useIsMobile as any).mockReturnValue(mockDesktopStyles)

			render(<References text={mockText} />)

			expect(screen.getByText('Retrouvez également des rapports de stage de fin d\'études citant DOSIMEX dans leurs méthodologies.')).toBeInTheDocument()
			expect(screen.getByText('Voir les stages')).toBeInTheDocument()
		})
	})

	describe('Links', () => {
		it('should have correct external link attributes for references', () => {
			;(useIsMobile as any).mockReturnValue(mockDesktopStyles)

			render(<References text={mockText} />)

			const referenceLinks = screen.getAllByText('Lire l\'article')

			expect(referenceLinks[0]).toHaveAttribute('href', 'https://www.sih-solutions.fr/le-calcul-predictif-de-dose-pour-une-meilleure-protection')
			expect(referenceLinks[0]).toHaveAttribute('target', '_blank')
			expect(referenceLinks[0]).toHaveAttribute('rel', 'noreferrer noopener')
		})

		it('should have correct internal link for internships', () => {
			;(useIsMobile as any).mockReturnValue(mockDesktopStyles)

			render(<References text={mockText} />)

			const internshipsLink = screen.getByText('Voir les stages')

			expect(internshipsLink).toHaveAttribute('href', '/Manuals#internships')
		})
	})

	describe('Styling', () => {
		it('should apply correct desktop styles', () => {
			;(useIsMobile as any).mockReturnValue(mockDesktopStyles)

			render(<References text={mockText} />)
			const titleElement = screen.getByText('Publications et Références')
			expect(titleElement).toHaveStyle('font-size: 3.6rem')
		})

		it('should apply correct mobile styles', () => {
			;(useIsMobile as any).mockReturnValue(mockMobileStyles)

			render(<References text={mockText} />)
			const titleElement = screen.getByText('Publications et Références')
			expect(titleElement).toHaveStyle('font-size: 3rem')
		})
	})

	describe('Error Handling', () => {
		it('should return null when style is null', () => {
			;(useIsMobile as any).mockReturnValue(null)

			const { container } = render(<References text={mockText} />)

			expect(container.firstChild).toBeNull()
		})
	})

	describe('Snapshot Tests', () => {
		it('should match desktop snapshot', () => {
			;(useIsMobile as any).mockReturnValue(mockDesktopStyles)

			const { container } = render(<References text={mockText} />)
			expect(container.firstChild).toMatchSnapshot()
		})

		it('should match mobile snapshot', () => {
			;(useIsMobile as any).mockReturnValue(mockMobileStyles)

			const { container } = render(<References text={mockText} />)
			expect(container.firstChild).toMatchSnapshot()
		})
	})
})
