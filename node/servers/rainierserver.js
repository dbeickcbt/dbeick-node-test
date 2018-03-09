var express = require('express');
var app = express();

app.get('/', function(req,res) {
    res.send('This is Rainier Transportation Solutions')
});

app.get('/nonce_token', function(req,res) {
    res.send()
});

app.post('/order', function(req,res) {
    var req_body = req.body;


});

app.listen(3051, function () {
    console.log('RTS app listening on port 3051!')
});
