import React from "react";
import MenuCards from "./subcomponents/MenuCards";
import TripCards from "./subcomponents/TripCards";
import { cardList } from "../fakedata/MenuCards";
import { useSelector } from "react-redux";

function MixCards({ tripCardsList }) {
  const search = useSelector((state) => state.search);
  let filter = null;
  if (search.isChanged) {
    filter = search.payload;
  }
  return (
    <div className="relative" style={{ top: "-45px" }}>
      <div style={{ paddingRight: "115px", paddingLeft: "115px" }}>
        <MenuCards posts={cardList} />
        <div className="mt-20 px-5">
          <h2 className="text-center text-3xl font-bold">Group Tour</h2>
          <TripCards posts={filter ? filter : tripCardsList} />
        </div>
      </div>
    </div>
  );
}

export default MixCards;
