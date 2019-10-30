import React from 'react';

import { Row, Col, Accordion, Button, Card} from 'react-bootstrap'

import Color from '../Styles/colorSchemes.js'

import { Link } from "react-router-dom";

import TextSpliter from '../Components/TextSpliter.js'

import Retour from '../Folders/Synthèse_retour_utilisateurs_Dosimex.pdf'

import Image from '../Images/image_pc.jpg'

import dosigx from '../Images/intext/dosigx.png'
import dosib from '../Images/intext/dosib.png'
import dosin from '../Images/intext/dosin.png'
import dosii from '../Images/intext/dosii.png'
import dosimn from '../Images/intext/dosimn.png'

import irm_photon from '../Images/intext/irm_photon.png'
import irm_particules from '../Images/intext/irm_particules.png'
import serious_game from '../Images/intext/serious_game.png'
import coef_icru from '../Images/intext/coef_icru.png'

import tage from '../Images/intext/tage.png'
import co3 from '../Images/intext/co3.png'
import random from '../Images/intext/random.png'
import decision from '../Images/intext/decision.png'

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
			currOpen:typeof transform[this.props.pack]!=="undefined"?transform[this.props.pack]:null
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

	_renderLine = ({line, img}) => {
		return (
			<div style={{marginLeft:'4vw', paddingBottom:'2vh', borderBottom: '1px solid '+ Color.lightgrey, marginTop:'1vh', marginBottom:'3vh'}} >
				<div style={{justifyContent:'center', marginLeft:'5vw'}} >
					<img style={{margin:'auto', marginBottom:'0.75em', height:'6vh'}} src={img} alt="" />
				</div>
				<span style={{display:'block', float:'right', width:'70vw', marginLeft:'1vw', marginTop:'-5vh'}} > <p style={{textAlign:'justify'}} >{ReactHtmlParser(line)}</p> </span>
			</div>
		);
	}

	_renderPack = ({pack}) =>{
		return (
			<div>
				{pack.text.map((e, i) => <this._renderLine line={e} img={pack.img[i]} key={i} />)}
			</div>
		);
	}

	render(){
		return (
			<Row style={{ height:'95vh', alignItems:'flex-end'}} >
				{this.isOpen() ?
					null
					:
					<Row style={{justifyContent:'center', alignItems:'center', width:'100vw'}} ><img style={{width:'40vw'}} src={Image}/></Row>
				}
				<Accordion defaultActiveKey={transform[this.props.pack]} >
					<Card style={{width:'101vw'}} >
						<Card.Header style={{backgroundColor:Color.lightishgrey, height:'8vh'}} >
							<Accordion.Toggle style={{width:'100%'}} as={Button} variant="link" eventKey="0" onClick={() => this._keepTrack('0')} >
								<p style={{fontSize:30, color:Color.blue}} >{pack1.title}</p>
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="0">
							<Card.Body style={{backgroundColor:Color.lightergrey, height:'71vh'}} >
								<this._renderPack pack={pack1} />
								<Link style={{width:'100%'}} to={pack1.url}> <p style={{marginTop:75, textAlign:'center', fontSize:25, color:Color.red}} >voir les videos</p> </Link>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card color={Color.red} >
						<Card.Header style={{backgroundColor:Color.lightishgrey, height:'8vh'}} >
							<Accordion.Toggle style={{width:'100%'}} as={Button} variant="link" eventKey="1" onClick={() => this._keepTrack('1')}>
								<p style={{fontSize:30}} >{pack2.title}</p>
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="1">
							<Card.Body style={{backgroundColor:Color.lightergrey, height:'71vh'}} >
								<this._renderPack pack={pack2} />
								<Link style={{width:'100%'}} to={pack2.url}> <p style={{marginTop:75, textAlign:'center', fontSize:25, color:Color.red}} >voir les videos</p> </Link>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Card.Header style={{backgroundColor:Color.lightishgrey, height:'8vh'}} >
							<Accordion.Toggle style={{width:'100%'}} as={Button} variant="link" eventKey="2" onClick={() => this._keepTrack('2')}>
								<p style={{fontSize:30}} >{pack3.title}</p>
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="2">
							<Card.Body style={{backgroundColor:Color.lightergrey, height:'71vh'}} >
								<this._renderPack pack={pack3} />
								<Link style={{width:'100%'}} to={pack3.url}> <p style={{marginTop:75, textAlign:'center', fontSize:25, color:Color.red}} >voir les videos</p> </Link>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
			</Row>
		);
	}
}

