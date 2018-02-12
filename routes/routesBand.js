'use strict'

var express = require ('express');
var bandController = require ('../controllers/bandController')

var api = express.Router();



api.post('/band', bandController.insertBand);
// api.get('/band/:id', bandController.getBand);

module.exports = api;