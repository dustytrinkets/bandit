'use strict'

var mongoose = require ('mongoose');

var Schema = mongoose.Schema;

var bandSchema = Schema({
	name: String,
	instrument: String,
	style: String,
	location: String,
	members: Number,
	date: String,
});

module.exports = mongoose.model('Band' , bandSchema)