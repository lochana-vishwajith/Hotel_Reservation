import React, { useEffect, useState } from "react";
import "./AdminRoomDetails.css";
import { IconName } from "react-icons/fa";
import { Popup, Position, ToolbarItem } from "devextreme-react/popup";
import TextBox from "devextreme-react/text-box";
import axios from "axios";
import { Toast } from "devextreme-react/toast";

const AdminRoomDetails = () => {
  const [popVisible, setPopupVisible] = useState(false);
  const [roomType, setRoomType] = useState();
  const [toastVisible, setToastVisible] = useState(false);
  const [toastmessage, settoastmessage] = useState("");
  const [toastType, settoastType] = useState("");
  const [RoomTypes, setRoomTypes] = useState([]);

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

  const savedetails = async () => {
    const typeDetails = {
      roomType,
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
  };
  const hideWindow = () => {
    setPopupVisible(false);
  };

  return (
    <div className="adminRoomConainer">
      <div className="roomTypesContainer">
        <div className="row">
          <div className="col">
            <h5 className="roomTypeTxt">Room Types</h5>
          </div>
          <div className="col">
            <a className="addTypeTxt" onClick={() => displyPopup()}>
              Add Room Type
            </a>
          </div>
          <hr />
        </div>
        {popVisible ? (
          <div className="card" id="typeCardAdd">
            <br />
            <span>Room Type</span>
            <TextBox
              showClearButton={true}
              onValueChange={(e) => setRoomType(e)}
            />
            <br />
            <div className="card-body">
              <button
                type="button"
                class="btn btn-outline-success"
                onClick={() => savedetails()}
              >
                Save Room Details
              </button>
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
              <center>
                <div className="card-title">{room.roomType}</div>
              </center>
              <div>
                <a
                  className="deleteTxt"
                  onClick={() => deleteRoomType(room._id)}
                >
                  Delete
                </a>
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
