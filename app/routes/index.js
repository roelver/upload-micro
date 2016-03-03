'use strict';

var multer = require('multer');
var fs     = require('fs');
var upload = multer({ dest: 'uploads/' }).single('fupload');

module.exports = function (app) {

  app.post('/upload', upload, function (req, res) {
  	  console.log(req.file);
  	  var msg = {
         name: req.file.originalname,
         size: req.file.size
       };
     // Delete the uploaded file, because we know what we want to know
     fs.unlink(req.file.path);

     res.json(msg);
  });

 
   app.route('/')
      .get(function (req, res) {
         res.sendFile(process.cwd() + '/public/index.html');
      });

};
