const Car = require("../models/Car");

// Get All Cars
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

// Add Car
exports.addCar = async (req, res) => {
    try {

        const car = await Car.create(req.body);

        res.status(201).json(car);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.getCarById = async (req, res) => {
    try {

        const car = await Car.findById(
            req.params.id
        );

        res.json(car);

    } catch(error){
        res.status(500).json({
            message:error.message
        });
    }
};
exports.deleteCar = async (req, res) => {
    try {

        await Car.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Car deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};