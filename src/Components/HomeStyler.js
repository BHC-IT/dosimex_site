import React, {Component} from 'react'

import VizSensor from 'react-visibility-sensor';

import Color from '../Styles/colorSchemes.js'

import PropTypes from 'prop-types';


import {
	BrowserView,
	MobileView,
} from "react-device-detect";

export default class HomeStyler extends Component {
	constructor(props){
		super(props);

		this.state = {
		};
	}

	render(){
		return(
			<div style={{...{height:'100%', width:'100%', backgroundColor:'rgba(255,255,255,0.5)', zIndex:5}, ...boxStyle, ...this.props.style}} >
				<BrowserView>
					<VizSensor partialVisibility offset={{top:-100, bottom:-100}} onChange={(isVisible) =>this.setState({pack:isVisible})} >
						<div style={poperStyle} >
							<div style={{display:'flex', opacity:this.state.pack?1:0, 'transition-property': 'right; opacity', 'transition-duration': '1s', position:'relative', top:'45%', right:this.state.pack?'-10vw':'50vw', zIndex:6}} >
								<h2 style={{fontSize:40, fontWeight:'bold', color:Color.red, textShadow:'1.5px 1.5px '+Color.darkred}} >{this.props.mainText}</h2>
							</div>
							<div style={{display:'flex', opacity:this.state.pack?1:0, 'transition-property': 'right; opacity', 'transition-duration': '1s', position:'relative', top:'0vh', right:this.state.pack?'10vw':'-50vw', zIndex:5}} >
								<ion-icon name={this.props.icon} style={{color:this.props.iconColor, fontSize:'50vh'}}></ion-icon>
							</div>
							<div style={{opacity:this.state.pack?1:0, 'transition-property': 'opacity', 'transition-duration': '1s', zIndex:6}} >
								<p style={{color:Color.black, fontSize:28, textShadow:'1.5px 1.5px ' + Color.dark, zIndex:6}} >{this.props.secondText}</p>
							</div>
						</div>
					</VizSensor>
				</BrowserView>
				<MobileView>
					<VizSensor partialVisibility offset={{top:-100, bottom:-100}} onChange={(isVisible) =>this.setState({pack:isVisible})} >
						<div style={poperStyle} >
							<div style={{display:'flex', opacity:this.state.pack?1:0, 'transition-property': 'right; opacity', 'transition-duration': '1s', position:'relative', top:'45%', right:this.state.pack?'-10vw':'50vw', zIndex:6}} >
								<h2 style={{fontSize:40, fontWeight:'bold', color:Color.red, textShadow:'1.5px 1.5px '+Color.darkred}} >{this.props.mainText}</h2>
							</div>
							<div style={{display:'flex', opacity:this.state.pack?1:0, 'transition-property': 'right; opacity', 'transition-duration': '1s', position:'relative', top:'0vh', right:this.state.pack?'10vw':'-50vw', zIndex:5}} >
								<ion-icon name={this.props.icon} style={{color:this.props.iconColor, fontSize:'50vh'}}></ion-icon>
							</div>
							<div style={{opacity:this.state.pack?1:0, 'transition-property': 'opacity', 'transition-duration': '1s', zIndex:6}} >
								<p style={{color:Color.black, fontSize:28, textShadow:'1.5px 1.5px ' + Color.dark, zIndex:6}} >{this.props.secondText}</p>
							</div>
						</div>
					</VizSensor>
				</MobileView>
			</div>
		);
	}
}

HomeStyler.propTypes = {
	icon:PropTypes.string.isRequired,
	mainText:PropTypes.string.isRequired,
	secondText:PropTypes.string.isRequired,
	iconColor:PropTypes.string,
}

HomeStyler.defaultProps = {
	iconColor:Color.lightergrey,
}

const boxStyle = { display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'};
const poperStyle = {display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'};
