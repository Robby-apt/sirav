import React, { useState } from 'react';

function ContactForm() {
	const [contactInfo, setContactInfo] = useState({
		name: ``,
		email: ``,
		message: ``,
	});

	function handleChange(event) {
		const { name, value } = event.target;

		setContactInfo((prev) => {
			return { ...prev, [name]: value };
		});
	}

	async function handleSubmit(event) {
		event.preventDefault();
		let dataBody = JSON.stringify(contactInfo);

		try {
            const url = `http://localhost/3001`;
			let res = await fetch(url, {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: dataBody,
			});
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<div className="contactForm">
			<form id="contactForm" onSubmit={handleSubmit}>
				<div className="inputSection">
					<label htmlFor="name">Name:</label>
					<input
						name="name"
						type="text"
						id="name"
						value={contactInfo.name}
						onChange={handleChange}
					/>
				</div>

				<div className="inputSection">
					<label htmlFor="email">Email:</label>
					<input
						name="email"
						type="email"
						id="email"
						value={contactInfo.email}
						onChange={handleChange}
					/>
				</div>

				<div className="inputSection">
					<label htmlFor="message">Message:</label>
					<textarea
						name="message"
						id="message"
						cols="30"
						rows="10"
						value={contactInfo.message}
						onChange={handleChange}
					/>
				</div>

				<button type="submit">Send Message</button>
			</form>
		</div>
	);
}

export default ContactForm;
