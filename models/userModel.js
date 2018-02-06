'use strict'

var mongoose = require ('mongoose');

var Schema = mongoose.Schema;

var userSchema = Schema({
	name: String,
	age: Number,
	instrument: String,
	style: String,
	date: String,
});

module.exports = mongoose.model('User' , userSchema)