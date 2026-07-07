const express = require("express");

const router = express.Router();

const {
    addReview,
    getReviewsByCar
} = require(
    "../controllers/reviewController"
);

router.post("/", addReview);

router.get(
    "/:carId",
    getReviewsByCar
);

module.exports = router;