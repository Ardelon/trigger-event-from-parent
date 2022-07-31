const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config()
app.use(express.static('public'));

app.get('', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

const server = app.listen(process.env.PORT || 5000, () => {
	var port = server.address().port;
	console.log('Listening...' + port);
});
