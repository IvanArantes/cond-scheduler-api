const mongoose  = require('mongoose');

const scheduleSchema = mongoose.Schema({
    date: Date,
    name: String,
    responsable: String,
    phone: String,
    password: String
}, {collection: 'schedules'});


module.exports = mongoose.model('Schedule', scheduleSchema);
