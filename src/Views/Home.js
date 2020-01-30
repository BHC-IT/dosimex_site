import React from 'react';

import '../Styles/Landing.css'

import HomeStyler from '../Components/HomeStyler.js'

import '../Styles/Font.css';

import Color from '../Styles/colorSchemes.js'

import VizSensor from 'react-visibility-sensor';

import BackGroundHague2 from "../Images/BackGroundHague2_compressed.png"

import LogoDosi2 from "../Images/logo_dosi.png"
import bhcLightNoText from '../Images/test6_name_customcolor_backless_v2_light.png'

import {
	BrowserView,
	MobileView,
} from "react-device-detect";

import Synthèse_retour_utilisateurs_Dosimex from '../Folders/extrait_retour_utilisateurs.pdf'
// import Modif_DOSIMEX_GX_3 from '../Folders/Modif_DOSIMEX_GX_3.0.pdf'
import Information_légales from '../Folders/Informations_légales.pdf'
import extrait_validation_gamma from '../Folders/extrait_validation_gamma.pdf'
import extrait_validation_géné_X from '../Folders/extrait_validation_géné_X.pdf'

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
			loading:true,
			bandeau:false,
			bottom:false,
			footer:false
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

	componentWillUnmount(){
		window.removeEventListener('resize', this.updateWindowDimensions);
		window.onscroll = () => {};
	}

	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	renderSlogan(){
		return <p style={{textAlign: 'justify', color:Color.blue, fontWeight:'bold', fontStyle: 'italic', fontSize:'3vh'}} >Depuis 2012, nous vous proposons un ensemble d'outils de calculs pratiques, simples d’emploi, validés, et qui permettent de répondre à de nombreuses situations rencontrées en radioprotection.</p>
	}

	footer = () => {
		return (
			<VizSensor onChange={(isVisible) => this.setState({footer:isVisible})} >
				<div>
					<BrowserView>
						<div style={{display:'flex', backgroundColor:'#242424', justifyContent:'space-between', alignItems:'center', justifySelf:'flex-end', paddingTop:'1vh', paddingBottom:'1vh' /* height === 9vh */}} >
							<div style={{marginLeft:'2vw', justifyContent:'center'}} >
								<p style={{color: Color.white, fontSize:'2vh'}} >Email : <a href='mailto:contact@dosimex.fr'> contact@dosimex.fr</a></p>
								<p style={{color: Color.white, fontSize:'2vh'}} >Téléphone : 06 89 70 90 35</p>
								<a href={Information_légales} target="_blank" rel='noopener noreferrer' ><p style={{color: Color.white, fontSize:'2vh'}} >Information légale</p></a>
							</div>
							<img src={LogoDosi2} style={{height:'7vh'}} alt='logo dosimex' />
							<a href='https://bhc-it.com' >
								<a href='https://bhc-it.com' style={{color:Color.white, display:'flex', alignItems:'center', marginRight:'1vw', fontSize:'2vh'}} >Designed by <p style={{display:'flex', color:Color.bhcPurpleTypo, alignItems:'center', marginLeft:'1vw'}} ><img src={bhcLightNoText} style={{height:'5vh'}} alt='logo bhc' /></p></a>
							</a>
						</div>
					</BrowserView>
					<MobileView>
						<div style={{display:'flex', backgroundColor:'#242424', justifyContent:'space-between', alignItems:'center', justifySelf:'flex-end', paddingTop:'1vh', paddingBottom:'1vh' /* height === 9vh */}} >
							<div style={{marginLeft:'2vw', justifyContent:'center'}} >
								<p style={{color: Color.white, fontSize:'2vw'}} >Email : <a href='mailto:contact@dosimex.fr'> contact@dosimex.fr</a></p>
								<p style={{color: Color.white, fontSize:'2vw'}} >Téléphone : 06 89 70 90 35</p>
								<a href={Information_légales} target="_blank" rel='noopener noreferrer' ><p style={{color: Color.white, fontSize:'2vw'}} >Information légale</p></a>
							</div>
							<img src={LogoDosi2} style={{height:'7vh'}} alt='logo dosimex' />
							<a href='https://bhc-it.com' >
								<a href='https://bhc-it.com' style={{color:Color.white, display:'flex', alignItems:'center', marginRight:'1vw', fontSize:'2vw'}} >Designed by <p style={{display:'flex', color:Color.bhcPurpleTypo, alignItems:'center', marginLeft:'1vw'}} ><img src={bhcLightNoText} style={{height:'5vh'}} alt='logo bhc' /></p></a>
							</a>
						</div>
					</MobileView>
				</div>
			</VizSensor>
		);
	}

	render(){
		let popTextStyle = {display:'inline', backgroundColor:Color.darkred};
		if (this.state.loading){
			return (
				null
			);
		}

		return (
			<div style={{}} >
				<div style={{...backgroundImage(BackGroundHague2), ...boxStyle}} >
					<BrowserView style={{ height:'100%', width:'100%'}} >
						<div style={{backgroundColor:'rgba(0,0,0,0.2)', height:'100%', width:'100%'}} >
							<div style={{display:'flex', flexDirection:'column', flex:1, justifyContent:'center', alignItems:'center'}} >
								<h1 style={{color:Color.white, fontSize:'7vw', marginTop:'5vh', fontFamily:'CODEBold', textShadow:'1.5px 1.5px #000000'}}  >DOSIMEX</h1>
							</div>
							<div style={{display:'flex', marginTop:'15vh', height:'35vh', 'flexDirection':'row', width:'100vw', justifyContent:'center', alignItems:'center'}} >
								<p style={{width:'80vw', textAlign: 'justify', color:Color.white, fontWeight:'bold', fontSize:'2vw',  textShadow:'1.5px 1.5px #000000'}} >Depuis <p style={popTextStyle} >2012</p>, nous vous proposons un ensemble d'outils de calculs pratiques, <p style={popTextStyle} >simples</p> d’emploi, <p style={popTextStyle} >validés</p>, et répondant à de nombreuses situations rencontrées en <p style={popTextStyle} >radioprotection</p>. Ils vous permettront d'améliorer votre niveau d'<p style={popTextStyle} >expertise</p>.</p>
							</div>
							{/*<this.scroller/>*/}
							<div onClick={() => this.setState({bandeau:!this.state.bandeau})} style={{position:'absolute', bottom:'6vh', zIndex:10}} >
								{this.state.bottom === false && this.state.footer === false ?
									<p style={{color:Color.lightergrey, fontSize:'1.3vw', right:'4vw', fontStyle:'italic', position:'fixed'}} >Cap de la Hague - Site ORANO</p>
									:
									null
								}
							</div>
						</div>
					</BrowserView>
					<MobileView style={{ height:'100%', width:'100%'}} >
						<div style={{backgroundColor:'rgba(0,0,0,0.2)', height:'100%', width:'100%'}} >
							<div style={{display:'flex', flexDirection:'column', flex:1, justifyContent:'center', alignItems:'center'}} >
								<h1 style={{color:Color.white, fontSize:'7vh', marginTop:'5vh', fontFamily:'CODEBold', textShadow:'1.5px 1.5px #000000'}}  >DOSIMEX</h1>
							</div>
							<div style={{display:'flex', marginTop:'15vh', height:'35vh', 'flexDirection':'row', width:'100vw', justifyContent:'center', alignItems:'center'}} >
								<p style={{width:'80vw', textAlign: 'justify', color:Color.white, fontWeight:'bold', fontSize:'2vh',  textShadow:'1.5px 1.5px #000000'}} >Depuis 2012, nous vous proposons un ensemble d'outils de calculs pratiques, simples d’emploi, validés, et répondant à de nombreuses situations rencontrées en radioprotection. Ils vous permettront d'améliorer votre niveau d'expertise.</p>
							</div>
							{/*<this.scroller/>*/}
							<div onClick={() => this.setState({bandeau:!this.state.bandeau})} style={{position:'absolute', bottom:'6vh', zIndex:10}} >
								{this.state.bottom === false && this.state.footer === false ?
									<p style={{color:Color.lightergrey, fontSize:'1.3vw', right:'4vw', fontStyle:'italic', position:'fixed'}} >Cap de la Hague - Site ORANO</p>
									:
									null
								}
							</div>
						</div>
					</MobileView>
				</div>
				<BrowserView>
					<div style={backgroundImage(BackGroundHague2)} >
						<div style={{...boxStyle, width:'100vw', flexDirection:'row', alignItems:'center', justifyContent:'center'}} /* CTA */ >
							<div style={{height:'100vh', width:'50vw'}} >
								<HomeStyler icon="ios-bulb" mainText="User friendly et sans installation" secondText={<a href="/about/Manuels" >Apprenez a utiliser Dosimex</a>} />
							</div>
							<div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh', width:'50vw', backgroundColor:'rgba(255,255,255,0.5)'}} >
								<iframe style={{width:'30vw', height:'30vh'}} src="https://www.youtube.com/embed/vPalFZk5io0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='présentation' ></iframe>
							</div>
						</div>
						<div style={{position:'relative', top:'-100vh', height:'100%', width:'100%', clipPath:'polygon(100% 80%, 100% 100%, 0 100%, 0 55%)', backgroundColor:Color.darkBlue1 + '40', overflow:'visible', zIndex:1}}/>
					</div>
					<div style={backgroundImage(BackGroundHague2)} >
						<HomeStyler icon="md-walk" mainText='A la découverte du pack Dosimex' secondText={<p style={{color:Color.black, fontSize:28}} >Retrouvez les packs Dosimex : <a href="/offres/packOperationel" >opérationnel</a>, <a href="/offres/packPedagogique" >pédagogique</a>, <a href="/offres/packMesure" >mesure</a> </p>} />
						<div style={{position:'relative', top:'-100vh', height:'100%', width:'100%', clipPath:'polygon(100% 80%, 100% 100%, 0 100%, 0 55%)', backgroundColor:Color.white + '40', overflow:'visible', zIndex:1}}/>
					</div>
					<div style={backgroundImage(BackGroundHague2)} >
						<HomeStyler icon="ios-people" mainText='Plus de 1000 radioprotectionnistes convaincus' secondText={<div><p style={{color:Color.black, fontSize:28}} >Vous pouvez lire quelques avis : <a href={Synthèse_retour_utilisateurs_Dosimex} target="_blank" rel='noreferrer noopener' >ici</a></p><a href='/partenaires' >Ils nous font confiance</a></div>} />
						<div style={{position:'relative', top:'-100vh', height:'100%', width:'100%', clipPath:'polygon(100% 80%, 100% 100%, 0 100%, 0 55%)', backgroundColor:Color.blue + '40', overflow:'visible', zIndex:1}}/>
					</div>
					<div style={backgroundImage(BackGroundHague2)} >
						<HomeStyler icon="md-checkmark" mainText='Validé via MCNP, RayXpert, Microshield et Mercurad' secondText={<div><a href="/about/Validation" >Accédez aux dossiers de validation complet</a><p>Ou aux extraits <a href={extrait_validation_gamma} target="_blank" rel='noreferrer noopener' >validation source gamma</a> ou <a href={extrait_validation_géné_X} target="_blank" rel='noreferrer noopener' >validation générateur X</a> </p></div>} />
						<div style={{position:'relative', top:'-100vh', height:'100%', width:'100%', clipPath:'polygon(100% 80%, 100% 100%, 0 100%, 0 55%)', backgroundColor:Color.darkGreen + '40', overflow:'visible', zIndex:1}}/>
					</div>
					<div style={backgroundImage(BackGroundHague2)} >
						<HomeStyler icon="md-time" mainText="Fruit de 30 années d'expérience" secondText={<a style={{color:Color.blue, fontSize:28}} href="/equipe" >Apprenez a nous connaitre</a>} />
						<div style={{position:'relative', top:'-100vh', height:'100%', width:'100%', clipPath:'polygon(100% 80%, 100% 100%, 0 100%, 0 55%)', backgroundColor:Color.darkred + '40', overflow:'visible', zIndex:1}}/>
					</div>
					<div style={{...backgroundImage(BackGroundHague2), overflow:'visible'}} >
						<HomeStyler icon="md-school" mainText="Formation Dosimex" style={{}} iconColor={Color.lightgrey} secondText={<a style={{color:Color.blue, fontSize:28}} href="/formation/open" >En savoir plus</a>} />
						<div style={{position:'relative', top:'-100vh', height:'100%', width:'100%', clipPath:'polygon(100% 60%, 100% 100%, 0 100%, 0 35%)', backgroundColor:Color.dark, overflow:'visible', zIndex:1}}/>
					</div>

					<VizSensor partialVisibility onChange={(isVisible) =>this.setState({bottom:isVisible})} >
						<div style={{...boxStyle, backgroundColor:Color.dark, width:'100vw', flexDirection:'row', alignItems:'center', justifyContent:'center'}} /* CTA */ >
							<div style={{height:'100vh', width:'50vw'}} >
								<HomeStyler icon="ios-cart" mainText="Achetez Dosimex dès maintenant" iconColor={Color.darkgrey} secondText={<a href='/acheter' style={{color:Color.white, fontSize:18, backgroundColor:Color.red, padding:12, borderRadius:20, alignItems:'center', justifyContent:'center', textShadow:'0px 0px'}} >Vers la boutique</a>} style={{backgroundColor:Color.dark}} />
							</div>
							<div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh', width:'50vw'}} >
								<img src={LogoDosi2} style={{width:'30vw', backgroundColor:Color.white}} alt='logo dosimex' />
							</div>
						</div>
					</VizSensor>
				</BrowserView>
				<this.footer/>
			</div>
		);
	}
}

const boxStyle = {height:'100vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'};

function backgroundImage(url){
	return ({backgroundColor:Color.black, backgroundImage: `url(${url})`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize: "cover", height:'100vh', backgroundAttachment:'fixed'})
}