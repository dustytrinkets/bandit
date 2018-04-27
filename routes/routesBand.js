'use strict'

var express = require ('express');
var bandController = require ('../controllers/bandController')
var md_auth = require('../middleware/auth') 
var api = express.Router();

var multiparty = require('connect-multiparty')
var md_upload = multiparty({ uploadDir: './uploads/users' }) 



api.post('/band', bandController.insertBand);


module.exports = api;
