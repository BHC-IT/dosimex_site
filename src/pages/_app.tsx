import 'semantic-ui-css/semantic.min.css'
import type { AppProps } from 'next/app'
import '../styles/font/flaticon.css'
import Navbar from '../Components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
	return <>
		<Navbar onClick={(nav : any) => console.log(nav)}/>
		<Component {...pageProps} />
	</>

}
export default MyApp
