require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3001;

const appUsage = [
    bodyParser.urlencoded({ extended: true }),
    bodyParser.json(),
    cors()
];

app.use(appUsage);

app.post('/', (req, res) => {
    console.log(req.body);
});

app.listen(port, () => {
	console.log(`Hello from port ${port}`);
});
