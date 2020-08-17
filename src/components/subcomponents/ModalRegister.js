import React, { useState } from "react";
import hibiscusmodal from "../../image/hibiscusmodal.svg";
import palmmodal from "../../image/palmmodal.svg";

function ModalRegister({setShowModalRegister}) {
  const [inputRegister, setInputRegister] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const [warning, setWarning] = useState("");
  const handleChangeRegister = (event) => {
    setInputRegister({
      ...inputRegister,
      [event.target.name]: event.target.value,
    });
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

//   const closeModalRegister = () => {
//     setShowModalRegister(false);
//     const newInputRegister = {
//       fullname: "",
//       email: "",
//       password: "",
//       phone: "",
//       address: "",
//     };
//     setInputRegister(newInputRegister);
//     setWarning("");
//   };
  return (
    <>
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
        onClick={() => setShowModalRegister(false)}
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
    </>
  );
}

export default ModalRegister;
