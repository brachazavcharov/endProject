const express = require("express");
const route = express.Router();
const productController = require("../controllers/product");

route.get("/", productController.getAll)
route.get("/:id", productController.getById)
route.post("/", productController.postProduct)
route.put("/:id", productController.updateProduct)
route.delete("/:id", productController.deleteProduct)
module.exports = route;