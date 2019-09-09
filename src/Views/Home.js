import React from 'react';
import ReactPageScroller from "react-page-scroller";
import '../Styles/Landing.css'
import {Carousel, Container, Row, Col, Accordion, Button, Card} from 'react-bootstrap'

import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import Color from '../Styles/colorSchemes.js'
import Size from '../Styles/Size.js'

import i1a from "../Images/1a.png"
import i1b from "../Images/1b.png"
// import i1c from "../Images/image1c.png"
// import i1d from "../Images/image1d.png"

import { FaQuoteLeft } from 'react-icons/fa'
import { FaQuoteRight } from 'react-icons/fa'

const slides = [
	{
		uri:i1a,
		title:"DOSIMEX-GX",
		text:"Exposition externe Gamma"
	},
	{
		uri:i1b,
		title:"First slide label",
		text:"Nulla vitae elit libero, a pharetra augue mollis interdum."
	},
	// {
	// 	uri:i1c,
	// 	title:"First slide label",
	// 	text:"Nulla vitae elit libero, a pharetra augue mollis interdum."
	// },
	// {
	// 	uri:i1d,
	// 	title:"First slide label",
	// 	text:"Nulla vitae elit libero, a pharetra augue mollis interdum."
	// }
]

export default class Home extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			index:0,
			direction:null,
			width:0,
			height:0,
			offset:0
		}
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	handleSelect = (selectedIndex, e) => {
		this.setState({index:selectedIndex, direction:e.direction});
	}

	componentWillMount(){
		console.log("mount");
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
		// scroll.scrollToBottom();

		Events.scrollEvent.register('end', (to, element) => {
			if (this.state.offset === 1)
				this.setState({offset:9999});
			else
				this.setState({offset:0});
		});

		window.onscroll = () => {
			if (!Size.greaterMd()){
				if (window.pageYOffset < 20)
					this.setState({offset:0});
				return;
			}
			let off = window.pageYOffset;
			if(off > this.state.offset && this.state.offset === 0) {
				scroll.scrollToBottom({
					duration: 1500,
					delay: 0,
					smooth: "easeOutQuad",
				});
				off = 9999;
				this.setState({offset:1});
			}
			if (this.state.offset === 9999){
				scroll.scrollToTop({
					duration: 500,
					delay: 0,
					smooth: "easeOutQuad",
				});
				this.setState({offset:-1});
			}
		}

		scrollSpy.update();
	}
	componentWillUnmount(){
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	_packshot({pack}){
		return (
			<div>
				{pack.text.split('\n').map((t, i) => {
					return (
						<p style={{textAlign: 'justify'}} key={i}>{t}</p>
					);
				})}
				<div ref={(r) => {}} >
					<Element name="bottom" />
				</div>
			</div>
		);
	}

	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	renderSlogan(){
		if (Size.greaterMd())
			return (
				<Row style={{ backgroundColor:Color.lightergrey, justifyContent:'center'}} >
					<Col xs={{span:1, offset:1}} style={{marginTop:-20}} >
						<FaQuoteLeft color={Color.blue} size={50} />
					</Col>
					<Col xs={{span:9}} >
						<p style={{textAlign: 'justify', color:Color.blue, fontWeight:'bold', fontSize:30}} >Depuis maintenant 9 ans, nous proposons un ensemble de codes opérationnels simples d’emploi, validés, et qui permettent de répondre à de nombreuses situations rencontrées en radioprotection</p>
					</Col>
					<Col xs={{span:1}} style={{marginTop:40}} >
						<FaQuoteRight color={Color.blue} size={50} />
					</Col>
				</Row>
			);
		else
			return (
				<div style={{ backgroundColor:Color.lightergrey }} >
					<Row style={{}} >
						<Col xs={{span:2, offset:1}} style={{ justifyContent:'center'}} >
							<FaQuoteLeft color={Color.blue} size={30} />
						</Col>
					</Row>
					<Row style={{justifyContent:'center'}} >
						<Col xs={8} >
							<p style={{textAlign: 'justify', color:Color.blue, fontWeight:'bold', fontSize:20}} >Depuis maintenant 9 ans, nous proposons un ensemble de codes opérationnels simples d’emploi, validés, et qui permettent de répondre à de nombreuses situations rencontrées en radioprotection</p>
						</Col>
					</Row>
					<Row style={{}} >
						<Col xs={{span:2, offset:9}} style={{ justifyContent:'center'}} >
							<FaQuoteRight color={Color.blue} size={30} />
						</Col>
					</Row>
				</div>
			);
	}

	renderPackshot = () => {
		if (Size.greaterMd()){
			return (
				<Row style={{justifyContent:'space-between', height:this.state.height}} >
					<Col xs={{span:3}} style={{ marginLeft:this.state.width/24, backgroundColor:Color.lightgrey}} >
						<this._packshot pack={pack1} />
					</Col>
					<Col xs={{span:3}} style={{ backgroundColor:Color.lightgrey}} >
						<this._packshot pack={pack2} />
					</Col>
					<Col xs={{span:3}} style={{ marginRight:this.state.width/24, backgroundColor:Color.lightgrey}} >
						<this._packshot pack={pack3} />
					</Col>
				</Row>
			);
		} else {
			return (
				<Row style={{height:this.state.height, justifyContent:'center'}} >
					<Col xs={{span:9, offset:1}}  >
						<Accordion>
							<Card>
								<Card.Header>
									<Accordion.Toggle as={Button} variant="link" eventKey="0">
										<p>Click me!</p>
									</Accordion.Toggle>
								</Card.Header>
								<Accordion.Collapse eventKey="0">
									<Card.Body>
										{pack1.text.split('\n').map((t, i) => {
											return (
												<p style={{textAlign: 'justify', fontSize:10}} key={i}>{t}</p>
											);
										})}
									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Card.Header>
									<Accordion.Toggle as={Button} variant="link" eventKey="1">
										<p>Click me!</p>
									</Accordion.Toggle>
								</Card.Header>
								<Accordion.Collapse eventKey="1">
									<Card.Body>
										{pack2.text.split('\n').map((t, i) => {
											return (
												<p style={{textAlign: 'justify', fontSize:10}} key={i}>{t}</p>
											);
										})}
									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Card.Header>
									<Accordion.Toggle as={Button} variant="link" eventKey="2">
										<p>Click me!</p>
									</Accordion.Toggle>
								</Card.Header>
								<Accordion.Collapse eventKey="2">
									<Card.Body>
										{pack3.text.split('\n').map((t, i) => {
											return (
												<p style={{textAlign: 'justify', fontSize:10}} key={i}>{t}</p>
											);
										})}
									</Card.Body>
								</Accordion.Collapse>
							</Card>
						</Accordion>
					</Col>
					<div ref={(r) => {}} >
						<Element name="bottom" />
					</div>
				</Row>
			);
		}
	}

	render(){
		console.log('screen size : ', this.state.width, "/", this.state.height);
		return (
			<div style={{width:'100%'}} >
				<div style={{backgroundColor:Color.lightergrey, height:this.state.height, width:'100%'}} >
					<Row style={{backgroundColor:Color.lightergrey, justifyContent:'center', marginBottom:Size.greaterMd() ? 100 : 25 }}>
						<Col className="d-none d-md-block" md={6} style={{marginTop:20}} >
							<Carousel>
								{slides.map((s, i) => {
									return (
										<Carousel.Item key={i} >
											<img
												className="d-block w-100"
												src={s.uri}
											/>
											<Carousel.Caption style={{}} >
												<h1 style={{color:Color.darkBlue, fontSize:50, fontWeight:'bold', backgroundColor:Color.white, marginBottom:175 }} >{s.title}</h1>
												<p style={{color:Color.darkBlue, fontSize:30, fontWeight:'bold', backgroundColor:Color.white}} >{s.text}</p>
											</Carousel.Caption>
										</Carousel.Item>
									);
								})}
							</Carousel>
						</Col>
					</Row>
					<this.renderSlogan/>
					{ this.state.offset === 0 && Size.greaterMd() ?
						<Row  className={"fixed-bottom"} style={{justifyContent:'center'}} onClick={() => {
							scroll.scrollToBottom({
								duration: 1500,
								delay: 0,
								smooth: "easeOutQuad",
							});
							this.setState({offset:1});
						}} >
							<Col style={{justifyContent:'center'}} >
								<Row style={{justifyContent:'center'}} >
									<p style={{fontWeight:'bold', fontSize:20, color:Color.blue}}>PACK</p>
								</Row>
								<Row style={{justifyContent:'center'}} >
									<p style={{fontWeight:'bold', fontSize:25, color:Color.blue}}>V</p>
								</Row>
							</Col>
						</Row>
						:
						null
					}
					{ this.state.offset === 0 && !Size.greaterMd() ?
						<Row  className={"fixed-bottom"} style={{justifyContent:'center'}} onClick={() => {
							scroll.scrollToBottom({
								duration: 1500,
								delay: 0,
								smooth: "easeOutQuad",
							});
							this.setState({offset:1});
						}} >
							<Col style={{justifyContent:'center'}} >
								<Row style={{justifyContent:'center'}} >
									<p style={{fontWeight:'bold', fontSize:20, color:Color.blue}}>PACK</p>
								</Row>
								<Row style={{justifyContent:'center'}} >
									<p style={{fontWeight:'bold', fontSize:25, color:Color.blue}}>v</p>
								</Row>
								<Row style={{justifyContent:'center'}} >
									<p style={{fontWeight:'bold', fontSize:25, color:Color.blue}}>o</p>
								</Row>
							</Col>
						</Row>
						:
						null
					}
				</div>
				<this.renderPackshot/>
			</div>
		);
	}
}


