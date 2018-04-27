'use strict'

var jwt = require('jwt-simple') //
var moment = require('moment')
var secret = 'b4nd1t'

//comprobar si token es valido

exports.ensureAuth = function (req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).send({ message: 'la peticion no tiene la cabecera de autenticacion' })
    }
    var token = req.headers.authorization.replace(/['"]+/g, ''); //lo recoge y quita caracteres 'raros'
    try {
        var payload = jwt.decode(token, secret);
        if (payload.exp <= moment().unix()) {
            return res.status(400).send({ mesage: 'el token ha expirado' })
        }
    } catch (ex) {
        console.log(ex);
        return res.status(404).send({ message: 'token no valido' })
    }
    req.user = payload;

    next();
};





