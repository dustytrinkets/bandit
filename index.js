'use strict'

var mongoose = require ('mongoose')
var app = require ('./app');

var port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/banditDB',function(err, res){
    if(err){
        throw err;
    }else{
        console.log("DB conected Ok")
        app.listen(port,function(){
            console.log("Funcionando correctamente en http://localhost: "+port)
        });
    }


});

