const express = require("express");
const route = express.Router();
const customerWeightController = require("../controllers/customerWeights");

route.get("/", customerWeightController.getAll)
route.get("/:id", customerWeightController.getById)
route.post("/", customerWeightController.postCustomerWeight)
route.put("/:id", customerWeightController.updateCustomerWeight)
route.delete("/:id", customerWeightController.deleteCustomerWeight)
module.exports = route;