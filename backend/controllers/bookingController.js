const Booking = require("../models/Booking");

// Create Booking
exports.createBooking = async (req, res) => {
    try {
        const booking = await Booking.create(req.body);

        res.status(201).json({
            success: true,
            message: "Booking created successfully",
            booking
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get All Bookings
exports.getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find()
            .populate("userId", "name email")
            .populate("carId", "name brand image");

        res.status(200).json(bookings);

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get Booking By Id
exports.getBookingById = async (req, res) => {
    try {

        const booking = await Booking.findById(req.params.id)
            .populate("userId")
            .populate("carId");

        if (!booking) {
            return res.status(404).json({
                message: "Booking not found"
            });
        }

        res.json(booking);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
// Get bookings of logged-in user
exports.getUserBookings = async (req, res) => {
    try {

        const bookings = await Booking.find({
            userId: req.params.userId
        }).populate(
            "carId",
            "name brand image price"
        );

        res.status(200).json(bookings);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};
