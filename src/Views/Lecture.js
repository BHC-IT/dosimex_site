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
			<div style={{marginLeft:'4vw', paddingBottom:'2vh', borderBottom: '1px solid black', marginTop:'1vh', marginBottom:'3vh'}} >
				<a href={Livre.link} target="_blank"><img style={{verticalAlign:'middle', marginBottom:'0.75em', width:'22vw'}} src={Livre.img} alt="" /></a>
				<span style={{display:'block', float:'right', width:'70vw', marginLeft:'1vw'}} ><p style={{textAlign:'justify', fontSize:20}} >{Livre.author}</p> <p style={{textAlign:'justify', fontSize:16}} >{ReactHtmlParser(Livre.text)}</p><a href={Livre.link} target="_blank">Lien vers l'éditeur</a> </span>
			</div>
		);
	}

	render(){
		console.log(Biblio);
		return (
			<div style={{display:'inline-block'}} >

				{Biblio.map((bib, i) => <this._renderLivre Livre={bib} key={i} />)

				}

			</div>
		);
	}

}