import React from 'react';

function Footer() {
	const dateTime = new Date();

	const currentYear = dateTime.getFullYear();

	return (
		<footer>
			<p>
				Designed by{` `}
				<a
					className="promoLink"
					href="https://robin-khaoya.dev"
					target="_blank"
					rel="noreferrer"
				>
					Robin
				</a>
				{`. `}
				All rights reserved &#169; {currentYear}
			</p>
		</footer>
	);
}

export default Footer;
