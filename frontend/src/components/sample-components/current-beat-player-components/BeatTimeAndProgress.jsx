import React from 'react';

function BeatTimeAndProgress(props) {
	// const {
	// 	current: { currentTime, duration },
	// } = props.musicPlaying;

	// console.log(props.musicPlaying.current.duration);
	// const [progressValue, setProgressValue] = useState();

	let convertTime = (time) => {
		let mins = Math.floor(time / 60);
		if (mins < 10) {
			mins = `0${mins}`;
		}
		let secs = Math.floor(time % 60);
		if (secs < 10) {
			secs = `0${secs}`;
		}

		return `${mins}:${secs}`;
	};

	return (
		<div className="progress">
			<p>{convertTime(props.beatCurrentTime)}</p>
			<input
				type="range"
				className="progressBar"
				ref={props.progressBar}
				// defaultValue={props.beatCurrentTime}
				defaultValue={0}
				onChange={props.changeRange}
			/>
			<p>
				{props.beatDuration &&
					!isNaN(props.beatDuration) &&
					convertTime(props.beatDuration)}
			</p>
		</div>
	);
}

export default BeatTimeAndProgress;
