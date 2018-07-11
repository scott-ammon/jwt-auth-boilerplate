require('dotenv').config();
const express = require('express');
const bp = require('body-parser');
const mongoose = require('mongoose');
const expressJWT = require('express-jwt');
const auth = require('./routes/auth');

const app = express();

// Need this line to accept POST data from axios route
app.use(bp.json());
app.use(bp.urlencoded({extended: false}));
app.use(express.static(__dirname + '/client/build'));
app.use('/auth', auth);

mongoose.connect('mongodb://localhost/jwtAuth');

let port = process.env.PORT || 3001;

let server = app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
});


module.exports = server;

