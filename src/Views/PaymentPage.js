import React from 'react';

import { Row, Col,  Button, Card} from 'react-bootstrap'

import Color from '../Styles/colorSchemes.js'

import TextSpliter from '../Components/TextSpliter.js'

import XMLHttpRequestAsync from '../helpers/XMLHttpRequestAsync'

var sha1 = require('sha1');

function getDate(){
	let time = new Date(Date.now());
	let years = time.getFullYear().toString();
	let mounth = (time.getMonth() + 1).toString();
	mounth = mounth.length === 1 ? "0" + mounth : mounth;
	let date = time.getDate().toString();
	date = date.length === 1 ? "0" + date : date;
	let hours = time.getHours().toString();
	hours = hours.length === 1 ? "0" + hours : hours;
	let minutes = time.getMinutes().toString();
	minutes = minutes.length === 1 ? "0" + minutes : minutes;
	let seconds = time.getSeconds().toString();
	seconds = seconds.length === 1 ? "0" + seconds : seconds;
	return (years + mounth + date + hours + minutes + seconds)
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const rand = "1" + getRandomInt(9).toString() + getRandomInt(9).toString() + getRandomInt(9).toString() + getRandomInt(9).toString() + getRandomInt(9).toString();

let form = [
	{name:"vads_site_id", value:96221331},
	{name:"vads_trans_date", value:getDate()},
	{name:"vads_trans_id", value:rand},
	{name:"vads_action_mode", value:"INTERACTIVE"},
	{name:"vads_amount", value:30000},
	{name:"vads_capture_delay", value:'0'},
	{name:"vads_ctx_mode", value:'TEST'},
	{name:'vads_currency', value:'978'},
	{name:'vads_page_action', value:'PAYMENT'},
	{name:'vads_payment_config', value:'SINGLE'},
	{name:'vads_version', value:'V2'},
]

export default class Home extends React.Component {

	constructor(props){
		super(props);

		this.state = {
		};

		this.request = new XMLHttpRequestAsync();

		this.request.open('post', 'https://paiement.systempay.fr/vads-payment/');
		this.request.send().then(res => console.log('res :', res)).catch(err => console.log('err :', err));
	}

	render(){
		form.sort((l,r) => l.name > r.name);
		let to_sign = form.reduce((acc, e) => {
			if (acc.length > 0)
				acc += '+';
			acc += e.value;
			return (acc);
		}, "");
		to_sign += '+' + 'Izp9S6YP5DpyBwhM';
		return (
			<div style={{width:'100%', height:'100%'}} >
				<p>achat</p>
				<form method="POST" action="https://paiement.systempay.fr/vads-payment/">
					{form.map(e => <input type="hidden" name={e.name} value={e.value}/> )}
					<input type="hidden" name="signature" value={sha1(to_sign)}/>
					<Row style={{alignItems:'center', justifyContent: 'center', height:'90vh', width:'100vw',}} >
						<input type="submit" name="payer" value="Commander" style={{color:Color.white, backgroundColor:Color.red, width:200, height:50, border:'none', borderRadius:5, fontSize:26}} />
					</Row>
				</form>
			</div>
		);
	}
}