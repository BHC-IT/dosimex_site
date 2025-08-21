import * as CSS from 'csstype'
import React, { useState, useEffect } from 'react'

import { useMobile } from '../Hooks/useIsMobile'

export interface IValidator {
	validationFunction: (arg0: string) => boolean
	errorMessage: string
}

interface IProps {
	value?: string | null
	type?: string
	id?: string
	label: string
	placeholder?: string
	style?: IStyles
	required?: boolean
	areaSize?: [number, number]
	isValid?: (arg0: boolean) => void
	onChange?: (arg1: string) => void
	validator?: IValidator[]
}

interface IStyles {
	divInput?: CSS.Properties
	input?: CSS.Properties
	textarea?: CSS.Properties
	label?: CSS.Properties
	inputInvalid?: CSS.Properties
}

const runValidator = (validator: IValidator[], value: string): IValidator[] =>
	validator.filter(elem => !elem.validationFunction(value))

const shouldSkipValidation = (value: string | null): boolean =>
	!value || value === ''

const getInputElement = (
	props: IProps,
	value: string,
	styleInputTextarea: CSS.Properties,
	styleInputInvalid: CSS.Properties,
	styleInput: CSS.Properties,
	isValid: boolean,
	handleChange: (newValue: string) => void,
	handleBlur: () => void,
) => {
	if (props.type === 'textarea') {
		return (
			<textarea
				value={value}
				style={isValid ? styleInputTextarea : styleInputInvalid}
				id={props.id}
				placeholder={props.placeholder}
				rows={props.areaSize?.[0] ?? 10}
				cols={props.areaSize?.[1] ?? 20}
				onChange={e => handleChange(e.target.value)}
				onBlur={handleBlur}
				required={props.required}
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
		/>
	)
}

const Input = (props: IProps) => {
	const isMobile = useMobile()

	const [value, setValue] = useState(props.value === undefined ? '' : props.value)
	const [erroredValidator, setErroredValidator] = useState([] as IValidator[])

	useEffect(() => {
		if (props.value === value) return
		setValue(props.value ?? '')
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.value]) // 'value' intentionally omitted to prevent infinite re-renders when internal state changes

	// Use the mobile detection result directly
	const styles = getStyles(isMobile)

	const handleBlur = () => {
		if (props.validator === undefined) return

		if (shouldSkipValidation(value)) return setErroredValidator([])

		const errored = runValidator(props.validator, value as string)
		const valid = errored.length === 0

		setErroredValidator(errored)
		props.isValid?.(valid)
	}

	const handleChange = (newValue: string) => {
		setValue(newValue)
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

	return (
		<div style={{ ...styles.divInput, ...props.style?.divInput }}>
			<label
				style={{ ...styles.label, ...props.style?.label }}
				htmlFor={props.id}
			>
				{props.label}
			</label>
			{getInputElement(
				props,
				value ?? '',
				styleInputTextarea,
				styleInputInvalid,
				styleInput,
				isValid,
				handleChange,
				handleBlur,
			)}
			{!isValid
				? erroredValidator.map((e, index) => (
						<p
							key={index}
							style={{ color: 'red' }}
						>
							{e.errorMessage}
						</p>
					))
				: null}
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
