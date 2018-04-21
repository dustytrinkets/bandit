

var express = require ('express');
var bodyParser = require ('body-parser')
var api = require ('./routes/routesBand')
var api = require ('./routes/routesUser')

var app= express();


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api',api)

console.log(api)

module.exports = app;