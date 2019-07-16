import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Page from '../Page';
import image from '../../images/DSC02681.jpg';
import styles from './homepage.scss';

export default class Homepage extends Component {
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
				<div className={styles.right}>
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
					</section>
				</div>
			</Page>
		);
	}
}
