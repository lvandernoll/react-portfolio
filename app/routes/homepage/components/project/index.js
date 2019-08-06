import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './project.scss';

export default class Project extends Component {
	render () {
		return (
			<Link to={`/projects/${this.props.id}`}>
				<article className={styles.project}>
					<img className={styles.projectImage} src={this.props.img} />
					<h3 className={styles.projectTitle}>{this.props.title}</h3>
				</article>
			</Link>
		);
	}
}
