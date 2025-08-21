import Image from 'next/image'

import ContactForm from '../Components/ContactForm'
import { useMobile } from '../Hooks/useIsMobile'

export default function Contact() {
	const isMobile = useMobile()

	return (
		<div>
				<div style={{ position: 'absolute', top: '10vh' }}>
					{isMobile ? null : (
						<Image
							src='/Images/motif_trefle.svg'
							alt='motif filigrane trèfle radioativité'
							width={548}
							height={548}
						/>
					)}
				</div>
				<div style={{ position: 'relative' }}>
					<ContactForm />
				</div>
			</div>
	)
}
