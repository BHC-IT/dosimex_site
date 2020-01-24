import React from 'react';

import { Row, Accordion, Button, Card} from 'react-bootstrap'

import Color from '../Styles/colorSchemes.js'

import ImageCamenra from '../Images/camera.jpg'

const transform = {
	packOperationel:'0',
	packPedagogique:'1',
	packMesure:'2'
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
		return (
			<Row style={{ height:'95vh', alignItems:'flex-end'}} >
				{this.isOpen() ?
					null
					:
					<p style={{textAlign:'center', width:'100vw'}} ><img src={ImageCamenra} style={{height:'50vh'}} alt='camera' /> </p>
				}
				<Accordion defaultActiveKey={transform[this.props.pack]} >
					<Card style={{width:'101vw'}} >
						<Card.Header style={{backgroundColor:Color.lightishgrey, height:'8vh'}} >
							<Accordion.Toggle style={{width:'100%'}} as={Button} variant="link" eventKey="0" onClick={() => this._keepTrack('0')} >
								<p style={{fontSize:'3vh'}} >{pack1.title}</p>
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="0">
							<Card.Body style={{backgroundColor:Color.lightergrey, height:'71vh'}} >
								<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', paddingRight:10, paddingLeft:10}}>
									<iframe title='video' style={{width:'21vw', height:'30vh'}} src="https://www.youtube.com/embed/E5eWKTJaNxQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
									<iframe title='video' style={{width:'21vw', height:'30vh'}} src="https://www.youtube.com/embed/wkuVxTBXc8g" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
									<iframe title='video' style={{width:'21vw', height:'30vh'}} src="https://www.youtube.com/embed/ksOJEbihuvA" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
									<iframe title='video' style={{width:'21vw', height:'30vh'}} src="https://www.youtube.com/embed/Ga4roi63sSM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
								</div>
								<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', paddingRight:10, paddingLeft:10, marginTop:'5vh'}}>
									<iframe title='video' style={{width:'21vw', height:'30vh'}} src="https://www.youtube.com/embed/4Cfya_rHa04" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
									<iframe title='video' style={{width:'21vw', height:'30vh'}} src="https://www.youtube.com/embed/7emAJHES-fw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
									<iframe title='video' style={{width:'21vw', height:'30vh'}} src="https://www.youtube.com/embed/CnqQhyB6cEo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
									<iframe title='video' style={{width:'21vw', height:'30vh'}} src="https://www.youtube.com/embed/sj-FVjP87jA" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
								</div>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card color={Color.red} >
						<Card.Header style={{backgroundColor:Color.lightishgrey, height:'8vh'}} >
							<Accordion.Toggle style={{width:'100%'}} as={Button} variant="link" eventKey="1" onClick={() => this._keepTrack('1')}>
								<p style={{fontSize:'3vh'}} >{pack2.title}</p>
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="1">
							<Card.Body style={{backgroundColor:Color.lightergrey, height:'71vh'}} >
								<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', paddingRight:10, paddingLeft:10}}>
									<iframe title='video' style={{width:'21vw', height:'35vh'}} src="https://www.youtube.com/embed/Ltk5x2dW_VI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
									<iframe title='video' style={{width:'21vw', height:'35vh'}} src="https://www.youtube.com/embed/vXT2h8GJ8Qk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
									<iframe title='video' style={{width:'21vw', height:'35vh'}} src="https://www.youtube.com/embed/cBQ5-CiqqT4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
									<iframe title='video' style={{width:'21vw', height:'35vh'}} src="https://www.youtube.com/embed/pYbgwudKniA" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
								</div>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Card.Header style={{backgroundColor:Color.lightishgrey, height:'8vh'}} >
							<Accordion.Toggle style={{width:'100%'}} as={Button} variant="link" eventKey="2" onClick={() => this._keepTrack('2')}>
								<p style={{fontSize:'3vh'}} >{pack3.title}</p>
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="2">
							<Card.Body style={{backgroundColor:Color.lightergrey, height:'71vh'}} >
								<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', paddingRight:10, paddingLeft:10}}>
									<iframe title='video' style={{width:'30vw', height:'50vh'}} src="https://www.youtube.com/embed/vSI75UZ_9UQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
									<iframe title='video' style={{width:'30vw', height:'50vh'}} src="https://www.youtube.com/embed/aA4QUutuaJc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
									<iframe title='video' style={{width:'30vw', height:'50vh'}} src="https://www.youtube.com/embed/2Mq-TR8cG-o" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
	title:"Vidéo Pack opérationnel",
}

const pack2 = {
	title:"Vidéo Pack pédagogique",
}

const pack3 = {
	title:"Vidéo Pack mesures",
}