import * as CSS from 'csstype'
import Image from 'next/image'
import Radium from 'radium'
import { BrowserView, MobileView, isMobile } from 'react-device-detect'

import { useIsMobile } from '../Hooks/useIsMobile'
import { useText } from '../Hooks/useText'

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
}

const About = () => {
	const style = useIsMobile(styles)
	const text = useText('About')

	if (style === null) return null

	return (
		<>
			<div
				className='parallax'
				style={{
					display: 'flex',
					alignItems: 'flex-end',
					justifyContent: 'end',
					color: 'var(--light)',
					fontStyle: 'italic',
				}}
			>
				<p style={{ marginRight: '5vw' }}>Cap de la Hague, Site ORANO</p>
			</div>
			{isMobile ? null : (
				<div style={{ position: 'absolute', top: 320, left: 100 }}>
					<Image
						src='/Images/motif_rect.svg'
						alt='Decorative pattern'
						width={343 * 0.9}
						height={334 * 0.9}
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
							<div
								style={{
									...style.circleImage,
									backgroundImage: "url('/Images/Gerald.png')",
								}}
							 />
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
						<MobileView>
							<div style={style.div}>
								<div
									style={{
										...style.circleImage,
										backgroundImage: "url('/Images/Alain.png')",
									}}
								 />
								<h3 style={style.name}>Alain Vivier</h3>
							</div>
						</MobileView>
						<div style={isMobile ? undefined : { marginRight: '5%' }}>
							<p>{text.alain.p[0]}</p>
							<p>{text.alain.p[1]}</p>
							<p>{text.alain.p[2]}</p>
						</div>
						<BrowserView>
							<div style={style.div}>
								<div
									style={{
										...style.circleImage,
										backgroundImage: "url('/Images/Alain.png')",
									}}
								 />
								<h3 style={style.name}>Alain Vivier</h3>
							</div>
						</BrowserView>
					</div>
					<p style={{ marginTop: '5vh' }}>{text.alain.p[3]}</p>
					<p>{text.alain.p[4]}</p>
					<p>{text.alain.p[5]}</p>
					<p>{text.alain.p[6]}</p>
					<p style={{ fontStyle: 'italic', textAlign: 'center', marginTop: '8vh' }}>
						{text.epilogue}
					</p>
				</div>
			</div>
		</>
	)
}

export default Radium(About)

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
})
