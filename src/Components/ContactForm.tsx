import * as React from 'react'
import * as CSS from 'csstype'
import Radium from 'radium'
import Input, { IValidator } from './Input'
import { withRouter, NextRouter } from 'next/router'

import { withText } from '../hoc/withText'
import { withIsMobile } from '../hoc/withIsMobile'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { css } from '@emotion/react'
import ClipLoader from 'react-spinners/ClipLoader'

import emailjs from '@emailjs/browser'

const override = css`
	display: block;
	margin: 0 auto;
	border-color: red;
`

interface WithRouterProps {
	router: NextRouter
}

interface IProps extends WithRouterProps {
	text?: any
	style?: any
}

interface IState {
	name: string | null
	nameValid: boolean
	email: string | null
	emailValid: boolean
	message: string | null
	messageValid: boolean
	subject: string | null
	isLoading: boolean
	wellSent: boolean
}

export interface IStyles {
	form: CSS.Properties
	title: CSS.Properties
	divNameMail: CSS.Properties
	input: CSS.Properties
	button: any
}

const mailFormat: RegExp =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

class ContactForm extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props)

		this.state = {
			name: null,
			nameValid: false,
			email: null,
			emailValid: false,
			message: null,
			messageValid: false,
			subject: null,
			isLoading: false,
			wellSent: false,
		}
	}

	handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (this.state.nameValid) {
			this.sendEmail()
			this.setState({
				name: null,
				nameValid: false,
				email: null,
				emailValid: false,
				message: null,
				messageValid: false,
				subject: null,
			})
		}
	}

	sendEmail = () => {
		const toastLoad = toast.dark(this.props.text.sending)
		this.setState({ isLoading: true })
		emailjs
			.send(
				'service_wekm5vt',
				'template_9bIlFiWV',
				{ text: this.state.message, name: this.state.name, email: this.state.email },
				'user_ARoYKQez1mORTLjrYuH9q'
			)
			.then((res) => {
				this.setState({ wellSent: true })
				toast.dismiss(toastLoad)
				toast.success(this.props.text.messageSent)
			})
			.catch((e) => {
				console.error(e)
				toast.dismiss(toastLoad)
				toast.error(this.props.text.messageNotSent)
			})
		this.setState({ isLoading: false })
	}

	isEmailValid = (value: string) => mailFormat.test(value)

	isInputValid = (value: string) => value.trim() !== ''

	render() {
		if (this.props.style === null) return null

		return (
			<form
				style={this.props.style.form}
				onSubmit={(e: React.FormEvent) => this.handleSubmit(e)}
			>
				<h3 style={this.props.style.title}>{this.props.text.title}</h3>
				<div style={this.props.style.divNameMail}>
					<Input
						value={this.state.name}
						type='text'
						id='name'
						label={this.props.text.label[0]}
						style={{ divInput: this.props.style.input }}
						required
						isValid={(isValid: boolean) => this.setState({ nameValid: isValid })}
						onChange={(value: string) => this.setState({ name: value })}
						validator={
							[
								{
									validationFunction: (value) => this.isInputValid(value),
									errorMessage: this.props.text.errorName,
								},
							] as IValidator[]
						}
					/>
					<Input
						value={this.state.email}
						type='email'
						id='email'
						label={this.props.text.label[1]}
						style={{ divInput: this.props.style.input }}
						required
						isValid={(isValid: boolean) => this.setState({ emailValid: isValid })}
						onChange={(value: string) => this.setState({ email: value })}
						validator={
							[
								{
									validationFunction: (value) => this.isInputValid(value),
									errorMessage: this.props.text.errorEmail[0],
								},
								{
									validationFunction: (value) => this.isEmailValid(value),
									errorMessage: this.props.text.errorEmail[1],
								},
							] as IValidator[]
						}
					/>
				</div>
				<Input
					value={this.state.subject}
					type='text'
					id='subject'
					label={this.props.text.label[2]}
					onChange={(value: string) => this.setState({ subject: value })}
				/>
				<Input
					value={this.state.message}
					type='textarea'
					id='message'
					label={this.props.text.label[3]}
					required
					isValid={(isValid: boolean) => this.setState({ messageValid: isValid })}
					onChange={(value: string) => this.setState({ message: value })}
					validator={
						[
							{
								validationFunction: (value) => this.isInputValid(value),
								errorMessage: this.props.text.errorMessage,
							},
						] as IValidator[]
					}
				/>
				<button
					style={this.props.style.button}
					type='submit'
				>
					{this.state.isLoading ? (
						<ClipLoader
							color='#fff'
							loading={this.state.isLoading}
							css={override}
							size={30}
						/>
					) : (
						this.props.text.button
					)}
				</button>
			</form>
		)
	}
}

export const styles = (mobile: boolean): IStyles => ({
	form: {
		padding: '2vh 4vw',
		marginTop: '15vh',
		marginBottom: '25vh',
		marginRight: mobile ? '10vw' : '20vw',
		marginLeft: mobile ? '10vw' : '20vw',
		boxShadow: '0px 3px 7px 5px #F3F4FA',
		borderRadius: '20px',
		backgroundColor: 'white',
		textAlign: 'justify',
	},
	title: {
		fontSize: mobile ? '3rem' : undefined,
		marginBottom: mobile ? '4vh' : '2vh',
	},
	divNameMail: {
		display: 'flex',
		flexDirection: mobile ? 'column' : undefined,
		flexWrap: 'wrap',
		justifyContent: 'space-between',
	},
	input: {
		width: mobile ? '100%' : '45%',
	},
	button: {
		display: 'flex',
		justifyContent: 'center',
		margin: '5% auto',
		padding: '8px 25px',
		backgroundColor: 'var(--main)',
		borderRadius: '50px',
		color: 'white',
		textTransform: 'uppercase',
		transition: 'all 0.3s ease 0s',
		':hover': {
			color: 'white',
			transform: 'translateY(-4px)',
			boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.1)',
		},
	},
})

export default Radium(withIsMobile(withRouter(withText(ContactForm, 'ContactForm')), styles))
