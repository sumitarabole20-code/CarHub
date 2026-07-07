const express = require("express");

const router = express.Router();

const {
    getCars,
    addCar,
    getCarById,
    createCar,
    deleteCar

} = require("../controllers/carController");

router.get("/", getCars);

router.get("/:id", getCarById);

router.post("/", addCar);
router.delete("/:id", deleteCar);


module.exports = router;