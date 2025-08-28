import * as CSS from 'csstype'
import Image from 'next/image'

import { useIsMobile, useMobile } from '../Hooks/useIsMobile'
import { useText } from '../Hooks/useText'

// Constants for motif image dimensions
const MOTIF_WIDTH = 343
const MOTIF_HEIGHT = 334
const MOTIF_SCALE_ABOUT = 0.9

export interface IStyles {
	global: CSS.Properties
	title: CSS.Properties
	div: CSS.Properties
	circleImage: CSS.Properties
	name: CSS.Properties
	section: CSS.Properties
	sectionFlex: CSS.Properties
	pFlex: CSS.Properties
	pBorder: CSS.Properties
	parallaxContainer: CSS.Properties
	parallaxText: CSS.Properties
	motifPosition: CSS.Properties
	geraldBackground: CSS.Properties
	alainBackground: CSS.Properties
	desktopMarginRight: CSS.Properties
	alainParagraphMargin: CSS.Properties
	epilogue: CSS.Properties
}

const About = () => {
	const style = useIsMobile(styles)
	const isMobile = useMobile()
	const text = useText('About')
	const altText = useText('altText') as { decorativePattern: string } | null

	if (style === null) return null

	return (
		<>
			<div
				className='parallax'
				style={style.parallaxContainer}
			>
				<p style={style.parallaxText}>Cap de la Hague, Site ORANO</p>
			</div>
			{isMobile ? null : (
				<div style={style.motifPosition}>
					<Image
						src='/Images/motif_rect.svg'
						alt={altText?.decorativePattern ?? 'Decorative geometric pattern background'}
						width={MOTIF_WIDTH * MOTIF_SCALE_ABOUT}
						height={MOTIF_HEIGHT * MOTIF_SCALE_ABOUT}
						loading="lazy"
						quality={70}
					/>
				</div>
			)}
			<h2 style={style.title}>{text.header.title}</h2>
			<div
				className='container'
				style={style.global}
			>
				<div style={style.section}>
					<div style={style.sectionFlex}>
						<div style={style.div}>
							<div style={{ ...style.circleImage, ...style.geraldBackground }} />
							<h3 style={style.name}>Gérald Lopez</h3>
						</div>
						<div style={style.pFlex}>
							<p>{text.gerald.p[0]}</p>
							<p>{text.gerald.p[1]}</p>
							<p>{text.gerald.p[2]}</p>
						</div>
					</div>
					<p>{text.gerald.p[3]}</p>
					<div style={style.pBorder}>
						<p>{text.gerald.pBorder[0]}</p>
						<p>{text.gerald.pBorder[1]}</p>
						<p>{text.gerald.pBorder[2]}</p>
						<p>{text.gerald.pBorder[3]}</p>
						<p>{text.gerald.pBorder[4]}</p>
					</div>
					<p>{text.gerald.p[4]}</p>
				</div>
				<div style={style.section}>
					<div style={style.sectionFlex}>
						{isMobile && (
							<div style={style.div}>
								<div style={{ ...style.circleImage, ...style.alainBackground }} />
								<h3 style={style.name}>Alain Vivier</h3>
							</div>
						)}
						<div style={isMobile ? undefined : style.desktopMarginRight}>
							<p>{text.alain.p[0]}</p>
							<p>{text.alain.p[1]}</p>
							<p>{text.alain.p[2]}</p>
						</div>
						{!isMobile && (
							<div style={style.div}>
								<div style={{ ...style.circleImage, ...style.alainBackground }} />
								<h3 style={style.name}>Alain Vivier</h3>
							</div>
						)}
					</div>
					<p style={style.alainParagraphMargin}>{text.alain.p[3]}</p>
					<p>{text.alain.p[4]}</p>
					<p>{text.alain.p[5]}</p>
					<p>{text.alain.p[6]}</p>
					<p style={style.epilogue}>
						{text.epilogue}
					</p>
				</div>
			</div>
		</>
	)
}

export default About

export const styles = (mobile: boolean): IStyles => ({
	global: {
		color: 'var(--dark)',
		textAlign: 'justify',
		lineHeight: '3.2rem',
	},
	title: {
		marginTop: '-33vh',
		fontSize: mobile ? '4.5rem' : '6rem',
		position: 'relative',
		zIndex: 2,
		color: 'var(--dark)',
		textAlign: 'center',
		marginBottom: '20vh',
	},
	div: {
		height: mobile ? undefined : '45vh',
		width: mobile ? '100%' : '30vw',
		display: mobile ? 'flex' : undefined,
		flexDirection: mobile ? 'column' : undefined,
		alignItems: mobile ? 'center' : undefined,
	},
	circleImage: {
		width: mobile ? '180px' : '370px',
		height: mobile ? '180px' : '370px',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		borderRadius: '50%',
	},
	name: {
		textAlign: 'center',
		fontFamily: 'var(--lato)',
		fontSize: '2.8rem',
		fontWeight: 900,
	},
	section: {
		marginTop: '8vh',
		marginBottom: '15vh',
	},
	sectionFlex: {
		display: 'flex',
		flexDirection: mobile ? 'column' : undefined,
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: '2vh',
	},
	pFlex: {
		padding: mobile ? undefined : '5% 0 5% 5%',
	},
	pBorder: {
		paddingLeft: '3vw',
		marginLeft: '3vw',
		marginTop: '5vh',
		marginBottom: '5vh',
		borderLeft: '3px solid var(--flash)',
	},
	parallaxContainer: {
		display: 'flex',
		alignItems: 'flex-end',
		justifyContent: 'end',
		color: 'var(--light)',
		fontStyle: 'italic',
	},
	parallaxText: {
		marginRight: '5vw',
	},
	motifPosition: {
		position: 'absolute',
		top: '320px',
		left: '100px',
	},
	geraldBackground: {
		backgroundImage: "url('/Images/Gerald.png')",
	},
	alainBackground: {
		backgroundImage: "url('/Images/Alain.png')",
	},
	desktopMarginRight: {
		marginRight: '5%',
	},
	alainParagraphMargin: {
		marginTop: '5vh',
	},
	epilogue: {
		fontStyle: 'italic',
		textAlign: 'center',
		marginTop: '8vh',
	},
})
