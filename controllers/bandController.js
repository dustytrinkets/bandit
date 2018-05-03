'use strict'

var Band = require('../models/bandModel');
var moment = require ('moment');


function insertBand (req,res) {

	var band = new Band();

	var params = req.body;
	console.log(params)
	band.name = params.name;
	band.instrument = params.instrument;
	band.style = params.style;
	band.location = params.location;
	band.members = params.members;
	band.date = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

		console.log(band)

	band.save(function(err,resp){
		if(err){
			res.status(500).send({message: "Error saving band data"});
		}
		else{
			res.status(200).send({data:resp});
		}
	})
}

function getBand (req,res) {
    var id = req.params.id;

	Band.findById(id, function(err,resp){
		if(err){
			res.status(500).send({message: "Error getting user data"});
		}
		else{
			if(!resp){
                res.status(400).send({message: "No band with that id"})
            }else{
                res.status(200).send({data:resp})
            }

		}
	})
}

function getBands (req,res) {
	Band.find({}, (err,resp)=>{
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

//getbandusers


function updateBand (req,res){ //metodo put
    var id = req.params.id

    var bandObj = req.body;

    Band.findByIdAndUpdate(id, bandObj, function (err,result) {
        if (err) {
            res.status(500).send({ 'message': err.message })
        } else {
            res.status(200).send(result)
        }
    })    
}

//permisos borrar solo usuario propio? o si eres admin
function deleteBand(req,res) {
    var id = req.params.id

    Band.deleteOne({"_id":id}, function (err,result) {
        if (err) {
            res.status(500).send({ 'message': err.message })
        } else {
            res.status(200).send(result)
        }
    })
}

function insertImage(req, res){
    var imagePath = req.files.image.path;
    var bandId = req.params.id;
    Band.findOneAndUpdate({_id:bandId}, {image:imagePath}, function (err, user){
        res.status(200).send(imagePath);
    });
}

// ¿es necesaria una funcion igual para cada uno?


module.exports = {
	insertBand,
	getBand,
	getBands,
	updateBand,
	deleteBand,
	insertImage
}