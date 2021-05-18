const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routerPlanet');
const port = 5000;

const app = express(); 
app.use(express.json());

mongoose.connect('mongodb+srv://AlineDB:aline86@gettingstarted.kzu0x.mongodb.net/myFirstDatabase?retryWrites=true',{ useUnifiedTopology: true, useNewUrlParser: true});

mongoose.connection.on('connected', function () {
  console.log('Connected to Database ' + 'test');
});

mongoose.connection.on('error', (err) => {
  console.log('Database error '+err);
});

app.use('/api', routes);

app.listen(process.env.port || port, () =>{
  console.log('Servidor em execução na porta: '+ port);
});


