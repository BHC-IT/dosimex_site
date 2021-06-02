import * as React from 'react';
import * as CSS from 'csstype';
import ItemNavbar from './ItemNavbar'
import Link from 'next/link'
// import logo from '../Images/logo-dosimex-new.png'


interface IProps {
	onClick?: Function,
}

interface IState {
	activeItem: string,
	activeLanguage: string,
}

interface IPage {
	route: string,
	name: string,
}
export interface IStyles {
	navbar: CSS.Properties,
	navbarUl: CSS.Properties,
	navbarButton: CSS.Properties,
}

const pages : IPage[] = [
	{route: 'Software', name: 'Nos offres'},
	{route: 'Training', name: 'Formation'},
	{route: 'About', name: 'Qui sommes-nous ?'},
	{route: 'Contact', name: 'Contact'},

]

export default class Navbar extends React.Component<IProps, IState> {

	constructor(props : IProps) {
		super(props);

		this.state = {
			activeItem: 'Accueil',
			activeLanguage: navigator.language.substr(0, 2),
		}
	}

	handleClick = (activeItem : string) => {
		this.setState({activeItem: activeItem});
		this.props.onClick?.(this.state)
	}

	renderNav = () =>
		<>
		{
			pages.map((page: IPage) =>
				<li key={page.name} style={{paddingLeft: "20px"}}>
					<ItemNavbar
						name={page.name}
						route={page.route}
						isActive={this.state.activeItem === page.name}
						onClick={() => this.handleClick(page.name)}
					/>
				</li>
			)
		}
		</>

	render() {
		return (
			<nav style={style.navbar}>
				<ul style={style.navbarUl}>
					<Link href="/" replace passHref>
						<li>
							<a style={{color: "black", cursor: "pointer"}}>logo</a>
						</li>
					</Link>
					<this.renderNav/>
					{/*Faire un composant pour le switch language ?? */}
					<li style={{paddingLeft: "20px"}}><i className="flaticon-translation"/></li>
					<li>Fr</li>
					<li>|</li>
					<li>En</li>
				</ul>
				{/*Faire un composant pour le button*/}
				<Link href="/Product" replace passHref>
					<button style={style.navbarButton}>Acheter Dosimex</button>
				</Link>
			</nav>
		);
	}
}

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