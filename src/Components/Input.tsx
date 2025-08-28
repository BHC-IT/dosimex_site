import * as CSS from 'csstype'
import React, { useState, useEffect } from 'react'

import { useMobile } from '../Hooks/useIsMobile'

export interface IValidator {
	validationFunction: (value: string) => boolean
	errorMessage: string
}

export interface IProps {
	/** The controlled value of the input. If provided, component becomes controlled */
	value?: string | null
	/** Input type - 'text', 'email', 'password', 'textarea', etc. */
	type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'textarea'
	/** HTML id attribute for the input element */
	id?: string
	/** Label text for the input */
	label: string
	/** Placeholder text for the input */
	placeholder?: string
	/** Custom styles to override default styling */
	style?: IStyles
	/** Whether the input is required */
	required?: boolean
	/** Size for textarea as [rows, cols]. Only applies when type='textarea' */
	areaSize?: readonly [number, number]
	/** Callback fired when validation status changes */
	isValid?: (isValid: boolean) => void
	/** Callback fired when input value changes */
	onChange?: (value: string) => void
	/** Array of validation functions to run on blur */
	validator?: readonly IValidator[]
}

interface IStyles {
	divInput?: CSS.Properties
	input?: CSS.Properties
	textarea?: CSS.Properties
	label?: CSS.Properties
	inputInvalid?: CSS.Properties
}

// Constants for better maintainability
const DEFAULT_TEXTAREA_ROWS = 10
const DEFAULT_TEXTAREA_COLS = 20

const runValidator = (validators: readonly IValidator[], value: string): IValidator[] =>
	validators.filter(validator => !validator.validationFunction(value))

const shouldSkipValidation = (value: string): boolean =>
	!value || value.trim() === ''

interface IInputElementProps {
	props: IProps
	value: string
	styleInputTextarea: CSS.Properties
	styleInputInvalid: CSS.Properties
	styleInput: CSS.Properties
	isValid: boolean
	handleChange: (newValue: string) => void
	handleBlur: () => void
}

const getInputElement = ({
	props,
	value,
	styleInputTextarea,
	styleInputInvalid,
	styleInput,
	isValid,
	handleChange,
	handleBlur,
}: IInputElementProps): JSX.Element => {
	const errorId = props.id ? `${props.id}-error` : undefined
	if (props.type === 'textarea') {
		return (
			<textarea
				value={value}
				style={isValid ? styleInputTextarea : styleInputInvalid}
				id={props.id}
				placeholder={props.placeholder}
				rows={props.areaSize?.[0] ?? DEFAULT_TEXTAREA_ROWS}
				cols={props.areaSize?.[1] ?? DEFAULT_TEXTAREA_COLS}
				onChange={e => handleChange(e.target.value)}
				onBlur={handleBlur}
				required={props.required}
				aria-invalid={!isValid}
				aria-required={props.required}
				aria-describedby={!isValid && errorId ? errorId : undefined}
			/>
		)
	}

	return (
		<input
			value={value}
			type={props.type}
			id={props.id}
			style={isValid ? styleInput : styleInputInvalid}
			placeholder={props.placeholder}
			onChange={e => handleChange(e.target.value)}
			onBlur={handleBlur}
			required={props.required}
			aria-invalid={!isValid}
			aria-required={props.required}
			aria-describedby={!isValid && errorId ? errorId : undefined}
		/>
	)
}

const Input: React.FC<IProps> = props => {
	const isMobile = useMobile()

	// Determine if this is a controlled component
	const isControlled = props.value !== undefined

	// Initialize state based on controlled/uncontrolled pattern
	const [internalValue, setInternalValue] = useState(() => {
		if (isControlled) {
			return props.value ?? ''
		}
		return ''
	})

	const [erroredValidator, setErroredValidator] = useState<IValidator[]>([])

	// For controlled components, sync internal state when prop changes
	useEffect(() => {
		if (isControlled && props.value !== internalValue) {
			setInternalValue(props.value ?? '')
		}
	}, [props.value, isControlled, internalValue])

	// Get the current value (controlled vs uncontrolled)
	const currentValue = isControlled ? (props.value ?? '') : internalValue

	// Use the mobile detection result directly
	const styles = getStyles(isMobile)

	const handleBlur = () => {
		if (!props.validator || props.validator.length === 0) return

		if (shouldSkipValidation(currentValue)) {
			setErroredValidator([])
			props.isValid?.(true)
			return
		}

		const errored = runValidator(props.validator, currentValue)
		const valid = errored.length === 0

		setErroredValidator(errored)
		props.isValid?.(valid)
	}

	const handleChange = (newValue: string) => {
		// For uncontrolled components, update internal state
		if (!isControlled) {
			setInternalValue(newValue)
		}

		// Always call onChange callback if provided
		props.onChange?.(newValue)
	}

	const styleInput = { ...styles.input, ...props.style?.input }
	const styleInputTextarea = { ...styles.textarea, ...props.style?.textarea }
	const styleInputInvalid = {
		...styleInput,
		...styles.inputInvalid,
		...props.style?.inputInvalid,
	}

	const isValid = erroredValidator.length === 0

	const combinedDivStyle = { ...styles.divInput, ...props.style?.divInput }
	const combinedLabelStyle = { ...styles.label, ...props.style?.label }

	return (
		<div style={combinedDivStyle}>
			<label
				style={combinedLabelStyle}
				htmlFor={props.id}
			>
				{props.label}
			</label>
			{getInputElement({
				props,
				value: currentValue,
				styleInputTextarea,
				styleInputInvalid,
				styleInput,
				isValid,
				handleChange,
				handleBlur,
			})}
			{!isValid && erroredValidator.length > 0 && (
				<div
					id={props.id ? `${props.id}-error` : undefined}
					role="alert"
					aria-live="polite"
				>
					{erroredValidator.map((validator, index) => (
						<p
							key={`${props.id ?? 'input'}-error-${index}`}
							style={{
								color: 'red',
								fontSize: '1.4rem',
								margin: '0.5rem 0 0 0',
							}}
						>
							{validator.errorMessage}
						</p>
					))}
				</div>
			)}
		</div>
	)
}

export default Input

export const getStyles = (isMobile: boolean): IStyles => ({
	divInput: {
		display: 'flex',
		flexDirection: 'column',
		padding: '1.5vh 0',
	},
	input: {
		border: '1px solid var(--grey-bg)',
		height: isMobile ? '25px' : '4vh',
		borderRadius: '5px',
		resize: 'none',
	},
	textarea: {
		border: '1px solid var(--grey-bg)',
		borderRadius: '5px',
		resize: 'none',
	},
	label: {
		textTransform: 'uppercase',
		color: 'var(--grey)',
		fontSize: '2rem',
	},
	inputInvalid: {
		border: '1px solid red',
	},
})
