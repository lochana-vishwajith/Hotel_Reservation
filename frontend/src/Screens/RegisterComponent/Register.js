import React, { useEffect, useState } from "react";
import TextBox from "devextreme-react/text-box";
import "./Register.css";
import { Toast } from "devextreme-react/toast";
import LogoImage from "../../Assets/Images/oie_8ndMsF0hLOiZ.png";
import { Link } from "react-router-dom";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [nic, setNic] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [toastmessage, settoastmessage] = useState("");
  const [toastType, settoastType] = useState("");

  const registerUser = () => {
    if (
      fullName === "" ||
      address === "" ||
      nic === "" ||
      phone === "" ||
      country === "" ||
      email === ""
    ) {
      setToastVisible(true);
      settoastmessage("Please fill all the fields");
      settoastType("error");
    }
  };

  return (
    <div class="container">
      <div className="row">
        <div className="col-xl-7" id="regImageCol">
          <span className="welcomeTxt">WELCOME TO OLIVE GARDEN RESTURANT</span>
          <br />
          <img src={LogoImage} className="logo" />
          <br />
          <center>
            <span className="loginReqTxt">
              Already have an account? <Link to={"/login"}>Login</Link>
            </span>
          </center>
        </div>
        <div className="col-sm-4" id="regFormCol">
          <label className="regFormTxt">Full Name</label>
          <br />
          <TextBox
            showClearButton={true}
            placeholder="John Smith"
            onChange={(val) => setFullName(val)}
          />
          <br />
          <span className="regFormTxt">Address</span>
          <br />
          <TextBox
            showClearButton={true}
            placeholder="N0 3, ABC Street, DYK"
            onChange={(val) => setAddress(val)}
          />

          <br />
          <span className="regFormTxt">Country</span>
          <br />
          <TextBox
            showClearButton={true}
            placeholder="Sri Lanka"
            onChange={(val) => setCountry(val)}
          />

          <br />
          <span className="regFormTxt">NIC / Passport</span>
          <br />
          <TextBox
            showClearButton={true}
            placeholder="123456789V"
            onChange={(val) => setNic(val)}
          />

          <br />
          <span className="regFormTxt">Phone Number</span>
          <br />
          <TextBox
            showClearButton={true}
            placeholder="070* *** ***"
            onChange={(val) => setPhoneNumber(val)}
          />

          <br />
          <span className="regFormTxt">Email</span>
          <br />
          <TextBox
            showClearButton={true}
            placeholder="abc@gmail.com"
            onChange={(val) => setEmail(val)}
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
              class="btn btn-outline-primary"
              onClick={() => registerUser()}
            >
              Register User Details
            </button>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Register;
