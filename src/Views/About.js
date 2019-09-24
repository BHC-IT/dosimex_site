import React from 'react';

import { BrowserRouter as Link } from "react-router-dom";

import Slide from 'react-reveal/Slide';

import {Row, Col, Accordion, Button, Card} from 'react-bootstrap'

import Color from '../Styles/colorSchemes.js'

import image from '../Folders/DevisAryaV2.docx'

export default class About extends React.Component {

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div style={{height:'100%'}}>
				<div style={{height:'100%', backgroundColor:Color.green}} >
					<Row style={{marginTop:20}} >
						<Col xs={{span:10, offset:1}} style={{backgroundColor:Color.red}} >
							<Row>
								<Link to={'/'}>Home</Link>
							</Row>
							<Row>
								<a href={image} >pdf</a>
							</Row>
						</Col>
					</Row>
				</div>
			</div>
		);
	}

}