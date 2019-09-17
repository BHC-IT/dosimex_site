import React from 'react';
import ReactPageScroller from "react-page-scroller";
import '../Styles/Landing.css'
import {Carousel, Container, Row, Col, Accordion, Button, Card} from 'react-bootstrap'

import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import Color from '../Styles/colorSchemes.js'
import Size from '../Styles/Size.js'

const team = [
{
	name:"alain",
	text:"some text aeibaiebf aieubvaeiubvaeoi ubvaeouibvaeuib vaiuebvui aerbguieb fauefbni auebvuieab viahfobvh fabvauiebf bnaiuzefbhib vhfbvauibd veauivbe arioubveua ibvaueivjhf nauiehfai uebgiua ebvijeabv eauibfva irvubarf ihvbaiub feuifbaei ufbaei uvbaue ivbadihvb auebviaub vruaibgvu avb",
	img:"https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg",
	title:"title here"
},
{
	name:"gerald",
	text:"some text aeibaiebf aieubvaeiubvaeoi ubvaeouibvaeuib vaiuebvui aerbguieb fauefbni auebvuieab viahfobvh fabvauiebf bnaiuzefbhib vhfbvauibd veauivbe arioubveua ibvaueivjhf nauiehfai uebgiua ebvijeabv eauibfva irvubarf ihvbaiub feuifbaei ufbaei uvbaue ivbadihvb auebviaub vruaibgvu avb",
	img:"https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg",
	title:"title here"
}
]

export default class Team extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			width:0,
			height:0
		}
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentWillMount(){
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount(){
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	_user({user}){
		return (
			<div style={{marginTop:10, marginBottom:10}} >
				<Row style={{}} >
					<Col xs={{span:8, offset:2}} style={{justifyContent:'center', justifyContent:'center', alignItems:'center'}} >
						<p style={{textAlign: 'center', fontWeight:'bold', fontSize:30}} >{user.name}</p>
					</Col>
					<Col xs={{span:8, offset:2}} style={{justifyContent:'center', marginTop:5, justifyContent:'center', alignItems:'center'}} >
						<img className="d-block w-100" src={user.img}/>
					</Col>
					<Col xs={{span:12}} style={{justifyContent:'center', marginTop:5, justifyContent:'center', alignItems:'center'}} >
						<p style={{textAlign: 'justify', fontSize:20}} >{user.text}</p>
					</Col>
				</Row>
			</div>
		);
	}

	render(){
		return (
			<div style={{width:'100%'}} >
				<Row style={{height:'90vh', width:'100%', marginTop:15}} >
					<Col xs={{span:4, offset:1}} style={{height:'100%', backgroundColor:Color.lightgrey}} >
						<this._user user={team[0]} />
					</Col>
					<Col xs={{span:4, offset:2}} style={{height:'100%', backgroundColor:Color.lightgrey}} >
						<this._user user={team[1]} />
					</Col>
				</Row>
			</div>
		);
	}

}