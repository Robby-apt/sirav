import React, { useState } from 'react';
import CurrentlyPlaying from './sample-components/CurrentlyPlaying';
import OtherBeats from './sample-components/OtherBeats';

function Sample() {
	const [isBeatOnePlaying, setBeatOnePlaying] = useState(true);
	const [isBeatTwoPlaying, setBeatTwoPlaying] = useState(false);
	const [isBeatThreePlaying, setBeatThreePlaying] = useState(false);
	const [isBeatFourPlaying, setBeatFourPlaying] = useState(false);
	const [isBeatFivePlaying, setBeatFivePlaying] = useState(false);

	// state for currently playing play/pause btn
	const [isPlaying, setPlaying] = useState(false);

	const beats = [
		{
			cover: `/images/frank-septillion-Qrspubmx6kE-unsplash.jpg`,
			audio: `/audio/in-my-feels.mp3`,
			title: `In my feels`,
			rating: ``,
			playing: isBeatOnePlaying,
			setPlay: function () {
				setBeatOnePlaying(true);
				setBeatTwoPlaying(false);
				setBeatThreePlaying(false);
				setBeatFourPlaying(false);
				setBeatFivePlaying(false);
			},
		},
		{
			cover: `/images/annie-spratt-1YnBzhJISg4-unsplash.jpg`,
			audio: `/audio/angelike.mp3`,
			title: `Angelike (rmx)`,
			rating: ``,
			playing: isBeatTwoPlaying,
			setPlay: function () {
				setBeatOnePlaying(false);
				setBeatTwoPlaying(true);
				setBeatThreePlaying(false);
				setBeatFourPlaying(false);
				setBeatFivePlaying(false);
			},
		},
		{
			cover: `/images/richard-jacobs-8oenpCXktqQ-unsplash.jpg`,
			audio: `/audio/african-lofi.mp3`,
			title: `African Lofi`,
			rating: ``,
			playing: isBeatThreePlaying,
			setPlay: function () {
				setBeatOnePlaying(false);
				setBeatTwoPlaying(false);
				setBeatThreePlaying(true);
				setBeatFourPlaying(false);
				setBeatFivePlaying(false);
			},
		},
		{
			cover: `/images/asso-myron-uLBraHlT1Uw-unsplash.jpg`,
			audio: `/audio/sunshine-for-scale-beats.mp3`,
			title: `Sunshine for scale`,
			rating: ``,
			playing: isBeatFourPlaying,
			setPlay: function () {
				setBeatOnePlaying(false);
				setBeatTwoPlaying(false);
				setBeatThreePlaying(false);
				setBeatFourPlaying(true);
				setBeatFivePlaying(false);
			},
		},
		{
			cover: `/images/juja-han-HU-uL54pfQI-unsplash.jpg`,
			audio: `/audio/srv-lofi.mp3`,
			title: `Lofi`,
			rating: ``,
			playing: isBeatFivePlaying,
			setPlay: function () {
				setBeatOnePlaying(false);
				setBeatTwoPlaying(false);
				setBeatThreePlaying(false);
				setBeatFourPlaying(false);
				setBeatFivePlaying(true);
			},
		},
	];

	return (
		<div id="sample" className="section">
			<CurrentlyPlaying
				beats={beats}
				isPlaying={isPlaying}
				setPlaying={setPlaying}
			/>
			<OtherBeats beats={beats} setPlaying={setPlaying} />
		</div>
	);
}

export default Sample;
