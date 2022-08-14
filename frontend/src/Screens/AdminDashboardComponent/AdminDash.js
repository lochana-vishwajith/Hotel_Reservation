import axios from "axios";
import React, { useEffect, useState } from "react";
import "./AdminDash.css";
import moment from "moment";
import { Toast } from "devextreme-react/toast";
import jsPDF from "jspdf";
import "jspdf-autotable";

const AdminDash = () => {
  const [reservation, setReservation] = useState([]);

  const [toastVisible, setToastVisible] = useState(false);
  const [toastmessage, settoastmessage] = useState("");
  const [toastType, settoastType] = useState("");
  const [monthly, setMonthly] = useState();

  const generateReport = () => {
    console.log("ss");
    const doc = new jsPDF();
    const title = "Monthly Reservation Summary";
    doc.setFontSize(15);
    doc.setTextColor(128, 0, 0);
    doc.text(title, 100, 10, null, null, "center");
    doc.setTextColor(0);
    doc.setFontSize(12);
    doc.text(`Monthly Income : ${monthly}`, 20, 30, null, null);
    doc.text(
      `Generated Date: ${moment(Date.now()).format("YYYY-MM-DD")}`,
      120,
      30,
      null,
      null
    );
    doc.setFontSize(8);
    doc.text(
      `*This Report is automatically generated by Olive Garden Resturant web application.`,
      20,
      35,
      null,
      null
    );

    const headers = [
      [
        "No",
        "Reserved By",
        "Country",
        "Email",
        "Check-In Date",
        "Check-out Date",
        "Reserved Date",
        "Room Price",
      ],
    ];

    const data = reservation.map((reserve, index) => [
      index,
      reserve.customerId.fullName,
      reserve.customerId.country,
      reserve.customerId.email,
      moment(reserve.checkInDate).format("DD/MM/YYYY"),
      moment(reserve.checkOutDate).format("DD/MM/YYYY"),
      moment(reserve.reservedDate).format("DD/MM/YYYY"),
      reserve.price,
    ]);
    let contents = {
      startY: 40,
      head: headers,
      body: data,
    };
    doc.autoTable(contents);
    doc.save("Reservation_Report.pdf");
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/reservation/reservation`)
      .then((res) => {
        console.log(res);
        getMontlyDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
        setToastVisible(true);
        settoastmessage("Payment Failed");
        settoastType("error");
      });
  }, []);

  const getMontlyDetails = (data) => {
    let currentDate = moment().format("YYYY-MM-DD");
    let startMonth = moment(currentDate).startOf("month");
    let endMonth = moment(currentDate).endOf("month");

    let monthly = [];
    let total = 0;

    data.forEach((val) => {
      if (
        startMonth.diff(moment(val.reservedDate).format("YYYY-MM-DD")) <= 0 &&
        endMonth.diff(moment(val.reservedDate).format("YYYY-MM-DD")) >= 0
      ) {
        console.log("val", val);
        monthly.push(val);
        let price = val.price.split("$");
        console.log(price[1]);
        total = Number(total) + Number(price[1]);
      }
    });
    console.log(monthly.length);
    setMonthly(total);
    setReservation(monthly);
  };

  return (
    <div className="adminDashContainer">
      <div className="row">
        <div className="col">
          <h4>Monthly Reservation Summay</h4>
        </div>
        <div className="col">
          <button
            type="button"
            id="downloadBtn"
            class="btn btn-outline-dark"
            onClick={() => generateReport()}
          >
            Download Report
          </button>
        </div>
      </div>
      <hr />
      <br />
      <div className="row">
        <div className="col">
          <div className="card" id="txtCard">
            <div className="txt">
              <center>
                <span className="incomeTxt">Monthly Income : ${monthly}</span>
              </center>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" id="txtCard">
            <div className="txt">
              <center>
                <span className="incomeTxt">
                  Number Of Reservations : {reservation.length}
                </span>
              </center>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Reserved By</th>
            <th scope="col">Country</th>
            <th scope="col">Email</th>
            <th scope="col">Check-In Date</th>
            <th scope="col">Check-out Date</th>
            <th scope="col">Reserved Date</th>
            <th scope="col">Room Price</th>
          </tr>
        </thead>
        <tbody>
          {reservation.map((reserve, index) => (
            <tr key={index}>
              <th scope="row">{index}</th>
              <td>{reserve.customerId.fullName}</td>
              <td>{reserve.customerId.country}</td>
              <td>{reserve.customerId.email}</td>
              <td>{moment(reserve.checkInDate).format("DD/MM/YYYY")}</td>
              <td>{moment(reserve.checkOutDate).format("DD/MM/YYYY")}</td>
              <td>{moment(reserve.reservedDate).format("DD/MM/YYYY")}</td>
              <td>{reserve.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
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

export default AdminDash;
