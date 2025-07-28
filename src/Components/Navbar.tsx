import React, { useState, useEffect } from 'react'
import * as CSS from 'csstype'
import ItemNavbar from './ItemNavbar'
import Button from './Button'
import LanguageSwitch from './LanguageSwitch'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { withText } from '../hoc/withText'
import SideBar from './SideBar'

const originalError = console.error

console.error = (...args) => {
	if (/Warning.*Function components cannot be given refs/.test(args[0])) {
		return
	}
	originalError.call(console, ...args)
}

interface IPage {
	route: string
}

interface IProps {
	text?: any
}

export interface IStyles {
	navbar: CSS.Properties
	navbarUl: CSS.Properties
	navbarLi: CSS.Properties
	navbarButton: CSS.Properties
}

const pages: IPage[] = [
	{ route: 'Software' },
	{ route: 'Training' },
	{ route: 'Manuals' },
	{ route: 'About' },
	{ route: 'Contact' },
]

const Navbar: React.FC<IProps> = ({ text }) => {
	const [isClient, setIsClient] = useState(false)
	const router = useRouter()

	useEffect(() => {
		setIsClient(true)
	}, [])

	const renderNav = () => {
		return (
			<>
				{pages.map((page: IPage, i: number) => (
					<li
						key={text.items[i]}
						style={{ paddingLeft: '1.7vw' }}
					>
						<ItemNavbar
							name={text.items[i]}
							route={page.route}
						/>
					</li>
				))}
			</>
		)
	}

	// Prevent hydration mismatch by not rendering until client-side mount
	if (!isClient) {
		return null
	}

	const ratio = 0.7

	return (
		<>
			<div className='divNone'>
				<nav style={styles.navbar}>
					<ul style={styles.navbarUl}>
						<li style={styles.navbarLi}>
							<Link href='/'>
								<Image
									src='/Images/logo_dosimex_new.webp'
									alt='logo dosimex'
									width={212 * ratio}
									height={44 * ratio}
									priority
									quality={40}
								/>
							</Link>
						</li>
						{renderNav()}
						<LanguageSwitch
							route={router.pathname}
							language={router.locale}
						/>
					</ul>
					<Button
						name={text.button}
						route='Product'
					/>
				</nav>
			</div>
			<div id='containerNav'>
				<SideBar />
				<div
					style={{
						textAlign: 'center',
						paddingTop: '1.5vh',
						borderBottom: '1px solid var(--main)',
					}}
				>
					<Image
						src='/Images/logo_dosimex_new.webp'
						alt='logo dosimex'
						width={212 * ratio}
						height={44 * ratio}
						priority
						quality={40}
					/>
				</div>
			</div>
		</>
	)
}

export const styles: IStyles = {
	navbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '0 10vw',
		color: 'var(--dark)',
	},
	navbarUl: {
		display: 'flex',
		alignItems: 'center',
	},
	navbarLi: {
		display: 'flex',
		alignItems: 'center',
		marginRight: '2vw',
		cursor: 'pointer',
	},
	navbarButton: {
		float: 'right',
	},
}

export default withText(Navbar, 'Navbar')
