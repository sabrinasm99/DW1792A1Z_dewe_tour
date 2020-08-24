import React, { useState } from "react";
import axios from "axios";

function AddTripContent({ posts }) {
  const [inputTrip, setInputTrip] = useState({
    title: "",
    countryId: "",
    accomodation: "",
    transportation: "",
    eat: "",
    day: "",
    night: "",
    dateTrip: "",
    price: "",
    quota: "",
    description: "",
  });
  const [fileURL, setFileURL] = useState(null);
  const [fileObj, setFileObj] = useState(null);

  const token = localStorage.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "multipart/form-data",
    },
  };

  const handleChange = (e) => {
    setInputTrip({ ...inputTrip, [e.target.name]: e.target.value });
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
  const submitAddTrip = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("tripImage", fileObj);
    formData.append("title", inputTrip.title);
    formData.append("countryId", inputTrip.countryId);
    formData.append("accomodation", inputTrip.accomodation);
    formData.append("transportation", inputTrip.transportation);
    formData.append("eat", inputTrip.eat);
    formData.append("day", inputTrip.day);
    formData.append("night", inputTrip.night);
    formData.append("dateTrip", inputTrip.dateTrip);
    formData.append("price", inputTrip.price);
    formData.append("quota", inputTrip.quota);
    formData.append("description", inputTrip.description);
    axios
      .post("http://localhost:5000/api/v1/trip", formData, config)
      .then((res) => {
        const newInputTrip = {
          title: "",
          countryId: "",
          accomodation: "",
          transportation: "",
          eat: "",
          day: "",
          night: "",
          dateTrip: "",
          price: "",
          quota: "",
          description: "",
        };
        setInputTrip(newInputTrip);
        setFileObj(null);
        setFileURL(null);
        alert(res.data.message);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="mt-20 px-24">
        <h1 className="text-2xl font-bold">Add Trip</h1>
      </div>
      <div className="mt-8 px-32 w-full">
        <form onSubmit={submitAddTrip}>
          <div>
            <label className="font-bold pl-1">Title Trip</label>
            <input
              type="text"
              name="title"
              value={inputTrip.title}
              onChange={handleChange}
              className="border block w-full rounded pl-1 focus:outline-none mt-2"
              style={{
                backgroundColor: "rgba(196, 196, 196, 0.5)",
                borderColor: "#B1B1B1",
              }}
            />
          </div>
          <div className="mt-5">
            <label className="font-bold pl-1">Country</label>
            <select
              name="countryId"
              value={inputTrip.countryId}
              className="border block w-full rounded pl-1 focus:outline-none mt-2"
              style={{
                backgroundColor: "rgba(196, 196, 196, 0.5)",
                borderColor: "#B1B1B1",
              }}
              onChange={handleChange}
            >
              <option> </option>
              {posts.data.data.map((val) => {
                return (
                  <option key={val.id} value={val.id}>
                    {val.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mt-5">
            <label className="font-bold pl-1">Accomodation</label>
            <input
              type="text"
              name="accomodation"
              value={inputTrip.accomodation}
              onChange={handleChange}
              className="border block w-full rounded pl-1 focus:outline-none mt-2"
              style={{
                backgroundColor: "rgba(196, 196, 196, 0.5)",
                borderColor: "#B1B1B1",
              }}
            />
          </div>
          <div className="mt-5">
            <label className="font-bold pl-1">Transportation</label>
            <input
              type="text"
              name="transportation"
              value={inputTrip.transportation}
              onChange={handleChange}
              className="border block w-full rounded pl-1 focus:outline-none mt-2"
              style={{
                backgroundColor: "rgba(196, 196, 196, 0.5)",
                borderColor: "#B1B1B1",
              }}
            />
          </div>
          <div className="mt-5">
            <label className="font-bold pl-1">Eat</label>
            <input
              type="text"
              name="eat"
              value={inputTrip.eat}
              onChange={handleChange}
              className="border block w-full rounded pl-1 focus:outline-none mt-2"
              style={{
                backgroundColor: "rgba(196, 196, 196, 0.5)",
                borderColor: "#B1B1B1",
              }}
            />
          </div>
          <div className="mt-5">
            <label className="font-bold pl-1">Duration</label>
            <div className="flex mt-2">
              <div className="mr-12 flex">
                <input
                  type="number"
                  name="day"
                  value={inputTrip.day}
                  onChange={handleChange}
                  className="border rounded pl-1 focus:outline-none mr-3"
                  style={{
                    backgroundColor: "rgba(196, 196, 196, 0.5)",
                    borderColor: "#B1B1B1",
                  }}
                />
                <h3>Day</h3>
              </div>
              <div className="flex">
                <input
                  type="number"
                  name="night"
                  value={inputTrip.night}
                  onChange={handleChange}
                  className="border rounded pl-1 focus:outline-none mr-3"
                  style={{
                    backgroundColor: "rgba(196, 196, 196, 0.5)",
                    borderColor: "#B1B1B1",
                  }}
                />
                <h3>Night</h3>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <label className="font-bold pl-1">Date Trip</label>
            <input
              type="text"
              name="dateTrip"
              value={inputTrip.dateTrip}
              onChange={handleChange}
              className="border block w-full rounded pl-1 focus:outline-none mt-2"
              style={{
                backgroundColor: "rgba(196, 196, 196, 0.5)",
                borderColor: "#B1B1B1",
              }}
            />
          </div>
          <div className="mt-5">
            <label className="font-bold pl-1">Price</label>
            <input
              type="text"
              name="price"
              value={inputTrip.price}
              onChange={handleChange}
              className="border block w-full rounded pl-1 focus:outline-none mt-2"
              style={{
                backgroundColor: "rgba(196, 196, 196, 0.5)",
                borderColor: "#B1B1B1",
              }}
            />
          </div>
          <div className="mt-5">
            <label className="font-bold pl-1">Quota</label>
            <input
              type="text"
              name="quota"
              value={inputTrip.quota}
              onChange={handleChange}
              className="border block w-full rounded pl-1 focus:outline-none mt-2"
              style={{
                backgroundColor: "rgba(196, 196, 196, 0.5)",
                borderColor: "#B1B1B1",
              }}
            />
          </div>
          <div className="mt-5">
            <label className="font-bold pl-1">Description</label>
            <textarea
              name="description"
              value={inputTrip.description}
              onChange={handleChange}
              className="border block w-full rounded pl-1 focus:outline-none mt-2"
              style={{
                backgroundColor: "rgba(196, 196, 196, 0.5)",
                borderColor: "#B1B1B1",
              }}
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className="font-bold pl-1">Image</label>
            {fileURL ? (
              <img src={fileURL} className="w-1/2" alt="image" />
            ) : (
              <div
                className="w-1/2 flex justify-center items-center text-center"
                style={{
                  backgroundColor: "lightgray",
                  height: "15em",
                }}
              >
                <span
                  style={{
                    color: "grey",
                    fontSize: "2em",
                    letterSpacing: "3px",
                    fontWeight: 400,
                  }}
                  className="px-1"
                >
                  PREVIEW IMAGE
                </span>
              </div>
            )}
            <input
              type="file"
              onChange={handleChangeImage}
              accept="image/*"
              className="mt-2"
            />
          </div>
          <div className="mt-16 flex justify-center">
            <button
              className="font-semibold px-12 py-1 text-white rounded"
              onClick={submitAddTrip}
              style={{ backgroundColor: "#FFAF00" }}
            >
              Add Trip
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddTripContent;
