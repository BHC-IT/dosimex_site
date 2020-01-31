import React from 'react';

import Color from '../Styles/colorSchemes.js'

import TextSpliter from '../Components/TextSpliter.js'

import usbkey from "../Images/usbkey.png"

export default class Home extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			amount:1
		};
	}

	payment(){
		let stripe = window.Stripe('pk_test_1s4uJA1Pt7i1h33CQVEUXiT800QTki0qvn');
		let item = 'sku_GLCNldRijwAK1V'; //300

		stripe.redirectToCheckout({
			items: [{sku: item, quantity: this.state.amount|0}],

			successUrl: 'http://dosimex.fr/success',
			cancelUrl: 'http://dosimex.fr/canceled',
			billingAddressCollection: 'required',
			locale:'fr'
		}).then(function (result) {
			console.log(result);
			if (result.error) {
				alert(result.error.message);
			}
		}).catch(e => console.log(e));

	}

	render(){
		return (
			<div style={{display:'flex', flexDirection:'row', height:'96vh', flexGrow:1, alignItems:'center', justifyContent:'center'}} >
				<div style={{display:'flex', flexDirection:'column', flexGrow:1, alignItems:'flex-end', justifyContent:'center', borderRightWidth:1, borderColor:Color.black, borderRightStyle:'solid', paddingRight:'2.5vw', marginRight:'2.5vw'}}>
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
		);
	}
}

const text = `
<p style="text-align:justify;font-weight:bold;font-size:16;margin-bottom:2vh" >FICHE TECHNIQUE DU PRODUIT</p>
La clé USB DOSIMEX 3.0 contient :\n
    • Tous les codes et utilitaires (13) des packs opérationnel, pédagogique et mesure présentés sur ce site\n
    • La documentation associée : manuel d’emploi et dossier de validation de chaque code.\n
    • Des documents de cours (11).\n
    • Les annexes (19) de l’ouvrage « calcul de dose générées par les rayonnements ionisant ».\n
\n
Cette clé fonctionne comme un dongle. Il suffit de la connecter sur un PC pour automatiquement voir apparaitre l’ensemble des dossiers (DOSIMEX 3.0 (E ) ).\n
Un sommaire général (SOMMAIRE GENERAL.pps ) à la racine des dossiers permet de naviguer sur l’ensemble du pack Dosimex.\n
Les codes s’ouvrent et s’utilisent directement sur la clé\n
Dans certains cas les sécurités bloquent l’utilisation des codes directement sur la clé.\n
Il est alors possible de transférer l’ensemble du pack sur le disque dur et d’exécuter les codes à partir de ce dernier.\n
Il faudra par contre dans ce cas que la clé Dosimex reste connectée sur le PC.\n
Suivant les mesures de sécurité mises en place dans les entreprises, il est conseillé de demander à votre service informatique de « whitelister » Dosimex\n
\n
Vous pouvez acheter Dosimex 3.0 en ligne (250 € HT, 300 € TTC) ou demander un devis à :\n
<a href="mailto:contact@dosimex.fr"> contact@dosimex.fr</a> ou 06 89 70 90 35\n
`