import * as React from 'react';
import * as CSS from 'csstype';
import Image from 'next/image';

import { useIsMobile } from '../Hooks/useIsMobile';


interface IStyles {
	[key: string]: CSS.Properties
}

const images = [
	<div style={{width: "25%", float: "left"}}>
		<Image
			src="/Images/ScreenCarousel1.png"
			width={494*0.7}
			height={278*0.7}
		/>
		{/*<img src="../../Images/ScreenCarousel1.png" style={{width: "25%", float: "left"}}/>*/}
	</div>,

	<div style={{width: "25%", float: "left"}}>
		<Image
			src="/Images/ScreenCarousel2.png"
			width={494*0.7}
			height={278*0.7}
		/>
		{/*<img src="../../Images/ScreenCarousel2.png" style={{width: "25%", float: "left"}}/>*/}
	</div>,

	<div style={{width: "25%", float: "left"}}>
		<Image
			src="/Images/ScreenCarousel3.png"
			width={494*0.7}
			height={278*0.7}
		/>
	</div>,

	<div style={{width: "25%", float: "left"}}>
		<Image
			src="/Images/logo_dosi.png"
			width={494*0.7}
			height={278*0.7}
		/>
	</div>

]

const Slides = () => {
	return (
		<div style={{overflow: "hidden"}}>
			<div style={{position: "relative", width: "400%", margin: 0, left: 0, animation: "8s slidy infinite" }}>
				{images.map((e) => e)}
			</div>
		</div>
	)
}

const HeroBannerCarousel = () => {

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
				<Slides />
			</div>
		</div>
	)

}

export default HeroBannerCarousel;

export const styles = (mobile: boolean): IStyles => ({

})