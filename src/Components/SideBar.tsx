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
	// Only render navigation items if text.items exists and has content
	if (!text?.items || text.items.length === 0) {
		return null
	}

	return (
		<>
			{pages.map((page: IPage, i: number) => {
				// Only render if the text item exists
				if (!text.items[i]) {
					return null
				}

				return (
					<li
						className='menu-item'
						key={text.items[i]}
					>
						<ItemNavbar
							name={text.items[i]}
							route={page.route}
						/>
					</li>
				)
			})}
		</>
	)
}

const ratio = 0.5

const SideBar = (props: IProps) => {
	const text = useText('Navbar')
	const router = useRouter()

	return React.createElement(
		Menu as any,
		{
			right: true,
			...props,
		},
		React.createElement(
			'ul',
			null,
			React.createElement(
				'li',
				{ style: { cursor: 'pointer' } },
				React.createElement(
					Link,
					{ href: '/' },
					React.createElement(Image, {
						src: '/Images/logo_dosimex_new.webp',
						alt: 'logo dosimex',
						width: 212 * ratio,
						height: 44 * ratio,
						loading: 'lazy',
						quality: 40,
					}),
				),
			),
			React.createElement(RenderNav, { text }),
			React.createElement(LanguageSwitch, {
				route: router.pathname,
				language: router.locale,
			}),
		),
		React.createElement(Button, {
			name: text.button,
			route: 'Product',
		}),
	)
}

export default SideBar
