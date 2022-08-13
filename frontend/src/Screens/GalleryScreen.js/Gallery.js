import React from "react";
import "./Gallery.css";

import IntoVideo from "../../Assets/Video/videoplayback.mp4";
import imgOne from "../../Assets/Images/98_acres_resort.jpg.700x345_q85_box-0,153,2000,1140_crop_detail.jpg";
import imgtwo from "../../Assets/Images/233212243.jpg";
import imgthree from "../../Assets/Images/208836469.jpg";
import imgfour from "../../Assets/Images/pool-night-1-480x231.jpg";
import imgFive from "../../Assets/Images/superior-room-header-1-480x231.jpg";
import imgSix from "../../Assets/Images/getlstd-property-photo.jpg";
import imgSeven from "../../Assets/Images/64116.jpg";
import imgEig from "../../Assets/Images/47094241_2250097375210235_1801769335069343744_o.jpg";
import imgNine from "../../Assets/Images/hotel-heaven-s-edge.jpg";

const Images = [
  imgOne,
  imgtwo,
  imgthree,
  imgfour,
  imgFive,
  imgSix,
  imgSeven,
  imgEig,
  imgNine,
];

const Gallery = () => {
  return (
    <div className="galleryContainer">
      <div className="galleryInto">
        <video autoPlay muted loop className="roomInro">
          <source src={IntoVideo} type="video/mp4" />
        </video>
      </div>
      <div className="photoContainer">
        <h2 className="galleryTitle">Gallery</h2>
        <div className="imgContainer">
          {Images.map((imag, index) => (
            <div key={index} className="imgBox">
              <img src={imag} className="imageHotel" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
