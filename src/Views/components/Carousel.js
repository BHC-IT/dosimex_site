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
			<img src={Car1} />
			<img src="https://s18.postimg.cc/vunvhvvrt/img2.jpg" />
			<img src="https://s18.postimg.cc/tdc4amjl5/img3.jpg" />
		</Slider>
		);
	}

}