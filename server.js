const express = require('express');
const app = express();
const bodyParser= require('body-parser')
const cors = require('cors'); 
const schedulesController = require('./app/controllers/schedule.controller');


app.use(cors());
app.use(bodyParser.json());

//connecting to database
const db = require('./app/config/config');
db.mongoose.connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true } )
.then(() => {
    console.log('connected to db');
}).catch((err) => {
    console.error('Error when connecting to database:' + err);
});


//defining routes
app.use('/schedules', schedulesController);


app.listen(3000, function() {
  console.log('listening on 3000')
})