import React from 'react';
import logo from '../logo.svg';
import '../Styles/App.css';

import About from './About'
import Home from './Home'
import Redirection from './Redirection'
import Navbar from './components/navbar'
import Offres from './Offres'
import Tutos from './Tutos'
import Team from './Team'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
	return (
		<Router>
			<div>
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
