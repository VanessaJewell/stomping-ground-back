'use strict'

const Sequelize = require('sequelize');
const mysql2 = require('mysql2');
const bodyparser = require('body-parser');
const express = require('express');

const Event = require('../models/events.js');

const addEvents = require('./endpoints/addEvents');
const allEvents = require('./endpoints/allEvents');
const removeEvents = require('./endpoints/deleteEvents');
const updateEvents = require('./endpoints/updateEvents');

let app = express();

app.use(bodyparser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE, PATCH");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/addEvents', addEvents);
app.use('/allEvents', allEvents);
app.use('/deleteEvents', removeEvents);
app.use('/updateEvents', updateEvents);

module.exports = app;
