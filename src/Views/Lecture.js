import React from 'react';

import Color from '../Styles/colorSchemes.js'

import TextSpliter from '../Components/TextSpliter.js'

import Biblio from '../Components/biblio'

import {
	BrowserView,
	MobileView,
} from "react-device-detect";

const transform = {
	packOperationel:'0',
	packPedagogique:'1',
	packMesure:'2'
};

export default class Home extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			currOpen:transform[this.props.pack]?transform[this.props.pack]:null
		};

		this._keepTrack = this._keepTrack.bind(this);
		this.isOpen = this.isOpen.bind(this);
	}

	isOpen(){
		if (this.state.currOpen === null)
			return (false);
		return (true);
	}

	_keepTrack(i){
		if (this.state.currOpen === i)
			this.setState({currOpen:null});
		else
			this.setState({currOpen:i});
	}

	_renderLivre({Livre}){
		return (
			<div>
				<BrowserView>
					<div style={{display:'flex', width:'100vw', paddingTop:'2vh', paddingBottom:'2vh', borderBottom: '1px solid black', paddingRight:'3vw' ,paddingLeft:'3vw'}} >
						<a href={Livre.link} target="_blank" rel='noopener noreferrer' ><img style={{verticalAlign:'middle', marginBottom:'0.75em', width:'18vw'}} src={Livre.img} alt="" /></a>
						<div style={{marginLeft:'2vw', width:'73vw'}} >
							<p style={{fontSize:17, fontWeight:'bold'}} >{Livre.author}</p>
							<TextSpliter textStyle={{textAlign:'justify', fontSize:15}} text={Livre.text} />
							<div style={{marginTop:'4vh'}} >
								<a style={{fontSize:16}} href={Livre.link} target="_blank" rel='noopener noreferrer' >Lien vers l'éditeur</a>
							</div>
						</div>
					</div>
				</BrowserView>
				<MobileView>
					<div style={{display:'flex', flexDirection:'column', width:'100vw', paddingTop:'2vh', paddingBottom:'2vh', borderBottom: '1px solid black', paddingRight:'3vw' ,paddingLeft:'3vw', alignItems:'center', justifyContent:'center'}} >
						<p style={{fontSize:17, fontWeight:'bold'}} >{Livre.author}</p>
						<a href={Livre.link} target="_blank" rel='noopener noreferrer' ><img style={{verticalAlign:'middle', marginBottom:'0.75em', width:'50vw'}} src={Livre.img} alt="" /></a>
						<div style={{marginLeft:'2vw', width:'80vw'}} >
							<TextSpliter textStyle={{textAlign:'justify', fontSize:12}} text={Livre.text} />
							<div style={{marginTop:'4vh'}} >
								<a style={{fontSize:16}} href={Livre.link} target="_blank" rel='noopener noreferrer' >Lien vers l'éditeur</a>
							</div>
						</div>
					</div>
				</MobileView>
			</div>
		);
	}

	render(){
		console.log(Biblio);
		return (
			<div style={{display:'inline-block', backgroundColor:Color.lightergrey}} >

				{Biblio.map((bib, i) => <this._renderLivre Livre={bib} key={i} />)

				}

			</div>
		);
	}

}