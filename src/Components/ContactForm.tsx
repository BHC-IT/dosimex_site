import * as CSS from 'csstype'
import Radium from 'radium'
import React from 'react'

import { useIsMobile } from '../Hooks/useIsMobile'
import { useText } from '../Hooks/useText'
import { useContactFormValidation } from '../Hooks/useContactFormValidation'

import NameEmailRow from './ContactForm/NameEmailRow'
import PhoneEnterpriseRow from './ContactForm/PhoneEnterpriseRow'
import SingleInputs from './ContactForm/SingleInputs'
import SubmitButton from './ContactForm/SubmitButton'

import 'react-toastify/dist/ReactToastify.css'

interface IProps {
	// No props needed since we'll use hooks directly
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

const ContactForm: React.FC<IProps> = () => {
	const text = useText('ContactForm') as Record<string, string | string[]> | null
	const style = useIsMobile(styles)
	const formData = useContactFormValidation(text ?? undefined)

	// Don't render until device detection is complete to prevent hydration mismatch
	if (style === null) return null

	return (
		<form
			style={style?.form ?? defaultStyles.form}
			onSubmit={formData.handleSubmit}
		>
			<h3 style={style?.title ?? defaultStyles.title}>{text?.title}</h3>
			<NameEmailRow
				text={text ?? {}}
				style={style ?? defaultStyles}
				formData={formData}
			/>
			<PhoneEnterpriseRow
				text={text ?? {}}
				style={style ?? defaultStyles}
				formData={formData}
			/>
			<SingleInputs
				text={text ?? {}}
				formData={formData}
			/>
			<SubmitButton
				style={style ?? defaultStyles}
				text={text ?? {}}
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

const defaultStyles: IStyles = styles(false)

export default Radium(ContactForm)
