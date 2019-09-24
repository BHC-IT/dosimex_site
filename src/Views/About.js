import React from 'react';

import { BrowserRouter as Link } from "react-router-dom";

import Slide from 'react-reveal/Slide';

import {Row, Col, Accordion, Button, Card} from 'react-bootstrap'

import Color from '../Styles/colorSchemes.js'

export default class About extends React.Component {

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div style={{height:'100vh'}}>
				<div style={{height:'100vh', backgroundColor:Color.green}} >
					<Row style={{}} >
						<Col xs={{span:10, offset:1}} style={{backgroundColor:Color.red}} >
							<Link to={'/'}>Home</Link>
						</Col>
					</Row>
				</div>
			</div>
		);
	}

}