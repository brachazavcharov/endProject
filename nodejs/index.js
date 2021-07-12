const express = require("express");
const cors = require("cors");
const morgan = require('morgan');
const competitionFiles = require("./routes/competitionFiles");
const customer = require("./routes/customer");
const order = require("./routes/order");
const personalChat = require("./routes/personalChat");
const product = require("./routes/product");
const publicChat = require("./routes/publicChat");
const recipe = require("./routes/recipe");
const recommendedProducts = require("./routes/recommendedProducts");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/HLS")
    .then(() => { console.log("connected to mongo") })
    .catch(error => console.error(error));
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));
app.use("/order", order)
app.use("/personalChat", personalChat)
app.use("/product", product)
app.use("/publicChat", publicChat)
app.use("/recipe", recipe)
app.use("/recommendedProducts", recommendedProducts)
app.use("/competitionFiles", competitionFiles)
app.use("/customer", customer)
app.listen(5000, () => {
    console.log("listening on port 5000")
})

