const express = require('express');
const todoController = require('./controllers/todoController');

var app = express();

//static files
app.use('/assets',express.static('assets'));

//template engine
app.set('view engine','ejs');

//fire controllers
todoController(app);

//listen to port
app.listen(3000,()=>{

});
