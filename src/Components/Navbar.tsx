import * as React from 'react';
import * as CSS from 'csstype';
import ItemNavbar from './ItemNavbar';
import Button from './Button';
import LanguageSwitch from './LanguageSwitch';
import Link from 'next/link';
import Image from 'next/image';
import { withRouter, NextRouter } from 'next/router';

interface IState {
}

interface IPage {
	route: string,
	name: string,
}

interface WithRouterProps {
  router: NextRouter
}

interface IProps extends WithRouterProps {}


export interface IStyles {
	navbar: CSS.Properties,
	navbarUl: CSS.Properties,
	navbarButton: CSS.Properties,
}

const text = {
	items: {
		li1: "Nos offres",
		li2: "Formations",
		li3: "Qui sommes-nous ?",
		li4: "Contact",
	},
	button: "Acheter Dosimex",
}

const pages : IPage[] = [
	{route: 'Software', name: text.items.li1},
	{route: 'Training', name: text.items.li2},
	{route: 'About', name: text.items.li3},
	{route: 'Contact', name: text.items.li4},
]


class Navbar extends React.Component<IProps, IState> {

	constructor(props : IProps) {
		super(props);

		this.state = {
		}
	}

	renderNav = () => {
		return (
			<>
			{
				pages.map((page: IPage) =>
					<li key={page.name} style={{paddingLeft: "20px"}}>
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
					<Link href="/" replace>
						<li>
							<Image
								src="/Images/logo_dosimex_new.png"
								alt="logo dosimex"
								width={`${212 * ratio}px`}
								height={`${44 * ratio}px`}
							/>
						</li>
					</Link>
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


export default withRouter(Navbar);

export const style: IStyles =  {
	navbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		padding: "3px 100px",

	},
	navbarUl: {
		padding: "0px",
		listStyle: "none",
		display: "flex",
		alignItems: "center",
		color: "black",
	},
	navbarButton: {
		float: "right",
	},
}