import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as CSS from 'csstype'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Tilt from 'react-parallax-tilt'

import { useIsMobile } from '../Hooks/useIsMobile'
import { useText } from '../Hooks/useText'

export interface IStyles {
	global: CSS.Properties
	button: CSS.Properties
	subtitle: CSS.Properties
	card: CSS.Properties
	image: CSS.Properties
	arrow: CSS.Properties
	titleHeading: CSS.Properties
	arrowContainer: CSS.Properties
}

interface IProps {
	icon: string
	title: string
	content: string
	route: string
}

const CardHome = (props: IProps) => {
	const router = useRouter()
	const style = useIsMobile(styles)
	const altText = useText('altText') as { cardIcon: string } | null

	if (style === null) return null

	return (
		<Tilt
			tiltReverse
			scale={1.05}
			tiltMaxAngleX={10}
			tiltMaxAngleY={10}
			style={style.global}
		>
			<button
				aria-label={`Navigate to ${props.title} section - ${props.content}`}
				style={{ ...style.card, border: 'none', background: 'white' }}
				onClick={() => {
					void router.push(props.route)
				}}
			>
				<div style={style.image}>
					<Image
						src={props.icon}
						alt={`${altText?.cardIcon ?? 'Icon'} - ${props.title}`}
						width={80}
						height={80}
						quality={80}
						loading="lazy"
					/>
				</div>
				<h4 style={style.titleHeading}>{props.title}</h4>
				<p style={style.subtitle}>{props.content}</p>
				<div style={style.button}>
					<div style={style.arrowContainer}>
						<FontAwesomeIcon
							icon={faLongArrowAltRight}
							style={style.arrow}
							aria-hidden="true"
						/>
					</div>
				</div>
			</button>
		</Tilt>
	)
}

export default CardHome

export const styles = (mobile: boolean): IStyles => ({
	global: {
		width: mobile ? '100%' : '28%',
		marginBottom: mobile ? '5vh' : undefined,
		minWidth: mobile ? undefined : '250px',
	},
	button: {
		width: '40px',
		height: '40px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '20px',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: '2vh',
		marginBottom: '4vh',
		backgroundColor: 'var(--main)',
		borderRadius: '50%',
		color: 'white',
	},
	card: {
		borderRadius: '10px',
		boxShadow: '1px 2px 2px 2px rgba(0, 0, 0, 0.15)',
		textAlign: 'center' as 'center',
		width: '100%',
		paddingBottom: '2vh',
		height: mobile ? undefined : '47vh',
		cursor: 'pointer',
		paddingTop: '5vh',
	},
	subtitle: {
		color: 'var(--grey)',
		fontSize: mobile ? '1.5rem' : '1.8rem',
		marginBottom: mobile ? '2vh' : '4vh',
		marginLeft: '2%',
		marginRight: '2%',
	},
	image: {
		width: '20%',
		height: '20%',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	arrow: {
		width: mobile ? '5vw' : '1.3vw',
	},
	titleHeading: {
		marginBottom: '0',
	},
	arrowContainer: {
		display: 'flex',
		alignItems: 'center',
	},
})
