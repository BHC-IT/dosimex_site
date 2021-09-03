import * as CSS from 'csstype';
import * as React from 'react';
import { useIsMobile } from '../Hooks/useIsMobile';
import { useText } from '../Hooks/useText';
import { last } from '@bhc/ts-tools';
import Carousel from 'react-multi-carousel';
import Radium from 'radium';
import 'react-multi-carousel/lib/styles.css';

import {
	isMobile,
	isTablet,
} from "react-device-detect";

interface IMapOfStyle {
	[i: string]: CSS.Properties
}

interface IMapOf<A> {
	[i: string]: A
}

type IStyles = IMapOf<CSS.Properties | IMapOfStyle>


interface ICardProps {
	text: string,
	style: IMapOfStyle,
	link: string,
	url: string,
}

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1200 },
		items: 3,
		slidesToSlide: 3 // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1200, min: 464 },
		items: 2,
		slidesToSlide: 2 // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		slidesToSlide: 1 // optional, default to 1.
	}
}

const partners = [
	{
		link: "logo_partenaires/alara.png",
		url: "https://www.alara-expertise.fr",
	},
	{
		link: "logo_partenaires/apave.png",
		url: "https://apave.com",
	},
	{
		link: "logo_partenaires/b2c.png",
		url: "https://www.b2c-loire.fr/",
	},
	{
		link: "logo_partenaires/cls.png",
		url: "http://cls.to",
	},
	{
		link: "logo_partenaires/cossen.png",
		url: "https://www.linkedin.com/company/cossen",
	},
	{
		link: "logo_partenaires/edp.png",
		url: "https://www.edpsciences.org/fr/",
	},
	{
		link: "logo_partenaires/lea.png",
		url: "https://www.orano.group/fr/expertise-sur-tout-le-cycle/tour-des-implantations/laboratoire-etalons-activite/lea",
	},
	{
		link: "logo_partenaires/logo-PCR-Long-title-CouleurHD.png",
		url: "https://www.pcrstrategie.fr/",
	},
	{
		link: "logo_partenaires/rpcirkus.png",
		url: "https://rpcirkus.org",
	},
	{
		link: "logo_partenaires/safe.png",
		url: "http://safetechnologies.fr",
	},
	{
		link: "logo_partenaires/trad.png",
		url: "https://www.rayxpert.com/",
	},
	{
		link: "test6_name_customcolor_backless_v2_light_dark.png",
		url: "https://bhc-it.com",
	},

]

const Card = ({text, style, link, url}: ICardProps) => {

	const [over, setOver] = React.useState<boolean>(false);
	return (
		<div style={{display: "flex", justifyContent: "center", alignItems: isTablet ? "flex-start" : "center", flexDirection: isMobile ? "column" : undefined}} onMouseOut={() => setOver(false)}>
			<a href={url} target="_blank" rel="noopener noreferrer" style={style.wrapper} onMouseOver={() => setOver(true)}>
				<div style={{...style.img, backgroundImage: `url(Images/${link})`}}></div>
			</a>
			<p style={{...style.text, display: isMobile ? "block" : over ? "block" : "none"}} onMouseOver={() => setOver(true)}>{text}</p>
		</div>
	)
}

const PartnersCarousel = () => {

	const text = useText('Home');
	const style = useIsMobile(styles);

	if (style === null)
		return null

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
			keyBoardControl={true}
			customTransition="all .5"
			transitionDuration={isMobile ? 2200 : 1500}
			containerClass="carousel-container"
			deviceType={isMobile ? "mobile" : isTablet ? "tablet" : "desktop"}
			removeArrowOnDeviceType={["tablet", "mobile"]}
			itemClass="carousel-item-padding-40-px"
		>
			{
				partners.map((e: any, i: number) => e === last(partners) ?
						null
					:
						<Card text={text.partners.li[i]} style={style.card} link={e.link} url={e.url} />
				)
			}
			<Card text={text.partners.li[11]} style={style.card} link={last(partners).link} url={last(partners).url} />
		</Carousel>
	)
}

export const styles = (mobile: boolean): IStyles => ({
	card: {
		wrapper: {
			cursor: "pointer",
			backgroundColor: "white",
			height: mobile ? "17vh" : "15vh",
			width: mobile ? "55vw" : "17vw",
			padding: "10px",
			borderRadius: "8px",
		},
		img: {
			height: "13vh",
			width: mobile ? "50vw" : "15vw",
			backgroundPosition:"center",
			backgroundRepeat:"no-repeat",
			backgroundSize: "contain",
		},
		text: {
			cursor: "pointer",
			color: mobile ? "var(--dark)" : "var(--grey)",
			textAlign: "justify",
			fontSize: "1.6rem",
			marginLeft: "1vw",
		},
	},
})

export default Radium(PartnersCarousel);



