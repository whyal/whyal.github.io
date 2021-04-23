import React from "react";
import { Link } from "react-router-dom";

function Project(props) {
	return (
		<>
			<li className='project'>
				<Link className='project-link'>
					<figure className='project-pic-wrapper' data-category={props.label}>
						<img className='project-pic' alt='Project Pic' src={props.src} />
					</figure>
					<div className='project-info'>
						<h5 className='project-text'>{props.text}</h5>
					</div>
				</Link>
			</li>
		</>
	);
}

export default Project;
