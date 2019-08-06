import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './button.scss';

export default class Button extends Component {
	onClick = () => {
		console.log('click');
		this.refs.content.classList.add(styles.contentClicked);
		this.refs.text.classList.add(styles.textClicked);
	}

	render () {
		return (
			<Link to='/projects' className={styles.button} onClick={this.onClick}>
				<div className={styles.content} ref='content'>
					<span className={styles.text} ref='text'>
						{this.props.children}
					</span>
				</div>
			</Link>
		);
	}
}
