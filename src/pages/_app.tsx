import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import useUser from '../../Hooks/useUser'

function MyApp({ Component, pageProps }: AppProps) {

	const user = useUser()

	return <>
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Nunito:wght@300;400;600;700&display=swap" rel="stylesheet" /> 
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link href="https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap" rel="stylesheet" />
			<title>Dosimex</title>
		</Head>
		<Navbar />
		<Component {...pageProps} user={user}/>
		<Footer />
	</>

}
export default MyApp;
