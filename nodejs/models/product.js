const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 15,
        lowercase: true,
        trim: true
    },
    img: {
        type: String,
        required: true,
        trim: true
    },
    // quantityInStock: {
    //     type: Number,
    //     min: 1,
    //     max: 15,
    //     required: true
    // },
    description: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 25,
        lowercase: true,
        trim: true
    }
})
const Product = mongoose.model("Product", productSchema);
module.exports = Product;

