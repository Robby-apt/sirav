import React, { useState, useEffect } from 'react';

function CustomControls(props) {
	const [previousVolume, setPreviousVolume] = useState();

	const handleVolumeChange = (e) => {
		const { value } = e.target;
		props.setPlayerVolume(value);
		props.musicPlaying.current.volume = value / 100;
	};

	useEffect(() => {
		props.volumeBarRef.current.style.setProperty(
			`--seek-before-width`,
			`${props.volumeBarRef.current.value}%`
		);
	}, [props.playerVolume]);

	return (
		<div className="customControls">
			<i
				className="fa-regular fa-circle-stop"
				onClick={() => {
					props.setPlaying(false);
					props.stopBeat();
				}}
			/>

			<div className="centreControls">
				<i
					className="fa-solid fa-backward-fast"
					onClick={() => props.rewindBeat()}
				/>
				<>
					{props.isPlaying ? (
						<i
							className="fa-regular fa-circle-pause playPause"
							onClick={() => {
								props.setPlaying(false);
								props.pauseBeat();
							}}
						/>
					) : (
						<i
							className="fa-regular fa-circle-play playPause"
							onClick={() => {
								props.setPlaying(true);
								props.playBeat();
							}}
						/>
					)}
				</>
				<i
					className="fa-solid fa-forward-fast"
					onClick={() => props.forwardBeat()}
				/>
			</div>

			<div className="volumeControl">
				{props.playerVolume == 0 ? (
					<i
						className="fa-solid fa-volume-xmark"
						onClick={() => {
							props.setPlayerVolume(previousVolume);
							props.volumeBarRef.current.value = previousVolume;
							props.musicPlaying.current.volume =
								previousVolume / 100;
						}}
					/>
				) : (
					<i
						className="fa-solid fa-volume-high"
						onClick={() => {
							setPreviousVolume(props.volumeBarRef.current.value);
							props.setPlayerVolume(0);
							props.musicPlaying.current.volume = 0;
						}}
					/>
				)}

				<input
					type="range"
					name="volume"
					id="volume"
					className="volumeBar"
					ref={props.volumeBarRef}
					value={props.playerVolume}
					onChange={handleVolumeChange}
				/>
			</div>
		</div>
	);
}

export default CustomControls;
