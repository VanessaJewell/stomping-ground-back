'use strict'

const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'neighborhood',
  username: 'root',
  password: 'Whiteboy1',
  dialect: 'mysql'
});

module.exports = sequelize;
