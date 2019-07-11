import React, { Component } from 'react';
import styles from './page.scss';

export default class Page extends Component {
	render () {
		return (
			<section className={styles.page} {...this.props}>
				{this.props.children}
			</section>
		);
	}
}
