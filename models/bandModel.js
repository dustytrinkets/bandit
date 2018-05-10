'use strict'

var mongoose = require ('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var Schema = mongoose.Schema;

var BandSchema = Schema({
	name: {
        type: String, 
        required:true
	},
	url: [String], //link/s a web/s del grupo(youtube, bandcamp)
	about: String,
	// rol: String,
	vacancy: [String], //puesto/s libre/s en el grupo
	style: [String], //estilo/s musical/es
	// location: {
	// 	lat: {
	// 		type: Number
	// 	},
	// 	long: {
	// 		type: Number
	// 	},
	// },
	members: [String], //miembros de la banda, ids de usuarios miembros
	image:String,
	date: String,
});

module.exports = mongoose.model('Band' , BandSchema)