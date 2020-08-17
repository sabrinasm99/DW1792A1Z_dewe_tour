import React, { useState } from "react";

function AddTripContent({ posts }) {
  const [newTrip, setNewTrip] = useState({
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
  const handleChange = (e) => {
    setNewTrip({ ...newTrip, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="mt-20 px-24">
        <h1 className="text-2xl font-bold">Add Trip</h1>
      </div>
      <div className="mt-8 px-32 w-full">
        <form>
          <div>
            <label className="font-bold pl-1">Title Trip</label>
            <input
              type="text"
              name="title"
              value={newTrip.title}
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
              className="border block w-full rounded pl-1 focus:outline-none mt-2"
              style={{
                backgroundColor: "rgba(196, 196, 196, 0.5)",
                borderColor: "#B1B1B1",
              }}
            >
              <option> </option>
              {posts.data.data.map((val) => {
                return (
                  <option key={val.id} name="countryId" value={val.id}>
                    {val.id}: {val.name}
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
              value={newTrip.accomodation}
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
              value={newTrip.transportation}
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
              value={newTrip.eat}
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
                  value={newTrip.day}
                  onChange={handleChange}
                  className="border block rounded focus:outline-none mr-3"
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
                  value={newTrip.night}
                  onChange={handleChange}
                  className="border block rounded focus:outline-none mr-3"
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
              value={newTrip.dateTrip}
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
              value={newTrip.price}
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
              value={newTrip.quota}
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
              value={newTrip.description}
              onChange={handleChange}
              className="border block w-full rounded pl-1 focus:outline-none mt-2"
              style={{
                backgroundColor: "rgba(196, 196, 196, 0.5)",
                borderColor: "#B1B1B1",
              }}
            />
          </div>
          <div className="relative mt-5">
            <label className="font-bold pl-1">Image</label>
            <input
              type="file"
              className="border block rounded focus:outline-none mt-2"
              style={{
                backgroundColor: "rgba(196, 196, 196, 0.5)",
                borderColor: "#B1B1B1",
              }}
            />
          </div>
          <div className="mt-16 flex justify-center">
            <button
              className="font-semibold px-12 py-1 text-white rounded"
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
