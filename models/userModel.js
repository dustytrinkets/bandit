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
	password: String,
	age: Number,
	url: [String], //link/s a web/s del grupo(youtube, bandcamp)	
	about: String,	
	bands: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Band' }], //bandas a las que pertenece
	style: [String], //estilo/s musical/es 
	instrument: [String], //instrumentos que toca el usuario
	location: [String, String],
	image: String,
	date: String,	
});

module.exports = mongoose.model('User' , UserSchema)