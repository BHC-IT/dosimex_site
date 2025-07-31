import * as CSS from 'csstype'
import React, { useState } from 'react'
import { useIsMobile, useDeviceType } from '../Hooks/useIsMobile'
import { useText } from '../Hooks/useText'
import { last } from '@bhc/ts-tools'
import Carousel from 'react-multi-carousel'
import Radium from 'radium'
import 'react-multi-carousel/lib/styles.css'

interface IMapOfStyle {
	[i: string]: CSS.Properties
}

interface IMapOf<A> {
	[i: string]: A
}

type IStyles = IMapOf<IMapOfStyle | IMapOf<IMapOfStyle>>

interface ICardProps {
	text: string
	style: IMapOfStyle
	link: string
	url: string
	color?: string
	isMobile: boolean
	isTablet: boolean
}

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1200 },
		items: 3,
		slidesToSlide: 3, // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1200, min: 464 },
		items: 2,
		slidesToSlide: 2, // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
}

const partners = [
	{
		link: 'logo_partenaires/alara.webp',
		url: 'https://www.alara-expertise.fr',
	},
	{
		link: 'logo_partenaires/apave.webp',
		url: 'https://apave.com',
	},
	{
		link: 'logo_partenaires/b2c.webp',
		url: 'https://www.b2c-loire.fr/',
	},
	{
		link: 'logo_partenaires/cls.webp',
		url: 'http://cls.to',
	},
	{
		link: 'logo_partenaires/cossen.webp',
		url: 'https://www.linkedin.com/company/cossen',
	},
	{
		link: 'logo_partenaires/edp.webp',
		url: 'https://www.edpsciences.org/fr/',
	},
	{
		link: 'logo_partenaires/lea.webp',
		url: 'https://www.orano.group/fr/expertise-sur-tout-le-cycle/tour-des-implantations/laboratoire-etalons-activite/lea',
	},
	{
		link: 'logo_partenaires/logo-PCR-Long-title-CouleurHD.webp',
		url: 'https://www.pcrstrategie.fr/',
	},
	{
		link: 'logo_partenaires/rpcirkus.webp',
		url: 'https://rpcirkus.org',
	},
	{
		link: 'logo_partenaires/safe.webp',
		url: 'http://safetechnologies.fr',
	},
	{
		link: 'logo_partenaires/trad.webp',
		url: 'https://www.rayxpert.com/',
	},
]

const Card = ({ text, style, link, url, color, isMobile, isTablet }: ICardProps) => {
	const [over, setOver] = useState(false)
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: isTablet ? 'flex-start' : 'center',
				flexDirection: isMobile ? 'column' : undefined,
			}}
			onMouseOut={() => setOver(false)}
			onMouseOver={() => setOver(true)}
		>
			<a
				href={url}
				target='_blank'
				rel='noopener noreferrer'
				style={style.wrapper}
			>
				<div style={{ ...style.img, backgroundImage: `url(Images/${link})` }} />
			</a>
			<p
				style={{
					...style.text,
					color: color || (isMobile ? 'var(--dark)' : 'var(--grey)'),
					display: isMobile || over ? 'block' : 'none',
				}}
			>
				{text}
			</p>
		</div>
	)
}

const PartnersCarousel = () => {
	const text = useText('Home')
	const style = useIsMobile(styles)
	const { isMobile, isTablet } = useDeviceType()

	// Wait for device detection to prevent hydration mismatch
	if (style === null || isMobile === null || isTablet === null) {
		return null
	}

	let deviceType = 'desktop'
	if (isMobile) {
		deviceType = 'mobile'
	} else if (isTablet) {
		deviceType = 'tablet'
	}

	return (
		<Carousel
			swipeable={false}
			draggable={false}
			responsive={responsive}
			arrows={false}
			ssr={true}
			infinite={true}
			autoPlay={true}
			autoPlaySpeed={1000}
			keyBoardControl={false}
			customTransition='all .5'
			transitionDuration={isMobile ? 2200 : 1500}
			containerClass='carousel-container'
			deviceType={deviceType}
			removeArrowOnDeviceType={['tablet', 'mobile']}
			itemClass='carousel-item-padding-40-px'
		>
			{partners.map((e: unknown, i: number) => {
				const partner = e as { link: string; url: string }
				return (
					<Card
						text={text.partners.li[i]}
						style={style.card}
						link={partner.link}
						url={partner.url}
						key={partner.link}
						isMobile={isMobile}
						isTablet={isTablet}
					/>
				)
			})}
		</Carousel>
	)
}

export const styles = (mobile: boolean): IStyles => ({
	card: {
		wrapper: {
			cursor: 'pointer',
			height: mobile ? '17vh' : '15vh',
			width: mobile ? '55vw' : '17vw',
			padding: '10px',
			borderRadius: '8px',
		},
		img: {
			height: '13vh',
			width: mobile ? '50vw' : '15vw',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'contain',
		},
		text: {
			cursor: 'pointer',
			textAlign: 'justify',
			fontSize: '1.6rem',
			marginLeft: '1vw',
		},
	},
})

export default Radium(PartnersCarousel)
