import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Input, { getStyles, IValidator } from '../Input'

describe('Input Component', () => {
	it('should render input with label', () => {
		render(
			<Input
				label='Test Label'
				id='test-input'
			/>
		)

		expect(screen.getByLabelText('Test Label')).toBeInTheDocument()
		expect(screen.getByText('Test Label')).toBeInTheDocument()
	})

	it('should render as textarea when type is textarea', () => {
		render(
			<Input
				label='Test Textarea'
				type='textarea'
				id='test-textarea'
			/>
		)

		const textarea = screen.getByRole('textbox')
		expect(textarea.tagName).toBe('TEXTAREA')
	})

	it('should render as input for other types', () => {
		render(
			<Input
				label='Test Input'
				type='email'
				id='test-email'
			/>
		)

		const input = screen.getByRole('textbox')
		expect(input.tagName).toBe('INPUT')
		expect(input).toHaveAttribute('type', 'email')
	})

	it('should handle initial value', () => {
		render(
			<Input
				label='Test'
				value='initial value'
				id='test-value'
			/>
		)

		const input = screen.getByDisplayValue('initial value')
		expect(input).toBeInTheDocument()
	})

	it('should call onChange when user types', async () => {
		const user = userEvent.setup()
		const onChangeMock = vi.fn()

		render(
			<Input
				label='Test'
				onChange={onChangeMock}
				id='test-change'
			/>
		)

		const input = screen.getByRole('textbox')
		await user.type(input, 'hello')

		expect(onChangeMock).toHaveBeenCalledTimes(5) // Once for each character
		expect(onChangeMock).toHaveBeenLastCalledWith('hello')
	})

	it('should show placeholder text', () => {
		render(
			<Input
				label='Test'
				placeholder='Enter text here'
				id='test-placeholder'
			/>
		)

		expect(screen.getByPlaceholderText('Enter text here')).toBeInTheDocument()
	})

	it('should be required when required prop is true', () => {
		render(
			<Input
				label='Test'
				required
				id='test-required'
			/>
		)

		const input = screen.getByRole('textbox')
		expect(input).toBeRequired()
	})

	it('should set textarea dimensions when areaSize is provided', () => {
		render(
			<Input
				label='Test'
				type='textarea'
				areaSize={[5, 30]}
				id='test-dimensions'
			/>
		)

		const textarea = screen.getByRole('textbox')
		expect(textarea).toHaveAttribute('rows', '5')
		expect(textarea).toHaveAttribute('cols', '30')
	})
})

describe('Input Validation', () => {
	const emailValidator: IValidator = {
		validationFunction: (value: string) => /\S+@\S+\.\S+/.test(value),
		errorMessage: 'Please enter a valid email address',
	}

	const lengthValidator: IValidator = {
		validationFunction: (value: string) => value.length >= 3,
		errorMessage: 'Minimum 3 characters required',
	}

	it('should run validation on blur and show error messages', async () => {
		const isValidMock = vi.fn()

		render(
			<Input
				label='Email'
				validator={[emailValidator]}
				isValid={isValidMock}
				id='test-validation'
			/>
		)

		const input = screen.getByRole('textbox')

		// Type invalid email and blur
		fireEvent.change(input, { target: { value: 'invalid-email' } })
		fireEvent.blur(input)

		await waitFor(() => {
			expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument()
		})

		expect(isValidMock).toHaveBeenCalledWith(false)
	})

	it('should pass validation with valid input', async () => {
		const isValidMock = vi.fn()

		render(
			<Input
				label='Email'
				validator={[emailValidator]}
				isValid={isValidMock}
				id='test-valid'
			/>
		)

		const input = screen.getByRole('textbox')

		// Type valid email and blur
		fireEvent.change(input, { target: { value: 'test@example.com' } })
		fireEvent.blur(input)

		await waitFor(() => {
			expect(screen.queryByText('Please enter a valid email address')).not.toBeInTheDocument()
		})

		expect(isValidMock).toHaveBeenCalledWith(true)
	})

	it('should handle multiple validators', async () => {
		render(
			<Input
				label='Test'
				validator={[emailValidator, lengthValidator]}
				id='test-multiple'
			/>
		)

		const input = screen.getByRole('textbox')

		// Type short invalid email
		fireEvent.change(input, { target: { value: 'a' } })
		fireEvent.blur(input)

		await waitFor(() => {
			expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument()
			expect(screen.getByText('Minimum 3 characters required')).toBeInTheDocument()
		})
	})

	it('should not show errors for empty input', async () => {
		render(
			<Input
				label='Test'
				validator={[emailValidator]}
				id='test-empty'
			/>
		)

		const input = screen.getByRole('textbox')
		fireEvent.blur(input)

		await waitFor(() => {
			expect(screen.queryByText('Please enter a valid email address')).not.toBeInTheDocument()
		})
	})
})

describe('Input Styles', () => {
	it('should have correct default styles for desktop', () => {
		const styles = getStyles(false) // false = desktop

		expect(styles.divInput).toEqual({
			display: 'flex',
			flexDirection: 'column',
			padding: '1.5vh 0',
		})

		expect(styles.label).toEqual({
			textTransform: 'uppercase',
			color: 'var(--grey)',
			fontSize: '2rem',
		})

		expect(styles.inputInvalid).toEqual({
			border: '1px solid red',
		})

		expect(styles.input).toEqual({
			border: '1px solid var(--grey-bg)',
			height: '4vh', // desktop height
			borderRadius: '5px',
			resize: 'none',
		})
	})

	it('should have correct default styles for mobile', () => {
		const styles = getStyles(true) // true = mobile

		expect(styles.input).toEqual({
			border: '1px solid var(--grey-bg)',
			height: '25px', // mobile height
			borderRadius: '5px',
			resize: 'none',
		})
	})

	it('should render with basic structure when custom styles are provided', () => {
		const customStyles = {
			input: { backgroundColor: 'lightblue' },
			label: { fontSize: '1rem' },
		}

		render(
			<Input
				label='Test'
				style={customStyles}
				id='test-styles'
			/>
		)

		const input = screen.getByRole('textbox')
		const label = screen.getByText('Test')

		expect(input).toBeInTheDocument()
		expect(label).toBeInTheDocument()
	})
})
