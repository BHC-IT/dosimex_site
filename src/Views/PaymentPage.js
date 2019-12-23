import React from 'react';

import { Row, Col,  Button, Card} from 'react-bootstrap'

import Color from '../Styles/colorSchemes.js'

import TextSpliter from '../Components/TextSpliter.js'

import InputNumber from 'rc-input-number';

import StripeCheckout from 'react-stripe-checkout';

import XMLHttpRequestAsync from '../helpers/XMLHttpRequestAsync'

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

		if (this.state.amount <= 0 || this.state.amount > 10){
			alert('nombre invalide');
			return;
		}
		if (this.state.amount >= 2){
			item = 'sku_GLa0SV8eWfWpd9' //290
		}
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