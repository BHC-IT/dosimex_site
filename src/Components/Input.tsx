import * as React from 'react';
import * as CSS from 'csstype';

export interface IValidator {
	validationFunction: (arg0: string) => boolean,
	errorMessage: string,
}

interface IProps {
	value?: string | null,
	type?: string,
	id?: string,
	label: string,
	placeholder?: string,
	style?: IStyles,
	required?: boolean,
	areaSize?: [number, number],
	isValid?: (arg0: boolean) => any,
	onChange?: (arg1: string) => any,
	validator?: IValidator[],
}

interface IStyles {
	divInput?: CSS.Properties,
	input?: CSS.Properties,
	label?: CSS.Properties,
	inputInvalid?: CSS.Properties,
}

const runValidator = (validator : IValidator[], value : string) =>
	validator.filter((elem, i) =>
		!elem.validationFunction(value)
	);

const Input = (props: IProps) => {

	const [value, setValue] = React.useState<string | null | undefined>(props.value === undefined ? null : props.value);
	const [erroredValidator, setErroredValidator] = React.useState<IValidator[]>([]);

	React.useEffect(() => {
		if (props.value === value) return;
		setValue(props.value);
	}, [props.value]);

	const handleBlur = () => {

		if (props.validator === undefined) return;

		if (value === null || value === undefined) return setErroredValidator([]);

		const errored = runValidator(props.validator, value);
		const valid = errored.length === 0;


		setErroredValidator(errored);
		props.isValid?.(valid);
	}

	const handleChange = (value : string) => {

		setValue(value);
		props.onChange?.(value);
	}

	const styleInput = {...styles.input, ...props.style?.input};
	const styleInputInvalid = {...styleInput, ...styles.inputInvalid, ...props.style?.inputInvalid};

	const isValid = erroredValidator.length === 0;

	return (
		<div style={{...styles.divInput, ...props.style?.divInput}}>
			<label style={{...styles.label, ...props.style?.label}} htmlFor={props.id}>{props.label}</label>
			{props.type === "textarea" ?
				<textarea
					value={value ?? ''}
					style={isValid ? styleInput : styleInputInvalid}
					id={props.id}
					placeholder={props.placeholder}
					rows={props.areaSize?.[0] ?? 10}
					cols={props.areaSize?.[1] ?? 20}
					onChange={(e) => handleChange(e.target.value)}
					onBlur={handleBlur}
					required={props.required}
				/>
			:
				<input
					value={value ?? ''}
					type={props.type}
					id={props.id}
					style={isValid ? styleInput : styleInputInvalid}
					placeholder={props.placeholder}
					onChange={(e) => handleChange(e.target.value)}
					onBlur={handleBlur}
					required={props.required}
				/>
			}
			{!isValid ?
				erroredValidator.map((e) => <p style={{color: "red"}}>{e.errorMessage}</p>)
			 : null}
		</div>
	);

}

export default Input;

export const styles: IStyles =  {
	divInput: {
		display:'flex',
		flexDirection:'column',
	},
	input: {
		border: "1px solid #DAD8E0",
		height: "4vh",
		borderRadius: "5px",
		resize: "none",
	},
	label: {
		textTransform: "uppercase",
	},
	inputInvalid: {
		border: "1px solid red",
	}
}