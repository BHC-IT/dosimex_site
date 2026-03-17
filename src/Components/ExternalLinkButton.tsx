import * as CSS from 'csstype'
import React, { useState } from 'react'

interface IProps {
	name: string
	href: string
	style?: CSS.Properties
}

const ExternalLinkButton = (props: IProps) => {
	const [isHovered, setIsHovered] = useState(false)
	const [isFocused, setIsFocused] = useState(false)

	const buttonStyle: CSS.Properties = {
		...styles.base,
		...(isHovered || isFocused ? styles.hover : {}),
		...props.style,
	}

	return (
		<a
			href={props.href}
			target="_blank"
			rel="noreferrer noopener"
			aria-label={`Open ${props.name} (opens in new tab)`}
			style={styles.link}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onFocus={() => setIsFocused(true)}
			onBlur={() => setIsFocused(false)}
		>
			<span style={buttonStyle}>
				{props.name}
			</span>
		</a>
	)
}

export default ExternalLinkButton

export const styles = {
	link: {
		textDecoration: 'none',
	} as CSS.Properties,
	base: {
		padding: '8px 25px',
		backgroundColor: 'var(--main)',
		borderRadius: '50px',
		color: 'white',
		cursor: 'pointer',
		textTransform: 'uppercase' as 'uppercase',
		transition: 'all 0.3s ease 0s',
		border: 'none',
		display: 'inline-block',
	} as CSS.Properties,
	hover: {
		transform: 'translateY(-4px)',
		boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.1)',
	} as CSS.Properties,
}
