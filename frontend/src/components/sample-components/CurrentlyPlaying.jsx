import React, { useState, useRef, useEffect } from 'react';
import BeatInfo from './current-beat-player-components/BeatInfo';
import CustomControls from './current-beat-player-components/CustomControls';
import BeatAudio from './current-beat-player-components/BeatAudio';
import BeatTimeAndProgress from './current-beat-player-components/BeatTimeAndProgress';
import playingBeatFunctions from '../../playingBeatFunctions';

function CurrentlyPlaying(props) {
	const playingBeat = props.beats.filter((beat) => {
		return beat.playing === true;
	})[0];

	// audio controls functions
	const { rewindBeat, pauseBeat, playBeat, forwardBeat, stopBeat } =
		playingBeatFunctions;

	// ref for audio tag
	const musicPlaying = useRef();

	// ref for custom progress bar
	const progressBar = useRef();

	// ref for animation on progress bar
	const animationRef = useRef();

	// console.log(musicPlaying.current.duration);

	// state variables for current time and duration
	const [beatDuration, setBeatDuration] = useState(0);
	const [beatCurrentTime, setBeatCurrentTime] = useState(0);

	// state variable for player volume
	const [playerVolume, setPlayerVolume] = useState(100);

	useEffect(
		() => {
			const durationSeconds = Math.ceil(musicPlaying.current.duration);
			// console.log(durationSeconds);
			setBeatDuration(durationSeconds);
			progressBar.current.max = durationSeconds;

			progressBar.current.style.setProperty(
				`--seek-before-width`,
				`${(progressBar.current.value / beatDuration) * 100}%`
			);

			setBeatCurrentTime(progressBar.current.value);
		},[beatDuration]
		// ,[
		// 	musicPlaying?.current?.loadedmetadata,
		// 	musicPlaying?.current?.readyState,
		// ]
	);

	// config of progress bar animation

	const changePlayerCurrentTime = () => {
		progressBar.current.style.setProperty(
			`--seek-before-width`,
			`${(progressBar.current.value / beatDuration) * 100}%`
		);
		setBeatCurrentTime(progressBar.current.value);
	};

	const changeRange = () => {
		musicPlaying.current.currentTime = progressBar.current.value;
		changePlayerCurrentTime();
	};

	const whilePlaying = () => {
		progressBar.current.value = musicPlaying.current.currentTime;
		changePlayerCurrentTime();
		animationRef.current = requestAnimationFrame(whilePlaying);
	};

	props.isPlaying
		? (animationRef.current = requestAnimationFrame(whilePlaying))
		: cancelAnimationFrame(animationRef.current);

	return (
		<div className="currentlyPlaying">
			<p className="sectionTitle">Now playing {`>`}</p>
			<div
				className="mediaSection"
				style={{ backgroundImage: `url(${playingBeat.cover})` }}
			>
				<div className="mediaOverlay">
					<div className="beatInfoAndControls">
						<BeatInfo playingBeat={playingBeat} />
						<div className="beatControls">
							<BeatAudio
								playingBeat={playingBeat}
								musicPlaying={musicPlaying}
								setBeatDuration={setBeatDuration}
							/>
							<BeatTimeAndProgress
								musicPlaying={musicPlaying}
								progressBar={progressBar}
								beatDuration={beatDuration}
								beatCurrentTime={beatCurrentTime}
								changeRange={changeRange}
							/>
							<CustomControls
								isPlaying={props.isPlaying}
								setPlaying={props.setPlaying}
								playerVolume={playerVolume}
								setPlayerVolume={setPlayerVolume}
                                musicPlaying={musicPlaying}
								rewindBeat={() =>
									rewindBeat(musicPlaying.current)
								}
								pauseBeat={() =>
									pauseBeat(musicPlaying.current)
								}
								playBeat={() => playBeat(musicPlaying.current)}
								forwardBeat={() =>
									forwardBeat(musicPlaying.current)
								}
								stopBeat={() => stopBeat(musicPlaying.current)}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CurrentlyPlaying;
