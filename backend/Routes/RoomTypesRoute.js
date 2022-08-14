const express = require("express");
const router = express.Router();

const {
  addroomType,
  getRoomTypes,
  deleteRoomType,
  updateDetails,
} = require("../Controllers/RoomTypeController");

router.post("/roomType", addroomType);

router.get("/roomType", getRoomTypes);

router.delete("/roomType/:id", deleteRoomType);

router.put("/roomType/:id", updateDetails);

module.exports = router;
