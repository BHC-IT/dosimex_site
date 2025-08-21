import { render, screen } from '@testing-library/react'
import { useRouter } from 'next/router'
import { describe, it, expect, vi, beforeEach } from 'vitest'

import { useText } from '../../Hooks/useText'
import SideBar from '../SideBar'

// Mock Next.js router
vi.mock('next/router', () => ({
	useRouter: vi.fn(),
}))

// Mock useText hook
vi.mock('../../Hooks/useText', () => ({
	useText: vi.fn(),
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

// Mock react-burger-menu
vi.mock('react-burger-menu', () => ({
	slide: ({ children, isOpen, ...props }: any) => (
		<div
			data-testid='burger-menu'
			data-is-open={isOpen}
			{...props}
		>
			{children}
		</div>
	),
}))

// Mock components
vi.mock('../Button', () => ({
	default: ({ name }: any) => <button data-testid='sidebar-button'>{name}</button>,
}))

vi.mock('../LanguageSwitch', () => ({
	default: ({ language }: any) => <div data-testid='sidebar-language-switch'>{language}</div>,
}))

vi.mock('../ItemNavbar', () => ({
	default: ({ name }: any) => <div data-testid='nav-item'>{name}</div>,
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

describe('SideBar Component', () => {
	beforeEach(() => {
		vi.mocked(useRouter).mockReturnValue(mockRouter as any)
		vi.mocked(useText).mockReturnValue(mockText)
		vi.clearAllMocks()
	})

	it('renders burger menu component', () => {
		render(<SideBar />)

		const burgerMenu = screen.getByTestId('burger-menu')
		expect(burgerMenu).toBeInTheDocument()
		// The Menu component receives the right prop, but our mock doesn't need to check it
	})

	it('renders logo with correct properties', () => {
		render(<SideBar />)

		const logo = screen.getByAltText('Dosimex Logo')
		expect(logo).toBeInTheDocument()
		expect(logo).toHaveAttribute('src', '/Images/logo_dosimex_new.webp')
	})

	it('renders all navigation items', () => {
		render(<SideBar />)

		const navItems = screen.getAllByTestId('nav-item')
		expect(navItems).toHaveLength(5)

		expect(screen.getByText('Software')).toBeInTheDocument()
		expect(screen.getByText('Training')).toBeInTheDocument()
		expect(screen.getByText('Manuals')).toBeInTheDocument()
		expect(screen.getByText('About')).toBeInTheDocument()
		expect(screen.getByText('Contact')).toBeInTheDocument()
	})

	it('renders button component', () => {
		render(<SideBar />)

		const button = screen.getByTestId('sidebar-button')
		expect(button).toBeInTheDocument()
		expect(button).toHaveTextContent('Get Started')
	})

	it('renders language switch component', () => {
		render(<SideBar />)

		const languageSwitch = screen.getByTestId('sidebar-language-switch')
		expect(languageSwitch).toBeInTheDocument()
		expect(languageSwitch).toHaveTextContent('en')
	})

	it('passes current pathname and locale to language switch', () => {
		const customRouter = { ...mockRouter, pathname: '/about', locale: 'fr' }
		vi.mocked(useRouter).mockReturnValue(customRouter as any)

		render(<SideBar />)

		const languageSwitch = screen.getByTestId('sidebar-language-switch')
		expect(languageSwitch).toHaveTextContent('fr')
	})

	it('renders logo inside a link to home page', () => {
		render(<SideBar />)

		const logo = screen.getByAltText('Dosimex Logo')
		const link = logo.closest('a')
		expect(link).toHaveAttribute('href', '/')
	})

	it('renders button with correct props from useText', () => {
		const customText = { ...mockText, button: 'Custom Button' }
		vi.mocked(useText).mockReturnValue(customText)

		render(<SideBar />)

		const button = screen.getByTestId('sidebar-button')
		expect(button).toHaveTextContent('Custom Button')
	})

	it('handles empty text items gracefully', () => {
		// Clear the previous mock and set up a new one for this test
		vi.clearAllMocks()
		const emptyText = { items: [], button: 'Test' }
		vi.mocked(useText).mockReturnValue(emptyText)

		const { container } = render(<SideBar />)
		expect(container).toBeInTheDocument()

		// Should not render any nav items when items array is empty
		const navItems = screen.queryAllByTestId('nav-item')
		expect(navItems).toHaveLength(0)
	})

	it('uses correct logo dimensions with ratio', () => {
		render(<SideBar />)

		const logo = screen.getByAltText('Dosimex Logo')

		// Expected dimensions: 212 * 0.5 = 106, 44 * 0.5 = 22
		expect(logo).toHaveAttribute('width', '106')
		expect(logo).toHaveAttribute('height', '22')
	})

	it('accepts text prop and renders consistently', () => {
		const customText = { items: ['Custom', 'Items'], button: 'Custom Button' }
		render(<SideBar text={customText} />)

		const burgerMenu = screen.getByTestId('burger-menu')
		expect(burgerMenu).toBeInTheDocument()

		// The component should still use useText hook regardless of text prop
		const button = screen.getByTestId('sidebar-button')
		expect(button).toHaveTextContent('Get Started') // From mocked useText
	})

	it('should match snapshot with default props', () => {
		const { container } = render(<SideBar />)
		expect(container.firstChild).toMatchSnapshot()
	})

	it('should match snapshot with text prop', () => {
		const testMockText = {
			items: ['Item 1', 'Item 2'],
			button: 'Test Button',
		}
		const { container } = render(<SideBar text={testMockText} />)
		expect(container.firstChild).toMatchSnapshot()
	})
})
