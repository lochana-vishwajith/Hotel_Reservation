import React from "react";
import Banner from "../../Components/Banner/Banner"

import "./Home.css";
const Home = () => {
  return (
    <div >
      <Banner />
      <div className="home">
        <div style={{ paddingLeft: "19vh", paddingTop: "2vh" }}>
          <div className="row">
            <div className="col-6">
              <h4 style={{ color: "green" }}>Experience the beauty and serenity of Sri Lanka</h4>
              <p style={{ color: "white" }}>Sri Lanka is a beautiful, exotic destination full of culture, nature, wildlife, and smiling faces. For a country with such a violent (and recently so, at that) history, the island is actually home to some of the friendliest people out there.Experience the beauty and serenity of Sri Lanka’s scenic hill country within the luxurious comforts of a boutique hotel par excellence. 98 Acres Resort and Spa is an elegant, chic hotel that stands on a scenic 198 acre tea estate, surrounded by a stunning landscape.</p>            </div>
          </div>
          <div className="col-6">
          </div>
        </div>
      </div>


      <div style={{ paddingLeft: "3vh", paddingTop: "3vh", paddingRight: "3vh", paddingBottom: "3vh" }}>
        <div class="row">
          <div class="col">
            <div class="card">
              <img class="card-img-top" src="https://res.cloudinary.com/iplus/image/upload/v1660382858/test/11856-the-majestic-yosemite-hotel-dining-room-1000_fwjahh.jpg" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Foods & Beverages</h5>
                <p class="card-text">Food and Beverage Services can be broadly defined as the process of preparing, presenting .</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img class="card-img-top" src="https://res.cloudinary.com/iplus/image/upload/v1660382857/test/photo-1611892440504-42a792e24d32_fn2nvd.jpg" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Accommodation</h5>
                <p class="card-text">The resort is made up of several beautifully crafted chalets tucked within the leveled landscape of the plantation.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>          </div>
          <div class="col">
            <div class="card">
              <img class="card-img-top" src="https://res.cloudinary.com/iplus/image/upload/v1660383042/test/ssss_tf7xlp.jpg" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Things To Do</h5>
                <p class="card-text">Olive Garden is probably one of Sri Lanka’s best kept secrets that offers plenty to keep you fascinated.</p>
                <a href="/thingsToDo" class="btn btn-primary">Explore</a>
              </div>
            </div>          </div>
        </div>
      </div>
      <div className="middlepic" style={{color: '#fff', background: 'url(https://res.cloudinary.com/iplus/image/upload/v1660386387/test/banner1_copy_lkhqr3.png) bottom right 12% no-repeat #46B6AC'}}>



        <div style={{ paddingLeft: "26vh", paddingTop: "3vh", paddingRight: "16vh", paddingBottom: "4vh" }}>
          <div class="row">
            <div class="col">
              <div class="card" style={{ width: "28rem" }}>
                <a href="https://www.google.com/maps/place/Nanuoya/@6.9408098,80.7332468,15z/data=!4m13!1m7!3m6!1s0x3ae3816b190f1fbf:0xfe235f7181c8688d!2sNanuoya!3b1!8m2!3d6.9403158!4d80.7408429!3m4!1s0x3ae3816b3434868d:0xa5086abd51b6a738!8m2!3d6.94235!4d80.74372">
                <img class="card-img-top" src="https://res.cloudinary.com/iplus/image/upload/v1660384974/test/Untitled_yg39jq.png" alt="Card image cap" />
                </a>
              </div>
            </div>
            <div class="col">
              <div>
             
              <p style={{ color: "white" }}>Location: Located in Nanuoya, near Nuwaraeliya, within the Uva province of Sri Lanka, 198 Acres Resort and Spa stands surrounded with a tea estate.Easy access to Nanuoya train staion, Nuwaraeliya town.</p>

              </div>
            </div>
          </div>
        </div>

      </div>



    </div>
  );

};

export default Home;
