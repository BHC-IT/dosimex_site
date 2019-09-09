import React from 'react';

import { BrowserRouter as Redirect } from "react-router-dom";

export default class Redirection extends React.Component {

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				<Redirect to={'/'}/>
			</div>
		)
	}

}