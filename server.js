var express = require('express');

var app =  express();

var exphbs = require('express-handlebars');

var  PORT = process.env.PORT || 8080;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


app.use(express.static(process.cwd() + './public'));

var router = require('./controllers/burgers_controller.js');

app.use('/', router);







app.listen(PORT,function(){
    console.log("Listening on port: " + PORT);
})

