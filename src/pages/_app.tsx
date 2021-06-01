import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/font/flaticon.css'
import Navbar from '../Components/Navbar'
import ContactForm from '../Components/ContactForm'

function MyApp({ Component, pageProps }: AppProps) {
	return <>
		<Navbar />
		<Component {...pageProps} />
		<ContactForm />
	</>

}
export default MyApp
