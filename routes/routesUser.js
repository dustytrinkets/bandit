'use strict'

var express = require ('express');
var userController = require ('../controllers/userController')
var md_auth = require('../middleware/auth') 
var api = express.Router() 

var multiparty = require('connect-multiparty') 
var md_upload = multiparty({uploadDir: './uploads/users'}) 



api.post('/user', userController.insertUser);
api.get('/user/:id', [md_auth.ensureAuth], userController.getUser);
api.get('/user', [md_auth.ensureAuth], userController.getUsers);
api.put('/user/:id' , [md_auth.ensureAuth], userController.updateUser)
api.delete('/user/:id' , [md_auth.ensureAuth], userController.deleteUser)
api.post('/userimage/:id', [md_auth.ensureAuth], userController.insertImage )
api.post('/userlogin', userController.login )
module.exports = api;
