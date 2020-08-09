import React from "react";
import Cards from "./Cards";
import TripCards from "./TripCards";
import { cardList } from "../fakedata/Cards";
import { tripCardList } from "../fakedata/TripCards";

function MixCards() {
  return (
    <div className="relative" style={{ top: "-45px" }}>
      <div style={{ paddingRight: "115px", paddingLeft: "115px" }}>
        <Cards posts={cardList} />
        <div className="mt-20 px-5">
          <h2 className="text-center text-3xl font-bold">Group Tour</h2>
          <TripCards posts={tripCardList} />
        </div>
      </div>
    </div>
  );
}

export default MixCards;
