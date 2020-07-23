const mongoose = require('mongoose');
const databaseConfig = require('./databaseConfig');
mongoose.Promise = global.Promise; //????

const db = {};
db.mongoose = mongoose;
db.url = databaseConfig.DBURL;

//defining models
db.schedules = require('../models/schedule.model');

module.exports = db;