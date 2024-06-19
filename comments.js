// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Use public directory for static files
app.use(express.static('public'));

// Use body-parser for POST request
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
