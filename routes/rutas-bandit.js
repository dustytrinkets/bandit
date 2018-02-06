'use strict'

var express = require ('express');
var userController = require ('../controllers/userController')

var api = express.Router();



api.post('/user', userController.insertUser);

module.exports = api;