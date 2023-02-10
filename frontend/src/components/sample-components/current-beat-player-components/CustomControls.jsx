import React from 'react';

function CustomControls(props) {
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

			<i className="fa-regular fa-circle-stop" />
		</div>
	);
}

export default CustomControls;
