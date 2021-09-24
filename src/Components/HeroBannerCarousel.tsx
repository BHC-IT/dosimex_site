import * as React from 'react';
import * as CSS from 'csstype';
import Image from 'next/image';

import { useIsMobile } from '../Hooks/useIsMobile';


interface IStyles {
	[key: string]: CSS.Properties
}

interface ISlideProps {
	name: string,
	text: string,
}

interface ITextProps {
	text: string[],
}

const images = [
	"ScreenCarousel1.png",
	"ScreenCarousel2.png",
	"ScreenCarousel3.png",
	"ScreenCarousel4.png",
]

const Slide = ({name, text}: ISlideProps) =>
	<div style={{width: "25%", float: "left"}}>
		<Image
			src={`/Images/${name}`}
			width={494*1.142}
			height={278*1.142}
		/>
		<p style={{fontStyle: "italic", float: "right", marginTop: "7vh",padding: "0 10px", fontSize: "1.8rem", color: "var(--grey)"}}>{text}</p>
	</div>


const SlideWrapper = ({text}: ITextProps) => {
	return (
		<div style={{overflow: "hidden"}}>
			<div style={{position: "relative", width: "400%", margin: 0, left: 0, animation: "10s slidy infinite" }}>
				{images.map((e, i) => <Slide name={e} text={text[i]} key={e} />)}
			</div>
		</div>
	)
}

const HeroBannerCarousel = ({text}: ITextProps) => {

	const style = useIsMobile(styles);

	if (style === null)
		return null

	return (
		<div style={{}}>
			<Image
				src="/Images/MockupCarousel.png"
				width={1006*0.7}
				height={634*0.7}
			/>
			<div style={{position: "absolute", left: "0.85%", top: "2.6%"}}>
				<SlideWrapper text={text}/>
			</div>
		</div>
	)

}

export default HeroBannerCarousel;

export const styles = (mobile: boolean): IStyles => ({

})