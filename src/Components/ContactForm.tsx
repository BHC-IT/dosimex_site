import * as React from 'react';
import * as CSS from 'csstype';
import Radium from 'radium';

interface IProps {
}

interface IState {
	name: string,
	email: string,
	message: string,
}

export interface IStyles {
	form: CSS.Properties,
	label: CSS.Properties,
	input: CSS.Properties,
	divInput: CSS.Properties,
	divTextarea: CSS.Properties,
	button: CSS.Properties,
}

const mailFormat : string = "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$";

class ContactForm extends React.Component<IProps, IState> {

	constructor(props : IProps) {
		super(props);

		this.state = {
			name: '',
			email: '',
			subject: '',
			message: '',
			error: true,
			wellSent: false,
		}
	}

	handleSubmit = () => {
		if (this.state.name.trim() !== '' || this.state.email.trim() !== '' || this.state.message.trim() !== '' || isEmailValid()) {
			this.sendEmail();
			this.setState({wellSent: true});
		}
	}

	sendEmail = () => {
	}

	isValid = () => this.state.error ? {...styles.input, borderColor: "1px solid red"} : styles.input

	isEmailValid = () => (this.state.email.match(mailFormat) || this.state.email.trim() !== '') ? null : <p>L'email n'est pas valide</p>

	isInputEmpty = (value: string, message: string) => value.trim() !== '' ? null : <p>{message}</p>

	render() {
		return (
			<form style={styles.form} onSubmit={this.handleSubmit}>
				<h1>Contactez-nous</h1>
				{this.state.wellSent ? <p>Votre message a bien été envoyé</p> : null}
				<div style={{display: "flex", wrap: "column", justifyContent: "space-between"}}>
					<div style={styles.divInput}>
						<label style={styles.label} htmlFor="name">Votre nom</label>
						<input style={this.isValid()} type="text" id="name" onChange={(e) => this.setState({name: e.target.value})} onBlur={() => this.isValid()} required />
						{this.isInputEmpty(this.state.name, "Le nom ne doit pas être vide")}
					</div>
					<div style={styles.divInput}>
						<label style={styles.label} htmlFor="email">Email</label>
						<input style={this.isValid()} type="email" id="email" onChange={(e) => this.setState({email: e.target.value})} required />
						{this.isEmailValid()}
					</div>
				</div>
				<div style={styles.divInput}>
					<label style={styles.label} htmlFor="subject">Sujet</label>
					<input style={this.isValid()} type="text" id="subject" onChange={(e) => this.setState({subject: e.target.value})} />
				</div>
				<div style={styles.divTextarea}>
					<label style={styles.label} htmlFor="message">Message</label>
					<textarea style={this.isValid()} id="message" onChange={(e) => this.setState({message: e.target.value})} rows="10" required />
					{this.isInputEmpty(this.state.message, "Le message ne doit pas être vide")}
				</div>
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