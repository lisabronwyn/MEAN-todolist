var express = require('express');
var app = express();
// var path = require('path');
// var bodyParser = require('body-parser');
// var routes = require('server/routes');

var PORT = process.env.PORT || 3000;

// app.use(bodyParser.json());
//
// // Used for production build
// app.use(express.static(path.join(__dirname, 'public')));
//
// routes(app);

app.all('/*', function(req, res) {
  res.send('\
  <!DOCTYPE html>\
  <html>\
  <head>\
    <title>MEAN ToDo App</title>\
    <base href="/">\
  </head>\
  <body><h1>Hello, this is the app!</h1>\
  <script src="bundle.js"></script>\
  </body>\
  <div ui-view></div>\
  </html>\
  ');
});

app.listen(PORT, function() {
    console.log('Server running on ' + PORT);
});
