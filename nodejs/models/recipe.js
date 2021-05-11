const mongoose = require("mongoose");
const recipeSchema = mongoose.Schema({
    orderDate: {
        type: Date,
        required: true
    },
    competitionId: {
        type: String,
        required: true
    },
    customerId: {
        type: String,
        required: true
    },
    recipeFile: {
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