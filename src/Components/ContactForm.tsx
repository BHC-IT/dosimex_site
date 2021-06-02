import * as React from 'react';
import * as CSS from 'csstype';
import Radium from 'radium';
import Input from './Input';

interface IProps {
}

interface IState {
	name: string | null,
	validName: string | null,
	email: string | null,
	validEmail: string | null,
	subject: string | null,
	message: string | null,
	validMessage: string | null,
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

const mailFormat: RegExp = /^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$/

class ContactForm extends React.Component<IProps, IState> {

	constructor(props : IProps) {
		super(props);

		this.state = {
			name: null,
			validName: null,
			email: null,
			validEmail: null,
			subject: null,
			message: null,
			validMessage: null,
			wellSent: false,
		}
	}

	handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (this.state.validName !== null && this.state.validEmail !== null && this.state.validMessage !== null) {
			this.sendEmail();
			this.setState({
				name: null,
				validName: null,
				email: null,
				validEmail: null,
				subject: null,
				message: null,
				validMessage: null,
				wellSent: true,
			});
		}
	}

	sendEmail = () => {
	}

	isEmailValid = (value: string) =>  mailFormat.test(value) || value.trim() !== ''

	isInputValid = (value: string) => (value.trim() !== '')

	render() {
		console.log(this.state)
		return (
			<form style={styles.form} onSubmit={(e: React.FormEvent) => this.handleSubmit(e)}>
				<h1>Contactez-nous</h1>
				{this.state.wellSent ? <p>Votre message a bien été envoyé</p> : null}
				<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
					<Input
						type="text"
						name="name"
						label="Votre nom"
						value={this.state.name}
						messageError="Le nom ne doit pas être vide"
						style={{divInput: {width: "45%"}}}
						required
						isValid={(value : string) => this.isInputValid(value)}
						getValue={(value) => this.setState({validName: value})}
						onChange={(value) => this.setState({name: value})}
					/>
					<Input
						type="email"
						name="email"
						label="Email"
						value={this.state.email}
						messageError="L'email n'est pas valide"
						style={{divInput: {width: "45%"}}}
						required
						isValid={(value) => this.isEmailValid(value)}
						getValue={(value) => this.setState({validEmail: value})}
						onChange={(value) => this.setState({email: value})}
					/>
				</div>
				<Input
						type="text"
						name="subject"
						label="Sujet"
						value={this.state.subject}
						getValue={(value) => this.setState({subject: value})}
				/>
				<Input
						type="textarea"
						name="message"
						label="Message"
						value={this.state.message}
						messageError="Le message ne doit pas être vide"
						isValid={(value) => this.isInputValid(value)}
						getValue={(value) => this.setState({validMessage: value})}
						onChange={(value) => this.setState({message: value})}
				/>
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