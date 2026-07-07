const Payment =
require("../models/paymentModel");

exports.makePayment =
async (req,res)=>{

    try{

        const payment =
        await Payment.create(
            req.body
        );

        res.status(201).json({
            message:
            "Payment Successful",
            payment
        });

    }catch(error){

        res.status(500).json({
            message:
            error.message
        });

    }
};

exports.getPayments =
async(req,res)=>{

    try{

        const payments =
        await Payment.find()
        .populate(
            "userId",
            "name email"
        )
        .populate(
            "bookingId"
        );

        res.json(payments);

    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }
};