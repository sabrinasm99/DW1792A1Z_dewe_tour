import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import icon from "../image/icon.svg";
import hibiscusmodal from "../image/hibiscusmodal.svg";
import palmmodal from "../image/palmmodal.svg";
import fotoprofile from "../image/fotoprofile.png";
import user from "../image/user.svg";
import bill from "../image/bill.svg";
import logout from "../image/logout.svg";
import triangle from "../image/triangle.svg";

function HeaderPage() {
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalRegister, setShowModalRegister] = useState(false);
  const [showModalUser, setShowModalUser] = useState(false);
  const [inputLogin, setInputLogin] = useState({
    email: "",
    password: "",
  });
  const [inputRegister, setInputRegister] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const [warning, setWarning] = useState("");
  const location = useLocation();
  const handleChangeLogin = (event) => {
    setInputLogin({
      ...inputLogin,
      [event.target.name]: event.target.value,
    });
  };
  const handleChangeRegister = (event) => {
    setInputRegister({
      ...inputRegister,
      [event.target.name]: event.target.value,
    });
  };
  const submitLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", inputLogin.email);
    alert("Success Login");
    setShowModalLogin(false);
  };
  const submitRegister = (event) => {
    event.preventDefault();
    if (!inputRegister.fullname) {
      setWarning("Please fill out this field");
    } else {
      alert("Success Register");
      setShowModalRegister(false);
    }
  };
  const closeModalLogin = () => {
    setShowModalLogin(false);
    const newInputLogin = {
      email: "",
      password: "",
    };
    setInputLogin(newInputLogin);
  };
  const closeModalRegister = () => {
    setShowModalRegister(false);
    const newInputRegister = {
      fullname: "",
      email: "",
      password: "",
      phone: "",
      address: "",
    };
    setInputRegister(newInputRegister);
    setWarning("");
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
            boxShadow: "1px 1px 8px black",
          }}
          className="rounded-md py-3 px-6"
        >
          <h1 className="text-black text-3xl font-bold mt-8 text-center">
            Login
          </h1>
          <div className="mt-12">
            <label className="text-black block font-bold">Email</label>
            <input
              className="text-gray-800 w-full border pl-1 focus:outline-none rounded"
              style={{
                backgroundColor: "rgba(210, 210, 210, 0.25)",
                borderColor: "rgba(210, 210, 210, 0.25)",
              }}
              type="text"
              name="email"
              value={inputLogin.email}
              onChange={handleChangeLogin}
            />
          </div>
          <div className="mt-5">
            <label className="text-black block font-bold">Password</label>
            <input
              className="text-gray-800 w-full border pl-1 focus:outline-none rounded"
              style={{
                backgroundColor: "rgba(210, 210, 210, 0.25)",
                borderColor: "rgba(210, 210, 210, 0.25)",
              }}
              type="password"
              name="password"
              value={inputLogin.password}
              onChange={handleChangeLogin}
            />
          </div>
          <div className="mt-8">
            <button
              onClick={submitLogin}
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

  let modalRegister = null;
  if (showModalRegister)
    modalRegister = (
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
            boxShadow: "1px 1px 8px black",
          }}
          className="rounded-md py-3 px-6"
        >
          <h1 className="text-black text-3xl font-bold mt-8 text-center">
            Register
          </h1>
          <div className="mt-12">
            <label className="text-black block font-bold">Full Name</label>
            <input
              className="text-gray-800 w-full border pl-1 focus:outline-none rounded"
              style={{
                backgroundColor: "rgba(210, 210, 210, 0.25)",
                borderColor: "rgba(210, 210, 210, 0.25)",
              }}
              type="text"
              name="fullname"
              value={inputRegister.fullname}
              onChange={handleChangeRegister}
            />
            <h3 className="text-red-600 text-sm">{warning}</h3>
          </div>
          <div className="mt-5">
            <label className="text-black block font-bold">Email</label>
            <input
              className="text-gray-800 w-full border pl-1 focus:outline-none rounded"
              style={{
                backgroundColor: "rgba(210, 210, 210, 0.25)",
                borderColor: "rgba(210, 210, 210, 0.25)",
              }}
              type="email"
              name="email"
              value={inputRegister.email}
              onChange={handleChangeRegister}
            />
          </div>
          <div className="mt-5">
            <label className="text-black block font-bold">Password</label>
            <input
              className="text-gray-800 w-full border pl-1 focus:outline-none rounded"
              style={{
                backgroundColor: "rgba(210, 210, 210, 0.25)",
                borderColor: "rgba(210, 210, 210, 0.25)",
              }}
              type="password"
              name="password"
              value={inputRegister.password}
              onChange={handleChangeRegister}
            />
          </div>
          <div className="mt-5">
            <label className="text-black block font-bold">Phone</label>
            <input
              className="text-gray-800 w-full border pl-1 focus:outline-none rounded"
              style={{
                backgroundColor: "rgba(210, 210, 210, 0.25)",
                borderColor: "rgba(210, 210, 210, 0.25)",
              }}
              type="number"
              name="phone"
              value={inputRegister.phone}
              onChange={handleChangeRegister}
            />
          </div>
          <div className="mt-5">
            <label className="text-black block font-bold">Address</label>
            <textarea
              className="text-gray-800 w-full border pl-1 focus:outline-none rounded"
              style={{
                backgroundColor: "rgba(210, 210, 210, 0.25)",
                borderColor: "rgba(210, 210, 210, 0.25)",
              }}
              name="address"
              value={inputRegister.address}
              onChange={handleChangeRegister}
            />
          </div>
          <div className="mt-8 mb-3">
            <button
              onClick={submitRegister}
              className="w-full p-1 px-3 bg-purple-800 text-white focus:outline-none border rounded font-bold"
              style={{ backgroundColor: "#FFAF00", borderColor: "#FFAF00" }}
            >
              Register
            </button>
          </div>
          <div className="absolute" style={{ top: 0, left: 0 }}>
            <img src={palmmodal} />
          </div>
          <div className="absolute" style={{ top: 0, right: 0 }}>
            <img src={hibiscusmodal} className="rounded-md" />
          </div>
        </div>
        <div
          onClick={closeModalRegister}
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
        className="relative w-full text-white"
        style={{
          backgroundImage: `url(${require("../image/pantai.png")})`,
          boxShadow: "rgba(0,0,0,0.5)",
          filter: "blur(1.8px)",
          height: "68px",
        }}
      ></div>

      <div className="absolute px-16 flex top-0 w-full text-white">
        <img src={icon} />
        {localStorage.getItem("email") ? (
          <div className="ml-auto flex items-center">
            <img src={fotoprofile} 
            className='cursor-pointer'
            onClick={() => setShowModalUser(!showModalUser)} />
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
        className={`${showModalUser ? 'block' : 'hidden'} absolute bg-white py-1 rounded font-bold`}
        style={{ top: "75px", left: "1172px" }}
      >
        <div className="px-6">
          <div className="flex py-1 cursor-pointer">
            <img src={user} className='mr-2' />
            <h2 className='flex items-center'>Profile</h2>
          </div>
          <div
            className="flex py-1 cursor-pointer"
          >
            <img src={bill} className='mr-2' />
            <h2 className=''>Pay</h2>
          </div>
        </div>
        <hr />
        <div className="px-6">
          <div className="flex py-1 cursor-pointer">
            <img src={logout} className='mr-2' />
            <h2>Logout</h2>
          </div>
        </div>
        <div className='absolute' style={{top:'-11px', right:'2px'}}>
          <img src={triangle} />
        </div>
      </div>
      {modalLogin}
      {modalRegister}
    </React.Fragment>
  );
}

export default HeaderPage;
