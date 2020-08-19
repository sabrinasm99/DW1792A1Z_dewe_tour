import React from "react";
import HeaderPage from "../components/HeaderPage";
import ListTransactionContent from "../components/ListTransactionContent";
import Footer from "../components/Footer";
import { useQuery } from "react-query";
import axios from "axios";

function ListTransaction() {
  const getData = async () => {
    const result = await axios.get("http://localhost:5000/api/v1/orders");
    return result;
  };

  const { isLoading, data, error } = useQuery("orders", getData);
  if (isLoading)
    return (
      <div className="flex justify-center">
        <h1 className="text-2xl font-semibold">Loading...</h1>
      </div>
    );
  return (
    <>
      <HeaderPage />
      <ListTransactionContent posts={data} />
      <Footer />
    </>
  );
}

export default ListTransaction;
