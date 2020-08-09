import React, { useState } from "react";
import { Link } from "react-router-dom";
import { detailTrip } from "../fakedata/DataTrip";
import hotel from "../image/hotel.svg";
import plane from "../image/plane.svg";
import meal from "../image/meal.svg";
import time from "../image/time.svg";
import calendar from "../image/calendar.svg";

function DetailTripContent() {
  const [qty, setQty] = useState(1);
  const addQty = () => {
    setQty(qty + 1);
  };
  const minQty = () => {
    if (qty === 1) setQty(qty);
    else {
      setQty(qty - 1);
    }
  };
  let newDetailTrip = detailTrip.map((val) => {
    return (
      <React.Fragment key={val.id}>
        <div className="px-2">
          <h1 className="text-3xl font-bold mt-10">{val.title}</h1>
          <h4 className="font-semibold" style={{ color: "#A8A8A8" }}>
            {val.country}
          </h4>
          <img src={val.photo1} className="w-full mt-5" />
          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="w-full">
              <img src={val.photo2} className="w-full" />
            </div>
            <div className="w-full">
              <img src={val.photo3} className="w-full" />
            </div>
            <div className="w-full relative">
              <img src={val.photo4} className="w-full" />
              <div
                className="absolute text-lg text-white font-bold"
                style={{ top: "50%", left: "50%" }}
              >
                +5
              </div>
            </div>
          </div>
          <h3 className="mt-6 text-sm font-bold">Information Trip</h3>
          <div className="mt-3 grid grid-cols-5 gap-2">
            <div>
              <h4 className="text-xs font-bold" style={{ color: "#A8A8A8" }}>
                Accomodation
              </h4>
              <div className="flex mt-1">
                <img src={hotel} className="mr-2" />
                <h5 className="font-bold text-sm">{val.accomodation}</h5>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold" style={{ color: "#A8A8A8" }}>
                Transportation
              </h4>
              <div className="flex mt-1">
                <img src={plane} className="mr-2" />
                <h5 className="font-bold text-sm">{val.transportation}</h5>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold" style={{ color: "#A8A8A8" }}>
                Eat
              </h4>
              <div className="flex mt-1">
                <img src={meal} className="mr-2" />
                <h5 className="font-bold text-sm">{val.eat}</h5>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold" style={{ color: "#A8A8A8" }}>
                Duration
              </h4>
              <div className="flex mt-1">
                <img src={time} className="mr-2" />
                <h5 className="font-bold text-sm">{val.duration}</h5>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold" style={{ color: "#A8A8A8" }}>
                Date Trip
              </h4>
              <div className="flex mt-1">
                <img src={calendar} className="mr-2" />
                <h5 className="font-bold text-sm">{val.dateTrip}</h5>
              </div>
            </div>
          </div>
          <h3 className="font-bold text-sm mt-8">Description</h3>
          <h4 className="text-xs" style={{ color: "#A8A8A8" }}>
            <p className="font-bold inline">{val.headDescription}</p>{" "}
            {val.description}
          </h4>
          <div className="mt-5 flex">
            <h2 className="font-bold" style={{ color: "#FFAF00" }}>
              IDR. {val.price.toLocaleString()}{" "}
              <p className="inline text-black">/ Person</p>
            </h2>
            <div className="ml-auto grid grid-cols-3 gap-1 text-center">
              <button
                onClick={minQty}
                className="font-bold text-white px-1 rounded-full text-lg focus:outline-none"
                style={{ backgroundColor: "#FFAF00" }}
              >
                -
              </button>
              <h2 className="font-bold">{qty}</h2>
              <button
                onClick={addQty}
                className="font-bold text-white px-1 rounded-full text-lg focus:outline-none"
                style={{ backgroundColor: "#FFAF00" }}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div
          className="border-t-2 border-b-2 mt-3 mb-3"
          style={{ borderColor: "rgba(183, 183, 183, 0.5)" }}
        >
          <div className="py-2 px-1 font-bold flex">
            <h2 className="w-1/2">Total</h2>
            <h2 className="w-1/2 text-right" style={{ color: "#FFAF00" }}>
              IDR. 12,398,000
            </h2>
          </div>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div className="px-56">
      {newDetailTrip}
      <div className="px-2 mt-4">
        <Link to="/payment">
          <button
            className="text-white text-sm flex ml-auto px-8 py-1 font-semibold rounded focus:outline-none"
            style={{ backgroundColor: "#FFAF00" }}
          >
            BOOK NOW
          </button>
        </Link>
      </div>
    </div>
  );
}

export default DetailTripContent;
