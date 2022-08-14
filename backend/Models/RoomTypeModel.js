const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoomDetails = Schema({
  roomType: {
    type: String,
    requiref: true,
  },
});

const Rooms = mongoose.model("RoomTypes", RoomDetails);
module.exports = Rooms;
