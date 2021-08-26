// require("dotenv").config();

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

// const connection = require("./db");
// const upload = require("./routes/upload");
// const Grid = require("gridfs-stream");
// let gfs;
// connection();
// const conn = mongoose.connection;
// conn.once("open", function () {
//     gfs = Grid(conn.db, mongoose.mongo);
//     gfs.collection("photos");
// })
// app.use("/file", upload);
// const port = process.env.PORT || 8080;

// app.get("file:/fileName", async (req, res) => {
//     try {
//         const file = await gfs.files.findOne({ fileName: req.params.fileName });
//         const readStream = gfs.createReadStream(file.fileName);
//         readStream.pipe(res);
//     } catch (error) {
//         res.send("not found");
//     }
// })

// app.delete("file:/fileName", async (req, res) => {
//     try {
//         await gfs.files.deletOne({ fileName: req.params.fileName });
//        res.send("success");
//     } catch (error) {
//         console.log(error);
//         res.send("an error acoured");
//     }
// })

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

