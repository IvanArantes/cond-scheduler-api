var schedule = require('../models/schedule.model');
var crypto = require("crypto");

function save(item) {
    item.password = crypto.randomBytes(3).toString('hex');
    console.log(item);
    return schedule.create(item);
}

function findAll() {
    return schedule.find();
}

module.exports.save = save;
module.exports.findAll = findAll;
