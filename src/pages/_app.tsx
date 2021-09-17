import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import useUser from '../Hooks/useUser'
import { ToastContainer } from 'react-toastify'


function MyApp({ Component, pageProps }: AppProps) {

	const user = useUser()

	return <>
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link href="https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap" rel="stylesheet" />
			<title>Dosimex</title>
		</Head>
		<Navbar />
		<Component {...pageProps} user={user}/>
		<ToastContainer
			position="bottom-center"
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			draggable
			/>
		<ToastContainer />
		<Footer />
	</>
}
export default MyApp;
