import React from 'react';

import { Row, Col,  Button, Card} from 'react-bootstrap'

import Color from '../Styles/colorSchemes.js'

import TextSpliter from '../Components/TextSpliter.js'

import InputNumber from 'rc-input-number';

import StripeCheckout from 'react-stripe-checkout';

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
			amount:1
		};

		this.request = new XMLHttpRequestAsync();

		this.request.open('post', 'https://paiement.systempay.fr/vads-payment/');
		this.request.send().then(res => console.log('res :', res)).catch(err => console.log('err :', err));
	}

	payment(){
		let stripe = window.Stripe('pk_test_1s4uJA1Pt7i1h33CQVEUXiT800QTki0qvn');

		if (this.state.amount <= 0 || this.state.amount > 10){
			alert('nombre invalide');
			return;
		}
		stripe.redirectToCheckout({
			items: [{sku: 'sku_GLCNldRijwAK1V', quantity: this.state.amount|0}],

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
			<div style={{display:'flex', flexDirection:'column', flex:1, flexGrow:1, alignItems:'center', justifyContent:'center'}} >
				<p>achat</p>
				<div style={{display:'flex', justifyContent:'center', alignItems:'center'}} >
					<p>nombre :</p>
					<InputNumber min={1} max={10} step={1} value={this.state.amount} onChange={(nb) => this.setState({amount:nb})} required style={{}} />

				</div>
				<button style={{backgroundColor:Color.red, borderWidth:0, borderRadius:15, height:50, width:200, marginTop:'2vh'}} onClick={() => this.payment()} >
					<p style={{color:Color.white}} >Checkout</p>
				</button>
			</div>
		);
	}
}