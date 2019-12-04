import React from 'react';
import ReactPageScroller from "react-page-scroller";
import '../Styles/Landing.css'
import {Carousel, Row, Col, Accordion, Button, Card} from 'react-bootstrap'

import * as Scroll from 'react-scroll';
import { Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import { Link } from "react-router-dom";

import ReactHtmlParser from 'react-html-parser'

import TextSpliter from '../Components/TextSpliter.js'

import Color from '../Styles/colorSchemes.js'
import Size from '../Styles/Size.js'

import logoDosi from "../Images/logo_dosimex.png"
import i1a from "../Images/1a.png"
import i1b from "../Images/1b.png"
import i1c from "../Images/1c_t.png"
import i1d from "../Images/1d_t.png"
import i1e from "../Images/1e_t.png"
import i1f from "../Images/1f_t.png"
import i1g from "../Images/1g_t.png"
import i1h from "../Images/1h_t.png"
import i1i from "../Images/1i_t.png"
import usbkey from "../Images/usbkey.png"

import Synthèse_retour_utilisateurs_Dosimex from '../Folders/Synthèse_retour_utilisateurs_Dosimex.pdf'
import Modif_DOSIMEX_GX_3 from '../Folders/Modif_DOSIMEX_GX_3.0.pdf'

import pack_ops from "../Images/pres_pack_ops.png"
import pack_peda from "../Images/pres_pack_peda.png"
import pack_mesure from "../Images/pres_pack_mesure.png"


import arrow_right from '../Images/arrow_right.png'
import arrow_left from '../Images/arrow_left.png'
// import i1c from "../Images/image1c.png"
// import i1d from "../Images/image1d.png"

import { FaQuoteLeft } from 'react-icons/fa'
import { FaQuoteRight } from 'react-icons/fa'

const slides = [
	{
		uri:logoDosi,
		title:"",
		text:"Outils de calcul radioprotection et formations associées"
	},
	// {
	// 	uri:usbkey,
	// 	title:null,
	// 	text:null
	// },
	{
		uri:i1a,
		title:"DOSIMEX-GX",
		text:"Doses gamma sources volumiques, multi-écran …"
	},
	{
		uri:i1b,
		title:"DOSIMEX-GX",
		text:"Rayonnement de freinage…"
	},
	{
		uri:i1d,
		title:"DOSIMEX-GX",
		text:"Effet de ciel"
	},
	{
		uri:i1c,
		title:"DOSIMEX-GX",
		text:"Modélisation générateur X primaire +diffusé."
	},
	{
		uri:i1e,
		title:"Dosimex-GX",
		text:"Application NF C15-160"
	},
	{
		uri:i1f,
		title:"Dosimex-B",
		text:"Dose Bêta, source volumique, calcul d’écran"
	},
	{
		uri:i1g,
		title:"Dosimex-N",
		text:"Code Monte-Carlo neutron"
	},
	{
		uri:i1h,
		title:"Dosimex-I",
		text:"exposition interne, transfert atmosphérique"
	},
	{
		uri:i1i,
		title:"Dosimex-MN",
		text:"radiopharmaceutiques et dose patient"
	},
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
			console.log("trigger");
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

		// scrollSpy.update();
	}
	componentWillUnmount(){
		window.removeEventListener('resize', this.updateWindowDimensions);
		window.onscroll = () => {};
	}

	_packshot({pack}){
		return (
			<div style={{marginTop:10}} >
				<p style={{textAlign:'center', color:Color.red, fontSize:22, fontWeight:'bold'}} >{pack.title}</p>
				{pack.text.split('\n').map((t, i) => {
					return (
						<p style={{textAlign: 'justify'}} key={i}>{ReactHtmlParser(t)}</p>
					);
				})}
				<Row style={{justifyContent:'center', bottom:'5em', position:'absolute', width:'100%'}} >
					<img style={{width:'50%'}} src={pack.image}/>
				</Row>
				<Row style={{justifyContent:'center', bottom:'2em', position:'absolute', width:'100%'}} >
					<Link style={{width:'100%'}} to={pack.url}> <p style={{textAlign:'center', fontSize:22}} >plus d'information</p> </Link>
				</Row>
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
						<FaQuoteLeft color={Color.blue} size={'5vh'} />
					</Col>
					<Col xs={{span:9}} >
						<p style={{textAlign: 'justify', color:Color.blue, fontWeight:'bold', fontStyle: 'italic', fontSize:'3vh'}} >Depuis 2012, nous vous proposons un ensemble d'outils de calculs pratiques, simples d’emploi, validés, et qui permettent de répondre à de nombreuses situations rencontrées en radioprotection.</p>
					</Col>
					<Col xs={{span:1}} style={{marginTop:40}} >
						<FaQuoteRight color={Color.blue} size={'5vh'} />
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
							<p style={{textAlign: 'justify', color:Color.blue, fontWeight:'bold', fontStyle: 'italic', fontSize:20}} >Depuis 2012, nous vous proposons un ensemble d'outils de calculs pratiques, simples d’emploi, validés, et qui permettent de répondre à de nombreuses situations rencontrées en radioprotection.</p>
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
		return (
			<Row style={{justifyContent:'center', height:'99vh', alignItems:'center'}} >
				<Col xs={{span:10}} >
					<TextSpliter text={fin_text} textStyle={{fontSize:'2vh', alignSelf:'center', justifyContent:'center', textAlign:'justify'}} />
				</Col>
			</Row>
		);
	}

	render(){
		return (
			<div style={{width:'100%'}} >
				<div style={{backgroundColor:Color.lightergrey, height:this.state.height, width:'100%'}} >
					<Row style={{backgroundColor:Color.lightergrey, justifyContent:'center', marginBottom:Size.greaterMd() ? 100 : 25 }}>
						<Col md={6} style={{marginTop:20, justifyContent:'center', alignItems:'center'}} >
							<Carousel nextIcon={<img src={arrow_right} />} prevIcon={<img src={arrow_left} /> } >
								{slides.map((s, i) => {
									return (
										<Carousel.Item key={i} style={{alignItems:'center', justifyContent:'center'}} >
											<img
												src={s.uri}
												style={{width:'100%'}}
											/>
											<Carousel.Caption style={{}} >
												{s.title ? <h1 style={{color:Color.darkBlue, fontSize:'3.5vh', fontWeight:'bold', marginBottom:175, backgroundColor:Color.Tlightgrey }} >{s.title}</h1> : null}
												{s.text ? <p style={{color:Color.darkBlue, fontSize:'2.5vh', fontWeight:'bold', backgroundColor:Color.Tlightgrey}} >{s.text}</p> : null}
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
									<p style={{fontWeight:'bold', fontSize:'2vh', color:Color.blue}}>PRESENTATION RAPIDE</p>
								</Row>
								<Row style={{justifyContent:'center'}} >
									<p style={{fontWeight:'bold', fontSize:'2.5vh', color:Color.blue}}>V</p>
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
		Grâce à une collaboration active avec les utilisateurs de DOSIMEX 2.O (voir <a target='_blank' href=" + Synthèse_retour_utilisateurs_Dosimex + " >Retours\
		utilisateurs</a>), Le pack DOSIMEX 3.0 bénéficie de nombreuses améliorations :<a target='_blank' href="+Modif_DOSIMEX_GX_3+" >Voir ici les\
		modifications apportés à la version 3.0 de Dosimex-GX</a>\
		et des dossiers de validations renforcées.\n Dosimex-GX est accompagné à lui seul de 3\
		dossiers de validations (comportant plus de 1000 valeurs de références (MCNP, RayXpert,\
		Mercurad... )\n\
		consulter les dossiers de validations de Dosimex-GX",
	title:"pack opérationel".toUpperCase(),
	image:pack_ops,
	url:"/offres/packOperationel"
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
		o développer un sens physique permettant d’analyser plus sûrement les\
		problématiques dans une situation donnée.",
	title:"pack pédagogique".toUpperCase(),
	image:pack_peda,
	url:"/offres/packPedagogique"
}

const pack3 = {
	text:"Un troisième pack comprend des codes et utilitaires liés à l’aspect mesure de\
		ces rayonnements ionisants :\n\
		o Rendement en spectrométrie gamma (code TAGE)\n\
		o Rendement des contaminamètres (code CO 3 )\n\
		o Calculs de seuil de décision et limite de détection\n\
		o Outil Monte-Carlo de composition de variables aléatoires et d’incertitudes\
		Accompagnés de documents de cours complets, ils complèteront vos capacités\
		opérationnelles",
	title:"pack mesure".toUpperCase(),
	image:pack_mesure,
	url:"/offres/packMesure"
}

let fin_text = "Les outils de calculs opérationnels vous permettront d’estimer à leurs justes hauteurs les risques radiologiques dans les scénarios d’exposition externe  (gamma, X , bêta , neutron…) et interne. Vous pourrez ainsi concevoir les protections nécessaires à mettre en place, réaliser des prédictifs de dose, affiner vos démarches ALARA ….(voir pack opérationnel).\n\
Quelles que soient vos fonctions dans le domaine de la radioprotection, ces outils de calculs vous permettront d’augmenter votre niveau d’expertise. Vous trouverez sur le site des vidéos spécifiques à chaque codes  vous donnant un aperçu de la simplicité d’empli de ces derniers (voir onglet vidéos)\n\
La version 3.0 bénéficie de nombreuses améliorations ( Voir  modifications  Dosimex-GX 3.0  grâce notamment à une collaboration active avec les utilisateurs  (voir Retours utilisateurs) et des dossiers de validations renforcées. Dosimex-GX est accompagné à lui seul de 3 dossiers de validations  comportant plus de 1000 valeurs de références. Ces validations mette en œuvre un benchmark complet s’appuyant sur MCNP, RayXpert, Mercurad.et Microshield (consulter les dossiers de validations de Dosimex-GX)\n\
Nous proposons aussi des formations  sur site (voir onglet formations). S’appuyant sur des cas pratiques, l’objectif de ces formations, au delà de la  prise en main de ces outils, est centré sur l’analyse et l’estimation des risques radiologiques.\n\
En complément des outils à vocation opérationnelle, nous proposons des outils à vocation pédagogique : Leur objectif est de mieux comprendre la physique de l’interaction rayonnement-matière, à l’origine des doses générées par expositions aux rayonnements ionisants et des capacités de protections des écrans susceptibles d’être mis en œuvre contre ces même rayonnements (voir pack pédagogique)\n\
Un troisième pack comprend des codes et utilitaires liés à l’aspect mesure de ces rayonnements ionisants : spectrométrie gamma, contaminamètres , seuil  de décision, limite de détection  (voir pack mesures)\n\
<p style=\"textAlign:center\" ><a href=\"/tutos\" style={{textAlign:'center'}} >Vidéo présentation générale</a></p>"
