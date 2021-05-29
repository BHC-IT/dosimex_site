import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import Link from 'next/link'
//import logo from '../Images/logo_dosimex_new.png'

interface IProps {
}

interface IState {
	activeItem: object,
	language: string,
}

export default class Navbar extends Component {
	constructor(props : IProps) {
    		super(props);

		this.state = {
		activeItem: 'home',
		activeLanguage: 'fr',
		}
	}

	handleItemClick = ({ name }) => this.setState({ activeItem: name })
	handleLanguageClick = (lang : string) => this.setState({ language: lang })

	render() {
		return (
			<div className="container">
				<Menu pointing secondary>
					<Link href="/Home" replace>
						<div>
							{/*<img src={logo} alt="logo dosimex"/>*/}
						</div>
					</Link>
					<Link href="/Software" replace>
						<Menu.Item
							name='nos offres'
							active={this.state.activeItem === 'nos offres'}
							onClick={this.handleItemClick}
						/>
					</Link>
					<Link href="/Training" replace>
						<Menu.Item
							name='formation'
							active={this.state.activeItem === 'formation'}
							onClick={this.handleItemClick}
						/>
					</Link>
					<Link href="/About" replace>
						<Menu.Item
							name='qui sommes-nous ?'
							active={this.state.activeItem === 'qui sommes-nous ?'}
							onClick={this.handleItemClick}
						/>
					</Link>
					<Link href="/Contact" replace>
						<Menu.Item
							name='contact'
							active={this.state.activeItem === 'contact'}
							onClick={this.handleItemClick}
						/>
					</Link>
					<div id="switch-language">
						<i className="flaticon-translation"/>
						<p onClick={() => this.handleLanguageClick('fr')}>Fr</p>
						<p>|</p>
						<p onClick={() => this.handleLanguageClick('en')}>En</p>
					</div>
					<Menu.Menu position='right'>
						<Link href="/Product" replace>
							<button>Acheter Dosimex</button>
						</Link>
					</Menu.Menu>
				</Menu>
			</div>
		)
	}
}