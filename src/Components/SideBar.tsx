import React from "react";
import * as CSS from 'csstype';
import Button from './Button';
import LanguageSwitch from './LanguageSwitch';
import Link from 'next/link';
import { slide as Menu } from "react-burger-menu";
import { withText } from '../hoc/withText';
import ItemNavbar from './ItemNavbar';
import Image from 'next/image';
import { useText } from '../Hooks/useText';
import { withRouter, NextRouter } from 'next/router';

interface WithRouterProps {
	router: NextRouter
}

interface IProps extends WithRouterProps {
	text?: any
}

const pages : IPage[] = [
	{route: 'Software'},
	{route: 'Training'},
	{route: 'About'},
	{route: 'articles'},
	{route: 'Contact'},
]

const RenderNav = ({text} : any) => {
	return (
		<>
		{
			pages.map((page: IPage, i: number) =>
				<li className="menu-item" key={text.items[i]}>
					<ItemNavbar
						name={text.items[i]}
						route={page.route}
					/>
				</li>
			)
		}
		</>
	)
}

const ratio = 0.5;

const SideBar = (props) => {
	const text = useText('Navbar');

	return (
		<Menu right {...props}>
			<ul>
				<li style={{cursor: "pointer"}}>
					<Link href="/">
						<Image
							src="/Images/logo_dosimex_new.png"
							alt="logo dosimex"
							width={`${212 * ratio}rem`}
							height={`${44 * ratio}rem`}
						/>
					</Link>
				</li>
				<RenderNav text={text}/>
				<LanguageSwitch route={props.router.pathname} language={props.router.locale}/>
			</ul>
			<Button
				name={text.button}
				route="Product"
			/>
		</Menu>
	);
};

export default withRouter(SideBar, "Navbar");
