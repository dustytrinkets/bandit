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
	instrument: [String],
	style: [{
		type: String
	}],
	date: String,
	location: {
		// type: [
			lat:{
				type:Number},
			long: {
				type:Number},
	},
	image: String,
});

module.exports = mongoose.model('User' , UserSchema)