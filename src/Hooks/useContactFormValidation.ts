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
	validatePhone: () => void
	validateForm: () => boolean
	resetForm: () => void
	handleSubmit: (e: React.FormEvent) => void

	// Validator configurations
	getNameValidators: (errorMessage: string) => IValidator[]
	getEmailValidators: (errorEmail: string[]) => IValidator[]
	getAddressValidators: (errorMessage: string) => IValidator[]
}

// Validation helper functions
const validateName = (name: string | null): boolean => {
	return name !== null && name.trim() !== ''
}

const validateEmail = (email: string | null): boolean => {
	if (!email || email.trim() === '') return false
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	return emailRegex.test(email)
}

const validateMessage = (message: string | null): boolean => {
	return message !== null && message.trim() !== ''
}

// Custom hook for form state management
const useFormState = () => {
	const [name, setName] = useState<string | null>(null)
	const [email, setEmail] = useState<string | null>(null)
	const [phone, setPhone] = useState<string | undefined>(undefined)
	const [enterprise, setEnterprise] = useState<string | null>(null)
	const [address, setAddress] = useState<string | null>(null)
	const [subject, setSubject] = useState<string | null>(null)
	const [message, setMessage] = useState<string | null>(null)
	const [nameValid, setNameValid] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	return {
		name, setName,
		email, setEmail,
		phone, setPhone,
		enterprise, setEnterprise,
		address, setAddress,
		subject, setSubject,
		message, setMessage,
		nameValid, setNameValid,
		isLoading, setIsLoading,
	}
}

// Form validation logic
const useFormValidation = (nameValid: boolean, phone: string | undefined) => {
	const checkInputs = useCallback((): boolean => {
		return nameValid && (phone ? isPossiblePhoneNumber(phone) : true)
	}, [nameValid, phone])

	const validateForm = useCallback(() => checkInputs(), [checkInputs])

	const validatePhone = useCallback(() => {
		// Phone validation is done in checkInputs
	}, [])

	return { checkInputs, validateForm, validatePhone }
}

// Form reset functionality
const useFormReset = (
	setName: (value: string | null) => void,
	setEmail: (value: string | null) => void,
	setPhone: (value: string | undefined) => void,
	setEnterprise: (value: string | null) => void,
	setAddress: (value: string | null) => void,
	setSubject: (value: string | null) => void,
	setMessage: (value: string | null) => void,
	setNameValid: (valid: boolean) => void,
	setIsLoading: (loading: boolean) => void,
) => {
	const resetForm = useCallback(() => {
		setName(null)
		setEmail(null)
		setPhone(undefined)
		setEnterprise(null)
		setAddress(null)
		setSubject(null)
		setMessage(null)
		setNameValid(false)
		setIsLoading(false)
	}, [setName, setEmail, setPhone, setEnterprise, setAddress, setSubject, setMessage, setNameValid, setIsLoading])

	return { resetForm }
}

// Email sending functionality
const useEmailSending = (
	name: string | null,
	email: string | null,
	phone: string | undefined,
	enterprise: string | null,
	address: string | null,
	subject: string | null,
	message: string | null,
	text: Record<string, string | string[]> | undefined,
	setIsLoading: (loading: boolean) => void,
	resetForm: () => void,
) => {
	const sendEmail = useCallback((): void => {
		sendContactEmail({
			name, email, phone, enterprise, address, subject, message,
			text, setIsLoading, resetForm,
		})
	}, [name, email, phone, enterprise, address, subject, message, text, setIsLoading, resetForm])

	return { sendEmail }
}

// Validator creation functions
const useValidatorCreation = (
	name: string | null,
	email: string | null,
	message: string | null,
) => {
	const getNameValidators = useCallback((errorName: string): IValidator[] => [
		{
			validationFunction: () => validateName(name),
			errorMessage: errorName || 'Name is required',
		},
	], [name])

	const getEmailValidators = useCallback((errorEmail: string[]): IValidator[] => [
		{
			validationFunction: () => email !== null && email.trim() !== '',
			errorMessage: errorEmail[0] || 'Email is required',
		},
		{
			validationFunction: () => validateEmail(email),
			errorMessage: errorEmail[1] || 'Email format is invalid',
		},
	], [email])

	const getAddressValidators = useCallback((errorMessage: string): IValidator[] => [
		{
			validationFunction: () => validateMessage(message),
			errorMessage: errorMessage || 'Message is required',
		},
	], [message])

	return { getNameValidators, getEmailValidators, getAddressValidators }
}

// Form submission handling
const useFormSubmission = (checkInputs: () => boolean, sendEmail: () => void) => {
	const handleSubmit = useCallback((e: React.FormEvent) => {
		e.preventDefault()
		if (checkInputs()) {
			sendEmail()
		}
	}, [checkInputs, sendEmail])

	return { handleSubmit }
}

export const useContactFormValidation = (text?: Record<string, string | string[]>): IContactFormValidation => {
	const formState = useFormState()
	const formValidation = useFormValidation(formState.nameValid, formState.phone)
	const { resetForm } = useFormReset(
		formState.setName,
		formState.setEmail,
		formState.setPhone,
		formState.setEnterprise,
		formState.setAddress,
		formState.setSubject,
		formState.setMessage,
		formState.setNameValid,
		formState.setIsLoading,
	)
	const { sendEmail } = useEmailSending(
		formState.name,
		formState.email,
		formState.phone,
		formState.enterprise,
		formState.address,
		formState.subject,
		formState.message,
		text,
		formState.setIsLoading,
		resetForm,
	)
	const validatorCreation = useValidatorCreation(formState.name, formState.email, formState.message)
	const { handleSubmit } = useFormSubmission(formValidation.checkInputs, sendEmail)

	return {
		// Form field states
		name: formState.name,
		email: formState.email,
		phone: formState.phone,
		enterprise: formState.enterprise,
		address: formState.address,
		subject: formState.subject,
		message: formState.message,

		// Validation states
		nameValid: formState.nameValid,
		phoneError: null, // No longer tracking phone errors separately
		isLoading: formState.isLoading,

		// Form handlers
		setName: formState.setName,
		setEmail: formState.setEmail,
		setPhone: formState.setPhone,
		setEnterprise: formState.setEnterprise,
		setAddress: formState.setAddress,
		setSubject: formState.setSubject,
		setMessage: formState.setMessage,
		setNameValid: formState.setNameValid,
		setIsLoading: formState.setIsLoading,

		// Validation methods
		validatePhone: formValidation.validatePhone,
		validateForm: formValidation.validateForm,
		resetForm,
		handleSubmit,

		// Validator configurations
		getNameValidators: validatorCreation.getNameValidators,
		getEmailValidators: validatorCreation.getEmailValidators,
		getAddressValidators: validatorCreation.getAddressValidators,
	}
}

// Email sending helper function
const sendContactEmail = (params: {
	name: string | null, email: string | null, phone: string | undefined,
	enterprise: string | null, address: string | null, subject: string | null,
	message: string | null, text: Record<string, string | string[]> | undefined,
	setIsLoading: (loading: boolean) => void,
	resetForm: () => void
}) => {
	const { name, email, phone, enterprise, address, subject, message, text, setIsLoading, resetForm } = params
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
				resetForm()
			})
			.catch(() => {
				toast.dismiss(toastLoad)
				toast.error(text?.messageNotSent)
			})
			.finally(() => {
				setIsLoading(false)
			})
}
