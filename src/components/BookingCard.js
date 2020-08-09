import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import qrcode from "../image/qrcode.svg";
import icon2 from "../image/icon2.svg";
import payment from "../image/payment.png";

function BookingCard() {
  const [statusTransaction, setStatusTransaction] = useState("Waiting Payment");
  const location = useLocation();
  const [modalPayment, setModalPayment] = useState(false);
  useEffect(() => {
    if (localStorage.status) {
      setStatusTransaction("Waiting Approve");
    }
  });
  const changeStatusTransaction = () => {
    localStorage.setItem("status", "paid off");
    setStatusTransaction("Waiting Approve");
    changeModalPayment();
  };
  const changeModalPayment = () => {
    setModalPayment(!modalPayment);
  };
  useEffect(() => {
    if (localStorage.status) {
      setStatusTransaction("Waiting Approve");
    }
  });
  let boxModalPayment = null;
  if (modalPayment)
    boxModalPayment = (
      <>
        <div
          className={`${
            modalPayment ? "block" : "hidden"
          } absolute bg-white rounded px-10 py-1 text-center`}
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, 0)",
            zIndex: 200,
          }}
        >
          <h3>Your payment will be confirmed within 1 x 24 hours</h3>
          <h3>
            To see orders click{" "}
            <Link to="/profile">
              <h3
                onClick={changeModalPayment}
                className="inline font-bold cursor-pointer"
              >
                Here
              </h3>{" "}
            </Link>
            thank you
          </h3>
        </div>
        <div
          onClick={changeModalPayment}
          style={{
            position: "fixed",
            zIndex: 199,
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        />
      </>
    );
  return (
    <>
      <div
        className={`${
          location.pathname === "/profile" ? "mt-8" : "mt-0"
        } bg-white rounded border-2 py-2 px-4`}
        style={{ borderColor: "#B7B7B7" }}
      >
        {/* <div className=""> */}
        <div className="flex">
          <img src={icon2} />
          <div className="ml-auto flex items-center">
            <h2 className="text-3xl font-bold">Booking</h2>
          </div>
        </div>
        <div className="flex">
          <h4 className="ml-auto" style={{ color: "#878787" }}>
            <h4 className="font-bold inline">Saturday</h4>, 22 July 2020
          </h4>
        </div>
        <div className="flex">
          <div className="flex w-4/5">
            <div className="w-1/2">
              <h2 className="text-xl font-bold">6D/4N Fun Tassie Vacation</h2>

              <h4 className="text-sm" style={{ color: "#959595" }}>
                Australia
              </h4>
              <div
                className={`${
                  location.pathname === "/profile"
                    ? "bg-green-100"
                    : "bg-red-100"
                } mt-5 text-sm py-1 w-1/3 text-center rounded`}
                style={
                  location.pathname === "/profile"
                    ? { color: "#0BDC5F" }
                    : localStorage.status
                    ? { color: "#FF9900" }
                    : { color: "#EC7A7A" }
                }
              >
                {`${
                  location.pathname === "/profile"
                    ? "Approve"
                    : statusTransaction
                }`}
              </div>
            </div>
            <div className="w-1/4">
              <h2 className="ml-auto font-bold">Date Trip</h2>
              <h4 className="text-sm" style={{ color: "#959595" }}>
                26 August 2020
              </h4>
              <h2 className="font-bold mt-5">Accomodation</h2>
              <h4 className="text-sm" style={{ color: "#959595" }}>
                Hotel 4 Nights
              </h4>
            </div>
            <div className="w-1/4">
              <h2 className="font-bold">Duration</h2>
              <h4 className="text-sm" style={{ color: "#959595" }}>
                6 Day 4 Night
              </h4>
              <h2 className="font-bold mt-5">Transportation</h2>
              <h4 className="text-sm" style={{ color: "#959595" }}>
                Qatar Airways
              </h4>
            </div>
          </div>
          <div className="w-1/5">
            {location.pathname === "/profile" ? (
              <img src={qrcode} className="ml-auto" />
            ) : (
              <img src={payment} className="border-2 border-black ml-auto" />
            )}
          </div>
        </div>
        <div className="flex">
          <h5 className="ml-auto text-xs">
            {location.pathname === "/profile"
              ? "TCK0101"
              : "upload payment proof"}
          </h5>
        </div>
        <div
          className="flex border-b-2"
          style={{ borderColor: "rgba(183, 183, 183, 0.5)" }}
        >
          <div className="w-2/3 flex">
            <h2 className="w-1/4 font-bold">No</h2>
            <h2 className="w-1/4 font-bold">Full Name</h2>
            <h2 className="w-1/4 font-bold">Gender</h2>
            <h2 className="w-1/4 font-bold">Phone</h2>
          </div>
        </div>
        <div
          className="border-b-2 flex"
          style={{ borderColor: "rgba(183, 183, 183, 0.5)" }}
        >
          <div className="w-2/3 flex py-1" style={{ color: "#B1B1B1" }}>
            <h2 className="w-1/4">1</h2>
            <h2 className="w-1/4">Radif Ganteng</h2>
            <h2 className="w-1/4">Male</h2>
            <h2 className="w-1/4">083896833112</h2>
          </div>
          <div className="w-1/3 flex font-bold">
            <h2 className="w-1/2">Qty</h2>
            <h2 className="w-1/2">: 1</h2>
          </div>
        </div>
        <div className="flex font-bold">
          <div className="w-2/3">{""}</div>
          <div className="w-1/3 flex pt-2">
            <h2 className="w-1/2">Total</h2>
            <h2 className="w-1/2">
              :{" "}
              <h2 className="inline" style={{ color: "#FF0000" }}>
                IDR. 12,398,000
              </h2>
            </h2>
          </div>
        </div>
        {/* </div> */}
      </div>
      <button
        onClick={changeStatusTransaction}
        className={`${
          localStorage.status || location.pathname === "/profile"
            ? "hidden"
            : "block"
        } flex ml-auto rounded px-16 py-2 text-white text-sm font-semibold`}
        style={{ backgroundColor: "#FFAF00", marginTop: "20.5px" }}
      >
        PAY
      </button>
      {boxModalPayment}
    </>
  );
}

export default BookingCard;
