'use strict'

var express = require ('express');
var userController = require ('../controllers/userController')

var api = express.Router();


api.post('/user', userController.insertUser);
api.get('/user/:id', userController.getUser);
api.delete('/user/:id', userController.deleteUser);

module.exports = api;
