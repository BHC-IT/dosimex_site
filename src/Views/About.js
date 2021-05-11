import React from 'react';

import { Row, Accordion, Button, Card} from 'react-bootstrap'

import {
	BrowserView,
	MobileView,
	isBrowser
} from "react-device-detect";

import Color from '../Styles/colorSchemes.js'

import TextSpliter from '../Components/TextSpliter.js'

import Old_book from '../Images/Old_book.png'

import IManuel1 from '../Images/manuel1.png'
import IManuel2 from '../Images/manuel2.png'
import IManuel3 from '../Images/manuel3.png'
import IManuel4 from '../Images/manuel4.png'

import PManuel1 from '../Folders/Manuel_1_Radionucléide_3.0.pdf'
import PManuel2 from '../Folders/Manuel_2_Géné_X_3.0.pdf'
import PManuel3 from '../Folders/Manuel_3_Application_15_160.pdf'
import PManuel4 from '../Folders/Annexe_S_ radiologie.pdf'

import IValidation1 from '../Images/Validation1.png'
import IValidation2 from '../Images/Validation2.png'
import IValidation3 from '../Images/Validation3.png'
import IValidation4 from '../Images/Validation4.png'
import IValidation5 from '../Images/Validation5.png'

import PValidation1 from '../Folders/Validation_1_Radionucléide_3.0.pdf'
import PValidation2 from '../Folders/Validation_2_Géné X_3.0.pdf'
import PValidation3 from '../Folders/CEA-R-6452.pdf'
import PValidation4 from '../Folders/NT_101682_42_0001_A-DOSIMEX.pdf'
import PValidation5 from '../Folders/Article_facteur_transmission_L_Bourgois.pdf'

import IRapport1 from '../Images/Rapport1.png'
import IRapport2 from '../Images/Rapport2.png'
import IRapport3 from '../Images/Rapport3.png'
import IRapport4 from '../Images/Rapport4.png'

import PRapport1 from '../Folders/Rapport_ULYSSE_reactor_dismantling.pdf'
import PRapport2 from '../Folders/Rapport_mémoire_AREVA.pdf'
import PRapport3 from '../Folders/Rapport_mémoire_SPR_Cadarache.pdf'
import PRapport4 from '../Folders/Rapport_CJ_AREVA_2016.pdf'

