import * as CSS from 'csstype'
import React, { useMemo } from 'react'

import { IContactFormValidation } from '../../Hooks/useContactFormValidation'
import Input from '../Input'

interface IStyles {
	divNameMail: CSS.Properties
	input: CSS.Properties
}

interface INameEmailRowProps {
	text: Record<string, string | string[]>
	style: Partial<{ divNameMail: CSS.Properties; input: CSS.Properties }>
	formData: Pick<
		IContactFormValidation,
		| 'name'
		| 'email'
		| 'setName'
		| 'setEmail'
		| 'setNameValid'
		| 'getNameValidators'
		| 'getEmailValidators'
	>
}

const defaultStyles: IStyles = {
	divNameMail: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		gap: '1rem',
	},
	input: {
		flexBasis: 'calc(50% - 0.5rem)',
		minWidth: '250px',
	},
}

const NameEmailRow: React.FC<INameEmailRowProps> = React.memo(({
	text,
	style,
	formData,
}) => {
	// Memoize parsed values to avoid recalculation on every render
	const { labels, errorEmailArray, containerStyle, inputStyle } = useMemo(
		() => ({
			labels: Array.isArray(text.label) ? text.label : [],
			errorEmailArray: Array.isArray(text.errorEmail)
				? text.errorEmail
				: [text.errorEmail || ''],
			containerStyle: style.divNameMail ?? defaultStyles.divNameMail,
			inputStyle: { divInput: style.input ?? defaultStyles.input },
		}),
		[text.label, text.errorEmail, style.divNameMail, style.input],
	)

	// Memoize error messages
	const errorMessages = useMemo(
		() => ({
			name: (text.errorName as string) ?? 'Name is required',
			email: (text.errorName as string) ?? 'Email is required',
		}),
		[text.errorName],
	)

	return (
		<div style={containerStyle}>
			<Input
				value={formData.name}
				type='text'
				id='name'
				label={labels[0] ?? 'Name'}
				style={inputStyle}
				required
				isValid={formData.setNameValid}
				onChange={formData.setName}
				validator={formData.getNameValidators(errorMessages.name)}
			/>
			<Input
				value={formData.email}
				type='email'
				id='email'
				label={labels[1] ?? 'Email'}
				style={inputStyle}
				required
				onChange={formData.setEmail}
				validator={formData.getEmailValidators(errorEmailArray)}
			/>
		</div>
	)
})

NameEmailRow.displayName = 'NameEmailRow'

export default NameEmailRow
