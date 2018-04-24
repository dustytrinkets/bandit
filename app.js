

var express = require ('express');
var bodyParser = require ('body-parser')

var app = express();

var bandRoutes = require ('./routes/routesBand')
var userRoutes = require ('./routes/routesUser')


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/api', bandRoutes)
app.use('/api', userRoutes)

var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
 //para verlo http://localhost:3977/api-docs/

module.exports = app;