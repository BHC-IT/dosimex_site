import React, { useState } from 'react'
import * as CSS from 'csstype'
import Radium from 'radium'
import Input, { IValidator } from './Input'

import { withText } from '../hoc/withText'
import { withIsMobile } from '../hoc/withIsMobile'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import emailjs from '@emailjs/browser'

interface IProps {
	text?: Record<string, string>
	style?: Record<string, unknown>
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

const ContactForm: React.FC<IProps> = ({ text, style }) => {
	const [name, setName] = useState(null as string | null)
	const [nameValid, setNameValid] = useState(false)
	const [email, setEmail] = useState(null as string | null)
	const [message, setMessage] = useState(null as string | null)
	const [subject, setSubject] = useState(null as string | null)
	const [isLoading, setIsLoading] = useState(false)

	const isEmailValid = (value: string): boolean => mailFormat.test(value)
	const isInputValid = (value: string): boolean => value.trim() !== ''

	const sendEmail = (): void => {
		const toastLoad = toast.dark(text?.sending)
		setIsLoading(true)
		emailjs
			.send(
				'service_wekm5vt',
				'template_9bIlFiWV',
				{ text: message, name: name, email: email },
				'user_ARoYKQez1mORTLjrYuH9q'
			)
			.then(() => {
				toast.dismiss(toastLoad)
				toast.success(text?.messageSent)
			})
			.catch(() => {
				toast.dismiss(toastLoad)
				toast.error(text?.messageNotSent)
			})
		setIsLoading(false)
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (nameValid) {
			sendEmail()
			setName(null)
			setNameValid(false)
			setEmail(null)
			setMessage(null)
			setSubject(null)
		}
	}

	if (style === null) return null

	return (
		<form
			style={style.form}
			onSubmit={handleSubmit}
		>
			<h3 style={style.title}>{text.title}</h3>
			<div style={style.divNameMail}>
				<Input
					value={name}
					type='text'
					id='name'
					label={text.label[0]}
					style={{ divInput: style.input }}
					required
					isValid={(isValid: boolean) => setNameValid(isValid)}
					onChange={(value: string) => setName(value)}
					validator={
						[
							{
								validationFunction: (value) => isInputValid(value),
								errorMessage: text.errorName,
							},
						] as IValidator[]
					}
				/>
				<Input
					value={email}
					type='email'
					id='email'
					label={text.label[1]}
					style={{ divInput: style.input }}
					required
					isValid={(_: boolean) => {}}
					onChange={(value: string) => setEmail(value)}
					validator={
						[
							{
								validationFunction: (value) => isInputValid(value),
								errorMessage: text.errorEmail[0],
							},
							{
								validationFunction: (value) => isEmailValid(value),
								errorMessage: text.errorEmail[1],
							},
						] as IValidator[]
					}
				/>
			</div>
			<Input
				value={subject}
				type='text'
				id='subject'
				label={text.label[2]}
				onChange={(value: string) => setSubject(value)}
			/>
			<Input
				value={message}
				type='textarea'
				id='message'
				label={text.label[3]}
				required
				isValid={(_: boolean) => {}}
				onChange={(value: string) => setMessage(value)}
				validator={
					[
						{
							validationFunction: (value) => isInputValid(value),
							errorMessage: text.errorMessage,
						},
					] as IValidator[]
				}
			/>
			<button
				style={style.button}
				type='submit'
			>
				{isLoading ? (
					<div style={{ display: 'block', margin: '0 auto', borderColor: 'red' }}>
						Loading...
					</div>
				) : (
					text.button
				)}
			</button>
		</form>
	)
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

export default Radium(withIsMobile(withText(ContactForm, 'ContactForm'), styles))
