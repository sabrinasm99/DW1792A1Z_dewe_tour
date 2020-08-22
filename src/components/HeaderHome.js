import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import icon from "../image/icon.svg";
import fotoprofile from "../image/fotoprofile.png";
import user from "../image/user.svg";
import bill from "../image/bill.svg";
import logout from "../image/logout.svg";
import triangle from "../image/triangle.svg";
import journey from "../image/journey.svg";
import { FaUserCircle } from "react-icons/fa";

function HeaderHome({ setShowModalLogin, setShowModalRegister }) {
  const history = useHistory();
  const { image, orderId } = localStorage;

  const [showModalUser, setShowModalUser] = useState(false);
  const submitLogout = () => {
    localStorage.clear();
    setShowModalUser(!showModalUser);
    history.push("/");
  };

  return (
    <>
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
            {localStorage.email ? (
              <div className="ml-auto flex items-center">
                {image !== "null" ? (
                  <img
                    src={`http://localhost:5000/image/${image}`}
                    className="rounded-full border-2 cursor-pointer"
                    style={{
                      borderColor: "#FFAF00",
                      width: "50px",
                      height: "50px",
                    }}
                    onClick={() => setShowModalUser(!showModalUser)}
                  />
                ) : (
                  <FaUserCircle
                    className="text-gray-700 bg-white rounded-full border-2 cursor-pointer"
                    style={{
                      borderColor: "#FFAF00",
                      width: "44px",
                      height: "44px",
                    }}
                    onClick={() => setShowModalUser(!showModalUser)}
                  />
                )}
              </div>
            ) : (
              <>
                <div className="flex items-center ml-auto mr-2">
                  <button
                    onClick={() => setShowModalLogin(true)}
                    className="border border-white py-1 px-6 font-medium text-sm rounded-md"
                  >
                    Login
                  </button>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => setShowModalRegister(true)}
                    className="py-1 px-6 font-medium border text-sm rounded-md"
                    style={{
                      backgroundColor: "#FFAF00",
                      borderColor: "#FFAF00",
                    }}
                  >
                    Register
                  </button>
                </div>
              </>
            )}
          </div>
          <div className="mt-5">
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
            <h1 style={{ fontSize: "17px" }}>Find great places to holiday</h1>
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
      <div
        className={`${
          showModalUser && localStorage.role === "User" ? "block" : "hidden"
        } absolute bg-white py-3 rounded font-bold`}
        style={{ top: "75px", left: "1143px" }}
      >
        <div className="px-4">
          <Link to="/profile">
            <div className="flex py-1 px-3 cursor-pointer hover:bg-blue-200">
              <img src={user} className="mr-2" />
              <h2 className="flex items-center">Profile</h2>
            </div>
          </Link>
          <Link to={`/payment/${orderId}`}>
            <div className="flex py-1 px-3 cursor-pointer hover:bg-blue-200">
              <img src={bill} className="mr-2" />
              <h2 className="">Pay</h2>
            </div>
          </Link>
        </div>
        <hr />
        <div className="px-4">
          <div
            className="flex py-1 px-3 cursor-pointer hover:bg-blue-200"
            onClick={submitLogout}
          >
            <img src={logout} className="mr-2" />
            <h2>Logout</h2>
          </div>
        </div>
        <div className="absolute" style={{ top: "-11px", right: "2px" }}>
          <img src={triangle} />
        </div>
      </div>
      <div
        className={`${
          showModalUser && localStorage.role === "Admin" ? "block" : "hidden"
        } absolute bg-white py-3 rounded font-bold`}
        style={{ top: "75px", left: "1140px" }}
      >
        <div className="px-4">
          <Link to="/income-trip">
            <div className="flex py-1 px-3 cursor-pointer hover:bg-blue-200">
              <img src={journey} className="mr-2" />
              <h2 className="flex items-center">Trip</h2>
            </div>
          </Link>
        </div>
        <hr />
        <div className="px-4">
          <div
            className="flex py-1 px-3 cursor-pointer hover:bg-blue-200"
            onClick={submitLogout}
          >
            <img src={logout} className="mr-2" />
            <h2>Logout</h2>
          </div>
        </div>
        <div className="absolute" style={{ top: "-11px", right: "2px" }}>
          <img src={triangle} />
        </div>
      </div>
    </>
  );
}

export default HeaderHome;
