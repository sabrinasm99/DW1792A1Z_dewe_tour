import React from "react";
import HeaderPage from "../components/HeaderPage";
import ListTransactionContent from "../components/ListTransactionContent";
import Footer from "../components/Footer";

function ListTransaction() {
  return (
    <>
      <HeaderPage />
      <ListTransactionContent />
      <Footer />
    </>
  );
}

export default ListTransaction;
