import React from "react";
import HeaderPage from "../components/HeaderPage";
import Footer from "../components/Footer";
import PaymentContent from "../components/PaymentContent";
import { useQuery } from "react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

function Payment() {
  const { id } = useParams();
  const { token } = localStorage;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const getData = async () => {
    const result = await axios.get(
      `http://localhost:5000/api/v1/transaction/${id}`, config
    );
    return result;
  };
  const { isLoading, data, error } = useQuery("detailTransaction", getData);
  if (isLoading)
    return (
      <div className="flex justify-center">
        <h1 className="text-2xl font-semibold">Loading...</h1>
      </div>
    );
  console.log(data);
  return (
    <>
      <HeaderPage />
      <PaymentContent posts={data} />
      <Footer />
    </>
  );
}

export default Payment;
