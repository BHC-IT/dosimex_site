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

const pages : IPage[] = [
	{route: 'Software'},
	{route: 'Training'},
	{route: 'About'},
	{route: 'articles'},
	{route: 'Contact'},
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
				pages.map((page: IPage, i: number) =>
					<li key={this.props.text.items[i]} style={{paddingLeft: "1.7vw"}}>
						<ItemNavbar
							name={this.props.text.items[i]}
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
						<li style={{display: "flex", alignItems: "center", marginRight: "2vw", cursor: 'pointer'}}>
							<Link href="/">
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
					name={this.props.text.button}
					route="Product"
				/>
			</nav>
		);
	}
}


export default withRouter(withText(Navbar, "Navbar"));

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