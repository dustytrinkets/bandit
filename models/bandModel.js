'use strict'

var mongoose = require ('mongoose');

var Schema = mongoose.Schema;

var bandSchema = Schema({
	name: String,
	members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
	about: String,
	instrument: String,
	style: [String],
	url: String,	
	location: String,
	date: String,
});

module.exports = mongoose.model('Band' , bandSchema)