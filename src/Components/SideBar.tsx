import React from 'react'
import Button from './Button'
import LanguageSwitch from './LanguageSwitch'
import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'
import ItemNavbar from './ItemNavbar'
import Image from 'next/image'
import { useText } from '../Hooks/useText'
import { useRouter } from 'next/router'

interface IPage {
	route: string
}

interface IProps {
	text?: any
}

const pages: IPage[] = [
	{ route: 'Software' },
	{ route: 'Training' },
	{ route: 'Manuals' },
	{ route: 'About' },
	{ route: 'Contact' },
]

const RenderNav = ({ text }: any) => {
	return (
		<>
			{pages.map((page: IPage, i: number) => (
				<li
					className='menu-item'
					key={text.items[i]}
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

const ratio = 0.5

const SideBar = (props: IProps) => {
	const text = useText('Navbar')
	const router = useRouter()

	return (
		// @ts-ignore - Menu component props compatibility
		<Menu
			right
			{...props}
		>
			<ul>
				<li style={{ cursor: 'pointer' }}>
					<Link href='/'>
						<Image
							src='/Images/logo_dosimex_new.webp'
							alt='logo dosimex'
							width={212 * ratio}
							height={44 * ratio}
							loading='lazy'
							quality={40}
						/>
					</Link>
				</li>
				<RenderNav text={text} />
				<LanguageSwitch
					route={router.pathname}
					language={router.locale}
				/>
			</ul>
			<Button
				name={text.button}
				route='Product'
			/>
		</Menu>
	)
}

export default SideBar
