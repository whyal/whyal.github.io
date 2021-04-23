import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { Button } from "./Button";

function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	const navSticky = () => {
		var nav = document.querySelector(".navbar");
		nav.classList.toggle("sticky", window.scrollY > 0);
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener("resize", showButton);
	window.addEventListener("scroll", navSticky);

	return (
		<>
			<nav className='navbar'>
				<Link
					className='navbar-logo'
					activeClass='active'
					to='hero-container'
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}>
					TYL
				</Link>
				<div className='menu-icon' onClick={handleClick}>
					<i className={click ? "fas fa-times" : "fas fa-bars"} />
				</div>
				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li className='nav-item'>
						<Link
							to='hero-container'
							className='nav-links'
							activeClass='active'
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							onClick={closeMobileMenu}>
							About
						</Link>
					</li>
					<li className='nav-item'>
						<Link
							to='projects'
							className='nav-links'
							activeClass='active'
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							onClick={closeMobileMenu}>
							Projects
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Navbar;
