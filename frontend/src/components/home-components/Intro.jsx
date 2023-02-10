import React from 'react';

function Intro(props) {
	return (
		<div
			className="intro"
			onClick={() => {
				props.handleNavClick();
			}}
		>
			<p className="sublime firstSublime">PAY THE PIPER</p>

			<div className="about">
				<p className="name">SIRAV BEATS</p>
				<p className="service">Music Producer</p>
				<a href="#sample" className="callToAction">
					Listen to some samples
				</a>
			</div>

			<p className="sublime secondSublime">CALL THE TUNE</p>
		</div>
	);
}

export default Intro;
