import React from "react";
import HeaderPage from "../components/HeaderPage";
import IncomeTripContent from "../components/IncomeTripContent";
import Footer from "../components/Footer";
import { useQuery } from "react-query";
import axios from "axios";

function IncomeTrip() {
  const getData = async () => {
    const result = await axios.get("http://localhost:5000/api/v1/trip");
    return result;
  };

  const { isLoading, data } = useQuery("incomeTrip", getData);

  if (isLoading)
    return (
      <div className="flex justify-center">
        <h1 className="text-2xl font-semibold">Loading...</h1>
      </div>
    );
  return (
    <>
      <HeaderPage />
      <IncomeTripContent posts={data} />
      <Footer />
    </>
  );
}

export default IncomeTrip;
