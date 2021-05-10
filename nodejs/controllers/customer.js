const mongoose = require("mongoose");
const Customer = require("../models/customer");
const getAll = async (req, res) => {
    let customers = await Customer.find();
    return res.send(customers);
}
const getById = async (req, res) => {
    let { _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send("invalid id");
    let customer = await Customer.findById(_id);
    if (!customer)
        return res.status(404).send("not exist");
    return res.send(customer);
}
const post = async (req, res) => {
    let customer = req.body;
    let newCustomer = new Customer(customer);
    let 
}