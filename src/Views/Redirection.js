import React from 'react';

import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

export default class Redirection extends React.Component {

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>Redirection
				<Redirect to={'/'}/>
			</div>
		)
	}

}