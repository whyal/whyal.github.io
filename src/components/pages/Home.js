import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import Projects from "./Projects";

function Home() {
	return (
		<>
			<HeroSection id='hero-container' />
			<Projects id='projects' />
			<Footer />
		</>
	);
}

export default Home;
