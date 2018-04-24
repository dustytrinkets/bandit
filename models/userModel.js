'use strict'

var mongoose = require ('mongoose');

var Schema = mongoose.Schema;

var userSchema = Schema({
	name: {
        type: String, 
        required:true
    },
	email: {
        type: String, 
        required:true
    },
	age: Number,
	instrument: [String],
	style: [{
		type: String
	}],
	date: String,
	location: [{
		type: Array,
		default:[]
	}],
	image: String,
});

module.exports = mongoose.model('User' , userSchema)