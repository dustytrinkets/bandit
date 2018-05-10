'use strict'

var express = require ('express');
var userController = require ('../controllers/userController')
var md_auth = require('../middleware/auth') 
var api = express.Router() 

var multiparty = require('connect-multiparty') 
var md_upload = multiparty({uploadDir: './uploads/users'}) 



api.post('/user', userController.insertUser);
api.get('/user/:id', [md_auth.ensureAuth], userController.getUser);
api.get('/user',[md_auth.ensureAuth], userController.getUsers);
api.put('/user/:id', [md_auth.ensureAuth], userController.updateUser);
api.put('/user/style/:id', [md_auth.ensureAuth], userController.addStyle);
api.put('/userband/:id', [md_auth.ensureAuth], userController.addUserband);
api.delete('/user/:id', [md_auth.ensureAuth], userController.deleteUser);
api.post('/user/insertImage/:id', [md_auth.ensureAuth, md_upload], userController.insertImage); //el segundo parametro es un middleware
api.post('/user/login', userController.login);

module.exports = api;
