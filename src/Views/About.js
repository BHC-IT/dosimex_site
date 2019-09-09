import React from 'react';

import { BrowserRouter as Link } from "react-router-dom";

export default class About extends React.Component {

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				<Link to={'/'}>Home</Link>
			</div>
		)
	}

}