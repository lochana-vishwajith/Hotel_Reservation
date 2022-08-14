const Reservation = require("../Models/ReservationModel");
const moment = require("moment");

const makeReservation = (req, res) => {
  console.log("reservation adding is called");

  const { customerId, checkInDate, checkOutDate, price, confirmed } = req.body;

  const ReservationDetails = new Reservation({
    customerId,
    checkInDate,
    checkOutDate,
    price,
    confirmed,
    reservedDate: moment(),
  });

  ReservationDetails.save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).json("Error: " + error);
    });
};

const getReservationHistory = (req, res) => {
  console.log("reservation history is fetching");

  Reservation.find()
    .populate("customerId", "fullName country email nic")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).json("Error: " + error);
    });
};

module.exports = { makeReservation, getReservationHistory };
