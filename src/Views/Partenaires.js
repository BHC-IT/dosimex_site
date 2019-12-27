import React, {Component, useState} from 'react'

import Dosilogo from '../Images/logo_dosi.png'

function RenderPart({part}){
	const [over, setOver] = useState(false);
	if (!part){
		return (null);
	}
	return (
		<div style={{height:350, width:350}} onMouseOver={() => setOver(true)} onMouseOut={() => {}} onPress={() => window.location.href = part.url} >
			<div style={{height:350, width:350, backgroundImage: `url(${part.img})`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize: "contain"}}>
				{over ?
					<div style={{display:'flex', alignItems:'center', justifyContent:'center', height:350, width:350, backgroundColor:'rgba(246,246,246,0.5)'}} onMouseOut={() => setOver(false)} onClick={() => window.location.href = part.url} >
						<p style={{fontSize:16}} >{part.text}</p>
					</div>
					:
					null
				}
			</div>
		</div>
	);
}

export default class Partenaires extends Component {
	constructor(props){
		super(props)
	}

	render(){
		let rework_partenaires = []
		for (let i = 0; i <= partenaires.length; i += 3){
			rework_partenaires.push([partenaires[i], partenaires[i + 1], partenaires[i + 2]]);
		}
		return (
			<div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >
				{rework_partenaires.map(e => {
					return (
						<div style={{display:'flex', marginBottom:'2vh', alignItems:'center', justifyContent:'center'}}>
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
					)
				})}
			</div>
		);
	}
}

const partenaires = [
	{
		name:'bhc',
		url:'https://bhc-it.com',
		img:Dosilogo,
		text:'exemple de text'
	},
	{
		name:'bhc',
		url:'https://bhc-it.com',
		img:Dosilogo,
		text:'exemple de text'
	},
	{
		name:'bhc',
		url:'https://bhc-it.com',
		img:Dosilogo,
		text:'exemple de text'
	},
	{
		name:'bhc',
		url:'https://bhc-it.com',
		img:Dosilogo,
		text:'exemple de text'
	},
	{
		name:'bhc',
		url:'https://bhc-it.com',
		img:Dosilogo,
		text:'exemple de text 2'
	}
]