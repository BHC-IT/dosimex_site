import * as CSS from 'csstype'
import React from 'react'
import PhoneInput from 'react-phone-number-input'

import { IContactFormValidation } from '../../Hooks/useContactFormValidation'
import Input from '../Input'

import 'react-phone-number-input/style.css'

interface IStyles {
	divNameMail: CSS.Properties
	phoneInput: CSS.Properties
	input: CSS.Properties
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
}

const PhoneEnterpriseRow: React.FC<IPhoneEnterpriseRowProps> = ({
	text,
	style,
	formData,
}) => {
	const labels = Array.isArray(text.label) ? text.label : []

	const handlePhoneChange = (value: string | undefined) => {
		formData.setPhone(value)
		formData.validatePhone(value)
	}

	return (
		<div style={style.divNameMail ?? defaultStyles.divNameMail}>
			<div style={style.phoneInput ?? defaultStyles.phoneInput}>
				<label
					htmlFor="phone"
					style={{
						textTransform: 'uppercase',
						color: 'var(--grey)',
						fontSize: '2rem',
						display: 'block',
					}}
				>
					{labels[2] ?? 'Phone'}
				</label>
				<PhoneInput
					id="phone"
					value={formData.phone}
					onChange={handlePhoneChange}
					defaultCountry="FR"
					style={{
						width: '100%',
					}}
					className={`phone-input-custom ${formData.phoneError ? 'phone-input-error' : ''}`}
				/>
				{formData.phoneError && (
					<p style={{ color: 'red', margin: '4px 0 0 0', fontSize: '1.4rem' }}>
						{formData.phoneError}
					</p>
				)}
			</div>
			<Input
				value={formData.enterprise}
				type="text"
				id="enterprise"
				label={labels[3] ?? 'Enterprise'}
				style={{ divInput: style.input ?? defaultStyles.input }}
				onChange={(value: string) => formData.setEnterprise(value)}
			/>
		</div>
	)
}

export default PhoneEnterpriseRow
