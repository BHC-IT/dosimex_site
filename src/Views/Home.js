import React from 'react';
import ReactPageScroller from "react-page-scroller";
import '../Styles/Landing.css'
import Carousel from './components/Carousel'

export default class Home extends React.Component {

	constructor(props){
		super(props);
	}

	render(){
		return (
			
				<div>
					<ReactPageScroller>
					<Carousel></Carousel>
				<div>
					<h1 className="WelcomeText">Bienvenue sur Dosimex</h1>
					<p className="Fiftywords">Antoine est la reine des putes mais pour le moment il n'y a que peu de mots alors nous écrivons <br/>encore et encore en espérant atteindre les 50 mots, la question est: Est-ce que l'indentation sera cool or not</p>
				</div>
				</ReactPageScroller>
				</div>
		);
	}
}