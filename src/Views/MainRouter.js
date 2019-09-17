import React from 'react';
import '../Styles/App.css';

import About from './About'
import Home from './Home'
import Redirection from './Redirection'
import Navbar from '../Components/navbar'
import Offres from './Offres'
import Tutos from './Tutos'
import Team from './Team'


import Color from '../Styles/colorSchemes.js'

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			route:'Home'
		}
	}

	render(){
		console.log(this.state.route);
		return (
			<Router>
				<div style={{backgroundColor:Color.lightergrey}} >
					<Navbar route={this.state.route} />
					<Route exact path="/" render={() => {
						if (this.state.route !== 'Home')
							this.setState({route:'Home'});
						return(
							<Home/>
						);
					}} />
					<Route path="/about" render={() => {
						if (this.state.route !== 'A propos')
							this.setState({route:'A propos'});
						return(
							<About/>
						);
					}} />
					<Route path="/formation" render={() => {
						if (this.state.route !== 'Formation')
							this.setState({route:'Formation'});
						return(
							<Redirection/>
						);
					}} />
					<Route path="/offres" render={() => {
						if (this.state.route !== 'Les offres Dosimex')
							this.setState({route:'Les offres Dosimex'});
						return(
							<Offres/>
						);
					}} />
					<Route path="/tutos" render={() => {
						if (this.state.route !== 'Nos tutos')
							this.setState({route:'Nos tutos'});
						return(
							<Tutos/>
						);
					}} />
					<Route path="/equipe" render={() => {
						if (this.state.route !== 'Notre équipe')
							this.setState({route:'Notre équipe'});
						return(
							<Team/>
						);
					}} />
				{/* <div></div> */}

				</div>
			</Router>
		);
	}
}

export default App;
