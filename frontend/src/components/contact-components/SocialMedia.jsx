import React from 'react';
import SocialIcon from './SocialIcon';
import mediaLinks from '../../mediaLinks';

function SocialMedia() {
	return (
		<div className="socialMedia">
			{mediaLinks.map((mediaLink) => {
				return (
					<SocialIcon
						key={mediaLink.id}
						icon={mediaLink.icon}
						socialLink={mediaLink.socialLink}
						userName={mediaLink.userName}
					/>
				);
			})}
		</div>
	);
}

export default SocialMedia;
