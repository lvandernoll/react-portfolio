import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Project from '../../components/project';
import Icon from '../../components/icon';
import Page from '../Page';
import styles from './projectDetail.scss';
import projectData from '../../data/projects';

export default class ProjectDetail extends Component {
	constructor(props) {
		super(props);
		const project = projectData[this.props.match.params.id - 1];
		const skills = [];
		project.skills.forEach((skill, i) => {
			skills.push(<FontAwesomeIcon icon={['fab', skill]} className={styles.skill} key={i} />);
		});
		this.state = {project, skills};
	}
	render () {
		const { project, skills } = this.state;
		return (
			<Page>
				<div className={styles.leftWrapper}>
					<Icon icon='times' className={styles.icon} />
					<div className={styles.infoWrapper}>
						<div className={styles.skillWrapper}>
							{skills}
						</div>
						<h2 className={styles.title}>{project.title}</h2>
						<p className={styles.description}>{project.description}</p>
					</div>
				</div>
				<Project type='header' className={styles.project} img={project.image} />
			</Page>
		);
	}
}
