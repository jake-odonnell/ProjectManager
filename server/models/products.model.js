const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Must have a product title"],
        minlength: [3, "Title must be at least 3 characters"]
    },
    price: {
        type: Number,
        required: [true, "Must include a price"],
        min: [0, "Price must be positive"]
    },
    description: {
        type: String,
        required: [true, "Must include a description"],
        minlength: [10, "Description must be at least 10 characters"]
    }
}, {timestamps: true});

module.exports = mongoose.model("Product", ProductSchema)