import * as CSS from 'csstype'
import Radium from 'radium'
import * as React from 'react'

import { useIsMobile } from '../Hooks/useIsMobile'

export interface IStyles {
	button: CSS.Properties,
	global: CSS.Properties,
	icon: CSS.Properties,
	text: CSS.Properties,
	peopleInfo?: CSS.Properties,
}

interface IProps {
	text: {[$:string]: string},
}

const OpinionHome = (props: IProps) => {

	const style = useIsMobile(styles)

	if (style === null)
		return null

	return (
		<div style={style.global}>
			<div style={style.peopleInfo}>
				<h5 style={{ fontSize: '1.8rem', margin: '0' }}>{props.text.name}</h5>
				<p style={{ margin: '0' }}>{props.text.job}</p>
			</div>
			<div style={{ margin: '4vh 0' }}>
				<img src="/Images/icon_quote.png" alt="icône citation" />
				<p style={style.text}>{props.text.opinion}</p>
			</div>
			<a
				style={style.button}
				href="../Folders/extrait_retour_utilisateurs.pdf"
				target="_blank"
				rel="noreferrer noopener">{props.text.btn}
				<img style={style.icon} src="/Images/icon_download.png" alt="icône télécharger" />
			</a>
		</div>
	)

}

export default Radium(OpinionHome)

export const styles = (mobile: boolean): IStyles => ({
	button: {
		padding: '8px 25px',
		border: '2px solid var(--main)',
		borderRadius: '50px',
		color: 'var(--main)',
		textTransform: 'uppercase',
		transition: 'all 0.3s ease 0s',
		':hover': {
			transform: 'translateY(-4px)',
			boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.1)',
		},
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
		width: '220px',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: '7vh',
		marginBottom: '2vh',
	} as CSS.Properties,
	global: {
		backgroundColor: 'var(--grey-bg)',
		padding: '10vh 10vw',
	},
	icon: {
			width: mobile ? '4.7vw' : '1.2vw',
			minWidth: mobile ? undefined : '25px',
			maxWidth: mobile ? '25px' : undefined,
	},
	text: {
		textAlign: 'justify',
		fontSize: mobile ? '1.5rem' : undefined,
	},
})
