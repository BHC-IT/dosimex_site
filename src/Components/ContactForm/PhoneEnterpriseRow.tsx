import * as CSS from 'csstype'
import React, { useMemo, useCallback } from 'react'
import PhoneInput from 'react-phone-number-input'

import { IContactFormValidation } from '../../Hooks/useContactFormValidation'
import Input from '../Input'

import 'react-phone-number-input/style.css'

interface IStyles {
	divNameMail: CSS.Properties
	phoneInput: CSS.Properties
	input: CSS.Properties
	phoneLabel: CSS.Properties
	phoneInputField: CSS.Properties
	phoneError: CSS.Properties
}

interface IPhoneEnterpriseRowProps {
	text: Record<string, string | string[]>
	style: Partial<{ divNameMail: CSS.Properties; phoneInput: CSS.Properties; input: CSS.Properties }>
	formData: Pick<IContactFormValidation, 'phone' | 'phoneError' | 'enterprise' | 'setPhone' | 'setEnterprise' | 'validatePhone'>
}

const defaultStyles: IStyles = {
	divNameMail: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		gap: '1rem',
	},
	phoneInput: {
		flexBasis: 'calc(50% - 0.5rem)',
		minWidth: '250px',
		display: 'flex',
		flexDirection: 'column',
		padding: '1.5vh 0',
	},
	input: {
		flexBasis: 'calc(50% - 0.5rem)',
		minWidth: '250px',
	},
	phoneLabel: {
		textTransform: 'uppercase',
		color: 'var(--grey)',
		fontSize: '2rem',
		display: 'block',
	},
	phoneInputField: {
		width: '100%',
	},
	phoneError: {
		color: 'red',
		margin: '4px 0 0 0',
		fontSize: '1.4rem',
	},
}

const PhoneEnterpriseRow: React.FC<IPhoneEnterpriseRowProps> = React.memo(function PhoneEnterpriseRow({
	text,
	style,
	formData,
}) {
	// Memoize parsed values and styles
	const { labels, containerStyle, phoneContainerStyle, inputStyle, phoneInputClass } = useMemo(() => ({
		labels: Array.isArray(text.label) ? text.label : [],
		containerStyle: style.divNameMail ?? defaultStyles.divNameMail,
		phoneContainerStyle: style.phoneInput ?? defaultStyles.phoneInput,
		inputStyle: { divInput: style.input ?? defaultStyles.input },
		phoneInputClass: `phone-input-custom ${formData.phoneError ? 'phone-input-error' : ''}`,
	}), [text.label, style.divNameMail, style.phoneInput, style.input, formData.phoneError])

	// Memoize callback to prevent unnecessary re-renders of PhoneInput
	const handlePhoneChange = useCallback((value: string | undefined) => {
		formData.setPhone(value)
		formData.validatePhone(value)
	}, [formData])

	return (
		<div style={containerStyle}>
			<div style={phoneContainerStyle}>
				<label
					htmlFor="phone"
					style={defaultStyles.phoneLabel}
				>
					{labels[2] ?? 'Phone'}
				</label>
				<PhoneInput
					id="phone"
					value={formData.phone}
					onChange={handlePhoneChange}
					defaultCountry="FR"
					style={defaultStyles.phoneInputField}
					className={phoneInputClass}
				/>
				{formData.phoneError && (
					<p style={defaultStyles.phoneError}>
						{formData.phoneError}
					</p>
				)}
			</div>
			<Input
				value={formData.enterprise}
				type="text"
				id="enterprise"
				label={labels[3] ?? 'Enterprise'}
				style={inputStyle}
				onChange={formData.setEnterprise}
			/>
		</div>
	)
})

export default PhoneEnterpriseRow
