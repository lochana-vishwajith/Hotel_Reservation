import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "./Accommadation.css";
import RoomIntro from "../../Assets/Video/final.mp4";
import { Link } from "react-router-dom";
import axios from "axios";
import { Toast } from "devextreme-react/toast";

const Accommadation = () => {
  const [RoomTypes, setRoomTypes] = useState([]);
  const [toastmessage, settoastmessage] = useState("");
  const [toastType, settoastType] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

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

  return (
    <div className="accommadation">
      <div className="intoDiv">
        <video autoPlay muted loop className="roomInro">
          <source src={RoomIntro} type="video/mp4" />
        </video>
      </div>
      <div className="accomDetails">
        <div className="container">
          <h4 className="accommdationTitle">
            Pure relaxation and in luxurious comfort
          </h4>
          <p className="roomDes">
            Pure relaxation and in luxurious comfort <br />
            <br />
            The resort is made up of several beautifully crafted chalets tucked
            within the levelled landscape of the plantation, making it one of
            the most sought-after honeymoon hotels in Sri Lanka. There is ample
            space left in between the chalets making it ideal for a quiet
            holiday of pure relaxation; for honeymooners or even for families.
            Each chalet opens up to scenic views of the misty mountains and is
            equipped with all modern amenities that ensure a luxurious,
            comfortable stay.
          </p>
        </div>
      </div>
      <br />
      <div className="roomTypeContaner">
        <div className="RoomComtainer">
          {RoomTypes.map((room, index) => (
            <div className="cardContainer" key={index}>
              <div className="card">
                <img
                  className="card-img-top"
                  src={room.images[0]}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">{room.roomType}</h5>
                  <Link
                    onClick={() =>
                      localStorage.setItem("roomDetils", JSON.stringify(room))
                    }
                    to="/roomDetails"
                    class="btn btn-outline-success"
                  >
                    Find out more
                  </Link>
                </div>
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

export default Accommadation;
