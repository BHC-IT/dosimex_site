import * as CSS from 'csstype'
import Image from 'next/image'

import ContactForm from '../Components/ContactForm'
import { useMobile } from '../Hooks/useIsMobile'

export default function Contact() {
	const isMobile = useMobile()

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
	formContainer: {
		position: 'relative',
	},
}
