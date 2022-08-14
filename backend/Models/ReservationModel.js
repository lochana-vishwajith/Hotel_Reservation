const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReservationSchema = Schema({
  customerId: {
    type: String,
    required: true,
  },
  checkInDate: {
    type: Date,
    required: true,
  },
  checkOutDate: {
    type: Date,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  confirmed: {
    type: Boolean,
    required: true,
  },
});

const reservation = mongoose.model("Reservation", ReservationSchema);
module.exports = reservation;
