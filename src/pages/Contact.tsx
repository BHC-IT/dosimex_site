import ContactForm from '../Components/ContactForm'
import Image from 'next/image';

export default function Contact() {
	const ratio = 5;
	return (
		<>
			{/*<div style={{position: "relative"}}>
				<Image
					src="/Images/trefle.png"
					alt="icône trèfle radioactivité"
					width={`${154 * ratio}px`}
					height={`${154* ratio}px`}
				/>
			</div>*/}
			<div style={{}}>
				<ContactForm />
			</div>
		</>
		);
}