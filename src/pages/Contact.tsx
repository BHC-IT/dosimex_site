import ContactForm from '../Components/ContactForm'
import Image from 'next/image';

export default function Contact() {
	return (
		<>
			<div>
				<div style={{position: "absolute"}}>
					<Image
						src="/Images/motif_trefle.svg"
						alt="motif filigrane trèfle radioativité"
						width={548}
						height={548}
					/>
				</div>
				<div style={{position: "relative"}}>
					<ContactForm />
				</div>
			</div>
		</>
	);
}