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
					<p className="Fiftywords">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.<br/> Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre</p>
				</div>
				</ReactPageScroller>
				</div>
		);
	}
}