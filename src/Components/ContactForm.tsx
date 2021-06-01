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
	divInput: CSS.Properties,
	button: CSS.Properties,
}

class ContactForm extends React.Component<IProps, IState> {

	constructor(props : IProps) {
		super(props);

		this.state = {
			name: '',
			email: '',
			subject: '',
			message: '',
		}
	}

	handleSubmit = () => {

	}

	checkErrors = () => {

	}


	render() {
		return (
			<form style={styles.form} onSubmit={this.handleSubmit}>
				<h1>Contactez-nous</h1>
				<div style={{display: "flex", wrap: "column", justifyContent: "space-between"}}>
					<div style={styles.divInput}>
						<label style={styles.label} htmlFor="name">Votre nom</label>
						<input style={styles.input} type="text" id="name" onChange={(e) => this.setState({name: e.target.value})} required />
					</div>
					<div style={styles.divInput}>
						<label style={styles.label} htmlFor="email">Email</label>
						<input style={styles.input} type="email" id="email" onChange={(e) => this.setState({email: e.target.value})} required />
					</div>
				</div>
				<div style={styles.divInput}>
					<label style={styles.label} htmlFor="subject">Sujet</label>
					<input style={styles.input} type="text" id="subject" onChange={(e) => this.setState({subject: e.target.value})} required />
				</div>
				<div style={styles.divTextarea}>
					<label style={styles.label} htmlFor="message">Message</label>
					<textarea style={styles.input} id="message" onChange={(e) => this.setState({message: e.target.value})} rows="10" required />
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