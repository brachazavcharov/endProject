const mongoose = require("mongoose");
const customerWeightsSchema = mongoose.Schema({
date:{
    type:Date,
    require:true
},
customerId:{
    type:String
},
currentWeight:{
   type:Number,
   min:40,
   max:300
}
})
const CustomerWeights = mongoose.model("Product", customerWeightsSchema);
module.exports = CustomerWeights;