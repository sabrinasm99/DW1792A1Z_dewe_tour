import React, { useState } from "react";
import { Link } from "react-router-dom";
import sydneydetail from "../image/sydneydetail.png";
import sydney1 from "../image/sydney1.png";
import sydney2 from "../image/sydney2.png";
import sydney3 from "../image/sydney3.png";
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
  return (
    <div className="px-56">
      <div className="px-2">
        <h1 className="text-3xl font-bold mt-10">
          6D/4N Fun Tassie Vacation + Sydney
        </h1>
        <h4 className="font-semibold" style={{ color: "#A8A8A8" }}>
          Australia
        </h4>
        <img src={sydneydetail} className="w-full mt-5" />
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="w-full">
            <img src={sydney1} className="w-full" />
          </div>
          <div className="w-full">
            <img src={sydney2} className="w-full" />
          </div>
          <div className="w-full relative">
            <img src={sydney3} className="w-full" />
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
              <h5 className="font-bold text-sm">Hotel 4 Nights</h5>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold" style={{ color: "#A8A8A8" }}>
              Transportation
            </h4>
            <div className="flex mt-1">
              <img src={plane} className="mr-2" />
              <h5 className="font-bold text-sm">Qatar Airways</h5>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold" style={{ color: "#A8A8A8" }}>
              Eat
            </h4>
            <div className="flex mt-1">
              <img src={meal} className="mr-2" />
              <h5 className="font-bold text-sm">Included as ltinerary</h5>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold" style={{ color: "#A8A8A8" }}>
              Duration
            </h4>
            <div className="flex mt-1">
              <img src={time} className="mr-2" />
              <h5 className="font-bold text-sm">6 Days 4 Nights</h5>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold" style={{ color: "#A8A8A8" }}>
              Date Trip
            </h4>
            <div className="flex mt-1">
              <img src={calendar} className="mr-2" />
              <h5 className="font-bold text-sm">26 August 2020</h5>
            </div>
          </div>
        </div>
        <h3 className="font-bold text-sm mt-8">Description</h3>
        <p className="text-xs" style={{ color: "#A8A8A8" }}>
          <p className="font-bold inline">Lorem Ipsum</p> is simply dummy text
          of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
        <div className="mt-5 flex">
          <h2 className="font-bold" style={{ color: "#FFAF00" }}>
            IDR. 12,398,000 <h2 className="inline text-black">/ Person</h2>
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
