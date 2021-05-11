import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './Views/MainRouter';
import * as serviceWorker from './serviceWorker';

import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.render(
	<ParallaxProvider>
		<App />
	</ParallaxProvider>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
