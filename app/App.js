import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Homepage from './routes/homepage';
import ProjectOverview from './routes/projectOverview';

import './styles/transitions.css';
import 'normalize.css';
import 'reset-css';
import './images/favicon.ico';

export default class App extends Component {
	render () {
		return (
			<Route render={({ location }) => {
				const { pathname } = location;
				return (
					<TransitionGroup>
						<CSSTransition
						key={pathname}
						classNames='page'
						timeout={{
							enter: 1000,
							exit: 1000,
						}}>
							<Route location={location} render={() => (
								<Switch>
									<Route exact path='/' component={Homepage} />
									<Route exact path='/projects' component={ProjectOverview} />
									<Route component={Homepage} /> // 404
								</Switch>
							)}/>
						</CSSTransition>
					</TransitionGroup>
				);
			}}/>
		);
	}
}
