import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { ToastContainer } from 'react-toastify'

function MyApp({ Component, pageProps }: AppProps) {

	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
				<title>Dosimex</title>
			</Head>
			<Navbar />
			<Component {...pageProps} />
			<ToastContainer
				position='bottom-center'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={true}
				rtl={false}
				pauseOnFocusLoss={true}
				draggable={true}
				pauseOnHover={true}
				theme='light'
			/>
			<Footer />
		</>
	)
}
export default MyApp
