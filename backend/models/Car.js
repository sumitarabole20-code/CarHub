const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true
    },

    brand: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    fuelType: {
        type: String,
        required: true
    },

    transmission: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Car", carSchema);