import React from 'react';

function ContactForm() {
	return (
		<div className="contactForm">
			<form action="">
				<div className="inputSection">
					<label htmlFor="name">Name:</label>
					<input type="text" id="name" />
				</div>

				<div className="inputSection">
					<label htmlFor="email">Email:</label>
					<input type="email" id="email" />
				</div>

				<div className="inputSection">
					<label htmlFor="message">Message:</label>
					<textarea
						name="message"
						id="message"
						cols="30"
						rows="10"
					></textarea>
				</div>

				<button>Send Message</button>
			</form>
		</div>
	);
}

export default ContactForm;
