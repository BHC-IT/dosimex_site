import React from 'react';

import Color from '../Styles/colorSchemes.js'
import Size from '../Styles/Size.js'
import Gerald from '../Images/Gerald.png'
import Alain from '../Images/Alain.png'

import {
	BrowserView,
	MobileView,
} from "react-device-detect";

import TextSpliter from '../Components/TextSpliter.js'

const team = [
{
	name:"Alain Vivier",
	text:`Après des études à l’Ecole de l’Air (promotion 80) et avoir été affecté à une unité de maintenance de Mirages IV, j’ai été désigné pour être PCR dans le cadre de radiographies sur les voilures. En dehors du générateur X, Je ne disposais alors ni du moindre radiamètre ni d’outils de calculs, n’ayant ainsi aucune idée du risque radiologique encouru. Cette expérience a sans doute semé une première petite graine pour la suite.\n
		En 1990, j’ai rejoint l’Ecole Atomique de Cherbourg pour y passer un génie atomique. J’ai eu la chance de pouvoir y rester en tant qu’enseignant. \n
		Responsable de l’enseignement de la physique nucléaire et d’un laboratoire de mesures, je commençai à comprendre les phénomènes d’interaction rayonnement-matière et j'ai réalisé qu’il devait être possible de calculer, et non pas seulement mesurer, un débit de dose d’une source de 1 GBq de Césium 137 posée à 1 m. Mon adjoint, TSR de formation, m’a répondu : « oui, c’est possible, cela s’appelle la dosimétrie ». J'ai compris, au travers de cette anecdote, que cette matière n’était pas suffisamment dispensée dans les formations.\n
		Ma première expérience de modélisation concernait le calcul du pouvoir d’arrêt des particules chargées, à l’aide de la formule de Bethe (voir annexe E). J’ai alors été frappé par l’adéquation entre la prédiction théorique et les résultats des mesures avec des électrons de conversion et des cibles minces en cuivre. Cette validation croisée entre modélisation et mesure, l’une renforçant l’autre, a été une révélation.\n
		En 1998, j’ai rejoint le CEA, tout d’abord au SPR de Cadarache à l’AtPu (Atelier plutonium), puis en 2000, à l’INSTN de Saclay. La première formation que j’y ai créée s’intitulait « dosimétrie des rayonnements ionisants ». \n
		A l'occasion de visites à l'Ecole Atomique, j'ai rencontré Gérald Lopez. J'ai rapidement décelé ses compétences en modélisation, sa capacité d'analyse associée à une puissance de travail hors-norme. Il avait, déjà, à cette époque, jeté les bases de ce qui allait devenir Dosimex-GX.\n
		En 2010, lorsque EDP a accepté d’éditer un ouvrage sur les calculs de doses, il m’est apparu clairement qu’un tel ouvrage devait être accompagné d’utilitaires de calculs, et surtout que Gérald Lopez était indispensable à la réalisation de ce projet. C’est ainsi qu’est né Dosimex.\n
		<p style="fontStyle:italic; display:inline" >Epilogue : c’est grâce à Dosimex, que j’ai enfin pu avoir, 25 ans après, une idée du risque radiologique encouru avec les générateur X, risque qui est loin d’être négligeable</p>`,
	img:Alain,
	title:"title here"
},
{
	name:"Gérald Lopez",
	text:`J’ai commencé ma carrière, en 1997, dans la Marine Nationale en tant qu’électrotechnicien sur systèmes d’armement. Après une formation de technicien en radioprotection (TR), j’ai intégré le SPR de l’Ile Longue, avec diverses missions centrées sur les sous-marins nucléaires Lanceur d’engins (SNLE) : assistance radiologique, cartographies du compartiment réacteur, analyses radiologiques au laboratoire de moyenne activité, exercices de sécurité nucléaires…\n
		En 2003, après une formation de technicien supérieur en radioprotection (TSR) à l’INSTN, j’ai rejoint l’Ecole des Applications Militaire à l’Energie Atomique (EAMEA) où j’ai enseigné la radioactivité, la radioprotection, la dosimétrie, la mesure nucléaire. A partir de cette époque, pour palier le manque flagrant d'outils, j’ai commencé à créer mes propres outils de calcul afin de réaliser simplement et rapidement des travaux dirigés dans le cadre de mes enseignements.\n
		En 2010, J’ai intégré le SPR de l’Arsenal de Cherbourg en charge du 2SNM (Système de Surveillance Nucléaire Marine), système relié au Réseau Nationale de Mesure (RNM). Cette expérience m’a, entre autres, permis, de créer le code Dosimex-I, notamment sur l’option de transfert atmosphérique.\n
		Depuis 2013, après avoir publié en collaboration avec Alain Vivier, l'ouvrage « Calcul de dose générée par les rayonnements ionisants, j’ai rejoint le service de radioprotection du site <a href='/'>Orano</a> de la Hague où j'ai été confronté à la plupart des problématiques de radioprotection du site : \n
		• 2013-2015 : suivi des chantiers de démantèlement de l’unité de production UP2-400 sur le secteur Haute activité. Suivi spécifique du chantier de démantèlement d’un dissolveur de combustible type UNGG. \n
		• 2015-2017 : conseiller démantèlement sur les périmètres ELAN2B et STE2 (Station de traitement des Effluents), analyse des démarches.\n
		• 2017-2018 : responsable de l’échelon radioprotection du périmètre Haute Activité de l’usine UP2-400. \n
		• 2018-2019 : responsable d’activité de l’Unité Opérationnelle Conditionnement :  ateliers de vitrification (R7/T7), de traitement des déchets (AD2 et AD1/BDH) de compactage des coques (ACC) des usines UP2-800 et UP3 du site de la Hague. \n
		• Courant 2019 enfin, j’ai pris la responsabilité du pôle expertise en charge, avec une équipe, du soutien technique et de l’innovation pour l’ensemble des activités du secteur dans les domaines de la radioprotection et de la sécurité conventionnelle. Parallèlement, j’ai acquis une expérience solide sur les problématiques de risques mixtes amiante et radiologique. \n
		Dans la plupart des problèmes de radioprotection que j’ai eu à rencontrer, les outils du pack Dosimex ont été d’une grande utilité pour analyser le risque radiologique. A l'inverse, le retour d’expérience m’a permis d’enrichir ces codes.`,
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
			<div>
				<BrowserView>
					<div style={{display:'flex', flexDirection:'column', marginTop:'4vh', marginBottom:'5vh', height:'95vh', backgroundColor:Color.lightergrey}} >
						<div style={{ justifyContent:'center', alignItems:'center'}} >
						</div>
						<div style={{display:'flex', flexGrow:1}}>
							<div style={{marginTop:5}} >
								<img style={{width:'20vw'}} src={user.img} alt='team member' />
								<p style={{textAlign: 'center', fontWeight:'bold', fontSize:Size.greaterMd() ? 30 : 10}} >{user.name}</p>
							</div>
							<div style={{marginTop:5, justifyContent:'center', alignItems:'center', marginLeft:'3vw', marginRight:'3vw'}} >
								<TextSpliter textStyle={{textAlign: 'justify', fontSize:Size.greaterMd() ? '1.9vh' : 7}} text={user.text} />
							</div>
						</div>
					</div>
				</BrowserView>
				<MobileView>
					<div style={{display:'flex', flexDirection:'column', paddingTop:'4vh', paddingBottom:'5vh', backgroundColor:Color.lightergrey}} >
						<div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >
							<img style={{width:'20vw'}} src={user.img} alt='team member' />
							<p style={{textAlign: 'center', fontWeight:'bold', fontSize:Size.greaterMd() ? 30 : 10}} >{user.name}</p>
						</div>
						<div style={{display:'flex', flexGrow:1}}>
							<div style={{marginTop:5, justifyContent:'center', alignItems:'center', marginLeft:'3vw', marginRight:'3vw'}} >
								<TextSpliter textStyle={{textAlign: 'justify', fontSize:Size.greaterMd() ? '1.9vh' : '1.5vh'}} text={user.text} />
							</div>
						</div>
					</div>
				</MobileView>
			</div>
		);
	}

	render(){
		return (
			<div style={{width:'100%', marginTop:15, backgroundColor:Color.lightergrey}} >
				<this._user user={team[1]} />
				<this._user user={team[0]} />
			</div>
		);
	}

}