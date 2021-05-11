const mongoose = require("mongoose");
var validator = require("email-validator");
const customerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 10,
        lowercase: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 15,
        lowercase: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, "please enter a valid email!"],
        unique: true,
        message: '{VALUE} is not supported'
    },
    height: {
        type: Number,
        required: true,
        min: 1.00,
        max: 2.00,
        message: 'enter your real height'
    },
    initialWeight: {
        type: Number,
        required: true,
        min: 40,
        max: 300,
        message: 'enter your real weight'
    },
    gender: {
        type: String,
        enum: { values: ["male", "female"] },
        required: true
    },
    phone: {
        type: String,
        validate: {
            validator: function (v) {
                return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: "enter a valid phone number!"
        },
        required: [true, 'User phone number required']
    },
    // password: {
    //     type: String,
    //     required: true,

    // },
   // Circumference: {
        chest: {
            type: Number,
            required: [true, "enter your chest size"]
        },
        waist: {
            type: Number,
            required: [true, "enter your waist size"]
        },
        pelvis: {
            type: Number,
            required: [true, "enter your pelvis size"]
        },
    //}
        // lostGrams: {
        //     type: Number,
        //     max: 250
        // },
        joinDate: {
            type: Date,
            required: [true, "enter a join date"]
        }

    
})
const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;

