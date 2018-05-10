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
	vacancy: [String], //puesto/s libre/s en el grupo
	style: [String], //estilo/s musical/es
	members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], //miembros de la banda, ids de usuarios miembros
	image:String,
	location: [String, String],
	date: String,
});

module.exports = mongoose.model('Band' , BandSchema)