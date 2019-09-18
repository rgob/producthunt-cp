var express = require("express");
var mongoose = require("mongoose");
var requireDir = require("require-dir");
const cors = require('cors');

var app = express();
app.use(express.json());
app.use(cors);

mongoose.connect('mongodb://localhost:27017/producthunt', {useNewUrlParser: true, useUnifiedTopology: true});
requireDir('./src/models')

app.use("/api", require('./src/routes'))

app.listen(3000);
