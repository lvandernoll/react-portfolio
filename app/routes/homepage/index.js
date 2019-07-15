import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Page from '../Page';
import image from '../../images/DSC02681.jpg';

export default class Homepage extends Component {
	render () {
		return (
			<Page image={image}>
				XD
				<Link to='/jan'>JAN</Link>
			</Page>
		);
	}
}
