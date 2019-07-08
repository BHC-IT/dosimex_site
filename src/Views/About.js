import React from 'react';

import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

export default class About extends React.Component {

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>About
				<Link to={'/'}>Home</Link>
			</div>
		)
	}

}