const pack1 = {
	text:[
		"• DOSIMEX-GX 3.0 : code de calcul déterministe de débit de dose émetteurs gamma (sources volumiques, surfaciques…) et générateur X, avec option feuille de calcul norme NF C15-160 /2018. Effet de ciel, rayonnement de freinage….",
		"• DOSIMEX-B 3 : code de calcul déterministe de débit de dose émetteur bêta et électrons monoénergétiques. Prise en compte sources volumiques  (bécher, seringue) ou surfaciques (contamination peau)",
		"• DOSIMEX-N 3 : code de calcul de débit de dose Monte-Carlo  émetteur neutron (type Am/Be) avec protection biologique (eau, polyéthylène, Bore, Cadmium etc..). Module pédagogique avec visualisation trajectoire neutron",
		"• DOSIMEX-I 3.0 : code de  calcul de cinétique d’expositions dans un local suite à une contamination volumique (fuite continue, bouffée..). Calculs de transfert atmosphérique. Calcul mélanges RAI/RAV/RCA",
		"• DOSIMEX-MN 1.0 : utilitaire de gestion de données permettant de connaitre les doses absorbées par unité d’activité administrée  pour les radiopharmaceutiques recensés dans les CIPR 53, 80, 106 et 128"
	],
	img:[
		dosigx,
		dosib,
		dosin,
		dosii,
		dosimn
	],
	title:"Pack opérationnelle",
	url:"/tutos/packOperationel"
}

const pack2 = {
	text:[
		"• IRM photon 3.0: utilitaire mettant en œuvre les principes d’interactions photon –matières dans les matériaux avec diverses applications : calcul de kerma, de dose, de libre parcours moyen, effet Compton, visualisation de trajectoires (Monte-Carlo).",
		"• IRM particules chargées 3..0 : utilitaire mettant en œuvre les principes d’interactions particules chargées–matières dans les matériaux avec diverses applications : calcul de parcours, de coefficient fluence-kerma, application aux spectres bêta.",
		"• Serious Game 3.0 : utilitaire à vocation pédagogique permettant de mettre en évidence les paramètres essentiels de la radioprotection : distance, temps, écran, activité, nature radionucléide",
		"• Coefficients  ICRU 57 3.0 : utilitaire permettant de connaitre les coefficients fluence-équivalents de dose et kerma air normalisés pour les électrons, les photons et les neutrons.",
	],
	img:[
		irm_photon,
		irm_particules,
		serious_game,
		coef_icru,
	],
	title:"Pack pédagogique",
	url:"/tutos/packPedagogique"
}

const pack3 = {
	text:[
		"• Code TAGE (Total Absorption Gamma Efficiency) : code déterministe calculant le rendement d’absorption totale en spectrométrie gamma, avec correction de couches mortes (caractérisation), correction de coïncidence et rendement de pics sommes.",
		"• Code Co3 : code de calcul de Coefficient de Conversion Contaminamètres  permettant de calculer les rendements(Bq/cm2/ cps) de divers ictomètres et d’obtenir les activités surfaciques versus la nature de la sonde et le spectre isotopique mesuré.",
		"• Composition de variables aléatoires : utilitaire permettant de combiner par méthode Monte-Carlo jusqu’à 5 variables de types différents . Cet utilitaire est accompagné des documents de cours complets sur le sujet des calculs d’incertitudes",
		"• Calcul de seuil de décision. Utilitaire permettant de déterminer le seuil de décision et la limite de détection en mesure nucléaire. Cet utilitaire est accompagné des documents de cours complets sur ce sujet et d’articles divers.",
	],
	img:[
		tage,
		co3,
		random,
		decision,
	],
	title:"pack mesure",
	url:"/tutos/packMesure"
}