const express = require("express");
const router = express.Router();

const {
    dashboard,
    getUsers,
    deleteUser,
    getBookings,
    approveBooking,
    getCars,
    addCar,
    updateCar,
    deleteCar
} = require("../controllers/adminController");

// Dashboard Route
router.get("/dashboard", dashboard);

// Get All Users
router.get("/users", getUsers);

// Delete User by ID
router.delete("/users/:id", deleteUser);

// Get All Cars
router.get("/cars", getCars);

// Add New Car
router.post("/cars", addCar);

// Update Car by ID
router.put("/cars/:id", updateCar);

// Delete Car by ID
router.delete("/cars/:id", deleteCar);

router.get( "/bookings", getBookings);
router.put("/bookings/:id/approve",  approveBooking);

module.exports = router;