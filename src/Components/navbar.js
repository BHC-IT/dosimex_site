import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

import { BrowserRouter as Redirect, withRouter } from "react-router-dom";

import Color from '../Styles/colorSchemes.js'
import Size from '../Styles/Size.js'

class MenuExamplePointing extends Component {


	constructor(props){
		super(props);
		this.redirectTo = this.redirectTo.bind(this);
		this.handleItemClick = this.handleItemClick.bind(this);
		this.state = {
			activeItem:'Home',
			width:0,
			height:0
		}
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	componentWillMount(){
		console.log("mount");
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	redirectTo(props, name, link){
		this.props.history.push(link);
		this.handleItemClick(props, name);
	}

	render() {
		const { activeItem } = this.state
		return (
			<div style={{width:this.state.width}} >
				<Menu pointing style={{backgroundColor: Color.red}}>
					<Menu.Item
						style={{color: "white", fontSize:Size.greaterMd() ? 20 : 7, fontWeight:'bold'}}
						name='Acceuil'
						active={activeItem === 'Acceuil'}
						onClick={(e, name) => this.redirectTo(e, name, "/")}
					/>
					<Menu.Item
						style={{color: "white", fontSize:Size.greaterMd() ? 20 : 7, fontWeight:'bold'}}
						name='A propos'
						active={activeItem === 'A propos'}
						onClick={(e, name) => this.redirectTo(e, name, "/about")}
					/>
					<Menu.Item
						style={{color: "white", fontSize:Size.greaterMd() ? 20 : 7, fontWeight:'bold'}}
						name='Notre équipe'
						active={activeItem === 'Notre équipe'}
						onClick={(e, name) => this.redirectTo(e, name, "/equipe")}
					/>
					<Menu.Item
						style={{color: "white", fontSize:Size.greaterMd() ? 20 : 7, fontWeight:'bold'}}
						name='Les offres Dosimex'
						active={activeItem === 'Les offres Dosimex'}
						onClick={(e, name) => this.redirectTo(e, name, "/offres")}
					/>
					<Menu.Item
						style={{color: "white", fontSize:Size.greaterMd() ? 20 : 7, fontWeight:'bold'}}
						name='Nos tutos'
						active={activeItem === 'Nos tutos'}
						onClick={(e, name) => this.redirectTo(e, name, "/tutos")}
					/>
					<Menu.Item
						style={{color: "white", fontSize:Size.greaterMd() ? 20 : 7, fontWeight:'bold'}}
						name='Formations'
						active={activeItem === 'Formations'}
						onClick={(e, name) => this.redirectTo(e, name, "/formations")}
					/>
					<Menu.Item
						style={{color: "white", fontSize:Size.greaterMd() ? 20 : 7, fontWeight:'bold', position:'absolute', right:5}}
						name='Acheter DOSIMEX'
						active={activeItem === 'Acheter DOSIMEX'}
						onClick={(e, name) => this.redirectTo(e, name, "/acheter")}
					/>
				</Menu>
			</div>
		);
	}
}

const MenuExamplePointingWithRouter = withRouter(MenuExamplePointing);

export default MenuExamplePointingWithRouter