const mongoose = require("mongoose");
const CustomerWeights = require("../models/customerWeights");
const getAll = async (req, res) => {
    let customerWeights = await CustomerWeights.find();
    return res.send(customerWeights);
}
const getById = async (req, res) => {
    let { _id } = req.params;
    // if (!mongoose.Types.ObjectId.isValid(_id))
    //     return res.status(404).send("invalid id");
    let customerWeights = await CustomerWeights.findById(_id);
    if (!customerWeights)
        return res.status(404).send("There is no such customer");
    return res.send(customerWeights);
}
const postCustomerWeight = async (req, res) => {
    let customerWeights = req.body;
    let newCustomerWeights = new CustomerWeights(customerWeights);
    try {
        await newCustomerWeights.save();
        return res.send(newCustomerWeights);
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
}
const updateCustomerWeight = async (req, res) => {
    let customerWeightsBody = req.body;
    let { _id } = req.params;
    // if (!mongoose.Types.ObjectId.isValid(_id))
    //     return res.status(404).send("invalid id");
    let customerWeights = await CustomerWeights.findById(_id);
    if (!customerWeights)
        return res.status(404).send("There is no such customer");
    customerWeights.date = customerWeightsBody.date || customerWeights.date;
    customerWeights.customerId = customerWeightsBody.customerId || customerWeights.customerId;
    customerWeights.currentWeight = customerWeightsBody.currentWeight || customerWeights.currentWeight;
    try {
        await customerWeights.save();
        return res.send(customerWeights);
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
}
const deleteCustomerWeight = async (req, res) => {
    let { _id } = req.params;
    // if (!mongoose.Types.ObjectId.isValid(_id))
    //     return res.status(404).send("invalid id");
    let deleted = await CustomerWeights.findByIdAndRemove(_id);
    if (!deleted)
        return res.status(404).send("There is no such customer");
    return res.send(deleted);
}
module.exports = {
    getAll, getById, postCustomerWeight, updateCustomerWeight, deleteCustomerWeight
}