const pack1 = {
	text:"	o Exposition externe gamma, générateurs X, NF C-15_160 (2018)\n\
		o Exposition externe Bêtas\n\
		o Exposition externe neutrons\n\
		o Exposition interne, contamination volumiques, transfert atmosphérique\n\
		o Dose patient en médecine nucléaire (radiopharmaceutiques)\n\
		Ils vous permettront d’estimer les risques radiologiques à leurs justes hauteurs et de\
		concevoir les protections nécessaires, de réaliser des prédictifs de dose, d’affiner vos\
		démarches ALARA .... Quelles que soient vos fonctions dans le domaine de la\
		radioprotection, ces codes vous permettront d’augmenter votre niveau d’expertise.\n\
		Grâce à une collaboration active avec les utilisateurs de DOSIMEX 2.O (voir Retours\
		utilisateurs), Le pack DOSIMEX 3.0 bénéficie de nombreuses améliorations :Voir ici les\
		modifications apportés à la version 3.0 de Dosimex-GX\
		et des dossiers de validations renforcées.\n Dosimex-GX est accompagné à lui seul de 3\
		dossiers de validations (comportant plus de 1000 valeurs de références (MCNP, RayXpert,\
		Mercurad... )\n\
		consulter les dossiers de validations de Dosimex-GX",
}

