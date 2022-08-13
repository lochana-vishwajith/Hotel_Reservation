import React, { useEffect, useState } from "react";
import "./RoomDetails.css";

import { Toast } from "devextreme-react/toast";
import TextBox from "devextreme-react/text-box";
import DateBox from "devextreme-react/date-box";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import RoomOne from "../../Assets/Images/superior-room-header-1-480x231.jpg";

const RoomDetails = () => {
  const [facilities, setFacilities] = useState([]);
  const [checkInDate, setCheckingDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [toastmessage, settoastmessage] = useState("");
  const [toastType, settoastType] = useState("");

  let RoomDetails = {
    type: "GRAND EXECUTIVE SUITE",
    description:
      "This elegant and spacious suite comes with a living and outdoor dining area which opens out to a private plunge pool and a wooden deck with outdoor seating and pool beds overlooking the stunning views of the Ella Gap & the small Adam’s peak. The room is equipped with a large ensuite bathroom with shower, provided with hot & cold water.The suite also comes with a kitchenette equipped with cutlery, glassware, crockery and includes a butler service to enhance the holiday experience. Guests have the option of booking this unit as a double suite or can be converted to accommodate maximum of three persons with a single size extra bed in the bedroom",
    facilities:
      "Private Plunge Pool,Large Balcony with 2 sunbeds,Outdoor dining area,itchenette,Microwave Oven,Coffee machine,In room Tea/coffee making facility,Cutlery & Crockery,King Size Luxury Bed (7 feet * 7 feet),ooden flooring,Hot and cold water",
    images: [RoomOne],
    price: "$150.00",
  };

  useEffect(() => {
    extractFacilities();
  });

  const extractFacilities = () => {
    const extracted = RoomDetails.facilities.split(",");
    setFacilities(extracted);
  };

  const makeRevervation = () => {
    if (checkInDate === "" || checkOutDate === "") {
      setToastVisible(true);
      settoastmessage("Please fill all the fields");
      settoastType("error");
    }
  };
  return (
    <div className="roomDetailContainer">
      <div className="roomImageSlider">
        <Slide autoplay infinite>
          {RoomDetails.images.map((image, index) => (
            <div className="each-slide" key={index}>
              <image className="roomImage">
                <source src={image} />
              </image>
            </div>
          ))}
        </Slide>
      </div>
      <div className="roomDesContainer">
        <div className="container">
          <h4 className="roomTitle">{RoomDetails.type}</h4>
          <p className="roomDes">{RoomDetails.description}</p>
          <br />
          <h6 className="roomDes">Price : {RoomDetails.price}</h6>
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
              <h3 className="roomTitle">Make A Revervation</h3>
              <br />
              <span className="regFormTxt">Check-in Date</span>
              <DateBox
                placeholder="checkin date"
                type="date"
                onChange={(val) => setCheckingDate(val)}
              />

              <br />
              <span className="regFormTxt">Check-out Date</span>
              <DateBox
                placeholder="checkout date"
                type="date"
                onChange={(val) => setCheckOutDate(val)}
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
