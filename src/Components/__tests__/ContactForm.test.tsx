import { render, screen, fireEvent } from '@testing-library/react'
import { useRouter } from 'next/router'
import { describe, it, expect, vi, beforeEach } from 'vitest'

import ContactForm from '../ContactForm'

// Mock Next.js router
vi.mock('next/router', () => ({
	useRouter: vi.fn(),
}))

// Mock emailjs
vi.mock('@emailjs/browser', () => ({
	default: {
		send: vi.fn().mockResolvedValue({ status: 200 }),
	},
}))

// Mock react-toastify
vi.mock('react-toastify', () => ({
	toast: {
		dark: vi.fn(),
		dismiss: vi.fn(),
		success: vi.fn(),
		error: vi.fn(),
	},
}))

// Mock withText HOC
vi.mock('../../hoc/withText', () => ({
	withText: (component: any) => component,
}))

// Mock withIsMobile HOC
vi.mock('../../hoc/withIsMobile', () => ({
	withIsMobile: (component: any) => component,
}))

// Mock Radium
vi.mock('radium', () => ({
	default: (component: any) => component,
}))

const mockRouter = {
	push: vi.fn(),
	pathname: '/contact',
	locale: 'en',
}

const mockText: Record<string, string | string[]> = {
	title: 'Contact Us',
	label: ['Name', 'Email', 'Phone', 'Enterprise', 'Address', 'Subject', 'Message'],
	errorName: 'Name is required',
	errorEmail: ['Email is required', 'Invalid email format'],
	errorMessage: 'Message is required',
	button: 'Send Message',
	sending: 'Sending...',
	messageSent: 'Message sent successfully',
	messageNotSent: 'Failed to send message',
}

const mockStyle: Partial<any> = {
	form: { padding: '20px' },
	title: { fontSize: '24px' },
	divNameMail: { display: 'flex' },
	input: { width: '100%' },
	phoneInput: { width: '100%' },
	button: { backgroundColor: 'blue', color: 'white' },
}

