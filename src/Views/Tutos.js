import React from 'react';

import { Row, Col, Accordion, Button, Card} from 'react-bootstrap'

import Color from '../Styles/colorSchemes.js'

import TextSpliter from '../Components/TextSpliter.js'

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
								<Row style={{justifyContent:'space-between', margin:25}}>
									<iframe width="250" height="200" src="https://www.youtube.com/embed/c85KaDSMIRM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
									<iframe width="250" height="200" src="https://www.youtube.com/embed/c85KaDSMIRM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
									<iframe width="250" height="200" src="https://www.youtube.com/embed/c85KaDSMIRM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
									<iframe width="250" height="200" src="https://www.youtube.com/embed/c85KaDSMIRM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
									<iframe width="250" height="200" src="https://www.youtube.com/embed/c85KaDSMIRM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
								</Row>
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
							</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
			</Row>
		);
	}

}

const videoStyle = {
	position: 'fixed',
	right: 0,
	bottom: 0,
	minWidth: '100%',
	minHeight: '100%',
	width: 'auto',
	height: 'auto',
	zIndex: -100,
}

const pack1 = {
	text:"	SOMMAIRE DOSIMEX OPERATIONNEL\n\
		✓ DOSIMEX-GX 3.0 : code de calcul déterministe de débit de dose émetteurs gamma\
		(sources volumiques, surfaciques...) et générateur X, avec option feuille de calcul\
		norme NF C15-160 /2018. Effet de ciel, rayonnement de freinage....\n\
		✓ DOSIMEX-B 3 : code de calcul déterministe de débit de dose émetteur bêta et\
		électrons monoénergétiques . Prise en compte sources volumiques (bécher,\
		seringue) ou surfaciques (contamination peau)\n\
		✓ DOSIMEX-N 3 : code de calcul de débit de dose Monte-Carlo émetteur neutron\
		(type Am/Be) avec protection biologique (eau, polyéthylène, Bore, Cadmium etc..).\
		Module pédagogique avec visualisation trajectoire neutron\n\
		✓ DOSIMEX-I 3.0 : code de calcul de cinétique d’expositions dans un local suite à une\
		contamination volumique (fuite continue, bouffée..). Calculs de transfert\
		atmosphérique. Calcul mélanges RAI/RAV/RCA\n\
		✓ DOSIMEX-MN 1.0 utilitaire de gestion de données permettant de connaitre les doses\
		absorbées par unité d’activité administrée pour les radiopharmaceutiques recensés dans les\
		CIPR 53, 80, 106 et 128",
	title:"Video pack opérationel",
}

const pack2 = {
	text:"SOMMAIRE DOSIMEX PEDAGOGIQUE\n\
		✓ IRM photon 3.0: utilitaire mettant en œuvre les principes d’interactions\
		photon –matières dans les matériaux avec diverses applications : calcul de\
		kerma, de dose, de libre parcours moyen, effet Compton, visualisation de\
		trajectoires (Monte-Carlo).\n\
		✓ IRM particules chargées 3..0 : utilitaire mettant en œuvre les principes\
		d’interactions particules chargées–matières dans les matériaux avec diverses\
		applications : calcul de parcours, de coefficient fluence-kerma, application aux\
		spectres bêta.\n\
		✓ Serious Game 3.0 : utilitaire à vocation pédagogique permettant de mettre en\
		évidence les paramètres essentiels de la radioprotection : distance, temps,\
		écran, activité, nature radionucléide\n\
		✓ Coefficients ICRU 57 3.0 : utilitaire permettant de connaitre les coefficients\
		fluence-équivalents de dose et kerma air normalisés pour les électrons, les\
		photons et les neutrons.",
	title:"Video pack pédagogique",
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
	title:"Video pack mesure",
}