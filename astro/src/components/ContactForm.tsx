import { useState, useCallback, useRef } from 'react'
import type { FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import PhoneInput, { isPossiblePhoneNumber } from 'react-phone-number-input'
import { ToastContainer, toast } from 'react-toastify'
import 'react-phone-number-input/style.css'
import 'react-toastify/dist/ReactToastify.css'

function trackEvent(event: string, properties?: Record<string, unknown>) {
	if (typeof window !== 'undefined' && 'posthog' in window) {
		const ph = (window as { posthog?: { capture: (e: string, p?: Record<string, unknown>) => void } }).posthog
		if (!ph) return
		const [, lang] = window.location.pathname.split('/')
		ph.capture(event, {
			locale: lang === 'en' ? 'en' : 'fr',
			page: window.location.pathname,
			...properties,
		})
	}
}

interface ContactFormProps {
	labels: {
		name: string
		email: string
		phone: string
		company: string
		subject: string
		message: string
	}
	errors: {
		name: string
		email: string
		phone: string
		message: string
	}
	button: string
	sending: string
	messageSent: string
	messageNotSent: string
	title: string
}

const EMAIL_REGEX =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const inputClass =
	'mt-1.5 block w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors'
const errorClass = 'mt-1 text-sm text-primary'
const labelClass = 'block text-sm font-medium text-foreground'

export default function ContactForm({
	labels,
	errors,
	button,
	sending,
	messageSent,
	messageNotSent,
	title,
}: ContactFormProps) {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState<string | undefined>(undefined)
	const [company, setCompany] = useState('')
	const [subject, setSubject] = useState('')
	const [message, setMessage] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	// PostHog: track which fields have been focused (fire once per field)
	const focusedFields = useRef(new Set<string>())
	const trackFieldFocus = useCallback((field: string) => {
		if (focusedFields.current.has(field)) return
		focusedFields.current.add(field)
		trackEvent('form_field_focus', { field })
	}, [])

	// Track which fields have been touched for validation display
	const [touched, setTouched] = useState<Record<string, boolean>>({})

	const markTouched = useCallback((field: string) => {
		setTouched(prev => ({ ...prev, [field]: true }))
	}, [])

	const nameError = touched.name && name.trim() === '' ? errors.name : null
	const emailError =
		touched.email && !EMAIL_REGEX.test(email) ? errors.email : null
	const phoneError =
		touched.phone && phone && !isPossiblePhoneNumber(phone)
			? errors.phone
			: null
	const messageError =
		touched.message && message.trim() === '' ? errors.message : null

	const isFormValid = useCallback(() => {
		return (
			name.trim() !== '' &&
			EMAIL_REGEX.test(email) &&
			(!phone || isPossiblePhoneNumber(phone)) &&
			message.trim() !== ''
		)
	}, [name, email, phone, message])

	const resetForm = useCallback(() => {
		setName('')
		setEmail('')
		setPhone(undefined)
		setCompany('')
		setSubject('')
		setMessage('')
		setTouched({})
	}, [])

	const handleSubmit = useCallback(
		(e: FormEvent) => {
			e.preventDefault()

			// PostHog: track submit attempt
			const filledFields = [
				name.trim() && 'name',
				email.trim() && 'email',
				phone && 'phone',
				company.trim() && 'company',
				subject.trim() && 'subject',
				message.trim() && 'message',
			].filter(Boolean) as string[]
			trackEvent('form_submit_attempt', { fields_filled: filledFields })

			// Touch all required fields to show errors
			setTouched({
				name: true,
				email: true,
				phone: true,
				message: true,
			})

			if (!isFormValid()) {
				const invalidFields = [
					name.trim() === '' && 'name',
					!EMAIL_REGEX.test(email) && 'email',
					phone && !isPossiblePhoneNumber(phone) && 'phone',
					message.trim() === '' && 'message',
				].filter(Boolean) as string[]
				trackEvent('form_validation_error', { invalid_fields: invalidFields })
				return
			}

			const toastId = toast.loading(sending)
			setIsLoading(true)

			emailjs
				.send(
					import.meta.env.PUBLIC_EMAILJS_SERVICE_ID ?? '',
					import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
					{
						text: message,
						name,
						email,
						phone: phone ?? '',
						enterprise: company,
						subject,
					},
					import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY ?? '',
				)
				.then(() => {
					toast.dismiss(toastId)
					toast.success(messageSent)
					trackEvent('form_submit_success')
					resetForm()
				})
				.catch(() => {
					toast.dismiss(toastId)
					toast.error(messageNotSent)
					trackEvent('form_submit_failure')
				})
				.finally(() => {
					setIsLoading(false)
				})
		},
		[
			isFormValid,
			name,
			email,
			phone,
			company,
			subject,
			message,
			sending,
			messageSent,
			messageNotSent,
			resetForm,
		],
	)

	return (
		<>
			<div className="rounded-xl border border-border bg-card p-8 shadow-sm">
				<h2 className="text-2xl font-bold text-foreground font-lato">
					{title}
				</h2>

				<form
					onSubmit={handleSubmit}
					noValidate
					className="mt-8 space-y-6"
					aria-label="Contact form"
				>
					{/* Name */}
					<div>
						<label htmlFor="name" className={labelClass}>
							{labels.name}{' '}
							<span className="text-primary">*</span>
						</label>
						<input
							type="text"
							id="name"
							value={name}
							onChange={e => setName(e.target.value)}
							onFocus={() => trackFieldFocus('name')}
							onBlur={() => markTouched('name')}
							required
							className={inputClass}
							placeholder={labels.name}
						/>
						{nameError && (
							<p className={errorClass}>{nameError}</p>
						)}
					</div>

					{/* Email */}
					<div>
						<label htmlFor="email" className={labelClass}>
							{labels.email}{' '}
							<span className="text-primary">*</span>
						</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={e => setEmail(e.target.value)}
							onFocus={() => trackFieldFocus('email')}
							onBlur={() => markTouched('email')}
							required
							className={inputClass}
							placeholder={labels.email}
						/>
						{emailError && (
							<p className={errorClass}>{emailError}</p>
						)}
					</div>

					{/* Phone */}
					<div>
						<label htmlFor="phone" className={labelClass}>
							{labels.phone}
						</label>
						<PhoneInput
							international
							defaultCountry="FR"
							value={phone}
							onChange={setPhone}
							onFocus={() => trackFieldFocus('phone')}
							onBlur={() => markTouched('phone')}
							numberInputProps={{ id: 'phone' }}
							className={`${inputClass} [&_.PhoneInputInput]:border-none [&_.PhoneInputInput]:bg-transparent [&_.PhoneInputInput]:outline-none [&_.PhoneInputInput]:text-foreground`}
						/>
						{phoneError && (
							<p className={errorClass}>{phoneError}</p>
						)}
					</div>

					{/* Company */}
					<div>
						<label htmlFor="company" className={labelClass}>
							{labels.company}
						</label>
						<input
							type="text"
							id="company"
							value={company}
							onChange={e => setCompany(e.target.value)}
							onFocus={() => trackFieldFocus('company')}
							className={inputClass}
							placeholder={labels.company}
						/>
					</div>

					{/* Subject */}
					<div>
						<label htmlFor="subject" className={labelClass}>
							{labels.subject}
						</label>
						<input
							type="text"
							id="subject"
							value={subject}
							onChange={e => setSubject(e.target.value)}
							onFocus={() => trackFieldFocus('subject')}
							className={inputClass}
							placeholder={labels.subject}
						/>
					</div>

					{/* Message */}
					<div>
						<label htmlFor="message" className={labelClass}>
							{labels.message}{' '}
							<span className="text-primary">*</span>
						</label>
						<textarea
							id="message"
							value={message}
							onChange={e => setMessage(e.target.value)}
							onFocus={() => trackFieldFocus('message')}
							onBlur={() => markTouched('message')}
							rows={5}
							required
							className={`${inputClass} resize-y`}
							placeholder={labels.message}
						/>
						{messageError && (
							<p className={errorClass}>{messageError}</p>
						)}
					</div>

					{/* Submit */}
					<div>
						<button
							type="submit"
							disabled={isLoading}
							className="w-full rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{isLoading ? sending : button}
						</button>
					</div>
				</form>
			</div>

			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				closeOnClick
				pauseOnHover
				theme="colored"
			/>
		</>
	)
}
