import React from 'react';
import ReactPageScroller from "react-page-scroller";
import '../Styles/Landing.css'
import {Carousel, Container, Row, Col, Accordion, Button, Card} from 'react-bootstrap'

import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import Color from '../Styles/colorSchemes.js'
import Size from '../Styles/Size.js'
import Gerald from '../Images/Gerald.png'
import Alain from '../Images/Alain.png'

import TextSpliter from '../Components/TextSpliter.js'

const team = [
{
	name:"alain",
	text:"Après mes études à l’Ecole de l’Air (promo 80), j’ai rejoint une unité de maintenance de Mirages IV à Bordeaux-Mérignac. Dernier arrivé dans le grade le moins élevé, j’avais été désigné pour être PCR dans le cadre de radiographies sur des voilures de Mirages III B. Pour remplir cette mission, je ne disposais alors, en dehors du générateur X, ni du moindre radiamètre ni d’outils de calculs, n’ayant ainsi aucune idée du risque radiologique encouru. . Cette expérience a sans doute semé une première petite graine pour la suite.\n\
Après 5 ans au plateau d’Albion sur le système SSBS (missiles nucléaires balistiques stratégiques, fermé depuis…) j’ai rejoint en 1990 l’Ecole Atomique de Cherbourg pour y  passer un génie atomique. A l’issue de cette année d’études où j’ai réellement rencontré la Physique, notamment au travers de la physique statistique, j’ai eu la chance d’y rester en tant qu’enseignant, métier qui a été pour moi une révélation :  il exige en effet une compréhension réelle minimale des matières enseignés tout autant que le plaisir de transmettre cette compréhension, tout au moins d’essayer de transmettre, ce qui est une autre histoire.\n\
Responsable de l’enseignement de la physique nucléaire et d’un  laboratoire de mesures durant 8 ans, . c’est à cette époque qu’une anecdote m’a marqué : alors que je comprenais de mieux en mieux (mais j’avais encore un long chemin à parcourir) les phénomènes d’interaction rayonnement-matière, j’avais réalisé qu’il devait être possible de calculer, et non pas seulement mesurer, un débit de dose d’une source de 1 GBq de Césium 137 posée à 1 m. Ce à quoi mon adjoint, responsable du laboratoire (il se reconnaitra)  et TSR de formation m’a répondu : « oui, c’est possible, ça s’appelle la dosimétrie et c’est enseigné à Cadarache par Alain Faussot ». Cette anecdote m’a fait comprendre que cette matière n’était pas suffisamment dispensée dans les enseignements autour du nucléaire.\n\
Ma première expérience de modélisation, fort modeste,  concernait le calcul du pouvoir d’arrêt des particules chargées, à l’aide de la formule de Bethe (voir annexe E), formule remarquable s’il en est. Confrontant  alors le résultat de l’application de cette formule à la mesure de l’énergie perdue par des électrons dans des sources minces, j’avais été frappé par l’adéquation entre la prédiction théorique et les résultats des mesures (sur les électrons de conversion du Cs 137 avec des cibles minces en cuivre). Cette validation croisée entre modélisation et mesure, l’une renforçant l’autre et réciproquement, a été une révélation.\n\
Evitant de justesse  une mutation non souhaitée, j’ai rejoint le CEA en 1998, tout d’abord au SPR de Cadarache, en tant que chef de groupe détaché aux AtPu (Atelier plutonium, Cogema), puis ensuite à l’INSTN de Saclay pour reprendre mon métier d’enseignant. La première formation que j’y ai crée, et qui existe toujours, s’intitulait « dosimétrie des rayonnements ionisants ».\n\
Retournant parfois à l’Ecole Atomique, c’est à cette époque que j’y ai incidemment rencontré Gérald Lopez. Les anciens m’avaient dit : « va voir le grand brun, là bas, il est comme toi, il adore les calculs ». j’ai rapidement compris les qualités remarquables de Gérald en ce domaine, associé à des capacités d’analyse et une puissance de travail hors-norme.\n\
C’est ainsi que lorsque EDP (Editions pour la Physique), dans le cadres des collections centrées sur la radioprotection, a accepté en 2010 d’éditer un ouvrage sur les calculs de doses, il m’est apparu clairement qu’un tel ouvrage devait être accompagnés d’utilitaires de calculs (comprendre la physique sous-jacente est une chose, demander aux gens de faire eux-mêmes les calculs « à la main » en est une autre). Et surtout il m’est apparu tout aussi clairement que Gérald était indispensable à la réalisation de ce projet, que fort heureusement il a accepté. C’est ainsi qu’est né Dosimex.\n\
Epilogue : c’est enfin, grâce à Dosimex, que j’ai enfin pu avoir, 25 ans après une idée du risque radiologique encouru avec les générateur X, et qui est loin d’être négligeable\n",
	img:Alain,
	title:"title here"
},
{
	name:"Gerald Lopez",
	text:"J’ai commencé ma carrière en 1997 dans la  Marine Nationale à bord de bâtiments de surface, en tant qu’électrotechnicien sur  systèmes d’armement. Après une formation de technicien en radioprotection (TR),  j’ai intégré le Service de Protection Radiologique de l’Ile Longue, avec diverses missions centrées sur les sous-marins nucléaires Lanceur d’engins (SNLE) : assistance radiologique lors d’intervention spécifique à bord, cartographies du compartiment réacteur, analyses radiologique au laboratoire de moyenne activité du site, exercices de sécurité nucléaires…\n\
		Après une formation de technicien supérieur en radioprotection (TSR) à l’INSTN de Cadarache j’ai rejoint en 2003 l’Ecole des Applications Militaire à l’Energie Atomique (EAMEA) où j’ai enseigné dans divers domaines : radioactivité, interaction rayonnement matière, protection contre l’exposition externe et interne, dosimétrie, détection et mesure nucléaire. J’ai été certifié formateur  PCR dans le domaine INB/ICPE. C’est à partir de cette époque que j’ai commencé à créer des outils de calcul pour pallier le manque flagrant d’outils permettant de réaliser simplement et rapidement des travaux dirigés dans le cadre des ces divers enseignements.\n\
		Après 7 années à l’Ecole Atomique,  j’ai intégré le SPR de l’Arsenal de Cherbourg en charge du 2SNM (Système de Surveillance Nucléaire Marine), système relié au  Réseau Nationale de Mesure (RNM). Couplé à un logiciel d’aide à la décision, le 2SNM sert à la détermination des impacts radiologique et à la préparation des scénarii d’exercice nucléaire. Cette expérience m’a entre autre permis de créer le code Dosimex-I, notamment sur l’option de transfert atmosphérique.\n\
		En 2013, à la suite de la parution de l’ouvrage « Calcul de dose générée par les rayonnements ionisants » couplé à la première version du pack Dosimex,  j’ai rejoint le service de radioprotection du site Orano de la Hague. Au sein de ce service j’ai été confronté à la plupart des problématiques de radioprotection du site : \n\
		• 2013-2015 : suivi des chantiers de démantèlement de l’unité de production UP2-400 sur le secteur Haute activité. Suivi spécifique du chantier de démantèlement d’un dissolveur de combustible type UNGG. Introduction pour cartographie des zones rouges du secteur Haute Activité Dissolution Extraction .\n\
		• 2015-2017 : conseiller, en tant que responsable d’échelon radioprotection, auprès des équipes en charge d’établir les scénarii de démantèlement sur les périmètres ELAN2B et STE2 (Station de traitement des Effluents), analyse présentation et validation des démarches ALARA des scénarii de démantèlement.\n\
		• 2017-2018 : responsable de l’échelon radioprotection du périmètre Haute Activité de l’usine UP2-400 en charge du suivi des opérations de démantèlement des ateliers Haute Activité Dissolution Extraction (HADE), Haute Activité Oxyde (HAO) et ELAN2B. \n\
		• 2018-2019 : responsable d’activité SPR de l’Unité Opérationnelle Conditionnement :  ateliers de vitrification (R7/T7), de traitement des déchets (AD2 et AD1/BDH) de compactage des coques (ACC) des usines UP2-800 et UP3 du site de la Hague. \n\
		• Courant 2019 enfin, j’ai pris la  responsabilité du pôle expertise en charge, avec une équipe de 15 personnes,  du soutien technique et de l’innovation pour l’ensemble des activités du secteur dans les domaines de la radioprotection et de la sécurité conventionnelle. Parallèlement à mes activités de radioprotectionniste, j’ai acquis une expérience solide sur les problématiques de risques mixtes amiante et radiologique.",
	img:Gerald,
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
			<div style={{marginTop:10, marginBottom:'5vh'}} >
					<div style={{justifyContent:'center', justifyContent:'center', alignItems:'center'}} >
						<p style={{textAlign: 'center', fontWeight:'bold', fontSize:Size.greaterMd() ? 30 : 10}} >{user.name}</p>
					</div>
					<div style={{marginTop:5, justifyContent:'center', alignItems:'center', marginLeft:'40vw'}} >
						<img style={{width:'20vw'}} src={user.img}/>
					</div>
					<div style={{justifyContent:'center', marginTop:5, justifyContent:'center', alignItems:'center', marginLeft:'3vw', marginRight:'3vw'}} >
						<TextSpliter textStyle={{textAlign: 'justify', fontSize:Size.greaterMd() ? 20 : 7}} text={user.text} />
					</div>
			</div>
		);
	}

	render(){
		return (
			<div style={{width:'100%', marginTop:15, backgroundColor:Color.ligthgrey}} >
				<this._user user={team[0]} />
				<this._user user={team[1]} />
			</div>
		);
	}

}