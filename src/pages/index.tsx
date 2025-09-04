import * as CSS from 'csstype'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import React, { useRef } from 'react'
import { BrowserView, MobileView, withOrientationChange } from 'react-device-detect'

import Button from '../Components/Button'
import CardHome from '../Components/CardHome'
import HeroBannerCarousel from '../Components/HeroBannerCarousel'
import OpinionHome from '../Components/OpinionHome'
import References from '../Components/References'
import ScrollButton from '../Components/ScrollButton'
import { useIsMobile } from '../Hooks/useIsMobile'
import { useText } from '../Hooks/useText'

const YouTube = dynamic(() => import('react-youtube'))
const PartnersCarousel = dynamic(() => import('../Components/PartnersCarousel'))

export interface IStyles {
	header: {
		[idx: string]: CSS.Properties
		buttonsContainer: CSS.Properties
		referencesButton: CSS.Properties
	}
	partners: { [idx: string]: CSS.Properties }
	offers: { [idx: string]: CSS.Properties }
	numbers: { [idx: string]: CSS.Properties }
	videos: { [idx: string]: CSS.Properties }
	callToAction: { [idx: string]: CSS.Properties }
	flagContainer: CSS.Properties
	flagText: CSS.Properties
	landscapePadding: CSS.Properties
	videosTitle: CSS.Properties
	numbersBackgroundLandscape: CSS.Properties
	videosIframeLandscape: CSS.Properties
}

interface IProps {
	isLandscape: boolean
}

function Home(props: IProps) {
	const text = useText('Home')
	const altText = useText('altText') as { flagUk: string; decorativePattern: string } | null
	const style = useIsMobile(styles)
	const referencesRef = useRef<HTMLElement>(null)

	const scrollToReferences = () => {
		referencesRef.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	}

	// Constants for image dimensions
	const UK_FLAG_WIDTH = 1024
	const UK_FLAG_HEIGHT = 683
	const UK_FLAG_RATIO = 0.05
	const MOTIF_WIDTH = 343
	const MOTIF_HEIGHT = 334
	const MOTIF_SCALE = 1.3

	if (style === null) return null
	return (
		<>
			<header
				className='container'
				style={style.header.header}
			>
				<div style={style.header.headerText}>
					<h1>{text.header.title}</h1>
					<p style={style.header.headerSubtitle}>{text.header.p}</p>
					<div style={style.flagContainer}>
						<Image
							quality={75}
							loading='lazy'
							src='/Images/Flag_Uk.webp'
							alt={altText?.flagUk ?? 'UK flag - DOSIMEX available in English'}
							width={UK_FLAG_WIDTH * UK_FLAG_RATIO}
							height={UK_FLAG_HEIGHT * UK_FLAG_RATIO}
						/>
						<p style={{ ...style.header.headerPromo, ...style.flagText }}>
							{text.header.promo}
						</p>
					</div>
					<div style={style.header.buttonsContainer}>
						<Button
							style={style.header.button}
							name={text.header.button}
							route='Software'
						/>
						<ScrollButton
							style={style.header.referencesButton}
							name={text.header.referencesButton}
							onClick={scrollToReferences}
						/>
					</div>
				</div>
				<div style={style.header.headerImage}>
					<div style={style.header.image}>
						<HeroBannerCarousel text={text.header.textImage} />
					</div>
					<div style={style.header.motif}>
						<Image
							src='/Images/motif_rect.svg'
							alt={
								altText?.decorativePattern ??
								'Decorative geometric pattern background'
							}
							width={MOTIF_WIDTH * MOTIF_SCALE}
							height={MOTIF_HEIGHT * MOTIF_SCALE}
							loading='lazy'
							quality={70}
						/>
					</div>
				</div>
			</header>

			<section>
				<h3 style={style.partners.title}>{text.partners.title}</h3>
				<div style={style.partners.banner}>
					<PartnersCarousel />
				</div>
			</section>

			<section style={style.offers.global}>
				<h2 style={style.offers.title}>{text.offers.title}</h2>
				<p style={style.offers.subtitle}>{text.offers.p}</p>
				<div style={props.isLandscape ? style.landscapePadding : undefined}>
					<div
						className='container'
						style={style.offers.divCardHome}
					>
						<CardHome
							icon='/Images/icon_excel.png'
							title={text.offers.card1.title}
							content={text.offers.card1.p}
							route='Software'
						/>
						<CardHome
							icon='/Images/icon_book.png'
							title={text.offers.card2.title}
							content={text.offers.card2.p}
							route='Manuals'
						/>
						<CardHome
							icon='/Images/icon_formation.png'
							title={text.offers.card3.title}
							content={text.offers.card3.p}
							route='Training'
						/>
					</div>
				</div>
			</section>

			<section>
				<div
					style={
						props.isLandscape
							? { ...style.numbers.background, ...style.numbersBackgroundLandscape }
							: style.numbers.background
					}
				>
					<div style={style.numbers.card}>
						<div>
							<h2 style={style.numbers.number}>{text.numbers.number1}</h2>
							<p style={style.numbers.p}>{text.numbers.p1}</p>
						</div>
						<div style={style.numbers.divNumber}>
							<h2 style={style.numbers.number}>{text.numbers.number2}</h2>
							<p style={style.numbers.p}>{text.numbers.p2}</p>
						</div>
						<div>
							<h2 style={style.numbers.number}>{text.numbers.number3}</h2>
							<p style={style.numbers.p}>{text.numbers.p3}</p>
						</div>
					</div>
				</div>
			</section>

			<section style={style.videos.global}>
				<div style={style.videos.motif}>
					<Image
						src='/Images/motif_rect.svg'
						alt={
							altText?.decorativePattern ?? 'Decorative geometric pattern background'
						}
						width={MOTIF_WIDTH * MOTIF_SCALE}
						height={MOTIF_HEIGHT * MOTIF_SCALE}
						loading='lazy'
						quality={70}
					/>
				</div>
				<div style={style.videos.text}>
					<h2 style={style.videosTitle}>{text.videos.title}</h2>
					<p style={style.videos.p}>{text.videos.p}</p>
					<MobileView>
						<div
							style={
								props.isLandscape
									? { ...style.videos.iframe, ...style.videosIframeLandscape }
									: style.videos.iframe
							}
						>
							<YouTube
								videoId={text.videoLink.pres}
								opts={{ height: '170', width: '280' }}
							/>
						</div>
					</MobileView>
					<Button
						name={text.videos.button}
						route='Videos'
					/>
				</div>
				<BrowserView>
					<div style={style.videos.iframe}>
						<YouTube
							videoId={text.videoLink.pres}
							opts={{ height: '320', width: '550' }}
						/>
					</div>
				</BrowserView>
			</section>

			<section>
				<OpinionHome text={text.opinion} />
			</section>

			<section ref={referencesRef}>
				<References text={text.references} />
			</section>

			<div
				className='container'
				style={style.callToAction.global}
			>
				<h2 style={style.callToAction.title}>{text.callToAction.title}</h2>
				<Button
					name={text.callToAction.button}
					route='Product'
				/>
			</div>
		</>
	)
}

