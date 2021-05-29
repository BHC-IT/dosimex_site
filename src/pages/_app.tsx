import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import type { AppProps } from 'next/app'
import '../styles/navbar.sass'
import '../styles/font/flaticon.css'
import Navbar from '../Components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
	return <>
		<Navbar />
		<Component {...pageProps} />
	</>

}
export default MyApp
