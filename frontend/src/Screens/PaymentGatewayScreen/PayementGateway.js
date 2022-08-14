import React, { useState } from "react";
import "./PaymentGateway.css";

import { NumberBox } from "devextreme-react/number-box";
import TextBox from "devextreme-react/text-box";
import PayImg from "../../Assets/Images/Payment_Options.jpg";
import BackImg from "../../Assets/Images/Myproject-1.png";
import { Toast } from "devextreme-react/toast";
import axios from "axios";
import { useNavigate } from "react-router";

const PayementGateway = () => {
  const [cardNo, setCardNo] = useState(0);
  const [cardHolder, setCardHolder] = useState();
  const [cardCvc, setCardCvc] = useState(0);
  const [cardMon, setCardMon] = useState(0);
  const [cardYer, setCardYer] = useState(0);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastmessage, settoastmessage] = useState("");
  const [toastType, settoastType] = useState("");

  const navigate = useNavigate();

  const confirmPay = async () => {
    console.log(cardCvc, cardHolder, cardMon, cardNo, cardYer);
    if (
      cardCvc === "0" ||
      cardHolder === "" ||
      cardMon === "0" ||
      cardNo === "0" ||
      cardYer === "0"
    ) {
      setToastVisible(true);
      settoastmessage("Please fill all the fields");
      settoastType("error");
    } else {
      const confirm = JSON.parse(localStorage.getItem("reservation"));
      confirm["confirmed"] = true;
      await axios
        .post(`http://localhost:5000/reservation/reservation`, confirm)
        .then((res) => {
          console.log(res);
          setToastVisible(true);
          settoastmessage("Payment Successfull & Reservation Completed");
          settoastType("success");
          setTimeout(() => navigate("/accommadation"), 1550);
        })
        .catch((err) => {
          console.log(err);
          setToastVisible(true);
          settoastmessage("Payment Failed");
          settoastType("error");
        });
    }
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
          <NumberBox className="cardno" onValueChange={(e) => setCardNo(e)} />

          <br />
          <span className="regFormTxt">Card Holder Name</span>
          <TextBox
            placeholder="John Smith"
            className="cardno"
            onValueChange={(e) => setCardHolder(e)}
          />
          <br />
          <div className="row">
            <div className="col">
              <span>Expire Month & Year</span>
              <div className="row">
                <div className="col">
                  <NumberBox onValueChange={(e) => setCardMon(e)} />
                </div>
                <div className="col">
                  <NumberBox onValueChange={(e) => setCardYer} />
                </div>
              </div>
            </div>
            <div className="col">
              <span>CVC Number</span>
              <NumberBox onValueChange={(e) => setCardCvc(e)} />
            </div>
          </div>
          <br />
          <center>
            <Toast
              visible={toastVisible}
              message={toastmessage}
              type={toastType}
              onHiding={() => setToastVisible(false)}
              displayTime={1500}
            />
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
