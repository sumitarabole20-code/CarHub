const Review = require("../models/Review");

// Add Review
exports.addReview = async (req, res) => {
    try {

        const review = await Review.create(
            req.body
        );

        res.status(201).json({
            message: "Review added successfully",
            review
        });

    } catch(error){

        res.status(500).json({
            message:error.message
        });

    }
};

// Get Reviews By Car
exports.getReviewsByCar = async (req,res) => {

    try {

        const reviews = await Review.find({
            carId:req.params.carId
        }).populate(
            "userId",
            "name"
        );

        res.json(reviews);

    } catch(error){

        res.status(500).json({
            message:error.message
        });

    }
};