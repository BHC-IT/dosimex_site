import React, {Component, useState} from 'react'

import Color from '../Styles/colorSchemes.js'

import bhcLightNoTextDark from '../Images/test6_name_customcolor_backless_v2_light_dark.png'
import safe from '../Images/logo_partenaires/safe.png'
import lea from '../Images/logo_partenaires/lea.png'
import alara from '../Images/logo_partenaires/alara.png'
import apave from '../Images/logo_partenaires/apave.png'
import trad from '../Images/logo_partenaires/trad.png'
import rpcirkus from '../Images/logo_partenaires/rpcirkus.png'
import cls from '../Images/logo_partenaires/cls.png'
import b2c from '../Images/logo_partenaires/b2c.png'
import edp from '../Images/logo_partenaires/edp.png'
import cossen from '../Images/logo_partenaires/cossen.png'
import pcr from '../Images/logo_partenaires/logo-PCR-Long-title-CouleurHD.png'

function RenderPart({part}){
	const [over, setOver] = useState(false);
	if (!part){
		return (null);
	}
	let color = over ? 'rgba(246,246,246,0.8)' : 'rgba(255,255,255,0)';
	return (
		<a style={{height:'22vh', width:'25vw'}} onMouseOver={() => setOver(true)} onMouseOut={() => {}} href={part.url} target="_blank" rel="noopener noreferrer" >
			<div style={{height:'22vh', width:'25vw', backgroundImage: `url(${part.img})`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize: "contain"}}>
				<div style={{display:'flex', alignItems:'center', justifyContent:'center', height:'22vh', width:'25vw', backgroundColor:color, 'transition-property': 'background-color', 'transition-duration': '0.5s'}} onMouseOut={() => setOver(false)} >
					<p style={{fontSize:20, fontWeight:'bold', color:part.textColor ? part.textColor : 'black', opacity:over?1:0, 'transition-property': 'opacity', 'transition-duration': '0.7s'}} >{part.text}</p>
				</div>
			</div>
		</a>
	);
}

export default class Partenaires extends Component {
	constructor(props){
		super(props);

		this.state = {};
	}

	render(){
		let rework_partenaires = []
		for (let i = 0; i <= partenaires.length; i += 3){
			let i1 ,i2, i3 = null;
			i1 = partenaires[i];
			if (partenaires[i + 1])
				i2 = partenaires[i + 1];
			if (partenaires[i + 2])
				i3 = partenaires[i + 2];
			rework_partenaires.push([i1, i2, i3]);
		}
		for (let i = 0; i < rework_partenaires.length; i++){
			rework_partenaires[i] = rework_partenaires[i].filter(e => e !== null && e !== undefined);
		}
		return (
			<div style={{display:'flex', flexDirection:'column', alignItems:'center', height:'96vh', backgroundColor:Color.lightergrey, marginTop:'2vh'}} >
				{rework_partenaires.map((e, i) => {
					if (e.length ===  1){
						return (
							<div style={{display:'flex', marginBottom:i < rework_partenaires.length - 1 ? '2vh' : '0vh' , alignItems:'center', justifyContent:'center', width:'100vw', backgroundColor:Color.lightergrey}}>
								<div style={{}} >
									<RenderPart part={e[0]}/>
								</div>
							</div>
						);
					}
					return (
						<div style={{display:'flex', marginBottom:i < rework_partenaires.length - 1 ? '2vh' : '0vh' , alignItems:'center', justifyContent:'center', width:'100vw', backgroundColor:Color.lightergrey}}>
							<div style={{marginLeft:'4vw', marginRight:'4vw'}} >
								<RenderPart part={e[0]}/>
							</div>
							<div style={{marginLeft:'4vw', marginRight:'4vw'}} >
								<RenderPart part={e[1]}/>
							</div>
							<div style={{marginLeft:'4vw', marginRight:'4vw'}} >
								<RenderPart part={e[2]}/>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

const partenaires = [
	{
		name:'safe technologies',
		url:'http://safetechnologies.fr',
		img:safe,
		text:'Notre partenaire de longue date  pour les formations en spectrométrie gamma et autres'
	},
	{
		name:'',
		url:'https://www.pcrstrategie.fr/',
		img:pcr,
		text:''
	},
	{
		name:'Trad',
		url:'https://www.rayxpert.com/',
		img:trad,
		text:'Ils nous ont fait l’honneur d’apprécier nos codes. Et nous recommandons chaudement le code RayXpert'
	},
	{
		name:'Lea',
		url:'https://www.orano.group/fr/expertise-sur-tout-le-cycle/tour-des-implantations/laboratoire-etalons-activite/lea',
		img:lea,
		text:'Utilisent Dosimex à gogo dans leurs calculs'
	},
	{
		name:'Cossen',
		url:'https://www.linkedin.com/company/cossen',
		img:cossen,
		text:'Nous sommes fiers de les aider dans leurs missions'
	},
	{
		name:'Apave',
		url:'https://apave.com',
		img:apave,
		text:'Les premiers a avoir utilisé Dosimex dans les formations PCR'
	},
	{
		name:'Alara',
		url:'https://www.alara-expertise.fr',
		img:alara,
		text:'Une entreprise qui aime les projets. Nous aussi'
	},
	{
		name:'rpcirkus',
		url:'https://rpcirkus.org',
		img:rpcirkus,
		text:'Parmi les premiers à nous soutenir. Et ils continuent. Merci'
	},
	{
		name:'cls',
		url:'http://cls.to',
		img:cls,
		text:'Les seuls en France à savoir crypter Excel ( et les autres produits Microsoft). Sans eux nous n’existerions simplement pas'
	},
	{
		name:'b2c',
		url:'https://www.b2c-loire.fr/',
		img:b2c,
		text:'Partenaire pour les formations en Radioprotection et utilisateur de Dosimex'
	},
	{
		name:'edp',
		url:'https://www.edpsciences.org/fr/',
		img:edp,
		text:'Notre éditeur historique pour l’ouvrage « calcul de doses générées par les rayonnements ionisants »'
	},
	{
		name:'bhc',
		url:'https://bhc-it.com',
		img:bhcLightNoTextDark,
		text:'Le créateur de notre site. Et d\'autres projets en cours !',
		textColor:Color.bhcPurpleTypo
	}
]