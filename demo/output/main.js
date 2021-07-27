"use strict";
var todo = "hello";
var express = require('express');
var app = express();
var port = 3000;
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.get('/index.html', function (req, res) {
    res.send('Hello World! from index.html');
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
