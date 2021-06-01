import * as React from 'react';
import * as CSS from 'csstype';

interface IProps {
	type: string,
	name: string,
	content: string,
	messageError: string,
	style?: IStyles,
	isValid: (arg1: string) => boolean,
	getValue: (arg1: string) => any,
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

		if (value === null) return;

		const valid = props.isValid(value);

		setIsValid(valid);
		if (valid) props.getValue(value);

	}

	const styleInput = {...styles.input, ...props.style?.input};
	const styleInputInvalid = {...styleInput, ...styles.inputInvalid, ...props.style?.inputInvalid};

	return (
		<div style={{...styles.divInput, ...props.style?.divInput}}>
			<label style={{...styles.label, ...props.style?.label}} htmlFor={props.name}>{props.content}</label>
			<input style={isValid ? styleInput : styleInputInvalid} type={props.type} id={props.name} onChange={(e) => setValue(e.target.value)} onBlur={() => handleBlur()} required />
			{isValid ? <p>{props.messageError}</p> : null}
		</div>
	);

}

export default Input;

export const styles: IStyles =  {
	divInput: {
		display:'flex',
		flexDirection:'column',
		width: "45%",
	},
	input: {
		border: "1px solid #DAD8E0",
		borderRadius: "5px",
	},
	label: {
		textTransform: "uppercase",
	},
	inputInvalid: {
		border: "1px solid red",
	}
}