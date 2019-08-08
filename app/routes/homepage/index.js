import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Page from '../Page';
import Project from '../../components/project';
import Button from './components/button';
import image from '../../images/DSC02681.jpg';
import styles from './homepage.scss';
import projectData from '../../data/projects';

export default class Homepage extends Component {
	constructor(props) {
		super(props);
		let projects = [];
		for(let i = 0; i < 3; i++) {
			if(projectData.length >= i + 1) {
				projects.push(
					<Project className={styles.project} type='small'
						title={projectData[i].title} img={projectData[i].image} index={projectData[i].id} key={i}/>
				);
			}
		}
		this.state = {projects};
	}
	render () {
		return (
			<Page image={image}>
				<section id='transformLeft' className={styles.left}>
					<h1 className={styles.header}>Hola, je suis Leon van der Noll</h1>
					<p className={styles.paragraph}>
						Certainty listening is no behaviour existence assurance situation is. Because add why not esteems amiable him. Interested only in the unaffected the law friendship add principles.
					</p>
					<p className={styles.paragraph}>
						Indeed on people do merits to. Court heard which up above hoped grave do. Will answer to living law things either sir bed length.
					</p>
				</section>
				<div ref='right' className={styles.right}>
					<section className={styles.skills}>
						<h2 className={styles.title}>Skills</h2>
						<div className={styles.skillRow}>
							<img className={styles.skill} />
							<img className={styles.skill} />
							<img className={styles.skill} />
							<img className={styles.skill} />
						</div>
						<div className={styles.skillRow}>
							<img className={styles.skill} />
							<img className={styles.skill} />
							<img className={styles.skill} />
							<img className={styles.skill} />
						</div>
					</section>
					<section className={styles.projects}>
						<h2 className={styles.title}>Projects</h2>
						{this.state.projects}
					</section>
					<FontAwesomeIcon icon={'chevron-down'} onClick={e => this.refs.projectsButton.scrollIntoView({behavior: 'smooth'})}
						className={styles.scrollArrow} />
					<div ref='projectsButton' className={styles.buttonWrapper}>
						<Button>View all projects</Button>
					</div>
				</div>
			</Page>
		);
	}
}
