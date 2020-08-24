import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import axios from "axios";
import HeaderPage from "../components/HeaderPage";
import DetailTripContent from "../components/DetailTripContent";
import Footer from "../components/Footer";
import hibiscus from "../image/hibiscus.svg";
import palm from "../image/palm.svg";

function DetailTrip({ setShowModalLogin, setShowModalRegister }) {
  const { id } = useParams();
  const getData = async () => {
    const result = await axios.get(`http://localhost:5000/api/v1/trip/${id}`);
    return result;
  };
  const { data, isLoading, error } = useQuery("detailTrip", getData);

  if (isLoading)
    return (
      <div className="flex justify-center">
        <h1 className="text-2xl font-semibold">Loading...</h1>
      </div>
    );
  return (
    <>
      <HeaderPage
        setShowModalLogin={setShowModalLogin}
        setShowModalRegister={setShowModalRegister}
      />
      <DetailTripContent posts={data} setShowModalLogin={setShowModalLogin} />
      <Footer />
      <div className="absolute" style={{ top: "33%", right: 0 }}>
        <img src={hibiscus} alt="hibiscus" />
      </div>
      <div className="absolute" style={{ top: "70%", left: 0 }}>
        <img src={palm} alt="palm" />
      </div>
    </>
  );
}

export default DetailTrip;
