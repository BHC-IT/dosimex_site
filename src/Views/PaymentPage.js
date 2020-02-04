import React from 'react';

import Color from '../Styles/colorSchemes.js'

import TextSpliter from '../Components/TextSpliter.js'

import usbkey from "../Images/usbkey.png"

import {
	BrowserView,
	MobileView,
} from "react-device-detect";

export default class Home extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			amount:1
		};
	}

	payment(){
	}

	render(){
		return (
			<div>
				<BrowserView>
					<div style={{display:'flex', flexDirection:'row', height:'96vh', flexGrow:1, alignItems:'center', justifyContent:'center'}} >
						<div style={{display:'flex', flexDirection:'column', flexGrow:1, alignItems:'flex-end', justifyContent:'center', borderRightWidth:1, borderColor:Color.black, borderRightStyle:'solid', paddingRight:'2.5vw', marginRight:'2.5vw', marginLeft:'5vw'}}>
							<TextSpliter textStyle={{textAlign:'justify', fontSize:16}} text={text} />
						</div>
						<div style={{display:'flex', flexDirection:'column', flexGrow:1, alignItems:'flex-start', justifyContent:'center', marginLeft:'0vw'}} >
							<div style={{display:'flex', flexDirection:'column', flexGrow:1, alignItems:'center', justifyContent:'center', marginLeft:'0vw'}} >
								<img src={usbkey} style={{width:'20vw', marginBottom:'1vh'}} alt='Dosimex key' />
								<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
									<input type="hidden" name="cmd" value="_s-xclick"/>
									<input type="hidden" name="hosted_button_id" value="5ZR8G5EHFRUH4"/>
									<input type="image" src="https://www.paypalobjects.com/fr_FR/FR/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal, le réflexe sécurité pour payer en ligne"/>
									<img alt="" border="0" src="https://www.paypalobjects.com/fr_FR/i/scr/pixel.gif" width="1" height="1"/>
								</form>
							</div>
						</div>
					</div>
				</BrowserView>
				<MobileView>
					<div style={{display:'flex', flexDirection:'column', height:'96vh', flexGrow:1, alignItems:'center', paddingTop:'5vh'}} >
						<div style={{display:'flex', flexDirection:'column', flexGrow:1, alignItems:'center'}} >
							<img src={usbkey} style={{width:'50vw', marginBottom:'1vh'}} alt='Dosimex key' />
							<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
								<input type="hidden" name="cmd" value="_s-xclick"/>
								<input type="hidden" name="hosted_button_id" value="5ZR8G5EHFRUH4"/>
								<input type="image" src="https://www.paypalobjects.com/fr_FR/FR/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal, le réflexe sécurité pour payer en ligne"/>
								<img alt="" border="0" src="https://www.paypalobjects.com/fr_FR/i/scr/pixel.gif" width="1" height="1"/>
							</form>
						</div>
						<div style={{display:'flex', flexDirection:'column', flexGrow:1, alignItems:'flex-end', justifyContent:'center', marginLeft:'3vw', marginRight:'3vw'}}>
							<TextSpliter textStyle={{textAlign:'justify', fontSize:16}} text={text} />
						</div>
					</div>
				</MobileView>
			</div>
		);
	}
}

const text = `
<p style='font-weight:bold' >FICHE TECHNIQUE DU PRODUIT</p>
La <p style='font-weight:bold; display:inline' >clé USB DOSIMEX 3.0</p> fonctionne comme un dongle. Il suffit de la connecter sur un PC pour voir apparaître automatiquement l’ensemble des dossiers. Les codes s'ouvrent et s’utilisent directement sur la clé.
Elle se subdivise en 2 partitions :
La <p style='font-weight:bold; display:inline' >partition E</p> contient :
• Tous les codes et utilitaires (13) des packs opérationnel, pédagogique et mesure présentés sur ce site
• La documentation associée : manuel d’emploi et dossier de validation de chaque code.
• Des documents de cours (11).
• Les annexes (19) de l’ouvrage « Calcul de doses générées par les rayonnements ionisants » (EDP Sciences 2016).
Un sommaire général (Sommaire général.pps) à la racine des dossiers permet de naviguer sur l’ensemble du pack Dosimex.
La <p style='font-weight:bold; display:inline' >partition D</p> protégée en écriture permet une restauration des fichiers si nécessaire.
<p style='font-weight:bold; display:inline' >Prérequis</p> : les codes sont écrits en VBA sous Excel. Le pack Dosimex fonctionne avec Windows XP à Windows 10 et Excel 2003 à 2019 en autorisant le fonctionnement des macros. Sur Mac il est nécessaire de créer une « machine virtuelle ».
Suivant les mesures de sécurité mises en place dans l’entreprise, il est conseillé de demander à votre service informatique de « whitelister » Dosimex.
Vous pouvez acheter Dosimex 3.0 en ligne ou demander un devis par message.
N’hésitez pas à nous contacter directement au <p style='font-weight:bold;display:inline' >06 89 70 90 35</p>.
`