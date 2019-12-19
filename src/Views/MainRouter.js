import React from 'react';
import '../Styles/App.css';

import About from './About'
import Home from './Home'
import Formation from './Formation'
import Navbar from '../Components/navbar'
import Offres from './Offres'
import Tutos from './Tutos'
import Team from './Team'
import Lecture from './Lecture'
import PaymentPage from './PaymentPage'

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
		return (
			<Router>
				<div style={{backgroundColor:Color.lightergrey, height:'100vh'}} >
					<Navbar route={this.state.route} />
					<Route exact path="/" render={() => {
						if (this.state.route !== 'Home')
							this.setState({route:'Home'});
						return(
							<Home/>
						);
					}} />
					<Route path="/about/:pack" render={({match}) => {
						if (this.state.route !== 'A propos')
							this.setState({route:'A propos'});
						return(
							<About pack={match.params.pack} />
						);
					}} />
					<Route exact path="/about" render={() => {
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
							<Formation/>
						);
					}} />
					<Route path="/offres/:pack" render={({match}) => {
						if (this.state.route !== 'Les offres Dosimex')
							this.setState({route:'Les offres Dosimex'});
						return(
							<Offres pack={match.params.pack} />
						);
					}} />
					<Route exact path="/offres" render={() => {
						if (this.state.route !== 'Les offres Dosimex')
							this.setState({route:'Les offres Dosimex'});
						return(
							<Offres />
						);
					}} />
					<Route path="/tutos/:pack" render={({match}) => {
						if (this.state.route !== 'Nos tutos')
							this.setState({route:'Nos tutos'});
						return(
							<Tutos pack={match.params.pack} />
						);
					}} />
					<Route exact path="/tutos" render={() => {
						if (this.state.route !== 'Nos tutos')
							this.setState({route:'Nos tutos'});
						return(
							<Tutos/>
						);
					}} />
					<Route path="/lecture/:pack" render={({match}) => {
						if (this.state.route !== 'Lecture')
							this.setState({route:'Lecture'});
						return(
							<Lecture pack={match.params.pack} />
						);
					}} />
					<Route exact path="/lecture" render={() => {
						if (this.state.route !== 'Lecture')
							this.setState({route:'Lecture'});
						return(
							<Lecture/>
						);
					}} />
					<Route path="/equipe" render={() => {
						if (this.state.route !== 'Notre équipe')
							this.setState({route:'Notre équipe'});
						return(
							<Team/>
						);
					}} />
					{/*<Route path="/acheter" render={() => {
						if (this.state.route !== 'Acheter DOSIMEX')
							this.setState({route:'Acheter DOSIMEX'});
						return(
							<PaymentPage/>
						);
					}} />*/}

				</div>
			</Router>
		);
	}
}

export default App;
