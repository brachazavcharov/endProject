const mongoose = require("mongoose");
const recommendedProductSchema = mongoose.Schema({
    customerId: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    comment:{
        type: String
    }
})
const RecommendedProduct = mongoose.model("RecommendedProduct", recommendedProductSchema);
module.exports = RecommendedProduct;