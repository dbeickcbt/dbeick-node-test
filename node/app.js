var express = require('express');
var app = express();

require('./routes/ccasRoutes')(app);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
