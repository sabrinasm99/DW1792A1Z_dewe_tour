import React from "react";
import HeaderHome from "../components/HeaderHome";
import Footer from "../components/Footer";
import MixCards from "../components/MixCards";
import hibiscus from "../image/hibiscus.svg";
import palm from "../image/palm.svg";
import { useQuery } from "react-query";
import axios from "axios";

function Home({ setShowModalLogin, setShowModalRegister }) {
  const getData = async () => {
    const result = await axios.get("https://backend-dewetour.herokuapp.com/api/v1/trips");
    return result;
  };

  const { isLoading, data, error } = useQuery("trips", getData);
  if (isLoading)
    return (
      <div className="flex justify-center">
        <h1 className="text-2xl font-semibold">Loading...</h1>
      </div>
    );
  return (
    <>
      <HeaderHome
        setShowModalLogin={setShowModalLogin}
        setShowModalRegister={setShowModalRegister}
      />
      <MixCards tripCardsList={data} />
      <Footer />
      <div className="absolute" style={{ top: "68%", right: 0 }}>
        <img src={hibiscus} alt="hibiscus" />
      </div>
      <div className="absolute" style={{ top: "115%", left: 0 }}>
        <img src={palm} alt="palm" />
      </div>
    </>
  );
}

export default Home;
