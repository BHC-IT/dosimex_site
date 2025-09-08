import * as CSS from 'csstype'
import Link from 'next/link'
import React, { useState } from 'react'

interface IProps {
	name: string
	route: string
	style?: CSS.Properties
}

const Button = (props: IProps) => {
	const [isHovered, setIsHovered] = useState(false)
	const [isFocused, setIsFocused] = useState(false)

	const buttonStyle = {
		...styles.base,
		...(isHovered || isFocused ? styles.hover : {}),
		...props.style,
	}

	return (
		<Link href={`/${props.route}`} replace>
			<button
				style={buttonStyle}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			>
				{props.name}
			</button>
		</Link>
	)
}

export default Button

export const styles = {
	base: {
		padding: '8px 25px',
		backgroundColor: 'var(--main)',
		borderRadius: '50px',
		color: 'white',
		cursor: 'pointer',
		textTransform: 'uppercase' as 'uppercase',
		transition: 'all 0.3s ease 0s',
		border: 'none',
	},
	hover: {
		transform: 'translateY(-4px)',
		boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.1)',
	},
}
