import React from "react";
import HeaderPage from "../components/HeaderPage";
import Footer from "../components/Footer";
import AddTripContent from "../components/AddTripContent";
import { useQuery } from "react-query";
import axios from "axios";

function AddTrip() {
  const getData = async () => {
    const result = await axios.get("https://backend-dewetour.herokuapp.com/api/v1/countries");
    return result;
  };

  const { isLoading, data } = useQuery("addTrip", getData);

  if (isLoading)
    return (
      <div className="flex justify-center">
        <h1 className="text-2xl font-semibold">Loading...</h1>
      </div>
    );
  return (
    <>
      <HeaderPage />
      <AddTripContent posts={data} />
      <Footer />
    </>
  );
}

export default AddTrip;
