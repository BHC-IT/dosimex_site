import Link from 'next/link'
import Radium from 'radium'
import * as CSS from 'csstype'

interface IProps {
	name: string
	route: string
	style?: CSS.Properties
}

const Button = (props: IProps) => {
	return (
		<Link
			href={`/${props.route}`}
			replace={true}
		>
			<button style={{ ...styles, ...props.style }}>{props.name}</button>
		</Link>
	)
}

export default Radium(Button)

export const styles = {
	padding: '8px 25px',
	backgroundColor: 'var(--main)',
	borderRadius: '50px',
	color: 'white',
	cursor: 'pointer',
	textTransform: 'uppercase' as 'uppercase',
	transition: 'all 0.3s ease 0s',
	':hover': {
		transform: 'translateY(-4px)',
		boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.1)',
	},
}
