import { mdiYoutube, mdiLinkedin, mdiPhone } from '@mdi/js'
import Icon from '@mdi/react'
import * as CSS from 'csstype'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'

import { useIsMobile } from '../Hooks/useIsMobile'
import { useText } from '../Hooks/useText'

export interface IStyles {
	footer: CSS.Properties
	col1: CSS.Properties
	col2: CSS.Properties
	col: CSS.Properties
	colTitle: CSS.Properties
	divPhone: CSS.Properties
	phoneText: CSS.Properties
	divSocialMedia: CSS.Properties
	divIconSocial: CSS.Properties
	iconSocial: CSS.Properties
	pSocialMedia: CSS.Properties
	textSocialMedia: CSS.Properties
	linkRessource: CSS.Properties
}

const Footer = () => {
	const text = useText('Footer')
	const altText = useText('altText') as { radiationSymbol: string } | null
	const style = useIsMobile(styles)

	const ratio = 0.27

	if (style === null) return null

	return (
		<footer style={style.footer}>
			<div style={style.col1}>
				<Image
					src='/Images/trefle.png'
					alt={altText?.radiationSymbol ?? 'DOSIMEX radiation safety symbol - clover leaf icon'}
					width={Math.round(154 * ratio)}
					height={Math.round(154 * ratio)}
					quality={75}
					loading="lazy"
				/>
				<p>{text.col1.p[0]}</p>
				<p>{text.col1.p[1]}</p>
				<div style={style.divPhone}>
					<Icon
						path={mdiPhone}
						size={1.8}
					/>
					<p style={style.phoneText}>{text.col1.p[2]}</p>
				</div>
				<div style={style.divSocialMedia}>
					<div style={style.divIconSocial}>
						<div style={style.iconSocial}>
							<a
								href='https://www.youtube.com/channel/UCmijJyGaFfJte4xsTk90MVA/featured'
								target='_blank'
								rel='noreferrer noopener'
							>
								<Icon
									path={mdiYoutube}
									size={2}
								/>
							</a>
						</div>
						<div style={style.iconSocial}>
							<a
								href='https://fr.linkedin.com/company/dosimex'
								target='_blank'
								rel='noreferrer noopener'
							>
								<Icon
									path={mdiLinkedin}
									size={1.6}
								/>
							</a>
						</div>
					</div>
					<div style={style.textSocialMedia}>
						<p style={style.pSocialMedia}>{text.col1.p[3]}</p>
					</div>
				</div>
			</div>
			<div style={style.col2}>
				<div style={style.col}>
					<p style={style.colTitle}>{text.col2.title}</p>
					<Link
						href='/Videos'
						replace
					>
						<p style={style.linkRessource}>{text.col2.p[0]}</p>
					</Link>
					<Link
						href='/Manuals'
						replace
					>
						<p style={style.linkRessource}>{text.col2.p[1]}</p>
					</Link>
					<Link
						href='/Books'
						replace
					>
						<p style={style.linkRessource}>{text.col2.p[2]}</p>
					</Link>
				</div>
				<div style={style.col}>
					<p style={style.colTitle}>{text.col3.title}</p>
					<Link
						href='/About'
						replace
					>
						<p style={style.linkRessource}>{text.col3.p[0]}</p>
					</Link>
					<a
						href='/Folders/Informations_légales.pdf'
						target='_blank'
						rel='noreferrer noopener'
					>
						<p style={style.linkRessource}>{text.col3.p[1]}</p>
					</a>
					<Link
						href='/Contact'
						replace
					>
						<p style={style.linkRessource}>{text.col3.p[2]}</p>
					</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer

export const styles = (mobile: boolean): IStyles => ({
	footer: {
		display: 'flex',
		flexDirection: mobile ? 'column' : 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '7vh 5vw',
		backgroundColor: 'var(--dark)',
		color: 'var(--light)',
	},
	col1: {
		width: mobile ? '80%' : '30%',
	},
	col2: {
		width: mobile ? '80%' : '50%',
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: mobile ? 'column' : undefined,
		justifyContent: 'center',
	},
	col: {
		width: mobile ? '80%' : '40%',
	},
	colTitle: {
		fontFamily: 'var(--lato)',
		fontWeight: 700,
		fontSize: '2.4rem',
	},
	divPhone: {
		display: 'flex',
		alignItems: 'center',
	},
	phoneText: {
		marginLeft: '0.5vw',
	},
	divSocialMedia: {
		display: 'flex',
		alignItems: 'center',
	},
	divIconSocial: {
		display: 'flex',
		alignItems: 'center',
	},
	iconSocial: {
		marginRight: '0.5vw',
		cursor: 'pointer',
	},
	textSocialMedia: {
		width: mobile ? '60%' : '30%',
	},
	pSocialMedia: {
		margin: '0',
		color: 'var(--main)',
		fontFamily: 'Leckerli One, cursive',
		fontSize: '1.8rem',
		marginLeft: '1vw',
	},
	linkRessource: {
		cursor: 'pointer',
	},
})
