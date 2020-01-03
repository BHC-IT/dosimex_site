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
			height:0,
			mouseOver:false
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
		const backColor = this.state.mouseOver ? "#991302" : 'rgba(0,0,0,1)';
		const fontSize = this.state.mouseOver ? (Size.greaterMd() ? '15.5' : 4.5) : (Size.greaterMd() ? '15' : 4)
		const itemStyle = {color: "white", height:this.state.mouseOver ? '4.2vh' : '4vh', fontSize:fontSize, fontWeight:'bold', 'transition-property': 'font-size', 'transition-duration': '0.4s'};
		return (
			<div style={{width:this.state.width, height:this.state.mouseOver ? '4.2vh' : '4vh'}} onMouseOver={() => this.setState({mouseOver:true})} onMouseOut={() => this.setState({mouseOver:false})} >
				<Menu pointing  style={{backgroundColor: backColor, transitionProperty: 'background-color', transitionDuration: '0.5s', height:this.state.mouseOver ? '4.2vh' : '4vh'}}>
					<Menu.Item
						style={itemStyle}
						name='Accueil'
						active={this.props.route === 'Home'}
						onClick={(e, name) => this.redirectTo(e, name, "/")}
					/>
					<Menu.Item
						style={itemStyle}
						name='Les offres Dosimex'
						active={this.props.route === 'Les offres Dosimex'}
						onClick={(e, name) => this.redirectTo(e, name, "/offres")}
					/>
					<Menu.Item
						style={itemStyle}
						name='Nos Vidéos'
						content='Nos Vidéos'
						active={this.props.route === 'Nos tutos'}
						onClick={(e, name) => this.redirectTo(e, name, "/tutos")}
					/>
					<Menu.Item
						style={itemStyle}
						name='Manuels et validations'
						active={this.props.route === 'A propos'}
						onClick={(e, name) => this.redirectTo(e, name, "/about")}
					/>
					<Menu.Item
						style={itemStyle}
						name='Lectures'
						active={this.props.route === 'Lecture'}
						onClick={(e, name) => this.redirectTo(e, name, "/lecture")}
					/>
					<Menu.Item
						style={itemStyle}
						name='Notre équipe'
						active={this.props.route === 'Notre équipe'}
						onClick={(e, name) => this.redirectTo(e, name, "/equipe")}
					/>
					<Menu.Item
						style={itemStyle}
						name='Formation'
						active={this.props.route === 'Formation'}
						onClick={(e, name) => this.redirectTo(e, name, "/Formation")}
					/>
					<Menu.Item
						style={itemStyle}
						name='Nos Partenaires'
						active={this.props.route === 'Partenaires'}
						onClick={(e, name) => this.redirectTo(e, name, "/partenaires")}
					/>
					<Menu.Item
						style={{...itemStyle, position:'absolute', right:5}}
						name='Acheter DOSIMEX'
						active={this.props.route === 'Acheter DOSIMEX'}
						onClick={(e, name) => this.redirectTo(e, name, "/acheter")}
					/>
				</Menu>
			</div>
		);
	}
}

const MenuExamplePointingWithRouter = withRouter(MenuExamplePointing);

export default MenuExamplePointingWithRouter