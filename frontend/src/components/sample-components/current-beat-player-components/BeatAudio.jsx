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
            onLoadedMetadata={()=>{
                props.setBeatDuration(props.musicPlaying?.duration)
            }}
		/>
	);
}

export default BeatAudio;
