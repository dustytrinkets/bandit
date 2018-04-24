'use strict'

var mongoose = require ('mongoose');

var Schema = mongoose.Schema;

var bandSchema = Schema({
	name: {
        type: String, 
        required:true
	},
	url: [{
		type: Array,
		default:[]
	}],
	vacancy: [{
		type: String
	}],
	style: [{
		type: String
	}],
	location: [{
		type: Array,
		default:[]
	}],
	member_number: Number,
	members: [{
		type: Array,
		default:[]
	}],
	date: String,
});

module.exports = mongoose.model('Band' , bandSchema)