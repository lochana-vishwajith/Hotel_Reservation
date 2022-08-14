const express = require("express");
const router = express.Router();

const {
  makeReservation,
  getReservationHistory,
} = require("../Controllers/ReservationController");

router.post("/reservation", makeReservation);

router.get("/reservation", getReservationHistory);

module.exports = router;
