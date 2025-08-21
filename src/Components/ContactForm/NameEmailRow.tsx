import * as CSS from 'csstype'
import React from 'react'

import { IContactFormValidation } from '../../Hooks/useContactFormValidation'
import Input from '../Input'

interface IStyles {
	divNameMail: CSS.Properties
	input: CSS.Properties
}

interface INameEmailRowProps {
	text: Record<string, string | string[]>
	style: Partial<{ divNameMail: CSS.Properties; input: CSS.Properties }>
	formData: Pick<IContactFormValidation, 'name' | 'email' | 'setName' | 'setEmail' | 'setNameValid' | 'getNameValidators' | 'getEmailValidators'>
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

const NameEmailRow: React.FC<INameEmailRowProps> = ({
	text,
	style,
	formData,
}) => {
	const labels = Array.isArray(text.label) ? text.label : []
	const errorEmailArray = Array.isArray(text.errorEmail)
		? text.errorEmail
		: [text.errorEmail || '']

	return (
		<div style={style.divNameMail ?? defaultStyles.divNameMail}>
			<Input
				value={formData.name}
				type="text"
				id="name"
				label={labels[0] ?? 'Name'}
				style={{ divInput: style.input ?? defaultStyles.input }}
				required
				isValid={(isValid: boolean) => formData.setNameValid(isValid)}
				onChange={(value: string) => formData.setName(value)}
				validator={formData.getNameValidators(
					(text.errorName as string) ?? 'Name is required',
				)}
			/>
			<Input
				value={formData.email}
				type="email"
				id="email"
				label={labels[1] ?? 'Email'}
				style={{ divInput: style.input ?? defaultStyles.input }}
				required
				onChange={(value: string) => formData.setEmail(value)}
				validator={formData.getEmailValidators(
					errorEmailArray,
					(text.errorName as string) ?? 'Email is required',
				)}
			/>
		</div>
	)
}

export default NameEmailRow