const transform = {
	Manuels:'0',
	Validation:'1',
	Rapports:'2'
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
		console.log(this.props.pack)
		return (
			<Row style={{ height:'95vh', alignItems:'flex-end'}} >
				{this.isOpen() ?
					null
					:
					<div>
						<BrowserView>
							<img src={Old_book} style={{position:'absolute', right:'7vw', top:'35vh', height:'25vh', zIndex:0}} alt='old book' />
						</BrowserView>
						<MobileView>
							<img src={Old_book} style={{position:'absolute', right:'7vw', top:'35vh', height:'25vh', zIndex:0, opacity:0.2}} alt='old book' />
						</MobileView>
						<TextSpliter text={documentation} textStyle={{textAlign: 'justify', fontSize:'2.7vh', margin:50, zIndex:5}} style={{zIndex:5}} />
					</div>
				}
				<Accordion defaultActiveKey={transform[this.props.pack]} >
					<Card style={{width:'101vw'}} >
						<Card.Header style={{backgroundColor:Color.lightishgrey, height:'8vh'}} >
							<Accordion.Toggle style={{width:'100%'}} as={Button} variant="link" eventKey="0" onClick={() => this._keepTrack('0')} >
								<p style={{fontSize:isBrowser ? '3vh': '3.5vw'}} >{pack1.title}</p>
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="0">
							<Card.Body style={{backgroundColor:Color.lightergrey, height:'71vh'}} >
								<div>
									<BrowserView>
										<div style={{display:'flex', 'flex-direction':'row', justifyContent:'space-evenly'}} >
											<div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >
												<a href={PManuel1} target="_blank" rel="noopener noreferrer" style={{}} ><img src={IManuel1} style={{width:'20vw'}} alt='' /></a>
												<a href={PManuel1} target="_blank" rel="noopener noreferrer" style={{}} ><p style={{marginTop:'1vh', color:Color.black}} >MANUEL DOSE GAMMA</p></a>
											</div>
											<div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >
												<a href={PManuel2} target="_blank" rel="noopener noreferrer" style={{}} ><img src={IManuel2} style={{width:'20vw'}} alt='' /></a>
												<a href={PManuel2} target="_blank" rel="noopener noreferrer" style={{}} ><p style={{marginTop:'1vh', color:Color.black}} >MANUEL GÉNÉRATEUR X</p></a>
											</div>
											<div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >
												<a href={PManuel3} target="_blank" rel="noopener noreferrer" style={{}} ><img src={IManuel3} style={{width:'20vw'}} alt='' /></a>
												<a href={PManuel3} target="_blank" rel="noopener noreferrer" style={{}} ><p style={{marginTop:'1vh', color:Color.black}} >MANUEL + VALIDATION NF C15-160</p></a>
											</div>
											<div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >
												<a href={PManuel4} target="_blank" rel="noopener noreferrer" style={{}} ><img src={IManuel4} style={{width:'20vw'}} alt='' /></a>
												<a href={PManuel4} target="_blank" rel="noopener noreferrer" style={{}} ><p style={{marginTop:'1vh', color:Color.black}} >{'Grandeurs pratiques en radiologie'.toUpperCase()}</p></a>
											</div>
										</div>
									</BrowserView>
									<MobileView>
										<div style={{display:'flex', 'flex-direction':'column', justifyContent:'space-evenly', height:'71vh'}} >
											<div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly', width:'100vw'}} >
												<div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >
													<a href={PManuel1} target="_blank" rel="noopener noreferrer" style={{}} ><img src={IManuel1} style={{width:'20vw'}} alt='' /></a>
													<a href={PManuel1} target="_blank" rel="noopener noreferrer" style={{}} ><p style={{marginTop:'1vh', color:Color.black}} >MANUEL DOSE GAMMA</p></a>
												</div>
												<div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >
													<a href={PManuel2} target="_blank" rel="noopener noreferrer" style={{}} ><img src={IManuel2} style={{width:'20vw'}} alt='' /></a>
													<a href={PManuel2} target="_blank" rel="noopener noreferrer" style={{}} ><p style={{marginTop:'1vh', color:Color.black}} >MANUEL GÉNÉRATEUR X</p></a>
												</div>
											</div>
											<div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly', width:'100vw'}} >
												<div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >
													<a href={PManuel3} target="_blank" rel="noopener noreferrer" style={{}} ><img src={IManuel3} style={{width:'20vw'}} alt='' /></a>
													<a href={PManuel3} target="_blank" rel="noopener noreferrer" style={{}} ><p style={{marginTop:'1vh', color:Color.black}} >MANUEL + VALIDATION NF C15-160</p></a>
												</div>
												<div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >
													<a href={PManuel4} target="_blank" rel="noopener noreferrer" style={{}} ><img src={IManuel4} style={{width:'20vw'}} alt='' /></a>
													<a href={PManuel4} target="_blank" rel="noopener noreferrer" style={{}} ><p style={{marginTop:'1vh', color:Color.black}} >{'Grandeurs pratiques en radiologie'.toUpperCase()}</p></a>
												</div>
											</div>
										</div>
									</MobileView>
								</div>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card color={Color.red} >
						<Card.Header style={{backgroundColor:Color.lightishgrey, height:'8vh'}} >
							<Accordion.Toggle style={{width:'100%'}} as={Button} variant="link" eventKey="1" onClick={() => this._keepTrack('1')}>
								<p style={{fontSize:isBrowser ? '3vh': '3.5vw'}} >{pack2.title}</p>
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="1">
							<Card.Body style={{backgroundColor:Color.lightergrey, height:'71vh'}} >
								<div>
									<BrowserView>
										<div style={{display:'flex', 'flex-direction':'row', justifyContent:'space-evenly'}} >
											<div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >
												<a href={PValidation1} target="_blank" rel="noopener noreferrer" style={{}} ><img src={IValidation1} style={{width:'16vw'}} alt='' /></a>
												<a href={PValidation1} target="_blank" rel="noopener noreferrer" style={{}} ><p style={{marginTop:'1vh', color:Color.black}} >DOSSIER DE VALIDATION EMISSION GAMMA</p></a>
											</div>
											<div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >
												<a href={PValidation2} target="_blank" rel="noopener noreferrer" style={{}} ><img src={IValidation2} style={{width:'16vw'}} alt='' /></a>
												<a href={PValidation2} target="_blank" rel="noopener noreferrer" style={{}} ><p style={{marginTop:'1vh', color:Color.black}} >DOSSIER DE VALIDATION GÉNÉRATEUR X</p></a>
											</div>
											<div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >
												<a href={PValidation3} target="_blank" rel="noopener noreferrer" style={{}} ><img src={IValidation3} style={{width:'16vw'}} alt='' /></a>
												<a href={PValidation3} target="_blank" rel="noopener noreferrer" style={{}} ><p style={{marginTop:'1vh', color:Color.black}} >{'Référence géné X MCNP/CEA'.toUpperCase()}</p></a>
											</div>
											<div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >
												<a href={PValidation4} target="_blank" rel="noopener noreferrer" style={{}} ><img src={IValidation4} style={{width:'16vw'}} alt='' /></a>
												<a href={PValidation4} target="_blank" rel="noopener noreferrer" style={{}} ><p style={{marginTop:'1vh', color:Color.black}} >{'Référence Radionucléide MCNP/AREVA'.toUpperCase()}</p></a>
											</div>
											<div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >
												<a href={PValidation5} target="_blank" rel="noopener noreferrer" style={{}} ><img src={IValidation5} style={{width:'16vw'}} alt='' /></a>
												<a href={PValidation5} target="_blank" rel="noopener noreferrer" style={{}} ><p style={{marginTop:'1vh', color:Color.black}} >{'Référence atténuation X'.toUpperCase()}</p></a>
											</div>
										</div>
									</BrowserView>
									<MobileView>
										<div style={{display:'flex', 'flex-direction':'column', justifyContent:'space-evenly', height:'71vh'}} >
											<div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly', width:'100vw'}} >
												<div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >
													<a href={PValidation1} target="_blank" rel="noopener noreferrer" style={{}} ><img src={IValidation1} style={{width:'16vw'}} alt='' /></a>
													<a href={PValidation1} target="_blank" rel="noopener noreferrer" style={{}} ><p style={{marginTop:'1vh', color:Color.black, fontSize:'3vw'}} >DOSSIER DE VALIDATION EMISSION GAMMA</p></a>
												</div>
												<div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >
													<a href={PValidation2} target="_blank" rel="noopener noreferrer" style={{}} ><img src={IValidation2} style={{width:'16vw'}} alt='' /></a>
													<a href={PValidation2} target="_blank" rel="noopener noreferrer" style={{}} ><p style={{marginTop:'1vh', color:Color.black, fontSize:'3vw'}} >DOSSIER DE VALIDATION GÉNÉRATEUR X</p></a>
												</div>
											</div>
											<div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly', width:'100vw'}} >
												<div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >
													<a href={PValidation3} target="_blank" rel="noopener noreferrer" style={{}} ><img src={IValidation3} style={{width:'16vw'}} alt='' /></a>
													<a href={PValidation3} target="_blank" rel="noopener noreferrer" style={{}} ><p style={{marginTop:'1vh', color:Color.black, fontSize:'3vw'}} >{'Référence géné X MCNP/CEA'.toUpperCase()}</p></a>
												</div>
												<div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >
													<a href={PValidation4} target="_blank" rel="noopener noreferrer" style={{}} ><img src={IValidation4} style={{width:'16vw'}} alt='' /></a>
													<a href={PValidation4} target="_blank" rel="noopener noreferrer" style={{}} ><p style={{marginTop:'1vh', color:Color.black, fontSize:'3vw'}} >{'Référence Radionucléide MCNP/AREVA'.toUpperCase()}</p></a>
												</div>
												<div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >
													<a href={PValidation5} target="_blank" rel="noopener noreferrer" style={{}} ><img src={IValidation5} style={{width:'16vw'}} alt='' /></a>
													<a href={PValidation5} target="_blank" rel="noopener noreferrer" style={{}} ><p style={{marginTop:'1vh', color:Color.black, fontSize:'3vw'}} >{'Référence atténuation X'.toUpperCase()}</p></a>
												</div>
											</div>
										</div>
									</MobileView>
								</div>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Card.Header style={{backgroundColor:Color.lightishgrey, height:'8vh'}} >
							<Accordion.Toggle style={{width:'100%'}} as={Button} variant="link" eventKey="2" onClick={() => this._keepTrack('2')}>
								<p style={{fontSize:isBrowser ? '3vh': '3.5vw'}} >{pack3.title}</p>
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="2">
							<Card.Body style={{backgroundColor:Color.lightergrey, height:'71vh'}} >
								<div>
									<BrowserView>
										<div style={{display:'flex', 'flex-direction':'row', justifyContent:'space-evenly'}} >
											<div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >
												<a href={PRapport1} target="_blank" rel="noopener noreferrer" style={{}} ><img src={IRapport1} style={{width:'20vw'}} alt='' /></a>
												<a href={PRapport1} target="_blank" rel="noopener noreferrer" style={{}} ><p style={{marginTop:'1vh', color:Color.black}} >{'Mémoire ulysse'.toUpperCase()}</p></a>
											</div>
											<div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >
												<a href={PRapport2} target="_blank" rel="noopener noreferrer" style={{}} ><img src={IRapport2} style={{width:'20vw'}} alt='' /></a>
												<a href={PRapport2} target="_blank" rel="noopener noreferrer" style={{}} ><p style={{marginTop:'1vh', color:Color.black}} >{'Mémoire microshield vs Dosimex 1'.toUpperCase()}</p></a>
											</div>
											<div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >
												<a href={PRapport3} target="_blank" rel="noopener noreferrer" style={{}} ><img src={IRapport3} style={{width:'20vw'}} alt='' /></a>
												<a href={PRapport3} target="_blank" rel="noopener noreferrer" style={{}} ><p style={{marginTop:'1vh', color:Color.black}} >{'Mémoire microshield vs Dosimex 2'.toUpperCase()}</p></a>
											</div>
											<div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >
												<a href={PRapport4} target="_blank" rel="noopener noreferrer" style={{}} ><img src={IRapport4} style={{width:'20vw'}} alt='' /></a>
												<a href={PRapport4} target="_blank" rel="noopener noreferrer" style={{}} ><p style={{marginTop:'1vh', color:Color.black}} >{'Mémoire microshield vs Dosimex 3'.toUpperCase()}</p></a>
											</div>
										</div>
									</BrowserView>
									<MobileView>
										<div style={{display:'flex', 'flex-direction':'column', justifyContent:'space-evenly', height:'71vh'}} >
											<div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly', width:'100vw'}} >
												<div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >
													<a href={PRapport1} target="_blank" rel="noopener noreferrer" style={{}} ><img src={IRapport1} style={{width:'20vw'}} alt='' /></a>
													<a href={PRapport1} target="_blank" rel="noopener noreferrer" style={{}} ><p style={{marginTop:'1vh', color:Color.black, fontSize:'2.5vw'}} >{'Mémoire ulysse'.toUpperCase()}</p></a>
												</div>
												<div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >
													<a href={PRapport2} target="_blank" rel="noopener noreferrer" style={{}} ><img src={IRapport2} style={{width:'20vw'}} alt='' /></a>
													<a href={PRapport2} target="_blank" rel="noopener noreferrer" style={{}} ><p style={{marginTop:'1vh', color:Color.black, fontSize:'2.5vw'}} >{'Mémoire microshield vs Dosimex 1'.toUpperCase()}</p></a>
												</div>
											</div>
											<div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly', width:'100vw'}} >
												<div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >
													<a href={PRapport3} target="_blank" rel="noopener noreferrer" style={{}} ><img src={IRapport3} style={{width:'20vw'}} alt='' /></a>
													<a href={PRapport3} target="_blank" rel="noopener noreferrer" style={{}} ><p style={{marginTop:'1vh', color:Color.black, fontSize:'2.5vw'}} >{'Mémoire microshield vs Dosimex 2'.toUpperCase()}</p></a>
												</div>
												<div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >
													<a href={PRapport4} target="_blank" rel="noopener noreferrer" style={{}} ><img src={IRapport4} style={{width:'20vw'}} alt='' /></a>
													<a href={PRapport4} target="_blank" rel="noopener noreferrer" style={{}} ><p style={{marginTop:'1vh', color:Color.black, fontSize:'2.5vw'}} >{'Mémoire microshield vs Dosimex 3'.toUpperCase()}</p></a>
												</div>
											</div>
										</div>
									</MobileView>
								</div>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
			</Row>
		);
	}

}

const pack1 = {
	title:"Manuels d’utilisation",
}

const pack2 = {
	title:"Dossiers de validation et références MCNP",
}

const pack3 = {
	title:"Rapports de stages de fin d’étude vs Dosimex",
}

const documentation = `Pour mieux vous permettre de juger des possibilités offertes avec Dosimex-GX, vous pouvez télécharger l’ensemble de la documentation associée à ce code :
			o Les manuels d’utilisation\n
			o Les dossiers de validation\n
			o Quelques rapports de stages de fin d'étude utilisant Dosimex`;