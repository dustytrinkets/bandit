'use strict'

var User = require('../models/userModel');
var moment = require ('moment');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('../services/jwt');


function insertUser (req,res) {
	var user = new User();
	console.log(req.body)

	var params = req.body;
	user.name = params.name;
	user.email = params.email;
	user.password = params.password;
	user.age = params.age;
	user.url = params.url;
	user.about = params.about;
	user.bands = params.bands;
	user.style = params.style;
	user.instrument = params.instrument;
	user.location = [params.lat, params.long];
	user.date = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

	user.save(function(err,resp){
		if(err){
			res.status(500).send({message: "Error saving user data"});
		}
		else{
			res.status(200).send({message:resp});
		}
	})
}


function getUser (req,res) {
    var id = req.params.id;

	User.findById(id, function(err,resp){
		if(err){
			res.status(500).send({message: "Error getting user data"});
		}
		else{
			if(!resp){
                res.status(400).send({message: "No user with that id"})
            }else{
                res.status(200).send({data:resp})
            }

		}
	})
}

function getUsers (req,res) {
	User.find({}, (err,resp)=>{
		if (err){
			res.status(500).send({message: "Error getting users data"});
		}
		else{
			if (!resp){
                res.status(400).send({message: "No users found"})
			} 
			else{
				res.status(200).send({data:resp})
			}
		}
	})
}



function updateUser (req,res){ //metodo put
    var id = req.params.id

    var userObj = req.body;

    User.findByIdAndUpdate(id, userObj, function (err,result) {
        if (err) {
            res.status(500).send({ 'message': err.message })
        } else {
            res.status(200).send(result)
        }
    })    
}

//permisos borrar solo usuario propio? o si eres admin
function deleteUser(req,res) {
    var id = req.params.id

    User.deleteOne({"_id":id}, function (err,result) {
        if (err) {
            res.status(500).send({ 'message': err.message })
        } else {
            res.status(200).send(result)
        }
    })
}

//inseruserinband

function insertImage(req, res){
    var imagePath = req.files.image.path;
    var userId = req.params.id;
    User.findOneAndUpdate({_id:userId}, {image:imagePath}, function (err, user){
        res.status(200).send(imagePath);
    });
}

function login(req, res){ //registro por nombre o email
   
    var login = req.body.login;
	var password = req.body.password;
	
    User.findOne({$or: [{email:login},{name:login}]}, function(err, user){
        bcrypt.compare(password, user.password, function(err, check){
            if (check){
                res.status(200).send(jwt.createToken(user))
            }else{
                res.status(400).send("Usuario no logeado")
            }
        });
    });
}

module.exports = {
	insertUser, 
	getUser, 
	getUsers, 
	updateUser,
	deleteUser,
	insertImage, 
	login
}
