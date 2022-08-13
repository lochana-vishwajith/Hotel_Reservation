import React from "react";
import "./food.css";
const RoomTypes = [
  {
    menu: "Breakfast",
    description:
      " Kiribath aka Milkrice with sri lankan chili sumbol",
  },
  {
    menu: "Lunch",
    description:
      "Sri Lankan Buriyani with spicey black chiken ",
  }, {
    menu: "Dinner",
    description:
      " Rice and curry with special dry fish and mango curry",
  },
];

const FoodBeverages = () => {
  return (<div>
    <div className="foods">
      <div className="row">
        <div className="col">
          <div className="intov">
            <video autoPlay muted loop className="roomInro">
              <source
                src="https://res.cloudinary.com/iplus/video/upload/v1660397638/test/TOC_Food_Beverage_Showreel_mmm2yf.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <br />
        <div className="col">        <br />
          <h4 style={{ color: "green" }}>Enjoy The Best Food & Beverages in Sri Lanka ~~~</h4>
          <p style={{ color: "white" }}> Food and Beverage Services means establishments or places of business primarily engaged in the sale of prepared food and beverages for on-premises consumption. Typical uses include restaurants, cafes, fast food outlets, including drive-through or drive-in establishments, and taverns.</p>
          <br />
          <div className="row">
            <br />
            <div className="col">
              <div class="card" style={{ width: "10rem" }}>
                <img class="card-img-top" src="https://res.cloudinary.com/iplus/image/upload/v1660398287/test/1382847_734143643282886_265031300_n_rqkroo.jpg" alt="Card image cap" />
              </div>
            </div>
            <div className="col">
              <div class="card" style={{ width: "10rem" }}>
                <img class="card-img-top" src="https://res.cloudinary.com/iplus/image/upload/v1660398851/test/Sri_Lankan_Rice_and_Curry_savm9a.jpg" alt="Card image cap" />
              </div>
            </div>
            <div className="col">
              <div class="card" style={{ width: "10rem" }}>
                <img class="card-img-top" src="https://res.cloudinary.com/iplus/image/upload/v1660398766/test/Eggless-Chocolate-Biscuit-Pudding2-7574-Copy-2_o2mgve.jpg" alt="Card image cap" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>



    <div style={{ paddingLeft: "1vh", paddingTop: "5vh", paddingRight: "1vh", paddingBottom: "5vh" }}>
      <h4> What's special today... Every day is a special day for us...</h4>
      <br />
      <div className="row">
        <br />
        {RoomTypes.map((food, index) => (
          <div className="col" key={index}>

            <div class="card border-success " style={{ width: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title"> Special {food.menu} Menu</h5>
                <p>{food.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  </div>



  );
};

export default FoodBeverages;
