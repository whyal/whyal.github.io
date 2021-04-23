import React from "react";

const Layout = ({ title = "Title", description = "Description", className, children }) => {
	return (
		<div>
			<div className='jumbotron'>
				<h2>{title}</h2>
				<p className='lead'>{description}</p>
				<div className={className}>{children}</div>
			</div>
		</div>
	);
};

export default Layout;
