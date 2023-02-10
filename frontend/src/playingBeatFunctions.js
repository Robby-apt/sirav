const playingBeatFunctions = {
	rewindBeat: function (music) {
		music.currentTime = music.currentTime - 5;
	},
	pauseBeat: function (music) {
		music.pause();
	},
	playBeat: function (music) {
		music.play();
	},
	forwardBeat: function (music) {
		music.currentTime = music.currentTime + 5;
	},
	stopBeat: function (music) {
		music.pause();
		music.currentTime = 0;
	},
};

export default playingBeatFunctions;
