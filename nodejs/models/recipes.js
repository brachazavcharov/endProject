const mongoose = require("mongoose");
const recipeSchema = mongoose.Schema({
    orderDate: {
        type: Date,
        required: true
    },
    customerId: {
        type: String
    },
    recipeDetails: {
        type: String,
        required: true
    },
    uploadDate: {
        type: Date,
        required: true
    },
    likes: {
        type: Number
    }
})
const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;