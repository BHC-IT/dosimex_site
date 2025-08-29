import * as CSS from 'csstype'
import Link from 'next/link'
import React, { useState, useRef, useEffect } from 'react'
import { withOrientationChange } from 'react-device-detect'

import ContactForm from '../Components/ContactForm'
import { useIsMobile } from '../Hooks/useIsMobile'
import { useText } from '../Hooks/useText'

// import Image from 'next/image'

interface IStyles {
	[key: string]: CSS.Properties | undefined
	phoneNumber?: CSS.Properties
}

// Constants for image scaling ratios and dimensions
const IMAGE_RATIO = 0.7
const IMAGE_RATIO_2 = 0.6
const BASE_WIDTH = 722
const BASE_HEIGHT_MOBILE = 324
const BASE_HEIGHT_DESKTOP = 405

// const hashes = '#buy'

function Product() {
	const text = useText('Product')
	const style = useIsMobile(styles)
	const [dummy] = useState(0)
	const [isButtonHovered, setIsButtonHovered] = useState(false)
	const buy = useRef(null as HTMLDivElement | null)

	useEffect(() => {
		if (window.location.hash === '#buy') {
			buy.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'center' })
			buy.current?.focus()
		}
	}, [dummy])

	if (style === null) return null

	return (
		<div style={style.global}>
			<section>
				<h3 style={style.title}>{text.title}</h3>
				<div style={style.banner}>
					<p>{text.descrip}</p>
				</div>
			</section>
			<section className='container'>
				<h4>{text.partE.title}</h4>
				<div style={style.borderLeft}>
					<div style={style.flexP}>
						<p>{text.partE.p[0]}</p>
						<div style={style.buttonKnowMore}>
							<Link
								href='/Software'
								replace
							>
								{text.buttonKnowMore}
							</Link>
						</div>
					</div>
					<div style={style.flexP}>
						<p>{text.partE.p[1]}</p>
						<div style={style.buttonKnowMore}>
							<Link
								href='/Manuals'
								replace
							>
								{text.buttonKnowMore}
							</Link>
						</div>
					</div>
					{text.partE.p[2] ? <p>{text.partE.p[2]}</p> : null}
					{text.partE.p[3] ? <p>{text.partE.p[3]}</p> : null}
				</div>
				<p>{text.between}</p>
				<h4 style={style.prerequisites}>{text.prerequisites.title}</h4>
				<p>{text.prerequisites.p}</p>
				{/* Pricing Section */}
				<section style={style.pricingSection}>
					<h4 style={style.pricingTitle}>{text.pricing.title}</h4>
					<div style={style.pricingCard}>
						<h5 style={style.packageTitle}>{text.pricing.packageTitle}</h5>
						<ul style={style.featuresList}>
							{text.pricing.packageFeatures.map((feature: string, index: number) => (
								<li
									key={index}
									style={style.featureItem}
								>
									{feature}
								</li>
							))}
						</ul>
					</div>

					<div style={style.orderSection}>
						<h5 style={style.orderTitle}>{text.pricing.orderTitle}</h5>
						<p style={style.orderText}>{text.pricing.orderText}</p>
						<button
							style={{
								...style.quoteButton,
								...(isButtonHovered ? style.quoteButtonHover : {}),
							}}
							onClick={() => buy.current?.scrollIntoView({ behavior: 'smooth' })}
							onMouseEnter={() => setIsButtonHovered(true)}
							onMouseLeave={() => setIsButtonHovered(false)}
							type='button'
						>
							{text.pricing.quoteButton}
						</button>
					</div>
				</section>
			</section>

			<section
				style={style.questions}
				ref={buy}
			>
				<p style={style.questionsTitle}>{text.questions.title}</p>
				<p style={style.questionsP}>
					{text.questions.p}
					<span style={style.phoneNumber}>06 89 70 90 35</span>
				</p>
				<div style={style.contact}>
					<ContactForm />
				</div>
			</section>
			{/* FAQ Section */}
			<section
				className='container'
				style={style.faqSection}
			>
				<h4 style={style.faqTitle}>{text.faq.title}</h4>
				<div style={style.faqContainer}>
					{text.faq.questions.map(
						(faq: { question: string; answer: string }, index: number) => (
							<div
								key={index}
								style={style.faqItem}
							>
								<h5 style={style.faqQuestion}>{faq.question}</h5>
								<p style={style.faqAnswer}>{faq.answer}</p>
							</div>
						),
					)}
				</div>
			</section>
		</div>
	)
}

