import * as CSS from 'csstype'
import React from 'react'

interface ISubmitButtonProps {
	style: Partial<{
		button: CSS.Properties & {
			':hover'?: CSS.Properties
		}
	}>
	text: Record<string, string | string[]>
	isLoading: boolean
}

const defaultStyles = {
	button: {
		backgroundColor: 'var(--main)',
		color: 'white',
		border: 'none',
		borderRadius: '50px',
		padding: '15px 30px',
		fontSize: '1.6rem',
		fontWeight: 'bold',
		cursor: 'pointer',
		transition: 'all 0.3s ease',
		minWidth: '150px',
		':hover': {
			backgroundColor: 'var(--dark)',
			transform: 'translateY(-2px)',
		},
	},
}

const SubmitButton: React.FC<ISubmitButtonProps> = ({ style, text, isLoading }) => (
	<button
		style={style.button ?? defaultStyles.button}
		type="submit"
		disabled={isLoading}
	>
		{isLoading ? (
			<div style={{ display: 'block', margin: '0 auto' }}>
				{text.sending ?? 'Loading...'}
			</div>
		) : (
			(text.button ?? 'Submit')
		)}
	</button>
)

export default SubmitButton
