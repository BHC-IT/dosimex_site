import * as CSS from 'csstype'
import Image from 'next/image'
import React, { useState, useEffect, useMemo, useCallback } from 'react'

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

const Slide = React.memo(function Slide({ name, text, vw }: ISlideProps) {
	const style = useIsMobile(styles)

	// Memoize image dimensions to avoid recalculation
	const imageDimensions = useMemo(() => ({
		width: 29 * vw,
		height: 16.32 * vw,
	}), [vw])

	// Memoize image src to avoid string concatenation on every render
	const imageSrc = useMemo(() => `/Images/${name}`, [name])
	const imageAlt = useMemo(() => `Banner image ${name}`, [name])

	if (style === null) return null

	return (
		<div style={style.slideContainer}>
			<Image
				src={imageSrc}
				alt={imageAlt}
				width={imageDimensions.width}
				height={imageDimensions.height}
			/>
			<p style={style.slideText}>
				{text}
			</p>
		</div>
	)
})

const SlideWrapper = React.memo(function SlideWrapper({ text, vw }: ITextProps) {
	const style = useIsMobile(styles)

	// Memoize slides to avoid recreating slide components on every render
	const slides = useMemo(() =>
		images.map((imageName, index) => (
			<Slide
				key={index}
				name={imageName}
				text={text?.[index] ?? `Image ${index + 1}`}
				vw={vw}
			/>
		)), [text, vw])

	if (style === null) return null

	return (
		<div style={style.sliderWrapper}>
			<div style={style.sliderContainer}>
				{slides}
			</div>
		</div>
	)
})

interface IHeroBannerCarouselProps {
	text?: string[]
}

const HeroBannerCarousel: React.FC<IHeroBannerCarouselProps> = React.memo(function HeroBannerCarousel({ text }) {
	const [vw, setvw] = useState(1500)

	// Memoize the viewport width calculation callback
	const updateViewportWidth = useCallback(() => {
		setvw(window.innerWidth / 100)
	}, [])

	useEffect(() => {
		updateViewportWidth()
	}, [updateViewportWidth])

	const style = useIsMobile(styles)

	// Memoize the expensive style calculations
	const containerStyles = useMemo(() => ({
		mockupContainer: {
			width: `${30 * vw}px`,
			height: `${19 * vw}px`,
			position: 'relative' as const,
		},
		slideContainer: {
			position: 'absolute' as const,
			left: `${0.5 * vw}px`,
			top: `${0.7 * vw}px`,
		},
	}), [vw])

	// Memoize mockup image dimensions
	const mockupDimensions = useMemo(() => ({
		width: 30 * vw,
		height: 19 * vw,
	}), [vw])

	if (style === null) return null

	return (
		<div>
			<div style={containerStyles.mockupContainer}>
				<Image
					src='/Images/MockupCarousel.png'
					width={mockupDimensions.width}
					height={mockupDimensions.height}
					alt='DOSIMEX software mockup carousel'
				/>
			</div>
			<div style={containerStyles.slideContainer}>
				<SlideWrapper
					text={text}
					vw={vw}
				/>
			</div>
		</div>
	)
})

export default HeroBannerCarousel

export const styles = (): IStyles => ({
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
