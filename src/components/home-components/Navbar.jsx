import React from 'react';

function Navbar() {
	return (
		<nav>
			<div className="brand">
				<img src="/images/logo.svg" alt="Logo" className="brandLogo" />
				<p className="brandName">srv</p>
			</div>

			<div className="navLinks">
				<a href="#home">Home</a>
				<a href="#sample" className="midLink">Sample</a>
				<a href="#contact">Contact</a>
			</div>

			<div className="navLinkIcons">
				<i className="fa-solid fa-bars" />
				<i className="fa-solid fa-xmark" />
			</div>
		</nav>
	);
}

export default Navbar;
