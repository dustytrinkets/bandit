'use strict'

var mongoose = require ('mongoose')
var app = require ('./app');
var port = process.env.PORT || 3100;

mongoose.connect('mongodb://admin:admin@ds251179.mlab.com:51179/bandit',function(err, res){
    if(err){
        throw err;
    }else{
        console.log("DB conected Ok")
        app.listen(port,function(){
            console.log("Funcionando correctamente en " + port)
        });
    }
});

