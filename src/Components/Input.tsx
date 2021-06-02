import * as React from 'react';
import * as CSS from 'csstype';

interface IProps {
	type: string,
	name: string,
	label: string,
	value: string | null,
	messageError?: string,
	placeholder?: string,
	style?: IStyles,
	required?: boolean,
	rows?: number,
	cols?: number,
	isValid?: (arg1: string) => boolean,
	getValue: (arg1: string) => any,
	onChange?: (arg0 : string) => any,
}

interface IStyles {
	divInput?: CSS.Properties,
	input?: CSS.Properties,
	label?: CSS.Properties,
	inputInvalid?: CSS.Properties,
}

const Input = (props: IProps) => {

	const [value, setValue] = React.useState<string | null>(null);
	const [isValid, setIsValid] = React.useState<boolean>(true);

	const handleBlur = () => {

		if (props.isValid) {
			if (value === null) return setIsValid(false);

			const valid = props.isValid(value);

			setIsValid(valid);
			if (valid) props.getValue(value);
		}
	}

	const styleInput = {...styles.input, ...props.style?.input};
	const styleInputInvalid = {...styleInput, ...styles.inputInvalid, ...props.style?.inputInvalid};

	console.log(props.value);

	return (
		<div style={{...styles.divInput, ...props.style?.divInput}}>
			<label style={{...styles.label, ...props.style?.label}} htmlFor={props.name}>{props.label}</label>
			{props.type === "textarea" ?
				<textarea
					style={isValid ? styleInput : styleInputInvalid}
					id={props.name}
					value={props.value ?? ''}
					placeholder={props.placeholder ?? undefined}
					rows={props.rows ?? 10}
					cols={props.cols ?? 20}
					onChange={(e) => {setValue(e.target.value); props.onChange?.(e.target.value)}}
					onBlur={() => handleBlur()}
					required={props.required ?? false}
				/>
			:
				<input
					style={isValid ? styleInput : styleInputInvalid}
					type={props.type} id={props.name}
					value={props.value ?? ''}
					placeholder={props.placeholder ?? undefined}
					onChange={(e) => {setValue(e.target.value); props.onChange?.(e.target.value)}}
					onBlur={() => handleBlur()}
					required={props.required ?? false}
				/>
			}
			{!isValid ? <p style={{color: "red"}}>{props.messageError}</p> : null}
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