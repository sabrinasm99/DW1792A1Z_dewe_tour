import React from "react";
import HeaderPage from "../components/HeaderPage";
import { tripCardList } from "../fakedata/TripCards";
import DetailTripContent from "../components/DetailTripContent";
import Footer from "../components/Footer";
import hibiscus from "../image/hibiscus.svg";
import palm from "../image/palm.svg";

function DetailTrip() {
  return (
    <>
      <HeaderPage />
      <DetailTripContent posts={tripCardList} />
      <Footer />
      <div className="absolute" style={{ top: "33%", right: 0 }}>
        <img src={hibiscus} />
      </div>
      <div className="absolute" style={{ top: "70%", left: 0 }}>
        <img src={palm} />
      </div>
    </>
  );
}

export default DetailTrip;
