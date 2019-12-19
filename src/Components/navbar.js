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
			activeItem:this.props.route,
			width:0,
			height:0
		}
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	componentWillMount(){
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
						name='Accueil'
						active={this.props.route === 'Home'}
						onClick={(e, name) => this.redirectTo(e, name, "/")}
					/>
					<Menu.Item
						style={{color: "white", fontSize:Size.greaterMd() ? 20 : 7, fontWeight:'bold'}}
						name='Les offres Dosimex'
						active={this.props.route === 'Les offres Dosimex'}
						onClick={(e, name) => this.redirectTo(e, name, "/offres")}
					/>
					<Menu.Item
						style={{color: "white", fontSize:Size.greaterMd() ? 20 : 7, fontWeight:'bold'}}
						name='Nos videos'
						active={this.props.route === 'Nos tutos'}
						onClick={(e, name) => this.redirectTo(e, name, "/tutos")}
					/>
					<Menu.Item
						style={{color: "white", fontSize:Size.greaterMd() ? 20 : 7, fontWeight:'bold'}}
						name='Manuels et validation'
						active={this.props.route === 'A propos'}
						onClick={(e, name) => this.redirectTo(e, name, "/about")}
					/>
					<Menu.Item
						style={{color: "white", fontSize:Size.greaterMd() ? 20 : 7, fontWeight:'bold'}}
						name='Lectures'
						active={this.props.route === 'Lecture'}
						onClick={(e, name) => this.redirectTo(e, name, "/lecture")}
					/>
					<Menu.Item
						style={{color: "white", fontSize:Size.greaterMd() ? 20 : 7, fontWeight:'bold'}}
						name='Notre équipe'
						active={this.props.route === 'Notre équipe'}
						onClick={(e, name) => this.redirectTo(e, name, "/equipe")}
					/>
					<Menu.Item
						style={{color: "white", fontSize:Size.greaterMd() ? 20 : 7, fontWeight:'bold'}}
						name='Formation'
						active={this.props.route === 'Formation'}
						onClick={(e, name) => this.redirectTo(e, name, "/Formation")}
					/>
					<Menu.Item
						style={{color: "white", fontSize:Size.greaterMd() ? 20 : 7, fontWeight:'bold', position:'absolute', right:5}}
						name='Acheter DOSIMEX'
						active={this.props.route === 'Acheter DOSIMEX'}
						// onClick={(e, name) => this.redirectTo(e, name, "/acheter")}
					/>
				</Menu>
			</div>
		);
	}
}

const MenuExamplePointingWithRouter = withRouter(MenuExamplePointing);

export default MenuExamplePointingWithRouter