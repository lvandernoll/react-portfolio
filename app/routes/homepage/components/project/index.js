import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './project.scss';

export default class Project extends Component {
	render () {
		return (
			<article className={styles.project}>
				<img className={styles.projectImage} src={this.props.img} />
				<Link to='/projects'><h3 className={styles.projectTitle}>{this.props.title}</h3></Link>
			</article>
		);
	}
}
