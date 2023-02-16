require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3001;

// express app dependancies
const appUsage = [
	bodyParser.urlencoded({ extended: true }),
	bodyParser.json(),
	cors(),
];

app.use(appUsage);

// nodemailer config
const transporter = nodemailer.createTransport({
	service: 'gmail',
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: process.env.SENDER,
		pass: process.env.PASSWORD,
	},
});

app.post('/', (req, res) => {
	const { name, email, subject, message } = req.body;
	console.log(req.body);
	const mailOptions = {
		from: process.env.SENDER,
		to: process.env.RECEIVER,
		subject: subject,
		html: `<h1>${name}</h1>
        <h2>${email}</h2>
        <p>${message}</p>`,
	};

	transporter.sendMail(mailOptions, (err, info) => {
		let output = err || info.response;
		console.log(output);
	});
});

app.listen(port, () => {
	console.log(`Hello from port ${port}`);
});
