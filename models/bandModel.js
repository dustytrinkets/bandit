'use strict'

var mongoose = require ('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var Schema = mongoose.Schema;

var BandSchema = Schema({
	name: {
        type: String, 
        required:true
	},
	url: [String],
	vacancy: [String],
	style:[String],
	location: [String, String],
	members: [{
		type: Array
	}],
	date: String,
});

module.exports = mongoose.model('Band' , BandSchema)