import * as React from 'react';
import * as CSS from 'csstype';
import ItemNavbar from './ItemNavbar';
import Button from './Button';
import LanguageSwitch from './LanguageSwitch';
import Link from 'next/link';
import Image from 'next/image';
import { withRouter, NextRouter } from 'next/router';

import { withText } from '../hoc/withText';

interface IState {
}

interface IPage {
	route: string,
	name: string,
}

interface WithRouterProps {
  router: NextRouter
}

interface IProps extends WithRouterProps {
	text?: any
}


export interface IStyles {
	navbar: CSS.Properties,
	navbarUl: CSS.Properties,
	navbarButton: CSS.Properties,
}

const text = {
	items: ["Nos offres", "Formations", "Qui sommes-nous ?", "Actualités", "Contact"],
	button: "Acheter Dosimex",
}

const pages : IPage[] = [
	{route: 'Software', name: text.items[0]},
	{route: 'Training', name: text.items[1]},
	{route: 'About', name: text.items[2]},
	{route: 'articles', name: text.items[3]},
	{route: 'Contact', name: text.items[4]},
]


class Navbar extends React.Component<IProps, IState> {

	constructor(props : IProps) {
		super(props);

		console.log(props);

		this.state = {
		}
	}

	renderNav = () => {
		return (
			<>
			{
				pages.map((page: IPage) =>
					<li key={page.name} style={{paddingLeft: "1.7vw"}}>
						<ItemNavbar
							name={page.name}
							route={page.route}
						/>
					</li>
				)
			}
			</>
		)
	}

	render() {
		const ratio = 0.5;
		return (
			<nav style={style.navbar}>
				<ul style={style.navbarUl}>
						<li style={{display: "flex", alignItems: "center", marginRight: "2vw"}}>
							<Link href="/" replace>
								<Image
									src="/Images/logo_dosimex_new.png"
									alt="logo dosimex"
									width={`${212 * ratio}rem`}
									height={`${44 * ratio}rem`}
								/>
							</Link>
						</li>
					<this.renderNav/>
					<LanguageSwitch route={this.props.router.pathname} language={this.props.router.locale}/>
				</ul>
				<Button
					name={text.button}
					route="Product"
				/>
			</nav>
		);
	}
}


export default withRouter(withText(Navbar, "navbar"));

export const style: IStyles =  {
	navbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		padding: "0 10vw",
		color: "var(--dark)",

	},
	navbarUl: {
		display: "flex",
		alignItems: "center",
	},
	navbarButton: {
		float: "right",
	},
}