import * as CSS from 'csstype'
import React, { useState, useMemo, useCallback } from 'react'

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

const SubmitButton: React.FC<ISubmitButtonProps> = React.memo(({ style, text, isLoading }) => {
	const [isHovered, setIsHovered] = useState(false)
	const [isFocused, setIsFocused] = useState(false)

	// Memoize button style calculation
	const buttonStyle = useMemo(() => ({
		...defaultStyles.base,
		...((isHovered || isFocused) && !isLoading ? defaultStyles.hover : {}),
		...style.button,
	}), [isHovered, isFocused, isLoading, style.button])

	// Memoize text values
	const { sendingText, buttonText } = useMemo(() => ({
		sendingText: text.sending ?? 'Loading...',
		buttonText: text.button ?? 'Submit',
	}), [text.sending, text.button])

	// Memoize event handlers
	const handleMouseEnter = useCallback(() => setIsHovered(true), [])
	const handleMouseLeave = useCallback(() => setIsHovered(false), [])
	const handleFocus = useCallback(() => setIsFocused(true), [])
	const handleBlur = useCallback(() => setIsFocused(false), [])

	return (
		<button
			style={buttonStyle}
			type="submit"
			disabled={isLoading}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onFocus={handleFocus}
			onBlur={handleBlur}
		>
			{isLoading ? (
				<div style={defaultStyles.loadingContainer}>
					{sendingText}
				</div>
			) : (
				buttonText
			)}
		</button>
	)
})

export default SubmitButton
