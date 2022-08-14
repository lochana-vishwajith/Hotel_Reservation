import React, { useEffect, useState } from "react";
import "./RoomDetails.css";

import { Toast } from "devextreme-react/toast";
import TextBox from "devextreme-react/text-box";
import DateBox from "devextreme-react/date-box";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import RoomOne from "../../Assets/Video/room.mp4";
import { useNavigate } from "react-router";
import axios from "axios";

const RoomDetails = () => {
  const [facilities, setFacilities] = useState([]);
  const [checkInDate, setCheckingDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();
  const [toastVisible, setToastVisible] = useState(false);
  const [toastmessage, settoastmessage] = useState("");
  const [toastType, settoastType] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    extractFacilities();
  });

  const extractFacilities = () => {
    const extracted = JSON.parse(
      localStorage.getItem("roomDetils")
    ).facilities.split(",");
    setFacilities(extracted);
  };

  const makeRevervation = async () => {
    if (checkInDate === "" || checkOutDate === "") {
      setToastVisible(true);
      settoastmessage("Please fill all the fields");
      settoastType("error");
    } else {
      console.log(checkInDate, checkOutDate);
      const reservation = {
        customerId: JSON.parse(localStorage.getItem("userDetails"))._id,
        checkInDate,
        checkOutDate,
        price: JSON.parse(localStorage.getItem("roomDetils")).price,
      };
      localStorage.setItem("reservation", JSON.stringify(reservation));
      navigate("/payment");
    }
  };
  return (
    <div className="roomDetailContainer">
      <div className="roomImageSlider">
        <video autoPlay muted loop className="roomInro">
          <source src={RoomOne} type="video/mp4" />
        </video>
      </div>
      <div className="roomDesContainer">
        <div className="container">
          <h4 className="roomTitle">
            {JSON.parse(localStorage.getItem("roomDetils")).roomType}
          </h4>
          <p className="roomDes">
            {JSON.parse(localStorage.getItem("roomDetils")).description}
          </p>
          <br />
          <h6 className="roomDes">
            Price : {JSON.parse(localStorage.getItem("roomDetils")).price}
          </h6>
        </div>
      </div>
      <div className="facilityContainer">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3 className="roomTitle">Facilities</h3>
              <br />
              {facilities.map((facility, index) => (
                <ul key={index}>{facility}</ul>
              ))}
            </div>
            <div className="col">
              <h3 className="roomTitle">Make A Reservation</h3>
              <span>
                Please login to the system before making a reservation.
              </span>
              <br />
              <br />
              <span className="regFormTxt">Check-in Date</span>
              <DateBox
                placeholder="checkin date"
                type="date"
                onValueChange={(e) => setCheckingDate(e)}
              />

              <br />
              <span className="regFormTxt">Check-out Date</span>
              <DateBox
                placeholder="checkout date"
                type="date"
                onValueChange={(val) => setCheckOutDate(val)}
              />

              <br />
              <center>
                <Toast
                  visible={toastVisible}
                  message={toastmessage}
                  type={toastType}
                  onHiding={() => setToastVisible(false)}
                  displayTime={1500}
                />
                <button
                  type="button"
                  class="btn btn-outline-success"
                  onClick={() => makeRevervation()}
                >
                  Book Now
                </button>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
