import * as CSS from 'csstype'
import Image from 'next/image'

import ContactForm from '../Components/ContactForm'
import { useMobile } from '../Hooks/useIsMobile'
import { useText } from '../Hooks/useText'
import ILang from '../lang/interface'

export default function Contact() {
	const isMobile = useMobile()
	const text = useText('Contact') as ILang['Contact'] | null

	return (
		<div>
				<div style={styles.backgroundContainer}>
					{isMobile ? null : (
						<Image
							src='/Images/motif_trefle.svg'
							alt='motif filigrane trèfle radioativité'
							width={548}
							height={548}
						/>
					)}
				</div>
				{text && (
					<div style={styles.headerContainer}>
						<h2 style={styles.headerTitle}>{text.header.title}</h2>
						<p style={styles.headerSubtitle}>{text.header.subtitle}</p>
					</div>
				)}
				<div style={styles.formContainer}>
					<ContactForm />
				</div>
			</div>
	)
}

const styles: { [key: string]: CSS.Properties } = {
	backgroundContainer: {
		position: 'absolute',
		top: '10vh',
	},
	headerContainer: {
		textAlign: 'center' as 'center',
		padding: '12vh 10vw 0',
		position: 'relative' as 'relative',
		zIndex: 2,
	},
	headerTitle: {
		color: 'var(--dark)',
		fontFamily: 'var(--lato)',
		fontWeight: 900,
		marginBottom: '2vh',
	},
	headerSubtitle: {
		color: 'var(--grey, rgb(60,60,60))',
		fontSize: '1.6rem',
		maxWidth: '600px',
		marginLeft: 'auto',
		marginRight: 'auto',
		lineHeight: '1.8',
	},
	formContainer: {
		position: 'relative',
	},
}
