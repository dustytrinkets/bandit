'use strict'

var express = require ('express');
var bandController = require ('../controllers/bandController')

var api = express.Router();


api.post('/band', bandController.insertBand);


module.exports = api;
