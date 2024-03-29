import React from 'react';

function SocialIcon(props) {
	return (
		<div className="socialIcon">
			<a href={props.socialLink} target="_blank" rel="noreferrer">
				<i className={props.icon} />
			</a>
			<a>{props.userName}</a>
		</div>
	);
}

export default SocialIcon;
