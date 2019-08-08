import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Project from '../../components/project';
import Icon from '../../components/icon';
import Page from '../Page';
import image from '../../images/DSC02681.jpg';
import styles from './projectOverview.scss';

export default class ProjectOverview extends Component {
	render () {
		return (
			<Page>
				<div className={styles.wrapper}>
					<Icon className={styles.button} icon={'arrow-left'} />
					<h2 className={styles.header}>Projects overview</h2>
					<div className={styles.projects}>
						<Project id='transformRight' className={styles.project} title={'An incredibly short project title'} img={image} index={1}/>
						<Project id='transformLeft' className={styles.project} title={'An incredibly short project title'} img={image} index={2}/>
						<Project id='transformRight' className={styles.project} title={'An incredibly short project title'} img={image} index={3}/>
						<Project id='transformLeft' className={styles.project} title={'An incredibly short project title'} img={image} index={4}/>
					</div>
				</div>
			</Page>
		);
	}
}
