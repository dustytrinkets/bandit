'use strict'

var mongoose = require ('mongoose');

var Schema = mongoose.Schema;

var userSchema = Schema({
	name: String,
	age: Number,
	about: String,	
	instrument: [String],
	style: [String],
	url: String,
	location: String,
	date: String,
});

module.exports = mongoose.model('User' , userSchema)