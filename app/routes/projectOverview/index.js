import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Project from '../../components/project';
import Page from '../Page';
import image from '../../images/DSC02681.jpg';
import styles from './projectOverview.scss';

export default class ProjectOverview extends Component {
	render () {
		return (
			<Page>
				<div className={styles.navigation}>
					<button className={styles.button}>{'<-'}</button> {/*Make component*/}
					<h2 className={styles.header}>Projects overview</h2>
					<div className={styles.projects}>
						<Project className={styles.project} title={'An incredibly short project title'} img={image} id={1}/>
						<Project className={styles.project} title={'An incredibly short project title'} img={image} id={1}/>
						<Project className={styles.project} title={'An incredibly short project title'} img={image} id={1}/>
						<Project className={styles.project} title={'An incredibly short project title'} img={image} id={1}/>
					</div>
				</div>
			</Page>
		);
	}
}
