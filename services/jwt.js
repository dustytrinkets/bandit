'use strict'

var jwt = require('jwt-simple'); 
var moment = require('moment'); 
var secret = 'b4nd1t'; 

exports.createToken = function(user){
    var payload = {
        sub: user._id,
        name: user.name,
        surname: user.surname,
        email: user.role,
        image: user.image,
        iat: moment().unix(), 
        exp: moment().add(30, 'days').unix(), 
    };
    return jwt.encode(payload, secret)
};