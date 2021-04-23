import React from "react";
import Project from "../Project";
import "./Projects.css";
import ScrollAnimation from "react-animate-on-scroll";

function Projects() {
	return (
		<div className='projects'>
			<h1 className='projects-header'>My Projects!</h1>
			<div className='projects-container'>
				<div className='projects-wrapper'>
					<ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
						<ul className='projects-items'>
							<Project
								src='images/hannah-cloris.png'
								text='Cyber-Security PRO'
								label='.NET Core based Learning Platform'
							/>
							<Project src='images/TravelApp.png' text='Travel' label='Swift based Travel App' />
							<Project
								src='images/ddengue.jpeg'
								text='DDengue'
								label='Java based Dengue Awareness App'
							/>
						</ul>
					</ScrollAnimation>
					<ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
						<ul className='projects-items'>
							<Project
								src='images/FocusLah.jpg'
								text='FocusLAH'
								label='Java based Productivity App'
							/>
							<Project
								src='images/bingoApp.png'
								text='Bingo App'
								label='C# based Food Ordering App'
							/>
						</ul>
					</ScrollAnimation>
				</div>
			</div>
		</div>
	);
}

export default Projects;
