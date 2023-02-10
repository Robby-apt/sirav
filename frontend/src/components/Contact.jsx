import React from 'react';
import SocialMedia from './contact-components/SocialMedia';
import ContactForm from './contact-components/ContactForm';
import Footer from './contact-components/Footer';

function Contact() {
	return (
		<div id="contact" className="section">
			<p className="prompt">
				Do you enjoy what you hear and want your own beat?
				<br />
				Contact me so we can work together
			</p>

			<div className="contactInfo">
				<div className="contactOverlay">
					<SocialMedia />
					<ContactForm />
				</div>
			</div>

			<p className="conclusion">Remember, music is food for the soul</p>

			<Footer />
		</div>
	);
}

export default Contact;
