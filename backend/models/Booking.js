const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    carId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Car",
        required: true
    },

    fullName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    bookingDate: {
        type: Date,
        default: Date.now
    },

    status: {
        type: String,
        default: "Pending"
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Booking", bookingSchema);