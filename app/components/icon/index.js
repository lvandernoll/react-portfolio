import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './icon.scss';

export default class Icon extends Component {
	onClick = e => {
		e.currentTarget.classList.add(styles.iconClicked);
	}

	render () {
		return (
			<Link to={this.props.to} onClick={e => {this.onClick(e)}}
				className={`${styles.iconWrapper} ${this.props.black ? styles.iconWrapperBlack : ''} ${this.props.className}`}>
				<FontAwesomeIcon icon={this.props.icon} className={`${styles.icon} ${this.props.black ? styles.iconBlack : ''}`}/>
			</Link>
		);
	}
}
