var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var config = require('./webpack.config.js');

var app = express();
var compiler = webpack(config);

app.set('view engine', 'html');
app.set('view cache', false);

app.use(express.static(path.resolve(__dirname + '/pub/c')));
// app.use(webpackMiddleware(compiler));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.render("index");
});

app.listen(9876, function () {
  console.log('Example app listening on port 9876!');
});
