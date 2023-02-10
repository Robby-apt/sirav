import React from 'react';
import BeatItem from './BeatItem';

function OtherBeats(props) {
	const otherBeats = props.beats.filter((beat) => {
		return beat.playing === false;
	});

	return (
		<div className="otherBeats">
			<p className="sectionTitle">Other beats {`>`}</p>
			<div className="beatList">
				{otherBeats.map((beat, index) => {
					return <BeatItem key={index} beat={beat} setPlaying={props.setPlaying}/>;
				})}
			</div>
		</div>
	);
}

export default OtherBeats;
