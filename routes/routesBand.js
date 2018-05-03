'use strict'

var express = require ('express');
var md_auth = require('../middleware/auth') 
var bandController = require ('../controllers/bandController')
var md_auth = require('../middleware/auth') 
var api = express.Router();

var multiparty = require('connect-multiparty')
var md_upload = multiparty({ uploadDir: './uploads/users' }) 



api.post('/band', bandController.insertBand);
api.get('/band/:id', [md_auth.ensureAuth], bandController.getBand);
api.get('/band', [md_auth.ensureAuth], bandController.getBands);
api.put('/band/:id' , [md_auth.ensureAuth], bandController.updateBand)
api.delete('/band/:id' , [md_auth.ensureAuth], bandController.deleteBand)
api.post('/bandimage/:id', [md_auth.ensureAuth], bandController.insertImage )
// api.post('/bandlogin', bandController.login )


module.exports = api;
