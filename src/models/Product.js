var mongoose = require("mongoose");

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

mongoose.model("Product", ProductSchema);