import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { slide as Menu } from 'react-burger-menu'

import { useText } from '../Hooks/useText'

import Button from './Button'
import ItemNavbar from './ItemNavbar'
import LanguageSwitch from './LanguageSwitch'

interface IPage {
	route: string
}

interface INavbarText {
	items: string[]
	button: string
}

interface IProps {
	text?: INavbarText
}

interface IRenderNavProps {
	text?: INavbarText | null
}

// Type-safe route definitions
const pages: readonly IPage[] = [
	{ route: 'Software' },
	{ route: 'Training' },
	{ route: 'Manuals' },
	{ route: 'About' },
	{ route: 'Contact' },
] as const

const RenderNav = ({ text }: IRenderNavProps): JSX.Element | null => {
	// Early return if no navigation items are available
	if (!text?.items || text.items.length === 0) {
		return null
	}

	return (
		<>
			{pages.map((page: IPage, index: number) => {
				const navigationText = text.items[index]

				// Skip rendering if no text is available for this navigation item
				if (!navigationText) {
					return null
				}

				return (
					<li
						className="menu-item"
						key={`nav-${page.route}-${index}`}
					>
						<ItemNavbar
							name={navigationText}
							route={page.route}
						/>
					</li>
				)
			})}
		</>
	)
}

// Constants for better maintainability
const LOGO_WIDTH = 212
const LOGO_HEIGHT = 44
const LOGO_RATIO = 0.5

const SideBar: React.FC<IProps> = props => {
	const text = useText('Navbar') as INavbarText | null
	const router = useRouter()

	// Cast Menu component to avoid TypeScript issues with third-party components
	const MenuComponent = Menu as React.ComponentType<Record<string, unknown>>

	return (
		<MenuComponent right {...props}>
			<ul>
				<li style={{ cursor: 'pointer' }}>
					<Link href="/">
						<Image
							src="/Images/logo_dosimex_new.webp"
							alt="Dosimex Logo"
							width={LOGO_WIDTH * LOGO_RATIO}
							height={LOGO_HEIGHT * LOGO_RATIO}
							loading="lazy"
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
				name={text?.button ?? 'Contact'}
				route="Product"
			/>
		</MenuComponent>
	)
}

export default SideBar
