import * as CSS from 'csstype'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

import { useIsMobile } from '../Hooks/useIsMobile'

interface IStyles {
	slideContainer: CSS.Properties
	slideText: CSS.Properties
	sliderWrapper: CSS.Properties
	sliderContainer: CSS.Properties
}

interface ISlideProps {
	name: string
	text: string
	vw: number
}

interface ITextProps {
	text?: string[]
	vw: number
}

const images = [
	'ScreenCarousel1.png',
	'ScreenCarousel2.png',
	'ScreenCarousel3.png',
	'ScreenCarousel4.png',
]

const Slide = ({ name, text, vw }: ISlideProps) => {
	const style = useIsMobile(styles)
	if (style === null) return null

	return (
		<div style={style.slideContainer}>
			<Image
				src={`/Images/${name}`}
				alt={`Banner image ${name}`}
				width={29 * vw}
				height={16.32 * vw}
			/>
			<p style={style.slideText}>
				{text}
			</p>
		</div>
	)
}

const SlideWrapper = ({ text, vw }: ITextProps) => {
	const style = useIsMobile(styles)
	if (style === null) return null

	return (
		<div style={style.sliderWrapper}>
			<div style={style.sliderContainer}>
				{images.map((e, i) => {
					return (
						<Slide
							key={i}
							name={e}
							text={text?.[i] ?? `Image ${i + 1}`}
							vw={vw}
						/>
					)
				})}
			</div>
		</div>
	)
}

interface IHeroBannerCarouselProps {
	text?: string[]
}

const HeroBannerCarousel: React.FC<IHeroBannerCarouselProps> = ({ text }) => {
	const [vw, setvw] = useState(1500)

	useEffect(() => {
		setvw(window.innerWidth / 100)
	}, [])

	const style = useIsMobile(styles)

	if (style === null) return null

	return (
		<div style={{}}>
			<div style={{ width: `${30 * vw}px`, height: `${19 * vw}px`, position: 'relative' }}>
				<Image
					src='/Images/MockupCarousel.png'
					width={30 * vw}
					height={19 * vw}
					alt='DOSIMEX software mockup carousel'
				/>
			</div>
			<div style={{ position: 'absolute', left: `${0.5 * vw}px`, top: `${0.7 * vw}px` }}>
				<SlideWrapper
					text={text}
					vw={vw}
				/>
			</div>
		</div>
	)
}

export default HeroBannerCarousel

export const styles = (_mobile: boolean): IStyles => ({
	slideContainer: {
		width: '25%',
		float: 'left',
	},
	slideText: {
		fontStyle: 'italic',
		float: 'right',
		marginTop: '7vh',
		padding: '0 10px',
		fontSize: '1.8rem',
		color: 'var(--grey)',
	},
	sliderWrapper: {
		overflow: 'hidden',
	},
	sliderContainer: {
		position: 'relative',
		width: '400%',
		margin: 0,
		left: 0,
		animation: '10s slidy infinite',
	},
})
