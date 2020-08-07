import React from "react";
import icon from "../image/icon.svg";

function HeaderPage() {
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
        <div className="flex items-center ml-auto mr-2">
          <button
            // onClick={() => setShowModalLogin(true)}
            className="border border-white py-1 px-6 font-medium text-sm rounded-md"
          >
            Login
          </button>
        </div>
        <div className="flex items-center">
          <button
            // onClick={() => setShowModalRegister(true)}
            className="py-1 px-6 font-medium border text-sm rounded-md"
            style={{ backgroundColor: "#FFAF00", borderColor: "#FFAF00" }}
          >
            Register
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HeaderPage;
