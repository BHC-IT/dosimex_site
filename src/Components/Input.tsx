import React, { useState, useEffect } from 'react'
import * as CSS from 'csstype'

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
	isValid?: (arg0: boolean) => any
	onChange?: (arg1: string) => any
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

const Input = (props: IProps) => {
	const isMobile = useMobile()

	const [value, setValue] = useState(props.value === undefined ? null : props.value)
	const [erroredValidator, setErroredValidator] = useState([] as IValidator[])

	useEffect(() => {
		if (props.value === value) return
		setValue(props.value)
	}, [props.value])

	// Use fallback for SSR/test environments where device detection isn't available
	const isMobileResolved = isMobile ?? false
	const styles = getStyles(isMobileResolved)

	const handleBlur = () => {
		if (props.validator === undefined) return

		if (value === null || value === undefined) return setErroredValidator([])

		const errored = runValidator(props.validator, value)
		const valid = errored.length === 0

		setErroredValidator(errored)
		props.isValid?.(valid)
	}

	const handleChange = (value: string) => {
		setValue(value)
		props.onChange?.(value)
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
			{props.type === 'textarea' ? (
				<textarea
					value={value ?? ''}
					style={isValid ? styleInputTextarea : styleInputInvalid}
					id={props.id}
					placeholder={props.placeholder}
					rows={props.areaSize?.[0] ?? 10}
					cols={props.areaSize?.[1] ?? 20}
					onChange={e => handleChange(e.target.value)}
					onBlur={handleBlur}
					required={props.required}
				/>
			) : (
				<input
					value={value ?? ''}
					type={props.type}
					id={props.id}
					style={isValid ? styleInput : styleInputInvalid}
					placeholder={props.placeholder}
					onChange={e => handleChange(e.target.value)}
					onBlur={handleBlur}
					required={props.required}
				/>
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
