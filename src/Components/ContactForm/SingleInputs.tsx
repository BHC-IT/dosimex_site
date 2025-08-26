import React, { useMemo } from 'react'

import { IContactFormValidation } from '../../Hooks/useContactFormValidation'
import Input from '../Input'

interface ISingleInputsProps {
	text: Record<string, string | string[]>
	formData: Pick<IContactFormValidation, 'address' | 'subject' | 'message' | 'setAddress' | 'setSubject' | 'setMessage' | 'getAddressValidators'>
}

const SingleInputs: React.FC<ISingleInputsProps> = React.memo(({
	text,
	formData,
}) => {
	// Memoize parsed values to avoid recalculation
	const { labels, errorMessage } = useMemo(() => ({
		labels: Array.isArray(text.label) ? text.label : [],
		errorMessage: (text.errorMessage as string) ?? 'Message is required',
	}), [text.label, text.errorMessage])

	return (
		<>
			<Input
				value={formData.address}
				type="text"
				id="address"
				label={labels[4] ?? 'Address'}
				onChange={formData.setAddress}
			/>
			<Input
				value={formData.subject}
				type="text"
				id="subject"
				label={labels[5] ?? 'Subject'}
				onChange={formData.setSubject}
			/>
			<Input
				value={formData.message}
				type="textarea"
				id="message"
				label={labels[6] ?? 'Message'}
				required
				onChange={formData.setMessage}
				validator={formData.getAddressValidators(errorMessage)}
			/>
		</>
	)
})

export default SingleInputs