export default withOrientationChange(Product)

export const styles = (mobile: boolean): IStyles => ({
	global: {
		color: 'var(--dark)',
		textAlign: 'justify',
		lineHeight: '3.2rem',
	},
	button: {
		padding: '12px 25px',
		backgroundColor: 'var(--main)',
		borderRadius: '50px',
		color: 'white',
		cursor: 'pointer',
		textTransform: 'uppercase' as 'uppercase',
	},
	title: {
		color: 'var(--flash)',
		fontSize: mobile ? '3rem' : '4rem',
		fontFamily: 'var(--lato)',
		fontWeight: 900,
		marginLeft: mobile ? undefined : '10vw',
		marginBottom: '4vh',
		width: mobile ? '80%' : undefined,
		padding: mobile ? '0 8vw' : undefined,
	},
	banner: {
		display: 'flex',
		flexDirection: mobile ? 'column-reverse' : undefined,
		alignItems: 'center',
		marginRight: mobile ? undefined : '25vw',
		height: mobile ? undefined : '30vh',
		justifyContent: 'space-between',
		backgroundColor: 'var(--main)',
		color: 'var(--light)',
		paddingLeft: '10vw',
		paddingRight: '10vw',
	},
	borderLeft: {
		borderLeft: '5px solid var(--main)',
		paddingLeft: '3vw',
		marginLeft: '3vw',
		display: 'flex',
		flexDirection: 'column',
		justifyItems: 'center',
		marginBottom: '5vh',
	},
	flexP: {
		display: 'flex',
		flexDirection: mobile ? 'column' : undefined,
		alignItems: mobile ? undefined : 'center',
		marginTop: '0',
		marginBottom: '0',
	},
	buttonKnowMore: {
		color: 'var(--main)',
		fontSize: '1.5rem',
		marginLeft: '3vw',
		fontWeight: 'bold',
	},
	prerequisites: {
		marginTop: '10vh',
		color: 'var(--main)',
	},
	divPrice: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: mobile ? undefined : '5vh',
		fontFamily: 'var(--lato)',
	},
	pPriceDiv: {
		color: 'var(--dark)',
		marginBottom: '5vh',
		borderBottom: '1px solid rgb(0, 121, 193)',
		width: mobile ? '75vw' : '15vw',
		textAlign: 'center',
	},
	pPrice: {
		fontWeight: 'bold',
		fontSize: mobile ? '2rem' : '2.2rem',
	},
	imagePrice: {
		width: mobile ? '100vw' : `${BASE_WIDTH * IMAGE_RATIO_2}px`,
		height: mobile
			? `${BASE_HEIGHT_MOBILE * IMAGE_RATIO}px`
			: `${BASE_HEIGHT_DESKTOP * IMAGE_RATIO_2}px`,
		backgroundImage: "url('/Images/usbkey.png')",
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
		marginTop: mobile ? undefined : '5vh',
		marginRight: mobile ? '10vw' : '2vw',
	},
	formPrice: {
		marginBottom: mobile ? '17vh' : '12vh',
		backgroundColor: 'var(--flash)',
		color: 'rgb(0 69 124)',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: mobile ? '50vw' : '10vw ',
		borderRadius: '500px',
	},
	paypal: {
		width: mobile ? '23vw' : '5.5vw',
	},
	questions: {
		textAlign: 'center' as 'center',
		backgroundColor: 'var(--flash)',
		paddingTop: mobile ? '5vh' : '10vh',
		paddingBottom: '20vh',
		marginBottom: mobile ? '90vh' : '80vh',
		height: mobile ? '65vh' : '50vh',
		marginTop: mobile ? undefined : '7vh',
	},
	questionsTitle: {
		fontSize: mobile ? '2rem' : '3.4rem',
		fontWeight: 900,
		fontFamily: 'var(--lato)',
		paddingRight: mobile ? '8vw' : undefined,
		paddingLeft: mobile ? '8vw' : undefined,
	},
	questionsP: {
		paddingRight: mobile ? '8vw' : undefined,
		paddingLeft: mobile ? '8vw' : undefined,
		fontWeight: 400,
	},
	contact: {
		marginTop: mobile ? '-10vh' : '-5vh',
		width: 'auto',
		zIndex: 2,
	},
	phoneNumber: {
		color: 'var(--main)',
	},
	// Pricing Section Styles
	pricingSection: {
		marginTop: '8vh',
		marginBottom: '4vh',
		padding: mobile ? '4vh 6vw' : '',
	},
	pricingTitle: {
		color: 'var(--main)',
		fontFamily: 'var(--lato)',
		fontWeight: 'bold',
		marginBottom: '4vh',
	},
	pricingCard: {
		backgroundColor: 'var(--light)',
		border: '1px solid var(--flash)',
		color: 'var(--dark)',
		padding: mobile ? '3vh 4vw' : '4vh 3vw',
		textAlign: 'center' as 'center',
		marginBottom: '4vh',
	},
	packageTitle: {
		fontSize: mobile ? '1.8rem' : '2rem',
		fontWeight: 'bold',
		marginBottom: '2vh',
		fontFamily: 'var(--lato)',
		color: 'var(--main)',
	},
	featuresList: {
		listStyle: 'none',
		padding: 0,
		margin: 0,
	},
	featureItem: {
		padding: '0.8vh 0',
		fontSize: mobile ? '1.4rem' : '1.6rem',
		borderBottom: '1px solid rgba(0,0,0,0.1)',
	},
	orderSection: {
		textAlign: 'center' as 'center',
		padding: mobile ? '3vh 4vw' : '4vh 6vw',
	},
	orderTitle: {
		fontSize: mobile ? '2rem' : '2.4rem',
		fontWeight: 'bold',
		marginBottom: '2vh',
		color: 'var(--main)',
		fontFamily: 'var(--lato)',
	},
	orderText: {
		fontSize: mobile ? '1.4rem' : '1.6rem',
		marginBottom: '3vh',
		lineHeight: '1.8',
		color: 'var(--dark)',
	},
	quoteButton: {
		padding: '8px 25px',
		backgroundColor: 'var(--main)',
		borderRadius: '50px',
		color: 'white',
		cursor: 'pointer',
		textTransform: 'uppercase' as 'uppercase',
		transition: 'all 0.3s ease 0s',
		border: 'none',
	},
	quoteButtonHover: {
		transform: 'translateY(-4px)',
		boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.1)',
	},
	// FAQ Section Styles
	faqSection: {
		marginBottom: '10vh',
		padding: mobile ? '4vh 6vw' : '6vh 8vw',
	},
	faqTitle: {
		color: 'var(--main)',
		fontSize: mobile ? '2rem' : '3rem',
		fontFamily: 'var(--lato)',
		fontWeight: 'bold',
		textAlign: 'center' as 'center',
		marginBottom: '5vh',
	},
	faqContainer: {
		display: 'flex',
		flexDirection: 'column',
		gap: '3vh',
		maxWidth: mobile ? '100%' : '80%',
		margin: '0 auto',
	},
	faqItem: {
		backgroundColor: 'var(--light)',
		padding: mobile ? '3vh 4vw' : '4vh 5vw',
		border: '1px solid var(--flash)',
		boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
	},
	faqQuestion: {
		color: 'var(--main)',
		fontSize: mobile ? '1.6rem' : '1.8rem',
		fontWeight: 'bold',
		marginBottom: '2vh',
		fontFamily: 'var(--lato)',
	},
	faqAnswer: {
		fontSize: mobile ? '1.4rem' : '1.5rem',
		lineHeight: '1.8',
		color: 'var(--dark)',
		margin: 0,
	},
})
