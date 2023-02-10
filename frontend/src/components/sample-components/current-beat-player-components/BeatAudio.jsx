import React from 'react';

function BeatAudio(props) {
	return (
		<audio
			id="beatPlaying"
			className="beatPlaying"
			src={props.playingBeat.audio}
			controls
			preload="metadata"
			ref={props.musicPlaying}
		/>
	);
}

export default BeatAudio;
