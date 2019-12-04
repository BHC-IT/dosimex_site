
import React from 'react';
import ReactHtmlParser from 'react-html-parser'
import parse from 'html-react-parser';


export default class TextSpliter extends React.Component {
	constructor(props){
		super(props);
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