import React, { Component } from 'react';
import Project from '../../components/project';
import Icon from '../../components/icon';
import Page from '../Page';
import styles from './projectOverview.scss';
import projectData from '../../data/projects';

export default class ProjectOverview extends Component {
	constructor(props) {
		super(props);
		let projects = [];
		projectData.forEach((project, i) => {
			const direction = i % 2 ? 'transformLeft' : 'transformRight';
			projects.push(
				<Project id={direction} className={styles.project} type='large' title={project.title}
					description={project.description} img={project.image} index={project.id} key={i}/>
			)
		})
		this.state = {projects};
	}

	render () {
		return (
			<Page>
				<div className={styles.wrapper}>
					<Icon to='' className={styles.button} icon={'arrow-left'} />
					<h2 className={styles.header}>Projects overview</h2>
					<div className={styles.projects}>
						{this.state.projects}
					</div>
				</div>
			</Page>
		);
	}
}
