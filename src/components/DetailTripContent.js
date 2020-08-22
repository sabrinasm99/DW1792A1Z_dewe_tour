import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import hotel from "../image/hotel.svg";
import plane from "../image/plane.svg";
import meal from "../image/meal.svg";
import time from "../image/time.svg";
import calendar from "../image/calendar.svg";
import photo1 from "../image/sydneydetail.png";
import photo2 from "../image/sydney1.png";
import photo3 from "../image/sydney2.png";
import photo4 from "../image/sydney3.png";

function DetailTripContent(props) {
  let oriPrice = props.posts.data.data.price;
  const history = useHistory();
  const { token, userId } = localStorage;
  const { id } = useParams();
  const [input, setInput] = useState({
    userId: +userId,
    counterQty: 1,
    total: oriPrice,
    status: "Waiting Payment",
    tripId: +id,
    bookingDate: (new Date()).toString().split(" ").slice(0, 4).join(" "),
  });

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const submitBooking = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/v1/transaction", input, config)
      .then((res) => {
        localStorage.setItem('orderId', res.data.data.id)
        history.push(`/payment/${res.data.data.id}`);
      })
      .catch((err) => console.log(err));
  };
  const addQty = () => {
    const newInput = {
      ...input,
      counterQty: input.counterQty + 1,
      total: input.total + oriPrice,
    };
    setInput(newInput);
  };
  const minQty = () => {
    if (input.counterQty === 1)
      setInput({ ...input, counterQty: input.counterQty });
    else {
      const newInput = {
        ...input,
        counterQty: input.counterQty - 1,
        total: input.total - oriPrice,
      };
      setInput(newInput);
    }
  };

  let detail = props.posts.data.data;

  return (
    <div className="px-56">
      <>
        <div className="px-2">
          <h1 className="text-3xl font-bold mt-10">{detail.title}</h1>
          <h4 className="font-semibold" style={{ color: "#A8A8A8" }}>
            {detail.country.name}
          </h4>
          <img src={photo1} className="w-full mt-5" />
          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="w-full">
              <img src={photo2} className="w-full" />
            </div>
            <div className="w-full">
              <img src={photo3} className="w-full" />
            </div>
            <div className="w-full relative">
              <img src={photo4} className="w-full" />
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
                <h5 className="font-bold text-sm">{detail.accomodation}</h5>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold" style={{ color: "#A8A8A8" }}>
                Transportation
              </h4>
              <div className="flex mt-1">
                <img src={plane} className="mr-2" />
                <h5 className="font-bold text-sm">{detail.transportation}</h5>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold" style={{ color: "#A8A8A8" }}>
                Eat
              </h4>
              <div className="flex mt-1">
                <img src={meal} className="mr-2" />
                <h5 className="font-bold text-sm">{detail.eat}</h5>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold" style={{ color: "#A8A8A8" }}>
                Duration
              </h4>
              <div className="flex mt-1">
                <img src={time} className="mr-2" />
                <h5 className="font-bold text-sm">
                  {detail.day} Days {detail.night} Nights
                </h5>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold" style={{ color: "#A8A8A8" }}>
                Date Trip
              </h4>
              <div className="flex mt-1">
                <img src={calendar} className="mr-2" />
                <h5 className="font-bold text-sm">{detail.dateTrip}</h5>
              </div>
            </div>
          </div>
          <h3 className="font-bold text-sm mt-8">Description</h3>
          <h4 className="text-xs" style={{ color: "#A8A8A8" }}>
            <p className="font-bold inline">
              {detail.description.split(" ")[0]}
            </p>{" "}
            {detail.description.split(" ").slice(1).join(" ")}
          </h4>
          <div className="mt-5 flex">
            <h2 className="font-bold" style={{ color: "#FFAF00" }}>
              IDR. {detail.price.toLocaleString()}{" "}
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
              <h2 className="font-bold">{input.counterQty}</h2>
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
              IDR. {input.total.toLocaleString()}
            </h2>
          </div>
        </div>
      </>
      <div className="px-2 mt-4">
        <button
          className="text-white text-sm flex ml-auto px-8 py-1 font-semibold rounded focus:outline-none"
          style={{ backgroundColor: "#FFAF00" }}
          onClick={submitBooking}
        >
          BOOK NOW
        </button>
      </div>
    </div>
  );
}

export default DetailTripContent;
