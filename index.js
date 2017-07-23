var express = require('express'),
	path=require('path');
var app = express();
app.use(express.static(path.join(__dirname, '/')));
app.get('/',function(req,res){
	res.render('./	index.html');
});
app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function() {
  // log a message to console!
  console.log('App running on port 3000');
});
module.exports = app;
