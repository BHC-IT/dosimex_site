
import React from 'react';
import parse from 'html-react-parser';


export default class TextSpliter extends React.Component {
	constructor(props){
		super(props);

		this.state = {};
	}

	render(){
		return (
			<div style={this.props.style} >
				{this.props.text.split('\n').map((t, i) => {
					return (
						<p style={this.props.textStyle} key={i}>{parse(t)}</p>
					);
				})}
			</div>
		);
	}
}