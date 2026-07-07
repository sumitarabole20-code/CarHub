const express = require("express");

const router = express.Router();

const {
    createBooking,
    getBookings,
    getBookingById,
    getUserBookings
} = require("../controllers/bookingController");

router.post("/", createBooking);

router.get("/", getBookings);

router.get("/user/:userId",getUserBookings);

router.get("/:id", getBookingById);

module.exports = router;