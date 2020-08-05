import React, { useState } from "react";
import icon from "../image/icon.svg";
import hibiscusmodal from "../image/hibiscusmodal.svg";
import palmmodal from "../image/palmmodal.svg";

function HeaderHome() {
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const changeInputEmail = (event) => {
    const newInput = {
      ...input,
      email: event.target.value,
    };
    setInput(newInput);
  };
  const changeInputPassword = (event) => {
    const newInput = {
      ...input,
      password: event.target.value,
    };
    setInput(newInput);
  };
  const closeModalLogin = () => {
    setShowModalLogin(false);
  };

  let modalLogin = null;
  if (showModalLogin)
    modalLogin = (
      <React.Fragment>
        <div
          style={{
            position: "fixed",
            zIndex: 200,
            transform: "translate(-50%,-50%)",
            backgroundColor: "white",
            left: "50%",
            top: "50%",
            width: "350px",
            boxShadow: "1px 1px 8px black"
          }}
          className="rounded-md py-3 px-6"
        >
          <h1 className="text-black text-3xl font-bold mt-8">Login</h1>
          <div className="mt-12">
            <label className="text-black block text-left font-bold">
              Email
            </label>
            <input
              className="text-gray-800 w-full border pl-1 focus:outline-none rounded"
              style={{
                backgroundColor: "rgba(210, 210, 210, 0.25)",
                borderColor: "rgba(210, 210, 210, 0.25)",
              }}
              type="text"
              name="email"
              value={input.email}
              onChange={changeInputEmail}
            />
          </div>
          <div className="mt-5">
            <label className="text-black block text-left font-bold">
              Password
            </label>
            <input
              className="text-gray-800 w-full border pl-1 focus:outline-none rounded"
              style={{
                backgroundColor: "rgba(210, 210, 210, 0.25)",
                borderColor: "rgba(210, 210, 210, 0.25)",
              }}
              type="password"
              name="password"
              value={input.password}
              onChange={changeInputPassword}
            />
          </div>
          <div className="mt-8">
            <button
              className="w-full p-1 px-3 bg-purple-800 text-white focus:outline-none border rounded font-bold"
              style={{ backgroundColor: "#FFAF00", borderColor: "#FFAF00" }}
            >
              Login
            </button>
          </div>
          <h3 className="text-sm mt-3 font-light" style={{ color: "#B1B1B1" }}>
            Don't have an account? Click{" "}
            <h3 className="font-bold inline">Here</h3>
          </h3>
          <div className="absolute" style={{ top: 0, left: 0 }}>
            <img src={palmmodal} />
          </div>
          <div className="absolute" style={{ top: 0, right: 0 }}>
            <img src={hibiscusmodal} className="rounded-md" />
          </div>
        </div>
        <div
          onClick={closeModalLogin}
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
      </React.Fragment>
    );
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
              <button
                onClick={() => setShowModalLogin(true)}
                className="border border-white py-1 px-6 font-medium text-sm rounded-md"
              >
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
      {modalLogin}
    </React.Fragment>
  );
}

export default HeaderHome;
