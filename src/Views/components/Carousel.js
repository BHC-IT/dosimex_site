import React from 'react';
import Slider from 'react-animated-slider';
import Car1 from '../../Images/image1Carousel.jpg'
import 'react-animated-slider/build/horizontal.css';

export default class Carousel extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
		<Slider>
			<img style={} src={Car1} />
			<img style={} src="https://s18.postimg.cc/vunvhvvrt/img2.jpg" />
			<img style={} src="https://s18.postimg.cc/tdc4amjl5/img3.jpg" />
		</Slider>
		);
	}

}