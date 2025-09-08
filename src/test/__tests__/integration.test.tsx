import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'

import Button from '../../Components/Button'
import Input, { IValidator } from '../../Components/Input'

// Integration tests - testing multiple components together
describe('Component Integration Tests', () => {
	describe('Form-like interactions', () => {
		it('should handle button and input interaction', async () => {
			const user = userEvent.setup()
			const onChangeMock = vi.fn()

			render(
				<div>
					<Input
						label='Email'
						id='email-input'
						placeholder='Enter your email'
						onChange={onChangeMock}
					/>
					<Button
						name='Submit'
						route='submit'
					/>
				</div>,
			)

			// Test that both components render
			expect(screen.getByLabelText('Email')).toBeInTheDocument()
			expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()

			// Test user interaction flow
			const emailInput = screen.getByLabelText('Email')
			await user.type(emailInput, 'test@example.com')

			// Debug: check if onChange was called at all
			expect(onChangeMock).toHaveBeenCalled()
			expect(emailInput).toHaveValue('test@example.com')

			// Check that button is still clickable
			const submitButton = screen.getByRole('button', { name: 'Submit' })
			expect(submitButton).toBeInTheDocument()
		})

		it('should handle validation and form submission flow', async () => {
			const user = userEvent.setup()
			const mockIsValid = vi.fn()

			const emailValidator: IValidator = {
				validationFunction: (value: string) => /\S+@\S+\.\S+/.test(value),
				errorMessage: 'Please enter a valid email',
			}

			render(
				<div>
					<Input
						label='Email'
						id='validation-input'
						validator={[emailValidator]}
						isValid={mockIsValid}
					/>
					<Button
						name='Submit'
						route='submit'
					/>
				</div>,
			)

			const emailInput = screen.getByLabelText('Email')
			const submitButton = screen.getByRole('button', { name: 'Submit' })

			// Test invalid email
			await user.type(emailInput, 'invalid-email')
			fireEvent.blur(emailInput)

			// Should show validation error
			expect(await screen.findByText('Please enter a valid email')).toBeInTheDocument()
			expect(mockIsValid).toHaveBeenCalledWith(false)

			// Clear and enter valid email
			await user.clear(emailInput)
			await user.type(emailInput, 'valid@example.com')
			fireEvent.blur(emailInput)

			// Error should disappear
			expect(screen.queryByText('Please enter a valid email')).not.toBeInTheDocument()
			expect(mockIsValid).toHaveBeenCalledWith(true)

			// Submit button should still be available
			expect(submitButton).toBeInTheDocument()
		})
	})

	describe('Component composition', () => {
		it('should render multiple buttons with different styles', () => {
			render(
				<div>
					<Button
						name='Primary'
						route='primary'
					/>
					<Button
						name='Secondary'
						route='secondary'
						style={{ backgroundColor: 'gray' }}
					/>
					<Button
						name='Danger'
						route='danger'
					/>
				</div>,
			)

			expect(screen.getByRole('button', { name: 'Primary' })).toBeInTheDocument()
			expect(screen.getByRole('button', { name: 'Secondary' })).toBeInTheDocument()
			expect(screen.getByRole('button', { name: 'Danger' })).toBeInTheDocument()
		})

		it('should handle form with multiple inputs', () => {
			render(
				<form>
					<Input
						label='Name'
						id='name'
					/>
					<Input
						label='Email'
						id='email'
						type='email'
					/>
					<Input
						label='Message'
						id='message'
						type='textarea'
					/>
					<Button
						name='Send Message'
						route='contact'
					/>
				</form>,
			)

			expect(screen.getByLabelText('Name')).toBeInTheDocument()
			expect(screen.getByLabelText('Email')).toBeInTheDocument()
			expect(screen.getByLabelText('Message')).toBeInTheDocument()
			expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()

			// Check that email input has correct type
			expect(screen.getByLabelText('Email')).toHaveAttribute('type', 'email')

			// Check that message is a textarea
			expect(screen.getByLabelText('Message').tagName).toBe('TEXTAREA')
		})
	})

	describe('Accessibility integration', () => {
		it('should maintain proper form accessibility', () => {
			render(
				<div>
					<Input
						label='Full Name'
						id='fullname'
						required
						placeholder='Enter your full name'
					/>
					<Button
						name='Continue'
						route='next'
					/>
				</div>,
			)

			const input = screen.getByLabelText('Full Name')

			// Check accessibility attributes
			expect(input).toBeRequired()
			expect(input).toHaveAttribute('placeholder', 'Enter your full name')
			expect(input).toHaveAttribute('id', 'fullname')

			// Check that label is properly associated
			const label = screen.getByText('Full Name')
			expect(label).toHaveAttribute('for', 'fullname')
		})
	})
})
