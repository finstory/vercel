const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// const routes = require('./routes/index.js');
// const decryptToken = require('../helpers/decryptToken.js');

// require('./db.js');

const server = express();
const cors = require('cors');
server.use(cors());

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '1000mb' }));
server.use(bodyParser.json({ limit: '1000mb' }));
server.use(cookieParser());
// *DEBUG
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, PATCH, POST, OPTIONS, PUT, DELETE');
  next();
});



// const { ACCESS_TOKEN } = process.env;

// server.use((req, res, next) => {

//   const authHeader = req.headers['authorization'];
//   const tokenEncrypted = authHeader && authHeader.split(' ')[1];
//   const token = decryptToken(tokenEncrypted);
//   if (!token) {
//     return res.status(401).json({ message: 'Token missing' });
//   }
//   try {
//     if (token !== ACCESS_TOKEN) throw new Error("");
//     next();
//   } catch (error) {
//     return res.status(403).json({ message: 'Invalid token' });
//   }
// });


// server.use('/', routes);

// Error catching endware.
// server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
//   const status = err.status || 500;
//   const message = err.message || err;
//   console.error(err);
//   res.status(status).send(message);
// });

// const { testAttack } = require('./steam/offerSteamService.js');

// testAttack();


server.get('/test', (req, res) => {
  res.send("222it´s working...");
});

module.exports = server;
