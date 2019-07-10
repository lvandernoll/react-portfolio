import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './routes/homepage';

import 'normalize.css';
import 'reset-css';
import './images/favicon.ico';

export default class App extends Component {
	render () {
		return (
			<Switch>
				<Route exact path='/' component={Homepage} />
				<Route exact path='/jan' component={Homepage} />
			</Switch>
		);
	}
}
