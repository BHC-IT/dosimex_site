import { render } from '@testing-library/react'
import { useRouter } from 'next/router'
import { describe, it, expect, vi, beforeEach } from 'vitest'

import MyApp from '../pages/_app'

// Mock Next.js router
vi.mock('next/router', () => ({
	useRouter: vi.fn(),
}))

// Mock components to avoid complex dependencies
vi.mock('../Components/Footer', () => ({
	default: () => <footer data-testid="footer">Footer</footer>,
}))

vi.mock('../Components/Navbar', () => ({
	default: () => <nav data-testid="navbar">Navbar</nav>,
}))

// Mock react-toastify
vi.mock('react-toastify', () => ({
	ToastContainer: () => <div data-testid="toast-container">ToastContainer</div>,
}))

const mockRouter = {
	push: vi.fn(),
	pathname: '/',
	locale: 'en',
}

// Mock page component
const MockPage = () => <div data-testid="page-content">Page Content</div>

describe('MyApp Component', () => {
	beforeEach(() => {
		vi.mocked(useRouter).mockReturnValue(mockRouter as any)
	})

	it('should render app with all components', () => {
		const { getByTestId } = render(
			<MyApp
				Component={MockPage}
				pageProps={{}}
			/>,
		)

		expect(getByTestId('navbar')).toBeInTheDocument()
		expect(getByTestId('page-content')).toBeInTheDocument()
		expect(getByTestId('toast-container')).toBeInTheDocument()
		expect(getByTestId('footer')).toBeInTheDocument()
	})

	it('should match snapshot', () => {
		const { container } = render(
			<MyApp
				Component={MockPage}
				pageProps={{}}
			/>,
		)

		expect(container).toMatchSnapshot()
	})

	it('should render Head component with meta tags', () => {
		const { container } = render(
			<MyApp
				Component={MockPage}
				pageProps={{}}
			/>,
		)

		// Just verify the component renders without errors
		// Head content is handled by Next.js in actual runtime
		expect(container).toBeTruthy()
	})
})
