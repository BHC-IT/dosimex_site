import emailjs from '@emailjs/browser'
import { useState, useCallback } from 'react'
import { isPossiblePhoneNumber } from 'react-phone-number-input'
import { toast } from 'react-toastify'

import { IValidator } from '../Components/Input'

// Email validation regex
const EMAIL_REGEX =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// Validation functions
export const isInputValid = (value: string): boolean => value.trim() !== ''
export const isEmailValid = (value: string): boolean => EMAIL_REGEX.test(value)
export const isPhoneValidNumber = (phone: string | undefined): boolean =>
	!phone || isPossiblePhoneNumber(phone)

// Validator factory functions
export const createRequiredValidator = (errorMessage: string): IValidator => ({
	validationFunction: value => isInputValid(value),
	errorMessage,
})

export const createEmailValidator = (errorMessage: string): IValidator => ({
	validationFunction: value => isEmailValid(value),
	errorMessage,
})

export interface IContactFormValidation {
	// Form field states
	name: string | null
	email: string | null
	phone: string | undefined
	enterprise: string | null
	address: string | null
	subject: string | null
	message: string | null

	// Validation states
	nameValid: boolean
	phoneError: string | null
	isLoading: boolean

	// Form handlers
	setName: (value: string) => void
	setEmail: (value: string) => void
	setPhone: (value: string | undefined) => void
	setEnterprise: (value: string) => void
	setAddress: (value: string) => void
	setSubject: (value: string) => void
	setMessage: (value: string) => void
	setNameValid: (valid: boolean) => void
	setIsLoading: (loading: boolean) => void

	// Validation methods
	validatePhone: (phoneNumber: string | undefined) => void
	validateForm: () => boolean
	resetForm: () => void
	handleSubmit: (e: React.FormEvent) => void

	// Validator configurations
	getNameValidators: (errorMessage: string) => IValidator[]
	getEmailValidators: (errorEmail: string[], errorName: string) => IValidator[]
	getAddressValidators: (errorMessage: string) => IValidator[]
}

export const useContactFormValidation = (text?: Record<string, string | string[]>): IContactFormValidation => {
	// Form field states
	const [name, setName] = useState<string | null>(null)
	const [email, setEmail] = useState<string | null>(null)
	const [phone, setPhone] = useState<string | undefined>(undefined)
	const [enterprise, setEnterprise] = useState<string | null>(null)
	const [address, setAddress] = useState<string | null>(null)
	const [subject, setSubject] = useState<string | null>(null)
	const [message, setMessage] = useState<string | null>(null)

	// Validation states
	const [nameValid, setNameValid] = useState(false)
	const [phoneError, setPhoneError] = useState<string | null>(null)
	const [isLoading, setIsLoading] = useState(false)

	// Phone validation handler
	const validatePhone = useCallback((phoneNumber: string | undefined) => {
		if (phoneNumber && !isPossiblePhoneNumber(phoneNumber)) {
			setPhoneError('Numéro de téléphone invalide')
		} else {
			setPhoneError(null)
		}
	}, [])

	// Form validation
	const validateForm = useCallback((): boolean => {
		const isPhoneValid = isPhoneValidNumber(phone)
		if (!isPhoneValid) {
			setPhoneError('Numéro de téléphone invalide')
		}

		return nameValid && isPhoneValid
	}, [nameValid, phone])

	// Reset form
	const resetForm = useCallback(() => {
		setName(null)
		setEmail(null)
		setPhone(undefined)
		setEnterprise(null)
		setAddress(null)
		setSubject(null)
		setMessage(null)
		setNameValid(false)
		setPhoneError(null)
		setIsLoading(false)
	}, [])

	// Email sending
	const sendEmail = useCallback((): void => {
		const toastLoad = toast.dark(text?.sending)
		setIsLoading(true)
		emailjs
			.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
				{
					text: message,
					name,
					email,
					phone,
					enterprise,
					address,
					subject,
				},
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? '',
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
	}, [text, message, name, email, phone, enterprise, address, subject])

	// Form submission handler
	const handleSubmit = useCallback((e: React.FormEvent) => {
		e.preventDefault()
		if (validateForm()) {
			sendEmail()
			resetForm()
		}
	}, [validateForm, sendEmail, resetForm])

	// Validator configurations
	const getNameValidators = useCallback((errorMessage: string): IValidator[] => [
		createRequiredValidator(errorMessage),
	], [])

	const getEmailValidators = useCallback((errorEmail: string[], errorName: string): IValidator[] => [
		createRequiredValidator(errorName),
		createEmailValidator(errorEmail[0] ?? 'Email invalide'),
	], [])

	const getAddressValidators = useCallback((errorMessage: string): IValidator[] => [
		createRequiredValidator(errorMessage),
	], [])

	return {
		// Form field states
		name,
		email,
		phone,
		enterprise,
		address,
		subject,
		message,

		// Validation states
		nameValid,
		phoneError,
		isLoading,

		// Form handlers
		setName,
		setEmail,
		setPhone,
		setEnterprise,
		setAddress,
		setSubject,
		setMessage,
		setNameValid,
		setIsLoading,

		// Validation methods
		validatePhone,
		validateForm,
		resetForm,
		handleSubmit,

		// Validator configurations
		getNameValidators,
		getEmailValidators,
		getAddressValidators,
	}
}
