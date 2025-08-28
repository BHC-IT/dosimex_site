import { mdiYoutube, mdiLinkedin, mdiPhone } from '@mdi/js'
import Icon from '@mdi/react'
import * as CSS from 'csstype'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'

import { useIsMobile } from '../Hooks/useIsMobile'
import { useText } from '../Hooks/useText'

interface SocialMediaProps {
	text: { col1: { p: string[] } }
	style: IStyles
}

interface ResourcesColumnProps {
	title: string
	links: { href: string; text: string; isExternal?: boolean }[]
	style: IStyles
}

const SocialMediaSection = ({ text, style }: SocialMediaProps) => (
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
)

const ResourcesColumn = ({ title, links, style }: ResourcesColumnProps) => (
	<div style={style.col}>
		<p style={style.colTitle}>{title}</p>
		{links.map((link, index) =>
			link.isExternal ? (
				<a
					key={index}
					href={link.href}
					target='_blank'
					rel='noreferrer noopener'
				>
					<p style={style.linkRessource}>{link.text}</p>
				</a>
			) : (
				<Link
					key={index}
					href={link.href}
					replace
				>
					<p style={style.linkRessource}>{link.text}</p>
				</Link>
			),
		)}
	</div>
)

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

	// Constants for image dimensions
	const TREFLE_BASE_SIZE = 154
	const TREFLE_RATIO = 0.27

	if (style === null) return null

	const resourcesLinks = [
		{ href: '/Videos', text: text.col2.p[0] },
		{ href: '/Manuals', text: text.col2.p[1] },
		{ href: '/Books', text: text.col2.p[2] },
	]

	const aboutLinks = [
		{ href: '/About', text: text.col3.p[0] },
		{ href: '/Folders/Informations_légales.pdf', text: text.col3.p[1], isExternal: true },
		{ href: '/Contact', text: text.col3.p[2] },
	]

	return (
		<footer style={style.footer}>
			<div style={style.col1}>
				<Image
					src='/Images/trefle.png'
					alt={altText?.radiationSymbol ?? 'DOSIMEX radiation safety symbol - clover leaf icon'}
					width={Math.round(TREFLE_BASE_SIZE * TREFLE_RATIO)}
					height={Math.round(TREFLE_BASE_SIZE * TREFLE_RATIO)}
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
				<SocialMediaSection text={text} style={style} />
			</div>
			<div style={style.col2}>
				<ResourcesColumn title={text.col2.title} links={resourcesLinks} style={style} />
				<ResourcesColumn title={text.col3.title} links={aboutLinks} style={style} />
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
