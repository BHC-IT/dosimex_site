import * as React from 'react';
import * as CSS from 'csstype';
import ItemNavbar from './ItemNavbar';
import Button from './Button';
import LanguageSwitch from './LanguageSwitch';
import Link from 'next/link';
import Image from 'next/image';
import { withRouter, NextRouter } from 'next/router';
import { withText } from '../hoc/withText';
import SideBar from "./SideBar";
import {
	BrowserView,
} from "react-device-detect";

const originalError = console.error;

console.error = (...args) => {
  if (/Warning.*Function components cannot be given refs/.test(args[0])) {
    return;
  }
  originalError.call(console, ...args);
};

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
	navbarLi: CSS.Properties,
	navbarButton: CSS.Properties,
}

const pages : IPage[] = [
	{route: 'Software'},
	{route: 'Training'},
	{route: 'Manuals'},
	{route: 'About'},
	{route: 'articles'},
	{route: 'Contact'},
]

class Navbar extends React.Component<IProps> {

	constructor(props : IProps) {
		super(props);
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
		const ratio = 0.7;

		return (
			<>
				<div className="divNone">
					<BrowserView>
						<nav style={styles.navbar}>
							<ul style={styles.navbarUl}>
									<li style={styles.navbarLi}>
										<Link href="/">
											<Image
												src="/Images/logo_dosimex_new.webp"
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
					</BrowserView>
				</div>
				<div id="containerNav">
					<SideBar />
					<div style={{textAlign: "center", paddingTop: "1.5vh", borderBottom: "1px solid var(--main)"}}>
						<Image
								src="/Images/logo_dosimex_new.webp"
								alt="logo dosimex"
								width={`${212 * ratio}rem`}
								height={`${44 * ratio}rem`}
							/>
					</div>
				</div>
			</>
		);
	}
}

export const styles: IStyles = {
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
	navbarLi: {
		display: "flex",
		alignItems: "center",
		marginRight: "2vw",
		cursor: 'pointer',
	},
	navbarButton: {
		float: "right",
	},
}

export default withRouter(withText(Navbar, "Navbar"));
