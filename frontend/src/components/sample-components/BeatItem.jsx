import React from 'react';
// import Rating from './Rating';

function BeatItem(props) {
	return (
		<div className="beatItem">
			<i className="fa-solid fa-list listIcon" />
			<img src={props.beat.cover} alt={props.beat.title} />
			<div className="beatInfo">
				<p className="beatName">{props.beat.title}</p>
				{/* <Rating /> */}
			</div>
			<i
				className="fa-regular fa-circle-play playBtn"
				onClick={() => {
					props.beat.setPlay();
                    props.setPlaying(false);
				}}
			/>
		</div>
	);
}

export default BeatItem;
