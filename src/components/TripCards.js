import React from "react";
import { Link } from "react-router-dom";

function TripCards(props) {
  let tripCardList = props.posts.map((val) => {
    return (
      <Link key={val.id} to="/detail-trip">
        <div className="bg-white rounded-md p-2 relative">
          <img src={val.img} className="w-full" />
          <h4 className="text-black font-medium mt-1">{val.title}</h4>
          <div className="flex mt-2">
            <h4 className="font-medium w-1/2" style={{ color: "#FFAF00" }}>
              {val.price}
            </h4>
            <h4
              className="font-medium w-1/2 text-sm text-right"
              style={{ color: "#878787" }}
            >
              {val.country}
            </h4>
          </div>
          <div
            className="absolute bg-white text-black font-bold rounded-sm text-xs py-1 px-2"
            style={{ right: "1.4%", top: "9%" }}
          >
            {val.code}
          </div>
        </div>
      </Link>
    );
  });
  return <div className="grid grid-cols-3 gap-20 mt-20">{tripCardList}</div>;
}

export default TripCards;
