const express = require("express");
const router = express.Router();

const {
  addroomType,
  getRoomTypes,
  deleteRoomType,
} = require("../Controllers/RoomTypeController");

router.post("/roomType", addroomType);

router.get("/roomType", getRoomTypes);

router.delete("/roomType/:id", deleteRoomType);

module.exports = router;
