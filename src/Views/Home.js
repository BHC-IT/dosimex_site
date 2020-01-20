import React from 'react';
import ReactPageScroller from "react-page-scroller";
import '../Styles/Landing.css'
import {Carousel, Row, Col, Accordion, Button, Card} from 'react-bootstrap'

import * as Scroll from 'react-scroll';
import { Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import { Link } from "react-router-dom";

import ReactHtmlParser from 'react-html-parser'

import TextSpliter from '../Components/TextSpliter.js'
import HomeStyler from '../Components/HomeStyler.js'

import VizSensor from 'react-visibility-sensor';

import '../Styles/Font.css';

import Color from '../Styles/colorSchemes.js'
import Size from '../Styles/Size.js'

import BackGroundHague from "../Images/BackGroundHague.png"
import BackGroundHague2 from "../Images/BackGroundHague2_compressed.png"
import BackGroundHague2U from "../Images/BackGroundHague2_ucompressed.png"

import LogoDosi2 from "../Images/logo_dosi.png"
import bhcLightNoText from '../Images/test6_name_customcolor_backless_v2_light.png'

import logoDosi from "../Images/logo_dosimex.png"
import usbkey from "../Images/usbkey.png"

import Synthèse_retour_utilisateurs_Dosimex from '../Folders/extrait_validation2.htm'
import Modif_DOSIMEX_GX_3 from '../Folders/Modif_DOSIMEX_GX_3.0.pdf'
import Information_légales from '../Folders/Informations_légales.pdf'

import pack_ops from "../Images/pres_pack_ops.png"
import pack_peda from "../Images/pres_pack_peda.png"
import pack_mesure from "../Images/pres_pack_mesure.png"


import arrow_right from '../Images/arrow_right.png'
import arrow_left from '../Images/arrow_left.png'
// import i1c from "../Images/image1c.png"
// import i1d from "../Images/image1d.png"

import { FaQuoteLeft } from 'react-icons/fa'
import { FaQuoteRight } from 'react-icons/fa'


export default class Home extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			index:0,
			direction:null,
			width:0,
			height:0,
			offset:0,
			scrolling:false,
			loading:true
		}
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	handleSelect = (selectedIndex, e) => {
		this.setState({index:selectedIndex, direction:e.direction});
	}

	componentWillMount(){
		// this.listenersSetUp();
	}

	componentDidMount(){
		this.setState({loading:false});
	}

	listenersSetUp = () => {
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
			if (this.scrolling)
				return;
			this.setState({scrolling:true});
			setTimeout(() => this.setState({scrolling:false}), 1510);
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
		return <p style={{textAlign: 'justify', color:Color.blue, fontWeight:'bold', fontStyle: 'italic', fontSize:'3vh'}} >Depuis 2012, nous vous proposons un ensemble d'outils de calculs pratiques, simples d’emploi, validés, et qui permettent de répondre à de nombreuses situations rencontrées en radioprotection.</p>
	}

	renderPackshot = () => {
		return (
			<Row style={{height:'80vh', justifyContent:'center', alignItems:'center'}} >
				<Col xs={{span:10}}  style={{}} >
					<TextSpliter text={fin_text} textStyle={{fontSize:'2.5vh', alignSelf:'center', justifyContent:'center', textAlign:'justify', color:Color.black, paddingTop:'1.0vh'}} />
				</Col>
			</Row>
		);
	}

	scroller = () => {
		return (
			<div>
				{ this.state.offset === 0 && Size.greaterMd() ?
					<Row  className={"fixed-bottom"} style={{justifyContent:'center'}} onClick={() => {
						if (this.state.scrolling)
							return;
						this.setState({scrolling:true});
						setTimeout(() => this.setState({scrolling:false}), 1510);
						scroll.scrollToBottom({
							duration: 1500,
							delay: 0,
							smooth: "easeOutQuad",
						});
						this.setState({offset:1});
					}} >
						<Col style={{justifyContent:'center'}} >
							<Row style={{justifyContent:'center'}} >
								<p style={{fontWeight:'bold', fontSize:'2vh', color:Color.white,  textShadow:'1.5px 1.5px #000000'}}>PRÉSENTATION GÉNÉRALE</p>
							</Row>
							<Row style={{justifyContent:'center'}} >
								<ion-icon name="arrow-down" size="large" style={{color:Color.white}}></ion-icon>
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
								<p style={{fontWeight:'bold', fontSize:20, color:Color.white,  textShadow:'1.5px 1.5px #000000'}}>PACK</p>
							</Row>
							<Row style={{justifyContent:'center'}} >
								<p style={{fontWeight:'bold', fontSize:25, color:Color.white,  textShadow:'1.5px 1.5px #000000'}}>v</p>
							</Row>
							<Row style={{justifyContent:'center'}} >
								<p style={{fontWeight:'bold', fontSize:25, color:Color.white,  textShadow:'1.5px 1.5px #000000'}}>o</p>
							</Row>
						</Col>
					</Row>
					:
					null
				}
			</div>
		);
	}

	footer = () => {
		return (
			<div style={{display:'flex', backgroundColor:'#242424', justifyContent:'space-between', alignItems:'center', justifySelf:'flex-end', paddingTop:'1vh', paddingBottom:'1vh' /* height === 9vh */}} >
				<div style={{marginLeft:'2vw', justifyContent:'center'}} >
					<p style={{color: Color.white, fontSize:'2vh'}} >Email : <a href='mailto:contact@dosimex.fr'> contact@dosimex.fr</a></p>
					<p style={{color: Color.white, fontSize:'2vh'}} >Téléphone : 06 89 70 90 35</p>
					<a href={Information_légales} target="_blank"><p style={{color: Color.white, fontSize:'2vh'}} >Information légale</p></a>
				</div>
				<img src={LogoDosi2} style={{height:'7vh'}}/>
				<a href='https://bhc-it.com' >
					<a href='https://bhc-it.com' style={{color:Color.white, display:'flex', alignItems:'center', fontSize:18, marginRight:'1vw', fontSize:'2vh'}} >Designed by <p style={{display:'flex', color:Color.bhcPurpleTypo, alignItems:'center', marginLeft:'1vw'}} ><img src={bhcLightNoText} style={{height:'5vh'}}/></p></a>
				</a>
			</div>
		);
	}

	render(){
		if (this.state.loading){
			return (
				null
			);
		}
		return (
			<div style={{}} >
				<div style={{...backgroundImage(BackGroundHague2), ...boxStyle}} >
					<div style={{backgroundColor:'rgba(0,0,0,0.2)', height:'100%', width:'100%'}} >
						<div style={{display:'flex', flexDirection:'column', flex:1, justifyContent:'center', alignItems:'center'}} >
							<h1 style={{color:Color.white, fontSize:'7vw', marginTop:'5vh', fontFamily:'CODEBold', textShadow:'1.5px 1.5px #000000'}}  >DOSIMEX</h1>
						</div>
						<div style={{display:'flex', marginTop:'15vh', height:'35vh', 'flexDirection':'row', width:'100vw', justifyContent:'center', alignItems:'center'}} >
							<p style={{width:'80vw', textAlign: 'justify', color:Color.white, fontWeight:'bold', fontSize:'2vw',  textShadow:'1.5px 1.5px #000000'}} >Depuis 2012, nous vous proposons un ensemble d'outils de calculs pratiques, simples d’emploi, validés, et répondant à de nombreuses situations rencontrées en radioprotection. Ils vous permettront d'améliorer votre niveau d'expertise.</p>
						</div>
						{/*<this.scroller/>*/}
						<div style={{position:'absolute', right:'2vw', bottom:'2vh'}} >
							<p style={{color:Color.lightergrey, fontSize:'0.9vw', marginLeft:'1vh', fontStyle:'italic'}} >Cap de la Hague - Site ORANO</p>
						</div>
					</div>
				</div>
				<div style={backgroundImage(BackGroundHague2)} >
					<HomeStyler icon="md-walk" mainText='A la découverte du pack Dosimex' secondText='test' />
				</div>
				<div style={backgroundImage(BackGroundHague2)} >
					<HomeStyler icon="ios-people" mainText='Plus de 1000 radioprotectionnistes convaincus' secondText={<p style={{color:Color.black, fontSize:28}} >Vous pouvez lire quelques avis : <a href={Synthèse_retour_utilisateurs_Dosimex} taget="_blank" >ici</a></p>} />
				</div>
				<div style={backgroundImage(BackGroundHague2)} >
					<HomeStyler icon="md-checkmark" mainText='Validé via MCNP, RayXpert, Microshield et Mercurad' secondText='text' />
				</div>
				<div style={backgroundImage(BackGroundHague2)} >
					<HomeStyler icon="md-time" mainText="Fruit de 30 années d'expérience" secondText='text' />
				</div>
				<div style={backgroundImage(BackGroundHague2)} >
					<HomeStyler icon="ios-bulb" mainText="User friendly et sans installation" secondText='text' />
				</div>
				<div style={{...backgroundImage(BackGroundHague2), overflow:'visible'}} >
					<HomeStyler icon="md-school" mainText="Formation Dosimex" secondText='text' style={{}} iconColor={Color.darkgrey} />
					<div style={{position:'relative', top:'-100vh', height:'100%', width:'100%', clipPath:'polygon(100% 60%, 100% 100%, 0 100%, 0 35%)', backgroundColor:Color.dark, overflow:'visible'}}/>
				</div>

				<div style={{...boxStyle, backgroundColor:Color.dark, width:'100vw', flexDirection:'row', alignItems:'center', justifyContent:'center'}} /* CTA */ >
					<div style={{height:'100vh', width:'50vw'}} >
						<HomeStyler icon="ios-cart" mainText="Achetez Dosimex dès maintenant" iconColor={Color.darkgrey} secondText={<a href='/acheter' style={{color:Color.white, fontSize:18, backgroundColor:Color.red, padding:12, borderRadius:20, alignItems:'center', justifyContent:'center', textShadow:'0px 0px'}} >Vers la boutique</a>} style={{backgroundColor:Color.dark}} />
					</div>
					<div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh', width:'50vw'}} >
						<iframe style={{width:'30vw', height:'30vh'}} src="https://www.youtube.com/embed/E5eWKTJaNxQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
					</div>
				</div>
				<this.footer/>
			</div>
		);
	}
}

