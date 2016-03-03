'use strict';

var express = require('express');
var routes = require('./app/routes/index.js');

var app = express();

   app.use('/public', express.static(process.cwd() + '/public'));
   app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

   routes(app);

   var port = process.env.PORT || 3000;

   app.listen(port, function () {
      console.log('Node.js listening on port '+port+'...');
   });
