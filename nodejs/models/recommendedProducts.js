const mongoose = require("mongoose");
const recommendedProductSchema = mongoose.Schema({
    customerId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Customer",
        required: true
    },
    productId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Product",
        required: true
    },
    comment:{
        type: String
    }
})
const RecommendedProduct = mongoose.model("RecommendedProduct", recommendedProductSchema);
module.exports = RecommendedProduct;