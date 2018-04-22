'use strict'

var bandModel = require('../models/bandModel');
var moment = require ('moment');

function insertBand (req,res) {
	var band = new bandModel();

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

module.exports = {insertBand}