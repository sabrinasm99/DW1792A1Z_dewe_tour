import React from "react";
import { useHistory } from "react-router-dom";

function TripCards({ posts }) {
  const history = useHistory();
  const clickDetail = (id) => {
    history.push(`/detail-trip/${id}`);
  };
  let tripCardsList = null;
  if (posts)
    tripCardsList = posts.data.data.map((val) => {
      return (
        <div
          key={val.id}
          onClick={() => {
            clickDetail(val.id);
          }}
          className="bg-white rounded-md p-2 relative cursor-pointer"
        >
          <img
            src={`https://backend-dewetour.herokuapp.com/image/${val.image}`}
            alt={val.image}
            className="w-full"
          />
          <h4 className="text-black font-medium mt-1">{val.title}</h4>
          <div className="flex mt-2">
            <h4 className="font-medium w-1/2" style={{ color: "#FFAF00" }}>
              IDR. {val.price.toLocaleString()}
            </h4>
            <h4
              className="font-medium w-1/2 text-sm text-right"
              style={{ color: "#878787" }}
            >
              {val.country.name}
            </h4>
          </div>
          <div
            className="absolute bg-white text-black font-bold rounded-sm text-xs py-1 px-2"
            style={{ right: "1.4%", top: "9%" }}
          >
            {val.quota}
          </div>
        </div>
      );
    });
  return <div className="grid grid-cols-3 gap-20 mt-20">{tripCardsList}</div>;
}

export default TripCards;
