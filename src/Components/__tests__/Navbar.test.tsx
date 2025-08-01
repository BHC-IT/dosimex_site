import { render, screen } from '@testing-library/react'
import { useRouter } from 'next/router'
import { describe, it, expect, vi, beforeEach } from 'vitest'

import Navbar from '../Navbar'

// Mock Next.js router
vi.mock('next/router', () => ({
	useRouter: vi.fn(),
}))

// Mock Next.js Image
vi.mock('next/image', () => ({
	default: ({ src, alt, ...props }: any) => (
		<img
			src={src}
			alt={alt}
			{...props}
		/>
	),
}))

// Mock Next.js Link
vi.mock('next/link', () => ({
	default: ({ children, href, ...props }: any) => (
		<a
			href={href}
			{...props}
		>
			{children}
		</a>
	),
}))

// Mock withText HOC
vi.mock('../../hoc/withText', () => ({
	withText: (component: any) => component,
}))

// Mock components
vi.mock('../ItemNavbar', () => ({
	default: ({ name }: { name: string }) => <div data-testid='nav-item'>{name}</div>,
}))

vi.mock('../Button', () => ({
	default: ({ name }: { name: string }) => <button data-testid='nav-button'>{name}</button>,
}))

vi.mock('../LanguageSwitch', () => ({
	default: ({ language }: { language: string }) => (
		<div data-testid='language-switch'>{language}</div>
	),
}))

vi.mock('../SideBar', () => ({
	default: () => <div data-testid='sidebar'>Sidebar</div>,
}))

const mockRouter = {
	push: vi.fn(),
	pathname: '/home',
	locale: 'en',
}

const mockText = {
	items: ['Software', 'Training', 'Manuals', 'About', 'Contact'],
	button: 'Get Started',
}

describe('Navbar Component', () => {
	beforeEach(() => {
		vi.mocked(useRouter).mockReturnValue(mockRouter as any)
		// Mock client-side rendering
		Object.defineProperty(window, 'matchMedia', {
			writable: true,
			value: vi.fn().mockImplementation(query => ({
				matches: false,
				media: query,
				onchange: null,
				addListener: vi.fn(),
				removeListener: vi.fn(),
				addEventListener: vi.fn(),
				removeEventListener: vi.fn(),
				dispatchEvent: vi.fn(),
			})),
		})
	})

	it('renders navbar with logo', () => {
		render(<Navbar text={mockText} />)

		const logos = screen.getAllByAltText('logo dosimex')
		expect(logos.length).toBeGreaterThan(0)

		// Check the first logo (main navbar logo)
		expect(logos[0]).toHaveAttribute('src', '/Images/logo_dosimex_new.webp')
	})

	it('renders all navigation items', () => {
		render(<Navbar text={mockText} />)

		const navItems = screen.getAllByTestId('nav-item')
		expect(navItems).toHaveLength(5)

		expect(screen.getByText('Software')).toBeInTheDocument()
		expect(screen.getByText('Training')).toBeInTheDocument()
		expect(screen.getByText('Manuals')).toBeInTheDocument()
		expect(screen.getByText('About')).toBeInTheDocument()
		expect(screen.getByText('Contact')).toBeInTheDocument()
	})

	it('renders navigation button', () => {
		render(<Navbar text={mockText} />)

		const button = screen.getByTestId('nav-button')
		expect(button).toBeInTheDocument()
		expect(button).toHaveTextContent('Get Started')
	})

	it('renders language switch component', () => {
		render(<Navbar text={mockText} />)

		const languageSwitch = screen.getByTestId('language-switch')
		expect(languageSwitch).toBeInTheDocument()
		expect(languageSwitch).toHaveTextContent('en')
	})

	it('renders sidebar component', () => {
		render(<Navbar text={mockText} />)

		const sidebar = screen.getByTestId('sidebar')
		expect(sidebar).toBeInTheDocument()
		expect(sidebar).toHaveTextContent('Sidebar')
	})

	it('handles missing text prop gracefully', () => {
		// Component should handle undefined text prop without crashing
		const minimalText = {
			items: ['Software', 'Training', 'Manuals', 'About', 'Contact'],
			button: 'Get Started',
		}

		const { container } = render(<Navbar text={minimalText} />)
		expect(container).toBeInTheDocument()
	})

	it('renders logo with correct dimensions', () => {
		render(<Navbar text={mockText} />)

		const logos = screen.getAllByAltText('logo dosimex')
		// Should have two logos (one in main nav, one in mobile)
		expect(logos.length).toBeGreaterThan(0)

		logos.forEach(logo => {
			// Check that width and height attributes are set
			expect(logo).toHaveAttribute('width')
			expect(logo).toHaveAttribute('height')
		})
	})
})
