import React from "react";
import { Slide } from "react-slideshow-image";
import "./Accommadation.css";
import "react-slideshow-image/dist/styles.css";
import roomImageOne from "../../Assets/Images/98_acres_resort.jpg.700x345_q85_box-0,153,2000,1140_crop_detail.jpg";
import roomImageTwo from "../../Assets/Images/pool-night-1-480x231.jpg";
import roomImageThree from "../../Assets/Images/superior-room-header-4-480x231.jpg";
import roomImageFour from "../../Assets/Images/superior-room-header-1-480x231.jpg";
import roomImageFive from "../../Assets/Images/233212243.jpg";

const slideImages = [
  {
    url: roomImageOne,
  },

  {
    url: roomImageTwo,
  },
  {
    url: roomImageThree,
  },
  {
    url: roomImageFour,
  },
  {
    url: roomImageFive,
  },
];

const Accommadation = () => {
  return (
    <div className="accommadation">
      <br />
      <Slide duration={10000} autoplay={true} infinite={true} arrows={true}>
        {slideImages.map((slideImage, index) => {
          <div className="each-slide" key={index}>
            <img src={slideImage} classnName="each-slide" />
          </div>;
        })}
      </Slide>
      <br />
    </div>
  );
};

export default Accommadation;
