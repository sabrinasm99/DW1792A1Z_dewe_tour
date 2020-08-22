import React from "react";
import leaf from "../image/leaf.svg";
import { useLocation, useParams } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const { id } = useParams();
  return (
    <div
      className={`${
        location.pathname === "/list-transaction" ? "relative mt-64" :
        location.pathname === `/payment/${id}`
          ? "absolute bottom-0"
          : "relative mt-20"
      } w-full text-sm py-2 text-white text-center`}
      style={{ backgroundColor: "#FFAF00" }}
    >
      Copyright @ 2020 Dewe Tour - Sabrina - DW1792A1Z. All Rights reserved
      <div className="absolute" style={{ bottom: 0, right: 0 }}>
        <img src={leaf} alt="leaf" />
      </div>
    </div>
  );
}

export default Footer;
