'use strict'

var mongoose = require ('mongoose');

var Schema = mongoose.Schema;

var userSchema = Schema({
	name: String,
	age: Number,
	instrument: String,
	style: String,
	date: String,
	location: String,
});

module.exports = mongoose.model('User' , userSchema)