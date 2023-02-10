import React from 'react';

function Navbar(props) {
	function toggleNavShowing() {
		props.setNavShowing(!props.isNavShowing);
	}

	function handleNavClick() {
		props.isNavShowing && props.setNavShowing(false);
	}

	function hideNav() {
		props.isNavShowing &&
			setTimeout(() => {
				props.setNavShowing(false);
			}, 15000);
	}

	return (
		<nav>
			<div className="brand" onClick={handleNavClick}>
				<img src="/images/logo.svg" alt="Logo" className="brandLogo" />
				<p className="brandName">srv</p>
			</div>

			<div className="navLinks">
				<a href="#home">Home</a>
				<a href="#sample" className="midLink">
					Sample
				</a>
				<a href="#contact">Contact</a>
			</div>

			<div className="navLinkIcons">
				{props.isNavShowing ? (
					<i
						className="fa-solid fa-xmark"
						onClick={toggleNavShowing}
					/>
				) : (
					<i
						className="fa-solid fa-bars"
						onClick={toggleNavShowing}
					/>
				)}
			</div>

			{/* {(window.innerWidth >= 640) ? (props.setNavShowing(false)) : null} */}

			{props.isNavShowing ? (
				<div className="navLinksResponsive">
					<a href="#home" onClick={handleNavClick}>
						Home
					</a>
					<a
						href="#sample"
						className="midLink"
						onClick={handleNavClick}
					>
						Sample
					</a>
					<a href="#contact" onClick={handleNavClick}>
						Contact
					</a>
				</div>
			) : null}
		</nav>
	);
}

export default Navbar;
