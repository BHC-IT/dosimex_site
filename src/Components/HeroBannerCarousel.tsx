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
	vw: number,
}

interface ITextProps {
	text: string[],
	vw: number,
}

const images = [
	"ScreenCarousel1.png",
	"ScreenCarousel2.png",
	"ScreenCarousel3.png",
	"ScreenCarousel4.png",
]


const Slide = ({name, text, vw}: ISlideProps) =>
	<div style={{width: "25%", float: "left"}}>
			<Image
				src={`/Images/${name}`}
				width={29*vw}
				height={16.32*vw}
				layout={"fixed"}
			/>
		<p style={{fontStyle: "italic", float: "right", marginTop: "7vh",padding: "0 10px", fontSize: "1.8rem", color: "var(--grey)"}}>{text}</p>
	</div>


const SlideWrapper = ({text, vw}: ITextProps) => {
	return (
		<div style={{overflow: "hidden"}}>
			<div style={{position: "relative", width: "400%", margin: 0, left: 0, animation: "10s slidy infinite" }}>
				{images.map((e, i) => <Slide name={e} text={text[i]} key={e} vw={vw} />)}
			</div>
		</div>
	)
}

const HeroBannerCarousel = ({text}: any) => {

	const [vw, setvw] = React.useState<number>(1500);

	React.useEffect(() => {
		setvw(window.innerWidth / 100)
	}, [])

	console.log(vw);
	const style = useIsMobile(styles);

	if (style === null)
		return <></>

	return (
		<div style={{}}>
			<div style={{ width: `${30 * vw}px`, height: `${19 * vw}px` }} >
				<Image
					src="/Images/MockupCarousel.png"
					layout={"fill"}
				/>
			</div>
			<div style={{position: "absolute", left: `${0.5 * vw}px`, top: `${0.7 * vw}px`}}>
				<SlideWrapper text={text} vw={vw} />
			</div>
		</div>
	)

}

export default HeroBannerCarousel;

export const styles = (mobile: boolean): IStyles => ({

})