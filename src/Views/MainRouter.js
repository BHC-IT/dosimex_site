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

function App() {
	return (
		<Router>
			<div style={{backgroundColor:Color.lightergrey}} >
                                <Navbar/>
                                <Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/redirection" component={Redirection} />
                                <Route path="/offres" component={Offres} />
                                <Route path="/tutos" component={Tutos} />
                                <Route path="/equipe" component={Team} />
                                {/* <div></div> */}

			</div>
		</Router>



	);
}

export default App;
