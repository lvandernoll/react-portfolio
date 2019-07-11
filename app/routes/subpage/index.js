import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Page from '../Page';

export default class Subpage extends Component {
	render () {
		return (
			<Page>
				subpage
				<Link to='/'>back</Link>
			</Page>
		);
	}
}
