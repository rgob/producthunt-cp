var mongoose = require("mongoose");
var mongoosePaginate = require('mongoose-paginate');

var ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    tags: {
        type: [String]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

ProductSchema.plugin(mongoosePaginate);

mongoose.model("Product", ProductSchema);