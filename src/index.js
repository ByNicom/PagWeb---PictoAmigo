const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');


const app = express();
mongoose.connect('');
//settings
app.set('port', process.env.PORT || 3000);


//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/tasks',require('./routes/tasks'));

//static files
app.use(express.static(__dirname +'/public'));

//Server Escuchando
app.listen(app.get('port'), ()=> {
    console.log('Servidor en el puerto','http://localhost:'+app.get('port')+'/');
});