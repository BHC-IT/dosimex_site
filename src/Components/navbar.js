import React, { Component } from 'react'
import { Menu, Sidebar } from 'semantic-ui-react'

import { BrowserRouter as Redirect, withRouter } from "react-router-dom";

import LogoDosi2 from "../Images/miniLogo.png"

import {
	isMobile
} from "react-device-detect";

function noop(op){
	return (op);
}

class MenuExamplePointing extends Component {


	constructor(props){
		super(props);
		this.redirectTo = this.redirectTo.bind(this);
		this.handleItemClick = this.handleItemClick.bind(this);
		this.state = {
			activeItem:this.props.route,
			width:0,
			height:0,
			mouseOver:false,
			visible:false
		}
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
		noop(Redirect);
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

	renderMobile = () => {
		let fontSize = this.state.mouseOver ? '2vh' : '2vh'
		const itemStyle = {color: "white", fontSize:fontSize, fontWeight:'bold', transitionProperty: 'font-size', transitionDuration: '0.4s', zIndex:755556, height:'5vh'};
		return (
			<div>
				<Sidebar
					as={Menu}
					animation='overlay'
					icon='labeled'
					inverted
					onHide={() => this.setState({visible:false})}
					vertical
					visible={this.state.visible}
					width='large'
					style={{zIndex:755556}}
				>
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
							content='Archives Vidéos'
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
							name='Formations'
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
							style={itemStyle}
							name='Contact'
							active={this.props.route === 'Contact'}
							onClick={(e, name) => this.redirectTo(e, name, "/contact")}
						/>
						<Menu.Item
							style={{...itemStyle}}
							name='Acheter DOSIMEX'
							active={this.props.route === 'Acheter DOSIMEX'}
							onClick={(e, name) => this.redirectTo(e, name, "/acheter")}
						/>
				</Sidebar>
				<Sidebar.Pusher style={{position:'fixed', zIndex:755555, top:'2vh', left:'2vw'}} onClick={() => this.setState({visible:true})} >
					<ion-icon name='md-menu' style={{color:this.props.route === 'Home' ? 'white' : 'black', fontSize:'5vh'}}></ion-icon>
				</Sidebar.Pusher>
			</div>
		)
	}

	render() {
		const backColor = this.state.mouseOver ? "#991302" : 'rgba(0,0,0,1)';
		let fontSize = this.state.mouseOver ? '0.95vw' : '0.95vw'
		if (isMobile){
			fontSize = '1vw';
			return this.renderMobile();
		}
		const itemStyle = {color: "white", fontSize:fontSize, fontWeight:'bold', transitionProperty: 'font-size', transitionDuration: '0.4s', zIndex:10};
		return (
			<div style={{width:'100%', position:this.props.route === 'Home' ? 'fixed' : 'relative', top:0, zIndex:255}} onMouseOver={() => this.setState({mouseOver:true})} onMouseOut={() => this.setState({mouseOver:false})} >
				<Menu pointing  style={{ display:'flex', flexDirection:'row', alignItems:'center', backgroundColor: backColor, transitionProperty: 'background-color', transitionDuration: '0.5s', 'z-index':10}}>
					<img src={LogoDosi2} style={{height:'3vh', paddingRight:'1vw', paddingLeft:'0.5vw', marginRight:'0.5vw', alignSelf:'center'}} alt='logo' />
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
						content='Archives Vidéos'
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
						name='Formations'
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
						style={itemStyle}
						name='Contact'
						active={this.props.route === 'Contact'}
						onClick={(e, name) => this.redirectTo(e, name, "/contact")}
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