import React, { Component } from 'react';
import styles from './page.scss';
import ReactTransitionGroup from 'react-transition-group';
export default class Page extends Component {
	render () {
		return (
			<>
				<section className={styles.page}>
					{this.props.children}
				</section>
				<div className={styles.left}>
					<div className={`${styles.dots} ${styles.dotsLeft}`} />
					<div className={`${styles.dots} ${styles.dotsRight}`} />
					{this.props.image && <img className={styles.image} src={this.props.image} />}
				</div>
			</>
		);
	}
}
