import React from "react";
import leaf from "../image/leaf.svg";
import { useLocation, useParams } from "react-router-dom";

function Footer({ posts }) {
  const location = useLocation();
  const { id } = useParams();

  return (
    <div
      className={`${
        location.pathname === "/list-transaction" && posts.length > 4
          ? "relative mt-32"
          : location.pathname === "/list-transaction" && posts.length <= 4
          ? "absolute bottom-0"
          : location.pathname === `/payment/${id}` && posts.length > 0
          ? "relative mt-24"
          : location.pathname === `/payment/${id}` && posts.length === 0
          ? "absolute bottom-0"
          : location.pathname === "/profile"
          ? "relative mt-32"
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
