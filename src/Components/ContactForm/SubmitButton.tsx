import * as CSS from 'csstype'
import React, { useState } from 'react'

interface ISubmitButtonProps {
	style: Partial<{
		button: CSS.Properties
	}>
	text: Record<string, string | string[]>
	isLoading: boolean
}

const defaultStyles = {
	base: {
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
	},
	hover: {
		backgroundColor: 'var(--dark)',
		transform: 'translateY(-2px)',
	},
	loadingContainer: {
		display: 'block',
		margin: '0 auto',
	},
}

const SubmitButton: React.FC<ISubmitButtonProps> = ({ style, text, isLoading }) => {
	const [isHovered, setIsHovered] = useState(false)

	const buttonStyle = {
		...defaultStyles.base,
		...(isHovered && !isLoading ? defaultStyles.hover : {}),
		...style.button,
	}

	return (
		<button
			style={buttonStyle}
			type="submit"
			disabled={isLoading}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{isLoading ? (
				<div style={defaultStyles.loadingContainer}>
					{text.sending ?? 'Loading...'}
				</div>
			) : (
				(text.button ?? 'Submit')
			)}
		</button>
	)
}

export default SubmitButton
