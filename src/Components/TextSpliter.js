
import React from 'react';

export default class TextSpliter extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div style={this.props.style} >
				{this.props.text.split('\n').map((t, i) => {
					return (
						<p style={this.props.textStyle} key={i}>{t}</p>
					);
				})}
			</div>
		);
	}
}