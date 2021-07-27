"use strict";
var todo = "hello";
var path = require("path");
var express = require('express');
var app = express();
var port = 3000;
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.get('/index.html', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get('/jsFundmentals.js', function (req, res) {
    res.sendFile(path.join(__dirname, "jsFundmentals.js"));
});
app.get('/closures.js', function (req, res) {
    res.sendFile(path.join(__dirname, "closures.js"));
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
