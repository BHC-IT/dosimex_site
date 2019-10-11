import React from 'react';

import { Row, Col, Accordion, Button, Card} from 'react-bootstrap'

import Color from '../Styles/colorSchemes.js'

import { Link } from "react-router-dom";

import TextSpliter from '../Components/TextSpliter.js'

import Retour from '../Folders/Synthèse_retour_utilisateurs_Dosimex.pdf'

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

	render(){
		return (
			<Row style={{ height:'95vh', alignItems:'flex-end'}} >
				{this.isOpen() ?
					null
					:
					<p style={{textAlign:'center', width:'100vw'}} >on peut mettre du text ici</p>
				}
				<Accordion defaultActiveKey={transform[this.props.pack]} >
					<Card style={{width:'101vw'}} >
						<Card.Header style={{backgroundColor:Color.lightishgrey, height:'8vh'}} >
							<Accordion.Toggle style={{width:'100%'}} as={Button} variant="link" eventKey="0" onClick={() => this._keepTrack(0)} >
								<p style={{fontSize:30}} >{pack1.title}</p>
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="0">
							<Card.Body style={{backgroundColor:Color.lightergrey, height:'71vh'}} >
								<TextSpliter text={pack1.text} textStyle={{textAlign: 'justify', fontSize:25}}/>
								<Link style={{width:'100%'}} to={pack1.url}> <p style={{marginTop:75, textAlign:'center', fontSize:25, color:Color.red}} >voir les videos</p> </Link>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card color={Color.red} >
						<Card.Header style={{backgroundColor:Color.lightishgrey, height:'8vh'}} >
							<Accordion.Toggle style={{width:'100%'}} as={Button} variant="link" eventKey="1" onClick={() => this._keepTrack(1)}>
								<p style={{fontSize:30}} >{pack2.title}</p>
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="1">
							<Card.Body style={{backgroundColor:Color.lightergrey, height:'71vh'}} >
								<TextSpliter text={pack2.text} textStyle={{textAlign: 'justify', fontSize:25}}/>
								<Link style={{width:'100%'}} to={pack2.url}> <p style={{marginTop:75, textAlign:'center', fontSize:25, color:Color.red}} >voir les videos</p> </Link>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Card.Header style={{backgroundColor:Color.lightishgrey, height:'8vh'}} >
							<Accordion.Toggle style={{width:'100%'}} as={Button} variant="link" eventKey="2" onClick={() => this._keepTrack(2)}>
								<p style={{fontSize:30}} >{pack3.title}</p>
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="2">
							<Card.Body style={{backgroundColor:Color.lightergrey, height:'71vh'}} >
								<TextSpliter text={pack3.text} textStyle={{textAlign: 'justify', fontSize:25}}/>
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
	text:"\n\
		• Dosimex-GX : Exposition externe  gamma, générateurs X, NF C-15_160 (2018)\n\
		• Dosimex-B : Exposition externe Bêtas\n\
		• Dosimex-N : Exposition externe neutrons\n\
		• Dosimex-I : Exposition interne, contamination volumiques, transfert atmosphérique\n\
		• Dosimex-MN : Dose patient en médecine nucléaire (radiopharmaceutiques)\n\
		Ces vous permettront d’estimer les risques radiologiques à leurs justes hauteurs et de concevoir les protections nécessaires, de réaliser des prédictifs de dose, d’affiner vos démarches ALARA …. Quelles que soient vos fonctions dans le domaine de la radioprotection, ces codes vous permettront d’augmenter votre niveau d’expertise.\n\
		Grâce à une collaboration active avec les utilisateurs de DOSIMEX 2.O (voir <a href=\"" + Retour + "\" target=\"_blank\">Retours utilisateurs</a>) , Le pack DOSIMEX 3.0 bénéficie de nombreuses améliorations : Voir ici les modifications apportés à la version 3.0 de Dosimex-GX\n\
		et des dossiers de validations renforcées. Dosimex-GX est accompagné à lui seul de 3 dossiers de validations  (comportant plus de 1000 valeurs de références (MCNP, RayXpert, Mercurad... )",
	title:"Pack opérationel",
	url:"/tutos/packOperationel"
}

const pack2 = {
	text:"En complément des outils à vocation opérationnelle, nous  proposons des outils à vocation pédagogique :\n\
		• Interaction photon-matière\n\
		• Interaction particules chargées-matière\n\
		• Coefficient fluence /équivalent de dose (ICRU 57)\n\
		• Serious Game (dose gamma, écran, zonage)…\n\
		Leur objectif est de mieux comprendre la physique de l’interaction rayonnement-matière, à l’origine des doses générées par expositions aux rayonnements ionisants et des capacités de protections des écrans susceptibles d’être mis en œuvre contre ces même rayonnements.\
		Ils vous permettront de :\n\
		• mieux comprendre la physique sous-jacente aux aspects de dose, de protection et de détection,\n\
		• développer un sens physique permettant d’analyser plus sûrement les problématiques dans une situation donnée.",
	title:"Pack pédagogique",
	url:"/tutos/packPedagogique"
}

const pack3 = {
	text:"SOMMAIRE DOSIMEX MESURE\n\
		✓ Code TAGE (Total Absorption Gamma Efficiency) : code déterministe calculant le\
		rendement d’absorption totale en spectrométrie gamma, avec correction de couches\
		mortes (caractérisation), correction de coïncidence et rendement de pics sommes.\n\
		✓ Code Co 3 : code de calcul de Coefficient de Conversion Contaminamètres permettant\
		de calculer les rendements(Bq/cm2/ cps) de divers ictomètres et d’obtenir les\
		activités surfaciques versus la nature de la sonde et le spectre isotopique mesuré.\n\
		✓ Composition de variables aléatoires : utilitaire permettant de combiner par méthode\
		Monte-Carlo jusqu’à 5 variables de types différents . Cet utilitaire est accompagné des\
		documents de cours complets sur le sujet des calculs d’incertitudes\n\
		✓ Calcul de seuil de décision. Utilitaire permettant de déterminer le seuil de décision et\
		la limite de détection en mesure nucléaire. Cet utilitaire est accompagné des\
		documents de cours complets sur ce sujet et d’articles divers.",
	title:"pack mesure",
	url:"/tutos/packMesure"
}