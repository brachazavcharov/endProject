const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
    orderDate: {
        type: Date,
        required: true
    },
    quantity: {
        type: Number,
        min: 1,
        required: true
    },
    customerId: {
        type: String
    },
    productId: {
        type: String
    }
})
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;