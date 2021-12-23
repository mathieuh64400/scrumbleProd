const mongoose = require('mongoose');
require('dotenv').config()
console.log(process.env.MONGODB_URI, typeof(process.env.MONGODB_URI));

mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (!err) { console.log('MongoDB connection with success.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});

require('./user');