import React from 'react';

import { Row, Col, Accordion, Button, Card} from 'react-bootstrap'

import Color from '../Styles/colorSchemes.js'

import { Link } from "react-router-dom";

import TextSpliter from '../Components/TextSpliter.js'

import Image from '../Images/image_pc.jpg'

import packOpe from '../Images/packOpe.png'

import packMesure from '../Images/packMesure.png'

import packPeda from '../Images/packPeda.png'

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

	_renderLine = ({line, img, length}) => {
		return (
			<div style={{display:'flex', flexDirection:'column'}} >
				<TextSpliter textStyle={{textAlign:'justify', fontSize:'1.4vw', margin:5, marginLeft:15, marginRight:15, marginTop:'1vh'}} text={line} />
			</div>
		);
	}

	_renderPack = ({pack}) =>{
		return (
			<div style={{display:'flex', flexDirection:'column', flexGrow:1, flex:1, justifyContent:'center', alignItems:'center'}} >
				<div style={{display:'flex', justifyContent:'center', alignItems:'flex-end',}} >
					<p style={{fontSize:'1.4vw', fontWeight:'bold'}} >{pack.main}</p>
				</div>
				<div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'8vh'}} >
					<img style={{width:'30vw', marginLeft:'2vw'}} src={pack.img} alt="" />
					<div style={{display:'flex', flexDirection:'column', marginLeft:'4vw', marginRight:'4vw'}} >
						{pack.text.map((e, i) => <this._renderLine line={e} img={pack.img[i]} length={pack.text.length} key={i} />)}
					</div>
				</div>
			</div>
		);
	}

	render(){
		return (
			<Row style={{ height:'96vh', alignItems:'flex-end'}} >
				{this.isOpen() ?
					null
					:
					<Row style={{justifyContent:'center', alignItems:'center', width:'100vw'}} ><img style={{width:'50vw'}} src={Image}/></Row>
				}
				<Accordion defaultActiveKey={transform[this.props.pack]} >
					<Card style={{width:'101vw'}} >
						<Card.Header style={{backgroundColor:Color.lightishgrey, height:'8vh'}} >
							<Accordion.Toggle style={{width:'100%'}} as={Button} variant="link" eventKey="0" onClick={() => this._keepTrack('0')} >
								<p style={{fontSize:'3vh', color:Color.blue}} >{pack1.title}</p>
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="0">
							<Card.Body style={{ display:'flex', flex:1, backgroundColor:Color.lightergrey, height:'72vh'}} >
								<this._renderPack pack={pack1} />
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card color={Color.red} >
						<Card.Header style={{backgroundColor:Color.lightishgrey, height:'8vh'}} >
							<Accordion.Toggle style={{width:'100%'}} as={Button} variant="link" eventKey="1" onClick={() => this._keepTrack('1')}>
								<p style={{fontSize:'3vh'}} >{pack2.title}</p>
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="1">
							<Card.Body style={{display:'flex', flex:1, backgroundColor:Color.lightergrey, height:'72vh'}} >
								<this._renderPack pack={pack2} />
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Card.Header style={{backgroundColor:Color.lightishgrey, height:'8vh'}} >
							<Accordion.Toggle style={{width:'100%'}} as={Button} variant="link" eventKey="2" onClick={() => this._keepTrack('2')}>
								<p style={{fontSize:'3vh'}} >{pack3.title}</p>
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="2">
							<Card.Body style={{display:'flex', flex:1, backgroundColor:Color.lightergrey, height:'72vh'}} >
								<this._renderPack pack={pack3} />
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
		"<p style='display:inline;font-weight:bold;font-size:1.7vw' >DOSIMEX-GX 3.0</p> : code de calcul déterministe de débit de dose émetteurs <a href='https://www.youtube.com/watch?v=E5eWKTJaNxQ' target='_blank' >gamma</a> et <a href='https://www.youtube.com/watch?v=wkuVxTBXc8g' target='_blank' >générateur X</a>, avec option feuille de calcul <a href='https://www.youtube.com/watch?v=Ga4roi63sSM' target='_blank' >norme NF C15-160 /2018</a>. Avec de nombreuses <a href='https://www.youtube.com/watch?v=ksOJEbihuvA' target='_blank' >options</a> : effet de ciel, rayonnement de freinage, zonage, build-up",
		"<p style='display:inline;font-weight:bold;font-size:1.7vw' >DOSIMEX-B 3.0</p> : <a href='https://www.youtube.com/watch?v=4Cfya_rHa04' target='_blank'>code de calcul déterministe</a> de débit de dose émetteur bêta et électrons monoénergétiques. Prise en compte sources volumiques  (bécher, seringue) ou surfaciques (contamination peau)",
		"<p style='display:inline;font-weight:bold;font-size:1.7vw' >DOSIMEX-N 3.0</p> : <a href='https://www.youtube.com/watch?v=7emAJHES-fw' target='_blank'>code de calcul Monte-Carlo</a> de débit de dose émetteur neutron (type Am/Be) avec protection biologique (eau, polyéthylène, Bore, Cadmium etc..). Module pédagogique avec visualisation trajectoire neutron",
		"<p style='display:inline;font-weight:bold;font-size:1.7vw' >DOSIMEX-I 3.0</p> : <a href='https://www.youtube.com/watch?v=CnqQhyB6cEo4' target='_blank'>code de  calcul expositions interne</a>. Prise en compte cinétique fuite, renouvellement, dépôt au sol. Calculs de transfert atmosphérique. Calcul mélanges RAI/RAV/RCA",
		"<p style='display:inline;font-weight:bold;font-size:1.7vw' >DOSIMEX-MN 1.0</p> : <a href='https://www.youtube.com/watch?v=sj-FVjP87jA' target='_blank'>utilitaire de gestion de données</a> permettant de connaitre les doses absorbées par unité d’activité administrée  pour les radiopharmaceutiques CIPR 53, 80, 106 et 128"
	],
	img: packOpe,
	title:"Pack opérationnel",
	url:"/tutos/packOperationel",
	main:'Ces outils de calculs permettent d’estimer à leurs justes hauteurs les risques radiologiques et de concevoir les protections nécessaires'
}

