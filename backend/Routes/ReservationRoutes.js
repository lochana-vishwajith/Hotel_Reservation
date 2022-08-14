const express = require("express");
const router = express.Router();

const { makeReservation } = require("../Controllers/ReservationController");

router.post("/reservation", makeReservation);
module.exports = router;
