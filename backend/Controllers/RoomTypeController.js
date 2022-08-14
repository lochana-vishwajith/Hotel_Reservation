const RoomTypes = require("../Models/RoomTypeModel");

const addroomType = (req, res) => {
  console.log("Room is going to be added");
  const { roomType, description, facilities, price, images } = req.body;

  const roomTypeDetails = RoomTypes({
    roomType,
    description,
    facilities,
    price,
    images,
  });

  roomTypeDetails
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).json("Error: " + error);
    });
};

const getRoomTypes = (req, res) => {
  console.log("Room detailsgoing to be fetched");

  RoomTypes.find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).json("Error: " + error);
    });
};

const deleteRoomType = (req, res) => {
  console.log("room types is going to deleted");
  const { id } = req.params;
  RoomTypes.findOneAndDelete({ _id: id })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).json("Error: " + error);
    });
};

const updateDetails = (req, res) => {
  console.log("Details is going to updated");

  const { id } = req.params;
  const { roomType, description, facilities, price, images } = req.body;

  RoomTypes.findByIdAndUpdate(id, {
    roomType,
    description,
    facilities,
    price,
    images,
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).json("Error: " + error);
    });
};

module.exports = { addroomType, getRoomTypes, deleteRoomType, updateDetails };
