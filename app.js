require('./config/config');
require('./models/db');
require('./config/passportConfig');
require('dotenv').config()
// const socket = require('socket.io');
const passport = require('passport');


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const rtsIndex = require('./routes/index.js');
const dayliroute =require('./routes/daylicartes.js');
const cartepb =require('./routes/pbcarte');
const revuecarte=require('./routes/revuescartes');
const regles=require('./routes/regles');
const role=require('./routes/roles');
const paquet1=require('./routes/Userstories/Paquet1');
const paquet2=require('./routes/Userstories/Paquet2');
const paquet3=require('./routes/Userstories/Paquet3');





const paquet1A1=require('./routes/Userstories/Paquet1A1');
const paquet1A2=require('./routes/Userstories/Paquet1A2');
const paquet2A2=require('./routes/Userstories/Paquet2A2');
const paquet2A1=require('./routes/Userstories/Paquet2A1');

const app = express();
const http = require('http').createServer(app);
// const websocketServer = require('websocket').server;

const clients ={};

console.log(clients);
// const wsServer = new websocketServer({
//   "httpServer": http
// })
app.use(bodyParser.json());
app.use(cors({origin:'*'}));

app.use(passport.initialize());

app.use('/api', rtsIndex);
app.use('/api',dayliroute);
app.use('/api',cartepb);
app.use('/api',revuecarte);
app.use('/api',regles);
// app.use('/api',role);
app.use('/api',paquet1);
app.use('/api',paquet2);
app.use('/api',paquet3);
app.use('/api',paquet1A1);
app.use('/api',paquet1A2);
app.use('/api',paquet2A2);
app.use('/api',paquet2A1);
// error handler
// start server
http.listen(process.env.PORT, () => console.log(`Server started at http://localhost:${process.env.PORT}`));

app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        let valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    
});