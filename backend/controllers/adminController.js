const User = require("../models/User");
const Car = require("../models/Car");
const Booking = require("../models/Booking");

exports.dashboard = async (req, res) => {
    try {

        const users = await User.countDocuments();
        const cars = await Car.countDocuments();
        const bookings = await Booking.countDocuments();

        res.json({
            users,
            cars,
            bookings
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Get all users
exports.getUsers = async (req, res) => {
    try {

        const users = await User.find()
            .select("-password");

        res.status(200).json(users);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// Delete user
exports.deleteUser = async (req, res) => {

    try {

        await User.findByIdAndDelete(
            req.params.id
        );

        res.json({
            message: "User deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// Get all bookings
exports.getBookings = async (req, res) => {

    try {

        const bookings = await Booking.find()
            .populate(
                "userId",
                "name email"
            )
            .populate(
                "carId",
                "name brand image"
            );

        res.status(200).json(bookings);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};
exports.approveBooking = async (req, res) => {

    try {

        const booking =
        await Booking.findByIdAndUpdate(
            req.params.id,
            {
                status: "Approved"
            },
            {
                new: true
            }
        );

        res.status(200).json({
            message: "Booking Approved Successfully",
            booking
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};
exports.getCars = async (req, res) => {

    try {

        const cars = await Car.find();

        res.status(200).json(cars);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
exports.addCar = async (req, res) => {

    try {

        const car = new Car(req.body);

        await car.save();

        res.status(201).json({

            message: "Car added successfully"

        });

    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};
exports.updateCar = async (req, res) => {

    try {

        await Car.findByIdAndUpdate(

            req.params.id,

            req.body

        );

        res.json({

            message: "Car updated successfully"

        });

    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};
exports.deleteCar = async (req, res) => {

    try {

        await Car.findByIdAndDelete(

            req.params.id

        );

        res.json({

            message: "Car deleted successfully"

        });

    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};