import React, { useState } from 'react'
import * as CSS from 'csstype'
import Radium from 'radium'
import Input, { IValidator } from './Input'
import PhoneInput, { isPossiblePhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

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
	phoneInput: CSS.Properties
	button: CSS.Properties & {
		':hover'?: CSS.Properties
	}
}

interface INameEmailRowProps {
	text: Record<string, string>
	style: Record<string, unknown>
	name: string | null
	email: string | null
	setNameValid: (valid: boolean) => void
	setName: (value: string) => void
	setEmail: (value: string) => void
}

interface IPhoneEnterpriseRowProps {
	text: Record<string, string>
	style: Record<string, unknown>
	phone: string | undefined
	phoneError: string | null
	enterprise: string | null
	handlePhoneChange: (value: string | undefined) => void
	setEnterprise: (value: string) => void
}

interface ISingleInputsProps {
	text: Record<string, string>
	address: string | null
	subject: string | null
	message: string | null
	setAddress: (value: string) => void
	setSubject: (value: string) => void
	setMessage: (value: string) => void
}

interface ISubmitButtonProps {
	style: Record<string, unknown>
	text: Record<string, string>
	isLoading: boolean
}

const mailFormat: RegExp =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const isInputValid = (value: string): boolean => value.trim() !== ''

const NameEmailRow: React.FC<INameEmailRowProps> = ({
	text,
	style,
	name,
	email,
	setNameValid,
	setName,
	setEmail,
}) => {
	const isEmailValid = (value: string): boolean => mailFormat.test(value)

	return (
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
	)
}

const PhoneEnterpriseRow: React.FC<IPhoneEnterpriseRowProps> = ({
	text,
	style,
	phone,
	phoneError,
	enterprise,
	handlePhoneChange,
	setEnterprise,
}) => (
	<div style={style.divNameMail}>
		<div style={style.phoneInput}>
			<label
				htmlFor='phone'
				style={{
					textTransform: 'uppercase',
					color: 'var(--grey)',
					fontSize: '2rem',
					display: 'block',
				}}
			>
				{text.label[2]}
			</label>
			<PhoneInput
				id='phone'
				value={phone}
				onChange={handlePhoneChange}
				defaultCountry='FR'
				style={{
					width: '100%',
				}}
				className={`phone-input-custom ${phoneError ? 'phone-input-error' : ''}`}
			/>
			{phoneError && (
				<p style={{ color: 'red', margin: '4px 0 0 0', fontSize: '1.4rem' }}>
					{phoneError}
				</p>
			)}
		</div>
		<Input
			value={enterprise}
			type='text'
			id='enterprise'
			label={text.label[3]}
			style={{ divInput: style.input }}
			onChange={(value: string) => setEnterprise(value)}
		/>
	</div>
)

const SingleInputs: React.FC<ISingleInputsProps> = ({
	text,
	address,
	subject,
	message,
	setAddress,
	setSubject,
	setMessage,
}) => (
	<>
		<Input
			value={address}
			type='text'
			id='address'
			label={text.label[4]}
			onChange={(value: string) => setAddress(value)}
		/>
		<Input
			value={subject}
			type='text'
			id='subject'
			label={text.label[5]}
			onChange={(value: string) => setSubject(value)}
		/>
		<Input
			value={message}
			type='textarea'
			id='message'
			label={text.label[6]}
			required
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
	</>
)

const SubmitButton: React.FC<ISubmitButtonProps> = ({ style, text, isLoading }) => (
	<button
		style={style.button}
		type='submit'
	>
		{isLoading ? (
			<div style={{ display: 'block', margin: '0 auto', borderColor: 'red' }}>Loading...</div>
		) : (
			text.button
		)}
	</button>
)

const useContactForm = (text: Record<string, string> | undefined) => {
	const [name, setName] = useState(null as string | null)
	const [nameValid, setNameValid] = useState(false)
	const [email, setEmail] = useState(null as string | null)
	const [phone, setPhone] = useState(undefined as string | undefined)
	const [phoneError, setPhoneError] = useState(null as string | null)
	const [enterprise, setEnterprise] = useState(null as string | null)
	const [address, setAddress] = useState(null as string | null)
	const [message, setMessage] = useState(null as string | null)
	const [subject, setSubject] = useState(null as string | null)
	const [isLoading, setIsLoading] = useState(false)

	const handlePhoneChange = (value: string | undefined) => {
		setPhone(value)
		if (value && !isPossiblePhoneNumber(value)) {
			setPhoneError(text?.errorPhone || '')
		} else {
			setPhoneError(null)
		}
	}

	const sendEmail = (): void => {
		const toastLoad = toast.dark(text?.sending)
		setIsLoading(true)
		emailjs
			.send(
				'service_wekm5vt',
				'template_9bIlFiWV',
				{
					text: message,
					name,
					email,
					phone,
					enterprise,
					address,
					subject,
				},
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

	const resetForm = () => {
		setName(null)
		setNameValid(false)
		setEmail(null)
		setPhone(undefined)
		setPhoneError(null)
		setEnterprise(null)
		setAddress(null)
		setMessage(null)
		setSubject(null)
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// Check if phone is provided and valid, or if it's empty (optional)
		const isPhoneValid = !phone || (phone && isPossiblePhoneNumber(phone))

		if (nameValid && isPhoneValid) {
			sendEmail()
			resetForm()
		} else if (!isPhoneValid) {
			setPhoneError(text?.errorPhone || '')
		}
	}

	return {
		name,
		setName,
		nameValid,
		setNameValid,
		email,
		setEmail,
		phone,
		phoneError,
		enterprise,
		setEnterprise,
		address,
		setAddress,
		message,
		setMessage,
		subject,
		setSubject,
		isLoading,
		handlePhoneChange,
		handleSubmit,
	}
}

const ContactForm: React.FC<IProps> = ({ text, style }) => {
	const formData = useContactForm(text)

	if (style === null) return null

	return (
		<form
			style={style?.form}
			onSubmit={formData.handleSubmit}
		>
			<h3 style={style?.title}>{text?.title}</h3>
			<NameEmailRow
				text={text || {}}
				style={style || {}}
				name={formData.name}
				email={formData.email}
				setNameValid={formData.setNameValid}
				setName={formData.setName}
				setEmail={formData.setEmail}
			/>
			<PhoneEnterpriseRow
				text={text || {}}
				style={style || {}}
				phone={formData.phone}
				phoneError={formData.phoneError}
				enterprise={formData.enterprise}
				handlePhoneChange={formData.handlePhoneChange}
				setEnterprise={formData.setEnterprise}
			/>
			<SingleInputs
				text={text || {}}
				address={formData.address}
				subject={formData.subject}
				message={formData.message}
				setAddress={formData.setAddress}
				setSubject={formData.setSubject}
				setMessage={formData.setMessage}
			/>
			<SubmitButton
				style={style || {}}
				text={text || {}}
				isLoading={formData.isLoading}
			/>
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
	phoneInput: {
		width: mobile ? '100%' : '45%',
		display: 'flex',
		flexDirection: 'column',
		padding: '1.5vh 0',
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
