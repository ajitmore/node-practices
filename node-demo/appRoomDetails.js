const http = require('http');
const roomDetails = require('./room-details.json');
const rateDetails = require('./rate-details.json');
const audusdexchangeDetails = require('./AUD-USD-exchangeDetails.json');
const usdaudexchangeDetails = require('./USD-AUD-exchangeDetails.json');
const errRoomDetails = require('./room-error.json');
const express = require('express');
const cors = require('cors');

const app = exports.module = express();

app.use(cors());

app.get('/api/roomDetails', function(req, res) {
  res.write(JSON.stringify(roomDetails));
  res.end();
});

app.get('/api/rateDetails', function(req, res) {
  res.write(JSON.stringify(rateDetails));
  res.end();
});

app.get('/api/exchageRate/:fromCur', function(req, res) {
  if(req.params["fromCur"] == 'AUD') {
    res.write(JSON.stringify(audusdexchangeDetails));
  } else {
    res.write(JSON.stringify(usdaudexchangeDetails));
  }
  res.end();
});

app.get('/api/errRoomDetails', function(req, res) {
  res.write(JSON.stringify(errRoomDetails));
  res.end();
});

app.listen(1337, function() {
  console.log('App is running on 1337');
})
