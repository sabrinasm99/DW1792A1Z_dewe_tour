import React from "react";
import icon from "../image/icon.svg";

function HeaderHome() {
  return (
    <React.Fragment>
      <div
        className="w-full text-white"
        style={{
          backgroundImage: `url(${require("../image/pantai.png")})`,
          height: "535.4px",
        }}
      >
        <div className="px-16 relative">
          <div className="flex">
            <img src={icon} />
            <div className="flex items-center ml-auto mr-2">
              <button className="border border-white py-1 px-6 font-medium text-sm rounded-md">
                Login
              </button>
            </div>
            <div className="flex items-center">
              <button
                className="py-1 px-6 font-medium border text-sm rounded-md"
                style={{ backgroundColor: "#FFAF00", borderColor: "#FFAF00" }}
              >
                Register
              </button>
            </div>
          </div>
          <div className="mt-5 text-left">
            <h1
              style={{ fontSize: "60px" }}
              className="tracking-wide font-bold"
            >
              Explore
            </h1>
            <h2 style={{ fontSize: "60px" }} className="font-hairline">
              your amazing city together
            </h2>
          </div>
          <div className="mt-10">
            <h1 style={{ fontSize: "17px" }} className="text-left">
              Find great places to holiday
            </h1>
            <div className="flex mt-2 h-10">
              <input
                className="bg-white rounded-l-md text-gray-800 focus:outline-none pl-3"
                style={{ width: "90%" }}
                type="search"
              />
              <div
                className="rounded-r-md flex items-center justify-center font-medium text-lg"
                style={{ width: "10%", backgroundColor: "#FFAF00" }}
              >
                Search
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HeaderHome;
