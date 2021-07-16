import * as React from 'react';
import * as CSS from 'csstype';
import Radium from 'radium';
import Input, {IValidator} from './Input';
import { useText } from '../Hooks/useText';

interface IProps {
}

interface IState {
	name: string | null,
	nameValid: boolean,
	email: string | null,
	emailValid: boolean,
	message: string | null,
	messageValid: boolean,
	subject: string | null,
	error: boolean,
	wellSent: boolean,
}

export interface IStyles {
	form: CSS.Properties,
	label: CSS.Properties,
	input: CSS.Properties,
	divInput: CSS.Properties,
	divTextarea: CSS.Properties,
	button: CSS.Properties,
}

const mailFormat: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

class ContactForm extends React.Component<IProps, IState> {

	constructor(props : IProps) {
		super(props);

		this.state = {
			name: null,
			nameValid: false,
			email: null,
			emailValid: false,
			message: null,
			messageValid: false,
			subject: null,
			error: true,
			wellSent: false,
		}
	}

	handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (this.state.nameValid) {
			this.sendEmail();
			this.setState({
				name: null,
				nameValid: false,
				email: null,
				emailValid: false,
				message: null,
				messageValid: false,
				subject: null,
				error: true,
				wellSent: true,
			});
		}
	}

	sendEmail = () => {
	}


	isEmailValid = (value: string) =>  mailFormat.test(value);

	isInputValid = (value: string) => value.trim() !== ''

	render() {
		console.log(this.state)
		return (
			<form style={styles.form} onSubmit={(e: React.FormEvent) => this.handleSubmit(e)}>
				<h1>{text.title}</h1>
				{this.state.wellSent ? <p>{text.wellSentMessage}</p> : null}
				<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
					<Input
						value={this.state.name}
						type="text"
						id="name"
						label={text.label[0]}
						style={{divInput: {width: "45%"}}}
						required
						isValid={(isValid : boolean) => this.setState({nameValid: isValid})}
						onChange={(value : string) => this.setState({name: value})}
						validator={[
							{ validationFunction:(value) => this.isInputValid(value), errorMessage: text.errorName },
						] as IValidator[]}
					/>
					<Input
						value={this.state.email}
						type="email"
						id="email"
						label={text.label[1]}
						style={{divInput: {width: "45%"}}}
						required
						isValid={(isValid : boolean) => this.setState({emailValid: isValid})}
						onChange={(value : string) => this.setState({email: value})}
						validator={[
							{ validationFunction:(value) => this.isInputValid(value), errorMessage: text.errorEmail[0] },
							{ validationFunction:(value) => this.isEmailValid(value), errorMessage: text.errorEmail[1] },
						] as IValidator[]}
					/>
				</div>
				<Input
						value={this.state.subject}
						type="text"
						id="subject"
						label={text.label[2]}
						onChange={(value : string) => this.setState({subject: value})}
				/>
				<Input
						value={this.state.message}
						type="textarea"
						id="message"
						label={text.label[4]}
						required
						isValid={(isValid : boolean) => this.setState({messageValid: isValid})}
						onChange={(value : string) => this.setState({message: value})}
						validator={[
							{ validationFunction:(value) => this.isInputValid(value), errorMessage: text.errorMessage },
						] as IValidator[]}
				/>
				<button style={styles.button} type="submit">{text.button}</button>
			</form>
		);
	}
}

export default Radium(ContactForm);

export const styles: IStyles =  {
	form: {
		padding: "3% 5%",
		margin: "10% 25%",
		boxShadow: "0px 3px 7px 5px #F3F4FA",
		borderRadius: "20px",
	},
	label: {
		textTransform: "uppercase",
	},
	input: {
		border: "1px solid #DAD8E0",
		borderRadius: "5px",
	},
	divInput: {
		display:'flex',
		flexDirection:'column',
		width: "45%",
	},
	divTextarea: {
		display:'flex',
		flexDirection:'column',
	},
	button: {
		padding: "1.6vh 1.6vw",
		display: "block",
		margin: "5% auto",
		backgroundColor: "red",
		borderRadius: "50px",
		color: "white",
		textTransform: "uppercase",
		transition: "all 0.3s ease 0s",
		':hover': {
			color: "white",
			transform: "translateY(-4px)",
			boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.1)",
		}
	},
}