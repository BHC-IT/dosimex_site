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

interface IProps {
	text?: {
		items: string[]
		button: string
	}
}

const pages: IPage[] = [
	{ route: 'Software' },
	{ route: 'Training' },
	{ route: 'Manuals' },
	{ route: 'About' },
	{ route: 'Contact' },
]

interface IRenderNavProps {
	text?: {
		items: string[]
		button: string
	} | null
}

const RenderNav = ({ text }: IRenderNavProps) => {
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
		Menu as React.ComponentType<Record<string, unknown>>,
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
