

var express = require ('express');
var bodyParser = require ('body-parser')
var api = require ('./routes/routesBand')
var api = require ('./routes/routesUser')

var app = express();


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api',api)

//Usamos swagger para documentar la API
var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

//Definimos un end point para la documentacion de la API
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
 //para verlo http://localhost:3100/api-docs/

module.exports = app;