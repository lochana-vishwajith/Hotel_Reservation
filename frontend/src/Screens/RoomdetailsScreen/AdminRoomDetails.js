import React, { useEffect, useState } from "react";
import "./AdminRoomDetails.css";
import { IconName } from "react-icons/fa";
import { Popup, Position, ToolbarItem } from "devextreme-react/popup";
import TextBox from "devextreme-react/text-box";
import axios from "axios";
import { Toast } from "devextreme-react/toast";
import TextArea from "devextreme-react/text-area";
import { storage } from "../../Firebase/firebase";

const AdminRoomDetails = () => {
  const [popVisible, setPopupVisible] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [isImageAdded, setIsImageAdded] = useState(false);
  const [isSeeMore, setIsSeeMore] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [toastmessage, settoastmessage] = useState("");
  const [toastType, settoastType] = useState("");
  const [editingObj, setEditingObj] = useState({});

  const [RoomTypes, setRoomTypes] = useState([]);
  const [roomDetails, setRoomDetails] = useState([]);

  const [roomType, setRoomType] = useState();
  const [price, setPrice] = useState();
  const [facilities, setFacilities] = useState();
  const [description, setDescription] = useState();
  const [selectedImage, setSelectedImage] = useState([]);
  const [finePayImgs, setFinePayImgs] = useState([]);
  const [UploadedImageUrl, setUploadedImageUrl] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/roomTypeDetails/roomType`)
      .then((res) => {
        console.log(res);
        setRoomTypes(res.data);
      })
      .catch((err) => {
        console.log(err);
        setToastVisible(true);
        settoastmessage("Room Type Fetching Failed");
        settoastType("error");
      });
  }, []);

  const savedetails = async (confirmImageUrl) => {
    console.log("uplod", UploadedImageUrl);
    const typeDetails = {
      roomType,
      description,
      facilities,
      price,
      images: confirmImageUrl,
    };
    await axios
      .post(`http://localhost:5000/roomTypeDetails/roomType`, typeDetails)
      .then((res) => {
        console.log(res);
        setToastVisible(true);
        settoastmessage("Room Type Added Successfull");
        settoastType("success");
        setRoomType("");
        hideWindow();
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        setToastVisible(true);
        settoastmessage("Room Type Adding Failed");
        settoastType("error");
      });
  };

  const editDetails = (room) => {
    displyPopup();
    setEditingObj(room);
    setIsEditing(true);
    setRoomType(room.roomType);
    setDescription(room.description);
    setFacilities(room.facilities);
    setPrice(room.price);
  };

  const updateDetails = async () => {
    console.log(roomType, price, description, facilities);
    const updatedDetails = {
      roomType,
      description,
      price,
      facilities,
      images: editingObj.images,
    };
    await axios
      .put(
        `http://localhost:5000/roomTypeDetails/roomType/${editingObj._id}`,
        updatedDetails
      )
      .then((res) => {
        console.log(res);
        setToastVisible(true);
        settoastmessage("Room Details Updated Successfull");
        settoastType("success");
        setDescription("");
        setFacilities("");
        setPrice("");
        setRoomType("");
        hideWindow();
        setIsEditing(false);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        setToastVisible(true);
        settoastmessage("Room Details Updating Failed");
        settoastType("error");
      });
  };

  const deleteRoomType = async (id) => {
    await axios
      .delete(`http://localhost:5000/roomTypeDetails/roomType/${id}`)
      .then((res) => {
        console.log(res);
        setToastVisible(true);
        settoastmessage("Room Type Deleted Successfull");
        settoastType("success");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        setToastVisible(true);
        settoastmessage("Room Type Deleting Failed");
        settoastType("error");
      });
  };

  const displyPopup = () => {
    setPopupVisible(true);
    setIsEditing(false);
    setDescription("");
    setFacilities("");
    setPrice("");
    setRoomType("");
  };
  const hideWindow = () => {
    setPopupVisible(false);
    setSelectedImage([]);
    setFinePayImgs([]);
    setUploadedImageUrl([]);
  };

  const imageHandleChange = (e) => {
    console.log(e.target.files[0]);

    if (e.target.files) {
      let tempImages = [];
      Array.from(e.target.files).map((file) => {
        tempImages.push(URL.createObjectURL(file));
      });
      setSelectedImage(tempImages);
      setIsImageAdded(true);

      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState == 2) {
          let images = [];
          Array.from(e.target.files).map((file) => {
            images.push(file);
          });
          setFinePayImgs(images);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const imageUpload = () => {
    try {
      const date = Date.now();
      let confirmImageUrl = [];
      finePayImgs.forEach((image) => {
        const uploadTask = storage
          .ref(`images/HotelImages/${date}_${image.name}`)
          .put(image);
        uploadTask.on(
          "state_changed",
          (snapshot) => {},
          (error) => {
            console.log(error);
          },
          () => {
            storage
              .ref("images/HotelImages/")
              .child(`${date}_${image.name}`)
              .getDownloadURL()
              .then((url) => {
                console.log(url);
                confirmImageUrl.push(url);
              });
          }
        );
      });

      console.log("uploaded : ", confirmImageUrl);
      setUploadedImageUrl(confirmImageUrl);
      if (confirmImageUrl.length > 0) {
        setToastVisible(true);
        settoastmessage("Room Images Uploaded Successfull");
        settoastType("success");
      }

      setTimeout(() => {
        if (confirmImageUrl.length > 0) {
          savedetails(confirmImageUrl);
        } else {
          setTimeout(() => savedetails(confirmImageUrl), 6000);
        }
      }, 12000);
    } catch (err) {
      console.log(err);
      setToastVisible(true);
      settoastmessage("Image Uploading Failed Failed");
      settoastType("error");
      this.setState({ loadPanelVisible: false });
    }
  };
  return (
    <div className="adminRoomConainer">
      <div className="roomTypesContainer">
        <div className="row">
          <div className="col">
            <h5 className="roomTypeTxt">Room Details</h5>
          </div>
          <div className="col">
            <a className="addTypeTxt" onClick={() => displyPopup()}>
              Add Room Details
            </a>
          </div>
          <hr />
        </div>
        {popVisible ? (
          <div className="card" id="typeCardAdd">
            <br />
            <div className="row">
              <div className="col">
                <span>Room Type</span>
                <TextBox
                  showClearButton={true}
                  defaultValue={roomType}
                  onValueChange={(e) => setRoomType(e)}
                />
              </div>
              <div className="col">
                <span>Room Price</span>
                <TextBox
                  showClearButton={true}
                  defaultValue={price}
                  onValueChange={(e) => setPrice(e)}
                />
              </div>
            </div>

            <br />
            <span>Room Facilities</span>
            <TextBox
              showClearButton={true}
              defaultValue={facilities}
              onValueChange={(e) => setFacilities(e)}
            />
            <span>
              *Please add facilities by seperating a comma(,) in single line
            </span>
            <br />
            <span>Description</span>
            <TextArea
              height={90}
              maxLength={null}
              defaultValue={description}
              onValueChange={(e) => setDescription(e)}
            />
            <br />
            {isEditing ? null : (
              <>
                <span>
                  *Please add the image that you want to use as a cover photo at
                  first
                </span>
                <input
                  type="file"
                  id="file"
                  className="officerImgBtn"
                  multiple
                  onChange={(e) => imageHandleChange(e)}
                />
                <br />
                <div className="uploadedImgView">
                  {selectedImage.map((photo, index) => (
                    <div className="imageUp" key={index}>
                      <img src={photo} width="120" />
                    </div>
                  ))}
                </div>
              </>
            )}

            <br />
            <div className="card-body">
              {isEditing ? (
                <button
                  type="button"
                  class="btn btn-outline-success"
                  onClick={() => updateDetails()}
                >
                  Update Room Details
                </button>
              ) : (
                <button
                  type="button"
                  class="btn btn-outline-success"
                  onClick={() => imageUpload()}
                >
                  Save Room Details
                </button>
              )}

              <button
                type="button"
                class="btn btn-outline-danger"
                id="cancelBtn"
                onClick={() => hideWindow()}
              >
                Cancel
              </button>
            </div>

            <br />
          </div>
        ) : null}
        <div className="roomTypedisplyCon">
          {RoomTypes.map((room, index) => (
            <div className="card" id="typeCard" key={index}>
              <img
                class="card-img-top"
                src={room.images[0]}
                alt="Card image cap"
              ></img>
              <center>
                <div className="card-title">
                  <h4>{room.roomType}</h4>
                </div>
              </center>
              <div className="card-body">
                {isSeeMore ? (
                  <>
                    <p>{room.description}</p>
                  </>
                ) : null}
              </div>
              <div>
                <a
                  className="deleteTxt"
                  onClick={() => deleteRoomType(room._id)}
                >
                  Delete
                </a>
                <a
                  className="deleteTxt"
                  onClick={() => {
                    editDetails(room);
                  }}
                >
                  Edit
                </a>
                {isSeeMore ? (
                  <a className="deleteTxt" onClick={() => setIsSeeMore(false)}>
                    See less
                  </a>
                ) : (
                  <a className="deleteTxt" onClick={() => setIsSeeMore(true)}>
                    See more
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <center>
        <Toast
          visible={toastVisible}
          message={toastmessage}
          type={toastType}
          onHiding={() => setToastVisible(false)}
          displayTime={1500}
        />
      </center>
    </div>
  );
};

export default AdminRoomDetails;
