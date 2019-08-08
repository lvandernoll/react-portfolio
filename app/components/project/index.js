import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './project.scss';

export default class Project extends Component {
	onClick = () => {
		this.refs.project.classList.add(styles.projectClicked);
	}

	render () {
		return (
			<Link to={`/projects/${this.props.id}`} onClick={this.onClick} className={`${styles.project} ${this.props.className}`} ref='project'>
				<img className={styles.projectImage} src={this.props.img} />
				<h3 className={styles.projectTitle}>{this.props.title}</h3>
			</Link>
		);
	}
}
