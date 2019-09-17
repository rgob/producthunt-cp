var express = require("express");
var mongoose = require("mongoose");
var requireDir = require("require-dir");

var app = express();

mongoose.connect('mongodb://localhost:27017/producthunt', {useNewUrlParser: true, useUnifiedTopology: true});
requireDir('./src/models')
const Product = mongoose.model("Product");



app.get("/", function(req, res){
    const prod = Product.create({
        title: "Locatar - Locações Simplificadas",
        description: "Locatar é um gerenciador de locações simples e prático.",
        url: 'https://www.locatar.com.br/',
        tags: ['saas','product-management','supply-chain']
    });
    res.send(prod);
});

app.listen(3000);