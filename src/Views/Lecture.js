import React from 'react';

import { Row, Col, Accordion, Button, Card} from 'react-bootstrap'

import Color from '../Styles/colorSchemes.js'

import TextSpliter from '../Components/TextSpliter.js'

import Biblio from '../Components/biblio'

import ReactHtmlParser from 'react-html-parser'


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
			<div style={{display:'flex', width:'100vw', paddingTop:'2vh', paddingBottom:'2vh', borderBottom: '1px solid black', paddingRight:'3vw' ,paddingLeft:'3vw'}} >
				<a href={Livre.link} target="_blank"><img style={{verticalAlign:'middle', marginBottom:'0.75em', width:'18vw'}} src={Livre.img} alt="" /></a>
				<div style={{marginLeft:'2vw', width:'73vw'}} >
					<TextSpliter textStyle={{textAlign:'justify', fontSize:15}} text={Livre.text} />
					<a href={Livre.link} target="_blank">Lien vers l'éditeur</a>
				</div>
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