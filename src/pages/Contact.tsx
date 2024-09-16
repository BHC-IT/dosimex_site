// import ContactForm from '../Components/ContactForm'
// import Image from 'next/image'
import * as CSS from 'csstype'

// import { isMobile } from 'react-device-detect'
import { useText } from '../Hooks/useText'
import { useIsMobile } from '../Hooks/useIsMobile'

const ratio = 0.7
const ratio2 = 0.6

export default function Contact() {
	const text = useText('Product')
	const style = useIsMobile(styles)

	if (style === null) return null

	return (
		<>
			<section style={style.questions}>
				<p style={style.questionsTitle}>{text.questions.title}</p>
				<p style={style.questionsP}>
					{text.questions.p1}
					<a
						href='mailto:alain.vivier@dosimex.fr'
						style={{ color: 'var(--main)' }}
					>
						alain.vivier@dosimex.fr
					</a>
					{text.questions.p2}
					<span style={{ color: 'var(--main)' }}>06 89 70 90 35</span>
				</p>
				{/* <div style={style.contact}>
					<ContactForm />
				</div> */}
			</section>
		</>
	)
}

interface IStyles {
	[key: string]: CSS.Properties | undefined
}
export const styles = (mobile: boolean): IStyles => ({
	global: {
		color: 'var(--dark)',
		textAlign: 'justify',
		lineHeight: '3.2rem',
	},
	header: {
		display: 'flex',
		alignItems: 'center',
		marginTop: '0',
		marginBottom: '0',
		height: '90vh',
	},
	headerImage: {
		display: mobile ? 'none' : undefined,
		marginLeft: '15px',
	},
	headerText: {
		paddingLeft: mobile ? undefined : '8vw',
		textAlign: mobile ? 'center' : undefined,
	},
	headerP: {
		marginTop: '5vh',
		marginBottom: '3vh',
		color: 'var(--dark)',
		fontSize: mobile ? '1.6rem' : '1.8rem',
		width: mobile ? undefined : '85%',
		padding: mobile ? '2vh 8vw 3vh 8vw' : undefined,
		textAlign: mobile ? 'justify' : undefined,
		fontWeight: 100,
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
		height: mobile ? undefined : '30vh',
		justifyContent: 'space-between',
	},
	banner1: {
		backgroundColor: 'var(--main)',
		height: '100%',
		width: mobile ? '100%' : '66%',
		color: 'var(--light)',
		display: 'flex',
		alignItems: 'center',
		paddingLeft: '10vw',
		paddingRight: '10vw',
	},
	banner2: {
		backgroundColor: 'var(--main)',
		height: mobile ? undefined : '100%',
		display: 'flex',
		alignItems: 'center',
	},
	bannerImage: {
		width: mobile ? '100vw' : `${722 * ratio}px`,
		height: mobile ? `${324 * ratio}px` : `${405 * ratio}px`,
		backgroundImage: "url('/Images/usbkey.png')",
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
		position: 'relative',
		right: mobile ? '5%' : '45%',
		marginTop: mobile ? '6vh' : undefined,
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
		width: mobile ? '100vw' : `${722 * ratio2}px`,
		height: mobile ? `${324 * ratio}px` : `${405 * ratio2}px`,
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
	spaceTopFooter: mobile
		? {
				content: '',
				height: '40vh',
				marginTop: '10vh',
				marginBottom: '50vh',
		  }
		: undefined,
})
