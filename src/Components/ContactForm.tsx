import * as React from 'react';
import * as CSS from 'csstype';
import Radium from 'radium';
import Input, {IValidator} from './Input';

interface IProps {
}

interface IState {
	name: string | null,
	nameValid: boolean,
	email: string | null,
	validEmail: boolean,
	message: string | null,
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
			subject: null,
			message: null,
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
				validEmail: false,
				subject: null,
				message: null,
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
				<h1>Contactez-nous</h1>
				{this.state.wellSent ? <p>Votre message a bien été envoyé</p> : null}
				<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
					<Input
						type="text"
						id="name"
						label="Votre nom"
						style={{divInput: {width: "45%"}}}
						required
						value={this.state.name}
						isValid={(isValid : boolean) => this.setState({nameValid: isValid})}
						onChange={(value : string) => this.setState({name: value})}
						validator={[
							{ validationFunction:(value) => this.isInputValid(value), errorMessage: 'ne peut pas être vide' },
							{ validationFunction:(value) => this.isEmailValid(value), errorMessage: 'doit etre un mail' },
						] as IValidator[]}
					/>
{/*					<Input
						type="email"
						id="email"
						label="Email"
						value={this.state.email}
						messageError="L'email n'est pas valide"
						style={{divInput: {width: "45%"}}}
						required
						isValid={() => this.isEmailValid(this.state.email)}
						getValue={(value) => this.setState({name: value})}
					/>*/}
				</div>
{/*				<Input
						type="text"
						id="subject"
						label="Sujet"
						value={this.state.subject}
						getValue={(value) => this.setState({subject: value})}
				/>
				<Input
						type="textarea"
						id="message"
						label="Message"
						value={this.state.message}
						messageError="Le message ne doit pas être vide"
						isValid={() => this.isInputValid(this.state.message)}
						getValue={(value) => this.setState({message: value})}
				/>*/}
				<button style={styles.button} type="submit">Envoyer</button>
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
		margin: "5% 40%",
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