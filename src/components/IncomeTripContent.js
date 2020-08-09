import React from "react";
import { Link } from "react-router-dom";
import TripCards from "../components/TripCards";
import { tripCardList } from "../fakedata/TripCards";

function IncomeTripContent() {
  return (
    <>
      <div className="mt-20">
        <div className="px-32">
          <div className="flex">
            <h1 className="text-2xl font-bold">Income Trip</h1>
            <div className="ml-auto flex items-center">
              <Link to="/add-trip">
                <button
                  className="text-white text-sm font-semibold py-1 px-6 rounded focus:outline-none"
                  style={{ backgroundColor: "#FFAF00" }}
                >
                  Add Trip
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="px-40 -mt-12">
          <TripCards posts={tripCardList} />
        </div>
      </div>
    </>
  );
}

export default IncomeTripContent;
