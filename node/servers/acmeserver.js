var express = require('express');
var app = express();

app.get('/', function(req,res) {
    res.send('This is ACME Autos')
});

app.post('/order', function(req,res) {
    var req_body = req.body;


});

app.listen(3050, function () {
    console.log('ACME Autos app listening on port 3050!')
});
