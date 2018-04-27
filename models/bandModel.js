'use strict'

var mongoose = require ('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var Schema = mongoose.Schema;

var BandSchema = Schema({
	name: {
        type: String, 
        required:true
	},
	url: [{
		type: Array,
		default:[]
	}],
	rol: String,
	vacancy: [{
		type: String
	}],
	style: [{
		type: String
	}],
	location: {
		lat: {
			type: Number
		},
		long: {
			type: Number
		},
	},
	members: [{
		type: Array
	}],
	date: String,
});

module.exports = mongoose.model('Band' , BandSchema)