const pack2 = {
	text:"En complément des outils à vocation opérationnelle, nous proposons des outils à\
		vocation pédagogique :\n\
		o Interaction photon-matière\n\
		o Interaction particules chargées-matière\n\
		o Coefficient fluence /équivalent de dose (ICRU 57)\n\
		o Serious Game (dose gamma, écran, zonage)...\n\
		Leur objectif est de mieux comprendre la physique de l’interaction rayonnement-\
		matière, à l’origine des doses générées par expositions aux rayonnements\
		ionisants et des capacités de protections des écrans susceptibles d’être mis en\
		œuvre contre ces même rayonnements.\n\
		Ils vous permettront de :\n\
		o mieux comprendre la physique sous-jacente aux aspects de dose, de protection et de\n\
		détection,\n\
		o développer un sens physique permettant d’analyser plus sûrement les\n\
		problématiques dans une situation donnée."
}

const pack3 = {
	text:"Un troisième pack comprend des codes et utilitaires liés à l’aspect mesure de\
		ces rayonnements ionisants :\n\
		o Rendement en spectrométrie gamma (code TAGE)\n\
		o Rendement des contaminamètres (code CO 3 )\n\
		o Calculs de seuil de décision et limite de détection\n\
		o Outil Monte-Carlo de composition de variables aléatoires et d’incertitudes\
		Accompagnés de documents de cours complets, ils complèteront vos capacités\
		opérationnelles"
}