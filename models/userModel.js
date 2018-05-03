'use strict'

var mongoose = require ('mongoose');

var Schema = mongoose.Schema;

var UserSchema = Schema({
	name: {
        type: String, 
        required:true
    },
	email: {
        type: String, 
        required:true
    },
	age: Number,
	about: String,	
	style: [String],
	url: String,
	instrument: [String],
	date: String,
	location: {
			lat:{
				type:Number},
			long: {
				type:Number},
	},
	image: String,
});

module.exports = mongoose.model('User' , UserSchema)