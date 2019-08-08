import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './project.scss';

export default class Project extends Component {
	onClick = e => {
		e.currentTarget.classList.add(styles.projectClicked);
	}

	render () {
		let project;
		switch(this.props.type) {
			case 'small':
				project = (
					<Link id={this.props.id} to={`/projects/${this.props.index}`} onClick={e => {this.onClick(e)}} className={`${styles.project} ${this.props.className}`}>
						<img className={styles.projectImage} src={this.props.img} />
						<h3 className={`${styles.projectTitle} ${styles.projectTitleSmall}`}>{this.props.title}</h3>
					</Link>);
				break;
			case 'large':
				project = (
					<Link id={this.props.id} to={`/projects/${this.props.index}`} onClick={e => {this.onClick(e)}} className={`${styles.project} ${this.props.className}`}>
						<img className={styles.projectImage} src={this.props.img} />
						<div className={styles.projectInfo}>
							<h3 className={styles.projectTitle}>{this.props.title}</h3>
							<p className={styles.projectDescription}>{this.props.description}</p>
						</div>
					</Link>);
				break;
			default:
				project = (
					<div className={`${styles.projectHeader} ${this.props.className}`}>
						<img className={styles.projectImage} src={this.props.img} />
					</div>);
		}
		return project;
	}
}
