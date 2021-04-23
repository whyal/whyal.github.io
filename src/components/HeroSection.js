import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import ScrollAnimation from "react-animate-on-scroll";
import DisplayPic from "../images/myDP.jpeg";
import TypeWriter from "typewriter-effect";

function HeroSection() {
	return (
		<div className='hero-container'>
			<div className='about-wrapper'>
				<h1 className='about-title'>
					<TypeWriter
						options={{
							strings: ["Hey there!", "I am Yong Lun"],
							autoStart: true,
							loop: true,
						}}
					/>
				</h1>
				<ScrollAnimation animateIn='fadeIn' animateOnce={true}>
					<p className='about-paragraph'>
						Welcome to my Portfolio! I am born in Malaysia and currently studying in Singapore. I
						have strong passion in software development especially front-end! Continue scrolling to
						check out the projects that I have worked on, be it for school or my free time!
					</p>
				</ScrollAnimation>
			</div>
			<div className='display-photo-wrapper'>
				<div class='circular-wrapper'>
					<img src={DisplayPic} />
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
