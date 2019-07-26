const mongosse = require('mongoose');

mongosse.connect('mongodb://localhost:27017/todo',{useNewUrlParser: true },function(err){
    if(err){
        console.log(err);
    }else{
        console.log('Connection Succeeded');
    }

});

require('./employe.model');

