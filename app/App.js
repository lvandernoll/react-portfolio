import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Homepage from './routes/homepage';
import ProjectOverview from './routes/projectOverview';
import ProjectDetail from './routes/projectDetail';

import './styles/transitions.css';
import 'normalize.css';
import 'reset-css';
import './images/favicon.ico';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown, faArrowLeft, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faLaravel, faPhp, faJsSquare, faReact, faPython, faVuejs, faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons'

library.add(faChevronDown, faArrowLeft, faTimes,
	faLaravel, faPhp, faJsSquare, faReact, faPython, faVuejs, faHtml5, faCss3Alt);

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
							enter: 1500,
							exit: 1000,
						}}>
							<Route location={location} render={() => (
								<Switch>
									<Route exact path='/' component={Homepage} />
									<Route exact path='/projects' component={ProjectOverview} />
									<Route path='/projects/:id' component={ProjectDetail} />
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
