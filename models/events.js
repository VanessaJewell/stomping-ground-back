'use strict'

const Sequelize = require('sequelize');
const sequelize = require('../db/connection.js');

const Event = sequelize.define('events', {
  id: {
    type: Sequelize.BIGINT(11),
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  date: {
    type: Sequelize.STRING(15),
    allowNull: false
  },
  heading: {
    type: Sequelize.STRING(45),
    allowNull: false
  },
  content: {
    type: Sequelize.STRING(2500),
    allowNull: false
  },
  uid: {
    type: Sequelize.STRING(45),
    allowNull: false
  },
  userDisplayName: {
    type: Sequelize.STRING(45),
    allowNull: false
  },
  time: {
    type: Sequelize.BIGINT(),
    allowNull: false
  }
}, {
  timestamps: false,
  freezeTableName: true
});

module.exports = Event;
