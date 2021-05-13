const mongoose = require("mongoose");
const Order = require("../models/order");
const getAll = async (req, res) => {
    let orders = await Order.find();
    return res.send(orders);
}
const getById = async (req, res) => {
    let { _id } = req.params;
    // if (!mongoose.Types.ObjectId.isValid(_id))
    //     return res.status(404).send("invalid id");
    let order = await Order.findById(_id);
    if (!order)
        return res.status(404).send("There is no such order");
    return res.send(order);
}
const postOrder = async (req, res) => {
    let order = req.body;
    let newOrder = new Order(order);
    try {
        await newOrder.save();
        return res.send(newOrder);
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
}
const updateOrder = async (req, res) => {
    let orderBody = req.body;
    let { _id } = req.params;
    // if (!mongoose.Types.ObjectId.isValid(_id))
    //     return res.status(404).send("invalid id");
    let order = await Order.findById(_id);
    if (!order)
        return res.status(404).send("There is no such order");
    order.orderDate = orderBody.orderDate || order.orderDate;
    order.quantity = orderBody.quantity || order.quantity;
    order.customerId = orderBody.customerId || order.customerId;
    order.productId = orderBody.productId || order.productId;
    try {
        await order.save();
        return res.send(order);
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
}
const deleteOrder = async (req, res) => {
    let { _id } = req.params;
    // if (!mongoose.Types.ObjectId.isValid(_id))
    //     return res.status(404).send("invalid id");
    let deleted = await Order.findByIdAndRemove(_id);
    if (!deleted)
        return res.status(404).send("There is no such order");
    return res.send(deleted);

}
module.exports = {
    getAll, getById, postOrder, deleteOrder, updateOrder
}