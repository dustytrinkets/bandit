'use strict'

var express = require ('express');
var userController = require ('../controllers/userController')
var bandController = require ('../controllers/bandController')

var api = express.Router();



api.post('/user', userController.insertUser);
api.post('/band', bandController.insertBand);

module.exports = api;