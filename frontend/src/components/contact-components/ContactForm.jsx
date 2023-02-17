import React, { useState, useRef } from 'react';
const validator = require('email-validator');

function ContactForm() {
	const [contactInfo, setContactInfo] = useState({
		name: ``,
		email: ``,
		subject: ``,
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

		if (validator.validate(contactInfo.email)) {
			let dataBody = JSON.stringify(contactInfo);

			try {
				const url = `http://localhost:3001`;
				let res = await fetch(url, {
					method: 'POST',
					headers: { 'content-type': 'application/json' },
					body: dataBody,
				});
				// get status code
				if (res.status == 200) {
					alert(`The message has been sent successfully`);
					setContactInfo({
						name: ``,
						email: ``,
						subject: ``,
						message: ``,
					});
                    console.log(contactInfo);
				} else {
					alert(
						`Sorry, something went wrong when sending the message`
					);
				}
			} catch (err) {
				console.log(err);
			}
		} else {
			alert(`Kindly enter a valid email`);
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
						minlength="2"
						required
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
						required
					/>
				</div>

				<div className="inputSection">
					<label htmlFor="subject">Subject:</label>
					<input
						name="subject"
						type="text"
						id="subject"
						value={contactInfo.subject}
						onChange={handleChange}
						minlength="5"
						required
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
						minlength="5"
						required
					/>
				</div>

				<button type="submit">Send Message</button>
			</form>
		</div>
	);
}

export default ContactForm;
