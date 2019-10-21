
import React from 'react';
import ReactHtmlParser from 'react-html-parser'


export default class TextSpliter extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div style={this.props.style} >
				{this.props.text.split('\n').map((t, i) => {
					return (
						<p style={this.props.textStyle} key={i}>{ReactHtmlParser(t)}</p>
					);
				})}
			</div>
		);
	}
}