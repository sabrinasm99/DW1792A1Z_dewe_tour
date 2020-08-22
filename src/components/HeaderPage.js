import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import icon from "../image/icon.svg";
import fotoprofile from "../image/fotoprofile.png";
import user from "../image/user.svg";
import bill from "../image/bill.svg";
import logout from "../image/logout.svg";
import triangle from "../image/triangle.svg";
import journey from "../image/journey.svg";
import { FaUserCircle } from "react-icons/fa";

function HeaderPage({ setShowModalLogin, setShowModalRegister }) {
  const [showModalUser, setShowModalUser] = useState(false);
  const history = useHistory();
  const { role, image, orderId } = localStorage;

  const submitLogout = () => {
    localStorage.clear();
    setShowModalUser(!showModalUser);
    history.push("/");
  };

  return (
    <>
      <div
        className="relative w-full text-white"
        style={{
          backgroundImage: `url(${require("../image/pantai.png")})`,
          boxShadow: "rgba(0,0,0,0.5)",
          filter: "blur(1.8px)",
          height: "68px",
        }}
      ></div>

      <div className="absolute px-16 flex top-0 w-full text-white">
        <Link to={role === "Admin" ? "/list-transaction" : "/"}>
          <img src={icon} />
        </Link>
        {localStorage.getItem("email") ? (
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
                style={{ backgroundColor: "#FFAF00", borderColor: "#FFAF00" }}
              >
                Register
              </button>
            </div>
          </>
        )}
      </div>
      <div
        className={`${
          showModalUser && localStorage.role === "User" ? "block" : "hidden"
        } absolute bg-white py-1 rounded font-bold`}
        style={{ top: "75px", left: "1150px" }}
      >
        <div className="px-6">
          <Link to="/profile">
            <div className="flex py-1 cursor-pointer">
              <img src={user} className="mr-2" />
              <h2 className="flex items-center">Profile</h2>
            </div>
          </Link>
          <Link to={`/payment/${orderId}`}>
            <div className="flex py-1 cursor-pointer">
              <img src={bill} className="mr-2" />
              <h2 className="">Pay</h2>
            </div>
          </Link>
        </div>
        <hr />
        <div className="px-6">
          <div className="flex py-1 cursor-pointer" onClick={submitLogout}>
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
        } absolute bg-white py-1 rounded font-bold`}
        style={{ top: "75px", left: "1150px" }}
      >
        <div className="px-6">
          <Link to="/income-trip">
            <div className="flex py-1 cursor-pointer">
              <img src={journey} className="mr-2" />
              <h2 className="flex items-center">Trip</h2>
            </div>
          </Link>
        </div>
        <hr />
        <div className="px-6">
          <div className="flex py-1 cursor-pointer" onClick={submitLogout}>
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

export default HeaderPage;
