'use strict'

var userModel = require('../models/userModel');
var moment = require ('moment');

function insertUser (req,res) {
	var user = new userModel();

	var params = req.body;
	console.log(params)
	user.name = params.name;
	user.age = params.age;
	user.instrument = params.instrument;
	user.style = params.style;
	user.location = params.location;
	user.date = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

		console.log(user)

	user.save(function(err,resp){
		if(err){
			res.status(500).send({message: "Error saving user data"});
		}
		else{
			res.status(200).send({data:resp});
		}
	})
}


function getUser (req,res) {
    var id = req.params.id;

	userModel.findById(id, function(err,resp){
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
	userModel.find({}, (err,resp)=>{
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

module.exports = {insertUser, getUser, getUsers}