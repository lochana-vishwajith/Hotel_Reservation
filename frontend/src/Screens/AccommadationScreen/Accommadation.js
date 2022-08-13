import React from "react";
import { Slide } from "react-slideshow-image";
import "./Accommadation.css";
import RoomIntro from "../../Assets/Video/final.mp4";
import RoomOne from "../../Assets/Images/superior-room-header-1-480x231.jpg";
import { Link } from "react-router-dom";

const RoomTypes = [
  {
    type: "GRAND EXECUTIVE SUITE",
    description:
      "This elegant and spacious suite comes with a living and outdoor dining area which opens out to a private plunge pool and a wooden deck with outdoor seating and pool beds overlooking the stunning views of the Ella Gap & the small Adam’s peak. The room is equipped with a large ensuite bathroom with shower, provided with hot & cold water.The suite also comes with a kitchenette equipped with cutlery, glassware, crockery and includes a butler service to enhance the holiday experience. Guests have the option of booking this unit as a double suite or can be converted to accommodate maximum of three persons with a single size extra bed in the bedroom",
    facilities:
      "Private Plunge Pool,Large Balcony with 2 sunbeds,Outdoor dining area,itchenette,Microwave Oven,Coffee machine,In room Tea/coffee making facility,Cutlery & Crockery,King Size Luxury Bed (7 feet * 7 feet),ooden flooring,Hot and cold water",
    images: [RoomOne],
    price: "$150.00",
  },
  {
    type: "Greenland Suite",
    description:
      "This elegant and spacious suite comes with a living and outdoor dining area which opens out to a private plunge pool and a wooden deck with outdoor seating and pool beds overlooking the stunning views of the Ella Gap & the small Adam’s peak. The room is equipped with a large ensuite bathroom with shower, provided with hot & cold water.The suite also comes with a kitchenette equipped with cutlery, glassware, crockery and includes a butler service to enhance the holiday experience. Guests have the option of booking this unit as a double suite or can be converted to accommodate maximum of three persons with a single size extra bed in the bedroom",
    facilities:
      "Private Plunge Pool,Large Balcony with 2 sunbeds,Outdoor dining area,itchenette,Microwave Oven,Coffee machine,In room Tea/coffee making facility,Cutlery & Crockery,King Size Luxury Bed (7 feet * 7 feet),ooden flooring,Hot and cold water",
    images: [RoomOne],
    price: "$100.00",
  },
  {
    type: "Honeymoon Deluxe",
    description:
      "This elegant and spacious suite comes with a living and outdoor dining area which opens out to a private plunge pool and a wooden deck with outdoor seating and pool beds overlooking the stunning views of the Ella Gap & the small Adam’s peak. The room is equipped with a large ensuite bathroom with shower, provided with hot & cold water.The suite also comes with a kitchenette equipped with cutlery, glassware, crockery and includes a butler service to enhance the holiday experience. Guests have the option of booking this unit as a double suite or can be converted to accommodate maximum of three persons with a single size extra bed in the bedroom",
    facilities:
      "Private Plunge Pool,Large Balcony with 2 sunbeds,Outdoor dining area,itchenette,Microwave Oven,Coffee machine,In room Tea/coffee making facility,Cutlery & Crockery,King Size Luxury Bed (7 feet * 7 feet),ooden flooring,Hot and cold water",
    images: [RoomOne],
    price: "$200.00",
  },
];

const Accommadation = () => {
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
                  class="card-img-top"
                  src={room.images[0]}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">{room.type}</h5>
                  <Link to="/accommadation" class="btn btn-outline-success">
                    Find out more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accommadation;
