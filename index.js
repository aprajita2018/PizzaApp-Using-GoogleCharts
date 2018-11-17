//configure express
var express = require('express');
var app = express();

//set the view engine to ejs
app.set('view engine', 'ejs');
//set the directory of views
app.set('views', './views');

//specify the path of static directory
app.use(express.static(__dirname + './public'));

//Routes
app.get('/', function(req, res){
    res.render("client");
});

//express js server listening on 3000
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});