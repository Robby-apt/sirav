import React from 'react';

function Rating() {
	function handleRating(event) {
		event.target.classList.toggle(`fa-regular`);
		event.target.classList.toggle(`fa-solid`);
	}

	return (
		<div className="rating">
			<i className="fa-regular fa-star" onClick={handleRating} />
			<i className="fa-regular fa-star" onClick={handleRating} />
			<i className="fa-regular fa-star" onClick={handleRating} />
			<i className="fa-regular fa-star" onClick={handleRating} />
			<i className="fa-regular fa-star" onClick={handleRating} />
		</div>
	);
}

export default Rating;
