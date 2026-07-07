const express =
require("express");

const router =
express.Router();

const {
    makePayment,
    getPayments
} = require(
    "../controllers/paymentController"
);

router.post(
    "/",
    makePayment
);

router.get(
    "/",
    getPayments
);

module.exports =
router;