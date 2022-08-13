import React from "react";
import "./PaymentGateway.css";

import { NumberBox } from "devextreme-react/number-box";
import TextBox from "devextreme-react/text-box";
import PayImg from "../../Assets/Images/Payment_Options.jpg";
import BackImg from "../../Assets/Images/Myproject-1.png";

const PayementGateway = () => {
  const confirmPay = () => {
    alert("paid");
  };
  return (
    <div className="paymentContainer">
      <br />
      <center>
        <h3>Confirm Your Reservation</h3>
      </center>
      <div className="card" id="payementCard">
        <center>
          <br />
          <h5>Card Details</h5>
        </center>
        <br />
        <div className="cardContent">
          <span className="regFormTxt">Card Number</span>
          <NumberBox className="cardno" />

          <br />
          <span className="regFormTxt">Card Holder Name</span>
          <TextBox placeholder="John Smith" className="cardno" />
          <br />
          <div className="row">
            <div className="col">
              <span>Expire Month & Year</span>
              <div className="row">
                <div className="col">
                  <NumberBox />
                </div>
                <div className="col">
                  <NumberBox />
                </div>
              </div>
            </div>
            <div className="col">
              <span>CVC Number</span>
              <NumberBox />
            </div>
          </div>
          <br />
          <center>
            <img src={PayImg} className="paymentImg" />
            <br />
            <br />
            <button
              type="button"
              class="btn btn-outline-primary"
              onClick={() => confirmPay()}
            >
              Confirm Pyament
            </button>
          </center>
          <br />
          <br />
        </div>
      </div>
      <br />
    </div>
  );
};

export default PayementGateway;
