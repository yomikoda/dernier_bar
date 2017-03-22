var app = {};

app.drivers = {};
app.drivers.express = require('./drivers/express');
app.drivers.express.init();

app.drivers.mysql = require('./drivers/mysql');



app.models = {};
app.models.drink = require('./models/drink');



app.controllers = {};
app.controllers.routes = require('./controllers/routes')(app);