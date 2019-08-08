import React, { Component } from 'react';
import Project from '../../components/project';
import Icon from '../../components/icon';
import Page from '../Page';
import styles from './projectDetail.scss';
import projectData from '../../data/projects';

export default class ProjectDetail extends Component {
	render () {
		const project = projectData[this.props.match.params.id - 1];
		return (
			<Page>
				<Icon icon='times' className={styles.icon} />
				<Project type='header' className={styles.project} img={project.image} />
			</Page>
		);
	}
}