export default withOrientationChange(Home)

export const styles = (mobile: boolean): IStyles => ({
	header: {
		header: mobile
			? {
					textAlign: 'center',
					marginTop: '7vh',
				}
			: {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					height: '90vh',
				},
		headerSubtitle: {
			color: 'var(--dark)',
			fontSize: mobile ? '1.6rem' : '2rem',
			marginBottom: mobile ? '6vh' : '4vh',
			marginTop: mobile ? '4vh' : undefined,
			textAlign: 'justify',
			fontWeight: 300,
		},
		headerPromo: {
			color: 'var(--dark)',
			fontSize: mobile ? '1.6rem' : '2rem',
			textAlign: 'justify',
			fontWeight: 300,
		},
		headerImage: {
			display: mobile ? 'none' : undefined,
			width: '30vw',
		},
		headerText: {
			width: mobile ? '100%' : '45%',
		},
		motif: {
			position: 'relative',
			right: '-21vw',
			top: '-120px',
			zIndex: 1,
		},
		image: {
			position: 'absolute',
			zIndex: 100,
			marginRight: '10vw',
		},
		legendImage: {
			color: 'var(--grey)',
			fontSize: '1.8rem',
			marginBottom: '4vh',
			fontStyle: 'italic',
			right: '10vw',
			position: 'absolute',
			marginTop: '0',
		},
		buttonsContainer: {
			display: 'flex',
			flexDirection: mobile ? 'column' : 'row',
			gap: mobile ? '2vh' : '2vw',
			alignItems: 'center',
		},
		button: {
			border: '2px solid var(--main)',
			backgroundColor: 'white',
			color: 'var(--main)',
			minWidth: mobile ? '200px' : '150px',
		},
		referencesButton: {
			minWidth: mobile ? '200px' : '150px',
		},
	},
	partners: {
		title: {
			color: 'var(--flash)',
			fontFamily: 'var(--lato)',
			fontWeight: 900,
			marginLeft: '10vw',
			marginBottom: '4vh',
		},
		banner: {
			backgroundColor: 'rgba(220,70,20,0.1)',
			height: mobile ? '45vh' : '32vh',
			minHeight: '250px',
			paddingTop: '8vh',
			paddingLeft: '5%',
			paddingRight: '5%',
		},
	},
	offers: {
		global: {
			display: 'flex',
			justifyContent: 'center',
			flexDirection: 'column',
			alignItems: 'center',
		},
		title: {
			textAlign: 'center',
			marginTop: '17vh',
			marginBottom: '0',
		},
		subtitle: {
			color: 'var(--grey)',
			fontSize: mobile ? '1.6rem' : '1.8rem',
			marginBottom: '4vh',
			textAlign: mobile ? 'justify' : 'center',
			width: mobile ? '80%' : '50%',
		},
		divCardHome: {
			display: 'flex',
			justifyContent: 'space-between',
			flexDirection: mobile ? 'column' : undefined,
			width: mobile ? '90%' : undefined,
			margin: mobile ? 'auto' : undefined,
		},
	},
	numbers: {
		background: {
			marginTop: mobile ? '10vh' : '20vh',
			backgroundColor: 'var(--flash)',
			width: '100vw',
			height: mobile ? '57vh' : '20vh',
			paddingTop: mobile ? '3vh' : '8vh',
			marginBottom: mobile ? undefined : '35vh',
		},
		card: mobile
			? {
					display: 'flex',
					flexDirection: 'column',
					paddingLeft: '15vw',
				}
			: {
					display: 'flex',
					alignContent: 'center',
					justifyContent: 'space-around',
					borderRadius: '20px',
					boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.1)',
					width: '80%',
					marginLeft: 'auto',
					marginRight: 'auto',
					position: 'relative',
					zIndex: 100,
					paddingBottom: '4vh',
					paddingTop: '4vh',
					backgroundColor: 'white',
				},
		divNumber: {
			width: mobile ? '35%' : undefined,
		},
		number: {
			color: 'var(--main)',
			marginBottom: '0',
			lineHeight: '1',
			fontSize: mobile ? '2.4rem' : undefined,
		},
		p: {
			color: mobile ? 'var(--dark)' : 'var(--grey)',
			fontSize: mobile ? '1.45rem' : '1.8rem',
		},
	},
	videos: {
		motif: {
			display: mobile ? 'none' : undefined,
		},
		global: {
			display: 'flex',
			flexDirection: mobile ? 'column' : undefined,
			alignItems: 'center',
			marginTop: mobile ? '15vh' : '20vh',
			marginBottom: '20vh',
		},
		text: {
			marginLeft: mobile ? undefined : '6vw',
			marginRight: mobile ? undefined : '5vw',
			width: mobile ? '80%' : '30%',
			textAlign: mobile ? 'justify' : undefined,
		},
		p: {
			color: 'var(--grey)',
			fontSize: mobile ? '1.6rem' : '1.8rem',
			marginBottom: '5vh',
		},
		iframe: {
			width: mobile ? '70vw' : '25vw',
			height: mobile ? '27vh' : '34vh',
			marginBottom: mobile ? '6vh' : undefined,
			marginTop: mobile ? '2vh' : undefined,
		},
	},
	callToAction: {
		global: {
			textAlign: 'center',
			paddingBottom: '30vh',
			paddingTop: '16vh',
		},
		title: {
			fontSize: mobile ? '3rem' : '4.2rem',
		},
	},
	flagContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'start',
		alignItems: 'center',
		flex: 0,
		paddingBottom: '5vh',
	},
	flagText: {
		paddingLeft: '1vw',
	},
	landscapePadding: {
		padding: '0 10vw',
	},
	videosTitle: {
		marginTop: '0',
	},
	numbersBackgroundLandscape: {
		height: '85vh',
	},
	videosIframeLandscape: {
		width: '40vw',
		height: '50vh',
		marginRight: 'auto',
		marginLeft: 'auto',
	},
})
