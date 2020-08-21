import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { userDataTrip } from "../../fakedata/DataTrip";
import icon2 from "../../image/icon2.svg";

function BookingCard({ posts }) {
  const location = useLocation();
  const [modalPayment, setModalPayment] = useState(false);
  const [fileURL, setFileURL] = useState(null);
  const [fileObj, setFileObj] = useState(null);
  
  const changeModalPayment = () => {
    setModalPayment(!modalPayment);
  };
  const handleChangeImage = (e) => {
    let file = e.target.files[0];
    if (file) {
      setFileURL(URL.createObjectURL(file));
      setFileObj(file);
    } else {
      setFileURL(null);
      setFileObj(null);
    }
  };

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
            <p
              onClick={changeModalPayment}
              className="inline font-bold cursor-pointer"
            >
              Here
            </p>{" "}
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
  const detail = posts.data.data;
  let newUserDataTrip = null;
  if (detail) {
    newUserDataTrip = (
      <div
        className={`${
          location.pathname === "/profile" ? "mt-8" : "mt-0"
        } bg-white rounded border-2 py-2 px-4`}
        style={{ borderColor: "#B7B7B7" }}
      >
        <div className="flex">
          <img src={icon2} />
          <div className="ml-auto flex items-center">
            <h2 className="text-3xl font-bold">Booking</h2>
          </div>
        </div>
        <div className="flex">
          <h4 className="ml-auto" style={{ color: "#878787" }}>
            <p className="font-bold inline">Saturday</p>, Tanggal Manual
          </h4>
        </div>
        <div className="flex">
          <div className="flex w-4/5">
            <div className="w-1/2">
              <h2 className="text-xl font-bold">{detail.trip.title}</h2>

              <h4 className="text-sm" style={{ color: "#959595" }}>
                {detail.trip.country.name}
              </h4>
              <div
                className={`${
                  detail.status === "Approve"
                    ? "bg-green-100"
                    : detail.status === "Waiting Approve"
                    ? "bg-orange-100"
                    : "bg-red-100"
                } mt-5 text-sm py-1 w-1/3 text-center rounded`}
                style={
                  location.pathname === "/profile"
                    ? { color: "#0BDC5F" }
                    : localStorage.status ||
                      location.pathname === "/list-transaction"
                    ? { color: "#FF9900" }
                    : { color: "#EC7A7A" }
                }
              >
                {detail.status}
              </div>
            </div>
            <div className="w-1/4">
              <h2 className="ml-auto font-bold">Date Trip</h2>
              <h4 className="text-sm" style={{ color: "#959595" }}>
                {detail.trip.dateTrip}
              </h4>
              <h2 className="font-bold mt-5">Accomodation</h2>
              <h4 className="text-sm" style={{ color: "#959595" }}>
                {detail.trip.accomodation}
              </h4>
            </div>
            <div className="w-1/4">
              <h2 className="font-bold">Duration</h2>
              <h4 className="text-sm" style={{ color: "#959595" }}>
                {detail.trip.day} Days {detail.trip.night} Nights
              </h4>
              <h2 className="font-bold mt-5">Transportation</h2>
              <h4 className="text-sm" style={{ color: "#959595" }}>
                {detail.trip.transportation}
              </h4>
            </div>
          </div>
          <div className="w-1/5">
            {/* {location.pathname === "/profile" ? (
                <img src={val.qrcode} className="ml-auto" />
              ) : (
                <img
                  src={val.paymentProof}
                  className="border-2 border-black ml-auto"
                />
              )} */}
            <div className="flex flex-col h-full w-full">
              {fileURL ? (
                <img src={fileURL} className="w-1/2" alt="image" />
              ) : (
                <div
                  className="w-full flex justify-center items-center text-center h-full"
                  style={{
                    backgroundColor: "lightgray",
                  }}
                >
                  <span
                    style={{
                      color: "grey",
                      letterSpacing: "1px",
                      fontWeight: 400,
                    }}
                    className="px-1 text-sm"
                  >
                    NO PAYMENT PROOF
                  </span>
                </div>
              )}
              <input
                type="file"
                onChange={handleChangeImage}
                accept="image/*"
                className="mt-1"
              />
            </div>
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
            <h2 className="w-1/4 font-bold">ID Order</h2>
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
            <h2 className="w-1/4">{detail.id}</h2>
            <h2 className="w-1/4">{detail.name}</h2>
            <h2 className="w-1/4">Gender Manual</h2>
            <h2 className="w-1/4">Phone Manual</h2>
          </div>
          <div className="w-1/3 flex font-bold">
            <h2 className="w-1/2">Qty</h2>
            <h2 className="w-1/2">: {detail.counterQty}</h2>
          </div>
        </div>
        <div className="flex font-bold">
          <div className="w-1/3 ml-auto flex pt-2">
            <h2 className="w-1/2">Total</h2>
            <h2 className="w-1/2">
              :{" "}
              <p className="inline" style={{ color: "#FF0000" }}>
                IDR. {detail.total.toLocaleString()}
              </p>
            </h2>
          </div>
        </div>
        <div
          className={`${
            location.pathname === "/list-transaction" ? "flex" : "hidden"
          } mt-5 text-white`}
        >
          <div className="ml-auto">
            <button
              className="px-3 py-1 font-semibold rounded mr-3"
              style={{ backgroundColor: "#FF0742" }}
            >
              Cancel
            </button>
            <button
              className="px-3 py-1 font-semibold rounded"
              style={{ backgroundColor: "#0ACF83" }}
            >
              Approve
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      {newUserDataTrip}
      <button
        className={`${
          localStorage.status ||
          location.pathname === "/profile" ||
          location.pathname === "/list-transaction"
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