const pack2 = {
	text:[
		"• <p style='display:inline;font-weight:bold;font-size:1.7vw' >IRM photon 3.0</p> : utilitaire mettant en œuvre les principes d’interactions photon –matières dans les matériaux avec diverses applications : calcul de kerma, de dose, de libre parcours moyen, effet Compton, visualisation de trajectoires (Monte-Carlo).",
		"• <p style='display:inline;font-weight:bold;font-size:1.7vw' >IRM particules chargées 3.0</p> : utilitaire mettant en œuvre les principes d’interactions particules chargées–matières dans les matériaux avec diverses applications : calcul de parcours, de coefficient fluence-dose, application aux spectres bêta.",
		"• <p style='display:inline;font-weight:bold;font-size:1.7vw' >Serious Game 3.0</p> : utilitaire à vocation pédagogique permettant de mettre en évidence les paramètres essentiels de la radioprotection : distance, temps, écran, activité, nature radionucléide",
		"• <p style='display:inline;font-weight:bold;font-size:1.7vw' >Coefficients  ICRU 57 3.0</p> : utilitaire permettant de connaitre les coefficients fluence-équivalents de dose et kerma air normalisés pour les électrons, les photons et les neutrons.",
	],
	img: packPeda,
	title:"Pack pédagogique",
	url:"/tutos/packPedagogique",
	main:'Ils permettent de mieux comprendre la physique de l’interaction rayonnement-matière, à l’origine des doses générées, ainsi que des capacités de protections des écrans susceptibles d’être mis en œuvre'
}

const pack3 = {
	text:[
		"• <p style='display:inline;font-weight:bold;font-size:1.7vw' >Code TAGE (Total Absorption Gamma Efficiency)</p> : code déterministe calculant le rendement d’absorption totale en spectrométrie gamma, avec correction de couches mortes (caractérisation), correction de coïncidence et rendement de pics sommes.",
		"• <p style='display:inline;font-weight:bold;font-size:1.7vw' >Code Co3</p> : code de calcul de Coefficient de Conversion Contaminamètres  permettant de calculer les rendements(Bq/cm2/ cps) de divers ictomètres et d’obtenir les activités surfaciques versus la nature de la sonde et le spectre isotopique mesuré.",
		"• <p style='display:inline;font-weight:bold;font-size:1.7vw' >Composition de variables aléatoires</p> : utilitaire permettant de combiner par méthode Monte-Carlo jusqu’à 5 variables de types différents . Cet utilitaire est accompagné des documents de cours complets sur le sujet des calculs d’incertitudes",
		"• <p style='display:inline;font-weight:bold;font-size:1.7vw' >Calcul de seuil de décision</p> : Utilitaire permettant de déterminer le seuil de décision et la limite de détection en mesure nucléaire. Cet utilitaire est accompagné des documents de cours.",
	],
	img: packMesure,
	title:"Pack mesures",
	url:"/tutos/packMesure",
	main:'Utilitaires liés à l’aspect mesure des rayonnements ionisants'
}