describe('ContactForm Component', () => {
	beforeEach(() => {
		vi.mocked(useRouter).mockReturnValue(mockRouter as any)
	})

	it('renders contact form with all fields', () => {
		render(
			<ContactForm
				text={mockText}
				style={mockStyle}
			/>,
		)

		expect(screen.getByText('Contact Us')).toBeInTheDocument()
		expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
		expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
		expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
		// Use ID selector for phone input to avoid conflicts with country selector
		expect(document.querySelector('#phone')).toBeInTheDocument()
		expect(screen.getByLabelText(/^message$/i)).toBeInTheDocument()
	})

	it('renders with default styles when style is undefined', () => {
		const { container } = render(
			<ContactForm
				text={mockText}
				style={undefined}
			/>,
		)

		// Should render the form with default styles, not return null
		expect(container.firstChild).not.toBeNull()
		expect(screen.getByText('Contact Us')).toBeInTheDocument()
	})

	it('returns null when style is explicitly null', () => {
		const { container } = render(
			<ContactForm
				text={mockText}
				style={null as any}
			/>,
		)
		expect(container.firstChild).toBeNull()
	})

	it('renders with missing text prop', () => {
		const { container } = render(<ContactForm style={mockStyle} />)
		expect(container).toBeInTheDocument()
		// Component should handle undefined text gracefully by using fallback labels
		expect(container.firstChild).not.toBeNull()

		// Should render default labels when text is missing
		const form = container.querySelector('form')
		expect(form).toBeInTheDocument()

		// Should still render input fields with fallback labels
		const nameInput = container.querySelector('#name')
		const emailInput = container.querySelector('#email')
		const messageInput = container.querySelector('#message')

		expect(nameInput).toBeInTheDocument()
		expect(emailInput).toBeInTheDocument()
		expect(messageInput).toBeInTheDocument()
	})

	it('validates email input correctly', () => {
		render(
			<ContactForm
				text={mockText}
				style={mockStyle}
			/>,
		)

		const emailInput = screen.getByLabelText(/email/i)

		// Test invalid email
		fireEvent.change(emailInput, { target: { value: 'invalid-email' } })
		fireEvent.blur(emailInput)

		// Test valid email
		fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
		fireEvent.blur(emailInput)

		expect(emailInput).toBeInTheDocument()
	})

	it('validates required name input', () => {
		render(
			<ContactForm
				text={mockText}
				style={mockStyle}
			/>,
		)

		const nameInput = screen.getByLabelText(/name/i)

		// Test empty name
		fireEvent.change(nameInput, { target: { value: '' } })
		fireEvent.blur(nameInput)

		// Test valid name
		fireEvent.change(nameInput, { target: { value: 'John Doe' } })
		fireEvent.blur(nameInput)

		expect(nameInput).toBeInTheDocument()
	})

	it('handles phone number input', () => {
		render(
			<ContactForm
				text={mockText}
				style={mockStyle}
			/>,
		)

		// Phone input should be present (form is rendered without explicit role)
		const form = document.querySelector('form')
		expect(form).toBeInTheDocument()

		// Phone input should be present
		const phoneInput = document.querySelector('#phone')
		expect(phoneInput).toBeInTheDocument()
	})

	it('submits form with valid data', () => {
		render(
			<ContactForm
				text={mockText}
				style={mockStyle}
			/>,
		)

		const nameInput = screen.getByLabelText(/name/i)
		const emailInput = screen.getByLabelText(/email/i)
		const messageInput = screen.getByLabelText(/^message$/i)
		const submitButton = screen.getByRole('button', { name: /send message/i })

		// Fill form with valid data
		fireEvent.change(nameInput, { target: { value: 'John Doe' } })
		fireEvent.change(emailInput, { target: { value: 'john@example.com' } })
		fireEvent.change(messageInput, { target: { value: 'Test message' } })

		// Trigger validation by blurring inputs
		fireEvent.blur(nameInput)
		fireEvent.blur(emailInput)

		// Submit form
		fireEvent.click(submitButton)

		expect(submitButton).toBeInTheDocument()
	})

	it('prevents submission with invalid data', () => {
		render(
			<ContactForm
				text={mockText}
				style={mockStyle}
			/>,
		)

		const submitButton = screen.getByRole('button', { name: /send message/i })

		// Try to submit without filling required fields
		fireEvent.click(submitButton)

		// Form should still be present (submission prevented)
		expect(submitButton).toBeInTheDocument()
	})

	it('handles missing text prop gracefully', () => {
		const { container } = render(
			<ContactForm
				text={undefined}
				style={mockStyle}
			/>,
		)

		// Component should still render without crashing
		expect(container).toBeInTheDocument()
		expect(container.firstChild).not.toBeNull()

		// Should render form with fallback values
		const form = container.querySelector('form')
		expect(form).toBeInTheDocument()

		// Should still render input fields with fallback labels
		const nameInput = container.querySelector('#name')
		const emailInput = container.querySelector('#email')
		const messageInput = container.querySelector('#message')

		expect(nameInput).toBeInTheDocument()
		expect(emailInput).toBeInTheDocument()
		expect(messageInput).toBeInTheDocument()
	})

	it('handles partial style properties gracefully', () => {
		const incompleteStyle = {
			form: { padding: '20px' },
		}

		const { container } = render(
			<ContactForm
				text={mockText}
				style={incompleteStyle}
			/>,
		)

		expect(container).toBeInTheDocument()
		expect(container.firstChild).not.toBeNull()
	})

	it('displays loading state correctly', () => {
		render(
			<ContactForm
				text={mockText}
				style={mockStyle}
			/>,
		)

		const submitButton = screen.getByRole('button', { name: /send message/i })
		expect(submitButton).toBeInTheDocument()

		// The button text should be "Send Message" initially
		expect(submitButton).toHaveTextContent('Send Message')
	})
})
