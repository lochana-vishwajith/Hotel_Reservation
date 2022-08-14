const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoomDetails = Schema({
  roomType: {
    type: String,
    requiref: true,
  },
  description: {
    type: String,
    requiref: true,
  },
  facilities: {
    type: String,
    requiref: true,
  },
  price: {
    type: String,
    requiref: true,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
});

const Rooms = mongoose.model("RoomTypes", RoomDetails);
module.exports = Rooms;
