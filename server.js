var express         = require('express');
var expressLayouts  = require('express-ejs-layouts');
var bodyParser      = require('body-parser');
var app             = express();
var port            = process.env.PORT || 8080;
var path            = require('path');

// use ejs and express layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);
//app.set('view options', { layout: false })
app.set('views', path.join(__dirname, '/views'));

// use body parser
app.use(bodyParser.urlencoded({ extended: true }));

// set static files (css and images, etc) location
app.use(express.static(path.join(__dirname, 'public')));

//set up site routes to always show index

app.get('*', function(req, res){
  //we don't need a layout for simple react apps
  res.render('index', { layout: false });
});


// start the server
app.listen(port, () => {console.log("listening on port: " + port)});
