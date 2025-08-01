import Image from 'next/image'
import { isMobile } from 'react-device-detect'

import ContactForm from '../Components/ContactForm'

export default function Contact() {
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
