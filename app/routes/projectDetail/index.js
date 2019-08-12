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
		const projectsAmount = projectData.length;
		const skills = [];
		project.skills.forEach((skill, i) => {
			skills.push(<FontAwesomeIcon icon={['fab', skill]} className={styles.skill} key={i} />);
		});
		this.state = {project, skills, projectsAmount};
	}

	render () {
		const { project, skills, projectsAmount } = this.state;
		return (
			<Page>
				<div className={styles.leftWrapper}>
					<Icon to='' icon='times' className={styles.icon} />
					<div className={styles.infoWrapper}>
						<div className={styles.skillWrapper}>
							{skills}
						</div>
						<h2 className={styles.title}>{project.title}</h2>
						<p className={styles.description}>{project.description}</p>
					</div>
				</div>
				<div className={styles.navigation}>
					<span className={styles.navigationText} >{`${project.id}/${projectsAmount}`}</span>
					{project.id - 1 !== 0 ? <Icon black to={`/projects/${project.id - 1}`} icon='arrow-left' className={styles.navigationArrow} /> : <div className={styles.navigationArrow} />}
					{project.id !== projectsAmount ? <Icon black to={`/projects/${project.id + 1}`} icon='arrow-right' className={styles.navigationArrow} /> : <div className={styles.navigationArrow} />}
				</div>
				<Project type='header' className={styles.project} img={project.image} />
			</Page>
		);
	}
}
