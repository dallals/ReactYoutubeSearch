const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


var app = express();
var port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, './')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

console.log(`Starting http server on port ${port}`)
app.listen(port);

module.exports = {app};