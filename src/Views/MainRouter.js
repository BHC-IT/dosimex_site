import React from 'react';
import logo from '../logo.svg';
import '../Styles/App.css';

import About from './About'
import Home from './Home'
import Redirection from './Redirection'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
	console.log("test");
	return (
		<Router>
			<div>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/redirection" component={Redirection} />
			</div>
		</Router>
	);
}

export default App;