let fin_text = "Les outils de calculs opérationnels vous permettent d’estimer à leurs justes hauteurs les risques radiologiques dans les scénarios d’exposition externe gamma, X, bêta , neutron et interne. Vous pouvez concevoir les protections nécessaires à mettre en place, réaliser des prévisionnels de dose, affiner vos démarches ALARA <a href='/offres/packOperationel' style='font-weight:bold' >(voir Pack opérationnel)</a>.\n\
Quelles que soient vos fonctions dans le domaine de la radioprotection, ces utilitaires vous donnent les moyens d'améliorer votre niveau d’expertise. Vous trouverez sur le site des <a href='/tutos' style='font-weight:bold'>vidéos</a> spécifiques à chaque code vous donnant un aperçu de leur simplicité d’emploi.\n\
La version 3.0 bénéficie de <a href="+Modif_DOSIMEX_GX_3+" target='_blank' style='font-weight:bold' >nombreuses améliorations</a> nées d'une collaboration active <a href="+Synthèse_retour_utilisateurs_Dosimex+" target='_blank' style='font-weight:bold' >avec les utilisateurs</a> ainsi que des dossiers de validation renforcés. A lui seul, Dosimex-GX est accompagné <a href='/about/Validation' style='font-weight:bold'>dossiers de validation</a> spécifiques <p style='font-style:italic; display:inline' >(radionucléides, générateurs X, NF C15-160)</p> comportant plus de 1000 valeurs de références obtenues avec les codes MCNP, RayXpert, Mercurad et Microshield.\n\
Nous proposons aussi des <a href='/Formation' style='font-weight:bold'>formations</a> sur site centrées sur l’analyse et l’estimation des risques radiologiques et s’appuyant sur des cas pratiques.\n\
En complément des aspects opérationnels, nous proposons des outils à vocation pédagogique. Leur objectif est de mieux comprendre la physique de l’interaction rayonnement-matière, à l’origine des doses générées par expositions aux rayonnements ionisants, ainsi que des capacités de protections des écrans susceptibles d’être mis en œuvre contre ces mêmes rayonnements <a href='/offres/packPedagogique' style='font-weight:bold'>(voir Pack pédagogique)</a>.\n\
Un troisième pack comprend des codes et utilitaires liés à l’aspect mesure de ces rayonnements ionisants : spectrométrie gamma, contaminamètres , seuil de décision, limite de détection <a href='/offres/packMesure' style='font-weight:bold'>(voir Pack mesures)</a>.\n\
<p style=\"textAlign:center;font-weight:bold\" ><a href=\"https://www.youtube.com/watch?v=vPalFZk5io0&feature=youtu.be\" target='_blank'>Vidéo présentation générale</a></p>"


const boxStyle = {height:'100vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'};
const poperStyle = {display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'};

function backgroundImage(url){
	return ({backgroundColor:Color.black, backgroundImage: `url(${url})`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize: "cover", height:'100vh', backgroundAttachment:'fixed'})
}