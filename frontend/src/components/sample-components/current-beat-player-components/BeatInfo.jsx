import React from 'react';
// import Rating from '../Rating';

function BeatInfo(props) {
	return (
		<div className="beatInfo">
			<p className="beatName">{props.playingBeat.title}</p>
			{/* <Rating /> */}
		</div>
	);
}

export default BeatInfo;
