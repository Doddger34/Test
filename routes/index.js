const express = require('express');
const app = express();
const Home = require('./home');


app.use('/', Home);

module.exports = app;
