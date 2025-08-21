import React from 'react'

import { IContactFormValidation } from '../../Hooks/useContactFormValidation'
import Input from '../Input'

interface ISingleInputsProps {
	text: Record<string, string | string[]>
	formData: Pick<IContactFormValidation, 'address' | 'subject' | 'message' | 'setAddress' | 'setSubject' | 'setMessage' | 'getAddressValidators'>
}

const SingleInputs: React.FC<ISingleInputsProps> = ({
	text,
	formData,
}) => {
	const labels = Array.isArray(text.label) ? text.label : []

	return (
		<>
			<Input
				value={formData.address}
				type="text"
				id="address"
				label={labels[4] ?? 'Address'}
				onChange={(value: string) => formData.setAddress(value)}
			/>
			<Input
				value={formData.subject}
				type="text"
				id="subject"
				label={labels[5] ?? 'Subject'}
				onChange={(value: string) => formData.setSubject(value)}
			/>
			<Input
				value={formData.message}
				type="textarea"
				id="message"
				label={labels[6] ?? 'Message'}
				required
				onChange={(value: string) => formData.setMessage(value)}
				validator={formData.getAddressValidators(
					(text.errorMessage as string) ?? 'Message is required',
				)}
			/>
		</>
	)
}

export default SingleInputs
