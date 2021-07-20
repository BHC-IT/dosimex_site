import ContactForm from '../Components/ContactForm'
import Image from 'next/image';

export default function Contact() {
	return (
		<>
			<div>
				<div style={{position: "absolute", top: "10vh"}}>
					<Image
						src="/Images/motif_trefle.svg"
						alt="motif filigrane trèfle radioativité"
						width={548}
						height={548}
						style={{}}
					/>
				</div>
				<div style={{position: "relative"}}>
					<ContactForm />
				</div>
			</div>
		</>
	);
}