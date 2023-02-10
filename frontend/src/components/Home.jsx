import React, { useState } from 'react';
import Navbar from './home-components/Navbar';
import Intro from './home-components/Intro';

function Home() {
	const [isNavShowing, setNavShowing] = useState(false);

	function handleNavClick() {
		isNavShowing && setNavShowing(false);
	}

	return (
		<div id="home" className="section">
			<div className="overlay">
				<Navbar
					isNavShowing={isNavShowing}
					setNavShowing={setNavShowing}
				/>
				<Intro handleNavClick={handleNavClick} />
			</div>
		</div>
	);
}

export default Home;
