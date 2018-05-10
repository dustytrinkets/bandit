'use strict'

var User = require('../models/userModel');
var Band = require('../models/bandModel');
var moment = require ('moment');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('../services/jwt');


function insertUser (req,res) {
	var user = new User();
	console.log(req.body)

	var params = req.body;
	user.name = params.name;
	user.email = params.email;
	user.age = params.age;
	user.url = params.url;
	user.about = params.about;
	user.style = params.style;
	user.instrument = params.instrument;
	user.location = [params.lat, params.long];
	user.date = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

	bcrypt.hash(req.body.password, null, null, function (err, hash) {
		user.password = hash
		if (err) {
			return res.status(500).send(err.message)
		}
		user.save(function (err, resp) {
			if (err) {
				return res.status(500).send(err.message)
			} else {
				return res.status(203).send({message:resp});
			}
		});
	});
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
	}).populate({ path: 'bands', select: 'name' }) 
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
				res.status(200).send({resp})
			}
		}
	}).populate({ path: 'bands' }) 
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

function addStyle(req, res) { //metodo put
	var id = req.params.id

	var userObj = req.body.style;
	console.log(userObj)

	User.findByIdAndUpdate(id, userObj, function (err, user) {
		if (err) {
			res.status(500).send({ 'message': err.message })
		} else {
			user.style.push(userObj);
			//habria que comprobar que no exista ya en el array para evitar duplicados
			user.save(function (err, resp) {
				if (err) {
					return res.status(500).send(err.message)
				} else {
					return res.status(203).send(resp);
				}
			});
		}
	})
}

function addUserband(req, res) { //metodo put
	var idUser = req.params.id

	var idBand = req.body.band
	console.log(idBand)

	User.findById(idUser, function (err, user) {
		if (err) {
			res.status(500).send({ message: "Error getting user data" });
		}
		else {
			if (!user) {
				res.status(400).send({ message: "No user with that id" })
			} else {
				Band.findById(idBand, function (err, band) {
					if (err) {
						res.status(500).send({ message: "Error getting band data" });
					}
					else {
						if (!band) {
							res.status(400).send({ message: "No band with that id" })
						} else {
							user.bands.push(band);
							//habria que comprobar que no exista ya en el array para evitar duplicados
							user.save(function (err, resp) {
								if (err) {
									return res.status(500).send(err.message)
								} else {
									return res.status(203).send(resp);
								}
							});
						}

					}
				})
			}

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
		console.log(user)
        bcrypt.compare(password, user.password, function(err, check){
            if (check){
                res.status(200).send(jwt.createToken(user))
            }else{
                res.status(400).send(err)
            }
        });
    });
}

module.exports = {
	insertUser, 
	getUser, 
	getUsers, 
	updateUser,
	addStyle,
	addUserband,
	deleteUser,
	insertImage, 
	login
}
