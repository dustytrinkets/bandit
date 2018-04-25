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


function insertImage(req, res){
    var imagePath = req.files.image.path;
    var bandId = req.params.id;
    Band.findOneAndUpdate({_id:bandId}, {image:imagePath}, function (err, user){
        res.status(200).send(imagePath);
    });
}


module.exports = {
	insertBand,
	insertImage
}